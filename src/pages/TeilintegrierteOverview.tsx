
import React from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useComparison } from "@/context/ComparisonContext";
import { Checkbox } from "@/components/ui/checkbox";

const TeilintegrierteOverview = () => {
  const { selectedModels, addModel, removeModel, isSelected } = useComparison();

  const teilintegrierteModels = [
    {
      id: "profila-rs",
      name: "Profila RS",
      length: "6,99 m",
      sleepingPlaces: "2",
    },
    {
      id: "profila-t-fiat", 
      name: "Profila T (Fiat)",
      length: "6,99 m",
      sleepingPlaces: "2-4",
    },
    {
      id: "profila-t-mercedes",
      name: "Profila T (Mercedes)", 
      length: "6,99 m",
      sleepingPlaces: "2-4",
    },
    {
      id: "contura",
      name: "Contura",
      length: "6,40 - 7,35 m",
      sleepingPlaces: "2-4",
    },
  ];

  const handleCompareToggle = (model: typeof teilintegrierteModels[0], checked: boolean) => {
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4">TEILINTEGRIERTE WOHNMOBILE</h1>
              <p className="text-xl text-gray-600">Ein Zuhause für Auf und Davon</p>
            </div>
            {/* Right column - Image hotspot */}
            <div className="aspect-video bg-gray-300 rounded-lg"></div>
          </div>
        </section>

        {/* Text Block */}
        <section className="mb-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <h2 className="text-2xl font-bold mb-4">TEILINTEGRIERTE WOHNMOBILE</h2>
              <p>
                Zu einem Teil kompakter gebaut, zum anderen Teil mit der überzeugenden Technik der Großen: Teilintegrierte Reisemobile von Eura Mobil bieten ein Höchstmaß an Komfort auch bei überschaubaren Abmessungen: Beim Profila RS versteckt sich zum Beispiel ein großes, bequemes Hubbett direkt in der Decke und bietet zwei Personen eine entspannte Nachtruhe. Vier Grundrisse der Profila T Baureihe sind auf Mercedes-Benz Chassis und mit AL-KO Tiefrahmen erhältlich. Durch den durchgehend isolierten und beheizten Doppelboden bei diesen Leichtbaukonstruktionen, werden auch in dieser Klasse Hightech-Materialien optimal genutzt.
              </p>
              <p>
                Wenn Sie auf der Suche nach einem hochwertigen und flexiblen Wohnmobil sind, das alle Annehmlichkeiten bietet, die Sie sich wünschen, sollten Sie sich die teilintegrierten Wohnmobile von Eura Mobil ansehen. Entdecken Sie die verschiedenen Modelle und lassen Sie sich von der hohen Qualität und der umfangreichen Ausstattung überzeugen. Planen Sie Ihre nächste Reise mit einem Eura Mobil teilintegrierten Wohnmobil und erleben Sie die Freiheit und den Komfort auf vier Rädern!
              </p>
            </div>
          </div>
        </section>

        {/* Model Cards Section */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teilintegrierteModels.map((model) => {
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

export default TeilintegrierteOverview;
