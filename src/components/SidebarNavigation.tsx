
import React, { useState, useEffect } from "react";
import { Circle, CircleDot } from "lucide-react";

interface SidebarNavigationProps {
  items: Array<{
    id: string;
    label: string;
  }>;
  children?: React.ReactNode; // For the Konfigurieren button
}

export const SidebarNavigation: React.FC<SidebarNavigationProps> = ({ items, children }) => {
  const [activeSection, setActiveSection] = useState<string>("");

  // Setup intersection observer to detect which section is in view
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "-80px 0px -20% 0px", // Adjusted to account for header height
      threshold: 0.1, // Section is considered in view when 10% visible for faster response
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // If the section is in view, set it as the active section
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    // Observe all sections
    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      // Cleanup observer
      items.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [items]);

  // Handle smooth scrolling to section
  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Calculate offset to account for fixed header
      const headerHeight = 80; // Adjust based on your header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

      // Set the active section immediately for better UX
      setActiveSection(id);
    }
  };

  return (
    <div className="hidden md:block fixed left-6 top-1/2 -translate-y-1/2 z-20">
      <nav className="flex flex-col gap-4">
        {items.map((item) => (
          <div key={item.id} className="relative group">
            <button
              onClick={() => handleScrollToSection(item.id)}
              className={`flex items-center justify-center w-10 h-10 rounded-full 
                ${activeSection === item.id 
                  ? "bg-gray-300" 
                  : "bg-gray-200 hover:bg-gray-300"} 
                transition-colors`}
              aria-label={`Navigate to ${item.label} section`}
            >
              {activeSection === item.id ? (
                <CircleDot className="h-6 w-6 text-gray-700" />
              ) : (
                <Circle className="h-6 w-6 text-gray-500" />
              )}
            </button>
            
            {/* Label that appears on hover */}
            <div className="hidden group-hover:flex absolute left-12 top-1/2 -translate-y-1/2 bg-white px-3 py-1.5 rounded-md shadow-md whitespace-nowrap">
              <span className="text-sm font-medium">{item.label}</span>
            </div>
          </div>
        ))}
        
        {/* Render children (Konfigurieren button) if provided */}
        {children && (
          <div className="mt-4 w-48">
            {children}
          </div>
        )}
      </nav>
    </div>
  );
};
