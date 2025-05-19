
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { MapPin, Search, ChevronRight } from "lucide-react";

const Haendlersuche = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Beispiel-Händler (normalerweise würden diese von einer API kommen)
  const exampleDealers = [
    {
      id: 1,
      name: "Wohnmobile Nord GmbH",
      city: "Hamburg",
      address: "Campingstraße 42, 22769 Hamburg",
      phone: "+49 40 12345678",
      services: ["Verkauf", "Service", "Vermietung"]
    },
    {
      id: 2,
      name: "Caravan Center München",
      city: "München",
      address: "Wohnmobilweg 15, 80331 München",
      phone: "+49 89 87654321",
      services: ["Verkauf", "Service"]
    },
    {
      id: 3,
      name: "Freizeitfahrzeuge Berlin",
      city: "Berlin",
      address: "Mobilstraße 8, 10115 Berlin",
      phone: "+49 30 98765432",
      services: ["Verkauf", "Vermietung"]
    },
    {
      id: 4,
      name: "Camping & Caravan Köln",
      city: "Köln",
      address: "Reisemobilallee 23, 50667 Köln",
      phone: "+49 221 55443322",
      services: ["Verkauf", "Service", "Zubehör"]
    }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Hier würde normalerweise die Suche ausgelöst werden
    console.log("Suche nach:", searchQuery);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-6">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">Händler in Ihrer Nähe finden</h1>
        
        {/* Suchbereich */}
        <div className="bg-gray-100 p-4 rounded-lg mb-6">
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1">
              <Input
                type="text"
                placeholder="Postleitzahl oder Ort eingeben"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full"
              />
            </div>
            <Button type="submit" className="flex items-center gap-2">
              <Search size={18} />
              <span>Suchen</span>
            </Button>
          </form>
          
          {/* Filter-Optionen */}
          <div className="mt-4 flex gap-3 flex-wrap">
            <Button variant="outline" size="sm" className="text-sm">
              Alle Händler
            </Button>
            <Button variant="outline" size="sm" className="text-sm">
              Nur Verkauf
            </Button>
            <Button variant="outline" size="sm" className="text-sm">
              Nur Vermietung
            </Button>
          </div>
        </div>
        
        {/* Kartenbereich */}
        <div className="w-full h-64 md:h-96 bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
          <div className="text-center text-gray-500">
            <MapPin size={36} className="mx-auto mb-2" />
            <p>Kartenansicht der Händlerstandorte</p>
            <p className="text-xs">Hier würde normalerweise eine Karte angezeigt</p>
          </div>
        </div>
        
        {/* Händlerliste */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Gefundene Händler</h2>
          
          <div className="grid gap-4">
            {exampleDealers.map((dealer) => (
              <Card key={dealer.id} className="overflow-hidden">
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg">{dealer.name}</h3>
                  <p className="text-gray-600">{dealer.address}</p>
                  <p className="text-gray-600">{dealer.phone}</p>
                  
                  <div className="mt-2 flex flex-wrap gap-1">
                    {dealer.services.map((service) => (
                      <span 
                        key={service} 
                        className="inline-block bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex justify-between">
                  <Button variant="outline" size="sm">
                    Details
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    Route anzeigen
                    <ChevronRight size={16} />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Haendlersuche;
