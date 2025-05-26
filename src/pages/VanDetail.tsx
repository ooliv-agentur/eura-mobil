
import React from "react";
import { ProductLayout } from "@/components/ProductLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const VanDetail = () => {
  return (
    <ProductLayout modelName="Van">
      {/* Hero Section */}
      <section className="bg-gray-300 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Vans</h1>
          <p className="text-xl text-gray-700">Für Aktive und Unabhängige</p>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left column - Text */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Für Deine beste Zeit. Eura Mobil Vans</h2>
              
              <p className="text-gray-700 leading-relaxed">
                Sichtbar anders: Im neuen Premium Van von Eura Mobil verwandelt das exklusive Ambiente jeden Moment in einen besonderen Augenblick. Spüren Sie die edlen Materialien und erleben Sie die individuellen Details, die den Eura Mobil Van zu Ihrem ganz persönlichen mobilen Zuhause machen. Nehmen Sie sich die Zeit und lassen Sie das Interieur auf sich wirken….
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                Spürbar anders: "Cosy" – das ist der Lieblingsbegriff unserer Kunden für das Ambiente im Eura Mobil Van. Ausgewählte Bezugsstoffe bei den Polstern, ein flauschiger Deckenbelag und die textile Wandbespannung mit Eco-Leder Applikationen statt blanker Kunststoffoberflächen machen den spürbaren Unterschied aus. Fühlen Sie mal….
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

      {/* Grundrisse Section - Placeholder */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Grundrisse</h2>
          <div className="text-center text-gray-500">
            <p>Grundrisse component will be integrated here</p>
          </div>
        </div>
      </section>

      {/* Innenraum Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Innenraum</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <div className="aspect-video bg-gray-300"></div>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2">Kommunikation</h3>
                <p className="text-sm text-gray-600">Boxen, LED-Lampen und USB-Steckdosen</p>
              </CardContent>
            </Card>
            
            <Card>
              <div className="aspect-video bg-gray-300"></div>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2">Oberflächen</h3>
                <p className="text-sm text-gray-600">Mineralstoff-Spüle</p>
              </CardContent>
            </Card>
            
            <Card>
              <div className="aspect-video bg-gray-300"></div>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2">Dinetten-Tisch</h3>
                <p className="text-sm text-gray-600">Inklusive abgesenkter Ablage</p>
              </CardContent>
            </Card>
            
            <Card>
              <div className="aspect-video bg-gray-300"></div>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2">Küche</h3>
                <p className="text-sm text-gray-600">Mit Gewürzregal</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Polster Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Polster</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <div className="aspect-video bg-gray-300"></div>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2">Polster Vans</h3>
                <p className="text-sm text-gray-600">Eco-Leder</p>
              </CardContent>
            </Card>
            
            <Card>
              <div className="aspect-video bg-gray-300"></div>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2">Polster Vans</h3>
                <p className="text-sm text-gray-600">Dinette</p>
              </CardContent>
            </Card>
            
            <Card>
              <div className="aspect-video bg-gray-300"></div>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2">Polster Vans</h3>
                <p className="text-sm text-gray-600">Gepolstertes Kopfende (V595 HB)</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Serienausstattung Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Serienausstattung</h2>
          
          <Tabs defaultValue="chassis" className="w-full">
            <TabsList className="grid w-full grid-cols-3 md:grid-cols-5 lg:grid-cols-9 mb-8">
              <TabsTrigger value="chassis">Chassis</TabsTrigger>
              <TabsTrigger value="aufbau">Aufbau</TabsTrigger>
              <TabsTrigger value="fahrerhaus">Fahrerhaus</TabsTrigger>
              <TabsTrigger value="wohnraum">Wohnraum</TabsTrigger>
              <TabsTrigger value="kueche">Küche</TabsTrigger>
              <TabsTrigger value="bad">Bad</TabsTrigger>
              <TabsTrigger value="schlafbereich">Schlafbereich</TabsTrigger>
              <TabsTrigger value="installation">Installation</TabsTrigger>
              <TabsTrigger value="elektroversorgung">Elektroversorgung</TabsTrigger>
            </TabsList>
            
            <TabsContent value="chassis">
              <Card>
                <CardContent className="p-6">
                  <ul className="space-y-2 text-gray-700">
                    <li>• Fiat Ducato 35L Chassis</li>
                    <li>• Euro 6D Final</li>
                    <li>• Fahrer- und Beifahrerairbag</li>
                    <li>• ABS/ASR/ESP inkl. Traktion+</li>
                    <li>• manuelle Klimaanlage</li>
                    <li>• Tempomat</li>
                    <li>• 90L Tank</li>
                    <li>• Funkfernbedienung</li>
                    <li>• Tagfahrlicht</li>
                    <li>• Fensterheber</li>
                    <li>• Radzierblenden</li>
                    <li>• Fix and Go</li>
                    <li>• schwarzer Stoßfänger</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="aufbau">
              <Card>
                <CardContent className="p-6">
                  <ul className="space-y-2 text-gray-700">
                    <li>• Dämmung in Dach/Boden/Seiten</li>
                    <li>• Farbe weiss</li>
                    <li>• isolierte Fenster mit Schnellverschluss</li>
                    <li>• Mückengitter</li>
                    <li>• Verdunklung</li>
                    <li>• 2 Fenster im Schlafbereich (595HB: 1)</li>
                    <li>• Ausstellfenster</li>
                    <li>• Außenbeleuchtung</li>
                    <li>• elektrische Trittstufe</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="fahrerhaus">
              <Card>
                <CardContent className="p-6">
                  <ul className="space-y-2 text-gray-700">
                    <li>• Sitzbezug in Polsterstoff</li>
                    <li>• Fahrerhausteppich</li>
                    <li>• Übergang zum Wohnraum</li>
                    <li>• Kartenfächer</li>
                    <li>• Leselampen</li>
                    <li>• Eco-Leder Blende mit LED</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="wohnraum">
              <Card>
                <CardContent className="p-6">
                  <ul className="space-y-2 text-gray-700">
                    <li>• Dinette ergonomisch</li>
                    <li>• Klapptisch mit Verlängerung</li>
                    <li>• Cupholder</li>
                    <li>• Polster Eco-Leder/Stoff</li>
                    <li>• Staufächer im Boden</li>
                    <li>• Oberschränke hinterlüftet</li>
                    <li>• Möbeldekor „Beach Home"</li>
                    <li>• Kleiderschrank</li>
                    <li>• Flauschdecke</li>
                    <li>• textile Wandbespannung</li>
                    <li>• Blenden in Eco-Leder</li>
                    <li>• Metallaufsteller</li>
                    <li>• verchromte Schrankverschlüsse</li>
                    <li>• LED-Beleuchtung</li>
                    <li>• USB/TV-Anschluss</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="kueche">
              <Card>
                <CardContent className="p-6">
                  <ul className="space-y-2 text-gray-700">
                    <li>• Mineralstoffplatte mit Spüle</li>
                    <li>• ausziehbare Armatur</li>
                    <li>• Soft-Close Auszüge</li>
                    <li>• 2-Flamm Kocher</li>
                    <li>• zentrale Gasabsperrhähne</li>
                    <li>• Kompressorkühlschrank</li>
                    <li>• Gewürzregal mit Beleuchtung</li>
                    <li>• Ambientebeleuchtung</li>
                    <li>• 2 Klappfächer (1x Flaschenhalter)</li>
                    <li>• außen zugänglicher Auszug</li>
                    <li>• Tischschiene mit Blende</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="bad">
              <Card>
                <CardContent className="p-6">
                  <ul className="space-y-2 text-gray-700">
                    <li>• Duschwand „easy open"</li>
                    <li>• Duschfläche 60x90cm</li>
                    <li>• Holzrost</li>
                    <li>• großes Waschbecken mit Click-Clack</li>
                    <li>• Staufächer</li>
                    <li>• Spiegelschrank</li>
                    <li>• 3cm Tür mit Scharnieren</li>
                    <li>• Eco-Leder Türgriff</li>
                    <li>• Cassettentoilette</li>
                    <li>• Fenster mit Mückengitter & Verdunklung</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="schlafbereich">
              <Card>
                <CardContent className="p-6">
                  <ul className="space-y-2 text-gray-700">
                    <li>• Heckbetten mit Tellerfedern oder Lattenrost</li>
                    <li>• aufstellbar für Ladefläche</li>
                    <li>• Stauboxen (635 EB)</li>
                    <li>• Auffahrrampe & Abdeckung (635 HB)</li>
                    <li>• Dachstauschränke</li>
                    <li>• Lautsprecher in Eckmodulen</li>
                    <li>• Mini Heki Dachluke</li>
                    <li>• Fenster mit LED-Blenden</li>
                    <li>• Leselampen mit USB</li>
                    <li>• Stoffbespannung an Hecktüren</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="installation">
              <Card>
                <CardContent className="p-6">
                  <ul className="space-y-2 text-gray-700">
                    <li>• Dieselheizung 4kW</li>
                    <li>• Warmwasser mit Mischbatterie</li>
                    <li>• Druckpumpe</li>
                    <li>• isolierter Frischwassertank</li>
                    <li>• beheizter Abwassertank</li>
                    <li>• frostsichere Ablasshähne</li>
                    <li>• Gaskasten</li>
                    <li>• Außendusche (außer V 595 HB)</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="elektroversorgung">
              <Card>
                <CardContent className="p-6">
                  <ul className="space-y-2 text-gray-700">
                    <li>• Lithium-Batterie 100 Ah</li>
                    <li>• 230V Steckdosen</li>
                    <li>• schaltbare Lichtzonen</li>
                    <li>• TV-Vorbereitung</li>
                    <li>• 12V Dose</li>
                    <li>• USB-Ports</li>
                    <li>• Trennschalter</li>
                    <li>• Ladeautomat</li>
                    <li>• CEE Anschluss</li>
                    <li>• FI-Schutzschalter</li>
                    <li>• Bordpanel</li>
                    <li>• CP+ Steuerung mit Crashsensor</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </ProductLayout>
  );
};

export default VanDetail;
