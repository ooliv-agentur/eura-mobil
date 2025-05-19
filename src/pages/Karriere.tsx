
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { ExternalLink } from "lucide-react";
import { 
  Users,
  ShieldCheck,
  GraduationCap,
  CalendarDays,
  PiggyBank,
  Bike,
  BadgePercent
} from "lucide-react";

// Mock job listings data
const jobs = [
  {
    id: 1,
    title: "Fahrzeugmechaniker (m/w/d)",
    location: "Hamburg",
    description: "Als Fahrzeugmechaniker bei Eura Mobil sind Sie verantwortlich für die Wartung und Reparatur unserer hochwertigen Wohnmobile."
  },
  {
    id: 2,
    title: "Vertriebsmitarbeiter (m/w/d)",
    location: "München",
    description: "Verstärken Sie unser Vertriebsteam und beraten Sie unsere Kunden beim Kauf ihres Traumwohnmobils."
  },
  {
    id: 3,
    title: "Marketing Manager (m/w/d)",
    location: "Berlin",
    description: "Entwickeln und implementieren Sie Marketingstrategien für unsere Premium-Wohnmobile und stärken Sie die Marke Eura Mobil."
  },
  {
    id: 4,
    title: "Produktionshelfer (m/w/d)",
    location: "Köln",
    description: "Unterstützen Sie unser Produktionsteam bei der Herstellung unserer qualitativ hochwertigen Wohnmobile."
  },
  {
    id: 5,
    title: "Kundendienstmitarbeiter (m/w/d)",
    location: "Hamburg",
    description: "Als Teil unseres Serviceteams sorgen Sie für eine erstklassige Betreuung unserer Kunden nach dem Kauf."
  },
  {
    id: 6,
    title: "Produktmanager (m/w/d)",
    location: "Sprendlingen",
    description: "Gestalten Sie die Zukunft unserer Produktlinie und entwickeln Sie innovative Lösungen für unsere Wohnmobile."
  },
  {
    id: 7,
    title: "Fahrzeugmonteur (m/w/d)",
    location: "Sprendlingen",
    description: "Montieren Sie mit handwerklichem Geschick und Präzision unsere Premium-Wohnmobile in unserem Hauptwerk."
  }
];

// Besonders gesuchte Jobs (für den Featured-Abschnitt)
const featuredJobs = [
  {
    id: 7,
    title: "Fahrzeugmonteur (m/w/d)",
    location: "Sprendlingen",
    description: "Für unser Hauptwerk suchen wir erfahrene Monteure mit Leidenschaft für Präzision und Qualität. Werden Sie Teil unseres Produktionsteams und helfen Sie uns, erstklassige Wohnmobile zu bauen."
  },
  {
    id: 1,
    title: "Fahrzeugmechaniker (m/w/d)",
    location: "Hamburg",
    description: "Unterstützen Sie unser Service-Team mit Ihrem technischen Know-how und sorgen Sie für die einwandfreie Funktionalität unserer Fahrzeuge. Wir bieten ein modernes Arbeitsumfeld mit attraktiven Konditionen."
  }
];

// Vorteile bei EURA MOBIL mit passenden Icons
const benefits = [
  {
    icon: <Users size={24} />,
    title: "Familiäres Arbeitsumfeld",
    description: "Wir pflegen eine offene, wertschätzende Unternehmenskultur mit flachen Hierarchien."
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "Sicherer Arbeitgeber mit Zukunft",
    description: "Als Teil der TRIGANO-Gruppe bieten wir langfristige Perspektiven in einer wachsenden Branche."
  },
  {
    icon: <GraduationCap size={24} />,
    title: "Weiterbildung & Entwicklung",
    description: "Wir fördern Ihre persönliche und berufliche Entwicklung durch maßgeschneiderte Fortbildungsangebote."
  },
  {
    icon: <CalendarDays size={24} />,
    title: "Mitarbeiter-Events",
    description: "Regelmäßige Teamevents und Betriebsfeiern stärken den Zusammenhalt und sorgen für Ausgleich."
  },
  {
    icon: <PiggyBank size={24} />,
    title: "Betriebliche Altersvorsorge",
    description: "Wir unterstützen Sie bei der finanziellen Absicherung Ihrer Zukunft."
  },
  {
    icon: <Bike size={24} />,
    title: "E-Bike-Leasing",
    description: "Profitieren Sie von unserem attraktiven Leasingmodell für E-Bikes und Fahrräder."
  },
  {
    icon: <BadgePercent size={24} />,
    title: "Vergünstigungen über Eura Mobil Card",
    description: "Genießen Sie exklusive Rabatte bei ausgewählten Partnern und Dienstleistern."
  }
];

const Karriere = () => {
  const [filterLocation, setFilterLocation] = React.useState("all");
  
  // Extrahiere alle eindeutigen Standorte aus den Jobs
  const uniqueLocations = Array.from(new Set(jobs.map(job => job.location))).sort();

  // Filter jobs based on location
  const filteredJobs = filterLocation === "all" 
    ? jobs 
    : jobs.filter(job => job.location === filterLocation);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        {/* Hero / Einleitung */}
        <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Karriere bei EURA MOBIL</h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto">
              Werde Teil eines starken Teams mit Leidenschaft für mobile Freiheit.
            </p>
          </div>
        </section>
        
        {/* Warum EURA MOBIL */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Warum EURA MOBIL?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="shrink-0 text-blue-600 mt-1">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Aktuell besonders gesucht */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Aktuell besonders gesucht</h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {featuredJobs.map((job) => (
                <Card key={job.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl mb-1">{job.title}</h3>
                    <p className="text-blue-600 font-medium mb-3">Standort: {job.location}</p>
                    <p className="text-gray-700">{job.description}</p>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <Button 
                      as="a" 
                      href="https://recruitingapp-5607.de.umantis.com/Jobs/All" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full"
                    >
                      Jetzt bewerben
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Zentraler Button für alle Stellenangebote */}
        <section className="py-12 bg-gray-50 text-center">
          <div className="container mx-auto px-4">
            <Button 
              size="lg"
              as="a" 
              href="https://recruitingapp-5607.de.umantis.com/Jobs/All" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 font-medium px-8 py-6 text-lg"
            >
              Alle Stellenangebote ansehen
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
        
        {/* Alle offenen Stellen */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-10">Offene Stellen</h2>
            
            {/* Filter section */}
            <div className="bg-gray-100 p-4 rounded-lg mb-6 max-w-md">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="location">Standort filtern</Label>
                  <Select 
                    value={filterLocation}
                    onValueChange={setFilterLocation}
                  >
                    <SelectTrigger id="location" className="w-full mt-1">
                      <SelectValue placeholder="Alle Standorte" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Alle Standorte</SelectItem>
                      {uniqueLocations.map((location) => (
                        <SelectItem key={location} value={location}>
                          {location}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            
            {/* Job listings */}
            {filteredJobs.length > 0 ? (
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {filteredJobs.map((job) => (
                  <Card key={job.id}>
                    <CardContent className="p-4">
                      <h3 className="font-bold text-lg">{job.title}</h3>
                      <p className="text-sm text-blue-600">Standort: {job.location}</p>
                      <p className="mt-2">{job.description}</p>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button 
                        as="a" 
                        href="https://recruitingapp-5607.de.umantis.com/Jobs/All" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Jetzt bewerben
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            ) : (
              <p className="text-center py-8 text-gray-500">
                Aktuell keine Stellen für den ausgewählten Standort verfügbar.
              </p>
            )}
          </div>
        </section>
        
        {/* Kontaktmöglichkeit */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 text-center max-w-2xl">
            <h2 className="text-2xl font-bold mb-6">Fragen zur Bewerbung?</h2>
            <p className="mb-8">
              Unser HR-Team hilft Ihnen gerne bei allen Fragen rund um Ihre Bewerbung und Karrieremöglichkeiten bei EURA MOBIL.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-md inline-block">
              <p className="font-medium text-lg mb-2">Kontakt HR-Abteilung:</p>
              <p><a href="mailto:karriere@euramobil.de" className="text-blue-600 hover:underline">karriere@euramobil.de</a></p>
              <p><a href="tel:+4967071791000" className="text-blue-600 hover:underline">+49 (0) 6707 / 17 91 - 000</a></p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Karriere;
