
import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

const Leichtbauarchitektur = () => {
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
            Inspiriert durch die Luftfahrttechnik
          </h1>
          
          <div className="prose max-w-none mb-6">
            <p>
              Bei der Konstruktion unserer Wohnmobile setzen wir auf hochwertige GFK-Elemente und spezielle 
              Aluminium-Profile. Diese Materialien bieten ein optimales Verhältnis von Gewicht zu Stabilität 
              und ermöglichen eine bessere Nutzlast für Ihre Ausrüstung und Vorräte.
            </p>
            <p>
              Die aus der Luftfahrttechnologie übernommenen Klebeverfahren ersetzen traditionelle Schraubverbindungen 
              und schaffen eine dauerhafte, wasserdichte Struktur mit besseren Isolationseigenschaften.
            </p>
          </div>
        </section>
        
        {/* Features */}
        <section className="mb-10 bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Vorteile der Leichtbauweise:</h2>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Geringes Gewicht, hohe Stabilität</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Hagelschutz</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Klebetechnik aus der Luftfahrt</span>
            </li>
          </ul>
        </section>
        
        {/* CTA */}
        <section className="text-center mb-8">
          <Button asChild>
            <Link to="/qualitaet/moebelbau">
              Mehr zum Möbelbau
            </Link>
          </Button>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Leichtbauarchitektur;
