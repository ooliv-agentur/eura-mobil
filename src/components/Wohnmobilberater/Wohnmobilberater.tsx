
import React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useWohnmobilberater } from "@/context/WohnmobilberaterContext";
import QuestionScreen from "./QuestionScreen";
import IntroScreen from "@/components/IntroScreen";
import ResultScreen from "@/components/ResultScreen";

interface WohnmobilberaterProps {
  inline?: boolean;
}

const Wohnmobilberater: React.FC<WohnmobilberaterProps> = ({ inline = false }) => {
  const {
    currentStep,
    totalSteps,
    questions,
    selectedOption,
    isOpen,
    displayMode,
    closeBerater,
    handleNext,
    handleBack,
    answers,
    resetBerater,
  } = useWohnmobilberater();

  const renderContent = () => {
    if (currentStep === 0) {
      return <IntroScreen onStart={() => handleNext("")} />;
    } else if (currentStep >= 1 && currentStep <= totalSteps) {
      return (
        <QuestionScreen
          questionData={questions[currentStep - 1]}
          currentStep={currentStep}
          totalSteps={totalSteps}
          selectedOption={selectedOption}
          onNext={handleNext}
          onBack={handleBack}
        />
      );
    } else {
      return <ResultScreen answers={answers} onRestart={resetBerater} />;
    }
  };

  // For inline display mode
  if (displayMode === "inline") {
    return (
      <div className="bg-white rounded-lg shadow-md p-4">
        {renderContent()}
      </div>
    );
  }

  // For fullpage display mode
  if (displayMode === "fullpage") {
    return (
      <div className="min-h-screen flex flex-col bg-gray-100">
        <div className="flex-1 w-full max-w-md mx-auto p-4">
          {renderContent()}
        </div>
      </div>
    );
  }

  // For dialog display mode (default)
  return (
    <Dialog open={isOpen} onOpenChange={closeBerater}>
      <DialogContent className="max-w-md p-0">
        <div className="max-h-[80vh] overflow-auto p-4">
          {renderContent()}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Wohnmobilberater;
