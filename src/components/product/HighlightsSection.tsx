
import React from "react";
import { Circle } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ModelData } from "@/data/modelsData";
import { getMainHeading } from "@/utils/heroContent";

interface HighlightsSectionProps {
  modelDetails: ModelData;
}

const EmptyGrayBoxPlaceholder = ({ ratio = 16/9 }: { ratio?: number }) => (
  <AspectRatio ratio={ratio} className="bg-[#E5E7EB]" />
);

export const HighlightsSection: React.FC<HighlightsSectionProps> = ({ modelDetails }) => {
  return (
    <section id="highlights" className="mb-16">
      <div className="mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-8">
          {getMainHeading(modelDetails)}
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="space-y-8 text-black leading-relaxed">
            <div>
              <p className="text-black">
                {modelDetails.intro}
              </p>
            </div>
          </div>
          
          <div>
            <EmptyGrayBoxPlaceholder ratio={16/9} />
          </div>
        </div>

        <div className="bg-gray-50 p-6 md:p-8 rounded-lg">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-black">Highlights der Baureihe:</h3>
          <div className="space-y-4">
            {modelDetails.highlights.map((highlight, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0 mt-1">
                  <Circle className="h-3 w-3 text-gray-600 fill-current" />
                </div>
                <p className="text-black">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
