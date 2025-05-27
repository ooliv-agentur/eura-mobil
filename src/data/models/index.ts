
import { vanData } from './van';
import { conturaData } from './contura';
// Import other models as we create them

export const modelsData = {
  "van": vanData,
  "contura": conturaData,
  // We'll add the other models here as we create their files
  "profila-t-fiat": {
    id: "profila-t-fiat",
    name: "Profila T",
    intro: `Unbeschwert und ohne Hetze die Welt erfahren, dafür eignen sich sämtliche Modelle der Baureihe Profila T besonders gut. Neben ihrem eleganten und schnittigen Design bestechen sie durch die niedrige Gesamthöhe von weniger als 2,90 m bei einer -Stehhöhe von 1,97 m im Innenraum. In ihrem Ladevolumen von 1.500 bis 3.000 Liter unterscheiden sie sich deutlich voneinander, während der bequeme, niedrige „Coupé-Einstieg" mit den integrierten und voll isolierten Einstiegsstufen aus GFK wieder allen gemeinsam ist.`,
    heroImage: "/placeholder.svg",
    galleryImages: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    technicalData: { länge: "6,99 – 7,58 m", sitzplätze: "4", schlafplätze: "2" },
    highlights: [
      "Winterfester, beheizter Doppelboden",
      "Große Stauräume durch Garagenabsenkung", 
      "Isolierte & beheizte Wassertanks",
      "Elektr. Abwassertank-Entleerung",
      "Isofix (grundrissabhängig)"
    ],
    layouts: [
      { id: "pt-720-eb", name: "PT 720 EB", image: "/placeholder.svg", length: "7,41 m", sleepingPlaces: "2" },
      { id: "pt-695-eb", name: "PT 695 EB", image: "/placeholder.svg", length: "6,99 m", sleepingPlaces: "2" },
      { id: "pt-675-sb", name: "PT 675 SB", image: "/placeholder.svg", length: "6,99 m", sleepingPlaces: "2" },
      { id: "pt-720-qf", name: "PT 720 QF", image: "/placeholder.svg", length: "7,58 m", sleepingPlaces: "2" },
      { id: "pt-720-ef", name: "PT 720 EF", image: "/placeholder.svg", length: "7,41 m", sleepingPlaces: "2" },
      { id: "pt-660-eb", name: "PT 660 EB", image: "/placeholder.svg", length: "6,99 m", sleepingPlaces: "2" }
    ],
    interior: [
      { name: "726 EF Chalet – Rustico", description: "726 EF Chalet – Rustico" },
      { name: "726 EF Chalet – Rustico", description: "726 EF Chalet – Rustico" },
      { name: "726 EF Chalet – Rustico", description: "726 EF Chalet – Rustico" },
      { name: "720 EF Chalet – Rustico", description: "720 EF Chalet – Rustico" },
      { name: "720 EF Chalet – Rustico", description: "720 EF Chalet – Rustico" }
    ],
    upholsteryTypes: [
      "Polster Como – Dekoration Maka", 
      "Polster Milano – Dekoration Lasca", 
      "Polster Pisa – Dekoration Rana",
      "Polster Dara – Dekoration Maka",
      "Polster Bergamo – Dekoration Evorno"
    ],
    equipment: { 
      chassis: [
        "140 PS Motor, Euro 6d-Final",
        "CCS Breitspur-Tiefrahmen (Spurweite 1.980 mm)", 
        "ABS",
        "manuelle Klimaanlage",
        "Rahmenverlängerung",
        "Fahrer-/Beifahrerairbag",
        "elektrische Fensterheber, Fahrerhaus Zentralverriegelung",
        "Fix and go Pannenset",
        "Tagfahrlicht", 
        "16\" Räder",
        "ESP inkl. Traction+ & Hill-Descent-Control"
      ],
      driversCabin: [
        "Fahrerhaus-Verdunkelung",
        "Multifunktionslenkrad",
        "Bordcomputer",
        "Radio mit Bluetooth"
      ],
      body: [
        "Teilintegrierter Aufbau",
        "GFK-Dach mit Hagelschutzklasse 4",
        "Isolierte Rahmenfenster",
        "LED-Außenbeleuchtung"
      ],
      livingArea: [
        "Dinette-Sitzgruppe",
        "LED-Ambientebeleuchtung", 
        "Panoramafenster",
        "Stauraumschränke"
      ],
      kitchen: [
        "3-Flammen-Gaskocher",
        "Kompressor-Kühlschrank",
        "Spüle mit Abdeckung",
        "Arbeitsplatte"
      ],
      bathroom: [
        "Separate Dusche",
        "Cassetten-WC",
        "Waschbecken mit Spiegel",
        "Beleuchtung und Lüftung"
      ],
      installation: [
        "Frischwassertank 140 l",
        "Abwassertank 110 l",
        "Boiler 10 l",
        "Druckwasserpumpe"
      ],
      electrical: [
        "AGM-Batterien 2 x 95 Ah",
        "Ladegerät 230V",
        "230V-Steckdosen",
        "USB-Anschlüsse"
      ]
    }
  },
  "profila-rs": {
    id: "profila-rs",
    name: "Profila RS",
    intro: `Der Profila RS steht für Reisemobil-Luxus der Spitzenklasse. Mit seinem durchdachten Design und der hochwertigen Ausstattung bietet er alles, was das Herz von anspruchsvollen Reisenden höher schlagen lässt. Jedes Detail wurde sorgfältig ausgewählt, um maximalen Komfort zu gewährleisten.`,
    heroImage: "/placeholder.svg",
    galleryImages: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    technicalData: { länge: "8,99 m", sitzplätze: "4", schlafplätze: "2" },
    highlights: [
      "Integriertes Hubbett",
      "Winterfester, beheizter Doppelboden",
      "Extra große Stauräume durch Garagenabsenkung",
      "Isolierte und beheizte Wassertanks",
      "Elektrisch gesteuerte Abwassertank-Entleerung",
      "Isofix (grundrissabhängig)"
    ],
    layouts: [{ id: "prs-899-eb", name: "PRS 899 EB", image: "/placeholder.svg", length: "8,99 m", sleepingPlaces: "2" }],
    interior: [{ name: "Luxus-Lounge", description: "Edle Sitzlandschaft" }, { name: "Designer-Küche", description: "Hochwertige Ausstattung" }, { name: "Master-Bedroom", description: "Komfortables Schlafzimmer" }, { name: "Wellness-Bad", description: "Spa-ähnlicher Komfort" }],
    upholsteryTypes: ["Premium Leder Schwarz", "Premium Leder Cognac", "Luxus-Stoff Anthrazit"],
    equipment: { chassis: ["Mercedes-Benz Sprinter", "Automatikgetriebe", "Tempomat", "Premium Sicherheitspaket"], body: ["Vollintegrierter Luxus-Aufbau", "Premium Isolierung", "Elektrische Stufe", "LED-Beleuchtungspaket"], livingArea: ["Luxus-Sitzgruppe mit Lederbezug", "Entertainment-System", "Klimaanlage", "Premium-Möbel"], kitchen: ["Induktions-Kochfeld", "Großraum-Kühlschrank", "Backofen mit Grill", "Geschirrspüler"], bathroom: ["Separate Regendusche", "Waschtisch mit Naturstein", "Premium-WC", "Fußbodenheizung"], electrical: ["Lithium-Batterien", "Solaranlage", "Wechselrichter", "Smart-Home-System"] }
  },
  // Add remaining models with condensed data for now...
  "integra-line-fiat": { id: "integra-line-fiat", name: "Integra Line Fiat", intro: "Die Integra Line auf Fiat Ducato bietet vollintegrierte Raumwunder mit optimaler Platzausnutzung.", heroImage: "/placeholder.svg", galleryImages: ["/placeholder.svg"], technicalData: { länge: "7,30 – 7,84 m", sitzplätze: "4-6", schlafplätze: "2-4" }, highlights: ["Vollintegrierter Aufbau"], layouts: [], interior: [], upholsteryTypes: [], equipment: {} },
  "integra-line-gt-mercedes": { id: "integra-line-gt-mercedes", name: "Integra Line GT Mercedes", intro: "Die Integra Line GT auf Mercedes-Benz Sprinter verkörpert Luxus und Performance in Perfektion.", heroImage: "/placeholder.svg", galleryImages: ["/placeholder.svg"], technicalData: { länge: "7,84 m", sitzplätze: "4", schlafplätze: "2" }, highlights: ["Mercedes-Benz Sprinter Chassis"], layouts: [], interior: [], upholsteryTypes: [], equipment: {} },
  "profila-t-mercedes": { id: "profila-t-mercedes", name: "Profila T Mercedes", intro: "Der Profila T auf Mercedes-Benz Sprinter kombiniert die bewährte Zuverlässigkeit des Sprinter-Chassis.", heroImage: "/placeholder.svg", galleryImages: ["/placeholder.svg"], technicalData: { länge: "7,84 m", sitzplätze: "4", schlafplätze: "2" }, highlights: ["Mercedes-Benz Sprinter Chassis"], layouts: [], interior: [], upholsteryTypes: [], equipment: {} },
  "activa-one": { id: "activa-one", name: "Activa One", intro: "Der Activa One ist der Familien-Alkoven der Extraklasse.", heroImage: "/placeholder.svg", galleryImages: ["/placeholder.svg"], technicalData: { länge: "7,30 – 7,84 m", sitzplätze: "4-6", schlafplätze: "4-6" }, highlights: ["Alkoven-Bauweise"], layouts: [], interior: [], upholsteryTypes: [], equipment: {} },
  "integra": { id: "integra", name: "Integra", intro: "Die Integra-Serie steht für Premium-Vollintegration auf höchstem Niveau.", heroImage: "/placeholder.svg", galleryImages: ["/placeholder.svg"], technicalData: { länge: "8,99 m", sitzplätze: "4", schlafplätze: "2" }, highlights: ["Premium-Vollintegration"], layouts: [], interior: [], upholsteryTypes: [], equipment: {} },
  "xtura": { id: "xtura", name: "Xtura", intro: "Der Xtura verkörpert Innovation und Design in reinster Form.", heroImage: "/placeholder.svg", galleryImages: ["/placeholder.svg"], technicalData: { länge: "7,84 m", sitzplätze: "4", schlafplätze: "2" }, highlights: ["Zukunftsweisendes Design"], layouts: [], interior: [], upholsteryTypes: [], equipment: {} }
};

// Re-export types and other utilities
export * from '../modelsData';
