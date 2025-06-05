
import Header from "../components/Header";
import Footer from "../components/Footer";

const Gebrauchtfahrzeuge = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gray-300 h-[60vh] md:h-[70vh] flex items-center justify-center">
          <div className="text-center z-10 px-4 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Gebrauchtfahrzeuge
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Hier finden Sie gebrauchte Eura Mobil Wohnmobile, die direkt bei Fahrzeughändlern stehen.
            </p>
          </div>
        </section>

        {/* Notice Section */}
        <section className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-center bg-gray-50 p-6 rounded-lg">
              Bitte beachten Sie: Die Anzeigen sind nicht von der Eura Mobil GmbH erstellt und die Fahrzeuge stehen nicht im Werk in Sprendlingen.
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
                  Fahrzeugfilter & Gebrauchtfahrzeuge-Listing
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Gebrauchtfahrzeuge;
