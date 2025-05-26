
import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
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
import { ProductLayout } from "@/components/ProductLayout";
import { ComparisonProvider } from "@/context/ComparisonContext";
import { ComparisonBar } from "@/components/comparison/ComparisonBar";
import { ComparisonModal } from "@/components/comparison/ComparisonModal";
import { SelectableModelCard } from "@/components/comparison/SelectableModelCard";
import { SidebarNavigation } from "@/components/SidebarNavigation";
import { HighlightsSection } from "@/components/product/HighlightsSection";
import { modelsData, equipmentTabs, hasLayouts, hasInterior, hasUpholstery, hasEquipment } from "@/data/modelsData";
import { getHeroContent } from "@/utils/heroContent";

const ProductDetail = () => {
  const { modelId } = useParams();
  const [isComparisonOpen, setIsComparisonOpen] = useState(false);
  const location = useLocation();
  
  console.log("Current modelId from URL:", modelId);
  console.log("Available models in modelsData:", Object.keys(modelsData));
  
  const modelDetails = modelId && modelId in modelsData 
    ? modelsData[modelId as keyof typeof modelsData] 
    : modelsData["van"];
    
  console.log("Selected model details:", modelDetails.name, modelDetails.id);
  
  const hasMultipleLayouts = hasLayouts(modelDetails) && modelDetails.layouts.length > 1;
  
  const navigationItems = [
    { id: "highlights", label: "Highlights" },
    { id: "grundrisse", label: "Grundrisse" },
    { id: "innenraum", label: "Innenraum" },
    { id: "polster", label: "Polster" },
    { id: "serienausstattung", label: "Serienausstattung" },
  ];
  
  useEffect(() => {
    if (location.hash) {
      const timer = setTimeout(() => {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location.hash]);
  
  const EmptyGrayBoxPlaceholder = ({ className = "", ratio = 16/9 }: { className?: string, ratio?: number }) => (
    <AspectRatio ratio={ratio} className={`bg-[#E5E7EB] ${className}`} />
  );

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
            showComparison={hasMultipleLayouts}
          />
        ))}
      </div>
    );
  };
  
  const renderInterior = () => {
    if (!hasInterior(modelDetails)) return null;
    
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {modelDetails.interior.map((item, index) => (
          <Card key={index} className="overflow-hidden border shadow-sm">
            <AspectRatio ratio={1/1} className="bg-gray-200" />
            <CardContent className="p-4">
              <h3 className="font-medium mb-1">{item.name}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  };
  
  const renderUpholstery = () => {
    if (!hasUpholstery(modelDetails)) return null;
    
    const upholsteryData = modelDetails.id === "profila-t-mercedes" 
      ? [
          "Polster Como\nDekoration Maka",
          "Polster Milano\nDekoration Lasca", 
          "Polster Pisa\nDekoration Rana",
          "Polster Dara\nDekoration Maka",
          "Polster Bergamo\nDekoration Evorno"
        ]
      : modelDetails.upholsteryTypes;
    
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {upholsteryData.map((type, index) => (
          <div key={index} className="bg-[#E5E7EB] rounded-lg overflow-hidden">
            <AspectRatio ratio={4/3} className="h-40" />
            <div className="p-3">
              <h3 className="font-medium whitespace-pre-line">{type}</h3>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  const renderEquipment = () => {
    if (!hasEquipment(modelDetails)) return null;
    
    return (
      <div className="space-y-4">
        {Object.entries(modelDetails.equipment).map(([key, items]) => (
          <Accordion type="single" collapsible className="w-full" key={key}>
            <AccordionItem value={key} className="border rounded-lg bg-white">
              <AccordionTrigger className="px-4 py-3">
                <span className="text-lg font-medium">{equipmentTabs[key as keyof typeof equipmentTabs]}</span>
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
    );
  };

  const heroContent = getHeroContent(modelDetails);
  
  return (
    <ComparisonProvider>
      <ProductLayout modelName={modelDetails.name}>
        <SidebarNavigation items={navigationItems} />
        
        {/* Hero Section */}
        <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-12">
          <div className="relative bg-[#E5E7EB] h-[60vh] md:h-[70vh] flex items-center justify-center">
            <div className="text-center text-black z-10">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">{heroContent.title}</h1>
              <p className="text-xl md:text-2xl lg:text-3xl">{heroContent.subtitle}</p>
            </div>
          </div>
        </section>

        <div className="container mx-auto overflow-visible">
          <HighlightsSection modelDetails={modelDetails} />

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
          
          {/* Gallery Section */}
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
          
          {/* Grundrisse Section */}
          {hasLayouts(modelDetails) && (
            <section id="grundrisse" className="my-10">
              <h2 className="text-2xl font-semibold mb-4">Grundrisse</h2>
              {renderLayouts()}
            </section>
          )}
          
          {/* Innenraum Section */}
          {hasInterior(modelDetails) && (
            <section id="innenraum" className="my-10">
              <h2 className="text-2xl font-semibold mb-6">Innenraum</h2>
              {renderInterior()}
            </section>
          )}
          
          {/* Polster Section */}
          {hasUpholstery(modelDetails) && (
            <section id="polster" className="my-10">
              <h2 className="text-2xl font-semibold mb-4">Polstervarianten</h2>
              {renderUpholstery()}
            </section>
          )}
          
          {/* Serienausstattung Section */}
          {hasEquipment(modelDetails) && (
            <section id="serienausstattung" className="my-10 pt-8">
              <h2 className="text-2xl font-semibold mb-6">Serienausstattung</h2>
              {renderEquipment()}
            </section>
          )}
        </div>
        
        {/* Comparison components */}
        {hasMultipleLayouts && (
          <>
            <ComparisonBar onCompareClick={() => setIsComparisonOpen(true)} />
            <ComparisonModal 
              open={isComparisonOpen} 
              onOpenChange={setIsComparisonOpen} 
            />
          </>
        )}
      </ProductLayout>
    </ComparisonProvider>
  );
};

export default ProductDetail;
