
import React from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Settings, MapPin } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import { useWohnmobilberaterTrigger } from "@/hooks/useWohnmobilberaterTrigger";
import { ComparisonProvider } from "@/context/ComparisonContext";
import { ComparisonBar } from "@/components/comparison/ComparisonBar";
import { ComparisonModal } from "@/components/comparison/ComparisonModal";
import { SelectableModelCard } from "@/components/comparison/SelectableModelCard";
import { useState } from "react";

const VanDetail = () => {
  const { startBeraterFlow } = useWohnmobilberaterTrigger();
  const [isComparisonOpen, setIsComparisonOpen] = useState(false);
  
  const handleKonfiguratorClick = () => {
    window.open("https://eura.tef-kat.com/konfigurator-eura/Home/Start?culture=de-DE", "_blank", "noopener noreferrer");
  };
  
  const handleBeratungClick = () => {
    startBeraterFlow();
  };

  // Van layouts data
  const vanLayouts = [
    {
      id: "v-635-eb",
      name: "V 635 EB",
      length: "6,36 m",
      sleepingPlaces: "2"
    },
    {
      id: "v-635-hb", 
      name: "V 635 HB",
      length: "6,36 m",
      sleepingPlaces: "2"
    },
    {
      id: "v-595-hb",
      name: "V 595 HB", 
      length: "5,99 m",
      sleepingPlaces: "2"
    }
  ];

  return (
    <ComparisonProvider>
      <Layout>
        <div className="container mx-auto">
          {/* Hero Section */}
          <div className="relative w-full -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-[calc(50vw-50%)] overflow-visible">
            <div className="w-full h-80 sm:h-[500px] bg-[#E5E7EB] flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Vans</h1>
                <p className="text-xl md:text-2xl">Für Aktive und Unabhängige</p>
              </div>
            </div>
          </div>

          {/* Highlights Section */}
          <section className="my-12 bg-gray-50 py-10 -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-[calc(50vw-50%)] px-4 md:px-8">
            <div className="container mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Für Deine beste Zeit. Eura Mobil Vans</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                <div className="space-y-6">
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Sichtbar anders:</strong> Im neuen Premium Van von Eura Mobil verwandelt das exklusive Ambiente jeden Moment in einen besonderen Augenblick. Spüren Sie die edlen Materialien und erleben Sie die individuellen Details, die den Eura Mobil Van zu Ihrem ganz persönlichen mobilen Zuhause machen. Nehmen Sie sich die Zeit und lassen Sie das Interieur auf sich wirken….
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Spürbar anders:</strong> „Cosy" – das ist der Lieblingsbegriff unserer Kunden für das Ambiente im Eura Mobil Van. Ausgewählte Bezugsstoffe bei den Polstern, ein flauschiger Deckenbelag und die textile Wandbespannung mit Eco-Leder Applikationen statt blanker Kunststoffoberflächen machen den spürbaren Unterschied aus. Fühlen Sie mal….
                  </p>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Highlights der Baureihe:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Tisch mit klappbarer Platte, Cupholder und schwenkbarer Verlängerung</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Komfort-Kaltschaummatratzen mit geteilten und damit klappbaren Bettrahmen</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Waschraum mit schwenkbarer Duschwand</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Staufächer im Doppelboden</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Mineralstoff-Spüle</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="relative">
                  <AspectRatio ratio={4/3} className="bg-[#E5E7EB] rounded-lg relative">
                    {/* Hotspot placeholders */}
                    <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-white rounded-full border-2 border-blue-500"></div>
                    <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-white rounded-full border-2 border-blue-500"></div>
                    <div className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-white rounded-full border-2 border-blue-500"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-4 h-4 bg-white rounded-full border-2 border-blue-500"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full border-2 border-blue-500"></div>
                    <div className="absolute top-3/4 left-3/4 w-4 h-4 bg-white rounded-full border-2 border-blue-500"></div>
                  </AspectRatio>
                </div>
              </div>
            </div>
          </section>

          {/* Grundrisse Section */}
          <section id="grundrisse" className="my-10">
            <h2 className="text-2xl font-semibold mb-4">Grundrisse</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {vanLayouts.map((layout) => (
                <SelectableModelCard 
                  key={layout.id}
                  id={layout.id}
                  name={layout.name}
                  length={layout.length}
                  sleepingPlaces={layout.sleepingPlaces}
                  showComparison={true}
                />
              ))}
            </div>
          </section>

          {/* Innenraum Section */}
          <section id="innenraum" className="my-10">
            <h2 className="text-2xl font-semibold mb-6">Innenraum</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <Card className="overflow-hidden border shadow-sm">
                <AspectRatio ratio={1/1} className="bg-[#E5E7EB]" />
                <CardContent className="p-4">
                  <h3 className="font-medium mb-1">Kommunikation</h3>
                  <p className="text-gray-600 text-sm">Boxen, LED-Lampen und USB-Steckdosen</p>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden border shadow-sm">
                <AspectRatio ratio={1/1} className="bg-[#E5E7EB]" />
                <CardContent className="p-4">
                  <h3 className="font-medium mb-1">Oberflächen</h3>
                  <p className="text-gray-600 text-sm">Mineralstoff-Spüle</p>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden border shadow-sm">
                <AspectRatio ratio={1/1} className="bg-[#E5E7EB]" />
                <CardContent className="p-4">
                  <h3 className="font-medium mb-1">Dinetten-Tisch</h3>
                  <p className="text-gray-600 text-sm">Inklusive abgesenkter Ablage</p>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden border shadow-sm">
                <AspectRatio ratio={1/1} className="bg-[#E5E7EB]" />
                <CardContent className="p-4">
                  <h3 className="font-medium mb-1">Küche</h3>
                  <p className="text-gray-600 text-sm">Mit Gewürzregal</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Polster Section */}
          <section id="polster" className="my-10">
            <h2 className="text-2xl font-semibold mb-4">Polster</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-[#E5E7EB] rounded-lg overflow-hidden">
                <AspectRatio ratio={4/3} className="h-40" />
                <div className="p-3">
                  <h3 className="font-medium mb-1">Polster Vans</h3>
                  <p className="text-gray-600 text-sm">Eco-Leder</p>
                </div>
              </div>
              
              <div className="bg-[#E5E7EB] rounded-lg overflow-hidden">
                <AspectRatio ratio={4/3} className="h-40" />
                <div className="p-3">
                  <h3 className="font-medium mb-1">Polster Vans</h3>
                  <p className="text-gray-600 text-sm">Dinette</p>
                </div>
              </div>
              
              <div className="bg-[#E5E7EB] rounded-lg overflow-hidden">
                <AspectRatio ratio={4/3} className="h-40" />
                <div className="p-3">
                  <h3 className="font-medium mb-1">Polster Vans</h3>
                  <p className="text-gray-600 text-sm">Gepolstertes Kopfende (V595 HB)</p>
                </div>
              </div>
            </div>
          </section>

          {/* Serienausstattung Section */}
          <section id="serienausstattung" className="my-10 pt-8">
            <h2 className="text-2xl font-semibold mb-4">Serienausstattung</h2>
            <Tabs defaultValue="chassis" className="w-full">
              <TabsList className="grid w-full grid-cols-3 lg:grid-cols-9 mb-6">
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
              
              <TabsContent value="chassis" className="mt-6">
                <div className="bg-white p-6 rounded-lg border">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                    <div className="flex items-start gap-2"><Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Fiat Ducato 35L Chassis</span></div>
                    <div className="flex items-start gap-2"><Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Euro 6D Final</span></div>
                    <div className="flex items-start gap-2"><Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Fahrer- und Beifahrerairbag</span></div>
                    <div className="flex items-start gap-2"><Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>ABS/ASR/ESP inkl. Traktion+</span></div>
                    <div className="flex items-start gap-2"><Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Manuelle Klimaanlage</span></div>
                    <div className="flex items-start gap-2"><Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Tempomat</span></div>
                    <div className="flex items-start gap-2"><Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>90L Tank</span></div>
                    <div className="flex items-start gap-2"><Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Funkfernbedienung</span></div>
                    <div className="flex items-start gap-2"><Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Tagfahrlicht</span></div>
                    <div className="flex items-start gap-2"><Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Fensterheber</span></div>
                    <div className="flex items-start gap-2"><Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Radzierblenden</span></div>
                    <div className="flex items-start gap-2"><Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Fix and Go</span></div>
                    <div className="flex items-start gap-2"><Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Schwarzer Stoßfänger</span></div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="aufbau" className="mt-6">
                <div className="bg-white p-6 rounded-lg border">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                    <div className="flex items-start gap-2"><Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Dämmung in Dach/Boden/Seiten</span></div>
                    <div className="flex items-start gap-2"><Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Farbe weiss</span></div>
                    <div className="flex items-start gap-2"><Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Isolierte Fenster mit Schnellverschluss</span></div>
                    <div className="flex items-start gap-2"><Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Mückengitter</span></div>
                    <div className="flex items-start gap-2"><Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Verdunklung</span></div>
                    <div className="flex items-start gap-2"><Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>2 Fenster im Schlafbereich (595HB: 1)</span></div>
                    <div className="flex items-start gap-2"><Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Ausstellfenster</span></div>
                    <div className="flex items-start gap-2"><Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Außenbeleuchtung</span></div>
                    <div className="flex items-start gap-2"><Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Elektrische Trittstufe</span></div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="fahrerhaus" className="mt-6">
                <div className="bg-white p-6 rounded-lg border">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                    <div className="flex items-start gap-2"><Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Sitzbezug in Polsterstoff</span></div>
                    <div className="flex items-start gap-2"><Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Fahrerhausteppich</span></div>
                    <div className="flex items-start gap-2"><Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Übergang zum Wohnraum</span></div>
                    <div className="flex items-start gap-2"><Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Kartenfächer</span></div>
                    <div className="flex items-start gap-2"><Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Leselampen</span></div>
                    <div className="flex items-start gap-2"><Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Eco-Leder Blende mit LED</span></div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="wohnraum" className="mt-6">
                <div className="bg-white p-6 rounded-lg border">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                    <div className="flex items-start gap-2"><Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Dinette ergonomisch</span></div>
                    <div className="flex items-start gap-2"><Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Klapptisch mit Verlängerung</span></div>
                    <div className="flex items-start gap-2"><Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Cupholder</span></div>
                    <div className="flex items-start gap-2"><Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Polster Eco-Leder/Stoff</span></div>
                    <div className="flex items-start gap-2"><Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Staufächer im Boden</span></div>
                    <div className="flex items-start gap-2"><Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Oberschränke hinterlüftet</span></div>
                    <div className="flex items-start gap-2"><Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Möbeldekor „Beach Home"</span></div>
                    <div className="flex items-start gap-2"><Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Kleiderschrank</span></div>
                    <div className="flex items-start gap-2"><Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Flauschdecke</span></div>
                    <div className="flex items-start gap-2"><Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Textile Wandbespannung</span></div>
                    <div className="flex items-start gap-2"><Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Blenden in Eco-Leder</span></div>
                    <div className="flex items-start gap-2"><Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Metallaufsteller</span></div>
                    <div className="flex items-start gap-2"><Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Verchromte Schrankverschlüsse</span></div>
                    <div className="flex items-start gap-2"><Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>LED-Beleuchtung</span></div>
                    <div className="flex items-start gap-2"><Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>USB/TV-Anschluss</span></div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="kueche" className="mt-6">
                <div className="bg-white p-6 rounded-lg border">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                    <div className="flex items-start gap-2"><Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Mineralstoffplatte mit Spüle</span></div>
                    <div className="flex items-start gap-2"><Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Ausziehbare Armatur</span></div>
                    <div className="flex items-start gap-2"><Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Soft-Close Auszüge</span></div>
                    <div className="flex items-start gap-2"><Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>2-Flamm Kocher</span></div>
                    <div className="flex items-start gap-2"><Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Zentrale Gasabsperrhähne</span></div>
                    <div className="flex items-start gap-2"><Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Kompressorkühlschrank</span></div>
                    <div className="flex items-start gap-2"><Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Gewürzregal mit Beleuchtung</span></div>
                    <div className="flex items-start gap-2"><Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Ambientebeleuchtung</span></div>
                    <div className="flex items-start gap-2"><Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>2 Klappfächer (1x Flaschenhalter)</span></div>
                    <div className="flex items-start gap-2"><Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Außen zugänglicher Auszug</span></div>
                    <div className="flex items-start gap-2"><Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Tischschiene mit Blende</span></div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="bad" className="mt-6">
                <div className="bg-white p-6 rounded-lg border">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                    <div className="flex items-start gap-2"><Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Duschwand „easy open"</span></div>
                    <div className="flex items-start gap-2"><Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Duschfläche 60x90cm</span></div>
                    <div className="flex items-start gap-2"><Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Holzrost</span></div>
                    <div className="flex items-start gap-2"><Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Großes Waschbecken mit Click-Clack</span></div>
                    <div className="flex items-start gap-2"><Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Staufächer</span></div>
                    <div className="flex items-start gap-2"><Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Spiegelschrank</span></div>
                    <div className="flex items-start gap-2"><Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>3cm Tür mit Scharnieren</span></div>
                    <div className="flex items-start gap-2"><Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Eco-Leder Türgriff</span></div>
                    <div className="flex items-start gap-2"><Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Cassettentoilette</span></div>
                    <div className="flex items-start gap-2"><Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Fenster mit Mückengitter & Verdunklung</span></div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="schlafbereich" className="mt-6">
                <div className="bg-white p-6 rounded-lg border">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                    <div className="flex items-start gap-2"><Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Heckbetten mit Tellerfedern oder Lattenrost</span></div>
                    <div className="flex items-start gap-2"><Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Aufstellbar für Ladefläche</span></div>
                    <div className="flex items-start gap-2"><Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Stauboxen (635 EB)</span></div>
                    <div className="flex items-start gap-2"><Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Auffahrrampe & Abdeckung (635 HB)</span></div>
                    <div className="flex items-start gap-2"><Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Dachstauschränke</span></div>
                    <div className="flex items-start gap-2"><Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Lautsprecher in Eckmodulen</span></div>
                    <div className="flex items-start gap-2"><Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Mini Heki Dachluke</span></div>
                    <div className="flex items-start gap-2"><Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Fenster mit LED-Blenden</span></div>
                    <div className="flex items-start gap-2"><Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Leselampen mit USB</span></div>
                    <div className="flex items-start gap-2"><Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Stoffbespannung an Hecktüren</span></div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="installation" className="mt-6">
                <div className="bg-white p-6 rounded-lg border">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                    <div className="flex items-start gap-2"><Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Dieselheizung 4kW</span></div>
                    <div className="flex items-start gap-2"><Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Warmwasser mit Mischbatterie</span></div>
                    <div className="flex items-start gap-2"><Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Druckpumpe</span></div>
                    <div className="flex items-start gap-2"><Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Isolierter Frischwassertank</span></div>
                    <div className="flex items-start gap-2"><Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Beheizter Abwassertank</span></div>
                    <div className="flex items-start gap-2"><Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Frostsichere Ablasshähne</span></div>
                    <div className="flex items-start gap-2"><Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Gaskasten</span></div>
                    <div className="flex items-start gap-2"><Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Außendusche (außer V 595 HB)</span></div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="elektroversorgung" className="mt-6">
                <div className="bg-white p-6 rounded-lg border">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                    <div className="flex items-start gap-2"><Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Lithium-Batterie 100 Ah</span></div>
                    <div className="flex items-start gap-2"><Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>230V Steckdosen</span></div>
                    <div className="flex items-start gap-2"><Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Schaltbare Lichtzonen</span></div>
                    <div className="flex items-start gap-2"><Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>TV-Vorbereitung</span></div>
                    <div className="flex items-start gap-2"><Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>12V Dose</span></div>
                    <div className="flex items-start gap-2"><Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>USB-Ports</span></div>
                    <div className="flex items-start gap-2"><Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Trennschalter</span></div>
                    <div className="flex items-start gap-2"><Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Ladeautomat</span></div>
                    <div className="flex items-start gap-2"><Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>CEE Anschluss</span></div>
                    <div className="flex items-start gap-2"><Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>FI-Schutzschalter</span></div>
                    <div className="flex items-start gap-2"><Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>Bordpanel</span></div>
                    <div className="flex items-start gap-2"><Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><span>CP+ Steuerung mit Crashsensor</span></div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </section>

          {/* Bottom CTA Section */}
          <section className="my-10 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-center">Interessiert am Van?</h2>
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
        </div>

        {/* Comparison Modal */}
        <ComparisonModal 
          open={isComparisonOpen}
          onOpenChange={setIsComparisonOpen}
        />
        
        {/* Comparison Bar */}
        <ComparisonBar onCompareClick={() => setIsComparisonOpen(true)} />
      </Layout>
    </ComparisonProvider>
  );
};

export default VanDetail;
