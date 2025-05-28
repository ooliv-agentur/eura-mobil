
import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SelectableModelCard } from "@/components/comparison/SelectableModelCard";

const Wohnmobiltypen = () => {
  // Van models
  const vanModels = [
    { id: "van-620-eb", name: "Van 620 EB", length: "6,36 m", sleepingPlaces: "2", modelSeries: "van" },
    { id: "van-620-qf", name: "Van 620 QF", length: "6,36 m", sleepingPlaces: "2", modelSeries: "van" }
  ];

  // Alkoven models
  const alkovenModels = [
    { id: "ao-600-sf", name: "AO 600 SF", length: "7,30 m", sleepingPlaces: "4", modelSeries: "activa-one" },
    { id: "ao-660-hb", name: "AO 660 HB", length: "7,84 m", sleepingPlaces: "6", modelSeries: "activa-one" }
  ];

  // Teilintegrierte models
  const teilintegrierteModels = [
    { id: "pt-720-eb", name: "PT 720 EB", length: "7,41 m", sleepingPlaces: "2", modelSeries: "profila-t-fiat" },
    { id: "pt-695-eb", name: "PT 695 EB", length: "6,99 m", sleepingPlaces: "2", modelSeries: "profila-t-fiat" },
    { id: "ct-766-eb", name: "CT 766 EB", length: "7,84 m", sleepingPlaces: "2", modelSeries: "contura" }
  ];

  // Integrierte models
  const integrierteModels = [
    { id: "il-720-eb", name: "IL 720 EB", length: "7,41 m", sleepingPlaces: "2", modelSeries: "integra-line-fiat" },
    { id: "i-890-qb", name: "I 890 QB", length: "8,99 m", sleepingPlaces: "4", modelSeries: "integra" },
    { id: "xt-686-ef", name: "XT 686 EF", length: "6,88 m", sleepingPlaces: "2", modelSeries: "xtura" }
  ];

  const CategorySection = ({ 
    title, 
    description, 
    models, 
    categoryPath 
  }: { 
    title: string; 
    description: string; 
    models: Array<{id: string; name: string; length: string; sleepingPlaces: string; modelSeries: string}>;
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
          <SelectableModelCard
            key={model.id}
            id={model.id}
            name={model.name}
            length={model.length}
            sleepingPlaces={model.sleepingPlaces}
            modelSeries={model.modelSeries}
            showComparison={true}
          />
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
