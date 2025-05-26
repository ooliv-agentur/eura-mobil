
import React from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useComparison } from "@/context/ComparisonContext";
import { Checkbox } from "@/components/ui/checkbox";
import BeraterButton from "@/components/Wohnmobilberater/BeraterButton";

const VanDetail = () => {
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
        {/* Hero Section - Rebuilt */}
        <section className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left column - Text */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Vans</h1>
              <p className="text-xl text-gray-600">Für Aktive und Unabhängige</p>
            </div>
            {/* Right column - Interactive Interior Image Placeholder */}
            <div className="aspect-video bg-gray-300 rounded-lg flex items-center justify-center">
              <span className="text-gray-600 text-center px-4">
                Hotspot Bild Placeholder – Innenraum interaktiv
              </span>
            </div>
          </div>
        </section>

        {/* Highlights Section - Rebuilt */}
        <section className="mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* Left column - Text content */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Für Deine beste Zeit. Eura Mobil Vans</h2>
                
                <p className="text-gray-700 leading-relaxed">
                  Sichtbar anders: Im neuen Premium Van von Eura Mobil verwandelt das exklusive Ambiente jeden Moment in einen besonderen Augenblick. Spüren Sie die edlen Materialien und erleben Sie die individuellen Details, die den Eura Mobil Van zu Ihrem ganz persönlichen mobilen Zuhause machen. Nehmen Sie sich die Zeit und lassen Sie das Interieur auf sich wirken....
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  Spürbar anders: "Cosy" – das ist der Lieblingsbegriff unserer Kunden für das Ambiente im Eura Mobil Van. Ausgewählte Bezugsstoffe bei den Polstern, ein flauschiger Deckenbelag und die textile Wandbespannung mit Eco-Leder Applikationen statt blanker Kunststoffoberflächen machen den spürbaren Unterschied aus. Fühlen Sie mal....
                </p>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Highlights der Baureihe:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Tisch mit klappbarer Platte, Cupholder und schwenkbarer Verlängerung</li>
                    <li>• Komfort-Kaltschaummatratzen mit geteilten und damit klappbaren Bettrahmen</li>
                    <li>• Waschraum mit schwenkbarer Duschwand</li>
                    <li>• Staufächer im Doppelboden</li>
                    <li>• Mineralstoff-Spüle</li>
                  </ul>
                </div>
              </div>
              
              {/* Right column - Image with hotspots */}
              <div className="aspect-video bg-gray-300 rounded-lg relative">
                {/* 6 circular hotspot placeholders */}
                <div className="absolute top-4 left-4 w-4 h-4 bg-white rounded-full border-2 border-gray-600"></div>
                <div className="absolute top-8 right-8 w-4 h-4 bg-white rounded-full border-2 border-gray-600"></div>
                <div className="absolute top-1/3 left-1/3 w-4 h-4 bg-white rounded-full border-2 border-gray-600"></div>
                <div className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-white rounded-full border-2 border-gray-600"></div>
                <div className="absolute bottom-8 left-8 w-4 h-4 bg-white rounded-full border-2 border-gray-600"></div>
                <div className="absolute bottom-4 right-1/3 w-4 h-4 bg-white rounded-full border-2 border-gray-600"></div>
              </div>
            </div>
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

export default VanDetail;
