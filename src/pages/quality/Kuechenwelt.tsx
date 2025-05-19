
import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

const Kuechenwelt = () => {
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
            Freiheit zum Zunge-Schnalzen
          </h1>
          
          <div className="prose max-w-none mb-6">
            <p>
              Unsere kompakten Küchen verbinden Funktionalität mit Komfort. Trotz der begrenzten Platzverhältnisse 
              bieten sie alles, was Sie für die Zubereitung köstlicher Mahlzeiten unterwegs benötigen.
            </p>
            <p>
              Durchdachte Details wie tiefe Schubladen mit Soft-Close-Funktion, ergonomische Arbeitsflächen und 
              qualitativ hochwertige Geräte machen das Kochen im Urlaub zum Vergnügen. Die hochwertigen Materialien 
              sind pflegeleicht und langlebig.
            </p>
          </div>
        </section>
        
        {/* Features */}
        <section className="mb-10 bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Küchenausstattung:</h2>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>3-Flammen-Kocher, große Kühlschränke</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Soft-Stop-Schubladen, Rollschubführungen</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Spülenabdeckung, Wasserhahn mit Anti-Tropf-Funktion</span>
            </li>
          </ul>
        </section>
        
        {/* CTA */}
        <section className="text-center mb-8">
          <Button asChild>
            <Link to="/qualitaet/wellnessbereich">
              Zum Wellnessbereich
            </Link>
          </Button>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Kuechenwelt;
