
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, Users, Home, Car } from "lucide-react";
import { Link } from "react-router-dom";

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

// Updated model classification - Profila RS moved to teilintegriert
const relatedModelsByCategory: Record<CategoryType, RelatedModel[]> = {
  alkoven: [
    { id: "activa-one", name: "Activa One", length: "5,99-6,99 m", sleepingPlaces: "4-6", description: "Kompakte Alkoven-Serie für Familien" }
  ],
  teilintegriert: [
    { id: "profila-t-mercedes", name: "Profila T", length: "7,2-8,1 m", sleepingPlaces: "2-4", description: "Teilintegrierte auf Mercedes Basis" },
    { id: "profila-rs", name: "Profila RS", length: "7,2 m", sleepingPlaces: "3", description: "Kompakter Teilintegrierter" }
  ],
  integriert: [
    { id: "integra-line-fiat", name: "Integra Line", length: "7,5-8,1 m", sleepingPlaces: "2-4", description: "Luxuriöser Vollintegrierter" },
    { id: "integra-line-gt-mercedes", name: "Integra Line GT", length: "8,8 m", sleepingPlaces: "4", description: "Premium Vollintegrierter" },
    { id: "contura", name: "Contura", length: "8,8 m", sleepingPlaces: "4", description: "Exklusiver Vollintegrierter" }
  ],
  van: [
    { id: "van", name: "Van", length: "5,9 m", sleepingPlaces: "2", description: "Kompakter Kastenwagen" }
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
  ).slice(0, 2); // Show max 2 related models

  // Check if there are multiple models in this category (including current model)
  const totalModelsInCategory = relatedModelsByCategory[category].length;
  const hasMultipleModels = totalModelsInCategory > 1;

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

        {/* Related Models - Only show if there are other models in the category */}
        {relatedModels.length > 0 && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4 text-center">
              Weitere Modelle aus dieser Kategorie
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {relatedModels.map((model) => (
                <Card key={model.id} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{model.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm mb-3">{model.description}</p>
                    <div className="flex justify-between text-sm text-gray-500 mb-3">
                      <span>Länge: {model.length}</span>
                      <span>Schlafplätze: {model.sleepingPlaces}</span>
                    </div>
                    <Button variant="outline" size="sm" asChild className="w-full">
                      <Link to={`/modelle/${model.id}`} className="flex items-center justify-center gap-2">
                        Mehr erfahren
                        <ChevronRight size={14} />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Category Overview Link - Only show if there are multiple models in the category */}
        {hasMultipleModels && (
          <div className="text-center">
            <Button asChild>
              <Link to={info.overviewLink} className="flex items-center gap-2">
                Alle {info.title} ansehen
                <ChevronRight size={16} />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};
