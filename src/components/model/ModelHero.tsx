
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
      {/* Hero Section */}
      <div className="relative bg-[#E5E7EB] h-[60vh] md:h-[70vh] flex items-center justify-center">
        <div className="text-center z-10 px-4 max-w-6xl">
          <p className="text-xl md:text-2xl lg:text-3xl mb-4">{subline}</p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">{headline}</h1>
        </div>
      </div>
    </section>
  );
};
