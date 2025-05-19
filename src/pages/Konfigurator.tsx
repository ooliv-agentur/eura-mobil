
import React from "react";
import { ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Konfigurator = () => {
  const handleExternalLink = () => {
    // Simuliert das Öffnen eines externen Links
    window.open("https://example.com/konfigurator", "_blank");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-6">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          Das passende Reisemobil für Sie!
        </h1>
        
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="space-y-4">
            <p className="text-center">
              Sie sind auf der Suche nach dem passenden Wohnmobil für sich? Ein Wohnmobil, 
              das genau Ihren Wünschen und Vorstellungen an Länge, Gewicht, Sitzplätze, 
              Schlafplätze und Bettenform entspricht?
            </p>
            <p className="text-center">
              Klicken Sie unten auf den Button, um den Wohnmobilkonfigurator zu starten. 
              Das Tool öffnet sich in einem neuen Fenster.
            </p>
          </div>
          
          <div className="flex justify-center py-4">
            <Button 
              onClick={handleExternalLink} 
              size="lg"
              className="flex items-center gap-2"
            >
              Jetzt Konfigurator starten
              <ExternalLink className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="bg-gray-100 p-4 rounded-lg mt-8">
            <h2 className="font-bold text-lg mb-4 text-center">So funktioniert der Konfigurator</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Baureihe auswählen</li>
              <li>Grundriss konfigurieren</li>
              <li>Sonderausstattung hinzufügen</li>
              <li>Ergebnis als PDF speichern oder drucken</li>
            </ol>
          </div>
          
          <div className="mt-8 p-4 border border-gray-300 rounded-lg">
            <p className="text-sm text-center italic">
              Bitte beachten Sie: Der Konfigurator wird von einem externen Anbieter betrieben 
              und in einem neuen Tab geöffnet.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Konfigurator;
