
import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Teaser-Karten Daten
const qualityFeatures = [
  {
    title: "Sealed Structure",
    description: "Vollständige Abdichtung für optimalen Schutz gegen Witterungseinflüsse",
    link: "/qualitaet/sealed-structure"
  },
  {
    title: "Winterfestigkeit",
    description: "Perfekte Isolierung für Komfort bei jeder Außentemperatur",
    link: "/qualitaet/winterfestigkeit"
  },
  {
    title: "Leichtbau",
    description: "Modernste Materialien für reduziertes Gewicht und mehr Zuladung",
    link: "/qualitaet/leichtbau"
  },
  {
    title: "Möbelbau",
    description: "Hochwertige Verarbeitung und intelligente Stauraumlösungen",
    link: "/qualitaet/moebelbau"
  },
  {
    title: "Schlafkomfort",
    description: "Ergonomische Matratzen und durchdachte Bettkonzepte",
    link: "/qualitaet/schlafkomfort"
  },
  {
    title: "Küchenwelt",
    description: "Funktionale Küchenblöcke mit hochwertiger Ausstattung",
    link: "/qualitaet/kuechenwelt"
  },
  {
    title: "Wellnessbereich",
    description: "Clevere Badlösungen für maximalen Komfort auf kleinem Raum",
    link: "/qualitaet/wellnessbereich"
  }
];

const QualitaetVorteile = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-6">
        {/* Hero-Bereich */}
        <section className="mb-10">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 text-center">
            Was unsere Wohnmobile so besonders macht
          </h1>
          <p className="text-lg md:text-xl text-center text-gray-600 mb-4">
            Qualität & Vorteile unserer Reisemobile
          </p>
          <div className="max-w-3xl mx-auto">
            <p className="text-center mb-6">
              Ob Teil-/Integrierter oder Alkoven, ob Citytrip oder Fernreise – bei Eura Mobil finden Sie für jede Gelegenheit das passende Reisemobil. Höchste Qualität, individuelle Features und jahrzehntelange Erfahrung machen jedes Modell einzigartig.
            </p>
          </div>
        </section>
        
        {/* Teaser-Grid */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {qualityFeatures.map((feature) => (
              <Card key={feature.title} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="h-32 bg-gray-200 mb-4 flex items-center justify-center text-gray-400">
                    [Platzhalterbild]
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{feature.description}</p>
                  <Button variant="outline" asChild className="w-full">
                    <Link to={feature.link}>Mehr erfahren</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        
        {/* Abschluss-CTA */}
        <section className="bg-gray-100 p-6 rounded-lg">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-xl font-bold mb-6">Bereit für Ihr perfektes Wohnmobil?</h2>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button asChild>
                <Link to="/modelle">Jetzt Wohnmobil entdecken</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/modelle">Zur Modellübersicht</Link>
              </Button>
              <Button variant="secondary" asChild>
                <Link to="/berater">Wohnmobilberater starten</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default QualitaetVorteile;
