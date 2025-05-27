
import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselIndicators,
} from "@/components/ui/carousel";

interface ModelUpholsteryProps {
  upholsteryTypes: string[];
}

export const ModelUpholstery: React.FC<ModelUpholsteryProps> = ({ upholsteryTypes }) => {
  if (upholsteryTypes.length === 0) return null;

  return (
    <section id="model-upholstery" className="my-10">
      {/* Upholstery Section */}
      <h2 className="text-2xl font-semibold mb-4">Polster</h2>
      <Carousel className="w-full" showIndicators={true}>
        <CarouselContent>
          {upholsteryTypes.map((type, index) => (
            <CarouselItem key={index} className="basis-full sm:basis-1/2 md:basis-1/3">
              <div className="bg-gray-100 rounded-lg overflow-hidden">
                <AspectRatio ratio={4/3} className="bg-gray-200" />
                <div className="p-3 text-center">
                  <h3 className="font-medium whitespace-pre-line">{type}</h3>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden md:flex justify-end gap-2 mt-2">
          <CarouselPrevious />
          <CarouselNext />
        </div>
        <CarouselIndicators />
      </Carousel>
    </section>
  );
};
