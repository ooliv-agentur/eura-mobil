
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import Wohnmobilberater from "@/components/Wohnmobilberater/Wohnmobilberater";
import { useWohnmobilberaterTrigger } from "@/hooks/useWohnmobilberaterTrigger";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, ArrowDown, Circle, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import useEmblaCarousel from "embla-carousel-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Modellliste in der spezifischen Reihenfolge (nicht alphabetisch sortiert)
// Updated with correct category assignments
const modelTypes = [
  { name: "Van", description: "Kompakte Fahrzeuge für flexibles Reisen", path: "/modelle/van", type: "vans" },
  { name: "Activa One", description: "Kompakte Wohnmobile für Einsteiger und Familien", path: "/modelle/activa-one", type: "alkoven" },
  { name: "Profila T – Fiat", description: "Komfort und Flexibilität auf Fiat-Basis", path: "/modelle/profila-t-fiat", type: "teilintegriert" },
  { name: "Profila RS", description: "Großzügiger Wohnraum mit praktischer Aufteilung", path: "/modelle/profila-rs", type: "teilintegriert" },
  { name: "Profila T – Mercedes", description: "Premium Teilintegrierte auf Mercedes-Basis", path: "/modelle/profila-t-mercedes", type: "teilintegriert" },
  { name: "Contura", description: "Design und Komfort in perfekter Harmonie", path: "/modelle/contura", type: "teilintegriert" },
  { name: "Integra Line – Fiat", description: "Luxuriöser Wohnkomfort auf Fiat-Basis", path: "/modelle/integra-line-fiat", type: "integriert" },
  { name: "Integra Line GT – Mercedes", description: "Premium Integrierte mit Mercedes Fahrgestell", path: "/modelle/integra-line-gt", type: "integriert" },
  { name: "Integra", description: "Luxus auf Rädern mit erstklassiger Ausstattung", path: "/modelle/integra", type: "integriert" },
  { name: "Xtura", description: "Für Abenteurer mit höchsten Ansprüchen", path: "/modelle/xtura", type: "teilintegriert" }
];

// Wohnmobiltypen Erklärungen with generic icon placeholders
const wohnmobiltypenErklaerungen = {
  alle: {
    text: "Entdecken Sie unsere gesamte Modellpalette - von kompakten Vans bis zu integrierten Luxus-Wohnmobilen.",
    icon: Circle
  },
  alkoven: {
    text: "In den Alkoven-Wohnmobilen von Eura Mobil schafft die optimale Raumnutzung Platz für bis zu 6 Familienmitglieder oder Freunde – zum Wohnen, Schlafen und Erleben.",
    icon: Circle
  },
  teilintegriert: {
    text: "Kompakter Aufbau mit hochwertiger Ausstattung – ideal für Paare oder kleine Familien, die Flexibilität und Komfort schätzen.",
    icon: Circle
  },
  integriert: {
    text: "Großzügige Wohnmobile mit durchgängigem Design, maximalem Komfort und einem luxuriösen Gefühl für lange Reisen und hohe Ansprüche.",
    icon: Circle
  },
  vans: {
    text: "Kompakte Fahrzeuge für flexible Reisen – wendig, alltagstauglich und hochwertig verarbeitet.",
    icon: Circle
  }
};

// CTA cards data
const ctaCards = [
  {
    title: "Alle Modelle",
    description: "Stöbern Sie durch unsere gesamte Modellpalette von Vans bis zu integrierten Luxus-Wohnmobilen.",
    buttonText: "Modelle entdecken",
    path: "/modelle",
    icon: "search"
  },
  {
    title: "Beratungs-Tool",
    description: "Finden Sie mit wenigen Klicks das passende Modell für Ihre Wünsche und Bedürfnisse.",
    buttonText: "Beratung starten",
    path: "#",
    isBeratung: true,
    icon: "advice"
  },
  {
    title: "Konfigurator",
    description: "Passen Sie Ihr ausgewähltes Modell nach Ihren individuellen Wünschen an.",
    buttonText: "Zum Konfigurator",
    path: "https://konfigurator.euramobil.de",
    isExternal: true,
    icon: "settings"
  }
];

// News items data
const newsItems = [
  {
    title: "Neuheiten 2025 vorgestellt",
    date: "12.05.2025",
    description: "Entdecken Sie die aktuellen Neuheiten und innovativen Modelle für die kommende Saison.",
    path: "/news/neuheiten-2025"
  },
  {
    title: "Caravan Salon Düsseldorf",
    date: "28.08.2025",
    description: "Besuchen Sie uns auf dem Caravan Salon in Düsseldorf und erleben Sie unsere Wohnmobile hautnah.",
    path: "/news/caravan-salon-2025"
  }
];

// Interface for Google Places prediction
interface PlacePrediction {
  description: string;
  place_id: string;
}

// Add window type declaration for Google Places Autocomplete
declare global {
  interface Window {
    google: any;
    initPlacesAutocomplete: () => void;
  }
}

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { startBeraterFlow } = useWohnmobilberaterTrigger();
  const [activeFilter, setActiveFilter] = useState("alle");
  const [isTypesExpanded, setIsTypesExpanded] = useState(false);
  
  // Embla carousel hook for the model series carousel
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    slidesToScroll: 1,
    dragFree: false,
    containScroll: "trimSnaps"
  });

  // Filter model types based on active filter
  const filteredModels = activeFilter === "alle" 
    ? modelTypes 
    : modelTypes.filter(model => model.type === activeFilter);
  
  // Handle sliding to start when filter changes
  useEffect(() => {
    if (emblaApi) {
      emblaApi.scrollTo(0);
    }
  }, [activeFilter, emblaApi]);
  
  // State for dealer search input and Google Places Autocomplete
  const [dealerSearch, setDealerSearch] = useState("");
  const [placePredictions, setPlacePredictions] = useState<PlacePrediction[]>([]);
  const [showPredictions, setShowPredictions] = useState(false);
  const autocompleteService = useRef<any>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Load Google Maps script with Places API
  useEffect(() => {
    // Only load script if it's not already loaded
    if (!window.google) {
      const googleMapsScript = document.createElement('script');
      googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyC1bL2XXLL3OK510dcAO-5lSwyrKjfzro8&libraries=places&callback=initPlacesAutocomplete`;
      googleMapsScript.async = true;
      googleMapsScript.defer = true;
      
      window.initPlacesAutocomplete = () => {
        autocompleteService.current = new window.google.maps.places.AutocompleteService();
      };
      
      document.head.appendChild(googleMapsScript);
      
      return () => {
        document.head.removeChild(googleMapsScript);
      };
    } else if (window.google && window.google.maps && window.google.maps.places) {
      autocompleteService.current = new window.google.maps.places.AutocompleteService();
    }
  }, []);

  // Handle click outside predictions dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchInputRef.current && !searchInputRef.current.contains(event.target as Node)) {
        setShowPredictions(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle dealer search input changes
  const handleDealerSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDealerSearch(value);
    
    if (value.length >= 2 && autocompleteService.current) {
      autocompleteService.current.getPlacePredictions(
        {
          input: value,
          componentRestrictions: { country: ['de', 'at', 'ch'] }, // Restrict to Germany, Austria, Switzerland
          types: ['(cities)', 'postal_code', 'locality', 'sublocality', 'administrative_area_level_1', 'administrative_area_level_2']
        },
        (predictions: PlacePrediction[] | null, status: string) => {
          if (status === window.google.maps.places.PlacesServiceStatus.OK && predictions) {
            setPlacePredictions(predictions);
            setShowPredictions(true);
          } else {
            setPlacePredictions([]);
            setShowPredictions(false);
          }
        }
      );
    } else {
      setPlacePredictions([]);
      setShowPredictions(false);
    }
  };

  // Handle selection of a prediction
  const handlePredictionSelect = (prediction: PlacePrediction) => {
    setDealerSearch(prediction.description);
    setShowPredictions(false);
  };

  const handleStartBerater = () => {
    startBeraterFlow({ mode: "dialog", initialStep: 1 });
  };

  return (
    <Layout>
      <main className="flex-1">
        {/* Section 1: Above-the-Fold Hero Section (100vh) */}
        <section className="relative w-full h-screen flex flex-col justify-center items-center">
          <div className="relative z-20 max-w-3xl text-center px-6 flex flex-col items-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Freiheit erleben. Komfort genießen.
            </h1>
            <p className="mb-8 text-lg md:text-xl text-gray-600">
              Entdecken Sie unsere hochwertigen Wohnmobile – innovativ, komfortabel, individuell.
            </p>
            <Button asChild size="lg" className="px-8 py-6 text-base">
              <Link to="/modelle">Jetzt Modell entdecken</Link>
            </Button>
          </div>
          
          {/* Scroll indicator positioned higher in the viewport to ensure visibility */}
          <div className="absolute bottom-[15vh] left-1/2 transform -translate-x-1/2 flex flex-col items-center">
            <ArrowDown className="h-6 w-6 text-gray-400 mb-1" />
            <span className="text-sm text-gray-400">Nach unten scrollen</span>
          </div>
        </section>

        {/* Models & CTA Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            {/* Main section heading */}
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
              Welches Wohnmobil passt zu mir?
            </h2>
            
            {/* Filter tab buttons - pill style */}
            <div className="flex justify-center mb-4">
              <ToggleGroup 
                type="single" 
                value={activeFilter}
                onValueChange={(value) => value && setActiveFilter(value)} 
                className="border rounded-full overflow-hidden shadow-sm p-1 flex-wrap justify-center"
              >
                <ToggleGroupItem value="alle" className="rounded-full text-sm md:text-base px-4 py-2 transition-all duration-200">
                  Alle
                </ToggleGroupItem>
                <ToggleGroupItem value="alkoven" className="rounded-full text-sm md:text-base px-4 py-2 transition-all duration-200">
                  Alkoven
                </ToggleGroupItem>
                <ToggleGroupItem value="teilintegriert" className="rounded-full text-sm md:text-base px-4 py-2 transition-all duration-200">
                  Teilintegriert
                </ToggleGroupItem>
                <ToggleGroupItem value="integriert" className="rounded-full text-sm md:text-base px-4 py-2 transition-all duration-200">
                  Integriert
                </ToggleGroupItem>
                <ToggleGroupItem value="vans" className="rounded-full text-sm md:text-base px-4 py-2 transition-all duration-200">
                  Vans
                </ToggleGroupItem>
              </ToggleGroup>
            </div>

            {/* Updated Type explanation box with generic circle placeholders */}
            <div className="bg-gray-100 rounded-md p-4 mb-8 max-w-3xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex justify-center md:justify-start">
                  {/* Generic circle placeholder with consistent size */}
                  <div className="bg-gray-300 rounded-full p-3 w-16 h-16 flex items-center justify-center">
                    <Circle size={32} className="text-gray-600" />
                  </div>
                </div>
                <p className="text-gray-700 text-center md:text-left">
                  {wohnmobiltypenErklaerungen[activeFilter].text}
                </p>
              </div>
            </div>

            {/* Model cards carousel - with consistent spacing and sizing */}
            <div className="mb-16">
              <Carousel className="w-full">
                <CarouselContent>
                  {filteredModels.map((model) => (
                    <CarouselItem 
                      key={model.name} 
                      className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 pl-4"
                    >
                      <Card className="h-full transition-transform duration-200 hover:shadow-lg hover:-translate-y-1">
                        <CardContent className="p-4">
                          {/* Fixed aspect ratio for consistent image dimensions */}
                          <div className="mb-4">
                            <AspectRatio ratio={16 / 9} className="bg-gray-200 rounded-md" />
                          </div>
                          <h3 className="text-lg font-bold mb-2 line-clamp-2">{model.name}</h3>
                          <p className="text-sm text-gray-600 mb-4 line-clamp-1">{model.description}</p>
                          <Button variant="outline" asChild className="w-full">
                            <Link to={model.path}>Mehr erfahren</Link>
                          </Button>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                
                {/* Navigation arrows - only visible on desktop */}
                <div className="hidden md:block">
                  <CarouselPrevious className="-left-12" />
                  <CarouselNext className="-right-12" />
                </div>
              </Carousel>
            </div>
            
            {/* CTA Cards - dark background with white text and buttons */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {ctaCards.map((card, index) => (
                <Card key={index} className="h-full bg-[#0E1122] text-white border-0 overflow-hidden transition-transform duration-200 hover:transform hover:scale-[1.02]">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="mb-6 flex justify-center">
                      <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                        {/* Icon placeholder */}
                        <div className="w-6 h-6" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-center">{card.title}</h3>
                    <p className="text-gray-200 mb-6 flex-grow text-center">{card.description}</p>
                    {card.isBeratung ? (
                      <Button onClick={handleStartBerater} variant="outline" className="mt-auto w-full bg-white text-[#0E1122] hover:bg-white/90 hover:text-[#0E1122] border-0">
                        {card.buttonText}
                      </Button>
                    ) : card.isExternal ? (
                      <Button asChild variant="outline" className="mt-auto w-full bg-white text-[#0E1122] hover:bg-white/90 hover:text-[#0E1122] border-0">
                        <a href={card.path} target="_blank" rel="noopener noreferrer">
                          {card.buttonText}
                        </a>
                      </Button>
                    ) : (
                      <Button asChild variant="outline" className="mt-auto w-full bg-white text-[#0E1122] hover:bg-white/90 hover:text-[#0E1122] border-0">
                        <Link to={card.path}>{card.buttonText}</Link>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Include the Wohnmobilberater component */}
        <Wohnmobilberater />

        {/* Section 6: Händlersuche */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Händler in Ihrer Nähe</h2>
            <p className="text-gray-600 mb-6">
              Besuchen Sie einen unserer autorisierten Händler und erleben Sie unsere Wohnmobile live.
            </p>
            
            {/* Search input with Google Places Autocomplete */}
            <div className="flex gap-2 mb-6">
              <div className="flex-1 relative">
                <Input 
                  ref={searchInputRef}
                  placeholder="Ort oder PLZ eingeben"
                  value={dealerSearch}
                  onChange={handleDealerSearchChange}
                  className="flex-1 w-full"
                  aria-label="Ort oder PLZ Suche"
                  autoComplete="off"
                />
                
                {/* Autocomplete dropdown */}
                {showPredictions && placePredictions.length > 0 && (
                  <div className="absolute z-10 w-full bg-white mt-1 shadow-lg rounded-md border border-gray-200">
                    <ul className="py-1">
                      {placePredictions.map((prediction) => (
                        <li
                          key={prediction.place_id}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                          onClick={() => handlePredictionSelect(prediction)}
                        >
                          {prediction.description}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <Button asChild className="flex items-center gap-2">
                <Link to={`/haendler${dealerSearch ? `?location=${encodeURIComponent(dealerSearch)}` : ''}`}>
                  <Search size={18} className="mr-1" />
                  <span>Händler finden</span>
                </Link>
              </Button>
            </div>
            
            {/* Map placeholder */}
            <div className="w-full h-64 bg-gray-200 rounded-md"></div>
          </div>
        </section>

        {/* Section 7: News and Events */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Aktuelles & Events</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {newsItems.map((news) => (
                <Card key={news.title} className="h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="text-sm text-gray-500 mb-2">{news.date}</div>
                    <h3 className="text-xl font-bold mb-2">{news.title}</h3>
                    <p className="text-gray-600 mb-4 flex-grow">{news.description}</p>
                    <Button variant="outline" asChild className="mt-auto">
                      <Link to={news.path}>Weiterlesen</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <Button variant="outline" asChild>
                <Link to="/news">Alle News</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Home;
