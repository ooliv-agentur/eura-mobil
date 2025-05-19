
import React, { useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useWohnmobilberater } from "@/context/WohnmobilberaterContext";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";
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
  
  const navigate = useNavigate();

  // Debug the current state
  useEffect(() => {
    console.log("Current step:", currentStep);
    console.log("Selected option:", selectedOption);
    console.log("Answers:", answers);
  }, [currentStep, selectedOption, answers]);

  // Function to handle closing the berater and navigating if needed
  const handleClose = () => {
    closeBerater();
    
    // If in fullpage mode, navigate back
    if (displayMode === "fullpage") {
      navigate(-1);
    }
  };

  // Enhanced wrapper for handleNext to ensure it works properly
  const handleNextWrapper = (option: string) => {
    console.log("handleNextWrapper called with option:", option);
    
    // Use setTimeout to ensure state updates properly
    setTimeout(() => {
      handleNext(option);
    }, 10);
  };

  // Custom back handler that closes the berater on step 1
  const handleCustomBack = () => {
    if (currentStep <= 1) {
      handleClose();
    } else {
      handleBack();
    }
  };

  const renderContent = () => {
    if (currentStep === 0) {
      return <IntroScreen onStart={() => handleNextWrapper("")} />;
    } else if (currentStep >= 1 && currentStep <= totalSteps) {
      return (
        <QuestionScreen
          questionData={questions[currentStep - 1]}
          currentStep={currentStep}
          totalSteps={totalSteps}
          selectedOption={selectedOption}
          onNext={handleNextWrapper}
          onBack={handleCustomBack}
        />
      );
    } else {
      return <ResultScreen answers={answers} onRestart={resetBerater} />;
    }
  };

  // Close button for all display modes
  const CloseButton = () => (
    <button
      onClick={handleClose}
      className="absolute right-4 top-4 rounded-full p-1 bg-white/80 hover:bg-gray-200 transition-colors z-10"
      aria-label="Close advisor"
    >
      <X size={20} />
    </button>
  );

  // For inline display mode
  if (displayMode === "inline") {
    return (
      <div className="bg-white rounded-lg shadow-md p-4 relative">
        <CloseButton />
        {renderContent()}
      </div>
    );
  }

  // For fullpage display mode
  if (displayMode === "fullpage") {
    return (
      <div className="min-h-screen flex flex-col bg-gray-100 relative">
        <CloseButton />
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
        <div className="max-h-[80vh] overflow-auto p-4 relative">
          <CloseButton />
          {renderContent()}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Wohnmobilberater;
