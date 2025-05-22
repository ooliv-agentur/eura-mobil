
import React from "react";
import { Layout } from "../components/Layout";
import { FloorplanMatrix } from "../components/FloorplanComparison/FloorplanMatrix";

const ModelleOverview: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mt-12 mb-8 text-center">Wohnmobile</h1>
        
        {/* Existing model category content would be here */}
        <div className="mb-16">
          {/* Existing content */}
        </div>
        
        {/* Add our new FloorplanMatrix component */}
        <FloorplanMatrix />
      </div>
    </Layout>
  );
};

export default ModelleOverview;
