
import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Search } from "lucide-react";
import MapComponent from "@/components/dealers/MapComponent";
import DealerAccordion from "@/components/dealers/DealerAccordion";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

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
  email?: string;
  website?: string;
  services: string[];
  lat?: number;
  lng?: number;
  country: string;
}

const radiusOptions = [
  { value: "50", label: "50 km" },
  { value: "100", label: "100 km" },
  { value: "200", label: "200 km" },
];

const Haendlersuche = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const autocompleteRef = useRef<HTMLInputElement>(null);
  const [autocomplete, setAutocomplete] = useState<any>(null);
  const [placePredictions, setPlacePredictions] = useState<any[]>([]);
  const [showPredictions, setShowPredictions] = useState(false);
  const [googleMapsLoaded, setGoogleMapsLoaded] = useState(false);
  const [selectedDealer, setSelectedDealer] = useState<number | null>(null);
  const [filteredDealers, setFilteredDealers] = useState<Dealer[]>([]);
  const [selectedRadius, setSelectedRadius] = useState("100");
  const [searchLocation, setSearchLocation] = useState<{lat: number, lng: number, radius?: number} | undefined>(undefined);
  
  // Beispiel-Händler mit Koordinaten und Länderinformationen
  const exampleDealers: Dealer[] = [
    {
      id: 1,
      name: "EURA MOBIL GmbH",
      city: "Sprendlingen",
      address: "Kreuznacher Str. 78, 55576 Sprendlingen",
      phone: "+49 6701 203-0",
      email: "info@euramobil.de",
      website: "www.euramobil.de",
      services: ["Verkauf", "Service", "Vermietung"],
      lat: 49.8500,
      lng: 7.8578,
      country: "Deutschland"
    },
    {
      id: 2,
      name: "Caravan Center München",
      city: "München",
      address: "Wohnmobilweg 15, 80331 München",
      phone: "+49 89 87654321",
      email: "info@caravan-munich.de",
      website: "caravan-munich.de",
      services: ["Verkauf", "Service"],
      lat: 48.135,
      lng: 11.582,
      country: "Deutschland"
    },
    {
      id: 3,
      name: "Freizeitfahrzeuge Berlin",
      city: "Berlin",
      address: "Mobilstraße 8, 10115 Berlin",
      phone: "+49 30 98765432",
      services: ["Verkauf", "Vermietung"],
      lat: 52.520,
      lng: 13.405,
      country: "Deutschland"
    },
    {
      id: 4,
      name: "Camping & Caravan Köln",
      city: "Köln",
      address: "Reisemobilallee 23, 50667 Köln",
      phone: "+49 221 55443322",
      email: "kontakt@camping-koeln.de",
      website: "camping-koeln.de",
      services: ["Verkauf", "Service", "Zubehör"],
      lat: 50.937,
      lng: 6.96,
      country: "Deutschland"
    },
    {
      id: 5,
      name: "Milano Camper",
      city: "Milano",
      address: "Via Roma 42, 20121 Milano",
      phone: "+39 02 12345678",
      email: "info@milanocamper.it",
      website: "milanocamper.it",
      services: ["Verkauf", "Service"],
      lat: 45.4642,
      lng: 9.1900,
      country: "Italia"
    },
    {
      id: 6,
      name: "Paris Camping-Cars",
      city: "Paris",
      address: "123 Avenue des Champs-Élysées, 75008 Paris",
      phone: "+33 1 23456789",
      services: ["Verkauf"],
      lat: 48.8566,
      lng: 2.3522,
      country: "France"
    },
    {
      id: 7,
      name: "Brussels Motorhomes",
      city: "Brussels",
      address: "42 Rue de Bruxelles, 1000 Brussels",
      phone: "+32 2 1234567",
      email: "info@brusselsmotorhomes.be",
      website: "brusselsmotorhomes.be",
      services: ["Verkauf", "Service", "Vermietung"],
      lat: 50.8503,
      lng: 4.3517,
      country: "Belgique"
    },
    {
      id: 8,
      name: "Amsterdam Camper Center",
      city: "Amsterdam",
      address: "Damrak 42, 1012 Amsterdam",
      phone: "+31 20 1234567",
      services: ["Verkauf", "Service"],
      lat: 52.3676,
      lng: 4.9041,
      country: "Nederland"
    }
  ];

  // Initialize filtered dealers with all dealers
  useEffect(() => {
    setFilteredDealers(exampleDealers);
  }, []);

  // Load Google Maps API script
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

  // Handle click outside of predictions dropdown
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
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    
    try {
      // Convert location to coordinates
      const geocoder = new window.google.maps.Geocoder();
      const result = await new Promise<any>((resolve, reject) => {
        geocoder.geocode({ address: searchQuery }, (results: any, status: any) => {
          if (status === window.google.maps.GeocoderStatus.OK) {
            resolve(results[0]);
          } else {
            reject(status);
          }
        });
      });

      const location = {
        lat: result.geometry.location.lat(),
        lng: result.geometry.location.lng(),
        radius: parseInt(selectedRadius)
      };

      setSearchLocation(location);
      
      // Filter dealers by distance
      const filteredByDistance = exampleDealers.filter(dealer => {
        if (!dealer.lat || !dealer.lng) return false;
        
        // Calculate distance using Haversine formula
        const R = 6371; // Radius of the Earth in km
        const dLat = (dealer.lat - location.lat) * Math.PI / 180;
        const dLng = (dealer.lng - location.lng) * Math.PI / 180;
        const a = 
          Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.cos(location.lat * Math.PI / 180) * Math.cos(dealer.lat * Math.PI / 180) * 
          Math.sin(dLng/2) * Math.sin(dLng/2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        const distance = R * c; // Distance in km
        
        return distance <= parseInt(selectedRadius);
      });
      
      setFilteredDealers(filteredByDistance);
      setShowPredictions(false);
      
      // Scroll to results
      setTimeout(() => {
        const resultsElement = document.getElementById('dealer-results');
        if (resultsElement) {
          resultsElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } catch (error) {
      console.error("Geocoding error:", error);
    }
  };

  const handleDealerSelect = (dealerId: number) => {
    setSelectedDealer(dealerId);
    // Scroll to the map
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-6">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">Händlersuche</h1>
        
        {/* Suchbereich - Normal scroll behavior */}
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
                <div className="absolute z-50 w-full bg-white mt-1 shadow-lg rounded-md border border-gray-200">
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
            
            <div className="w-full sm:w-40">
              <Select
                value={selectedRadius}
                onValueChange={setSelectedRadius}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Umkreis wählen" />
                </SelectTrigger>
                <SelectContent>
                  {radiusOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <Button 
              type="submit" 
              className="flex items-center gap-2 bg-red-600 hover:bg-red-700"
            >
              <Search size={18} />
              <span>Suchen</span>
            </Button>
          </form>
        </div>
        
        {/* Kartenbereich */}
        <MapComponent 
          dealers={filteredDealers} 
          googleMapsLoaded={googleMapsLoaded} 
          selectedDealer={selectedDealer}
          onSelectDealer={handleDealerSelect}
          searchLocation={searchLocation}
        />
        
        {/* Händlerliste als Accordion nach Ländern */}
        <DealerAccordion 
          dealers={filteredDealers}
          selectedDealer={selectedDealer}
          onSelectDealer={handleDealerSelect}
        />
        
        {filteredDealers.length === 0 && (
          <div className="text-center py-10 bg-gray-50 rounded-lg">
            <MapPin size={32} className="mx-auto mb-2 text-gray-400" />
            <p className="text-gray-600 text-lg">Keine Händler im ausgewählten Bereich gefunden.</p>
            <p className="text-gray-500 mt-2">Bitte versuchen Sie einen größeren Umkreis oder einen anderen Ort.</p>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Haendlersuche;
