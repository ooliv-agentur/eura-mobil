
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const Unternehmen = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section with placeholder */}
        <div className="mb-12">
          <div className="w-full h-64 md:h-80 bg-gray-100 rounded-lg flex items-center justify-center mb-8">
            <span className="text-gray-400 text-lg">Unternehmen Hero Image</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-6">EURA MOBIL – Qualität aus Deutschland</h1>
          
          <p className="text-lg text-gray-600 mb-10 max-w-4xl">
            Seit über 60 Jahren steht EURA MOBIL für höchste Qualität und Innovation im Wohnmobilbau. 
            Als familiengeführtes Unternehmen verbinden wir Tradition mit modernster Technik und setzen 
            Maßstäbe in Sachen Komfort, Zuverlässigkeit und Design.
          </p>
        </div>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Unsere Geschichte</h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-4">
              Die Erfolgsgeschichte von EURA MOBIL begann 1959 mit der Vision, Reisefreiheit neu zu 
              definieren. Was in einer kleinen Werkstatt in Rheinland-Pfalz begann, entwickelte sich zu 
              einem der führenden Wohnmobilhersteller Europas. Durch kontinuierliche Innovation und 
              kompromisslose Qualität haben wir uns einen hervorragenden Ruf in der Branche erarbeitet.
            </p>
            <p className="text-gray-600">
              Heute beschäftigen wir über 300 Mitarbeiter, die unsere Leidenschaft für Qualität und 
              Perfektion teilen. Jedes Fahrzeug wird mit größter Sorgfalt hergestellt und durchläuft 
              strenge Qualitätskontrollen, bevor es unser Werk verlässt.
            </p>
          </div>
        </section>
        
        {/* Timeline section with placeholder styling */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Unsere Historie – seit 1959 auf Tour</h2>
          
          <p className="text-lg text-gray-600 mb-10">
            Von der Wohnwagen-Produktion bis zum Reisemobil-Pionier.
          </p>
          
          {/* Simplified timeline */}
          <div className="space-y-8">
            <TimelineItem 
              year="1959" 
              event="Gründung als Blessing KG" 
              description="Der Grundstein unserer Erfolgsgeschichte wird in einer kleinen Werkstatt in Rheinland-Pfalz gelegt."
            />
            
            <TimelineItem 
              year="1983" 
              event="Start der Reisemobil-Produktion" 
              description="Nach erfolgreichen Jahren in der Wohnwagen-Produktion wagen wir den Schritt zum Reisemobil."
            />
            
            <TimelineItem 
              year="2005" 
              event="Übernahme durch Trigano" 
              description="Ein wichtiger Meilenstein für die internationale Expansion."
            />
            
            <TimelineItem 
              year="2016" 
              event="Einführung 10 Jahre Dichtigkeitsgarantie" 
              description="Als einer der ersten Hersteller bieten wir eine 10-Jahres-Garantie auf die Dichtigkeit."
            />
            
            <TimelineItem 
              year="2019" 
              event="60 Jahre Jubiläum"
              description="Sechs Jahrzehnte Innovation und Leidenschaft für Reisemobile."
            />
            
            <TimelineItem 
              year="2024" 
              event="Launch Xtura 4×4 Fernreisemobil" 
              description="Mit dem neuen Xtura 4×4 revolutionieren wir den Markt für Fernreisemobile."
            />
          </div>
          
          <div className="mt-12 text-center">
            <Button className="gap-2" asChild>
              <Link to="/werksfuehrung">
                Zur Werksführung
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Unser Standort in Sprendlingen</h2>
          
          <p className="text-gray-600 mb-6 max-w-3xl">
            Unser Hauptsitz befindet sich im beschaulichen Sprendlingen in Rheinland-Pfalz. Hier 
            vereinen wir modernste Produktionstechnologien mit deutscher Handwerkskunst.
          </p>
          
          {/* Map placeholder */}
          <Card className="mb-4 max-w-2xl">
            <CardContent className="p-6">
              <Skeleton className="w-full h-64" />
              <p className="text-center text-gray-400 mt-4">Standort Karte</p>
            </CardContent>
          </Card>
          <p className="text-sm text-gray-500 mb-2">
            Eura Mobil GmbH, Kreuznacher Straße 78, 55576 Sprendlingen
          </p>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Unsere Mission</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2"></div>
                <span className="text-gray-600">
                  Höchste Qualitätsstandards in der Fertigung und Materialauswahl
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2"></div>
                <span className="text-gray-600">
                  Nachhaltige Produktion und ressourcenschonende Technologien
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2"></div>
                <span className="text-gray-600">
                  Innovation als Treiber für mehr Komfort und Funktionalität
                </span>
              </li>
            </ul>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2"></div>
                <span className="text-gray-600">
                  Kundenservice, der über den Kauf hinausgeht
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2"></div>
                <span className="text-gray-600">
                  Förderung der Campingkultur in Deutschland und Europa
                </span>
              </li>
            </ul>
          </div>
        </section>
        
        {/* CTA Section */}
        <div className="text-center">
          <Button size="lg" className="gap-2" asChild>
            <Link to="/modelle">
              Mehr über unsere Modelle erfahren
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

// Simplified Timeline Component
const TimelineItem = ({ 
  year, 
  event, 
  description
}: { 
  year: string; 
  event: string;
  description?: string;
}) => (
  <div className="border-l-2 border-gray-200 pl-6 pb-8">
    <div className="flex items-center gap-4 mb-2">
      <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">
        {year}
      </span>
    </div>
    <h3 className="font-bold text-lg mb-2">{event}</h3>
    {description && (
      <p className="text-gray-600">{description}</p>
    )}
  </div>
);

export default Unternehmen;
