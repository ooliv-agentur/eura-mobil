
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Download } from "lucide-react";

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
  }
];

const Downloads = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 px-4 py-6 md:px-6 lg:px-8 max-w-6xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">Downloads & Kataloge</h1>
        
        <p className="mb-6 text-gray-700">
          Hier finden Sie aktuelle Broschüren, Preislisten und technische Datenblätter.
        </p>
        
        {/* Optional Filter */}
        <div className="mb-6">
          <label htmlFor="category-filter" className="block text-sm font-medium mb-2">
            Filter nach Kategorie:
          </label>
          <select 
            id="category-filter" 
            className="w-full md:w-auto p-2 border border-gray-300 rounded-md"
          >
            <option value="all">Alle Dokumente</option>
            <option value="Kataloge">Kataloge</option>
            <option value="Preislisten">Preislisten</option>
            <option value="Technische Daten">Technische Daten</option>
          </select>
        </div>
        
        {/* Download Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {downloadItems.map((item) => (
            <Card key={item.id} className="h-full">
              <CardHeader>
                <CardTitle className="text-lg">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">{item.fileInfo}</p>
                <p className="text-xs mt-2 text-gray-400">Kategorie: {item.category}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full flex items-center justify-center gap-2">
                  <Download className="h-4 w-4" />
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
