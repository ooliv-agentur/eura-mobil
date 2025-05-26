
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
      sleepingPlaces: "2–3",
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
        {/* Hero Section */}
        <section className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left column - Text */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">VAN WOHNMOBILE</h1>
              <p className="text-xl text-gray-600">Für Aktive und Unabhängige</p>
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
                <h2 className="text-2xl font-bold mb-2">EURA MOBIL VAN</h2>
                <h3 className="text-xl font-semibold mb-4">DER PRIMETIME VAN</h3>
              </div>
              
              <p>
                Als Reisemobilhersteller ist Eura Mobil seit langem bekannt für seine herausragenden Fahrzeuge, die Komfort und Luxus auf vier Rädern bieten. Etwas Besonderes für die Freunde der Campervans zu schaffen, war das Ziel bei der Entwicklung der neuen Eura Mobil Vans.
              </p>
              
              <p>
                Die Vans von Eura Mobil sind perfekt für Reisende, die sich ein kompaktes Wohnmobil wünschen, das trotzdem viel Platz bietet. Die Vans sind in verschiedenen Größen erhältlich und bieten Platz für bis zu vier Personen. Dank ihrer kompakten Größe sind sie ideal für den Stadtverkehr und können auch auf engen Straßen mühelos manövriert werden.
              </p>
              
              <p>
                Auch in Sachen Ausstattung lassen die Vans von Eura Mobil keine Wünsche offen. Sie verfügen über eine moderne Küche, ein bequemes Bett und ein geräumiges Bad. Die Innenräume sind gut durchdacht und bieten genügend Stauraum für all Ihre Reiseutensilien. Ein weiteres Highlight der Vans von Eura Mobil ist ihre hervorragende Technik.
              </p>
              
              <p>
                Die Vans von Eura Mobil sind eine hervorragende Wahl für alle Reisenden, die ein kompaktes, aber dennoch geräumiges Fahrzeug suchen. Sie bieten Komfort, Luxus und Technologie auf höchstem Niveau. Überzeugen Sie sich selbst von den Vans von Eura Mobil und planen Sie Ihre nächste Reise!
              </p>
            </div>
          </div>
        </section>

        {/* Model Cards Section */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vanModels.map((model) => {
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

export default VansOverview;
