
import React from "react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface ModelSpec {
  id: string;
  name: string;
  detailUrl: string;
  specs: Record<string, string>;
}

interface ComparisonAttribute {
  key: string;
  label: string;
}

interface ModelComparisonProps {
  models: ModelSpec[];
  onClose: () => void;
}

export const ModelComparison: React.FC<ModelComparisonProps> = ({
  models,
  onClose,
}) => {
  // Comparison attributes
  const comparisonAttributes: ComparisonAttribute[] = [
    { key: "gesamtlaenge", label: "Länge" },
    { key: "heckbett", label: "Heckbett" },
    { key: "masseFahrbereit", label: "Masse fahrbereit" },
    { key: "erweiterungSchlafplaetze", label: "Max. Sonderausstattungsmasse" },
    { key: "bettumbauSitzgruppe", label: "Bettumbau Sitzgruppe" },
    { key: "sitzplatzerweiterung", label: "Sitzplatzerweiterung" },
  ];

  // Function to check if values differ
  const isDifferent = (key: string): boolean => {
    if (models.length < 2) return false;
    const firstValue = models[0].specs[key];
    return models.some(model => model.specs[key] !== firstValue);
  };

  if (models.length !== 2) return null;

  return (
    <div className="mt-12 mb-16 border-t pt-8">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold">
          Modellvergleich: {models.map(m => m.name).join(" vs. ")}
        </h3>
        <button 
          onClick={onClose} 
          className="flex items-center text-sm text-gray-500 hover:text-gray-900"
        >
          <X className="h-4 w-4 mr-1" />
          Schließen
        </button>
      </div>

      {/* Floorplan boxes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {models.map((model) => (
          <div key={model.id} className="border rounded-md overflow-hidden">
            <AspectRatio ratio={4/3} className="bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500">Grundriss {model.name}</p>
            </AspectRatio>
          </div>
        ))}
      </div>

      {/* Technical comparison table */}
      <div className="overflow-x-auto mb-8">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-1/3">Eigenschaft</TableHead>
              {models.map((model) => (
                <TableHead key={model.id} className="w-1/3">{model.name}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {comparisonAttributes.map((attr) => (
              <TableRow key={attr.key}>
                <TableCell className="font-medium">{attr.label}</TableCell>
                {models.map((model) => {
                  const value = model.specs[attr.key] || "-";
                  const different = isDifferent(attr.key);
                  
                  return (
                    <TableCell key={`${model.id}-${attr.key}`} className={different ? "font-bold" : ""}>
                      {value}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Action buttons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {models.map((model) => (
          <Button key={model.id} asChild>
            <Link to={model.detailUrl}>
              Modell {model.name} ansehen
            </Link>
          </Button>
        ))}
      </div>
      
      {/* Disclaimer */}
      <p className="text-xs text-gray-500 text-center mt-4">
        Die technischen Daten basieren auf der aktuellen Modellgeneration. Änderungen vorbehalten.
      </p>
    </div>
  );
};
