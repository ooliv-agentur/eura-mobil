
import React from "react";
import { MapPin } from "lucide-react";

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

interface MapComponentProps {
  dealers: Dealer[];
  googleMapsLoaded: boolean;
  selectedDealer?: number | null;
  onSelectDealer: (dealerId: number) => void;
  searchLocation?: {lat: number, lng: number, radius?: number};
}

const MapComponent: React.FC<MapComponentProps> = ({ 
  dealers,
  selectedDealer
}) => {
  return (
    <div className="w-full h-64 md:h-96 lg:h-[400px] bg-gray-200 rounded-lg mb-6 border border-gray-300">
      {/* Static map placeholder */}
      <div className="h-full w-full flex items-center justify-center">
        <div className="text-center text-gray-500">
          <MapPin size={36} className="mx-auto mb-2" />
          <p>Kartenbereich</p>
        </div>
      </div>
    </div>
  );
};

export default MapComponent;
