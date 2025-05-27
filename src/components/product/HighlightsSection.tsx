
import React from "react";
import { ModelData } from "@/data/modelsData";

interface HighlightsSectionProps {
  modelDetails: ModelData;
}

export const HighlightsSection: React.FC<HighlightsSectionProps> = ({ modelDetails }) => {
  // Split intro text by double line breaks to create paragraphs
  const introParagraphs = modelDetails.intro.split('\n\n').filter(paragraph => paragraph.trim() !== '');

  return (
    <section id="highlights" className="my-10">
      <h2 className="text-2xl font-semibold mb-6">Highlights</h2>
      
      {/* Intro paragraphs */}
      <div className="mb-8 space-y-4">
        {introParagraphs.map((paragraph, index) => (
          <p key={index} className="text-gray-700 leading-relaxed">
            {paragraph.trim()}
          </p>
        ))}
      </div>
      
      {/* Highlights list */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {modelDetails.highlights.map((highlight, index) => (
          <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
            <span className="text-gray-700">{highlight}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
