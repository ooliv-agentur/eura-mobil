
import React from "react";
import { ProductLayout } from "@/components/ProductLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Download } from "lucide-react";
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
import { Separator } from "@/components/ui/separator";
import { useIsMobile } from "@/hooks/use-mobile";
import { Skeleton } from "@/components/ui/skeleton";

const ActivaOneDetail = () => {
  const isMobile = useIsMobile();
  
  // Simple gray box placeholder component
  const GrayBoxPlaceholder = ({ className = "", ratio = 16/9 }: { className?: string, ratio?: number }) => (
    <AspectRatio ratio={ratio} className={`bg-[#E5E7EB] ${className}`}/>
  );
  
  // Equipment sections
  const equipment = {
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
  };

  // Equipment section tab keys in German
  const equipmentTabs = {
    chassis: "Chassis",
    body: "Aufbau",
    livingArea: "Wohnwelt",
    kitchen: "Küche",
    bathroom: "Waschraum",
    installation: "Wasserinstallation",
    electrical: "Elektroinstallation"
  };

  // Floor plans data
  const floorplans = [
    { name: "AO 570 HS", length: "5,99 m", sleepingPlaces: "4" },
    { name: "AO 630 LS", length: "6,44 m", sleepingPlaces: "5" },
    { name: "AO 650 HS", length: "6,50 m", sleepingPlaces: "4" },
    { name: "AO 690 HB", length: "6,99 m", sleepingPlaces: "6" },
    { name: "AO 690 VB", length: "6,99 m", sleepingPlaces: "6" }
  ];

  // Helper function for equipment rendering on mobile
  const renderEquipmentMobile = () => {
    return (
      <Accordion type="single" collapsible className="w-full">
        {Object.entries(equipment).map(([key, items]) => (
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
    const equipmentKeys = Object.keys(equipment);
    
    return (
      <Tabs defaultValue={equipmentKeys[0]} className="w-full">
        <TabsList className="w-full flex flex-wrap h-auto mb-4 bg-gray-100 p-1">
          {equipmentKeys.map((key) => (
            <TabsTrigger key={key} value={key} className="text-sm flex-grow">
              {equipmentTabs[key as keyof typeof equipmentTabs]}
            </TabsTrigger>
          ))}
        </TabsList>
        {Object.entries(equipment).map(([key, items]) => (
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
    <ProductLayout modelName="Activa One">
      {/* Hero Section */}
      <div className="relative">
        <div className="w-full h-72 sm:h-96">
          <GrayBoxPlaceholder ratio={21/9} className="h-full" />
        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-6">
        {/* Model Title and Introduction */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold">Activa One</h1>
          <p className="text-gray-700 mt-3 text-lg">
            Die verschiedenen Modelle der Alkoven-Baureihe Activa One sind viel mehr als nur simple Reisemobile: 
            Ihr frisches Interieur steigert noch den ersten Eindruck von robuster Großzügigkeit zu einem echten Gefühl von Freiheit. 
            Egal, aus welcher Perspektive man den Innenraum des Activa One betrachtet – auf insgesamt vier unterschiedlichen Grundrissen 
            ergibt sich eine Vielzahl praktischer Stau- und Ablagemöglichkeiten. Der 37 cm hohe Doppelboden packt auch das große 
            Familiengepäck sicher ein. Und da an dieser Baureihe alles perfekt geplant und professionell umgesetzt ist, 
            beginnt die Entspannung sofort mit der Abfahrt.
          </p>
        </div>
        
        {/* Technical Data Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6 bg-gray-50 p-4 rounded-lg">
          <div className="flex flex-col items-center p-2">
            <span className="text-sm text-gray-600">Länge</span>
            <span className="font-semibold text-lg">5,99 – 7,57 m</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <span className="text-sm text-gray-600">Sitzplätze</span>
            <span className="font-semibold text-lg">4-6</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <span className="text-sm text-gray-600">Schlafplätze</span>
            <span className="font-semibold text-lg">4-6</span>
          </div>
        </div>
        
        {/* Highlights Section */}
        <section className="my-10">
          <h2 className="text-2xl font-semibold mb-4">Highlights der Baureihe</h2>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <ul className="space-y-3">
              <li className="flex gap-2">
                <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                <span>Ausziehbares Doppelstockbett (AO 690 VB)</span>
              </li>
              <li className="flex gap-2">
                <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                <span>Maximaler Stauraum dank 37 cm hohem Doppelboden</span>
              </li>
              <li className="flex gap-2">
                <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                <span>Isolierter und beheizter Alkoven</span>
              </li>
              <li className="flex gap-2">
                <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                <span>Praktische Familien-Grundrisse</span>
              </li>
              <li className="flex gap-2">
                <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                <span>Wassertanks im isolierten und beheizten Doppelboden</span>
              </li>
              <li className="flex gap-2">
                <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                <span>Jetzt mit 2x Isofix in Fahrtrichtung (außer HS-Grundrisse)</span>
              </li>
              <li className="flex gap-2">
                <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                <span>Beach Home Interieur optional</span>
              </li>
            </ul>
          </div>
        </section>
        
        {/* Gallery Section with placeholders */}
        <section className="my-10">
          <h2 className="text-2xl font-semibold mb-4">Galerie</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <GrayBoxPlaceholder ratio={4/3} />
            <GrayBoxPlaceholder ratio={4/3} />
            <GrayBoxPlaceholder ratio={4/3} />
            <GrayBoxPlaceholder ratio={4/3} />
          </div>
        </section>
        
        {/* Grundrisse (Floorplans) Section */}
        <section className="my-10">
          <h2 className="text-2xl font-semibold mb-4">Grundrisse</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {floorplans.map((floorplan, index) => (
              <div key={index} className="border rounded-lg overflow-hidden shadow-sm">
                <GrayBoxPlaceholder ratio={4/3} />
                <div className="p-4">
                  <h3 className="font-medium text-lg">{floorplan.name}</h3>
                  <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
                    <div>
                      <span className="text-gray-600">Länge:</span> {floorplan.length}
                    </div>
                    <div>
                      <span className="text-gray-600">Schlafplätze:</span> {floorplan.sleepingPlaces}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Innenraum (Interior) Section */}
        <section className="my-10">
          <h2 className="text-2xl font-semibold mb-4">Innenraum</h2>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            <div className="lg:col-span-3">
              <GrayBoxPlaceholder ratio={16/9} />
            </div>
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg p-4 shadow-sm h-full">
                <h3 className="font-semibold mb-2">Beach Home Deko-Paket</h3>
                <p className="text-gray-600">
                  Farbige Wandverkleidung, dekorative Segeltaue, zusätzliche Alkovenverblendung mit Stautaschen - 
                  das Beach Home Deko-Paket verleiht Ihrem Activa One eine wertige, frische Premium-Atmosphäre.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Polster (Upholstery) Section */}
        <section className="my-10">
          <h2 className="text-2xl font-semibold mb-4">Polster</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <AspectRatio ratio={4/3} className="bg-gray-200" />
              <div className="p-3 text-center">
                <h3 className="font-medium">Milano</h3>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <AspectRatio ratio={4/3} className="bg-gray-200" />
              <div className="p-3 text-center">
                <h3 className="font-medium">Dara</h3>
              </div>
            </div>
          </div>
        </section>
        
        {/* Serienausstattung (Standard Equipment) Section */}
        <section className="my-10 pt-8">
          <h2 className="text-2xl font-semibold mb-6">Serienausstattung</h2>
          {isMobile ? renderEquipmentMobile() : renderEquipmentDesktop()}
        </section>
      </div>
    </ProductLayout>
  );
};

export default ActivaOneDetail;
