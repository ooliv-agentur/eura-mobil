
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, Users, Home, Car } from "lucide-react";
import { Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselIndicators,
} from "@/components/ui/carousel";

type CategoryType = "alkoven" | "teilintegriert" | "integriert" | "van";

interface RelatedModel {
  id: string;
  name: string;
  length: string;
  sleepingPlaces: string;
  description: string;
}

interface ModelCategorySectionProps {
  currentModelId: string;
  category: CategoryType;
}

const categoryInfo = {
  alkoven: {
    title: "Alkoven Wohnmobile",
    icon: Home,
    description: "Alkoven-Wohnmobile bieten maximalen Wohnraum durch das charakteristische Bett über dem Fahrerhaus. Ideal für Familien mit 4-6 Personen.",
    benefits: ["Viel Schlafplatz", "Großzügiger Wohnraum", "Familienfreundlich"],
    overviewLink: "/modelle/alkoven"
  },
  teilintegriert: {
    title: "Teilintegrierte Wohnmobile", 
    icon: Car,
    description: "Teilintegrierte kombinieren Komfort mit Fahrdynamik. Das originale Fahrerhaus bleibt erhalten für optimale Sicht und Fahreigenschaften.",
    benefits: ["Gute Fahreigenschaften", "Kompakter Aufbau", "Vielseitig einsetzbar"],
    overviewLink: "/modelle/teilintegriert"
  },
  integriert: {
    title: "Integrierte Wohnmobile",
    icon: Users,
    description: "Vollintegrierte Wohnmobile bieten maximalen Luxus und Raumkomfort. Das Fahrerhaus ist vollständig in den Wohnraum integriert.",
    benefits: ["Maximaler Komfort", "Luxuriöse Ausstattung", "Großzügiges Raumgefühl"],
    overviewLink: "/modelle/integriert"
  },
  van: {
    title: "Vans & Kastenwagen",
    icon: Car,
    description: "Kompakte Vans sind wendig und alltagstauglich. Perfect für Paare und spontane Trips in die Stadt oder Natur.",
    benefits: ["Wendig & kompakt", "Alltagstauglich", "Parkplatzfreundlich"],
    overviewLink: "/modelle/vans"
  }
};

// Updated model classification - Added Contura to teilintegriert
const relatedModelsByCategory: Record<CategoryType, RelatedModel[]> = {
  alkoven: [
    { id: "activa-one", name: "Activa One", length: "5,99-6,99 m", sleepingPlaces: "4-6", description: "Praktische Wohnmobile für Einsteiger und Familien. Bis 6 Personen reisen mit optimiertem Platz." }
  ],
  teilintegriert: [
    { id: "profila-t-mercedes", name: "Profila T", length: "7,2-8,1 m", sleepingPlaces: "2-4", description: "Teilintegrierte auf Mercedes Basis" },
    { id: "profila-rs", name: "Profila RS", length: "7,2 m", sleepingPlaces: "3", description: "Großzügiger Wohnraum mit cleverer Raumaufteilung. Hoher Reisekomfort und flexible Nutzung." },
    { id: "contura", name: "Contura", length: "7,84 m", sleepingPlaces: "2", description: "Premium Teilintegrierter mit Luxusausstattung" }
  ],
  integriert: [
    { id: "integra-line-fiat", name: "Integra Line", length: "7,5-8,1 m", sleepingPlaces: "2-4", description: "Luxuriöser Vollintegrierter" },
    { id: "integra-line-gt-mercedes", name: "Integra Line GT", length: "8,8 m", sleepingPlaces: "4", description: "Premium Vollintegrierter" }
  ],
  van: [
    { id: "van", name: "Van", length: "5,9 m", sleepingPlaces: "2", description: "Kompakte Fahrzeuge für flexibles Reisen. Ideal für urbane Abenteuer mit maximaler Wendigkeit." }
  ]
};

// Function to determine category from model ID
const getCategoryFromModelId = (modelId: string): CategoryType => {
  if (modelId.includes("activa") || modelId.includes("alkoven")) return "alkoven";
  if (modelId.includes("profila")) return "teilintegriert";
  if (modelId.includes("integra") || modelId.includes("contura") || modelId.includes("xtura")) return "integriert";
  if (modelId.includes("van")) return "van";
  
  // Default fallback
  return "teilintegriert";
};

export const ModelCategorySection: React.FC<ModelCategorySectionProps> = ({ 
  currentModelId, 
  category: providedCategory 
}) => {
  const category = providedCategory || getCategoryFromModelId(currentModelId);
  const info = categoryInfo[category];
  const IconComponent = info.icon;
  
  // Filter out the current model from related models
  const relatedModels = relatedModelsByCategory[category].filter(
    model => model.id !== currentModelId
  );

  // Don't show section if no other models in category
  if (relatedModels.length === 0) {
    return null;
  }

  // Only show navigation and indicators if more than 4 models
  const showNavigation = relatedModels.length > 4;

  return (
    <section className="my-12 bg-gray-50 p-6 md:p-8 rounded-lg">
      <div className="max-w-4xl mx-auto">
        {/* Category Information */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <IconComponent className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">{info.title}</h2>
          </div>
          
          <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
            {info.description}
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {info.benefits.map((benefit, index) => (
              <span 
                key={index}
                className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
              >
                {benefit}
              </span>
            ))}
          </div>
        </div>

        {/* Related Models - Exact Homepage Carousel Style */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4 text-center">
            Weitere Modelle aus dieser Kategorie
          </h3>
          
          <Carousel className="w-full" showIndicators={showNavigation}>
            <CarouselContent>
              {relatedModels.map((model) => (
                <CarouselItem key={model.id} className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <div className="p-1">
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200 h-full">
                      <AspectRatio ratio={4/3} className="bg-gray-100">
                        <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                          <span className="text-sm text-gray-400">Modellbild</span>
                        </div>
                      </AspectRatio>
                      <div className="p-4">
                        <h4 className="font-semibold text-lg mb-2 text-gray-900">{model.name}</h4>
                        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                          {model.description}
                        </p>
                        <div className="flex justify-between items-center text-xs text-gray-500 mb-4">
                          <span>Länge: {model.length}</span>
                          <span>Schlafplätze: {model.sleepingPlaces}</span>
                        </div>
                        <Button variant="outline" asChild className="w-full">
                          <Link to={`/modelle/${model.id}`}>Mehr erfahren</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {showNavigation && (
              <div className="flex justify-center gap-2 mt-4">
                <CarouselPrevious />
                <CarouselNext />
              </div>
            )}
            {showNavigation && <CarouselIndicators />}
          </Carousel>
        </div>
      </div>
    </section>
  );
};
