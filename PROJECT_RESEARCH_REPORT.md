# BAM project research report

Researched 2 November 2026. Published values live in `data/projectContent.ts`. Accuracy came first, so many fields are deliberately empty.

## Summary

| Measure | Count |
|---|---|
| Projects researched | 43 of 43 |
| Confirmed location (at least city) | 36 |
| Exact mapped coordinates | 11 |
| Street-level address | 13 |
| Project facts added | 20 |
| Short description added, in English and Persian | 38 |
| No public information found | 3 (BAM Mahtab, BAM Maryam, Iran Khodro Project) |
| Listed under manual verification | 29 (21 for location, coordinates or BAM's role, 8 more only for conflicting data) |

## How this was researched

### Confidence

- **High:** confirmed by BAM's own site, the operator's own site, or several independent sources with a mapped feature.
- **Medium:** supported by two or more credible secondary sources, or one listing plus an independent mapped feature.
- **Low:** one secondary source, or an unresolved conflict. **Never published.** Low findings are listed under "Not published" so they can be checked and promoted later.

### Sources used

| Label | What it is | Weight |
|---|---|---|
| BAM | [bamgroup.ir](https://bamgroup.ir), BAM's official site | Highest. Its project pages rarely give numbers |
| Homake | [homakerealestate.com](https://homakerealestate.com/builders/گروه-توسعه-مهندسی-بام/), a real-estate database | Useful but contains errors: several pages contradict themselves |
| Infomelk | [infomelk.com](https://www.infomelk.com), a real-estate database | Independent second listing |
| OSM | [OpenStreetMap](https://www.openstreetmap.org), community-mapped | Used for coordinates only |

### Rules applied

- **Coordinates.** A coordinate is published only when a named map feature for that building sits on the street an independent source names. Each one was reverse-geocoded to check the street. OSM is community-edited and was not checked against aerial imagery, so a person should look at the Medium ones.
- **"بام" means "roof" in Persian.** OSM features called "بام تهران" or "بام نیاوران" are viewpoints, not BAM buildings. A name match alone was never accepted.
- **BAM's footer address is its office.** The Andarzgoo address in every BAM page footer was not used as a project location, except for the Head Office itself.
- **BAM's "under construction" notes are not dated.** Its page still calls Sepid Hospital under construction although it opened in 1401, so undated status claims from the site were not published.
- **Years.** Gregorian in English and Solar Hijri in Persian. This is an existing choice in the data model, and a month is needed to convert exactly, so "2011–12" is used where only the Solar Hijri year is known.
- **Not available.** BAM's older sites (`new.bamgroup.ir`, older `www.bamgroup.ir` pages) now fail, and archive.org could not be reached. They once held specification tables, which could settle many of the gaps below.

## Projects requiring manual verification

### No public information

| Project | What was searched | What remains |
|---|---|---|
| BAM Mahtab | "بام مهتاب" with ساختمان, گروه بام, BAM's project lists | Not on BAM's site. Everything |
| BAM Maryam | "بام مریم" with ساختمان, گروه بام, BAM's project lists | Not on BAM's site. Everything |
| Iran Khodro Project | "پروژه ایران خودرو هشتگرد", مکان شهر, انبوه سازی | Your source folder says Hashtgerd, but no public source confirms it, so it is unpublished |

### BAM's role could not be confirmed

| Project | Issue |
|---|---|
| Persian Gulf Artificial Lake | The location is certain, but sources name Sabir as contractor and Armature Pardis as project manager, and none mention BAM. The page does not claim a BAM role. Please confirm what BAM built here |
| Boostan Hashtgerd | A 1,002-unit project exists in Hashtgerd New Town, but no public source links it to BAM. A separate reference has Makan Shahr, a BAM affiliate, building 2,000 units in the same town in 1390, which may or may not be related |
| Nikan Hospital | The imported photo's nameplate reads "بیمارستان نیکان", so it is a Nikan hospital. The group has several branches and only Aqdasiyeh carries the plain name, so the location rests on that. No public source names BAM as its builder, though a forum post lists it among BAM's projects |
| Boostan Asaluyeh, Golestan Meshgin Shahr | Not on BAM's site. The city comes only from the project name in your own list |

### Location not confirmed

| Project | What remains | Possible lead (Low, not published) |
|---|---|---|
| BAM Choobineh | BAM's page gives no location | None |
| BAM Narenjestan | BAM's page gives no location | Nameplate reads "BAM NARENJESTAN 27". The source folder name mentions Pasdaran, which has Narenjestan streets. A street name and plate number might identify it |
| BAM Saman | BAM's page gives only expressway access (Hemmat, Imam Ali) | None |
| National Cancer Center | BAM's page gives no location | None. Other Tehran cancer centres appear in search but none link to BAM, so none were used |

### Coordinates held back

| Project | Candidate | Why it was not published |
|---|---|---|
| BAM Niayesh | [OSM "برج بام نیایش"](https://www.openstreetmap.org/way/1073279946), 35.76294, 51.31762, tagged apartments | Fits BAM's description of northwest Tehran, but nothing independent ties it to BAM, and "بام" is a common word |
| Erfan Clinic | Adjacent to Erfan Hospital. OSM has [Erfan](https://www.openstreetmap.org/way/993832354) and [Erfan Niayesh](https://www.openstreetmap.org/way/680553415), both in the northwest | Two hospitals fit, and a hospital's location is not the clinic's |
| BAM Center Kamranieh | A pharmacy listing gives "Bazdar St, No. 13, Bam Kamranieh tower" | One tenant's listing. No mapped building |
| BAM Alborz, Farzaneh, Fereshteh, Rad, Niloufar, Jamshidieh | Homake gives a street for each, listed under each project below | Single source, no mapped building |
| All other residential projects | None found | Not mapped by name. A site visit or BAM's own records would be needed |

### Conflicting data, left unset

| Project | Field | Values |
|---|---|---|
| BAM Jamshidieh | Floors | 11 and 9 on Homake (same page), 9 on Infomelk |
| BAM Jamshidieh | Built-up area | 20,000 (Homake), 17,028 (Infomelk) |
| BAM Jamshidieh | Units | 24 (Homake), 25 (Infomelk) |
| BAM Alborz | Built-up area | 14,000 (Homake), 14,181 (Infomelk) |
| BAM Niloufar | Built-up area | 7,900 (Homake), 5,843 (Infomelk) |
| BAM Farzaneh | Floors | 12 (Homake), 13 (Infomelk) |
| BAM Sepid | Floors, status | 17 and about 15 on Homake. BAM says "is building"; Homake gives demolition and "handover in 6 months" |
| BAM Fereshteh | Status, year | Homake gives demolition, "ready for handover" and "built 1403" on one page |
| BAM Center Farmanieh | Built-up area | 15,400 and 15,477 (Homake). 4,457 useful plus 11,020 common (Sazejoo) |
| BAM Center Yeganeh | Floors | 13 (BAM's old site, via search), 14 (Infomelk) |
| Niayesh Commercial Complex | Site, area, floors | 8,000 or 7,090 m². 75,000 or 67,956 m². 12 or 13 floors |
| Bamland | Built-up area, opening | 26,290 or 26,430 m². Opened 1394 or 2017 |
| BAM Equestrian Club | Site area | 55,000 or 60,000 m² |
| Araz Hotel | Floors | 28, 29 or 30 |
| Araz Hotel | Site area | 50,000, 95,000, 97,000 or 103,000 m² |
| Sepid Hospital | Built-up area | 32,000 (BAM), 34,000 (news reports) |

## Findings that affect imagery

No images were changed in this task. These are recommendations for you to decide on.

| Project | Finding | Suggested action |
|---|---|---|
| Sepid Hospital | BAM's Sepid Hospital is East Nikan: same district, 250 beds and 5,000 m² site. It shows only a render today, while the source folder `نیکان شرق- عکس افتتاحیه` holds real exterior photos of it | Import those exteriors, and leave out the ceremony group shots |
| BAM Center Farmanieh | BAM's page calls it BAM Brand Center, and Sazejoo titles it "Brand Center (Bam Center 1 Farmanieh)". So the folders `Edari.tejri/BAM Brand Center1` and `برند سنتر1` belong to it. It has no images today | Assign these folders to the project |
| BAM Niavaran 01–03 | BAM confirms all three share one facade design, which is why the folder `Luxurious Residential/BAM Niavaran` could not be told apart visually | Still needs a person who knows the buildings |

BAM's site also lists projects that are not in this database: Tehrani Clinic, Nikan Clinic, Bam Address Shiraz (Zand), Bam Address Chalous, Bam Land Shiraz and Bam Land Tajikistan. Some match source folders set aside during the image import.

## Project by project

### BAM Jamshidieh (R01)

- **Location:** Jamshidieh, Tehran, Iran. South of Jamshidieh Park. [BAM](https://bamgroup.ir/بام-جمشیدیه/), [Homake](https://homakerealestate.com/buildings/بام-جمشیدیه/), [Infomelk](https://www.infomelk.com/property/بام-جمشیدیه/). High
- **Coordinates:** not set
- **Completion year:** 2011–12 / ۱۳۹۰. Homake and Infomelk, consistent with BAM's award of that year. Medium
- **Site area:** 2,918 m². Homake and Infomelk. Medium
- **Architect:** Farzad Daliri. Homake and Infomelk. Medium
- **Award:** national award for luxury residential buildings, 1390. BAM. High
- **Not published:** Homake gives Omidvar St and Jamaran St end. Floors, area and units conflict (see above). Infomelk only: 68 parking spaces

### BAM Alborz (R02)

- **Location:** Niavaran, Tehran, Iran. [BAM](https://bamgroup.ir/بام-البرز/). High
- **Coordinates:** not set
- **Floors:** 8. [Homake](https://homakerealestate.com/buildings/بام-البرز/), [Infomelk](https://www.infomelk.com/property/بام-البرز/). Medium
- **Description details:** lobby, pool, gym, views. BAM. High
- **Not published:** Homake gives Yaser St, Sadeghi Qomi St, near Bokan. Infomelk only: 24 units, 2,673 m² site, 61 parking spaces. Homake also calls it a "hotel tower" in one line, which looks like an error

### BAM Mehmandoost (R03)

- **Location:** Niavaran, Tehran, Iran. [BAM](https://bamgroup.ir/بام-مهماندوست/). High
- **Site area:** 1,543 m². BAM. High
- **Form, lobby:** pyramidal tower, five-metre lobby. BAM. High
- **Coordinates:** not set

### BAM Nasrin (R04)

- **Location:** Farmanieh, Tehran, Iran. [BAM](https://bamgroup.ir/بام-نسرین/). High
- **Units:** 10. BAM. High
- **Lobby:** 400 m², six metres high. BAM. High
- **Coordinates:** not set

### BAM Niavaran 01 (R05)

- **Location:** Niavaran, Tehran, Iran. [BAM](https://bamgroup.ir/بام-نیاوران-1/). High
- **Facade:** shared by three separate buildings. BAM. High
- **Coordinates:** not set
- **Not published:** [Homake](https://homakerealestate.com/buildings/بام-نیاوران/) gives Jamaran St, 10 floors and 9,500 m², and others give 17 units and 9 floors, without saying which of the three buildings. Not assigned to any of them

### BAM Niavaran 02 (R06)

- **Location:** Niavaran, Tehran, Iran. [BAM](https://bamgroup.ir/بام-نیاوران-2/). High
- **Facade:** shared by three separate buildings. BAM. High
- **Coordinates:** not set
- **Not published:** see Niavaran 01

### BAM Niavaran 03 (R07)

- **Location:** Yaser Street, Niavaran, Tehran, Iran. [BAM](https://bamgroup.ir/بام-نیاوران-3/). High
- **Facade:** shared by three separate buildings. BAM. High
- **Coordinates:** not set
- **Not published:** see Niavaran 01

### BAM Niloufar (R08)

- **Location:** Farmanieh, Tehran, Iran. [BAM](https://bamgroup.ir/بام-نیلوفر/). High
- **Floors:** 14. BAM, [Homake](https://homakerealestate.com/buildings/بام-نیلوفر/), [Infomelk](https://www.infomelk.com/property/بام-نیلوفر/). High
- **Units:** 9. BAM, Infomelk. High
- **Coordinates:** not set
- **Not published:** built-up area conflicts. Infomelk only: 885 m² site, 28 parking spaces, architect Daliri

### BAM Choobineh (R09)

- **Location:** not found
- **Type:** residential villa. [BAM](https://bamgroup.ir/بام-چوبینه/). High
- **Architect:** Farzad Daliri. BAM. High

### BAM Fereshteh (R10)

- **Location:** Fereshteh area, Tehran, Iran. [BAM](https://bamgroup.ir/بام-فرشته/). High
- **Coordinates:** not set
- **Not published:** [Homake](https://homakerealestate.com/buildings/بام-فرشته/) gives Elahiyeh, Aghabozorgi St, 17 floors, 22 units, 1,859 m² site, 12,500 m², architect Daliri, but the page contradicts itself on status and year

### BAM Zafaraniyeh (Sarvestan) (R11)

- **Location:** north of Asef Street, Zafaraniyeh, Tehran, Iran. [BAM](https://bamgroup.ir/بام-سروستان/), [Homake](https://homakerealestate.com/buildings/بام-سروستان/). High
- **Site area:** 3,023 m². BAM, Homake. High
- **Coordinates:** not set
- **Not published:** Homake only: 18 floors, 17,180 m²

### BAM Rad (R12)

- **Location:** Niavaran, Tehran, Iran. [BAM](https://bamgroup.ir/بام-راد/). High
- **Site area:** 2,490 m². BAM, [Homake](https://homakerealestate.com/buildings/بام-راد/), [Infomelk](https://www.infomelk.com/property/بام-راد/). High
- **Built-up area:** 16,900 m². Homake, Infomelk. Medium
- **Floors:** 15. BAM, Infomelk. High. Homake's 16 was set aside
- **Coordinates:** not set
- **Not published:** Homake gives the Dezashib and West Farmanieh border. Infomelk only: 33 units, 89 parking spaces, architect Daliri

### BAM Simindokht (R13)

- **Location:** East Farmanieh, Tehran, Iran. [BAM](https://bamgroup.ir/بام-سیمین-دخت/). High
- **Design:** among the group's first modern residential buildings. BAM. High
- **Coordinates:** not set

### BAM Farzaneh (R14)

- **Location:** East Farmanieh, Tehran, Iran. [BAM](https://bamgroup.ir/بام-فرزانه/). High
- **Built-up area:** 10,114 m². [Homake](https://homakerealestate.com/buildings/بام-فرزانه/), [Infomelk](https://www.infomelk.com/property/بام-فرزانه/). Medium
- **Coordinates:** not set
- **Not published:** floors conflict. Homake gives North Dibaji St. Infomelk only: started 1393, completed 1397, 12 units, 1,260 m² site, 30 parking spaces, architect Daliri

### BAM Sepid (R15)

- **Location:** Taherkhani Street, Saadat Abad, Tehran, Iran. [Homake](https://homakerealestate.com/buildings/بام-سپید/), [OSM](https://www.openstreetmap.org/way/1064333342). Medium
- **Coordinates:** 35.77410, 51.35089. OSM building "بام سپید 3", tagged apartments, on Taherkhani St. Medium. It may mark one block of a larger complex
- **Community:** doctors and health-care professionals. [BAM](https://bamgroup.ir/en/bam-sepid/). High
- **Not published:** floors and status conflict. Homake only: 166 units, 9,000 m² site, 15,000 m²

### BAM Darband 01 (R16)

- **Location:** Darband, Tehran, Iran. [BAM](https://bamgroup.ir/بام-دربند-1/). High
- **Coordinates:** not set

### BAM Darband 02 (R17)

- **Location:** Darband, Tehran, Iran. [BAM](https://bamgroup.ir/بام-دربند-2/). High
- **Coordinates:** not set

### BAM Narenjestan (R18)

- **Location:** not confirmed, see manual verification
- **Architect:** Farzad Daliri. [BAM](https://bamgroup.ir/بام-نارنجستان/). High
- **Five residential floors, five-metre lobby:** BAM. High. Total floors are not stated, so the Floors field is empty

### BAM Niayesh (R19)

- **Location:** northwest Tehran, Iran. [BAM](https://bamgroup.ir/بام-نیایش). High
- **Coordinates:** held back, see manual verification

### BAM Saman (R20)

- **Location:** not found
- **Units, buildings, floors:** 140 units in 7 five-storey buildings. [BAM](https://bamgroup.ir/بام-سامان/). High

### BAM Mahtab (R21)

Nothing found. See manual verification.

### BAM Maryam (R22)

Nothing found. See manual verification.

### BAM Center — Head Office (T01)

- **Location:** No. 5, start of North Vatanpour Street, Andarzgoo Boulevard, Tehran, Iran. [BAM contact details](https://bamgroup.ir/ارتباط-با-ما/), with the page [naming the group's departments in this building](https://bamgroup.ir/بام-سنتر-دفتر-مرکزی/). High
- **Coordinates:** not set. The building is not mapped by name
- **Architect:** Farzad Daliri. BAM. High

### BAM Center Farmanieh (T02)

- **Location:** No. 4, Farmanieh (Lavasani) Street, opposite Farmanieh Club, Tehran, Iran. [BAM](https://bamgroup.ir/بام-سنتر-فرمانیه/), [Homake](https://homakerealestate.com/buildings/بام-برند-سنتر/), [Sazejoo](https://sazejoo.com/مجتمع-برند-سنتر-بام-سنتر-1-فرمانیه/برج-ها/). High
- **Coordinates:** 35.79952, 51.47284. [OSM building "بام برند سنتر"](https://www.openstreetmap.org/way/679132720), on Lavasani Blvd. High
- **Alias:** BAM Brand Center. BAM. High
- **Floors:** 16. Homake, Sazejoo. Medium
- **Architect:** Farzad Daliri. Homake, Sazejoo. Medium
- **Not published:** built-up area conflicts. Sazejoo only: 1,144 m² site, 30 commercial and 19 office units

### Avaan Center (T03)

- **Location:** Andarzgoo Boulevard, Tehran, Iran. [BAM](https://bamgroup.ir/بام-سنتر-آوان/). High
- **Coordinates:** 35.80183, 51.45768. [OSM point "مجتمع تجاری آوان"](https://www.openstreetmap.org/node/7096253785), on Andarzgoo Blvd. Medium. A point, not a footprint
- **Architect:** Farzad Daliri. BAM. High

### BAM Center Shariati (T04)

- **Location:** Tehran, Iran, with access to Shariati and Pasdaran streets. [BAM](https://bamgroup.ir/بام-سنتر-شریعتی/). High
- **Classical composition:** BAM. High
- **Coordinates:** not set

### BAM Center Yeganeh (T05)

- **Location:** Tehran, Iran. [Infomelk](https://www.infomelk.com/property/بام-یگانه/). Medium at city level only
- **Modern design:** [BAM](https://bamgroup.ir/بام-سنتر-یگانه/). High
- **Coordinates:** not set
- **Not published:** Infomelk only: East Farmanieh, 37 units, 1,000 m² site, 7,000 m², 60 parking spaces, 1395 to 1398. Floors conflict

### BAM Center Kamranieh (T06)

- **Location:** beside Kamranieh Street, Tehran, Iran. [BAM](https://bamgroup.ir/بام-سنتر-کامرانیه/). High
- **Architect:** Farzad Daliri. BAM. High
- **Coordinates:** held back, see manual verification
- **Not published:** [Infomelk](https://www.infomelk.com/property/بام-کامرانیه/) only, and its page does not say "Bam Center": 14 floors, 700 m² site, 3,800 m², 1395 to 1398

### Niayesh Commercial Complex (T07)

- **Location:** Shahid Rajab Salahi Street, Jannat Abad, Tehran, Iran. [Donya-e-Eqtesad](https://donya-e-eqtesad.com/بخش-ویژه-نامه-63/3283191-پروژه-بام-سنتر-نیایش), [OSM](https://www.openstreetmap.org/way/780548002). High
- **Coordinates:** 35.76468, 51.30597. OSM building "نیایش مال", on Rajab Salahi St. High
- **Aliases:** BAM Center Niayesh, Bam Land 2, Niayesh Mall. [Jooshkavan](https://jooshkavan.com/Projects/bamland-2-project/) gives Bam Land 2, Bam Land Niayesh and Bam Center. [Safarmarket](https://safarmarket.com/blog/attractions/iran/tehran/niyayesh-mall-tehran) says Niayesh Mall is also known as Bamland Niayesh. Medium
- **Program:** shops, restaurants, indoor amusement park. Donya-e-Eqtesad, Safarmarket. Medium
- **Not published:** areas and floors conflict. A hypermarket appears in the 2017 Donya-e-Eqtesad article but not in Safarmarket's current floor guide, so it was left out

### BAM Equestrian Club (T08)

- **Location:** Paralympic Square, Chitgar Park, Tehran, Iran. [Horsepedia](https://horsepedia.ir/club/باشگاه-سوارکاری-بام/), and OSM's reverse geocode. Medium
- **Coordinates:** 35.73103, 51.19947. [OSM "باشگاه سوارکاری بام"](https://www.openstreetmap.org/way/1026497537), at Paralympic Sq. Medium. Also known as Rezaei club
- **Facilities:** competition, training and covered arenas. Horsepedia. Medium
- **Not published:** site area conflicts. Its claim to be the first riding school in the Middle East is unverified

### Bamland (T09)

- **Location:** Sadaf Boulevard, District 22, Tehran, Iran. [Homake](https://homakerealestate.com/buildings/بام-لند-چیتگر/), [OSM](https://www.openstreetmap.org/node/5164424671). High
- **Coordinates:** 35.74456, 51.22159. OSM mall "مرکز خرید بام لند", at 40 Sadaf Blvd. High
- **Architects:** Morteza Adib, Maryam Yousefi. [Archline](https://archline.ir/مجموعه-بام-لند،-معماری-ایرانی-در-منطقه/), Homake. High
- **Site area:** 60,000 m². Archline and others. Medium
- **Floors:** 3. Archline, Homake. Medium
- **Not published:** built-up area and opening year conflict

### Persian Gulf Artificial Lake (T10)

- **Location:** District 22, Tehran, Iran. [Wikipedia](https://fa.wikipedia.org/wiki/دریاچه_چیتگر). High
- **Coordinates:** 35.74617, 51.21214. [OSM lake feature](https://www.openstreetmap.org/way/1259635603), the middle of the water. High. The map opens wider to suit a lake
- **Water surface:** about 130 hectares. Wikipedia and others. Medium
- **First phase opened:** 15 Ordibehesht 1392 (May 2013). Wikipedia and others. Medium. One source says 1389
- **BAM's role:** not confirmed, see manual verification

### Araz Hotel (T11)

- **Location:** Kilometre 10, Nowshahr–Noor road, Nowshahr, Iran. [Hamshahri](https://www.hamshahrionline.ir/news/1068539/), [Donya-e-Eqtesad](https://donya-e-eqtesad.com/بخش-ویژه-نامه-63/3272230-هتل-آراز). Medium. The Hamshahri piece is a sponsored article
- **Coordinates:** 36.59897, 51.65389. [OSM hotel "هتل آراز"](https://www.openstreetmap.org/node/14202152286), on the coastal road between Nowshahr and Noor. Medium. A point, not a footprint
- **Built by BAM:** Donya-e-Eqtesad. Medium
- **Rooms:** more than 500. Hamshahri, Donya-e-Eqtesad (520). Medium
- **Not published:** floors and site area conflict

### Boostan Hashtgerd 1002-Unit Project (M01)

- **Location:** Hashtgerd New Town, Iran. [Thermoeskan](https://thermoeskan.com/درباره-شرکت/), via search result, since the page no longer loads. [Shishdong](https://shishdong.com/locations/Hashtgerd) listings. Medium
- **Units:** 1,002. Project name and the sources above. Medium
- **Coordinates:** not set
- **BAM's role:** not confirmed, see manual verification

### Iran Khodro Project (M02)

Nothing found. See manual verification.

### Boostan Asaluyeh (M03)

- **Location:** Asaluyeh, Iran. From the project name only. Medium
- **Coordinates:** not set

### Golestan Meshgin Shahr (M04)

- **Location:** Meshgin Shahr, Iran. From the project name only. Medium
- **Coordinates:** not set

### Nikan Hospital (H01)

- **Location:** No. 6, 22 Bahman Street, start of Artesh Boulevard, Aqdasiyeh, Tehran, Iran. [Doctoreto](https://doctoreto.com/center/nikan-aghdasie-hospital/ZdypzP), [Dr Saina](https://www.drsaina.com/hospital/692/). High for the hospital, Medium that it is this project
- **Coordinates:** 35.79989, 51.48959. [OSM hospital](https://www.openstreetmap.org/way/455230835), on 22 Bahman St. Medium for the same reason
- **Not published:** beds conflict (102 or more than 270). Founded 1384 and opened 1390 comes from one source

### Erfan Clinic (H02)

- **Location:** northwest Tehran, Iran, adjacent to Erfan Hospital. [BAM](https://bamgroup.ir/ساختمان-پزشکان-عرفان/), [BAM English](https://bamgroup.ir/en/Erfan-Medical-Center/). High
- **Coordinates:** held back, see manual verification

### National Cancer Center (H03)

- **Location:** not found
- **Identity:** BAM's [National Cancer Institute page](https://bamgroup.ir/en/national-cancer-institute/) sits in the same place in its English list as its [Persian Special Diseases Hospital page](https://bamgroup.ir/بیمارستان-بیماری-های-خاص/), and both describe a cancer hospital. Medium
- **Floors:** 12. BAM. High
- **Consultants:** ERGA (Lebanon), Mebex. BAM. High
- **Not published:** BAM says under construction, but the note is undated

### Nikan West Hospital (H04)

- **Location:** Kan, Tehran, Iran. [BAM](https://bamgroup.ir/en/West-Nikan-Hospital/), [OSM](https://www.openstreetmap.org/way/786809078). High
- **Coordinates:** 35.75711, 51.27039. OSM hospital "نیکان غرب". High. Its District 5 position matches [BAM's news](https://bamgroup.ir/) of a District 5 mayor's visit
- **Beds:** 200. BAM. High

### Sepid Hospital (H05)

- **Location:** Hakimiyeh, Tehran, Iran. [BAM](https://bamgroup.ir/بیمارستان-سپید/), [OSM](https://www.openstreetmap.org/way/755278079). High
- **Coordinates:** 35.73919, 51.59447. OSM hospital "نیکان سپید". High
- **Identity:** Nikan Sepid, also East Nikan. [Nikan group](https://aqdasiyeh.nikan.hospital/en/news/بیمارستان-نیکان-شرق-سپید-افتتاح-شد/), [Hakimiyeh News](https://hakimiyenews.ir/social/بیمارستان-نیکان-شرق/). High
- **Opened:** Esfand 1401 / 2023. [Nikan Sepid](https://sepid.nikan.hospital/fa/about-us/). High. Other reports say Azar or Dey 1401
- **Beds, operating rooms, floors:** 250, 20, 11. Nikan Sepid. High
- **Site area:** 5,000 m². BAM. High
- **Not published:** built-up area conflicts

### District 14 Specialized Clinic (H06)

- **Location:** start of Shahid Mahallati Expressway, corner of South Gilaki, Tehran, Iran. [BAM](https://bamgroup.ir/درمانگاه-شهرداری-منطقه-14/). High
- **Coordinates:** not set. The building is not mapped by name
- **Opened:** 23 Esfand 1391 / March 2013. BAM. High
- **Floors:** 4. BAM. High
- **Area:** more than 3,000 m². BAM. High. In the description only, since the figure is not exact
