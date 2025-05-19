
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Compare } from "lucide-react";

// Dummy model data for the comparison
const motorhomeModels = [
  {
    id: "activa-one",
    name: "Activa One",
    gesamtlaenge: "5,99 m",
    breite: "2,20 m",
    hoehe: "2,75 m",
    schlafplaetze: "2-4",
    sitzplaetze: "4",
    grundrisstyp: "Alkoven",
    preisbereich: "ab 69.900 €"
  },
  {
    id: "integra",
    name: "Integra",
    gesamtlaenge: "7,89 m",
    breite: "2,32 m",
    hoehe: "2,92 m",
    schlafplaetze: "4-5",
    sitzplaetze: "4",
    grundrisstyp: "Integriert",
    preisbereich: "ab 129.900 €"
  },
  {
    id: "profila-t",
    name: "Profila T",
    gesamtlaenge: "7,41 m",
    breite: "2,32 m",
    hoehe: "2,86 m",
    schlafplaetze: "2-3",
    sitzplaetze: "4",
    grundrisstyp: "Teilintegriert",
    preisbereich: "ab 89.900 €"
  },
  {
    id: "profila-rs",
    name: "Profila RS",
    gesamtlaenge: "7,41 m",
    breite: "2,32 m",
    hoehe: "2,89 m",
    schlafplaetze: "4",
    sitzplaetze: "4",
    grundrisstyp: "Teilintegriert mit Hubbett",
    preisbereich: "ab 95.900 €"
  },
  {
    id: "contura",
    name: "Contura",
    gesamtlaenge: "8,99 m",
    breite: "2,35 m",
    hoehe: "2,95 m",
    schlafplaetze: "4-6",
    sitzplaetze: "4-5",
    grundrisstyp: "Integriert",
    preisbereich: "ab 149.900 €"
  },
  {
    id: "xtura",
    name: "Xtura",
    gesamtlaenge: "6,99 m",
    breite: "2,18 m",
    hoehe: "2,85 m",
    schlafplaetze: "2",
    sitzplaetze: "4",
    grundrisstyp: "Van",
    preisbereich: "ab 79.900 €"
  }
];

const Modellvergleich = () => {
  const [modelA, setModelA] = useState<string | undefined>();
  const [modelB, setModelB] = useState<string | undefined>();
  const [selectedModelA, setSelectedModelA] = useState<any>(null);
  const [selectedModelB, setSelectedModelB] = useState<any>(null);

  // Update selected model data when dropdown selections change
  useEffect(() => {
    setSelectedModelA(motorhomeModels.find(model => model.id === modelA) || null);
  }, [modelA]);

  useEffect(() => {
    setSelectedModelB(motorhomeModels.find(model => model.id === modelB) || null);
  }, [modelB]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          {/* Heading and Introduction */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-4">Modellvergleich</h1>
            <p className="text-gray-600 mb-6">
              Wählen Sie zwei Modelle, um deren Ausstattung, Maße und Besonderheiten direkt miteinander zu vergleichen.
            </p>
          </div>
          
          {/* Model Selection Dropdowns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div>
              <label htmlFor="modelA" className="block text-sm font-medium mb-2">
                Modell A auswählen
              </label>
              <Select value={modelA} onValueChange={setModelA}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Modell A auswählen" />
                </SelectTrigger>
                <SelectContent>
                  {motorhomeModels.map(model => (
                    <SelectItem key={`a-${model.id}`} value={model.id}>
                      {model.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label htmlFor="modelB" className="block text-sm font-medium mb-2">
                Modell B auswählen
              </label>
              <Select value={modelB} onValueChange={setModelB}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Modell B auswählen" />
                </SelectTrigger>
                <SelectContent>
                  {motorhomeModels.map(model => (
                    <SelectItem key={`b-${model.id}`} value={model.id}>
                      {model.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          {/* Comparison Table */}
          {(selectedModelA || selectedModelB) && (
            <div className="mb-8">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-1/3">Eigenschaft</TableHead>
                      <TableHead className="text-center">
                        {selectedModelA ? selectedModelA.name : "Modell A"}
                      </TableHead>
                      <TableHead className="text-center">
                        {selectedModelB ? selectedModelB.name : "Modell B"}
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Gesamtlänge</TableCell>
                      <TableCell className="text-center">{selectedModelA?.gesamtlaenge || "-"}</TableCell>
                      <TableCell className="text-center">{selectedModelB?.gesamtlaenge || "-"}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Breite</TableCell>
                      <TableCell className="text-center">{selectedModelA?.breite || "-"}</TableCell>
                      <TableCell className="text-center">{selectedModelB?.breite || "-"}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Höhe</TableCell>
                      <TableCell className="text-center">{selectedModelA?.hoehe || "-"}</TableCell>
                      <TableCell className="text-center">{selectedModelB?.hoehe || "-"}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Schlafplätze</TableCell>
                      <TableCell className="text-center">{selectedModelA?.schlafplaetze || "-"}</TableCell>
                      <TableCell className="text-center">{selectedModelB?.schlafplaetze || "-"}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Sitzplätze</TableCell>
                      <TableCell className="text-center">{selectedModelA?.sitzplaetze || "-"}</TableCell>
                      <TableCell className="text-center">{selectedModelB?.sitzplaetze || "-"}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Grundriss-Typ</TableCell>
                      <TableCell className="text-center">{selectedModelA?.grundrisstyp || "-"}</TableCell>
                      <TableCell className="text-center">{selectedModelB?.grundrisstyp || "-"}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Preisbereich</TableCell>
                      <TableCell className="text-center">{selectedModelA?.preisbereich || "-"}</TableCell>
                      <TableCell className="text-center">{selectedModelB?.preisbereich || "-"}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
              <p className="text-xs text-gray-500 italic mt-2">
                Die technischen Daten basieren auf der aktuellen Modellgeneration. Änderungen vorbehalten.
              </p>
            </div>
          )}
          
          {/* Call to Action Buttons */}
          <div className="flex flex-col md:flex-row gap-3 justify-center mt-8">
            <Button asChild variant="outline">
              <Link to="/modelle">Zur Modellübersicht</Link>
            </Button>
            <Button asChild>
              <Link to="/konfigurator">Jetzt konfigurieren</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link to="/haendler">Händler finden</Link>
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Modellvergleich;
