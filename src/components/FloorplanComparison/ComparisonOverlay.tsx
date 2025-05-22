
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
  // Common specifications shared by all models in this series
  const sharedSpecs = {
    baseVehicle: "Fiat Ducato",
    standardEngine: "2,2 ltr. 103 kW (140 PS)",
    wheelbase: "4035 mm",
    standardTires: "215/70 R15",
    totalWidth: "2050 mm",
    totalHeight: "2650 mm",
    interiorWidth: "1940 mm",
    standingHeight: "1890 mm",
    freshwaterTank: "85 l",
    wastewaterCapacity: "75 l",
    batteryCapacity: "100 Ah",
    floorThickness: "38 mm",
  };

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
            {/* Shared specifications section */}
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-4">Gemeinsam bei allen Grundrissen dieser Baureihe</h3>
              <div className="bg-gray-100 p-4 rounded-lg">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Basisfahrzeug</p>
                    <p className="font-medium">{sharedSpecs.baseVehicle}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Motorisierung Serie</p>
                    <p className="font-medium">{sharedSpecs.standardEngine}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Radstand</p>
                    <p className="font-medium">{sharedSpecs.wheelbase}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Bereifung Serie</p>
                    <p className="font-medium">{sharedSpecs.standardTires}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Gesamtbreite</p>
                    <p className="font-medium">{sharedSpecs.totalWidth}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Gesamthöhe</p>
                    <p className="font-medium">{sharedSpecs.totalHeight}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Innenbreite</p>
                    <p className="font-medium">{sharedSpecs.interiorWidth}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Stehhöhe</p>
                    <p className="font-medium">{sharedSpecs.standingHeight}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Frischwassertank</p>
                    <p className="font-medium">{sharedSpecs.freshwaterTank}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Abwasserkapazität</p>
                    <p className="font-medium">{sharedSpecs.wastewaterCapacity}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Batteriekapazität</p>
                    <p className="font-medium">{sharedSpecs.batteryCapacity}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Bodenstärke</p>
                    <p className="font-medium">{sharedSpecs.floorThickness}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floorplan comparison section */}
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-4">Individuelle Merkmale</h3>
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
            </div>
            
            {/* Comparison table - scrollable on mobile with sticky first column */}
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
