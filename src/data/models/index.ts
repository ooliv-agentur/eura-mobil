import { vanData } from './van';
import { conturaData } from './contura';
// Import other models as we create them

export const modelsData = {
  "van": vanData,
  "contura": {
    ...conturaData,
    highlights: [
      "Mercedes-Benz Sprinter Chassis",
      "AL-KO-Tiefrahmenfahrgestell",
      "Hinterleuchteten Duschsäule", 
      "Starlight Dome – zweiwelliges Panoramaglasdach (Option)",
      "Warmwasserheizung",
      "Winterfester, beheizter Doppelboden"
    ]
  },
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
    technicalData: { länge: "6,99 – 7,58 m", sitzplätze: "4", schlafplätze: "4" },
    highlights: [
      "Integriertes Hubbett",
      "Winterfester, beheizter Doppelboden",
      "Extra große Stauräume durch Garagenabsenkung",
      "Isolierte und beheizte Wassertanks",
      "Elektrisch gesteuerte Abwassertank-Entleerung",
      "Isofix (grundrissabhängig)"
    ],
    layouts: [
      { id: "prs-695-eb", name: "PRS 695 EB", image: "/placeholder.svg", length: "6,99 m", sleepingPlaces: "4" },
      { id: "prs-720-eb", name: "PRS 720 EB", image: "/placeholder.svg", length: "7,41 m", sleepingPlaces: "4" },
      { id: "prs-695-hb", name: "PRS 695 HB", image: "/placeholder.svg", length: "6,99 m", sleepingPlaces: "4" },
      { id: "prs-675-sb", name: "PRS 675 SB", image: "/placeholder.svg", length: "6,99 m", sleepingPlaces: "4" },
      { id: "prs-720-qf", name: "PRS 720 QF", image: "/placeholder.svg", length: "7,58 m", sleepingPlaces: "4" },
      { id: "prs-720-ef", name: "PRS 720 EF", image: "/placeholder.svg", length: "7,41 m", sleepingPlaces: "4" }
    ],
    interior: [
      { name: "PRS 675 Chalet – Rustico", description: "PRS 675 Chalet – Rustico" },
      { name: "PRS 675 Chalet – Rustico", description: "PRS 675 Chalet – Rustico" },
      { name: "PRS 675 Chalet – Rustico", description: "PRS 675 Chalet – Rustico" },
      { name: "PRS 675 Chalet – Rustico", description: "PRS 675 Chalet – Rustico" },
      { name: "PRS 675 Chalet – Rustico", description: "PRS 675 Chalet – Rustico" }
    ],
    upholsteryTypes: [
      "Polster Como – Dekoration Maka", 
      "Polster Milano – Dekoration Lasca", 
      "Polster Pisa – Dekoration Rana",
      "Polster Dara – Dekoration Maka",
      "Polster Bergamo – Dekoration Evorno"
    ],
    equipment: { chassis: ["Mercedes-Benz Sprinter", "Automatikgetriebe", "Tempomat", "Premium Sicherheitspaket"], body: ["Vollintegrierter Luxus-Aufbau", "Premium Isolierung", "Elektrische Stufe", "LED-Beleuchtungspaket"], livingArea: ["Luxus-Sitzgruppe mit Lederbezug", "Entertainment-System", "Klimaanlage", "Premium-Möbel"], kitchen: ["Induktions-Kochfeld", "Großraum-Kühlschrank", "Backofen mit Grill", "Geschirrspüler"], bathroom: ["Separate Regendusche", "Waschtisch mit Naturstein", "Premium-WC", "Fußbodenheizung"], electrical: ["Lithium-Batterien", "Solaranlage", "Wechselrichter", "Smart-Home-System"] }
  },
  "integra-line-fiat": { 
    id: "integra-line-fiat", 
    name: "Integra Line Fiat", 
    intro: "Sich einfach mal ganz weit wegträumen – oder einfach gleich hinfahren! Diese Freiheit genießen Sie ganz individuell mit dem Integra Line: das Reisemobil für alle, die ihren eigenen Weg gehen und dabei die ursprüngliche Vielfalt der Landschaft genießen wollen. Für die, die herausragendes Design lieben, vor allem wenn es aus natürlichen Formen entsteht. Und auch für alle, die ihren Traum von individueller Freiheit in die Wirklichkeit verwandeln wollen. Das Fahrzeug schmiegt sich ganz einfach in die natürliche Umgebung ein und lässt dich keine Wünsche an Luxus und Komfort offen.", 
    heroImage: "/placeholder.svg", 
    galleryImages: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"], 
    technicalData: { länge: "7,30 – 7,84 m", sitzplätze: "4–6", schlafplätze: "2–4" }, 
    highlights: [
      "Winterfester, beheizter Doppelboden",
      "Elektrische Abwassertankentleerung",
      "Gesamthöhe unter 2,90 m",
      "Isolierte und beheizte Wassertanks",
      "Optional mit Alde Warmwasserheizung",
      "Isofix (grundrissabhängig)"
    ], 
    layouts: [
      { id: "il-720-eb", name: "IL 720 EB", image: "/placeholder.svg", length: "7,41 m", sleepingPlaces: "2" },
      { id: "il-720-qf", name: "IL 720 QF", image: "/placeholder.svg", length: "7,58 m", sleepingPlaces: "2" },
      { id: "il-720-ef", name: "IL 720 EF", image: "/placeholder.svg", length: "7,41 m", sleepingPlaces: "2" },
      { id: "il-730-ef", name: "IL 730 EF", image: "/placeholder.svg", length: "7,84 m", sleepingPlaces: "4" }
    ], 
    interior: [
      { name: "Interieur \"Chalet Rustico\"", description: "Interieur \"Chalet Rustico\"" },
      { name: "Interieur \"Natural Heritage\"", description: "Interieur \"Natural Heritage\"" },
      { name: "Durchsicht (Küche mit Mineralstoffoberfläche und Erweiterung)", description: "Durchsicht (Küche mit Mineralstoffoberfläche und Erweiterung)" },
      { name: "Schlafzimmer mit Chalet Rustico", description: "Schlafzimmer mit Chalet Rustico" }
    ], 
    upholsteryTypes: [
      "Polster Como\nDekoration Maka",
      "Polster Milano\nDekoration Lasca",
      "Polster Pisa\nDekoration Rana",
      "Polster Dara\nDekoration Maka"
    ], 
    equipment: {
      chassis: [
        "Fiat Ducato 140 PS",
        "Schaltgetriebe",
        "ESP",
        "ABS"
      ],
      body: [
        "Integrierter Aufbau",
        "GFK-Dach",
        "Isolierte Rahmenfenster"
      ],
      livingArea: [
        "Dinette-Sitzgruppe",
        "LED-Beleuchtung",
        "Panoramafenster"
      ],
      kitchen: [
        "3-Flammen-Gaskocher",
        "Kompressor-Kühlschrank",
        "Spüle"
      ],
      bathroom: [
        "Separate Dusche",
        "Waschtisch mit Naturstein",
        "Premium-WC",
        "Fußbodenheizung"
      ],
      electrical: [
        "AGM-Batterien",
        "Ladegerät 230V",
        "230V-Steckdosen"
      ]
    } 
  },
  "integra-line-gt-mercedes": { 
    id: "integra-line-gt-mercedes", 
    name: "Integra Line GT Mercedes", 
    intro: "Der neue Integra Line GT schlägt ein neues Kapitel bei den Integrierten von Eura Mobil auf. Die Funktionalität der Liner Klasse vereint sich mit der Eleganz eines kompakten Integrierten und der Komfort der Luxusklasse paart sich im GT mit der Dynamik eines Teilintegrierten. Die exklusive und individuelle Ausstattung verleiht unserem neuen Grand Tourismo dabei seinen ganz eigenen Charme.", 
    heroImage: "/placeholder.svg", 
    galleryImages: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"], 
    technicalData: { länge: "7,47 – 7,64 m", sitzplätze: "4", schlafplätze: "4" }, 
    highlights: [
      "Dynamisch elegantes Design",
      "MB Sprinter Chassis mit AL-KO Spezialtiefrahmen",
      "30cm Doppelboden mit drei Ladezonen",
      "Short Cabin Fahrerhaus mit optimalem Sichtfeld nach vorn",
      "2,05m Stehhöhe",
      "Liner-Stauklappen mit Aufstelldämpfer",
      "Sportive Front mit hochpräzisen RIM Formteilen",
      "Erfüllt bereits heute die ab 2026 geltenden Rahmenvorgaben für Sicherheits- und Assistenzsysteme",
      "Beidseitig ausziehbare Stauwanne im Heckbereich",
      "Interieur Natural Heritage (exklusiv für MB) oder Chalet Rustico",
      "Top-Ausstattung mit Lithium-Batterie, Alde-Heizung…"
    ], 
    layouts: [
      { id: "il726-ef", name: "IL726 EF", image: "/placeholder.svg", length: "7,47 m", sleepingPlaces: "4" },
      { id: "il726-qf", name: "IL726 QF", image: "/placeholder.svg", length: "7,64 m", sleepingPlaces: "4" }
    ], 
    interior: [
      { name: "Dinette", description: "Dinette" },
      { name: "Küche", description: "Küche" },
      { name: "Esstisch", description: "Esstisch" },
      { name: "Bad", description: "Bad" },
      { name: "Heckbett", description: "Heckbett" },
      { name: "Hubbett über dem Fahrerhaus", description: "Hubbett über dem Fahrerhaus" }
    ], 
    upholsteryTypes: [
      "Polster Como\nDekoration Maka",
      "Polster Milano (Option)\nDekoration Lasca",
      "Polster Pisa (Option)\nDekoration Rana",
      "Polster Dara\nDekoration Maka"
    ], 
    equipment: {
      chassis: [
        "Mercedes-Benz Sprinter 170 PS",
        "AL-KO Spezialtiefrahmen",
        "Automatikgetriebe 9G-TRONIC",
        "ESP mit Fahrassistenzsystemen",
        "Short Cabin Fahrerhaus",
        "Premium Sicherheitspaket"
      ],
      body: [
        "Vollintegrierter Aufbau",
        "30cm Doppelboden mit drei Ladezonen",
        "Liner-Stauklappen mit Aufstelldämpfer",
        "Sportive Front mit RIM Formteilen",
        "2,05m Stehhöhe",
        "LED-Außenbeleuchtung"
      ],
      livingArea: [
        "Interieur Natural Heritage oder Chalet Rustico",
        "Panorama-Sitzgruppe",
        "LED-Ambientebeleuchtung",
        "Klimaanlage Truma Aventa",
        "Premium-Möbel"
      ],
      kitchen: [
        "Induktions-Kochfeld",
        "Kompressor-Kühlschrank 160L",
        "Backofen mit Grill",
        "Mineralstoff-Arbeitsplatte"
      ],
      bathroom: [
        "Separate Regendusche",
        "Premium-Waschbecken",
        "Cassetten-WC",
        "Fußbodenheizung"
      ],
      installation: [
        "Alde Warmwasserheizung",
        "Frischwassertank 200 l",
        "Abwassertank 150 l",
        "Elektr. Abwassertankentleerung"
      ],
      electrical: [
        "Lithium-Batterien 200 Ah",
        "Solaranlage 190 Wp",
        "Wechselrichter 2000W",
        "Smart-Home-System"
      ]
    }
  },
  "profila-t-mercedes": { 
    id: "profila-t-mercedes", 
    name: "Profila T Mercedes", 
    intro: `Die Profila T auf Mercedes verkörpern die Top-Modelle innerhalb der Profila Baureihe. Mit AL-KO Tiefrahmen, Alde-Warmwasserheizung, 20 cm hohem Doppelboden und dem optional erhältlichen Panoramadach mit Aufstellfunktion verfügen diese Modelle über besondere Ausstattungsfeatures. In der Saison 2024 kommt die speziell für die Mercedes Profila geschaffene Wohnwelt 'Natural Heritage' dazu, die den exklusiven Charakter der Top-Modelle noch stärker betont.`, 
    heroImage: "/placeholder.svg", 
    galleryImages: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"], 
    technicalData: { länge: "7,12 m – 7,54 m", sitzplätze: "4", schlafplätze: "2" }, 
    highlights: [
      "Basisfahrzeug Mercedes Sprinter",
      "AL-KO Tiefrahmen", 
      "Alde Warmwasserheizung",
      "Auf Wunsch exklusive Wohnwelt \"Natural Heritage\"",
      "Winterfester, beheizter Doppelboden",
      "Elektrische Abwassertank-Entleerung"
    ], 
    layouts: [
      { id: "pt696-eb", name: "PT696 EB", image: "/placeholder.svg", length: "7,12 m", sleepingPlaces: "2" },
      { id: "pt726-ef", name: "PT726 EF", image: "/placeholder.svg", length: "7,54 m", sleepingPlaces: "2" },
      { id: "pt726-qf", name: "PT726 QF", image: "/placeholder.svg", length: "7,54 m", sleepingPlaces: "2" },
      { id: "pt726-eb", name: "PT726 EB", image: "/placeholder.svg", length: "7,54 m", sleepingPlaces: "2" }
    ], 
    interior: [
      { name: "726 EF Natural Heritage", description: "726 EF Natural Heritage" },
      { name: "726 EF Chalet", description: "726 EF Chalet" },
      { name: "726 EF Natural Heritage", description: "726 EF Natural Heritage" },
      { name: "726 EF Natural Heritage", description: "726 EF Natural Heritage" }
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
        "Mercedes-Benz Sprinter 140 PS",
        "CCS Breitspur-Tiefrahmen (Spurweite 1.980 mm)",
        "ABS mit elektronischer Bremskraftverteilung",
        "ESP inkl. Traction+ & Hill-Descent-Control",
        "Fahrer-/Beifahrerairbag",
        "16\" Räder",
        "Rahmenverlängerung",
        "Fix and go Pannenset"
      ],
      body: [
        "Teilintegrierter Aufbau",
        "GFK-Dach mit Hagelschutzklasse 4",
        "Isolierte Rahmenfenster",
        "LED-Außenbeleuchtung",
        "Winterfester Doppelboden"
      ],
      driversCabin: [
        "Fahrerhaus-Verdunkelung",
        "Multifunktionslenkrad",
        "Bordcomputer",
        "Radio mit Bluetooth",
        "Elektrische Fensterheber"
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
  "activa-one": { id: "activa-one", name: "Activa One", intro: "Der Activa One ist der Familien-Alkoven der Extraklasse.", heroImage: "/placeholder.svg", galleryImages: ["/placeholder.svg"], technicalData: { länge: "7,30 – 7,84 m", sitzplätze: "4-6", schlafplätze: "4-6" }, highlights: ["Alkoven-Bauweise"], layouts: [], interior: [], upholsteryTypes: [], equipment: {} },
  "integra": { 
    id: "integra", 
    name: "Integra", 
    intro: "Mit dem Integra hat Eura Mobil die Messlatte bei den Reisemobilen der Oberklasse auf ein völlig neues Niveau gehoben: Ein emotional markantes, gleichzeitig hochfunktionales und eindeutig sicherheitsorientiertes Lichtdesign innen wie außen untermalt den luxuriösen Charakter in dieser Klasse. Dezente Ambientebeleuchtung und modernste LED-Technik erzeugen eine besonders eindrucksvolle Lichtstimmung, die sich überall sehen lassen kann. Hochwertige Materialien, erstklassige Verarbeitung, formvollendete Architektur und die extrem großzügige Raumgestaltung verbinden sich zu einem unvergleichlichen Wohlfühlambiente. Steigen Sie ein und lassen Sie sich von vorne bis hinten begeistern – während Ihrer gesamten Reise in diesem Luxus-Reisemobil.", 
    heroImage: "/placeholder.svg", 
    galleryImages: ["/placeholder.svg"], 
    technicalData: { länge: "7,89 – 8,99 m", sitzplätze: "4", schlafplätze: "4" }, 
    highlights: [
      "Modernste LED-Lichttechnik",
      "Automotives Design", 
      "Sitzpolster mit Einzelkissen",
      "Winterfester, beheizter Doppelboden",
      "Isolierte und beheizte Wassertanks",
      "Elektrische Abwassertankentleerung"
    ], 
    layouts: [
      { id: "i-890-qb", name: "I 890 QB", image: "/placeholder.svg", length: "8,99 m", sleepingPlaces: "4" },
      { id: "i-890-eb", name: "I 890 EB", image: "/placeholder.svg", length: "8,99 m", sleepingPlaces: "4" },
      { id: "i-760-ef", name: "I 760 EF", image: "/placeholder.svg", length: "7,89 m", sleepingPlaces: "4" },
      { id: "i-760-qf", name: "I 760 QF", image: "/placeholder.svg", length: "7,89 m", sleepingPlaces: "4" }
    ], 
    interior: [
      { name: "Luxuriöses Innenraumambiente", description: "Luxuriöses Innenraumambiente" },
      { name: "Küche für Chefköche", description: "Küche für Chefköche" },
      { name: "Schlafräume werden wahr...", description: "Schlafräume werden wahr..." },
      { name: "Hubbett", description: "Hubbett" },
      { name: "Hochglänzende Oberschränke", description: "Hochglänzende Oberschränke" }
    ], 
    upholsteryTypes: [
      "Polster Leder Beige\nDekoration Maka",
      "Polster Leder Grau\nDekoration Rana", 
      "Polster Como\nDekoration Maka"
    ], 
    equipment: {} 
  },
  "xtura": { 
    id: "xtura", 
    name: "Xtura", 
    intro: `Mit dem neuen Xtura als seinem ersten 4×4 Fernreisemobil hat Eura Mobil in der Saison auf Anhieb ein eigenes Marktsegment definiert: konsequent robust ausgestattet, mit hoher elektrischer Energieautarkie, busgesteuerter Onboard-Technik und der Möglichkeit zu weltweiter Satellitennavigation im Offroad-Bereich positioniert sich der neue Xtura erfolgreich zwischen den Standard 4×4 Teilintegrierten und High-End Offroad-Expeditionsfahrzeugen.

Zur Saison 2025 öffnet sich Eura Mobil gleich in mehrfacher Hinsicht den individuellen Ansprüchen von Weltreisenden noch deutlicher: zum einen gibt es optional eine „Vorbereitung Alternativtoilette" bei der die Kunden frei wählen können, ob eine Trenntoilette (systemunabhängig) oder doch die klassische WC-Toilette beim Xtura eingebaut wird. Zum Anderen stellt Eura Mobil ein neues „Xtura Carryer" Zubehörsystem vor, bei dem auf einer Grundplatte am Heck wahlweise Ersatzradhalterung oder Transport-/ Sportausrüstung montiert werden können. Auch auf dem Dach finden unterschiedliche, modular zu installierende Transportboxen o.ä. eine sichere Befestigung. Auch im Detail hat sich Eura Mobil schon im Verlauf der Saison 2024 noch stärker an den rauen Anforderungen abseits befestigter Strassen orientiert. So sind die Küchenauszüge beispielsweise mit doppelten Verschlüssen gesichert worden.

Den Xtura präsentieren wir Ihnen wieder auf der CMT in Stuttgart vom 18. bis 26. Januar  auf einer Sonderfläche auf dem Eura Mobil Stand in Halle 1 B52, wir freuen uns auf Ihren Besuch!`, 
    heroImage: "/placeholder.svg", 
    galleryImages: ["/placeholder.svg"], 
    technicalData: { länge: "6,88 m", sitzplätze: "4", schlafplätze: "2" }, 
    highlights: [
      "330 Ah Lithium-Batterie",
      "Allradantrieb",
      "Garmin world wide Navigation",
      "Busgesteuerte Überwachung der Bordtechnik via Control-Panel und Pad/Smartphone",
      "Solarmodule und Umfeldbeleuchtung in Dachträgersystem integriert",
      "Besonders verwindungsfester Aufbau mit 85mm starker Bodenplatte",
      "Komfortausstattung u.a. mit Fußbodenheizung, Kompressor-Kühlschrank und Backofen"
    ], 
    layouts: [
      { id: "xt-686-ef", name: "XT 686 EF", image: "/placeholder.svg", length: "6,88 m", sleepingPlaces: "2" }
    ], 
    interior: [
      { name: "Einzelsitz Face to Face", description: "Flexibler Einzelsitz mit Face-to-Face Funktion für optimale Raumnutzung" },
      { name: "Kompressor-Kühlschrank", description: "Energieeffizienter Kompressor-Kühlschrank für lange Standzeiten" },
      { name: "Schlafbereich", description: "Komfortables Heckbett mit hochwertigen Matratzen" },
      { name: "Schwenkbare Duschwand", description: "Platzsparende schwenkbare Duschwand für flexibles Badezimmer" },
      { name: "Filztaschen", description: "Praktische Filztaschen für zusätzlichen Stauraum" },
      { name: "Gas-/Induktions-Kocher", description: "Vielseitiges Kochfeld mit Gas- und Induktionsfunktion" },
      { name: "Handtuchstange", description: "Ausziehbare Handtuchstange für praktische Nutzung" },
      { name: "Schwanenhalslampe", description: "Flexible Schwanenhalslampe für optimale Beleuchtung" },
      { name: "Panoramadach", description: "Großes Panoramadach für ein offenes Raumgefühl" },
      { name: "Alde im Laufboden bzw. Sitz", description: "Alde Heizung im Laufboden und Sitzbereich für Wärmekomfort" }
    ],
    exterior: [
      { name: "Robuste Front", description: "Verstärkte Front für Offroad-Einsätze" },
      { name: "Solarmodule im Dachträger", description: "Integrierte Solaranlage für Energieautarkie" },
      { name: "Xtura Carrier System", description: "Modulares Transportsystem am Heck" },
      { name: "LED-Umfeldbeleuchtung", description: "Integrierte Beleuchtung für Campingplätze" }
    ],
    upholsteryTypes: [
      "Offroad-Polster Robust\nDekoration Canyon",
      "Expedition-Polster Comfort\nDekoration Desert",
      "Adventure-Polster Premium\nDekoration Mountain"
    ], 
    equipment: {
      chassis: [
        "Mercedes-Benz Sprinter 4x4",
        "170 PS Turbodiesel",
        "Allradantrieb permanent zuschaltbar",
        "Differentialsperren vorn und hinten",
        "Geländeuntersetzung",
        "ESP mit Offroad-Modus",
        "Hill Descent Control",
        "Load Adaptive Control"
      ],
      body: [
        "Besonders verwindungsfester Aufbau",
        "85mm starke Bodenplatte",
        "Verstärkte Rahmenkonstruktion",
        "Offroad-taugliche Türscharniere",
        "Stoßfeste Außenverkleidung",
        "Schutzbleche Unterboden"
      ],
      electrical: [
        "330 Ah Lithium-Batterie",
        "Solarmodule 400 Wp",
        "Wechselrichter 2000W",
        "Busgesteuerte Bordtechnik",
        "12V/24V Steckdosen",
        "USB-C Schnellladeanschlüsse"
      ],
      livingArea: [
        "Dinette mit Panoramafenster",
        "LED-Ambientebeleuchtung",
        "Fußbodenheizung",
        "Offroad-optimierte Möbelbefestigung",
        "Sicherheitsgurte an allen Sitzplätzen"
      ],
      kitchen: [
        "Induktionskochfeld 2-flammig",
        "Kompressor-Kühlschrank 130L",
        "Backofen mit Grill",
        "Doppelt gesicherte Küchenauszüge",
        "Mineralstoff-Arbeitsplatte"
      ],
      bathroom: [
        "Separate Dusche",
        "Vorbereitung Alternativtoilette",
        "Waschbecken mit Mineralstoff",
        "Handtuchheizung",
        "Lüftung mit Außentemperaturfühler"
      ],
      installation: [
        "Frischwassertank 200 l isoliert",
        "Abwassertank 150 l isoliert",
        "Alde Warmwasserheizung",
        "Druckwasserpumpe",
        "Externe Wasseranschlüsse"
      ]
    }
  }
};

// Re-export types and other utilities
export * from '../modelsData';
