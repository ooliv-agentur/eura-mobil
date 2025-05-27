
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
        <div className="text-center text-black z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">{headline}</h1>
          <p className="text-xl md:text-2xl lg:text-3xl">{subline}</p>
        </div>
      </div>
    </section>
  );
};
