
import { Button } from "@/components/ui/button";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ExternalLink } from "lucide-react";

const Mietfahrzeuge = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gray-300 h-[60vh] md:h-[70vh] flex items-center justify-center">
          <div className="text-center z-10 px-4 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              So macht Reisen Spaß
            </h1>
            <p className="text-lg md:text-xl mb-8">
              DRM – der große deutsche Vermiet-Profi
            </p>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto space-y-6 text-lg">
            <h2 className="text-3xl font-bold mb-6">DRM - Deutsche Reisemobil Vermietung</h2>
            <p>
              Sie suchen für Ihren Urlaub ein komfortables und zuverlässiges Wohnmobil zu fairen 
              Konditionen? Die DRM (Deutsche Reisemobil Vermietung) überzeugt mit einer breiten 
              Fahrzeugpalette: Vom kompakten, wendigen Camper über familienfreundliche Alkoven 
              bis hin zum geräumigen, hochwertigen Wohnmobil finden Sie hier das passende Fahrzeug 
              für Ihren Urlaub.
            </p>
            <p>
              Die DRM ist heute Deutschlands führender Wohnmobil-Einzel-Vermieter. Mit 12 
              Mietstationen in Deutschland und Österreich steht Ihnen eine Flotte von über 400 
              neuwertigen Mietfahrzeugen zur Verfügung.
            </p>
            <p>
              Die Deutsche Reisemobil Vermietungs GmbH bietet Reisemobile für jeden Bedarf. Mit 
              einer großen Vermietflotte ist die DRM Deutsche Reisemobil mit ihren deutschlandweiten 
              Vermietstationen seit vielen Jahren Ihr professioneller Partner im Bereich der 
              Wohnmobil-Vermietung.
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Vorteile der DRM Wohnmobil-Miete</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-400 rounded-full flex-shrink-0"></div>
              <p className="text-lg">Gepflegte Fahrzeuge maximal 2 Jahre alt</p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-400 rounded-full flex-shrink-0"></div>
              <p className="text-lg">Unbegrenzte Kilometer inklusive</p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-400 rounded-full flex-shrink-0"></div>
              <p className="text-lg">12 Mietstationen in Deutschland und Österreich</p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-400 rounded-full flex-shrink-0"></div>
              <p className="text-lg">Vollkaskoschutz mit Selbstbeteiligung</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-6">Bereit für Ihren Wohnmobil-Urlaub?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Entdecken Sie das umfangreiche Angebot der DRM und buchen Sie 
              das perfekte Fahrzeug für Ihren nächsten Urlaub.
            </p>
            <Button 
              size="lg" 
              className="px-12 py-6 text-lg bg-gray-600 hover:bg-gray-700"
              asChild
            >
              <a 
                href="https://www.drm.de/de/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Jetzt Mietfahrzeug buchen
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Mietfahrzeuge;
