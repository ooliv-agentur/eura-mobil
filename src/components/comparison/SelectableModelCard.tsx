
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useComparison } from '@/context/ComparisonContext';
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@radix-ui/react-label";
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface ModelCardProps {
  id: string;
  name: string;
  length: string;
  sleepingPlaces: string;
}

export const SelectableModelCard: React.FC<ModelCardProps> = ({ id, name, length, sleepingPlaces }) => {
  const { addModel, removeModel, isSelected, selectedModels } = useComparison();
  
  const handleCheckboxChange = (checked: boolean) => {
    if (checked) {
      addModel({ id, name });
    } else {
      removeModel(id);
    }
  };
  
  const disabled = selectedModels.length >= 2 && !isSelected(id);
  
  return (
    <Card className="border border-gray-300">
      {/* Using CSS variable for consistent placeholder styling */}
      <AspectRatio ratio={4/3} className="bg-[color:var(--placeholder-color)]" />
      <CardContent className="p-4">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <div className="grid grid-cols-2 gap-2 text-sm mb-4">
          <div>
            <span>Länge:</span> {length}
          </div>
          <div>
            <span>Schlafplätze:</span> {sleepingPlaces}
          </div>
        </div>
        
        {/* Buttons and comparison checkbox */}
        <div className="space-y-3">
          <Button variant="outline" className="w-full" asChild>
            <Link to={`/modelle/${id}`}>
              Modell ansehen
            </Link>
          </Button>
          
          <div className="flex items-center space-x-2">
            <Checkbox 
              id={`compare-${id}`} 
              checked={isSelected(id)}
              onCheckedChange={handleCheckboxChange}
              disabled={disabled}
            />
            <Label htmlFor={`compare-${id}`} className="text-sm cursor-pointer">
              Zum Vergleich auswählen
            </Label>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
