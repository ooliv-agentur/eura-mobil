
import { FullModelData } from '../modelsData';

export const activaOneData: FullModelData = {
  id: "activa-one",
  name: "Activa One",
  intro: "Die verschiedenen Modelle der Alkoven-Baureihe Activa One sind viel mehr als nur simple Reisemobile: Ihr frisches Interieur steigert noch den ersten Eindruck von robuster Großzügigkeit zu einem echten Gefühl von Freiheit.",
  heroImage: "/placeholder.svg",
  galleryImages: ["/placeholder.svg"],
  technicalData: {
    länge: "5,99 – 6,99 m",
    sitzplätze: "4-6",
    schlafplätze: "4-6"
  },
  highlights: [
    "Ausziehbares Doppelstockbett (AO 690 VB)",
    "Maximaler Stauraum dank 37 cm hohem Doppelboden",
    "Isolierter und beheizter Alkoven",
    "Praktische Familien-Grundrisse",
    "Wassertanks im isolierten und beheizten Doppelboden",
    "Jetzt mit 2x Isofix in Fahrtrichtung (außer HS-Grundrisse)"
  ],
  layouts: [
    { 
      id: "activa-one-690-hb", 
      name: "AO 690 HB", 
      image: "/placeholder.svg",
      length: "6,99 m", 
      sleepingPlaces: "6" 
    },
    { 
      id: "activa-one-570-hs", 
      name: "AO 570 HS", 
      image: "/placeholder.svg",
      length: "5,99 m", 
      sleepingPlaces: "4" 
    },
    { 
      id: "activa-one-650-hs", 
      name: "AO 650 HS", 
      image: "/placeholder.svg",
      length: "6,50 m", 
      sleepingPlaces: "4" 
    },
    { 
      id: "activa-one-690-vb", 
      name: "AO 690 VB", 
      image: "/placeholder.svg",
      length: "6,99 m", 
      sleepingPlaces: "6" 
    },
    { 
      id: "activa-one-630-ls", 
      name: "AO 630 LS", 
      image: "/placeholder.svg",
      length: "6,44 m", 
      sleepingPlaces: "5" 
    }
  ],
  interior: [
    {
      name: "Deko-Pack \"Beach Home\"",
      description: "Das optionale Deko-Paket mit farbiger Wandverkleidung, dekorativen Segeltauen, zusätzlicher Alkovenverblendung inkl. Stautaschen verleiht dem Activa One eine ebenso wertige wie frische Premium-Atmosphäre."
    }
  ],
  upholsteryTypes: [
    "Polster Milano – Dekoration Lasca",
    "Polster Dara"
  ],
  equipment: {
    "Chassis": [
      "140 PS Motor, Euro 6d-Final",
      "CCS Breitspur-Tiefrahmen (1.980 mm)",
      "ESP inkl. Traction+, Hill-Descent-Control",
      "16\" Räder, Tagfahrlicht, Tempomat"
    ],
    "Aufbau": [
      "Leichtbaudoppelboden, isoliert & beheizt",
      "Wände/Dach/Boden: 30/32/38mm",
      "Beheizter Alkoven mit klappbarem Boden",
      "2 Fenster + Sicherheitsnetz im Alkoven",
      "Karosserie GFK + Aluminium, winterfest EN 1646"
    ],
    "Wohnwelt": [
      "Möbeldekor Wildeiche & Strandweiß",
      "Oberschränke mit Geräuschdämpfung",
      "7-Zonen-Kaltschaummatratzen",
      "Fußboden mit Trittschalldämpfung"
    ],
    "Küche": [
      "3-Flamm Kocher mit Zündung",
      "Kühlschrank 142 Liter",
      "Wasserhahn mit Anti-Tropf-Auslass"
    ],
    "Waschraum": [
      "Ergonomisch optimierte Mittelwaschräume",
      "Duschkabine, Spiegelschrank, Cassetten-WC"
    ],
    "Wasserinstallation": [
      "143–150 l Frischwasser, 150 l Abwasser (beheizt, isoliert)",
      "Schnellverschlussventile, Keramikkartuschen"
    ],
    "Elektroinstallation": [
      "80 Ah Gel-Batterie",
      "LED-Spots, 2× 230 V, 1× 12 V, 1× USB",
      "Ladegerät 21 A",
      "Haushaltslogik Lichtsystem"
    ]
  }
};
