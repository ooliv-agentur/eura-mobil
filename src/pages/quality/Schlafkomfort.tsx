
import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

const Schlafkomfort = () => {
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
            Mit der Sonne um die Wette strahlen
          </h1>
          
          <div className="prose max-w-none mb-6">
            <p>
              Nach einem erlebnisreichen Tag verdienen Sie eine erholsame Nachtruhe. 
              Unsere Schlafbereiche sind ergonomisch gestaltet und bieten maximalen Komfort für einen 
              erholsamen Schlaf. Je nach Grundriss können Sie zwischen verschiedenen Bettenlösungen wählen, 
              die alle mit hochwertigen Matratzen ausgestattet sind.
            </p>
            <p>
              Praktische Details wie LED-Leselampen, USB-Anschlüsse in Bettnähe und ausreichend Ablagen 
              für persönliche Gegenstände runden das Schlafkonzept ab.
            </p>
          </div>
        </section>
        
        {/* Features */}
        <section className="mb-10 bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Schlafkomfort-Features:</h2>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>7-Zonen-Kaltschaum-Matratzen</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Einzelbetten, Zentralbett, Hubbetten</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>LED-Leselampen & Ablagen</span>
            </li>
          </ul>
        </section>
        
        {/* CTA */}
        <section className="text-center mb-8">
          <Button asChild>
            <Link to="/qualitaet/kuechenwelt">
              Mehr zur Küche
            </Link>
          </Button>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Schlafkomfort;
