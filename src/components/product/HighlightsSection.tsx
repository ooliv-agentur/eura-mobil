
import React from "react";
import { ModelData } from "@/data/modelsData";
import { getMainHeading } from "@/utils/heroContent";

interface HighlightsSectionProps {
  modelDetails: ModelData;
}

export const HighlightsSection: React.FC<HighlightsSectionProps> = ({ modelDetails }) => {
  // Split intro text by double line breaks to create paragraphs
  const introParagraphs = modelDetails.intro.split('\n\n').filter(paragraph => paragraph.trim() !== '');

  return (
    <section id="highlights" className="my-10">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-8">
          {getMainHeading(modelDetails)}
        </h2>
        
        {/* Intro paragraphs */}
        <div className="space-y-4 mb-8">
          {introParagraphs.map((paragraph, index) => (
            <p key={index} className="text-black leading-relaxed">
              {paragraph.trim()}
            </p>
          ))}
        </div>
      </div>
      
      <h3 className="text-2xl font-semibold mb-6">Highlights</h3>
      
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
