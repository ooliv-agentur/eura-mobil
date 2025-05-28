
import React from 'react';
import { useWohnmobilberater } from '@/context/WohnmobilberaterContext';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { ChevronLeft } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
import EnhancedResultsDisplay from './EnhancedResultsDisplay';

const BeraterFlow: React.FC = () => {
  const {
    currentStep,
    totalSteps,
    questions,
    selectedOptions,
    handleNext,
    handleBack,
    answers,
    toggleOption,
    resetBerater
  } = useWohnmobilberater();

  // Show intro/hero section on first load
  if (currentStep === 1 && answers.length === 0) {
    return (
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Wohnmobil-Berater</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Finden Sie in wenigen Schritten das perfekte Wohnmobil für Ihre Bedürfnisse. 
            Unser Berater hilft Ihnen dabei, aus unserer Modellvielfalt das passende Fahrzeug auszuwählen.
          </p>
          <Button 
            size="lg" 
            onClick={() => handleNext([])}
            className="px-8 py-3"
          >
            Beratung starten
          </Button>
        </div>

        {/* Preview Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 border rounded-lg">
            <div className="text-3xl mb-3">🛏️</div>
            <h3 className="font-semibold mb-2">Schlafplätze</h3>
            <p className="text-sm text-gray-600">Wie viele Personen sollen mitreisen?</p>
          </div>
          <div className="text-center p-6 border rounded-lg">
            <div className="text-3xl mb-3">📏</div>
            <h3 className="font-semibold mb-2">Größe</h3>
            <p className="text-sm text-gray-600">Welche Fahrzeuglänge passt zu Ihnen?</p>
          </div>
          <div className="text-center p-6 border rounded-lg">
            <div className="text-3xl mb-3">⚖️</div>
            <h3 className="font-semibold mb-2">Gewicht</h3>
            <p className="text-sm text-gray-600">Welchen Führerschein haben Sie?</p>
          </div>
        </div>
      </div>
    );
  }

  // If we're past all questions, show results
  if (currentStep > totalSteps) {
    // Simple matching logic based on answers
    const getRecommendedModels = () => {
      const models = [];
      
      // Based on sleeping places
      const sleepingAnswer = answers[0];
      if (typeof sleepingAnswer === 'string') {
        if (sleepingAnswer.includes('2')) {
          models.push({ id: 'van', name: 'Van' });
          models.push({ id: 'contura', name: 'Contura' });
        }
        if (sleepingAnswer.includes('4')) {
          models.push({ id: 'profila-rs', name: 'Profila RS' });
          models.push({ id: 'integra-line', name: 'Integra Line' });
        }
        if (sleepingAnswer.includes('6')) {
          models.push({ id: 'activa-one', name: 'Activa One' });
        }
      }
      
      // Ensure we always return at least some models
      if (models.length === 0) {
        models.push(
          { id: 'van', name: 'Van' },
          { id: 'profila-rs', name: 'Profila RS' },
          { id: 'activa-one', name: 'Activa One' }
        );
      }
      
      return models;
    };

    return (
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-4">Ihre Wohnmobil-Empfehlungen</h1>
          <p className="text-gray-600 mb-6">
            Basierend auf Ihren Angaben haben wir passende Modelle für Sie gefunden.
          </p>
          <Button 
            variant="outline" 
            onClick={resetBerater}
            className="mb-8"
          >
            Neue Beratung starten
          </Button>
        </div>
        <EnhancedResultsDisplay models={getRecommendedModels()} />
      </div>
    );
  }

  const currentQuestion = questions[currentStep - 1];
  const progress = (currentStep / totalSteps) * 100;
  const isMultiSelect = currentQuestion.multiSelect;

  const handleOptionClick = (option: string) => {
    if (isMultiSelect) {
      toggleOption(option);
    } else {
      handleNext(option);
    }
  };

  const handleMultiSelectNext = () => {
    if (selectedOptions.length > 0) {
      handleNext(selectedOptions);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">Wohnmobil-Berater</h1>
          <span className="text-sm text-gray-500">
            Schritt {currentStep} von {totalSteps}
          </span>
        </div>
        <Progress value={progress} className="w-full" />
      </div>

      <div className="mb-8">
        <h2 className="text-xl mb-6">{currentQuestion.question}</h2>
        
        {isMultiSelect && (
          <p className="text-sm text-gray-600 mb-4">
            Mehrfachauswahl möglich - wählen Sie alle passenden Optionen.
          </p>
        )}
        
        <div className="grid gap-3">
          {currentQuestion.options.map((option, index) => (
            <div key={index}>
              {isMultiSelect ? (
                <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50 cursor-pointer"
                     onClick={() => handleOptionClick(option)}>
                  <Checkbox
                    id={`option-${index}`}
                    checked={selectedOptions.includes(option)}
                    onChange={() => {}} // Handled by parent div click
                  />
                  <label 
                    htmlFor={`option-${index}`} 
                    className="flex-1 cursor-pointer"
                  >
                    {option}
                  </label>
                </div>
              ) : (
                <Button
                  key={index}
                  variant={selectedOptions.includes(option) ? "default" : "outline"}
                  className="justify-start p-4 h-auto text-left w-full"
                  onClick={() => handleOptionClick(option)}
                >
                  {option}
                </Button>
              )}
            </div>
          ))}
        </div>

        {isMultiSelect && (
          <div className="mt-6">
            <Button
              onClick={handleMultiSelectNext}
              disabled={selectedOptions.length === 0}
              className="w-full"
            >
              Weiter ({selectedOptions.length} ausgewählt)
            </Button>
          </div>
        )}
      </div>

      {currentStep > 1 && (
        <div className="flex justify-start">
          <Button
            variant="ghost"
            onClick={handleBack}
            className="flex items-center gap-2"
          >
            <ChevronLeft className="h-4 w-4" />
            Zurück
          </Button>
        </div>
      )}
    </div>
  );
};

export default BeraterFlow;
