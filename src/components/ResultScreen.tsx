
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface ResultScreenProps {
  answers: string[];
  onRestart: () => void;
}

// Real Eura Mobil model data
const euraMobilModels = [
  {
    id: "activa-one",
    name: "Activa One",
    image: "https://placehold.co/300x200/e2e8f0/1e293b?text=Activa+One",
    description: "Kompaktes Einsteigermodell für 2-4 Personen, ideal für den Sommerurlaub.",
    features: ["Kompakte Größe", "Gute Raumnutzung", "Einsteigerfreundlich"],
    recommendations: {
      persons: ["1–2", "3–4"],
      seasons: ["Sommer", "Ganzjährig"],
      priorities: ["Kompakte Größe", "Preis-Leistung"]
    }
  },
  {
    id: "profila-rs",
    name: "Profila RS",
    image: "https://placehold.co/300x200/e2e8f0/1e293b?text=Profila+RS",
    description: "Vielseitiger Camper mit optimaler Balance zwischen Komfort und Mobilität.",
    features: ["Großzügiger Wohnraum", "Separate Dusche", "Flexible Schlafplätze"],
    recommendations: {
      persons: ["3–4"],
      seasons: ["Ganzjährig"],
      priorities: ["Stauraum", "Komfort"]
    }
  },
  {
    id: "integra-line",
    name: "Integra Line",
    image: "https://placehold.co/300x200/e2e8f0/1e293b?text=Integra+Line",
    description: "Luxuriöser Integralwohnmobil mit gehobener Ausstattung und maximaler Raumnutzung.",
    features: ["Großzügiges Raumgefühl", "Premiumausstattung", "Hervorragende Isolierung"],
    recommendations: {
      persons: ["3–4", "5+"],
      seasons: ["Ganzjährig", "Winter"],
      priorities: ["Komfort", "Stauraum"]
    }
  },
  {
    id: "contura",
    name: "Contura",
    image: "https://placehold.co/300x200/e2e8f0/1e293b?text=Contura",
    description: "Hochwertiges Integralmobil mit elegantem Design und luxuriöser Ausstattung.",
    features: ["Exklusives Design", "Hochwertige Materialien", "Premium-Komfort"],
    recommendations: {
      persons: ["3–4", "5+"],
      seasons: ["Ganzjährig", "Winter"],
      priorities: ["Komfort"]
    }
  },
  {
    id: "xtura",
    name: "Xtura",
    image: "https://placehold.co/300x200/e2e8f0/1e293b?text=Xtura",
    description: "Der neue Premium-Integralwohnmobil für Familien mit höchsten Ansprüchen.",
    features: ["Maximaler Wohnkomfort", "Innovative Technologien", "Großzügiges Platzangebot"],
    recommendations: {
      persons: ["5+"],
      seasons: ["Ganzjährig", "Winter"],
      priorities: ["Komfort", "Stauraum"]
    }
  }
];

const ResultScreen = ({ answers, onRestart }: ResultScreenProps) => {
  // Match models to user answers with recommendation logic
  const getRecommendedModels = () => {
    if (!answers || answers.length < 3) {
      return euraMobilModels; // Return all models if answers are incomplete
    }
    
    const [personCount, season, priority] = answers;
    
    // Filter models based on user selections
    let recommendedModels = euraMobilModels.filter(model => {
      const personMatch = model.recommendations.persons.includes(personCount);
      const seasonMatch = model.recommendations.seasons.includes(season);
      const priorityMatch = model.recommendations.priorities.includes(priority);
      
      // Model should match at least 2 of the 3 criteria to be recommended
      const matchCount = [personMatch, seasonMatch, priorityMatch].filter(Boolean).length;
      return matchCount >= 2;
    });
    
    // Fallback if no models match the criteria
    if (recommendedModels.length === 0) {
      // Find models that match at least one criterion
      recommendedModels = euraMobilModels.filter(model => {
        return model.recommendations.persons.includes(personCount) || 
               model.recommendations.seasons.includes(season) || 
               model.recommendations.priorities.includes(priority);
      });
      
      // If still no matches, return default recommendation
      if (recommendedModels.length === 0) {
        return [euraMobilModels[0]]; // Activa One as default
      }
    }
    
    return recommendedModels;
  };
  
  const recommendedModels = getRecommendedModels();
  
  console.log("User answers:", answers);
  console.log("Recommended models:", recommendedModels.map(m => m.name));

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-center">Unsere Empfehlungen für Sie</h1>
      
      <div className="flex flex-col gap-4 my-6">
        {recommendedModels.length > 0 ? (
          recommendedModels.map((model) => (
            <Card key={model.id}>
              <CardHeader className="p-4 pb-0">
                <CardTitle className="text-lg">{model.name}</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <img
                  src={model.image}
                  alt={model.name}
                  className="w-full h-auto rounded-md mb-2"
                />
                <p className="text-sm mb-3">{model.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {model.features.map((feature, i) => (
                    <span key={i} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                      {feature}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2 flex-wrap p-4 pt-0">
                <Button size="sm" variant="outline" asChild>
                  <Link to={`/modelle/${model.id}`}>Modell ansehen</Link>
                </Button>
                <Button size="sm" variant="outline">Händler finden</Button>
              </CardFooter>
            </Card>
          ))
        ) : (
          <div className="text-center p-6">
            <p className="text-gray-600">
              Leider konnten wir keine passenden Modelle finden. Bitte versuchen Sie es mit anderen Kriterien.
            </p>
          </div>
        )}
      </div>

      <Button onClick={onRestart} className="w-full mt-4">
        Neue Beratung starten
      </Button>
    </div>
  );
};

export default ResultScreen;
