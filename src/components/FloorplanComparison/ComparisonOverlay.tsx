
import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ModelData {
  id: string;
  name: string;
  specs: {
    length: string;
    rearBed: string;
    weight: string;
    convertibleDinette: string;
    seatingExtension: string;
  };
}

interface ComparisonOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  models: ModelData[];
}

export const ComparisonOverlay: React.FC<ComparisonOverlayProps> = ({
  isOpen,
  onClose,
  models,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-7xl w-[90vw] max-h-[90vh] overflow-hidden p-0">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-xl font-semibold">
              Grundriss-Vergleich: {models.map(m => m.name).join(" vs. ")}
            </h2>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-5 w-5" />
              <span className="sr-only">Schließen</span>
            </Button>
          </div>
          
          <div className="p-4 flex-grow overflow-auto">
            {/* Floorplan images */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {models.map((model) => (
                <div key={model.id} className="flex flex-col">
                  <AspectRatio ratio={4/3} className="bg-gray-200 flex items-center justify-center">
                    <p className="text-gray-500">Grundriss {model.name}</p>
                  </AspectRatio>
                  <p className="text-center font-medium mt-2">{model.name}</p>
                </div>
              ))}
            </div>
            
            {/* Comparison table - scrollable on mobile */}
            <div className="border rounded-lg">
              <ScrollArea className="w-full overflow-auto">
                <div className="min-w-[600px]">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="bg-gray-50 w-[200px] sticky left-0 z-10">Merkmal</TableHead>
                        {models.map((model) => (
                          <TableHead key={model.id} className="text-center">{model.name}</TableHead>
                        ))}
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium bg-gray-50 sticky left-0 z-10">Länge</TableCell>
                        {models.map((model) => (
                          <TableCell key={model.id} className="text-center">{model.specs.length}</TableCell>
                        ))}
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium bg-gray-50 sticky left-0 z-10">Heckbett</TableCell>
                        {models.map((model) => (
                          <TableCell key={model.id} className="text-center">{model.specs.rearBed}</TableCell>
                        ))}
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium bg-gray-50 sticky left-0 z-10">Masse fahrbereit</TableCell>
                        {models.map((model) => (
                          <TableCell key={model.id} className="text-center">{model.specs.weight}</TableCell>
                        ))}
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium bg-gray-50 sticky left-0 z-10">Bettumbau Sitzgruppe</TableCell>
                        {models.map((model) => (
                          <TableCell key={model.id} className="text-center">{model.specs.convertibleDinette}</TableCell>
                        ))}
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium bg-gray-50 sticky left-0 z-10">Sitzplatzerweiterung</TableCell>
                        {models.map((model) => (
                          <TableCell key={model.id} className="text-center">{model.specs.seatingExtension}</TableCell>
                        ))}
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </ScrollArea>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
