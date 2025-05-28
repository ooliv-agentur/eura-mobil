
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
    description: "Alkoven-Wohnmobile bieten maximalen Wohnraum durch das charakteristische Bett über dem Fahrerhaus. Diese Bauart ist ideal für Familien mit 4-6 Personen und überzeugt durch optimale Raumnutzung. Das zusätzliche Bett im Alkoven schafft mehr Schlafplätze, ohne den Wohnraum zu beeinträchtigen. Durch die erhöhte Position entstehen auch praktische Staufächer und ein großzügiges Raumgefühl im Innenbereich.",
    benefits: ["Maximaler Schlafplatz", "Familienfreundlich", "Großzügiger Wohnraum", "Viel Stauraum", "Optimale Raumnutzung"]
  },
  teilintegriert: {
    title: "Teilintegrierte Wohnmobile", 
    description: "Zu einem Teil kompakter gebaut, zum anderen Teil mit der überzeugenden Technik der Großen: Teilintegrierte Reisemobile von Eura Mobil bieten ein Höchstmaß an Komfort auch bei überschaubaren Abmessungen. Sie vereinen die Wendigkeit kleinerer Fahrzeuge mit dem Luxus größerer Modelle. Das originale Fahrerhaus bleibt erhalten, was Kosten spart und gleichzeitig bewährte Fahreigenschaften garantiert. Moderne Hightech-Materialien und durchdachte Grundrisse sorgen für maximalen Wohnkomfort.",
    benefits: ["Kompakter Aufbau", "Überzeugende Technik", "Maximaler Komfort", "Überschaubare Abmessungen", "Hightech-Materialien", "Wendigkeit"]
  },
  integriert: {
    title: "Vollintegrierte Wohnmobile",
    description: "Vollintegrierte Wohnmobile bieten maximalen Luxus und Raumkomfort auf höchstem Niveau. Das Fahrerhaus ist vollständig in den Wohnraum integriert, wodurch ein durchgängiges und großzügiges Raumgefühl entsteht. Diese Premium-Kategorie überzeugt durch edle Materialien, luxuriöse Ausstattung und innovative Lösungen. Große Panoramafenster sorgen für lichtdurchflutete Innenräume, während die aerodynamische Form für bessere Fahreigenschaften und geringeren Kraftstoffverbrauch sorgt.",
    benefits: ["Maximaler Komfort", "Luxuriöse Ausstattung", "Großzügiges Raumgefühl", "Premium-Materialien", "Panoramafenster", "Aerodynamisch"]
  },
  van: {
    title: "Vans",
    description: "Kompakte Vans sind wendig und alltagstauglich - perfekt für Paare und spontane Trips in die Stadt oder Natur. Diese wendigen Fahrzeuge überzeugen durch ihre Vielseitigkeit und Parkplatzfreundlichkeit. Trotz kompakter Außenmaße bieten sie clevere Raumlösungen und durchdachte Ausstattung. Sie sind ideal für Wochenendtrips, Stadtbesuche oder längere Reisen zu zweit. Die hohe Wendigkeit macht sie zum perfekten Begleiter für jeden Tag und jedes Abenteuer.",
    benefits: ["Wendig & kompakt", "Alltagstauglich", "Parkplatzfreundlich", "Vielseitig", "Clevere Raumlösungen", "Spontane Reisen"]
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

  return (
    <section className="my-16">
      <div className="container mx-auto px-4">
        {/* Category Information - Always show */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 border border-gray-300 rounded flex items-center justify-center">
              <div className="w-6 h-6 border border-gray-400 rounded-sm"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">{info.title}</h2>
          </div>
          
          <p className="text-gray-600 text-lg mb-8 max-w-4xl mx-auto leading-relaxed">
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

        {/* Related Models - Only show if there are other models */}
        {relatedModels.length > 0 && (
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-8 text-center text-gray-800">
              Weitere Modelle aus dieser Kategorie
            </h3>
            
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
                {relatedModels.map((model) => (
                  <div key={model.id} className="border border-gray-200 rounded-lg overflow-hidden bg-white">
                    <AspectRatio ratio={4/3} className="bg-gray-200">
                    </AspectRatio>
                    
                    <div className="p-6">
                      <h4 className="font-bold text-xl mb-3 text-gray-900">{model.name}</h4>
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                        {model.description}
                      </p>
                      
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="text-center p-3 bg-gray-50 rounded">
                          <div className="text-xs text-gray-500 mb-1">Länge</div>
                          <div className="font-semibold text-gray-900">{model.length}</div>
                        </div>
                        <div className="text-center p-3 bg-gray-50 rounded">
                          <div className="text-xs text-gray-500 mb-1">Schlafplätze</div>
                          <div className="font-semibold text-gray-900">{model.sleepingPlaces}</div>
                        </div>
                      </div>
                      
                      <Button asChild variant="outline" className="w-full">
                        <Link to={`/modelle/${model.id}`} className="flex items-center justify-center gap-2">
                          Mehr erfahren
                          <ChevronRight size={16} />
                        </Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
