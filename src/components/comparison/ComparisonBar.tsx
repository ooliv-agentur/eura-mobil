
import React from 'react';
import { Button } from "@/components/ui/button";
import { useComparison } from '@/context/ComparisonContext';
import { X } from 'lucide-react';

interface ComparisonBarProps {
  onCompareClick: () => void;
}

export const ComparisonBar: React.FC<ComparisonBarProps> = ({ onCompareClick }) => {
  const { selectedModels, removeModel, clearModels } = useComparison();

  if (selectedModels.length === 0) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg p-4 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="font-semibold">
            {selectedModels.length === 1 
              ? "1 Modell ausgewählt" 
              : `${selectedModels.length} Modelle ausgewählt`}
          </span>
          <div className="flex gap-2">
            {selectedModels.map((model) => (
              <div key={model.id} className="flex items-center bg-gray-100 px-3 py-1 rounded-full">
                <span className="mr-2">{model.name}</span>
                <button
                  onClick={() => removeModel(model.id)}
                  className="text-gray-500 hover:text-gray-900"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" onClick={clearModels}>
            Zurücksetzen
          </Button>
          <Button 
            onClick={onCompareClick}
            disabled={selectedModels.length < 2}
          >
            {selectedModels.length < 2 
              ? "Noch ein Modell auswählen" 
              : "Vergleich starten"}
          </Button>
        </div>
      </div>
    </div>
  );
};
