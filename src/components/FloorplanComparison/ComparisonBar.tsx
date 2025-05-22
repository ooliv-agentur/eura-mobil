
import React from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface ComparisonBarProps {
  selectedModels: Array<{
    id: string;
    name: string;
  }>;
  onRemoveModel: (id: string) => void;
  onStartComparison: () => void;
}

export const ComparisonBar: React.FC<ComparisonBarProps> = ({
  selectedModels,
  onRemoveModel,
  onStartComparison
}) => {
  if (selectedModels.length < 2) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-50 py-3 px-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <p className="font-medium hidden sm:block">Ausgewählte Modelle:</p>
          <div className="flex flex-wrap gap-2">
            {selectedModels.map((model) => (
              <div 
                key={model.id} 
                className="bg-gray-100 rounded-full px-3 py-1 flex items-center gap-2 text-sm"
              >
                <span>{model.name}</span>
                <button 
                  onClick={() => onRemoveModel(model.id)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-4 w-4" />
                  <span className="sr-only">Entfernen</span>
                </button>
              </div>
            ))}
          </div>
        </div>
        <Button 
          onClick={onStartComparison}
          disabled={selectedModels.length < 2}
        >
          Vergleich starten
        </Button>
      </div>
    </div>
  );
};
