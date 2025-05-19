
import { useState } from "react";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Mail } from "lucide-react";

interface Vehicle {
  id: string;
  name: string;
  description: string;
  type: "gebraucht" | "miete";
  imageUrl: string;
}

const vehicles: Vehicle[] = [
  {
    id: "1",
    name: "Activa One 650 VB",
    description: "EZ 2023, 25.000 km, Bestzustand",
    type: "gebraucht",
    imageUrl: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?auto=format&fit=crop&w=500&h=300",
  },
  {
    id: "2",
    name: "Integra Line 720 EB",
    description: "EZ 2022, 42.000 km, Vollausstattung",
    type: "gebraucht",
    imageUrl: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?auto=format&fit=crop&w=500&h=300",
  },
  {
    id: "3", 
    name: "Profila T 695 EB",
    description: "Verfügbar ab 01.06., 149€/Tag",
    type: "miete",
    imageUrl: "https://images.unsplash.com/photo-1487252665478-49b61b47f302?auto=format&fit=crop&w=500&h=300",
  },
  {
    id: "4",
    name: "Contura 766 EB",
    description: "Verfügbar ganzjährig, 169€/Tag",
    type: "miete",
    imageUrl: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?auto=format&fit=crop&w=500&h=300",
  },
  {
    id: "5",
    name: "Terrestra 690 QB",
    description: "EZ 2021, 56.000 km, TÜV neu",
    type: "gebraucht",
    imageUrl: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?auto=format&fit=crop&w=500&h=300",
  },
  {
    id: "6",
    name: "Contura 760 EF",
    description: "Verfügbar Mai-Oktober, 159€/Tag",
    type: "miete",
    imageUrl: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?auto=format&fit=crop&w=500&h=300",
  },
];

const GebrauchtMietfahrzeuge = () => {
  const [activeTab, setActiveTab] = useState<string>("all");
  
  const filteredVehicles = activeTab === "all" 
    ? vehicles 
    : vehicles.filter(vehicle => vehicle.type === activeTab);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 px-4 py-6 md:px-6 lg:px-8 max-w-6xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">Gebrauchte & Mietfahrzeuge</h1>
        
        <p className="mb-6 text-gray-700">
          Entdecken Sie unser Angebot an hochwertigen Gebrauchtfahrzeugen sowie flexible 
          Mietoptionen für Ihren nächsten Urlaub. Alle Fahrzeuge werden von unseren Experten 
          geprüft und sind in einwandfreiem Zustand.
        </p>
        
        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="mb-6">
          <TabsList className="w-full grid grid-cols-3">
            <TabsTrigger value="all">Alle Fahrzeuge</TabsTrigger>
            <TabsTrigger value="gebraucht">Gebraucht</TabsTrigger>
            <TabsTrigger value="miete">Miete</TabsTrigger>
          </TabsList>
        </Tabs>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {filteredVehicles.map((vehicle) => (
            <Card key={vehicle.id} className="overflow-hidden">
              <div className="h-48 relative">
                <img 
                  src={vehicle.imageUrl} 
                  alt={vehicle.name} 
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-2 right-2 bg-white px-2 py-1 text-xs rounded font-medium">
                  {vehicle.type === "gebraucht" ? "Gebraucht" : "Miete"}
                </span>
              </div>
              <CardContent className="pt-4">
                <h3 className="font-bold text-lg mb-1">{vehicle.name}</h3>
                <p className="text-gray-600">{vehicle.description}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Anfragen</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <section className="bg-gray-50 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-bold mb-4">Noch Fragen?</h2>
          <p className="mb-4">
            Unser Team berät Sie gerne zu unseren Gebraucht- und Mietfahrzeugen. 
            Kontaktieren Sie uns für ein individuelles Angebot.
          </p>
          <Button className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            Kontakt aufnehmen
          </Button>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default GebrauchtMietfahrzeuge;
