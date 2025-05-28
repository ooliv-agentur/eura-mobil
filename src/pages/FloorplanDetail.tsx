
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Settings, MapPin, GitCompare, Circle } from "lucide-react";
import { SidebarNavigation } from "@/components/SidebarNavigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const FloorplanDetail = () => {
  console.log("FloorplanDetail component rendering...");
  
  const { modelId, floorplanId } = useParams();
  console.log("URL params:", { modelId, floorplanId });

  // Mock data - in real app this would come from API/data source
  const floorplanData = {
    name: "XT 686 EF",
    modelSeries: "Xtura",
    length: "6,88 m",
    sleepingPlaces: "2",
    baseVehicle: "Mercedes Benz",
    technicalData: {
      "Stehhöhe": "1975 mm",
      "Dachstärke": "30 mm",
      "Tankgröße": "140 ltr.",
      "Batteriekapazität": "330 Ah Lithium",
      "Gesamtbreite": "2198 mm",
      "Gesamthöhe": "3022 mm",
      "Innenbreite": "2050 mm",
      "Bodenstärke": "85 mm",
      "Abwasserkapazität": "105 ltr.",
      "Wandstärke": "30 mm",
      "Radstand": "3665 mm",
      "Zul. Gesamtmasse": "4100 kg"
    }
  };

  const handleKonfiguratorClick = () => {
    console.log("Konfigurator button clicked");
    window.open("https://eura.tef-kat.com/konfigurator-eura/Home/Start?culture=de-DE", "_blank", "noopener noreferrer");
  };

  const sidebarItems = [
    { id: "hero", label: "Übersicht" },
    { id: "technische-daten", label: "Technische Daten" },
    { id: "galerie", label: "Galerie" },
    { id: "ausstattung", label: "Ausstattung" }
  ];

  // Equipment data organized by tabs
  const equipmentTabs = {
    "INNEN": [
      "Polsterung in Leder",
      "Dimmbares LED-Licht",
      "Panorama-Dachfenster",
      "Insektenschutz",
      "Vorhänge",
      "Spannbettlaken"
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
      "Bordbatterie AGM",
      "Solaranlage",
      "Wechselrichter"
    ],
    "TEXTILE AUSSTATTUNG": [
      "Vorhänge",
      "Spannbettlaken",
      "Kissen und Decken",
      "Fliegengitter",
      "Teppiche",
      "Matratzenbezüge"
    ],
    "MÖBEL": [
      "Massivholz-Möbel",
      "Soft-Close Beschläge",
      "Ausziehbare Arbeitsplatte",
      "Schubladenauszüge",
      "Kleiderschrank",
      "Stauraum optimiert"
    ],
    "KÜCHE": [
      "3-Flammen-Gasherd",
      "Kompressor-Kühlschrank 142L",
      "Mikrowelle",
      "Spülbecken Edelstahl",
      "Arbeitsplatten",
      "Küchenausstattung"
    ],
    "VERSICHERUNGSPRODUKTE": [
      "Vollkasko-Versicherung",
      "Reise-Rücktrittsversicherung",
      "Pannenhilfe Europa",
      "Diebstahl-Schutz",
      "Auslandsschutz",
      "Schadensabwicklung"
    ]
  };

  console.log("About to render component structure...");

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* Sidebar Navigation */}
      <SidebarNavigation items={sidebarItems} />
      
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

        {/* Hero Section - Two Column Layout */}
        <section id="hero" className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Model Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{floorplanData.name}</h1>
                <p className="text-xl text-gray-600 mb-6">{floorplanData.modelSeries}</p>
              </div>
              
              {/* Key Facts */}
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="text-gray-500">Länge:</span>
                  <span className="text-gray-500 font-medium">{floorplanData.length}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="text-gray-500">Schlafplätze:</span>
                  <span className="text-gray-500 font-medium">{floorplanData.sleepingPlaces}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="text-gray-500">Basisfahrzeug:</span>
                  <span className="text-gray-500 font-medium">{floorplanData.baseVehicle}</span>
                </div>
              </div>
            </div>

            {/* Right Column - 360° View */}
            <div>
              <AspectRatio ratio={16/9} className="bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 bg-gray-500 rounded"></div>
                  </div>
                  <p className="text-gray-600 font-medium">360° View Placeholder</p>
                </div>
              </AspectRatio>
            </div>
          </div>
        </section>

        {/* Sticky CTA Bar */}
        <div className="sticky top-4 z-10 bg-white border rounded-lg p-4 shadow-lg mb-8">
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button onClick={handleKonfiguratorClick} className="flex items-center gap-2">
              <Settings size={18} />
              Jetzt konfigurieren
            </Button>
            <Button variant="outline" asChild>
              <Link to="/haendler" className="flex items-center gap-2">
                <MapPin size={18} />
                Händler finden
              </Link>
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <GitCompare size={18} />
              Modell vergleichen
            </Button>
          </div>
        </div>

        {/* Technical Data Section - Redesigned */}
        <section id="technische-daten" className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Technische Daten</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(floorplanData.technicalData).map(([key, value]) => (
              <div key={key} className="flex items-center gap-4 p-4 bg-white border rounded-lg">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <Circle className="h-6 w-6 text-gray-400" />
                </div>
                <div>
                  <h3 className="font-medium">{key}</h3>
                  <p className="text-gray-600">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Combined Gallery and Panorama Section */}
        <section id="galerie" className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Galerie</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* First tile - 360° Panorama */}
            <div className="bg-gray-200 rounded-lg aspect-[4/3] flex flex-col items-center justify-center">
              <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mb-2">
                <div className="w-6 h-6 bg-gray-500 rounded"></div>
              </div>
              <p className="text-gray-600 text-sm font-medium">360° Panorama View</p>
            </div>
            
            {/* Gallery tiles */}
            {[1, 2, 3, 4, 5, 6, 7].map((index) => (
              <div key={index} className="bg-gray-200 rounded-lg aspect-[4/3]" />
            ))}
          </div>
        </section>

        {/* Equipment Section - Horizontal Tabs */}
        <section id="ausstattung" className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Ausstattung</h2>
          <Tabs defaultValue="INNEN" className="w-full">
            <TabsList className="grid w-full grid-cols-3 md:grid-cols-7 h-auto">
              {Object.keys(equipmentTabs).map((tab) => (
                <TabsTrigger 
                  key={tab} 
                  value={tab} 
                  className="text-xs px-2 py-2 data-[state=active]:bg-white"
                >
                  {tab}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {Object.entries(equipmentTabs).map(([tab, items]) => (
              <TabsContent key={tab} value={tab} className="mt-6">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {items.map((item, index) => (
                    <div key={index} className="bg-white border rounded-lg p-4 text-center">
                      <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Circle className="h-6 w-6 text-gray-400" />
                      </div>
                      <p className="text-sm font-medium">{item}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </section>

        {/* Final CTA Section */}
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
