
import React from "react";
import { Circle } from "lucide-react";

interface ModelHighlightsProps {
  highlights: string[];
}

export const ModelHighlights: React.FC<ModelHighlightsProps> = ({ highlights }) => {
  return (
    <section id="model-highlights" className="mb-16">
      {/* Highlights Section */}
      <div className="bg-gray-50 p-6 md:p-8 rounded-lg">
        <h3 className="text-2xl md:text-3xl font-bold mb-6 text-black">Highlights der Baureihe:</h3>
        <div className="space-y-4">
          {highlights.map((highlight, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0 mt-1">
                <Circle className="h-3 w-3 text-gray-600 fill-current" />
              </div>
              <p className="text-black">{highlight}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
