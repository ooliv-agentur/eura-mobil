
import React from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

// Teaser-Karten Daten
const qualityFeatures = [
  {
    title: "Sealed Structure",
    link: "/qualitaet/sealed-structure",
    description: "Innovative Abdichtungstechnologie für maximale Dichtheit und Langlebigkeit."
  },
  {
    title: "Winterfestigkeit",
    link: "/qualitaet/winterfestigkeit",
    description: "Optimale Isolierung und Heizung für komfortables Reisen bei kalten Temperaturen."
  },
  {
    title: "Leichtbauarchitektur",
    link: "/qualitaet/leichtbau",
    description: "Moderne Leichtbauweise für bessere Fahrdynamik und Kraftstoffeffizienz."
  },
  {
    title: "Möbelbau",
    link: "/qualitaet/moebelbau",
    description: "Hochwertige Möbel mit durchdachten Details und langlebiger Qualität."
  },
  {
    title: "Doppelboden",
    link: "/qualitaet/doppelboden",
    description: "Zusätzlicher Stauraum und verbesserte Isolierung durch innovative Bodenkonstruktion."
  },
  {
    title: "Schlafkomfort",
    link: "/qualitaet/schlafkomfort",
    description: "Ergonomische Betten und hochwertige Matratzen für erholsamen Schlaf."
  },
  {
    title: "Küchenwelt",
    link: "/qualitaet/kuechenwelt",
    description: "Funktionale Küchenausstattung mit hochwertigen Geräten und cleverer Raumnutzung."
  },
  {
    title: "Wellness",
    link: "/qualitaet/wellnessbereich",
    description: "Komfortable Sanitärbereiche für Entspannung und Wohlbefinden unterwegs."
  }
];

const QualitaetVorteile = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Hero-Bereich */}
        <section className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center">
            Was unsere Wohnmobile so besonders macht
          </h1>
          <p className="text-xl md:text-2xl text-center text-gray-600 mb-8">
            Qualität & Vorteile unserer Reisemobile
          </p>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-center mb-6">
              Ob Teil-/Integrierter oder Alkoven, ob spontaner Wochenend-Trip in eine lebendige Metropole oder 
              lang geplante Reise in die entspannende Ruhe der Natur – bei Eura Mobil finden Sie für jede 
              Gelegenheit, für kleine und große Personenzahlen immer das passende Gefährt. Dank der gleichbleibend 
              höchsten Qualität all unserer Reisemobile und der vielen individuellen Besonderheiten, die jedes 
              einzelne von ihnen bietet, müssen Sie nur noch das Eine aussuchen, das Sie komplett begeistert. 
              Als Unternehmen, dessen Kernkompetenz seit vielen erfolgreichen Jahren ganz im Bereich Reisemobil 
              angesiedelt ist, stehen wir Ihnen auch bei diesem wichtigen Entscheidungsprozess gerne mit Rat und 
              Tat zur Seite, damit sich Ihr individueller Urlaubstraum auch verwirklicht.
            </p>
          </div>
        </section>
        
        {/* Teaser-Grid mit verbesserter Darstellung */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {qualityFeatures.map((feature) => (
              <Card key={feature.title} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6 flex flex-col h-full">
                  <Skeleton className="h-32 w-full mb-4" />
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{feature.description}</p>
                  <div className="mt-auto">
                    <Button variant="outline" asChild className="w-full">
                      <Link to={feature.link}>Mehr erfahren</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        
        {/* Abschluss-CTA */}
        <section className="bg-gray-100 p-8 rounded-lg">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6">Sie möchten mehr zu unseren Modellen erfahren?</h2>
            <Button asChild size="lg">
              <Link to="/modelle">Jetzt entdecken</Link>
            </Button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default QualitaetVorteile;
