// ═══════════════════════════════════════════════════
//  LAGUNAPP — DATA (Preparado para Supabase)
// ═══════════════════════════════════════════════════

/** 
 * Estos arrays ahora empezarán vacíos porque los llenarás 
 * con la respuesta que venga de tu consulta a Supabase (fetch).
 */
let demoUsers = [];
let chats = {};
let groups = [];

/**
 * Función para inicializar los datos. 
 * Ahora la llamarás después de hacer el login con Supabase.
 */
function seedChats() {
  // Aquí puedes poner lógica de limpieza si fuera necesario antes de 
  // cargar los datos reales de la base de datos.
  chats = {}; 
  groups = [];
}

// ── Quiz options (ESTRICTAMENTE NECESARIO) ────────────────
// Mantenemos esto aquí porque lo necesitas para renderizar las 
// opciones del registro en el frontend.
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

// ⚠️ NOTA: Las DEMO_CREDENTIALS ya no son necesarias si usas 
// el Auth oficial de Supabase, pero puedes dejarlas si aún haces pruebas.
const DEMO_EMAIL    = 'demo@lagunapp.eu';
const DEMO_PASSWORD = 'demo123';
