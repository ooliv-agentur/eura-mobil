
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface NewsItem {
  id: string;
  headline: string;
  date: string;
  snippet: string;
  category: string;
  year: string;
}

const newsItems: NewsItem[] = [
  {
    id: "1",
    headline: "Neue Modelle für 2025 angekündigt",
    date: "15. März 2024",
    snippet: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    category: "Produktnews",
    year: "2024"
  },
  {
    id: "2",
    headline: "Werksführungen wieder verfügbar",
    date: "10. März 2024",
    snippet: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...",
    category: "Unternehmen",
    year: "2024"
  },
  {
    id: "3",
    headline: "Qualitätsauszeichnung erhalten",
    date: "5. März 2024",
    snippet: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur...",
    category: "Auszeichnungen",
    year: "2024"
  },
  {
    id: "4",
    headline: "Neue Servicepartner hinzugefügt",
    date: "28. Februar 2024",
    snippet: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...",
    category: "Service",
    year: "2024"
  },
  {
    id: "5",
    headline: "Messe-Auftritte 2024 bestätigt",
    date: "20. Februar 2024",
    snippet: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium...",
    category: "Events",
    year: "2024"
  },
  {
    id: "6",
    headline: "Umweltfreundliche Produktion",
    date: "15. Februar 2024",
    snippet: "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt...",
    category: "Nachhaltigkeit",
    year: "2024"
  }
];

const NewsCard = ({ item }: { item: NewsItem }) => (
  <Card className="bg-gray-200 border-gray-300">
    <CardHeader>
      <CardTitle className="text-lg">{item.headline}</CardTitle>
      <p className="text-sm text-gray-600">{item.date}</p>
    </CardHeader>
    <CardContent>
      <p className="text-gray-700 mb-4">{item.snippet}</p>
      <Button className="bg-gray-400 hover:bg-gray-500 text-black">
        Weiterlesen
      </Button>
    </CardContent>
  </Card>
);

const News = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 px-4 py-6 md:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Hero Section */}
        <section className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Eura Mobil News</h1>
          <p className="text-lg text-gray-600 mb-6">
            Bleiben Sie informiert: Aktuelles aus der Eura Mobil Welt
          </p>
        </section>
        
        {/* Filter Bar */}
        <section className="mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Select>
                <SelectTrigger className="w-full bg-gray-200">
                  <SelectValue placeholder="Jahr" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Alle Jahre</SelectItem>
                  <SelectItem value="2024">2024</SelectItem>
                  <SelectItem value="2023">2023</SelectItem>
                  <SelectItem value="2022">2022</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex-1">
              <Select>
                <SelectTrigger className="w-full bg-gray-200">
                  <SelectValue placeholder="Kategorie" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Alle Kategorien</SelectItem>
                  <SelectItem value="produktnews">Produktnews</SelectItem>
                  <SelectItem value="unternehmen">Unternehmen</SelectItem>
                  <SelectItem value="auszeichnungen">Auszeichnungen</SelectItem>
                  <SelectItem value="service">Service</SelectItem>
                  <SelectItem value="events">Events</SelectItem>
                  <SelectItem value="nachhaltigkeit">Nachhaltigkeit</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </section>
        
        {/* News Grid */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsItems.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>
        </section>
        
        {/* Pagination */}
        <section className="mb-8">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default News;
