import type { Language } from "@/lib/i18n";
import { projectContent } from "./projectContent";
import { importedProjectImages } from "./projectImages.generated";

// A value that exists in both languages.
export type LocalizedText = Record<Language, string>;
// A value that may exist in only one language so far. It is hidden in the other
// language; the UI never falls back to the wrong language.
export type PartialLocalizedText = Partial<LocalizedText>;

export type CategoryId = "residential" | "commercial-leisure" | "large-scale" | "healthcare";

export type ProjectCategory = LocalizedText & { id: CategoryId };

export type ProjectImages = {
  cover?: string;
  card?: string; // A smaller copy of the cover for the Visual View.
  exterior: string[]; // Feeds the hero slider. Exterior photography only.
  interior: string[]; // Feeds the two-column gallery.
  other?: string[]; // Imported but unclassified. Not displayed.
  amenities?: string[];
  details?: string[];
  plans?: string[];
  archive?: string[];
};

export type ProjectLocation = {
  country?: PartialLocalizedText;
  city?: PartialLocalizedText;
  district?: PartialLocalizedText;
  address?: PartialLocalizedText; // Street level, without the district or city.
  latitude?: number;
  longitude?: number;
  mapSpan?: number; // Degrees either side of the marker, for sites larger than a building.
};

// Only add verified values. Anything left out is hidden on the project page.
export type ProjectFacts = {
  completionYear?: PartialLocalizedText; // e.g. { en: "2023", fa: "۱۴۰۱" }
  siteArea?: number; // m²
  builtUpArea?: number; // m²
  grossFloorArea?: number; // m²
  floors?: number;
  units?: number;
  buildings?: number;
  parking?: number;
  structure?: PartialLocalizedText;
  facade?: PartialLocalizedText;
  architect?: PartialLocalizedText;
  developer?: PartialLocalizedText;
  contractor?: PartialLocalizedText;
  status?: PartialLocalizedText;
};

export type Project = {
  code: string;
  slug: string;
  title: LocalizedText;
  category: ProjectCategory;
  description?: PartialLocalizedText;
  images: ProjectImages;
  location?: ProjectLocation;
  facts: ProjectFacts;
};

export type ProjectContent = Partial<Pick<Project, "description" | "images" | "location" | "facts">>;

export const projectCategories: Record<CategoryId, ProjectCategory> = {
  residential: { id: "residential", en: "Residential", fa: "مسکونی" },
  "commercial-leisure": { id: "commercial-leisure", en: "Commercial & Leisure", fa: "تجاری و تفریحی" },
  "large-scale": { id: "large-scale", en: "Large-Scale Development", fa: "توسعه بزرگ‌مقیاس" },
  healthcare: { id: "healthcare", en: "Healthcare", fa: "پزشکی" },
};

const exteriorPlaceholders = [
  "/placeholders/arch-01.svg",
  "/placeholders/arch-02.svg",
  "/placeholders/arch-03.svg",
  "/placeholders/arch-04.svg",
  "/placeholders/arch-05.svg",
  "/placeholders/arch-06.svg",
];

// A project with no photography keeps a neutral placeholder on its Visual View
// card. Its page shows no hero or gallery rather than an image of nothing.
const placeholderImages = (index: number): ProjectImages => ({
  cover: exteriorPlaceholders[index % exteriorPlaceholders.length],
  exterior: [],
  interior: [],
});

const raw: ReadonlyArray<readonly [string, string, string, CategoryId]> = [
  ["R01","بام جمشیدیه","BAM Jamshidieh","residential"],
  ["R02","بام البرز","BAM Alborz","residential"],
  ["R03","بام مهماندوست","BAM Mehmandoost","residential"],
  ["R04","بام نسرین","BAM Nasrin","residential"],
  ["R05","بام نیاوران ۱","BAM Niavaran 01","residential"],
  ["R06","بام نیاوران ۲","BAM Niavaran 02","residential"],
  ["R07","بام نیاوران ۳","BAM Niavaran 03","residential"],
  ["R08","بام نیلوفر","BAM Niloufar","residential"],
  ["R09","بام چوبینه","BAM Choobineh","residential"],
  ["R10","بام فرشته","BAM Fereshteh","residential"],
  ["R11","بام زعفرانیه (سروستان)","BAM Zafaraniyeh (Sarvestan)","residential"],
  ["R12","بام راد","BAM Rad","residential"],
  ["R13","بام سیمین‌دخت","BAM Simindokht","residential"],
  ["R14","بام فرزانه","BAM Farzaneh","residential"],
  ["R15","بام سپید","BAM Sepid","residential"],
  ["R16","بام دربند ۱","BAM Darband 01","residential"],
  ["R17","بام دربند ۲","BAM Darband 02","residential"],
  ["R18","بام نارنجستان","BAM Narenjestan","residential"],
  ["R19","بام نیایش","BAM Niayesh","residential"],
  ["R20","بام سامان","BAM Saman","residential"],
  ["R21","بام مهتاب","BAM Mahtab","residential"],
  ["R22","بام مریم","BAM Maryam","residential"],
  ["T01","بام سنتر - دفتر مرکزی","BAM Center — Head Office","commercial-leisure"],
  ["T02","بام سنتر فرمانیه","BAM Center Farmanieh","commercial-leisure"],
  ["T03","آوان سنتر","Avaan Center","commercial-leisure"],
  ["T04","بام سنتر شریعتی","BAM Center Shariati","commercial-leisure"],
  ["T05","بام سنتر یگانه","BAM Center Yeganeh","commercial-leisure"],
  ["T06","بام سنتر کامرانیه","BAM Center Kamranieh","commercial-leisure"],
  ["T07","مجتمع تجاری نیایش","Niayesh Commercial Complex","commercial-leisure"],
  ["T08","باشگاه سوارکاری بام","BAM Equestrian Club","commercial-leisure"],
  ["T09","بام‌لند","Bamland","commercial-leisure"],
  ["T10","دریاچه مصنوعی خلیج فارس","Persian Gulf Artificial Lake","commercial-leisure"],
  ["T11","هتل آراز","Araz Hotel","commercial-leisure"],
  ["M01","پروژه ۱۰۰۲ واحدی بوستان هشتگرد","Boostan Hashtgerd 1002-Unit Project","large-scale"],
  ["M02","پروژه ایران‌خودرو","Iran Khodro Project","large-scale"],
  ["M03","بوستان عسلویه","Boostan Asaluyeh","large-scale"],
  ["M04","گلستان مشکین‌شهر","Golestan Meshgin Shahr","large-scale"],
  ["H01","بیمارستان نیکان","Nikan Hospital","healthcare"],
  ["H02","کلینیک عرفان","Erfan Clinic","healthcare"],
  ["H03","مرکز ملی سرطان","National Cancer Center","healthcare"],
  ["H04","بیمارستان نیکان غرب","Nikan West Hospital","healthcare"],
  ["H05","بیمارستان سپید","Sepid Hospital","healthcare"],
  ["H06","درمانگاه تخصصی شهرداری منطقه ۱۴","District 14 Specialized Clinic","healthcare"],
];

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/—/g, "-")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export const projects: Project[] = raw.map(([code, titleFa, titleEn, categoryId], index) => {
  const content = projectContent[code];
  return {
    code,
    slug: slugify(titleEn),
    title: { en: titleEn, fa: titleFa },
    category: projectCategories[categoryId],
    description: content?.description,
    images: content?.images ?? importedProjectImages[code] ?? placeholderImages(index),
    location: content?.location,
    facts: content?.facts ?? {},
  };
});

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getCoverImage(project: Project): string | undefined {
  return project.images.card ?? project.images.cover ?? project.images.exterior[0];
}
