
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const Unternehmen = () => {
  return (
    <Layout>
      {/* Hero Section - matching other pages */}
      <section className="relative bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="placeholder-image w-full h-64 md:h-80 mb-8 flex items-center justify-center">
              <span className="text-gray-400 text-lg">Unternehmen Hero Bild</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              EURA MOBIL – Qualität aus Deutschland
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Seit über 60 Jahren steht EURA MOBIL für höchste Qualität und Innovation im Wohnmobilbau. 
              Als familiengeführtes Unternehmen verbinden wir Tradition mit modernster Technik.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Geschichte Section */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Unsere Geschichte</h2>
            <div className="prose prose-lg max-w-none text-center">
              <p className="text-gray-600 mb-6 text-lg">
                Die Erfolgsgeschichte von EURA MOBIL begann 1959 mit der Vision, Reisefreiheit neu zu 
                definieren. Was in einer kleinen Werkstatt in Rheinland-Pfalz begann, entwickelte sich zu 
                einem der führenden Wohnmobilhersteller Europas.
              </p>
              <p className="text-gray-600 text-lg">
                Heute beschäftigen wir über 300 Mitarbeiter, die unsere Leidenschaft für Qualität und 
                Perfektion teilen. Jedes Fahrzeug wird mit größter Sorgfalt hergestellt und durchläuft 
                strenge Qualitätskontrollen.
              </p>
            </div>
          </div>
        </section>
        
        {/* Timeline Section */}
        <section className="mb-16 bg-gray-50 py-16 -mx-4">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-4 text-center">Unsere Historie</h2>
              <p className="text-xl text-gray-600 mb-12 text-center">
                Von der Wohnwagen-Produktion bis zum Reisemobil-Pionier – seit 1959 auf Tour.
              </p>
              
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
                <Button size="lg" className="gap-2" asChild>
                  <Link to="/werksfuehrung">
                    Zur Werksführung
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Standort Section */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Unser Standort in Sprendlingen</h2>
            <p className="text-gray-600 mb-8 text-lg">
              Unser Hauptsitz befindet sich im beschaulichen Sprendlingen in Rheinland-Pfalz. Hier 
              vereinen wir modernste Produktionstechnologien mit deutscher Handwerkskunst.
            </p>
            
            <Card className="max-w-2xl mx-auto mb-6">
              <CardContent className="p-8">
                <Skeleton className="w-full h-64 mb-4" />
                <p className="text-center text-gray-400">Standort Karte</p>
              </CardContent>
            </Card>
            
            <p className="text-sm text-gray-500">
              Eura Mobil GmbH, Kreuznacher Straße 78, 55576 Sprendlingen
            </p>
          </div>
        </section>
        
        {/* Mission Section */}
        <section className="mb-16 bg-gray-50 py-16 -mx-4">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Unsere Mission</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">
                      Höchste Qualitätsstandards in der Fertigung und Materialauswahl
                    </span>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">
                      Nachhaltige Produktion und ressourcenschonende Technologien
                    </span>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">
                      Innovation als Treiber für mehr Komfort und Funktionalität
                    </span>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">
                      Kundenservice, der über den Kauf hinausgeht
                    </span>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">
                      Förderung der Campingkultur in Deutschland und Europa
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="text-center">
          <Button size="lg" className="gap-2" asChild>
            <Link to="/modelle">
              Mehr über unsere Modelle erfahren
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </section>
      </div>
    </Layout>
  );
};

// Timeline Component
const TimelineItem = ({ 
  year, 
  event, 
  description
}: { 
  year: string; 
  event: string;
  description?: string;
}) => (
  <div className="border-l-4 border-gray-200 pl-8 pb-8 relative">
    <div className="absolute -left-3 top-0 w-6 h-6 bg-white border-4 border-gray-200 rounded-full"></div>
    <div className="mb-3">
      <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
        {year}
      </span>
    </div>
    <h3 className="font-bold text-xl mb-3">{event}</h3>
    {description && (
      <p className="text-gray-600 text-lg">{description}</p>
    )}
  </div>
);

export default Unternehmen;
