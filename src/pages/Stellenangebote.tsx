
import { Layout } from "../components/Layout";

const Stellenangebote = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center py-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Stellenangebote</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Entdecken Sie aktuelle Karrieremöglichkeiten bei EURA MOBIL und werden Sie Teil unseres Teams.
          </p>
        </section>

        {/* Current Openings */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Aktuelle Stellenausschreibungen</h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-bold mb-2">Produktionsmitarbeiter (m/w/d)</h3>
              <p className="text-gray-600 mb-4">Vollzeit • Sprendlingen</p>
              <p className="mb-4">
                Wir suchen engagierte Mitarbeiter für unsere Produktion von hochwertigen Wohnmobilen.
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                Jetzt bewerben
              </button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-bold mb-2">Vertriebsmitarbeiter (m/w/d)</h3>
              <p className="text-gray-600 mb-4">Vollzeit • Sprendlingen</p>
              <p className="mb-4">
                Verstärken Sie unser Vertriebsteam und helfen Sie dabei, unsere Kunden optimal zu beraten.
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                Jetzt bewerben
              </button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-bold mb-2">Entwicklungsingenieur (m/w/d)</h3>
              <p className="text-gray-600 mb-4">Vollzeit • Sprendlingen</p>
              <p className="mb-4">
                Gestalten Sie die Zukunft der Wohnmobilentwicklung mit innovativen Lösungen.
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                Jetzt bewerben
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Stellenangebote;
