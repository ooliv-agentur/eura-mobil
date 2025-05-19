
import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Caravan, Truck, Bus, Tent } from "lucide-react";

const Wohnmobiltypen = () => {
  const wohnmobiltypen = [
    {
      id: "vans",
      title: "Vans",
      description: "Kompakt und wendig – ideal für Paare und Stadtabenteuer. Einfach zu fahren und zu parken, mit cleverer Raumaufteilung und Komfort auf kleinstem Raum.",
      icon: <Caravan className="h-12 w-12 mb-4" />,
    },
    {
      id: "alkoven",
      title: "Alkoven",
      description: "Geräumige Familienfahrzeuge mit bis zu 6 Schlafplätzen. Charakteristisches Merkmal ist der Alkoven über dem Fahrerhaus, der zusätzlichen Wohnraum bietet.",
      icon: <Truck className="h-12 w-12 mb-4" />,
    },
    {
      id: "teilintegriert",
      title: "Teilintegriert",
      description: "Die perfekte Balance zwischen Fahrdynamik und Wohnkomfort. Nutzt das Original-Fahrerhaus und bietet dennoch großzügigen Wohnraum. Ideal für Paare und kleine Familien.",
      icon: <Bus className="h-12 w-12 mb-4" />,
    },
    {
      id: "integriert",
      title: "Integriert",
      description: "Luxuriöse Reisemobile mit maximaler Raumausnutzung. Das Fahrerhaus ist vollständig in den Wohnraum integriert und bietet ein großzügiges Raumgefühl mit Top-Komfort.",
      icon: <Tent className="h-12 w-12 mb-4" />,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-6">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">Welcher Wohnmobiltyp passt zu Ihnen?</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {wohnmobiltypen.map((typ) => (
            <Card key={typ.id} className="overflow-hidden">
              <CardContent className="p-6 flex flex-col items-center">
                <div className="text-blue-600">
                  {typ.icon}
                </div>
                <h2 className="text-xl font-bold mb-2">{typ.title}</h2>
                <p className="text-gray-600 mb-4 text-center">{typ.description}</p>
                <Button className="w-full" asChild>
                  <Link to={`/modelle?typ=${typ.id}`}>Modelle anzeigen</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Wohnmobiltypen;
