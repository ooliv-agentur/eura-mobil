
import React, { useState, useRef, useEffect } from "react";
import { Layout } from "../components/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ProductSidebar } from "../components/ProductSidebar";

// Mock data for van models
const vanModels = [
  {
    id: "v-635-eb",
    name: "V 635 EB",
    length: "6,36 m",
    beds: "2",
    detailUrl: "/wohnmobile/vans/v-635-eb-2-2",
    specs: {
      length: "6,36 m",
      rearBed: "1950×800 + 1860×800 mm",
      weight: "3031 (2879–3183) kg",
      convertibleDinette: "1560 × 950 (500) mm",
      seatingExtension: "4"
    }
  },
  {
    id: "v-635-hb",
    name: "V 635 HB",
    length: "6,36 m",
    beds: "2",
    detailUrl: "/wohnmobile/vans/v-635-hb-2-2",
    specs: {
      length: "6,36 m",
      rearBed: "1850 (1700) × 1600 mm",
      weight: "3031 (2879–3183) kg",
      convertibleDinette: "1560 × 950 (500) mm",
      seatingExtension: "4"
    }
  },
  {
    id: "v-595-hb",
    name: "V 595 HB",
    length: "5,99 m",
    beds: "2",
    detailUrl: "/wohnmobile/vans/v-595-hb-2-2",
    specs: {
      length: "5,99 m",
      rearBed: "1860 × 1490 mm",
      weight: "2921 (2775–3067) kg",
      convertibleDinette: "1600 × 950 (500) mm",
      seatingExtension: "-"
    }
  }
];

const VanModelsOverview: React.FC = () => {
  const [selectedModels, setSelectedModels] = useState<string[]>([]);
  const [activeSection, setActiveSection] = useState<string>("");
  
  const highlightsRef = useRef<HTMLDivElement>(null);
  const grundrisseRef = useRef<HTMLDivElement>(null);
  const innenraumRef = useRef<HTMLDivElement>(null);
  const polsterRef = useRef<HTMLDivElement>(null);
  const serienausstattungRef = useRef<HTMLDivElement>(null);
  
  const sectionRefs = {
    highlights: highlightsRef,
    grundrisse: grundrisseRef,
    innenraum: innenraumRef,
    polster: polsterRef,
    serienausstattung: serienausstattungRef
  };

  // Handle scrolling and section updates
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset for better UX
      
      // Check each section's position and update active section
      Object.entries(sectionRefs).forEach(([section, ref]) => {
        if (ref.current) {
          const element = ref.current;
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Toggle model selection for comparison
  const toggleModelSelection = (modelId: string) => {
    if (selectedModels.includes(modelId)) {
      setSelectedModels(selectedModels.filter(id => id !== modelId));
    } else if (selectedModels.length < 3) {
      setSelectedModels([...selectedModels, modelId]);
    }
  };
  
  // Get selected models with data
  const selectedModelsData = vanModels.filter(model => selectedModels.includes(model.id));

  return (
    <Layout>
      {/* Dot-style sidebar navigation */}
      <ProductSidebar 
        sections={["highlights", "grundrisse", "innenraum", "polster", "serienausstattung"]}
        activeSection={activeSection}
      />
      
      {/* Hero section - 100vh */}
      <div className="h-screen relative flex flex-col justify-center items-center bg-gray-200 px-4">
        <div className="text-center">
          <div className="bg-gray-300 h-64 w-full max-w-4xl mb-8 flex items-center justify-center">
            <span className="text-xl font-medium">Modellbild Hero (VANS)</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">Freiheit erleben. Komfort genießen.</h1>
          <Button size="lg" className="text-lg px-8 py-6">
            Jetzt Modell entdecken
          </Button>
        </div>
      </div>
      
      {/* Model sections */}
      <div className="container mx-auto px-4">
        {/* Highlights section */}
        <section ref={highlightsRef} id="highlights" className="py-16">
          <h2 className="text-3xl font-bold mb-8">Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-gray-100">
              <h3 className="text-xl font-semibold mb-3">Kompakt und wendig</h3>
              <p>Erleben Sie die perfekte Balance aus Mobilität und Komfort mit unseren Van-Modellen.</p>
            </div>
            <div className="p-6 bg-gray-100">
              <h3 className="text-xl font-semibold mb-3">Durchdachte Raumnutzung</h3>
              <p>Jeder Zentimeter wurde optimal genutzt, um maximalen Komfort auf kompaktem Raum zu bieten.</p>
            </div>
          </div>
        </section>
        
        {/* Grundrisse section - Model Grid */}
        <section ref={grundrisseRef} id="grundrisse" className="py-16">
          <h2 className="text-3xl font-bold mb-8">Grundrisse</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vanModels.map((model) => (
              <div key={model.id} className="border p-4 rounded-lg">
                <div className="bg-gray-300 h-48 mb-4 flex items-center justify-center">
                  <span className="text-lg">Grundriss</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{model.name}</h3>
                <div className="flex gap-4 text-sm mb-4">
                  <span>Länge: {model.length}</span>
                  <span>Schlafplätze: {model.beds}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Link to={model.detailUrl}>
                    <Button variant="default">Modell ansehen</Button>
                  </Link>
                  <Button 
                    variant="outline" 
                    onClick={() => toggleModelSelection(model.id)}
                    className={selectedModels.includes(model.id) ? "bg-primary/20" : ""}
                  >
                    {selectedModels.includes(model.id) ? "Ausgewählt" : "Vergleichen"}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Comparison Module - only visible when models are selected */}
        {selectedModels.length >= 2 && (
          <section className="py-16 border-t border-gray-200">
            <h2 className="text-3xl font-bold mb-8">
              Modellvergleich: {selectedModelsData.map(m => m.name).join(" vs. ")}
            </h2>
            
            {/* Floorplan images row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              {selectedModelsData.map((model) => (
                <div key={model.id} className="text-center">
                  <div className="bg-gray-300 h-48 mb-2 flex items-center justify-center">
                    <span className="text-lg">Grundriss {model.name}</span>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Comparison table */}
            <div className="overflow-x-auto">
              <table className="min-w-full mb-8">
                <tbody>
                  <tr className="border-b">
                    <th className="p-3 text-left font-medium sticky left-0 bg-white">Länge</th>
                    {selectedModelsData.map((model) => (
                      <td key={model.id} className="p-3">{model.specs.length}</td>
                    ))}
                  </tr>
                  <tr className="border-b">
                    <th className="p-3 text-left font-medium sticky left-0 bg-white">Heckbett</th>
                    {selectedModelsData.map((model) => (
                      <td key={model.id} className="p-3">{model.specs.rearBed}</td>
                    ))}
                  </tr>
                  <tr className="border-b">
                    <th className="p-3 text-left font-medium sticky left-0 bg-white">Masse fahrbereit</th>
                    {selectedModelsData.map((model) => (
                      <td key={model.id} className="p-3">{model.specs.weight}</td>
                    ))}
                  </tr>
                  <tr className="border-b">
                    <th className="p-3 text-left font-medium sticky left-0 bg-white">Bettumbau Sitzgruppe</th>
                    {selectedModelsData.map((model) => (
                      <td key={model.id} className="p-3">{model.specs.convertibleDinette}</td>
                    ))}
                  </tr>
                  <tr>
                    <th className="p-3 text-left font-medium sticky left-0 bg-white">Sitzplatzerweiterung</th>
                    {selectedModelsData.map((model) => (
                      <td key={model.id} className="p-3">{model.specs.seatingExtension}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            
            {/* Model detail buttons */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {selectedModelsData.map((model) => (
                <div key={model.id} className="text-center">
                  <Link to={model.detailUrl}>
                    <Button variant="default">Modell ansehen</Button>
                  </Link>
                </div>
              ))}
            </div>
          </section>
        )}
        
        {/* Placeholder sections for navigation */}
        <section ref={innenraumRef} id="innenraum" className="py-16 border-t border-gray-200">
          <h2 className="text-3xl font-bold mb-8">Innenraum</h2>
          <div className="bg-gray-300 h-64 mb-8 flex items-center justify-center">
            <span className="text-xl font-medium">Innenraum</span>
          </div>
          <p className="text-lg mb-4">
            Der Innenraum unserer Van-Modelle bietet intelligente Raumnutzung mit hochwertigen Materialien und durchdachten Details.
          </p>
        </section>
        
        <section ref={polsterRef} id="polster" className="py-16 border-t border-gray-200">
          <h2 className="text-3xl font-bold mb-8">Polster</h2>
          <div className="bg-gray-300 h-64 mb-8 flex items-center justify-center">
            <span className="text-xl font-medium">Polster</span>
          </div>
          <p className="text-lg mb-4">
            Wählen Sie aus verschiedenen Polstervarianten für Ihren individuellen Stil und Komfort.
          </p>
        </section>
        
        <section ref={serienausstattungRef} id="serienausstattung" className="py-16 border-t border-gray-200">
          <h2 className="text-3xl font-bold mb-8">Serienausstattung</h2>
          <div className="space-y-4">
            <p>Entdecken Sie die umfangreiche Serienausstattung unserer Van-Modelle:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Kompressor-Kühlschrank (84 l)</li>
              <li>2-Flammen-Kochfeld mit Glasabdeckung</li>
              <li>Truma Combi 4 Heizung</li>
              <li>Bodenisolierung XPS</li>
              <li>Ergonomische Schaummatratzen</li>
            </ul>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default VanModelsOverview;
