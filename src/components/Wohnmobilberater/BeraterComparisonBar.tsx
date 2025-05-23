
import React from 'react';
import { Button } from "@/components/ui/button";
import { useComparison } from '@/context/ComparisonContext';
import { X } from 'lucide-react';

interface BeraterComparisonBarProps {
  onCompareClick: () => void;
}

const BeraterComparisonBar: React.FC<BeraterComparisonBarProps> = ({ onCompareClick }) => {
  const { selectedModels, removeModel, clearModels } = useComparison();

  if (selectedModels.length === 0) {
    return null;
  }

  return (
    <div className="border-t border-gray-200 bg-white p-4 sticky bottom-0 left-0 right-0 z-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <span className="font-semibold">
            {selectedModels.length === 1 
              ? "1 Modell ausgewählt" 
              : `${selectedModels.length} Modelle ausgewählt`}
          </span>
          <div className="flex flex-wrap gap-2">
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
          <Button variant="outline" onClick={clearModels} size="sm">
            Auswahl zurücksetzen
          </Button>
          <Button 
            onClick={onCompareClick}
            disabled={selectedModels.length < 2}
            size="sm"
          >
            {selectedModels.length < 2 
              ? "Noch ein Modell auswählen" 
              : `${selectedModels[0]?.name || ''} vs. ${selectedModels[1]?.name || ''} vergleichen`}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BeraterComparisonBar;
