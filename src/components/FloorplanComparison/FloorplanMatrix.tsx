
import React, { useState } from "react";
import { FloorplanCard } from "./FloorplanCard";
import { ComparisonBar } from "./ComparisonBar";
import { ComparisonOverlay } from "./ComparisonOverlay";

// Mock data for floorplans
const mockFloorplans = [
  {
    id: "v-635-eb",
    name: "V 635 EB",
    length: "6360 mm",
    beds: "2",
    detailUrl: "/wohnmobile/vans/v-635-eb-2-2",
    specs: {
      length: "6360 mm",
      rearBed: "1950×800 + 1860×800 mm",
      weight: "3031 (2879–3183) kg",
      convertibleDinette: "1560 × 950 (500) mm",
      seatingExtension: "4"
    }
  },
  {
    id: "v-635-hb",
    name: "V 635 HB",
    length: "6360 mm",
    beds: "2",
    detailUrl: "/wohnmobile/vans/v-635-hb-2-2",
    specs: {
      length: "6360 mm",
      rearBed: "1850 (1700) × 1600 mm",
      weight: "3031 (2879–3183) kg",
      convertibleDinette: "1560 × 950 (500) mm",
      seatingExtension: "4"
    }
  },
  {
    id: "v-595-hb",
    name: "V 595 HB",
    length: "5990 mm",
    beds: "2",
    detailUrl: "/wohnmobile/vans/v-595-hb-2-2",
    specs: {
      length: "5990 mm",
      rearBed: "1860 × 1490 mm",
      weight: "2921 (2775–3067) kg",
      convertibleDinette: "1600 × 950 (500) mm",
      seatingExtension: "-"
    }
  },
  {
    id: "prs-695-eb",
    name: "PRS 695 EB",
    length: "6950 mm",
    beds: "2",
    detailUrl: "/wohnmobile/teilintegrierte/profila-rs/prs-695-eb",
    specs: {
      length: "6950 mm",
      rearBed: "2000×800 + 1950×800 mm",
      weight: "3050 (2897–3203) kg",
      convertibleDinette: "1500 × 1000 mm",
      seatingExtension: "5"
    }
  },
  {
    id: "prs-720-eb",
    name: "PRS 720 EB",
    length: "7200 mm",
    beds: "2",
    detailUrl: "/wohnmobile/teilintegrierte/profila-rs/prs-720-eb",
    specs: {
      length: "7200 mm",
      rearBed: "2000×800 + 1950×800 mm",
      weight: "3150 (2992–3308) kg",
      convertibleDinette: "1500 × 1000 mm",
      seatingExtension: "5"
    }
  },
  {
    id: "prs-720-qb",
    name: "PRS 720 QB",
    length: "7200 mm",
    beds: "2",
    detailUrl: "/wohnmobile/teilintegrierte/profila-rs/prs-720-qb",
    specs: {
      length: "7200 mm",
      rearBed: "1950 × 1500 mm",
      weight: "3150 (2992–3308) kg",
      convertibleDinette: "1500 × 1000 mm",
      seatingExtension: "5"
    }
  }
];

export const FloorplanMatrix: React.FC = () => {
  const [selectedModels, setSelectedModels] = useState<string[]>([]);
  const [isComparisonOpen, setIsComparisonOpen] = useState(false);

  const handleToggleCompare = (id: string, isChecked: boolean) => {
    if (isChecked) {
      if (selectedModels.length < 3) {
        setSelectedModels([...selectedModels, id]);
      }
    } else {
      setSelectedModels(selectedModels.filter(modelId => modelId !== id));
    }
  };

  const handleRemoveModel = (id: string) => {
    setSelectedModels(selectedModels.filter(modelId => modelId !== id));
  };

  const handleStartComparison = () => {
    if (selectedModels.length >= 2) {
      setIsComparisonOpen(true);
    }
  };

  // Get selected models with data
  const selectedModelsData = mockFloorplans.filter(model => 
    selectedModels.includes(model.id)
  );

  // Create selected models array for comparison bar
  const selectedModelsForBar = selectedModelsData.map(model => ({
    id: model.id,
    name: model.name
  }));

  return (
    <div className="py-10">
      <h2 className="text-2xl font-semibold text-center mb-8">Grundrisse vergleichen</h2>
      
      {/* Floorplan Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20">
        {mockFloorplans.map((floorplan) => (
          <FloorplanCard
            key={floorplan.id}
            id={floorplan.id}
            name={floorplan.name}
            length={floorplan.length}
            beds={floorplan.beds}
            detailUrl={floorplan.detailUrl}
            onToggleCompare={handleToggleCompare}
            isSelected={selectedModels.includes(floorplan.id)}
          />
        ))}
      </div>

      {/* Comparison Bar */}
      <ComparisonBar
        selectedModels={selectedModelsForBar}
        onRemoveModel={handleRemoveModel}
        onStartComparison={handleStartComparison}
      />

      {/* Comparison Overlay */}
      <ComparisonOverlay
        isOpen={isComparisonOpen}
        onClose={() => setIsComparisonOpen(false)}
        models={selectedModelsData}
      />
    </div>
  );
};
