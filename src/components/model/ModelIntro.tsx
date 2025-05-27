
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ModelIntroProps {
  title: string;
  content: string;
  topLine?: string;
  interiorHotspots?: Array<{ name: string; description: string; }>;
  exteriorHotspots?: Array<{ name: string; description: string; }>;
}

export const ModelIntro: React.FC<ModelIntroProps> = ({ 
  title, 
  content, 
  topLine, 
  interiorHotspots, 
  exteriorHotspots 
}) => {
  // Split intro text by double line breaks to create paragraphs
  const introParagraphs = content.split('\n\n').filter(paragraph => paragraph.trim() !== '');
  
  const hasHotspots = interiorHotspots || exteriorHotspots;
  const hasMultipleHotspotTypes = interiorHotspots && exteriorHotspots;

  return (
    <section id="model-intro" className="mb-16">
      {/* Intro Section */}
      <div className="mx-auto">
        {topLine && (
          <p className="text-xl md:text-2xl text-center mb-4">{topLine}</p>
        )}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">{title}</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6 leading-relaxed">
            {introParagraphs.map((paragraph, index) => (
              <p key={index}>
                {paragraph.trim()}
              </p>
            ))}
          </div>
          
          <div>
            {hasHotspots ? (
              hasMultipleHotspotTypes ? (
                <Tabs defaultValue="interior" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-4">
                    <TabsTrigger value="interior">Innen</TabsTrigger>
                    <TabsTrigger value="exterior">Außen</TabsTrigger>
                  </TabsList>
                  <TabsContent value="interior">
                    <AspectRatio ratio={16/9} className="bg-gray-200 rounded-md" />
                  </TabsContent>
                  <TabsContent value="exterior">
                    <AspectRatio ratio={16/9} className="bg-gray-200 rounded-md" />
                  </TabsContent>
                </Tabs>
              ) : (
                <AspectRatio ratio={16/9} className="bg-gray-200 rounded-md" />
              )
            ) : (
              <AspectRatio ratio={16/9} className="bg-gray-200 rounded-md" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
