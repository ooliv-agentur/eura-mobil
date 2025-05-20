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
import { ChevronDown, ArrowDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import useEmblaCarousel from "embla-carousel-react";

// Modellliste in der spezifischen Reihenfolge (nicht alphabetisch sortiert)
const modelTypes = [
  { name: "Van", description: "Kompakte Fahrzeuge für flexibles Reisen", path: "/modelle/van", type: "vans" },
  { name: "Activa One", description: "Kompakte Wohnmobile für Einsteiger und Familien", path: "/modelle/activa-one", type: "alkoven" },
  { name: "Profila T – Fiat", description: "Komfort und Flexibilität auf Fiat-Basis", path: "/modelle/profila-t-fiat", type: "teilintegriert" },
  { name: "Profila RS", description: "Großzügiger Wohnraum mit praktischer Aufteilung", path: "/modelle/profila-rs", type: "teilintegriert" },
  { name: "Profila T – Mercedes", description: "Premium Teilintegrierte auf Mercedes-Basis", path: "/modelle/profila-t-mercedes", type: "teilintegriert" },
  { name: "Contura", description: "Design und Komfort in perfekter Harmonie", path: "/modelle/contura", type: "integriert" },
  { name: "Integra Line – Fiat", description: "Luxuriöser Wohnkomfort auf Fiat-Basis", path: "/modelle/integra-line-fiat", type: "integriert" },
  { name: "Integra Line GT – Mercedes", description: "Premium Integrierte mit Mercedes Fahrgestell", path: "/modelle/integra-line-gt", type: "integriert" },
  { name: "Integra", description: "Luxus auf Rädern mit erstklassiger Ausstattung", path: "/modelle/integra", type: "integriert" },
  { name: "Xtura", description: "Für Abenteurer mit höchsten Ansprüchen", path: "/modelle/xtura", type: "vans" }
];

// Wohnmobiltypen Erklärungen
const wohnmobiltypenErklaerungen = [
  {
    title: "Alkoven Wohnmobile",
    description: "In den Alkoven-Wohnmobilen von Eura Mobil schafft die optimale Raumnutzung Platz für bis zu 6 Familienmitglieder oder Freunde – zum Wohnen, Schlafen und Erleben.",
    path: "/wohnmobiltypen#alkoven",
  },
  {
    title: "Teilintegrierte Wohnmobile",
    description: "Kompakter Aufbau mit hochwertiger Ausstattung – ideal für Paare oder kleine Familien.",
    path: "/wohnmobiltypen#teilintegriert",
  },
  {
    title: "Integrierte Wohnmobile",
    description: "Durchgängig gestalteter Wohnraum mit maximalem Komfort und exklusivem Design.",
    path: "/wohnmobiltypen#integriert",
  },
  {
    title: "Vans",
    description: "Kompakte Fahrzeuge für flexible Reisen, wendig, alltagstauglich und hochwertig verarbeitet.",
    path: "/wohnmobiltypen#vans",
  }
];

// Entry paths for the 3-card section
const entryPaths = [
  {
    title: "Modelle entdecken",
    description: "Stöbern Sie durch alle Wohnmobil-Serien von EURA MOBIL.",
    buttonText: "Jetzt Modelle entdecken",
    path: "/modelle"
  },
  {
    title: "Berater-Tool nutzen",
    description: "Finden Sie mit wenigen Klicks das passende Modell für Ihre Wünsche.",
    buttonText: "Beratung starten",
    path: "#",
    isBeratung: true
  },
  {
    title: "Konfigurator öffnen",
    description: "Passen Sie Ihr Wohnmobil individuell an – direkt im Online-Konfigurator.",
    buttonText: "Zum Konfigurator",
    path: "https://konfigurator.euramobil.de",
    isExternal: true
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
  
  // New state for dealer search input
  const [dealerSearch, setDealerSearch] = useState("");

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
          
          {/* Updated scroll indicator with text */}
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
            <ArrowDown className="h-6 w-6 text-gray-400 mb-1" />
            <span className="text-sm text-gray-400">Nach unten scrollen</span>
          </div>
        </section>

        {/* Section 2: Einstiegskarten - 3 Entry Paths */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {entryPaths.map((entry, index) => (
                <Card key={index} className="h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="mb-4">
                      <AspectRatio ratio={16/9} className="bg-gray-200 rounded-md" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{entry.title}</h3>
                    <p className="text-gray-600 mb-6 flex-grow">{entry.description}</p>
                    {entry.isBeratung ? (
                      <Button onClick={handleStartBerater} className="mt-auto w-full">
                        {entry.buttonText}
                      </Button>
                    ) : entry.isExternal ? (
                      <Button asChild className="mt-auto w-full">
                        <a href={entry.path} target="_blank" rel="noopener noreferrer">
                          {entry.buttonText}
                        </a>
                      </Button>
                    ) : (
                      <Button asChild className="mt-auto w-full">
                        <Link to={entry.path}>{entry.buttonText}</Link>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Wohnmobil-Serien with carousel and filter */}
        <section className="py-12 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Unsere Wohnmobil-Serien</h2>
            
            {/* Horizontally scrollable filter bar */}
            <div className="overflow-x-auto pb-4 mb-6">
              <div className="flex justify-center min-w-max">
                <ToggleGroup 
                  type="single" 
                  value={activeFilter}
                  onValueChange={(value) => value && setActiveFilter(value)} 
                  className="border rounded-full overflow-hidden shadow-sm p-1"
                >
                  <ToggleGroupItem value="alle" className="rounded-full text-sm px-4">Alle</ToggleGroupItem>
                  <ToggleGroupItem value="alkoven" className="rounded-full text-sm px-4">Alkoven</ToggleGroupItem>
                  <ToggleGroupItem value="teilintegriert" className="rounded-full text-sm px-4">Teilintegriert</ToggleGroupItem>
                  <ToggleGroupItem value="integriert" className="rounded-full text-sm px-4">Integriert</ToggleGroupItem>
                  <ToggleGroupItem value="vans" className="rounded-full text-sm px-4">Vans</ToggleGroupItem>
                </ToggleGroup>
              </div>
            </div>

            {/* Model carousel with consistent image sizing */}
            <Carousel className="relative">
              <CarouselContent>
                {filteredModels.map((model) => (
                  <CarouselItem 
                    key={model.name} 
                    className="basis-full md:basis-1/2 lg:basis-1/3 pl-4"
                  >
                    <Card className="h-full">
                      <CardContent className="p-6 flex flex-col h-full">
                        {/* Fixed aspect ratio for consistent image dimensions */}
                        <div className="mb-4">
                          <AspectRatio ratio={16 / 9} className="bg-gray-200 rounded-md" />
                        </div>
                        <h3 className="text-xl font-bold mb-1">{model.name}</h3>
                        <p className="text-gray-600 mb-4 flex-grow text-sm">{model.description}</p>
                        <Button variant="outline" asChild className="w-full mt-auto">
                          <Link to={model.path}>Mehr erfahren</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              {/* Navigation arrows - only visible on desktop */}
              <div className="hidden lg:block">
                <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2" />
                <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2" />
              </div>
            </Carousel>
            
            {/* Wohnmobiltypen erklärt - Collapsible Section */}
            <div className="mt-10 border rounded-lg">
              <Collapsible 
                className="w-full"
                open={isTypesExpanded}
                onOpenChange={setIsTypesExpanded}
              >
                <div className="flex items-center justify-between p-4">
                  <h3 className="text-xl font-medium">Wohnmobiltypen erklärt</h3>
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="sm" className="w-9 p-0">
                      <ChevronDown className={`h-4 w-4 transition-transform ${isTypesExpanded ? "transform rotate-180" : ""}`} />
                      <span className="sr-only">Toggle</span>
                    </Button>
                  </CollapsibleTrigger>
                </div>
                <CollapsibleContent className="p-4 pt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
                    {wohnmobiltypenErklaerungen.map((typ) => (
                      <div key={typ.title} className="flex flex-col p-4 border rounded-md h-full">
                        <Skeleton className="w-full aspect-video bg-gray-200 mb-4" />
                        <h4 className="font-bold mb-2">{typ.title}</h4>
                        <p className="text-sm text-gray-600 mb-4 flex-grow">{typ.description}</p>
                        <Button variant="outline" asChild className="w-full mt-auto">
                          <Link to={typ.path}>Mehr erfahren</Link>
                        </Button>
                      </div>
                    ))}
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>

            {/* "Alle Modelle ansehen" Button */}
            <div className="mt-10 text-center">
              <Button asChild>
                <Link to="/modelle">Alle Modelle ansehen</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Section 4: Wohnmobilberater */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Welches Wohnmobil passt zu mir?</h2>
            <p className="mb-6">
              Finden Sie in nur wenigen Schritten das perfekte Wohnmobil für Ihre Bedürfnisse.
            </p>
            <Button onClick={handleStartBerater} size="lg">
              Jetzt starten
            </Button>
          </div>
        </section>
        
        {/* Include the Wohnmobilberater component */}
        <Wohnmobilberater />

        {/* Section 5: Konfigurator */}
        <section className="py-16 px-4 bg-gray-100">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Image placeholder */}
              <div className="w-full md:w-1/2">
                <AspectRatio ratio={16/9} className="bg-gray-300 rounded-md" />
              </div>
              
              {/* Text and button */}
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h2 className="text-2xl font-bold mb-4">Konfigurieren Sie Ihr Wohnmobil</h2>
                <p className="mb-6 text-gray-600">
                  Wählen Sie eines unserer Modelle und passen Sie es Ihren individuellen Vorlieben an.
                </p>
                <Button asChild>
                  <a 
                    href="https://konfigurator.euramobil.de" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Zum Konfigurator
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Händlersuche */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Händler in Ihrer Nähe</h2>
            <p className="text-gray-600 mb-6">
              Besuchen Sie einen unserer autorisierten Händler und erleben Sie unsere Wohnmobile live.
            </p>
            
            {/* Search input and button */}
            <div className="flex gap-2 mb-6">
              <Input 
                placeholder="Ort oder PLZ eingeben"
                value={dealerSearch}
                onChange={(e) => setDealerSearch(e.target.value)}
                className="flex-1"
              />
              <Button asChild>
                <Link to={`/haendler${dealerSearch ? `?location=${dealerSearch}` : ''}`}>
                  Händler finden
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
