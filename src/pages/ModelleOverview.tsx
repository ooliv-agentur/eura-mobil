
import React, { useState } from "react";
import { Layout } from "../components/Layout";
import { FloorplanMatrix } from "@/components/FloorplanComparison/FloorplanMatrix";

const ModelleOverview: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative w-full bg-gray-200" style={{ height: "60vh" }}>
        <div className="container mx-auto px-4 h-full flex items-center justify-center">
          <p className="text-gray-500 text-2xl">Modellbild (Hero)</p>
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        {/* Hero Text and CTA */}
        <div className="text-center py-8">
          <p className="mb-6">Vans von EURA MOBIL – kompakt, winterfest, komfortabel.</p>
        </div>
        
        {/* Floorplan Matrix Section - This component will handle all the comparison logic */}
        <FloorplanMatrix />
      </div>
    </Layout>
  );
};

export default ModelleOverview;
