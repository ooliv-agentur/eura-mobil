
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
