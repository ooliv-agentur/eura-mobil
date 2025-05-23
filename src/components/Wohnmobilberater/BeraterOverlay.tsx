
import React, { useState } from "react";
import { X, ChevronRight, ChevronLeft } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import ResultsDisplay from "./ResultsDisplay";
import { useNavigate } from "react-router-dom";

// Mock data for models to display in results
const mockModels = [
  { id: "activa-one", name: "Activa One", length: "6,5 m", sleepingPlaces: "4" },
  { id: "profila-t", name: "Profila T", length: "7,2 m", sleepingPlaces: "3" },
  { id: "integra-line", name: "Integra Line", length: "8,1 m", sleepingPlaces: "4" },
  { id: "van", name: "Van", length: "5,9 m", sleepingPlaces: "2" },
  { id: "contura", name: "Contura", length: "8,8 m", sleepingPlaces: "4" },
];

export type BeraterAnswer = {
  persons: string;
  bedTypes: string[];
  length: string;
  weight: string;
};

type BeraterOverlayProps = {
  isOpen: boolean;
  onClose: () => void;
};

const BeraterOverlay: React.FC<BeraterOverlayProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<BeraterAnswer>({
    persons: "",
    bedTypes: [],
    length: "",
    weight: "",
  });

  const totalSteps = 5;
  
  // Handle selection for single-select questions
  const handleSingleSelect = (category: keyof BeraterAnswer, value: string) => {
    setAnswers({ ...answers, [category]: value });
    // Auto advance after selection
    setTimeout(() => {
      handleNext();
    }, 300);
  };
  
  // Handle selection for multi-select questions
  const handleMultiSelect = (value: string) => {
    const currentSelection = [...answers.bedTypes];
    
    if (currentSelection.includes(value)) {
      setAnswers({
        ...answers,
        bedTypes: currentSelection.filter((item) => item !== value),
      });
    } else {
      setAnswers({
        ...answers,
        bedTypes: [...currentSelection, value],
      });
    }
  };
  
  // Navigation functions
  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };
  
  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };
  
  const handleCloseOverlay = () => {
    setStep(1);
    setAnswers({
      persons: "",
      bedTypes: [],
      length: "",
      weight: "",
    });
    onClose();
  };
  
  // Helper function to check if we have results that match criteria
  const hasMatchingResults = () => {
    // This would be replaced with actual filtering logic
    return true; // For demo purposes, always show results
  };
  
  const renderContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold mb-2 text-center">
              Wieviele Schlafplätze benötigen Sie?
            </h2>
            <div className="flex flex-col gap-3">
              {["mindestens 2", "mindestens 4", "mindestens 6"].map((option) => (
                <Card
                  key={option}
                  className={`p-4 cursor-pointer hover:border-blue-500 transition-colors ${
                    answers.persons === option ? "border-blue-500 border-2" : ""
                  }`}
                  onClick={() => handleSingleSelect("persons", option)}
                >
                  <div className="text-center text-lg py-2">{option}</div>
                </Card>
              ))}
            </div>
          </div>
        );
        
      case 2:
        return (
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold mb-2 text-center">
              Welche Bettenform bevorzugen Sie?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                "Queensbett",
                "Alkovenbett",
                "Einzelbetten",
                "Hubbett",
                "Seitenbett",
                "Heckbett",
                "Stockbetten",
              ].map((option) => (
                <div key={option} className="flex flex-col items-center gap-2">
                  <div className="bg-gray-200 w-full aspect-square rounded-md"></div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id={option}
                      checked={answers.bedTypes.includes(option)}
                      onCheckedChange={() => handleMultiSelect(option)}
                    />
                    <Label htmlFor={option} className="cursor-pointer">
                      {option}
                    </Label>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-4">
              <Button onClick={handleNext}>Weiter</Button>
            </div>
          </div>
        );
        
      case 3:
        return (
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold mb-2 text-center">
              Wie lang soll Ihr Wohnmobil maximal sein?
            </h2>
            <RadioGroup
              value={answers.length}
              onValueChange={(value) => handleSingleSelect("length", value)}
              className="flex flex-row justify-center gap-4 flex-wrap"
            >
              {["bis 6 Meter", "bis 7 Meter", "bis 8 Meter", "bis 9 Meter"].map(
                (option) => (
                  <div key={option} className="flex items-center space-x-2">
                    <RadioGroupItem value={option} id={option} />
                    <Label htmlFor={option}>{option}</Label>
                  </div>
                )
              )}
            </RadioGroup>
          </div>
        );
        
      case 4:
        return (
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold mb-2 text-center">
              Welche Gewichtsklasse bevorzugen Sie?
            </h2>
            <RadioGroup
              value={answers.weight}
              onValueChange={(value) => handleSingleSelect("weight", value)}
              className="flex flex-row justify-center gap-4 flex-wrap"
            >
              {["bis 3,5t", "bis 7,5t", "egal"].map((option) => (
                <div key={option} className="flex items-center space-x-2">
                  <RadioGroupItem value={option} id={option} />
                  <Label htmlFor={option}>{option}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        );
        
      case 5:
        return (
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold mb-2 text-center">
              Diese Wohnmobile könnten zu Ihnen passen...
            </h2>
            
            {!hasMatchingResults() && (
              <>
                <p className="text-center text-gray-700 my-2">
                  Leider passt kein Modell zu Ihrer Auswahl. Bitte starten Sie die Beratung neu.
                </p>
                <Button onClick={() => setStep(1)} className="mx-auto mb-4">
                  Beratung neu starten
                </Button>
                <h3 className="text-lg font-semibold text-center">
                  Diese Wohnmobile könnten trotzdem passen...
                </h3>
              </>
            )}
            
            <ResultsDisplay models={mockModels} />
            
            <div className="flex justify-center mt-4">
              <Button 
                onClick={() => {
                  handleCloseOverlay();
                  navigate("/");
                }}
              >
                Neue Beratung starten
              </Button>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleCloseOverlay}>
      <DialogContent className="sm:max-w-xl max-h-[90vh] overflow-y-auto p-0">
        <div className="relative p-6">
          {/* Progress indicator */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-600">
                Schritt {step} von {totalSteps}
              </span>
              <button
                onClick={handleCloseOverlay}
                className="absolute right-4 top-4 p-1 rounded-full bg-white/80 hover:bg-gray-200"
              >
                <X size={20} />
              </button>
            </div>
            <Progress value={(step / totalSteps) * 100} />
          </div>
          
          {/* Content */}
          <div className="min-h-[60vh]">
            {renderContent()}
          </div>
          
          {/* Navigation */}
          {step > 1 && step < 5 && (
            <div className="mt-6 flex justify-between">
              <Button
                variant="outline"
                onClick={handleBack}
                className="flex items-center gap-2"
              >
                <ChevronLeft size={16} />
                Zurück
              </Button>
              
              {step === 2 && (
                <Button
                  onClick={handleNext}
                  className="flex items-center gap-2"
                >
                  Weiter
                  <ChevronRight size={16} />
                </Button>
              )}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BeraterOverlay;
