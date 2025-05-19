
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
import { Briefcase, Users, BookOpen, Award, Bike, PiggyBank } from "lucide-react";

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
      
      <main className="flex-1 container mx-auto px-4 py-6">
        {/* Hero Section */}
        <div className="py-10 mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Karriere bei EURA MOBIL</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Werde Teil eines starken Teams mit Leidenschaft für mobile Freiheit.
          </p>
        </div>
        
        {/* Why EURA MOBIL Section */}
        <section className="mb-12 py-8 bg-gray-100 rounded-lg">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">Warum EURA MOBIL?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-start">
                <div className="bg-white p-3 rounded-full mr-3">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Familiäres Arbeitsumfeld</h3>
                  <p className="text-sm text-gray-600">Gemeinsam im Team Erfolge feiern</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white p-3 rounded-full mr-3">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Weiterbildung & Entwicklung</h3>
                  <p className="text-sm text-gray-600">Individuelle Förderung und Karrierechancen</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white p-3 rounded-full mr-3">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Mitarbeiter-Events</h3>
                  <p className="text-sm text-gray-600">Gemeinsame Teamaktivitäten</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white p-3 rounded-full mr-3">
                  <Bike className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">E-Bike-Leasing</h3>
                  <p className="text-sm text-gray-600">Umweltfreundlich zur Arbeit</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white p-3 rounded-full mr-3">
                  <PiggyBank className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Betriebliche Altersvorsorge</h3>
                  <p className="text-sm text-gray-600">Für eine sichere Zukunft</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Main CTA Button */}
        <div className="text-center mb-16">
          <Button 
            size="lg" 
            className="px-8 py-6 text-lg"
            onClick={() => window.open("https://recruitingapp-5607.de.umantis.com/Jobs/All", "_blank", "noopener,noreferrer")}
          >
            <Briefcase className="mr-2" />
            Alle Stellenangebote ansehen
          </Button>
        </div>
        
        {/* Optional Example Jobs */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Beispiel-Stellenangebote</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {jobs.slice(0, 2).map((job) => (
              <Card key={job.id} className="border shadow-sm">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-1">{job.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">Standort: {job.location}</p>
                  <p className="mb-4">{job.description}</p>
                </CardContent>
                <CardFooter className="bg-gray-50 px-6 py-4">
                  <Button
                    onClick={() => window.open("https://recruitingapp-5607.de.umantis.com/Jobs/All", "_blank", "noopener,noreferrer")}
                  >
                    Jetzt bewerben
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
        
        {/* Job Filter Section */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Offene Stellen</h2>
            
            <div className="w-64">
              <Label htmlFor="location">Standort filtern</Label>
              <Select 
                value={filterLocation}
                onValueChange={setFilterLocation}
              >
                <SelectTrigger id="location" className="mt-1">
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
          
          {filteredJobs.length > 0 ? (
            <div className="grid gap-4">
              {filteredJobs.map((job) => (
                <Card key={job.id} className="border shadow-sm">
                  <CardContent className="p-4">
                    <div className="md:flex md:justify-between md:items-center">
                      <div>
                        <h3 className="font-bold text-lg">{job.title}</h3>
                        <p className="text-sm text-gray-600">Standort: {job.location}</p>
                      </div>
                      <Button
                        className="mt-4 md:mt-0"
                        onClick={() => window.open("https://recruitingapp-5607.de.umantis.com/Jobs/All", "_blank", "noopener,noreferrer")}
                      >
                        Jetzt bewerben
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <p className="text-center py-8 text-gray-500">
              Aktuell keine Stellen für den ausgewählten Standort verfügbar.
            </p>
          )}
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Karriere;
