
import { Button } from "@/components/ui/button";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ReisemobilForum = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 px-4 py-6 md:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Hero Section */}
        <section className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Reisemobil Forum</h1>
          <p className="text-lg text-gray-600 mb-6">
            Erleben Sie die Welt von Eura Mobil live vor Ort
          </p>
        </section>
        
        {/* Introduction Block */}
        <section className="mb-12">
          <div className="bg-gray-200 p-6 rounded-lg">
            <p className="text-gray-700 mb-6">
              Das Reisemobil Forum ist Ihr Tor zur faszinierenden Welt des mobilen Reisens. 
              In unserem modernen Ausstellungszentrum präsentieren wir Ihnen die neuesten 
              Innovationen und Entwicklungen im Bereich der Reisemobile. Entdecken Sie 
              verschiedene Marken und Modelle unter einem Dach und lassen Sie sich von 
              unserem Expertenteam umfassend beraten.
            </p>
            
            <h2 className="text-2xl font-bold mb-4">Highlights des Reisemobil Forums</h2>
            <ul className="space-y-2 text-gray-700">
              <li>• 8m Glasfront für optimale Präsentation</li>
              <li>• 3.000 qm Ausstellungsfläche</li>
              <li>• 7 renommierte Marken unter einem Dach</li>
              <li>• Über 50 Fahrzeuge zur Besichtigung</li>
              <li>• 200 qm Schulungsbereich für Beratung</li>
              <li>• 1.900 qm Ersatzteilwesen</li>
              <li>• 600 qm moderne Servicewerkstatt</li>
            </ul>
          </div>
        </section>
        
        {/* Image Placeholder */}
        <section className="mb-12">
          <div className="bg-gray-300 h-64 rounded-lg flex items-center justify-center">
            <span className="text-gray-500 text-lg">Reisemobil Forum Ansicht</span>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="mb-12 text-center">
          <a
            href="https://www.reisemobilforum.de/"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Button className="bg-gray-400 hover:bg-gray-500 text-black px-8 py-4 text-lg">
              Zur Webseite des Reisemobil Forums
            </Button>
          </a>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ReisemobilForum;
