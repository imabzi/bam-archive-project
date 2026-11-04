# Image import report

Source: `D:\Design\Media\iran picture Docs`

Additional source: `source-images`

This file is rewritten by `npm run import:images`.

## Summary

- Source folders matched to a project: **95**
- Projects with imported images: **41** of 47
- Projects without source images: **6**
- Unmatched source folders: **12**
- Folders needing manual review: **6**
- Folders set aside as not project photography: **3**
- Images imported: **191** exterior, **141** interior, **0** other
- Images flagged as not visually reviewed: **0**

Last run: 0 images written, 373 unchanged, 4 removed.

## Worth checking

**Showing architectural renders only, because the archive holds no photographs:** BAM Maryam, Erfan Clinic, National Cancer Center, Nikan West Hospital, Sepid Hospital, 311, B77, X11, Tajik Mall.

**Showing some renders alongside photographs:** BAM Fereshteh.

**Hero image under 1600px, so it will look soft on a large screen:** BAM Zafaraniyeh (Sarvestan), BAM Darband 02, BAM Saman, BAM Center Shariati, National Cancer Center, Nikan West Hospital, Sepid Hospital.

**Limits of the archive:**

- **BAM Alborz:** The archive only holds this project's interiors as brochure pages with a logo and white frame, so none were imported.
- **BAM Fereshteh:** No photograph of the exterior exists in the archive, so the hero is a render. The interiors are photographs.
- **Boostan Asaluyeh:** The archive only holds construction-record photographs. Some carry a date stamp in the corner.
- **BAM Center Shariati:** The archive only holds this project's photographs at 1080px.
- **BAM Zafaraniyeh (Sarvestan):** The archive only holds this project's photographs at 1080px. Its higher-resolution files are renders, which were not used.
- **Araz Hotel:** Its images were placed by hand in public/projects/araz-hotel and are listed in data/projectContent.ts, so this import does not manage them.
- **B77:** The renders show the name "77 Boulevard" on the building.
- **X11:** The folder holds no images of indoor spaces, so the page has no interior gallery.
- **Tajik Mall:** The folder holds no images of indoor spaces, so the page has no interior gallery. Its files are under 1800px wide, and the renders show the name "Mall of Tajikistan" on the building.

## Folders assigned on evidence

The folder name alone could not decide these. A photograph, a duplicate file or a subfolder name did.

- `Edari.tejri/BAM Brand Center2` → **BAM Center Shariati**. Holds the subfolder "brand center 2 shariati".
- `بام سنتر2` → **BAM Center Shariati**. Shares identical photographs with "BAM Brand Center2".
- `BAM AX/04-TEJARI NIYAYESH-41 frame` → **Niayesh Commercial Complex**. "Tejari Niyayesh" means Niayesh Commercial.
- `BAM AX/02-DAFTAR ANDARZGOO-40 frame` → **BAM Center — Head Office**. Visibly the same tower as "BAM Central Office".
- `Bamland Niayesh` → **Niayesh Commercial Complex**. Renders of the same building, in a subfolder named "SHOPPING NIYAYESH".
- `بام سنتر 5 نیایش` → **Niayesh Commercial Complex**. Shares identical renders with "Bamland Niayesh".
- `Edari.tejri/BAM LAND 2` → **Niayesh Commercial Complex**. Render of the same building as the Niayesh Commercial Complex.
- `سعادت آباد پاسداران` → **BAM Sepid**. Shares 20 identical photographs with "BAM sepid". Its images with a Narenjestan nameplate are assigned to that project individually.
- `بام نسترن` → **BAM Nasrin**. Same building as "BAM Nasrin", and its files are named NASRIN_*.
- `Residential/bam darband` → **BAM Darband 01**. A photograph shows the nameplate "1 BAM DARBAND".
- `بام دربند` → **BAM Darband 01**. Visibly the same building as "Residential/bam darband".
- `medical center` → **National Cancer Center**. Identical file to "National Cancer Institute Medical Centers".

**One folder holds two buildings.** `سعادت آباد پاسداران` is mostly BAM Sepid, but several of its photographs show a "BAM NARENJESTAN 27" nameplate, so those were assigned to BAM Narenjestan individually.

## Imported projects

### BAM Jamshidieh

```text
BAM Jamshidieh
Source folder: BAM AX/01-BAM JAMSHIDIYEH-28 frame | Bam Jamshidieh
Exterior imported: 5
Interior imported: 8
Other imported: 0
Cover selected: exterior-01.jpg
```

Skipped:

- 39 — Not selected on visual review
- 3 — Exact duplicate of another file

### BAM Alborz

```text
BAM Alborz
Source folder: Bam Alborz | Luxurious Residential/BAM Alborz
Exterior imported: 8
Interior imported: 0
Other imported: 0
Cover selected: exterior-01.jpg
```

- The archive only holds this project's interiors as brochure pages with a logo and white frame, so none were imported.

Skipped:

- 40 — Not selected on visual review
- 1 — Exact duplicate of another file

### BAM Mehmandoost

```text
BAM Mehmandoost
Source folder: 00مهماندوست | Luxurious Residential/BAM Mehmandost
Exterior imported: 4
Interior imported: 6
Other imported: 0
Cover selected: exterior-01.jpg
```

Skipped:

- 8 — Not selected on visual review

### BAM Nasrin

```text
BAM Nasrin
Source folder: Luxurious Residential/BAM Nasrin | بام نسترن
Exterior imported: 4
Interior imported: 4
Other imported: 0
Cover selected: exterior-01.jpg
```

- Low resolution, under 1600px: `بام نسترن/12.jpg`, `بام نسترن/48 (1).jpg`

Skipped:

- 4 — Not selected on visual review
- 1 — Plant room, not architecture

### BAM Niavaran 03

```text
BAM Niavaran 03
Source folder: بام نیاوران 3
Exterior imported: 3
Interior imported: 6
Other imported: 0
Cover selected: exterior-01.jpg
```

- Low resolution, under 1600px: `بام نیاوران 3/17.jpg`, `بام نیاوران 3/06.jpg`, `بام نیاوران 3/399A2750.jpg`, `بام نیاوران 3/03.jpg`, `بام نیاوران 3/29.jpg`

Skipped:

- 8 — Not selected on visual review

### BAM Niloufar

```text
BAM Niloufar
Source folder: Bam Nilofar
Exterior imported: 8
Interior imported: 8
Other imported: 0
Cover selected: exterior-01.jpg
```

Skipped:

- 90 — Not selected on visual review
- 14 — Exact duplicate of another file
- 7 — Near-duplicate of a better version

### BAM Choobineh

```text
BAM Choobineh
Source folder: Luxurious Residential/BAM Chobine | بام چوبینه
Exterior imported: 6
Interior imported: 4
Other imported: 0
Cover selected: exterior-01.jpg
```

Skipped:

- 4 — Not selected on visual review

### BAM Fereshteh

```text
BAM Fereshteh
Source folder: Bam Fereshte | Luxurious Residential/BAM FERESHTE
Exterior imported: 1
Interior imported: 10
Other imported: 0
Cover selected: exterior-01.jpg
```

- 1 of these are architectural renders rather than photographs.
- No photograph of the exterior exists in the archive, so the hero is a render. The interiors are photographs.

Skipped:

- 53 — Not selected on visual review

### BAM Zafaraniyeh (Sarvestan)

```text
BAM Zafaraniyeh (Sarvestan)
Source folder: Luxurious Residential/BAM zaferaniye | new pic zaferaniye
Exterior imported: 6
Interior imported: 6
Other imported: 0
Cover selected: exterior-01.jpg
```

- Low resolution, under 1600px: `new pic zaferaniye/798139b7-e311-46c4-9083-d519a39f19e0.jpg`, `new pic zaferaniye/954d5d9a-3ca6-42bf-8314-36bd7af2bd6c.jpg`, `Luxurious Residential/BAM zaferaniye/1 (1).jpg`, `new pic zaferaniye/b2ebc1d2-a248-4081-8ca4-b4d33132318e.jpg`, `new pic zaferaniye/0a5a8e3d-c413-4f05-9934-bdb0fe7fb98c.jpg`, `new pic zaferaniye/41324293-429c-41a1-824c-be30ca2d6e41.jpg`, `new pic zaferaniye/01495eff-3cef-4922-ad8b-ad591e0ca077.jpg`, `new pic zaferaniye/252453ab-ea7b-435e-99e6-ee2d080ac87b.jpg`, `new pic zaferaniye/64114ba1-d2dd-40b4-9abe-efe0020b4205.jpg`, `new pic zaferaniye/66adfda5-ff55-4bd1-a6fc-a2f3b519bf38.jpg`, `new pic zaferaniye/724e7669-cd75-4a26-b28a-620ac674b73f.jpg`, `new pic zaferaniye/c125cef2-0a15-43f6-ab72-b50e1896abc2.jpg`
- The archive only holds this project's photographs at 1080px. Its higher-resolution files are renders, which were not used.

Skipped:

- 43 — Thumbnail, screenshot or messaging-app copy
- 17 — Not selected on visual review
- 9 — Exact duplicate of another file

### BAM Rad

```text
BAM Rad
Source folder: بام راد
Exterior imported: 5
Interior imported: 6
Other imported: 0
Cover selected: exterior-01.jpg
```

Skipped:

- 8 — Not selected on visual review

### BAM Simindokht

```text
BAM Simindokht
Source folder: Bam Simindokht1
Exterior imported: 7
Interior imported: 8
Other imported: 0
Cover selected: exterior-01.jpg
```

Skipped:

- 175 — Not selected on visual review
- 78 — Exact duplicate of another file
- 12 — Near-duplicate of a better version
- 3 — Thumbnail, screenshot or messaging-app copy

### BAM Farzaneh

```text
BAM Farzaneh
Source folder: Bam Farzane
Exterior imported: 7
Interior imported: 8
Other imported: 0
Cover selected: exterior-01.jpg
```

Skipped:

- 65 — Not selected on visual review
- 51 — Exact duplicate of another file
- 4 — Near-duplicate of a better version

### BAM Sepid

```text
BAM Sepid
Source folder: BAM sepid
Exterior imported: 6
Interior imported: 4
Other imported: 0
Cover selected: exterior-01.jpg
```

Skipped:

- 10 — Exact duplicate of another file
- 10 — Not selected on visual review
- 2 — Nameplate close-up
- 1 — Near-duplicate of a better version

### BAM Darband 01

```text
BAM Darband 01
Source folder: Residential/bam darband
Exterior imported: 2
Interior imported: 0
Other imported: 0
Cover selected: exterior-01.jpg
```

Skipped:

- 2 — Not selected on visual review
- 1 — Nameplate close-up

### BAM Darband 02

```text
BAM Darband 02
Source folder: Residential/BAM Darband 2
Exterior imported: 1
Interior imported: 0
Other imported: 0
Cover selected: exterior-01.jpg
```

- Low resolution, under 1600px: `Residential/BAM Darband 2/1 (2).jpg`

Skipped:

- 1 — Not selected on visual review

### BAM Narenjestan

```text
BAM Narenjestan
Source folder: سعادت آباد پاسداران
Exterior imported: 3
Interior imported: 0
Other imported: 0
Cover selected: exterior-01.jpg
```

Skipped:

- 3 — Not selected on visual review
- 1 — Exact duplicate of another file

### BAM Niayesh

```text
BAM Niayesh
Source folder: Residential/BAM Niayesh
Exterior imported: 3
Interior imported: 0
Other imported: 0
Cover selected: exterior-01.jpg
```

### BAM Saman

```text
BAM Saman
Source folder: Residential/Saman
Exterior imported: 1
Interior imported: 0
Other imported: 0
Cover selected: exterior-01.jpg
```

- Low resolution, under 1600px: `Residential/Saman/1.jpg`

### BAM Maryam

```text
BAM Maryam
Source folder: Bam Maryam
Exterior imported: 3
Interior imported: 2
Other imported: 0
Cover selected: exterior-01.jpg
```

- 5 of these are architectural renders rather than photographs.

Skipped:

- 2 — Thumbnail, screenshot or messaging-app copy
- 1 — Near-duplicate of a better version

### BAM Center — Head Office

```text
BAM Center — Head Office
Source folder: BAM AX/02-DAFTAR ANDARZGOO-40 frame | Edari.tejri/BAM Central Office
Exterior imported: 7
Interior imported: 8
Other imported: 0
Cover selected: exterior-01.jpg
```

Skipped:

- 44 — Not selected on visual review
- 3 — Exact duplicate of another file
- 1 — Near-duplicate of a better version

### BAM Center Shariati

```text
BAM Center Shariati
Source folder: Edari.tejri/BAM Brand Center2
Exterior imported: 3
Interior imported: 3
Other imported: 0
Cover selected: exterior-01.jpg
```

- Low resolution, under 1600px: `Edari.tejri/BAM Brand Center2/brand center 2 shariati/0002.jpg`, `Edari.tejri/BAM Brand Center2/brand center 2 shariati/1 (4).jpeg`, `Edari.tejri/BAM Brand Center2/brand center 2 shariati/1 (1).jpeg`, `Edari.tejri/BAM Brand Center2/brand center 2 shariati/1 (3).jpeg`, `Edari.tejri/BAM Brand Center2/brand center 2 shariati/1 (5).jpeg`, `Edari.tejri/BAM Brand Center2/brand center 2 shariati/1 (2).jpeg`
- The archive only holds this project's photographs at 1080px.

### BAM Center Yeganeh

```text
BAM Center Yeganeh
Source folder: Bam Yeganeh
Exterior imported: 7
Interior imported: 0
Other imported: 0
Cover selected: exterior-01.jpg
```

Skipped:

- 67 — Not selected on visual review
- 16 — Near-duplicate of a better version
- 5 — Exact duplicate of another file

### BAM Center Kamranieh

```text
BAM Center Kamranieh
Source folder: Bam Kamraniye | new pic ghavimi/بام کامرانیه
Exterior imported: 7
Interior imported: 0
Other imported: 0
Cover selected: exterior-01.jpg
```

Skipped:

- 84 — Not selected on visual review
- 31 — Exact duplicate of another file
- 9 — Near-duplicate of a better version
- 2 — Thumbnail, screenshot or messaging-app copy
- 1 — Too small

### Niayesh Commercial Complex

```text
Niayesh Commercial Complex
Source folder: BAM AX/04-TEJARI NIYAYESH-41 frame
Exterior imported: 4
Interior imported: 8
Other imported: 0
Cover selected: exterior-01.jpg
```

Skipped:

- 39 — Not selected on visual review
- 5 — Thumbnail, screenshot or messaging-app copy
- 3 — Exact duplicate of another file

### BAM Equestrian Club

```text
BAM Equestrian Club
Source folder: BAM AX/05-SAVAR KARI BAM-32 frame | BAM RIDING CLUB
Exterior imported: 8
Interior imported: 6
Other imported: 0
Cover selected: exterior-01.jpg
```

Skipped:

- 38 — Not selected on visual review
- 6 — Exact duplicate of another file
- 1 — Near-duplicate of a better version

### Bamland

```text
Bamland
Source folder: Edari.tejri/BAM Land | بام لند چیتگر | بام لند(سرزمین بام)
Exterior imported: 9
Interior imported: 8
Other imported: 0
Cover selected: exterior-01.jpg
```

Skipped:

- 87 — Not selected on visual review
- 46 — Exact duplicate of another file

### Persian Gulf Artificial Lake

```text
Persian Gulf Artificial Lake
Source folder: دریاچه شهدای خلیج فارس
Exterior imported: 6
Interior imported: 0
Other imported: 0
Cover selected: exterior-01.jpg
```

Skipped:

- 3 — Not selected on visual review

### Boostan Hashtgerd 1002-Unit Project

```text
Boostan Hashtgerd 1002-Unit Project
Source folder: Mass Construction/Boostan (Hashtgerd) | بوستان هشتگرد
Exterior imported: 6
Interior imported: 0
Other imported: 0
Cover selected: exterior-01.jpg
```

Skipped:

- 4 — Not selected on visual review
- 1 — Exact duplicate of another file

### Iran Khodro Project

```text
Iran Khodro Project
Source folder: Mass Construction/Iran Khodro | ایران خودرو (هشتگرد)
Exterior imported: 6
Interior imported: 0
Other imported: 0
Cover selected: exterior-01.jpg
```

Skipped:

- 2 — Not selected on visual review

### Boostan Asaluyeh

```text
Boostan Asaluyeh
Source folder: Mass Construction/Boostan no (Asaluyeh) | بوستان عسلویه
Exterior imported: 3
Interior imported: 0
Other imported: 0
Cover selected: exterior-01.jpg
```

- The archive only holds construction-record photographs. Some carry a date stamp in the corner.

Skipped:

- 6 — Not selected on visual review

### Golestan Meshgin Shahr

```text
Golestan Meshgin Shahr
Source folder: Mass Construction/Golestan (Meshkinshahr) | گلستان مشکین شهر
Exterior imported: 3
Interior imported: 0
Other imported: 0
Cover selected: exterior-01.jpg
```

- Low resolution, under 1600px: `Mass Construction/Golestan (Meshkinshahr)/1 (1).jpg`

Skipped:

- 2 — Scanned handwritten document

### Nikan Hospital

```text
Nikan Hospital
Source folder: Hospital/Nikan Hospital
Exterior imported: 3
Interior imported: 0
Other imported: 0
Cover selected: exterior-01.jpg
```

Skipped:

- 3 — Not selected on visual review
- 1 — Exact duplicate of another file

### Erfan Clinic

```text
Erfan Clinic
Source folder: Hospital/Erfan Medical Building
Exterior imported: 2
Interior imported: 0
Other imported: 0
Cover selected: exterior-01.jpg
```

- 2 of these are architectural renders rather than photographs.

Skipped:

- 2 — Too small

### National Cancer Center

```text
National Cancer Center
Source folder: Hospital/National Cancer Institute Medical Centers
Exterior imported: 1
Interior imported: 0
Other imported: 0
Cover selected: exterior-01.jpg
```

- Low resolution, under 1600px: `Hospital/National Cancer Institute Medical Centers/1.jpg`
- 1 of these are architectural renders rather than photographs.

### Nikan West Hospital

```text
Nikan West Hospital
Source folder: Hospital/WEST NIKAN Hospital
Exterior imported: 1
Interior imported: 0
Other imported: 0
Cover selected: exterior-01.jpg
```

- Low resolution, under 1600px: `Hospital/WEST NIKAN Hospital/1.jpg`
- 1 of these are architectural renders rather than photographs.

### Sepid Hospital

```text
Sepid Hospital
Source folder: Hospital/Sepid Hospital
Exterior imported: 1
Interior imported: 0
Other imported: 0
Cover selected: exterior-01.jpg
```

- Low resolution, under 1600px: `Hospital/Sepid Hospital/1.jpg`
- 1 of these are architectural renders rather than photographs.

### District 14 Specialized Clinic

```text
District 14 Specialized Clinic
Source folder: Hospital/Clinic 14 | کلینیک شهرداری منطقه 14
Exterior imported: 3
Interior imported: 2
Other imported: 0
Cover selected: exterior-01.jpg
```

### 311

```text
311
Source folder: 311
Exterior imported: 8
Interior imported: 15
Other imported: 0
Cover selected: exterior-01.jpg
```

- 23 of these are architectural renders rather than photographs.

Skipped:

- 4 — Outdoor amenity scene, neither a view of the building nor an interior
- 1 — Close-up of one appliance

### B77

```text
B77
Source folder: B77
Exterior imported: 8
Interior imported: 11
Other imported: 0
Cover selected: exterior-01.jpg
```

- 19 of these are architectural renders rather than photographs.
- The renders show the name "77 Boulevard" on the building.

Skipped:

- 6 — Outdoor amenity scene, neither a view of the building nor an interior

### X11

```text
X11
Source folder: X11
Exterior imported: 5
Interior imported: 0
Other imported: 0
Cover selected: exterior-01.jpg
```

- 5 of these are architectural renders rather than photographs.
- The folder holds no images of indoor spaces, so the page has no interior gallery.

Skipped:

- 10 — Outdoor amenity scene, neither a view of the building nor an interior
- 1 — Brochure page with printed text

### Tajik Mall

```text
Tajik Mall
Source folder: tajikmall
Exterior imported: 7
Interior imported: 0
Other imported: 0
Cover selected: exterior-01.jpg
```

- Low resolution, under 1600px: `tajikmall/755fdfed-ebbf-4e52-9747-e93610a7dcbc.png`
- 7 of these are architectural renders rather than photographs.
- The folder holds no images of indoor spaces, so the page has no interior gallery. Its files are under 1800px wide, and the renders show the name "Mall of Tajikistan" on the building.

Skipped:

- 1 — Near-duplicate of the cover

## Projects without source images

- **BAM Niavaran 01** (بام نیاوران ۱)
- **BAM Niavaran 02** (بام نیاوران ۲)
- **BAM Mahtab** (بام مهتاب)
- **BAM Center Farmanieh** (بام سنتر فرمانیه)
- **Avaan Center** (آوان سنتر)
- **Araz Hotel** (هتل آراز) Its images were placed by hand in public/projects/araz-hotel and are listed in data/projectContent.ts, so this import does not manage them.

## Unmatched source folders

No project in `data/projects.ts` matches these folders. Nothing was imported from them.

- `BAM AX/03-BAM ELAHIYEH-63 frame` — 63 images
- `Bam Vatanpur` — 17 images
- `Bam zand shiraz` — 9 images
- `bokharest` — 1 images
- `Edari.tejri/BAM BOKHAREST` — 1 images
- `Edari.tejri/BAM IT Center` — 2 images
- `Hospital/NIKAN CLINIC` — 1 images
- `بام سنتر 9 (وصالی)` — 2 images
- `سعادت آباد` — 5 images
- `پروژه چالوس` — 112 images
- `کلینیک طهرانی` — 4 images
- `کلینیک نیکان` — 3 images

## Needs manual review

These may belong to a project, but the evidence is not strong enough to risk the wrong building. Nothing was imported from them.
To resolve one, add it to `FOLDER_DECISIONS` in `scripts/image-import.config.mjs`, then rerun the import.

- `Edari.tejri/BAM Brand Center1` — 6 images. A "Brand Center 1" tower that the project list does not name directly. Candidates: BAM Center Farmanieh, Avaan Center.
- `Luxurious Residential/BAM Niavaran` — 6 images. No number in the folder name. It looks like the same building as بام نیاوران 3, but that cannot be told apart from Niavaran 1 or 2 without seeing them. Candidates: BAM Niavaran 01, BAM Niavaran 02, BAM Niavaran 03.
- `Residential/Saadatabad` — 1 images. A single render that resembles the BAM Sepid tower. Candidates: BAM Sepid.
- `برند سنتر1` — 4 images. Shares photographs with "BAM Brand Center1", which the project list does not name directly. Candidates: BAM Center Farmanieh, Avaan Center.
- `سروستان 2` — 16 images. Folder name adds words to a project name, so it may be a different building. Candidates: BAM Zafaraniyeh (Sarvestan).
- `نیکان شرق- عکس افتتاحیه` — 151 images. Opening-ceremony photographs of East Nikan Hospital, which is not in the project list. It holds a few good exterior shots if the project is added.

## Set aside as not project photography

- `BAM AX/final` — 60 images. Retouched copies with a BAM logo stamped on the image. The clean camera JPEGs of these shoots were used instead.
- `عکس جوایز` — 10 images. Awards photographs.
- `عکس های دکتر کاوسی بازدید از پروژه ها و دریافت جوایز` — 55 images. Site visits and awards photographs.

## Files ignored by type

- 225 — System or temporary file
- 205 — Camera raw file
- 11 — Image format outside the supported list
- 7 — Video
- 4 — Document
- 1 — Design source file

## How the import works

**The source is read-only.** The script only reads from the source directories. Images are converted into `public/projects`.

**Originals stay out of the site.** Folders that are not in the main source live in `source-images`, which is gitignored. Never place originals in `public`: everything there is published.

**Rerunning is safe and deterministic.** `scripts/.image-import-manifest.json` records every file the script made and which source file it came from.
A rerun keeps files that are still correct, rewrites those that changed and deletes only files it made itself that are no longer selected.
Anything else in `public/projects`, such as a file added by hand, is never touched, and a name it already uses is skipped.

**Choices live in `scripts/image-import.decisions.json`.** It lists, by content hash, the images chosen for each project in display order, with the first exterior image as the cover, and the images rejected on review.
Files can be renamed or moved in the archive without losing those choices.

**New images are never silently published.** An image with no decision is classified from its name and flagged in this report. If the name gives no clue it goes to `other`, which the site does not display.
Run `npm run import:images -- --sheets` to make contact sheets of unreviewed images in `.image-import-review/`.

**Output sizes.** Exterior 2800px, interior 2000px and Visual View card 1400px on the long edge, as high-quality JPEG. Images are never enlarged, and camera metadata including GPS is removed.

Use a different source with the `BAM_IMAGE_SOURCE` environment variable.
