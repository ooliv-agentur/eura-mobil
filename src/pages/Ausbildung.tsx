
import { Layout } from "@/components/Layout";
import { ModelHero } from "@/components/model/ModelHero";
import { Button } from "@/components/ui/button";
import { ExternalLink, Play } from "lucide-react";

const Ausbildung = () => {
  const ausbildungsberufe = [
    {
      title: "Karosserie- und Fahrzeugbaumechaniker (m/w/d)",
      details: [
        "NEU: Fachrichtung Caravan- & Reisemobiltechnik",
        "Herstellung und Instandsetzung von Karosserien, Auf- und Ausbauten & Inneneinrichtungen",
        "Bau, Aufbau und Ausbau von Freizeitfahrzeugen für Wohn- und Reisezwecke",
        "Durchführung von Nachrüstarbeiten und Instandhaltung von elektrischen, hydraulischen und pneumatischen Systemen in Freizeitfahrzeugen",
        "Ausrüsten und Warten von Ver- und Entsorgungseinrichtungen in Freizeitfahrzeugen"
      ]
    },
    {
      title: "Holzmechaniker (m/w/d)",
      details: [
        "Be- und Verarbeitung von Holz- und Holzwerkstoffen",
        "Maschinelles Sägen, Hobeln, Bohren",
        "Anfertigen, Einrichten und Instandhalten von Schablonen, Lehren und Messwerkzeugen",
        "Einrichten, Bedienen und Instandhalten von Werkzeugen und Geräten",
        "Flächen furnieren",
        "Skizzen und technische Zeichnungen anfertigen",
        "Oberflächen behandeln"
      ]
    },
    {
      title: "Fachkraft für Lagerlogistik, Fachlagerist (m/w/d)",
      details: [
        "Waren annehmen",
        "Sichtkontrollen durchführen",
        "Kommissionieren",
        "Waren in die Produktion liefern",
        "Logistische Prozesse optimieren"
      ]
    },
    {
      title: "Industriekaufleute (m/w/d)",
      details: [
        "Betriebswirtschaftliche Abläufe steuern",
        "Lieferantenmanagement",
        "Verkaufsverhandlungen",
        "Buchungen und Kontrolle von Geschäftsvorgängen",
        "Personalplanung"
      ]
    },
    {
      title: "Kaufleute für Büromanagement (m/w/d)",
      details: [
        "Organisieren und Bearbeiten bürowirtschaftlicher Aufgaben",
        "Auftragsbearbeitung",
        "Beschaffung",
        "Rechnungswesen",
        "Marketing und Personalverwaltung"
      ]
    },
    {
      title: "Fachinformatiker für Systemintegration (m/w/d)",
      details: [
        "Planen und Konfigurieren von IT-Systemen",
        "Fehler/Störungen diagnostizieren und beheben",
        "Interne und externe Anwenderberatung",
        "Systemdokumentationen"
      ]
    },
    {
      title: "Fachinformatiker der Fachrichtung Daten- und Prozessanalyse (m/w/d)",
      details: [
        "Prüfen bestehender Arbeits- und Geschäftsprozesse auf informationstechnischer Ebene",
        "Effiziente Gestaltung datengesteuerter Prozesse",
        "Digitalisierung von Geschäftsprozessen",
        "Automation, IT-Sicherheit und Datenschutz"
      ]
    }
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
        <div className="placeholder-image p-8 mb-12">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed">
              Wir suchen ständig gute Auszubildende (m/w/d) in den Fachbereichen Holzmechanik, Fertigung, Lager, 
              Verwaltung, IT usw. Sehen Sie hier, was Sie bei uns im Bereich Ausbildung & Praktikum erwarten können:
            </p>
          </div>
        </div>

        {/* Video Section */}
        <div className="placeholder-image p-8 mb-12">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">
              Entdecke unseren neuen Ausbildungsberuf zum Karosserie- und Fahrzeugbaumechaniker (m/w/d):
            </h2>
            <div className="placeholder-image aspect-video relative max-w-3xl mx-auto">
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
        <div className="placeholder-image p-8 mb-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Unsere Ausbildungsberufe im Überblick:</h2>
            <div className="space-y-8">
              {ausbildungsberufe.map((beruf, index) => (
                <div key={index} className="placeholder-image p-6">
                  <h3 className="text-xl font-bold mb-4 text-center">{beruf.title}</h3>
                  <ul className="space-y-2 text-gray-700 max-w-4xl mx-auto">
                    {beruf.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Radio Interviews Section */}
        <div className="placeholder-image p-8 mb-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Unsere Azubis zu Gast bei „Antenne Bad Kreuznach":
            </h2>
            <div className="space-y-6">
              <div className="placeholder-image p-6">
                <h3 className="text-lg font-medium mb-4 text-center">Vorstellung des Berufs Holzmechaniker (m/w/d)</h3>
                <p className="text-center text-gray-600">Audio-Player</p>
              </div>
              <div className="placeholder-image p-6">
                <h3 className="text-lg font-medium mb-4 text-center">Vorstellung der kaufmännischen Berufe</h3>
                <p className="text-center text-gray-600">Audio-Player</p>
              </div>
              <div className="placeholder-image p-6">
                <h3 className="text-lg font-medium mb-4 text-center">Vorstellung der Berufe im Lager und in der IT</h3>
                <p className="text-center text-gray-600">Audio-Player</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="placeholder-image p-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Wir freuen uns auf Ihre Bewerbung!</h2>
            <p className="text-gray-700 mb-6">
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
      </div>
    </Layout>
  );
};

export default Ausbildung;
