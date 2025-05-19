
import React, { useEffect, useRef } from "react";
import { MapPin } from "lucide-react";

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

interface MapComponentProps {
  dealers: Dealer[];
  googleMapsLoaded: boolean;
  selectedDealer?: number | null;
  onSelectDealer: (dealerId: number) => void;
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
  onSelectDealer 
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const markersRef = useRef<any[]>([]);

  // Initialize map once Google Maps is loaded
  useEffect(() => {
    if (googleMapsLoaded && window.google && mapRef.current && !mapInstanceRef.current) {
      // Center the map on Germany
      const defaultCenter = { lat: 51.1657, lng: 10.4515 };
      
      const mapOptions = {
        center: defaultCenter,
        zoom: 6,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: true,
        zoomControl: true,
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
      // For demo purposes, generate random coordinates if none exist
      // In a real app, these would come from your database
      const lat = dealer.lat || (Math.random() * 2) + 50; // Random location in Germany
      const lng = dealer.lng || (Math.random() * 4) + 8;
      
      const markerPosition = new window.google.maps.LatLng(lat, lng);
      
      const marker = new window.google.maps.Marker({
        position: markerPosition,
        map: mapInstanceRef.current,
        title: dealer.name,
        animation: dealer.id === selectedDealer ? 
          window.google.maps.Animation.BOUNCE : 
          window.google.maps.Animation.DROP,
      });
      
      // Add click event to marker
      marker.addListener('click', () => {
        onSelectDealer(dealer.id);
      });
      
      // Create info window with dealer info
      const infoWindow = new window.google.maps.InfoWindow({
        content: `
          <div style="max-width: 200px;">
            <h4 style="margin: 0 0 5px; font-weight: bold;">${dealer.name}</h4>
            <p style="margin: 0 0 5px;">${dealer.address}</p>
            <p style="margin: 0 0 5px;">${dealer.phone}</p>
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
      
      // Prevent excessive zoom when only one marker
      if (validMarkers === 1) {
        mapInstanceRef.current.setZoom(10);
      }
    }
  }, [dealers, googleMapsLoaded, selectedDealer, onSelectDealer]);

  return (
    <div className="w-full h-64 md:h-96 bg-gray-200 rounded-lg mb-6 relative">
      {googleMapsLoaded ? (
        <div ref={mapRef} className="w-full h-full rounded-lg" />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center text-center text-gray-500">
          <div>
            <MapPin size={36} className="mx-auto mb-2" />
            <p>Karte wird geladen...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MapComponent;
