import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Download, MapPin, Settings } from "lucide-react";
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
      "Jetzt mit 2× Isofix in Fahrtrichtung (außer HS-Grundrisse)",
      "Beach Home Interieur optional verfügbar"
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
  
  // Default to van if no model ID or model not found
  const modelDetails = modelId && modelId in modelsData 
    ? modelsData[modelId as keyof typeof modelsData] 
    : modelsData["van"];
  
  // Sidebar navigation items
  const sidebarNavItems = [
    { id: "highlights", label: "Highlights" },
    { id: "grundrisse", label: "Grundrisse" },
    { id: "innenraum", label: "Innenraum" },
    { id: "polster", label: "Polster" },
    { id: "serienausstattung", label: "Serienausstattung" },
  ];
  
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
  
  return (
    <ComparisonProvider>
      <ProductLayout modelName={modelDetails.name}>
        {/* Sidebar Navigation (Desktop only) */}
        <SidebarNavigation items={sidebarNavItems} />
        
        {/* Hero Section */}
        <div className="relative">
          <div className="w-full h-72 sm:h-96">
            <GrayBoxPlaceholder ratio={21/9} className="h-full" />
          </div>
        </div>
        
        <div className="container mx-auto px-4 mt-6">
          {/* Model Title and Introduction */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold">{modelDetails.name}</h1>
            <p className="text-gray-700 mt-3 text-lg">
              Im neuen Premium Van von Eura Mobil verwandelt das exklusive Ambiente jeden Moment in einen besonderen Augenblick. Spüren Sie die edlen Materialien und erleben Sie die individuellen Details, die den Eura Mobil Van zu Ihrem ganz persönlichen mobilen Zuhause machen. Nehmen Sie sich die Zeit und lassen Sie das Interieur auf sich wirken....
            </p>
          </div>
          
          {/* Interactive Interior Image */}
          <div className="my-10">
            <div className="bg-gray-200 h-[400px] rounded-lg flex items-center justify-center">
              <span className="text-gray-500 text-xl">Interactive Interior Image</span>
            </div>
          </div>
          
          {/* Technical Data Summary */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6 bg-gray-50 p-4 rounded-lg">
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
          
          {/* Highlights Section */}
          <section id="highlights" className="my-10 scroll-mt-10">
            <h2 className="text-2xl font-semibold mb-4">Highlights der Baureihe</h2>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <ul className="space-y-3">
                <li className="flex gap-2">
                  <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                  <span>Tisch mit klappbarer Platte, Cupholder und schwenkbarer Verlängerung</span>
                </li>
                <li className="flex gap-2">
                  <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                  <span>Komfort-Kaltschaummatratzen mit geteilten und damit klappbaren Bettrahmen</span>
                </li>
                <li className="flex gap-2">
                  <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                  <span>Waschraum mit schwenkbarer Duschwand</span>
                </li>
                <li className="flex gap-2">
                  <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                  <span>Staufächer im Doppelboden</span>
                </li>
                <li className="flex gap-2">
                  <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                  <span>Mineralstoff-Spüle</span>
                </li>
              </ul>
            </div>
          </section>
          
          {/* Grundrisse (Layouts) Section */}
          {hasLayouts(modelDetails) && (
            <section id="grundrisse" className="my-10 scroll-mt-10">
              <h2 className="text-2xl font-semibold mb-4">Grundrisse</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-200 p-4 rounded-lg">
                  <AspectRatio ratio={4/3} className="mb-3" />
                  <h3 className="font-medium">V 635 EB</h3>
                  <p className="text-sm text-gray-600">Länge: 6,36 m – Schlafplätze: 2</p>
                </div>
                <div className="bg-gray-200 p-4 rounded-lg">
                  <AspectRatio ratio={4/3} className="mb-3" />
                  <h3 className="font-medium">V 635 HB</h3>
                  <p className="text-sm text-gray-600">Länge: 6,36 m – Schlafplätze: 2</p>
                </div>
                <div className="bg-gray-200 p-4 rounded-lg">
                  <AspectRatio ratio={4/3} className="mb-3" />
                  <h3 className="font-medium">V 595 HB</h3>
                  <p className="text-sm text-gray-600">Länge: 5,99 m – Schlafplätze: 2</p>
                </div>
              </div>
            </section>
          )}
          
          {/* Innenraum (Interior) Section */}
          <section id="innenraum" className="my-10 scroll-mt-10">
            <h2 className="text-2xl font-semibold mb-4">Innenraum</h2>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
              <div className="lg:col-span-3">
                <GrayBoxPlaceholder ratio={16/9} />
              </div>
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg p-4 shadow-sm h-full">
                  <ul className="space-y-4">
                    <li>
                      <div className="font-medium">Kommunikation</div>
                      <div className="text-gray-600">Boxen, LED-Lampen und USB-Steckdosen</div>
                    </li>
                    <li>
                      <div className="font-medium">Spüle</div>
                      <div className="text-gray-600">Mineralstoff-Spüle</div>
                    </li>
                    <li>
                      <div className="font-medium">Dinetten-Tisch</div>
                      <div className="text-gray-600">Mit abgesenkter Ablage</div>
                    </li>
                    <li>
                      <div className="font-medium">Küche</div>
                      <div className="text-gray-600">Mit Gewürzregal</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          
          {/* Polster (Upholstery) Section */}
          <section id="polster" className="my-10 scroll-mt-10">
            <h2 className="text-2xl font-semibold mb-4">Polstervarianten</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-gray-200 rounded-lg overflow-hidden">
                <AspectRatio ratio={4/3} className="h-40" />
                <div className="p-3">
                  <h3 className="font-medium">Eco-Leder Schwarz</h3>
                </div>
              </div>
              <div className="bg-gray-200 rounded-lg overflow-hidden">
                <AspectRatio ratio={4/3} className="h-40" />
                <div className="p-3">
                  <h3 className="font-medium">Eco-Leder Beige</h3>
                </div>
              </div>
              <div className="bg-gray-200 rounded-lg overflow-hidden">
                <AspectRatio ratio={4/3} className="h-40" />
                <div className="p-3">
                  <h3 className="font-medium">Stoff-Kombination Grau</h3>
                </div>
              </div>
            </div>
          </section>
          
          {/* Serienausstattung (Standard Equipment) Section */}
          <section id="serienausstattung" className="my-10 pt-8 scroll-mt-10">
            <h2 className="text-2xl font-semibold mb-6">Serienausstattung</h2>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Chassis: Fiat Ducato 35L Chassis, Kastenwagen</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Euro 6D Final inkl. Ad Blue und Rußpartikelfilter</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Fahrer- + Beifahrerairbag</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>ABS, ASR, ESP inkl. Traktion+, Hilldescent</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Klimaanlage manuell</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Tempomat</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Kraftstofftank 90 Liter</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Zentralverriegelung mit Funkfernbedienung</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Tagfahrlicht</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Elektrische Fensterheber vorn</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Radzierblenden</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Fix and Go Pannenset</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Stoßfänger hinten schwarz</span>
                </li>
              </ul>
            </div>
          </section>
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
