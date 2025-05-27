
import { ModelData } from '@/data/modelsData';

export function getHeroContent(modelDetails: ModelData) {
  // Special case for Van model
  if (modelDetails.id === 'van') {
    return {
      title: 'Für Aktive und Unabhängige',
      subtitle: 'Vans'
    };
  }
  
  // Special case for Contura model
  if (modelDetails.id === 'contura') {
    return {
      title: 'Luxus trifft Innovation',
      subtitle: 'Contura'
    };
  }
  
  // Special case for Profila T Fiat model
  if (modelDetails.id === 'profila-t-fiat') {
    return {
      title: 'Offen, großzügig, frei',
      subtitle: 'Profila T'
    };
  }
  
  // Special case for Profila RS model
  if (modelDetails.id === 'profila-rs') {
    return {
      title: 'Für Anspruchsvolle mit Stil',
      subtitle: 'Profila RS'
    };
  }
  
  // Special case for Profila T Mercedes model
  if (modelDetails.id === 'profila-t-mercedes') {
    return {
      title: 'Edel, exklusiv und elegant',
      subtitle: 'Profila T Mercedes'
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
  
  // Special case for Contura model
  if (modelDetails.id === 'contura') {
    return 'Contura Teilintegrierte';
  }
  
  // Special case for Profila T Fiat model
  if (modelDetails.id === 'profila-t-fiat') {
    return 'Feel free!\nProfila T Teilintegrierte';
  }
  
  // Special case for Profila RS model
  if (modelDetails.id === 'profila-rs') {
    return 'Macht einzigartige Erlebnisse noch einzigartiger!';
  }
  
  // Special case for Profila T Mercedes model
  if (modelDetails.id === 'profila-t-mercedes') {
    return 'Profila T auf Mercedes';
  }
  
  // Default case for other models
  return modelDetails.name;
}

export function getIntroSectionTitle(modelDetails: ModelData) {
  // Special case for Van model
  if (modelDetails.id === 'van') {
    return 'Für Deine beste Zeit. Eura Mobil Vans';
  }
  
  // Special case for Contura model
  if (modelDetails.id === 'contura') {
    return 'Contura Teilintegrierte';
  }
  
  // Special case for Profila T Fiat model
  if (modelDetails.id === 'profila-t-fiat') {
    return 'Feel free!\nProfila T Teilintegrierte';
  }
  
  // Special case for Profila RS model
  if (modelDetails.id === 'profila-rs') {
    return 'Profila RS Teilintegrierte';
  }
  
  // Special case for Profila T Mercedes model
  if (modelDetails.id === 'profila-t-mercedes') {
    return 'Profila T auf Mercedes';
  }
  
  // Default case for other models
  return `Für Deine beste Zeit. ${modelDetails.name}`;
}
