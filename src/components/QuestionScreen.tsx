
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

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
              selectedOption === option ? "border-blue-500 border-2" : ""
            }`}
            onClick={() => onNext(option)}
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
          disabled={!selectedOption}
          onClick={() => selectedOption && onNext(selectedOption)}
        >
          Weiter
        </Button>
      </div>
    </div>
  );
};

export default QuestionScreen;
