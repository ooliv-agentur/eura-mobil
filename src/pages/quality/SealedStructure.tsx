
import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

const SealedStructure = () => {
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
            Keine Economy Class. Aber Luftfahrttechnik.
          </h1>
          
          <div className="prose max-w-none mb-6">
            <p>
              Bei Eura Mobil verwenden wir modernste Klebetechnik aus der Luftfahrt, um unsere Wohnmobile zu bauen. 
              Das bedeutet: statt zahlreicher Schrauben und Löcher, die potentielle Schwachstellen darstellen, 
              verbinden wir die Bauteile mit Spezialkleber, der eine dauerhafte und wetterfeste Verbindung schafft.
            </p>
            <p>
              Die Sealed Structure Technologie verbindet innovative Materialien wie GFK und Aluminium zu einer 
              isolierten, wassergeschützten und langlebigen Struktur.
            </p>
          </div>
        </section>
        
        {/* Features */}
        <section className="mb-10 bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Vorteile im Überblick:</h2>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Verklebte Außenwände ohne Schrauben</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Holzfreier, isolierter Aufbau</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Aluminium- und GFK-Komponenten</span>
            </li>
          </ul>
        </section>
        
        {/* CTA */}
        <section className="text-center mb-8">
          <Button asChild>
            <Link to="/qualitaet/winterfestigkeit">
              Mehr zu Winterfestigkeit
            </Link>
          </Button>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default SealedStructure;
