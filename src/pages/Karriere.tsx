
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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
  }
];

const Karriere = () => {
  const [filterLocation, setFilterLocation] = React.useState("");

  // Filter jobs based on location
  const filteredJobs = filterLocation 
    ? jobs.filter(job => job.location.toLowerCase().includes(filterLocation.toLowerCase())) 
    : jobs;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-6">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">Arbeiten bei Eura Mobil</h1>
        
        <p className="mb-6">
          Werden Sie Teil unseres Teams und gestalten Sie mit uns die Zukunft des mobilen Reisens. 
          Bei Eura Mobil erwarten Sie spannende Aufgaben in einem innovativen Umfeld.
        </p>
        
        {/* Filter section */}
        <div className="bg-gray-100 p-4 rounded-lg mb-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="location">Standort filtern</Label>
              <Input
                id="location"
                type="text"
                placeholder="z.B. Hamburg, Berlin"
                value={filterLocation}
                onChange={(e) => setFilterLocation(e.target.value)}
                className="w-full mt-1"
              />
            </div>
          </div>
        </div>
        
        {/* Job listings */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Offene Stellen</h2>
          
          {filteredJobs.length > 0 ? (
            <div className="grid gap-4">
              {filteredJobs.map((job) => (
                <Card key={job.id}>
                  <CardContent className="p-4">
                    <h3 className="font-bold text-lg">{job.title}</h3>
                    <p className="text-sm text-gray-600">Standort: {job.location}</p>
                    <p className="mt-2">{job.description}</p>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button>Jetzt bewerben</Button>
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
        
        {/* CTA section */}
        <div className="mt-8 p-6 bg-gray-100 rounded-lg text-center">
          <h2 className="text-xl font-semibold mb-2">Noch Fragen?</h2>
          <p className="mb-4">Kontaktieren Sie uns gerne</p>
          <Button variant="outline">Kontakt aufnehmen</Button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Karriere;
