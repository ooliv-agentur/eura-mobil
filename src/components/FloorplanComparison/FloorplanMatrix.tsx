import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { FloorplanCard } from "./FloorplanCard";
import { ComparisonBar } from "./ComparisonBar";
import { ComparisonOverlay } from "./ComparisonOverlay";
import { ScrollArea } from "@/components/ui/scroll-area";

// Mock data for floorplans
const mockFloorplans = [
  {
    id: "v-635-eb",
    name: "V 635 EB",
    length: "6360 mm",
    beds: "2",
    detailUrl: "/wohnmobile/vans/v-635-eb-2-2",
    specs: {
      length: "6360 mm",
      rearBed: "1950×800 + 1860×800 mm",
      weight: "3031 (2879–3183) kg",
      convertibleDinette: "1560 × 950 (500) mm",
      seatingExtension: "4"
    }
  },
  {
    id: "v-635-hb",
    name: "V 635 HB",
    length: "6360 mm",
    beds: "2",
    detailUrl: "/wohnmobile/vans/v-635-hb-2-2",
    specs: {
      length: "6360 mm",
      rearBed: "1850 (1700) × 1600 mm",
      weight: "3031 (2879–3183) kg",
      convertibleDinette: "1560 × 950 (500) mm",
      seatingExtension: "4"
    }
  },
  {
    id: "v-595-hb",
    name: "V 595 HB",
    length: "5990 mm",
    beds: "2",
    detailUrl: "/wohnmobile/vans/v-595-hb-2-2",
    specs: {
      length: "5990 mm",
      rearBed: "1860 × 1490 mm",
      weight: "2921 (2775–3067) kg",
      convertibleDinette: "1600 × 950 (500) mm",
      seatingExtension: "-"
    }
  },
  {
    id: "prs-695-eb",
    name: "PRS 695 EB",
    length: "6950 mm",
    beds: "2",
    detailUrl: "/wohnmobile/teilintegrierte/profila-rs/prs-695-eb",
    specs: {
      length: "6950 mm",
      rearBed: "2000×800 + 1950×800 mm",
      weight: "3050 (2897–3203) kg",
      convertibleDinette: "1500 × 1000 mm",
      seatingExtension: "5"
    }
  },
  {
    id: "prs-720-eb",
    name: "PRS 720 EB",
    length: "7200 mm",
    beds: "2",
    detailUrl: "/wohnmobile/teilintegrierte/profila-rs/prs-720-eb",
    specs: {
      length: "7200 mm",
      rearBed: "2000×800 + 1950×800 mm",
      weight: "3150 (2992–3308) kg",
      convertibleDinette: "1500 × 1000 mm",
      seatingExtension: "5"
    }
  },
  {
    id: "prs-720-qb",
    name: "PRS 720 QB",
    length: "7200 mm",
    beds: "2",
    detailUrl: "/wohnmobile/teilintegrierte/profila-rs/prs-720-qb",
    specs: {
      length: "7200 mm",
      rearBed: "1950 × 1500 mm",
      weight: "3150 (2992–3308) kg",
      convertibleDinette: "1500 × 1000 mm",
      seatingExtension: "5"
    }
  }
];

// Sample equipment section tab keys in German
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

export const FloorplanMatrix: React.FC = () => {
  const [selectedModels, setSelectedModels] = useState<string[]>([]);
  const [isComparisonOpen, setIsComparisonOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("chassis");

  const handleToggleCompare = (id: string, isChecked: boolean) => {
    if (isChecked) {
      if (selectedModels.length < 3) {
        setSelectedModels([...selectedModels, id]);
      }
    } else {
      setSelectedModels(selectedModels.filter(modelId => modelId !== id));
    }
  };

  const handleRemoveModel = (id: string) => {
    setSelectedModels(selectedModels.filter(modelId => modelId !== id));
  };

  const handleStartComparison = () => {
    if (selectedModels.length >= 2) {
      setIsComparisonOpen(true);
    }
  };

  // Get selected models with data
  const selectedModelsData = mockFloorplans.filter(model => 
    selectedModels.includes(model.id)
  );

  // Create selected models array for comparison bar
  const selectedModelsForBar = selectedModelsData.map(model => ({
    id: model.id,
    name: model.name
  }));

  // Scroll to a section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="py-10">
      <h2 className="text-2xl font-semibold mb-8" id="grundrisse">Welche Van-Grundrisse passen zu Ihnen?</h2>
      
      {/* Floorplan Horizontal Scrollable Cards */}
      <div className="mb-12">
        <ScrollArea className="w-full">
          <div className="flex gap-4 pb-4" style={{ minWidth: "max-content" }}>
            {mockFloorplans.map((floorplan) => (
              <div key={floorplan.id} className="w-[280px] flex-shrink-0">
                <FloorplanCard
                  id={floorplan.id}
                  name={floorplan.name}
                  length={floorplan.length}
                  beds={floorplan.beds}
                  detailUrl={floorplan.detailUrl}
                  onToggleCompare={handleToggleCompare}
                  isSelected={selectedModels.includes(floorplan.id)}
                />
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Highlights Section */}
      <section className="py-8">
        <h2 className="text-2xl font-semibold mb-8 text-center">Highlights der Baureihe</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((highlight, index) => (
            <div 
              key={index} 
              className="bg-gray-100 p-6 rounded-lg flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-gray-300 rounded-full mb-4"></div>
              <p className="text-gray-800">{highlight}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* Interior Features Section */}
      <section className="py-8">
        <h2 className="text-2xl font-semibold mb-8">Innenraum</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gray-200 aspect-video flex items-center justify-center">
            <p className="text-gray-500">Innenansicht (Hotspot Placeholder)</p>
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
      
      {/* Upholstery Section */}
      <section className="py-8">
        <h2 className="text-2xl font-semibold mb-8">Polster</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {upholsteryTypes.map((type, index) => (
            <div key={index} className="overflow-hidden rounded-lg">
              <div className="bg-gray-200 aspect-square"></div>
              <div className="p-3 text-center bg-white border-t">
                <p>{type}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Standard Equipment Section */}
      <section className="py-8">
        <h2 className="text-2xl font-semibold mb-8">Serienausstattung</h2>
        
        <div className="bg-gray-100 p-8 rounded-lg">
          <div className="overflow-x-auto">
            <div className="flex gap-4 border-b mb-6">
              {Object.entries(equipmentTabs).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`py-2 px-4 whitespace-nowrap ${
                    activeTab === key 
                      ? "border-b-2 border-blue-600 font-medium" 
                      : "text-gray-600"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
          
          <div>
            {Object.entries(equipmentData).map(([key, items]) => (
              activeTab === key && (
                <ul 
                  key={key} 
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2"
                >
                  {items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="h-2 w-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-12 text-center">
        <h2 className="text-2xl font-semibold mb-8">Interessiert am Van?</h2>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button>Jetzt konfigurieren</Button>
          <Button variant="outline">Händler finden</Button>
          <Button variant="secondary">Beratung starten</Button>
        </div>
      </section>

      {/* Comparison Bar */}
      <ComparisonBar
        selectedModels={selectedModelsForBar}
        onRemoveModel={handleRemoveModel}
        onStartComparison={handleStartComparison}
      />

      {/* Comparison Overlay */}
      <ComparisonOverlay
        isOpen={isComparisonOpen}
        onClose={() => setIsComparisonOpen(false)}
        models={selectedModelsData}
      />
    </div>
  );
};
