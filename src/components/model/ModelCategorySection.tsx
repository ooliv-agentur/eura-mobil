
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";

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
  category?: CategoryType;
}

const categoryInfo = {
  alkoven: {
    title: "Alkoven Wohnmobile",
    description: "Alkoven-Wohnmobile bieten maximalen Wohnraum durch das charakteristische Bett über dem Fahrerhaus. Ideal für Familien mit 4-6 Personen.",
    benefits: ["Viel Schlafplatz", "Großzügiger Wohnraum", "Familienfreundlich"]
  },
  teilintegriert: {
    title: "Teilintegrierte Wohnmobile", 
    description: "Zu einem Teil kompakter gebaut, zum anderen Teil mit der überzeugenden Technik der Großen: Teilintegrierte Reisemobile von Eura Mobil bieten ein Höchstmaß an Komfort auch bei überschaubaren Abmessungen.",
    benefits: ["Kompakter Aufbau", "Überzeugende Technik", "Maximaler Komfort", "Überschaubare Abmessungen", "Hightech-Materialien"]
  },
  integriert: {
    title: "Integrierte Wohnmobile",
    description: "Vollintegrierte Wohnmobile bieten maximalen Luxus und Raumkomfort. Das Fahrerhaus ist vollständig in den Wohnraum integriert.",
    benefits: ["Maximaler Komfort", "Luxuriöse Ausstattung", "Großzügiges Raumgefühl"]
  },
  van: {
    title: "Vans",
    description: "Kompakte Vans sind wendig und alltagstauglich. Perfect für Paare und spontane Trips in die Stadt oder Natur.",
    benefits: ["Wendig & kompakt", "Alltagstauglich", "Parkplatzfreundlich"]
  }
};

// Updated model classification
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
    { id: "integra-line-gt-mercedes", name: "Integra Line GT", length: "8,8 m", sleepingPlaces: "4", description: "Premium Vollintegrierter" },
    { id: "integra", name: "Integra", length: "7,89-8,99 m", sleepingPlaces: "4", description: "Luxus-Reisemobil der Oberklasse" },
    { id: "xtura", name: "Xtura", length: "6,88 m", sleepingPlaces: "2", description: "4×4 Fernreisemobil für Abenteurer" }
  ],
  van: [
    { id: "van", name: "Van", length: "5,9 m", sleepingPlaces: "2", description: "Kompakte Fahrzeuge für flexibles Reisen. Ideal für urbane Abenteuer mit maximaler Wendigkeit." }
  ]
};

// Function to determine category from model ID
const getCategoryFromModelId = (modelId: string): CategoryType => {
  console.log("Getting category for modelId:", modelId);
  
  if (modelId.includes("activa")) return "alkoven";
  if (modelId.includes("profila") || modelId.includes("contura")) return "teilintegriert";
  if (modelId.includes("integra") || modelId.includes("xtura")) return "integriert";
  if (modelId.includes("van")) return "van";
  
  // Default fallback
  console.log("Using fallback category for modelId:", modelId);
  return "teilintegriert";
};

export const ModelCategorySection: React.FC<ModelCategorySectionProps> = ({ 
  currentModelId, 
  category: providedCategory 
}) => {
  console.log("ModelCategorySection rendering with:", { currentModelId, providedCategory });
  
  const category = providedCategory || getCategoryFromModelId(currentModelId);
  const info = categoryInfo[category];
  
  console.log("Determined category:", category);
  console.log("Category info:", info);
  
  // Get all models in this category
  const allModelsInCategory = relatedModelsByCategory[category];
  
  // Filter out the current model from related models
  const relatedModels = allModelsInCategory.filter(
    model => model.id !== currentModelId
  );

  console.log("All models in category:", allModelsInCategory);
  console.log("Related models after filtering:", relatedModels);

  // Always show the category section, even if no other models
  return (
    <section className="my-16">
      <div className="container mx-auto px-4">
        {/* Category Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-8 border-2 border-gray-400 rounded flex items-center justify-center">
              <div className="w-3 h-3 border border-gray-500 rounded-sm"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{info.title}</h2>
          </div>
          
          <p className="text-gray-600 text-lg mb-6 max-w-4xl mx-auto leading-relaxed">
            {info.description}
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {info.benefits.map((benefit, index) => (
              <span 
                key={index}
                className="border border-gray-300 text-gray-700 text-sm font-medium px-4 py-2 rounded-full"
              >
                {benefit}
              </span>
            ))}
          </div>
        </div>

        {/* Related Models Section - Only show if there are other models */}
        {relatedModels.length > 0 && (
          <>
            <h3 className="text-2xl font-bold mb-8 text-center text-gray-900">
              Weitere Modelle aus dieser Kategorie
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {relatedModels.map((model) => (
                <div key={model.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                  <AspectRatio ratio={16/9} className="bg-gray-200">
                  </AspectRatio>
                  
                  <div className="p-6">
                    <h4 className="font-bold text-xl mb-3 text-gray-900">{model.name}</h4>
                    <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                      {model.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6 text-center">
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Länge</div>
                        <div className="font-semibold text-gray-900">{model.length}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Schlafplätze</div>
                        <div className="font-semibold text-gray-900">{model.sleepingPlaces}</div>
                      </div>
                    </div>
                    
                    <Button asChild variant="outline" className="w-full flex items-center justify-center gap-2">
                      <Link to={`/modelle/${model.id}`}>
                        Mehr erfahren
                        <ChevronRight size={16} />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* If no other models, show a message */}
        {relatedModels.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-600">
              Entdecken Sie weitere Modelle in unserer {info.title.toLowerCase()} Kategorie.
            </p>
            <Button asChild className="mt-4">
              <Link to="/wohnmobiltypen">
                Alle Kategorien ansehen
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};
