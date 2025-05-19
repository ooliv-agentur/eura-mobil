import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import AnimatedHeroBackground from "@/components/AnimatedHeroBackground";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";

// Erweiterte Modellliste
const modelTypes = [
  { name: "Activa One", description: "Kompakte Wohnmobile für Einsteiger und Familien", path: "/modelle/activa-one" },
  { name: "Profila T", description: "Komfort und Flexibilität für unterwegs", path: "/modelle/profila-t" },
  { name: "Profila RS", description: "Großzügiger Wohnraum mit praktischer Aufteilung", path: "/modelle/profila-rs" },
  { name: "Integra", description: "Luxus auf Rädern mit erstklassiger Ausstattung", path: "/modelle/integra" },
  { name: "Contura", description: "Design und Komfort in perfekter Harmonie", path: "/modelle/contura" },
  { name: "Xtura", description: "Für Abenteurer mit höchsten Ansprüchen", path: "/modelle/xtura" },
];

const newsItems = [
  { 
    title: "Caravan Salon 2025", 
    description: "Besuchen Sie uns auf dem größten Wohnmobil-Event des Jahres", 
    date: "14.09.2025",
    path: "/news/caravan-salon-2025"
  },
  { 
    title: "Neue Modelle 2026", 
    description: "Entdecken Sie unsere Innovation für die kommende Saison", 
    date: "01.08.2025",
    path: "/news/neue-modelle-2026"
  },
];

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <Layout>
      <main className="flex-1">
        {/* Enhanced Hero Section */}
        <section className="relative w-full h-screen flex justify-center items-center overflow-hidden">
          <AnimatedHeroBackground className="z-0" isPaused={menuOpen} />
          <div 
            className="absolute inset-0 bg-gradient-to-b from-transparent to-white/30 z-10"
            aria-hidden="true"
          />
          <div className="relative z-20 max-w-3xl text-center px-6 py-12 md:p-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-black">
              Freiheit erleben. Komfort genießen.
            </h1>
            <p className="mb-8 text-lg md:text-xl text-black/80">
              Entdecken Sie unsere hochwertigen Wohnmobile – innovativ, komfortabel, individuell.
            </p>
            <Button asChild size="lg" className="px-8 py-6 text-base">
              <Link to="/modelle">Jetzt Modell entdecken</Link>
            </Button>
          </div>
        </section>

        {/* Model Types Carousel */}
        <section className="py-10 px-4">
          <h2 className="text-2xl font-bold mb-6 text-center">Unsere Wohnmobil-Serien</h2>
          
          {/* Mobile Carousel */}
          <div className="md:hidden">
            <Carousel className="w-full">
              <CarouselContent>
                {modelTypes.map((model) => (
                  <CarouselItem key={model.name} className="pl-1 md:basis-1/2 lg:basis-1/3">
                    <Card className="h-full">
                      <CardContent className="p-6 flex flex-col h-full">
                        <div className="h-40 bg-gray-200 mb-4 flex items-center justify-center text-gray-400">
                          [Modellbild]
                        </div>
                        <h3 className="text-xl font-bold">{model.name}</h3>
                        <p className="text-gray-600 mb-4 flex-grow">{model.description}</p>
                        <Button variant="outline" asChild className="w-full">
                          <Link to={model.path}>Mehr erfahren</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-1 bg-white" />
              <CarouselNext className="right-1 bg-white" />
            </Carousel>
          </div>
          
          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-4">
            {modelTypes.map((model) => (
              <Card key={model.name} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="h-40 bg-gray-200 mb-4 flex items-center justify-center text-gray-400">
                    [Modellbild]
                  </div>
                  <h3 className="text-xl font-bold">{model.name}</h3>
                  <p className="text-gray-600 mb-4">{model.description}</p>
                  <Button variant="outline" asChild className="w-full">
                    <Link to={model.path}>Mehr erfahren</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* "Alle Modelle ansehen" Button */}
          <div className="mt-8 text-center">
            <Button asChild>
              <Link to="/modelle">Alle Modelle ansehen</Link>
            </Button>
          </div>
        </section>

        {/* Wohnmobilberater Teaser */}
        <section className="py-10 px-4 bg-gray-100">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Welches Wohnmobil passt zu mir?</h2>
            <p className="mb-6">
              Finden Sie in nur wenigen Schritten das perfekte Wohnmobil für Ihre Bedürfnisse und Ansprüche.
            </p>
            <Button asChild>
              <Link to="/berater">Jetzt starten</Link>
            </Button>
          </div>
        </section>

        {/* Dealer Search Teaser */}
        <section className="py-10 px-4">
          <div className="flex flex-col md:flex-row items-center max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="w-full md:w-1/2 h-48 md:h-full bg-gray-200 flex items-center justify-center text-gray-400">
              [Karte]
            </div>
            <div className="w-full md:w-1/2 p-6">
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

        {/* News Teaser */}
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
