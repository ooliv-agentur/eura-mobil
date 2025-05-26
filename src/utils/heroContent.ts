
import { ModelData } from "@/data/modelsData";

export const getHeroContent = (modelDetails: ModelData) => {
  switch (modelDetails.id) {
    case "van":
      return { title: "Vans", subtitle: "Für Aktive und Unabhängige" };
    case "profila-t-fiat":
      return { title: "Profila T", subtitle: "Offen, großzügig, frei" };
    case "profila-rs":
      return { title: "Profila RS", subtitle: "Wo Anspruch erst der Anfang ist" };
    case "activa-one":
      return { title: "Activa One", subtitle: "Familien-Alkoven der Extraklasse" };
    case "profila-t-mercedes":
      return { title: "Profila T auf Mercedes", subtitle: "Edel, exklusiv und elegant" };
    case "contura":
      return { title: "Der neue Contura", subtitle: "Willkommen auf der Sternenseite des Lebens" };
    case "integra-line-fiat":
      return { title: "Integra Line Fiat", subtitle: "Vollintegrierte Raumwunder" };
    case "integra-line-gt-mercedes":
      return { title: "Integra Line GT Mercedes", subtitle: "Mercedes GT-Luxus auf Rädern" };
    case "integra":
      return { title: "Integra", subtitle: "Premium-Vollintegration" };
    case "xtura":
      return { title: "Xtura", subtitle: "Innovation trifft Design" };
    default:
      return { title: modelDetails.name, subtitle: "Reisemobile der Extraklasse" };
  }
};

export const getMainHeading = (modelDetails: ModelData) => {
  switch (modelDetails.id) {
    case "profila-t-fiat":
      return "Feel free! Profila T Teilintegrierte";
    case "profila-rs":
      return "Macht einzigartige Erlebnisse noch einzigartiger! Profila RS Teilintegrierte";
    case "profila-t-mercedes":
      return "Edel, exklusiv und elegant Profila T auf Mercedes";
    case "contura":
      return "Der Wegbereiter Ihrer wertvollsten Zeit Contura – der Luxus-Teilintegrierte";
    default:
      return `Für Deine beste Zeit. ${modelDetails.name}`;
  }
};
