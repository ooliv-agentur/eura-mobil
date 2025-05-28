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
    description: "Alkoven-Wohnmobile bieten maximalen Wohnraum durch das charakteristische Bett über dem Fahrerhaus. Diese Bauart ist ideal für Familien mit 4-6 Personen und überzeugt durch optimale Raumnutzung.\n\nDas zusätzliche Bett im Alkoven schafft mehr Schlafplätze, ohne den Wohnraum zu beeinträchtigen. Durch die erhöhte Position entstehen auch praktische Staufächer und ein großzügiges Raumgefühl im Innenbereich.",
    benefits: ["Maximaler Schlafplatz", "Familienfreundlich", "Großzügiger Wohnraum", "Viel Stauraum", "Optimale Raumnutzung"]
  },
  teilintegriert: {
    title: "Teilintegrierte Wohnmobile", 
    description: "Zu einem Teil kompakter gebaut, zum anderen Teil mit der überzeugenden Technik der Großen: Teilintegrierte Reisemobile von Eura Mobil bieten ein Höchstmaß an Komfort auch bei überschaubaren Abmessungen. Sie vereinen die Wendigkeit kleinerer Fahrzeuge mit dem Luxus größerer Modelle.\n\nDas originale Fahrerhaus bleibt erhalten, was Kosten spart und gleichzeitig bewährte Fahreigenschaften garantiert. Moderne Hightech-Materialien und durchdachte Grundrisse sorgen für maximalen Wohnkomfort.",
    benefits: ["Kompakter Aufbau", "Überzeugende Technik", "Maximaler Komfort", "Überschaubare Abmessungen", "Hightech-Materialien", "Wendigkeit"]
  },
  integriert: {
    title: "Vollintegrierte Wohnmobile",
    description: "Vollintegrierte Wohnmobile bieten maximalen Luxus und Raumkomfort auf höchstem Niveau. Das Fahrerhaus ist vollständig in den Wohnraum integriert, wodurch ein durchgängiges und großzügiges Raumgefühl entsteht.\n\nDiese Premium-Kategorie überzeugt durch edle Materialien, luxuriöse Ausstattung und innovative Lösungen. Große Panoramafenster sorgen für lichtdurchflutete Innenräume, während die aerodynamische Form für bessere Fahreigenschaften und geringeren Kraftstoffverbrauch sorgt.",
    benefits: ["Maximaler Komfort", "Luxuriöse Ausstattung", "Großzügiges Raumgefühl", "Premium-Materialien", "Panoramafenster", "Aerodynamisch"]
  },
  van: {
    title: "Vans",
    description: "Als Reisemobilhersteller ist Eura Mobil seit langem bekannt für seine herausragenden Fahrzeuge, die Komfort und Luxus auf vier Rädern bieten. Etwas Besonderes für die Freunde der Campervans zu schaffen, war das Ziel bei der Entwicklung der neuen Eura Mobil Vans.\n\nDie Vans von Eura Mobil sind perfekt für Reisende, die sich ein kompaktes Wohnmobil wünschen, das trotzdem viel Platz bietet. Die Vans sind in verschiedenen Größen erhältlich und bieten Platz für bis zu vier Personen. Dank ihrer kompakten Größe sind sie ideal für den Stadtverkehr und können auch auf engen Straßen mühelos manövriert werden.\n\nAuch in Sachen Ausstattung lassen die Vans von Eura Mobil keine Wünsche offen. Sie verfügen über eine moderne Küche, ein bequemes Bett und ein geräumiges Bad. Die Innenräume sind gut durchdacht und bieten genügend Stauraum für all Ihre Reiseutensilien. Ein weiteres Highlight der Vans von Eura Mobil ist ihre hervorragende Technik.\n\nDie Vans von Eura Mobil sind eine hervorragende Wahl für alle Reisenden, die ein kompaktes, aber dennoch geräumiges Fahrzeug suchen. Sie bieten Komfort, Luxus und Technologie auf höchstem Niveau. Überzeugen Sie sich selbst von den Vans von Eura Mobil und planen Sie Ihre nächste Reise!",
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

  // Split description into paragraphs
  const descriptionParagraphs = info.description.split('\n\n').filter(p => p.trim() !== '');

  return (
    <section className="my-16">
      <div className="container mx-auto px-4">
        {/* Category Information - Always show */}
        <div className="mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 border border-gray-300 rounded flex items-center justify-center">
              <div className="w-6 h-6 border border-gray-400 rounded-sm"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">{info.title}</h2>
          </div>
          
          <div className="max-w-4xl mx-auto text-left space-y-4 mb-8">
            {descriptionParagraphs.map((paragraph, index) => (
              <p key={index} className="text-gray-600 text-lg leading-relaxed">
                {paragraph.trim()}
              </p>
            ))}
          </div>
          
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
            
            <div className="w-full flex justify-center">
              <div className="flex flex-wrap justify-center items-start gap-8" style={{ maxWidth: 'fit-content' }}>
                {relatedModels.map((model) => (
                  <div key={model.id} className="border border-gray-200 rounded-lg overflow-hidden bg-white w-full max-w-sm flex-shrink-0">
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
