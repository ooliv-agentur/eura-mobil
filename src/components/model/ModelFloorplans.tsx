
import React from "react";
import { FloorplanCard } from "@/components/comparison/FloorplanCard";

interface FloorplanData {
  id: string;
  name: string;
  image: string;
  length: string;
  sleepingPlaces: string;
}

interface ModelFloorplansProps {
  floorplans: FloorplanData[];
  showComparison?: boolean;
  modelSeries?: string; // Add modelSeries prop to pass to FloorplanCard
}

export const ModelFloorplans: React.FC<ModelFloorplansProps> = ({ 
  floorplans, 
  showComparison = false,
  modelSeries = "xtura" // Default fallback
}) => {
  if (floorplans.length === 0) return null;

  return (
    <section id="model-floorplans" className="my-10">
      {/* Floorplans Section */}
      <h2 className="text-2xl font-semibold mb-4">Grundrisse</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {floorplans.map((floorplan) => (
          <FloorplanCard
            key={floorplan.id}
            id={floorplan.id}
            name={floorplan.name}
            length={floorplan.length}
            sleepingPlaces={floorplan.sleepingPlaces}
            showComparison={showComparison}
            modelSeries={modelSeries}
          />
        ))}
      </div>
    </section>
  );
};
