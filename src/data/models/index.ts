
import { vanData } from './van';
import { conturaData } from './contura';
// Import other models as we create them

export const modelsData = {
  "van": vanData,
  "contura": conturaData,
  // We'll add the other models here as we create their files
  "profila-t-fiat": {
    id: "profila-t-fiat",
    name: "Profila T auf Fiat",
    intro: "Der Profila T auf Fiat Ducato vereint bewährte Technologie mit modernem Design. Großzügige Raumaufteilung und durchdachte Details machen jeden Aufenthalt zu einem besonderen Erlebnis. Mit seinem teilintegrierten Aufbau bietet er optimale Platzausnutzung bei gleichzeitig komfortabler Handhabung.",
    heroImage: "/placeholder.svg",
    galleryImages: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    technicalData: { länge: "7,30 – 7,84 m", sitzplätze: "4", schlafplätze: "2-4" },
    highlights: ["Teilintegrierter Aufbau mit großzügigem Platzangebot", "Fiat Ducato Chassis mit bewährter Technik", "Flexible Grundrisse für verschiedene Bedürfnisse", "Moderne Küchenausstattung", "Komfortable Schlafbereiche"],
    layouts: [{ id: "pt-730-eb", name: "PT 730 EB", image: "/placeholder.svg", length: "7,30 m", sleepingPlaces: "2" }, { id: "pt-784-qb", name: "PT 784 QB", image: "/placeholder.svg", length: "7,84 m", sleepingPlaces: "4" }],
    interior: [{ name: "Wohnbereich", description: "Gemütliche Sitzgruppe" }, { name: "Küche", description: "Moderne Ausstattung" }, { name: "Schlafbereich", description: "Komfortable Betten" }, { name: "Bad", description: "Funktionaler Waschraum" }],
    upholsteryTypes: ["Polster Como\nDekoration Maka", "Polster Milano\nDekoration Lasca", "Polster Pisa\nDekoration Rana"],
    equipment: { chassis: ["Fiat Ducato Multijet 3.0", "Euro 6D Final", "Manuelle Klimaanlage", "ESP mit ASR und ABS"], body: ["Teilintegrierter Aufbau", "GFK-Dach", "Isolierte Rahmenfenster", "LED-Außenbeleuchtung"], livingArea: ["Dinette-Sitzgruppe", "LED-Ambientebeleuchtung", "Panoramafenster", "Stauraumschränke"], kitchen: ["3-Flammen-Gaskocher", "Kompressor-Kühlschrank", "Spüle mit Abdeckung", "Mikrowelle optional"], bathroom: ["Separate Dusche", "Cassetten-WC", "Waschbecken mit Spiegel", "Beleuchtung und Lüftung"], electrical: ["AGM-Batterien", "Solaranlage optional", "230V-Steckdosen", "USB-Anschlüsse"] }
  },
  "profila-rs": {
    id: "profila-rs",
    name: "Profila RS",
    intro: "Der Profila RS steht für Reisemobil-Luxus der Spitzenklasse. Mit seinem durchdachten Design und der hochwertigen Ausstattung bietet er alles, was das Herz von anspruchsvollen Reisenden höher schlagen lässt. Jedes Detail wurde sorgfältig ausgewählt, um maximalen Komfort zu gewährleisten.",
    heroImage: "/placeholder.svg",
    galleryImages: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    technicalData: { länge: "8,99 m", sitzplätze: "4", schlafplätze: "2" },
    highlights: ["Luxuriöse Ausstattung auf höchstem Niveau", "Großzügige Raumaufteilung", "Premium-Materialien und Verarbeitung", "Innovative Technologie-Integration", "Exklusives Design"],
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
