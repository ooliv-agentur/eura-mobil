
import { Layout } from "../components/Layout";

const Ausbildung = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center py-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Ausbildung</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Starten Sie Ihre Karriere bei EURA MOBIL mit einer fundierten Ausbildung in einem zukunftsorientierten Unternehmen.
          </p>
        </section>

        {/* Training Programs */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Ausbildungsberufe</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-bold mb-4">Fahrzeugbaumechaniker (m/w/d)</h3>
              <ul className="text-gray-600 space-y-2 mb-4">
                <li>• Dauer: 3,5 Jahre</li>
                <li>• Schwerpunkt: Caravan- und Reisemobilbau</li>
                <li>• Praktische und theoretische Ausbildung</li>
                <li>• Übernahmechancen nach Abschluss</li>
              </ul>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                Mehr erfahren
              </button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-bold mb-4">Industriekaufmann (m/w/d)</h3>
              <ul className="text-gray-600 space-y-2 mb-4">
                <li>• Dauer: 3 Jahre</li>
                <li>• Verschiedene Abteilungen durchlaufen</li>
                <li>• Kaufmännische Grundlagen erlernen</li>
                <li>• Vielfältige Entwicklungsmöglichkeiten</li>
              </ul>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                Mehr erfahren
              </button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-bold mb-4">Technischer Produktdesigner (m/w/d)</h3>
              <ul className="text-gray-600 space-y-2 mb-4">
                <li>• Dauer: 3,5 Jahre</li>
                <li>• CAD-Design und Konstruktion</li>
                <li>• Produktentwicklung von Grund auf</li>
                <li>• Moderne Technologien und Software</li>
              </ul>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                Mehr erfahren
              </button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-bold mb-4">Elektroniker (m/w/d)</h3>
              <ul className="text-gray-600 space-y-2 mb-4">
                <li>• Dauer: 3,5 Jahre</li>
                <li>• Elektroinstallation in Fahrzeugen</li>
                <li>• Moderne Bordelektronik</li>
                <li>• Fehlerdiagnose und Reparatur</li>
              </ul>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                Mehr erfahren
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Ausbildung;
