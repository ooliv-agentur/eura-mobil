
import React, { useEffect, useRef } from "react";
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

declare global {
  interface Window {
    google: any;
  }
}

const MapComponent: React.FC<MapComponentProps> = ({ 
  dealers, 
  googleMapsLoaded, 
  selectedDealer,
  onSelectDealer,
  searchLocation 
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const markersRef = useRef<any[]>([]);
  const searchCircleRef = useRef<any>(null);

  // Initialize map once Google Maps is loaded
  useEffect(() => {
    if (googleMapsLoaded && window.google && mapRef.current && !mapInstanceRef.current) {
      // Center the map on Europe/Germany
      const defaultCenter = { lat: 51.1657, lng: 10.4515 };
      
      const mapOptions = {
        center: defaultCenter,
        zoom: 5,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
        zoomControl: true,
        styles: [
          {
            "featureType": "all",
            "elementType": "geometry",
            "stylers": [{"color": "#f5f5f5"}]
          },
          {
            "featureType": "all",
            "elementType": "labels.text.fill",
            "stylers": [{"color": "#616161"}]
          },
          {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{"color": "#e9e9e9"}]
          },
          {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [{"color": "#9e9e9e"}]
          }
        ]
      };
      
      mapInstanceRef.current = new window.google.maps.Map(mapRef.current, mapOptions);
    }
  }, [googleMapsLoaded]);

  // Add or update markers when dealers change
  useEffect(() => {
    if (!googleMapsLoaded || !window.google || !mapInstanceRef.current) return;
    
    // Clear existing markers
    markersRef.current.forEach(marker => marker.setMap(null));
    markersRef.current = [];
    
    // Add markers for each dealer with coordinates
    const bounds = new window.google.maps.LatLngBounds();
    let validMarkers = 0;
    
    dealers.forEach(dealer => {
      // Skip dealers without coordinates
      if (!dealer.lat || !dealer.lng) return;
      
      const markerPosition = new window.google.maps.LatLng(dealer.lat, dealer.lng);
      
      // Custom marker icon for red pin
      const markerIcon = {
        url: "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(`
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="36" viewBox="0 0 24 36">
            <path fill="#e30613" d="M12 0C5.383 0 0 5.383 0 12c0 6.617 12 24 12 24s12-17.383 12-24c0-6.617-5.383-12-12-12zm0 16c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"/>
          </svg>
        `),
        size: new window.google.maps.Size(24, 36),
        origin: new window.google.maps.Point(0, 0),
        anchor: new window.google.maps.Point(12, 36),
        scaledSize: new window.google.maps.Size(24, 36)
      };
      
      const marker = new window.google.maps.Marker({
        position: markerPosition,
        map: mapInstanceRef.current,
        title: dealer.name,
        icon: markerIcon,
        animation: dealer.id === selectedDealer ? 
          window.google.maps.Animation.BOUNCE : 
          null,
      });
      
      // Add click event to marker
      marker.addListener('click', () => {
        onSelectDealer(dealer.id);
      });
      
      // Create info window with dealer info
      const infoWindow = new window.google.maps.InfoWindow({
        content: `
          <div style="max-width: 200px; padding: 8px;">
            <h4 style="margin: 0 0 5px; font-weight: bold; color: #000;">${dealer.name}</h4>
            <p style="margin: 0 0 5px; font-size: 13px;">${dealer.address}</p>
            <p style="margin: 0 0 5px; font-size: 13px;">${dealer.phone}</p>
          </div>
        `,
      });
      
      // Show info window when marker is clicked
      marker.addListener('click', () => {
        infoWindow.open(mapInstanceRef.current, marker);
      });
      
      markersRef.current.push(marker);
      bounds.extend(markerPosition);
      validMarkers++;
    });
    
    // Adjust map to show all markers
    if (validMarkers > 0) {
      mapInstanceRef.current.fitBounds(bounds);
      
      // Prevent excessive zoom when only one or few markers
      const listener = mapInstanceRef.current.addListener('idle', function() {
        if (mapInstanceRef.current.getZoom() > 10) {
          mapInstanceRef.current.setZoom(10);
        }
        window.google.maps.event.removeListener(listener);
      });
    }

    // If a selected dealer exists, make sure it's visible and centered
    if (selectedDealer) {
      const selectedDealerObject = dealers.find(d => d.id === selectedDealer);
      if (selectedDealerObject?.lat && selectedDealerObject?.lng) {
        const position = new window.google.maps.LatLng(
          selectedDealerObject.lat, 
          selectedDealerObject.lng
        );
        mapInstanceRef.current.setCenter(position);
        mapInstanceRef.current.setZoom(12);
      }
    }
  }, [dealers, googleMapsLoaded, selectedDealer, onSelectDealer]);

  // Handle search location changes
  useEffect(() => {
    if (!googleMapsLoaded || !window.google || !mapInstanceRef.current || !searchLocation) return;

    // Remove previous search circle if it exists
    if (searchCircleRef.current) {
      searchCircleRef.current.setMap(null);
      searchCircleRef.current = null;
    }

    const searchCenter = new window.google.maps.LatLng(searchLocation.lat, searchLocation.lng);
    
    // Center map on search location
    mapInstanceRef.current.setCenter(searchCenter);
    mapInstanceRef.current.setZoom(10);

    // Draw a circle for the search radius if provided
    if (searchLocation.radius) {
      searchCircleRef.current = new window.google.maps.Circle({
        strokeColor: "#e30613",
        strokeOpacity: 0.8,
        strokeWeight: 1,
        fillColor: "#e30613",
        fillOpacity: 0.1,
        map: mapInstanceRef.current,
        center: searchCenter,
        radius: searchLocation.radius * 1000, // Convert km to meters
      });

      // Adjust map to show the entire circle
      const bounds = searchCircleRef.current.getBounds();
      if (bounds) {
        mapInstanceRef.current.fitBounds(bounds);
      }
    }
  }, [searchLocation, googleMapsLoaded]);

  return (
    <div className="w-full h-64 md:h-96 lg:h-[500px] bg-gray-200 rounded-lg mb-6 relative">
      {googleMapsLoaded ? (
        <div ref={mapRef} className="w-full h-full rounded-lg" />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center text-center text-gray-500">
          <div>
            <MapPin size={36} className="mx-auto mb-2" />
            <p>Karte wird geladen...</p>
            <p className="text-xs mt-2">Bitte akzeptieren Sie Cookies für die Kartenansicht oder prüfen Sie Ihre Internetverbindung.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MapComponent;
