
// Equipment section tab keys in German
export const equipmentTabs = {
  chassis: "Chassis",
  body: "Aufbau",
  driversCabin: "Fahrerhaus",
  livingArea: "Wohnwelt",
  kitchen: "Küche",
  bathroom: "Waschraum",
  sleeping: "Schlafbereich",
  installation: "Wasserinstallation",
  electrical: "Elektroinstallation"
};

// Define types for our model data
export type BaseModelData = {
  id: string;
  name: string;
  intro: string;
  heroImage: string;
  galleryImages: string[];
  technicalData: Record<string, string>;
  highlights: string[];
};

export type FullModelData = BaseModelData & {
  layouts: Array<{
    id: string;
    name: string;
    image: string;
    length: string;
    sleepingPlaces: string;
  }>;
  interior: Array<{
    name: string;
    description: string;
  }>;
  upholsteryTypes: string[];
  equipment: Record<string, string[]>;
};

export type DownloadModelData = BaseModelData & {
  downloadItems: Array<{
    name: string;
    type: string;
    url: string;
  }>;
};

export type ModelData = FullModelData | DownloadModelData;

// Type guards
export function hasLayouts(model: ModelData): model is FullModelData {
  return 'layouts' in model && Array.isArray(model.layouts);
}

export function hasInterior(model: ModelData): model is FullModelData {
  return 'interior' in model && Array.isArray(model.interior);
}

export function hasUpholstery(model: ModelData): model is FullModelData {
  return 'upholsteryTypes' in model && Array.isArray(model.upholsteryTypes);
}

export function hasEquipment(model: ModelData): model is FullModelData {
  return 'equipment' in model && model.equipment !== undefined;
}

// Re-export the models data from the new location
export { modelsData } from './models';
