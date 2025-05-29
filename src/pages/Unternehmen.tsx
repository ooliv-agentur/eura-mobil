
import { Link } from "react-router-dom";
import { ArrowRight, Book, Building, Flag, MapPin, CalendarDays, Star } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const Unternehmen = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">EURA MOBIL – Qualität aus Deutschland</h1>
        
        <p className="text-lg text-gray-600 mb-10 max-w-4xl">
          Seit über 60 Jahren steht EURA MOBIL für höchste Qualität und Innovation im Wohnmobilbau. 
          Als familiengeführtes Unternehmen verbinden wir Tradition mit modernster Technik und setzen 
          Maßstäbe in Sachen Komfort, Zuverlässigkeit und Design.
        </p>
        
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <Book className="text-blue-600 w-5 h-5" />
            </div>
            <h2 className="text-2xl font-bold">Unsere Geschichte</h2>
          </div>
          
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
        
        {/* Timeline section */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <CalendarDays className="text-blue-600 w-5 h-5" />
            </div>
            <h2 className="text-2xl font-bold">Unsere Historie – seit 1959 auf Tour</h2>
          </div>
          
          <p className="text-lg text-gray-600 mb-10">
            Von der Wohnwagen-Produktion bis zum Reisemobil-Pionier.
          </p>
          
          {/* Modern vertical timeline */}
          <div className="relative max-w-4xl">
            {/* Vertical line */}
            <div className="absolute left-6 h-full w-0.5 bg-blue-200"></div>
            
            <div className="space-y-12">
              <TimelineItem 
                year="1959" 
                event="Gründung als Blessing KG" 
                milestone={true}
                description="Der Grundstein unserer Erfolgsgeschichte wird in einer kleinen Werkstatt in Rheinland-Pfalz gelegt. Hier beginnt die Vision eines modernen Reiseerlebnisses."
                hasImage={true}
              />
              
              <TimelineItem 
                year="1983" 
                event="Start der Reisemobil-Produktion" 
                description="Nach erfolgreichen Jahren in der Wohnwagen-Produktion wagen wir den Schritt zum Reisemobil und setzen neue Maßstäbe in der Branche."
              />
              
              <TimelineItem 
                year="2005" 
                event="Übernahme durch Trigano" 
                description="Ein wichtiger Meilenstein für die internationale Expansion: Die Übernahme durch die Trigano-Gruppe eröffnet neue Märkte und Perspektiven."
              />
              
              <TimelineItem 
                year="2016" 
                event="Einführung 10 Jahre Dichtigkeitsgarantie" 
                description="Als einer der ersten Hersteller bieten wir eine 10-Jahres-Garantie auf die Dichtigkeit unserer Fahrzeuge – ein Zeichen unseres Qualitätsversprechens."
              />
              
              <TimelineItem 
                year="2019" 
                event="60 Jahre Jubiläum"
                milestone={true} 
                description="Sechs Jahrzehnte Innovation und Leidenschaft für Reisemobile feiern wir mit besonderen Jubiläumsmodellen und Veranstaltungen."
              />
              
              <TimelineItem 
                year="2024" 
                event="Launch Xtura 4×4 Fernreisemobil" 
                milestone={true}
                description="Mit dem neuen Xtura 4×4 revolutionieren wir den Markt für Fernreisemobile und setzen auf kompromisslose Geländetauglichkeit bei maximaler Autarkie."
                hasImage={true}
              />
            </div>
          </div>
          
          {/* CTA */}
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
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <MapPin className="text-blue-600 w-5 h-5" />
            </div>
            <h2 className="text-2xl font-bold">Unser Standort in Sprendlingen</h2>
          </div>
          
          <p className="text-gray-600 mb-6 max-w-3xl">
            Unser Hauptsitz befindet sich im beschaulichen Sprendlingen in Rheinland-Pfalz. Hier 
            vereinen wir modernste Produktionstechnologien mit deutscher Handwerkskunst. Auf einer 
            Fläche von über 35.000 m² entstehen unsere hochwertigen Reisemobile.
          </p>
          
          {/* Map placeholder */}
          <Card className="mb-4 max-w-2xl">
            <CardContent className="p-0">
              <div className="w-full h-64 bg-gray-100 flex items-center justify-center rounded-md">
                <Building size={48} className="text-gray-400" />
              </div>
            </CardContent>
          </Card>
          <p className="text-sm text-gray-500 mb-2">
            Eura Mobil GmbH, Kreuznacher Straße 78, 55576 Sprendlingen
          </p>
        </section>
        
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <Flag className="text-blue-600 w-5 h-5" />
            </div>
            <h2 className="text-2xl font-bold">Unsere Mission</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <span className="text-gray-600">
                  Höchste Qualitätsstandards in der Fertigung und Materialauswahl
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <span className="text-gray-600">
                  Nachhaltige Produktion und ressourcenschonende Technologien
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <span className="text-gray-600">
                  Innovation als Treiber für mehr Komfort und Funktionalität
                </span>
              </li>
            </ul>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <span className="text-gray-600">
                  Kundenservice, der über den Kauf hinausgeht
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
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

// Timeline Component with improved styling
const TimelineItem = ({ 
  year, 
  event, 
  milestone = false,
  description,
  hasImage = false
}: { 
  year: string; 
  event: string;
  milestone?: boolean;
  description?: string;
  hasImage?: boolean;
}) => (
  <div className="relative pl-16">
    {/* Year badge */}
    <div className="absolute left-0 flex flex-col items-center">
      <div className={`w-12 h-12 rounded-full flex items-center justify-center z-10 shadow-md ${
        milestone ? 'bg-blue-600' : 'bg-white border-2 border-blue-200'
      }`}>
        <span className={`text-sm font-bold ${milestone ? 'text-white' : 'text-blue-800'}`}>
          {year}
        </span>
      </div>
      {/* Icon for milestone */}
      {milestone && (
        <div className="absolute -top-1 -right-1">
          <Badge variant="secondary" className="bg-yellow-100 border-yellow-200 p-1">
            <Star className="h-3 w-3 text-yellow-600" />
          </Badge>
        </div>
      )}
    </div>
    
    {/* Content */}
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
      <h3 className="font-bold text-xl text-blue-800 mb-2">{event}</h3>
      {description && (
        <p className="text-gray-600 leading-relaxed">{description}</p>
      )}
      
      {/* Optional image placeholder for certain years */}
      {hasImage && (
        <div className="mt-4">
          <Card className="overflow-hidden border-blue-100">
            <CardContent className="p-0">
              <div className="bg-blue-50 h-32 flex items-center justify-center">
                <span className="text-blue-400 text-sm">Historisches Bildmaterial {year}</span>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  </div>
);

export default Unternehmen;
