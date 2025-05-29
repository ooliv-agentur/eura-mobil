
import React from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Settings, Check } from "lucide-react";
import { SidebarNavigation } from "@/components/SidebarNavigation";
import { modelsData } from "@/data/modelsData";
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

  // Get the model data based on the modelId
  const modelData = modelId && modelId in modelsData 
    ? modelsData[modelId as keyof typeof modelsData] 
    : null;

  // Find the specific floorplan within the model's layouts
  const floorplanData = modelData && 'layouts' in modelData
    ? modelData.layouts.find(layout => layout.id === floorplanId)
    : null;

  // If we can't find the floorplan data, show error or fallback
  if (!modelData || !floorplanData) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Grundriss nicht gefunden</h1>
            <p className="mb-4">Der angeforderte Grundriss konnte nicht gefunden werden.</p>
            <Button asChild>
              <Link to="/modelle">Zurück zur Modellübersicht</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Generate technical data based on model and floorplan
  const getTechnicalData = () => {
    const baseData = modelData.technicalData;
    return {
      "Basisfahrzeug": "Mercedes Benz", // Default for most models
      "Motorisierung Serie": "2,0 ltr.",
      "Motorisierung Option": "2,0 ltr.",
      "Radstand (mm)": "3665",
      "Bereifung Serie (mm)": "225/75 R16C",
      "Technisch zulässige Gesamtmasse (kg)": "4100 kg",
      "Masse in fahrbereitem Zustand (Serie) (kg)": "3320 (3154 - 3486)",
      "Zulässige Anhängelast (gebremst)": "2000 kg",
      "Gesamtlänge (mm)": floorplanData.length.replace(' m', '00'),
      "Gesamtbreite (mm)": baseData.breite?.replace(' m', '00') || "2198",
      "Gesamthöhe (mm)": baseData.höhe?.replace(' m', '00') || "3022",
      "Innenbreite (mm)": "2050",
      "Stehhöhe (mm)": "1975",
      "Schlafplätze": floorplanData.sleepingPlaces,
      "Sitzplätze": baseData.sitzplätze || "4",
      "Wandstärke (mm)": "30",
      "Dachstärke (mm)": "30",
      "Bodenstärke (mm)": "85",
      "Frischwassertankgröße (l)": "140 ltr.",
      "Batteriekapazität": "1 x 330 Ah Lithium",
      "Abwasserkapazität (l)": "105 ltr."
    };
  };

  // Equipment data - using model's equipment if available, otherwise default
  const getEquipmentData = () => {
    if ('equipment' in modelData && modelData.equipment) {
      return modelData.equipment;
    }
    
    // Default equipment structure
    return {
      "MOTOR": [
        "2,0 ltr. BlueTEC Motor",
        "6-Gang manuelles Getriebe",
        "Start-Stop-System",
        "Umweltplakette grün"
      ],
      "AUSSEN": [
        "LED-Scheinwerfer",
        "Elektrische Eingangsstufe",
        "Aufbautür mit Fenster",
        "Fahrradträger-Vorbereitung"
      ],
      "INNEN": [
        "Polsterung in Leder",
        "Dimmbares LED-Licht",
        "Panorama-Dachfenster",
        "Insektenschutz"
      ],
      "KÜCHE": [
        "3-Flammen-Gasherd",
        "Kompressor-Kühlschrank 142L",
        "Mikrowelle",
        "Spülbecken Edelstahl"
      ],
      "VERSORGUNGSTECHNIK": [
        "Truma Combi 6 Heizung",
        "Boiler 14 Liter",
        "Wasserpumpe",
        "Bordbatterie AGM"
      ]
    };
  };

  const technicalData = getTechnicalData();
  const equipmentData = getEquipmentData();

  const handleKonfiguratorClick = () => {
    console.log("Konfigurator button clicked for:", floorplanData.name);
    window.open("https://eura.tef-kat.com/konfigurator-eura/Home/Start?culture=de-DE", "_blank", "noopener noreferrer");
  };

  const sidebarItems = [
    { id: "beschreibung", label: "Beschreibung" },
    { id: "technische-daten", label: "Technische Daten" },
    { id: "ausstattung", label: "Ausstattung" }
  ];

  console.log("About to render component structure for:", floorplanData.name);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* Sidebar Navigation */}
      <SidebarNavigation items={sidebarItems} />
      
      {/* Hero Section */}
      <section className="relative bg-[#E5E7EB] h-[50vh] flex items-center justify-center">
        <div className="text-center z-10 px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold">{floorplanData.name}</h1>
        </div>
      </section>

      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Back Navigation */}
        <div className="mb-6">
          <Button variant="ghost" asChild className="flex items-center gap-2">
            <Link to={`/modelle/${modelId}`}>
              <ArrowLeft size={16} />
              Zurück zu {modelData.name}
            </Link>
          </Button>
        </div>

        {/* Description Section */}
        <section id="beschreibung" className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Floor Plan Card */}
            <div className="order-2 lg:order-1">
              <Card className="bg-gray-50">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4">{floorplanData.name}</h2>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <span className="text-sm text-gray-600">Länge:</span>
                      <span className="ml-2 font-medium">{floorplanData.length}</span>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Schlafplätze:</span>
                      <span className="ml-2 font-medium">{floorplanData.sleepingPlaces}</span>
                    </div>
                  </div>
                  
                  {/* Floor Plan Image */}
                  <div className="border bg-white p-4">
                    <AspectRatio ratio={4/3} className="bg-gray-200 rounded flex items-center justify-center">
                      <span className="text-gray-500">Grundriss {floorplanData.name}</span>
                    </AspectRatio>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* 360° Panorama */}
            <div className="order-1 lg:order-2">
              <h3 className="text-xl font-bold mb-4">360° Panorama:</h3>
              <div className="bg-gray-100 border rounded-lg p-8 text-center min-h-[300px] flex flex-col items-center justify-center">
                <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mb-4">
                  <div className="w-8 h-8 bg-gray-500 rounded"></div>
                </div>
                <p className="text-gray-600 mb-2">360° Panorama Viewer</p>
                <p className="text-sm text-gray-500">Interaktive Innenansicht für {floorplanData.name}</p>
                <Button variant="outline" className="mt-4">
                  Panorama laden
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Data Section */}
        <section id="technische-daten" className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Technische Daten</h2>
          <div className="bg-gray-50 border rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
              {Object.entries(technicalData).map(([key, value]) => (
                <div key={key} className="flex justify-between py-2 border-b border-gray-200 last:border-b-0">
                  <span className="text-sm font-medium">{key}</span>
                  <span className="text-sm text-right">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Equipment Section */}
        <section id="ausstattung" className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Ausstattung</h2>
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

        {/* CTA Section */}
        <section className="bg-blue-50 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Interessiert am {floorplanData.name}?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={handleKonfiguratorClick} className="flex items-center gap-2">
              <Settings size={18} />
              Jetzt konfigurieren
            </Button>
            <Button variant="outline" asChild>
              <Link to="/haendler">
                Händler finden
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FloorplanDetail;
