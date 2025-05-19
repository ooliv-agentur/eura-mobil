
import { Button } from "@/components/ui/button";

interface IntroScreenProps {
  onStart: () => void;
}

const IntroScreen = ({ onStart }: IntroScreenProps) => {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-6 p-4 text-center">
      <h1 className="text-3xl font-bold">Welches Wohnmobil passt zu mir?</h1>
      <p className="mb-6">
        Finden Sie in nur wenigen Schritten das perfekte Wohnmobil für Ihre Bedürfnisse.
      </p>
      <Button onClick={onStart} className="w-full">
        Jetzt starten
      </Button>
    </div>
  );
};

export default IntroScreen;
