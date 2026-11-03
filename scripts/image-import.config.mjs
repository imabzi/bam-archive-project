// Settings and curated knowledge for scripts/import-project-images.mjs.

export const DEFAULT_SOURCE = "D:\\Design\\Media\\iran picture Docs";

// Project folders that are not in the archive above, relative to the project root.
// It is gitignored, so large originals and documents never reach the site.
export const ADDITIONAL_SOURCE = "source-images";

export const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".tif", ".tiff"]);

export const OUTPUT = {
  exterior: { longEdge: 2800, quality: 84 }, // Hero slider.
  interior: { longEdge: 2000, quality: 84 }, // Two-column gallery.
  other: { longEdge: 2000, quality: 82 },
  card: { longEdge: 1400, quality: 80 }, // Visual View card, made from the cover.
};

export const MIN_LONG_EDGE = 800; // Below this an image is never imported.
export const LOW_RES_LONG_EDGE = 1600; // Below this an imported image is flagged in the report.
export const NEAR_DUPLICATE_DISTANCE = 4; // Hamming distance between 64-bit dHashes.

// Words that say nothing about which building a folder holds.
export const NOISE_WORDS = new Set([
  "bam", "بام", "project", "پروژه", "pic", "pics", "new", "عکس", "عکسهای", "های", "frame", "photos", "photo",
]);

// Known spellings for each project code, beyond its English and Persian titles.
export const PROJECT_ALIASES = {
  R01: ["jamshidiyeh", "jamshidie"],
  R03: ["mehmandost", "مهماندوست"],
  R08: ["nilofar", "niloofar", "نیلوفر"],
  R09: ["chobine", "چوبینه"],
  R10: ["fereshte", "فرشته"],
  R11: ["zaferaniye", "زعفرانیه", "سروستان"],
  R12: ["راد"],
  R13: ["simindokht1", "simin", "سیمین دخت"],
  R14: ["farzane", "فرزانه"],
  R18: ["نارنجستان"],
  T01: ["central office", "سنتر 4 دفتر مرکزی"],
  T05: ["yeganeh", "یگانه", "سنتر 7 یگانه"],
  T06: ["kamraniye", "کامرانیه"],
  T08: ["riding club", "savar kari", "سوارکاری"],
  T09: ["bamland", "bam land", "land", "لند", "لند سرزمین", "لند چیتگر", "سرزمین"],
  T10: ["دریاچه شهدای خلیج فارس"],
  T11: ["hotell araz", "araz", "آراز"],
  M01: ["boostan hashtgerd", "بوستان هشتگرد"],
  M02: ["iran khodro", "ایران خودرو هشتگرد"],
  M03: ["boostan no asaluyeh", "asaluyeh", "بوستان عسلویه"],
  M04: ["golestan meshkinshahr", "golestan", "گلستان مشکین شهر"],
  H02: ["erfan medical building", "ساختمان پزشکان عرفان"],
  H03: ["national cancer institute medical centers"],
  H04: ["west nikan hospital", "بیمارستان نیکان غرب"],
  H06: ["clinic 14", "کلینیک شهرداری منطقه 14"],
  I04: ["tajikmall"],
};

// Facts a person should know about a project's images, shown in the report.
export const PROJECT_NOTES = {
  R02: "The archive only holds this project's interiors as brochure pages with a logo and white frame, so none were imported.",
  R10: "No photograph of the exterior exists in the archive, so the hero is a render. The interiors are photographs.",
  M03: "The archive only holds construction-record photographs. Some carry a date stamp in the corner.",
  T04: "The archive only holds this project's photographs at 1080px.",
  R11: "The archive only holds this project's photographs at 1080px. Its higher-resolution files are renders, which were not used.",
  I02: 'The renders show the name "77 Boulevard" on the building.',
  I03: "The folder holds no images of indoor spaces, so the page has no interior gallery.",
  I04: 'The folder holds no images of indoor spaces, so the page has no interior gallery. Its files are under 1800px wide, and the renders show the name "Mall of Tajikistan" on the building.',
};

// Decisions the name matcher cannot make, keyed by path relative to the source.
//   project: the code to assign
//   ignore:  not usable as project photography
//   candidates, or neither: plausible, so a person must confirm
export const FOLDER_DECISIONS = {
  // Assigned on evidence.
  "Edari.tejri/BAM Brand Center2": { project: "T04", reason: 'Holds the subfolder "brand center 2 shariati"' },
  "بام سنتر2": { project: "T04", reason: 'Shares identical photographs with "BAM Brand Center2"' },
  "BAM AX/04-TEJARI NIYAYESH-41 frame": { project: "T07", reason: '"Tejari Niyayesh" means Niayesh Commercial' },
  "BAM AX/02-DAFTAR ANDARZGOO-40 frame": { project: "T01", reason: 'Visibly the same tower as "BAM Central Office"' },
  "Bamland Niayesh": { project: "T07", reason: 'Renders of the same building, in a subfolder named "SHOPPING NIYAYESH"' },
  "بام سنتر 5 نیایش": { project: "T07", reason: 'Shares identical renders with "Bamland Niayesh"' },
  "Edari.tejri/BAM LAND 2": { project: "T07", reason: "Render of the same building as the Niayesh Commercial Complex" },
  "سعادت آباد پاسداران": { project: "R15", reason: 'Shares 20 identical photographs with "BAM sepid". Its images with a Narenjestan nameplate are assigned to that project individually' },
  "بام نسترن": { project: "R04", reason: 'Same building as "BAM Nasrin", and its files are named NASRIN_*' },
  "Residential/bam darband": { project: "R16", reason: 'A photograph shows the nameplate "1 BAM DARBAND"' },
  "بام دربند": { project: "R16", reason: 'Visibly the same building as "Residential/bam darband"' },
  "medical center": { project: "H03", reason: 'Identical file to "National Cancer Institute Medical Centers"' },

  // Plausible, but a person must confirm.
  "Luxurious Residential/BAM Niavaran": { candidates: ["R05", "R06", "R07"], reason: "No number in the folder name. It looks like the same building as بام نیاوران 3, but that cannot be told apart from Niavaran 1 or 2 without seeing them" },
  "Edari.tejri/BAM Brand Center1": { candidates: ["T02", "T03"], reason: 'A "Brand Center 1" tower that the project list does not name directly' },
  "برند سنتر1": { candidates: ["T02", "T03"], reason: 'Shares photographs with "BAM Brand Center1", which the project list does not name directly' },
  "Residential/Saadatabad": { candidates: ["R15"], reason: "A single render that resembles the BAM Sepid tower" },
  "نیکان شرق- عکس افتتاحیه": { reason: "Opening-ceremony photographs of East Nikan Hospital, which is not in the project list. It holds a few good exterior shots if the project is added" },

  // Not project photography.
  "BAM AX/final": { ignore: true, reason: "Retouched copies with a BAM logo stamped on the image. The clean camera JPEGs of these shoots were used instead" },
  "عکس جوایز": { ignore: true, reason: "Awards photographs" },
  "عکس های دکتر کاوسی بازدید از پروژه ها و دریافت جوایز": { ignore: true, reason: "Site visits and awards photographs" },
};
