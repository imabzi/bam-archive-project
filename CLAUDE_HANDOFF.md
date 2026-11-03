# Claude handoff — BAM Project Atlas

You are continuing an existing Next.js + TypeScript project for BAM's architectural archive.

## Design direction
- Keep it extremely minimal, premium and architectural.
- Neutral palette: warm white, charcoal, gray; copper only as a restrained accent.
- No gradients, glass cards, large border radii, dashboard look or excessive animation.
- Photography must remain dominant.
- Use generous whitespace and editorial typography.
- Do not display the total number of projects or countries.

## Information architecture
- The site root is the BAM Architecture Archive (`/projects` redirects there). It opens directly on the archive with no intro hero, and has two views: Visual (image-led) and Index (a text-only list). Both open the same project page.
- Category filters only: Residential, Commercial & Leisure, Large-Scale Development, Healthcare.
- Clicking a project opens a dedicated page.
- Dedicated page: category, title, Location link to Google Maps, exterior hero slider, project information, two-column interior gallery.
- Project fields may differ by typology. Keep the underlying data schema flexible rather than forcing every field to render.

## Language
- The whole site is either English (LTR) or Persian (RTL). Never show both at once, and never fall back to the other language.
- Interface strings live in `lib/i18n.ts`. Project text is stored per language in `data/projects.ts`.
- Script and direction differences are driven by the tokens at the top of `app/globals.css`. Use logical CSS properties and those tokens rather than per-language overrides.

## Important constraints
- Existing 43 project names came from the user's spreadsheet. Preserve them unless the user explicitly changes them.
- Do not invent project facts, addresses, dates, areas, units or coordinates. Missing data stays undefined and is hidden; never render a placeholder such as an em dash, N/A or 0.
- Project photography comes from `npm run import:images`. The source archive is read-only: never write to it. Never assign a folder to a project on a guess; `IMAGE_IMPORT_REPORT.md` lists what still needs a person to decide.
- `data/projectLocations.ts` is the approved location list. Use its links exactly as supplied and never add one from research or inference. A project not on the list shows no Location button or fact.
- Preserve responsive behavior and mobile simplicity.

## Suggested next tasks
1. Resolve the folders under "Needs manual review" in `IMAGE_IMPORT_REPORT.md`, and find photographs for projects that only have renders.
2. Work through "Projects requiring manual verification" in `PROJECT_RESEARCH_REPORT.md`. Facts go in `data/projectContent.ts` only with a recorded source.
3. Add conditional fact groups by project type (residential, commercial, healthcare, large-scale).

Start by reading `data/projects.ts`, `lib/i18n.ts`, `app/globals.css`, `components/ProjectArchive.tsx`, and `components/ProjectDetail.tsx` before changing anything.
