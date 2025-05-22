
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Circle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ProductLayout } from "@/components/ProductLayout";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

// Technical data for the V 635 EB model
const technicalData = {
  "Länge": "6,36 m",
  "Schlafplätze": "2",
  "Masse fahrbereit": "3031 (2879–3183) kg",
  "Heckbett": "1950×800 + 1860×800 mm",
  "Bettumbau Sitzgruppe": "1560 × 950 (500) mm",
  "Sitzplatzerweiterung": "4",
};

// Placeholder highlights
const highlights = [
  "Tisch mit klappbarer Platte und schwenkbarer Verlängerung",
  "Komfort-Kaltschaummatratzen mit klappbaren Bettrahmen",
  "Waschraum mit schwenkbarer Duschwand",
  "Staufächer im Doppelboden"
];

// Equipment section tab keys
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

// Equipment placeholder data
const equipmentData = {
  chassis: [
    "Fiat Ducato 35L Chassis, Kastenwagen",
    "Euro 6D Final inkl. Ad Blue und Rußpartikelfilter",
    "Fahrer- + Beifahrerairbag"
  ],
  body: [
    "Geräusch- und wärmedämmende Isolierung in Dach, Boden und Seiten",
    "Aufbaufarbe weiß",
    "Karosseriebündige, isolierte Rahmenfenster mit Schnellverschlüssen"
  ],
  livingArea: [
    "Ergonomische Dinette mit abgerundeten Kanten",
    "Klapptisch mit schwenkbarer Verlängerung und Cupholder",
    "Polster in Eco-Leder / Stoff-Kombination"
  ]
};

// Sections for navigation
const sections = [
  { id: "highlights", label: "Highlights" },
  { id: "grundriss", label: "Grundriss" },
  { id: "innenraum", label: "Innenraum" },
  { id: "polster", label: "Polster" },
  { id: "serienausstattung", label: "Serienausstattung" }
];

const VanModelDetail: React.FC = () => {
  const { modelId } = useParams();
  const [activeSection, setActiveSection] = useState("");
  
  // Intersection observer for scroll sections
  useEffect(() => {
    const observerOptions = {
      rootMargin: "-120px 0px -60% 0px",
      threshold: [0.1, 0.5]
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
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
  
  // Simple gray box placeholder component
  const GrayBoxPlaceholder = ({ className = "", ratio = 16/9, label = "" }: { className?: string, ratio?: number, label?: string }) => (
    <AspectRatio ratio={ratio} className={`bg-[#E5E7EB] flex items-center justify-center ${className}`}>
      {label && <p className="text-gray-500 text-lg">{label}</p>}
    </AspectRatio>
  );

  return (
    <ProductLayout modelName="V 635 EB">
      {/* 1. Hero Section */}
      <div id="hero-section" className="relative w-full" style={{ maxHeight: '60vh' }}>
        <GrayBoxPlaceholder ratio={16/9} label="V 635 EB – Hero" className="h-full max-h-[60vh]" />
      </div>
      
      {/* Left-hand dot navigation */}
      <nav className="hidden lg:flex flex-col items-center fixed left-8 top-1/2 transform -translate-y-1/2 z-10 space-y-8">
        {sections.map(section => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="flex flex-col items-center space-y-3 group transition-colors"
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
      
      <div className="container mx-auto px-4">
        {/* 2. Highlights Section */}
        <section id="highlights" className="py-24 scroll-mt-8">
          <h2 className="text-2xl font-semibold mb-8 text-center">Highlights</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
        
        {/* 3. Technical Specs Block */}
        <section className="py-12 border-t border-b">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(technicalData).map(([key, value]) => (
              <div key={key} className="flex flex-col">
                <span className="text-sm text-gray-600">{key}</span>
                <p className="font-semibold">{value}</p>
              </div>
            ))}
          </div>
        </section>
        
        {/* 4. Grundriss Section */}
        <section id="grundriss" className="py-24 scroll-mt-8">
          <h2 className="text-2xl font-semibold mb-8">Grundriss</h2>
          <GrayBoxPlaceholder ratio={16/9} label="Grundriss V 635 EB" />
        </section>
        
        {/* 5. Innenraum Section */}
        <section id="innenraum" className="py-24 scroll-mt-8 border-t">
          <h2 className="text-2xl font-semibold mb-8">Innenraum</h2>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3">
              <GrayBoxPlaceholder ratio={16/9} label="Innenraum" />
            </div>
            <div className="lg:col-span-2">
              <ul className="space-y-6 divide-y">
                <li>
                  <div className="font-medium mb-2">Kommunikation</div>
                  <div className="text-gray-600">Boxen, LED-Lampen und USB-Steckdosen</div>
                </li>
                <li className="pt-6">
                  <div className="font-medium mb-2">Spüle</div>
                  <div className="text-gray-600">Mineralstoff-Spüle</div>
                </li>
                <li className="pt-6">
                  <div className="font-medium mb-2">Dinetten-Tisch</div>
                  <div className="text-gray-600">Mit abgesenkter Ablage</div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* 6. Polster Section */}
        <section id="polster" className="py-24 scroll-mt-8 border-t">
          <h2 className="text-2xl font-semibold mb-8">Polster</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {["Eco-Leder Schwarz", "Eco-Leder Beige", "Stoff-Kombination Grau"].map((type, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden">
                <GrayBoxPlaceholder ratio={1} label="Polster" />
                <div className="p-3 text-center">
                  <p>{type}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* 7. Serienausstattung Section */}
        <section id="serienausstattung" className="py-24 scroll-mt-8 border-t">
          <h2 className="text-2xl font-semibold mb-8">Serienausstattung</h2>
          <Tabs defaultValue="chassis" className="w-full">
            <TabsList className="w-full flex flex-wrap h-auto mb-8 bg-gray-100 p-1">
              {Object.entries(equipmentTabs).slice(0, 3).map(([key, label]) => (
                <TabsTrigger key={key} value={key} className="text-sm flex-grow">
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
      </div>
    </ProductLayout>
  );
};

export default VanModelDetail;
