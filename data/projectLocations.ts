import type { ProjectLocation } from "./projects";

// The approved location list, keyed by project code. A project appears here only
// with a supplied address and Google Maps link, and only these projects show a
// Location button and fact.
//
// The links are used exactly as supplied: do not rebuild, reorder or "improve"
// them. Some open a public Google Maps listing, others a search for the project's
// known address where the private building has no public listing.

export const approvedLocations: Record<string, Required<Pick<ProjectLocation, "addressFa" | "googleMapsUrl">>> = {
  R01: {
    addressFa: "تهران، نیاوران، جمشیدیه، انتهای خیابان ۲۴، حصارک دوم",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=%D8%AA%D9%87%D8%B1%D8%A7%D9%86%D8%8C%20%D9%86%DB%8C%D8%A7%D9%88%D8%B1%D8%A7%D9%86%D8%8C%20%D8%AC%D9%85%D8%B4%DB%8C%D8%AF%DB%8C%D9%87%D8%8C%20%D8%A7%D9%86%D8%AA%D9%87%D8%A7%DB%8C%20%D8%AE%DB%8C%D8%A7%D8%A8%D8%A7%D9%86%20%DB%B2%DB%B4%D8%8C%20%D8%AD%D8%B5%D8%A7%D8%B1%DA%A9%20%D8%AF%D9%88%D9%85",
  },
  R02: {
    addressFa: "تهران، نیاوران، خیابان یاسر، نبش کوچه سوده",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=%D8%AA%D9%87%D8%B1%D8%A7%D9%86%D8%8C%20%D9%86%DB%8C%D8%A7%D9%88%D8%B1%D8%A7%D9%86%D8%8C%20%D8%AE%DB%8C%D8%A7%D8%A8%D8%A7%D9%86%20%DB%8C%D8%A7%D8%B3%D8%B1%D8%8C%20%D9%86%D8%A8%D8%B4%20%DA%A9%D9%88%DA%86%D9%87%20%D8%B3%D9%88%D8%AF%D9%87",
  },
  R03: {
    addressFa: "تهران، نیاوران، خیابان سعیدی، خیابان مهماندوست",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=%D8%AA%D9%87%D8%B1%D8%A7%D9%86%D8%8C%20%D9%86%DB%8C%D8%A7%D9%88%D8%B1%D8%A7%D9%86%D8%8C%20%D8%AE%DB%8C%D8%A7%D8%A8%D8%A7%D9%86%20%D8%B3%D8%B9%DB%8C%D8%AF%DB%8C%D8%8C%20%D8%AE%DB%8C%D8%A7%D8%A8%D8%A7%D9%86%20%D9%85%D9%87%D9%85%D8%A7%D9%86%D8%AF%D9%88%D8%B3%D8%AA",
  },
  R04: {
    addressFa: "تهران، فرمانیه، خیابان سنبل، خیابان نسرین",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=%D8%AA%D9%87%D8%B1%D8%A7%D9%86%D8%8C%20%D9%81%D8%B1%D9%85%D8%A7%D9%86%DB%8C%D9%87%D8%8C%20%D8%AE%DB%8C%D8%A7%D8%A8%D8%A7%D9%86%20%D8%B3%D9%86%D8%A8%D9%84%D8%8C%20%D8%AE%DB%8C%D8%A7%D8%A8%D8%A7%D9%86%20%D9%86%D8%B3%D8%B1%DB%8C%D9%86",
  },
  R05: {
    addressFa: "تهران، نیاوران، خیابان یاسر، حوالی نبش کوچه شیرین",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=%D8%AA%D9%87%D8%B1%D8%A7%D9%86%D8%8C%20%D9%86%DB%8C%D8%A7%D9%88%D8%B1%D8%A7%D9%86%D8%8C%20%D8%AE%DB%8C%D8%A7%D8%A8%D8%A7%D9%86%20%DB%8C%D8%A7%D8%B3%D8%B1%D8%8C%20%D8%AD%D9%88%D8%A7%D9%84%DB%8C%20%D9%86%D8%A8%D8%B4%20%DA%A9%D9%88%DA%86%D9%87%20%D8%B4%DB%8C%D8%B1%DB%8C%D9%86",
  },
  R06: {
    addressFa: "تهران، نیاوران، خیابان یاسر، حوالی کوچه شیرین",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=%D8%AA%D9%87%D8%B1%D8%A7%D9%86%D8%8C%20%D9%86%DB%8C%D8%A7%D9%88%D8%B1%D8%A7%D9%86%D8%8C%20%D8%AE%DB%8C%D8%A7%D8%A8%D8%A7%D9%86%20%DB%8C%D8%A7%D8%B3%D8%B1%D8%8C%20%D8%AD%D9%88%D8%A7%D9%84%DB%8C%20%DA%A9%D9%88%DA%86%D9%87%20%D8%B4%DB%8C%D8%B1%DB%8C%D9%86",
  },
  R07: {
    addressFa: "تهران، نیاوران، خیابان یاسر",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=%D8%A8%D8%A7%D9%85%20%D9%86%DB%8C%D8%A7%D9%88%D8%B1%D8%A7%D9%86%20%DB%B3%20%D8%AA%D9%87%D8%B1%D8%A7%D9%86%D8%8C%20%D9%86%DB%8C%D8%A7%D9%88%D8%B1%D8%A7%D9%86%D8%8C%20%D8%AE%DB%8C%D8%A7%D8%A8%D8%A7%D9%86%20%DB%8C%D8%A7%D8%B3%D8%B1",
  },
  R08: {
    addressFa: "تهران، فرمانیه، دیباجی شمالی، خیابان سنبل، خیابان نسرین",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=%D8%AA%D9%87%D8%B1%D8%A7%D9%86%D8%8C%20%D9%81%D8%B1%D9%85%D8%A7%D9%86%DB%8C%D9%87%D8%8C%20%D8%AF%DB%8C%D8%A8%D8%A7%D8%AC%DB%8C%20%D8%B4%D9%85%D8%A7%D9%84%DB%8C%D8%8C%20%D8%AE%DB%8C%D8%A7%D8%A8%D8%A7%D9%86%20%D8%B3%D9%86%D8%A8%D9%84%D8%8C%20%D8%AE%DB%8C%D8%A7%D8%A8%D8%A7%D9%86%20%D9%86%D8%B3%D8%B1%DB%8C%D9%86",
  },
  R09: {
    addressFa: "تهران، جماران، خیابان شهید حسن‌پور، خیابان چوبینه",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=%D8%AA%D9%87%D8%B1%D8%A7%D9%86%D8%8C%20%D8%AC%D9%85%D8%A7%D8%B1%D8%A7%D9%86%D8%8C%20%D8%AE%DB%8C%D8%A7%D8%A8%D8%A7%D9%86%20%D8%B4%D9%87%DB%8C%D8%AF%20%D8%AD%D8%B3%D9%86%E2%80%8C%D9%BE%D9%88%D8%B1%D8%8C%20%D8%AE%DB%8C%D8%A7%D8%A8%D8%A7%D9%86%20%DA%86%D9%88%D8%A8%DB%8C%D9%86%D9%87",
  },
  R10: {
    addressFa: "تهران، الهیه، خیابان آقابزرگی، بن‌بست ولی",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=%D8%AA%D9%87%D8%B1%D8%A7%D9%86%D8%8C%20%D8%A7%D9%84%D9%87%DB%8C%D9%87%D8%8C%20%D8%AE%DB%8C%D8%A7%D8%A8%D8%A7%D9%86%20%D8%A2%D9%82%D8%A7%D8%A8%D8%B2%D8%B1%DA%AF%DB%8C%D8%8C%20%D8%A8%D9%86%E2%80%8C%D8%A8%D8%B3%D8%AA%20%D9%88%D9%84%DB%8C",
  },
  R11: {
    addressFa: "تهران، زعفرانیه، خیابان حسینی، کوه‌دامن غربی",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=%D8%AA%D9%87%D8%B1%D8%A7%D9%86%D8%8C%20%D8%B2%D8%B9%D9%81%D8%B1%D8%A7%D9%86%DB%8C%D9%87%D8%8C%20%D8%AE%DB%8C%D8%A7%D8%A8%D8%A7%D9%86%20%D8%AD%D8%B3%DB%8C%D9%86%DB%8C%D8%8C%20%DA%A9%D9%88%D9%87%E2%80%8C%D8%AF%D8%A7%D9%85%D9%86%20%D8%BA%D8%B1%D8%A8%DB%8C",
  },
  R12: {
    addressFa: "تهران، نیاوران، کوچه راد، کوچه توتیا، پلاک ۶",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=%D8%AA%D9%87%D8%B1%D8%A7%D9%86%D8%8C%20%D9%86%DB%8C%D8%A7%D9%88%D8%B1%D8%A7%D9%86%D8%8C%20%DA%A9%D9%88%DA%86%D9%87%20%D8%B1%D8%A7%D8%AF%D8%8C%20%DA%A9%D9%88%DA%86%D9%87%20%D8%AA%D9%88%D8%AA%DB%8C%D8%A7%D8%8C%20%D9%BE%D9%84%D8%A7%DA%A9%20%DB%B6",
  },
  R13: {
    addressFa: "تهران، فرمانیه شرقی، خیابان تنگستان اول",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=%D8%AA%D9%87%D8%B1%D8%A7%D9%86%D8%8C%20%D9%81%D8%B1%D9%85%D8%A7%D9%86%DB%8C%D9%87%20%D8%B4%D8%B1%D9%82%DB%8C%D8%8C%20%D8%AE%DB%8C%D8%A7%D8%A8%D8%A7%D9%86%20%D8%AA%D9%86%DA%AF%D8%B3%D8%AA%D8%A7%D9%86%20%D8%A7%D9%88%D9%84",
  },
  R14: {
    addressFa: "تهران، فرمانیه شرقی، خیابان تنگستان اول، پلاک ۹",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=%D8%AA%D9%87%D8%B1%D8%A7%D9%86%D8%8C%20%D9%81%D8%B1%D9%85%D8%A7%D9%86%DB%8C%D9%87%20%D8%B4%D8%B1%D9%82%DB%8C%D8%8C%20%D8%AE%DB%8C%D8%A7%D8%A8%D8%A7%D9%86%20%D8%AA%D9%86%DA%AF%D8%B3%D8%AA%D8%A7%D9%86%20%D8%A7%D9%88%D9%84%D8%8C%20%D9%BE%D9%84%D8%A7%DA%A9%20%DB%B9",
  },
  R15: {
    addressFa: "تهران، سعادت‌آباد، میدان کتاب، بلوار فرحزادی",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=%D8%AA%D9%87%D8%B1%D8%A7%D9%86%D8%8C%20%D8%B3%D8%B9%D8%A7%D8%AF%D8%AA%E2%80%8C%D8%A2%D8%A8%D8%A7%D8%AF%D8%8C%20%D9%85%DB%8C%D8%AF%D8%A7%D9%86%20%DA%A9%D8%AA%D8%A7%D8%A8%D8%8C%20%D8%A8%D9%84%D9%88%D8%A7%D8%B1%20%D9%81%D8%B1%D8%AD%D8%B2%D8%A7%D8%AF%DB%8C",
  },
  R19: {
    addressFa: "تهران، محدوده شمال‌غرب تهران، اطراف بزرگراه نیایش",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=%D8%A8%D8%A7%D9%85%20%D9%86%DB%8C%D8%A7%DB%8C%D8%B4%20%D8%AA%D9%87%D8%B1%D8%A7%D9%86%D8%8C%20%D9%85%D8%AD%D8%AF%D9%88%D8%AF%D9%87%20%D8%B4%D9%85%D8%A7%D9%84%E2%80%8C%D8%BA%D8%B1%D8%A8%20%D8%AA%D9%87%D8%B1%D8%A7%D9%86%D8%8C%20%D8%A7%D8%B7%D8%B1%D8%A7%D9%81%20%D8%A8%D8%B2%D8%B1%DA%AF%D8%B1%D8%A7%D9%87%20%D9%86%DB%8C%D8%A7%DB%8C%D8%B4",
  },
  R20: {
    addressFa: "تهران، شمس‌آباد، خیابان افتخاری، بلوار سامان",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=%D8%AA%D9%87%D8%B1%D8%A7%D9%86%D8%8C%20%D8%B4%D9%85%D8%B3%E2%80%8C%D8%A2%D8%A8%D8%A7%D8%AF%D8%8C%20%D8%AE%DB%8C%D8%A7%D8%A8%D8%A7%D9%86%20%D8%A7%D9%81%D8%AA%D8%AE%D8%A7%D8%B1%DB%8C%D8%8C%20%D8%A8%D9%84%D9%88%D8%A7%D8%B1%20%D8%B3%D8%A7%D9%85%D8%A7%D9%86",
  },
  T01: {
    addressFa: "تهران، بلوار اندرزگو، ابتدای خیابان وطن‌پور شمالی، پلاک ۵",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=%D8%AA%D9%87%D8%B1%D8%A7%D9%86%D8%8C%20%D8%A8%D9%84%D9%88%D8%A7%D8%B1%20%D8%A7%D9%86%D8%AF%D8%B1%D8%B2%DA%AF%D9%88%D8%8C%20%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%DB%8C%20%D8%AE%DB%8C%D8%A7%D8%A8%D8%A7%D9%86%20%D9%88%D8%B7%D9%86%E2%80%8C%D9%BE%D9%88%D8%B1%20%D8%B4%D9%85%D8%A7%D9%84%DB%8C%D8%8C%20%D9%BE%D9%84%D8%A7%DA%A9%20%DB%B5",
  },
  T02: {
    addressFa: "تهران، فرمانیه، خیابان فرمانیه (شهید لواسانی)، روبه‌روی باشگاه فرمانیه",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=%D8%AA%D9%87%D8%B1%D8%A7%D9%86%D8%8C%20%D9%81%D8%B1%D9%85%D8%A7%D9%86%DB%8C%D9%87%D8%8C%20%D8%AE%DB%8C%D8%A7%D8%A8%D8%A7%D9%86%20%D9%81%D8%B1%D9%85%D8%A7%D9%86%DB%8C%D9%87%20%28%D8%B4%D9%87%DB%8C%D8%AF%20%D9%84%D9%88%D8%A7%D8%B3%D8%A7%D9%86%DB%8C%29%D8%8C%20%D8%B1%D9%88%D8%A8%D9%87%E2%80%8C%D8%B1%D9%88%DB%8C%20%D8%A8%D8%A7%D8%B4%DA%AF%D8%A7%D9%87%20%D9%81%D8%B1%D9%85%D8%A7%D9%86%DB%8C%D9%87",
  },
  T03: {
    addressFa: "تهران، بلوار اندرزگو، خیابان وطن‌پور جنوبی",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=%D8%AA%D9%87%D8%B1%D8%A7%D9%86%D8%8C%20%D8%A8%D9%84%D9%88%D8%A7%D8%B1%20%D8%A7%D9%86%D8%AF%D8%B1%D8%B2%DA%AF%D9%88%D8%8C%20%D8%AE%DB%8C%D8%A7%D8%A8%D8%A7%D9%86%20%D9%88%D8%B7%D9%86%E2%80%8C%D9%BE%D9%88%D8%B1%20%D8%AC%D9%86%D9%88%D8%A8%DB%8C",
  },
  T05: {
    addressFa: "تهران، فرمانیه، خیابان لواسانی، بن‌بست یگانه",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=%D8%AA%D9%87%D8%B1%D8%A7%D9%86%D8%8C%20%D9%81%D8%B1%D9%85%D8%A7%D9%86%DB%8C%D9%87%D8%8C%20%D8%AE%DB%8C%D8%A7%D8%A8%D8%A7%D9%86%20%D9%84%D9%88%D8%A7%D8%B3%D8%A7%D9%86%DB%8C%D8%8C%20%D8%A8%D9%86%E2%80%8C%D8%A8%D8%B3%D8%AA%20%DB%8C%DA%AF%D8%A7%D9%86%D9%87",
  },
  T06: {
    addressFa: "تهران، کامرانیه، خیابان بازدار، نبش کوچه ریحانه، پلاک ۱۴",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=%D8%AA%D9%87%D8%B1%D8%A7%D9%86%D8%8C%20%DA%A9%D8%A7%D9%85%D8%B1%D8%A7%D9%86%DB%8C%D9%87%D8%8C%20%D8%AE%DB%8C%D8%A7%D8%A8%D8%A7%D9%86%20%D8%A8%D8%A7%D8%B2%D8%AF%D8%A7%D8%B1%D8%8C%20%D9%86%D8%A8%D8%B4%20%DA%A9%D9%88%DA%86%D9%87%20%D8%B1%DB%8C%D8%AD%D8%A7%D9%86%D9%87%D8%8C%20%D9%BE%D9%84%D8%A7%DA%A9%20%DB%B1%DB%B4",
  },
  T07: {
    addressFa: "تهران، جنت‌آباد، خیابان رجب صلاحی، بن‌بست چناران",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=%D8%AA%D9%87%D8%B1%D8%A7%D9%86%D8%8C%20%D8%AC%D9%86%D8%AA%E2%80%8C%D8%A2%D8%A8%D8%A7%D8%AF%D8%8C%20%D8%AE%DB%8C%D8%A7%D8%A8%D8%A7%D9%86%20%D8%B1%D8%AC%D8%A8%20%D8%B5%D9%84%D8%A7%D8%AD%DB%8C%D8%8C%20%D8%A8%D9%86%E2%80%8C%D8%A8%D8%B3%D8%AA%20%DA%86%D9%86%D8%A7%D8%B1%D8%A7%D9%86",
  },
  T09: {
    addressFa: "تهران، منطقه ۲۲، بزرگراه همت غرب، خروجی بلوار کاشان، میدان موج، بلوار صدف، مجموعه بام‌لند",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=P6VC%2BRG6%20Tehran",
  },
  T10: {
    addressFa: "تهران، منطقه ۲۲، دریاچه شهدای خلیج فارس (چیتگر)",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=%D8%AF%D8%B1%DB%8C%D8%A7%DA%86%D9%87%20%DA%86%DB%8C%D8%AA%DA%AF%D8%B1%20%D8%AA%D9%87%D8%B1%D8%A7%D9%86",
  },
  H01: {
    addressFa: "تهران، اقدسیه، ابتدای بلوار ارتش، ورودی اراج، خیابان ۲۲ بهمن، پلاک ۶",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Nikan%20Hospital%20Aghdasieh%20Tehran&query_place_id=ChIJ1SZ4lOEEjj8RgCkgq0ca1fE",
  },
  H02: {
    addressFa: "تهران، سعادت‌آباد، خیابان شهید ریاضی بخشایش، مجاور بیمارستان عرفان",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=%D8%AA%D9%87%D8%B1%D8%A7%D9%86%D8%8C%20%D8%B3%D8%B9%D8%A7%D8%AF%D8%AA%E2%80%8C%D8%A2%D8%A8%D8%A7%D8%AF%D8%8C%20%D8%AE%DB%8C%D8%A7%D8%A8%D8%A7%D9%86%20%D8%B4%D9%87%DB%8C%D8%AF%20%D8%B1%DB%8C%D8%A7%D8%B6%DB%8C%20%D8%A8%D8%AE%D8%B4%D8%A7%DB%8C%D8%B4%D8%8C%20%D9%85%D8%AC%D8%A7%D9%88%D8%B1%20%D8%A8%DB%8C%D9%85%D8%A7%D8%B1%D8%B3%D8%AA%D8%A7%D9%86%20%D8%B9%D8%B1%D9%81%D8%A7%D9%86",
  },
  H04: {
    addressFa: "تهران، بزرگراه همت به سمت غرب، نرسیده به میدان المپیک، روبه‌روی پارک جوانمردان",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=West%20Nikan%20Hospital%20Tehran&query_place_id=ChIJhckYmUHjjT8RYpAd7ltBpJg",
  },
  H05: {
    addressFa: "تهران، حکیمیه، بلوار بهار، بلوار شهید بابائیان، بیمارستان نیکان سپید",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Nikan%20Sepid%20Hospital%20Tehran&query_place_id=ChIJjTGeUOMdjj8ROo83TDaTJAo",
  },
  H06: {
    addressFa: "تهران، ابتدای بزرگراه شهید محلاتی، نبش خیابان گیلکی جنوبی",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=%D8%AA%D9%87%D8%B1%D8%A7%D9%86%D8%8C%20%D8%A7%D8%A8%D8%AA%D8%AF%D8%A7%DB%8C%20%D8%A8%D8%B2%D8%B1%DA%AF%D8%B1%D8%A7%D9%87%20%D8%B4%D9%87%DB%8C%D8%AF%20%D9%85%D8%AD%D9%84%D8%A7%D8%AA%DB%8C%D8%8C%20%D9%86%D8%A8%D8%B4%20%D8%AE%DB%8C%D8%A7%D8%A8%D8%A7%D9%86%20%DA%AF%DB%8C%D9%84%DA%A9%DB%8C%20%D8%AC%D9%86%D9%88%D8%A8%DB%8C",
  },
};
