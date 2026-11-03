# BAM Project Atlas

Minimal bilingual (English / Persian) architectural project archive for BAM.

## Run in VS Code

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Main files to edit

- `data/projects.ts` — project names, categories and the data model.
- `data/projectContent.ts` — verified facts and descriptions. `PROJECT_RESEARCH_REPORT.md` records the source of each.
- `data/projectLocations.ts` — the approved addresses and Google Maps links.
- `lib/i18n.ts` — every interface string, in English and Persian.
- `scripts/image-import.decisions.json` — which photographs each project shows, and in what order.
- `app/globals.css` — complete visual system, including the RTL tokens and Persian font.

## Adding project content

Add verified content to `data/projectContent.ts`, keyed by project code, and record its source in `PROJECT_RESEARCH_REPORT.md`. Anything left out is hidden on the page, so never fill a gap with a guess.

```ts
export const projectContent: Record<string, ProjectContent> = {
  R01: {
    description: { en: "…", fa: "…" },
    location: {
      country: { en: "…", fa: "…" },
      city: { en: "…", fa: "…" },
      district: { en: "…", fa: "…" },
    },
    facts: {
      completionYear: { en: "…", fa: "…" },
      siteArea: 0, // m²
      floors: 0,
      architect: { en: "…", fa: "…" },
    },
  },
};
```

`ProjectFacts` in the same file lists every supported field. Numbers are formatted for each language automatically. Text that exists in only one language is hidden in the other: the site never shows English in Persian mode or Persian in English mode.

## Images

Project photography is copied from the image archive by a script. Do not edit the output by hand.

```bash
npm run import:images               # Import using the saved decisions
npm run import:images -- --dry-run  # Show the outcome without writing anything
npm run import:images -- --sheets   # Make contact sheets of images not yet reviewed
```

The source defaults to `D:\Design\Media\iran picture Docs`. Set `BAM_IMAGE_SOURCE` to use another folder. The source is only ever read.

The import writes `public/projects/<project-slug>/`, `data/projectImages.generated.ts` and `IMAGE_IMPORT_REPORT.md`. It is safe to rerun: unchanged images are skipped, and only files the script made itself are ever replaced or removed.

To change what a project shows:

- **Images:** edit `scripts/image-import.decisions.json`. Images are listed by content hash in display order, and the first exterior image is the cover.
- **A folder match:** add the folder to `FOLDER_DECISIONS` in `scripts/image-import.config.mjs`.

On the site:

- `exterior` feeds the hero slider on the project page. Use exterior imagery only.
- `interior` feeds the two-column gallery, which is hidden when empty.
- `card` is the Visual View image, a smaller copy of `cover`.
- `other`, `amenities`, `details`, `plans` and `archive` are in the data model and not shown yet.

Images can have any dimensions. Their frames are fixed and crop with `object-fit: cover`. A project with no images keeps a neutral placeholder on its card and shows no hero or gallery on its page.

## Location

Approved locations live in `data/projectLocations.ts`, with a Persian address and a Google Maps link for each project. Only those projects show the Location button, which opens the link in a new tab, and the Location fact. Use the links exactly as supplied, and add one only when it has been approved.

The fact is short: Persian shows the first two parts of the address, and English shows the `district`, `city` and `country` from `data/projectContent.ts`. Full Persian addresses are never machine-translated, so a project with no English place name shows no Location fact in English.

## Fonts and logo

English uses Lato and Persian uses IRANSansX, from local copies in `app/fonts`. They are loaded in `app/layout.tsx`, and the active language selects one through `--font-body` in `app/globals.css`, so components never name a font.

Only the weights in use ship: Lato 400, and IRANSansX 400 and 500. To add one, copy the file into `app/fonts`, add it to `app/layout.tsx`, then use it through a `--weight` token.

IRANSansX is a commercial font and needs a web licence from fontiran.com. Lato is under the SIL Open Font License.

The logo is `public/brand/bam-logo.svg`. Its size is set by `--logo-height` in `app/globals.css`.

## Language and view preferences

Language (`EN / FA`) and view (`Visual / Index`) are saved in `localStorage` and default to English and Visual. Both live in `lib/preferences.ts`.
