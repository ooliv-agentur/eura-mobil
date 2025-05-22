
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ModelForComparison {
  id: string;
  name: string;
}

interface ComparisonContextType {
  selectedModels: ModelForComparison[];
  addModel: (model: ModelForComparison) => void;
  removeModel: (id: string) => void;
  clearModels: () => void;
  isSelected: (id: string) => boolean;
}

const ComparisonContext = createContext<ComparisonContextType | undefined>(undefined);

export const ComparisonProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [selectedModels, setSelectedModels] = useState<ModelForComparison[]>([]);

  const addModel = (model: ModelForComparison) => {
    if (selectedModels.length < 2 && !isSelected(model.id)) {
      setSelectedModels([...selectedModels, model]);
    }
  };

  const removeModel = (id: string) => {
    setSelectedModels(selectedModels.filter(model => model.id !== id));
  };

  const clearModels = () => {
    setSelectedModels([]);
  };

  const isSelected = (id: string) => {
    return selectedModels.some(model => model.id === id);
  };

  return (
    <ComparisonContext.Provider value={{
      selectedModels,
      addModel,
      removeModel,
      clearModels,
      isSelected
    }}>
      {children}
    </ComparisonContext.Provider>
  );
};

export const useComparison = () => {
  const context = useContext(ComparisonContext);
  if (context === undefined) {
    throw new Error('useComparison must be used within a ComparisonProvider');
  }
  return context;
};
