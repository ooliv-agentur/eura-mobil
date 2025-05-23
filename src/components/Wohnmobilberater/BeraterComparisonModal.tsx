
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

interface BeraterComparisonModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

// Mock model data for comparison
const modelData = {
  'activa-one': {
    name: 'Activa One',
    length: '6,5 m',
    width: '2,3 m',
    height: '2,8 m',
    weight: '3.500 kg',
    seats: '4',
    sleepingPlaces: '4',
    bedLayout: 'Queensbett',
    bathroom: 'Komfort-Raumbad',
    freshWaterTank: '100 l',
    wasteWaterTank: '100 l',
  },
  'profila-t': {
    name: 'Profila T',
    length: '7,2 m',
    width: '2,3 m',
    height: '2,9 m',
    weight: '3.500 kg',
    seats: '4',
    sleepingPlaces: '3',
    bedLayout: 'Einzelbetten',
    bathroom: 'Premium-Raumbad',
    freshWaterTank: '150 l',
    wasteWaterTank: '100 l',
  },
  'integra-line': {
    name: 'Integra Line',
    length: '8,1 m',
    width: '2,3 m',
    height: '2,9 m',
    weight: '4.500 kg',
    seats: '4',
    sleepingPlaces: '4',
    bedLayout: 'Einzelbetten',
    bathroom: 'Premium-Raumbad XL',
    freshWaterTank: '150 l',
    wasteWaterTank: '120 l',
  },
  'van': {
    name: 'Van',
    length: '5,9 m',
    width: '2,1 m',
    height: '2,6 m',
    weight: '3.300 kg',
    seats: '2',
    sleepingPlaces: '2',
    bedLayout: 'Queensbett',
    bathroom: 'Kompakt-Bad',
    freshWaterTank: '80 l',
    wasteWaterTank: '80 l',
  },
  'contura': {
    name: 'Contura',
    length: '8,8 m',
    width: '2,3 m',
    height: '3,0 m',
    weight: '5.000 kg',
    seats: '4',
    sleepingPlaces: '4',
    bedLayout: 'Kingsize-Bett',
    bathroom: 'Luxus-Bad mit Dusche',
    freshWaterTank: '200 l',
    wasteWaterTank: '150 l',
  },
};

// Helper function to check if values differ
const valuesDiffer = (property: string, selectedModelIds: string[]): boolean => {
  if (selectedModelIds.length < 2) return false;
  
  const values = selectedModelIds.map(id => {
    return modelData[id as keyof typeof modelData]?.[property as keyof (typeof modelData)[keyof typeof modelData]];
  });
  
  return values[0] !== values[1];
};

const BeraterComparisonModal: React.FC<BeraterComparisonModalProps> = ({ open, onOpenChange }) => {
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

export default BeraterComparisonModal;
