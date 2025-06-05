
import { Layout } from "../components/Layout";

const Club = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center py-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">EURA MOBIL Club</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Werden Sie Teil der EURA MOBIL Familie und profitieren Sie von exklusiven Vorteilen und einer lebendigen Community.
          </p>
        </section>

        {/* Club Benefits */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Club-Vorteile</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-bold mb-4">Exklusive Events</h3>
              <p className="text-gray-600">
                Nehmen Sie an besonderen Veranstaltungen, Werksbesichtigungen und Clubtreffen teil.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-bold mb-4">Rabatte & Angebote</h3>
              <p className="text-gray-600">
                Profitieren Sie von exklusiven Rabatten auf Zubehör, Service und Ersatzteile.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-bold mb-4">Club-Magazin</h3>
              <p className="text-gray-600">
                Erhalten Sie regelmäßig unser Club-Magazin mit News, Tipps und Reiseberichten.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-bold mb-4">Community</h3>
              <p className="text-gray-600">
                Vernetzen Sie sich mit anderen EURA MOBIL Besitzern und teilen Sie Ihre Erfahrungen.
              </p>
            </div>
          </div>

          {/* Membership Form */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-center">Club-Mitgliedschaft beantragen</h2>
            <form className="max-w-md mx-auto space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  E-Mail
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="vehicle" className="block text-sm font-medium text-gray-700 mb-2">
                  EURA MOBIL Fahrzeug
                </label>
                <input
                  type="text"
                  id="vehicle"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="z.B. Integra 760 EF"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
              >
                Mitgliedschaft beantragen
              </button>
            </form>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Club;
