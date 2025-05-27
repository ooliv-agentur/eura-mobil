
import { ModelData } from '@/data/modelsData';

export function getHeroContent(modelDetails: ModelData) {
  // Special case for Van model
  if (modelDetails.id === 'van') {
    return {
      title: 'Für Aktive und Unabhängige',
      subtitle: 'Vans'
    };
  }
  
  // Special case for Profila T Fiat model
  if (modelDetails.id === 'profila-t-fiat') {
    return {
      title: 'Offen, großzügig, frei',
      subtitle: 'Profila T'
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
  
  // Special case for Profila T Fiat model
  if (modelDetails.id === 'profila-t-fiat') {
    return 'Feel free!\nProfila T Teilintegrierte';
  }
  
  // Default case for other models
  return modelDetails.name;
}
