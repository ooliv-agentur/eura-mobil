
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Settings, MapPin, Download, FileText } from "lucide-react";
import { useWohnmobilberaterTrigger } from "@/hooks/useWohnmobilberaterTrigger";

interface ModelFinalCTAProps {
  modelName: string;
}

export const ModelFinalCTA: React.FC<ModelFinalCTAProps> = ({ modelName }) => {
  const { startBeraterFlow } = useWohnmobilberaterTrigger();
  
  const handleKonfiguratorClick = () => {
    window.open("https://eura.tef-kat.com/konfigurator-eura/Home/Start?culture=de-DE", "_blank", "noopener noreferrer");
  };
  
  const handleBeratungClick = () => {
    startBeraterFlow();
  };

  const handleCatalogueDownload = () => {
    // Placeholder functionality - would download the actual PDF
    console.log(`Downloading catalogue for ${modelName}`);
  };

  return (
    <section id="model-final-cta" className="my-10 bg-gray-50 p-6 rounded-lg">
      {/* Final CTA Block */}
      <h2 className="text-2xl font-semibold mb-4 text-center">Interessiert am {modelName}?</h2>
      
      {/* PDF Catalogue Preview */}
      <div className="mb-6 flex justify-center">
        <div className="bg-white p-4 rounded-lg shadow-sm border max-w-xs">
          <div className="flex items-start gap-3">
            <div className="bg-gray-200 w-16 h-20 rounded flex items-center justify-center flex-shrink-0">
              <FileText size={24} className="text-gray-500" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-sm mb-1">{modelName} Katalog</h3>
              <p className="text-xs text-gray-600 mb-2">Technische Daten, Grundrisse und Ausstattungsdetails</p>
              <Button 
                size="sm" 
                variant="outline" 
                className="w-full"
                onClick={handleCatalogueDownload}
              >
                <Download size={14} />
                PDF herunterladen
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
  );
};
