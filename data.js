// data.js - LagunApp-en datu base lokala

const demoUsers = [
    {
        id: 1,
        name: "Ane",
        age: 24,
        city: "Bilbo",
        bio: "Mendi zalea naiz eta asteburuetan ibilbide berriak ezagutzea maite dut. Gailurren bat egingo dugu?",
        interests: ["Mendia", "Euskara", "Argazkilaritza"],
        match: 95,
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ane"
    },
    {
        id: 2,
        name: "Mikel",
        age: 28,
        city: "Donostia",
        bio: "Surflaria eta sukaldaritza zalea. Beti nago prest olatu on batzuk hartzeko edo afari lege bat egiteko.",
        interests: ["Surfa", "Gastronomia", "Musika"],
        match: 88,
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mikel"
    },
    {
        id: 3,
        name: "Lander",
        age: 31,
        city: "Gasteiz",
        bio: "Teknologia eta saskibaloi zalea. Arabako txoko ezkutuak deskubritzea gustatzen zait.",
        interests: ["Teknologia", "Saskibaloia", "Bidaiak"],
        match: 72,
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lander"
    },
    {
        id: 4,
        name: "Irati",
        age: 22,
        city: "Iruñea",
        bio: "Dantzaria eta irakurle amorratua. Kafe bat hartu eta liburuez hitz egin nahi?",
        interests: ["Dantza", "Literatura", "Kafea"],
        match: 81,
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Irati"
    }
];

const demoGroups = [
    {
        id: "g1",
        name: "Mendi Taldea",
        description: "Igandero irteerak egiten ditugu Euskal Herriko mendietatik.",
        members: 45,
        category: "Kirola"
    },
    {
        id: "g2",
        name: "Sukaldari Txokoa",
        description: "Errezetak elkarbanatzeko eta afariak antolatzeko taldea.",
        members: 28,
        category: "Gastronomia"
    }
];

// Txat-en hasierako egoera (hutsik hasieran)
let chatMessages = {
    // Adibidea: 1: [{from: 'them', text: 'Kaixo!', time: '10:00'}]
};

// Esportatu datuak beste fitxategietan erabiltzeko (Script tag-ekin bada ez da beharrezkoa, baina gomendagarria da)
// window.lagunData = { demoUsers, demoGroups, chatMessages };
