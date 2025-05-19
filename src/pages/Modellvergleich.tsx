
import React, { useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const models = [
  { id: "activa-one", name: "Activa One" },
  { id: "xtura", name: "Xtura" },
  { id: "integra", name: "Integra" },
  { id: "contura", name: "Contura" },
  { id: "terrestra", name: "Terrestra" },
];

const Modellvergleich = () => {
  const [selectedModelA, setSelectedModelA] = useState<string>("");
  const [selectedModelB, setSelectedModelB] = useState<string>("");

  const getModelDetails = (modelId: string) => {
    switch (modelId) {
      case "activa-one":
        return {
          length: "5,99 m",
          width: "2,20 m",
          height: "2,75 m",
          sleepingPlaces: "2-4",
          seats: "4",
          layout: "Teilintegriert",
          priceRange: "ab 65.900 €",
        };
      case "xtura":
        return {
          length: "7,41 m",
          width: "2,32 m",
          height: "2,95 m",
          sleepingPlaces: "4",
          seats: "4",
          layout: "Integriert",
          priceRange: "ab 82.500 €",
        };
      case "integra":
        return {
          length: "8,99 m",
          width: "2,32 m",
          height: "3,05 m",
          sleepingPlaces: "4-5",
          seats: "4",
          layout: "Integriert",
          priceRange: "ab 120.900 €",
        };
      case "contura":
        return {
          length: "7,24 m",
          width: "2,32 m",
          height: "2,86 m",
          sleepingPlaces: "4",
          seats: "4",
          layout: "Teilintegriert",
          priceRange: "ab 73.300 €",
        };
      case "terrestra":
        return {
          length: "6,99 m",
          width: "2,32 m",
          height: "2,95 m",
          sleepingPlaces: "2-4",
          seats: "4",
          layout: "Teilintegriert",
          priceRange: "ab 76.400 €",
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
