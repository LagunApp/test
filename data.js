// ═══════════════════════════════════════════════════
//  LAGUNAPP — DATA (Persistencia con LocalStorage)
// ═══════════════════════════════════════════════════

/** 
 * Usuarios: Intenta cargar 'lagunapp_users' del navegador. 
 * Si no existe (primera vez), devuelve un array vacío [].
 */
let demoUsers = JSON.parse(localStorage.getItem('lagunapp_users')) || [];

/** 
 * Chats y Grupos: Se cargan dinámicamente desde el almacenamiento local.
 */
function seedChats() {
  // Carga los chats guardados o un objeto vacío
  chats = JSON.parse(localStorage.getItem('lagunapp_chats')) || {};
  
  // Carga los grupos guardados o un array vacío
  groups = JSON.parse(localStorage.getItem('lagunapp_groups')) || [];
}

// ── Quiz options (Necesarios para que el registro funcione) ────────────────
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
