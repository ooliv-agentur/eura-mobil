import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ArrowDown, Check, Circle, Eye, ArrowLeftRight, ArrowLeft, ArrowRight } from "lucide-react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { ProductLayout } from "@/components/ProductLayout";
import { useWohnmobilberaterTrigger } from "@/hooks/useWohnmobilberaterTrigger";
import { useIsMobile } from "@/hooks/use-mobile";
import { useToast } from "@/hooks/use-toast";

// Model data repository
const modelsData = {
  "van": {
    id: "van",
    name: "Van",
    intro: "Im neuen Premium Van von Eura Mobil verwandelt das exklusive Ambiente jeden Moment in einen besonderen Augenblick. Spüren Sie die edlen Materialien und erleben Sie die individuellen Details, die den Eura Mobil Van zu Ihrem ganz persönlichen mobilen Zuhause machen.",
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
      "Tisch mit klappbarer Platte, Cupholder und schwenkbarer Verlängerung.",
      "Komfort-Kaltschaummatratzen mit geteilten und damit klappbaren Bettrahmen.",
      "Waschraum mit schwenkbarer Duschwand.",
      "Staufächer im Doppelboden.",
      "Mineralstoff-Spüle."
    ],
    layouts: [
      {
        id: "v-635-eb",
        name: "V 635 EB",
        image: "/placeholder.svg",
        length: "6,36 m",
        sleepingPlaces: "2",
        detailUrl: "/wohnmobile/vans/v-635-eb-2-2/"
      },
      {
        id: "v-635-hb",
        name: "V 635 HB",
        image: "/placeholder.svg",
        length: "6,36 m",
        sleepingPlaces: "2",
        detailUrl: "/wohnmobile/vans/v-635-hb-2-2/"
      },
      {
        id: "v-595-hb",
        name: "V 595 HB",
        image: "/placeholder.svg",
        length: "5,99 m",
        sleepingPlaces: "2",
        detailUrl: "/wohnmobile/vans/v-595-hb-2-2/"
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
    },
    modelText: {
      headline: "Vans",
      subheadline: "Für Aktive und Unabhängige",
      description: "Im neuen Premium Van von EURA MOBIL verwandelt das exklusive Ambiente jeden Moment in einen besonderen Augenblick. Spüren Sie die edlen Materialien und erleben Sie die individuellen Details, die den Eura Mobil Van zu Ihrem ganz persönlichen mobilen Zuhause machen. Ausgewählte Bezugsstoffe bei den Polstern, ein flauschiger Deckenbelag und textile Wandbespannungen mit Eco-Leder Applikationen machen den spürbaren Unterschied."
    }
  },
  "activa-one": {
    id: "activa-one",
    name: "Activa One",
    intro: "Die verschiedenen Modelle der Alkoven-Baureihe Activa One sind viel mehr als nur simple Reisemobile: Ihr frisches Interieur steigert noch den ersten Eindruck von robuster Großzügigkeit zu einem echten Gefühl von Freiheit.",
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
      "Ausziehbares Doppelstockbett (AO 690 VB).",
      "Maximaler Stauraum dank 37 cm hohem Doppelboden.",
      "Isolierter und beheizter Alkoven.",
      "Praktische Familien-Grundrisse.",
      "Wassertanks im isolierten und beheizten Doppelboden."
    ],
    layouts: [
      {
        id: "ao-570-hs",
        name: "AO 570 HS",
        image: "/placeholder.svg",
        length: "5,99 m",
        sleepingPlaces: "4",
        detailUrl: "/wohnmobile/activa-one/ao-570-hs-4-4/"
      },
      {
        id: "ao-630-ls",
        name: "AO 630 LS",
        image: "/placeholder.svg",
        length: "6,44 m",
        sleepingPlaces: "5",
        detailUrl: "/wohnmobile/activa-one/ao-630-ls-5-5/"
      },
      {
        id: "ao-650-hs",
        name: "AO 650 HS",
        image: "/placeholder.svg",
        length: "6,50 m",
        sleepingPlaces: "4",
        detailUrl: "/wohnmobile/activa-one/ao-650-hs-4-4/"
      },
      {
        id: "ao-690-hb",
        name: "AO 690 HB",
        image: "/placeholder.svg",
        length: "6,99 m",
        sleepingPlaces: "6",
        detailUrl: "/wohnmobile/activa-one/ao-690-hb-6-6/"
      },
      {
        id: "ao-690-vb",
        name: "AO 690 VB",
        image: "/placeholder.svg",
        length: "6,99 m",
        sleepingPlaces: "6",
        detailUrl: "/wohnmobile/activa-one/ao-690-vb-6-6/"
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
    },
    modelText: {
      headline: "Activa One",
      subheadline: "Praktische Wohnmobile für Einsteiger",
      description: "Praktische Wohnmobile für Einsteiger. Bieten Platz für bis zu 6 Personen und viel Komfort."
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

// Define types for our different model types
type BaseModelData = {
  id: string;
  name: string;
  intro: string;
  heroImage: string;
  galleryImages: string[];
  technicalData: Record<string, string>;
  highlights: string[];
};

type FullModelData = BaseModelData & {
  layouts: Array<{
    id: string;
    name: string;
    image: string;
    length: string;
    sleepingPlaces: string;
    detailUrl?: string;
  }>;
  interior: Array<{
    name: string;
    description: string;
  }>;
  upholsteryTypes: string[];
  equipment: Record<string, string[]>;
  modelText?: {
    headline: string;
    subheadline: string;
    description: string;
  };
};

type DownloadModelData = BaseModelData & {
  downloadItems: Array<{
    name: string;
    type: string;
    url: string;
  }>;
};

type ModelData = FullModelData | DownloadModelData;
type ModelsDataType = Record<string, ModelData>;

// Type guards
function hasLayouts(model: ModelData | undefined): model is FullModelData {
  return !!model && 'layouts' in model && Array.isArray(model.layouts);
}

function hasInterior(model: ModelData | undefined): model is FullModelData {
  return !!model && 'interior' in model && Array.isArray(model.interior);
}

function hasUpholstery(model: ModelData | undefined): model is FullModelData {
  return !!model && 'upholsteryTypes' in model && Array.isArray(model.upholsteryTypes);
}

function hasEquipment(model: ModelData | undefined): model is FullModelData {
  return !!model && 'equipment' in model && model.equipment !== undefined;
}

function hasModelText(model: ModelData | undefined): model is FullModelData & { modelText: { headline: string; subheadline: string; description: string; } } {
  return !!model && 'modelText' in model && model.modelText !== undefined;
}

// Sections for navigation
const sections = [
  { id: "highlights", label: "Highlights" },
  { id: "grundrisse", label: "Grundrisse" },
  { id: "innenraum", label: "Innenraum" },
  { id: "polster", label: "Polster" },
  { id: "serienausstattung", label: "Serienausstattung" }
];

// New component for Model Card
const ModelCard = ({ 
  model,
  onCompare 
}: { 
  model: { 
    id: string, 
    name: string, 
    image: string, 
    length: string, 
    sleepingPlaces: string, 
    detailUrl?: string 
  }, 
  onCompare: (id: string) => void 
}) => {
  return (
    <Card className="overflow-hidden">
      <AspectRatio ratio={4/3} className="bg-gray-200">
        <div className="w-full h-full flex items-center justify-center text-gray-500">
          Grundriss
        </div>
      </AspectRatio>
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold mb-3">{model.name}</h3>
        <div className="grid grid-cols-2 gap-2 text-sm mb-4">
          <div>
            <span className="text-gray-600">Länge:</span> {model.length}
          </div>
          <div>
            <span className="text-gray-600">Schlafplätze:</span> {model.sleepingPlaces}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-2">
          <Button asChild variant="outline" className="w-full">
            <Link to={model.detailUrl || "#"}>
              <Eye className="mr-2 h-4 w-4" />
              Modell ansehen
            </Link>
          </Button>
          <Button 
            variant="secondary" 
            onClick={() => onCompare(model.id)} 
            className="w-full"
          >
            <ArrowLeftRight className="mr-2 h-4 w-4" />
            Vergleichen
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const ProductDetail = () => {
  const { modelId } = useParams();
  const isMobile = useIsMobile();
  const [activeSection, setActiveSection] = useState("highlights");
  const [currentSlide, setCurrentSlide] = useState(0);
  const { toast } = useToast();
  const { startBeraterFlow } = useWohnmobilberaterTrigger();
  
  // Default to van if no model ID or model not found
  const modelData = modelId && modelId in modelsData 
    ? modelsData[modelId as keyof typeof modelsData] 
    : modelsData["van"];

  // Handler for adding to comparison
  const handleCompareModel = (modelId: string) => {
    // Here you would implement the session/cookie-based comparison logic
    toast({
      title: "Modell zum Vergleich hinzugefügt",
      description: `${modelId} wurde zum Vergleich hinzugefügt.`,
      duration: 3000,
    });
  };
  
  // Helper functions for handlers
  const handleKonfiguratorClick = () => {
    window.open("https://eura.tef-kat.com/konfigurator-eura/Home/Start?culture=de-DE", "_blank", "noopener noreferrer");
  };
  
  const handleBeratungClick = () => {
    startBeraterFlow();
  };
  
  // Simple gray box placeholder component
  const GrayBoxPlaceholder = ({ className = "", ratio = 16/9, label = "" }: { className?: string, ratio?: number, label?: string }) => (
    <AspectRatio ratio={ratio} className={`bg-[#E5E7EB] flex items-center justify-center ${className}`}>
      {label && <p className="text-gray-500 text-lg">{label}</p>}
    </AspectRatio>
  );
  
  // Mobile slider navigation
  const handlePrevSlide = () => {
    if (hasLayouts(modelData) && currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };
  
  const handleNextSlide = () => {
    if (hasLayouts(modelData) && currentSlide < modelData.layouts.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };
  
  // Intersection observer for scroll sections
  useEffect(() => {
    const observerOptions = {
      rootMargin: "-100px 0px -300px 0px",
      threshold: 0.1
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    sections.forEach(section => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Scroll to section function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  
  return (
    <ProductLayout modelName={modelData?.name || ""}>
      {/* 1. Hero Section - Full width with max height 60vh */}
      <div className="relative w-full" style={{ maxHeight: '60vh' }}>
        <GrayBoxPlaceholder ratio={16/9} label="Modellbild (Hero)" className="h-full max-h-[60vh]" />
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-0 right-0 flex flex-col items-center justify-center text-gray-500 animate-bounce">
          <span className="mb-2">Scrollen</span>
          <ArrowDown size={24} />
        </div>
      </div>
      
      {/* Mobile horizontal scroll anchor navigation */}
      {isMobile && (
        <div className="px-4 py-6 overflow-x-auto">
          <div className="flex space-x-4">
            {sections.map(section => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="bg-gray-100 px-4 py-2 rounded whitespace-nowrap"
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
      )}
      
      <div className="container mx-auto px-4">
        {/* 2. Intro + Interactive View Section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 py-16">
          {/* Left column - 60% width */}
          <div className="lg:col-span-3 space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold">
              {hasModelText(modelData) && modelData.modelText ? modelData.modelText.headline : modelData?.name || ""}
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600">
              {hasModelText(modelData) && modelData.modelText ? modelData.modelText.subheadline : 'Für Aktive und Unabhängige'}
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                {hasModelText(modelData) && modelData.modelText
                  ? modelData.modelText.description 
                  : modelData?.intro || ""}
              </p>
              <p>
                Ausgewählte Bezugsstoffe bei den Polstern, ein flauschiger Deckenbelag und textile Wandbespannungen mit Eco-Leder Applikationen machen den spürbaren Unterschied bei diesem Modell. Erleben Sie modernen Wohnkomfort auf kleinstem Raum.
              </p>
            </div>
            
            {/* Technical specs in 3-column row */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t">
              <div>
                <span className="text-sm text-gray-600">Länge</span>
                <p className="font-semibold">{modelData?.technicalData?.länge || "5,99 – 6,36 m"}</p>
              </div>
              <div>
                <span className="text-sm text-gray-600">Sitzplätze</span>
                <p className="font-semibold">{modelData?.technicalData?.sitzplätze || "4"}</p>
              </div>
              <div>
                <span className="text-sm text-gray-600">Schlafplätze</span>
                <p className="font-semibold">{modelData?.technicalData?.schlafplätze || "2–3"}</p>
              </div>
            </div>
          </div>
          
          {/* Right column - 40% width */}
          <div className="lg:col-span-2">
            <GrayBoxPlaceholder ratio={4/3} label="Interaktive Innenansicht (Hotspot-Placeholder)" />
          </div>
        </div>
        
        {/* 3. Vertical Scroll Navigation - Desktop only */}
        {!isMobile && (
          <nav className="hidden lg:flex flex-col items-center fixed left-8 top-1/2 transform -translate-y-1/2 z-10 space-y-8">
            {sections.map(section => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`flex flex-col items-center space-y-3 group transition-colors`}
              >
                <div className={`rounded-full h-12 w-12 flex items-center justify-center ${
                  activeSection === section.id 
                    ? 'bg-gray-300' 
                    : 'bg-gray-200 group-hover:bg-gray-300'
                } transition-colors`}>
                  <Circle className={`h-6 w-6 ${
                    activeSection === section.id 
                      ? 'text-gray-800' 
                      : 'text-gray-500'
                  }`} />
                </div>
                <span className={`text-sm ${
                  activeSection === section.id 
                    ? 'font-bold text-gray-900' 
                    : 'text-gray-600 group-hover:text-gray-900'
                } transition-colors`}>
                  {section.label}
                </span>
              </button>
            ))}
          </nav>
        )}
        
        {/* 4. Highlights Section */}
        <section id="highlights" className="py-24 scroll-mt-8">
          <h2 className="text-2xl font-semibold mb-8">Highlights der Baureihe</h2>
          <div className="bg-white rounded-lg p-6">
            <ul className="space-y-4">
              {modelData?.highlights?.map((highlight, index) => (
                <li key={index} className="flex gap-3 items-start">
                  <Check className="h-5 w-5 text-gray-600 flex-shrink-0 mt-1" />
                  <span>{highlight}</span>
                </li>
              )) || []}
            </ul>
          </div>
        </section>
        
        {/* 5. Grundrisse (Floorplans) Section - Enhanced with cards and buttons */}
        {hasLayouts(modelData) && (
          <section id="grundrisse" className="py-24 scroll-mt-8">
            <h2 className="text-2xl font-semibold mb-8">Grundrisse</h2>
            
            {/* Desktop view - Grid layout */}
            <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {modelData.layouts.map((layout) => (
                <ModelCard 
                  key={layout.id}
                  model={layout}
                  onCompare={handleCompareModel}
                />
              ))}
            </div>
            
            {/* Mobile view - Horizontal slider with controls */}
            <div className="md:hidden relative">
              <div className="overflow-hidden">
                {modelData.layouts.length > 0 && (
                  <div className="w-full">
                    <ModelCard
                      model={modelData.layouts[currentSlide]}
                      onCompare={handleCompareModel}
                    />
                  </div>
                )}
              </div>
              
              {/* Slider navigation */}
              {modelData.layouts.length > 1 && (
                <div className="flex justify-between mt-4">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={handlePrevSlide}
                    disabled={currentSlide === 0}
                    className="rounded-full"
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </Button>
                  
                  <div className="flex items-center space-x-2">
                    {modelData.layouts.map((_, index) => (
                      <div 
                        key={index}
                        className={`h-2 w-2 rounded-full ${
                          index === currentSlide ? 'bg-gray-800' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={handleNextSlide}
                    disabled={currentSlide === modelData.layouts.length - 1}
                    className="rounded-full"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>
          </section>
        )}
        
        {/* 6. Innenraum (Interior) Section - Only shown if interior exists */}
        {hasInterior(modelData) && (
          <section id="innenraum" className="py-24 scroll-mt-8">
            <h2 className="text-2xl font-semibold mb-8">Innenraum</h2>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              <div className="lg:col-span-3">
                <GrayBoxPlaceholder ratio={16/9} />
              </div>
              <div className="lg:col-span-2">
                <ul className="space-y-6 divide-y">
                  {modelData.interior.slice(0, 3).map((item, index) => (
                    <li key={index} className={`${index > 0 ? 'pt-6' : ''}`}>
                      <div className="font-medium mb-2">{item.name}</div>
                      <div className="text-gray-600">{item.description}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        )}
        
        {/* 7. Polster (Upholstery) Section - Only shown if upholsteryTypes exist */}
        {hasUpholstery(modelData) && (
          <section id="polster" className="py-24 scroll-mt-8">
            <h2 className="text-2xl font-semibold mb-8">Polster</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {modelData.upholsteryTypes.map((type, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden">
                  <GrayBoxPlaceholder ratio={1} />
                  <div className="p-3 text-center">
                    <p>{type}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
        
        {/* 8. Serienausstattung (Standard Equipment) Section */}
        {hasEquipment(modelData) && (
          <section id="serienausstattung" className="py-24 scroll-mt-8">
            <h2 className="text-2xl font-semibold mb-8">Serienausstattung</h2>
            <Tabs defaultValue={Object.keys(modelData.equipment)[0]} className="w-full">
              <TabsList className="w-full flex flex-wrap h-auto mb-8 bg-gray-100 p-1">
                {Object.entries(modelData.equipment).map(([key]) => (
                  <TabsTrigger key={key} value={key} className="text-sm flex-grow">
                    {equipmentTabs[key as keyof typeof equipmentTabs]}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {Object.entries(modelData.equipment).map(([key, items]) => (
                <TabsContent key={key} value={key} className="mt-4">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                    {items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="h-2 w-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </TabsContent>
              ))}
            </Tabs>
          </section>
        )}
        
        {/* 9. CTA section */}
        <section className="py-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button onClick={handleKonfiguratorClick} variant="outline" size="lg" className="h-14 bg-gray-100 text-gray-800">
              Jetzt konfigurieren
            </Button>
            <Button onClick={handleBeratungClick} variant="outline" size="lg" className="h-14 bg-gray-100 text-gray-800">
              Beratung starten
            </Button>
            <Button asChild variant="outline" size="lg" className="h-14 bg-gray-100 text-gray-800">
              <Link to="/haendler">Händler finden</Link>
            </Button>
          </div>
        </section>
      </div>
    </ProductLayout>
  );
};

export default ProductDetail;
