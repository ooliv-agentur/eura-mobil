
import { Link } from "react-router-dom";
import { ArrowRight, Book, Building, Flag, MapPin, CalendarDays } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const Unternehmen = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-6">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">Eura Mobil – Qualität aus Deutschland</h1>
        
        <p className="text-base mb-8">
          Seit über 60 Jahren steht Eura Mobil für höchste Qualität und Innovation im Wohnmobilbau. 
          Als familiengeführtes Unternehmen verbinden wir Tradition mit modernster Technik und setzen 
          Maßstäbe in Sachen Komfort, Zuverlässigkeit und Design.
        </p>
        
        <section className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <Book className="text-blue-600" />
            <h2 className="text-xl font-semibold">Unsere Geschichte</h2>
          </div>
          
          <p className="text-base">
            Die Erfolgsgeschichte von Eura Mobil begann 1959 mit der Vision, Reisefreiheit neu zu 
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
        
        {/* Neue Timeline Sektion */}
        <section className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <CalendarDays className="text-blue-600" />
            <h2 className="text-xl font-semibold">Unsere Historie – seit 1959 auf Tour</h2>
          </div>
          
          <p className="text-base mb-4">
            Von der Wohnwagen-Produktion bis zum Reisemobil-Pionier.
          </p>
          
          <ScrollArea className="h-[320px] w-full rounded-md border p-4">
            <div className="relative">
              {/* Zeitachse (vertikale Linie) */}
              <div className="absolute top-0 bottom-0 left-[18px] w-[2px] bg-blue-200"></div>
              
              {/* Zeitmarken */}
              <div className="space-y-8 relative">
                <TimelineItem year="1959" event="Gründung als Blessing KG" />
                <TimelineItem year="1983" event="Start der Reisemobil-Produktion" />
                <TimelineItem year="2005" event="Übernahme durch Trigano" />
                <TimelineItem year="2016" event="Einführung 10 Jahre Dichtigkeitsgarantie" />
                <TimelineItem year="2019" event="60 Jahre Jubiläum" />
                <TimelineItem year="2024" event="Launch Xtura 4×4 Fernreisemobil" />
              </div>
            </div>
          </ScrollArea>
          
          {/* Optionaler CTA */}
          <div className="mt-6 text-center">
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

// Timeline-Item Komponente
const TimelineItem = ({ year, event }: { year: string; event: string }) => (
  <div className="flex">
    <div className="relative">
      <div className="w-[10px] h-[10px] rounded-full bg-blue-600 border-4 border-blue-100 absolute left-[12px] top-1 -translate-x-1/2"></div>
    </div>
    <div className="ml-8">
      <h3 className="font-bold text-blue-800">{year}</h3>
      <p>{event}</p>
    </div>
  </div>
);

export default Unternehmen;
