
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Layout } from "@/components/Layout";
import BeraterOverlay from "@/components/Wohnmobilberater/BeraterOverlay";
import { ComparisonProvider } from "@/context/ComparisonContext";

const Index = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    // Open berater overlay immediately when page loads
    setIsOverlayOpen(true);
  }, []);

  return (
    <Layout>
      <ComparisonProvider>
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center p-8">
            <h1 className="text-3xl font-bold mb-4">Wohnmobilberater</h1>
            <p className="mb-6">
              Finden Sie das perfekte Wohnmobil für Ihre Bedürfnisse.
            </p>
            {!isOverlayOpen && (
              <button 
                onClick={() => setIsOverlayOpen(true)}
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Berater starten
              </button>
            )}
          </div>
        </div>
        
        <BeraterOverlay 
          isOpen={isOverlayOpen} 
          onClose={() => setIsOverlayOpen(false)} 
        />
      </ComparisonProvider>
    </Layout>
  );
};

export default Index;
