import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { MapPin, ArrowRight, CheckCircle, Users, Home, Car, Sparkles } from 'lucide-react';

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
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-gray-200">
      <AspectRatio ratio={4/3} className="bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
        <div className="w-full h-full flex items-center justify-center">
          <Car className="w-12 h-12 text-gray-400" />
        </div>
      </AspectRatio>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">{model.name}</h3>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">{model.description}</p>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-50 p-3 rounded-lg text-center">
            <div className="text-xs text-gray-500 mb-1">Länge</div>
            <div className="font-semibold text-gray-900">{model.technicalData.länge}</div>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg text-center">
            <div className="text-xs text-gray-500 mb-1">Schlafplätze</div>
            <div className="font-semibold text-gray-900">{model.technicalData.schlafplätze}</div>
          </div>
        </div>
        
        <div className="space-y-3">
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" asChild>
            <Link to={`/modelle/${model.id}`}>
              Modell ansehen
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          
          <Button variant="outline" className="w-full flex items-center justify-center gap-2 border-gray-300" asChild>
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
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl mb-10 border border-blue-100">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
          <Sparkles className="w-5 h-5 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900">Highlights der Baureihe</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {usps.map((usp, index) => (
          <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
            <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
            <p className="text-sm text-gray-700 leading-relaxed">{usp}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const CategoryIcon = ({ type }: { type: string }) => {
    switch (type) {
      case 'van':
        return <Car className="w-8 h-8 text-blue-600" />;
      case 'alkoven':
        return <Users className="w-8 h-8 text-green-600" />;
      case 'teilintegriert':
        return <Home className="w-8 h-8 text-purple-600" />;
      case 'integriert':
        return <Sparkles className="w-8 h-8 text-amber-600" />;
      default:
        return <Car className="w-8 h-8 text-gray-600" />;
    }
  };

  const CategorySection = ({ 
    title, 
    description, 
    models,
    usps,
    type
  }: { 
    title: string; 
    description: string; 
    models: Array<{ id: string; name: string; description: string; technicalData: { länge: string; schlafplätze: string } }>;
    usps: string[];
    type: string;
  }) => (
    <section className="mb-20">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-4 mb-6">
          <CategoryIcon type={type} />
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            {title}
          </h2>
        </div>
        <p className="text-gray-600 text-lg max-w-4xl mx-auto mb-8 leading-relaxed">{description}</p>
      </div>
      
      <USPSection usps={usps} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
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
        <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Unsere Wohnmobiltypen
              <span className="block text-blue-200 text-xl md:text-2xl font-normal mt-4">
                Für jeden Reisetraum das perfekte Zuhause
              </span>
            </h1>
            <p className="text-blue-100 text-lg max-w-3xl mx-auto leading-relaxed">
              EURA MOBIL bietet Ihnen für jedes Reisebedürfnis den passenden Wohnmobiltyp – von kompakten Vans bis zu luxuriösen Integrierten. Entdecken Sie unsere Modelle und finden Sie Ihr perfektes Reisemobil.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16">
          <CategorySection
            title="Vans"
            description="Im neuen Premium Van von EURA MOBIL verwandelt das exklusive Ambiente jeden Moment in einen besonderen Augenblick. Spüren Sie die edlen Materialien und erleben Sie die individuellen Details – perfekt für urbane Abenteuer und spontane Trips."
            models={vanModels}
            usps={vanUSPs}
            type="van"
          />

          <CategorySection
            title="Alkoven-Wohnmobile"
            description="In den Alkoven-Wohnmobilen von EURA MOBIL schafft die optimale Raumnutzung Platz für bis zu 6 Familienmitglieder oder Freunde. Dank intelligenter Leichtbauarchitektur steht bereits in der Gewichtsklasse unter 3,5 Tonnen ein Premium-Reisemobil bereit."
            models={alkovenModels}
            usps={alkovenUSPs}
            type="alkoven"
          />

          <CategorySection
            title="Teilintegrierte Wohnmobile"
            description="Die Teilintegrierten von EURA MOBIL bieten Flexibilität und Komfort – perfekt für Paare oder Familien, die ihre Freizeit ohne Kompromisse genießen möchten. Mit vielfältigen Grundrissen und modernster Technik für maximalen Reisekomfort."
            models={teilintegrierteModels}
            usps={teilintegrierteUSPs}
            type="teilintegriert"
          />

          <CategorySection
            title="Integrierte Wohnmobile"
            description="Integrierte Wohnmobile stehen für Luxus und Freiheit. Ob kurze Reisen oder lange Touren: EURA MOBIL bietet mit seinen Integrierten ein mobiles Zuhause mit maximalem Komfort und einzigartigem Raumgefühl für anspruchsvolle Reisende."
            models={integrierteModels}
            usps={integrierteUSPs}
            type="integriert"
          />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Wohnmobiltypen;
