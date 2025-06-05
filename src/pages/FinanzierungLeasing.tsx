
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const FinanzierungLeasing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gray-300 h-[60vh] md:h-[70vh] flex items-center justify-center">
          <div className="text-center z-10 px-4 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Eura Mobil Finance – Finanzierung & Leasing
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Flexible Finanzierungs- und Leasinglösungen für Ihr Wohnmobil.
            </p>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg mb-8">
              Die EURA MOBIL Finance bietet Ihnen auf Ihre individuellen Bedürfnisse zugeschnittene 
              Finanzierungsprodukte für neue und gebrauchte Wohnmobile. Ihr EURA MOBIL Vertragshändler 
              steht Ihnen gerne beratend zur Seite und findet gemeinsam mit Ihnen die optimale Lösung.
            </p>
          </div>
        </section>

        {/* Financing Options Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Unsere Finanzierungs- und Leasingangebote</h2>
            
            <div className="space-y-8">
              {/* Standardfinanzierung */}
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Die Standardfinanzierung</h3>
                <p className="text-gray-700">
                  Attraktive Konditionen und flexible Laufzeiten: Tilgung über feste Raten innerhalb einer 
                  vereinbarten Laufzeit (12 bis 150 Monate) mit einem konstanten Zinssatz. So bleiben Ihre 
                  monatlichen Raten überschaubar und Sie genießen maximale Planungssicherheit.
                </p>
              </div>

              {/* Budgetfinanzierung */}
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Die Budgetfinanzierung</h3>
                <p className="text-gray-700">
                  Niedrige Monatsraten und eine optionale Abschlussrate am Vertragsende: Laufzeiten von 12 bis 
                  84 Monaten ermöglichen Ihnen flexible Entscheidungen. Am Ende können Sie wählen: 
                  Fahrzeugrückgabe, Anschlussfinanzierung oder Ablösung.
                </p>
              </div>

              {/* AutoFlex */}
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">AutoFlex</h3>
                <p className="text-gray-700">
                  Individuelle Ratenanpassung und flexible Laufzeiten (bis zu 96 Monate): Monatlich kann die 
                  Rate bis zur Mindestrate herabgesetzt oder erhöht werden – ohne Zusatzkosten. 
                  Sondertilgungen und Ablösungen sind jederzeit kostenlos möglich.
                </p>
              </div>

              {/* Leasing */}
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Leasing</h3>
                <p className="text-gray-700">
                  Die Vorteile des Leasings: Sie zahlen nur die Nutzung des Fahrzeugs. Die Rate hängt von der 
                  Laufzeit ab. Am Ende haben Sie die Wahl: Rückgabe, Vertragsverlängerung oder Übernahme. 
                  Eine Mietsonderzahlung kann angerechnet werden. Leasing ist für Privat- und Geschäftskunden möglich.
                </p>
              </div>

              {/* Santander CampCare */}
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Santander CampCare</h3>
                <p className="text-gray-700">
                  Umfassender Reparaturkostenschutz: Übernimmt Reparaturkosten für zahlreiche Baugruppen, 
                  auch speziell für den Campingaufbau. Laufzeiten bis zu 60 Monate möglich. Schutz vor 
                  unkalkulierbaren Reparaturkosten, inklusive Lohn- und Materialkosten.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Personal Consultation Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Persönliche Beratung</h2>
              <p className="text-lg mb-8">
                Ihr EURA MOBIL Vertragshändler erstellt mit Ihnen gemeinsam ein individuelles 
                Finanzierungskonzept – abgestimmt auf Ihre Wünsche und Möglichkeiten. Sprechen Sie 
                ihn direkt an oder kalkulieren Sie mit dem Finanzierungsrechner von carcredit.de 
                Ihr Wohnmobil online.
              </p>
              <Button 
                size="lg" 
                className="px-12 py-6 text-lg bg-gray-600 hover:bg-gray-700"
                asChild
              >
                <a 
                  href="https://www.carcredit.de" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Finanzierungsrechner öffnen
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Legal Notice */}
        <section className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm text-gray-600 text-center">
              Hinweis: Leasinggeber ist die Santander Consumer Leasing GmbH. Weitere Details 
              finden Sie in den Allgemeinen Versicherungsbedingungen.
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default FinanzierungLeasing;
