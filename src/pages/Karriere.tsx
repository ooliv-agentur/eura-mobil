
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Karriere = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gray-300 h-[60vh] md:h-[70vh] flex items-center justify-center">
          <div className="text-center z-10 px-4 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Karriere bei EURA MOBIL
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Werde Teil eines starken Teams mit Leidenschaft für mobile Freiheit.
            </p>
            <Button 
              size="lg" 
              className="px-8 bg-gray-600 hover:bg-gray-700"
              asChild
            >
              <a 
                href="https://recruitingapp-5607.de.umantis.com/Jobs/All" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Jetzt offene Stellen ansehen
              </a>
            </Button>
          </div>
        </section>

        {/* Warum EURA MOBIL Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Warum EURA MOBIL?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gray-400 rounded-full flex-shrink-0"></div>
              <div>
                <p className="text-lg">Attraktive Vergütung gemäß Tarifvertrag der Holz- und Kunststoffindustrie</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gray-400 rounded-full flex-shrink-0"></div>
              <div>
                <p className="text-lg">Vergünstigtes Mittagessen</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gray-400 rounded-full flex-shrink-0"></div>
              <div>
                <p className="text-lg">Betriebliche Altersvorsorge</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gray-400 rounded-full flex-shrink-0"></div>
              <div>
                <p className="text-lg">Vielseitige Tätigkeit mit spannenden Produkten</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gray-400 rounded-full flex-shrink-0"></div>
              <div>
                <p className="text-lg">Job-Ticket</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gray-400 rounded-full flex-shrink-0"></div>
              <div>
                <p className="text-lg">Vermögenswirksame Leistungen</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gray-400 rounded-full flex-shrink-0"></div>
              <div>
                <p className="text-lg">600 € Gesundheitsbudget</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gray-400 rounded-full flex-shrink-0"></div>
              <div>
                <p className="text-lg">Betriebliches Vorschlagswesen</p>
              </div>
            </div>
          </div>
        </section>

        {/* Radiointerviews Section */}
        <section className="bg-gray-300 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Radiointerviews</h2>
            
            <div className="max-w-2xl mx-auto">
              <div className="space-y-2 mb-8">
                <div className="h-4 bg-gray-500 rounded w-full"></div>
                <div className="h-4 bg-gray-500 rounded w-3/4"></div>
                <div className="h-4 bg-gray-500 rounded w-5/6"></div>
              </div>
              
              <ul className="space-y-3 text-lg">
                <li>• Geschäftsführer</li>
                <li>• Leiter Technik- und Entwicklungsabteilung</li>
                <li>• Marketingabteilung</li>
                <li>• Produktionsleiter</li>
                <li>• HR-Abteilung</li>
                <li>• Logistikabteilung</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Bewerbungsinfo Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <p className="text-lg">
              Wir freuen uns auf Ihre Bewerbung mit Angabe Ihres frühestmöglichen Eintrittstermins über unser Bewerbungsportal.
            </p>
            
            <p className="text-lg">
              Bei Rückfragen erreichen Sie uns unter karriere@euramobil.de.
            </p>
            
            <p className="text-lg">
              Informationen zur Verarbeitung Ihrer personenbezogenen Daten finden Sie in unserer Datenschutzerklärung.
            </p>
          </div>
        </section>

        {/* Stellenangebote CTA Section */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4 text-center">
            <Button 
              size="lg" 
              className="px-12 py-6 text-lg bg-gray-600 hover:bg-gray-700"
              asChild
            >
              <a 
                href="https://recruitingapp-5607.de.umantis.com/Jobs/All" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Jetzt offene Stellen ansehen
              </a>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Karriere;
