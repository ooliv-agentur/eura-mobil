
import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the question data type
export interface QuestionData {
  question: string;
  options: string[];
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
  selectedOption: string;
  displayMode: "dialog" | "inline" | "fullpage";
  handleNext: (option: string) => void;
  handleBack: () => void;
  answers: string[];
  resetBerater: () => void;
  startBerater: (initialStep?: number, prefilled?: string[]) => void;
  setDisplayMode: (mode: "dialog" | "inline" | "fullpage") => void;
}

const WohnmobilberaterContext = createContext<WohnmobilberaterContextType | undefined>(undefined);

// Example questions data
const beraterQuestions: QuestionData[] = [
  {
    question: "Wieviele Schlafplätze benötigen Sie?",
    options: ["mindestens 2", "mindestens 4", "mindestens 6"]
  },
  {
    question: "Welche Bettenform bevorzugen Sie?",
    options: ["Queensbett", "Alkovenbett", "Einzelbetten", "Hubbett", "Seitenbett", "Heckbett", "Stockbetten"]
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
  const [answers, setAnswers] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState<string>("");
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
  
  const startBerater = (initialStep: number = 1, prefilled: string[] = []) => {
    setCurrentStep(initialStep);
    setAnswers(prefilled);
    setIsOpen(true);
  };

  const resetBerater = () => {
    setCurrentStep(1);
    setAnswers([]);
    setSelectedOption("");
  };

  const handleNext = (option: string) => {
    // Save the answer
    const newAnswers = [...answers];
    newAnswers[currentStep - 1] = option;
    setAnswers(newAnswers);
    setSelectedOption("");
    
    // Move to next step
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      // We're at the results step
      setCurrentStep(totalSteps + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      setSelectedOption(answers[currentStep - 2] || "");
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
        selectedOption,
        displayMode,
        handleNext,
        handleBack,
        answers,
        resetBerater,
        startBerater,
        setDisplayMode
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
