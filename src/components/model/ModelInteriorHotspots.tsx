
import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselIndicators,
} from "@/components/ui/carousel";

interface InteriorItem {
  name: string;
  description: string;
}

interface ModelInteriorHotspotsProps {
  interiorItems: InteriorItem[];
  exteriorItems?: InteriorItem[];
}

export const ModelInteriorHotspots: React.FC<ModelInteriorHotspotsProps> = ({ 
  interiorItems, 
  exteriorItems 
}) => {
  if (interiorItems.length === 0 && (!exteriorItems || exteriorItems.length === 0)) return null;

  const hasExterior = exteriorItems && exteriorItems.length > 0;

  const renderHotspots = (items: InteriorItem[]) => (
    <Carousel className="w-full" showIndicators={true}>
      <CarouselContent>
        {items.map((item, index) => (
          <CarouselItem key={index} className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
            <Card className="overflow-hidden border shadow-sm">
              <AspectRatio ratio={1/1} className="bg-gray-200" />
              <CardContent className="p-4">
                <h3 className="font-medium mb-1">{item.name}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="hidden md:flex justify-end gap-2 mt-2">
        <CarouselPrevious />
        <CarouselNext />
      </div>
      <CarouselIndicators />
    </Carousel>
  );

  return (
    <section id="model-interior-hotspots" className="my-10">
      {hasExterior ? (
        <>
          <h2 className="text-2xl font-semibold mb-6">Hotspots</h2>
          <Tabs defaultValue="interior" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="interior">Innen</TabsTrigger>
              <TabsTrigger value="exterior">Außen</TabsTrigger>
            </TabsList>
            <TabsContent value="interior" className="mt-6">
              {renderHotspots(interiorItems)}
            </TabsContent>
            <TabsContent value="exterior" className="mt-6">
              {renderHotspots(exteriorItems)}
            </TabsContent>
          </Tabs>
        </>
      ) : (
        <>
          <h2 className="text-2xl font-semibold mb-6">Innenraum</h2>
          {renderHotspots(interiorItems)}
        </>
      )}
    </section>
  );
};
