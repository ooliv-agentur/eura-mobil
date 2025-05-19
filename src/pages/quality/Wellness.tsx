
import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

const Wellness = () => {
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
            Die Freiheit, Zeit für sich zu haben
          </h1>
          
          <div className="prose max-w-none mb-6">
            <p>
              Unsere Badezimmer sind kleine Wellness-Oasen auf Rädern. Trotz der kompakten Abmessungen 
              bieten sie alles, was Sie für Ihre tägliche Körperpflege benötigen. Je nach Grundriss verfügen 
              sie über eine separate Dusche mit hochwertigen Armaturen.
            </p>
            <p>
              Clevere Raumlösungen und durchdachte Details wie ausreichend Ablagen, Spiegelschränke und 
              230V-Steckdosen für Fön oder Rasierer machen das Bad zu einem komfortablen Bereich 
              in Ihrem mobilen Zuhause.
            </p>
          </div>
        </section>
        
        {/* Features */}
        <section className="mb-10 bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Bad-Features:</h2>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Separate Dusche, Armaturen mit Keramikkartusche</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Druckwasserpumpe, 230V-Steckdosen</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Geruchsgeschütztes Abwassersystem</span>
            </li>
          </ul>
        </section>
        
        {/* CTA */}
        <section className="text-center mb-8">
          <Button asChild>
            <Link to="/qualitaet">
              Zurück zu Qualität & Vorteile
            </Link>
          </Button>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Wellness;
