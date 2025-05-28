
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
  category: CategoryType;
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
    title: "Vans & Kastenwagen",
    description: "Kompakte Vans sind wendig und alltagstauglich. Perfect für Paare und spontane Trips in die Stadt oder Natur.",
    benefits: ["Wendig & kompakt", "Alltagstauglich", "Parkplatzfreundlich"]
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
  
  // Filter out the current model from related models
  const relatedModels = relatedModelsByCategory[category].filter(
    model => model.id !== currentModelId
  );

  // Don't show section if no other models in category
  if (relatedModels.length === 0) {
    return null;
  }

  return (
    <section className="my-16 border border-gray-200 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Category Information */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center">
              <div className="w-6 h-6 border border-gray-400"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">{info.title}</h2>
          </div>
          
          <p className="text-gray-600 text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
            {info.description}
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {info.benefits.map((benefit, index) => (
              <span 
                key={index}
                className="border border-gray-300 text-gray-700 text-sm font-medium px-4 py-2 rounded"
              >
                {benefit}
              </span>
            ))}
          </div>
        </div>

        {/* Related Models */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-800">
            Weitere Modelle aus dieser Kategorie
          </h3>
          
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
              {relatedModels.map((model) => (
                <div key={model.id} className="w-full max-w-sm mx-auto">
                  <div className="border border-gray-200 overflow-hidden h-full flex flex-col">
                    <AspectRatio ratio={4/3} className="border-b border-gray-200">
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-12 h-12 border border-gray-300 mx-auto mb-2 flex items-center justify-center">
                            <div className="w-6 h-6 border border-gray-400"></div>
                          </div>
                          <span className="text-sm text-gray-500 font-medium">Modellbild</span>
                        </div>
                      </div>
                    </AspectRatio>
                    
                    <div className="p-6 flex-grow flex flex-col">
                      <h4 className="font-bold text-xl mb-3 text-gray-900">{model.name}</h4>
                      <p className="text-gray-600 mb-4 flex-grow line-clamp-3 leading-relaxed">
                        {model.description}
                      </p>
                      
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="text-center p-3 border border-gray-200">
                          <div className="text-sm text-gray-500 mb-1">Länge</div>
                          <div className="font-semibold text-gray-900">{model.length}</div>
                        </div>
                        <div className="text-center p-3 border border-gray-200">
                          <div className="text-sm text-gray-500 mb-1">Schlafplätze</div>
                          <div className="font-semibold text-gray-900">{model.sleepingPlaces}</div>
                        </div>
                      </div>
                      
                      <Button asChild variant="outline" className="w-full font-medium py-3 transition-colors">
                        <Link to={`/modelle/${model.id}`} className="flex items-center justify-center gap-2">
                          Mehr erfahren
                          <ChevronRight size={16} />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
