
import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

const ModelleOverview = () => {
  const [priceRange, setPriceRange] = useState([50]);

  // Beispielmodelle
  const modelle = [
    {
      id: 1,
      name: "Activa One",
      description: "Kompaktes Einsteigermodell mit cleverer Raumnutzung. Ideal für Paare und kleine Familien.",
      imageUrl: "https://images.unsplash.com/photo-1532941781729-b8e6bf6a3d0c?w=500&auto=format"
    },
    {
      id: 2,
      name: "Integra Line",
      description: "Vollintegriertes Wohnmobil mit höchstem Komfort. Perfekt für längere Reisen zu jeder Jahreszeit.",
      imageUrl: "https://images.unsplash.com/photo-1593150532356-223f7151d4c4?w=500&auto=format"
    },
    {
      id: 3,
      name: "Profila T",
      description: "Teilintegriertes Modell mit optimalem Preis-Leistungs-Verhältnis. Großzügiger Wohnraum für bis zu 4 Personen.",
      imageUrl: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=500&auto=format"
    },
    {
      id: 4,
      name: "Aventura",
      description: "Luxuriöses Reisemobil für anspruchsvolle Camper. Hochwertige Ausstattung und innovative Technologien.",
      imageUrl: "https://images.unsplash.com/photo-1464851707681-f9d5fdaccea8?w=500&auto=format"
    },
    {
      id: 5,
      name: "Compacta",
      description: "Wendiges Stadtmobil unter 6 Metern Länge. Perfekt für spontane Wochenendtrips und urbane Abenteuer.",
      imageUrl: "https://images.unsplash.com/photo-1501600254222-20eeb3e1e342?w=500&auto=format"
    },
    {
      id: 6,
      name: "Familia L",
      description: "Geräumiges Familienmobil mit bis zu 6 Schlafplätzen. Großer Stauraum für Sportgeräte und Gepäck.",
      imageUrl: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=500&auto=format"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-6">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">Unsere Modelle im Überblick</h1>
        
        {/* Filterleiste */}
        <div className="bg-gray-100 p-4 rounded-lg mb-6 space-y-4">
          <h2 className="font-semibold mb-2">Filter</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Länge</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Länge auswählen" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="unter6">Unter 6 Meter</SelectItem>
                  <SelectItem value="6bis7">6 bis 7 Meter</SelectItem>
                  <SelectItem value="ueber7">Über 7 Meter</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Sitzplätze</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sitzplätze auswählen" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2">2 Sitzplätze</SelectItem>
                  <SelectItem value="4">4 Sitzplätze</SelectItem>
                  <SelectItem value="5plus">5+ Sitzplätze</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Preisbereich: {priceRange[0]}.000 €</label>
              <Slider
                defaultValue={[50]}
                max={150}
                step={5}
                value={priceRange}
                onValueChange={setPriceRange}
              />
            </div>
          </div>
        </div>
        
        {/* Modellgrid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {modelle.map((modell) => (
            <Card key={modell.id} className="overflow-hidden">
              <div className="aspect-video bg-gray-200 overflow-hidden">
                <img 
                  src={modell.imageUrl} 
                  alt={modell.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader className="pb-2">
                <h3 className="text-xl font-bold">{modell.name}</h3>
              </CardHeader>
              <CardContent className="pb-2">
                <p className="text-sm text-gray-600">{modell.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Details ansehen</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ModelleOverview;
