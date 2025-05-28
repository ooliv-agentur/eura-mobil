
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
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
  'van': {
    name: 'Van',
    length: '5,99 - 6,36 m',
    width: '2,20 m',
    height: '2,75 m',
    weight: '3.500 kg',
    seats: '4',
    sleepingPlaces: '2',
    bedLayout: 'Queensbett',
    bathroom: 'Komfort-Raumbad',
    freshWaterTank: '100 l',
    wasteWaterTank: '90 l',
  },
  'activa-one': {
    name: 'Activa One',
    length: '7,30 – 7,84 m',
    width: '2,32 m',
    height: '2,95 m',
    weight: '3.500 kg',
    seats: '5',
    sleepingPlaces: '4-6',
    bedLayout: 'Alkovenbett + Dinette',
    bathroom: 'Raumbad',
    freshWaterTank: '140 l',
    wasteWaterTank: '110 l',
  },
  'profila-rs': {
    name: 'Profila RS',
    length: '6,99 – 7,58 m',
    width: '2,32 m',
    height: '2,95 m',
    weight: '3.500 kg',
    seats: '4',
    sleepingPlaces: '4',
    bedLayout: 'Hubbett + Heckbett',
    bathroom: 'Raumbad',
    freshWaterTank: '140 l',
    wasteWaterTank: '110 l',
  },
  'integra-line': {
    name: 'Integra Line',
    length: '7,30 – 7,84 m',
    width: '2,32 m',
    height: '3,05 m',
    weight: '3.500 kg',
    seats: '4',
    sleepingPlaces: '2–4',
    bedLayout: 'Queensbett + Hubbett',
    bathroom: 'Premium-Raumbad',
    freshWaterTank: '140 l',
    wasteWaterTank: '110 l',
  },
  'contura': {
    name: 'Contura',
    length: '7,84 m',
    width: '2,32 m',
    height: '2,95 m',
    weight: '3.500 kg',
    seats: '4',
    sleepingPlaces: '2',
    bedLayout: 'Queensbett',
    bathroom: 'Premium-Raumbad',
    freshWaterTank: '140 l',
    wasteWaterTank: '110 l',
  }
};

// Helper function to check if values differ
const valuesDiffer = (property: string, selectedModelIds: string[]): boolean => {
  if (selectedModelIds.length < 2) return false;
  
  const values = selectedModelIds.map(id => {
    return modelData[id as keyof typeof modelData]?.[property as keyof (typeof modelData)[keyof typeof modelData]];
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
          <DialogDescription>
            Vergleichen Sie die technischen Daten und Eigenschaften der ausgewählten Wohnmobile.
          </DialogDescription>
        </DialogHeader>
        
        <div className="mt-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/3">Eigenschaften</TableHead>
                {selectedModels.map((model) => (
                  <TableHead key={model.id} className="w-1/3 text-center">
                    {modelData[model.id as keyof typeof modelData]?.name || model.name}
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
                      const value = modelData[modelId as keyof typeof modelData]?.[row.property as keyof (typeof modelData)[keyof typeof modelData]] || '-';
                      
                      return (
                        <TableCell key={modelId} className={`text-center ${isDifferent ? 'font-semibold' : ''}`}>
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
