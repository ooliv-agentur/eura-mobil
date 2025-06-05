
import { Button } from "@/components/ui/button";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Mail } from "lucide-react";

const Gebrauchtfahrzeuge = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gray-300 h-[60vh] md:h-[70vh] flex items-center justify-center">
          <div className="text-center z-10 px-4 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Verfügbare Gebrauchtfahrzeuge
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Entdecken Sie unsere gebrauchten Wohnmobile – geprüft und bereit für neue Abenteuer.
            </p>
          </div>
        </section>

        {/* Notice Section */}
        <section className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-center bg-gray-50 p-6 rounded-lg">
              Bitte beachten Sie: Die Anzeigen stammen von unseren Vertragshändlern und stehen nicht im Werk Sprendlingen.
            </p>
          </div>
        </section>

        {/* iFrame Placeholder Section */}
        <section className="container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gray-300 h-[600px] rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-xl font-bold text-gray-600 mb-2">
                  iFrame Placeholder
                </div>
                <div className="text-lg text-gray-600">
                  Gebrauchtfahrzeug-Filter und Fahrzeuglisting
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Interesse an einem Gebrauchtfahrzeug?</h2>
              <p className="text-lg mb-8">
                Unser Team berät Sie gerne zu unseren Gebrauchtfahrzeugen und erstellt 
                Ihnen ein individuelles Angebot. Kontaktieren Sie uns noch heute.
              </p>
              <Button className="flex items-center gap-2 mx-auto" size="lg">
                <Mail className="h-4 w-4" />
                Kontakt aufnehmen
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Gebrauchtfahrzeuge;
