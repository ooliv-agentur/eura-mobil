
import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

const Moebelbau = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-6">
        {/* Hero Section */}
        <section className="mb-8">
          <div className="mb-6">
            <Skeleton className="h-48 w-full rounded-md mb-4" />
          </div>
          
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            Das 1.000-Teile-Puzzle
          </h1>
          
          <div className="prose max-w-none mb-6">
            <p>
              Die Möbelkonstruktion in einem Wohnmobil ist eine Meisterleistung der Präzision. 
              Mit modernster CAD-Technologie planen wir jeden Schrank, jede Schublade und jede Ablage millimetergenau, 
              um den verfügbaren Raum optimal zu nutzen.
            </p>
            <p>
              Unsere hauseigene Schreinerei fertigt alle Möbelteile mit höchster Präzision und Sorgfalt. 
              Dabei setzen wir auf hochwertige Materialien und innovative Beschläge, die den besonderen 
              Anforderungen im Wohnmobil standhalten.
            </p>
          </div>
        </section>
        
        {/* Features */}
        <section className="mb-10 bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Qualitätsmerkmale unserer Möbel:</h2>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Soft-Stopp-Schubladen</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Aluminiumverstärkte Oberschränke</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>3 cm starke Holzplatten</span>
            </li>
          </ul>
        </section>
        
        {/* CTA */}
        <section className="text-center mb-8">
          <Button asChild>
            <Link to="/qualitaet/doppelboden">
              Weiter zum Doppelboden
            </Link>
          </Button>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Moebelbau;
