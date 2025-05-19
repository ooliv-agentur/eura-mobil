
import React, { createContext, useContext, useState, ReactNode } from "react";

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

  const startBerater = (initialStep = 1, prefilled: string[] = []) => {
    if (prefilled.length > 0) {
      setAnswers(prefilled);
    }
    setCurrentStep(initialStep);
    setIsOpen(true);
  };

  const closeBerater = () => {
    setIsOpen(false);
  };

  const resetBerater = () => {
    setCurrentStep(0);
    setAnswers([]);
    setIsOpen(false);
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
      resetBerater();
    }
  };

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
