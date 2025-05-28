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
  CarouselPrevious, 
  CarouselIndicators 
} from "@/components/ui/carousel";
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
import { ChevronDown, ArrowDown, Circle, Search, MapPin, Video } from "lucide-react";
import { Input } from "@/components/ui/input";
import useEmblaCarousel from "embla-carousel-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MapComponent from "@/components/dealers/MapComponent";

// Modellliste in der spezifischen Reihenfolge (nicht alphabetisch sortiert)
// Updated with requested text revisions ensuring all descriptions are consistent in length
const modelTypes = [
  { name: "Van", description: "Kompakte Fahrzeuge für flexibles Reisen. Ideal für urbane Abenteuer mit maximaler Wendigkeit.", path: "/modelle/van", type: "vans" },
  { name: "Activa One", description: "Praktische Wohnmobile für Einsteiger und Familien. Bis 6 Personen reisen mit optimiertem Platz.", path: "/modelle/activa-one", type: "alkoven" },
  { name: "Profila T – Fiat", description: "Komfortabler Teilintegrierter auf Fiat-Basis. Grundriss, Technik und Fahrkomfort im perfekten Mix.", path: "/modelle/profila-t-fiat", type: "teilintegriert" },
  { name: "Profila RS", description: "Großzügiger Wohnraum mit cleverer Raumaufteilung. Hoher Reisekomfort und flexible Nutzung.", path: "/modelle/profila-rs", type: "teilintegriert" },
  { name: "Profila T – Mercedes", description: "Premium Teilintegrierte auf Mercedes-Basis. Erstklassiger Fahrkomfort trifft auf elegantes Design.", path: "/modelle/profila-t-mercedes", type: "teilintegriert" },
  { name: "Contura", description: "Design und Komfort in perfekter Harmonie. Zeitlose Eleganz mit cleverer Funktionalität.", path: "/modelle/contura", type: "teilintegriert" },
  { name: "Integra Line – Fiat", description: "Luxuriöser Wohnkomfort auf solider Fiat-Basis. Großzügige Raumwirkung und intelligente Technik.", path: "/modelle/integra-line-fiat", type: "integriert" },
  { name: "Integra Line GT – Mercedes", description: "Premium Integrierter auf Mercedes-Basis. Fahrgefühl, Ausstattung und Qualität auf Top-Niveau.", path: "/modelle/integra-line-gt", type: "integriert" },
  { name: "Integra", description: "Luxus auf Rädern für höchste Ansprüche. Maximale Autarkie, Top-Komfort und innovative Technik.", path: "/modelle/integra", type: "integriert" },
  { name: "Xtura", description: "Das Abenteuer-Wohnmobil für Entdecker. Robuste Technik und smarte Details für jedes Terrain.", path: "/modelle/xtura", type: "teilintegriert" }
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

// CTA cards data - updated to use navigation instead of overlay
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
    path: "/berater",
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

// Content for the "Entdecken Sie EURA MOBIL" cards
const euraCards = [
  {
    title: "Über EURA MOBIL",
    content: "Seit 1959 steht EURA MOBIL für Qualität und Ingenieurskunst im Wohnmobilbau.\nIn Sprendlingen entstehen unsere Fahrzeuge mit Präzision, Sorgfalt und Leidenschaft.\nAls Teil der Trigano-Gruppe kombinieren wir deutsche Fertigung mit europäischem Weitblick – für langlebige, moderne Reisemobile.",
    linkText: "Mehr erfahren",
    linkPath: "/ueber-eura-mobil"
  },
  {
    title: "Qualität & Vorteile",
    content: "EURA MOBIL steht für winterfeste Isolation, langlebige Materialien und clevere Raumnutzung.\nUnsere Sealed Structure, durchdachter Möbelbau und doppelte Böden machen den Unterschied – erleben Sie kompromisslose Qualität auf allen Ebenen.",
    linkText: "Mehr erfahren",
    linkPath: "/qualitaet"
  },
  {
    title: "Werksführung",
    content: "Unsere Fertigung in Sprendlingen zeigt, was moderne Produktion bedeutet:\ndigital geplant, handwerklich umgesetzt, geprüft nach höchsten Standards.\nEntdecken Sie, wie echte Qualität entsteht – Schritt für Schritt, live vor Ort.",
    linkText: "Mehr erfahren",
    linkPath: "/werksfuehrung"
  }
];

// News items data - expanded to 4 items with more details
const newsItems = [
  {
    title: "Neuheiten 2025 vorgestellt",
    date: "12.05.2025",
    description: "Entdecken Sie die aktuellen Neuheiten und innovativen Modelle für die kommende Saison. Besuchen Sie uns auf der Messe.",
    path: "/news/neuheiten-2025",
    image: "news-placeholder-1"
  },
  {
    title: "Caravan Salon Düsseldorf - Besuchen Sie uns in Halle 5",
    date: "28.08.2025",
    description: "Besuchen Sie uns auf dem Caravan Salon in Düsseldorf und erleben Sie unsere Wohnmobile hautnah. Wir freuen uns auf Ihren Besuch.",
    path: "/news/caravan-salon-2025",
    image: "news-placeholder-2"
  },
  {
    title: "Nachhaltige Innovationen im Wohnmobilbau",
    date: "03.06.2025",
    description: "Wir setzen auf umweltfreundliche Materialien und Produktionsverfahren. Erfahren Sie mehr über unsere nachhaltigen Innovationen.",
    path: "/news/nachhaltige-innovationen",
    image: "news-placeholder-3"
  },
  {
    title: "Neues Servicecenter in München eröffnet",
    date: "15.07.2025",
    description: "Ab sofort können Sie unser neues Servicecenter in München besuchen. Profitieren Sie von umfassenden Service- und Wartungsleistungen.",
    path: "/news/servicecenter-muenchen",
    image: "news-placeholder-4"
  }
];

// Interface for Google Places prediction
interface PlacePrediction {
  description: string;
  place_id: string;
}

// Add specific window type declaration for Google Places
declare global {
  interface Window {
    google: any;
    initGoogleAutocomplete: () => void;
  }
}

// Define button text mapping for wohnmobiltypen CTA buttons
const wohnmobiltypenButtonText = {
  alkoven: "Mehr über Alkoven-Wohnmobile",
  teilintegriert: "Teilintegrierte Wohnmobile entdecken",
  integriert: "Integrierte Wohnmobile im Überblick",
  vans: "Was macht Vans besonders?",
};

// Define the anchor links for each wohnmobiltyp - corrected to match actual section IDs
const wohnmobiltypenLinks = {
  alkoven: "/wohnmobiltypen#alkoven",
  teilintegriert: "/wohnmobiltypen#teilintegriert", 
  integriert: "/wohnmobiltypen#integriert",
  vans: "/wohnmobiltypen#van",
};

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("alle");
  const [isTypesExpanded, setIsTypesExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState("unternehmen");
  const [activeVerticalTab, setActiveVerticalTab] = useState("unternehmen");
  
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
  const placesServiceRef = useRef<any>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Load Google Maps script with Places API - updated implementation
  useEffect(() => {
    // Function to initialize the Google Places Autocomplete
    const initPlacesAutocomplete = () => {
      if (window.google && window.google.maps && window.google.maps.places) {
        try {
          placesServiceRef.current = new window.google.maps.places.AutocompleteService();
          console.log("Home page: Google Places Autocomplete initialized successfully");
        } catch (error) {
          console.error("Error initializing Places Autocomplete:", error);
        }
      } else {
        console.error("Google Maps Places library not available");
      }
    };

    // Check if script is already loaded
    if (window.google && window.google.maps && window.google.maps.places) {
      initPlacesAutocomplete();
    } else {
      // Define callback for when API loads
      window.initGoogleAutocomplete = () => {
        initPlacesAutocomplete();
      };

      // Load the script if it's not already loaded
      const existingScript = document.getElementById('google-maps-script');
      if (!existingScript) {
        const googleMapsScript = document.createElement('script');
        googleMapsScript.id = 'google-maps-script';
        googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyC1bL2XXLL3OK510dcAO-5lSwyrKjfzro8&libraries=places&callback=initGoogleAutocomplete`;
        googleMapsScript.async = true;
        googleMapsScript.defer = true;
        document.head.appendChild(googleMapsScript);

        return () => {
          if (document.head.contains(googleMapsScript)) {
            document.head.removeChild(googleMapsScript);
          }
        };
      }
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

  // Handle dealer search input changes - improved implementation
  const handleDealerSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDealerSearch(value);
    
    if (value.length >= 2 && placesServiceRef.current) {
      try {
        placesServiceRef.current.getPlacePredictions(
          {
            input: value,
            componentRestrictions: { country: ['de', 'at', 'ch'] }, // Restrict to Germany, Austria, Switzerland
            types: ['(cities)', 'postal_code', 'locality', 'sublocality', 'administrative_area_level_1', 'administrative_area_level_2']
          },
          (predictions: PlacePrediction[] | null, status: string) => {
            if (status === window.google.maps.places.PlacesServiceStatus.OK && predictions) {
              console.log("Home page: Got predictions:", predictions.length);
              setPlacePredictions(predictions);
              setShowPredictions(true);
            } else {
              console.log("Home page: No predictions or error:", status);
              setPlacePredictions([]);
              setShowPredictions(false);
            }
          }
        );
      } catch (error) {
        console.error("Home page: Error getting place predictions:", error);
        setPlacePredictions([]);
        setShowPredictions(false);
      }
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

  // New carousel hook for news items
  const [newsEmblaRef] = useEmblaCarousel({
    align: "start",
    slidesToScroll: 1,
    dragFree: false,
    containScroll: "trimSnaps"
  });

  return (
    <Layout>
      <main className="flex-1">
        {/* Section 1: Hero Section (reduced to ~75vh) */}
        <section className="relative w-full h-[75vh] flex flex-col justify-center items-center">
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
          
          {/* Scroll indicator - made more subtle */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity">
            <ArrowDown className="h-5 w-5 text-gray-500 mb-1 animate-bounce" />
            <span className="text-xs text-gray-500">Scrollen</span>
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

            {/* Type explanation box */}
            <div className="bg-gray-100 rounded-md p-4 mb-4 max-w-3xl mx-auto">
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
            
            {/* New CTA button that only appears for specific filters */}
            {activeFilter !== 'alle' && (
              <div className="flex justify-center mb-8">
                <Button asChild size="lg" className="mt-4">
                  <Link to={wohnmobiltypenLinks[activeFilter]}>
                    {wohnmobiltypenButtonText[activeFilter]}
                  </Link>
                </Button>
              </div>
            )}

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
                        <CardContent className="p-4 flex flex-col h-full">
                          {/* Fixed aspect ratio for consistent image dimensions */}
                          <div className="mb-4">
                            <AspectRatio ratio={16 / 9}>
                              <div className="w-full h-full bg-gray-200 rounded-md flex items-center justify-center">
                                <span className="text-xs text-gray-400">Modellbild</span>
                              </div>
                            </AspectRatio>
                          </div>
                          <h3 className="text-lg font-bold mb-2">{model.name}</h3>
                          <p className="text-sm text-gray-600 mb-4 flex-grow h-[60px] overflow-hidden">
                            {model.description}
                          </p>
                          <Button variant="outline" asChild className="w-full mt-auto">
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
                
                {/* Add indicators */}
                <CarouselIndicators />
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
                    {card.isExternal ? (
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

        {/* Video Placeholder Section - Updated with consistent width and 16:9 aspect ratio */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto"> {/* Updated to match dealer map width */}
            <div className="w-full bg-gray-200 rounded-lg overflow-hidden relative">
              <AspectRatio ratio={16/9}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Video className="h-16 w-16 text-gray-400" />
                </div>
              </AspectRatio>
            </div>
          </div>
        </section>

        {/* New Three-Column Cards Section: About EURA MOBIL */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center">Entdecken Sie EURA MOBIL</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {euraCards.map((card, index) => (
                <Card key={index} className="h-full bg-white shadow-sm hover:shadow transition-shadow duration-300">
                  <CardContent className="p-6 flex flex-col h-full">
                    <h3 className="text-xl font-bold mb-4">{card.title}</h3>
                    
                    <p className="text-gray-600 mb-6 whitespace-pre-line flex-grow">
                      {card.content}
                    </p>
                    
                    {/* Small square grey icon placeholder */}
                    <div className="w-12 h-12 bg-gray-200 rounded mb-6 flex items-center justify-center">
                      <Circle className="h-6 w-6 text-gray-400" />
                    </div>
                    
                    <Button asChild variant="outline" className="mt-auto w-fit">
                      <Link to={card.linkPath}>{card.linkText}</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: Händlersuche - Updated with 16:9 aspect ratio map placeholder */}
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
            
            {/* Updated MapComponent with 16:9 aspect ratio */}
            <div className="w-full">
              <MapComponent 
                dealers={[]} 
                googleMapsLoaded={false}
                onSelectDealer={() => {}}
              />
            </div>
          </div>
        </section>

        {/* Section 7: News and Events - Updated with Carousel AND INDICATORS */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Aktuelles & Events</h2>
            
            {/* News items carousel */}
            <div className="mb-10">
              <Carousel className="w-full">
                <CarouselContent className="-ml-4" ref={newsEmblaRef}>
                  {newsItems.map((news, index) => (
                    <CarouselItem key={index} className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                      <Card className="h-full">
                        <CardContent className="p-4 flex flex-col h-full">
                          {/* Image placeholder with fixed aspect ratio */}
                          <div className="mb-3">
                            <AspectRatio ratio={16/9} className="bg-gray-200 rounded-md" />
                          </div>
                          
                          {/* Date */}
                          <div className="text-sm text-gray-500 mb-2">{news.date}</div>
                          
                          {/* Title - limited to 2 lines */}
                          <h3 className="text-lg font-semibold mb-2 line-clamp-2">{news.title}</h3>
                          
                          {/* Description - limited to 3 lines */}
                          <p className="text-sm text-gray-600 mb-4 line-clamp-3 flex-grow">{news.description}</p>
                          
                          {/* Button */}
                          <Button variant="outline" asChild size="sm" className="mt-auto w-full">
                            <Link to={news.path}>Mehr erfahren</Link>
                          </Button>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                
                {/* Non-sticky navigation arrows - only visible on desktop */}
                <div className="hidden md:block">
                  <CarouselPrevious className="left-0 md:-left-5" />
                  <CarouselNext className="right-0 md:-right-5" />
                </div>
                
                {/* Add indicators */}
                <CarouselIndicators />
              </Carousel>
            </div>
            
            {/* "View all news" button */}
            <div className="flex justify-center">
              <Button asChild variant="outline" className="px-6">
                <Link to="/news">Alle Meldungen ansehen</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Home;
