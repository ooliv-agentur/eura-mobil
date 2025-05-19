
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";

interface QuestionScreenProps {
  questionData: {
    question: string;
    options: string[];
  };
  currentStep: number;
  totalSteps: number;
  selectedOption: string;
  onNext: (option: string) => void;
  onBack: () => void;
}

const QuestionScreen = ({
  questionData,
  currentStep,
  totalSteps,
  selectedOption,
  onNext,
  onBack,
}: QuestionScreenProps) => {
  const [localSelection, setLocalSelection] = useState<string>(selectedOption);

  // Update local selection when prop changes
  useEffect(() => {
    setLocalSelection(selectedOption);
  }, [selectedOption]);

  // Function to handle option selection - delayed to prevent double clicks
  const handleOptionSelect = (option: string) => {
    console.log("Option selected:", option);
    setLocalSelection(option);
    
    // Use setTimeout to prevent double execution and ensure state updates
    setTimeout(() => {
      onNext(option);
    }, 50);
  };

  // Function for the "Weiter" button
  const handleNextClick = () => {
    if (localSelection) {
      console.log("Weiter button clicked with option:", localSelection);
      onNext(localSelection);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="sticky top-0 bg-white p-4 rounded-lg shadow-sm">
        <div className="text-center text-sm mb-2">
          Schritt {currentStep} von {totalSteps}
        </div>
        <div className="w-full bg-gray-200 h-2 rounded-full">
          <div
            className="bg-blue-600 h-2 rounded-full"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          ></div>
        </div>
      </div>

      <h2 className="text-xl font-bold text-center mt-4">
        {questionData.question}
      </h2>

      <div className="flex flex-col gap-3 my-6">
        {questionData.options.map((option) => (
          <Card
            key={option}
            className={`cursor-pointer ${
              localSelection === option ? "border-blue-500 border-2" : ""
            }`}
            onClick={() => handleOptionSelect(option)}
          >
            <CardContent className="p-4 text-center">{option}</CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-between mt-auto">
        <Button variant="outline" onClick={onBack}>
          Zurück
        </Button>
        <Button
          onClick={handleNextClick}
          disabled={!localSelection}
          className="bg-blue-600 hover:bg-blue-700" // More distinct styling
        >
          Weiter
        </Button>
      </div>
    </div>
  );
};

export default QuestionScreen;
