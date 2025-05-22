
import React, { useState } from "react";
import { Layout } from "../components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ArrowLeftRight, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { ComparisonOverlay } from "../components/FloorplanComparison/ComparisonOverlay";

// Van model data with specs included
const vanModels = [
  {
    id: "v-635-eb",
    name: "V 635 EB",
    image: "/placeholder.svg",
    length: "6,36 m",
    sleepingPlaces: "2",
    detailUrl: "/wohnmobile/vans/v-635-eb-2-2",
    specs: {
      "basisfahrzeug": "Fiat Ducato",
      "motorisierungSerie": "2,2 ltr. (103 kW / 140 PS)",
      "motorisierungOption": "2,2 ltr.",
      "radstand": "4035 mm",
      "bereifungSerie": "215/70 R15",
      "zulaessigeGesamtmasse": "3500 / 4250 kg",
      "masseFahrbereit": "3031 (2879–3183) kg",
      "zulaessigeAnhaengelast": "2500 / 3000 kg",
      "gesamtlaenge": "6360 mm",
      "gesamtbreite": "2050 mm",
      "gesamthoehe": "2650 mm",
      "innenbreite": "1940 mm",
      "stehhoehe": "1890 mm",
      "bettumbauSitzgruppe": "1560 × 950 (500) mm",
      "heckbett": "1950×800 + 1860×800 mm",
      "erweiterungSchlafplaetze": "3",
      "zulaessigePersonenzahl": "4",
      "sitzplatzerweiterung": "4",
      "bodenstaerke": "38 mm (inkl. Isolierung)",
      "frischwassertankgroesse": "85 l",
      "batteriekapazitaet": "100 Ah",
      "abwasserkapazitaet": "75 l"
    }
  },
  {
    id: "v-635-hb",
    name: "V 635 HB",
    image: "/placeholder.svg",
    length: "6,36 m",
    sleepingPlaces: "2",
    detailUrl: "/wohnmobile/vans/v-635-hb-2-2",
    specs: {
      "basisfahrzeug": "Fiat Ducato",
      "motorisierungSerie": "2,2 ltr. (103 kW / 140 PS)",
      "motorisierungOption": "2,2 ltr.",
      "radstand": "4035 mm",
      "bereifungSerie": "215/70 R15",
      "zulaessigeGesamtmasse": "3500 / 4250 kg",
      "masseFahrbereit": "3031 (2879–3183) kg",
      "zulaessigeAnhaengelast": "2500 / 3000 kg",
      "gesamtlaenge": "6360 mm",
      "gesamtbreite": "2050 mm",
      "gesamthoehe": "2650 mm",
      "innenbreite": "1940 mm",
      "stehhoehe": "1890 mm",
      "bettumbauSitzgruppe": "1560 × 950 (500) mm",
      "heckbett": "1850 (1700) × 1600 mm",
      "erweiterungSchlafplaetze": "3",
      "zulaessigePersonenzahl": "4",
      "sitzplatzerweiterung": "4",
      "bodenstaerke": "38 mm (inkl. Isolierung)",
      "frischwassertankgroesse": "85 l",
      "batteriekapazitaet": "100 Ah",
      "abwasserkapazitaet": "75 l"
    }
  },
  {
    id: "v-595-hb",
    name: "V 595 HB",
    image: "/placeholder.svg",
    length: "5,99 m",
    sleepingPlaces: "2",
    detailUrl: "/wohnmobile/vans/v-595-hb-2-2",
    specs: {
      "basisfahrzeug": "Fiat Ducato",
      "motorisierungSerie": "2,2 ltr. (103 kW / 140 PS)",
      "motorisierungOption": "2,2 ltr.",
      "radstand": "4035 mm",
      "bereifungSerie": "215/70 R15",
      "zulaessigeGesamtmasse": "3500 / 4250 kg",
      "masseFahrbereit": "2921 (2775–3067) kg",
      "zulaessigeAnhaengelast": "2500 / 3000 kg",
      "gesamtlaenge": "5990 mm",
      "gesamtbreite": "2050 mm",
      "gesamthoehe": "2650 mm",
      "innenbreite": "1940 mm",
      "stehhoehe": "1890 mm",
      "bettumbauSitzgruppe": "1600 × 950 (500) mm",
      "heckbett": "1860 × 1490 mm",
      "erweiterungSchlafplaetze": "3",
      "zulaessigePersonenzahl": "4",
      "sitzplatzerweiterung": "–",
      "bodenstaerke": "38 mm (inkl. Isolierung)",
      "frischwassertankgroesse": "85 l",
      "batteriekapazitaet": "100 Ah",
      "abwasserkapazitaet": "75 l"
    }
  }
];

const ModelleOverview: React.FC = () => {
  const [selectedModels, setSelectedModels] = useState<string[]>([]);
  const [isComparisonOpen, setIsComparisonOpen] = useState(false);

  // Handler for toggling model selection
  const handleToggleModelSelection = (modelId: string) => {
    if (selectedModels.includes(modelId)) {
      setSelectedModels(selectedModels.filter(id => id !== modelId)); // Fixed bug: was using id !== id which would never filter anything
    } else {
      // If we already have 3 models selected, remove the first one
      if (selectedModels.length >= 3) {
        setSelectedModels([...selectedModels.slice(1), modelId]);
      } else {
        setSelectedModels([...selectedModels, modelId]);
      }
    }
  };

  // Handler for opening comparison overlay
  const handleOpenComparison = () => {
    if (selectedModels.length >= 2) {
      setIsComparisonOpen(true);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mt-12 mb-8 text-center">Wohnmobile</h1>
        
        {/* Van Models Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Vans</h2>
          <p className="mb-8">
            Im neuen Premium Van von Eura Mobil verwandelt das exklusive Ambiente jeden Moment in einen besonderen Augenblick. 
            Spüren Sie die edlen Materialien und erleben Sie die individuellen Details, die den Eura Mobil Van zu Ihrem ganz persönlichen mobilen Zuhause machen.
          </p>
          
          {/* Models Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {vanModels.map((model) => (
              <Card key={model.id} className={`overflow-hidden ${selectedModels.includes(model.id) ? 'ring-2 ring-blue-500' : ''}`}>
                <AspectRatio ratio={4/3} className="bg-gray-200">
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    Grundriss
                  </div>
                </AspectRatio>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold mb-3">{model.name}</h3>
                  <div className="grid grid-cols-2 gap-2 text-sm mb-4">
                    <div>
                      <span className="text-gray-600">Länge:</span> {model.length}
                    </div>
                    <div>
                      <span className="text-gray-600">Schlafplätze:</span> {model.sleepingPlaces}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    <Button asChild variant="outline" className="w-full">
                      <Link to={model.detailUrl}>
                        <Eye className="mr-2 h-4 w-4" />
                        Modell ansehen
                      </Link>
                    </Button>
                    <Button 
                      variant={selectedModels.includes(model.id) ? "default" : "secondary"}
                      onClick={() => handleToggleModelSelection(model.id)} 
                      className="w-full"
                    >
                      <ArrowLeftRight className="mr-2 h-4 w-4" />
                      {selectedModels.includes(model.id) ? "Ausgewählt" : "Vergleichen"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Comparison Action */}
          {selectedModels.length >= 2 && (
            <div className="flex justify-center mt-6">
              <Button onClick={handleOpenComparison}>
                {selectedModels.length} Modelle vergleichen
              </Button>
            </div>
          )}
          
          {/* Comparison Overlay - This is kept as requested */}
          <ComparisonOverlay
            isOpen={isComparisonOpen}
            onClose={() => setIsComparisonOpen(false)}
            models={selectedModels.map(id => vanModels.find(model => model.id === id)!)}
          />
        </div>
      </div>
    </Layout>
  );
};

export default ModelleOverview;
