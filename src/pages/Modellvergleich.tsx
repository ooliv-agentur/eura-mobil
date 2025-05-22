
import React, { useState, useEffect } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight, X } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";

// Product line definitions
const productLines = [
  { id: "van", name: "Van", description: "Kompakter Camper Van mit durchdachter Raumnutzung" },
  { id: "activa-one", name: "Activa One", description: "Alkoven-Modell ideal für Familien" },
  { id: "profila-t-fiat", name: "Profila T - Fiat", description: "Teilintegrierter auf Fiat-Basis" },
  { id: "profila-rs", name: "Profila RS", description: "Teilintegrierter mit Hubbett" },
  { id: "profila-t-mercedes", name: "Profila T - Mercedes", description: "Teilintegrierter auf Mercedes-Basis" },
  { id: "contura", name: "Contura", description: "Premium-Teilintegrierter mit Luxus" },
  { id: "integra-line-fiat", name: "Integra Line - Fiat", description: "Vollintegrierter mit harmonischer Raumaufteilung" },
  { id: "integra-line-gt-mercedes", name: "Integra Line GT - Mercedes", description: "Vollintegrierter mit Mercedes-Technologie" },
  { id: "integra", name: "Integra", description: "Flaggschiff mit höchstem Luxus" },
  { id: "xtura", name: "Xtura", description: "Innovatives Crossover-Modell" },
];

// Specific models for each product line
const specificModels = {
  "van": [
    { id: "v-635-eb", name: "V 635 EB", length: "6.36 m", bed: "1950x800 + 1860x800", weight: "3031 kg", extraWeight: "134 kg", diningBed: "1560 × 950 (500)", awning: "4 m mechanisch" },
    { id: "v-595-hb", name: "V 595 HB", length: "5.99 m", bed: "1860x1490", weight: "2921 kg", extraWeight: "234 kg", diningBed: "1600 × 950 (500)", awning: "3.7 m mechanisch" },
    { id: "v-635-vb", name: "V 635 VB", length: "6.36 m", bed: "1950x1400", weight: "3025 kg", extraWeight: "140 kg", diningBed: "1560 × 950 (500)", awning: "4 m mechanisch" },
  ],
  "activa-one": [
    { id: "ao-690-hb", name: "AO 690 HB", length: "7.09 m", bed: "2100x1400 + 2x 2000x800", weight: "3150 kg", extraWeight: "350 kg", diningBed: "2100x1300", awning: "4.5 m mechanisch" },
    { id: "ao-650-vb", name: "AO 650 VB", length: "6.67 m", bed: "2100x1400 + 2x 1900x800", weight: "3050 kg", extraWeight: "450 kg", diningBed: "2000x1300", awning: "4 m mechanisch" },
  ],
  "profila-t-fiat": [
    { id: "pt-675-sb", name: "PT 675 SB", length: "6.99 m", bed: "2x 2000x800", weight: "3240 kg", extraWeight: "260 kg", diningBed: "2100x1300", awning: "4.5 m elektrisch" },
    { id: "pt-720-eb", name: "PT 720 EB", length: "7.41 m", bed: "2x 2000x800", weight: "3320 kg", extraWeight: "180 kg", diningBed: "2100x1300", awning: "4.5 m elektrisch" },
  ],
  // Default values for other product lines (simplified for brevity)
  "default": [
    { id: "model-a", name: "Modell A", length: "7.00 m", bed: "2000x1400", weight: "3200 kg", extraWeight: "300 kg", diningBed: "2000x1300", awning: "4.5 m elektrisch" },
    { id: "model-b", name: "Modell B", length: "7.50 m", bed: "2000x1600", weight: "3400 kg", extraWeight: "200 kg", diningBed: "2100x1300", awning: "5 m elektrisch" },
  ]
};

const Modellvergleich = () => {
  const [selectedProductLine, setSelectedProductLine] = useState<string>("");
  const [selectedModel1, setSelectedModel1] = useState<string>("");
  const [selectedModel2, setSelectedModel2] = useState<string>("");
  const isMobile = useIsMobile();
  
  // Reset model selections when product line changes
  useEffect(() => {
    setSelectedModel1("");
    setSelectedModel2("");
  }, [selectedProductLine]);
  
  // Get available models for the selected product line
  const availableModels = selectedProductLine ? 
    (specificModels[selectedProductLine as keyof typeof specificModels] || specificModels.default) : 
    [];
  
  // Get details of selected models
  const model1Details = availableModels.find(model => model.id === selectedModel1);
  const model2Details = availableModels.find(model => model.id === selectedModel2);
  
  // Comparison attributes
  const comparisonAttributes = [
    { key: "length", label: "Länge" },
    { key: "bed", label: "Heckbett" },
    { key: "weight", label: "Masse fahrbereit" },
    { key: "extraWeight", label: "Max. Sonderausstattungsmasse" },
    { key: "diningBed", label: "Bettumbau Sitzgruppe" },
    { key: "awning", label: "Markise" },
  ];

  // Handle product line selection
  const handleProductLineSelection = (lineId: string) => {
    setSelectedProductLine(lineId === selectedProductLine ? "" : lineId);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-6 md:py-8">
        <h1 className="text-2xl font-bold text-center mb-6">Modellvergleich</h1>
        
        <div className="mb-8">
          <h2 className="text-lg font-medium mb-4">Produktlinie auswählen</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {productLines.map(line => (
              <Card 
                key={line.id}
                className={`cursor-pointer transition-all hover:shadow-md ${selectedProductLine === line.id ? 'ring-2 ring-primary ring-offset-2' : 'border'}`}
                onClick={() => handleProductLineSelection(line.id)}
              >
                <CardContent className="p-3">
                  <div className="bg-gray-200 w-full h-20 mb-2 flex items-center justify-center text-gray-500 text-xs">
                    Produktlinie
                  </div>
                  <h3 className="font-medium">{line.name}</h3>
                  <p className="text-xs text-gray-500 mt-1">{line.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {selectedProductLine && (
          <div className="mb-8">
            <h2 className="text-lg font-medium mb-4">Modelle vergleichen</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Model 1 Selection */}
              <div>
                <label className="block text-sm font-medium mb-1">Modell 1 auswählen</label>
                <Select 
                  value={selectedModel1} 
                  onValueChange={setSelectedModel1}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Modell auswählen" />
                  </SelectTrigger>
                  <SelectContent>
                    {availableModels.map(model => (
                      <SelectItem 
                        key={model.id} 
                        value={model.id}
                        disabled={model.id === selectedModel2}
                      >
                        {model.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              {/* Model 2 Selection */}
              <div>
                <label className="block text-sm font-medium mb-1">Modell 2 auswählen</label>
                <Select 
                  value={selectedModel2} 
                  onValueChange={setSelectedModel2}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Modell auswählen" />
                  </SelectTrigger>
                  <SelectContent>
                    {availableModels.map(model => (
                      <SelectItem 
                        key={model.id} 
                        value={model.id}
                        disabled={model.id === selectedModel1}
                      >
                        {model.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        )}
        
        {/* Comparison Table (when two models are selected) */}
        {model1Details && model2Details && (
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium">
                Modellvergleich: {model1Details.name} vs. {model2Details.name}
              </h2>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-gray-500"
                onClick={() => {
                  setSelectedModel1("");
                  setSelectedModel2("");
                }}
              >
                <X className="h-4 w-4 mr-1" />
                Schließen
              </Button>
            </div>
            
            {/* Model floor plans (grey placeholders) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="border rounded">
                <div className="bg-gray-200 h-40 flex items-center justify-center">
                  <span className="text-gray-500">Grundriss {model1Details.name}</span>
                </div>
              </div>
              <div className="border rounded">
                <div className="bg-gray-200 h-40 flex items-center justify-center">
                  <span className="text-gray-500">Grundriss {model2Details.name}</span>
                </div>
              </div>
            </div>
            
            {/* Comparison table */}
            <div className={isMobile ? "overflow-x-auto" : ""}>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-1/3">Eigenschaft</TableHead>
                    <TableHead className="w-1/3">{model1Details.name}</TableHead>
                    <TableHead className="w-1/3">{model2Details.name}</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {comparisonAttributes.map((attr) => (
                    <TableRow key={attr.key}>
                      <TableCell className="font-medium">{attr.label}</TableCell>
                      <TableCell>{model1Details[attr.key as keyof typeof model1Details]}</TableCell>
                      <TableCell>{model2Details[attr.key as keyof typeof model2Details]}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            
            {/* Action buttons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <Button asChild>
                <Link to={`/wohnmobile/vans/${model1Details.id}`}>
                  Modell {model1Details.name} ansehen
                </Link>
              </Button>
              <Button asChild>
                <Link to={`/wohnmobile/vans/${model2Details.id}`}>
                  Modell {model2Details.name} ansehen
                </Link>
              </Button>
            </div>
            
            <p className="text-xs text-gray-500 mt-6 text-center">
              Die technischen Daten basieren auf der aktuellen Modellgeneration. Änderungen vorbehalten.
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Modellvergleich;
