
import React, { useState } from "react";
import { Layout } from "@/components/Layout";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { SelectableModelCard } from "@/components/comparison/SelectableModelCard";
import { ComparisonBar } from "@/components/comparison/ComparisonBar";
import { ComparisonModal } from "@/components/comparison/ComparisonModal";

// Low-fidelity model interface
interface ModelData {
  id: string;
  name: string;
  length: string;
  seats: string;
  sleepingPlaces: string;
}

const ModelleOverview = () => {
  // Filter states
  const [lengthFilter, setLengthFilter] = useState<string>("all");
  const [seatsFilter, setSeatsFilter] = useState<string>("all");
  const [priceRange, setPriceRange] = useState<number[]>([160]); // Default to max price
  const [comparisonModalOpen, setComparisonModalOpen] = useState(false);
  
  // Simple model data with placeholder info
  const models: ModelData[] = [
    {
      id: "van",
      name: "Van",
      length: "5,99 - 6,36 m",
      seats: "4",
      sleepingPlaces: "2"
    },
    {
      id: "activa-one",
      name: "Activa One",
      length: "6,50 - 7,57 m",
      seats: "5", 
      sleepingPlaces: "6"
    },
    {
      id: "profila-t-fiat",
      name: "Profila T - Fiat",
      length: "6,85 - 7,41 m",
      seats: "4",
      sleepingPlaces: "4"
    },
    {
      id: "profila-rs",
      name: "Profila RS",
      length: "7,09 - 7,41 m",
      seats: "4",
      sleepingPlaces: "4"
    },
    {
      id: "profila-t-mercedes",
      name: "Profila T - Mercedes",
      length: "6,99 - 7,41 m",
      seats: "4",
      sleepingPlaces: "4"
    },
    {
      id: "contura",
      name: "Contura",
      length: "7,31 - 7,61 m",
      seats: "4",
      sleepingPlaces: "4"
    },
    {
      id: "integra-line-fiat",
      name: "Integra Line - Fiat",
      length: "7,15 - 7,81 m",
      seats: "4",
      sleepingPlaces: "4"
    },
    {
      id: "integra-line-gt-mercedes",
      name: "Integra Line GT - Mercedes",
      length: "7,15 - 7,81 m",
      seats: "4",
      sleepingPlaces: "4"
    },
    {
      id: "integra",
      name: "Integra",
      length: "7,15 - 8,99 m",
      seats: "4",
      sleepingPlaces: "4"
    },
    {
      id: "xtura",
      name: "Xtura",
      length: "7,41 - 7,61 m",
      seats: "4",
      sleepingPlaces: "4"
    }
  ];

  const handleCompareClick = () => {
    setComparisonModalOpen(true);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-6">Unsere Modelle im Überblick</h1>
        
        {/* Filter Section */}
        <div className="bg-gray-100 p-4 rounded mb-6 space-y-4">
          <h2 className="font-semibold">Filter</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Length Filter */}
            <div className="space-y-2">
              <label className="text-sm">Länge</label>
              <Select value={lengthFilter} onValueChange={setLengthFilter}>
                <SelectTrigger className="bg-white">
                  <SelectValue placeholder="Länge auswählen" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Alle Längen</SelectItem>
                  <SelectItem value="unter6">Unter 6 Meter</SelectItem>
                  <SelectItem value="6bis65">6,00 - 6,50 Meter</SelectItem>
                  <SelectItem value="65bis7">6,50 - 7,00 Meter</SelectItem>
                  <SelectItem value="7bis75">7,00 - 7,50 Meter</SelectItem>
                  <SelectItem value="75bis8">7,50 - 8,00 Meter</SelectItem>
                  <SelectItem value="ueber8">Über 8 Meter</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            {/* Seats Filter */}
            <div className="space-y-2">
              <label className="text-sm">Sitzplätze</label>
              <Select value={seatsFilter} onValueChange={setSeatsFilter}>
                <SelectTrigger className="bg-white">
                  <SelectValue placeholder="Sitzplätze auswählen" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Alle Sitzplätze</SelectItem>
                  <SelectItem value="2">2 Sitzplätze</SelectItem>
                  <SelectItem value="3">3 Sitzplätze</SelectItem>
                  <SelectItem value="4">4 Sitzplätze</SelectItem>
                  <SelectItem value="5plus">5+ Sitzplätze</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            {/* Price Range Slider */}
            <div className="space-y-2">
              <label className="text-sm">Preisbereich: bis {priceRange[0] * 1000}€</label>
              <Slider
                min={60}
                max={160}
                step={5}
                value={priceRange}
                onValueChange={setPriceRange}
              />
            </div>
          </div>
          
          {/* Filter results count */}
          <div className="text-sm text-gray-600">
            <div>{models.length} Modelle gefunden</div>
          </div>
        </div>
        
        {/* Models Grid - Simple card layout with placeholders */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {models.map((model) => (
            <SelectableModelCard
              key={model.id}
              id={model.id}
              name={model.name}
              length={model.length}
              sleepingPlaces={model.sleepingPlaces}
            />
          ))}
        </div>

        {/* Comparison Bar */}
        <ComparisonBar onCompareClick={handleCompareClick} />

        {/* Comparison Modal */}
        <ComparisonModal 
          open={comparisonModalOpen} 
          onOpenChange={setComparisonModalOpen} 
        />
      </div>
    </Layout>
  );
};

export default ModelleOverview;
