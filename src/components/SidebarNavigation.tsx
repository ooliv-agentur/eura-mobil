
import React from "react";
import { Circle } from "lucide-react";

interface NavItem {
  id: string;
  label: string;
}

interface SidebarNavigationProps {
  items: NavItem[];
}

export function SidebarNavigation({ items }: SidebarNavigationProps) {
  return (
    <div className="hidden md:flex fixed left-4 top-1/2 -translate-y-1/2 flex-col gap-6 z-10">
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
    </div>
  );
}
