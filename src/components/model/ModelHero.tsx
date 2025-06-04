
import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ModelHeroProps {
  headline: string;
  subline: string;
  imagePlaceholder?: string;
}

export const ModelHero: React.FC<ModelHeroProps> = ({ 
  headline, 
  subline, 
  imagePlaceholder = "/placeholder.svg" 
}) => {
  return (
    <section id="model-hero" className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-12">
      {/* Hero Section - Updated to match homepage font sizes and order */}
      <div className="relative bg-[#E5E7EB] h-[60vh] md:h-[70vh] flex items-center justify-center">
        <div className="text-center z-10 px-4 max-w-6xl">
          <p className="text-lg md:text-xl mb-4">{subline}</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">{headline}</h1>
        </div>
      </div>
    </section>
  );
};
