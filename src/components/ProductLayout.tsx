
import React from "react";
import { Layout } from "./Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Settings, MapPin } from "lucide-react";
import { useWohnmobilberaterTrigger } from "@/hooks/useWohnmobilberaterTrigger";

interface ProductLayoutProps {
  children: React.ReactNode;
  modelName?: string;
}

export const ProductLayout: React.FC<ProductLayoutProps> = ({ children, modelName }) => {
  const { startBeraterFlow } = useWohnmobilberaterTrigger();
  
  const handleKonfiguratorClick = () => {
    window.open("https://eura.tef-kat.com/konfigurator-eura/Home/Start?culture=de-DE", "_blank", "noopener noreferrer");
  };
  
  const handleBeratungClick = () => {
    startBeraterFlow();
  };
  
  return (
    <Layout>
      <div className="product-detail-container">
        {children}
        
        {/* Bottom CTA Section */}
        {modelName && (
          <div className="container mx-auto px-4">
            <section className="my-10 bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-center">Interessiert am {modelName}?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                <Button 
                  className="flex items-center justify-center gap-2"
                  onClick={handleKonfiguratorClick}
                >
                  <Settings size={18} />
                  Jetzt konfigurieren
                </Button>
                <Button 
                  variant="outline" 
                  className="flex items-center justify-center gap-2" 
                  asChild
                >
                  <Link to="/haendler">
                    <MapPin size={18} />
                    Händler finden
                  </Link>
                </Button>
                <Button 
                  className="bg-blue-600 hover:bg-blue-700 flex items-center justify-center gap-2"
                  onClick={handleBeratungClick}
                >
                  Beratung starten
                </Button>
              </div>
            </section>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ProductLayout;
