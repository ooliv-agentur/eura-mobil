
import React from "react";
import { Circle } from "lucide-react";

interface SidebarNavigationProps {
  items: Array<{
    id: string;
    label: string;
  }>;
}

export const SidebarNavigation: React.FC<SidebarNavigationProps> = ({ items }) => {
  return (
    <div className="hidden md:block fixed left-6 top-1/2 -translate-y-1/2 z-20">
      <nav className="flex flex-col gap-4">
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
            aria-label={`Navigate to ${item.label} section`}
          >
            <Circle className="h-6 w-6 text-gray-500" />
          </a>
        ))}
      </nav>
    </div>
  );
};
