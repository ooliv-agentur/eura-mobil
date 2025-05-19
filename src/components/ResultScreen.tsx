
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface ResultScreenProps {
  answers: string[];
  onRestart: () => void;
}

// Sample data for demonstration
const modelData = [
  {
    id: 1,
    name: "Kompakt Camper X1",
    image: "https://placehold.co/300x200/e2e8f0/1e293b?text=Wohnmobil+1",
    description: "Perfekt für Paare, kompakte Größe, ideal für Sommerreisen.",
  },
  {
    id: 2,
    name: "Family Traveller Plus",
    image: "https://placehold.co/300x200/e2e8f0/1e293b?text=Wohnmobil+2",
    description: "Geräumiges Familienmobil mit viel Stauraum und Schlafplätzen.",
  },
  {
    id: 3,
    name: "Luxus Liner Comfort",
    image: "https://placehold.co/300x200/e2e8f0/1e293b?text=Wohnmobil+3",
    description: "Winterfester Luxus-Camper für höchsten Komfort.",
  },
];

const ResultScreen = ({ answers, onRestart }: ResultScreenProps) => {
  // In a real app, we'd use answers to filter/sort recommended models
  // For this prototype, we'll just show all models

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-center">Unsere Empfehlung</h1>
      
      <div className="flex flex-col gap-4 my-6">
        {modelData.map((model) => (
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
              <p className="text-sm">{model.description}</p>
            </CardContent>
            <CardFooter className="flex gap-2 flex-wrap p-4 pt-0">
              <Button size="sm" variant="outline">Modell ansehen</Button>
              <Button size="sm" variant="outline">Vergleichen</Button>
              <Button size="sm" variant="outline">Händler finden</Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <Button onClick={onRestart} className="w-full mt-4">
        Neue Beratung starten
      </Button>
    </div>
  );
};

export default ResultScreen;
