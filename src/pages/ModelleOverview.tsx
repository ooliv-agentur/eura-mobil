
import React, { useState, useEffect } from "react";
import { Filter, Bed, Users } from "lucide-react";
import { Layout } from "@/components/Layout";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader
} from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";

// Define model interfaces
interface ModelData {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  category: string;
  lengthRange: string;
  lengthMin: number;
  lengthMax: number;
  seats: number;
  sleepingPlaces: number;
  priceMin: number;
  priceMax: number;
}

const ModelleOverview = () => {
  // Filter states
  const [lengthFilter, setLengthFilter] = useState<string>("");
  const [seatsFilter, setSeatsFilter] = useState<string>("");
  const [priceRange, setPriceRange] = useState<number[]>([50]);
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const [filteredModels, setFilteredModels] = useState<ModelData[]>([]);

  // All EURA MOBIL models with realistic data
  const allModels: ModelData[] = [
    {
      id: "van",
      name: "Van",
      description: "Kompakter Camper Van mit durchdachter Raumnutzung für spontane Reisen und maximale Flexibilität.",
      imageUrl: "https://images.unsplash.com/photo-1464851707681-f9d5fdaccea8?w=500&auto=format",
      category: "Van",
      lengthRange: "5,99 - 6,36 m",
      lengthMin: 5.99,
      lengthMax: 6.36,
      seats: 4,
      sleepingPlaces: 2,
      priceMin: 52000,
      priceMax: 68000
    },
    {
      id: "activa-one",
      name: "Activa One",
      description: "Alkoven-Modell mit familiärer Gemütlichkeit und viel Stauraum. Ideal für Familien mit Kindern.",
      imageUrl: "https://images.unsplash.com/photo-1532941781729-b8e6bf6a3d0c?w=500&auto=format",
      category: "Alkoven",
      lengthRange: "6,50 - 7,57 m",
      lengthMin: 6.50,
      lengthMax: 7.57,
      seats: 5,
      sleepingPlaces: 6,
      priceMin: 69000,
      priceMax: 79000
    },
    {
      id: "profila-t-fiat",
      name: "Profila T - Fiat",
      description: "Teilintegriertes Wohnmobil auf Fiat-Basis mit herrlichen Ausblicken und bester Ausstattung.",
      imageUrl: "https://images.unsplash.com/photo-1593150532356-223f7151d4c4?w=500&auto=format",
      category: "Teilintegriert",
      lengthRange: "6,85 - 7,41 m",
      lengthMin: 6.85,
      lengthMax: 7.41,
      seats: 4,
      sleepingPlaces: 4,
      priceMin: 75000,
      priceMax: 90000
    },
    {
      id: "profila-rs",
      name: "Profila RS",
      description: "Teilintegriertes Wohnmobil mit Schlafkomfort auf Sternenniveau dank Hubbett über der Sitzgruppe.",
      imageUrl: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=500&auto=format",
      category: "Teilintegriert",
      lengthRange: "7,09 - 7,41 m",
      lengthMin: 7.09,
      lengthMax: 7.41,
      seats: 4,
      sleepingPlaces: 4,
      priceMin: 85000,
      priceMax: 98000
    },
    {
      id: "profila-t-mercedes",
      name: "Profila T - Mercedes",
      description: "Teilintegriertes Modell auf Mercedes-Basis mit überragender Fahrdynamik und luxuriösem Interieur.",
      imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=500&auto=format",
      category: "Teilintegriert",
      lengthRange: "6,99 - 7,41 m",
      lengthMin: 6.99,
      lengthMax: 7.41,
      seats: 4,
      sleepingPlaces: 4,
      priceMin: 99000,
      priceMax: 110000
    },
    {
      id: "contura",
      name: "Contura",
      description: "Teilintegriertes Premium-Wohnmobil mit exklusiver Ausstattung und höchstem Reisekomfort.",
      imageUrl: "https://images.unsplash.com/photo-1501600254222-20eeb3e1e342?w=500&auto=format",
      category: "Teilintegriert",
      lengthRange: "7,31 - 7,61 m",
      lengthMin: 7.31,
      lengthMax: 7.61,
      seats: 4,
      sleepingPlaces: 4,
      priceMin: 105000,
      priceMax: 120000
    },
    {
      id: "integra-line-fiat",
      name: "Integra Line - Fiat",
      description: "Vollintegriertes Modell mit harmonischer Raumaufteilung und beeindruckender Wohnatmosphäre.",
      imageUrl: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=500&auto=format",
      category: "Integriert",
      lengthRange: "7,15 - 7,81 m",
      lengthMin: 7.15,
      lengthMax: 7.81,
      seats: 4,
      sleepingPlaces: 4,
      priceMin: 95000,
      priceMax: 115000
    },
    {
      id: "integra-line-gt-mercedes",
      name: "Integra Line GT - Mercedes",
      description: "Vollintegriertes Luxus-Wohnmobil auf Mercedes-Basis mit innovativen Technologien und elegantem Design.",
      imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&auto=format",
      category: "Integriert",
      lengthRange: "7,15 - 7,81 m",
      lengthMin: 7.15,
      lengthMax: 7.81,
      seats: 4,
      sleepingPlaces: 4,
      priceMin: 115000,
      priceMax: 130000
    },
    {
      id: "integra",
      name: "Integra",
      description: "Vollintegriertes Flaggschiff der EURA MOBIL-Flotte mit höchstem Luxus und einzigartigem Wohngefühl.",
      imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&auto=format",
      category: "Integriert",
      lengthRange: "7,15 - 8,99 m",
      lengthMin: 7.15,
      lengthMax: 8.99,
      seats: 4,
      sleepingPlaces: 4,
      priceMin: 125000,
      priceMax: 150000
    },
    {
      id: "xtura",
      name: "Xtura",
      description: "Innovatives Crossover-Modell mit herausragender Raumeffizienz und modernem, automobilen Design.",
      imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&auto=format",
      category: "Crossover",
      lengthRange: "7,41 - 7,61 m",
      lengthMin: 7.41,
      lengthMax: 7.61,
      seats: 4,
      sleepingPlaces: 4,
      priceMin: 110000,
      priceMax: 135000
    }
  ];

  // Length range options
  const lengthRanges = [
    { value: "unter6", label: "Unter 6 Meter", min: 0, max: 6.0 },
    { value: "6bis65", label: "6,00 - 6,50 Meter", min: 6.0, max: 6.5 },
    { value: "65bis7", label: "6,50 - 7,00 Meter", min: 6.5, max: 7.0 },
    { value: "7bis75", label: "7,00 - 7,50 Meter", min: 7.0, max: 7.5 },
    { value: "75bis8", label: "7,50 - 8,00 Meter", min: 7.5, max: 8.0 },
    { value: "ueber8", label: "Über 8 Meter", min: 8.0, max: 10.0 }
  ];

  // Apply filters
  useEffect(() => {
    let result = [...allModels];
    
    // Apply length filter
    if (lengthFilter) {
      const selectedRange = lengthRanges.find(range => range.value === lengthFilter);
      if (selectedRange) {
        result = result.filter(model => 
          (model.lengthMin <= selectedRange.max && model.lengthMax >= selectedRange.min)
        );
      }
    }
    
    // Apply seats filter
    if (seatsFilter) {
      if (seatsFilter === "5plus") {
        result = result.filter(model => model.seats >= 5);
      } else {
        const seats = parseInt(seatsFilter);
        result = result.filter(model => model.seats === seats);
      }
    }
    
    // Apply price filter
    const maxPrice = priceRange[0] * 1000;
    result = result.filter(model => model.priceMin <= maxPrice);
    
    setFilteredModels(result);
  }, [lengthFilter, seatsFilter, priceRange]);

  // Format price to Euro
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('de-DE', { 
      style: 'currency', 
      currency: 'EUR',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">Unsere Modelle im Überblick</h1>
        
        {/* Mobile Filter Toggle */}
        <div className="md:hidden mb-4">
          <Button 
            variant="outline" 
            className="w-full flex items-center justify-center gap-2"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter className="h-4 w-4" />
            Filter {showFilters ? 'ausblenden' : 'anzeigen'}
          </Button>
        </div>

        {/* Filter Section - Responsive */}
        <div className={`${showFilters ? 'block' : 'hidden'} md:block`}>
          <div className="bg-gray-100 p-4 rounded-lg mb-6 space-y-4">
            <h2 className="font-semibold">Filter</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Länge</label>
                <Select value={lengthFilter} onValueChange={setLengthFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Länge auswählen" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Alle Längen</SelectItem>
                    {lengthRanges.map(range => (
                      <SelectItem key={range.value} value={range.value}>
                        {range.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Sitzplätze</label>
                <Select value={seatsFilter} onValueChange={setSeatsFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sitzplätze auswählen" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Alle Sitzplätze</SelectItem>
                    <SelectItem value="2">2 Sitzplätze</SelectItem>
                    <SelectItem value="3">3 Sitzplätze</SelectItem>
                    <SelectItem value="4">4 Sitzplätze</SelectItem>
                    <SelectItem value="5plus">5+ Sitzplätze</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Preisbereich: bis {formatPrice(priceRange[0] * 1000)}</label>
                <Slider
                  min={50}
                  max={150}
                  step={5}
                  value={priceRange}
                  onValueChange={setPriceRange}
                />
              </div>
            </div>
            
            {/* Filter results count */}
            <div className="text-sm text-gray-600">
              {filteredModels.length} {filteredModels.length === 1 ? 'Modell' : 'Modelle'} gefunden
            </div>
          </div>
        </div>
        
        {/* Mobile Accordion Filter for Small Screens */}
        <div className="md:hidden mb-6">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="categories">
              <AccordionTrigger className="text-sm font-medium">Kategorien</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-wrap gap-2 pt-2">
                  {Array.from(new Set(allModels.map(model => model.category))).map(category => (
                    <Badge key={category} variant="outline" className="cursor-pointer">
                      {category}
                    </Badge>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        
        {/* Models Grid */}
        {filteredModels.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredModels.map((model) => (
              <Card key={model.id} className="overflow-hidden">
                <div className="aspect-video bg-gray-200 overflow-hidden">
                  <img 
                    src={model.imageUrl} 
                    alt={model.name} 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold">{model.name}</h3>
                    <div className="text-sm text-gray-600">
                      {formatPrice(model.priceMin)} - {formatPrice(model.priceMax)}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pb-2 space-y-3">
                  <p className="text-sm text-gray-600">{model.description}</p>
                  
                  <div className="flex flex-wrap gap-3 text-sm">
                    <div className="flex items-center gap-1 text-gray-700">
                      <span className="font-medium">Länge:</span> {model.lengthRange}
                    </div>
                    <div className="flex items-center gap-1 text-gray-700">
                      <Users className="h-4 w-4" />
                      <span>{model.seats}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-700">
                      <Bed className="h-4 w-4" />
                      <span>{model.sleepingPlaces}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to={`/modelle/${model.id}`}>
                      Mehr erfahren
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-10">
            <h3 className="text-lg font-semibold">Keine Modelle gefunden</h3>
            <p className="text-gray-600 mt-2">Bitte passen Sie Ihre Filterkriterien an.</p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => {
                setLengthFilter("");
                setSeatsFilter("");
                setPriceRange([50]);
              }}
            >
              Filter zurücksetzen
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ModelleOverview;
