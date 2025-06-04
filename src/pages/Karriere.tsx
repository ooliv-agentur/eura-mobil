
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
              Steigen Sie bei uns ein!
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Karriere bei der Eura Mobil GmbH
            </p>
          </div>
        </section>

        {/* Intro Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto space-y-6 text-lg">
            <p>
              Als führendes Unternehmen am internationalen Reisemobil-Markt hat sich die Eura Mobil GmbH eine starke Position erarbeitet. Mit den Marken Eura Mobil, Karmann-Mobil und Forster decken wir das gesamte Spektrum qualitativ hochwertiger Reisemobile ab.
            </p>
            <p>
              Als Mitglied der europäischen Trigano-Gruppe mit mehr als 10.000 Mitarbeitern in 14 Ländern bieten sich unserem Unternehmen am Standort Sprendlingen hervorragende Zukunftsperspektiven.
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Benefits bei Eura Mobil</h2>
          
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
                <p className="text-lg">Weiterbildungs- und Entwicklungsmöglichkeiten</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gray-400 rounded-full flex-shrink-0"></div>
              <div>
                <p className="text-lg">600€ Gesundheitsbudget</p>
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
            
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <p className="text-lg mb-6">
                  Wir sind stolz darauf, als „Arbeitgeber des Monats" von unserem regionalen Radiosender Antenne Bad Kreuznach ausgezeichnet worden zu sein. In den nachfolgenden Interviews möchten wir Ihnen gerne verschiedene Unternehmensbereiche sowie spannende Karrieremöglichkeiten vorstellen. Diese Interviews bieten Ihnen nicht nur Einblicke in unsere Unternehmenskultur, sondern ermöglichen es Ihnen auch, mehr über die vielfältigen Aufgaben bei Eura Mobil zu erfahren.
                </p>
              </div>
              
              <ul className="space-y-3 text-lg">
                <li>• Interviews mit unserem Geschäftsführer</li>
                <li>• Interview mit unserem Leiter der Technik- u. Entwicklungsabteilung</li>
                <li>• Interview mit unserer Marketing Abteilung</li>
                <li>• Interview mit unseren Produktionsleitern</li>
                <li>• Interview mit unserer HR-Abteilung</li>
                <li>• Interview mit unserem Leiter der Logistikabteilung</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Kontakt & Bewerbung Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <p className="text-lg">
              Wir freuen uns auf Ihre Bewerbung mit Angabe Ihres frühestmöglichen Eintrittstermins über unser Bewerbungsportal.
            </p>
            
            <p className="text-lg">
              Bei Rückfragen erreichen Sie uns unter <a href="mailto:karriere@euramobil.de" className="text-blue-600 hover:underline">karriere@euramobil.de</a>.
            </p>
            
            <p className="text-lg">
              Die Informationen über die Verarbeitung Ihrer personenbezogenen Daten bei der Eura Mobil GmbH entnehmen Sie unserer Datenschutzerklärung.
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
