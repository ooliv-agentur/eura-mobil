
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, MapPin } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useComparison } from "@/context/ComparisonContext";
import { Checkbox } from "@/components/ui/checkbox";

type Model = {
  id: string;
  name: string;
  length: string;
  sleepingPlaces: string;
};

interface ResultsDisplayProps {
  models: Model[];
  onViewModel: (modelId: string) => void;
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ models, onViewModel }) => {
  const { selectedModels, addModel, removeModel, isSelected } = useComparison();
  const navigate = useNavigate();

  // Handle checkbox change for comparison selection
  const handleCompareToggle = (model: Model, checked: boolean) => {
    if (checked) {
      addModel({ id: model.id, name: model.name });
    } else {
      removeModel(model.id);
    }
  };

  // Handle view model click - navigate to model page
  const handleViewModelClick = (modelId: string) => {
    navigate(`/modelle/${modelId}`);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {models.map((model) => {
        const isModelSelected = isSelected(model.id);
        // Disable checkbox if 2 models are already selected and this one isn't
        const isDisabled = selectedModels.length >= 2 && !isModelSelected;

        return (
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
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                  onClick={() => handleViewModelClick(model.id)}
                >
                  Modell ansehen
                </Button>
                
                <div className="flex items-center space-x-2 pt-1">
                  <Checkbox 
                    id={`compare-${model.id}`}
                    checked={isModelSelected}
                    disabled={isDisabled}
                    onCheckedChange={(checked) => handleCompareToggle(model, checked === true)}
                  />
                  <label 
                    htmlFor={`compare-${model.id}`} 
                    className={`text-sm cursor-pointer ${isDisabled ? 'text-gray-400' : ''}`}
                  >
                    Zum Vergleich auswählen
                  </label>
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
        );
      })}
    </div>
  );
};

export default ResultsDisplay;
