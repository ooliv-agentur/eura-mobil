
import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { MapPin, Search, ChevronRight } from "lucide-react";

declare global {
  interface Window {
    google: any;
    initGoogleAutocomplete: () => void;
  }
}

const Haendlersuche = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const autocompleteRef = useRef<HTMLInputElement>(null);
  const [autocomplete, setAutocomplete] = useState<any>(null);
  const [placePredictions, setPlacePredictions] = useState<any[]>([]);
  const [showPredictions, setShowPredictions] = useState(false);
  
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

  // Function to load Google Maps API script
  useEffect(() => {
    const loadGoogleMapsScript = () => {
      const googleScript = document.createElement('script');
      googleScript.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places&callback=initGoogleAutocomplete`;
      googleScript.async = true;
      googleScript.defer = true;
      document.head.appendChild(googleScript);
      
      return () => {
        document.head.removeChild(googleScript);
      };
    };

    window.initGoogleAutocomplete = () => {
      if (autocompleteRef.current) {
        const autocompleteInstance = new window.google.maps.places.AutocompleteService();
        setAutocomplete(autocompleteInstance);
      }
    };

    // Only load the script if it hasn't been loaded yet
    if (!window.google) {
      loadGoogleMapsScript();
    } else {
      window.initGoogleAutocomplete();
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (autocompleteRef.current && !autocompleteRef.current.contains(event.target as Node)) {
        setShowPredictions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    
    // Get predictions if input has at least 3 characters
    if (value.length >= 3 && autocomplete) {
      autocomplete.getPlacePredictions(
        {
          input: value,
          componentRestrictions: { country: 'de' }, // Restrict to Germany
          types: ['(cities)']
        },
        (predictions: any[], status: string) => {
          if (status === window.google.maps.places.PlacesServiceStatus.OK && predictions) {
            setPlacePredictions(predictions);
            setShowPredictions(true);
          } else {
            setPlacePredictions([]);
            setShowPredictions(false);
          }
        }
      );
    } else {
      setPlacePredictions([]);
      setShowPredictions(false);
    }
  };

  const handlePredictionSelect = (prediction: any) => {
    setSearchQuery(prediction.description);
    setShowPredictions(false);
    // Here you could also trigger the search
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Hier würde normalerweise die Suche ausgelöst werden
    console.log("Suche nach:", searchQuery);
    setShowPredictions(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-6">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">Händler in Ihrer Nähe finden</h1>
        
        {/* Suchbereich */}
        <div className="bg-gray-100 p-4 rounded-lg mb-6">
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 relative">
              <Input
                ref={autocompleteRef}
                type="text"
                placeholder="Postleitzahl oder Ort eingeben"
                value={searchQuery}
                onChange={handleInputChange}
                className="w-full"
                aria-label="Ort oder PLZ Suche"
                autoComplete="off"
              />
              
              {/* Autocomplete Suggestions */}
              {showPredictions && placePredictions.length > 0 && (
                <div className="absolute z-10 w-full bg-white mt-1 shadow-lg rounded-md border border-gray-200">
                  <ul className="py-1">
                    {placePredictions.map((prediction) => (
                      <li
                        key={prediction.place_id}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => handlePredictionSelect(prediction)}
                      >
                        {prediction.description}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
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
