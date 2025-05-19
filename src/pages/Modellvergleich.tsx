
import React, { useState, useEffect } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronRight } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const models = [
  { id: "van", name: "Van" },
  { id: "activa-one", name: "Activa One" },
  { id: "profila-t-fiat", name: "Profila T - Fiat" },
  { id: "profila-rs", name: "Profila RS" },
  { id: "profila-t-mercedes", name: "Profila T - Mercedes" },
  { id: "contura", name: "Contura" },
  { id: "integra-line-fiat", name: "Integra Line - Fiat" },
  { id: "integra-line-gt-mercedes", name: "Integra Line GT - Mercedes" },
  { id: "integra", name: "Integra" },
  { id: "xtura", name: "Xtura" },
];

const Modellvergleich = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const modelAFromQuery = queryParams.get('modelA');
  const modelBFromQuery = queryParams.get('modelB');

  const [selectedModelA, setSelectedModelA] = useState<string>(modelAFromQuery || "");
  const [selectedModelB, setSelectedModelB] = useState<string>(modelBFromQuery || "");
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Check for mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Update URL when models change
  useEffect(() => {
    if (selectedModelA && selectedModelB) {
      navigate(`/modellvergleich?modelA=${selectedModelA}&modelB=${selectedModelB}`, { replace: true });
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

  return (
    <Layout>
      <div className="container mx-auto px-4 py-6 md:py-8">
        <h1 className="text-xl md:text-2xl font-bold text-center mb-4">Modellvergleich</h1>
        
        <p className="text-center mb-4 md:mb-6 text-sm md:text-base">
          Wählen Sie zwei Modelle, um deren Ausstattung, Maße und Besonderheiten direkt miteinander zu vergleichen.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 mb-6">
          <div>
            <label className="block mb-1 text-sm">Modell A auswählen</label>
            <Select value={selectedModelA} onValueChange={setSelectedModelA}>
              <SelectTrigger className="h-9 md:h-10">
                <SelectValue placeholder="Bitte wählen" />
              </SelectTrigger>
              <SelectContent position="item-aligned">
                {models.map((model) => (
                  <SelectItem key={`a-${model.id}`} value={model.id}>
                    {model.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block mb-1 text-sm">Modell B auswählen</label>
            <Select value={selectedModelB} onValueChange={setSelectedModelB}>
              <SelectTrigger className="h-9 md:h-10">
                <SelectValue placeholder="Bitte wählen" />
              </SelectTrigger>
              <SelectContent position="item-aligned">
                {models.map((model) => (
                  <SelectItem key={`b-${model.id}`} value={model.id}>
                    {model.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {(selectedModelA && selectedModelB) ? (
          <>
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
          </>
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
            <Link to="/modelle">Zur Modellübersicht</Link>
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
