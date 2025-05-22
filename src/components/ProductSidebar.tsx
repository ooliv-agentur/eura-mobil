
import React from "react";

interface ProductSidebarProps {
  sections: string[];
  activeSection: string;
}

export const ProductSidebar: React.FC<ProductSidebarProps> = ({ sections, activeSection }) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100, // Offset for better positioning
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-30">
      <div className="flex flex-col gap-4">
        {sections.map((section) => (
          <button
            key={section}
            onClick={() => scrollToSection(section)}
            className="w-3 h-3 rounded-full focus:outline-none"
            aria-label={`Navigate to ${section}`}
          >
            <div 
              className={`w-3 h-3 rounded-full border-2 border-gray-400 transition-all duration-300 ${
                activeSection === section ? 'bg-primary border-primary scale-125' : 'bg-transparent'
              }`}
            />
            <span className="sr-only">{section}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
