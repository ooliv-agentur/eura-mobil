
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Link } from "react-router-dom";

interface FloorplanCardProps {
  id: string;
  name: string;
  length: string;
  beds: string;
  detailUrl: string;
  onToggleCompare: (id: string, checked: boolean) => void;
  isSelected: boolean;
}

export const FloorplanCard: React.FC<FloorplanCardProps> = ({
  id,
  name,
  length,
  beds,
  detailUrl,
  onToggleCompare,
  isSelected
}) => {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="relative">
          <AspectRatio ratio={4/3} className="bg-gray-200 flex items-center justify-center">
            <p className="text-gray-500">Grundriss</p>
          </AspectRatio>
          <div className="absolute top-2 right-2 z-10">
            <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm p-1 rounded">
              <Checkbox 
                id={`compare-${id}`} 
                checked={isSelected}
                onCheckedChange={(checked) => onToggleCompare(id, checked === true)} 
              />
              <label 
                htmlFor={`compare-${id}`}
                className="text-xs font-medium cursor-pointer"
              >
                Zum Vergleich auswählen
              </label>
            </div>
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="font-semibold text-lg">{name}</h3>
          <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
            <div>
              <span className="text-gray-500">Länge:</span> {length}
            </div>
            <div>
              <span className="text-gray-500">Schlafplätze:</span> {beds}
            </div>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="flex justify-between p-4 pt-0 gap-2">
        <Button asChild variant="outline" className="flex-1">
          <Link to={detailUrl}>Details</Link>
        </Button>
        <Button variant="outline" className="flex-1">Vergleichen</Button>
      </CardFooter>
    </Card>
  );
};
