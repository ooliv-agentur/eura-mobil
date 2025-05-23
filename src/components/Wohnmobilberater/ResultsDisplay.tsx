
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, MapPin } from "lucide-react";

type Model = {
  id: string;
  name: string;
  length: string;
  sleepingPlaces: string;
};

interface ResultsDisplayProps {
  models: Model[];
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ models }) => {
  const handleCompare = (modelId: string) => {
    // Store model ID for comparison
    const existingModelId = localStorage.getItem("compareModelA");
    
    if (existingModelId) {
      localStorage.setItem("compareModelB", modelId);
      // Would navigate to comparison page in a full implementation
      console.log(`Comparing ${existingModelId} with ${modelId}`);
    } else {
      localStorage.setItem("compareModelA", modelId);
      console.log(`Added ${modelId} to comparison. Select another model to compare.`);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {models.map((model) => (
        <Card key={model.id} className="flex flex-col">
          <div className="bg-gray-200 w-full aspect-video"></div>
          <CardContent className="flex flex-col gap-3 p-4">
            <h3 className="font-semibold text-lg">{model.name}</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <span className="text-gray-600">Länge:</span> {model.length}
              </div>
              <div>
                <span className="text-gray-600">Schlafplätze:</span> {model.sleepingPlaces}
              </div>
            </div>
            
            <div className="mt-2 space-y-2">
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link to={`/modelle/${model.id}`}>
                  Modell ansehen
                </Link>
              </Button>
              
              <Button
                variant="outline"
                size="sm"
                className="w-full"
                onClick={() => handleCompare(model.id)}
              >
                <ChevronRight className="mr-1 h-4 w-4" />
                Zum Vergleich
              </Button>
              
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link to="/haendler">
                  <MapPin className="mr-1 h-4 w-4" />
                  Händler finden
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ResultsDisplay;
