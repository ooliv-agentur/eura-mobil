
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

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-center mb-4">Modellvergleich</h1>
        
        <p className="text-center mb-6">
          Wählen Sie zwei Modelle, um deren Ausstattung, Maße und Besonderheiten direkt miteinander zu vergleichen.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div>
            <label className="block mb-2">Modell A auswählen</label>
            <Select value={selectedModelA} onValueChange={setSelectedModelA}>
              <SelectTrigger>
                <SelectValue placeholder="Bitte wählen" />
              </SelectTrigger>
              <SelectContent>
                {models.map((model) => (
                  <SelectItem key={`a-${model.id}`} value={model.id}>
                    {model.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block mb-2">Modell B auswählen</label>
            <Select value={selectedModelB} onValueChange={setSelectedModelB}>
              <SelectTrigger>
                <SelectValue placeholder="Bitte wählen" />
              </SelectTrigger>
              <SelectContent>
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
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border p-2 text-left">Eigenschaft</th>
                  <th className="border p-2 text-left">
                    {models.find(m => m.id === selectedModelA)?.name || "Modell A"}
                  </th>
                  <th className="border p-2 text-left">
                    {models.find(m => m.id === selectedModelB)?.name || "Modell B"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2 font-medium">Beschreibung</td>
                  <td className="border p-2">{modelA?.description}</td>
                  <td className="border p-2">{modelB?.description}</td>
                </tr>
                <tr>
                  <td className="border p-2 font-medium">Gesamtlänge</td>
                  <td className="border p-2">{modelA?.length}</td>
                  <td className="border p-2">{modelB?.length}</td>
                </tr>
                <tr>
                  <td className="border p-2 font-medium">Breite</td>
                  <td className="border p-2">{modelA?.width}</td>
                  <td className="border p-2">{modelB?.width}</td>
                </tr>
                <tr>
                  <td className="border p-2 font-medium">Höhe</td>
                  <td className="border p-2">{modelA?.height}</td>
                  <td className="border p-2">{modelB?.height}</td>
                </tr>
                <tr>
                  <td className="border p-2 font-medium">Schlafplätze</td>
                  <td className="border p-2">{modelA?.sleepingPlaces}</td>
                  <td className="border p-2">{modelB?.sleepingPlaces}</td>
                </tr>
                <tr>
                  <td className="border p-2 font-medium">Sitzplätze</td>
                  <td className="border p-2">{modelA?.seats}</td>
                  <td className="border p-2">{modelB?.seats}</td>
                </tr>
                <tr>
                  <td className="border p-2 font-medium">Grundriss-Typ</td>
                  <td className="border p-2">{modelA?.layout}</td>
                  <td className="border p-2">{modelB?.layout}</td>
                </tr>
                <tr>
                  <td className="border p-2 font-medium">Preisbereich</td>
                  <td className="border p-2">{modelA?.priceRange}</td>
                  <td className="border p-2">{modelB?.priceRange}</td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-12 bg-gray-50 rounded-md mb-8">
            <p className="text-gray-500">
              Bitte wählen Sie zwei Modelle aus, um den Vergleich anzuzeigen.
            </p>
          </div>
        )}

        <p className="text-sm text-gray-500 mb-8 text-center">
          Die technischen Daten basieren auf der aktuellen Modellgeneration. Änderungen vorbehalten.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4 mt-8">
          <Button asChild>
            <Link to="/modelle">Zur Modellübersicht</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/konfigurator">Jetzt konfigurieren</Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link to="/haendler">Händler finden</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Modellvergleich;
