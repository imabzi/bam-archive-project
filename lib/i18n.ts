export const languages = ["en", "fa"] as const;
export type Language = (typeof languages)[number];

export const defaultLanguage: Language = "en";

export function directionOf(language: Language) {
  return language === "fa" ? "rtl" : "ltr";
}

export function formatNumber(value: number, language: Language) {
  return new Intl.NumberFormat(language === "fa" ? "fa-IR" : "en-US").format(value);
}

const en = {
  brand: "BAM",
  brandLabel: "BAM Architecture Archive home",
  primaryNavigation: "Primary navigation",
  archiveTitle: "BAM Architecture Archive",
  archiveShort: "Archive",
  languageLabel: "Language",

  footerNote: "Architectural project archive",

  categoriesLabel: "Project categories",
  categoryAll: "All",
  viewLabel: "Project view",
  viewVisual: "Visual",
  viewIndex: "Index",

  browseAllProjects: "Browse all projects",
  notFoundTitle: "Project not found",

  location: "Location",
  showLocation: "Show project location",

  exteriorPhotographs: "Exterior photographs",
  slideLabel: (position: string) => `Show photograph ${position}`,
  pauseSlideshow: "Pause slideshow",
  playSlideshow: "Play slideshow",
  exteriorAlt: (title: string, position: string) => `${title}, exterior view ${position}`,
  interiors: "Interiors",
  interiorAlt: (title: string, position: string) => `${title}, interior view ${position}`,

  projectInformation: "Project Information",
  factProjectType: "Project Type",
  factLocation: "Location",
  factCompletionYear: "Completion Year",
  factSiteArea: "Site Area",
  factBuiltUpArea: "Built-up Area",
  factGrossFloorArea: "Gross Floor Area",
  factFloors: "Floors",
  factUnits: "Units",
  factBuildings: "Buildings",
  factParking: "Parking",
  factStructure: "Structure",
  factFacade: "Facade",
  factArchitect: "Architect",
  factDeveloper: "Developer",
  factContractor: "Contractor",
  factStatus: "Status",
  squareMeters: "m²",
  listSeparator: ", ",
};

export type Dictionary = typeof en;

const fa: Dictionary = {
  brand: "بام",
  brandLabel: "صفحه اصلی آرشیو معماری بام",
  primaryNavigation: "ناوبری اصلی",
  archiveTitle: "آرشیو معماری بام",
  archiveShort: "آرشیو",
  languageLabel: "زبان",

  footerNote: "آرشیو پروژه‌های معماری",

  categoriesLabel: "دسته‌بندی پروژه‌ها",
  categoryAll: "همه",
  viewLabel: "نحوه نمایش پروژه‌ها",
  viewVisual: "تصویری",
  viewIndex: "فهرست",

  browseAllProjects: "مشاهده همه پروژه‌ها",
  notFoundTitle: "پروژه یافت نشد",

  location: "موقعیت",
  showLocation: "نمایش موقعیت پروژه",

  exteriorPhotographs: "تصاویر نمای بیرونی",
  slideLabel: (position) => `نمایش تصویر ${position}`,
  pauseSlideshow: "توقف نمایش تصاویر",
  playSlideshow: "پخش نمایش تصاویر",
  exteriorAlt: (title, position) => `${title}، نمای بیرونی ${position}`,
  interiors: "فضاهای داخلی",
  interiorAlt: (title, position) => `${title}، فضای داخلی ${position}`,

  projectInformation: "اطلاعات پروژه",
  factProjectType: "نوع پروژه",
  factLocation: "موقعیت",
  factCompletionYear: "سال تکمیل",
  factSiteArea: "مساحت زمین",
  factBuiltUpArea: "زیربنا",
  factGrossFloorArea: "زیربنای ناخالص",
  factFloors: "تعداد طبقات",
  factUnits: "تعداد واحد",
  factBuildings: "تعداد ساختمان",
  factParking: "پارکینگ",
  factStructure: "سازه",
  factFacade: "نما",
  factArchitect: "معمار",
  factDeveloper: "توسعه‌دهنده",
  factContractor: "پیمانکار",
  factStatus: "وضعیت",
  squareMeters: "مترمربع",
  listSeparator: "، ",
};

export const dictionary: Record<Language, Dictionary> = { en, fa };
