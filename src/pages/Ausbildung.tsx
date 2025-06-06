
import { Layout } from "@/components/Layout";
import { ModelHero } from "@/components/model/ModelHero";
import { Button } from "@/components/ui/button";
import { ExternalLink, Play } from "lucide-react";

const Ausbildung = () => {
  const ausbildungsberufe = [
    "Karosserie- und Fahrzeugbaumechaniker (m/w/d)",
    "Holzmechaniker (m/w/d)",
    "Fachkraft für Lagerlogistik, Fachlagerist (m/w/d)",
    "Industriekaufleute (m/w/d)",
    "Kaufleute für Büromanagement (m/w/d)",
    "Fachinformatiker für Systemintegration (m/w/d)",
    "Fachinformatiker der Fachrichtung Daten- und Prozessanalyse (m/w/d)"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <ModelHero 
        headline="Ihre Karriere bei der Eura Mobil GmbH"
        subline="Ausbildung & Praktikum"
      />

      <div className="container mx-auto px-4 py-12">
        {/* Introduction Section */}
        <div className="text-center mb-16">
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Wir suchen ständig gute Auszubildende (m/w/d) in den Fachbereichen Holzmechanik, Fertigung, Lager, 
            Verwaltung, IT usw. Sehen Sie hier, was Sie bei uns im Bereich Ausbildung & Praktikum erwarten können:
          </p>
        </div>

        {/* Video Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Entdecke unseren neuen Ausbildungsberuf zum Karosserie- und Fahrzeugbaumechaniker (m/w/d):
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="placeholder-image aspect-video relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <Play className="w-16 h-16 mx-auto mb-4 opacity-60" />
                  <p className="text-lg">Video-Player</p>
                  <p className="text-sm opacity-60 mt-2">00:00 / 00:30</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ausbildungsberufe Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Unsere Ausbildungsberufe im Überblick:</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {ausbildungsberufe.map((beruf, index) => (
              <div key={index} className="placeholder-image h-48 flex items-center justify-center">
                <p className="text-center text-gray-600 font-medium px-4">{beruf}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Radio Interviews Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Unsere Azubis zu Gast bei „Antenne Bad Kreuznach":
          </h2>
          <div className="space-y-6">
            <div className="placeholder-image h-32 flex items-center justify-center">
              <p className="text-center text-gray-600">Vorstellung des Berufs Holzmechaniker (m/w/d)</p>
            </div>
            <div className="placeholder-image h-32 flex items-center justify-center">
              <p className="text-center text-gray-600">Vorstellung der kaufmännischen Berufe</p>
            </div>
            <div className="placeholder-image h-32 flex items-center justify-center">
              <p className="text-center text-gray-600">Vorstellung der Berufe im Lager und in der IT</p>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="placeholder-image rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-6">Wir freuen uns auf Ihre Bewerbung!</h2>
          <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
            Bewerben Sie sich mit Angabe Ihres frühestmöglichen Eintrittstermins über unser Bewerberportal.
            Bei Rückfragen erreichen Sie uns unter{" "}
            <a href="mailto:karriere@euramobil.de" className="text-blue-600 hover:underline">
              karriere@euramobil.de
            </a>.
          </p>
          <p className="text-sm text-gray-600 mb-8">
            Die Informationen über die Verarbeitung Ihrer personenbezogenen Daten bei der Eura Mobil GmbH 
            entnehmen Sie unserer{" "}
            <a href="/datenschutz" className="text-blue-600 hover:underline">
              Datenschutzerklärung
            </a>.
          </p>
          <Button asChild size="lg" className="gap-2">
            <a 
              href="https://recruitingapp-5607.de.umantis.com/Jobs/All" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              HIER GEHT ES ZU UNSEREN STELLEN
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Ausbildung;
