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
    intro: "Der Profila T Fiat vereint perfekt durchdachte Raumaufteilung mit höchster Qualität und Komfort. Diese Teilintegrierten bieten optimale Platznutzung und modernstes Design für unvergessliche Reiseerlebnisse.",
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
      "Teilintegrierte Bauweise für optimale Raumnutzung",
      "Hochwertige Materialien und moderne Ausstattung",
      "Flexible Grundrisse für verschiedene Bedürfnisse",
      "Komfortable Schlafbereiche mit hochwertigen Matratzen",
      "Durchdachte Stauraumlösungen",
      "Moderne Küchentechnik und sanitäre Anlagen"
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
      { name: "Wohnbereich", description: "Komfortable Sitzgruppe mit hochwertigen Polstern" },
      { name: "Küche", description: "Moderne Küchenausstattung mit allen Annehmlichkeiten" },
      { name: "Schlafbereich", description: "Bequeme Betten mit hochwertigen Matratzen" },
      { name: "Badezimmer", description: "Funktionales Bad mit Dusche und WC" }
    ],
    upholsteryTypes: ["Polster Standard", "Polster Premium", "Polster Deluxe"],
    equipment: {
      chassis: [
        "Fiat Ducato Chassis mit modernster Technik",
        "Automatikgetriebe optional verfügbar",
        "ESP und weitere Sicherheitssysteme",
        "Komfort-Ausstattung serienmäßig"
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
    intro: "Der Profila RS kombiniert sportliches Design mit praktischer Funktionalität. Diese Baureihe überzeugt durch innovative Grundrisse und hochwertige Ausstattung für anspruchsvolle Reisende.",
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
      "Sportliches und modernes Design",
      "Innovative Raumaufteilung für maximalen Komfort",
      "Hochwertige Materialien und Verarbeitung",
      "Flexible Schlafbereiche für bis zu 4 Personen",
      "Durchdachte Stauraumlösungen",
      "Moderne Technik und Ausstattung"
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
      { name: "Sportlicher Wohnbereich", description: "Moderne Sitzgruppe im sportlichen Design" },
      { name: "Funktionale Küche", description: "Kompakte und vollausgestattete Küche" },
      { name: "Flexible Schlafbereiche", description: "Variable Schlafmöglichkeiten für 4 Personen" },
      { name: "Komfortables Bad", description: "Modernes Badezimmer mit allen Annehmlichkeiten" }
    ],
    upholsteryTypes: ["Sport Polster", "Premium Polster", "Leder Polster"],
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
      länge: "5,99 – 7,57 m",
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
    intro: "Der Profila T Mercedes vereint die bewährte Mercedes-Qualität mit innovativem Wohnmobil-Design. Diese Teilintegrierten bieten höchsten Komfort und Zuverlässigkeit für anspruchsvolle Reisende.",
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
      "Mercedes-Benz Chassis für höchste Qualität und Zuverlässigkeit",
      "Teilintegrierte Bauweise für optimale Raumnutzung",
      "Hochwertige Materialien und erstklassige Verarbeitung",
      "Komfortable Schlafbereiche mit Premium-Matratzen",
      "Durchdachte Stauraumlösungen für maximalen Nutzen",
      "Modernste Technik und luxuriöse Ausstattung"
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
      { name: "Premium Wohnbereich", description: "Luxuriöse Sitzgruppe mit hochwertigen Mercedes-Materialien" },
      { name: "Designer Küche", description: "Moderne Küchenausstattung mit Premium-Geräten" },
      { name: "Komfort Schlafbereich", description: "Erstklassige Betten mit hochwertigen Matratzen" },
      { name: "Luxus Badezimmer", description: "Hochwertiges Bad mit exklusiver Ausstattung" }
    ],
    upholsteryTypes: ["Mercedes Premium", "Leder Deluxe", "Stoff Luxus"],
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
        "3-Flammen Premium-Kochstelle",
        "Großer Kompressor-Kühlschrank",
        "Optional: Geschirrspüler",
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
  
  // Simple gray box placeholder component
  const GrayBoxPlaceholder = ({ className = "", ratio = 16/9 }: { className?: string, ratio?: number }) => (
    <AspectRatio ratio={ratio} className={`bg-[#E5E7EB] ${className}`}/>
  );
  
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
  
  // Helper function for upholstery rendering
  const renderUpholstery = () => {
    if (!hasUpholstery(modelDetails)) return null;
    
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {modelDetails.upholsteryTypes.map((type, index) => (
          <div key={index} className="bg-[#E5E7EB] rounded-lg overflow-hidden">
            <AspectRatio ratio={4/3} className="h-40" />
            <div className="p-3">
              <h3 className="font-medium">{type}</h3>
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
        
        <div className="container mx-auto overflow-visible">
          {/* Hero Section - Clean, without text overlay */}
          <div className="relative w-full -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-[calc(50vw-50%)] overflow-visible">
            <div className="w-full h-80 sm:h-[500px]">
              <GrayBoxPlaceholder ratio={21/9} className="w-screen h-full" />
            </div>
          </div>
          
          {/* Main headline with guaranteed visibility on all screen sizes */}
          <div 
            id="product-headline" 
            className="text-center mx-auto max-w-4xl px-4 my-20 md:mt-32 md:mb-12 relative z-10 overflow-visible min-h-[180px]"
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-8 overflow-visible">Für Deine beste Zeit.</h1>
            <h2 className="text-2xl md:text-4xl font-semibold overflow-visible">Eura Mobil {modelDetails.name}</h2>
          </div>
          
          {/* Introduction Section */}
          <div className="px-6 py-6 mb-16 rounded-lg shadow-sm bg-white mx-4 overflow-visible">
            {/* Two column content with hotspot image and increased spacing */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
              <div className="space-y-10">
                <div>
                  <h3 className="text-xl font-semibold mb-5">Sichtbar anders:</h3>
                  <p className="text-gray-700 leading-relaxed">{modelDetails.intro}</p>
                </div>
              </div>
              <div>
                {/* Hotspot Image Placeholder in 16:9 format */}
                <div className="h-full flex items-center">
                  <div className="w-full">
                    <AspectRatio ratio={16/9} className="bg-gray-200 rounded-lg">
                      <div className="flex items-center justify-center h-full text-gray-600">
                        Hotspot Bild Placeholder – Innenraum interaktiv
                      </div>
                    </AspectRatio>
                  </div>
                </div>
              </div>
            </div>
          </div>

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
          
          {/* IMPROVED Highlights Section - Card-like layout with icons */}
          <section id="highlights" className="my-12 bg-gray-50 py-10 -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-[calc(50vw-50%)] px-4 md:px-8">
            <div className="container mx-auto">
              <h2 className="text-2xl font-semibold mb-6">Highlights der Baureihe</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {modelDetails.highlights.map((highlight, index) => (
                  <Card key={index} className="overflow-hidden border-0 shadow-md">
                    <CardContent className="p-4 flex items-start gap-4">
                      <div className="bg-white rounded-full p-3 shadow-sm flex-shrink-0">
                        <Circle className="h-6 w-6 text-blue-500" />
                      </div>
                      <div>
                        <p className="text-gray-800 font-medium">{highlight}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
          
          {/* IMPROVED Gallery Section with horizontal scrolling Carousel */}
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
          
          {/* IMPROVED Innenraum (Interior) Section with 4-column grid */}
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
          
          {/* IMPROVED Serienausstattung (Standard Equipment) Section with vertical accordion */}
          {hasEquipment(modelDetails) && (
            <section id="serienausstattung" className="my-10 pt-8">
              <h2 className="text-2xl font-semibold mb-4">Serienausstattung</h2>
              {renderEquipment()}
            </section>
          )}
        </div>
        
        {/* Comparison Modal */}
        <ComparisonModal 
          open={isComparisonOpen}
          onOpenChange={setIsComparisonOpen}
        />
        
        {/* Comparison Bar */}
        <ComparisonBar onCompareClick={() => setIsComparisonOpen(true)} />
      </ProductLayout>
    </ComparisonProvider>
  );
};

export default ProductDetail;
