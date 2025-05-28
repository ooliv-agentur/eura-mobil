
import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { MapPin } from 'lucide-react';

const Wohnmobiltypen = () => {
  // Van models
  const vanModels = [
    { id: "van", name: "Van", description: "Premium Van mit exklusivem Ambiente", technicalData: { länge: "6,36 m", schlafplätze: "2" } }
  ];

  // Alkoven models
  const alkovenModels = [
    { id: "activa-one", name: "Activa One", description: "Familien-Alkoven der Extraklasse", technicalData: { länge: "7,30 – 7,84 m", schlafplätze: "4-6" } }
  ];

  // Teilintegrierte models
  const teilintegrierteModels = [
    { id: "profila-t-fiat", name: "Profila T", description: "Elegante Teilintegrierte mit niedrigem Einstieg", technicalData: { länge: "6,99 – 7,58 m", schlafplätze: "2" } },
    { id: "profila-t-mercedes", name: "Profila T Mercedes", description: "Top-Modelle mit AL-KO Tiefrahmen und Alde-Heizung", technicalData: { länge: "7,12 m – 7,54 m", schlafplätze: "2" } },
    { id: "profila-rs", name: "Profila RS", description: "Luxus-Teilintegrierte mit Hubbett", technicalData: { länge: "6,99 – 7,58 m", schlafplätze: "4" } },
    { id: "contura", name: "Contura", description: "Luxus mit Starlight Dome Panoramaglasdach", technicalData: { länge: "7,84 m", schlafplätze: "2" } }
  ];

  // Integrierte models
  const integrierteModels = [
    { id: "integra-line-fiat", name: "Integra Line Fiat", description: "Natürliches Design mit Luxus und Komfort", technicalData: { länge: "7,30 – 7,84 m", schlafplätze: "2–4" } },
    { id: "integra-line-gt-mercedes", name: "Integra Line GT Mercedes", description: "Grand Tourismo mit dynamisch elegantem Design", technicalData: { länge: "7,47 – 7,64 m", schlafplätze: "4" } },
    { id: "integra", name: "Integra", description: "Luxus-Reisemobil der Oberklasse", technicalData: { länge: "7,89 – 8,99 m", schlafplätze: "4" } },
    { id: "xtura", name: "Xtura", description: "4×4 Fernreisemobil für Offroad-Abenteuer", technicalData: { länge: "6,88 m", schlafplätze: "2" } }
  ];

  const ModelCard = ({ 
    model 
  }: { 
    model: { id: string; name: string; description: string; technicalData: { länge: string; schlafplätze: string } };
  }) => (
    <Card className="border border-gray-300">
      <AspectRatio ratio={4/3} className="bg-[#E5E7EB]" />
      <CardContent className="p-4">
        <h3 className="text-xl font-semibold mb-2">{model.name}</h3>
        <p className="text-gray-600 text-sm mb-3">{model.description}</p>
        <div className="grid grid-cols-2 gap-2 text-sm mb-4">
          <div>
            <span>Länge:</span> {model.technicalData.länge}
          </div>
          <div>
            <span>Schlafplätze:</span> {model.technicalData.schlafplätze}
          </div>
        </div>
        
        <div className="space-y-2">
          <Button variant="outline" className="w-full" asChild>
            <Link to={`/modelle/${model.id}`}>
              Modell ansehen
            </Link>
          </Button>
          
          <Button variant="outline" className="w-full flex items-center justify-center gap-2" asChild>
            <Link to="/haendler">
              <MapPin size={16} />
              Händler finden
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  const CategorySection = ({ 
    title, 
    description, 
    models, 
    categoryPath 
  }: { 
    title: string; 
    description: string; 
    models: Array<{ id: string; name: string; description: string; technicalData: { länge: string; schlafplätze: string } }>;
    categoryPath: string;
  }) => (
    <section className="mb-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-gray-600 max-w-4xl mx-auto mb-6">{description}</p>
        <Button variant="outline" asChild>
          <Link to={categoryPath}>Alle {title} anzeigen</Link>
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {models.map((model) => (
          <ModelCard key={model.id} model={model} />
        ))}
      </div>
    </section>
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Unsere Wohnmobiltypen im Überblick</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            EURA MOBIL bietet Ihnen für jedes Reisebedürfnis den passenden Wohnmobiltyp – von kompakten Vans bis zu luxuriösen Integrierten. Entdecken Sie unsere Modelle direkt hier oder besuchen Sie die Detailseiten für weitere Informationen.
          </p>
        </section>

        <CategorySection
          title="Vans"
          description="Im neuen Premium Van von EURA MOBIL verwandelt das exklusive Ambiente jeden Moment in einen besonderen Augenblick. Spüren Sie die edlen Materialien und erleben Sie die individuellen Details."
          models={vanModels}
          categoryPath="/wohnmobiltypen/vans"
        />

        <CategorySection
          title="Alkoven-Wohnmobile"
          description="In den Alkoven-Wohnmobilen von EURA MOBIL schafft die optimale Raumnutzung Platz für bis zu 6 Familienmitglieder oder Freunde. Dank intelligenter Leichtbauarchitektur steht bereits in der Gewichtsklasse unter 3,5 Tonnen ein Premium-Reisemobil bereit."
          models={alkovenModels}
          categoryPath="/wohnmobiltypen/alkoven"
        />

        <CategorySection
          title="Teilintegrierte Wohnmobile"
          description="Die Teilintegrierten von EURA MOBIL bieten Flexibilität und Komfort – perfekt für Paare oder Familien, die ihre Freizeit ohne Kompromisse genießen möchten. Mit vielfältigen Grundrissen und modernster Technik."
          models={teilintegrierteModels}
          categoryPath="/wohnmobiltypen/teilintegriert"
        />

        <CategorySection
          title="Integrierte Wohnmobile"
          description="Integrierte Wohnmobile stehen für Luxus und Freiheit. Ob kurze Reisen oder lange Touren: EURA MOBIL bietet mit seinen Integrierten ein mobiles Zuhause mit maximalem Komfort und einzigartigem Raumgefühl."
          models={integrierteModels}
          categoryPath="/wohnmobiltypen/integriert"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default Wohnmobiltypen;
