
import { ModelData } from "@/data/modelsData";

export function getHeroContent(modelDetails: ModelData) {
  // Special case for Profila T models
  if (modelDetails.id === "profila-t-fiat" || modelDetails.id === "profila-t-mercedes") {
    return {
      title: "Offen, großzügig, frei",
      subtitle: "Profila T"
    };
  }
  
  // Default hero content for other models
  return {
    title: `Für Deine beste Zeit. Eura Mobil ${modelDetails.name}`,
    subtitle: modelDetails.name
  };
}

export function getMainHeading(modelDetails: ModelData) {
  // Special case for Profila T models
  if (modelDetails.id === "profila-t-fiat" || modelDetails.id === "profila-t-mercedes") {
    return "Profila T";
  }
  
  // Default heading for other models
  return `Für Deine beste Zeit. Eura Mobil ${modelDetails.name}`;
}

export function getModelHeroContent(modelDetails: ModelData) {
  // Model-specific content for the modelHero section
  switch (modelDetails.id) {
    case "profila-t-fiat":
    case "profila-t-mercedes":
      return {
        headline: "Feel free!",
        subline: "Profila T Teilintegrierte"
      };
    case "van":
      return {
        headline: "Für Aktive und Unabhängige",
        subline: "Vans"
      };
    case "contura":
      return {
        headline: "Für Deine beste Zeit",
        subline: "Contura"
      };
    case "profila-rs":
      return {
        headline: "Luxus pur",
        subline: "Profila RS"
      };
    case "integra-line-fiat":
      return {
        headline: "Vollintegriert",
        subline: "Integra Line Fiat"
      };
    case "integra-line-gt-mercedes":
      return {
        headline: "Premium Integration",
        subline: "Integra Line GT Mercedes"
      };
    case "activa-one":
      return {
        headline: "Familien-Alkoven",
        subline: "Activa One"
      };
    case "integra":
      return {
        headline: "Premium-Vollintegration",
        subline: "Integra"
      };
    case "xtura":
      return {
        headline: "Innovation & Design",
        subline: "Xtura"
      };
    default:
      return {
        headline: `Für Deine beste Zeit`,
        subline: modelDetails.name
      };
  }
}
