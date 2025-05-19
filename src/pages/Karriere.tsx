
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ExternalLink, Users, BookOpen, Award, Bike, PiggyBank } from "lucide-react";

const Karriere = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-6">
        {/* Hero Section */}
        <div className="py-10 mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Karriere bei EURA MOBIL</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Werde Teil eines starken Teams mit Leidenschaft für mobile Freiheit.
          </p>
        </div>
        
        {/* Why EURA MOBIL Section */}
        <section className="mb-12 py-8 bg-gray-100 rounded-lg">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">Warum EURA MOBIL?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-start">
                <div className="bg-white p-3 rounded-full mr-3">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Familiäres Arbeitsumfeld</h3>
                  <p className="text-sm text-gray-600">Gemeinsam im Team Erfolge feiern</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white p-3 rounded-full mr-3">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Weiterbildung & Entwicklung</h3>
                  <p className="text-sm text-gray-600">Individuelle Förderung und Karrierechancen</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white p-3 rounded-full mr-3">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Mitarbeiter-Events</h3>
                  <p className="text-sm text-gray-600">Gemeinsame Teamaktivitäten</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white p-3 rounded-full mr-3">
                  <Bike className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">E-Bike-Leasing</h3>
                  <p className="text-sm text-gray-600">Umweltfreundlich zur Arbeit</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white p-3 rounded-full mr-3">
                  <PiggyBank className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Betriebliche Altersvorsorge</h3>
                  <p className="text-sm text-gray-600">Für eine sichere Zukunft</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action Section - Replacing Job Listings */}
        <section className="mb-12 py-8 text-center bg-gray-50 rounded-lg">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl font-bold mb-4">Stellenangebote</h2>
            <p className="mb-6 text-lg">
              Alle aktuellen Stellenangebote finden Sie in unserem Bewerbungsportal.
            </p>
            <Button 
              size="lg" 
              className="px-8 py-6 text-lg"
              onClick={() => window.open("https://recruitingapp-5607.de.umantis.com/Jobs/All", "_blank", "noopener,noreferrer")}
            >
              <ExternalLink className="mr-2" />
              Jetzt offene Stellen ansehen
            </Button>
          </div>
        </section>
        
        {/* Contact Info Section (Optional) */}
        <section className="mb-12 text-center">
          <p className="text-gray-600">
            Bei Fragen zu Karrieremöglichkeiten bei EURA MOBIL kontaktieren Sie gerne unser HR-Team.
          </p>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Karriere;
