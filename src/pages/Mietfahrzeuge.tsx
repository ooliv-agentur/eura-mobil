
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ExternalLink } from "lucide-react";

const Mietfahrzeuge = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gray-300 h-[60vh] md:h-[70vh] flex items-center justify-center">
          <div className="text-center z-10 px-4 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Mietfahrzeuge
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Flexible Wohnmobil-Miete für Ihren perfekten Urlaub
            </p>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto space-y-6 text-lg">
            <p>
              Unsere Mietfahrzeuge werden über unseren Partner DRM (Deutsches Reisemobil) verwaltet. 
              DRM bietet Ihnen eine große Auswahl an hochwertigen Wohnmobilen verschiedener Marken 
              und Größen für Ihren individuellen Urlaub.
            </p>
            <p>
              Profitieren Sie von der langjährigen Erfahrung und dem professionellen Service unseres 
              Partners, um das perfekte Fahrzeug für Ihre Reisepläne zu finden.
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Vorteile der Wohnmobil-Miete</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gray-400 rounded-full flex-shrink-0 mb-4"></div>
              <h3 className="font-bold text-lg mb-2">Flexible Mietdauer</h3>
              <p className="text-gray-600">Von Wochenendtrips bis zu mehrwöchigen Urlauben</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gray-400 rounded-full flex-shrink-0 mb-4"></div>
              <h3 className="font-bold text-lg mb-2">Umfassende Versicherung</h3>
              <p className="text-gray-600">Vollkaskoversicherung und Schutzpakete inklusive</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gray-400 rounded-full flex-shrink-0 mb-4"></div>
              <h3 className="font-bold text-lg mb-2">Große Fahrzeugauswahl</h3>
              <p className="text-gray-600">Verschiedene Größen und Ausstattungen verfügbar</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gray-400 rounded-full flex-shrink-0 mb-4"></div>
              <h3 className="font-bold text-lg mb-2">Professioneller Service</h3>
              <p className="text-gray-600">Beratung und Betreuung von Experten</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gray-400 rounded-full flex-shrink-0 mb-4"></div>
              <h3 className="font-bold text-lg mb-2">Einweisung inklusive</h3>
              <p className="text-gray-600">Ausführliche Fahrzeugeinweisung vor Reiseantritt</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gray-400 rounded-full flex-shrink-0 mb-4"></div>
              <h3 className="font-bold text-lg mb-2">24/7 Pannenhilfe</h3>
              <p className="text-gray-600">Rundumbetreuung auch während der Reise</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-6">Jetzt Wohnmobil mieten</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Entdecken Sie das umfangreiche Angebot unseres Partners DRM und finden Sie 
              das perfekte Fahrzeug für Ihren nächsten Urlaub.
            </p>
            <Button 
              size="lg" 
              className="px-12 py-6 text-lg bg-gray-600 hover:bg-gray-700"
              asChild
            >
              <a 
                href="https://www.drm.de/de/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Zu DRM Wohnmobil-Vermietung
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Mietfahrzeuge;
