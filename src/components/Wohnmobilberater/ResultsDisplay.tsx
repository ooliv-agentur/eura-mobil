
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { MapPin } from "lucide-react";
import { useComparison } from "@/context/ComparisonContext";

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
  const { addModel, removeModel, isSelected, selectedModels } = useComparison();

  const handleCheckboxChange = (checked: boolean, model: Model) => {
    if (checked) {
      addModel({ id: model.id, name: model.name });
    } else {
      removeModel(model.id);
    }
  };

  const disabled = (modelId: string) => selectedModels.length >= 2 && !isSelected(modelId);

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
              
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id={`compare-${model.id}`} 
                  checked={isSelected(model.id)}
                  onCheckedChange={(checked) => handleCheckboxChange(checked as boolean, model)}
                  disabled={disabled(model.id)}
                />
                <Label htmlFor={`compare-${model.id}`} className="text-sm cursor-pointer">
                  Zum Vergleich auswählen
                </Label>
              </div>
              
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
