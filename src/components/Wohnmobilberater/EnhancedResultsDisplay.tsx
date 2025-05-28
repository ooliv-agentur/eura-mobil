
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useComparison } from "@/context/ComparisonContext";

type Model = {
  id: string;
  name: string;
  image: string;
  description: string;
  features: string[];
  length?: string;
  sleepingPlaces?: string;
};

interface EnhancedResultsDisplayProps {
  models: Model[];
}

// Enhanced model data that matches your existing UX patterns with real technical data
const enhancedModelData: Record<string, Model> = {
  "activa-one": {
    id: "activa-one",
    name: "Activa One",
    image: "",
    description: "Kompaktes Einsteigermodell für 2-4 Personen, ideal für den Sommerurlaub.",
    features: ["Kompakte Größe", "Gute Raumnutzung", "Einsteigerfreundlich"],
    length: "7,30 – 7,84 m",
    sleepingPlaces: "4-6"
  },
  "profila-rs": {
    id: "profila-rs",
    name: "Profila RS",
    image: "",
    description: "Vielseitiger Camper mit optimaler Balance zwischen Komfort und Mobilität.",
    features: ["Großzügiger Wohnraum", "Separate Dusche", "Flexible Schlafplätze"],
    length: "6,99 – 7,58 m",
    sleepingPlaces: "4"
  },
  "integra-line": {
    id: "integra-line",
    name: "Integra Line",
    image: "",
    description: "Luxuriöser Integralwohnmobil mit gehobener Ausstattung und maximaler Raumnutzung.",
    features: ["Großzügiges Raumgefühl", "Premiumausstattung", "Hervorragende Isolierung"],
    length: "7,30 – 7,84 m",
    sleepingPlaces: "2–4"
  },
  "van": {
    id: "van",
    name: "Van",
    image: "",
    description: "Kompakter Van für urbane Abenteuer und spontane Trips.",
    features: ["Wendig und kompakt", "Parkplatzfreundlich", "Perfekt für Paare"],
    length: "5,99 - 6,36 m",
    sleepingPlaces: "2-3"
  },
  "contura": {
    id: "contura",
    name: "Contura",
    image: "",
    description: "Hochwertiges Integralmobil mit elegantem Design und luxuriöser Ausstattung.",
    features: ["Exklusives Design", "Hochwertige Materialien", "Premium-Komfort"],
    length: "7,84 m",
    sleepingPlaces: "2"
  }
};

const EnhancedResultsDisplay: React.FC<EnhancedResultsDisplayProps> = ({ models }) => {
  const navigate = useNavigate();
  const { addModel, removeModel, isSelected, selectedModels } = useComparison();

  const handleMehrErfahren = (modelId: string) => {
    navigate(`/modelle/${modelId}`);
  };

  const handleComparisonChange = (model: Model, checked: boolean) => {
    if (checked) {
      addModel({ id: model.id, name: model.name });
    } else {
      removeModel(model.id);
    }
  };

  // Map the basic model data to enhanced model data with real technical specifications
  const enhancedModels = models.map(model => 
    enhancedModelData[model.id] || {
      ...model,
      image: "",
      description: `Hochwertiges Wohnmobil der ${model.name} Serie`,
      features: ["Komfortabel", "Zuverlässig", "Durchdacht"]
    }
  );

  return (
    <div className="space-y-6 pb-24">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">Diese Wohnmobile könnten zu Ihnen passen</h2>
        <p className="text-gray-600">Basierend auf Ihren Angaben haben wir passende Modelle für Sie gefunden.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {enhancedModels.map((model) => (
          <Card key={model.id} className="overflow-hidden">
            <div className="aspect-video placeholder-image">
              {/* Gray placeholder without any image */}
            </div>
            <CardHeader className="pb-3">
              <CardTitle className="text-xl">{model.name}</CardTitle>
              <p className="text-sm text-gray-600">{model.description}</p>
            </CardHeader>
            <CardContent className="pb-3">
              <div className="flex flex-wrap gap-2 mb-4">
                {model.features.map((feature, i) => (
                  <span key={i} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                    {feature}
                  </span>
                ))}
              </div>
              {(model.length || model.sleepingPlaces) && (
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                  {model.length && (
                    <div>
                      <span className="font-medium">Länge:</span> {model.length}
                    </div>
                  )}
                  {model.sleepingPlaces && (
                    <div>
                      <span className="font-medium">Schlafplätze:</span> {model.sleepingPlaces}
                    </div>
                  )}
                </div>
              )}
            </CardContent>
            <CardFooter className="flex flex-col gap-3">
              <Button 
                onClick={() => handleMehrErfahren(model.id)}
                className="w-full flex items-center justify-center gap-2"
              >
                Mehr erfahren
                <ChevronRight size={16} />
              </Button>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id={`compare-${model.id}`}
                  checked={isSelected(model.id)}
                  onCheckedChange={(checked) => handleComparisonChange(model, checked as boolean)}
                  disabled={!isSelected(model.id) && selectedModels.length >= 2}
                />
                <label 
                  htmlFor={`compare-${model.id}`} 
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Zum Vergleich auswählen
                </label>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <div className="text-center pt-4">
        <Button 
          variant="outline" 
          className="mr-4"
          onClick={() => window.location.reload()}
        >
          Beratung beenden
        </Button>
        <Button onClick={() => window.location.reload()}>
          Neue Beratung starten
        </Button>
      </div>
    </div>
  );
};

export default EnhancedResultsDisplay;
