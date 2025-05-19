
import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

const Winterfestigkeit = () => {
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
            Erste Adresse zum Überwintern
          </h1>
          
          <div className="prose max-w-none mb-6">
            <p>
              Unsere Wohnmobile sind speziell für den Einsatz bei niedrigen Temperaturen konzipiert. 
              Der beheizte Doppelboden schützt die Wassertanks und Leitungen vor Frost und sorgt gleichzeitig 
              für eine angenehme Fußbodentemperatur. Die vollständige Isolierung aller Außenwände und des Daches 
              verhindert Wärmeverluste und Kältebrücken.
            </p>
            <p>
              Dank dieser durchdachten Konstruktion können Sie Ihr Wohnmobil ganzjährig nutzen - auch bei 
              frostigen Temperaturen.
            </p>
          </div>
        </section>
        
        {/* Features */}
        <section className="mb-10 bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Winterfest durch:</h2>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Fußbodenheizungseffekt</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Durchgehende Isolierung</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Beheizte Frisch-/Abwassertanks</span>
            </li>
          </ul>
        </section>
        
        {/* CTA */}
        <section className="text-center mb-8">
          <Button asChild>
            <Link to="/qualitaet/leichtbau">
              Mehr zur Leichtbauarchitektur
            </Link>
          </Button>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Winterfestigkeit;
