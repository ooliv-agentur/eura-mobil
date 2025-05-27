
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
      title: 'Willkommen auf der Sternenseite des Lebens',
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
  
  // Special case for Integra Line Fiat model
  if (modelDetails.id === 'integra-line-fiat') {
    return {
      title: 'Freiheit soll genossen werden.',
      subtitle: 'Integra Line'
    };
  }
  
  // Special case for Integra Line GT Mercedes model
  if (modelDetails.id === 'integra-line-gt-mercedes') {
    return {
      title: 'Der Grand Tourismo in der Königsklasse',
      subtitle: 'Integra Line GT'
    };
  }
  
  // Special case for Integra model
  if (modelDetails.id === 'integra') {
    return {
      title: 'Premium-Vollintegration',
      subtitle: 'Integra'
    };
  }
  
  // Special case for Xtura model
  if (modelDetails.id === 'xtura') {
    return {
      title: 'Innovation und Design',
      subtitle: 'Xtura'
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
    return 'Contura – der Luxus-Teilintegrierte';
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
  
  // Special case for Integra Line Fiat model
  if (modelDetails.id === 'integra-line-fiat') {
    return 'Integra Line Integrierte';
  }
  
  // Special case for Integra Line GT Mercedes model
  if (modelDetails.id === 'integra-line-gt-mercedes') {
    return 'Integra Line GT auf Mercedes-Benz Sprinter';
  }
  
  // Special case for Integra model
  if (modelDetails.id === 'integra') {
    return 'Integra Premium-Vollintegration';
  }
  
  // Special case for Xtura model
  if (modelDetails.id === 'xtura') {
    return 'Xtura - Innovation in reinster Form';
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
    return 'Contura – der Luxus-Teilintegrierte';
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
  
  // Special case for Integra Line Fiat model
  if (modelDetails.id === 'integra-line-fiat') {
    return 'Integra Line Integrierte';
  }
  
  // Special case for Integra Line GT Mercedes model
  if (modelDetails.id === 'integra-line-gt-mercedes') {
    return 'Integra Line GT Integrierte';
  }
  
  // Special case for Integra model
  if (modelDetails.id === 'integra') {
    return 'Integra Premium-Vollintegration';
  }
  
  // Special case for Xtura model
  if (modelDetails.id === 'xtura') {
    return 'Xtura - Innovation in reinster Form';
  }
  
  // Default case for other models
  return `Für Deine beste Zeit. ${modelDetails.name}`;
}
