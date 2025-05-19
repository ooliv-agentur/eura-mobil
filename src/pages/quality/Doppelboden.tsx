
import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

const Doppelboden = () => {
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
            Platz für die größten Wünsche
          </h1>
          
          <div className="prose max-w-none mb-6">
            <p>
              Der Doppelboden in unseren Wohnmobilen ist mehr als nur ein isolierendes Element - er ist ein 
              multifunktionaler Raum, der zusätzlichen Stauplatz bietet und gleichzeitig wichtige technische 
              Komponenten beherbergt.
            </p>
            <p>
              In diesem beheizten Bereich sind Wassertanks und Leitungen vor Frost geschützt, 
              während der isolierende Effekt gleichzeitig für warme Füße sorgt. Die großzügigen Stauräume 
              sind teilweise von außen zugänglich und bieten Platz für sperrige Ausrüstung und Campingmöbel.
            </p>
          </div>
        </section>
        
        {/* Features */}
        <section className="mb-10 bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Funktionen des Doppelbodens:</h2>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Bis zu 3.800 l Stauraum</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Frischwasser bis 150 l frostgeschützt</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Technik & Batterien im Doppelboden</span>
            </li>
          </ul>
        </section>
        
        {/* CTA */}
        <section className="text-center mb-8">
          <Button asChild>
            <Link to="/qualitaet/schlafkomfort">
              Mehr zum Schlafkomfort
            </Link>
          </Button>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Doppelboden;
