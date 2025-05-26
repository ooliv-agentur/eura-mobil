
import React, { useState } from "react";
import { ProductLayout } from "@/components/ProductLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Download, Circle, MapPin } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselIndicators,
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";

const ProfilaTDetail = () => {
  const isMobile = useIsMobile();
  const [isComparisonModalOpen, setIsComparisonModalOpen] = useState(false);
  
  // Simple gray box placeholder component without text
  const EmptyGrayBoxPlaceholder = ({ className = "", ratio = 16/9 }: { className?: string, ratio?: number }) => (
    <AspectRatio ratio={ratio} className={`bg-[#E5E7EB] ${className}`} />
  );
  
  // Floor plans data
  const floorplans = [
    { id: "profila-t-720-eb", name: "PT 720 EB", length: "7,41 m", sleepingPlaces: "2" },
    { id: "profila-t-695-eb", name: "PT 695 EB", length: "6,99 m", sleepingPlaces: "2" },
    { id: "profila-t-675-sb", name: "PT 675 SB", length: "6,99 m", sleepingPlaces: "2" },
    { id: "profila-t-720-qf", name: "PT 720 QF", length: "7,58 m", sleepingPlaces: "2" },
    { id: "profila-t-720-ef", name: "PT 720 EF", length: "7,41 m", sleepingPlaces: "2" },
    { id: "profila-t-660-eb", name: "PT 660 EB", length: "6,99 m", sleepingPlaces: "2" }
  ];

  // Interior data
  const interiorItems = [
    { title: "726 EF Chalet – Rustico" },
    { title: "720 EF Chalet – Rustico" },
  ];

  // Upholstery data
  const upholsteryItems = [
    { title: "Polster Como", subtitle: "Deko: Maka" },
    { title: "Polster Milano", subtitle: "Deko: Lasca" },
    { title: "Polster Pisa", subtitle: "Deko: Rana" },
    { title: "Polster Dara", subtitle: "Deko: Maka" },
    { title: "Polster Bergamo", subtitle: "Deko: Evorno" },
  ];

  // Equipment data for accordion
  const equipmentData = {
    chassis: [
      "140 PS Motor, Euro 6d-Final",
      "CCS Breitspur-Tiefrahmen (1.980 mm)",
      "ESP inkl. Traction+, Hill-Descent-Control",
      "16\" Räder, Tagfahrlicht, Tempomat"
    ],
    fahrerhaus: [
      "Sitzbezug Velours mit Echtleder-Optik",
      "Armaturenbrett im Fahrzeugdesign",
      "Elektrische Fensterheber",
      "Zentralverriegelung mit Fernbedienung"
    ],
    aufbau: [
      "Winterfester, beheizter Doppelboden",
      "Wände/Dach/Boden: 30/32/38mm",
      "Große Stauräume durch Garagenabsenkung",
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
      "Ergonomisch optimierte Waschräume",
      "Duschkabine, Spiegelschrank, Cassetten-WC"
    ],
    wasserinstallation: [
      "Isolierte & beheizte Wassertanks",
      "Elektr. Abwassertank-Entleerung",
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
    fahrerhaus: "Fahrerhaus",
    aufbau: "Aufbau",
    wohnwelt: "Wohnwelt",
    kueche: "Küche",
    waschraum: "Waschraum",
    wasserinstallation: "Wasserinstallation",
    elektroinstallation: "Elektroinstallation"
  };

  return (
    <ProductLayout modelName="Profila T">
      {/* Full-width Hero Section */}
      <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-12">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left column - Text */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Profila T</h1>
              <p className="text-xl md:text-2xl text-gray-600">Offen, großzügig, frei</p>
            </div>
            {/* Right column - Image hotspot */}
            <div>
              <EmptyGrayBoxPlaceholder ratio={16/9} />
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        {/* Intro Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="space-y-8 text-black leading-relaxed">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">Profila T Teilintegrierte</h2>
                <p className="text-black mb-8">
                  Unbeschwert und ohne Hetze die Welt erfahren, dafür eignen sich sämtliche Modelle der Baureihe Profila T besonders gut. 
                  Neben ihrem eleganten und schnittigen Design bestechen sie durch die niedrige <strong>Gesamthöhe von weniger als 2,90 m</strong> bei 
                  einer Stehhöhe von 1,97 m im Innenraum. In ihrem <strong>Ladevolumen von 1.500 bis 3.000 Liter</strong> unterscheiden sie sich 
                  deutlich voneinander, während der bequeme, niedrige „Coupé-Einstieg" mit den integrierten und voll isolierten 
                  Einstiegsstufen aus GFK wieder allen gemeinsam ist.
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
                <p className="text-black">Winterfester, beheizter Doppelboden</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0 mt-1">
                  <Circle className="h-3 w-3 text-gray-600 fill-current" />
                </div>
                <p className="text-black">Große Stauräume durch Garagenabsenkung</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0 mt-1">
                  <Circle className="h-3 w-3 text-gray-600 fill-current" />
                </div>
                <p className="text-black">Isolierte & beheizte Wassertanks</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0 mt-1">
                  <Circle className="h-3 w-3 text-gray-600 fill-current" />
                </div>
                <p className="text-black">Elektr. Abwassertank-Entleerung</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0 mt-1">
                  <Circle className="h-3 w-3 text-gray-600 fill-current" />
                </div>
                <p className="text-black">Isofix (grundrissabhängig)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Data Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8 bg-gray-50 p-4 rounded-lg">
          <div className="flex flex-col items-center p-2">
            <span className="text-sm text-gray-600">Länge</span>
            <span className="font-semibold text-lg">6,99 – 7,58 m</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <span className="text-sm text-gray-600">Sitzplätze</span>
            <span className="font-semibold text-lg">2-4</span>
          </div>
          <div className="flex flex-col items-center p-2">
            <span className="text-sm text-gray-600">Schlafplätze</span>
            <span className="font-semibold text-lg">2</span>
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
              {interiorItems.map((item, index) => (
                <CarouselItem key={index} className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <Card className="overflow-hidden border shadow-sm">
                    <AspectRatio ratio={1/1} className="bg-gray-200" />
                    <CardContent className="p-4">
                      <h3 className="font-medium mb-1">{item.title}</h3>
                    </CardContent>
                  </Card>
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
        
        {/* Polster (Upholstery) Section */}
        <section id="polster" className="my-10">
          <h2 className="text-2xl font-semibold mb-4">Polster</h2>
          <Carousel className="w-full" showIndicators={true}>
            <CarouselContent>
              {upholsteryItems.map((item, index) => (
                <CarouselItem key={index} className="basis-full sm:basis-1/2 md:basis-1/3">
                  <div className="bg-gray-100 rounded-lg overflow-hidden">
                    <AspectRatio ratio={4/3} className="bg-gray-200" />
                    <div className="p-3 text-center">
                      <h3 className="font-medium">{item.title}</h3>
                      {item.subtitle && <p className="text-sm text-gray-600 mt-1">{item.subtitle}</p>}
                    </div>
                  </div>
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

        {/* CTA Section */}
        <section className="my-16">
          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Interesse am Profila T?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/konfigurator">
                  Jetzt konfigurieren
                </Link>
              </Button>
              
              <Button variant="outline" size="lg" asChild>
                <Link to="/haendler">
                  <MapPin className="mr-2 h-4 w-4" />
                  Händler finden
                </Link>
              </Button>
              
              <Button variant="outline" size="lg" asChild>
                <Link to="/berater">
                  Beratung starten
                </Link>
              </Button>
            </div>
          </div>
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

export default ProfilaTDetail;
