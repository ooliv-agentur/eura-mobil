
import React, { useState } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { X, Maximize2, Minimize2 } from "lucide-react";
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
  specs: Record<string, string>;
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
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  // Van model specifications data
  const vanModelsData = {
    "v-635-eb": {
      name: "V 635 EB",
      specs: {
        "basisfahrzeug": "Fiat Ducato",
        "motorisierungSerie": "2,2 ltr. (103 kW / 140 PS)",
        "motorisierungOption": "2,2 ltr.",
        "radstand": "4035 mm",
        "bereifungSerie": "215/70 R15",
        "zulaessigeGesamtmasse": "3500 / 4250 kg",
        "masseFahrbereit": "3031 (2879–3183) kg",
        "zulaessigeAnhaengelast": "2500 / 3000 kg",
        "gesamtlaenge": "6360 mm",
        "gesamtbreite": "2050 mm",
        "gesamthoehe": "2650 mm",
        "innenbreite": "1940 mm",
        "stehhoehe": "1890 mm",
        "bettumbauSitzgruppe": "1560 × 950 (500) mm",
        "heckbett": "1950×800 + 1860×800 mm",
        "erweiterungSchlafplaetze": "3",
        "zulaessigePersonenzahl": "4",
        "sitzplatzerweiterung": "4",
        "bodenstaerke": "38 mm (inkl. Isolierung)",
        "frischwassertankgroesse": "85 l",
        "batteriekapazitaet": "100 Ah",
        "abwasserkapazitaet": "75 l"
      }
    },
    "v-635-hb": {
      name: "V 635 HB",
      specs: {
        "basisfahrzeug": "Fiat Ducato",
        "motorisierungSerie": "2,2 ltr. (103 kW / 140 PS)",
        "motorisierungOption": "2,2 ltr.",
        "radstand": "4035 mm",
        "bereifungSerie": "215/70 R15",
        "zulaessigeGesamtmasse": "3500 / 4250 kg",
        "masseFahrbereit": "3031 (2879–3183) kg",
        "zulaessigeAnhaengelast": "2500 / 3000 kg",
        "gesamtlaenge": "6360 mm",
        "gesamtbreite": "2050 mm",
        "gesamthoehe": "2650 mm",
        "innenbreite": "1940 mm",
        "stehhoehe": "1890 mm",
        "bettumbauSitzgruppe": "1560 × 950 (500) mm",
        "heckbett": "1850 (1700) × 1600 mm",
        "erweiterungSchlafplaetze": "3",
        "zulaessigePersonenzahl": "4",
        "sitzplatzerweiterung": "4",
        "bodenstaerke": "38 mm (inkl. Isolierung)",
        "frischwassertankgroesse": "85 l",
        "batteriekapazitaet": "100 Ah",
        "abwasserkapazitaet": "75 l"
      }
    },
    "v-595-hb": {
      name: "V 595 HB",
      specs: {
        "basisfahrzeug": "Fiat Ducato",
        "motorisierungSerie": "2,2 ltr. (103 kW / 140 PS)",
        "motorisierungOption": "2,2 ltr.",
        "radstand": "4035 mm",
        "bereifungSerie": "215/70 R15",
        "zulaessigeGesamtmasse": "3500 / 4250 kg",
        "masseFahrbereit": "2921 (2775–3067) kg",
        "zulaessigeAnhaengelast": "2500 / 3000 kg",
        "gesamtlaenge": "5990 mm",
        "gesamtbreite": "2050 mm",
        "gesamthoehe": "2650 mm",
        "innenbreite": "1940 mm",
        "stehhoehe": "1890 mm",
        "bettumbauSitzgruppe": "1600 × 950 (500) mm",
        "heckbett": "1860 × 1490 mm",
        "erweiterungSchlafplaetze": "3",
        "zulaessigePersonenzahl": "4",
        "sitzplatzerweiterung": "–",
        "bodenstaerke": "38 mm (inkl. Isolierung)",
        "frischwassertankgroesse": "85 l",
        "batteriekapazitaet": "100 Ah",
        "abwasserkapazitaet": "75 l"
      }
    }
  };

  // Get the models to compare
  const modelsToCompare = models.map(model => {
    const modelKey = model.id;
    return vanModelsData[modelKey as keyof typeof vanModelsData] || model;
  });

  // Identify which specs are common across all models
  const getCommonSpecs = () => {
    if (modelsToCompare.length < 2) return {};
    
    const commonSpecs: Record<string, string> = {};
    const firstModelSpecs = modelsToCompare[0].specs;
    
    Object.entries(firstModelSpecs).forEach(([key, value]) => {
      const isCommon = modelsToCompare.every(model => 
        model.specs[key] === value
      );
      
      if (isCommon) {
        commonSpecs[key] = value;
      }
    });
    
    return commonSpecs;
  };

  // Get specs that differ between models
  const getDifferingSpecs = () => {
    if (modelsToCompare.length < 2) return {};
    
    const differingSpecs: Record<string, boolean> = {};
    const firstModelSpecs = modelsToCompare[0].specs;
    
    Object.keys(firstModelSpecs).forEach(key => {
      const isDifferent = modelsToCompare.some(model => 
        model.specs[key] !== firstModelSpecs[key]
      );
      
      if (isDifferent) {
        differingSpecs[key] = true;
      }
    });
    
    return differingSpecs;
  };

  const commonSpecs = getCommonSpecs();
  const differingSpecs = getDifferingSpecs();

  // Map of spec keys to display names
  const specLabels: Record<string, string> = {
    "basisfahrzeug": "Basisfahrzeug",
    "motorisierungSerie": "Motorisierung Serie",
    "motorisierungOption": "Motorisierung Option",
    "radstand": "Radstand",
    "bereifungSerie": "Bereifung Serie",
    "zulaessigeGesamtmasse": "Zulässige Gesamtmasse",
    "masseFahrbereit": "Masse fahrbereit",
    "zulaessigeAnhaengelast": "Zulässige Anhängelast",
    "gesamtlaenge": "Gesamtlänge",
    "gesamtbreite": "Gesamtbreite",
    "gesamthoehe": "Gesamthöhe",
    "innenbreite": "Innenbreite",
    "stehhoehe": "Stehhöhe",
    "bettumbauSitzgruppe": "Bettumbau Sitzgruppe",
    "heckbett": "Heckbett",
    "erweiterungSchlafplaetze": "Erweiterung auf X Schlafplätze",
    "zulaessigePersonenzahl": "Zulässige Personenzahl (3-Pkt.)",
    "sitzplatzerweiterung": "Sitzplatzerweiterung",
    "bodenstaerke": "Bodenstärke",
    "frischwassertankgroesse": "Frischwassertankgröße",
    "batteriekapazitaet": "Batteriekapazität",
    "abwasserkapazitaet": "Abwasserkapazität"
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className={`max-w-7xl w-[90vw] max-h-[90vh] overflow-hidden p-0 ${isFullscreen ? 'h-[90vh]' : ''}`}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-xl font-semibold">
              Grundriss-Vergleich: {modelsToCompare.map(m => m.name).join(" vs. ")}
            </h2>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" onClick={toggleFullscreen}>
                {isFullscreen ? <Minimize2 className="h-5 w-5" /> : <Maximize2 className="h-5 w-5" />}
              </Button>
              <Button variant="ghost" size="icon" onClick={onClose}>
                <X className="h-5 w-5" />
                <span className="sr-only">Schließen</span>
              </Button>
            </div>
          </div>
          
          <div className={`p-4 overflow-auto ${isFullscreen ? 'flex-grow' : ''}`}>
            {/* Floorplan images */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {modelsToCompare.map((model) => (
                <div key={model.name} className="flex flex-col">
                  <AspectRatio ratio={4/3} className="bg-gray-200 flex items-center justify-center">
                    <p className="text-gray-500">Grundriss {model.name}</p>
                  </AspectRatio>
                </div>
              ))}
            </div>
            
            {/* Shared specifications section */}
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-4">Gemeinsam bei allen Grundrissen dieser Baureihe</h3>
              <div className="bg-gray-100 p-4 rounded-lg">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {Object.entries(commonSpecs).map(([key, value]) => (
                    <div key={key}>
                      <p className="text-sm text-gray-600">{specLabels[key] || key}</p>
                      <p className="font-medium">{value}</p>
                    </div>
                  ))}
                </div>
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
                        {modelsToCompare.map((model) => (
                          <TableHead key={model.name} className="text-center">{model.name}</TableHead>
                        ))}
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {Object.entries(differingSpecs).map(([key]) => (
                        <TableRow key={key}>
                          <TableCell className="font-medium bg-gray-50 sticky left-0 z-10">
                            {specLabels[key] || key}
                          </TableCell>
                          {modelsToCompare.map((model) => (
                            <TableCell key={`${model.name}-${key}`} className="text-center">
                              {model.specs[key]}
                            </TableCell>
                          ))}
                        </TableRow>
                      ))}
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
