
import React from "react";
import { ProductLayout } from "@/components/ProductLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const VanDetail = () => {
  return (
    <ProductLayout modelName="Van">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Vans</h1>
            <p className="text-xl text-gray-600">Für Aktive und Unabhängige</p>
          </div>
          <div className="w-full aspect-video bg-gray-300 rounded-lg"></div>
        </section>

        {/* Highlights Section */}
        <section className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left column - Text */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold mb-6">Für Deine beste Zeit. Eura Mobil Vans</h2>
                
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Sichtbar anders: Im neuen Premium Van von Eura Mobil verwandelt das exklusive Ambiente jeden Moment in einen besonderen Augenblick. Spüren Sie die edlen Materialien und erleben Sie die individuellen Details, die den Eura Mobil Van zu Ihrem ganz persönlichen mobilen Zuhause machen. Nehmen Sie sich die Zeit und lassen Sie das Interieur auf sich wirken….
                  </p>
                  
                  <p>
                    Spürbar anders: „Cosy" – das ist der Lieblingsbegriff unserer Kunden für das Ambiente im Eura Mobil Van. Ausgewählte Bezugsstoffe bei den Polstern, ein flauschiger Deckenbelag und die textile Wandbespannung mit Eco-Leder Applikationen statt blanker Kunststoffoberflächen machen den spürbaren Unterschied aus. Fühlen Sie mal….
                  </p>
                </div>
              </div>
              
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
            <div className="relative">
              <div className="aspect-video bg-gray-300 rounded-lg relative">
                {/* 6 circular hotspot placeholders */}
                <div className="absolute top-4 left-4 w-4 h-4 bg-white rounded-full border-2 border-gray-600"></div>
                <div className="absolute top-4 right-4 w-4 h-4 bg-white rounded-full border-2 border-gray-600"></div>
                <div className="absolute top-1/2 left-4 w-4 h-4 bg-white rounded-full border-2 border-gray-600 transform -translate-y-1/2"></div>
                <div className="absolute top-1/2 right-4 w-4 h-4 bg-white rounded-full border-2 border-gray-600 transform -translate-y-1/2"></div>
                <div className="absolute bottom-4 left-4 w-4 h-4 bg-white rounded-full border-2 border-gray-600"></div>
                <div className="absolute bottom-4 right-4 w-4 h-4 bg-white rounded-full border-2 border-gray-600"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Grundrisse Section - Placeholder */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Grundrisse</h2>
          <div className="bg-gray-100 p-8 rounded-lg text-center">
            <p className="text-gray-500">Grundrisse section placeholder - existing component will be placed here</p>
          </div>
        </section>

        {/* Innenraum Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Innenraum</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Kommunikation", subtitle: "Boxen, LED-Lampen und USB-Steckdosen" },
              { title: "Oberflächen", subtitle: "Mineralstoff-Spüle" },
              { title: "Dinetten-Tisch", subtitle: "Inklusive abgesenkter Ablage" },
              { title: "Küche", subtitle: "Mit Gewürzregal" }
            ].map((item, index) => (
              <Card key={index} className="border border-gray-300">
                <div className="aspect-square bg-gray-300"></div>
                <CardContent className="p-4 text-center">
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.subtitle}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Polster Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Polster</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Polster Vans", subtitle: "Eco-Leder" },
              { title: "Polster Vans", subtitle: "Dinette" },
              { title: "Polster Vans", subtitle: "Gepolstertes Kopfende (V595 HB)" }
            ].map((item, index) => (
              <Card key={index} className="border border-gray-300">
                <div className="aspect-square bg-gray-300"></div>
                <CardContent className="p-4 text-center">
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.subtitle}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Serienausstattung Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Serienausstattung</h2>
          <Tabs defaultValue="chassis" className="w-full">
            <TabsList className="grid w-full grid-cols-3 md:grid-cols-9 mb-6">
              <TabsTrigger value="chassis">Chassis</TabsTrigger>
              <TabsTrigger value="aufbau">Aufbau</TabsTrigger>
              <TabsTrigger value="fahrerhaus">Fahrerhaus</TabsTrigger>
              <TabsTrigger value="wohnraum">Wohnraum</TabsTrigger>
              <TabsTrigger value="kueche">Küche</TabsTrigger>
              <TabsTrigger value="bad">Bad</TabsTrigger>
              <TabsTrigger value="schlafbereich">Schlafbereich</TabsTrigger>
              <TabsTrigger value="installation">Installation</TabsTrigger>
              <TabsTrigger value="elektro">Elektroversorgung</TabsTrigger>
            </TabsList>
            
            <TabsContent value="chassis" className="space-y-2">
              <ul className="space-y-1 text-sm">
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
            </TabsContent>
            
            <TabsContent value="aufbau" className="space-y-2">
              <ul className="space-y-1 text-sm">
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
            </TabsContent>
            
            <TabsContent value="fahrerhaus" className="space-y-2">
              <ul className="space-y-1 text-sm">
                <li>• Sitzbezug in Polsterstoff</li>
                <li>• Fahrerhausteppich</li>
                <li>• Übergang zum Wohnraum</li>
                <li>• Kartenfächer</li>
                <li>• Leselampen</li>
                <li>• Eco-Leder Blende mit LED</li>
              </ul>
            </TabsContent>
            
            <TabsContent value="wohnraum" className="space-y-2">
              <ul className="space-y-1 text-sm">
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
            </TabsContent>
            
            <TabsContent value="kueche" className="space-y-2">
              <ul className="space-y-1 text-sm">
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
            </TabsContent>
            
            <TabsContent value="bad" className="space-y-2">
              <ul className="space-y-1 text-sm">
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
            </TabsContent>
            
            <TabsContent value="schlafbereich" className="space-y-2">
              <ul className="space-y-1 text-sm">
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
            </TabsContent>
            
            <TabsContent value="installation" className="space-y-2">
              <ul className="space-y-1 text-sm">
                <li>• Dieselheizung 4kW</li>
                <li>• Warmwasser mit Mischbatterie</li>
                <li>• Druckpumpe</li>
                <li>• isolierter Frischwassertank</li>
                <li>• beheizter Abwassertank</li>
                <li>• frostsichere Ablasshähne</li>
                <li>• Gaskasten</li>
                <li>• Außendusche (außer V 595 HB)</li>
              </ul>
            </TabsContent>
            
            <TabsContent value="elektro" className="space-y-2">
              <ul className="space-y-1 text-sm">
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
            </TabsContent>
          </Tabs>
        </section>
      </div>
    </ProductLayout>
  );
};

export default VanDetail;
