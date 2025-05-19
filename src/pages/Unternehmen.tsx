
import { Link } from "react-router-dom";
import { ArrowRight, Book, Building, Flag, MapPin, CalendarDays, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";

const Unternehmen = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-6">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">EURA MOBIL – Qualität aus Deutschland</h1>
        
        <p className="text-base mb-8">
          Seit über 60 Jahren steht EURA MOBIL für höchste Qualität und Innovation im Wohnmobilbau. 
          Als familiengeführtes Unternehmen verbinden wir Tradition mit modernster Technik und setzen 
          Maßstäbe in Sachen Komfort, Zuverlässigkeit und Design.
        </p>
        
        <section className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <Book className="text-blue-600" />
            <h2 className="text-xl font-semibold">Unsere Geschichte</h2>
          </div>
          
          <p className="text-base">
            Die Erfolgsgeschichte von EURA MOBIL begann 1959 mit der Vision, Reisefreiheit neu zu 
            definieren. Was in einer kleinen Werkstatt in Rheinland-Pfalz begann, entwickelte sich zu 
            einem der führenden Wohnmobilhersteller Europas. Durch kontinuierliche Innovation und 
            kompromisslose Qualität haben wir uns einen hervorragenden Ruf in der Branche erarbeitet.
          </p>
          <p className="text-base mt-2">
            Heute beschäftigen wir über 300 Mitarbeiter, die unsere Leidenschaft für Qualität und 
            Perfektion teilen. Jedes Fahrzeug wird mit größter Sorgfalt hergestellt und durchläuft 
            strenge Qualitätskontrollen, bevor es unser Werk verlässt.
          </p>
        </section>
        
        {/* New Timeline section */}
        <section className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <CalendarDays className="text-blue-600" />
            <h2 className="text-xl font-semibold">Unsere Historie – seit 1959 auf Tour</h2>
          </div>
          
          <p className="text-base mb-8">
            Von der Wohnwagen-Produktion bis zum Reisemobil-Pionier.
          </p>
          
          {/* Modern vertical timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 h-full w-0.5 bg-blue-100"></div>
            
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
          
          {/* Optional CTA */}
          <div className="mt-12 text-center">
            <Button className="gap-2" asChild>
              <Link to="/werksbesichtigung">
                Zur Werksführung
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
        
        <section className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <MapPin className="text-blue-600" />
            <h2 className="text-xl font-semibold">Unser Standort in Sprendlingen</h2>
          </div>
          
          <p className="text-base mb-4">
            Unser Hauptsitz befindet sich im beschaulichen Sprendlingen in Rheinland-Pfalz. Hier 
            vereinen wir modernste Produktionstechnologien mit deutscher Handwerkskunst. Auf einer 
            Fläche von über 35.000 m² entstehen unsere hochwertigen Reisemobile.
          </p>
          
          {/* Map placeholder */}
          <div className="w-full h-64 bg-gray-200 flex items-center justify-center mb-2 rounded-md">
            <Building size={48} className="text-gray-400" />
          </div>
          <p className="text-sm text-gray-500 mb-2">
            Eura Mobil GmbH, Kreuznacher Straße 78, 55576 Sprendlingen
          </p>
        </section>
        
        <section className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <Flag className="text-blue-600" />
            <h2 className="text-xl font-semibold">Unsere Mission</h2>
          </div>
          
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Höchste Qualitätsstandards in der Fertigung und Materialauswahl
            </li>
            <li>
              Nachhaltige Produktion und ressourcenschonende Technologien
            </li>
            <li>
              Innovation als Treiber für mehr Komfort und Funktionalität
            </li>
            <li>
              Kundenservice, der über den Kauf hinausgeht
            </li>
            <li>
              Förderung der Campingkultur in Deutschland und Europa
            </li>
          </ul>
        </section>
        
        {/* CTA Section */}
        <div className="text-center mb-10">
          <Button className="gap-2" asChild>
            <Link to="/modelle">
              Mehr über unsere Modelle erfahren
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

// Modern Timeline Component
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
    {/* Year badge with dot */}
    <div className="absolute left-0 flex flex-col items-center">
      <div className={`w-12 h-12 rounded-full flex items-center justify-center z-10 ${milestone ? 'bg-blue-600' : 'bg-blue-100'}`}>
        <span className={`text-sm font-bold ${milestone ? 'text-white' : 'text-blue-800'}`}>{year}</span>
      </div>
      {/* Icon for milestone */}
      {milestone && (
        <div className="absolute -top-1 -right-1">
          <Badge variant="secondary" className="bg-blue-50 border-blue-200">
            <Star className="h-3 w-3 text-blue-600 mr-0.5" />
          </Badge>
        </div>
      )}
    </div>
    
    {/* Content */}
    <div>
      <h3 className="font-bold text-lg text-blue-800">{event}</h3>
      {description && (
        <p className="mt-1 text-gray-600">{description}</p>
      )}
      
      {/* Optional image placeholder for certain years */}
      {hasImage && (
        <div className="mt-3">
          <Card className="overflow-hidden border-blue-100">
            <CardContent className="p-0">
              {/* Image placeholder */}
              <div className="bg-blue-50 h-40 flex items-center justify-center">
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
