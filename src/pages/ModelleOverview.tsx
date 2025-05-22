
import React, { useState, useEffect } from "react";
import { Layout } from "../components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ArrowLeftRight, Eye, Circle, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { AlertDialog, AlertDialogContent, AlertDialogAction, AlertDialogCancel } from "@/components/ui/alert-dialog";
import { useToast } from "@/hooks/use-toast";
import { useWohnmobilberaterTrigger } from "@/hooks/useWohnmobilberaterTrigger";

// Van model data with specs included
const vanModels = [
  {
    id: "v-635-eb",
    name: "V 635 EB",
    image: "/placeholder.svg",
    length: "6,36 m",
    sleepingPlaces: "2",
    detailUrl: "/wohnmobile/vans/v-635-eb-2-2",
    specs: {
      "basisfahrzeug": "Fiat Ducato",
      "motorisierungSerie": "2,2 ltr. (103 kW / 140 PS)",
      "motorisierungOption": "2,2 ltr.",
      "radstand": "4035 mm",
      "bereifungSerie": "215/70 R15",
      "zulaessigeGesamtmasse": "3500 / 4250 kg",
      "masseFahrbereit": "3031 (2879–3183) kg",
      "zulaessigeAnhaengelast": "2500 / 3000 kg",
      "gesamtlaenge": "6360 mm",
      "gesamtbreite": "2050 mm",
      "gesamthoehe": "2650 mm",
      "innenbreite": "1940 mm",
      "stehhoehe": "1890 mm",
      "bettumbauSitzgruppe": "1560 × 950 (500) mm",
      "heckbett": "1950×800 + 1860×800 mm",
      "erweiterungSchlafplaetze": "3",
      "zulaessigePersonenzahl": "4",
      "sitzplatzerweiterung": "4",
      "bodenstaerke": "38 mm (inkl. Isolierung)",
      "frischwassertankgroesse": "85 l",
      "batteriekapazitaet": "100 Ah",
      "abwasserkapazitaet": "75 l"
    }
  },
  {
    id: "v-635-hb",
    name: "V 635 HB",
    image: "/placeholder.svg",
    length: "6,36 m",
    sleepingPlaces: "2",
    detailUrl: "/wohnmobile/vans/v-635-hb-2-2",
    specs: {
      "basisfahrzeug": "Fiat Ducato",
      "motorisierungSerie": "2,2 ltr. (103 kW / 140 PS)",
      "motorisierungOption": "2,2 ltr.",
      "radstand": "4035 mm",
      "bereifungSerie": "215/70 R15",
      "zulaessigeGesamtmasse": "3500 / 4250 kg",
      "masseFahrbereit": "3031 (2879–3183) kg",
      "zulaessigeAnhaengelast": "2500 / 3000 kg",
      "gesamtlaenge": "6360 mm",
      "gesamtbreite": "2050 mm",
      "gesamthoehe": "2650 mm",
      "innenbreite": "1940 mm",
      "stehhoehe": "1890 mm",
      "bettumbauSitzgruppe": "1560 × 950 (500) mm",
      "heckbett": "1850 (1700) × 1600 mm",
      "erweiterungSchlafplaetze": "3",
      "zulaessigePersonenzahl": "4",
      "sitzplatzerweiterung": "4",
      "bodenstaerke": "38 mm (inkl. Isolierung)",
      "frischwassertankgroesse": "85 l",
      "batteriekapazitaet": "100 Ah",
      "abwasserkapazitaet": "75 l"
    }
  },
  {
    id: "v-595-hb",
    name: "V 595 HB",
    image: "/placeholder.svg",
    length: "5,99 m",
    sleepingPlaces: "2",
    detailUrl: "/wohnmobile/vans/v-595-hb-2-2",
    specs: {
      "basisfahrzeug": "Fiat Ducato",
      "motorisierungSerie": "2,2 ltr. (103 kW / 140 PS)",
      "motorisierungOption": "2,2 ltr.",
      "radstand": "4035 mm",
      "bereifungSerie": "215/70 R15",
      "zulaessigeGesamtmasse": "3500 / 4250 kg",
      "masseFahrbereit": "2921 (2775–3067) kg",
      "zulaessigeAnhaengelast": "2500 / 3000 kg",
      "gesamtlaenge": "5990 mm",
      "gesamtbreite": "2050 mm",
      "gesamthoehe": "2650 mm",
      "innenbreite": "1940 mm",
      "stehhoehe": "1890 mm",
      "bettumbauSitzgruppe": "1600 × 950 (500) mm",
      "heckbett": "1860 × 1490 mm",
      "erweiterungSchlafplaetze": "3",
      "zulaessigePersonenzahl": "4",
      "sitzplatzerweiterung": "–",
      "bodenstaerke": "38 mm (inkl. Isolierung)",
      "frischwassertankgroesse": "85 l",
      "batteriekapazitaet": "100 Ah",
      "abwasserkapazitaet": "75 l"
    }
  }
];

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

// Sample equipment data
const equipmentData = {
  chassis: [
    "ABS, ESP, Hilldescent",
    "Radzierblenden",
    "Fix and Go Pannenset",
    "Stoßfänger hinten schwarz"
  ],
  body: [
    "Geräusch- und wärmedämmende Isolierung",
    "Aufbaufarbe weiß",
    "Karosseriebündige, isolierte Rahmenfenster",
    "Ausstellfenster im Heck"
  ],
  driversCabin: [
    "Sitzbezüge im Wohnraumpolsterstoff",
    "Fahrerhausteppich",
    "Übergangsloser, kopfhoher Durchgang"
  ],
  livingArea: [
    "Ergonomische Dinette mit abgerundeten Kanten",
    "Klapptisch mit schwenkbarer Verlängerung",
    "Polster in Eco-Leder / Stoff-Kombination"
  ],
  kitchen: [
    "Mineralstoff-Arbeitsplatte mit Spüle",
    "Küchenarmatur ausziehbar/versenkbar",
    "Zwei-Flammen-Gaskocher"
  ],
  bathroom: [
    "Waschraum mit schwenkbarer Duschwand",
    "Duschfläche bis zu 60×90 cm",
    "Mineralstoff-Waschbecken"
  ],
  sleeping: [
    "Heckbetten mit Tellerfedern oder Kaltschaummatratzen",
    "Ladefläche unter Betten aufstellbar",
    "Dachstauschränke mit Beleuchtung"
  ],
  installation: [
    "4 kW Dieselheizung",
    "Warmwasserversorgung mit Einhebel-Mischbatterie",
    "Druckwasserpumpe"
  ],
  electrical: [
    "100 Ah Lithium-Ionen-Batterie",
    "230 V-Steckdosen in Küche, Sitzgruppe & Bad",
    "Separat schaltbare Funktions-/Ambientebeleuchtung"
  ]
};

// Highlights for the Van series
const highlights = [
  "Waschraum mit schwenkbarer Duschwand",
  "Komfortmatratzen mit klappbarem Rahmen",
  "Staufächer im Doppelboden",
  "Ausziehbare Trittstufe",
  "Mineralstoff-Spüle",
  "Tisch mit klappbarer Platte"
];

// Interior features
const interiorFeatures = [
  { 
    name: "Kommunikation", 
    description: "Boxen, LED-Lampen, USB" 
  },
  { 
    name: "Spüle", 
    description: "Mineralstoff" 
  },
  { 
    name: "Tisch", 
    description: "Dinette-Tisch mit Ablage" 
  }
];

// Upholstery types
const upholsteryTypes = [
  "Eco-Leder Schwarz", 
  "Eco-Leder Beige", 
  "Stoff-Kombination Grau"
];

// New ComparisonOverlay component with real data and highlighted differences
const ComparisonOverlay = ({
  isOpen,
  onClose,
  models,
}: {
  isOpen: boolean;
  onClose: () => void;
  models: any[];
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  if (models.length < 2) return null;

  // Get comparison rows with all relevant data
  const getComparisonRows = () => {
    return [
      { 
        name: "Länge", 
        values: models.map(m => m.specs.gesamtlaenge)
      },
      { 
        name: "Schlafplätze", 
        values: models.map(m => m.specs.erweiterungSchlafplaetze)
      },
      { 
        name: "Masse fahrbereit", 
        values: models.map(m => m.specs.masseFahrbereit)
      },
      { 
        name: "Bettumbau Sitzgruppe", 
        values: models.map(m => m.specs.bettumbauSitzgruppe)
      },
      { 
        name: "Heckbett", 
        values: models.map(m => m.specs.heckbett)
      },
      { 
        name: "Sitzplatzerweiterung", 
        values: models.map(m => m.specs.sitzplatzerweiterung)
      }
    ];
  };

  // Function to check if a value is different from others in the row
  const isDifferent = (value: string, index: number, values: string[]) => {
    return values.some((v, i) => i !== index && v !== value);
  };

  const comparisonRows = getComparisonRows();
  
  return (
    <AlertDialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <AlertDialogContent className="max-w-5xl p-0 gap-0 overflow-hidden">
        <div className="sticky top-0 w-full bg-white p-4 flex justify-between items-center border-b z-10">
          <h2 className="text-xl font-semibold">Grundriss-Vergleich</h2>
          <AlertDialogCancel className="h-9 w-9 rounded-full p-0">
            <span className="sr-only">Schließen</span>
            &times;
          </AlertDialogCancel>
        </div>
        
        <div className="overflow-y-auto p-6" style={{ maxHeight: '80vh' }}>
          {/* Model images/placeholders */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="hidden md:block"></div> {/* Empty first column for alignment */}
            {models.map((model, idx) => (
              <div key={idx} className="text-center">
                <div className="bg-gray-200 aspect-square mb-2 flex items-center justify-center">
                  <span className="text-gray-500">Grundriss {model.name}</span>
                </div>
              </div>
            ))}
          </div>
          
          {/* Comparison table */}
          <ScrollArea className="w-full">
            <div className="min-w-[600px]">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2 pl-2 pr-4 font-medium sticky left-0 bg-white">Merkmal</th>
                    {models.map((model, idx) => (
                      <th key={idx} className="text-center py-2 px-4 font-medium">{model.name}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, rowIdx) => (
                    <tr key={rowIdx} className="border-b">
                      <td className="py-2 pl-2 pr-4 sticky left-0 bg-white">{row.name}</td>
                      {row.values.map((value, colIdx) => (
                        <td 
                          key={colIdx} 
                          className={`py-2 px-4 text-center ${isDifferent(value, colIdx, row.values) ? 'font-bold' : ''}`}
                        >
                          {value}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollArea>
          
          {/* Footer note */}
          <div className="mt-6 text-sm text-gray-500 text-center">
            Nur Unterschiede hervorgehoben. Angaben vorbehaltlich technischer Änderungen.
          </div>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

const ModelleOverview: React.FC = () => {
  const [selectedModels, setSelectedModels] = useState<string[]>([]);
  const [isComparisonOpen, setIsComparisonOpen] = useState(false);
  const { toast } = useToast();
  const { startBeraterFlow } = useWohnmobilberaterTrigger();
  const [activeTab, setActiveTab] = useState("chassis");

  // Scroll to a section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handler for toggling model selection
  const handleToggleModelSelection = (modelId: string) => {
    if (selectedModels.includes(modelId)) {
      setSelectedModels(selectedModels.filter(id => id !== modelId)); 
    } else {
      // If we already have 3 models selected, remove the first one
      if (selectedModels.length >= 3) {
        setSelectedModels([...selectedModels.slice(1), modelId]);
      } else {
        setSelectedModels([...selectedModels, modelId]);
      }
    }
  };

  // Handler for opening comparison overlay
  const handleOpenComparison = () => {
    if (selectedModels.length >= 2) {
      setIsComparisonOpen(true);
      
      toast({
        title: "Grundriss-Vergleich geöffnet",
        description: `${selectedModels.length} Modelle werden verglichen.`,
        duration: 3000,
      });
    }
  };
  
  const handleKonfiguratorClick = () => {
    window.open("https://eura.tef-kat.com/konfigurator-eura/Home/Start?culture=de-DE", "_blank", "noopener noreferrer");
  };
  
  const handleBeratungClick = () => {
    startBeraterFlow();
  };

  return (
    <Layout>
      {/* 1. Hero Section - Full width with max height 60vh */}
      <div className="relative w-full" style={{ maxHeight: '60vh' }}>
        <AspectRatio ratio={16/9} className="bg-gray-200 h-full max-h-[60vh] flex items-center justify-center">
          <p className="text-gray-500 text-lg">Modellbild (Hero)</p>
        </AspectRatio>
      </div>
      
      <div className="container mx-auto px-4">
        {/* Hero Text and CTA */}
        <div className="text-center py-8">
          <p className="mb-6">Vans von EURA MOBIL – kompakt, winterfest, komfortabel.</p>
          <Button onClick={() => scrollToSection('grundrisse')}>
            Jetzt Modell entdecken
          </Button>
        </div>
        
        {/* 2. Quick Overview Section */}
        <section id="grundrisse" className="py-12">
          <h2 className="text-2xl font-semibold mb-6">Welche Van-Grundrisse passen zu Ihnen?</h2>
          
          {/* Horizontally scrollable model cards */}
          <div className="flex overflow-x-auto gap-4 pb-4 mb-4">
            {vanModels.map((model) => (
              <Card key={model.id} className="flex-shrink-0 w-[280px]">
                <AspectRatio ratio={4/3} className="bg-gray-200 flex items-center justify-center">
                  <p className="text-gray-500">Grundriss</p>
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
                  <div className="flex flex-col space-y-2">
                    <Button asChild variant="outline">
                      <Link to={model.detailUrl}>
                        Modell ansehen
                      </Link>
                    </Button>
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id={`compare-${model.id}`}
                        checked={selectedModels.includes(model.id)}
                        onChange={() => handleToggleModelSelection(model.id)}
                        className="rounded border-gray-300"
                      />
                      <label htmlFor={`compare-${model.id}`}>
                        Zum Vergleich auswählen
                      </label>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        
        {/* 5. Highlights Section */}
        <section className="py-12">
          <h2 className="text-2xl font-semibold mb-8 text-center">Highlights der Baureihe</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="bg-gray-100 border-0">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-gray-300 rounded-full mb-4 flex items-center justify-center">
                    <Circle className="h-8 w-8 text-gray-500" />
                  </div>
                  <p className="text-gray-800">{highlight}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        
        {/* 6. Innenraum Section */}
        <section className="py-12">
          <h2 className="text-2xl font-semibold mb-8">Innenraum</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <AspectRatio ratio={4/3} className="bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">Innenansicht (Hotspot Placeholder)</p>
              </AspectRatio>
            </div>
            <div>
              <ul className="space-y-6">
                {interiorFeatures.map((feature, index) => (
                  <li key={index} className="flex flex-col">
                    <span className="font-medium mb-2">{feature.name}</span>
                    <span className="text-gray-600">{feature.description}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        
        {/* 7. Polster Section */}
        <section className="py-12">
          <h2 className="text-2xl font-semibold mb-8">Polster</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {upholsteryTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden">
                <AspectRatio ratio={1} className="bg-gray-200" />
                <div className="p-3 text-center">
                  <p>{type}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* 8. Serienausstattung Section */}
        <section className="py-12">
          <h2 className="text-2xl font-semibold mb-8">Serienausstattung</h2>
          
          <Tabs defaultValue="chassis" className="w-full" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="w-full flex flex-wrap h-auto mb-8 bg-gray-100 p-1 justify-start overflow-x-auto">
              {Object.entries(equipmentTabs).map(([key, label]) => (
                <TabsTrigger key={key} value={key} className="text-sm whitespace-nowrap">
                  {label}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {Object.entries(equipmentData).map(([key, items]) => (
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
        
        {/* 9. CTA Section */}
        <section className="py-16 text-center">
          <h2 className="text-2xl font-semibold mb-8">Interessiert am Van?</h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={handleKonfiguratorClick}>
              Jetzt konfigurieren
            </Button>
            <Button variant="outline" asChild>
              <Link to="/haendlersuche">
                Händler finden
              </Link>
            </Button>
            <Button variant="secondary" onClick={handleBeratungClick}>
              Beratung starten
            </Button>
          </div>
        </section>
      </div>
      
      {/* 3. Sticky Compare Bar */}
      {selectedModels.length >= 2 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t p-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span>Ausgewählte Modelle:</span>
            <div className="flex space-x-1">
              {selectedModels.slice(0, 3).map((id, index) => {
                const model = vanModels.find(m => m.id === id);
                return (
                  <span key={index} className="bg-gray-100 px-2 py-1 rounded text-sm">
                    {model?.name || id}
                  </span>
                );
              })}
            </div>
          </div>
          <Button onClick={handleOpenComparison}>
            Vergleich starten
          </Button>
        </div>
      )}
      
      {/* 4. Comparison Overlay */}
      <ComparisonOverlay
        isOpen={isComparisonOpen}
        onClose={() => setIsComparisonOpen(false)}
        models={selectedModels.map(id => vanModels.find(model => model.id === id)!)}
      />
    </Layout>
  );
};

export default ModelleOverview;
