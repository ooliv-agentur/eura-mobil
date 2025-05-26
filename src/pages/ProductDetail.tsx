
import React, { useState, useEffect } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Download, MapPin, Settings, Circle } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useIsMobile } from "@/hooks/use-mobile";
import { Skeleton } from "@/components/ui/skeleton";
import { ProductLayout } from "@/components/ProductLayout";
import { useWohnmobilberaterTrigger } from "@/hooks/useWohnmobilberaterTrigger";
import { ComparisonProvider } from "@/context/ComparisonContext";
import { ComparisonBar } from "@/components/comparison/ComparisonBar";
import { ComparisonModal } from "@/components/comparison/ComparisonModal";
import { SelectableModelCard } from "@/components/comparison/SelectableModelCard";
import { SidebarNavigation } from "@/components/SidebarNavigation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselIndicators,
} from "@/components/ui/carousel";
import { ScrollArea } from "@/components/ui/scroll-area";

// Model data repository - could later be moved to a separate file
const modelsData = {
  "van": {
    id: "van",
    name: "Van",
    intro: "Im neuen Premium Van von Eura Mobil verwandelt das exklusive Ambiente jeden Moment in einen besonderen Augenblick. Spüren Sie die edlen Materialien und erleben Sie die individuellen Details, die den Eura Mobil Van zu Ihrem ganz persönlichen mobilen Zuhause machen. Nehmen Sie sich die Zeit und lassen Sie das Interieur auf sich wirken...",
    heroImage: "/placeholder.svg",
    galleryImages: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    technicalData: {
      länge: "5,99 – 6,36 m",
      breite: "2,05 m",
      höhe: "2,65 m",
      schlafplätze: "2-3",
      sitzplätze: "4"
    },
    highlights: [
      "Tisch mit klappbarer Platte, Cupholder und schwenkbarer Verlängerung",
      "Komfort-Kaltschaummatratzen mit geteilten und damit klappbaren Bettrahmen",
      "Waschraum mit schwenkbarer Duschwand",
      "Staufächer im Doppelboden",
      "Mineralstoff-Spüle"
    ],
    layouts: [
      {
        id: "v-635-eb",
        name: "V 635 EB",
        image: "/placeholder.svg",
        length: "6,36 m",
        sleepingPlaces: "2"
      },
      {
        id: "v-635-hb",
        name: "V 635 HB",
        image: "/placeholder.svg",
        length: "6,36 m",
        sleepingPlaces: "2"
      },
      {
        id: "v-595-hb",
        name: "V 595 HB",
        image: "/placeholder.svg",
        length: "5,99 m",
        sleepingPlaces: "2"
      }
    ],
    interior: [
      { name: "Kommunikation", description: "Boxen, LED-Lampen und USB-Steckdosen" },
      { name: "Spüle", description: "Mineralstoff-Spüle" },
      { name: "Dinetten-Tisch", description: "Mit abgesenkter Ablage" },
      { name: "Küche", description: "Mit Gewürzregal" }
    ],
    upholsteryTypes: ["Eco-Leder Schwarz", "Eco-Leder Beige", "Stoff-Kombination Grau"],
    equipment: {
      chassis: [
        "Fiat Ducato 35L Chassis, Kastenwagen",
        "Euro 6D Final inkl. Ad Blue und Rußpartikelfilter",
        "Fahrer- + Beifahrerairbag",
        "ABS, ASR, ESP inkl. Traktion+, Hilldescent",
        "Klimaanlage manuell",
        "Tempomat",
        "Kraftstofftank 90 Liter",
        "Zentralverriegelung mit Funkfernbedienung",
        "Tagfahrlicht",
        "Elektrische Fensterheber vorn",
        "Radzierblenden",
        "Fix and Go Pannenset",
        "Stoßfänger hinten schwarz"
      ],
      body: [
        "Geräusch- und wärmedämmende Isolierung in Dach, Boden und Seiten",
        "Aufbaufarbe weiß",
        "Karosseriebündige, isolierte Rahmenfenster mit Schnellverschlüssen",
        "Fenster mit Mückengitter und Verdunklung",
        "Zwei Seitenfenster im Schlafbereich (595 HB: 1)",
        "Ausstellfenster im Heck",
        "Außenbeleuchtung",
        "Elektrische Trittstufe"
      ],
      driversCabin: [
        "Sitzbezüge im Wohnraumpolsterstoff",
        "Fahrerhausteppich",
        "Übergangsloser, kopfhoher Durchgang",
        "Kartenfächer über Türen",
        "Doppel-Leseleuchten",
        "Eco-Leder-Blende mit LED-Ambientebeleuchtung"
      ],
      livingArea: [
        "Ergonomische Dinette mit abgerundeten Kanten",
        "Klapptisch mit schwenkbarer Verlängerung und Cupholder",
        "Polster in Eco-Leder / Stoff-Kombination",
        "Doppelboden-Staufächer (1 Auszug, 1 Klappfach, 1 Bodenfach)",
        "Hinterlüftete Oberschränke mit Ambientebeleuchtung",
        "Möbeldekor \"Beach Home\"",
        "Kleiderschrank mit ausziehbarer Stange",
        "Flauschbespannung an Decke, textile Wandbespannung",
        "Eco-Leder-Blenden an Fensterrahmen & Dachhauben",
        "Metall-Klappenaufsteller",
        "Verchromte Schrankverschlüsse",
        "LED-Funktions- und Ambientebeleuchtung",
        "USB-Ports & TV-Vorbereitung"
      ],
      kitchen: [
        "Einteilige Mineralstoff-Arbeitsplatte mit Spüle & Klapp-Erweiterung",
        "Küchenarmatur ausziehbar/versenkbar",
        "Breite Auszüge mit Soft-Close",
        "Zwei-Flammen-Gaskocher",
        "Zentral angeordnete Gasabsperrhähne",
        "Kompressorkühlschrank (90 l)",
        "Gewürzregal mit Acrylglas-Reling & Beleuchtung",
        "Ambientebeleuchtung am Küchenblock & Oberschrank",
        "Zwei Klappfächer im Eingangsbereich (1x Flaschenhalter)",
        "Außenzugänglicher Auszug im Küchenblock",
        "Einhängbare Tischschiene mit Klappblende"
      ],
      bathroom: [
        "Waschraum mit schwenkbarer Duschwand",
        "Duschfläche bis zu 60×90 cm",
        "Holz-Duschrost",
        "Mineralstoff-Waschbecken mit Click-Clack-Verschluss",
        "Staufächer & Spiegelschrank",
        "Raumtür (3 cm stark) mit Eco-Leder-Griff",
        "Cassettentoilette",
        "Fenster mit Mückengitter & Verdunklung"
      ],
      sleeping: [
        "Heckbetten mit Tellerfedern (595 HB) oder Kaltschaummatratzen",
        "Ladefläche unter Betten aufstellbar",
        "Modul-Stauboxen (635 EB), Auffahrrampe & Abdeckung (635 HB)",
        "Dachstauschränke mit Beleuchtung",
        "Eco-Leder-Eckmodule mit Lautsprechern",
        "Mini Heki Dachluke",
        "Schwenkbare LED-Lesespots mit USB",
        "Stoffbespannte Hecktüren mit ausstellbaren Fenstern"
      ],
      installation: [
        "4 kW Dieselheizung",
        "Warmwasserversorgung mit Einhebel-Mischbatterie",
        "Druckwasserpumpe",
        "Beheizter Frischwassertank im Innenraum",
        "Beheizter Abwassertank unterflur",
        "Frostsichere Wasserablasshähne",
        "Gaskasten im Heck",
        "Außendusche (nicht bei 595 HB)"
      ],
      electrical: [
        "100 Ah Lithium-Ionen-Batterie",
        "230 V-Steckdosen in Küche, Sitzgruppe & Bad",
        "Separat schaltbare Funktions-/Ambientebeleuchtung",
        "TV-Vorbereitung & 12 V-Steckdose",
        "2× USB in Wohnraum & Schlafbereich",
        "Trennschalter Starter-/Wohnraumbatterie",
        "Elektronischer Ladeautomat",
        "CEE-Außenanschluss mit Sicherungsautomat",
        "FI-Schutzschalter",
        "Control Panel über Eingang",
        "CP+ Heizungssteuerung mit Crashsensor"
      ]
    }
  },
  "profila-t-fiat": {
    id: "profila-t-fiat",
    name: "Profila T Fiat",
    intro: "Unbeschwert und ohne Hetze die Welt erfahren, dafür eignen sich sämtliche Modelle der Baureihe Profila T besonders gut. Neben ihrem eleganten und schnittigen Design bestechen sie durch die niedrige Gesamthöhe von weniger als 2,90 m bei einer Stehhöhe von 1,97 m im Innenraum. In ihrem Ladevolumen von 1.500 bis 3.000 Liter unterscheiden sie sich deutlich voneinander, während der bequeme, niedrige \"Coupé-Einstieg\" mit den integrierten und voll isolierten Einstiegsstufen aus GFK wieder allen gemeinsam ist.",
    heroImage: "/placeholder.svg",
    galleryImages: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    technicalData: {
      länge: "6,99 – 7,58 m",
      sitzplätze: "4",
      schlafplätze: "2"
    },
    highlights: [
      "Winterfester, beheizter Doppelboden",
      "Große Stauräume durch Garagenabsenkung",
      "Isolierte & beheizte Wassertanks",
      "Elektr. Abwassertank-Entleerung",
      "Isofix (grundrissabhängig)"
    ],
    layouts: [
      {
        id: "pt-720-eb",
        name: "PT 720 EB",
        image: "/placeholder.svg",
        length: "7,41 m",
        sleepingPlaces: "2"
      },
      {
        id: "pt-695-eb",
        name: "PT 695 EB",
        image: "/placeholder.svg",
        length: "6,99 m",
        sleepingPlaces: "2"
      },
      {
        id: "pt-675-sb",
        name: "PT 675 SB",
        image: "/placeholder.svg",
        length: "6,99 m",
        sleepingPlaces: "2"
      },
      {
        id: "pt-720-qf",
        name: "PT 720 QF",
        image: "/placeholder.svg",
        length: "7,58 m",
        sleepingPlaces: "2"
      },
      {
        id: "pt-720-ef",
        name: "PT 720 EF",
        image: "/placeholder.svg",
        length: "7,41 m",
        sleepingPlaces: "2"
      },
      {
        id: "pt-660-eb",
        name: "PT 660 EB",
        image: "/placeholder.svg",
        length: "6,99 m",
        sleepingPlaces: "2"
      }
    ],
    interior: [
      { name: "726 EF Chalet - Rustico", description: "" },
      { name: "726 EF Chalet - Rustico", description: "" },
      { name: "726 EF Chalet - Rustico", description: "" },
      { name: "720 EF Chalet - Rustico", description: "" },
      { name: "720 EF Chalet - Rustico", description: "" }
    ],
    upholsteryTypes: [
      "Polster Como\nDekoration Maka",
      "Polster Milano, Dekoration Lasca",
      "Polster Milano\nDekoration Lasca",
      "Polster Leider Beige, Dekoration Rana",
      "Polster Pisa\nDekoration Rana",
      "Polster Dara, Dekoration Maka",
      "Polster Dara\nDekoration Maka",
      "Polster Bergamo\nDekoration Evorno"
    ],
    equipment: {
      chassis: [
        "Fiat Ducato Chassis mit modernster Technik",
        "Automatikgetriebe optional verfügbar",
        "ESP und weitere Sicherheitssysteme",
        "Komfortable Fahrerausstattung serienmäßig"
      ],
      body: [
        "Teilintegrierte Bauweise",
        "Hochwertige Isolierung",
        "Panoramafenster für beste Aussicht",
        "Wetterbeständige Materialien"
      ],
      livingArea: [
        "Flexible Sitzgruppe",
        "Hochwertige Polstermaterialien",
        "Optimal ausgeleuchtete Bereiche",
        "Praktische Stauraumlösungen"
      ],
      kitchen: [
        "Moderne 3-Flammen-Kochstelle",
        "Großer Kühlschrank",
        "Spülmaschine optional",
        "Reichlich Arbeitsfläche"
      ],
      bathroom: [
        "Separate Duschkabine",
        "Komfortables WC",
        "Großzügiger Waschbereich",
        "Praktische Ablagemöglichkeiten"
      ],
      electrical: [
        "Moderne Elektroinstallation",
        "USB-Anschlüsse in allen Bereichen",
        "LED-Beleuchtung",
        "Solarpanel optional"
      ]
    }
  },
  "profila-rs": {
    id: "profila-rs",
    name: "Profila RS",
    intro: "Mit 140 PS Motorisierung und mit State-of-the-art-Fahrzeugtechnik, wie ABS, ESP und 16″-Rädern am CCS-Breitspur-Tiefrahmen mit einer Spurweite von 1.980 mm und weiteren intelligenten Techniklösungen ausgestattet, lässt es sich in den Profila RS Modellen besonders stressfrei in den Traumurlaub starten: Im Fahrerhaus mit seiner schnittigen Silhouette auf dem bequemen Fahrersitz Platz genommen, kann kommen, was will – der verdienten Auszeit stellt sich nichts in den Weg. Im Innenraum des Wohnmobils beeindruckt das großzügige Raumgefühl, das vor allem durch das bündig in der Decke \"versenkte\" Hubbett (Serie) entsteht. Auch der Aufbau mit durchgehend isoliertem Leichtbaudoppelboden, holzfreien GFK-Wänden. Bodenfächern und einfach erreichbaren Serviceklappen lässt dabei keine Wünsche an eine angenehme Reise offen.",
    heroImage: "/placeholder.svg",
    galleryImages: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    technicalData: {
      länge: "6,99 – 7,58 m",
      sitzplätze: "4",
      schlafplätze: "4"
    },
    highlights: [
      "Integriertes Hubbett",
      "Winterfester, beheizter Doppelboden",
      "Extra große Stauräume durch Garagenabsenkung",
      "Isolierte und beheizte Wassertanks",
      "Elektrisch gesteuerte Abwassertank-Entleerung",
      "Isofix (grundrissabhängig)"
    ],
    layouts: [
      {
        id: "prs-695-eb",
        name: "PRS 695 EB",
        image: "/placeholder.svg",
        length: "6,99 m",
        sleepingPlaces: "4"
      },
      {
        id: "prs-720-eb",
        name: "PRS 720 EB",
        image: "/placeholder.svg",
        length: "7,41 m",
        sleepingPlaces: "4"
      },
      {
        id: "prs-695-hb",
        name: "PRS 695 HB",
        image: "/placeholder.svg",
        length: "6,99 m",
        sleepingPlaces: "4"
      },
      {
        id: "prs-675-sb",
        name: "PRS 675 SB",
        image: "/placeholder.svg",
        length: "6,99 m",
        sleepingPlaces: "4"
      },
      {
        id: "prs-720-qf",
        name: "PRS 720 QF",
        image: "/placeholder.svg",
        length: "7,58 m",
        sleepingPlaces: "4"
      },
      {
        id: "prs-720-ef",
        name: "PRS 720 EF",
        image: "/placeholder.svg",
        length: "7,41 m",
        sleepingPlaces: "4"
      }
    ],
    interior: [
      { name: "PRS 675 Chalet - Rustico", description: "" },
      { name: "PRS 675 Chalet - Rustico", description: "" },
      { name: "PRS 675 Chalet - Rustico", description: "" },
      { name: "PRS 675 Chalet - Rustico", description: "" }
    ],
    upholsteryTypes: [
      "Polster Como\nDekoration Maka",
      "Polster Milano, Dekoration Lasca",
      "Polster Milano\nDekoration Lasca",
      "Polster Leider Beige, Dekoration Rana",
      "Polster Pisa\nDekoration Rana"
    ],
    equipment: {
      chassis: [
        "Modernes Fiat Ducato Chassis",
        "Sportliche Optik und Fahrwerk",
        "Umfangreiche Sicherheitsausstattung",
        "Komfortable Fahrerausstattung"
      ],
      body: [
        "Aerodynamische Bauweise",
        "Hochwertige Isolierung",
        "Große Panoramafenster",
        "Robuste Materialien"
      ],
      livingArea: [
        "Sportliche Sitzgruppe",
        "Hochwertige Polstermaterialien",
        "LED-Ambientebeleuchtung",
        "Praktische Stauraumlösungen"
      ],
      kitchen: [
        "3-Flammen-Kochstelle",
        "Großer Kühlschrank",
        "Moderne Küchenausstattung",
        "Ausreichend Arbeitsfläche"
      ],
      bathroom: [
        "Separate Duschkabine",
        "Komfortables WC",
        "Großzügiger Waschbereich",
        "Praktische Ablagemöglichkeiten"
      ],
      electrical: [
        "Moderne Elektroinstallation",
        "USB-Anschlüsse überall",
        "LED-Beleuchtung",
        "Solarpanel verfügbar"
      ]
    }
  },
  "activa-one": {
    id: "activa-one",
    name: "Activa One",
    intro: "Die verschiedenen Modelle der Alkoven-Baureihe Activa One sind viel mehr als nur simple Reisemobile: Ihr frisches Interieur steigert noch den ersten Eindruck von robuster Großzügigkeit zu einem echten Gefühl von Freiheit. Egal, aus welcher Perspektive man den Innenraum des Activa One betrachtet – auf insgesamt vier unterschiedlichen Grundrissen ergibt sich eine Vielzahl praktischer Stau- und Ablagemöglichkeiten. Der 37 cm hohe Doppelboden packt auch das große Familiengepäck sicher ein. Und da an dieser Baureihe alles perfekt geplant und professionell umgesetzt ist, beginnt die Entspannung sofort mit der Abfahrt.",
    heroImage: "/placeholder.svg",
    galleryImages: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
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
      "Jetzt mit 2× Isofix in Fahrtrichtung (außer HS-Grundrisse)"
    ],
    layouts: [
      {
        id: "ao-570-hs",
        name: "AO 570 HS",
        image: "/placeholder.svg",
        length: "5,99 m",
        sleepingPlaces: "4"
      },
      {
        id: "ao-630-ls",
        name: "AO 630 LS",
        image: "/placeholder.svg",
        length: "6,44 m",
        sleepingPlaces: "5"
      },
      {
        id: "ao-650-hs",
        name: "AO 650 HS",
        image: "/placeholder.svg",
        length: "6,50 m",
        sleepingPlaces: "4"
      },
      {
        id: "ao-690-hb",
        name: "AO 690 HB",
        image: "/placeholder.svg",
        length: "6,99 m",
        sleepingPlaces: "6"
      },
      {
        id: "ao-690-vb",
        name: "AO 690 VB",
        image: "/placeholder.svg",
        length: "6,99 m",
        sleepingPlaces: "6"
      }
    ],
    interior: [
      { 
        name: "Deko-Pack \"Beach Home\"", 
        description: "Farbige Wandverkleidung, dekorative Segeltaue, zusätzliche Alkovenverblendung mit Stautaschen" 
      },
      { 
        name: "Atmosphäre", 
        description: "Wertige, frische Premium-Atmosphäre" 
      }
    ],
    upholsteryTypes: ["Polster Milano", "Polster Dara", "Deko Lasca"],
    equipment: {
      chassis: [
        "140 PS Motor, Euro 6d-Final",
        "CCS Breitspur-Tiefrahmen (1.980 mm)",
        "ESP inkl. Traction+, Hill-Descent-Control",
        "16\" Räder, Tagfahrlicht, Tempomat"
      ],
      body: [
        "Leichtbaudoppelboden, isoliert & beheizt",
        "Wände/Dach/Boden: 30/32/38mm",
        "Beheizter Alkoven mit klappbarem Boden",
        "2 Fenster + Sicherheitsnetz im Alkoven",
        "Karosserie GFK + Aluminium, winterfest EN 1646"
      ],
      livingArea: [
        "Möbeldekor Wildeiche & Strandweiß",
        "Oberschränke mit Geräuschdämpfung",
        "7-Zonen-Kaltschaummatratzen",
        "Fußboden mit Trittschalldämpfung"
      ],
      kitchen: [
        "3-Flamm Kocher mit Zündung",
        "Kühlschrank 142 Liter",
        "Wasserhahn mit Anti-Tropf-Auslass"
      ],
      bathroom: [
        "Ergonomisch optimierte Mittelwaschräume",
        "Duschkabine, Spiegelschrank, Cassetten-WC"
      ],
      installation: [
        "143–150 l Frischwasser, 150 l Abwasser (beheizt, isoliert)",
        "Schnellverschlussventile, Keramikkartuschen"
      ],
      electrical: [
        "80 Ah Gel-Batterie",
        "LED-Spots, 2× 230 V, 1× 12 V, 1× USB",
        "Ladegerät 21 A",
        "Haushaltslogik Lichtsystem"
      ]
    }
  },
  "profila-t-mercedes": {
    id: "profila-t-mercedes",
    name: "Profila T Mercedes",
    intro: "Die Profila T auf Mercedes verkörpern die Top-Modelle innerhalb der Profila Baureihe. Mit AL-KO Tiefrahmen, Alde-Warmwasserheizung, 20cm hohem Doppelboden und dem optional erhältlichen Panoramadach mit Aufstellfunktion verfügen diese Modelle über besondere Ausstattungsfeatures. In der Saison 2024 kommt die speziell für die Mercedes Profila geschaffene Wohnwelt \"Natural Heritage\" dazu, die den exklusiven Charakter der Top-Modelle noch stärker betont.",
    heroImage: "/placeholder.svg",
    galleryImages: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    technicalData: {
      länge: "7,12 – 7,61 m",
      sitzplätze: "4",
      schlafplätze: "2"
    },
    highlights: [
      "Basisfahrzeug Mercedes Sprinter",
      "Al-KO Tiefrahmen",
      "Alde Warmwasserheizung",
      "Auf Wunsch exklusive Wohnwelt \"Natural Heritage\"",
      "Winterfester, beheizter Doppelboden",
      "Elektrische Abwassertank – Entleerung"
    ],
    layouts: [
      {
        id: "pt696eb",
        name: "PT696EB",
        image: "/placeholder.svg",
        length: "7,12 m",
        sleepingPlaces: "2"
      },
      {
        id: "pt726ef",
        name: "PT726EF",
        image: "/placeholder.svg",
        length: "7,44 m",
        sleepingPlaces: "2"
      },
      {
        id: "pt726qf",
        name: "PT726QF",
        image: "/placeholder.svg",
        length: "7,61 m",
        sleepingPlaces: "2"
      },
      {
        id: "pt726eb",
        name: "PT726EB",
        image: "/placeholder.svg",
        length: "7,54 m",
        sleepingPlaces: "2"
      }
    ],
    interior: [
      { name: "726 EF Natural Heritage", description: "" },
      { name: "726 EF Chalet", description: "" },
      { name: "726 EF Natural Heritage", description: "" },
      { name: "726 EF Natural Heritage", description: "" }
    ],
    upholsteryTypes: [
      "Polster Como, Dekoration Maka",
      "Polster Como\nDekoration Maka",
      "Polster Milano, Dekoration Lasca",
      "Polster Milano\nDekoration Lasca",
      "Polster Pisa, Dekoration Rana",
      "Polster Pisa\nDekoration Rana",
      "Polster Dara, Dekoration Maka",
      "Polster Dara\nDekoration Maka",
      "Polster Bergamo\nDekoration Evorno"
    ],
    equipment: {
      chassis: [
        "Mercedes-Benz Chassis mit neuester Technologie",
        "9G-TRONIC Automatikgetriebe verfügbar",
        "Umfassende Sicherheitssysteme",
        "Premium Komfort-Ausstattung"
      ],
      body: [
        "Teilintegrierte Mercedes-Bauweise",
        "Erstklassige Isolierung und Dämmung",
        "Große Panoramafenster für beste Sicht",
        "Hochwertige, wetterbeständige Materialien"
      ],
      livingArea: [
        "Luxuriöse Sitzgruppe im Mercedes-Design",
        "Premium Polstermaterialien",
        "Optimale LED-Beleuchtung",
        "Durchdachte Stauraumlösungen"
      ],
      kitchen: [
        "3-Flammen-Kochstelle",
        "Großer Kühlschrank",
        "Moderne Küchenausstattung",
        "Ausreichend Arbeitsfläche"
      ],
      bathroom: [
        "Separate Duschkabine",
        "Komfortables WC",
        "Großzügiger Waschbereich",
        "Praktische Ablagemöglichkeiten"
      ],
      electrical: [
        "Moderne Elektroinstallation",
        "USB-Anschlüsse in allen Bereichen",
        "LED-Beleuchtung",
        "Solarpanel-System verfügbar"
      ]
    }
  },
  "contura": {
    id: "contura",
    name: "Contura",
    intro: "Die Contura Baureihe vereint elegantes Design mit funktionaler Perfektion. Diese vollintegrierten Reisemobile bieten höchsten Komfort und innovative Lösungen für anspruchsvolle Reisende, die Wert auf Luxus und Qualität legen.",
    heroImage: "/placeholder.svg",
    galleryImages: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    technicalData: {
      länge: "7,84 m",
      sitzplätze: "4",
      schlafplätze: "2"
    },
    highlights: [
      "Vollintegrierte Bauweise für maximalen Komfort",
      "Hochwertige Materialien und exklusive Ausstattung",
      "Innovative Raumaufteilung mit durchdachten Details",
      "Premium-Schlafbereiche mit erstklassigen Matratzen",
      "Modernste Technik und luxuriöse Annehmlichkeiten",
      "Elegantes Design mit hochwertiger Verarbeitung"
    ],
    layouts: [
      {
        id: "ct-766-eb",
        name: "CT 766 EB",
        image: "/placeholder.svg",
        length: "7,84 m",
        sleepingPlaces: "2"
      },
      {
        id: "ct-766-ef",
        name: "CT 766 EF",
        image: "/placeholder.svg",
        length: "7,84 m",
        sleepingPlaces: "2"
      }
    ],
    interior: [
      { name: "Luxus Wohnbereich", description: "Exklusive Sitzgruppe mit hochwertigen Premium-Materialien" },
      { name: "Designer Küche", description: "Vollausgestattete Küche mit modernsten Geräten" },
      { name: "Komfort Schlafbereich", description: "Luxuriöse Betten mit erstklassigen Matratzen" },
      { name: "Premium Badezimmer", description: "Hochwertiges Badezimmer mit exklusiver Ausstattung" }
    ],
    upholsteryTypes: ["Contura Premium", "Leder Exclusiv", "Designer Stoff"],
    equipment: {
      chassis: [
        "Vollintegriertes Chassis mit modernster Technologie",
        "Automatikgetriebe serienmäßig",
        "Umfassende Sicherheitssysteme",
        "Premium Komfort-Ausstattung"
      ],
      body: [
        "Vollintegrierte Bauweise",
        "Erstklassige Isolierung und Dämmung",
        "Panoramafenster für optimale Sicht",
        "Hochwertige, wetterbeständige Materialien"
      ],
      livingArea: [
        "Luxuriöse Sitzgruppe im Premium-Design",
        "Hochwertige Polstermaterialien",
        "Optimale LED-Beleuchtung",
        "Durchdachte Stauraumlösungen"
      ],
      kitchen: [
        "Premium-Kochstelle mit 3 Flammen",
        "Großer Kompressor-Kühlschrank",
        "Geschirrspüler serienmäßig",
        "Großzügige Arbeitsflächen"
      ],
      bathroom: [
        "Separate Premium-Duschkabine",
        "Komfort-WC mit Luxus-Ausstattung",
        "Großzügiger Waschbereich",
        "Hochwertige Ablagemöglichkeiten"
      ],
      electrical: [
        "Modernste Elektroinstallation",
        "USB-Anschlüsse in allen Bereichen",
        "Premium LED-Beleuchtung",
        "Solarpanel-System serienmäßig"
      ]
    }
  },
  "integra-line-fiat": {
    id: "integra-line-fiat",
    name: "Integra Line Fiat",
    intro: "Die Integra Line Fiat vereint moderne Vollintegration mit durchdachtem Design. Diese Baureihe bietet maximalen Komfort und innovative Raumaufteilung für anspruchsvolle Reisende, die Wert auf Luxus und Funktionalität legen.",
    heroImage: "/placeholder.svg",
    galleryImages: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    technicalData: {
      länge: "7,41 – 7,58 m",
      sitzplätze: "4",
      schlafplätze: "4"
    },
    highlights: [
      "Vollintegrierte Bauweise für optimale Raumnutzung",
      "Hochwertige Materialien und erstklassige Verarbeitung",
      "Flexible Schlafbereiche für bis zu 4 Personen",
      "Durchdachte Stauraumlösungen und moderne Technik",
      "Komfortable Ausstattung und luxuriöse Annehmlichkeiten",
      "Elegantes Design mit funktionalen Details"
    ],
    layouts: [
      {
        id: "il-720-eb",
        name: "IL 720 EB",
        image: "/placeholder.svg",
        length: "7,41 m",
        sleepingPlaces: "4"
      },
      {
        id: "il-720-qf",
        name: "IL 720 QF",
        image: "/placeholder.svg",
        length: "7,58 m",
        sleepingPlaces: "4"
      },
      {
        id: "il-720-ef",
        name: "IL 720 EF",
        image: "/placeholder.svg",
        length: "7,41 m",
        sleepingPlaces: "4"
      },
      {
        id: "il-730-ef",
        name: "IL 730 EF",
        image: "/placeholder.svg",
        length: "7,58 m",
        sleepingPlaces: "4"
      }
    ],
    interior: [
      { name: "Vollintegrierter Wohnbereich", description: "Luxuriöse Sitzgruppe mit hochwertigen Materialien" },
      { name: "Premium Küche", description: "Moderne Küchenausstattung mit allen Annehmlichkeiten" },
      { name: "Flexible Schlafbereiche", description: "Variable Schlafmöglichkeiten für 4 Personen" },
      { name: "Komfort Badezimmer", description: "Hochwertiges Bad mit modernen Annehmlichkeiten" }
    ],
    upholsteryTypes: ["Integra Premium", "Leder Komfort", "Stoff Deluxe"],
    equipment: {
      chassis: [
        "Fiat Ducato Chassis mit neuester Technologie",
        "Vollintegrierte Bauweise",
        "Umfassende Sicherheitssysteme",
        "Komfort-Ausstattung serienmäßig"
      ],
      body: [
        "Vollintegrierte Bauweise",
        "Hochwertige Isolierung und Dämmung",
        "Panoramafenster für beste Aussicht",
        "Wetterbeständige Materialien"
      ],
      livingArea: [
        "Luxuriöse Sitzgruppe",
        "Hochwertige Polstermaterialien",
        "Optimale LED-Beleuchtung",
        "Durchdachte Stauraumlösungen"
      ],
      kitchen: [
        "3-Flammen Premium-Kochstelle",
        "Großer Kompressor-Kühlschrank",
        "Moderne Küchenausstattung",
        "Großzügige Arbeitsflächen"
      ],
      bathroom: [
        "Separate Premium-Duschkabine",
        "Komfort-WC",
        "Großzügiger Waschbereich",
        "Praktische Ablagemöglichkeiten"
      ],
      electrical: [
        "Moderne Elektroinstallation",
        "USB-Anschlüsse in allen Bereichen",
        "LED-Beleuchtung",
        "Solarpanel-System verfügbar"
      ]
    }
  },
  "integra-line-gt-mercedes": {
    id: "integra-line-gt-mercedes",
    name: "Integra Line GT Mercedes",
    intro: "Die Integra Line GT Mercedes vereint die bewährte Mercedes-Qualität mit innovativem vollintegriertem Design. Diese Premium-Baureihe bietet höchsten Komfort und luxuriöse Ausstattung für anspruchsvolle Reisende, die Wert auf Exklusivität und Zuverlässigkeit legen.",
    heroImage: "/placeholder.svg",
    galleryImages: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    technicalData: {
      länge: "7,47 – 7,64 m",
      sitzplätze: "4",
      schlafplätze: "4"
    },
    highlights: [
      "Mercedes-Benz Chassis für höchste Qualität und Zuverlässigkeit",
      "Vollintegrierte Bauweise für maximalen Komfort",
      "Hochwertige Premium-Materialien und erstklassige Verarbeitung",
      "Flexible Schlafbereiche für bis zu 4 Personen",
      "Durchdachte Luxus-Stauraumlösungen und modernste Technik",
      "Elegantes GT-Design mit exklusiven Details"
    ],
    layouts: [
      {
        id: "il726ef",
        name: "IL726EF",
        image: "/placeholder.svg",
        length: "7,47 m",
        sleepingPlaces: "4"
      },
      {
        id: "il726qf",
        name: "IL726QF",
        image: "/placeholder.svg",
        length: "7,64 m",
        sleepingPlaces: "4"
      }
    ],
    interior: [
      { name: "Premium Wohnbereich", description: "Luxuriöse Sitzgruppe mit hochwertigen Mercedes-Materialien" },
      { name: "Designer Küche", description: "Vollausgestattete Premium-Küche mit modernsten Geräten" },
      { name: "Flexible Schlafbereiche", description: "Variable Premium-Schlafmöglichkeiten für 4 Personen" },
      { name: "Luxus Badezimmer", description: "Hochwertiges Bad mit exklusiver Mercedes-Ausstattung" }
    ],
    upholsteryTypes: ["GT Mercedes Premium", "Leder Exclusiv", "Designer Premium"],
    equipment: {
      chassis: [
        "Mercedes-Benz Chassis mit neuester Technologie",
        "Vollintegrierte GT-Bauweise",
        "Umfassende Premium-Sicherheitssysteme",
        "Mercedes Komfort-Ausstattung serienmäßig"
      ],
      body: [
        "Vollintegrierte Mercedes-Bauweise",
        "Erstklassige Isolierung und Premium-Dämmung",
        "Große Panoramafenster für beste Aussicht",
        "Hochwertige, wetterbeständige Premium-Materialien"
      ],
      livingArea: [
        "Luxuriöse Mercedes GT-Sitzgruppe",
        "Premium Polstermaterialien",
        "Optimale LED-Beleuchtung",
        "Durchdachte Luxus-Stauraumlösungen"
      ],
      kitchen: [
        "Premium 3-Flammen-Kochstelle",
        "Großer Kompressor-Kühlschrank",
        "Mercedes Premium-Küchenausstattung",
        "Großzügige Arbeitsflächen"
      ],
      bathroom: [
        "Separate Premium-Duschkabine",
        "Mercedes Komfort-WC",
        "Großzügiger Waschbereich",
        "Hochwertige Ablagemöglichkeiten"
      ],
      electrical: [
        "Mercedes Premium-Elektroinstallation",
        "USB-Anschlüsse in allen Bereichen",
        "Premium LED-Beleuchtung",
        "Solarpanel-System serienmäßig"
      ]
    }
  },
  "integra": {
    id: "integra",
    name: "Integra",
    intro: "Die Integra Baureihe verkörpert Vollintegration in ihrer reinsten Form. Diese exklusiven Reisemobile bieten maximalen Komfort, innovative Raumaufteilung und luxuriöse Ausstattung für anspruchsvolle Reisende, die Wert auf höchste Qualität und einzigartiges Design legen.",
    heroImage: "/placeholder.svg",
    galleryImages: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    technicalData: {
      länge: "7,89 – 8,99 m",
      sitzplätze: "4",
      schlafplätze: "4"
    },
    highlights: [
      "Vollintegrierte Premium-Bauweise für maximalen Komfort",
      "Hochwertige Materialien und exklusive Verarbeitung",
      "Innovative Raumaufteilung mit durchdachten Luxus-Details",
      "Flexible Premium-Schlafbereiche für bis zu 4 Personen",
      "Modernste Technik und luxuriöse Annehmlichkeiten",
      "Elegantes Design mit hochwertiger Premium-Ausstattung"
    ],
    layouts: [
      {
        id: "i-890-qb",
        name: "I 890 QB",
        image: "/placeholder.svg",
        length: "8,99 m",
        sleepingPlaces: "4"
      },
      {
        id: "i-890-eb",
        name: "I 890 EB",
        image: "/placeholder.svg",
        length: "8,99 m",
        sleepingPlaces: "4"
      },
      {
        id: "i-760-ef",
        name: "I 760 EF",
        image: "/placeholder.svg",
        length: "7,89 m",
        sleepingPlaces: "4"
      },
      {
        id: "i-760-qf",
        name: "I 760 QF",
        image: "/placeholder.svg",
        length: "7,89 m",
        sleepingPlaces: "4"
      }
    ],
    interior: [
      { name: "Luxus Wohnbereich", description: "Exklusive Sitzgruppe mit hochwertigen Premium-Materialien" },
      { name: "Designer Küche", description: "Vollausgestattete Küche mit modernsten Premium-Geräten" },
      { name: "Flexible Schlafbereiche", description: "Variable Luxus-Schlafmöglichkeiten für 4 Personen" },
      { name: "Premium Badezimmer", description: "Hochwertiges Badezimmer mit exklusiver Luxus-Ausstattung" }
    ],
    upholsteryTypes: ["Integra Premium", "Leder Exclusiv", "Designer Luxus"],
    equipment: {
      chassis: [
        "Premium Chassis mit neuester Technologie",
        "Vollintegrierte Luxus-Bauweise",
        "Umfassende Premium-Sicherheitssysteme",
        "Komfort-Ausstattung auf höchstem Niveau"
      ],
      body: [
        "Vollintegrierte Luxus-Bauweise",
        "Erstklassige Isolierung und Luxus-Dämmung",
        "Panoramafenster für optimale Aussicht",
        "Hochwertige, wetterbeständige Premium-Materialien"
      ],
      livingArea: [
        "Luxuriöse Premium-Sitzgruppe",
        "Hochwertige Polstermaterialien",
        "Optimale LED-Beleuchtung",
        "Durchdachte Luxus-Stauraumlösungen"
      ],
      kitchen: [
        "Premium 3-Flammen-Kochstelle",
        "Großer Kompressor-Kühlschrank",
        "Luxus-Küchenausstattung",
        "Großzügige Arbeitsflächen"
      ],
      bathroom: [
        "Separate Premium-Duschkabine",
        "Luxus-WC mit Premium-Ausstattung",
        "Großzügiger Waschbereich",
        "Hochwertige Ablagemöglichkeiten"
      ],
      electrical: [
        "Premium-Elektroinstallation",
        "USB-Anschlüsse in allen Bereichen",
        "Premium LED-Beleuchtung",
        "Solarpanel-System serienmäßig"
      ]
    }
  },
  "xtura": {
    id: "xtura",
    name: "Xtura",
    intro: "Die Xtura Baureihe verkörpert Innovation und modernstes Design. Diese exklusiven Reisemobile bieten revolutionäre Raumkonzepte und zukunftsweisende Technologie für Reisende, die das Außergewöhnliche suchen und höchste Ansprüche an Komfort und Funktionalität stellen.",
    heroImage: "/placeholder.svg",
    galleryImages: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    technicalData: {
      länge: "6,88 m",
      sitzplätze: "2",
      schlafplätze: "2"
    },
    highlights: [
      "Revolutionäres Design mit zukunftsweisender Architektur",
      "Hochwertige Premium-Materialien und innovative Verarbeitung",
      "Modernste Technologie und intelligente Raumaufteilung",
      "Komfortable Schlafbereiche mit erstklassigen Matratzen",
      "Durchdachte Stauraumlösungen und moderne Annehmlichkeiten",
      "Elegantes Design mit exklusiven Details"
    ],
    layouts: [
      {
        id: "xt-686-ef",
        name: "XT 686 EF",
        image: "/placeholder.svg",
        length: "6,88 m",
        sleepingPlaces: "2"
      }
    ],
    interior: [
      { name: "Innovativer Wohnbereich", description: "Exklusive Sitzgruppe mit modernsten Premium-Materialien" },
      { name: "Future Küche", description: "Revolutionäre Küchenausstattung mit neuester Technologie" },
      { name: "Komfort Schlafbereich", description: "Luxuriöse Betten mit erstklassigen Matratzen" },
      { name: "Premium Badezimmer", description: "Hochwertiges Badezimmer mit innovativer Ausstattung" }
    ],
    upholsteryTypes: ["Xtura Premium", "Leder Future", "Designer Innovation"],
    equipment: {
      chassis: [
        "Innovatives Chassis mit neuester Technologie",
        "Vollintegrierte Zukunfts-Bauweise",
        "Umfassende Premium-Sicherheitssysteme",
        "Komfort-Ausstattung der Zukunft"
      ],
      body: [
        "Revolutionäre Bauweise",
        "Innovative Isolierung und Premium-Dämmung",
        "Panoramafenster für optimale Aussicht",
        "Zukunftsweisende, wetterbeständige Materialien"
      ],
      livingArea: [
        "Futuristische Premium-Sitzgruppe",
        "Innovative Polstermaterialien",
        "Intelligente LED-Beleuchtung",
        "Revolutionäre Stauraumlösungen"
      ],
      kitchen: [
        "Innovative Kochstelle",
        "Intelligenter Kompressor-Kühlschrank",
        "Future-Küchenausstattung",
        "Adaptive Arbeitsflächen"
      ],
      bathroom: [
        "Innovative Duschkabine",
        "Premium-WC mit Future-Ausstattung",
        "Intelligenter Waschbereich",
        "Smarte Ablagemöglichkeiten"
      ],
      electrical: [
        "Future-Elektroinstallation",
        "USB-C Anschlüsse in allen Bereichen",
        "Intelligente LED-Beleuchtung",
        "Smart Solarpanel-System"
      ]
    }
  }
};

// Equipment section tab keys in German
const equipmentTabs = {
  chassis: "Chassis",
  body: "Aufbau",
  driversCabin: "Fahrerhaus",
  livingArea: "Wohnwelt",
  kitchen: "Küche",
  bathroom: "Waschraum",
  sleeping: "Schlafbereich",
  installation: "Wasserinstallation",
  electrical: "Elektroinstallation"
};

// Define more specific types for our different model types
type BaseModelData = {
  id: string;
  name: string;
  intro: string;
  heroImage: string;
  galleryImages: string[];
  technicalData: Record<string, string>;
  highlights: string[];
};

// Full model with all features
type FullModelData = BaseModelData & {
  layouts: Array<{
    id: string;
    name: string;
    image: string;
    length: string;
    sleepingPlaces: string;
  }>;
  interior: Array<{
    name: string;
    description: string;
  }>;
  upholsteryTypes: string[];
  equipment: Record<string, string[]>;
};

// Download-only model with download items
type DownloadModelData = BaseModelData & {
  downloadItems: Array<{
    name: string;
    type: string;
    url: string;
  }>;
};

// Union type for all possible model types
type ModelData = FullModelData | DownloadModelData;

// Type for our models data object
type ModelsDataType = Record<string, ModelData>;

// Type guard to check if a model has layouts
function hasLayouts(model: ModelData): model is FullModelData {
  return 'layouts' in model && Array.isArray(model.layouts);
}

// Type guard to check if a model has interior details
function hasInterior(model: ModelData): model is FullModelData {
  return 'interior' in model && Array.isArray(model.interior);
}

// Type guard to check if a model has upholstery types
function hasUpholstery(model: ModelData): model is FullModelData {
  return 'upholsteryTypes' in model && Array.isArray(model.upholsteryTypes);
}

// Type guard to check if a model has equipment details
function hasEquipment(model: ModelData): model is FullModelData {
  return 'equipment' in model && model.equipment !== undefined;
}

const ProductDetail = () => {
  const { modelId } = useParams();
  const isMobile = useIsMobile();
  const { startBeraterFlow } = useWohnmobilberaterTrigger();
  const [isComparisonOpen, setIsComparisonOpen] = useState(false);
  const location = useLocation();
  
  // Add debug logging to see what modelId we're getting
  console.log("Current modelId from URL:", modelId);
  console.log("Available models in modelsData:", Object.keys(modelsData));
  
  // Improved model lookup with better fallback handling
  const modelDetails = modelId && modelId in modelsData 
    ? modelsData[modelId as keyof typeof modelsData] 
    : modelsData["van"];
    
  console.log("Selected model details:", modelDetails.name, modelDetails.id);
  
  // Check if model has only one layout (for comparison functionality)
  const hasMultipleLayouts = hasLayouts(modelDetails) && modelDetails.layouts.length > 1;
  
  // Define sidebar navigation items
  const navigationItems = [
    { id: "highlights", label: "Highlights" },
    { id: "grundrisse", label: "Grundrisse" },
    { id: "innenraum", label: "Innenraum" },
    { id: "polster", label: "Polster" },
    { id: "serienausstattung", label: "Serienausstattung" },
  ];
  
  // Effect to handle hash anchor scrolling
  useEffect(() => {
    if (location.hash) {
      // Add a small delay to ensure DOM is fully rendered before scrolling
      const timer = setTimeout(() => {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location.hash]);
  
  const handleKonfiguratorClick = () => {
    window.open("https://eura.tef-kat.com/konfigurator-eura/Home/Start?culture=de-DE", "_blank", "noopener noreferrer");
  };
  
  const handleBeratungClick = () => {
    startBeraterFlow();
  };
  
  // Simple gray box placeholder component without text
  const EmptyGrayBoxPlaceholder = ({ className = "", ratio = 16/9 }: { className?: string, ratio?: number }) => (
    <AspectRatio ratio={ratio} className={`bg-[#E5E7EB] ${className}`} />
  );
  
  // Simple gray box placeholder component
  const GrayBoxPlaceholder = ({ className = "", ratio = 16/9 }: { className?: string, ratio?: number }) => (
    <AspectRatio ratio={ratio} className={`bg-[#E5E7EB] ${className}`}>
      <div className="flex items-center justify-center h-full text-gray-600">
        Hotspot Bild Placeholder – Innenraum interaktiv
      </div>
    </AspectRatio>
  );

  // Helper function to get hero title and subtitle based on model
  const getHeroContent = () => {
    switch (modelDetails.id) {
      case "van":
        return { title: "Vans", subtitle: "Für Aktive und Unabhängige" };
      case "profila-t-fiat":
        return { title: "Profila T", subtitle: "Offen, großzügig, frei" };
      case "profila-rs":
        return { title: "Profila RS", subtitle: "Wo Anspruch erst der Anfang ist" };
      case "activa-one":
        return { title: "Activa One", subtitle: "Familien-Alkoven der Extraklasse" };
      case "profila-t-mercedes":
        return { title: "Profila T auf Mercedes", subtitle: "Edel, exklusiv und elegant" };
      case "contura":
        return { title: "Contura", subtitle: "Vollintegrierte Eleganz" };
      case "integra-line-fiat":
        return { title: "Integra Line Fiat", subtitle: "Vollintegrierte Raumwunder" };
      case "integra-line-gt-mercedes":
        return { title: "Integra Line GT Mercedes", subtitle: "Mercedes GT-Luxus auf Rädern" };
      case "integra":
        return { title: "Integra", subtitle: "Premium-Vollintegration" };
      case "xtura":
        return { title: "Xtura", subtitle: "Innovation trifft Design" };
      default:
        return { title: modelDetails.name, subtitle: "Reisemobile der Extraklasse" };
    }
  };

  const heroContent = getHeroContent();
  
  // Helper function for layout rendering
  const renderLayouts = () => {
    if (!hasLayouts(modelDetails)) return null;
    
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modelDetails.layouts.map((layout) => (
          <SelectableModelCard 
            key={layout.id}
            id={layout.id}
            name={layout.name}
            length={layout.length}
            sleepingPlaces={layout.sleepingPlaces}
            showComparison={hasMultipleLayouts}
          />
        ))}
      </div>
    );
  };
  
  // Helper function for interior rendering with new 4-column grid layout
  const renderInterior = () => {
    if (!hasInterior(modelDetails)) return null;
    
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {modelDetails.interior.map((item, index) => (
          <Card key={index} className="overflow-hidden border shadow-sm">
            <AspectRatio ratio={1/1} className="bg-gray-200" />
            <CardContent className="p-4">
              <h3 className="font-medium mb-1">{item.name}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  };
  
  // Helper function for upholstery rendering with proper display for profila-t-mercedes
  const renderUpholstery = () => {
    if (!hasUpholstery(modelDetails)) return null;
    
    // For profila-t-mercedes, use the specific 5 upholstery types
    const upholsteryData = modelDetails.id === "profila-t-mercedes" 
      ? [
          "Polster Como\nDekoration Maka",
          "Polster Milano\nDekoration Lasca", 
          "Polster Pisa\nDekoration Rana",
          "Polster Dara\nDekoration Maka",
          "Polster Bergamo\nDekoration Evorno"
        ]
      : modelDetails.upholsteryTypes;
    
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {upholsteryData.map((type, index) => (
          <div key={index} className="bg-[#E5E7EB] rounded-lg overflow-hidden">
            <AspectRatio ratio={4/3} className="h-40" />
            <div className="p-3">
              <h3 className="font-medium whitespace-pre-line">{type}</h3>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  // Equipment section with new vertical accordion structure
  const renderEquipment = () => {
    if (!hasEquipment(modelDetails)) return null;
    
    return (
      <div className="space-y-4">
        {Object.entries(modelDetails.equipment).map(([key, items]) => (
          <Accordion type="single" collapsible className="w-full" key={key}>
            <AccordionItem value={key} className="border rounded-lg bg-white">
              <AccordionTrigger className="px-4 py-3">
                <span className="text-lg font-medium">{equipmentTabs[key as keyof typeof equipmentTabs]}</span>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                  {items.map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    );
  };
  
  return (
    <ComparisonProvider>
      <ProductLayout modelName={modelDetails.name}>
        {/* Add Sidebar Navigation - desktop only */}
        <SidebarNavigation items={navigationItems} />
        
        {/* Full-width Hero Section */}
        <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-12">
          <div className="relative bg-[#E5E7EB] h-[60vh] md:h-[70vh] flex items-center justify-center">
            <div className="text-center text-black z-10">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">{heroContent.title}</h1>
              <p className="text-xl md:text-2xl lg:text-3xl">{heroContent.subtitle}</p>
            </div>
          </div>
        </section>

        <div className="container mx-auto overflow-visible">
          {/* Highlights Section */}
          <section id="highlights" className="mb-16">
            <div className="mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-8">
                {modelDetails.id === "profila-t-fiat" ? "Feel free!" : modelDetails.id === "profila-rs" ? "Macht einzigartige Erlebnisse noch einzigartiger!" : modelDetails.id === "profila-t-mercedes" ? "Edel, exklusiv und elegant" : "Für Deine beste Zeit."} {modelDetails.id === "profila-t-fiat" ? "Profila T Teilintegrierte" : modelDetails.id === "profila-rs" ? "Profila RS Teilintegrierte" : modelDetails.id === "profila-t-mercedes" ? "Profila T auf Mercedes" : modelDetails.name}
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                <div className="space-y-8 text-black leading-relaxed">
                  <div>
                    <p className="text-black">
                      {modelDetails.intro}
                    </p>
                  </div>
                </div>
                
                <div>
                  <EmptyGrayBoxPlaceholder ratio={16/9} />
                </div>
              </div>

              <div className="bg-gray-50 p-6 md:p-8 rounded-lg">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-black">Highlights der Baureihe:</h3>
                <div className="space-y-4">
                  {modelDetails.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0 mt-1">
                        <Circle className="h-3 w-3 text-gray-600 fill-current" />
                      </div>
                      <p className="text-black">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Technical Data Summary */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8 bg-gray-50 p-4 rounded-lg mx-4">
            <div className="flex flex-col items-center p-2">
              <span className="text-sm text-gray-600">Länge</span>
              <span className="font-semibold text-lg">{modelDetails.technicalData.länge}</span>
            </div>
            <div className="flex flex-col items-center p-2">
              <span className="text-sm text-gray-600">Sitzplätze</span>
              <span className="font-semibold text-lg">{modelDetails.technicalData.sitzplätze}</span>
            </div>
            <div className="flex flex-col items-center p-2">
              <span className="text-sm text-gray-600">Schlafplätze</span>
              <span className="font-semibold text-lg">{modelDetails.technicalData.schlafplätze}</span>
            </div>
          </div>
          
          {/* Gallery Section with horizontal scrolling Carousel */}
          <section className="my-10">
            <h2 className="text-2xl font-semibold mb-4">Galerie</h2>
            <Carousel className="w-full" showIndicators={true}>
              <CarouselContent>
                {[1, 2, 3, 4, 5, 6].map((_, index) => (
                  <CarouselItem key={index} className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                    <AspectRatio ratio={4/3} className="bg-gray-200 rounded-md" />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="hidden md:flex justify-end gap-2 mt-2">
                <CarouselPrevious />
                <CarouselNext />
              </div>
              <CarouselIndicators />
            </Carousel>
          </section>
          
          {/* Grundrisse (Layouts) Section */}
          {hasLayouts(modelDetails) && (
            <section id="grundrisse" className="my-10">
              <h2 className="text-2xl font-semibold mb-4">Grundrisse</h2>
              {renderLayouts()}
            </section>
          )}
          
          {/* Innenraum (Interior) Section with 4-column grid */}
          {hasInterior(modelDetails) && (
            <section id="innenraum" className="my-10">
              <h2 className="text-2xl font-semibold mb-6">Innenraum</h2>
              {renderInterior()}
            </section>
          )}
          
          {/* Polster (Upholstery) Section */}
          {hasUpholstery(modelDetails) && (
            <section id="polster" className="my-10">
              <h2 className="text-2xl font-semibold mb-4">Polstervarianten</h2>
              {renderUpholstery()}
            </section>
          )}
          
          {/* Serienausstattung (Standard Equipment) Section with vertical accordion */}
          {hasEquipment(modelDetails) && (
            <section id="serienausstattung" className="my-10 pt-8">
              <h2 className="text-2xl font-semibold mb-6">Serienausstattung</h2>
              {renderEquipment()}
            </section>
          )}
        </div>
        
        {/* Comparison components */}
        {hasMultipleLayouts && (
          <>
            <ComparisonBar />
            <ComparisonModal />
          </>
        )}
      </ProductLayout>
    </ComparisonProvider>
  );
};

export default ProductDetail;
