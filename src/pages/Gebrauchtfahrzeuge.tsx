
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Mail } from "lucide-react";

interface Vehicle {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

const vehicles: Vehicle[] = [
  {
    id: "1",
    name: "Activa One 650 VB",
    description: "EZ 2023, 25.000 km, Bestzustand",
    imageUrl: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?auto=format&fit=crop&w=500&h=300",
  },
  {
    id: "2",
    name: "Integra Line 720 EB",
    description: "EZ 2022, 42.000 km, Vollausstattung",
    imageUrl: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?auto=format&fit=crop&w=500&h=300",
  },
  {
    id: "3",
    name: "Terrestra 690 QB",
    description: "EZ 2021, 56.000 km, TÜV neu",
    imageUrl: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?auto=format&fit=crop&w=500&h=300",
  },
  {
    id: "4",
    name: "Contura 760 EF",
    description: "EZ 2020, 38.000 km, Garage",
    imageUrl: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?auto=format&fit=crop&w=500&h=300",
  },
  {
    id: "5",
    name: "Profila T 695 EB",
    description: "EZ 2023, 12.000 km, wie neu",
    imageUrl: "https://images.unsplash.com/photo-1487252665478-49b61b47f302?auto=format&fit=crop&w=500&h=300",
  },
  {
    id: "6",
    name: "Integra 700 EF",
    description: "EZ 2022, 29.000 km, Einzelbetten",
    imageUrl: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?auto=format&fit=crop&w=500&h=300",
  },
];

const Gebrauchtfahrzeuge = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gray-300 h-[60vh] md:h-[70vh] flex items-center justify-center">
          <div className="text-center z-10 px-4 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Gebrauchtfahrzeuge
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Hochwertige Wohnmobile aus zweiter Hand
            </p>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto space-y-6 text-lg">
            <p>
              Entdecken Sie unser Angebot an hochwertigen Gebrauchtfahrzeugen. Alle Fahrzeuge 
              werden von unseren Experten geprüft und sind in einwandfreiem Zustand. Profitieren 
              Sie von der bewährten EURA MOBIL Qualität zu attraktiven Preisen.
            </p>
            <p>
              Jedes Gebrauchtfahrzeug durchläuft eine umfassende Qualitätskontrolle und wird 
              mit allen notwendigen Dokumenten und Garantieleistungen übergeben.
            </p>
          </div>
        </section>

        {/* Vehicles Grid */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Verfügbare Gebrauchtfahrzeuge</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {vehicles.map((vehicle) => (
              <Card key={vehicle.id} className="overflow-hidden">
                <div className="h-48 relative">
                  <img 
                    src={vehicle.imageUrl} 
                    alt={vehicle.name} 
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-2 right-2 bg-white px-2 py-1 text-xs rounded font-medium">
                    Gebraucht
                  </span>
                </div>
                <CardContent className="pt-4">
                  <h3 className="font-bold text-lg mb-1">{vehicle.name}</h3>
                  <p className="text-gray-600">{vehicle.description}</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Jetzt anfragen</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
        
        {/* Contact Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Interesse an einem Gebrauchtfahrzeug?</h2>
              <p className="text-lg mb-8">
                Unser Team berät Sie gerne zu unseren Gebrauchtfahrzeugen und erstellt 
                Ihnen ein individuelles Angebot. Kontaktieren Sie uns noch heute.
              </p>
              <Button className="flex items-center gap-2 mx-auto" size="lg">
                <Mail className="h-4 w-4" />
                Kontakt aufnehmen
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Gebrauchtfahrzeuge;
