import type { LocalizedText, ProjectContent } from "./projects";

// Verified project content, keyed by project code. PROJECT_RESEARCH_REPORT.md
// records the source and confidence of every value here. Add only what has been
// verified: anything left out is hidden on the project page. Approved addresses
// and map links are kept separately in projectLocations.ts.
//
// Years are Gregorian in English and Solar Hijri in Persian; one Solar Hijri year
// spans two Gregorian years, so "2011–12" is used when the month is not known.

const iran: LocalizedText = { en: "Iran", fa: "ایران" };
const tehran: LocalizedText = { en: "Tehran", fa: "تهران" };
const inTehran = { city: tehran, country: iran };
const daliri: LocalizedText = { en: "Farzad Daliri", fa: "فرزاد دلیری" };

export const projectContent: Record<string, ProjectContent> = {
  R01: {
    description: {
      en: "A residential building south of Jamshidieh Park, on the Alborz foothills in northern Tehran. It received a national award for luxury residential buildings in 2011–12.",
      fa: "ساختمانی مسکونی در جنوب پارک جمشیدیه، در دامنه البرز و شمال تهران. این ساختمان در سال ۱۳۹۰ جایزه لوکس‌ترین ساختمان کشور را دریافت کرد.",
    },
    location: { ...inTehran, district: { en: "Jamshidieh", fa: "جمشیدیه" } },
    facts: {
      completionYear: { en: "2011–12", fa: "۱۳۹۰" },
      siteArea: 2918,
      architect: daliri,
    },
  },
  R02: {
    description: {
      en: "A residential building in Niavaran, northern Tehran, with views of the Alborz range to the north and the city to the south. Shared spaces include a six-metre-high lobby, a pool complex and a gym.",
      fa: "ساختمانی مسکونی در نیاوران، شمال تهران، با چشم‌انداز رشته‌کوه البرز در شمال و شهر تهران در جنوب. لابی با ارتفاع شش متر، مجموعه استخر و سالن بدنسازی از فضاهای مشاع آن است.",
    },
    location: { ...inTehran, district: { en: "Niavaran", fa: "نیاوران" } },
    facts: { floors: 8 },
  },
  R03: {
    description: {
      en: "A residential tower of pyramidal form in Niavaran, northern Tehran, built on a 1,543 m² site. The stepped massing is paired with a five-metre-high lobby and tall interior ceilings.",
      fa: "برجی مسکونی با فرم هرمی در نیاوران، شمال تهران، بر زمینی به مساحت ۱٬۵۴۳ مترمربع. لابی با ارتفاع پنج متر و سقف‌های بلند از ویژگی‌های این ساختمان است.",
    },
    location: { ...inTehran, district: { en: "Niavaran", fa: "نیاوران" } },
    facts: { siteArea: 1543 },
  },
  R04: {
    description: {
      en: "A ten-unit residential building in Farmanieh, northern Tehran. Shared spaces include a six-metre-high lobby of 400 m², a multipurpose hall, a pool complex and a gym.",
      fa: "ساختمانی مسکونی ده واحدی در فرمانیه، شمال تهران. لابی ۴۰۰ مترمربعی با ارتفاع شش متر، سالن چندمنظوره، مجموعه استخر و سالن بدنسازی از فضاهای مشاع آن است.",
    },
    location: { ...inTehran, district: { en: "Farmanieh", fa: "فرمانیه" } },
    facts: { units: 10 },
  },
  R05: {
    description: {
      en: "One of three separate residential buildings in Niavaran that share a single facade design, together with BAM Niavaran 02 and BAM Niavaran 03.",
      fa: "یکی از سه ساختمان مسکونی مجزا در نیاوران با طراحی واحد در نما، در کنار بام نیاوران ۲ و بام نیاوران ۳.",
    },
    location: { ...inTehran, district: { en: "Niavaran", fa: "نیاوران" } },
  },
  R06: {
    description: {
      en: "One of three separate residential buildings in Niavaran that share a single facade design, together with BAM Niavaran 01 and BAM Niavaran 03.",
      fa: "یکی از سه ساختمان مسکونی مجزا در نیاوران با طراحی واحد در نما، در کنار بام نیاوران ۱ و بام نیاوران ۳.",
    },
    location: { ...inTehran, district: { en: "Niavaran", fa: "نیاوران" } },
  },
  R07: {
    description: {
      en: "A residential building on Yaser Street in Niavaran, one of three separate buildings that share a single facade design, together with BAM Niavaran 01 and BAM Niavaran 02.",
      fa: "ساختمانی مسکونی در خیابان یاسر نیاوران، یکی از سه ساختمان مجزا با طراحی واحد در نما، در کنار بام نیاوران ۱ و بام نیاوران ۲.",
    },
    location: { ...inTehran, district: { en: "Niavaran", fa: "نیاوران" } },
  },
  R08: {
    description: {
      en: "A 14-storey residential building in Farmanieh with nine single-unit apartments. An eight-metre-high lobby leads to an assembly hall, a pool, a sauna and a gym.",
      fa: "ساختمانی مسکونی ۱۴ طبقه در فرمانیه با نُه آپارتمان تک‌واحدی. لابی با ارتفاع هشت متر، سالن اجتماعات، استخر، سونا و سالن بدنسازی از فضاهای مشاع آن است.",
    },
    location: { ...inTehran, district: { en: "Farmanieh", fa: "فرمانیه" } },
    facts: { floors: 14, units: 9 },
  },
  R09: {
    description: {
      en: "A private residential villa, with architectural design by Farzad Daliri.",
      fa: "ویلایی مسکونی با طراحی معماری فرزاد دلیری.",
    },
    facts: { architect: daliri },
  },
  R10: {
    description: {
      en: "A residential building in the Fereshteh area of Tehran, with access to Shahid Chamran Expressway and to Valiasr and Shariati streets.",
      fa: "ساختمانی مسکونی در محدوده فرشته تهران، با دسترسی به بزرگراه شهید چمران و خیابان‌های ولیعصر و شریعتی.",
    },
    location: inTehran,
  },
  R11: {
    description: {
      en: "A residential building in Zafaraniyeh, north of Asef Street, built on a 3,023 m² site.",
      fa: "ساختمانی مسکونی در زعفرانیه، شمال خیابان آصف، بر زمینی به مساحت ۳٬۰۲۳ مترمربع.",
    },
    location: { ...inTehran, district: { en: "Zafaraniyeh", fa: "زعفرانیه" } },
    facts: { siteArea: 3023 },
  },
  R12: {
    description: {
      en: "A 15-storey residential building in Niavaran, northern Tehran, on a 2,490 m² site, with a tall lobby and high interior ceilings.",
      fa: "ساختمانی مسکونی ۱۵ طبقه در نیاوران، شمال تهران، بر زمینی به مساحت ۲٬۴۹۰ مترمربع، با لابی و سقف‌های بلند.",
    },
    location: { ...inTehran, district: { en: "Niavaran", fa: "نیاوران" } },
    facts: { siteArea: 2490, builtUpArea: 16900, floors: 15 },
  },
  R13: {
    description: {
      en: "One of BAM's first modern residential buildings, in East Farmanieh. The facade, lobby, units, pool and sports hall share a modern language without historical forms.",
      fa: "از نخستین ساختمان‌های مسکونی مدرن گروه بام، در فرمانیه شرقی. نما، لابی، واحدها، استخر و سالن ورزشی با زبانی مدرن و بدون فرم‌های تاریخی طراحی شده‌اند.",
    },
    location: { ...inTehran, district: { en: "East Farmanieh", fa: "فرمانیه شرقی" } },
  },
  R14: {
    description: {
      en: "A residential building in East Farmanieh, designed and built by BAM after BAM Simindokht.",
      fa: "ساختمانی مسکونی در فرمانیه شرقی که گروه بام پس از بام سیمین‌دخت طراحی و اجرا کرده است.",
    },
    location: { ...inTehran, district: { en: "East Farmanieh", fa: "فرمانیه شرقی" } },
    facts: { builtUpArea: 10114 },
  },
  R15: {
    description: {
      en: "A residential complex in Saadat Abad, developed for a community of doctors and health-care professionals. Sepid, the Persian word for white, refers to clarity and purity.",
      fa: "مجموعه‌ای مسکونی در سعادت‌آباد برای جامعه پزشکان و فعالان حوزه سلامت. نام سپید به شفافیت و پاکی اشاره دارد.",
    },
    location: { ...inTehran, district: { en: "Saadat Abad", fa: "سعادت‌آباد" } },
  },
  R16: {
    description: {
      en: "A residential building in Darband, on the slopes of the Alborz range, with an outlook east over Tehran.",
      fa: "ساختمانی مسکونی در دربند، بر دامنه رشته‌کوه البرز، با چشم‌اندازی به سوی شرق تهران.",
    },
    location: { ...inTehran, district: { en: "Darband", fa: "دربند" } },
  },
  R17: {
    description: {
      en: "A residential building in Darband, with a lobby, a swimming pool, dry and steam saunas, a jacuzzi and a sports hall.",
      fa: "ساختمانی مسکونی در دربند، با لابی، استخر، سونای خشک و بخار، جکوزی و سالن ورزشی.",
    },
    location: { ...inTehran, district: { en: "Darband", fa: "دربند" } },
  },
  R18: {
    description: {
      en: "A residential building with five residential floors, a five-metre-high lobby and an assembly hall, with architectural design by Farzad Daliri.",
      fa: "ساختمانی مسکونی با پنج طبقه مسکونی، لابی با ارتفاع پنج متر و سالن اجتماعات، با طراحی معماری فرزاد دلیری.",
    },
    facts: { architect: daliri },
  },
  R19: {
    description: {
      en: "A modern residential building in northwest Tehran, with access to the Niayesh, Hemmat, Sattari and Hakim expressways.",
      fa: "ساختمانی مسکونی و مدرن در شمال غرب تهران، با دسترسی به بزرگراه‌های نیایش، همت، ستاری و حکیم.",
    },
    location: inTehran,
  },
  R20: {
    description: {
      en: "A residential complex of 140 units in seven five-storey buildings, composed as one unified facade. Five separate lobbies serve the buildings, with a sports complex, a pool and an assembly hall.",
      fa: "مجموعه‌ای مسکونی با ۱۴۰ واحد در هفت ساختمان پنج طبقه، با نمایی یکپارچه. پنج لابی مجزا، مجموعه ورزشی، استخر و سالن اجتماعات از فضاهای مشاع آن است.",
    },
    facts: { floors: 5, units: 140, buildings: 7 },
  },
  T01: {
    description: {
      en: "The head office of the BAM group on Andarzgoo Boulevard in northern Tehran. It houses the group's investment, design, engineering, construction and administrative departments.",
      fa: "دفتر مرکزی گروه بام در بلوار اندرزگو، شمال تهران. بخش‌های سرمایه‌گذاری، طراحی، مهندسی، اجرا و اداری گروه در این ساختمان مستقرند.",
    },
    location: inTehran,
    facts: { architect: daliri },
  },
  T02: {
    description: {
      en: "A 16-storey office and commercial centre on Farmanieh Street, also known as BAM Brand Center.",
      fa: "مرکزی اداری و تجاری ۱۶ طبقه در خیابان فرمانیه، که با نام بام برند سنتر نیز شناخته می‌شود.",
    },
    location: { ...inTehran, district: { en: "Farmanieh", fa: "فرمانیه" } },
    facts: { floors: 16, architect: daliri },
  },
  T03: {
    description: {
      en: "A commercial and office complex on Andarzgoo Boulevard in northern Tehran, also known as BAM Center Avan, planned as a specialist centre for computers, phones and electronics.",
      fa: "مجموعه‌ای تجاری و اداری در بلوار اندرزگو، شمال تهران، با نام دیگر بام سنتر آوان، که به‌عنوان مرکز تخصصی رایانه، تلفن همراه و تجهیزات الکترونیکی طراحی شده است.",
    },
    location: inTehran,
    facts: { architect: daliri },
  },
  T04: {
    description: {
      en: "An office and commercial centre in Tehran with a classical composition, with access to Shariati and Pasdaran streets and the Hemmat and Sayad Shirazi expressways.",
      fa: "مرکزی اداری و تجاری در تهران با ترکیبی کلاسیک، با دسترسی به خیابان‌های شریعتی و پاسداران و بزرگراه‌های همت و صیاد شیرازی.",
    },
    location: inTehran,
  },
  T05: {
    description: {
      en: "An office and commercial centre in Tehran, designed in a modern architectural language.",
      fa: "مرکزی اداری و تجاری در تهران با زبان معماری مدرن.",
    },
    location: inTehran,
  },
  T06: {
    description: {
      en: "An office and commercial centre beside Kamranieh Street in northern Tehran.",
      fa: "مرکزی اداری و تجاری در کنار خیابان کامرانیه، شمال تهران.",
    },
    location: { ...inTehran, district: { en: "Kamranieh", fa: "کامرانیه" } },
    facts: { architect: daliri },
  },
  T07: {
    description: {
      en: "A commercial and leisure complex in Jannat Abad, western Tehran, also known as BAM Center Niayesh and Niayesh Mall. Its floors combine shops, restaurants and an indoor amusement park.",
      fa: "مجموعه‌ای تجاری و تفریحی در جنت‌آباد، غرب تهران، با نام‌های بام سنتر نیایش و نیایش مال. طبقات آن فروشگاه‌ها، رستوران‌ها و شهربازی سرپوشیده را در بر می‌گیرد.",
    },
    location: { ...inTehran, district: { en: "Jannat Abad", fa: "جنت‌آباد" } },
  },
  T08: {
    description: {
      en: "An equestrian club in Chitgar Park, western Tehran, with competition, training and covered arenas.",
      fa: "باشگاهی سوارکاری در پارک چیتگر، غرب تهران، با مانژ مسابقات، مانژ تمرین و مانژ سرپوشیده.",
    },
    location: { ...inTehran, district: { en: "Chitgar Park", fa: "پارک چیتگر" } },
  },
  T09: {
    description: {
      en: "A commercial and leisure complex of low-rise buildings on the east side of Chitgar Lake in Tehran's District 22, designed by Morteza Adib and Maryam Yousefi.",
      fa: "مجموعه‌ای تجاری و تفریحی با بناهای کم‌ارتفاع در ضلع شرقی دریاچه چیتگر، منطقه ۲۲ تهران، با طراحی مرتضی ادیب و مریم یوسفی.",
    },
    location: { ...inTehran, district: { en: "District 22", fa: "منطقه ۲۲" } },
    facts: {
      siteArea: 60000,
      floors: 3,
      architect: { en: "Morteza Adib, Maryam Yousefi", fa: "مرتضی ادیب، مریم یوسفی" },
    },
  },
  T10: {
    description: {
      en: "An artificial lake in Tehran's District 22, also known as Chitgar Lake, with a water surface of about 130 hectares. Its first phase opened in May 2013.",
      fa: "دریاچه‌ای مصنوعی در منطقه ۲۲ تهران، با نام دیگر دریاچه چیتگر و سطح آبی حدود ۱۳۰ هکتار. فاز نخست آن در اردیبهشت ۱۳۹۲ افتتاح شد.",
    },
    location: { ...inTehran, district: { en: "District 22", fa: "منطقه ۲۲" } },
  },
  T11: {
    description: {
      en: "A hotel on the Caspian coast of Mazandaran, between Nowshahr and Noor, with more than 500 rooms, built by BAM.",
      fa: "هتلی در ساحل دریای خزر در مازندران، میان نوشهر و نور، با بیش از ۵۰۰ واحد اقامتی، ساخته‌شده توسط گروه بام.",
    },
    location: { city: { en: "Nowshahr", fa: "نوشهر" }, country: iran },
    // Placed by hand in public/projects/araz-hotel. The image import does not manage them.
    images: {
      cover: "/projects/araz-hotel/card.jpg",
      exterior: [
        "/projects/araz-hotel/main.jpg",
        "/projects/araz-hotel/67d2750c972742198940e80e715c0425.jpg",
        "/projects/araz-hotel/پدل-scaled.webp",
        "/projects/araz-hotel/رستوران-کسپی.webp",
      ],
      interior: [
        "/projects/araz-hotel/e663aaf0-67aa-44cc-a914-fc1871379ef1.webp",
        "/projects/araz-hotel/f5f0cb13-50cc-46ce-8ddf-0f50fa4b3521.webp",
        "/projects/araz-hotel/about-us-5-scaled.jpg",
      ],
    },
  },
  M01: {
    description: {
      en: "A residential development of 1,002 units in Hashtgerd New Town.",
      fa: "مجموعه‌ای مسکونی با ۱٬۰۰۲ واحد در شهر جدید هشتگرد.",
    },
    location: { city: { en: "Hashtgerd New Town", fa: "شهر جدید هشتگرد" }, country: iran },
    facts: { units: 1002 },
  },
  M03: {
    location: { city: { en: "Asaluyeh", fa: "عسلویه" }, country: iran },
  },
  M04: {
    location: { city: { en: "Meshgin Shahr", fa: "مشکین‌شهر" }, country: iran },
  },
  H01: {
    description: {
      en: "A hospital on 22 Bahman Street in Aqdasiyeh, northeast Tehran.",
      fa: "بیمارستانی در خیابان ۲۲ بهمن، اقدسیه، شمال شرق تهران.",
    },
    location: { ...inTehran, district: { en: "Aqdasiyeh", fa: "اقدسیه" } },
  },
  H02: {
    description: {
      en: "A building for specialist physicians in northwest Tehran, adjacent to Erfan Hospital.",
      fa: "ساختمانی برای پزشکان فوق‌تخصص در شمال غرب تهران، در مجاورت بیمارستان عرفان.",
    },
    location: inTehran,
  },
  H03: {
    description: {
      en: "A 12-storey hospital dedicated to cancer research, education and treatment, also titled Iran Comprehensive Cancer Hospital. ERGA of Lebanon is the main architectural consultant and Mebex the hospital consultant.",
      fa: "بیمارستانی ۱۲ طبقه برای پژوهش، آموزش و درمان سرطان، با عنوان دیگر بیمارستان جامع سرطان ایران. شرکت ارگا از لبنان مشاور اصلی معماری و مبکس مشاور بیمارستانی آن است.",
    },
    facts: { floors: 12 },
  },
  H04: {
    description: {
      en: "A 200-bed hospital in western Tehran.",
      fa: "بیمارستانی ۲۰۰ تختخوابی در غرب تهران.",
    },
    location: { ...inTehran, district: { en: "Kan", fa: "کن" } },
  },
  H05: {
    description: {
      en: "A 250-bed specialist hospital in Hakimiyeh, northeast Tehran, with 20 operating rooms. It opened in early 2023 as Nikan Sepid, also known as East Nikan Hospital.",
      fa: "بیمارستانی تخصصی و فوق‌تخصصی ۲۵۰ تختخوابی در حکیمیه، شمال شرق تهران، با ۲۰ اتاق عمل. این بیمارستان در اسفند ۱۴۰۱ با نام نیکان سپید، یا نیکان شرق، افتتاح شد.",
    },
    location: { ...inTehran, district: { en: "Hakimiyeh", fa: "حکیمیه" } },
    facts: {
      completionYear: { en: "2023", fa: "۱۴۰۱" },
      siteArea: 5000,
      floors: 11,
    },
  },
  H06: {
    description: {
      en: "A four-storey specialist clinic of more than 3,000 m² at the start of Shahid Mahallati Expressway, opened in March 2013.",
      fa: "درمانگاهی تخصصی در چهار طبقه و بیش از ۳٬۰۰۰ مترمربع، در ابتدای بزرگراه شهید محلاتی، که در اسفند ۱۳۹۱ افتتاح شد.",
    },
    location: inTehran,
    facts: { completionYear: { en: "2013", fa: "۱۳۹۱" }, floors: 4 },
  },
};
