
import { ModelData } from '@/data/modelsData';

export function getHeroContent(modelDetails: ModelData) {
  // Special case for Van model
  if (modelDetails.id === 'van') {
    return {
      title: 'Für Aktive und Unabhängige',
      subtitle: 'Vans'
    };
  }
  
  // Default case for other models
  return {
    title: `Für Deine beste Zeit. ${modelDetails.name}`,
    subtitle: ''
  };
}

export function getMainHeading(modelDetails: ModelData) {
  // Special case for Van model
  if (modelDetails.id === 'van') {
    return 'Für Deine beste Zeit.\nEura Mobil Vans';
  }
  
  // Default case for other models
  return modelDetails.name;
}
