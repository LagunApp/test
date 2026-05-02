// ═══════════════════════════════════════════════════
//  LAGUNAPP — DATA
// ═══════════════════════════════════════════════════

// ── Demo users ──────────────────────────────────────
const demoUsers = [
  {id:1,name:"Ane Etxebarria",username:"ane_e",age:24,city:"Bilbo",gender:"Emakumea",
   bio:"Futbolzalea eta musika zalea. Kafea eta elkarrizketak gustatzen zaizkit! Lagunekin ondo pasatzea maite dut.",
   food:["🍕 Pizza","🧆 Pintxoak"],sport:["⚽ Futbola","🏃 Korrika"],
   free:["🎬 Zinema/Serieak","☕ Lagunartea"],music:["🎵 Indie","🎸 Rock"],
   pers:["😄 Alaia eta baikorra","🎉 Extrovertitua"],plans:["🍻 Tabernara joan","🎵 Kontzertura","☕ Kafetegian hitz egin"],
   color:"from-orange-400 to-red-500",avatar:"A"},
  {id:2,name:"Mikel Goikoetxea",username:"mikel_g",age:27,city:"Donostia",gender:"Gizona",
   bio:"Mendira joatea eta bideojokoak gustuko ditut. Teknikoa naiz eta teknologia gustatzen zait. Lasaia baina fun!",
   food:["🥩 Haragia","🍔 Hamburgesa"],sport:["🏔️ Mendizaletasuna","🚴 Txirrindularitza"],
   free:["🎮 Bideojokoak","💻 Teknologia"],music:["🤘 Metal","🎸 Rock"],
   pers:["😌 Lasaia eta orekatua","🔒 Introvertitua"],plans:["🏔️ Mendira","🎮 Partida jolasten","🏕️ Kanpinera"],
   color:"from-violet-500 to-indigo-500",avatar:"M"},
  {id:3,name:"Leire Azpeitia",username:"leire_az",age:22,city:"Gasteiz",gender:"Emakumea",
   bio:"Arte sormena eta txirrindularitza. Natura maite dut. Animalia txikiak ere bai! Pintzen dut asteburuetan.",
   food:["🥗 Entsalada","🌱 Beganoa"],sport:["🚴 Txirrindularitza","🧘 Yoga"],
   free:["🎨 Arte Sormena","🌱 Landareak","🐾 Animaliak"],music:["🎤 Pop","🎵 Indie"],
   pers:["🎨 Sortzailea","⭐ Baikorra"],plans:["🏖️ Hondartzara","🎨 Kultura eta museoak","🍽️ Jatetxera"],
   color:"from-emerald-400 to-teal-500",avatar:"L"},
  {id:4,name:"Jon Urrutia",username:"jon_u",age:30,city:"Bilbo",gender:"Gizona",
   bio:"Sukaldaritza da nire pasioa! Asteburuetan jana prestatzen dut lagunentzat. Podcast eta jazz zalea.",
   food:["🍝 Pasta","🍰 Postre guztiak","🌮 Tacos"],sport:["🏊 Igeriketa","🏸 Padela"],
   free:["👨‍🍳 Sukaldaritza","🎙️ Podcast"],music:["🎷 Jazz","🎻 Klasikoa"],
   pers:["😄 Alaia eta baikorra","🤗 Enpatikoa eta lagunkoakoa"],plans:["🍽️ Jatetxera","☕ Kafetegian hitz egin"],
   color:"from-amber-400 to-orange-500",avatar:"J"},
  {id:5,name:"Miren Zubiaurre",username:"miren_z",age:19,city:"Zarautz",gender:"Emakumea",
   bio:"Surf eta musika elektronikoa! Itsasoa eta festa gustatzen zaizkit. Beti prest plan berri baterako.",
   food:["🍣 Sushi","🍔 Hamburgesa"],sport:["🏄 Surf","💃 Dantza"],
   free:["📷 Argazkilaritza","✈️ Bidaiak"],music:["💿 Elektronika/EDM","🎺 Reggaeton"],
   pers:["🎉 Extrovertitua","🏕️ Abenturazalea"],plans:["🏖️ Hondartzara","🍻 Tabernara joan","✈️ Bidaiak"],
   color:"from-cyan-400 to-blue-500",avatar:"Mz"},
  {id:6,name:"Iñaki Larrazabal",username:"inaki_l",age:25,city:"Durango",gender:"Gizona",
   bio:"Coding eta Rock. Full-stack garatzailea naiz eta musika taldean jotzen dut gitarra. Bideojokoak ere bai.",
   food:["🍕 Pizza","🍔 Hamburgesa"],sport:["🏃 Korrika","🏋️ Gimnasioa"],
   free:["💻 Teknologia","🎸 Musika jotzen","🎮 Bideojokoak"],music:["🎸 Rock","🤘 Metal","🎵 Indie"],
   pers:["🎨 Sortzailea","📖 Jakin-mina"],plans:["🎵 Kontzertura","🎮 Partida jolasten"],
   color:"from-slate-500 to-gray-700",avatar:"I"},
  {id:7,name:"Amaia Bergara",username:"amaia_b",age:28,city:"Donostia",gender:"Emakumea",
   bio:"Zinema eta bidaiak. Mundua ikusi nahi dut eta gauza berriak ikasi. Lasaia baina kuriosoa.",
   food:["🍣 Sushi","🥘 Cocido"],sport:["🧘 Yoga","🏔️ Mendizaletasuna"],
   free:["🎬 Zinema/Serieak","✈️ Bidaiak","📚 Irakurketa"],music:["🎤 Pop","🎷 Jazz"],
   pers:["😌 Lasaia eta orekatua","🤗 Enpatikoa eta lagunkoakoa"],plans:["🎬 Zinemara","🎭 Kultura eta museoak","🍽️ Jatetxera"],
   color:"from-rose-400 to-pink-500",avatar:"Am"},
  {id:8,name:"Ekaitz Aranburu",username:"ekaitz_a",age:21,city:"Iruñea",gender:"Gizona",
   bio:"Saskibaloia eta hip-hop. Dantzatzen ere gustuko dut, estilo guztiak! Beti prest plan berri baterako.",
   food:["🍔 Hamburgesa","🌮 Tacos"],sport:["🏀 Saskibaloia","💃 Dantza"],
   free:["🎮 Bideojokoak","📷 Argazkilaritza"],music:["🎧 Hip-Hop/Trap","💿 Elektronika/EDM"],
   pers:["😄 Alaia eta baikorra","🎉 Extrovertitua","😂 Umorea gustatzen zait"],plans:["🍻 Tabernara joan","🏃 Kiroletan"],
   color:"from-purple-500 to-fuchsia-500",avatar:"E"},
];

// ── Seed chats & groups ─────────────────────────────
function seedChats() {
  chats = {};
  chats[1] = [
    {from:1, text:"Kaixo! LagunApp-en ikusi zaitut, futbola gustatzen zaizu berari ere? ⚽", time:"10:23"},
    {from:'me', text:"Bai! Futbola maite dut. Zein talde gustatzen zaizu?", time:"10:25"},
    {from:1, text:"Athletic Club, noski! 😄 Noizean behea partidu bat ikusi nahi izanez gero, abisatu!", time:"10:26"},
  ];
  chats[5] = [
    {from:5, text:"Hola! Ikusten dut surfzalea zarela... Zarautzen ibiltzen zara?", time:"Atzo"},
    {from:'me', text:"Bai! Udan bai, behintzat. Zu Zarautzkoa zara ezta?", time:"Atzo"},
  ];
  groups = [
    {id:'g1', name:"Mendizaleak", emoji:"🏔️", members:[2,3,6], messages:[
      {from:2, text:"Bihar mendira goaz? ⛏️", time:"09:00"},
      {from:3, text:"Ni prest nago! Zertan gelditzen gara?", time:"09:15"},
      {from:'me', text:"Ni ere nator! Zein menditara?", time:"09:20"},
      {from:2, text:"Aizkorri, 8etan partida!", time:"09:22"},
    ]},
    {id:'g2', name:"Rock Lovers", emoji:"🎵", members:[1,6], messages:[
      {from:1, text:"Gaueko kontzertura joaten da inor?", time:"Atzo"},
      {from:6, text:"Ni bai! Zein da taldea?", time:"Atzo"},
    ]},
  ];
}

// ── Quiz options ─────────────────────────────────────
const QUIZ_DATA = {
  cities: [
    "Bilbo","Donostia","Gasteiz","Iruñea","Baiona",
    "Durango","Gernika","Zarautz","Hernani","Tolosa","Eibar","Beste bat",
  ],
  food: [
    "🍕 Pizza","🍣 Sushi","🥗 Entsalada","🍔 Hamburgesa","🌮 Tacos",
    "🍝 Pasta","🥩 Haragia","🍜 Ramen","🧆 Pintxoak","🥘 Cocido",
    "🍰 Postre guztiak","🌱 Beganoa",
  ],
  sport: [
    "⚽ Futbola","🏀 Saskibaloia","🎾 Tenisa","🏊 Igeriketa","🚴 Txirrindularitza",
    "🏔️ Mendizaletasuna","🏋️ Gimnasioa","💃 Dantza","🏄 Surf","🧘 Yoga",
    "🏸 Padela","🏃 Korrika","🥊 Boxeo","🎿 Eskia","🏐 Boleibola",
    "😴 Ez dut kirola egiten",
  ],
  free: [
    "🎮 Bideojokoak","📚 Irakurketa","🎬 Zinema/Serieak","✈️ Bidaiak",
    "👨‍🍳 Sukaldaritza","📷 Argazkilaritza","🎨 Arte Sormena","🎸 Musika jotzen",
    "🌱 Landareak","🐾 Animaliak","💻 Teknologia","🎙️ Podcast",
    "☕ Lagunartea","🛒 Erosketak","🎭 Antzerkia/Kultura",
  ],
  music: [
    "🎤 Pop","🎸 Rock","🎵 Indie","🎧 Hip-Hop/Trap","💿 Elektronika/EDM",
    "🎷 Jazz","🎻 Klasikoa","🎺 Reggaeton","🤘 Metal","🌍 Munduko musika",
    "🇪🇸 Euskal Musika","🎙️ Rap","🌊 Reggae","🎹 R&B / Soul",
  ],
  personality: [
    "😄 Alaia eta baikorra","😂 Umorea gustatzen zait","😌 Lasaia eta orekatua",
    "🏕️ Abenturazalea","🎨 Sortzailea","🤗 Enpatikoa eta lagunkoakoa",
    "⭐ Lidertasuna","🔒 Introvertitua","🎉 Extrovertitua",
    "📖 Jakin-mina","💪 Determinatua","🧘 Orekatua eta patxadatsua",
  ],
  plans: [
    "🍻 Tabernara joan","🎬 Zinemara","🏕️ Kanpinera","🍽️ Jatetxera",
    "🏔️ Mendira","🎡 Aisialdiko parkeak","🎮 Partida jolasten",
    "🎵 Kontzertura","🏖️ Hondartzara","🏃 Kiroletan",
    "☕ Kafetegian hitz egin","🎭 Kultura eta museoak","🛒 Erosketak","🏠 Etxean lasai egon",
  ],
};

// ── Demo credentials ────────────────────────────────
const DEMO_EMAIL    = 'demo@lagunapp.eu';
const DEMO_PASSWORD = 'demo123';
