
import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Bed, 
  SquareSplitHorizontal, 
  Settings, 
  MapPin, 
  GitCompare, 
  Users, 
  Car,
  ExternalLink
} from "lucide-react";

const ActivaOneDetail = () => {
  // Grundrisse Daten
  const grundrisse = [
    { name: "AO 690 HB", laenge: "6,99 m", schlafplaetze: 6 },
    { name: "AO 570 HS", laenge: "5,99 m", schlafplaetze: 4 },
    { name: "AO 650 HS", laenge: "6,50 m", schlafplaetze: 4 },
    { name: "AO 690 VB", laenge: "6,99 m", schlafplaetze: 6 },
    { name: "AO 630 LS", laenge: "6,44 m", schlafplaetze: 5 }
  ];

  // Serienausstattung
  const serienausstattung = [
    {
      kategorie: "Chassis",
      items: [
        "140 PS Motor",
        "Euro 6d",
        "ABS/ESP",
        "Tagfahrlicht",
        "Tempomat",
        "Fahrer- und Beifahrer-Airbag",
      ]
    },
    {
      kategorie: "Wohnwelt",
      items: [
        "37 cm hoher Doppelboden",
        "Isolierter und beheizter Alkoven",
        "Isofix-Vorbereitungen (außer HS-Grundrisse)",
        "Ergonomische Sitzpolster",
        "Schwenkbare Fahrerhaus-Sitze"
      ]
    },
    {
      kategorie: "Küche",
      items: [
        "3-Flammen-Kocher",
        "Kühlschrank (142 l)",
        "Besteckschublade",
        "Hochwertige Arbeitsplatte"
      ]
    },
    {
      kategorie: "Bad",
      items: [
        "Kassettentoilette",
        "Dusche mit Abtrennung",
        "Waschbecken mit Unterschrank"
      ]
    },
    {
      kategorie: "Elektro/Wasser",
      items: [
        "95Ah AGM-Batterie",
        "LED-Innenbeleuchtung",
        "Frischwassertank (120 l)",
        "Abwassertank (90 l)",
        "Zentrale Strom-/Wasserversorgung"
      ]
    }
  ];

  // Highlights der Baureihe
  const highlights = [
    "Ausziehbares Doppelstockbett (AO 690 VB)",
    "37 cm hoher Doppelboden mit viel Stauraum",
    "Isolierter und beheizter Alkoven",
    "Familienfreundliche Grundrisse",
    "2x Isofix (außer HS-Grundrisse)",
    "Beach Home Interieur verfügbar"
  ];

  const handleKonfiguratorClick = () => {
    window.open("https://eura.tef-kat.com/konfigurator-eura/Home/Start?culture=de-DE", "_blank", "noopener noreferrer");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* 1. Hero-Bereich - Simplified */}
        <section className="relative">
          <div className="w-full py-12 bg-gray-100">
            <div className="container mx-auto px-4">
              <h1 className="text-2xl md:text-3xl font-bold">Activa One – Entspannung nach Plan</h1>
              <p className="text-lg text-gray-700 mt-2 mb-4">Alkoven Wohnmobil für Familien und Einsteiger</p>
              
              <div className="flex flex-col sm:flex-row gap-3 mt-4">
                <Button 
                  className="flex items-center gap-2"
                  onClick={handleKonfiguratorClick}
                >
                  <Settings size={18} />
                  Konfigurator starten
                </Button>
                <Button variant="outline" className="flex items-center gap-2" asChild>
                  <Link to="/haendler">
                    <MapPin size={18} />
                    Händler finden
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Intro-Abschnitt */}
        <section className="container mx-auto px-4 py-8">
          <p className="text-lg">
            Die Modelle der Alkoven-Baureihe Activa One sind mehr als nur einfache Reisemobile: Das frische Interieur vermittelt Großzügigkeit und Freiheit. Vier Grundrisse bieten viel Stauraum – inklusive 37 cm Doppelboden für Familiengepäck. Perfekt geplant für entspannte Abfahrten.
          </p>
        </section>

        {/* 3. Highlights der Baureihe */}
        <section className="container mx-auto px-4 py-8 bg-gray-50">
          <h2 className="text-xl font-bold mb-4">Highlights der Baureihe</h2>
          <ul className="space-y-2">
            {highlights.map((highlight, index) => (
              <li key={index} className="flex items-start gap-2">
                <Bed className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* 4. Grundriss-Vergleich */}
        <section className="container mx-auto px-4 py-8">
          <h2 className="text-xl font-bold mb-4">Grundriss-Varianten</h2>
          
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Modell</TableHead>
                  <TableHead>Länge</TableHead>
                  <TableHead>Schlafplätze</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {grundrisse.map((grundriss) => (
                  <TableRow key={grundriss.name}>
                    <TableCell className="font-medium">{grundriss.name}</TableCell>
                    <TableCell>{grundriss.laenge}</TableCell>
                    <TableCell>{grundriss.schlafplaetze}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm" className="flex items-center gap-1">
                        <SquareSplitHorizontal className="h-4 w-4" />
                        <span className="hidden sm:inline">Details</span>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </section>
        
        {/* 5. Innenraum & Deko - Text only */}
        <section className="container mx-auto px-4 py-8 bg-gray-50">
          <h2 className="text-xl font-bold mb-4">Beach Home Deko-Paket</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="mb-4">
                Farbige Wandverkleidung, Segeltaue, Stautaschen im Alkovenbereich
              </p>
              <ul className="space-y-2">
                <li>Helle, maritime Farbgestaltung</li>
                <li>Praktische Aufbewahrungslösungen</li>
                <li>Hochwertige Stoffe und Materialien</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 6. Polstervarianten */}
        <section className="container mx-auto px-4 py-8">
          <h2 className="text-xl font-bold mb-4">Polstervarianten</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card>
              <CardContent className="p-4">
                <h3 className="font-bold mb-2">Polster</h3>
                <ul className="list-disc pl-5">
                  <li>Milano</li>
                  <li>Dara</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h3 className="font-bold mb-2">Dekoration</h3>
                <ul className="list-disc pl-5">
                  <li>Lasca</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 7. Serienausstattung */}
        <section className="container mx-auto px-4 py-8 bg-gray-50">
          <h2 className="text-xl font-bold mb-4">Serienausstattung</h2>
          <Accordion type="single" collapsible className="w-full">
            {serienausstattung.map((kategorie, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{kategorie.kategorie}</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-1">
                    {kategorie.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2">
                        <span className="text-green-600">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* 8. Weiterführende Links */}
        <section className="container mx-auto px-4 py-8 space-y-4">
          <h2 className="text-xl font-bold mb-4">Weitere Informationen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Button 
              variant="outline" 
              className="flex items-center gap-2 justify-center"
              onClick={handleKonfiguratorClick}
            >
              <Settings size={18} />
              Konfigurator starten
            </Button>
            <Button 
              variant="outline" 
              className="flex items-center gap-2 justify-center" 
              asChild
            >
              <Link to="/modellvergleich?model=activa-one">
                <GitCompare size={18} />
                Modelle vergleichen
              </Link>
            </Button>
            <Button 
              variant="outline" 
              className="flex items-center gap-2 justify-center" 
              asChild
            >
              <Link to="/berater?step=1">
                <Users size={18} />
                Wohnmobilberater
              </Link>
            </Button>
            <Button 
              variant="outline" 
              className="flex items-center gap-2 justify-center" 
              asChild
            >
              <Link to="/gebrauchtfahrzeuge">
                <Car size={18} />
                Gebraucht- & Mietfahrzeuge
              </Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ActivaOneDetail;
