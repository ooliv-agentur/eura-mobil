
import React, { useEffect } from "react";
import { useWohnmobilberater } from "@/context/WohnmobilberaterContext";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import QuestionScreen from "./QuestionScreen";
import ResultScreen from "@/components/ResultScreen";

const Wohnmobilberater: React.FC = () => {
  const {
    currentStep,
    totalSteps,
    questions,
    selectedOption,
    handleNext,
    handleBack,
    answers,
    resetBerater,
  } = useWohnmobilberater();
  
  const navigate = useNavigate();

  // Initialize berater when the page loads - start at step 1 (skip intro)
  useEffect(() => {
    // Reset and set current step to 1 (first question)
    resetBerater();
    // No need to open berater as we're already on the page
  }, []);

  // Function to handle closing the berater and navigating back
  const handleClose = () => {
    navigate(-1);
  };

  // Enhanced wrapper for handleNext to ensure it works properly
  const handleNextWrapper = (option: string) => {
    console.log("handleNextWrapper called with option:", option);
    
    // Use setTimeout to ensure state updates properly
    setTimeout(() => {
      handleNext(option);
    }, 10);
  };

  const renderContent = () => {
    if (currentStep >= 1 && currentStep <= totalSteps) {
      return (
        <QuestionScreen
          questionData={questions[currentStep - 1]}
          currentStep={currentStep}
          totalSteps={totalSteps}
          selectedOption={selectedOption}
          onNext={handleNextWrapper}
          onBack={handleBack}
        />
      );
    } else {
      return <ResultScreen answers={answers} onRestart={resetBerater} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 relative">
      <button
        onClick={handleClose}
        className="absolute right-4 top-4 rounded-full p-1 bg-white/80 hover:bg-gray-200 transition-colors z-10"
        aria-label="Close advisor"
      >
        <X size={20} />
      </button>
      <div className="flex-1 w-full max-w-md mx-auto p-4">
        {renderContent()}
      </div>
    </div>
  );
};

export default Wohnmobilberater;
