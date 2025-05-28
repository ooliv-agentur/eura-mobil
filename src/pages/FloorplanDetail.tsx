
import React from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Settings, Check, MapPin, GitCompare } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FloorplanDetail = () => {
  console.log("FloorplanDetail component rendering...");
  
  const { modelId, floorplanId } = useParams();
  console.log("URL params:", { modelId, floorplanId });

  // Mock data - in real app this would come from API/data source
  const floorplanData = {
    name: "XT 686 EF",
    modelSeries: "Xtura",
    length: "6,88 m",
    seats: "3",
    sleepingPlaces: "2",
    technicalData: {
      "Basisfahrzeug": "Mercedes Benz",
      "Motorisierung Serie": "2,0 ltr.",
      "Motorisierung Option": "2,0 ltr.",
      "Radstand (mm)": "3665",
      "Bereifung Serie (mm)": "225/75 R16C(265/60 R18C)",
      "Technisch zulässige Gesamtmasse (kg)": "4100 kg",
      "Masse in fahrbereitem Zustand (Serie) (kg)": "3320 (3154 - 3486)",
      "Zulässige Anhängelast (gebremst)": "2000 kg",
      "Gesamtlänge (mm)": "6880",
      "Gesamtbreite (mm)": "2198",
      "Gesamthöhe (mm)": "3022",
      "Innenbreite (mm)": "2050",
      "Stehhöhe (mm)": "1975",
      "Sitzgruppe vorne (mm)": "830 x 600",
      "Heckbett (mm)": "1960 x 800/1950 x 800",
      "Schlafplätze": "2",
      "Erweiterung auf X Schlafplätze": "3",
      "zulässige Personenzahl mit 3-Pkt": "3",
      "Wandstärke (mm)": "30",
      "Dachstärke (mm)": "30",
      "Bodenstärke (mm)": "85",
      "Frischwassertankgröße (l)": "140 ltr.",
      "Batteriekapazität": "1 x 330 Ah Lithium",
      "Abwasserkapazität (l)": "105 ltr."
    }
  };

  // Equipment data with proper categories
  const equipmentData = {
    "MOTOR": [
      "190 PS Motor Mercedes-Benz – serienmäßig"
    ],
    "WEITERE OPTIONEN": [
      "Zusätzliche Batteriekapazität",
      "Solaranlage",
      "Satelliten-TV Anlage",
      "Klimaanlage Fahrerhaus"
    ],
    "AUSSEN": [
      "LED-Scheinwerfer",
      "Elektrische Eingangsstufe",
      "Aufbautür mit Fenster",
      "Fahrradträger-Vorbereitung"
    ],
    "AUSSTATTUNGS-PAKETE": [
      "Komfort-Paket",
      "Premium-Paket",
      "Winter-Paket",
      "Outdoor-Paket"
    ],
    "MULTIMEDIA": [
      "Bluetooth-Freisprecheinrichtung",
      "USB-Anschlüsse",
      "12V-Steckdosen",
      "Rückfahrkamera"
    ],
    "INNEN": [
      "Polsterung in Leder",
      "Dimmbares LED-Licht",
      "Panorama-Dachfenster",
      "Insektenschutz"
    ],
    "MARKISEN": [
      "Thule Omnistor 5200",
      "LED-Markisenbeleuchtung",
      "Windschutz",
      "Vorzelt-Anschluss"
    ],
    "VERSORGUNGSTECHNIK": [
      "Truma Combi 6 Heizung",
      "Boiler 14 Liter",
      "Wasserpumpe",
      "Bordbatterie AGM"
    ],
    "TEXTILE AUSSTATTUNG": [
      "Vorhänge",
      "Spannbettlaken",
      "Kissen und Decken",
      "Fliegengitter"
    ],
    "MÖBEL": [
      "Massivholz-Möbel",
      "Soft-Close Beschläge",
      "Ausziehbare Arbeitsplatte",
      "Schubladenauszüge"
    ],
    "KÜCHE": [
      "3-Flammen-Gasherd",
      "Kompressor-Kühlschrank 142L",
      "Mikrowelle",
      "Spülbecken Edelstahl"
    ],
    "VERSICHERUNGSPRODUKTE": [
      "Vollkasko-Versicherung",
      "Reise-Rücktrittsversicherung",
      "Pannenhilfe Europa",
      "Diebstahl-Schutz"
    ]
  };

  const handleKonfiguratorClick = () => {
    console.log("Konfigurator button clicked");
    window.open("https://eura.tef-kat.com/konfigurator-eura/Home/Start?culture=de-DE", "_blank", "noopener noreferrer");
  };

  console.log("About to render component structure...");

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* Full-width Hero Section */}
      <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <div className="relative bg-gray-300 h-[60vh] flex items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-gray-600 text-lg">Hero Placeholder</span>
          </div>
          <div className="text-center z-10 px-4">
            <p className="text-xl md:text-2xl mb-2 text-white">{floorplanData.modelSeries}</p>
            <h1 className="text-4xl md:text-6xl font-bold text-white">{floorplanData.name}</h1>
          </div>
        </div>
      </section>

      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Back Navigation */}
        <div className="mb-6">
          <Button variant="ghost" asChild className="flex items-center gap-2">
            <Link to={`/modelle/${modelId}`}>
              <ArrowLeft size={16} />
              Zurück zu {floorplanData.modelSeries}
            </Link>
          </Button>
        </div>

        {/* Spec Overview Row */}
        <section className="mb-8">
          <div className="flex flex-wrap gap-8 text-center">
            <div>
              <span className="text-sm text-gray-600">Länge:</span>
              <span className="ml-2 font-medium text-lg">{floorplanData.length}</span>
            </div>
            <div>
              <span className="text-sm text-gray-600">Sitzplätze:</span>
              <span className="ml-2 font-medium text-lg">{floorplanData.seats}</span>
            </div>
            <div>
              <span className="text-sm text-gray-600">Schlafplätze:</span>
              <span className="ml-2 font-medium text-lg">{floorplanData.sleepingPlaces}</span>
            </div>
          </div>
        </section>

        {/* Horizontal Layout Block */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Floor Plan */}
            <div>
              <Card className="bg-gray-50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Grundriss {floorplanData.name}</h3>
                  <div className="border bg-white p-4">
                    <AspectRatio ratio={4/3} className="bg-gray-200 rounded flex items-center justify-center">
                      <span className="text-gray-500">Grundriss Placeholder</span>
                    </AspectRatio>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - 360° Panorama */}
            <div>
              <Card className="bg-gray-50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">360° Panorama</h3>
                  <div className="bg-gray-100 border rounded-lg p-8 text-center min-h-[300px] flex flex-col items-center justify-center">
                    <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mb-4">
                      <div className="w-8 h-8 bg-gray-500 rounded"></div>
                    </div>
                    <p className="text-gray-600 mb-2">360° Panorama Viewer</p>
                    <p className="text-sm text-gray-500 mb-4">Interaktive Innenansicht</p>
                    <Button variant="outline">
                      Panorama laden
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Technical Data Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Technische Daten</h2>
          <div className="bg-gray-50 border rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
              {Object.entries(floorplanData.technicalData).map(([key, value]) => (
                <div key={key} className="flex justify-between py-2 border-b border-gray-200 last:border-b-0">
                  <span className="text-sm font-medium">{key}</span>
                  <span className="text-sm text-right">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Serienausstattung Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Serienausstattung</h2>
          <div className="space-y-4">
            {Object.entries(equipmentData).map(([category, items]) => (
              <Accordion type="single" collapsible className="w-full" key={category}>
                <AccordionItem value={category} className="border rounded-lg bg-white">
                  <AccordionTrigger className="px-4 py-3">
                    <span className="text-lg font-medium">{category}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                      {items.map((item, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="bg-blue-50 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Interessiert am {floorplanData.name}?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={handleKonfiguratorClick} className="flex items-center gap-2">
              <Settings size={18} />
              Jetzt konfigurieren
            </Button>
            <Button variant="outline" asChild className="flex items-center gap-2">
              <Link to="/haendler">
                <MapPin size={18} />
                Händler finden
              </Link>
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <GitCompare size={18} />
              Modell vergleichen
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FloorplanDetail;
