// GTA 6 secret places. Data gathered from public guides on 2026-11-26. See README.md for method and caveats.
// cat: weapon | vehicle | money | secret.  ch: earliest chapter (1-5) or null when no source states it.
// conf: multi = two or more guides agree, single = one guide only, disputed = guides disagree on where/what.
// pos: schematic position on this page's map (region level, not exact game coordinates).
window.CHAPTERS = {
  1: "Just Like Paradise",
  2: "Paradise Lost",
  3: "Tits, Ass, Drug Money",
  4: "Vice City, Baby",
  5: "Top of the World, Ma"
};

window.SRC = {
  house: ["gta6.house", "https://gta6.house/library/locations/vespucci-mansion"],
  heists: ["gta6heists", "https://www.gta6heists.com/robberies/vespucci-island-mansion"],
  horizon: ["GamesHorizon", "https://gameshorizon.com/guides/gta-6-vespucci-mansion-all-loot/"],
  gmap: ["gta-6-map.org", "https://gta-6-map.org/vespucci-island/"],
  sweat: ["SweatSchool (unique weapons)", "https://sweatschool.app/gta-6/collectibles/unique-weapon-variants/"],
  loot: ["MissionPassed (loot map)", "https://gta6missionpassed.com/pages/loot"],
  bay: ["GTA Bay", "https://gtabay.com/en/guides/gta-6-secret-locations"],
  cmap: ["GTA6 Collectibles Map", "https://gta6collectiblesmap.com/articles/gta-6-secret-locations"],
  hideouts: ["GTA Culture (gang hideouts)", "https://gtaculture.com/guides/gta-6-gang-hideouts"],
  palmer: ["gta6.house (Palmer warehouse)", "https://gta6.house/library/locations/palmer-fishing-warehouse"],
  beebom: ["Beebom (golden AK)", "https://beebom.com/gta-6-secret-golden-ak-47-location-safe-code/"],
  gg: ["games.gg (Palmer code)", "https://games.gg/grand-theft-auto-vi/guides/palmer-fishing-warehouse-safe-code-in-gta-6/"],
  polygon: ["Polygon (crab codes)", "https://www.polygon.com/gta-6-giant-crab-safe-code-crabshack-vf5-smg-how-to-get-pelican-valley-outpost/"],
  arena: ["AreaJugones (rainbow watch)", "https://areajugones.sport.es/videojuegos/el-rolex-que-en-la-vida-real-cuesta-medic-millon-esta-gratis-en-gta-vi-donde-encontrarlo/"],
  vpulse: ["VicePulse (Kaleidoscope)", "https://vicepulse.org/t/gta-6-free-crowex-octane-kaleidoscope-rainbow-daytona-watch"],
  gmapcity: ["gta6map.city (Casanova house)", "https://gta6map.city/secrets/rainbow-daytona-rolex-casanova-island-house/"],
  igg: ["Insider Gaming (Thrax)", "https://insider-gaming.com/how-to-get-the-fastest-car-in-gta-6/"],
  vicevaulted: ["ViceVaulted (Thrax glitch)", "https://www.vicevaulted.com/d/gta6-andrew-node-thrax-garage-breach-glitch"],
  leonida: ["Grand Leonida (Thrax)", "https://grandleonida.com/guides/gta-6-truffade-thrax-free-starfish-island-no-tracker/"],
  gfinity: ["Gfinity (Burned Man)", "https://www.gfinityesports.com/article/gta-6-where-to-find-and-how-to-complete-the-burned-man-encounter"],
  bugs: ["GTA6BUGS (Burned Man)", "https://gta6bugs.com/easter-eggs/burned-man-sahara-crash-insurance-fraud"]
};

window.PLACES = [
  {
    id: "vespucci", name: "Vespucci Mansion", he: "אחוזת וספוצ'י", region: "Vespucci Island, Vice City",
    cats: ["weapon", "vehicle", "money"], ch: 1, conf: "multi", pos: [1075, 922], star: true,
    reward: ["נשק אגדי: Kingpin Heathen (רובה סער, ירי בצרורות של 3, 5.56) + ציוד מגן", "2 כספות, בערך $9,000 עד $11,000 מזומן (המקורות לא מסכימים על הסכום המדויק)", "רכב חינם: Progen Royal Ruby Emerus (על-רכב אדום, אין מפתח)"],
    steps: [
      "הגיעו לאי: מ-Vice City נוסעים מזרחה על גשר Rialto Causeway. Vespucci הוא האי האמצעי (סגלגל) מבין שלושת איי Rialto. האחוזה בפינה הדרום-מערבית, יש סמן צהוב של שוד כשמתקרבים. רמת אבטחה גבוהה. מונית או Ryde Me קלים יותר מרכב משלכם.",
      "קפצו מעל חומת האבן בחזית (או מעל הגדר החיה משמאל לשער). מול העיניים יש מדרגות ספירליות. שני שומרים על הגג: אפשר להתגנב, להפיל אחד בשקט, או לירות בשקט עם משתיק.",
      "דרך הדלת השחורה למעלה, נשארים באותה קומה, הולכים עד סוף המסדרון ופונים ימינה לדלת החומה. זה חדר הנשקייה. שומר עלול להסתובב שם.",
      "בחדר: קחו את ה-Kingpin Heathen מהקיר ואת שריון הגוף. פתחו את שתי הכספות (Break Open). הכל בחדר אחד.",
      "טיפ מקור אחד (gta6heists): כסף כיס מוגבל ל-$20,000. הפקידו בכספומט לפני הכניסה. באותו מקור יש גם קוקאין על שולחן האוכל ושולחן המרפסת ליד הבריכה, כ-$9,600, שמוכרים לגדר.",
      "יציאה: חוצים את המסדרון חזרה, יורדים במדרגות. ה-Emerus חונה בחזית ליד הכניסה (המקורות מתארים קצת אחרת: בתוך הגדר, ליד השער, או מתחת לבית). פותחים את השער (יריה על כפתור השער מהירה) ונוסעים. שומרים חיים ליד הרכבים יירו עליכם.",
      "הרכב: אין מפתח, ולפי רוב המקורות אין גשש (בסריקת WAiNK אחד נקרא 'גשש רגיל'). רישום עולה בערך $29,900, מכירה בערך $29,310, או להשאיר במגרש של דירה. כל הפעולה אפשרית בפחות משתי דקות."
    ],
    needs: "אין. פתוח מפרק 1 לפי שני מדריכים (gta-6-map.org, GamesHorizon).",
    notes: "ההבדלים בין המקורות: סכום הכספות ($9,000 / $11,000), מיקום ה-Emerus, ובאיזה אופן הוא מאובטח.",
    src: ["house", "heists", "horizon", "gmap"]
  },
  {
    id: "casa", name: "Casa Guardia", he: "קאסה גווארדיה", region: "Little Cuba, Vice City",
    cats: ["weapon", "money"], ch: 1, conf: "disputed", pos: [935, 975],
    reward: ["נשק ייחודי: Guardia Brothers FRA (רובה)", "כספת עם מזומן וסמים למכירה, לפעמים שעון יוקרה"],
    steps: [
      "המיקום: צפון-מזרח Little Cuba. MissionPassed כותב 'האזור לא מאושר', SweatSchool מציב אותו בצפון-מזרח Little Cuba, לכן הסמן כאן משוער.",
      "זה 'מבצע לא חוקי' (Illegal Operation): מרחפים על האייקון במפה ורואים כמה פריטי מפתח יש בפנים.",
      "נכנסים בשקט אם אפשר, מנקים או עוקפים שומרים, ולוקחים את כל פריטי המפתח.",
      "המקום מתאפס אחרי זמן, אפשר לשדוד שוב."
    ],
    needs: "אין פרק מחייב (רוב המבצעים אינם קשורים לפרק).",
    notes: "אומת מול המדריכים שכבר בדקנו קודם היום (סרטון ראשון).",
    src: ["loot", "sweat", "hideouts"]
  },
  {
    id: "starfish", name: "Starfish Island mansion garage", he: "מוסך האחוזה ב-Starfish Island", region: "Starfish Island, Vice City",
    cats: ["vehicle"], ch: 3, conf: "single", pos: [1070, 970],
    reward: ["Benefactor Dubsta (רכב שטח בסגנון G-Wagon), הכי קל להחזיק, יש לו רק גשש רגיל"],
    steps: [
      "מ-Waxman Island נכנסים לכביש של Starfish Island עד הסיבוב בקצה הצפון-מזרחי, ונכנסים בחניה עם הלולאה הקטנה ליד הבית הגדול על המים.",
      "כל הרכבים שם עם אזעקה. סורקים עם WAiNK, משכפלים מפתח (Key Cloner: מטים את הסטיק הימני עד שהמד נהיה ורוד, מחזיקים), ונוסעים.",
      "אחרי שפרק 3 נותן ל-Pay 'n' Spray הסרת גששים רגילים, אפשר להסיר את הגשש."
    ],
    needs: "Key Cloner מ-Randy (פרק 3, 'Clonin' Keys, Makin' Gs').",
    src: ["loot"]
  },
  {
    id: "cheetah", name: "1010 Cheetah (Southside Storage)", he: "1010 Cheetah", region: "Vice-Dale County",
    cats: ["vehicle"], ch: null, conf: "single", pos: [850, 980],
    reward: ["Grotti 1010 Cheetah ייחודי + המוסך Southside Storage בחינם"],
    steps: [
      "מוצאים את כל 5 הציורים (1010 Murals).",
      "פותחים את Southside Storage. הרכב כבר בפנים והמוסך שלכם."
    ],
    needs: "למצוא את כל 5 ה-1010 Murals. המקור לא מציין פרק.",
    src: ["loot"]
  },
  {
    id: "gauntlet", name: "Driveshaft Gauntlet ('Dom's Charger')", he: "Driveshaft Gauntlet", region: "Grayson, Lummox County",
    cats: ["vehicle"], ch: 1, conf: "single", pos: [385, 350],
    reward: ["Bravado Driveshaft Gauntlet: מאסל קאר מוגדש מקופרץ, כחול בהיר חלוד, כבוד ל-Dom Toretto"],
    steps: [
      "נוסעים ל-Grayson בצפון Lummox County ומחפשים מאחורי הבתים ליד Pay 'n' Spray, תחנת הדלק והמסילה.",
      "לא היה גשש ולא נדרש Key Cloner, פשוט נוסעים.",
      "צובעים שחור ב-Pay 'n' Spray של Grayson, ורושמים אצל Moses ב-Watkins Auto Parts ב-Port Gellhorn (בחינם בהצעה חד-פעמית) כדי לשמור אותו."
    ],
    needs: "לרישום: המוסך של Moses (פרק 2) ומקום פנוי בגראז'. את הרכב עצמו אפשר לקחת מוקדם.",
    src: ["loot"]
  },
  {
    id: "lapwing", name: "Lapwing Stolen Valor 300-H (hangar)", he: "מטוס Lapwing ב-Bobcat Key", region: "Bobcat Key, Mariana County",
    cats: ["vehicle"], ch: null, conf: "single", pos: [450, 1210],
    reward: ["מטוס Lapwing Stolen Valor 300-H בהאנגר, לא נעול וללא אזעקה"],
    steps: ["מצאו את ההאנגר ב-Bobcat Key (המדריך אינו נותן דרך מדויקת).", "הרכב פתוח, ללא אזעקה, ואינו נספר בשום 100%."],
    needs: "המקור לא מציין פרק. מקור יחיד (Leonida Hub, דרך GTA6 Collectibles Map).",
    src: ["cmap"]
  },
  {
    id: "parkland", name: "Declasse Ghosts Exposed Parkland (Halloween house)", he: "Parkland בבית ה-Halloween", region: "South of Capri, Lake Tortoise",
    cats: ["vehicle"], ch: null, conf: "single", pos: [420, 1075],
    reward: ["Declasse Ghosts Exposed Parkland ליד בית מקושט לליל כל הקדושים"],
    steps: ["בית ה-Halloween דרומית ל-Capri, ליד Lake Tortoise.", "ללא אזעקה, ללא פתיחה נדרשת."],
    needs: "המקור לא מציין פרק. מקור יחיד.",
    src: ["cmap"]
  },
  {
    id: "assassin", name: "Assassin Nipper .38 (wreck)", he: "Assassin Nipper .38", region: "Permit Keys",
    cats: ["weapon"], ch: 1, conf: "multi", pos: [490, 1575],
    reward: ["אקדח מושתק ייחודי Assassin Nipper .38"],
    steps: [
      "לוקחים סירה מ-Key Lento דרום-מערב לכיוון Maroon Key, ואז מערבה.",
      "מטפסים על ההריסה (ספינה/סירת עץ על החול בקצה הדרומי של אי צר ב-Permit Keys).",
      "פותחים את תא הסיפון ולוקחים את האקדח."
    ],
    needs: "סירה. חופשי מפרק 1.",
    notes: "המדריכים מתארים את מיקום האי קצת אחרת: מערבית ל-Maroon Key או מזרחית ל-Mile Zero Air Station.",
    src: ["loot", "bay", "sweat"]
  },
  {
    id: "smuggler", name: "Smuggler Gorse 425", he: "Smuggler Gorse 425", region: "Northernmost Permit Keys island",
    cats: ["weapon"], ch: 1, conf: "multi", pos: [470, 1550],
    reward: ["שוטגן Gorse 425 'Smuggler' על החול ליד סירה"],
    steps: ["בטיול הסירה לאותו אזור, האי הצפוני ביותר ב-Permit Keys.", "סירה מוטה על החוף, השוטגן בחול לידה. בלילה כדאי פנס."],
    needs: "סירה.",
    src: ["bay", "sweat"]
  },
  {
    id: "crab", name: "Crab research outpost", he: "מעבדת הסרטנים (Crabshack VF5)", region: "SW Pelican Valley, Mariana County",
    cats: ["weapon", "money"], ch: 1, conf: "multi", pos: [665, 1425],
    reward: ["SMG ייחודי Crabshack VF5", "שק שטרות מסומנים של $10,000 בבית הסירות, וכספת עם כ-$1,070"],
    steps: [
      "מוצאים את התחנה הנטושה בדרום-מערב Pelican Valley, צפונית למפתחות. הגעה בסירה.",
      "מדליקים קודם את החשמל.",
      "מחשב: סיסמה CLEAVES. כספת: 0072. דלת נעולה: 0212 (שני מדריכים מסכימים על שלושת הקודים).",
      "סרטן ענק הוא חלק מהחידה, צפו לחברה."
    ],
    needs: "לפי מדריך אחד זמין כבר בפרק 1.",
    notes: "שטרות מסומנים אי אפשר למכור לכל גדר עד Credit Check (פרק 3), אבל מדריך אחד מכר אותם מוקדם. לא מוכרע.",
    src: ["bay", "cmap", "sweat"]
  },
  {
    id: "griffin", name: "Griffin RV bunker", he: "בונקר ה-RV ליד Griffin", region: "Balsero, near Griffin Shooting Range",
    cats: ["weapon"], ch: 1, conf: "disputed", pos: [790, 885],
    reward: ["מקלע-אקדח Conspiracist Type 9", "משגר רקטות Hauners H-AT עם 4 רקטות, רימונים ותחמושת"],
    steps: [
      "מוצאים את מגרש הקרוואנים ליד שדה הירי Griffin.",
      "מטפסים על השער, הולכים אחרי הצינורות האדומים, פותחים את הצוהר ברצפת המטבח ויורדים.",
      "האקדח-מקלע על שולחן העבודה, המשגר ליד הכספות."
    ],
    needs: "פרק 1 לפי כמה מדריכים.",
    notes: "מקורות חלוקים: קרוואן כחול-אפור מכוסה אנטנות בעיירת Balsero (דרום-מערב לשדה הירי), מול קרוואן כחול בחניון נגד השדה, או מגרש בתוך Mariana County. המיקום כאן משוער.",
    src: ["bay", "cmap", "sweat"]
  },
  {
    id: "swamp", name: "Pelican Valley swamp shack", he: "צריף הביצה (Pelican Valley)", region: "Pelican Valley, Mariana County",
    cats: ["weapon"], ch: 1, conf: "multi", pos: [730, 1385],
    reward: ["Akulus 'Swamp Bait' (אקדח כבד)", "רובה צלפים SM-69 'Cruel Huntsman's' על הסיפון האחורי"],
    steps: ["הגעה הכי קלה בסירה, דרום Hamlet.", "בתוך הצריף על הרצפה: האקדח. על המרפסת האחורית ליד פגרים: הצלפים."],
    needs: "מומלץ סירה.",
    notes: "אחד המקורות אומר ששניהם באותו צריף, אחרים רושמים שני מקומות נפרדים.",
    src: ["bay", "loot", "sweat"]
  },
  {
    id: "manatee", name: "Manatee Motel", he: "מוטל Manatee (הנמר)", region: "Gullet Marsh, south of Hamlet",
    cats: ["weapon", "money"], ch: 1, conf: "multi", pos: [790, 1400],
    reward: ["צלף Laird 350 'Kingfishers' במארז", "כספת עם כסף וקוקאין"],
    steps: ["דרום-מערב Hamlet, צפונית ל-Shoeless Keys. הולכים אחרי היריות והצרחות, נמר משתולל בפנים.", "לוקחים את הרובה מהחדר השני לפני שיוצאים: מדריך אחד מזהיר שהחדר עלול להינעל לתמיד."],
    needs: "אין.",
    src: ["bay", "sweat", "cmap"]
  },
  {
    id: "kingfishers", name: "Kingfishers fishing shacks", he: "צריפי הדייג של Kingfishers", region: "Wetman Bay, Mariana County",
    cats: ["weapon", "money"], ch: 1, conf: "disputed", pos: [600, 1345],
    reward: ["רובה W-22 'Kingfishers' עם כוונת ומשתיק", "כסף וסמים"],
    steps: ["הגעה בסירה, מוגן, אפשר להתגנב או להילחם.", "הרובה במארז בצריף המואר."],
    needs: "מדריך אחד אומר שהמקום נפתח רק אחרי ש-Donnie מספר על המשימה.",
    notes: "שני מדריכים: Wetman Bay. מדריך שלישי מציב אותו ב-Grassrivers. המיקום משוער.",
    src: ["bay", "cmap", "sweat"]
  },
  {
    id: "shed", name: "The screaming shed (Hamlet)", he: "המחסן הצורח", region: "Southern Hamlet",
    cats: ["weapon", "money"], ch: 1, conf: "multi", pos: [780, 1350],
    reward: ["שוטגן Hobo 'Marabunta Grande'", "כסף פזור על שולחן וקופסת כלים צהובה"],
    steps: ["ליד הכביש המהיר בדרום Hamlet, הולכים אחרי הצרחות למחסן באזור תעשייה.", "מארז עם השוטגן, כסף על השולחן ועוד בקופסה הצהובה."],
    needs: "אין. שלושה מדריכים מדווחים.",
    src: ["bay"]
  },
  {
    id: "apollo", name: "Apollo Aggregates warehouse", he: "מחסן Apollo Aggregates", region: "East of Hamlet",
    cats: ["money"], ch: 1, conf: "disputed", pos: [880, 1320],
    reward: ["בערך $12,700 עד $14,400 בסמים ושטרות מסומנים (תלוי מדריך)", "כרטיס אספנות Leroy Rook, כ-$6,000 בחנות משכון"],
    steps: ["מחסן אדום ממזרח ל-Hamlet ליד הכביש המהיר. פורצים את הדלת האפורה הצדדית.", "בפנים: שק שטרות מסומנים, קוקאין, וכספת משרד עם הכרטיס. אפשר גם בלי להילחם, לפי מדריך.", "מוכרים לקונים (Donnie או Brian). ההצעות נבדלות: $14,400 מול $12,720."],
    needs: "מדריך אחד אומר שאפשר בלי לסיים אף משימה.",
    notes: "מיקום לא עקבי בין מדריכים (דרום Vice-Dale, ממזרח או מצפון-מזרח ל-Hamlet). זה נראה אותו מחסן, אבל זו הנחה של GTA Bay.",
    src: ["bay", "cmap", "loot"]
  },
  {
    id: "parrot", name: "Three Sheets Liquor parrot stash", he: "מחסן התוכי (Three Sheets Liquor)", region: "Key Lento",
    cats: ["money"], ch: 1, conf: "multi", pos: [800, 1530],
    reward: ["כ-$2,000 מזומן: $1,000 עד $1,400 בפתח אוורור, כספת קטנה כ-$900 עד $1,000"],
    steps: ["בסמטה מימין לחנות עוברים דרך פרצה בגדר רשת לחצר החיות.", "מנקים את הבריונים, מדברים עם התוכי האדום בסוף, והוא מכוון למחולל החשמל.", "מכסה האוורור ליד המחולל וכספת קטנה."],
    needs: "מדריך אחד: נפתח אחרי שמביאים ל-Shirley את הרום ('Get Shirley's Rum'). אחר: פתוח מההתחלה. עשו את המשימה קודם לביטחון.",
    src: ["bay", "loot", "cmap"]
  },
  {
    id: "lento", name: "Key Lento stilt house", he: "בית על כלונסאות (Key Lento)", region: "NW Key Lento",
    cats: ["weapon"], ch: 1, conf: "multi", pos: [855, 1470],
    reward: ["שוטגן Comshot 12 'Unpacked'"],
    steps: ["צפון-מערב Key Lento ליד ה-Mini Mart. מדרגות חיצוניות לקומה העליונה, חדר אחורי / שירותי הקומה העליונה."],
    needs: "אין.",
    src: ["bay", "sweat"]
  },
  {
    id: "paraglider", name: "Crashed paraglider (Bobcat Bight)", he: "מצנח ממונע תקוע בעץ", region: "Bobcat Bight, Mariana County",
    cats: ["weapon"], ch: 1, conf: "multi", pos: [480, 1255],
    reward: ["אקדח Turnt Nipper .38"],
    steps: ["מצנח תקוע בעץ בחוף המערבי של Mariana County.", "יורים בחבלים והאקדח נופל, מחפשים על הקרקע."],
    needs: "אין.",
    src: ["bay", "cmap", "sweat"]
  },
  {
    id: "sunrise", name: "Sunrise Motel garage / Tequesta storage", he: "מוסך מוטל Sunrise (Tequesta)", region: "Tequesta, Vice-Dale County",
    cats: ["weapon"], ch: 1, conf: "disputed", pos: [935, 1125],
    reward: ["משגר רימונים GLR40", "קרבין Xtreme 556 'Cockroach'", "לפי GTA Bay גם Kalinga .50, שריון גוף וכספת"],
    steps: ["במוסך של מוטל Sunrise ב-Tequesta (או יחידת אחסון מול חדר הכושר של Vice Seven Condominiums, לפי מדריך אחר).", "הנשקים מאחורי ערימת נייר טואלט."],
    needs: "אין. נמצא פתוח.",
    notes: "SweatSchool ו-GTA Bay מתארים מקום קצת שונה, אולי אותו מקום. מקור יחיד לחלק מהפרטים.",
    src: ["bay", "sweat"]
  },
  {
    id: "brooks", name: "Brooks Boatworks (Kolt & Associates)", he: "Brooks Boatworks", region: "Port Gellhorn",
    cats: ["weapon", "money"], ch: 2, conf: "multi", pos: [430, 670],
    reward: ["קרבין ייחודי Clunker 556", "כסף וגלולות"],
    steps: ["נפתח אחרי המשימה Slam Dunk. מקפלים את המפה על הקיר במשרד: חושפת גם Kingpin Bowling ו-La Cascara Motel.", "מתגנבים מהצד, מנקים שומרים, לוקחים את המארז ליד השולחן במשרד שמול המחסן הגדול.", "קוד הכספת של המחסן כתוב על מפת הקיר (המקור חתך את הקוד, לא אימתתי)."],
    needs: "פרק 2, אחרי Slam Dunk.",
    src: ["loot", "sweat", "hideouts"]
  },
  {
    id: "lmg", name: "Mercenary LMG 6 (Scoop container)", he: "מקלע Mercenary LMG 6", region: "Port Vice City",
    cats: ["weapon"], ch: 3, conf: "disputed", pos: [1105, 1040],
    reward: ["מקלע ייחודי Mercenary LMG 6 במכולת Scoop"],
    steps: ["במכולת Scoop צהובה/כתומה באזור המטענים של Port Vice City, ליד המים. GamerHour: מכולה בלויה מסומנת PCNU 623405, מתחת למכולות Bilgeco, סולם בקיר המזח.", "דרוש כלי חיתוך מנעולים, מגיע בפרק 3."],
    needs: "כלי חיתוך מנעולים מפרק 3.",
    notes: "Detonated: צפון אזור המטענים, גישה מהמים.",
    src: ["sweat"]
  },
  {
    id: "cooties", name: "Bae-Luxe's Cooties bat", he: "Cooties (המחבט של Bae-Luxe)", region: "Crosstown, Vice City",
    cats: ["weapon"], ch: 3, conf: "single", pos: [960, 945],
    reward: ["מחבט ייחודי Cooties"],
    steps: ["פרס על סיום המשימה Cooties ב-Crosstown (פרק 3)."],
    needs: "לסיים את המשימה Cooties (פרק 3). מקור יחיד (Game Checklists דרך SweatSchool).",
    src: ["sweat"]
  },
  {
    id: "pete", name: "Pete's KZ-59 (Sundown Airfield)", he: "Pete's KZ-59", region: "Sundown Private Airfield, Leonard County",
    cats: ["weapon"], ch: 4, conf: "single", pos: [855, 795],
    reward: ["רובה Pete's KZ-59, רק ל-Jason"],
    steps: ["במשימה Pilot Pete בשדה התעופה Sundown, נכנסים בדלת האדומה ולוקחים מהשולחן בחדר."],
    needs: "פרק 4, רק Jason. מקור יחיד.",
    src: ["sweat"]
  },
  {
    id: "photoshoot", name: "Photo/Shoot (Tequesta)", he: "אקדחי W-10 ורודים (Photo/Shoot)", region: "Tequesta high-rise",
    cats: ["weapon", "money"], ch: 4, conf: "single", pos: [920, 1105],
    reward: ["Bae-Luxe's W-10 + Roxy's W-10 (מקלעי-אקדח ייחודיים) + $6,000"],
    steps: ["משימה ראשית בפרק 4, Photo/Shoot, נפתחת אחרי Party Hard (Dre'Quan נותן).", "סיום המשימה מעניק את שני ה-W-10 ו-$6,000."],
    needs: "פרק 4, אחרי Party Hard. מקור יחיד.",
    src: ["sweat"]
  },
  {
    id: "biker", name: "Biker Hideout (Final Chapter gang)", he: "מועדון האופנוענים (Final Chapter)", region: "Behind The Thirsty Wolf, Ambrosia",
    cats: ["weapon", "money", "vehicle"], ch: null, conf: "multi", pos: [770, 585],
    reward: ["אקדח ייחודי Ride Free H&L .38", "כספת עם קוד 1982 (הקוד על תלייה של Final Chapter)", "אופנוע סגול שאפשר לצאת עליו"],
    steps: ["המועדון מאחורי הבר The Thirsty Wolf, צפון-מערב Belleville. נכנסים בשער הפתוח מימין ומנקים את החצר.", "דלת צד ירוקה פנימה. הרוולבר במארז מתחת לתלייה. הקוד 1982 לכספת הגבוהה ליד הספה.", "יוצאים על האופנוע הסגול במוסך הפתוח."],
    needs: "נפתח בהודעה מ-Vicki אחרי Afternoon Delight. המקור לא מציין פרק.",
    notes: "Final Chapter הוא שם הכנופיה, לא הפרק.",
    src: ["loot", "sweat"]
  },
  {
    id: "alien", name: "Alien lab, South Point Airfield", he: "מעבדת החייזרים", region: "South Point Airfield, Hamlet",
    cats: ["secret"], ch: 2, conf: "single", pos: [860, 1385],
    reward: ["שחרור החייזר (תעלומת ה-UFO)"],
    steps: ["אחרי חטיפת ה-UFO: מטפסים על הגדר משמאל, סולם וצוהר בגג בניין מגדל הרדיו.", "מקישים את הקוד מהחלום (בדרך כלל 2134) ויורדים במעלית."],
    needs: "קודם החטיפה: בלילה בכביש עפר ממזרח ל-Port Gellhorn ליד Starlet Motel, אחרי פרק 1 לפי מדריך אחד.",
    src: ["loot", "cmap"]
  },
  {
    id: "ufo", name: "UFO road", he: "כביש ה-UFO", region: "East of Port Gellhorn, near Starlet Motel",
    cats: ["secret"], ch: 2, conf: "single", pos: [510, 700],
    reward: ["חטיפה וגביע 'The Truth Is Out There'"],
    steps: ["כביש עפר ממזרח ל-Port Gellhorn ליד Starlet Motel, בלילה."],
    needs: "אחרי פרק 1 (מקור יחיד, VGTimes דרך GTA6 Collectibles Map).",
    src: ["cmap"]
  },
  {
    id: "tank", name: "Rhino tank, Mile Zero Air Station", he: "טנק Rhino", region: "Mile Zero Air Station, Leonida Keys",
    cats: ["vehicle", "secret"], ch: null, conf: "single", pos: [330, 1610],
    reward: ["טנק Rhino מההאנגרים הדרומיים, פותח גביע 'Challenging Tank'"],
    steps: ["גונבים את הטנק מההאנגרים בדרום התחנה.", "שלושה כוכבי מבוקש ברגע שנכנסים אליו."],
    needs: "המקור לא מציין פרק (Games.gg דרך GTA6 Collectibles Map).",
    src: ["cmap"]
  },
  {
    id: "bigfoot", name: "Bigfoot, Gullet Marsh", he: "ביגפוט", region: "Gullet Marsh, south of Hamlet",
    cats: ["secret"], ch: 1, conf: "multi", pos: [755, 1390],
    reward: ["מפגש עם ביגפוט, חלק משרשרת המשימות של Kirk"],
    steps: ["נוסעים בכביש דרום Hamlet ומחפשים אותו ליד פגר איל.", "רודפים אחריו לביצה עד עץ עטוף ערפל ירוק. נושמים את הערפל: מתעלפים, הוא בא להסתכל, מתעוררים ליד.", "המשימה של Kirk נגמרת בבחירה לירות בו או לשחרר."],
    needs: "אין.",
    src: ["loot"]
  },
  {
    id: "palmer", name: "Palmer Fishing Warehouse", he: "מחסן הדייגים פאלמר (AK הזהב)", region: "Bobcat Key, west of Watson Bay",
    cats: ["weapon", "money"], ch: null, conf: "multi", pos: [498, 1228],
    reward: ["רובה ייחודי מוזהב: La Polilla Negra KZ-59 (AK-47 זהב, לא נמכר ב-Ammu-Nation)", "כספת בקוד 1886: $3,000 עד $3,700 מזומן", "שעון יוקרה Crowex Octane Elite (של לוסיה)", "משגר רימונים GLR 40 וחבילות סמים למכירה"],
    steps: [
      "המתחם בקצה הדרום-מזרחי של Bobcat Key, האי מערבית ל-Watson Bay (גשר מהעיירה). מבצע לא חוקי של La Polilla Negra עם אבטחה כבדה.",
      "לא דרך השער: נוסעים על החוף לצד המערבי ונכנסים בפרצה בגדר. ליד המכולות מונח רובה צלפים עם משתיק.",
      "במבנה האחסון הצפוני: שומר במזח האחורי ועוד אחד בקומת הקרקע. על המחשב בקומת הקרקע מכתב בספרדית שמסתיים בקוד הכספת 1886. מול המחשבים, על השולחן: משגר GLR 40.",
      "בקומה העליונה שלושה שומרים (Focus עוזר). בחדר: הכספת בפינה (1886), ה-KZ-59 המוזהב במארז ליד החלון מתחת למנורה, והשעון על השולחן המרכזי.",
      "במחסן הדרומי חבילות קוקאין. אם התראתם, מגיעים תגבורת ומשטרה; אפשר לברוח בסירה מהמזח האחורי.",
      "הנשק נשאר שלכם לצמיתות אחרי שמאחסנים אותו בתא המטען של רכב."
    ],
    needs: "אין פרק מחייב במקורות. מדריך אחד ממליץ לדלג בפרק 1 בגלל רמת האבטחה.",
    notes: "נוסף מריל אינסטגרם (26.11) ואומת מול gta6.house, Beebom ו-games.gg. בריל נאמר $3,000 בכספת ו-$2,000 בסמים; המדריכים נותנים $3,000 עד $3,700 בכספת.",
    src: ["palmer", "beebom", "gg"]
  },
  {
    id: "kaleidoscope", name: "Crowex Octane Kaleidoscope (Rainbow Daytona)", he: "הרולקס הקשתי (אי קזנובה)", region: "Casanova Island, Rialto Islands",
    cats: ["secret"], ch: null, conf: "multi", pos: [1119, 897],
    reward: ["שעון יוקרה נדיר: Crowex Octane Kaleidoscope (הדייטונה הקשתי, אחד מ-34 שעוני היוקרה)", "כרטיס אספנות זהב נדיר, כ-$3,000+, באותה קומה", "שלוש מכוניות יוקרה בחצר הקדמית"],
    steps: [
      "Casanova הוא האי המזרחי מבין שלושת איי Rialto בין Vice City ל-Vice Beach. האחוזה על קו המים בצד הצפוני, עם בריכה בגינה האחורית ושלוש מכוניות יוקרה בחזית.",
      "קופצים על השער הקדמי, עוברים ליד המכוניות ומעל החומה הצדדית, ונכנסים דרך דלת הזכוכית האחורית (Snap Gun עובד). עלולות להיות אזעקה ומשטרה.",
      "בקומה העליונה: הכרטיס בחדר הראשון מימין. השעון על שידה ליד החלון בחדר השינה שממול, ליד הכיסא האדום.",
      "אחרי האיסוף: ארון הבית (או חדר הלבשה בחנות בגדים), Accessories ואז Watches, ומרכיבים."
    ],
    needs: "Snap Gun או דרך אחרת דרך הדלת. אין פרק מחייב במקורות.",
    notes: "נוסף מריל אינסטגרם (26.11) ואומת מול AreaJugones, VicePulse ו-gta6map.city. בריל נאמר 'רולקס בשווי חצי מיליון דולר': זה המחיר של הדייטונה הקשתי האמיתי. במשחק שעוני היוקרה הם פריטי אספנות ואי אפשר למכור אותם.",
    src: ["arena", "vpulse", "gmapcity"]
  },
  {
    id: "thrax", name: "Andrew Node's Thrax (garage breach)", he: "ה-Thrax של אנדرو נוד (בוגאטי)", region: "Starfish Island, Vice City",
    cats: ["vehicle"], ch: null, conf: "multi", pos: [1088, 980],
    reward: ["Truffade Andrew Node's Thrax: היפר-קאר בסגנון Bugatti Divo, בלי גשש, כמעט בכל פרק", "מכירה כ-$20,000 עד $23,375; רישום עולה כ-$70,000 (או חנייה בדירה בחינם)"],
    steps: [
      "אחוזת Andrew Node ב-Starfish Island, הבית הארוך ליד Sabal Circle. המוסך נפתח חוקית רק במשימת צד (סריקת 10 סימוני WAiNK ב-Vice Beach ו-Ocean Beach), אבל אפשר לפרוץ בגליץ'.",
      "ברחוב מוצאים את טנדר ה-Gardener הלבן וגונבים אותו. ליד שער העץ: מכוונים לשומר ומשתמשים באופציית השריקה, הוא פותח. מכים אותו ואת השומר השני ליד הבית.",
      "חונים את המשאית צמוד לדלת המוסך, מטפסים לתא המטען ונדחפים לפינה שבין המשאית לדלת, ושולפים את הטלפון: המשחק דוחף אתכם דרך הדלת. אם לא עובד, מזיזים את המשאית ומנסים שוב.",
      "בפנים: נכנסים ל-Thrax, דלת המוסך נפתחת, ונוסעים. אין גשש.",
      "שומרים ידנית לפני הגליץ': קליפ דרך קירות עלול לתקוע. לפי שחקן אחד שמירה וטעינה מחזירים את ה-Thrax למוסך, אפשר למכור שוב ושוב (Pay 'n' Spray קונה עד 3 ביום)."
    ],
    needs: "עובד בכל פרק לפי היוצרים. עדיין עובד אחרי עדכון 1.002 (נבדק 24 עד 25.11).",
    notes: "נוסף מריל אינסטגרם (26.11) ואומת מול Insider Gaming, ViceVaulted ו-Grand Leonida. יש וריאציה בלי טלפון (לחיצה על כפתור הכניסה לרכב), רוב המקורות דווקא עם טלפון.",
    src: ["igg", "vicevaulted", "leonida"]
  },
  {
    id: "burnedman", name: "Burned Man (Sahara crash scam)", he: "האיש השרוף (תאונת Sahara)", region: "North of downtown Vice City (random)",
    cats: ["money"], ch: null, conf: "disputed", pos: [905, 840],
    reward: ["סחיטה: $37,500 בסך הכל, שני תשלומים של $18,750 דרך BuckMe", "לקחת שוחד בלי סחיטה: כ-$10,000"],
    steps: [
      "אירוע אקראי בכבישים: משאית Sahara (פרודיה על אמזון) מתנגשת במכונית, המכונית עולה באש והנהג לכוד. דווח ב-Balsero, Belville, Vice Beach, Gloriana Key ו-Waning Sands; בריל המקורי נצפתה צפונית לדאונטאון Vice City.",
      "עוצרים ומושכים את הנהג החוצה (פעולה על המסך). הוא מבין שפגעה בו משאית של Sahara וחוזר לרכב הבוער כדי להחמיר את הכוויות לצורך התביעה.",
      "מסכימים לשמש עד (Accept Bribe). נשארים בקרבה ומאזינים לשיחת הטלפון שלו: נפתחת אופציית Blackmail. בוחרים בה.",
      "כיום-יומיים במשחק מגיע תשלום ראשון של $18,750 ל-BuckMe. אחריו הודעה עצבנית: עונים Probably ומגיע תשלום שני זהה.",
      "שימו לב לתקרת ה-Checking של BuckMe (כ-$15,000 בהתחלה): אם אתם קרובים אליה ההעברה עלולה לא להיכנס. שדרגו חבילה או פנו כסף מראש."
    ],
    needs: "אירוע אקראי, אין נקודה מובטחת. מקור אחד ממליץ על פרק 2 ומעלה לתשלום הגדול.",
    notes: "נוסף מריל אינסטגרם (26.11) ואומת מול Gfinity, GTA6BUGS ו-GameRant. הריל מכריז '$140,000' אבל מתאר כ-$38,000; המקורות הכתובים מסכימים על $37,500 מקסימום. הסמן מסמן את נקודת הריל, אבל האירוע אקראי.",
    src: ["gfinity", "bugs"]
  }
];
