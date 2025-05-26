
import React from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useComparison } from "@/context/ComparisonContext";
import { Checkbox } from "@/components/ui/checkbox";
import BeraterButton from "@/components/Wohnmobilberater/BeraterButton";

const VansOverview = () => {
  const { selectedModels, addModel, removeModel, isSelected } = useComparison();

  const vanModels = [
    {
      id: "v-635-eb",
      name: "V 635 EB",
      length: "6,36 m",
      sleepingPlaces: "2",
    },
    {
      id: "v-635-hb", 
      name: "V 635 HB",
      length: "6,36 m",
      sleepingPlaces: "2",
    },
    {
      id: "v-595-hb",
      name: "V 595 HB", 
      length: "5,99 m",
      sleepingPlaces: "2",
    },
  ];

  const handleCompareToggle = (model: typeof vanModels[0], checked: boolean) => {
    if (checked) {
      addModel({ id: model.id, name: model.name });
    } else {
      removeModel(model.id);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Full-width headline */}
        <section className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Vans von EURA MOBIL</h1>
          
          {/* Text block describing advantages */}
          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Im neuen Premium Van von EURA MOBIL verwandelt das exklusive Ambiente jeden Moment in einen besonderen Augenblick. Spüren Sie die edlen Materialien und erleben Sie die individuellen Details, die den EURA MOBIL Van zu Ihrem ganz persönlichen mobilen Zuhause machen.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Unsere Vans bieten die perfekte Kombination aus Kompaktheit und Komfort für Ihre Reiseabenteuer. Entdecken Sie die Freiheit des Reisens mit maximaler Flexibilität und minimalen Kompromissen.
            </p>
          </div>
        </section>

        {/* Hero image block */}
        <section className="mb-12">
          <div className="w-full h-64 md:h-96 bg-gray-300 rounded-lg"></div>
        </section>

        {/* Model cards section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8">Unsere Van-Modelle</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vanModels.map((model) => {
              const isModelSelected = isSelected(model.id);
              const isDisabled = selectedModels.length >= 2 && !isModelSelected;

              return (
                <Card key={model.id} className="border border-gray-300">
                  <div className="w-full aspect-video bg-gray-200"></div>
                  <CardContent className="p-4">
                    <h3 className="text-xl font-semibold mb-3">{model.name}</h3>
                    
                    <div className="grid grid-cols-2 gap-2 text-sm mb-4">
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
                          Zum Vergleich auswählen
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

        {/* CTA block at bottom */}
        <section className="text-center bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Bereit für Ihr Van-Abenteuer?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Konfigurieren Sie Ihren Traumvan nach Ihren Wünschen oder lassen Sie sich von unserem Berater das perfekte Modell empfehlen.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/konfigurator">
                Jetzt konfigurieren
              </Link>
            </Button>
            
            <BeraterButton 
              variant="outline" 
              size="lg"
            />
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default VansOverview;
