
import React, { useState, useEffect } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
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
  const location = useLocation();
  
  // Default to van if no model ID or model not found
  const modelDetails = modelId && modelId in modelsData 
    ? modelsData[modelId as keyof typeof modelsData] 
    : modelsData["van"];
  
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
  
  // Helper function for interior rendering
  const renderInterior = () => {
    if (!hasInterior(modelDetails)) return null;
    
    return (
      <ul className="space-y-4 divide-y">
        {modelDetails.interior.map((item, index) => (
          <li key={index} className={`${index > 0 ? 'pt-4' : ''}`}>
            <div className="font-medium">{item.name}</div>
            <div className="text-gray-600">{item.description}</div>
          </li>
        ))}
      </ul>
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
  
  // Helper function for equipment rendering on mobile
  const renderEquipmentMobile = () => {
    if (!hasEquipment(modelDetails)) return null;
    
    return (
      <Accordion type="single" collapsible className="w-full">
        {Object.entries(modelDetails.equipment).map(([key, items]) => (
          <AccordionItem key={key} value={key}>
            <AccordionTrigger className="py-4 px-0">
              <span className="text-lg">{equipmentTabs[key as keyof typeof equipmentTabs]}</span>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-2 pl-1">
                {items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    );
  };
  
  // Helper function for equipment rendering on desktop
  const renderEquipmentDesktop = () => {
    if (!hasEquipment(modelDetails)) return null;
    
    const equipmentKeys = Object.keys(modelDetails.equipment);
    if (equipmentKeys.length === 0) return null;
    
    return (
      <Tabs defaultValue={equipmentKeys[0]} className="w-full">
        <TabsList className="w-full flex flex-wrap h-auto mb-4 bg-gray-100 p-1">
          {equipmentKeys.map((key) => (
            <TabsTrigger key={key} value={key} className="text-sm flex-grow">
              {equipmentTabs[key as keyof typeof equipmentTabs]}
            </TabsTrigger>
          ))}
        </TabsList>
        {Object.entries(modelDetails.equipment).map(([key, items]) => (
          <TabsContent key={key} value={key} className="mt-4">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
              {items.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </TabsContent>
        ))}
      </Tabs>
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
            <h2 className="text-2xl md:text-4xl font-semibold overflow-visible">Eura Mobil Vans</h2>
          </div>
          
          {/* Introduction Section - Reduced top padding by 50% */}
          <div className="px-6 py-6 mb-16 rounded-lg shadow-sm bg-white mx-4 overflow-visible">
            {/* Two column content with hotspot image and increased spacing */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
              <div className="space-y-10">
                <div>
                  <h3 className="text-xl font-semibold mb-5">Sichtbar anders:</h3>
                  <p className="text-gray-700 leading-relaxed">Im neuen Premium Van von Eura Mobil verwandelt das exklusive Ambiente jeden Moment in einen besonderen Augenblick. Spüren Sie die edlen Materialien und erleben Sie die individuellen Details, die den Eura Mobil Van zu Ihrem ganz persönlichen mobilen Zuhause machen. Nehmen Sie sich die Zeit und lassen Sie das Interieur auf sich wirken...</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-5">Spürbar anders:</h3>
                  <p className="text-gray-700 leading-relaxed">„Cosy" – das ist der Lieblingsbegriff unserer Kunden für das Ambiente im Eura Mobil Van. Ausgewählte Bezugsstoffe bei den Polstern, ein flauschiger Deckenbelag und die textile Wandbespannung mit Eco-Leder-Applikationen statt blanker Kunststoffoberflächen machen den spürbaren Unterschied aus. Fühlen Sie mal...</p>
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
          
          {/* Highlights Section */}
          <section id="highlights" className="my-10">
            <h2 className="text-2xl font-semibold mb-4">Highlights der Baureihe</h2>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <ul className="space-y-3">
                {modelDetails.highlights.map((highlight, index) => (
                  <li key={index} className="flex gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
          
          {/* Gallery Section */}
          <section className="my-10">
            <h2 className="text-2xl font-semibold mb-4">Galerie</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <GrayBoxPlaceholder ratio={4/3} />
              <GrayBoxPlaceholder ratio={4/3} />
              <GrayBoxPlaceholder ratio={4/3} />
              <GrayBoxPlaceholder ratio={4/3} />
            </div>
          </section>
          
          {/* Grundrisse (Layouts) Section */}
          {hasLayouts(modelDetails) && (
            <section id="grundrisse" className="my-10">
              <h2 className="text-2xl font-semibold mb-4">Grundrisse</h2>
              {renderLayouts()}
            </section>
          )}
          
          {/* Innenraum (Interior) Section */}
          {hasInterior(modelDetails) && (
            <section id="innenraum" className="my-10">
              <h2 className="text-2xl font-semibold mb-4">Innenraum</h2>
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                <div className="lg:col-span-3">
                  <GrayBoxPlaceholder ratio={16/9} />
                </div>
                <div className="lg:col-span-2">
                  <div className="bg-white rounded-lg p-4 shadow-sm h-full">
                    {renderInterior()}
                  </div>
                </div>
              </div>
            </section>
          )}
          
          {/* Polster (Upholstery) Section */}
          {hasUpholstery(modelDetails) && (
            <section id="polster" className="my-10">
              <h2 className="text-2xl font-semibold mb-4">Polstervarianten</h2>
              {renderUpholstery()}
            </section>
          )}
          
          {/* Serienausstattung (Standard Equipment) Section */}
          {hasEquipment(modelDetails) && (
            <section id="serienausstattung" className="my-10 pt-8">
              <h2 className="text-2xl font-semibold mb-6">Serienausstattung</h2>
              {isMobile ? renderEquipmentMobile() : renderEquipmentDesktop()}
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
