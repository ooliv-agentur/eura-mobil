
import { useState } from "react";
import IntroScreen from "../components/IntroScreen";
import QuestionScreen from "../components/QuestionScreen";
import ResultScreen from "../components/ResultScreen";

const Index = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = 3;

  const questions = [
    {
      question: "Wie viele Personen reisen mit?",
      options: ["1–2", "3–4", "5+"],
    },
    {
      question: "Wann sind Sie unterwegs?",
      options: ["Sommer", "Ganzjährig", "Winter"],
    },
    {
      question: "Was ist Ihnen besonders wichtig?",
      options: ["Komfort", "Stauraum", "Kompakte Größe", "Preis-Leistung"],
    },
  ];

  const [answers, setAnswers] = useState<string[]>([]);

  const handleStart = () => {
    setCurrentStep(1);
  };

  const handleNext = (selectedOption: string) => {
    const newAnswers = [...answers];
    newAnswers[currentStep - 1] = selectedOption;
    setAnswers(newAnswers);

    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      setCurrentStep(totalSteps + 1); // Go to results
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else {
      setCurrentStep(0); // Back to intro
    }
  };

  const renderContent = () => {
    if (currentStep === 0) {
      return <IntroScreen onStart={handleStart} />;
    } else if (currentStep >= 1 && currentStep <= totalSteps) {
      return (
        <QuestionScreen
          questionData={questions[currentStep - 1]}
          currentStep={currentStep}
          totalSteps={totalSteps}
          selectedOption={answers[currentStep - 1] || ""}
          onNext={handleNext}
          onBack={handleBack}
        />
      );
    } else {
      return <ResultScreen answers={answers} onRestart={() => setCurrentStep(0)} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <div className="flex-1 w-full max-w-md mx-auto p-4">
        {renderContent()}
      </div>
    </div>
  );
};

export default Index;
