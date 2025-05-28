
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, Users, Home, Car } from "lucide-react";
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

  return (
    <section className="my-16 bg-gray-50 p-8 rounded-xl">
      <div className="max-w-6xl mx-auto">
        {/* Category Information */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <IconComponent className="w-8 h-8 text-blue-600" />
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
                className="bg-blue-100 text-blue-800 text-sm font-medium px-4 py-2 rounded-full"
              >
                {benefit}
              </span>
            ))}
          </div>
        </div>

        {/* Related Models - Centered Grid */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-800">
            Weitere Modelle aus dieser Kategorie
          </h3>
          
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
              {relatedModels.map((model) => (
                <div key={model.id} className="w-full max-w-sm mx-auto">
                  <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
                    <AspectRatio ratio={4/3} className="bg-gradient-to-br from-gray-100 to-gray-200">
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-12 h-12 bg-gray-300 rounded-lg mx-auto mb-2 flex items-center justify-center">
                            <Car className="w-6 h-6 text-gray-500" />
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
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                          <div className="text-sm text-gray-500 mb-1">Länge</div>
                          <div className="font-semibold text-gray-900">{model.length}</div>
                        </div>
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                          <div className="text-sm text-gray-500 mb-1">Schlafplätze</div>
                          <div className="font-semibold text-gray-900">{model.sleepingPlaces}</div>
                        </div>
                      </div>
                      
                      <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors">
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
