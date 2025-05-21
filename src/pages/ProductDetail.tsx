import React from "react";
import { Link, useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useWohnmobilberaterTrigger } from "@/hooks/useWohnmobilberaterTrigger";
import { Check, Download, MapPin, Settings } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useIsMobile } from "@/hooks/use-mobile";

// Model data repository - could later be moved to a separate file
const modelsData = {
  "van": {
    id: "van",
    name: "Van",
    intro: "Im neuen Premium Van von Eura Mobil verwandelt das exklusive Ambiente jeden Moment in einen besonderen Augenblick. Spüren Sie die edlen Materialien und erleben Sie die individuellen Details, die den Eura Mobil Van zu Ihrem ganz persönlichen mobilen Zuhause machen. Nehmen Sie sich die Zeit und lassen Sie das Interieur auf sich wirken...",
    heroImage: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=900&auto=format",
    galleryImages: [
      "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=500&auto=format",
      "https://images.unsplash.com/photo-1527576539890-dfa815648363?w=500&auto=format",
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=500&auto=format",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&auto=format"
    ],
    technicalData: {
      länge: "5,99 – 6,36 m",
      breite: "2,05 m",
      höhe: "2,65 m",
      schlafplätze: "2-3",
      sitzplätze: "4"
    },
    highlights: [
      "Tisch mit klappbarer Platte, Cupholder und schwenkbarer Verlängerung",
      "Komfort-Kaltschaummatratzen mit geteilten und damit klappbaren Bettrahmen",
      "Waschraum mit schwenkbarer Duschwand",
      "Staufächer im Doppelboden",
      "Mineralstoff-Spüle"
    ],
    layouts: [
      {
        id: "v-635-eb",
        name: "V 635 EB",
        image: "https://images.unsplash.com/photo-1527576539890-dfa815648363?w=500&auto=format",
        length: "6,36 m",
        sleepingPlaces: "2"
      },
      {
        id: "v-635-hb",
        name: "V 635 HB",
        image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=500&auto=format",
        length: "6,36 m",
        sleepingPlaces: "2"
      },
      {
        id: "v-595-hb",
        name: "V 595 HB",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&auto=format",
        length: "5,99 m",
        sleepingPlaces: "2"
      }
    ],
    interior: [
      { name: "Kommunikation", description: "Boxen, LED-Lampen und USB-Steckdosen" },
      { name: "Spüle", description: "Mineralstoff-Spüle" },
      { name: "Dinetten-Tisch", description: "Mit abgesenkter Ablage" },
      { name: "Küche", description: "Mit Gewürzregal" }
    ],
    upholsteryTypes: ["Eco-Leder Schwarz", "Eco-Leder Beige", "Stoff-Kombination Grau"],
    equipment: {
      chassis: [
        "Fiat Ducato 35L Chassis, Kastenwagen",
        "Euro 6D Final inkl. Ad Blue und Rußpartikelfilter",
        "Fahrer- + Beifahrerairbag",
        "ABS, ASR, ESP inkl. Traktion+, Hilldescent",
        "Klimaanlage manuell",
        "Tempomat",
        "Kraftstofftank 90 Liter",
        "Zentralverriegelung mit Funkfernbedienung",
        "Tagfahrlicht",
        "Elektrische Fensterheber vorn",
        "Radzierblenden",
        "Fix and Go Pannenset",
        "Stoßfänger hinten schwarz"
      ],
      body: [
        "Geräusch- und wärmedämmende Isolierung in Dach, Boden und Seiten",
        "Aufbaufarbe weiß",
        "Karosseriebündige, isolierte Rahmenfenster mit Schnellverschlüssen",
        "Fenster mit Mückengitter und Verdunklung",
        "Zwei Seitenfenster im Schlafbereich (595 HB: 1)",
        "Ausstellfenster im Heck",
        "Außenbeleuchtung",
        "Elektrische Trittstufe"
      ],
      driversCabin: [
        "Sitzbezüge im Wohnraumpolsterstoff",
        "Fahrerhausteppich",
        "Übergangsloser, kopfhoher Durchgang",
        "Kartenfächer über Türen",
        "Doppel-Leseleuchten",
        "Eco-Leder-Blende mit LED-Ambientebeleuchtung"
      ],
      livingArea: [
        "Ergonomische Dinette mit abgerundeten Kanten",
        "Klapptisch mit schwenkbarer Verlängerung und Cupholder",
        "Polster in Eco-Leder / Stoff-Kombination",
        "Doppelboden-Staufächer (1 Auszug, 1 Klappfach, 1 Bodenfach)",
        "Hinterlüftete Oberschränke mit Ambientebeleuchtung",
        "Möbeldekor \"Beach Home\"",
        "Kleiderschrank mit ausziehbarer Stange",
        "Flauschbespannung an Decke, textile Wandbespannung",
        "Eco-Leder-Blenden an Fensterrahmen & Dachhauben",
        "Metall-Klappenaufsteller",
        "Verchromte Schrankverschlüsse",
        "LED-Funktions- und Ambientebeleuchtung",
        "USB-Ports & TV-Vorbereitung"
      ],
      kitchen: [
        "Einteilige Mineralstoff-Arbeitsplatte mit Spüle & Klapp-Erweiterung",
        "Küchenarmatur ausziehbar/versenkbar",
        "Breite Auszüge mit Soft-Close",
        "Zwei-Flammen-Gaskocher",
        "Zentral angeordnete Gasabsperrhähne",
        "Kompressorkühlschrank (90 l)",
        "Gewürzregal mit Acrylglas-Reling & Beleuchtung",
        "Ambientebeleuchtung am Küchenblock & Oberschrank",
        "Zwei Klappfächer im Eingangsbereich (1x Flaschenhalter)",
        "Außenzugänglicher Auszug im Küchenblock",
        "Einhängbare Tischschiene mit Klappblende"
      ],
      bathroom: [
        "Waschraum mit schwenkbarer Duschwand",
        "Duschfläche bis zu 60×90 cm",
        "Holz-Duschrost",
        "Mineralstoff-Waschbecken mit Click-Clack-Verschluss",
        "Staufächer & Spiegelschrank",
        "Raumtür (3 cm stark) mit Eco-Leder-Griff",
        "Cassettentoilette",
        "Fenster mit Mückengitter & Verdunklung"
      ],
      sleeping: [
        "Heckbetten mit Tellerfedern (595 HB) oder Kaltschaummatratzen",
        "Ladefläche unter Betten aufstellbar",
        "Modul-Stauboxen (635 EB), Auffahrrampe & Abdeckung (635 HB)",
        "Dachstauschränke mit Beleuchtung",
        "Eco-Leder-Eckmodule mit Lautsprechern",
        "Mini Heki Dachluke",
        "Schwenkbare LED-Lesespots mit USB",
        "Stoffbespannte Hecktüren mit ausstellbaren Fenstern"
      ],
      installation: [
        "4 kW Dieselheizung",
        "Warmwasserversorgung mit Einhebel-Mischbatterie",
        "Druckwasserpumpe",
        "Beheizter Frischwassertank im Innenraum",
        "Beheizter Abwassertank unterflur",
        "Frostsichere Wasserablasshähne",
        "Gaskasten im Heck",
        "Außendusche (nicht bei 595 HB)"
      ],
      electrical: [
        "100 Ah Lithium-Ionen-Batterie",
        "230 V-Steckdosen in Küche, Sitzgruppe & Bad",
        "Separat schaltbare Funktions-/Ambientebeleuchtung",
        "TV-Vorbereitung & 12 V-Steckdose",
        "2× USB in Wohnraum & Schlafbereich",
        "Trennschalter Starter-/Wohnraumbatterie",
        "Elektronischer Ladeautomat",
        "CEE-Außenanschluss mit Sicherungsautomat",
        "FI-Schutzschalter",
        "Control Panel über Eingang",
        "CP+ Heizungssteuerung mit Crashsensor"
      ]
    }
  },
  "activa-one": {
    id: "activa-one",
    name: "Activa One",
    intro: "Kompaktes Einsteigermodell mit cleverer Raumnutzung. Ideal für Paare und kleine Familien.",
    heroImage: "https://images.unsplash.com/photo-1532941781729-b8e6bf6a3d0c?w=900&auto=format",
    galleryImages: [
      "https://images.unsplash.com/photo-1532941781729-b8e6bf6a3d0c?w=500&auto=format",
      "https://images.unsplash.com/photo-1593150532356-223f7151d4c4?w=500&auto=format",
      "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=500&auto=format",
      "https://images.unsplash.com/photo-1464851707681-f9d5fdaccea8?w=500&auto=format"
    ],
    technicalData: {
      länge: "5,99 m",
      breite: "2,20 m",
      höhe: "2,75 m",
      gewicht: "2.850 kg",
      schlafplätze: "2-4",
      sitzplätze: "4"
    },
    highlights: [
      "Kompakte Außenmaße für hohe Wendigkeit",
      "Großzügiger Stauraum in der Heckgarage",
      "Vollausgestattete Küche mit 3-Flammen-Herd",
      "Separate Duschkabine im Badezimmer",
      "Großes Hubbett im Heck"
    ],
    downloadItems: [
      { name: "Technische Daten", type: "PDF", url: "#" },
      { name: "Preisliste", type: "PDF", url: "#" },
      { name: "360° Tour", type: "Web", url: "#" }
    ]
  }
};

// Equipment section tab keys in German
const equipmentTabs = {
  chassis: "Chassis",
  body: "Aufbau",
  driversCabin: "Fahrerhaus",
  livingArea: "Wohnraum",
  kitchen: "Küche",
  bathroom: "Bad",
  sleeping: "Schlafbereich",
  installation: "Installation",
  electrical: "Elektroversorgung"
};

// Type definition for our model data structure
type ModelData = {
  id: string;
  name: string;
  intro: string;
  heroImage: string;
  galleryImages: string[];
  technicalData: Record<string, string>;
  highlights: string[];
  layouts?: Array<{
    id: string;
    name: string;
    image: string;
    length: string;
    sleepingPlaces: string;
  }>;
  interior?: Array<{
    name: string;
    description: string;
  }>;
  upholsteryTypes?: string[];
  equipment?: Record<string, string[]>;
  downloadItems?: Array<{
    name: string;
    type: string;
    url: string;
  }>;
}

// Type for our models data object
type ModelsDataType = Record<string, ModelData>;

const ProductDetail = () => {
  const { modelId } = useParams();
  const isMobile = useIsMobile();
  const { startBeraterFlow } = useWohnmobilberaterTrigger();
  
  // Default to van if no model ID or model not found
  const modelDetails = modelId && modelId in modelsData 
    ? modelsData[modelId as keyof typeof modelsData] 
    : modelsData["van"];
  
  const handleKonfiguratorClick = () => {
    window.open("https://eura.tef-kat.com/konfigurator-eura/Home/Start?culture=de-DE", "_blank", "noopener noreferrer");
  };
  
  const handleBeratungClick = () => {
    startBeraterFlow();
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 pb-12">
        {/* Hero Section */}
        <div className="relative">
          <div className="w-full h-72 sm:h-96 bg-gray-200">
            <img 
              src={modelDetails.heroImage} 
              alt={modelDetails.name} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div className="container mx-auto px-4 mt-6">
          {/* Model Title and Introduction */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold">{modelDetails.name}</h1>
            <p className="text-gray-700 mt-3 text-lg">{modelDetails.intro}</p>
          </div>
          
          {/* Technical Data Summary */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6 bg-gray-50 p-4 rounded-lg">
            <div className="flex flex-col items-center p-2">
              <span className="text-sm text-gray-600">Länge</span>
              <span className="font-semibold text-lg">{modelDetails.technicalData.länge}</span>
            </div>
            <div className="flex flex-col items-center p-2">
              <span className="text-sm text-gray-600">Sitzplätze</span>
              <span className="font-semibold text-lg">{modelDetails.technicalData.sitzplätze}</span>
            </div>
            <div className="flex flex-col items-center p-2">
              <span className="text-sm text-gray-600">Schlafplätze</span>
              <span className="font-semibold text-lg">{modelDetails.technicalData.schlafplätze}</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-6">
            <Button 
              className="flex items-center justify-center gap-2"
              onClick={handleKonfiguratorClick}
            >
              <Settings size={18} />
              Konfigurator starten
            </Button>
            <Button 
              variant="outline" 
              className="flex items-center justify-center gap-2" 
              asChild
            >
              <Link to="/modellvergleich">
                Modelle vergleichen
              </Link>
            </Button>
            <Button 
              className="bg-blue-600 hover:bg-blue-700 flex items-center justify-center gap-2"
              onClick={handleBeratungClick}
            >
              Beratung starten
            </Button>
          </div>
          
          {/* Highlights Section */}
          <section className="my-10">
            <h2 className="text-2xl font-semibold mb-4">Highlights der Baureihe</h2>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <ul className="space-y-3">
                {modelDetails.highlights.map((highlight, index) => (
                  <li key={index} className="flex gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
          
          {/* Grundrisse (Layouts) Section */}
          <section className="my-10">
            <h2 className="text-2xl font-semibold mb-4">Grundrisse</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {modelDetails.layouts && modelDetails.layouts.map((layout) => (
                <Card key={layout.id} className="overflow-hidden">
                  <AspectRatio ratio={16/9}>
                    <img 
                      src={layout.image} 
                      alt={layout.name}
                      className="w-full h-full object-cover"
                    />
                  </AspectRatio>
                  <CardContent className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{layout.name}</h3>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="text-gray-600">Länge:</span> {layout.length}
                      </div>
                      <div>
                        <span className="text-gray-600">Schlafplätze:</span> {layout.sleepingPlaces}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
          
          {/* Innenraum (Interior) Section */}
          <section className="my-10">
            <h2 className="text-2xl font-semibold mb-4">Innenraum</h2>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
              <div className="lg:col-span-3">
                <AspectRatio ratio={16/9}>
                  <img 
                    src={modelDetails.galleryImages[0]} 
                    alt="Innenraum"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </AspectRatio>
              </div>
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg p-4 shadow-sm h-full">
                  <ul className="space-y-4 divide-y">
                    {modelDetails.interior && modelDetails.interior.map((item, index) => (
                      <li key={index} className={`${index > 0 ? 'pt-4' : ''}`}>
                        <div className="font-medium">{item.name}</div>
                        <div className="text-gray-600">{item.description}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
          
          {/* Polster (Upholstery) Section */}
          <section className="my-10">
            <h2 className="text-2xl font-semibold mb-4">Polstervarianten</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {modelDetails.upholsteryTypes && modelDetails.upholsteryTypes.map((type, index) => (
                <div key={index} className="border rounded-lg overflow-hidden">
                  <div className="bg-gray-200 h-40"></div>
                  <div className="p-3">
                    <h3 className="font-medium">{type}</h3>
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          {/* Serienausstattung (Standard Equipment) Section */}
          <section className="my-10">
            <h2 className="text-2xl font-semibold mb-4">Serienausstattung</h2>
            
            {isMobile ? (
              <Accordion type="single" collapsible className="w-full">
                {modelDetails.equipment && Object.entries(modelDetails.equipment).map(([key, items]) => (
                  <AccordionItem key={key} value={key}>
                    <AccordionTrigger className="py-4 px-0">
                      <span className="text-lg">{equipmentTabs[key as keyof typeof equipmentTabs]}</span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 pl-1">
                        {items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            ) : (
              <Tabs defaultValue="chassis" className="w-full">
                <TabsList className="w-full flex flex-wrap h-auto mb-4 bg-gray-100 p-1">
                  {Object.entries(equipmentTabs).map(([key, label]) => (
                    <TabsTrigger key={key} value={key} className="text-sm flex-grow">
                      {label}
                    </TabsTrigger>
                  ))}
                </TabsList>
                {modelDetails.equipment && Object.entries(modelDetails.equipment).map(([key, items]) => (
                  <TabsContent key={key} value={key} className="mt-4">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                      {items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </TabsContent>
                ))}
              </Tabs>
            )}
          </section>
          
          {/* Bottom CTA Section */}
          <section className="my-10 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-center">Interessiert am Van?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              <Button 
                className="flex items-center justify-center gap-2"
                onClick={handleKonfiguratorClick}
              >
                <Settings size={18} />
                Jetzt konfigurieren
              </Button>
              <Button 
                variant="outline" 
                className="flex items-center justify-center gap-2" 
                asChild
              >
                <Link to="/haendler">
                  <MapPin size={18} />
                  Händler finden
                </Link>
              </Button>
              <Button 
                className="bg-blue-600 hover:bg-blue-700 flex items-center justify-center gap-2"
                onClick={handleBeratungClick}
              >
                Beratung starten
              </Button>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
