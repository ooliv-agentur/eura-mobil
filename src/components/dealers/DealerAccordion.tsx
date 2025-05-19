
import React from "react";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Mail, Globe, Phone, MapPin } from "lucide-react";

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

interface DealersByCountry {
  [country: string]: Dealer[];
}

interface DealerAccordionProps {
  dealers: Dealer[];
  selectedDealer: number | null;
  onSelectDealer: (dealerId: number) => void;
}

const DealerAccordion: React.FC<DealerAccordionProps> = ({ 
  dealers, 
  selectedDealer, 
  onSelectDealer 
}) => {
  // Group dealers by country
  const dealersByCountry: DealersByCountry = dealers.reduce((acc, dealer) => {
    const country = dealer.country || "Unbekannt";
    if (!acc[country]) {
      acc[country] = [];
    }
    acc[country].push(dealer);
    return acc;
  }, {} as DealersByCountry);

  // Get country names sorted alphabetically
  const countryNames = Object.keys(dealersByCountry).sort();
  
  // Function to handle route button click
  const handleRouteClick = (address: string) => {
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`,
      '_blank'
    );
  };

  // Function to handle website button click
  const handleWebsiteClick = (website: string) => {
    let url = website;
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      url = 'https://' + url;
    }
    window.open(url, '_blank');
  };

  return (
    <div className="mt-8" id="dealer-results">
      <h2 className="text-xl font-semibold mb-4">Alle Standorte</h2>
      
      <Accordion type="multiple" className="space-y-4">
        {countryNames.map((country) => (
          <AccordionItem 
            key={country} 
            value={country}
            className="border border-gray-200 rounded-md overflow-hidden shadow-sm"
          >
            <AccordionTrigger className="px-4 py-3 bg-gray-50 hover:bg-gray-100 font-semibold">
              {country.toUpperCase()} ({dealersByCountry[country].length})
            </AccordionTrigger>
            <AccordionContent className="px-0">
              <div className="divide-y divide-gray-200">
                {dealersByCountry[country].map((dealer) => (
                  <div 
                    key={dealer.id} 
                    id={`dealer-${dealer.id}`}
                    className={`p-4 ${selectedDealer === dealer.id ? 'bg-blue-50' : ''}`}
                  >
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                      <div className="flex-1">
                        <h3 className="font-bold text-lg">{dealer.name}</h3>
                        <div className="mt-2 space-y-2 text-gray-700">
                          <p className="flex items-start gap-2">
                            <MapPin size={16} className="mt-1 flex-shrink-0" />
                            <span>{dealer.address}</span>
                          </p>
                          
                          <p className="flex items-start gap-2">
                            <Phone size={16} className="mt-1 flex-shrink-0" />
                            <a href={`tel:${dealer.phone}`} className="hover:underline">
                              {dealer.phone}
                            </a>
                          </p>
                          
                          {dealer.email && (
                            <p className="flex items-start gap-2">
                              <Mail size={16} className="mt-1 flex-shrink-0" />
                              <a href={`mailto:${dealer.email}`} className="hover:underline truncate">
                                {dealer.email}
                              </a>
                            </p>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex flex-col gap-2 min-w-[150px]">
                        {dealer.website && (
                          <Button
                            size="sm"
                            className="flex items-center gap-1 justify-center bg-blue-600 hover:bg-blue-700"
                            onClick={() => handleWebsiteClick(dealer.website!)}
                          >
                            <Globe size={14} />
                            Webseite besuchen
                          </Button>
                        )}
                        
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex items-center gap-1 justify-center"
                          onClick={() => handleRouteClick(dealer.address)}
                        >
                          Route anzeigen
                        </Button>
                        
                        <Button
                          variant="ghost"
                          size="sm"
                          className="flex items-center gap-1 justify-center"
                          onClick={() => onSelectDealer(dealer.id)}
                        >
                          Auf Karte anzeigen
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default DealerAccordion;
