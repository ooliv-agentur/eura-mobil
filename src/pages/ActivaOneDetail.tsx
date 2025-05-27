
import React, { useState } from "react";
import { ProductLayout } from "@/components/ProductLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Download, Circle, Settings, MapPin, FileText } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Link } from "react-router-dom";
import { useWohnmobilberaterTrigger } from "@/hooks/useWohnmobilberaterTrigger";
import { useIsMobile } from "@/hooks/use-mobile";
import { Skeleton } from "@/components/ui/skeleton";
import { ComparisonBar } from "@/components/comparison/ComparisonBar";
import { ComparisonModal } from "@/components/comparison/ComparisonModal";
import { SelectableModelCard } from "@/components/comparison/SelectableModelCard";
import { useComparison } from "@/context/ComparisonContext";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselIndicators,
} from "@/components/ui/carousel";

const ActivaOneDetail = () => {
  const isMobile = useIsMobile();
  const [isComparisonModalOpen, setIsComparisonModalOpen] = useState(false);
  const { startBeraterFlow } = useWohnmobilberaterTrigger();
  
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

  // Equipment data for accordion
  const equipmentData = {
    chassis: [
      "140 PS Motor, Euro 6d-Final",
      "CCS Breitspur-Tiefrahmen (1.980 mm)",
      "ESP inkl. Traction+, Hill-Descent-Control",
      "16\" Räder, Tagfahrlicht, Tempomat"
    ],
    aufbau: [
      "Leichtbaudoppelboden, isoliert & beheizt",
      "Wände/Dach/Boden: 30/32/38mm",
      "Beheizter Alkoven mit klappbarem Boden",
      "2 Fenster + Sicherheitsnetz im Alkoven",
      "Karosserie GFK + Aluminium, winterfest EN 1646"
    ],
    wohnwelt: [
      "Möbeldekor Wildeiche & Strandweiß",
      "Oberschränke mit Geräuschdämpfung",
      "7-Zonen-Kaltschaummatratzen",
      "Fußboden mit Trittschalldämpfung"
    ],
    kueche: [
      "3-Flamm Kocher mit Zündung",
      "Kühlschrank 142 Liter",
      "Wasserhahn mit Anti-Tropf-Auslass"
    ],
    waschraum: [
      "Ergonomisch optimierte Mittelwaschräume",
      "Duschkabine, Spiegelschrank, Cassetten-WC"
    ],
    wasserinstallation: [
      "143–150 l Frischwasser, 150 l Abwasser (beheizt, isoliert)",
      "Schnellverschlussventile, Keramikkartuschen"
    ],
    elektroinstallation: [
      "80 Ah Gel-Batterie",
      "LED-Spots, 2× 230 V, 1× 12 V, 1× USB",
      "Ladegerät 21 A",
      "Haushaltslogik Lichtsystem"
    ]
  };

  const equipmentTitles = {
    chassis: "Chassis",
    aufbau: "Aufbau",
    wohnwelt: "Wohnwelt",
    kueche: "Küche",
    waschraum: "Waschraum",
    wasserinstallation: "Wasserinstallation",
    elektroinstallation: "Elektroinstallation"
  };

  const handleKonfiguratorClick = () => {
    window.open("https://eura.tef-kat.com/konfigurator-eura/Home/Start?culture=de-DE", "_blank", "noopener noreferrer");
  };
  
  const handleBeratungClick = () => {
    startBeraterFlow();
  };

  const handleCatalogueDownload = () => {
    // Placeholder functionality - would download the actual PDF
    console.log("Downloading catalogue for Activa One");
  };

  return (
    <ProductLayout modelName="Activa One">
      {/* Full-width Hero Section */}
      <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-12">
        <div className="relative bg-[#E5E7EB] h-[60vh] md:h-[70vh] flex items-center justify-center">
          <div className="text-center text-black z-10">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">Entspannung nach Plan</h1>
            <p className="text-xl md:text-2xl lg:text-3xl">Activa One</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto overflow-visible">
        {/* Intro Section */}
        <section id="highlights" className="mb-16">
          <div className="mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-8">
              Ein Zuhause für Groß und Klein.
              <br />
              Activa One Alkoven Wohnmobile
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <div className="space-y-8 text-black leading-relaxed">
                <div>
                  <p className="text-black">
                    Die verschiedenen Modelle der Alkoven-Baureihe Activa One sind viel mehr als nur simple Reisemobile: 
                    Ihr frisches Interieur steigert noch den ersten Eindruck von robuster Großzügigkeit zu einem echten Gefühl von Freiheit. 
                    Egal, aus welcher Perspektive man den Innenraum des Activa One betrachtet – auf insgesamt vier unterschiedlichen Grundrissen 
                    ergibt sich eine Vielzahl praktischer Stau- und Ablagemöglichkeiten. Der 37 cm hohe Doppelboden packt auch das große 
                    Familien­gepäck sicher ein. Und da an dieser Baureihe alles perfekt geplant und professionell umgesetzt ist, 
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
            <span className="font-semibold text-lg">5,99 – 6,99 m</span>
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
        
        {/* Gallery Section with horizontal scrolling Carousel */}
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
          <Carousel className="w-full" showIndicators={true}>
            <CarouselContent>
              <CarouselItem className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
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
              </CarouselItem>
            </CarouselContent>
            <div className="hidden md:flex justify-end gap-2 mt-2">
              <CarouselPrevious />
              <CarouselNext />
            </div>
            <CarouselIndicators />
          </Carousel>
        </section>
        
        {/* Polster (Upholstery) Section */}
        <section id="polster" className="my-10">
          <h2 className="text-2xl font-semibold mb-4">Polster</h2>
          <Carousel className="w-full" showIndicators={true}>
            <CarouselContent>
              <CarouselItem className="basis-full sm:basis-1/2 md:basis-1/3">
                <div className="bg-gray-100 rounded-lg overflow-hidden">
                  <AspectRatio ratio={4/3} className="bg-gray-200" />
                  <div className="p-3 text-center">
                    <h3 className="font-medium">Polster Milano – Dekoration Lasca</h3>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-full sm:basis-1/2 md:basis-1/3">
                <div className="bg-gray-100 rounded-lg overflow-hidden">
                  <AspectRatio ratio={4/3} className="bg-gray-200" />
                  <div className="p-3 text-center">
                    <h3 className="font-medium">Polster Dara</h3>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <div className="hidden md:flex justify-end gap-2 mt-2">
              <CarouselPrevious />
              <CarouselNext />
            </div>
            <CarouselIndicators />
          </Carousel>
        </section>
        
        {/* Serienausstattung (Standard Equipment) Section with Accordion */}
        <section id="serienausstattung" className="my-10 pt-8">
          <h2 className="text-2xl font-semibold mb-6">Serienausstattung</h2>
          <div className="space-y-4">
            {Object.entries(equipmentData).map(([key, items]) => (
              <Accordion type="single" collapsible className="w-full" key={key}>
                <AccordionItem value={key} className="border rounded-lg bg-white">
                  <AccordionTrigger className="px-4 py-3">
                    <span className="text-lg font-medium">{equipmentTitles[key as keyof typeof equipmentTitles]}</span>
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
        </section>
      </div>

      {/* Final CTA Block with PDF Catalogue */}
      <section id="model-final-cta" className="my-10 bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-center">Interessiert am Activa One?</h2>
        
        {/* PDF Catalogue Preview */}
        <div className="mb-6 flex justify-center">
          <div className="bg-white p-4 rounded-lg shadow-sm border max-w-xs">
            <div className="flex items-start gap-3">
              <div className="bg-gray-200 w-16 h-20 rounded flex items-center justify-center flex-shrink-0">
                <FileText size={24} className="text-gray-500" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-sm mb-1">Activa One Katalog</h3>
                <p className="text-xs text-gray-600 mb-2">Technische Daten, Grundrisse und Ausstattungsdetails</p>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="w-full"
                  onClick={handleCatalogueDownload}
                >
                  <Download size={14} />
                  PDF herunterladen
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Button 
            className="flex items-center justify-center gap-2"
            onClick={handleKonfiguratorClick}
          >
            <Settings size={18} />
            Jetzt konfigurieren
          </Button>
          <Button 
            variant="outline" 
            className="flex items-center justify-center gap-2" 
            asChild
          >
            <Link to="/haendler">
              <MapPin size={18} />
              Händler finden
            </Link>
          </Button>
          <Button 
            className="bg-blue-600 hover:bg-blue-700 flex items-center justify-center gap-2"
            onClick={handleBeratungClick}
          >
            Beratung starten
          </Button>
        </div>
      </section>

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
