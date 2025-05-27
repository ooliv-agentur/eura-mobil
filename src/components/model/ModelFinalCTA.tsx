
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Settings, MapPin } from "lucide-react";
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

  return (
    <section id="model-final-cta" className="my-10 bg-gray-50 p-6 rounded-lg">
      {/* Final CTA Block */}
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
  );
};
