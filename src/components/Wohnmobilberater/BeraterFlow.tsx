
import React from 'react';
import { useWohnmobilberater } from '@/context/WohnmobilberaterContext';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { ChevronLeft } from 'lucide-react';
import EnhancedResultsDisplay from './EnhancedResultsDisplay';

const BeraterFlow: React.FC = () => {
  const {
    currentStep,
    totalSteps,
    questions,
    selectedOption,
    handleNext,
    handleBack,
    answers
  } = useWohnmobilberater();

  // If we're past all questions, show results
  if (currentStep > totalSteps) {
    // Simple matching logic based on answers
    const getRecommendedModels = () => {
      const models = [];
      
      // Based on sleeping places
      if (answers[0]?.includes('2')) {
        models.push({ id: 'van', name: 'Van' });
        models.push({ id: 'contura', name: 'Contura' });
      }
      if (answers[0]?.includes('4')) {
        models.push({ id: 'profila-rs', name: 'Profila RS' });
        models.push({ id: 'integra-line', name: 'Integra Line' });
      }
      if (answers[0]?.includes('6')) {
        models.push({ id: 'activa-one', name: 'Activa One' });
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

    return <EnhancedResultsDisplay models={getRecommendedModels()} />;
  }

  const currentQuestion = questions[currentStep - 1];
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="max-w-2xl mx-auto p-6">
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
        <div className="grid gap-3">
          {currentQuestion.options.map((option, index) => (
            <Button
              key={index}
              variant={selectedOption === option ? "default" : "outline"}
              className="justify-start p-4 h-auto text-left"
              onClick={() => handleNext(option)}
            >
              {option}
            </Button>
          ))}
        </div>
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
