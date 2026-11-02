// Copies curated project photography from the source archive into public/projects,
// then writes data/projectImages.generated.ts and IMAGE_IMPORT_REPORT.md.
//
//   npm run import:images               Import, using the curated decisions
//   npm run import:images -- --dry-run  Show the outcome and write nothing to public/
//   npm run import:images -- --sheets   Make contact sheets of images not yet reviewed
//
// The source directory is only ever read. See "How the import works" in the report.

import { mkdir, readdir, readFile, rename, rmdir, stat, unlink, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import {
  DEFAULT_SOURCE,
  FOLDER_DECISIONS,
  LOW_RES_LONG_EDGE,
  MIN_LONG_EDGE,
  NEAR_DUPLICATE_DISTANCE,
  OUTPUT,
  PROJECT_NOTES,
} from "./image-import.config.mjs";
import { buildMatcher, hammingDistance, inspectImages, isImageFile, loadProjects, walkFiles } from "./image-import-lib.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SOURCE = path.resolve(process.env.BAM_IMAGE_SOURCE || DEFAULT_SOURCE);
const PUBLIC_PROJECTS = path.join(ROOT, "public", "projects");
const DECISIONS_PATH = path.join(ROOT, "scripts", "image-import.decisions.json");
const MANIFEST_PATH = path.join(ROOT, "scripts", ".image-import-manifest.json");
const CACHE_PATH = process.env.BAM_IMAGE_CACHE || path.join(ROOT, "scripts", ".image-import-cache.json");
const GENERATED_PATH = path.join(ROOT, "data", "projectImages.generated.ts");
const REPORT_PATH = path.join(ROOT, "IMAGE_IMPORT_REPORT.md");
const SHEETS_DIR = process.env.BAM_SHEETS_DIR || path.join(ROOT, ".image-import-review");

const DRY_RUN = process.argv.includes("--dry-run");
const MAKE_SHEETS = process.argv.includes("--sheets");

const shortSha = (sha) => sha.slice(0, 16);
const toPosix = (value) => value.split(path.sep).join("/");
const CLASSES = ["exterior", "interior", "other"];

// ---------------------------------------------------------------- Folders

// Decides what every source folder holds. The most specific folder wins.
async function discoverFolders(match) {
  const folders = new Map();

  async function visit(directory, relative) {
    const entries = await readdir(directory, { withFileTypes: true });
    for (const entry of entries.filter((item) => item.isDirectory())) {
      const childRelative = relative ? `${relative}/${entry.name}` : entry.name;
      const child = path.join(directory, entry.name);
      const decision = FOLDER_DECISIONS[childRelative];
      const result = match(entry.name);

      if (decision) {
        folders.set(childRelative, {
          status: decision.project ? "matched" : decision.ignore ? "ignored" : "review",
          codes: decision.project ? [decision.project] : decision.candidates ?? [],
          how: decision.reason,
        });
        await visitDecisionsBelow(child, childRelative);
      } else if (result.codes.length === 1 && result.how !== "contains project name") {
        folders.set(childRelative, { status: "matched", codes: result.codes, how: result.how });
        await visitDecisionsBelow(child, childRelative);
      } else if (result.codes.length > 0) {
        folders.set(childRelative, {
          status: "review",
          codes: result.codes,
          how:
            result.how === "contains project name"
              ? "Folder name adds words to a project name, so it may be a different building"
              : `${result.how}: more than one project fits`,
        });
        await visitDecisionsBelow(child, childRelative);
      } else {
        const hasSubfolders = (await readdir(child, { withFileTypes: true })).some((item) => item.isDirectory());
        folders.set(childRelative, { status: "unmatched", codes: [], how: result.how });
        if (hasSubfolders) await visit(child, childRelative);
      }
    }
  }

  // A decision can still apply to a subfolder of a folder that already has a status.
  async function visitDecisionsBelow(directory, relative) {
    for (const [key, decision] of Object.entries(FOLDER_DECISIONS)) {
      if (key.startsWith(`${relative}/`)) {
        folders.set(key, {
          status: decision.project ? "matched" : decision.ignore ? "ignored" : "review",
          codes: decision.project ? [decision.project] : decision.candidates ?? [],
          how: decision.reason,
        });
      }
    }
  }

  await visit(SOURCE, "");
  return folders;
}

function folderOf(relativeFile, folders) {
  const parts = toPosix(relativeFile).split("/");
  for (let length = parts.length - 1; length > 0; length--) {
    const key = parts.slice(0, length).join("/");
    if (folders.has(key)) return { key, ...folders.get(key) };
  }
  return { key: "(top level)", status: "unmatched", codes: [], how: "File is not in a folder" };
}

// ---------------------------------------------------------------- Filtering

const IGNORED_REASON = [
  [/^thumbs\.db$|^\.ds_store$|^desktop\.ini$|^~\$|^\._/i, "System or temporary file"],
  [/\.(arw|cr2|nef|dng|xmp)$/i, "Camera raw file"],
  [/\.(heic|heif|jfif|bmp)$/i, "Image format outside the supported list"],
  [/\.(mp4|mov|avi)$/i, "Video"],
  [/\.(psd|ai|indd)$/i, "Design source file"],
  [/\.(pdf|docx?|xlsx?|pptx?)$/i, "Document"],
];

const ignoredReason = (file) => IGNORED_REASON.find(([pattern]) => pattern.test(path.basename(file)))?.[1] ?? "Unsupported file type";

const LOW_VALUE_NAME = /(whatsapp|-wa\d{3,}|screenshot|screen shot|thumbnail|\bthumb\b|_thumb|telegram|photo_\d{4}-\d{2}-\d{2})/i;

function automaticSkipReason(relativeFile, info) {
  if (info.error) return `Could not be read (${info.error})`;
  if (Math.max(info.width, info.height) < MIN_LONG_EDGE) return `Too small (${info.width}×${info.height})`;
  if (LOW_VALUE_NAME.test(path.basename(relativeFile))) return "Thumbnail, screenshot or messaging-app copy";
  return null;
}

// Keeps the best version of each set of identical or near-identical images.
function removeDuplicates(images) {
  const sorted = [...images].sort(
    (a, b) => b.info.width * b.info.height - a.info.width * a.info.height || b.info.size - a.info.size || a.relative.localeCompare(b.relative)
  );
  const kept = [];
  const duplicates = [];
  for (const image of sorted) {
    const original = kept.find(
      (other) => other.info.sha === image.info.sha || hammingDistance(other.info.dhash, image.info.dhash) <= NEAR_DUPLICATE_DISTANCE
    );
    if (original) duplicates.push({ image, of: original, identical: original.info.sha === image.info.sha });
    else kept.push(image);
  }
  return { kept, duplicates };
}

// ---------------------------------------------------------------- Classification

const INTERIOR_WORDS = /(lobby|lobi|pool|interior|inside|لابی|استخر|داخلی|سالن|gym|spa)/i;
const EXTERIOR_WORDS = /(nama|facade|exterior|elevation|نما|بیرونی)/i;

// Only for images nobody has reviewed yet: a filename is weak evidence, so unknowns
// go to "other", which the site does not display.
function guessClass(relativeFile) {
  if (INTERIOR_WORDS.test(relativeFile)) return "interior";
  if (EXTERIOR_WORDS.test(relativeFile)) return "exterior";
  return "other";
}

async function loadDecisions() {
  try {
    return JSON.parse(await readFile(DECISIONS_PATH, "utf8"));
  } catch {
    return { import: {}, skip: {}, renders: [] };
  }
}

function indexDecisions(decisions) {
  const chosen = new Map();
  for (const [code, groups] of Object.entries(decisions.import ?? {})) {
    for (const className of CLASSES) {
      (groups[className] ?? []).forEach((sha, rank) => chosen.set(sha, { code, className, rank }));
    }
  }
  const skipped = new Map();
  for (const [reason, shas] of Object.entries(decisions.skip ?? {})) for (const sha of shas) skipped.set(sha, reason);
  return { chosen, skipped, renders: new Set(decisions.renders ?? []), insets: decisions.inset ?? {} };
}

// ---------------------------------------------------------------- Contact sheets

const SHEET = { columns: 8, rows: 6, tileWidth: 220, tileHeight: 165, label: 20 };

async function makeTile(image, number) {
  const { tileWidth, tileHeight, label } = SHEET;
  const body = await sharp(path.join(SOURCE, image.relative), { failOn: "none" })
    .rotate()
    .resize(tileWidth - 4, tileHeight - 4, { fit: "contain", background: "#222222" })
    .jpeg({ quality: 70 })
    .toBuffer();
  const caption = Buffer.from(
    `<svg width="${tileWidth}" height="${label}"><rect width="100%" height="100%" fill="#000"/><text x="6" y="16" font-family="Arial" font-size="13" fill="#fff">${number}  ·  ${image.info.width}×${image.info.height}</text></svg>`
  );
  return sharp({ create: { width: tileWidth, height: tileHeight + label, channels: 3, background: "#222222" } })
    .composite([{ input: caption, top: 0, left: 0 }, { input: body, top: label + 2, left: 2 }])
    .jpeg({ quality: 75 })
    .toBuffer();
}

async function writeSheets(name, images) {
  const { columns, rows, tileWidth, tileHeight, label } = SHEET;
  const perSheet = columns * rows;
  const index = [];
  for (let start = 0, sheet = 1; start < images.length; start += perSheet, sheet++) {
    const page = images.slice(start, start + perSheet);
    const tiles = [];
    for (const [offset, image] of page.entries()) {
      const number = start + offset + 1;
      index.push({ number, sheet, sha: shortSha(image.info.sha), file: image.relative, width: image.info.width, height: image.info.height });
      try {
        tiles.push({ input: await makeTile(image, number), left: (offset % columns) * tileWidth, top: Math.floor(offset / columns) * (tileHeight + label) });
      } catch (error) {
        console.warn(`  Could not draw ${image.relative}: ${error.message}`);
      }
    }
    const height = Math.ceil(page.length / columns) * (tileHeight + label);
    await sharp({ create: { width: columns * tileWidth, height, channels: 3, background: "#111111" } })
      .composite(tiles)
      .jpeg({ quality: 78 })
      .toFile(path.join(SHEETS_DIR, `${name}-${String(sheet).padStart(2, "0")}.jpg`));
  }
  await writeFile(path.join(SHEETS_DIR, `${name}.json`), JSON.stringify(index, null, 1));
  return Math.ceil(images.length / perSheet);
}

// ---------------------------------------------------------------- Output

async function loadManifest() {
  try {
    return JSON.parse(await readFile(MANIFEST_PATH, "utf8")).files ?? {};
  } catch {
    return {};
  }
}

const exists = (file) => stat(file).then(() => true, () => false);

// inset trims a printed border, as a fraction of each side.
async function writeImage(sourceFile, destination, profile, inset) {
  await mkdir(path.dirname(destination), { recursive: true });
  const temporary = `${destination}.tmp`;
  let pipeline = sharp(sourceFile, { failOn: "none" }).rotate();
  if (inset) {
    const upright = await pipeline.toBuffer();
    const { width, height } = await sharp(upright).metadata();
    pipeline = sharp(upright).extract({
      left: Math.round(width * inset),
      top: Math.round(height * inset),
      width: Math.round(width * (1 - 2 * inset)),
      height: Math.round(height * (1 - 2 * inset)),
    });
  }
  await pipeline
    .resize({ width: profile.longEdge, height: profile.longEdge, fit: "inside", withoutEnlargement: true })
    .jpeg({ quality: profile.quality, mozjpeg: true })
    .toFile(temporary);
  await rename(temporary, destination);
}

// Chooses file names, reusing unchanged output and never touching a file this
// script did not create.
async function buildPlan(project, selection, manifest, notes) {
  const plan = [];
  const paths = { exterior: [], interior: [], other: [] };
  for (const className of CLASSES) {
    let number = 0;
    for (const image of selection[className]) {
      let relative;
      do {
        number++;
        relative = `public/projects/${project.slug}/${className}/${className}-${String(number).padStart(2, "0")}.jpg`;
        if (!manifest[relative] && (await exists(path.join(ROOT, relative)))) {
          notes.push(`${relative} already exists and was not made by this script, so it was left alone.`);
          relative = null;
        }
      } while (!relative);
      plan.push({ relative, image, profile: OUTPUT[className] });
      paths[className].push(`/${relative.replace(/^public\//, "")}`);
    }
  }
  const coverSource = selection.exterior[0];
  const card = coverSource ? `public/projects/${project.slug}/card.jpg` : null;
  if (coverSource) plan.push({ relative: card, image: coverSource, profile: OUTPUT.card });
  return { plan, paths, card: card && `/${card.replace(/^public\//, "")}` };
}

const profileKey = (profile, inset) => `${profile.longEdge}/${profile.quality}${inset ? `/inset-${inset}` : ""}`;

async function applyPlan(plan, manifest, insets) {
  const next = {};
  let written = 0;
  let unchanged = 0;
  for (const [position, item] of plan.entries()) {
    const destination = path.join(ROOT, item.relative);
    const inset = insets[shortSha(item.image.info.sha)];
    const entry = { sourceSha: item.image.info.sha, profile: profileKey(item.profile, inset) };
    const previous = manifest[item.relative];
    const upToDate = previous && previous.sourceSha === entry.sourceSha && previous.profile === entry.profile && (await exists(destination));
    if (upToDate) unchanged++;
    else {
      await writeImage(path.join(SOURCE, item.image.relative), destination, item.profile, inset);
      written++;
    }
    next[item.relative] = entry;
    if ((position + 1) % 25 === 0) console.log(`  ${position + 1}/${plan.length} images processed`);
  }
  let removed = 0;
  for (const relative of Object.keys(manifest)) {
    if (next[relative]) continue;
    const destination = path.join(ROOT, relative);
    if (await exists(destination)) {
      await unlink(destination);
      removed++;
    }
    await rmdir(path.dirname(destination)).catch(() => {});
    await rmdir(path.dirname(path.dirname(destination))).catch(() => {});
  }
  await writeFile(MANIFEST_PATH, JSON.stringify({ files: next }, null, 1));
  return { written, unchanged, removed };
}

function generatedModule(results) {
  const entries = results
    .filter((result) => result.paths.exterior.length || result.paths.interior.length || result.paths.other.length)
    .map((result) => {
      const images = {
        ...(result.paths.exterior[0] ? { cover: result.paths.exterior[0], card: result.card } : {}),
        exterior: result.paths.exterior,
        interior: result.paths.interior,
        ...(result.paths.other.length ? { other: result.paths.other } : {}),
      };
      return `  ${result.project.code}: ${JSON.stringify(images, null, 2).replace(/\n/g, "\n  ")},`;
    });
  return [
    "// Generated by scripts/import-project-images.mjs. Do not edit by hand: run `npm run import:images`.",
    'import type { ProjectImages } from "./projects";',
    "",
    "export const importedProjectImages: Partial<Record<string, ProjectImages>> = {",
    ...entries,
    "};",
    "",
  ].join("\n");
}

// ---------------------------------------------------------------- Report

// A folder with only unmatched folders below it counts once, with its total.
function unmatchedGroups(folders, imageCount) {
  const unmatched = [...folders].filter(([, folder]) => folder.status === "unmatched").map(([key]) => key);
  const below = (key) => [...folders].filter(([other]) => other.startsWith(`${key}/`));
  const isWhole = (key) => below(key).every(([, folder]) => folder.status === "unmatched");
  const parentOf = (key) => key.split("/").slice(0, -1).join("/");
  return unmatched
    .filter((key) => isWhole(key) && !(unmatched.includes(parentOf(key)) && isWhole(parentOf(key))))
    .map((key) => ({ key, count: imageCount(key) + below(key).reduce((sum, [other]) => sum + imageCount(other), 0) }))
    .filter(({ count }) => count > 0);
}

function decisionsSummary({ results }) {
  const narenjestan = results.find((result) => result.project.code === "R18");
  if (!narenjestan?.sourceFolders.some((key) => key.startsWith("سعادت آباد پاسداران"))) return "";
  return `**One folder holds two buildings.** \`سعادت آباد پاسداران\` is mostly BAM Sepid, but several of its photographs show a "BAM NARENJESTAN 27" nameplate, so those were assigned to BAM Narenjestan individually.`;
}

function renderReport(context) {
  const { results, folders, projects, filesByFolder, ignoredFiles, notes, outcome, unreviewedCount } = context;
  const withImages = results.filter((result) => result.paths.exterior.length || result.paths.interior.length || result.paths.other.length);
  const withoutImages = results.filter((result) => !withImages.includes(result));
  const list = (status) => [...folders].filter(([, folder]) => folder.status === status);
  const titleOf = (code) => projects.find((project) => project.code === code)?.titleEn ?? code;
  const imageCount = (key) => filesByFolder.get(key) ?? 0;
  const total = (name) => withImages.reduce((sum, result) => sum + result.paths[name].length, 0);

  const lines = [
    "# Image import report",
    "",
    `Source: \`${SOURCE}\``,
    "",
    "This file is rewritten by `npm run import:images`.",
    "",
    "## Summary",
    "",
    `- Source folders matched to a project: **${list("matched").length}**`,
    `- Projects with imported images: **${withImages.length}** of ${projects.length}`,
    `- Projects without source images: **${withoutImages.length}**`,
    `- Unmatched source folders: **${unmatchedGroups(folders, imageCount).length}**`,
    `- Folders needing manual review: **${list("review").length}**`,
    `- Folders set aside as not project photography: **${list("ignored").length}**`,
    `- Images imported: **${total("exterior")}** exterior, **${total("interior")}** interior, **${total("other")}** other`,
    `- Images flagged as not visually reviewed: **${unreviewedCount}**`,
    "",
  ];
  if (outcome) lines.push(`Last run: ${outcome.written} images written, ${outcome.unchanged} unchanged, ${outcome.removed} removed.`, "");
  if (notes.length) lines.push("## Notes", "", ...notes.map((note) => `- ${note}`), "");

  const rendersOnly = withImages.filter((result) => result.renderCount === result.total);
  const someRenders = withImages.filter((result) => result.renderCount > 0 && result.renderCount < result.total);
  const lowResCovers = withImages.filter((result) => result.lowResCover);
  lines.push("## Worth checking", "");
  if (rendersOnly.length) lines.push(`**Showing architectural renders only, because the archive holds no photographs:** ${rendersOnly.map((result) => result.project.titleEn).join(", ")}.`, "");
  if (someRenders.length) lines.push(`**Showing some renders alongside photographs:** ${someRenders.map((result) => result.project.titleEn).join(", ")}.`, "");
  if (lowResCovers.length) lines.push(`**Hero image under ${LOW_RES_LONG_EDGE}px, so it will look soft on a large screen:** ${lowResCovers.map((result) => result.project.titleEn).join(", ")}.`, "");
  const projectNotes = Object.entries(PROJECT_NOTES).map(([code, note]) => `- **${titleOf(code)}:** ${note}`);
  if (projectNotes.length) lines.push("**Limits of the archive:**", "", ...projectNotes, "");

  const evidence = Object.entries(FOLDER_DECISIONS).filter(([, decision]) => decision.project);
  lines.push("## Folders assigned on evidence", "", "The folder name alone could not decide these. A photograph, a duplicate file or a subfolder name did.", "");
  for (const [key, decision] of evidence) lines.push(`- \`${key}\` → **${titleOf(decision.project)}**. ${decision.reason}.`);
  lines.push("");
  const singles = decisionsSummary(context);
  if (singles) lines.push(singles, "");

  lines.push("## Imported projects", "");
  for (const result of withImages) {
    lines.push(`### ${result.project.titleEn}`, "", "```text");
    lines.push(`${result.project.titleEn}`);
    lines.push(`Source folder: ${result.sourceFolders.join(" | ") || "(selected images only)"}`);
    lines.push(`Exterior imported: ${result.paths.exterior.length}`);
    lines.push(`Interior imported: ${result.paths.interior.length}`);
    lines.push(`Other imported: ${result.paths.other.length}`);
    lines.push(`Cover selected: ${result.paths.exterior[0] ? path.posix.basename(result.paths.exterior[0]) : "none (no exterior image)"}`);
    lines.push("```", "");
    if (result.flags.length) lines.push(...result.flags.map((flag) => `- ${flag}`), "");
    const reasons = Object.entries(result.skipCounts).sort((a, b) => b[1] - a[1]);
    if (reasons.length) lines.push("Skipped:", "", ...reasons.map(([reason, count]) => `- ${count} — ${reason}`), "");
  }

  lines.push("## Projects without source images", "");
  if (withoutImages.length === 0) lines.push("None.", "");
  for (const result of withoutImages) {
    const why = result.flags.length ? ` ${result.flags.join(" ")}` : "";
    lines.push(`- **${result.project.titleEn}** (${result.project.titleFa})${why}`);
  }
  lines.push("");

  lines.push("## Unmatched source folders", "", "No project in `data/projects.ts` matches these folders. Nothing was imported from them.", "");
  for (const { key, count } of unmatchedGroups(folders, imageCount)) lines.push(`- \`${key}\` — ${count} images`);
  if (imageCount("(top level)") > 0) lines.push(`- Files directly in the source folder — ${imageCount("(top level)")} images`);
  lines.push("");

  lines.push(
    "## Needs manual review",
    "",
    "These may belong to a project, but the evidence is not strong enough to risk the wrong building. Nothing was imported from them.",
    "To resolve one, add it to `FOLDER_DECISIONS` in `scripts/image-import.config.mjs`, then rerun the import.",
    ""
  );
  for (const [key, folder] of list("review")) {
    const candidates = folder.codes.length ? ` Candidates: ${folder.codes.map(titleOf).join(", ")}.` : "";
    lines.push(`- \`${key}\` — ${imageCount(key)} images. ${folder.how}.${candidates}`);
  }
  lines.push("");

  lines.push("## Set aside as not project photography", "");
  for (const [key, folder] of list("ignored")) lines.push(`- \`${key}\` — ${imageCount(key)} images. ${folder.how}.`);
  lines.push("");

  lines.push("## Files ignored by type", "");
  const ignoredTotals = {};
  for (const file of ignoredFiles) ignoredTotals[file.reason] = (ignoredTotals[file.reason] ?? 0) + 1;
  for (const [reason, count] of Object.entries(ignoredTotals).sort((a, b) => b[1] - a[1])) lines.push(`- ${count} — ${reason}`);
  lines.push("");

  lines.push(
    "## How the import works",
    "",
    "**The source is read-only.** The script only reads from the source directory. Images are converted into `public/projects`.",
    "",
    "**Rerunning is safe and deterministic.** `scripts/.image-import-manifest.json` records every file the script made and which source file it came from.",
    "A rerun keeps files that are still correct, rewrites those that changed and deletes only files it made itself that are no longer selected.",
    "Anything else in `public/projects`, such as a file added by hand, is never touched, and a name it already uses is skipped.",
    "",
    "**Choices live in `scripts/image-import.decisions.json`.** It lists, by content hash, the images chosen for each project in display order, with the first exterior image as the cover, and the images rejected on review.",
    "Files can be renamed or moved in the archive without losing those choices.",
    "",
    "**New images are never silently published.** An image with no decision is classified from its name and flagged in this report. If the name gives no clue it goes to `other`, which the site does not display.",
    "Run `npm run import:images -- --sheets` to make contact sheets of unreviewed images in `.image-import-review/`.",
    "",
    `**Output sizes.** Exterior ${OUTPUT.exterior.longEdge}px, interior ${OUTPUT.interior.longEdge}px and Visual View card ${OUTPUT.card.longEdge}px on the long edge, as high-quality JPEG. Images are never enlarged, and camera metadata including GPS is removed.`,
    "",
    "Use a different source with the `BAM_IMAGE_SOURCE` environment variable.",
    ""
  );
  return lines.join("\n");
}

// ---------------------------------------------------------------- Main

async function main() {
  if (!(await exists(SOURCE))) throw new Error(`Source directory not found: ${SOURCE}`);
  const outputFromSource = path.relative(SOURCE, ROOT);
  if (!outputFromSource.startsWith("..") && !path.isAbsolute(outputFromSource)) throw new Error("The project must not be inside the source directory.");

  const projects = await loadProjects(ROOT);
  const folders = await discoverFolders(buildMatcher(projects));
  const decisions = indexDecisions(await loadDecisions());

  console.log(`Scanning ${SOURCE}`);
  const allFiles = await walkFiles(SOURCE);
  const imageFiles = allFiles.filter(isImageFile);
  const ignoredFiles = allFiles.filter((file) => !isImageFile(file)).map((file) => ({ file, reason: ignoredReason(file) }));
  const inspected = await inspectImages(SOURCE, imageFiles, CACHE_PATH, (done, total) => console.log(`  Inspected ${done}/${total}`));

  // An explicit decision on an image beats the status of the folder it sits in.
  const candidates = new Map(projects.map((project) => [project.code, []]));
  const filesByFolder = new Map();
  const skipCounts = new Map(projects.map((project) => [project.code, {}]));
  const countSkip = (code, reason) => {
    const counts = skipCounts.get(code);
    counts[reason] = (counts[reason] ?? 0) + 1;
  };
  const allImages = [];
  for (const [relative, info] of inspected) {
    const folder = folderOf(relative, folders);
    filesByFolder.set(folder.key, (filesByFolder.get(folder.key) ?? 0) + 1);
    const image = { relative: toPosix(relative), info, folder };
    allImages.push(image);
    const chosen = info.sha && decisions.chosen.get(shortSha(info.sha));
    const code = chosen?.code ?? (folder.status === "matched" ? folder.codes[0] : null);
    if (code) candidates.get(code).push(image);
  }

  if (MAKE_SHEETS) {
    await mkdir(SHEETS_DIR, { recursive: true });
    let count = 0;
    const undecided = (image) => !image.info.error && !decisions.chosen.has(shortSha(image.info.sha)) && !decisions.skipped.has(shortSha(image.info.sha));
    for (const [code, images] of candidates) {
      // Deduplicate first, so a copy of a decided image is not reviewed again.
      const usable = images.filter((image) => !automaticSkipReason(image.relative, image.info));
      const fresh = removeDuplicates(usable).kept.filter(undecided).sort((a, b) => a.relative.localeCompare(b.relative));
      if (fresh.length) count += await writeSheets(code, fresh);
    }
    const elsewhere = new Map();
    for (const image of allImages) {
      if (image.folder.status === "matched" || !undecided(image) || automaticSkipReason(image.relative, image.info)) continue;
      if (!elsewhere.has(image.folder.key)) elsewhere.set(image.folder.key, []);
      elsewhere.get(image.folder.key).push(image);
    }
    const folderIndex = {};
    let serial = 0;
    for (const [key, images] of [...elsewhere].sort()) {
      const name = `folder-${String(++serial).padStart(2, "0")}`;
      folderIndex[name] = { key, status: folders.get(key)?.status };
      count += await writeSheets(name, removeDuplicates(images).kept.sort((a, b) => a.relative.localeCompare(b.relative)));
    }
    await writeFile(path.join(SHEETS_DIR, "folders.json"), JSON.stringify(folderIndex, null, 1));
    console.log(`Wrote ${count} contact sheets to ${SHEETS_DIR}`);
    return;
  }

  const manifest = await loadManifest();
  const notes = [];
  const results = [];
  const fullPlan = [];
  let unreviewedCount = 0;

  for (const project of projects) {
    const images = candidates.get(project.code);
    const usable = [];
    for (const image of images) {
      const decided = image.info.sha && decisions.chosen.has(shortSha(image.info.sha));
      const reason = decided ? null : automaticSkipReason(image.relative, image.info);
      if (reason) countSkip(project.code, reason.startsWith("Too small") ? "Too small" : reason);
      else usable.push(image);
    }

    // Reviewed choices survive deduplication; everything else keeps its best version only.
    const chosen = usable.filter((image) => decisions.chosen.has(shortSha(image.info.sha)));
    const seen = new Set();
    const chosenUnique = chosen.filter((image) => !seen.has(image.info.sha) && seen.add(image.info.sha));
    const { kept, duplicates } = removeDuplicates(usable.filter((image) => !seen.has(image.info.sha)));
    for (const { identical } of duplicates) countSkip(project.code, identical ? "Exact duplicate of another file" : "Near-duplicate of a better version");

    const selection = { exterior: [], interior: [], other: [] };
    const flags = [];
    for (const image of chosenUnique.sort((a, b) => decisions.chosen.get(shortSha(a.info.sha)).rank - decisions.chosen.get(shortSha(b.info.sha)).rank)) {
      selection[decisions.chosen.get(shortSha(image.info.sha)).className].push(image);
    }
    for (const image of kept) {
      const sha = shortSha(image.info.sha);
      if (decisions.skipped.has(sha)) {
        countSkip(project.code, decisions.skipped.get(sha));
        continue;
      }
      // Already imported through another copy of the same photograph.
      if (chosenUnique.some((other) => hammingDistance(other.info.dhash, image.info.dhash) <= NEAR_DUPLICATE_DISTANCE)) {
        countSkip(project.code, "Near-duplicate of a better version");
        continue;
      }
      const className = guessClass(image.relative);
      selection[className].push(image);
      unreviewedCount++;
      flags.push(`Not visually reviewed, classified as ${className} from its name: \`${image.relative}\``);
    }

    const selected = [...selection.exterior, ...selection.interior, ...selection.other];
    const lowRes = selected.filter((image) => Math.max(image.info.width, image.info.height) < LOW_RES_LONG_EDGE);
    if (lowRes.length) flags.push(`Low resolution, under ${LOW_RES_LONG_EDGE}px: ${lowRes.map((image) => `\`${image.relative}\``).join(", ")}`);
    const renders = selected.filter((image) => decisions.renders.has(shortSha(image.info.sha)));
    if (renders.length) flags.push(`${renders.length} of these are architectural renders rather than photographs.`);
    if (PROJECT_NOTES[project.code]) flags.push(PROJECT_NOTES[project.code]);
    if (images.length === 0) {
      const empty = [...folders].filter(([, folder]) => folder.status === "matched" && folder.codes[0] === project.code);
      if (empty.length) flags.push(`Its folder holds no usable images: ${empty.map(([key]) => `\`${key}\``).join(", ")}.`);
    }

    const { plan, paths, card } = await buildPlan(project, selection, manifest, notes);
    fullPlan.push(...plan);
    const sourceFolders = [...new Set(selected.map((image) => image.folder.key))].sort();
    results.push({
      project,
      paths,
      card,
      flags,
      sourceFolders,
      skipCounts: skipCounts.get(project.code),
      renderCount: renders.length,
      lowResCount: lowRes.length,
      lowResCover: Boolean(selection.exterior[0]) && Math.max(selection.exterior[0].info.width, selection.exterior[0].info.height) < LOW_RES_LONG_EDGE,
      total: selected.length,
    });
  }

  let outcome = null;
  if (DRY_RUN) {
    console.log("Dry run: nothing written to public/, data/ or the report.");
  } else {
    outcome = await applyPlan(fullPlan, manifest, decisions.insets);
    await writeFile(GENERATED_PATH, generatedModule(results));
    await writeFile(REPORT_PATH, renderReport({ results, folders, projects, filesByFolder, ignoredFiles, notes, outcome, unreviewedCount }));

    // Every path the site will request must exist on disk.
    const missing = [];
    for (const item of fullPlan) if (!(await exists(path.join(ROOT, item.relative)))) missing.push(item.relative);
    if (missing.length) throw new Error(`Missing output files:\n${missing.join("\n")}`);
    console.log(`Done: ${outcome.written} written, ${outcome.unchanged} unchanged, ${outcome.removed} removed. Report: ${REPORT_PATH}`);
  }

  const imported = results.filter((result) => result.paths.exterior.length || result.paths.interior.length);
  console.log(`Projects with images: ${imported.length}/${projects.length}. Images not visually reviewed: ${unreviewedCount}.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
