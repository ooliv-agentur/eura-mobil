
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Wrench, 
  Hammer, 
  Package, 
  Calculator, 
  FileText, 
  Computer, 
  Database,
  ExternalLink,
  Play,
  Volume2
} from "lucide-react";

const Ausbildung = () => {
  const ausbildungsberufe = [
    {
      title: "Karosserie- und Fahrzeugbaumechaniker (m/w/d)",
      badge: "NEU: Fachrichtung Caravan- & Reisemobiltechnik",
      icon: <Wrench className="w-6 h-6" />,
      tasks: [
        "Herstellung und Instandsetzung von Karosserien, Auf- und Ausbauten & Inneneinrichtungen",
        "Bau, Aufbau und Ausbau von Freizeitfahrzeugen für Wohn- und Reisezwecke",
        "Durchführung von Nachrüstarbeiten und Instandhaltung von elektrischen, hydraulischen und pneumatischen Systemen in Freizeitfahrzeugen",
        "Ausrüsten und Warten von Ver- und Entsorgungseinrichtungen in Freizeitfahrzeugen"
      ]
    },
    {
      title: "Holzmechaniker (m/w/d)",
      icon: <Hammer className="w-6 h-6" />,
      tasks: [
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
      icon: <Package className="w-6 h-6" />,
      tasks: [
        "Waren annehmen",
        "Sichtkontrollen durchführen",
        "Kommissionieren",
        "Waren in die Produktion liefern",
        "Logistische Prozesse optimieren"
      ]
    },
    {
      title: "Industriekaufleute (m/w/d)",
      icon: <Calculator className="w-6 h-6" />,
      tasks: [
        "Betriebswirtschaftliche Abläufe steuern",
        "Lieferantenmanagement",
        "Verkaufsverhandlungen",
        "Buchungen und Kontrolle von Geschäftsvorgängen",
        "Personalplanung"
      ]
    },
    {
      title: "Kaufleute für Büromanagement (m/w/d)",
      icon: <FileText className="w-6 h-6" />,
      tasks: [
        "Organisieren und Bearbeiten bürowirtschaftlicher Aufgaben",
        "Auftragsbearbeitung",
        "Beschaffung",
        "Rechnungswesen",
        "Marketing und Personalverwaltung"
      ]
    },
    {
      title: "Fachinformatiker für Systemintegration (m/w/d)",
      icon: <Computer className="w-6 h-6" />,
      tasks: [
        "Planen und Konfigurieren von IT-Systemen",
        "Fehler/Störungen diagnostizieren und beheben",
        "Interne und externe Anwenderberatung",
        "Systemdokumentationen"
      ]
    },
    {
      title: "Fachinformatiker der Fachrichtung Daten- und Prozessanalyse (m/w/d)",
      icon: <Database className="w-6 h-6" />,
      tasks: [
        "Prüfen bestehender Arbeits- und Geschäftsprozesse auf informationstechnischer Ebene",
        "Effiziente Gestaltung datengesteuerter Prozesse",
        "Digitalisierung von Geschäftsprozessen",
        "Automation, IT-Sicherheit und Datenschutz"
      ]
    }
  ];

  const radioInterviews = [
    {
      title: "Vorstellung des Berufs Holzmechaniker (m/w/d)",
      description: "Lina Lotterschmidt & Max Stahl bei Antenne Bad Kreuznach",
      embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/912345678&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
    },
    {
      title: "Vorstellung der kaufmännischen Berufe",
      description: "Das Jobkonzept mit Lina Lotterschmid von Eura Mobil",
      embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/912345679&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
    },
    {
      title: "Vorstellung der Berufe im Lager und in der IT",
      description: "Das Jobkonzept vom 26.11.2020 mit Lina Lotterschmid von Eura Mobil",
      embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/912345680&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Ihre Karriere bei der Eura Mobil GmbH</h1>
          <h2 className="text-2xl text-gray-600 mb-6">Ausbildung & Praktikum</h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Wir suchen ständig gute Auszubildende (m/w/d) in den Fachbereichen Holzmechanik, Fertigung, Lager, 
            Verwaltung, IT usw. Sehen Sie hier, was Sie bei uns im Bereich Ausbildung & Praktikum erwarten können:
          </p>
        </div>

        {/* Video Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Entdecke unseren neuen Ausbildungsberuf zum Karosserie- und Fahrzeugbaumechaniker (m/w/d):
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900 rounded-lg overflow-hidden aspect-video relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <Play className="w-16 h-16 mx-auto mb-4 opacity-80" />
                  <p className="text-lg">Video-Player</p>
                  <p className="text-sm opacity-60 mt-2">00:00 / 00:30</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ausbildungsberufe Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">Unsere Ausbildungsberufe im Überblick:</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {ausbildungsberufe.map((beruf, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className="text-blue-600 mt-1">
                      {beruf.icon}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg leading-tight mb-2">{beruf.title}</CardTitle>
                      {beruf.badge && (
                        <Badge variant="secondary" className="bg-green-100 text-green-800 mb-2">
                          {beruf.badge}
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {beruf.tasks.map((task, taskIndex) => (
                      <li key={taskIndex} className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                        {task}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Radio Interviews Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">
            Unsere Azubis zu Gast bei „Antenne Bad Kreuznach":
          </h3>
          <div className="space-y-8">
            {radioInterviews.map((interview, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Volume2 className="w-5 h-5 text-blue-600" />
                    {interview.title}
                  </CardTitle>
                  <CardDescription>{interview.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-100 p-6 rounded-lg text-center">
                    <p className="text-gray-600 mb-4">
                      Klicken Sie auf den unteren Button, um den Inhalt von w.soundcloud.com zu laden.
                    </p>
                    <Button variant="outline" className="gap-2">
                      <Volume2 className="w-4 h-4" />
                      Inhalt laden
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="bg-blue-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-6">Wir freuen uns auf Ihre Bewerbung!</h3>
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
