
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight, MapPin, Settings, Download } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
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
  onClose: () => void;
}

// Enhanced model data that matches your existing UX patterns
const enhancedModelData: Record<string, Model> = {
  "activa-one": {
    id: "activa-one",
    name: "Activa One",
    image: "https://placehold.co/400x250/e2e8f0/1e293b",
    description: "Kompaktes Einsteigermodell für 2-4 Personen, ideal für den Sommerurlaub.",
    features: ["Kompakte Größe", "Gute Raumnutzung", "Einsteigerfreundlich"],
    length: "6,5 m",
    sleepingPlaces: "4"
  },
  "profila-rs": {
    id: "profila-rs",
    name: "Profila RS",
    image: "https://placehold.co/400x250/e2e8f0/1e293b",
    description: "Vielseitiger Camper mit optimaler Balance zwischen Komfort und Mobilität.",
    features: ["Großzügiger Wohnraum", "Separate Dusche", "Flexible Schlafplätze"],
    length: "7,2 m",
    sleepingPlaces: "3"
  },
  "integra-line": {
    id: "integra-line",
    name: "Integra Line",
    image: "https://placehold.co/400x250/e2e8f0/1e293b",
    description: "Luxuriöser Integralwohnmobil mit gehobener Ausstattung und maximaler Raumnutzung.",
    features: ["Großzügiges Raumgefühl", "Premiumausstattung", "Hervorragende Isolierung"],
    length: "8,1 m",
    sleepingPlaces: "4"
  },
  "van": {
    id: "van",
    name: "Van",
    image: "https://placehold.co/400x250/e2e8f0/1e293b",
    description: "Kompakter Van für urbane Abenteuer und spontane Trips.",
    features: ["Wendig und kompakt", "Parkplatzfreundlich", "Perfekt für Paare"],
    length: "5,9 m",
    sleepingPlaces: "2"
  },
  "contura": {
    id: "contura",
    name: "Contura",
    image: "https://placehold.co/400x250/e2e8f0/1e293b",
    description: "Hochwertiges Integralmobil mit elegantem Design und luxuriöser Ausstattung.",
    features: ["Exklusives Design", "Hochwertige Materialien", "Premium-Komfort"],
    length: "8,8 m",
    sleepingPlaces: "4"
  }
};

const EnhancedResultsDisplay: React.FC<EnhancedResultsDisplayProps> = ({ models, onClose }) => {
  const navigate = useNavigate();
  const { addModel, selectedModels } = useComparison();

  const handleMehrErfahren = (modelId: string) => {
    onClose();
    navigate(`/modelle/${modelId}`);
  };

  const handleHaendlerFinden = () => {
    onClose();
    navigate('/haendler');
  };

  const handleKonfigurator = () => {
    window.open("https://eura.tef-kat.com/konfigurator-eura/Home/Start?culture=de-DE", "_blank", "noopener noreferrer");
  };

  const handleVergleichen = (model: Model) => {
    addModel({ id: model.id, name: model.name });
    if (selectedModels.length === 1) {
      onClose();
      navigate(`/modellvergleich?modelA=${selectedModels[0].id}&modelB=${model.id}`);
    }
  };

  // Map the basic model data to enhanced model data
  const enhancedModels = models.map(model => 
    enhancedModelData[model.id] || {
      ...model,
      image: "https://placehold.co/400x250/e2e8f0/1e293b",
      description: `Hochwertiges Wohnmobil der ${model.name} Serie`,
      features: ["Komfortabel", "Zuverlässig", "Durchdacht"]
    }
  );

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">Diese Wohnmobile könnten zu Ihnen passen</h2>
        <p className="text-gray-600">Basierend auf Ihren Angaben haben wir passende Modelle für Sie gefunden.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {enhancedModels.map((model) => (
          <Card key={model.id} className="overflow-hidden">
            <div className="aspect-video bg-gray-100">
              <img
                src={model.image}
                alt={model.name}
                className="w-full h-full object-cover"
              />
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
            <CardFooter className="flex flex-col gap-2">
              <div className="grid grid-cols-2 gap-2 w-full">
                <Button 
                  onClick={() => handleMehrErfahren(model.id)}
                  className="flex items-center justify-center gap-2"
                >
                  Mehr erfahren
                  <ChevronRight size={16} />
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => handleVergleichen(model)}
                  className="flex items-center justify-center gap-2"
                >
                  Vergleichen
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-2 w-full">
                <Button 
                  variant="outline"
                  onClick={handleHaendlerFinden}
                  className="flex items-center justify-center gap-2"
                >
                  <MapPin size={16} />
                  Händler finden
                </Button>
                <Button 
                  variant="outline"
                  onClick={handleKonfigurator}
                  className="flex items-center justify-center gap-2"
                >
                  <Settings size={16} />
                  Konfigurieren
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <div className="text-center pt-4">
        <Button 
          variant="outline" 
          onClick={onClose}
          className="mr-4"
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
