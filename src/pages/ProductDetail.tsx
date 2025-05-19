
import React from "react";
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check, Download, MapPin } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";

// Mustermodell für die Detailseite
const modelDetails = {
  id: "activa-one",
  name: "Activa One",
  intro: "Kompaktes Einsteigermodell mit cleverer Raumnutzung. Ideal für Paare und kleine Familien.",
  heroImage: "https://images.unsplash.com/photo-1532941781729-b8e6bf6a3d0c?w=900&auto=format",
  galleryImages: [
    "https://images.unsplash.com/photo-1532941781729-b8e6bf6a3d0c?w=500&auto=format",
    "https://images.unsplash.com/photo-1593150532356-223f7151d4c4?w=500&auto=format",
    "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=500&auto=format",
    "https://images.unsplash.com/photo-1464851707681-f9d5fdaccea8?w=500&auto=format"
  ],
  technicalData: {
    länge: "5,99 m",
    breite: "2,20 m",
    höhe: "2,75 m",
    gewicht: "2.850 kg",
    schlafplätze: "2-4",
    sitzplätze: "4"
  },
  highlights: [
    "Kompakte Außenmaße für hohe Wendigkeit",
    "Großzügiger Stauraum in der Heckgarage",
    "Vollausgestattete Küche mit 3-Flammen-Herd",
    "Separate Duschkabine im Badezimmer",
    "Großes Hubbett im Heck"
  ],
  downloadItems: [
    { name: "Technische Daten", type: "PDF", url: "#" },
    { name: "Preisliste", type: "PDF", url: "#" },
    { name: "360° Tour", type: "Web", url: "#" }
  ]
};

const ProductDetail = () => {
  const { modelId } = useParams();
  
  // In einer echten Anwendung würden wir hier die Modelldaten basierend auf der ID laden
  // Für diesen Prototyp verwenden wir die vordefinierte Konstante
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 pb-12">
        {/* Hero Bereich */}
        <div className="relative">
          <div className="w-full h-64 bg-gray-200">
            <img 
              src={modelDetails.heroImage} 
              alt={modelDetails.name} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-4 right-4">
            <Button variant="secondary" size="sm" className="flex gap-2">
              <Download size={16} />
              Katalog herunterladen
            </Button>
          </div>
        </div>
        
        <div className="container mx-auto px-4 mt-6">
          {/* Modellname und Intro */}
          <h1 className="text-2xl md:text-3xl font-bold">{modelDetails.name}</h1>
          <p className="text-gray-600 mt-2 mb-6">{modelDetails.intro}</p>
          
          {/* Bildergalerie */}
          <div className="my-8">
            <h2 className="text-xl font-semibold mb-4">Galerie</h2>
            <Carousel className="w-full max-w-md mx-auto">
              <CarouselContent>
                {modelDetails.galleryImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <AspectRatio ratio={16/9}>
                      <img 
                        src={image} 
                        alt={`${modelDetails.name} Bild ${index + 1}`}
                        className="w-full h-full object-cover rounded-md"
                      />
                    </AspectRatio>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-4">
                <CarouselPrevious className="mx-2 relative -left-0" />
                <CarouselNext className="mx-2 relative -right-0" />
              </div>
            </Carousel>
          </div>
          
          {/* Technische Daten */}
          <section className="my-8">
            <h2 className="text-xl font-semibold mb-4">Technische Daten</h2>
            <div className="overflow-x-auto">
              <Table className="w-full">
                <TableHeader>
                  <TableRow>
                    <TableHead>Eigenschaft</TableHead>
                    <TableHead>Wert</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {Object.entries(modelDetails.technicalData).map(([key, value]) => (
                    <TableRow key={key}>
                      <TableCell className="font-medium capitalize">{key}</TableCell>
                      <TableCell>{value}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </section>
          
          {/* Modell-Highlights */}
          <section className="my-8">
            <h2 className="text-xl font-semibold mb-4">Modell-Highlights</h2>
            <ul className="space-y-3">
              {modelDetails.highlights.map((highlight, index) => (
                <li key={index} className="flex gap-2">
                  <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </section>
          
          {/* PDF Downloads */}
          <section className="my-8 bg-gray-50 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Downloads</h2>
            <div className="grid gap-3">
              {modelDetails.downloadItems.map((item, index) => (
                <a 
                  key={index} 
                  href={item.url} 
                  className="flex justify-between items-center p-3 bg-white rounded border hover:bg-gray-50"
                >
                  <span>{item.name}</span>
                  <Badge variant="outline">{item.type}</Badge>
                </a>
              ))}
            </div>
          </section>
          
          {/* CTA Block */}
          <section className="my-8 space-y-4">
            <Button className="w-full flex justify-center gap-2">
              <MapPin size={16} />
              Jetzt Händler finden
            </Button>
            <Button variant="outline" className="w-full">
              Modell vergleichen
            </Button>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
