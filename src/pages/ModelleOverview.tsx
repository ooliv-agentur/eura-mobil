
import React, { useState, useEffect } from "react";
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

// Enhanced model interface with properties for filtering
interface ModelData {
  id: string;
  name: string;
  length: string;
  lengthMeters: number; // Actual numeric value for filtering
  seats: string;
  seatsCount: number; // Actual numeric value for filtering
  sleepingPlaces: string;
  price: number; // Price in thousands for filtering
}

const ModelleOverview = () => {
  // Filter states
  const [lengthFilter, setLengthFilter] = useState<string>("all");
  const [seatsFilter, setSeatsFilter] = useState<string>("all");
  const [priceRange, setPriceRange] = useState<number[]>([160]); // Default to max price
  const [comparisonModalOpen, setComparisonModalOpen] = useState(false);
  
  // State for filtered models
  const [filteredModels, setFilteredModels] = useState<ModelData[]>([]);
  
  // Enhanced model data with values for filtering
  const models: ModelData[] = [
    {
      id: "van",
      name: "Van",
      length: "5,99 - 6,36 m",
      lengthMeters: 5.99,
      seats: "4",
      seatsCount: 4,
      sleepingPlaces: "2",
      price: 75
    },
    {
      id: "activa-one",
      name: "Activa One",
      length: "6,50 - 7,57 m",
      lengthMeters: 6.50,
      seats: "5", 
      seatsCount: 5,
      sleepingPlaces: "6",
      price: 90
    },
    {
      id: "profila-t-fiat",
      name: "Profila T - Fiat",
      length: "6,85 - 7,41 m",
      lengthMeters: 6.85,
      seats: "4",
      seatsCount: 4,
      sleepingPlaces: "4",
      price: 110
    },
    {
      id: "profila-rs",
      name: "Profila RS",
      length: "7,09 - 7,41 m",
      lengthMeters: 7.09,
      seats: "4",
      seatsCount: 4,
      sleepingPlaces: "4",
      price: 125
    },
    {
      id: "profila-t-mercedes",
      name: "Profila T - Mercedes",
      length: "6,99 - 7,41 m",
      lengthMeters: 6.99,
      seats: "4",
      seatsCount: 4,
      sleepingPlaces: "4",
      price: 130
    },
    {
      id: "contura",
      name: "Contura",
      length: "7,31 - 7,61 m",
      lengthMeters: 7.31,
      seats: "4",
      seatsCount: 4,
      sleepingPlaces: "4",
      price: 140
    },
    {
      id: "integra-line-fiat",
      name: "Integra Line - Fiat",
      length: "7,15 - 7,81 m",
      lengthMeters: 7.15,
      seats: "4",
      seatsCount: 4,
      sleepingPlaces: "4",
      price: 145
    },
    {
      id: "integra-line-gt-mercedes",
      name: "Integra Line GT - Mercedes",
      length: "7,15 - 7,81 m",
      lengthMeters: 7.15,
      seats: "4",
      seatsCount: 4,
      sleepingPlaces: "4",
      price: 150
    },
    {
      id: "integra",
      name: "Integra",
      length: "7,15 - 8,99 m",
      lengthMeters: 7.15,
      seats: "4",
      seatsCount: 4,
      sleepingPlaces: "4",
      price: 160
    },
    {
      id: "xtura",
      name: "Xtura",
      length: "7,41 - 7,61 m",
      lengthMeters: 7.41,
      seats: "2",
      seatsCount: 2,
      sleepingPlaces: "2",
      price: 155
    }
  ];

  // Filter models based on selected criteria
  useEffect(() => {
    let result = [...models];
    
    // Filter by length
    if (lengthFilter !== "all") {
      result = result.filter(model => {
        switch (lengthFilter) {
          case "unter6":
            return model.lengthMeters < 6.0;
          case "6bis65":
            return model.lengthMeters >= 6.0 && model.lengthMeters <= 6.5;
          case "65bis7":
            return model.lengthMeters > 6.5 && model.lengthMeters <= 7.0;
          case "7bis75":
            return model.lengthMeters > 7.0 && model.lengthMeters <= 7.5;
          case "75bis8":
            return model.lengthMeters > 7.5 && model.lengthMeters <= 8.0;
          case "ueber8":
            return model.lengthMeters > 8.0;
          default:
            return true;
        }
      });
    }
    
    // Filter by seats
    if (seatsFilter !== "all") {
      result = result.filter(model => {
        if (seatsFilter === "5plus") {
          return model.seatsCount >= 5;
        }
        return model.seatsCount === parseInt(seatsFilter);
      });
    }
    
    // Filter by price
    result = result.filter(model => model.price <= priceRange[0]);
    
    setFilteredModels(result);
  }, [lengthFilter, seatsFilter, priceRange, models]);

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
            <div>{filteredModels.length} Modelle gefunden</div>
          </div>
        </div>
        
        {/* Models Grid - Displaying filtered models */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredModels.map((model) => (
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
