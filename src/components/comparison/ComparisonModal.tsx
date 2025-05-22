
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { X } from 'lucide-react';
import { useComparison } from '@/context/ComparisonContext';

interface ComparisonModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

// Van model data for comparison
const modelData = {
  'v-635-eb': {
    name: 'V 635 EB',
    length: '6,36 m',
    width: '2,05 m',
    height: '2,65 m',
    weight: '3.500 kg',
    seats: '4',
    sleepingPlaces: '2',
    bedLayout: 'Einzelbetten',
    bathroom: 'Komfort-Raumbad',
    freshWaterTank: '100 l',
    wasteWaterTank: '90 l',
  },
  'v-635-hb': {
    name: 'V 635 HB',
    length: '6,36 m',
    width: '2,05 m',
    height: '2,65 m',
    weight: '3.500 kg',
    seats: '4',
    sleepingPlaces: '2',
    bedLayout: 'Hubbett (quer)',
    bathroom: 'Komfort-Raumbad',
    freshWaterTank: '100 l',
    wasteWaterTank: '90 l',
  },
  'v-595-hb': {
    name: 'V 595 HB',
    length: '5,99 m',
    width: '2,05 m',
    height: '2,65 m',
    weight: '3.300 kg',
    seats: '4',
    sleepingPlaces: '2',
    bedLayout: 'Hubbett (quer)',
    bathroom: 'Standard-Raumbad',
    freshWaterTank: '100 l',
    wasteWaterTank: '90 l',
  },
};

// Helper function to check if values differ
const valuesDiffer = (property: string, selectedModelIds: string[]): boolean => {
  if (selectedModelIds.length < 2) return false;
  
  const values = selectedModelIds.map(id => {
    const modelId = id.startsWith('v-') ? id : `v-${id}`;
    return modelData[modelId as keyof typeof modelData]?.[property as keyof (typeof modelData)[keyof typeof modelData]];
  });
  
  return values[0] !== values[1];
};

export const ComparisonModal: React.FC<ComparisonModalProps> = ({ open, onOpenChange }) => {
  const { selectedModels, clearModels } = useComparison();
  
  const handleClose = () => {
    onOpenChange(false);
  };

  const comparisonRows = [
    { label: 'Länge', property: 'length' },
    { label: 'Breite', property: 'width' },
    { label: 'Höhe', property: 'height' },
    { label: 'Gewicht', property: 'weight' },
    { label: 'Sitzplätze', property: 'seats' },
    { label: 'Schlafplätze', property: 'sleepingPlaces' },
    { label: 'Bettlayout', property: 'bedLayout' },
    { label: 'Badezimmer', property: 'bathroom' },
    { label: 'Frischwassertank', property: 'freshWaterTank' },
    { label: 'Abwassertank', property: 'wasteWaterTank' },
  ];

  const selectedModelIds = selectedModels.map(model => model.id);
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Modellvergleich</DialogTitle>
          <DialogClose className="absolute right-4 top-4" onClick={handleClose} />
        </DialogHeader>
        
        <div className="mt-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/3">Eigenschaften</TableHead>
                {selectedModels.map((model) => (
                  <TableHead key={model.id} className="w-1/3 text-center">
                    {(modelData[model.id as keyof typeof modelData] || modelData[`v-${model.id}` as keyof typeof modelData])?.name || model.name}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {comparisonRows.map((row) => {
                const isDifferent = valuesDiffer(row.property, selectedModelIds);
                
                return (
                  <TableRow key={row.property} className={isDifferent ? 'bg-yellow-50' : ''}>
                    <TableCell className="font-medium">{row.label}</TableCell>
                    {selectedModelIds.map((modelId) => {
                      const id = modelId.startsWith('v-') ? modelId : `v-${modelId}`;
                      const value = modelData[id as keyof typeof modelData]?.[row.property as keyof (typeof modelData)[keyof typeof modelData]] || '-';
                      
                      return (
                        <TableCell key={id} className={`text-center ${isDifferent ? 'font-semibold' : ''}`}>
                          {value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
        
        <div className="mt-6 flex justify-end">
          <Button variant="outline" onClick={() => {
            clearModels();
            handleClose();
          }}>
            Vergleich schließen & zurücksetzen
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
