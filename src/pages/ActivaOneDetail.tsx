
import React, { useState } from "react";
import { ProductLayout } from "@/components/ProductLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Download, Circle } from "lucide-react";
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
import { ComparisonBar } from "@/components/comparison/ComparisonBar";
import { ComparisonModal } from "@/components/comparison/ComparisonModal";
import { SelectableModelCard } from "@/components/comparison/SelectableModelCard";
import { useComparison } from "@/context/ComparisonContext";

const ActivaOneDetail = () => {
  const isMobile = useIsMobile();
  const [isComparisonModalOpen, setIsComparisonModalOpen] = useState(false);
  
  // Simple gray box placeholder component
  const GrayBoxPlaceholder = ({ className = "", ratio = 16/9 }: { className?: string, ratio?: number }) => (
    <AspectRatio ratio={ratio} className={`bg-[#E5E7EB] ${className}`}>
      <div className="flex items-center justify-center h-full text-gray-600">
        Hotspot Bild Placeholder – Innenraum interaktiv
      </div>
    </AspectRatio>
  );

  // Simple gray box placeholder component without text
  const EmptyGrayBoxPlaceholder = ({ className = "", ratio = 16/9 }: { className?: string, ratio?: number }) => (
    <AspectRatio ratio={ratio} className={`bg-[#E5E7EB] ${className}`} />
  );
  
  // Floor plans data
  const floorplans = [
    { id: "activa-one-690-hb", name: "AO 690 HB", length: "6,99 m", sleepingPlaces: "6" },
    { id: "activa-one-570-hs", name: "AO 570 HS", length: "5,99 m", sleepingPlaces: "4" },
    { id: "activa-one-650-hs", name: "AO 650 HS", length: "6,50 m", sleepingPlaces: "4" },
    { id: "activa-one-690-vb", name: "AO 690 VB", length: "6,99 m", sleepingPlaces: "6" },
    { id: "activa-one-630-ls", name: "AO 630 LS", length: "6,44 m", sleepingPlaces: "5" }
  ];

  return (
    <ProductLayout modelName="Activa One">
      {/* Full-width Hero Section */}
      <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-12">
        <div className="relative bg-[#E5E7EB] h-[60vh] md:h-[70vh] flex items-center justify-center">
          <div className="text-center text-black z-10">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">Activa One</h1>
            <p className="text-xl md:text-2xl lg:text-3xl">Entspannung nach Plan</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto overflow-visible">
        {/* Intro Section */}
        <section id="highlights" className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-2">Ein Zuhause für Groß und Klein.</h2>
            <h3 className="text-xl md:text-2xl text-center text-black mb-8">Activa One Alkoven Wohnmobile</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <div className="space-y-8 text-black leading-relaxed">
                <div>
                  <p className="text-black">
                    Die verschiedenen Modelle der Alkoven-Baureihe Activa One sind viel mehr als nur simple Reisemobile: 
                    Ihr frisches Interieur steigert noch den ersten Eindruck von robuster Großzügigkeit zu einem echten Gefühl von Freiheit. 
                    Egal, aus welcher Perspektive man den Innenraum des Activa One betrachtet – auf insgesamt vier unterschiedlichen Grundrissen 
                    ergibt sich eine Vielzahl praktischer Stau- und Ablagemöglichkeiten. Der 37 cm hohe Doppelboden packt auch das große 
                    Familiengepäck sicher ein. Und da an dieser Baureihe alles perfekt geplant und professionell umgesetzt ist, 
                    beginnt die Entspannung sofort mit der Abfahrt.
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
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0 mt-1">
                    <Circle className="h-3 w-3 text-gray-600 fill-current" />
                  </div>
                  <p className="text-black">Ausziehbares Doppelstockbett (AO 690 VB)</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0 mt-1">
                    <Circle className="h-3 w-3 text-gray-600 fill-current" />
                  </div>
                  <p className="text-black">Maximaler Stauraum dank 37 cm hohem Doppelboden</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0 mt-1">
                    <Circle className="h-3 w-3 text-gray-600 fill-current" />
                  </div>
                  <p className="text-black">Isolierter und beheizter Alkoven</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0 mt-1">
                    <Circle className="h-3 w-3 text-gray-600 fill-current" />
                  </div>
                  <p className="text-black">Praktische Familien-Grundrisse</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0 mt-1">
                    <Circle className="h-3 w-3 text-gray-600 fill-current" />
                  </div>
                  <p className="text-black">Wassertanks im isolierten und beheizten Doppelboden</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0 mt-1">
                    <Circle className="h-3 w-3 text-gray-600 fill-current" />
                  </div>
                  <p className="text-black">Jetzt mit 2x Isofix in Fahrtrichtung (außer HS-Grundrisse)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Data Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8 bg-gray-50 p-4 rounded-lg mx-4">
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
        <section id="grundrisse" className="my-10">
          <h2 className="text-2xl font-semibold mb-4">Grundrisse</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {floorplans.map((floorplan) => (
              <SelectableModelCard
                key={floorplan.id}
                id={floorplan.id}
                name={floorplan.name}
                length={floorplan.length}
                sleepingPlaces={floorplan.sleepingPlaces}
              />
            ))}
          </div>
        </section>
        
        {/* Innenraum (Interior) Section */}
        <section id="innenraum" className="my-10">
          <h2 className="text-2xl font-semibold mb-6">Innenraum</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <Card className="overflow-hidden border shadow-sm">
              <AspectRatio ratio={1/1} className="bg-gray-200" />
              <CardContent className="p-4">
                <h3 className="font-medium mb-1">Deko-Pack "Beach Home"</h3>
                <p className="text-gray-600 text-sm">
                  Das optionale Deko-Paket mit farbiger Wandverkleidung, dekorativen Segeltauen, 
                  zusätzlicher Alkovenverblendung inkl. Stautaschen verleiht dem Activa One eine 
                  ebenso wertige wie frische Premium-Atmosphäre.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
        
        {/* Polster (Upholstery) Section */}
        <section id="polster" className="my-10">
          <h2 className="text-2xl font-semibold mb-4">Polster</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <AspectRatio ratio={4/3} className="bg-gray-200" />
              <div className="p-3 text-center">
                <h3 className="font-medium">Polster Milano – Dekoration Lasca</h3>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <AspectRatio ratio={4/3} className="bg-gray-200" />
              <div className="p-3 text-center">
                <h3 className="font-medium">Polster Dara</h3>
              </div>
            </div>
          </div>
        </section>
        
        {/* Serienausstattung (Standard Equipment) Section */}
        <section id="serienausstattung" className="my-10 pt-8">
          <h2 className="text-2xl font-semibold mb-6">Serienausstattung</h2>
          <Tabs defaultValue="chassis" className="w-full">
            <TabsList className="w-full flex flex-wrap h-auto mb-4 bg-gray-100 p-1">
              <TabsTrigger value="chassis" className="text-sm flex-grow">
                Chassis
              </TabsTrigger>
              <TabsTrigger value="aufbau" className="text-sm flex-grow">
                Aufbau
              </TabsTrigger>
              <TabsTrigger value="wohnwelt" className="text-sm flex-grow">
                Wohnwelt
              </TabsTrigger>
              <TabsTrigger value="kueche" className="text-sm flex-grow">
                Küche
              </TabsTrigger>
              <TabsTrigger value="waschraum" className="text-sm flex-grow">
                Waschraum
              </TabsTrigger>
              <TabsTrigger value="wasserinstallation" className="text-sm flex-grow">
                Wasserinstallation
              </TabsTrigger>
              <TabsTrigger value="elektroinstallation" className="text-sm flex-grow">
                Elektroinstallation
              </TabsTrigger>
            </TabsList>
            <TabsContent value="chassis" className="mt-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-600">Text Placeholder – Chassis</p>
              </div>
            </TabsContent>
            <TabsContent value="aufbau" className="mt-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-600">Text Placeholder – Aufbau</p>
              </div>
            </TabsContent>
            <TabsContent value="wohnwelt" className="mt-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-600">Text Placeholder – Wohnwelt</p>
              </div>
            </TabsContent>
            <TabsContent value="kueche" className="mt-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-600">Text Placeholder – Küche</p>
              </div>
            </TabsContent>
            <TabsContent value="waschraum" className="mt-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-600">Text Placeholder – Waschraum</p>
              </div>
            </TabsContent>
            <TabsContent value="wasserinstallation" className="mt-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-600">Text Placeholder – Wasserinstallation</p>
              </div>
            </TabsContent>
            <TabsContent value="elektroinstallation" className="mt-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-600">Text Placeholder – Elektroinstallation</p>
              </div>
            </TabsContent>
          </Tabs>
        </section>
      </div>

      {/* Comparison Modal */}
      <ComparisonModal 
        open={isComparisonModalOpen}
        onOpenChange={setIsComparisonModalOpen}
      />

      {/* Comparison Bar */}
      <ComparisonBar 
        onCompareClick={() => setIsComparisonModalOpen(true)}
      />
    </ProductLayout>
  );
};

export default ActivaOneDetail;
