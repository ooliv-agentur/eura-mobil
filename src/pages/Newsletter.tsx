
import { Layout } from "../components/Layout";

const Newsletter = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center py-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Newsletter</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Bleiben Sie auf dem Laufenden mit unserem Newsletter und erhalten Sie die neuesten Informationen zu EURA MOBIL Produkten und Events.
          </p>
        </section>

        {/* Newsletter Form */}
        <section className="max-w-md mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h2 className="text-xl font-bold mb-4">Newsletter abonnieren</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  E-Mail-Adresse
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="ihre@email.de"
                  required
                />
              </div>
              <div>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" required />
                  <span className="text-sm text-gray-600">
                    Ich stimme der Verarbeitung meiner Daten gemäß der Datenschutzerklärung zu.
                  </span>
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
              >
                Newsletter abonnieren
              </button>
            </form>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Newsletter;
