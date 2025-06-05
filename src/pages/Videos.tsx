
import { Layout } from "../components/Layout";

const Videos = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center py-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Videos</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Entdecken Sie unsere Wohnmobile in Aktion, Produktionseinblicke und hilfreiche Tutorials.
          </p>
        </section>

        {/* Video Gallery */}
        <section className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Video placeholders */}
            <div className="bg-gray-200 aspect-video rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-gray-500 mb-2">📹</div>
                <p className="text-sm text-gray-600">Werksführung EURA MOBIL</p>
              </div>
            </div>

            <div className="bg-gray-200 aspect-video rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-gray-500 mb-2">📹</div>
                <p className="text-sm text-gray-600">Integra Line Vorstellung</p>
              </div>
            </div>

            <div className="bg-gray-200 aspect-video rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-gray-500 mb-2">📹</div>
                <p className="text-sm text-gray-600">Van-Konzept erklärt</p>
              </div>
            </div>

            <div className="bg-gray-200 aspect-video rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-gray-500 mb-2">📹</div>
                <p className="text-sm text-gray-600">Qualität bei EURA MOBIL</p>
              </div>
            </div>

            <div className="bg-gray-200 aspect-video rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-gray-500 mb-2">📹</div>
                <p className="text-sm text-gray-600">Tipps für Wohnmobil-Einsteiger</p>
              </div>
            </div>

            <div className="bg-gray-200 aspect-video rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-gray-500 mb-2">📹</div>
                <p className="text-sm text-gray-600">Winterfest unterwegs</p>
              </div>
            </div>
          </div>
        </section>

        {/* YouTube Channel Link */}
        <section className="text-center py-12">
          <h2 className="text-2xl font-bold mb-4">Besuchen Sie unseren YouTube-Kanal</h2>
          <p className="text-gray-600 mb-6">
            Weitere Videos und regelmäßige Updates finden Sie auf unserem offiziellen YouTube-Kanal.
          </p>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
          >
            YouTube-Kanal besuchen
          </a>
        </section>
      </div>
    </Layout>
  );
};

export default Videos;
