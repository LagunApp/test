// ═══════════════════════════════════════════════════
//  LAGUNAPP — DATA
// ═══════════════════════════════════════════════════

// ── Demo users ──────────────────────────────────────
const demoUsers = [];

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
  groups = []},
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
