
import { Layout } from "@/components/Layout";

const Garantie = () => {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gray-300 h-[60vh] md:h-[70vh] flex items-center justify-center">
          <div className="text-center z-10 px-4 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Garantie bei Eura Mobil
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Mehr Sicherheit für Ihr Reisemobil.
            </p>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg mb-12">
              Als führender Hersteller von Reisemobilen bietet Eura Mobil Ihnen umfassende 
              Garantieleistungen, damit Sie Ihre Reisen sorgenfrei genießen können. Unsere 
              Dichtigkeitsgarantie sowie die Möbelbau-Garantie unterstreichen unseren hohen 
              Qualitätsanspruch und die Langlebigkeit unserer Fahrzeuge.
            </p>
          </div>
        </section>

        {/* Guarantee Sections */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* 10 Jahre Dichtigkeitsgarantie */}
            <div className="bg-gray-100 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">10 Jahre Dichtigkeitsgarantie auf Reisemobile mit Aufbau</h2>
              <p className="text-gray-700 mb-4">
                Seit vielen Jahren setzt Eura Mobil auf verrottungsgeschützte Aufbauten aus 
                glasfaserverstärktem Kunststoff (GFK) mit holzfreien Wänden. Diese Technologie 
                trotzt zuverlässig allen Umwelteinflüssen und Ermüdungserscheinungen.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Gilt für alle Aufbauten ab Saison 2017</li>
                <li>Laufleistung bis max. 150.000 km</li>
                <li>Regelmäßige kostenpflichtige Dichtigkeitskontrolle beim autorisierten Eura Mobil Service Partner erforderlich</li>
              </ul>
            </div>

            {/* 6 Jahre Dichtigkeitsgarantie Vans */}
            <div className="bg-gray-100 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">6 Jahre Dichtigkeitsgarantie auf Vans</h2>
              <p className="text-gray-700 mb-4">
                Für unsere Vans gilt eine Dichtigkeitsgarantie von insgesamt 6 Jahren.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Laufleistung bis max. 100.000 km</li>
                <li>Regelmäßige kostenpflichtige Dichtigkeitskontrolle beim autorisierten Eura Mobil Service Partner erforderlich</li>
              </ul>
            </div>

            {/* 3 Jahre Möbelbau-Garantie */}
            <div className="bg-gray-100 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">3 Jahre Möbelbau-Garantie</h2>
              <p className="text-gray-700 mb-4">
                Unsere Möbel werden mit höchster Präzision und Qualität gefertigt. Die Kombination 
                aus modernster CNC-Technik und erfahrener Handwerkskunst gewährleistet langlebige 
                und stabile Möbelkonstruktionen.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>3 Jahre Garantie auf Möbelbau für alle Modelle</li>
              </ul>
            </div>

            {/* Important Notice */}
            <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-gray-400">
              <h2 className="text-xl font-bold mb-4">Wichtig zu wissen</h2>
              <p className="text-gray-700">
                Voraussetzung zur Aufrechterhaltung der Garantie ist die jährliche kostenpflichtige 
                Dichtigkeitskontrolle beim autorisierten Eura Mobil Service Partner. Garantie- und 
                Gewährleistungsansprüche können ausschließlich beim Servicepartner geltend gemacht 
                werden. Eine Begutachtung durch den autorisierten Fachbetrieb ist Voraussetzung 
                für jede Garantie.
              </p>
            </div>

          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Garantie;
