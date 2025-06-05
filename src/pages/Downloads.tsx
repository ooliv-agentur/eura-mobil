
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface DownloadItem {
  id: string;
  title: string;
  fileInfo: string;
  category: string;
}

const downloadItems: DownloadItem[] = [
  {
    id: "1",
    title: "Katalog 2025",
    fileInfo: "PDF, 12 MB",
    category: "Kataloge"
  },
  {
    id: "2",
    title: "Preisliste Activa One",
    fileInfo: "PDF, 3 MB",
    category: "Preislisten"
  },
  {
    id: "3",
    title: "Technische Daten Integra Serie",
    fileInfo: "PDF, 5 MB",
    category: "Technische Daten"
  },
  {
    id: "4",
    title: "Zubehörkatalog 2025",
    fileInfo: "PDF, 8 MB",
    category: "Kataloge"
  },
  {
    id: "5",
    title: "Preisliste Contura",
    fileInfo: "PDF, 2 MB",
    category: "Preislisten"
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
        
        {/* Filter Section */}
        <div className="mb-8">
          <Select>
            <SelectTrigger className="w-full md:w-80 bg-gray-200">
              <SelectValue placeholder="Kategorie auswählen (Alle Dokumente)" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Alle Dokumente</SelectItem>
              <SelectItem value="Kataloge">Kataloge</SelectItem>
              <SelectItem value="Preislisten">Preislisten</SelectItem>
              <SelectItem value="Technische Daten">Technische Daten</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        {/* Download Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {downloadItems.map((item) => (
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
      </main>
      
      <Footer />
    </div>
  );
};

export default Downloads;
