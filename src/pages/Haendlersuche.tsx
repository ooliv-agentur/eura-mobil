
import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { MapPin, Search, ChevronRight } from "lucide-react";
import MapComponent from "@/components/dealers/MapComponent";

declare global {
  interface Window {
    google: any;
    initGoogleAutocomplete: () => void;
  }
}

interface Dealer {
  id: number;
  name: string;
  city: string;
  address: string;
  phone: string;
  services: string[];
  lat?: number;
  lng?: number;
}

const Haendlersuche = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const autocompleteRef = useRef<HTMLInputElement>(null);
  const [autocomplete, setAutocomplete] = useState<any>(null);
  const [placePredictions, setPlacePredictions] = useState<any[]>([]);
  const [showPredictions, setShowPredictions] = useState(false);
  const [googleMapsLoaded, setGoogleMapsLoaded] = useState(false);
  const [selectedDealer, setSelectedDealer] = useState<number | null>(null);
  const [filteredDealers, setFilteredDealers] = useState<Dealer[]>([]);
  const [activeFilter, setActiveFilter] = useState<string>("all");
  
  // Beispiel-Händler mit Koordinaten für die Demonstration
  const exampleDealers: Dealer[] = [
    {
      id: 1,
      name: "Wohnmobile Nord GmbH",
      city: "Hamburg",
      address: "Campingstraße 42, 22769 Hamburg",
      phone: "+49 40 12345678",
      services: ["Verkauf", "Service", "Vermietung"],
      lat: 53.553,
      lng: 9.992
    },
    {
      id: 2,
      name: "Caravan Center München",
      city: "München",
      address: "Wohnmobilweg 15, 80331 München",
      phone: "+49 89 87654321",
      services: ["Verkauf", "Service"],
      lat: 48.135,
      lng: 11.582
    },
    {
      id: 3,
      name: "Freizeitfahrzeuge Berlin",
      city: "Berlin",
      address: "Mobilstraße 8, 10115 Berlin",
      phone: "+49 30 98765432",
      services: ["Verkauf", "Vermietung"],
      lat: 52.520,
      lng: 13.405
    },
    {
      id: 4,
      name: "Camping & Caravan Köln",
      city: "Köln",
      address: "Reisemobilallee 23, 50667 Köln",
      phone: "+49 221 55443322",
      services: ["Verkauf", "Service", "Zubehör"],
      lat: 50.937,
      lng: 6.96
    }
  ];

  // Initialize filtered dealers with all dealers
  useEffect(() => {
    setFilteredDealers(exampleDealers);
  }, []);

  // Function to load Google Maps API script
  useEffect(() => {
    const loadGoogleMapsScript = () => {
      const googleScript = document.createElement('script');
      googleScript.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places&callback=initGoogleAutocomplete`;
      googleScript.async = true;
      googleScript.defer = true;
      
      googleScript.onload = () => {
        setGoogleMapsLoaded(true);
      };
      
      document.head.appendChild(googleScript);
      
      return () => {
        document.head.removeChild(googleScript);
      };
    };

    window.initGoogleAutocomplete = () => {
      if (autocompleteRef.current) {
        const autocompleteInstance = new window.google.maps.places.AutocompleteService();
        setAutocomplete(autocompleteInstance);
        setGoogleMapsLoaded(true);
      }
    };

    // Only load the script if it hasn't been loaded yet
    if (!window.google) {
      loadGoogleMapsScript();
    } else {
      window.initGoogleAutocomplete();
      setGoogleMapsLoaded(true);
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
    // Here you could trigger the search with the selected location
    searchDealers(prediction.description);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    searchDealers(searchQuery);
    setShowPredictions(false);
  };

  const searchDealers = (query: string) => {
    // In a real app, you would search by proximity to the searched location
    // For this demo, we'll just filter dealers whose city contains the query string
    const lowercaseQuery = query.toLowerCase();
    
    let filtered = exampleDealers.filter(dealer => {
      return (
        dealer.city.toLowerCase().includes(lowercaseQuery) ||
        dealer.address.toLowerCase().includes(lowercaseQuery)
      );
    });
    
    // Apply service filter if it's not "all"
    if (activeFilter !== "all") {
      filtered = filtered.filter(dealer => 
        dealer.services.some(service => service.toLowerCase() === activeFilter)
      );
    }
    
    setFilteredDealers(filtered);
  };

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
    
    let filtered = exampleDealers;
    
    // Apply search query if exists
    if (searchQuery) {
      const lowercaseQuery = searchQuery.toLowerCase();
      filtered = filtered.filter(dealer => {
        return (
          dealer.city.toLowerCase().includes(lowercaseQuery) ||
          dealer.address.toLowerCase().includes(lowercaseQuery)
        );
      });
    }
    
    // Apply service filter if it's not "all"
    if (filter !== "all") {
      filtered = filtered.filter(dealer => 
        dealer.services.some(service => service.toLowerCase() === filter.toLowerCase())
      );
    }
    
    setFilteredDealers(filtered);
  };

  const handleDealerSelect = (dealerId: number) => {
    setSelectedDealer(dealerId);
    // Scroll to the dealer card
    const dealerCard = document.getElementById(`dealer-${dealerId}`);
    if (dealerCard) {
      dealerCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
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
            <Button 
              variant={activeFilter === "all" ? "default" : "outline"} 
              size="sm" 
              className="text-sm"
              onClick={() => handleFilterClick("all")}
            >
              Alle Händler
            </Button>
            <Button 
              variant={activeFilter === "verkauf" ? "default" : "outline"} 
              size="sm" 
              className="text-sm"
              onClick={() => handleFilterClick("verkauf")}
            >
              Nur Verkauf
            </Button>
            <Button 
              variant={activeFilter === "vermietung" ? "default" : "outline"} 
              size="sm" 
              className="text-sm"
              onClick={() => handleFilterClick("vermietung")}
            >
              Nur Vermietung
            </Button>
            <Button 
              variant={activeFilter === "service" ? "default" : "outline"} 
              size="sm" 
              className="text-sm"
              onClick={() => handleFilterClick("service")}
            >
              Nur Service
            </Button>
          </div>
        </div>
        
        {/* Kartenbereich */}
        <MapComponent 
          dealers={filteredDealers} 
          googleMapsLoaded={googleMapsLoaded} 
          selectedDealer={selectedDealer}
          onSelectDealer={handleDealerSelect}
        />
        
        {/* Händlerliste */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">
            {filteredDealers.length > 0
              ? `Gefundene Händler (${filteredDealers.length})`
              : "Keine Händler gefunden"
            }
          </h2>
          
          <div className="grid gap-4">
            {filteredDealers.map((dealer) => (
              <Card 
                key={dealer.id} 
                id={`dealer-${dealer.id}`}
                className={`overflow-hidden transition-shadow ${
                  selectedDealer === dealer.id ? "ring-2 ring-primary shadow-lg" : ""
                }`}
              >
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
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex items-center gap-1"
                    onClick={() => {
                      // In a real app, you would open directions in Google Maps
                      window.open(
                        `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                          dealer.address
                        )}`,
                        '_blank'
                      );
                    }}
                  >
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
