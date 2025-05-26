
import React from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useComparison } from "@/context/ComparisonContext";
import { Checkbox } from "@/components/ui/checkbox";

const AlkovenOverview = () => {
  const { selectedModels, addModel, removeModel, isSelected } = useComparison();

  const alkovenModels = [
    {
      id: "ao-570-hs",
      name: "AO 570 HS",
      length: "5,99 m",
      sleepingPlaces: "4",
    },
    {
      id: "ao-630-ls", 
      name: "AO 630 LS",
      length: "6,44 m",
      sleepingPlaces: "5",
    },
    {
      id: "ao-650-hs",
      name: "AO 650 HS", 
      length: "6,50 m",
      sleepingPlaces: "4",
    },
    {
      id: "ao-690-hb",
      name: "AO 690 HB", 
      length: "6,99 m",
      sleepingPlaces: "6",
    },
    {
      id: "ao-690-vb",
      name: "AO 690 VB", 
      length: "6,99 m",
      sleepingPlaces: "6",
    },
  ];

  const handleCompareToggle = (model: typeof alkovenModels[0], checked: boolean) => {
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4">ALKOVEN WOHNMOBILE</h1>
              <p className="text-xl text-gray-600">Ein Zuhause für Groß und Klein</p>
            </div>
            {/* Right column - Image hotspot */}
            <div className="aspect-video bg-gray-300 rounded-lg"></div>
          </div>
        </section>

        {/* Text Block */}
        <section className="mb-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <div>
                <h2 className="text-2xl font-bold mb-4">ALKOVEN WOHNMOBILE</h2>
              </div>
              
              <p>
                Die Alkoven Modelle bei Wohnmobilen zeichnen sich durch ihren praktischen Aufbau mit einem Schlafbereich über dem Fahrerhaus aus, der als Alkoven bezeichnet wird. Die Alkoven Wohnmobile von Eura Mobil sind auf Komfort und Bequemlichkeit ausgelegt und bieten viel Platz für Familien oder Freizeitsportler und sind auch bestens für die Vermietung geeignet. Das Innere ist modern und offen gestaltet, mit hochwertigen Möbeln und einer voll ausgestatteten Küche. Der Alkoven-Bereich verfügt über ein großes Doppelbett oder 2 Einzelbetten und bietet zusätzlichen Stauraum.
              </p>
              
              <p>
                Die Eura Mobil Alkoven Wohnmobile sind in verschiedenen Größen erhältlich, um Ihren Bedürfnissen und Vorlieben gerecht zu werden. Von kompakten Modellen für zwei Personen bis hin zu großen Wohnmobilen für Familien ist für jeden etwas dabei.
              </p>
              
              <p>
                Darüber hinaus verfügen die Alkoven Wohnmobile von Eura Mobil über moderne Funktionen und Ausstattungen, die den Komfort und die Bequemlichkeit unterwegs verbessern, wie z.B. Klimaanlage, Tiefrahmenchassis, hochwertige Möbel und einen Doppelboden der auch als Fußbodenheizung fungiert.
              </p>
              
              <p>
                Wenn Sie auf der Suche nach einem Alkoven Wohnmobil sind, das Komfort und Bequemlichkeit bietet, sollten Sie sich die Modelle von Eura Mobil genauer ansehen. Mit ihrer hohen Qualität und umfangreichen Ausstattung sind sie eine ausgezeichnete Wahl für Wohnmobil-Fans. Entdecken Sie jetzt die Alkoven Wohnmobile von Eura Mobil und planen Sie Ihre nächste Reise!
              </p>
            </div>
          </div>
        </section>

        {/* Model Cards Section */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {alkovenModels.map((model) => {
              const isModelSelected = isSelected(model.id);
              const isDisabled = selectedModels.length >= 2 && !isModelSelected;

              return (
                <Card key={model.id} className="border border-gray-300">
                  <div className="w-full aspect-video bg-gray-300"></div>
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

export default AlkovenOverview;
