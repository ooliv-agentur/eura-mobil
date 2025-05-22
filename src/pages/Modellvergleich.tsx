import React, { useState, useEffect, useRef } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Check, ChevronRight, Info } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const models = [
  { 
    id: "van", 
    name: "Van", 
    teaser: "Kompakter Van für 2 Personen",
    length: "5,99 - 6,36 m",
    sleepingPlaces: "2",
    description: "Der Van ist das kompakteste Modell mit hoher Mobilität, einfachem Handling und einer durchdachten Raumaufteilung für maximale Flexibilität."
  },
  { 
    id: "activa-one", 
    name: "Activa One",
    teaser: "Alkoven-Modell ideal für Familien",
    length: "6,50 - 7,57 m",
    sleepingPlaces: "6", 
    description: "Der Activa One bietet mit seinem Alkoven-Konzept reichlich Schlafplätze und ist besonders für Familien mit Kindern geeignet."
  },
  { 
    id: "profila-t-fiat", 
    name: "Profila T - Fiat",
    teaser: "Teilintegrierter auf Fiat-Basis",
    length: "6,85 - 7,41 m",
    sleepingPlaces: "4", 
    description: "Der Profila T auf Fiat-Basis kombiniert Fahrkomfort mit durchdachter Raumgestaltung und bietet komfortable Reisemobilität."
  },
  { 
    id: "profila-rs", 
    name: "Profila RS",
    teaser: "Teilintegrierter mit Hubbett",
    length: "7,09 - 7,41 m",
    sleepingPlaces: "4", 
    description: "Der Profila RS zeichnet sich durch ein innovatives Hubbett über der Sitzgruppe aus und bietet damit flexiblen Schlafkomfort."
  },
  { 
    id: "profila-t-mercedes", 
    name: "Profila T - Mercedes",
    teaser: "Teilintegrierter auf Mercedes-Basis",
    length: "6,99 - 7,41 m",
    sleepingPlaces: "4", 
    description: "Der Profila T auf Mercedes-Basis überzeugt durch hochwertige Fahrzeugtechnik und exzellente Fahreigenschaften."
  },
  { 
    id: "contura", 
    name: "Contura",
    teaser: "Premium-Teilintegrierter mit Luxus",
    length: "7,31 - 7,61 m",
    sleepingPlaces: "4", 
    description: "Der Contura setzt Maßstäbe im Premium-Segment der Teilintegrierten mit exklusiver Ausstattung und elegantem Design."
  },
  { 
    id: "integra-line-fiat", 
    name: "Integra Line - Fiat",
    teaser: "Vollintegrierter mit harmonischer Raumaufteilung",
    length: "7,15 - 7,81 m",
    sleepingPlaces: "4", 
    description: "Der Integra Line auf Fiat-Basis bietet als Vollintegrierter eine harmonische Raumgestaltung und beeindruckende Panoramasicht."
  },
  { 
    id: "integra-line-gt-mercedes", 
    name: "Integra Line GT - Mercedes",
    teaser: "Vollintegrierter mit Mercedes-Technologie",
    length: "7,15 - 7,81 m",
    sleepingPlaces: "4", 
    description: "Der Integra Line GT kombiniert Mercedes-Qualität mit luxuriösem Wohnkomfort und modernster Fahrzeugtechnik."
  },
  { 
    id: "integra", 
    name: "Integra",
    teaser: "Flaggschiff mit höchstem Luxus",
    length: "7,15 - 8,99 m",
    sleepingPlaces: "4", 
    description: "Der Integra ist das absolute Flaggschiff der EURA MOBIL-Flotte mit erstklassigem Luxus, innovativsten Technologien und maximaler Ausstattung."
  },
  { 
    id: "xtura", 
    name: "Xtura",
    teaser: "Innovatives Crossover-Modell",
    length: "7,41 - 7,61 m",
    sleepingPlaces: "4", 
    description: "Der Xtura vereint als Crossover-Modell die Vorteile verschiedener Bauformen mit modernster Technologie und innovativem Design."
  },
];

const Modellvergleich = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const modelAFromQuery = queryParams.get('v1');
  const modelBFromQuery = queryParams.get('v2');

  const [selectedModelA, setSelectedModelA] = useState<string>(modelAFromQuery || "");
  const [selectedModelB, setSelectedModelB] = useState<string>(modelBFromQuery || "");
  const isMobile = useIsMobile();
  const comparisonRef = useRef<HTMLDivElement>(null);

  // Update URL when models change
  useEffect(() => {
    if (selectedModelA && selectedModelB) {
      navigate(`/wohnmobile/modellvergleich?v1=${selectedModelA}&v2=${selectedModelB}`, { replace: true });
      
      // Scroll to comparison section with animation
      setTimeout(() => {
        comparisonRef.current?.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }, 300);
    }
  }, [selectedModelA, selectedModelB, navigate]);

  const getModelDetails = (modelId: string) => {
    switch (modelId) {
      case "van":
        return {
          length: "5,99 - 6,36 m",
          width: "2,20 m",
          height: "2,75 m",
          sleepingPlaces: "2",
          seats: "4",
          layout: "Van",
          priceRange: "62.000 € - 78.000 €",
          description: "Kompakter Camper Van mit durchdachter Raumnutzung für spontane Reisen und maximale Flexibilität."
        };
      case "activa-one":
        return {
          length: "6,50 - 7,57 m",
          width: "2,32 m",
          height: "2,95 m",
          sleepingPlaces: "6",
          seats: "5",
          layout: "Alkoven",
          priceRange: "69.000 € - 89.000 €",
          description: "Alkoven-Modell mit familiärer Gemütlichkeit und viel Stauraum. Ideal für Familien mit Kindern."
        };
      case "profila-t-fiat":
        return {
          length: "6,85 - 7,41 m",
          width: "2,32 m",
          height: "2,95 m",
          sleepingPlaces: "4",
          seats: "4",
          layout: "Teilintegriert",
          priceRange: "85.000 € - 100.000 €",
          description: "Teilintegriertes Wohnmobil auf Fiat-Basis mit herrlichen Ausblicken und bester Ausstattung."
        };
      case "profila-rs":
        return {
          length: "7,09 - 7,41 m",
          width: "2,32 m",
          height: "2,95 m",
          sleepingPlaces: "4",
          seats: "4",
          layout: "Teilintegriert",
          priceRange: "95.000 € - 108.000 €",
          description: "Teilintegriertes Wohnmobil mit Schlafkomfort auf Sternenniveau dank Hubbett über der Sitzgruppe."
        };
      case "profila-t-mercedes":
        return {
          length: "6,99 - 7,41 m",
          width: "2,32 m",
          height: "2,95 m",
          sleepingPlaces: "4",
          seats: "4",
          layout: "Teilintegriert",
          priceRange: "109.000 € - 120.000 €",
          description: "Teilintegriertes Modell auf Mercedes-Basis mit überragender Fahrdynamik und luxuriösem Interieur."
        };
      case "contura":
        return {
          length: "7,31 - 7,61 m",
          width: "2,32 m",
          height: "2,95 m",
          sleepingPlaces: "4",
          seats: "4",
          layout: "Teilintegriert",
          priceRange: "115.000 € - 130.000 €",
          description: "Teilintegriertes Premium-Wohnmobil mit exklusiver Ausstattung und höchstem Reisekomfort."
        };
      case "integra-line-fiat":
        return {
          length: "7,15 - 7,81 m",
          width: "2,32 m",
          height: "3,05 m",
          sleepingPlaces: "4",
          seats: "4",
          layout: "Integriert",
          priceRange: "105.000 € - 125.000 €",
          description: "Vollintegriertes Modell mit harmonischer Raumaufteilung und beeindruckender Wohnatmosphäre."
        };
      case "integra-line-gt-mercedes":
        return {
          length: "7,15 - 7,81 m",
          width: "2,32 m",
          height: "3,05 m",
          sleepingPlaces: "4",
          seats: "4",
          layout: "Integriert",
          priceRange: "125.000 € - 140.000 €",
          description: "Vollintegriertes Luxus-Wohnmobil auf Mercedes-Basis mit innovativen Technologien und elegantem Design."
        };
      case "integra":
        return {
          length: "7,15 - 8,99 m",
          width: "2,32 m",
          height: "3,15 m",
          sleepingPlaces: "4",
          seats: "4",
          layout: "Integriert",
          priceRange: "135.000 € - 160.000 €",
          description: "Vollintegriertes Flaggschiff der EURA MOBIL-Flotte mit höchstem Luxus und einzigartigem Wohngefühl."
        };
      case "xtura":
        return {
          length: "7,41 - 7,61 m",
          width: "2,32 m",
          height: "3,05 m",
          sleepingPlaces: "4",
          seats: "4",
          layout: "Crossover",
          priceRange: "120.000 € - 145.000 €",
          description: "Innovatives Crossover-Modell mit herausragender Raumeffizienz und modernem, automobilen Design."
        };
      default:
        return {
          length: "-",
          width: "-",
          height: "-",
          sleepingPlaces: "-",
          seats: "-",
          layout: "-",
          priceRange: "-",
          description: "-",
        };
    }
  };

  const modelA = selectedModelA ? getModelDetails(selectedModelA) : null;
  const modelB = selectedModelB ? getModelDetails(selectedModelB) : null;

  // Properties to compare
  const properties = [
    { key: "description", label: "Beschreibung" },
    { key: "length", label: "Gesamtlänge" },
    { key: "width", label: "Breite" },
    { key: "height", label: "Höhe" },
    { key: "sleepingPlaces", label: "Schlafplätze" },
    { key: "seats", label: "Sitzplätze" },
    { key: "layout", label: "Grundriss-Typ" },
    { key: "priceRange", label: "Preisbereich" }
  ];

  const modelAName = models.find(m => m.id === selectedModelA)?.name || "Modell A";
  const modelBName = models.find(m => m.id === selectedModelB)?.name || "Modell B";

  // Handle model selection
  const handleModelSelection = (modelId: string) => {
    if (selectedModelA === modelId) {
      // Deselect if already selected
      setSelectedModelA("");
    } else if (selectedModelB === modelId) {
      // Deselect if already selected
      setSelectedModelB("");
    } else if (!selectedModelA) {
      // Select as model A if A is empty
      setSelectedModelA(modelId);
    } else if (!selectedModelB) {
      // Select as model B if B is empty
      setSelectedModelB(modelId);
    } else {
      // Replace model A if both are selected
      setSelectedModelA(modelId);
    }
  };

  // Model card component
  const ModelCard = ({ model, isSelected, role }: { model: typeof models[0], isSelected: boolean, role: string }) => (
    <Card 
      className={`cursor-pointer transition-all hover:shadow-md ${isSelected ? 'ring-2 ring-primary ring-offset-2' : 'border'}`}
      onClick={() => handleModelSelection(model.id)}
    >
      <div className="relative">
        <AspectRatio ratio={16/9} className="bg-[#E5E7EB]" />
        {isSelected && (
          <div className="absolute top-2 right-2 bg-primary text-white rounded-full p-1">
            <Check className="h-4 w-4" />
          </div>
        )}
        {isSelected && (
          <div className="absolute top-2 left-2 bg-primary text-white text-xs font-bold px-2 py-1 rounded-md">
            {role}
          </div>
        )}
      </div>
      <CardContent className="p-3">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-sm">{model.name}</h3>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="rounded-full bg-muted p-1 cursor-help">
                  <Info className="h-3 w-3 text-muted-foreground" />
                </div>
              </TooltipTrigger>
              <TooltipContent side="top" className="max-w-[250px] text-sm">
                {model.description}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <p className="text-xs text-muted-foreground mb-2">{model.teaser}</p>
        <div className="flex text-xs justify-between">
          <div>
            <span className="text-muted-foreground">Länge: </span>
            <span>{model.length}</span>
          </div>
          <div>
            <span className="text-muted-foreground">Schlafpl.: </span>
            <span>{model.sleepingPlaces}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  // Get URL for a model category
  const getCategoryUrl = (modelId: string): string => {
    switch(modelId) {
      case "van":
        return "/wohnmobile/vans";
      case "activa-one":
        return "/wohnmobile/alkoven";
      case "profila-t-fiat":
        return "/wohnmobile/teilintegrierte/profila-t-fiat";
      case "profila-rs":
        return "/wohnmobile/teilintegrierte/profila-rs";
      case "profila-t-mercedes":
        return "/wohnmobile/teilintegrierte/profila-t-mercedes";
      case "contura":
        return "/wohnmobile/teilintegrierte/contura";
      case "integra-line-fiat":
        return "/wohnmobile/integrierte/integra-line-fiat";
      case "integra-line-gt-mercedes":
        return "/wohnmobile/integrierte/integra-line-gt-mercedes";
      case "integra":
        return "/wohnmobile/integrierte/integra";
      case "xtura":
        return "/wohnmobile/teilintegrierte/xtura";
      default:
        return "/wohnmobile";
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-6 md:py-8">
        <h1 className="text-xl md:text-2xl font-bold text-center mb-4">Modellvergleich</h1>
        
        <p className="text-center mb-4 md:mb-6 text-sm md:text-base">
          Wählen Sie zwei Modelle, um deren Ausstattung, Maße und Besonderheiten direkt miteinander zu vergleichen.
        </p>

        <div className="mb-8">
          <div className="mb-4">
            <h2 className="text-lg font-medium mb-2">Modellauswahl</h2>
            <p className="text-sm text-muted-foreground mb-4">
              Klicken Sie auf zwei Modelle, um diese zu vergleichen.
              {selectedModelA && selectedModelB ? (
                <span className="block mt-2 text-primary">Beide Modelle ausgewählt</span>
              ) : (
                <span className="block mt-2">
                  {!selectedModelA && !selectedModelB 
                    ? "Wählen Sie zwei Modelle aus" 
                    : "Wählen Sie noch ein Modell aus"}
                </span>
              )}
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {models.map(model => (
              <ModelCard 
                key={model.id} 
                model={model} 
                isSelected={selectedModelA === model.id || selectedModelB === model.id}
                role={selectedModelA === model.id ? "Modell A" : "Modell B"}
              />
            ))}
          </div>
        </div>

        {(selectedModelA && selectedModelB) ? (
          <div ref={comparisonRef}>
            {/* Desktop comparison table */}
            <div className="hidden md:block mb-8">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-1/4">Eigenschaft</TableHead>
                    <TableHead>{modelAName}</TableHead>
                    <TableHead>{modelBName}</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {properties.map((prop) => (
                    <TableRow key={prop.key}>
                      <TableCell className="font-medium">{prop.label}</TableCell>
                      <TableCell>{modelA?.[prop.key as keyof typeof modelA]}</TableCell>
                      <TableCell>{modelB?.[prop.key as keyof typeof modelB]}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Mobile stacked comparison view */}
            <div className="md:hidden">
              <div className="sticky top-0 z-10 bg-white dark:bg-gray-900 py-2 border-b flex items-center justify-around text-center font-medium shadow-sm mb-4">
                <div className="w-1/2 px-2">{modelAName}</div>
                <div className="w-1/2 px-2">{modelBName}</div>
              </div>
              
              <div className="space-y-4 mb-8">
                {properties.map((prop) => (
                  <div key={prop.key} className="border rounded-lg overflow-hidden">
                    <div className="bg-gray-50 dark:bg-gray-800 p-3 font-medium border-b">
                      {prop.label}
                    </div>
                    <div className="flex flex-col sm:flex-row">
                      <div className="p-3 border-b sm:border-b-0 sm:border-r sm:w-1/2 bg-white dark:bg-gray-900">
                        <span className="text-sm text-gray-500 block sm:hidden mb-1">{modelAName}</span>
                        <div>{modelA?.[prop.key as keyof typeof modelA]}</div>
                      </div>
                      <div className="p-3 sm:w-1/2 bg-white dark:bg-gray-900">
                        <span className="text-sm text-gray-500 block sm:hidden mb-1">{modelBName}</span>
                        <div>{modelB?.[prop.key as keyof typeof modelB]}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-8 md:py-12 bg-gray-50 dark:bg-gray-800 rounded-md mb-8">
            <p className="text-gray-500">
              Bitte wählen Sie zwei Modelle aus, um den Vergleich anzuzeigen.
            </p>
          </div>
        )}

        <p className="text-xs md:text-sm text-gray-500 mb-6 md:mb-8 text-center">
          Die technischen Daten basieren auf der aktuellen Modellgeneration. Änderungen vorbehalten.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-2 md:gap-4 mt-6 md:mt-8">
          <Button asChild size="sm" className="md:text-base md:py-6">
            <Link to="/wohnmobile">Zur Modellübersicht</Link>
          </Button>
          <Button variant="outline" asChild size="sm" className="md:text-base md:py-6">
            <Link to="/konfigurator">Jetzt konfigurieren</Link>
          </Button>
          <Button variant="secondary" asChild size="sm" className="md:text-base md:py-6">
            <Link to="/haendler">Händler finden</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Modellvergleich;
