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
import { ChevronDown } from "lucide-react";
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

// Wohnmobiltypen Inhalte für den neuen Abschnitt
const wohnmobiltypen = [
  {
    title: "Vans",
    description: "Im neuen Premium Van von Eura Mobil verwandelt das exklusive Ambiente jeden Moment in einen besonderen Augenblick. Spüren Sie die edlen Materialien und erleben Sie die individuellen Details, die den Eura Mobil Van zu Ihrem ganz persönlichen mobilen Zuhause machen.",
    path: "/wohnmobiltypen#vans"
  },
  {
    title: "Alkoven Wohnmobile",
    description: "In den Alkoven-Wohnmobilen von Eura Mobil schafft die optimale Raumnutzung Platz für bis zu 6 Familienmitglieder oder Freunde – zum Wohnen, Schlafen und Erleben. Dank intelligenter Leichtbauarchitektur steht bereits in der Gewichtsklasse unter 3,5 Tonnen ein Premium-Reisemobil bereit, das auch unterwegs ein vollwertiges Zuhause bietet.",
    path: "/wohnmobiltypen#alkoven"
  },
  {
    title: "Teilintegrierte Wohnmobile",
    description: "Nehmen Sie sich mit den Teilintegrierten Wohnmobilen von Eura Mobil die Freiheit, zu zweit oder zusammen mit Freunden oder der Familie, die freie Zeit zu genießen. Und zwar ohne Kompromisse, denn bereits die Klasse der Teilintegrierten Reisemobile von Eura Mobil ist geprägt von Oberklassentechnik – und verfügbar in den verschiedensten Grundrissen und Gewichtsklassen.",
    path: "/wohnmobiltypen#teilintegriert"
  },
  {
    title: "Integrierte Wohnmobile",
    description: "Ferne Regionen bereisen oder neue Städte kennenlernen und gleichzeitig eine vertraute Umgebung dabei haben, die genauso komfortabel ist wie die eigenen vier Wände – dieses Gefühl von Luxus vermitteln Integrierte Reisemobile Eura Mobil in Vollendung. Nicht nur bei den Destinationen, auch bei der Gestaltung des exklusiven Wohnraums sind Ihrer Individualität keine Grenzen gesetzt.",
    path: "/wohnmobiltypen#integriert"
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
  
  const handleStartBerater = () => {
    startBeraterFlow({ mode: "dialog", initialStep: 1 });
  };

  return (
    <Layout>
      <main className="flex-1">
        {/* Fullscreen Hero Section (100vh) mit neutralem Hintergrund */}
        <section className="relative w-full h-screen flex justify-center items-center bg-[#f5f5f5]">
          <div className="relative z-20 max-w-3xl text-center px-6">
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
        </section>

        {/* Updated Model Series with horizontal scrollable carousel */}
        <section className="py-12 px-4">
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

            {/* Fixed model carousel with consistent image sizing */}
            <Carousel className="relative">
              <CarouselContent>
                {filteredModels.map((model) => (
                  <CarouselItem 
                    key={model.name} 
                    className="basis-full md:basis-1/2 lg:basis-1/4 pl-4"
                  >
                    <Card className="h-full">
                      <CardContent className="p-6 flex flex-col h-full">
                        {/* Fixed aspect ratio for consistent image dimensions */}
                        <div className="mb-4">
                          <AspectRatio ratio={16 / 9} className="bg-gray-200 rounded-md overflow-hidden">
                            <Skeleton className="w-full h-full" />
                          </AspectRatio>
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
            
            {/* NEW: Wohnmobiltypen erklärt - Collapsible Section */}
            <div className="mt-12 border rounded-lg">
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
              <Button asChild size="lg" className="px-8">
                <Link to="/modelle">Alle Modelle ansehen</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Configurator Section - New */}
        <section className="py-12 px-4 bg-gray-100">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Image placeholder */}
              <div className="w-full md:w-1/2">
                <AspectRatio ratio={16 / 9} className="bg-gray-300 rounded-md overflow-hidden">
                  <Skeleton className="w-full h-full" />
                </AspectRatio>
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

        {/* Rest der Seite bleibt unverändert */}
        {/* Updated Wohnmobilberater Teaser */}
        <section className="py-10 px-4 bg-gray-100">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Welches Wohnmobil passt zu mir?</h2>
            <p className="mb-6">
              Finden Sie in nur wenigen Schritten das perfekte Wohnmobil für Ihre Bedürfnisse und Ansprüche.
            </p>
            <Button onClick={handleStartBerater}>
              Jetzt starten
            </Button>
          </div>
        </section>
        
        {/* Include the Wohnmobilberater component */}
        <Wohnmobilberater />

        {/* Dealer Search Teaser - Simplified without map */}
        <section className="py-10 px-4">
          <div className="flex flex-col md:flex-row items-center max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="w-full p-6">
              <h2 className="text-2xl font-bold mb-2">Händler in Ihrer Nähe</h2>
              <p className="text-gray-600 mb-4">
                Besuchen Sie einen unserer autorisierten Händler und erleben Sie unsere Wohnmobile live.
              </p>
              <Button asChild>
                <Link to="/haendler">Händler finden</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* News Teaser - Simplified */}
        <section className="py-10 px-4 bg-gray-50">
          <h2 className="text-2xl font-bold mb-6 text-center">Aktuelles & Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {newsItems.map((news) => (
              <Card key={news.title}>
                <CardContent className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{news.date}</div>
                  <h3 className="text-xl font-bold mb-2">{news.title}</h3>
                  <p className="text-gray-600 mb-4">{news.description}</p>
                  <Button variant="outline" asChild>
                    <Link to={news.path}>Weiterlesen</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-6">
            <Button variant="outline" asChild>
              <Link to="/news">Alle News</Link>
            </Button>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Home;
