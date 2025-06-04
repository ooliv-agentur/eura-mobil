
import React from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";

const Werksfuehrung = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-[color:var(--placeholder-color)] h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <div className="bg-gray-400 text-gray-700 px-4 py-2 rounded mb-4 inline-block">
            Hero Placeholder
          </div>
          <h1 className="text-4xl font-bold">Eura Mobil entdecken – Werksführungen</h1>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        
        {/* Introductory Text */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Lernen Sie unsere Produktion kennen!</h2>
            <div className="space-y-4 text-lg">
              <p>
                Wir bieten montags bis donnerstags eine Werksführung durch unsere Produktion an. 
                Bitte dazu über dieses Formular anmelden.
              </p>
              <p>
                Nach einer kurzen Sicherheitseinweisung geht's direkt los: Produktion, Möbelvormontage, 
                Qualitätssicherung usw. Die Werksführung dauert ca. 1 Stunde. Im Anschluss erhalten Sie 
                einen Kaffee in unserem Reisemobil Forum.
              </p>
              <p>
                Wir freuen uns auf Ihren Besuch!
              </p>
              <p>
                <strong>P.S.:</strong> Die Führung ist aufgrund einiger Treppen für Personen mit 
                eingeschränkter Mobilität leider nicht geeignet.
              </p>
            </div>
          </div>
        </section>

        {/* Interactive Werkstour Section */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Interaktive Werkstour</h2>
            
            {/* Interactive Map Placeholder */}
            <div className="placeholder-image h-96 rounded-lg flex items-center justify-center mb-8">
              <div className="text-center">
                <div className="bg-gray-400 text-gray-700 px-4 py-2 rounded mb-2 inline-block">
                  Interactive Map Placeholder
                </div>
                <p className="text-gray-600">(clickable stations planned)</p>
              </div>
            </div>

            {/* Tour Stations List */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Tour Stationen:</h3>
              <ol className="list-decimal list-inside space-y-2 text-lg">
                <li>Reisemobil Forum (Start/Ziel)</li>
                <li>Bandeinlauf</li>
                <li>Bodenmontage</li>
                <li>Alkoven Vorrichtung</li>
                <li>Möbelmontage</li>
                <li>CNC Fräse / Nesting</li>
                <li>Baugruppen-Installation</li>
                <li>Deckenmontage</li>
                <li>Qualitätskontrolle</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Accessibility Note */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-100 p-6 rounded-lg">
              <p className="text-lg">
                <strong>Bitte beachten:</strong> Die Werksführung ist aufgrund einiger Treppen nicht 
                für Personen mit eingeschränkter Mobilität geeignet.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <Button 
            size="lg" 
            className="bg-gray-400 hover:bg-gray-500 text-gray-700"
            onClick={() => window.open('#', '_blank')}
          >
            Zur Anmeldung
          </Button>
        </section>
      </div>
    </Layout>
  );
};

export default Werksfuehrung;
