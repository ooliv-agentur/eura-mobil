
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface DownloadItem {
  id: string;
  title: string;
  fileInfo: string;
  category: string;
}

const kataloge: DownloadItem[] = [
  {
    id: "1",
    title: "Katalog 2025",
    fileInfo: "PDF, 12 MB",
    category: "Kataloge"
  },
  {
    id: "2",
    title: "Zubehörkatalog 2025",
    fileInfo: "PDF, 8 MB",
    category: "Kataloge"
  }
];

const preislisten: DownloadItem[] = [
  {
    id: "3",
    title: "Preisliste Activa One",
    fileInfo: "PDF, 3 MB",
    category: "Preislisten"
  },
  {
    id: "4",
    title: "Preisliste Contura",
    fileInfo: "PDF, 2 MB",
    category: "Preislisten"
  }
];

const technischeDaten: DownloadItem[] = [
  {
    id: "5",
    title: "Technische Daten Integra Serie",
    fileInfo: "PDF, 5 MB",
    category: "Technische Daten"
  },
  {
    id: "6",
    title: "Technische Daten Profila T",
    fileInfo: "PDF, 4 MB",
    category: "Technische Daten"
  },
  {
    id: "7",
    title: "Technische Daten (CH/FR)",
    fileInfo: "PDF, 5 MB",
    category: "Technische Daten"
  },
  {
    id: "8",
    title: "Technische Daten (IT)",
    fileInfo: "PDF, 5 MB",
    category: "Technische Daten"
  },
  {
    id: "9",
    title: "Technische Daten (ES)",
    fileInfo: "PDF, 5 MB",
    category: "Technische Daten"
  }
];

const DownloadSection = ({ title, items }: { title: string; items: DownloadItem[] }) => (
  <section className="mb-12">
    <h2 className="text-2xl font-bold mb-6">{title}</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <Card key={item.id} className="bg-gray-200 border-gray-300">
          <CardHeader>
            <CardTitle className="text-lg">{item.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-2">{item.fileInfo}</p>
            <p className="text-xs text-gray-500">Kategorie: {item.category}</p>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-gray-400 hover:bg-gray-500 text-black">
              Jetzt herunterladen
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  </section>
);

const Downloads = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 px-4 py-6 md:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Hero Section */}
        <section className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Downloads & Kataloge</h1>
          <p className="text-lg text-gray-600 mb-6">
            Hier finden Sie aktuelle Broschüren, Preislisten und technische Datenblätter unserer Reisemobile.
          </p>
        </section>
        
        {/* Intro Text */}
        <section className="mb-8">
          <p className="text-gray-700">
            Hier finden Sie aktuelle Broschüren, Preislisten und technische Datenblätter für unsere Fahrzeuge. 
            Bitte beachten Sie: Technische Daten können sich während der Saison ändern. Die aktuellsten 
            Informationen finden Sie stets im Online-Konfigurator.
          </p>
        </section>
        
        {/* Document Groups */}
        <DownloadSection title="Kataloge" items={kataloge} />
        <DownloadSection title="Preislisten" items={preislisten} />
        <DownloadSection title="Technische Daten" items={technischeDaten} />

        {/* Bedienungsanleitungen Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Bedienungsanleitungen</h2>
          <p className="text-gray-700 mb-6">
            Hier finden Sie unsere aktuellen Bedienungsanleitungen für alle Fahrzeuge als externe Links.
          </p>
          <a
            href="https://cloud.euramobil.de/index.php/s/umUUvaypTVqNMO7"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Button className="w-full md:w-auto bg-gray-400 hover:bg-gray-500 text-black px-8 py-4 text-lg">
              Zur externen Seite
            </Button>
          </a>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Downloads;
