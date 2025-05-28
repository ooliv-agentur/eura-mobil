
import React from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useComparison } from "@/context/ComparisonContext";
import { Checkbox } from "@/components/ui/checkbox";

const IntegrierteOverview = () => {
  const { selectedModels, addModel, removeModel, isSelected } = useComparison();

  const integrierteModels = [
    {
      id: "integra",
      name: "Integra",
      length: "7,15 - 8,99 m",
      sleepingPlaces: "2-4",
    },
    {
      id: "integra-line-gt", 
      name: "Integra Line GT",
      length: "7,35 m",
      sleepingPlaces: "2",
    },
    {
      id: "integra-line-fiat",
      name: "Integra Line Fiat", 
      length: "6,99 m",
      sleepingPlaces: "2",
    },
    {
      id: "integra-line-mercedes",
      name: "Integra Line Mercedes", 
      length: "6,99 m",
      sleepingPlaces: "2",
    },
  ];

  const handleCompareToggle = (model: typeof integrierteModels[0], checked: boolean) => {
    if (checked) {
      addModel({ id: model.id, name: model.name });
    } else {
      removeModel(model.id);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left column - Text */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">INTEGRIERTE WOHNMOBILE</h1>
              <p className="text-xl text-gray-600">Ein Zuhause mit allem Drum und Dran</p>
            </div>
            {/* Right column - Image hotspot */}
            <div className="aspect-video bg-gray-300 rounded-lg"></div>
          </div>
        </section>

        {/* Text Block */}
        <section className="mb-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Integrierte Reisemobile von Eura Mobil verwöhnen mit besonders großzügiger Raumgestaltung, aufwendiger Lichttechnik, edlen Materialien und komfortablen Details. Integra – den Luxusliner – erhalten Sie mit 7,15 Meter bis 8,99 Meter Gesamtlänge in verschiedenen Raumaufteilungen: vom Querbett über Einzelbetten bis hin zum zentralen Doppelbett. Auch die Modelle der neuen Integra Line-Baureihe bieten Ihnen Premium-Reisekomfort mit kompakteren Grundrissen ohne Abstriche bei der luxuriösen Ausstattung. Hochwertige Materialien, neue Komfortausstattungen wie das elektrische Hubbett und das elektrische Frontplissee beim Integra komplettieren die Wohlfühlatmosphäre. Bei beiden Baureihen immer an Bord: die von Eura Mobil gewohnten Vorzüge wie beheizter Doppelboden und die langlebige Karosserie aus GFK-Verbundwerkstoffen.
              </p>
            </div>
          </div>
        </section>

        {/* Model Cards Section */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {integrierteModels.map((model) => {
              const isModelSelected = isSelected(model.id);
              const isDisabled = selectedModels.length >= 2 && !isModelSelected;

              return (
                <Card key={model.id} className="border border-gray-300">
                  <div className="w-full aspect-video bg-gray-300"></div>
                  <CardContent className="p-4">
                    <h3 className="text-xl font-semibold mb-3">{model.name}</h3>
                    
                    <div className="grid grid-cols-1 gap-2 text-sm mb-4">
                      <div>
                        <span className="text-gray-600">Länge:</span> {model.length}
                      </div>
                      <div>
                        <span className="text-gray-600">Schlafplätze:</span> {model.sleepingPlaces}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Button variant="outline" className="w-full" asChild>
                        <Link to={`/modelle/${model.id}`}>
                          Modell ansehen
                        </Link>
                      </Button>
                      
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id={`compare-${model.id}`}
                          checked={isModelSelected}
                          disabled={isDisabled}
                          onCheckedChange={(checked) => handleCompareToggle(model, checked === true)}
                        />
                        <label 
                          htmlFor={`compare-${model.id}`} 
                          className={`text-sm cursor-pointer ${isDisabled ? 'text-gray-400' : ''}`}
                        >
                          Zum Vergleich
                        </label>
                      </div>
                      
                      <Button variant="outline" className="w-full" asChild>
                        <Link to="/haendler">
                          <MapPin className="mr-2 h-4 w-4" />
                          Händler finden
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* CTA Bar */}
        <section className="bg-gray-300 rounded-lg p-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/konfigurator">
                Jetzt konfigurieren
              </Link>
            </Button>
            
            <Button variant="outline" size="lg" asChild>
              <Link to="/berater">
                Beratung starten
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default IntegrierteOverview;
