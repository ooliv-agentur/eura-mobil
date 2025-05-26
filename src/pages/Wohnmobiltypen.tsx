
import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Wohnmobiltypen = () => {
  const wohnmobiltypen = [
    {
      id: "vans",
      title: "Vans",
      description: "Im neuen Premium Van von EURA MOBIL verwandelt das exklusive Ambiente jeden Moment in einen besonderen Augenblick. Spüren Sie die edlen Materialien und erleben Sie die individuellen Details, die den EURA MOBIL Van zu Ihrem ganz persönlichen mobilen Zuhause machen.",
      buttonText: "Jetzt Vans entdecken",
      linkTo: "/wohnmobiltypen/vans",
    },
    {
      id: "alkoven",
      title: "Alkoven-Wohnmobile",
      description: "In den Alkoven-Wohnmobilen von EURA MOBIL schafft die optimale Raumnutzung Platz für bis zu 6 Familienmitglieder oder Freunde. Dank intelligenter Leichtbauarchitektur steht bereits in der Gewichtsklasse unter 3,5 Tonnen ein Premium-Reisemobil bereit.",
      buttonText: "Alkoven-Modelle anzeigen",
      linkTo: "/modelle?typ=alkoven",
    },
    {
      id: "teilintegriert",
      title: "Teilintegrierte Wohnmobile",
      description: "Die Teilintegrierten von EURA MOBIL bieten Flexibilität und Komfort – perfekt für Paare oder Familien, die ihre Freizeit ohne Kompromisse genießen möchten. Mit vielfältigen Grundrissen und modernster Technik.",
      buttonText: "Teilintegrierte entdecken",
      linkTo: "/modelle?typ=teilintegriert",
    },
    {
      id: "integriert",
      title: "Integrierte Wohnmobile",
      description: "Integrierte Wohnmobile stehen für Luxus und Freiheit. Ob kurze Reisen oder lange Touren: EURA MOBIL bietet mit seinen Integrierten ein mobiles Zuhause mit maximalem Komfort und einzigartigem Raumgefühl.",
      buttonText: "Integrierte anzeigen",
      linkTo: "/modelle?typ=integriert",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Unsere Wohnmobiltypen im Überblick</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            EURA MOBIL bietet Ihnen für jedes Reisebedürfnis den passenden Wohnmobiltyp – von kompakten Vans bis zu luxuriösen Integrierten. Hier erfahren Sie, was die einzelnen Kategorien auszeichnet und welche Modelle zu Ihnen passen könnten.
          </p>
        </section>
        
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {wohnmobiltypen.map((typ) => (
            <Card key={typ.id} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="aspect-video bg-gray-100 mb-4 flex items-center justify-center">
                  {/* Empty placeholder box - no icons or images as requested */}
                </div>
                <h2 className="text-2xl font-bold mb-3">{typ.title}</h2>
                <p className="text-gray-600 mb-6">{typ.description}</p>
                <Button className="w-full sm:w-auto" asChild>
                  <Link to={typ.linkTo}>{typ.buttonText}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Wohnmobiltypen;
