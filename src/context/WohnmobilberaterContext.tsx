
import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the question data type
export interface QuestionData {
  question: string;
  options: string[];
  multiSelect?: boolean; // Add support for multiple selection
}

// Define the context type including all missing properties
interface WohnmobilberaterContextType {
  isOpen: boolean;
  openBerater: () => void;
  closeBerater: () => void;
  // New properties
  currentStep: number;
  totalSteps: number;
  questions: QuestionData[];
  selectedOptions: string[]; // Changed from selectedOption to selectedOptions
  displayMode: "dialog" | "inline" | "fullpage";
  handleNext: (options: string | string[]) => void; // Updated to handle both single and multiple
  handleBack: () => void;
  answers: (string | string[])[]; // Updated to handle arrays
  resetBerater: () => void;
  startBerater: (initialStep?: number, prefilled?: (string | string[])[]) => void;
  setDisplayMode: (mode: "dialog" | "inline" | "fullpage") => void;
  toggleOption: (option: string) => void; // New method for multi-select
}

const WohnmobilberaterContext = createContext<WohnmobilberaterContextType | undefined>(undefined);

// Example questions data with multi-select support
const beraterQuestions: QuestionData[] = [
  {
    question: "Wieviele Schlafplätze benötigen Sie?",
    options: ["mindestens 2", "mindestens 4", "mindestens 6"]
  },
  {
    question: "Welche Bettenform bevorzugen Sie?",
    options: ["Queensbett", "Alkovenbett", "Einzelbetten", "Hubbett", "Seitenbett", "Heckbett", "Stockbetten"],
    multiSelect: true // Enable multiple selection for bed types
  },
  {
    question: "Wie lang soll Ihr Wohnmobil maximal sein?",
    options: ["bis 6 Meter", "bis 7 Meter", "bis 8 Meter", "bis 9 Meter"]
  },
  {
    question: "Welche Gewichtsklasse bevorzugen Sie?",
    options: ["bis 3,5t", "bis 7,5t", "egal"]
  }
];

export const WohnmobilberaterProvider: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  // Base state for overlay
  const [isOpen, setIsOpen] = useState<boolean>(false);
  
  // Berater state
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [answers, setAnswers] = useState<(string | string[])[]>([]);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [displayMode, setDisplayMode] = useState<"dialog" | "inline" | "fullpage">("dialog");
  
  // Constants
  const questions = beraterQuestions;
  const totalSteps = questions.length;

  // Handlers
  const openBerater = () => {
    setIsOpen(true);
  };

  const closeBerater = () => {
    setIsOpen(false);
  };
  
  const startBerater = (initialStep: number = 1, prefilled: (string | string[])[] = []) => {
    setCurrentStep(initialStep);
    setAnswers(prefilled);
    setIsOpen(true);
  };

  const resetBerater = () => {
    setCurrentStep(1);
    setAnswers([]);
    setSelectedOptions([]);
  };

  const toggleOption = (option: string) => {
    setSelectedOptions(prev => {
      if (prev.includes(option)) {
        return prev.filter(opt => opt !== option);
      } else {
        return [...prev, option];
      }
    });
  };

  const handleNext = (options: string | string[]) => {
    // Save the answer
    const newAnswers = [...answers];
    newAnswers[currentStep - 1] = options;
    setAnswers(newAnswers);
    setSelectedOptions([]);
    
    // Move to next step
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      // Pre-populate selected options for the next step if it exists
      const nextAnswer = newAnswers[currentStep];
      if (nextAnswer) {
        setSelectedOptions(Array.isArray(nextAnswer) ? nextAnswer : [nextAnswer]);
      }
    } else {
      // We're at the results step
      setCurrentStep(totalSteps + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      const previousAnswer = answers[currentStep - 2];
      if (previousAnswer) {
        setSelectedOptions(Array.isArray(previousAnswer) ? previousAnswer : [previousAnswer]);
      } else {
        setSelectedOptions([]);
      }
    }
  };

  return (
    <WohnmobilberaterContext.Provider 
      value={{ 
        isOpen, 
        openBerater, 
        closeBerater,
        currentStep,
        totalSteps,
        questions,
        selectedOptions,
        displayMode,
        handleNext,
        handleBack,
        answers,
        resetBerater,
        startBerater,
        setDisplayMode,
        toggleOption
      }}
    >
      {children}
    </WohnmobilberaterContext.Provider>
  );
};

export const useWohnmobilberater = (): WohnmobilberaterContextType => {
  const context = useContext(WohnmobilberaterContext);
  if (!context) {
    throw new Error("useWohnmobilberater must be used within a WohnmobilberaterProvider");
  }
  return context;
};
