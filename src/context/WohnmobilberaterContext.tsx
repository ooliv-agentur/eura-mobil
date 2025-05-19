
import React, { createContext, useContext, useState, ReactNode, useCallback } from "react";

// Types
export interface QuestionData {
  question: string;
  options: string[];
}

export interface WohnmobilberaterContextType {
  currentStep: number;
  totalSteps: number;
  answers: string[];
  questions: QuestionData[];
  selectedOption: string;
  isOpen: boolean;
  displayMode: "dialog" | "inline" | "fullpage";
  setDisplayMode: (mode: "dialog" | "inline" | "fullpage") => void;
  startBerater: (initialStep?: number, prefilled?: string[]) => void;
  closeBerater: () => void;
  handleNext: (selectedOption: string) => void;
  handleBack: () => void;
  resetBerater: () => void;
}

const defaultQuestions: QuestionData[] = [
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

const WohnmobilberaterContext = createContext<WohnmobilberaterContextType | undefined>(undefined);

export const WohnmobilberaterProvider: React.FC<{
  children: ReactNode;
  customQuestions?: QuestionData[];
}> = ({ children, customQuestions }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [displayMode, setDisplayMode] = useState<"dialog" | "inline" | "fullpage">("dialog");
  
  const questions = customQuestions || defaultQuestions;
  const totalSteps = questions.length;

  const startBerater = useCallback((initialStep = 1, prefilled: string[] = []) => {
    console.log("Starting berater with initialStep:", initialStep);
    if (prefilled.length > 0) {
      setAnswers(prefilled);
    } else {
      // Reset answers when starting fresh
      setAnswers([]);
    }
    setCurrentStep(initialStep);
    setIsOpen(true);
  }, []);

  const closeBerater = useCallback(() => {
    setIsOpen(false);
  }, []);

  const resetBerater = useCallback(() => {
    setCurrentStep(0);
    setAnswers([]);
    setIsOpen(false);
  }, []);

  const handleNext = useCallback((selectedOption: string) => {
    console.log(`handleNext called with option: ${selectedOption}, current step: ${currentStep}`);
    
    const newAnswers = [...answers];
    newAnswers[currentStep - 1] = selectedOption;
    console.log("Setting answers to:", newAnswers);
    setAnswers(newAnswers);

    if (currentStep < totalSteps) {
      console.log(`Advancing to step ${currentStep + 1}`);
      setCurrentStep(prevStep => prevStep + 1);
    } else {
      console.log("Going to results");
      setCurrentStep(totalSteps + 1); // Go to results
    }
  }, [currentStep, answers, totalSteps]);

  const handleBack = useCallback(() => {
    if (currentStep > 1) {
      setCurrentStep(prevStep => prevStep - 1);
    } else {
      resetBerater();
    }
  }, [currentStep, resetBerater]);

  const selectedOption = answers[currentStep - 1] || "";

  const value = {
    currentStep,
    totalSteps,
    answers,
    questions,
    selectedOption,
    isOpen,
    displayMode,
    setDisplayMode,
    startBerater,
    closeBerater,
    handleNext,
    handleBack,
    resetBerater,
  };

  return (
    <WohnmobilberaterContext.Provider value={value}>
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
