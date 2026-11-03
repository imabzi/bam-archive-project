import { createHash } from "node:crypto";
import { createReadStream } from "node:fs";
import { readdir, readFile, writeFile, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import { IMAGE_EXTENSIONS, NOISE_WORDS, PROJECT_ALIASES } from "./image-import.config.mjs";

// ---------------------------------------------------------------- Projects

// Must stay the same as slugify in data/projects.ts.
function slugify(value) {
  return value
    .toLowerCase()
    .replace(/—/g, "-")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export async function loadProjects(root) {
  const source = await readFile(path.join(root, "data", "projects.ts"), "utf8");
  const rows = [...source.matchAll(/\["([A-Z]\d+)","([^"]+)","([^"]+)","([^"]+)"\]/g)];
  if (rows.length === 0) throw new Error("No project rows found in data/projects.ts");
  return rows.map(([, code, titleFa, titleEn, category]) => ({ code, titleFa, titleEn, category, slug: slugify(titleEn) }));
}

// ---------------------------------------------------------------- Name matching

// Folds the spelling differences that do not change a name: Arabic and Persian
// letter forms, digit scripts, half-spaces, punctuation and leading zeros.
export function normalizeName(value) {
  return value
    .normalize("NFKC")
    .replace(/[يى]/g, "ی")
    .replace(/ك/g, "ک")
    .replace(/ة/g, "ه")
    .replace(/[أإآ]/g, "ا")
    .replace(/ؤ/g, "و")
    .replace(/[ً-ْ]/g, "")
    .replace(/[۰-۹]/g, (digit) => String("۰۱۲۳۴۵۶۷۸۹".indexOf(digit)))
    .replace(/[٠-٩]/g, (digit) => String("٠١٢٣٤٥٦٧٨٩".indexOf(digit)))
    .replace(/[‌‍‎‏]/g, " ")
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .replace(/(\d)(\p{L})/gu, "$1 $2")
    .replace(/(\p{L})(\d)/gu, "$1 $2")
    .replace(/\b0+(\d)/g, "$1")
    .trim();
}

function meaningfulTokens(value) {
  const tokens = normalizeName(value).split(" ").filter((token) => token && !NOISE_WORDS.has(token));
  // "01-BAM JAMSHIDIYEH-28 frame": the leading number is an order, the trailing one a count.
  if (/\bframe\b/i.test(value) && /^\d+$/.test(tokens.at(-1) ?? "")) tokens.pop();
  if (tokens.length > 1 && /^\d+$/.test(tokens[0])) tokens.shift();
  return tokens;
}

const PERSIAN_TO_LATIN = {
  ب: "b", پ: "p", ت: "t", ث: "s", ج: "j", چ: "ch", ح: "h", خ: "kh", د: "d", ذ: "z", ر: "r", ز: "z", ژ: "zh",
  س: "s", ش: "sh", ص: "s", ض: "z", ط: "t", ظ: "z", غ: "gh", ف: "f", ق: "gh", ک: "k", گ: "g", ل: "l", م: "m",
  ن: "n", ه: "h", ا: "", و: "", ی: "", ع: "", ئ: "", ء: "",
};

// Reduces a name to its consonants, which is what Persian and Latin spellings
// share: "Nilofar", "Niloofar", "Niloufar" and "نیلوفر" all become "nlfr".
function skeleton(tokens) {
  return tokens
    .map((token) => {
      if (/^\d+$/.test(token)) return token;
      const latin = [...token].map((letter) => PERSIAN_TO_LATIN[letter] ?? letter).join("");
      return latin.replace(/ou/g, "").replace(/[aeiouy]/g, "").replace(/h$/, "");
    })
    .join(" ");
}

function editDistance(a, b) {
  let previous = Array.from({ length: b.length + 1 }, (_, index) => index);
  for (let i = 1; i <= a.length; i++) {
    const row = [i];
    for (let j = 1; j <= b.length; j++) {
      row[j] = Math.min(previous[j] + 1, row[j - 1] + 1, previous[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    }
    previous = row;
  }
  return previous[b.length];
}

const key = (tokens) => tokens.join(" ");

export function buildMatcher(projects) {
  const entries = [];
  for (const project of projects) {
    const names = [project.titleEn, project.titleFa, ...(PROJECT_ALIASES[project.code] ?? [])];
    for (const name of names) {
      const tokens = meaningfulTokens(name);
      if (tokens.length) entries.push({ code: project.code, tokens, key: key(tokens), skeleton: skeleton(tokens) });
    }
  }
  const unique = (list) => [...new Set(list.map((entry) => entry.code))];

  // Returns the codes a folder name points at, strongest evidence first, and how
  // it matched. More than one code means the name alone cannot decide.
  return function matchFolderName(name) {
    const tokens = meaningfulTokens(name);
    if (tokens.length === 0) return { codes: [], how: "no meaningful words" };
    const folderKey = key(tokens);
    const numbers = tokens.filter((token) => /^\d+$/.test(token));

    const exact = unique(entries.filter((entry) => entry.key === folderKey));
    if (exact.length) return { codes: exact, how: "exact" };

    const folderSkeleton = skeleton(tokens);
    const sameSound = unique(entries.filter((entry) => entry.skeleton === folderSkeleton));
    if (sameSound.length) return { codes: sameSound, how: "transliteration" };

    // Every word of a project name appears in the folder name, keeping the longest such names.
    const containedEntries = entries.filter((entry) => entry.tokens.every((token) => tokens.includes(token)));
    const longest = Math.max(0, ...containedEntries.map((entry) => entry.tokens.length));
    const contained = unique(containedEntries.filter((entry) => entry.tokens.length === longest));
    if (contained.length) return { codes: contained, how: "contains project name" };

    // A numbered project with no number in the folder name: "Niavaran" could be 1, 2 or 3.
    if (numbers.length === 0) {
      const unnumbered = unique(
        entries.filter((entry) => {
          const words = entry.tokens.filter((token) => !/^\d+$/.test(token));
          // One letter is too little to match on: "X11" must not claim the folder "BAM AX".
          return words.length < entry.tokens.length && words.join("").length > 1 && skeleton(words) === folderSkeleton;
        })
      );
      if (unnumbered.length) return { codes: unnumbered, how: "number missing from folder name" };
    }

    const close = unique(
      entries.filter(
        (entry) =>
          entry.skeleton.length >= 5 &&
          folderSkeleton.length >= 5 &&
          !/\d/.test(entry.skeleton + folderSkeleton) &&
          editDistance(entry.skeleton, folderSkeleton) === 1
      )
    );
    if (close.length) return { codes: close, how: "close spelling" };

    return { codes: [], how: "no match" };
  };
}

// ---------------------------------------------------------------- Source scanning

export async function walkFiles(directory) {
  const files = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const full = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await walkFiles(full)));
    else if (entry.isFile()) files.push(full);
  }
  return files;
}

// "._name.jpg" files are macOS metadata, not images.
export const isImageFile = (file) => IMAGE_EXTENSIONS.has(path.extname(file).toLowerCase()) && !path.basename(file).startsWith("._");

function sha256File(file) {
  return new Promise((resolve, reject) => {
    const hash = createHash("sha256");
    createReadStream(file).on("error", reject).on("data", (chunk) => hash.update(chunk)).on("end", () => resolve(hash.digest("hex")));
  });
}

async function differenceHash(file) {
  const pixels = await sharp(file, { failOn: "none" }).rotate().greyscale().resize(9, 8, { fit: "fill" }).raw().toBuffer();
  let bits = "";
  for (let row = 0; row < 8; row++) for (let col = 0; col < 8; col++) bits += pixels[row * 9 + col] < pixels[row * 9 + col + 1] ? "1" : "0";
  return BigInt(`0b${bits}`).toString(16).padStart(16, "0");
}

export function hammingDistance(a, b) {
  let value = BigInt(`0x${a}`) ^ BigInt(`0x${b}`);
  let count = 0;
  while (value) {
    count += Number(value & 1n);
    value >>= 1n;
  }
  return count;
}

// Reads one image without changing it. Failures are returned, not thrown.
async function inspectImage(file) {
  const info = await stat(file);
  try {
    const meta = await sharp(file, { failOn: "none" }).metadata();
    const rotated = (meta.orientation ?? 1) >= 5;
    return {
      size: info.size,
      mtimeMs: info.mtimeMs,
      sha: await sha256File(file),
      width: rotated ? meta.height : meta.width,
      height: rotated ? meta.width : meta.height,
      format: meta.format,
      dhash: await differenceHash(file),
    };
  } catch (error) {
    return { size: info.size, mtimeMs: info.mtimeMs, error: String(error.message ?? error).slice(0, 120) };
  }
}

// Hashing the archive takes minutes, so results are cached by path, size and time.
export async function inspectImages(relativeOf, files, cachePath, onProgress = () => {}) {
  let cache = {};
  try {
    cache = JSON.parse(await readFile(cachePath, "utf8"));
  } catch {
    // First run.
  }
  const results = new Map();
  const pending = [];
  for (const file of files) {
    const relative = relativeOf(file);
    const info = await stat(file);
    const cached = cache[relative];
    if (cached && cached.size === info.size && cached.mtimeMs === info.mtimeMs) results.set(relative, cached);
    else pending.push({ file, relative });
  }
  let done = 0;
  let cursor = 0;
  const save = () => writeFile(cachePath, JSON.stringify(Object.fromEntries(results)));
  const worker = async () => {
    while (cursor < pending.length) {
      const { file, relative } = pending[cursor++];
      results.set(relative, await inspectImage(file));
      if (++done % 100 === 0) {
        await save();
        onProgress(done, pending.length);
      }
    }
  };
  await Promise.all(Array.from({ length: 6 }, worker));
  await save();
  return results;
}
