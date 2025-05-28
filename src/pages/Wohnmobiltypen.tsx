
import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { MapPin, ArrowRight } from 'lucide-react';

const Wohnmobiltypen = () => {
  // Van models
  const vanModels = [
    { id: "van", name: "Van", description: "Premium Van mit exklusivem Ambiente", technicalData: { länge: "6,36 m", schlafplätze: "2" } }
  ];

  const vanUSPs = [
    "Kompakt und wendig für Stadtverkehr und enge Straßen",
    "Moderne Küche, bequemes Bett und geräumiges Bad",
    "Gut durchdachte Innenräume mit viel Stauraum",
    "Hervorragende Technik auf höchstem Niveau",
    "Premium-Materialien und exklusives Ambiente"
  ];

  // Alkoven models
  const alkovenModels = [
    { id: "activa-one", name: "Activa One", description: "Familien-Alkoven der Extraklasse", technicalData: { länge: "7,30 – 7,84 m", schlafplätze: "4-6" } }
  ];

  const alkovenUSPs = [
    "Praktischer Schlafbereich über dem Fahrerhaus (Alkoven)",
    "Großes Doppelbett oder 2 Einzelbetten mit zusätzlichem Stauraum",
    "Moderne Klimaanlage und Tiefrahmenchassis",
    "Beheizter Doppelboden mit Fußbodenheizung",
    "Ideal für Familien und Freizeitsportler"
  ];

  // Teilintegrierte models
  const teilintegrierteModels = [
    { id: "profila-t-fiat", name: "Profila T", description: "Elegante Teilintegrierte mit niedrigem Einstieg", technicalData: { länge: "6,99 – 7,58 m", schlafplätze: "2" } },
    { id: "profila-t-mercedes", name: "Profila T Mercedes", description: "Top-Modelle mit AL-KO Tiefrahmen und Alde-Heizung", technicalData: { länge: "7,12 m – 7,54 m", schlafplätze: "2" } },
    { id: "profila-rs", name: "Profila RS", description: "Luxus-Teilintegrierte mit Hubbett", technicalData: { länge: "6,99 – 7,58 m", schlafplätze: "4" } },
    { id: "contura", name: "Contura", description: "Luxus mit Starlight Dome Panoramaglasdach", technicalData: { länge: "7,84 m", schlafplätze: "2" } }
  ];

  const teilintegrierteUSPs = [
    "Großes, bequemes Hubbett direkt in der Decke (Profila RS)",
    "Mercedes-Benz Chassis mit AL-KO Tiefrahmen verfügbar",
    "Durchgehend isolierter und beheizter Doppelboden",
    "Hightech-Materialien in Leichtbaukonstruktion",
    "Maximaler Komfort bei überschaubaren Abmessungen"
  ];

  // Integrierte models
  const integrierteModels = [
    { id: "integra-line-fiat", name: "Integra Line Fiat", description: "Natürliches Design mit Luxus und Komfort", technicalData: { länge: "7,30 – 7,84 m", schlafplätze: "2–4" } },
    { id: "integra-line-gt-mercedes", name: "Integra Line GT Mercedes", description: "Grand Tourismo mit dynamisch elegantem Design", technicalData: { länge: "7,47 – 7,64 m", schlafplätze: "4" } },
    { id: "integra", name: "Integra", description: "Luxus-Reisemobil der Oberklasse", technicalData: { länge: "7,89 – 8,99 m", schlafplätze: "4" } },
    { id: "xtura", name: "Xtura", description: "4×4 Fernreisemobil für Offroad-Abenteuer", technicalData: { länge: "6,88 m", schlafplätze: "2" } }
  ];

  const integrierteUSPs = [
    "Besonders großzügige Raumgestaltung",
    "Aufwendige Lichttechnik und edle Materialien",
    "Verschiedene Raumaufteilungen: Querbett, Einzelbetten, zentrales Doppelbett",
    "Elektrisches Hubbett und elektrisches Frontplissee",
    "Beheizter Doppelboden und langlebige GFK-Verbundwerkstoffe"
  ];

  const ModelCard = ({ 
    model 
  }: { 
    model: { id: string; name: string; description: string; technicalData: { länge: string; schlafplätze: string } };
  }) => (
    <Card className="border border-black bg-white">
      <AspectRatio ratio={4/3}>
        <div className="w-full h-full bg-gray-300"></div>
      </AspectRatio>
      <CardContent className="p-4">
        <h3 className="text-lg font-bold mb-2">{model.name}</h3>
        <p className="text-sm mb-4">{model.description}</p>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="border border-black p-2 text-center">
            <div className="text-xs mb-1">Länge</div>
            <div className="font-bold">{model.technicalData.länge}</div>
          </div>
          <div className="border border-black p-2 text-center">
            <div className="text-xs mb-1">Schlafplätze</div>
            <div className="font-bold">{model.technicalData.schlafplätze}</div>
          </div>
        </div>
        
        <div className="space-y-2">
          <Button className="w-full bg-black text-white border border-black hover:bg-gray-800" asChild>
            <Link to={`/modelle/${model.id}`}>
              Modell ansehen
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          
          <Button variant="outline" className="w-full border-black text-black hover:bg-gray-100" asChild>
            <Link to="/haendler">
              <MapPin size={16} />
              Händler finden
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  const USPSection = ({ usps }: { usps: string[] }) => (
    <div className="border border-black p-6 mb-8 bg-white">
      <h3 className="text-xl font-bold mb-4">Highlights der Baureihe</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {usps.map((usp, index) => (
          <div key={index} className="flex items-start gap-2">
            <div className="w-2 h-2 bg-black rounded-full flex-shrink-0 mt-2"></div>
            <p className="text-sm">{usp}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const CategorySection = ({ 
    title, 
    description, 
    models,
    usps
  }: { 
    title: string; 
    description: string; 
    models: Array<{ id: string; name: string; description: string; technicalData: { länge: string; schlafplätze: string } }>;
    usps: string[];
  }) => (
    <section className="mb-16">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-lg mb-6">{description}</p>
      </div>
      
      <USPSection usps={usps} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {models.map((model) => (
          <ModelCard key={model.id} model={model} />
        ))}
      </div>
    </section>
  );

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gray-200 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Unsere Wohnmobiltypen
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              EURA MOBIL bietet Ihnen für jedes Reisebedürfnis den passenden Wohnmobiltyp – von kompakten Vans bis zu luxuriösen Integrierten.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          <CategorySection
            title="Vans"
            description="Im neuen Premium Van von EURA MOBIL verwandelt das exklusive Ambiente jeden Moment in einen besonderen Augenblick. Spüren Sie die edlen Materialien und erleben Sie die individuellen Details – perfekt für urbane Abenteuer und spontane Trips."
            models={vanModels}
            usps={vanUSPs}
          />

          <CategorySection
            title="Alkoven-Wohnmobile"
            description="In den Alkoven-Wohnmobilen von EURA MOBIL schafft die optimale Raumnutzung Platz für bis zu 6 Familienmitglieder oder Freunde. Dank intelligenter Leichtbauarchitektur steht bereits in der Gewichtsklasse unter 3,5 Tonnen ein Premium-Reisemobil bereit."
            models={alkovenModels}
            usps={alkovenUSPs}
          />

          <CategorySection
            title="Teilintegrierte Wohnmobile"
            description="Die Teilintegrierten von EURA MOBIL bieten Flexibilität und Komfort – perfekt für Paare oder Familien, die ihre Freizeit ohne Kompromisse genießen möchten. Mit vielfältigen Grundrissen und modernster Technik für maximalen Reisekomfort."
            models={teilintegrierteModels}
            usps={teilintegrierteUSPs}
          />

          <CategorySection
            title="Integrierte Wohnmobile"
            description="Integrierte Wohnmobile stehen für Luxus und Freiheit. Ob kurze Reisen oder lange Touren: EURA MOBIL bietet mit seinen Integrierten ein mobiles Zuhause mit maximalem Komfort und einzigartigem Raumgefühl für anspruchsvolle Reisende."
            models={integrierteModels}
            usps={integrierteUSPs}
          />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Wohnmobiltypen;
