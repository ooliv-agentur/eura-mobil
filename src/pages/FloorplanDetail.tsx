
import React from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Settings } from "lucide-react";
import { SidebarNavigation } from "@/components/SidebarNavigation";

const FloorplanDetail = () => {
  const { modelId, floorplanId } = useParams();

  // Mock data - in real app this would come from API/data source
  const floorplanData = {
    name: "XT 686 EF",
    modelSeries: "Xtura",
    length: "6,88 m",
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

  const handleKonfiguratorClick = () => {
    window.open("https://eura.tef-kat.com/konfigurator-eura/Home/Start?culture=de-DE", "_blank", "noopener noreferrer");
  };

  const sidebarItems = [
    { id: "beschreibung", label: "Beschreibung" },
    { id: "technische-daten", label: "Technische Daten" },
    { id: "ausstattung", label: "Ausstattung" }
  ];

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
              Zurück zu {floorplanData.modelSeries}
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
                  <div className="border bg-white p-4 mb-4">
                    <AspectRatio ratio={4/3} className="bg-gray-200 rounded flex items-center justify-center">
                      <span className="text-gray-500">Grundriss {floorplanData.name}</span>
                    </AspectRatio>
                  </div>
                  
                  <Button variant="outline" className="w-full">
                    Modell vergleichen
                  </Button>
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
                <p className="text-sm text-gray-500">Interaktive Innenansicht</p>
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
              {Object.entries(floorplanData.technicalData).map(([key, value]) => (
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
          <div className="bg-gray-50 border rounded-lg p-6">
            <p className="text-gray-600 text-center">
              Ausstattungsdetails werden hier angezeigt
            </p>
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
