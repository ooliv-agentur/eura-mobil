
import React, { useState } from "react";
import { X } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { useBeraterOverlay } from "@/context/BeraterOverlayContext";
import { Link } from "react-router-dom";

// Types
type BedType = 
  | "Queensbett"
  | "Alkovenbett" 
  | "Einzelbetten" 
  | "Hubbett" 
  | "Seitenbett" 
  | "Heckbett" 
  | "Stockbetten";

interface UserSelections {
  sleepingPlaces: number;
  bedTypes: BedType[];
  length: number;
  weight: number;
}

interface Model {
  id: string;
  name: string;
  sleepingPlaces: number;
  length: number;
  weight: number;
  bedTypes: BedType[];
}

const BeraterOverlay: React.FC = () => {
  const { isOverlayOpen, closeOverlay } = useBeraterOverlay();
  const [currentStep, setCurrentStep] = useState(1);
  const [selections, setSelections] = useState<UserSelections>({
    sleepingPlaces: 2,
    bedTypes: [],
    length: 6,
    weight: 3.5,
  });
  
  const totalSteps = 4;
  
  // Mock models data
  const models: Model[] = [
    {
      id: "activa-one",
      name: "Activa One",
      sleepingPlaces: 4,
      length: 6.5,
      weight: 3.5,
      bedTypes: ["Queensbett", "Hubbett"]
    },
    {
      id: "profila-t",
      name: "Profila T",
      sleepingPlaces: 3,
      length: 7.2,
      weight: 3.5,
      bedTypes: ["Einzelbetten", "Hubbett"]
    },
    {
      id: "integra-line",
      name: "Integra Line",
      sleepingPlaces: 4,
      length: 8.1,
      weight: 5.5,
      bedTypes: ["Einzelbetten", "Hubbett"]
    },
    {
      id: "contura",
      name: "Contura",
      sleepingPlaces: 6,
      length: 8.8,
      weight: 7.2,
      bedTypes: ["Alkovenbett", "Stockbetten"]
    },
    {
      id: "van",
      name: "Van",
      sleepingPlaces: 2,
      length: 5.9,
      weight: 3.5,
      bedTypes: ["Heckbett"]
    },
  ];
  
  // Filter models based on user selections
  const getFilteredModels = () => {
    return models.filter(model => {
      // Filter by sleeping places
      if (model.sleepingPlaces < selections.sleepingPlaces) {
        return false;
      }
      
      // Filter by length
      if (model.length > selections.length) {
        return false;
      }
      
      // Filter by weight class (if not "egal")
      if (selections.weight !== 0 && model.weight > selections.weight) {
        return false;
      }
      
      // Filter by bed types (if any selected)
      if (selections.bedTypes.length > 0) {
        // Check if model has at least one of the selected bed types
        const hasMatchingBedType = selections.bedTypes.some(bedType => 
          model.bedTypes.includes(bedType)
        );
        if (!hasMatchingBedType) return false;
      }
      
      return true;
    });
  };
  
  // Handle single-select questions (sleepingPlaces, length, weight)
  const handleSliderChange = (category: keyof UserSelections, value: number) => {
    setSelections(prev => ({
      ...prev,
      [category]: value
    }));
    
    // Auto-advance to next step
    setTimeout(() => {
      if (currentStep < totalSteps) {
        setCurrentStep(prev => prev + 1);
      }
    }, 500);
  };
  
  // Handle multi-select questions (bedTypes)
  const handleBedTypeToggle = (bedType: BedType) => {
    setSelections(prev => {
      if (prev.bedTypes.includes(bedType)) {
        return {
          ...prev,
          bedTypes: prev.bedTypes.filter(type => type !== bedType)
        };
      } else {
        return {
          ...prev,
          bedTypes: [...prev.bedTypes, bedType]
        };
      }
    });
  };
  
  // Handle bed type step continuation
  const handleBedTypesContinue = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    }
  };
  
  // Reset all selections
  const handleReset = () => {
    setSelections({
      sleepingPlaces: 2,
      bedTypes: [],
      length: 6,
      weight: 3.5,
    });
    setCurrentStep(1);
  };
  
  // Map slider values to display values
  const sleepingPlacesLabels = ['mindestens 2', 'mindestens 4', 'mindestens 6'];
  const lengthLabels = ['bis 6 Meter', 'bis 7 Meter', 'bis 8 Meter', 'bis 9 Meter'];
  const weightLabels = ['bis 3,5t', 'bis 7,5t', 'egal'];
  
  // Helper to map slider value to actual value
  const getSleepingPlacesValue = (sliderValue: number) => {
    const values = [2, 4, 6];
    return values[sliderValue];
  };
  
  const getLengthValue = (sliderValue: number) => {
    const values = [6, 7, 8, 9];
    return values[sliderValue];
  };
  
  const getWeightValue = (sliderValue: number) => {
    const values = [3.5, 7.5, 0]; // 0 represents "egal"
    return values[sliderValue];
  };
  
  const filteredModels = getFilteredModels();

  // Render the current step
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-semibold mb-8 text-center">Wieviele Schlafplätze benötigen Sie?</h2>
            <div className="w-full max-w-md px-4">
              <div className="flex justify-between mb-2">
                {sleepingPlacesLabels.map((label, idx) => (
                  <span key={idx} className="text-sm text-gray-600">{label}</span>
                ))}
              </div>
              <Slider
                value={[sleepingPlacesLabels.indexOf(
                  selections.sleepingPlaces === 6 ? 'mindestens 6' :
                  selections.sleepingPlaces === 4 ? 'mindestens 4' : 'mindestens 2'
                )]}
                min={0}
                max={2}
                step={1}
                onValueChange={(value) => {
                  const sliderValue = value[0];
                  handleSliderChange('sleepingPlaces', getSleepingPlacesValue(sliderValue));
                }}
              />
            </div>
          </div>
        );
        
      case 2:
        return (
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-semibold mb-8 text-center">Welche Bettenform bevorzugen Sie?</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-3xl">
              {[
                "Queensbett",
                "Alkovenbett",
                "Einzelbetten",
                "Hubbett",
                "Seitenbett",
                "Heckbett",
                "Stockbetten"
              ].map((bedType) => (
                <div key={bedType} className="flex flex-col items-center">
                  <div className="bg-gray-200 rounded-md w-full aspect-square mb-2"></div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id={bedType}
                      checked={selections.bedTypes.includes(bedType as BedType)}
                      onCheckedChange={() => handleBedTypeToggle(bedType as BedType)}
                    />
                    <Label htmlFor={bedType} className="text-sm">{bedType}</Label>
                  </div>
                </div>
              ))}
            </div>
            <Button 
              className="mt-8"
              onClick={handleBedTypesContinue}
            >
              Weiter
            </Button>
          </div>
        );
        
      case 3:
        return (
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-semibold mb-8 text-center">Wie lang soll Ihr Wohnmobil maximal sein?</h2>
            <div className="w-full max-w-md px-4">
              <div className="flex justify-between mb-2">
                {lengthLabels.map((label, idx) => (
                  <span key={idx} className="text-sm text-gray-600">{label}</span>
                ))}
              </div>
              <Slider
                value={[lengthLabels.findIndex(l => 
                  l.includes(`${selections.length}`)
                )]}
                min={0}
                max={3}
                step={1}
                onValueChange={(value) => {
                  const sliderValue = value[0];
                  handleSliderChange('length', getLengthValue(sliderValue));
                }}
              />
            </div>
          </div>
        );
        
      case 4:
        return (
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-semibold mb-8 text-center">Welche Gewichtsklasse bevorzugen Sie?</h2>
            <div className="w-full max-w-md px-4">
              <div className="flex justify-between mb-2">
                {weightLabels.map((label, idx) => (
                  <span key={idx} className="text-sm text-gray-600">{label}</span>
                ))}
              </div>
              <Slider
                value={[weightLabels.findIndex(l => {
                  if (selections.weight === 0) return l === 'egal';
                  return l.includes(`${selections.weight}`);
                })]}
                min={0}
                max={2}
                step={1}
                onValueChange={(value) => {
                  const sliderValue = value[0];
                  handleSliderChange('weight', getWeightValue(sliderValue));
                }}
              />
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  // If overlay is not open, don't render anything
  if (!isOverlayOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center overflow-y-auto">
      <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
        <button 
          onClick={closeOverlay} 
          className="absolute right-4 top-4 p-2 rounded-full bg-white hover:bg-gray-100 transition-colors z-10"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="p-8">
          {/* Progress indicator */}
          {currentStep <= totalSteps && (
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-600">
                  Schritt {currentStep} von {totalSteps}
                </span>
              </div>
              <Progress value={(currentStep / totalSteps) * 100} />
            </div>
          )}
          
          {/* Steps 1-4 */}
          {currentStep <= totalSteps && (
            <div>
              {renderStep()}
            </div>
          )}

          {/* Results Section */}
          {currentStep > totalSteps && (
            <div>
              <h2 className="text-2xl font-semibold mb-8 text-center">
                Diese Wohnmobile könnten zu Ihnen passen ...
              </h2>
              
              {filteredModels.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredModels.map((model) => (
                    <Card key={model.id} className="overflow-hidden">
                      <div className="bg-gray-200 w-full aspect-video"></div>
                      <div className="p-4">
                        <h3 className="font-semibold text-lg mb-2">{model.name}</h3>
                        <div className="grid grid-cols-2 gap-2 text-sm mb-4">
                          <div>
                            <span className="text-gray-600">Schlafplätze:</span> {model.sleepingPlaces}
                          </div>
                          <div>
                            <span className="text-gray-600">Länge:</span> {model.length} m
                          </div>
                          <div>
                            <span className="text-gray-600">Gewicht:</span> {model.weight}t
                          </div>
                        </div>
                        <div className="flex flex-col gap-2">
                          <Button variant="outline" size="sm" asChild>
                            <Link to={`/modelle/${model.id}`} onClick={closeOverlay}>
                              Modell ansehen
                            </Link>
                          </Button>
                          <Button variant="outline" size="sm">
                            Vergleichen
                          </Button>
                          <Button variant="outline" size="sm" asChild>
                            <Link to="/haendler" onClick={closeOverlay}>
                              Händler finden
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center p-8 border rounded-md bg-gray-50">
                  <p className="text-lg mb-4">
                    Leider passt kein Modell zu Ihrer Auswahl. Bitte starten Sie die Beratung neu.
                  </p>
                  <Button onClick={handleReset}>
                    Beratung neu starten
                  </Button>
                </div>
              )}
              
              <div className="flex justify-center mt-12">
                <Button onClick={handleReset} variant="outline">
                  Beratung neu starten
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BeraterOverlay;
