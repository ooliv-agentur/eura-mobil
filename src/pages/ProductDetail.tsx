import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { ProductLayout } from "@/components/ProductLayout";
import { ComparisonProvider } from "@/context/ComparisonContext";
import { ComparisonBar } from "@/components/comparison/ComparisonBar";
import { ComparisonModal } from "@/components/comparison/ComparisonModal";
import { SidebarNavigation } from "@/components/SidebarNavigation";
import { modelsData, hasLayouts, hasInterior, hasUpholstery, hasEquipment } from "@/data/modelsData";
import { getHeroContent, getIntroSectionTitle, getMainHeading } from "@/utils/heroContent";

// Import modular components
import { ModelHero } from "@/components/model/ModelHero";
import { ModelIntro } from "@/components/model/ModelIntro";
import { ModelHighlights } from "@/components/model/ModelHighlights";
import { ModelFloorplans } from "@/components/model/ModelFloorplans";
import { ModelInteriorHotspots } from "@/components/model/ModelInteriorHotspots";
import { ModelUpholstery } from "@/components/model/ModelUpholstery";
import { ModelEquipmentTabs } from "@/components/model/ModelEquipmentTabs";
import { ModelFinalCTA } from "@/components/model/ModelFinalCTA";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselIndicators,
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";

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
    { id: "model-highlights", label: "Highlights" },
    { id: "model-floorplans", label: "Grundrisse" },
    { id: "model-interior-hotspots", label: "Innenraum" },
    { id: "model-upholstery", label: "Polster" },
    { id: "model-equipment-tabs", label: "Serienausstattung" },
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

  const heroContent = getHeroContent(modelDetails);
  const introSectionTitle = getIntroSectionTitle(modelDetails);
  const mainHeading = getMainHeading(modelDetails);
  
  // Custom intro content for specific models
  const getIntroContent = () => {
    if (modelDetails.id === 'contura') {
      return `In Gestalt eines automobilen Designs mit markanten Lichtkanten und flacher Anbindung zwischen Fahrerhaus und modernem GFK-Aufbau betont der Contura vom Start weg den hohen Anspruch seiner Konstrukteure.

Mit einem ALKO-Tiefrahmenfahrgestell verbunden mit Mercedes-Benz Fahrgestell trägt er einen besonders verwindungsfesten, langlebigen Aufbau, der mit Warmwasserheizung und stauraumoptimiertem Doppelboden zu Reisen von beliebiger Dauer in jeder Jahreszeit einlädt. Sorgfältige Detaillösungen zeigen sich nicht nur im Exterieur, sondern auch im Innenraum – darunter der optisch fließende Übergang der Oberschränke vom Wohnraum in das Fahrerhaus und die über der Decke vom „Starlight Dome" getaufte, zweiwellige Panoramaglasdachbeleuchtung, die exklusiv bei Eura Mobil zum Einsatz kommt.

Das Mercedes Chassis profitiert von den zahlreichen optionalen Assistenzsystem-Möglichkeiten wie dem Verkehrszeichenassistenten, dem Abstandsassistenten Distronic, dem aktiven Spurhalte-Assistenten und den Fernlichtassistenten. Das sprachgesteuerte MBUX Multimediasystem betont die komfortorientierte Ausstattung des Basisfahrzeugs.`;
    }
    if (modelDetails.id === 'profila-rs') {
      return `Mit 140 PS Motorisierung und mit State-of-the-art-Fahrzeugtechnik, wie ABS, ESP und 16''-Rädern am CCS-Breitspur-Tiefrahmen mit einer Spurweite von 1.980 mm und weiteren intelligenten Techniklösungen ausgestattet, lässt es sich in den Profila RS Modellen stressfrei in den Traumurlaub starten: Im Fahrerhaus mit seiner schnittigen Silhouette und dem bequemen Fahrersitz Platz genommen, kann kommen, was will – der verdienten Auszeit steht nichts mehr im Weg. Im Innenraum des Wohnmobils beeindruckt das großzügige Raumgefühl, das vor allem durch die in der Decke „versenkte" Hubbett (Serie) entsteht. Auch der Aufbau mit durchgehend isoliertem Leichtbaudoppelboden, holzfreier GFK-Wandung und dem leicht erreichbaren Serviceklappen lässt keine Wünsche an eine angenehme Reise offen.`;
    }
    if (modelDetails.id === 'integra-line-fiat') {
      return `Sich einfach mal ganz weit wegträumen – oder einfach gleich hinfahren! Diese Freiheit genießen Sie ganz individuell mit dem Integra Line: das Reisemobil für alle, die ihren eigenen Weg gehen und dabei die ursprüngliche Vielfalt der Landschaft genießen wollen. Für die, die herausragendes Design lieben, vor allem wenn es aus natürlichen Formen entsteht. Und auch für alle, die ihren Traum von individueller Freiheit in die Wirklichkeit verwandeln wollen. Das Fahrzeug schmiegt sich ganz einfach in die natürliche Umgebung ein und lässt dich keine Wünsche an Luxus und Komfort offen.`;
    }
    return modelDetails.intro;
  };

  // Get topLine for models that should have one
  const getTopLine = () => {
    if (modelDetails.id === 'contura') {
      return 'Der Wegbereiter Ihrer wertvollsten Zeit';
    }
    if (modelDetails.id === 'profila-rs') {
      return mainHeading;
    }
    if (modelDetails.id === 'profila-t-mercedes') {
      return 'Edel, exklusiv und elegant';
    }
    if (modelDetails.id === 'integra-line-fiat') {
      return 'Freiheit soll genossen werden.';
    }
    if (modelDetails.id === 'integra-line-gt-mercedes') {
      return 'DER GRAND TOURISMO IN DER KÖNIGSKLASSE';
    }
    if (modelDetails.id === 'integra') {
      return 'Der Freiheit ein Gesicht gegeben.';
    }
    if (modelDetails.id === 'xtura') {
      return 'Innovation und Design in reinster Form';
    }
    return undefined;
  };
  
  return (
    <ComparisonProvider>
      <ProductLayout modelName={modelDetails.name}>
        <SidebarNavigation items={navigationItems} />
        
        {/* 1. Hero Section */}
        <ModelHero 
          headline={heroContent.title}
          subline={heroContent.subtitle}
        />

        <div className="container mx-auto overflow-visible">
          {/* 2. Intro Section */}
          <ModelIntro 
            title={introSectionTitle}
            content={getIntroContent()}
            topLine={getTopLine()}
          />

          {/* 3. Highlights Section - Always show with fallback */}
          <ModelHighlights highlights={modelDetails.highlights || []} />

          {/* 4. Technical Data Summary */}
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
          
          {/* 5. Gallery Section - Always show */}
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
          
          {/* 6. Floorplans Section - Always show with fallback */}
          <ModelFloorplans 
            floorplans={modelDetails.layouts || []}
            showComparison={hasMultipleLayouts}
          />
          
          {/* 7. Interior Hotspots Section - Always show with fallback */}
          <ModelInteriorHotspots interiorItems={modelDetails.interior || []} />
          
          {/* 8. Upholstery Section - Always show with fallback */}
          <ModelUpholstery upholsteryTypes={modelDetails.upholsteryTypes || []} />
          
          {/* 9. Equipment Tabs Section - Always show with fallback */}
          <ModelEquipmentTabs equipment={modelDetails.equipment || {}} />

          {/* 10. Final CTA Block - Always show */}
          <ModelFinalCTA modelName={modelDetails.name} />
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
