import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Unternehmen = () => {
  return (
    <Layout>
      {/* Hero Section - Updated to match homepage font sizes with headline first */}
      <section className="relative bg-[#E5E7EB] h-[60vh] md:h-[70vh] flex items-center justify-center">
        <div className="text-center z-10 px-4 max-w-6xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            EURA MOBIL – Qualität aus Deutschland
          </h1>
          <p className="text-lg md:text-xl">
            Seit über 60 Jahren steht EURA MOBIL für höchste Qualität und Innovation im Wohnmobilbau. 
            Als familiengeführtes Unternehmen verbinden wir Tradition mit modernster Technik.
          </p>
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

        {/* Video Section */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Unser Unternehmen im Video</h2>
            <AspectRatio ratio={16/9} className="bg-gray-200 rounded-lg mb-4">
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-gray-400">Video Placeholder</span>
              </div>
            </AspectRatio>
            <p className="text-gray-600">
              Erfahren Sie mehr über unsere Produktion und Philosophie
            </p>
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
                  year="2024" 
                  event="Eura Mobil führt das 4×4 Fernreisemobil 'Xtura' ein" 
                  description="Hohe Energieautarkie, Smarte Onboard Vernetzung und weltweite Navigation mit Mobilfunknetz unabhängiger Notruffunktion kennzeichnen das innovative Konzept."
                />
                
                <TimelineItem 
                  year="2020" 
                  event="Reisemobil Forum" 
                  description="Das neue Reisemobil Forum wurde wieder aufgebaut und eröffnete zum 01.10.2020 seine Tore für Besucher/innen. Die neue Ausstellungsfläche ist 3.000 qm groß und es finden 50 Fahrzeuge darin Platz."
                />
                
                <TimelineItem 
                  year="2019" 
                  event="60 Jahre Eura Mobil"
                  description="Zum 60-jährigen Jubiläum wurde auf dem Caravan Salon 2019 der neue Luxus-Teilintegrierte Contura und das neue Alkoven-Interieur Beach-Home vorgestellt."
                />
                
                <TimelineItem 
                  year="2017" 
                  event="4. Generation Integra" 
                  description="Die 4. Generation des Integra wird als neues Flaggschiff von Eura Mobil auf dem Caravan Salon 2017 in Düsseldorf vorgestellt."
                />
                
                <TimelineItem 
                  year="2016" 
                  event="10 Jahre Dichtigkeitsgarantie" 
                  description="Die Eura Mobil GmbH feiert 10-jähriges Jubiläum der Klebetechnologie mit einem Geschenk: 10 Jahre Dichtigkeitsgarantie ohne Aufpreis für unsere Reisemobile mit Aufbau!"
                />
                
                <TimelineItem 
                  year="2010" 
                  event="Integra Style" 
                  description="Mit dem neuen Integra Style etabliert sich Eura Mobil in der 3,5t-Klasse der Integrierten."
                />
                
                <TimelineItem 
                  year="2005" 
                  event="Trigano" 
                  description="Übernahme von Eura Mobil durch den internationalen Reisemobilkonzern Trigano."
                />
                
                <TimelineItem 
                  year="2002" 
                  event="Reisemobil Forum" 
                  description="Eröffnung des Reisemobil Forums, des ersten Kommunikations- und Informationszentrums für Reisemobilisten/innen."
                />
                
                <TimelineItem 
                  year="2000" 
                  event="Karmann-Mobil" 
                  description="Übernahme der Marken- und Produktionsrechte von Karmann-Mobil."
                />
                
                <TimelineItem 
                  year="1997" 
                  event="Teilintegrierte: Contura" 
                  description="Komplettierung der Produktpalette durch die Produktionsaufnahme von Teilintegrierten Fahrzeugen (Typ: Contura)."
                />
                
                <TimelineItem 
                  year="1983" 
                  event="Eura Mobil GmbH" 
                  description="Beginn der Reisemobil-Produktion und Umbenennung in Eura Mobil GmbH."
                />
                
                <TimelineItem 
                  year="1969" 
                  event="Eura Caravan" 
                  description="Übernahme und Umfirmierung in Mayr KG (Markenname: Eura Caravan)."
                />
                
                <TimelineItem 
                  year="1959" 
                  event="Blessing KG" 
                  description="Gründung der Blessing KG. Beginn der Wohnwagen-Produktion (Markenname: Blessing Wohnwagen)."
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
    <div className="max-w-md mb-4">
      <AspectRatio ratio={16/9}>
        <div className="placeholder-image w-full h-full rounded-lg"></div>
      </AspectRatio>
    </div>
    <h3 className="font-bold text-xl mb-3">{event}</h3>
    {description && (
      <p className="text-gray-600 text-lg">{description}</p>
    )}
  </div>
);

export default Unternehmen;
