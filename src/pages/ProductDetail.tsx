
import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { ProductLayout } from "@/components/ProductLayout";
import { ComparisonProvider } from "@/context/ComparisonContext";
import { ComparisonBar } from "@/components/comparison/ComparisonBar";
import { ComparisonModal } from "@/components/comparison/ComparisonModal";
import { SidebarNavigation } from "@/components/SidebarNavigation";
import { modelsData, hasLayouts, hasInterior, hasUpholstery, hasEquipment } from "@/data/modelsData";
import { getHeroContent } from "@/utils/heroContent";

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
    { id: "model-hero", label: "Hero" },
    { id: "model-hero-section", label: "Model Hero" },
    { id: "model-intro", label: "Intro" },
    { id: "model-highlights", label: "Highlights" },
    { id: "model-floorplans", label: "Grundrisse" },
    { id: "model-interior-hotspots", label: "Innenraum" },
    { id: "model-upholstery", label: "Polster" },
    { id: "model-equipment-tabs", label: "Serienausstattung" },
    { id: "model-final-cta", label: "CTA" },
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
  
  // Get the appropriate intro title based on model - return empty for Profila T models
  const getIntroTitle = () => {
    if (modelDetails.id === "profila-t-fiat" || modelDetails.id === "profila-t-mercedes") {
      return ""; // Hide the intro title for Profila T models
    }
    return `Für Deine beste Zeit. Eura Mobil ${modelDetails.name}`;
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
          {/* 2. New Model Hero Section */}
          <section id="model-hero-section" className="my-12 text-center">
            <div className="text-lg md:text-xl font-medium text-gray-600 mb-2">
              Feel free!
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Profila T Teilintegrierte
            </h2>
          </section>

          {/* 3. Intro Section */}
          <ModelIntro 
            title={getIntroTitle()}
            content={modelDetails.intro}
          />

          {/* 4. Highlights Section */}
          <ModelHighlights highlights={modelDetails.highlights} />

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
                {modelDetails.galleryImages.map((_, index) => (
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
          
          {/* 5. Floorplans Section */}
          {hasLayouts(modelDetails) && (
            <ModelFloorplans 
              floorplans={modelDetails.layouts}
              showComparison={hasMultipleLayouts}
            />
          )}
          
          {/* 6. Interior Hotspots Section */}
          {hasInterior(modelDetails) && (
            <ModelInteriorHotspots interiorItems={modelDetails.interior} />
          )}
          
          {/* 7. Upholstery Section */}
          {hasUpholstery(modelDetails) && (
            <ModelUpholstery upholsteryTypes={modelDetails.upholsteryTypes} />
          )}
          
          {/* 8. Equipment Tabs Section */}
          {hasEquipment(modelDetails) && (
            <ModelEquipmentTabs equipment={modelDetails.equipment} />
          )}

          {/* 9. Final CTA Block */}
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
