
import React from "react";

interface ModelIntroProps {
  title: string;
  content: string;
  topLine?: string;
}

export const ModelIntro: React.FC<ModelIntroProps> = ({ title, content, topLine }) => {
  // Split intro text by double line breaks to create paragraphs
  const introParagraphs = content.split('\n\n').filter(paragraph => paragraph.trim() !== '');

  return (
    <section id="model-intro" className="mb-16">
      {/* Intro Section */}
      <div className="mx-auto">
        {topLine && (
          <p className="text-xl md:text-2xl text-center text-blue-600 mb-4">{topLine}</p>
        )}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-8">{title}</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6 text-black leading-relaxed">
            {introParagraphs.map((paragraph, index) => (
              <p key={index} className="text-black">
                {paragraph.trim()}
              </p>
            ))}
          </div>
          
          <div>
            <div className="bg-[#E5E7EB] w-full aspect-video rounded-md" />
          </div>
        </div>
      </div>
    </section>
  );
};
