
import React, { createContext, useContext, useState } from "react";

type OverlayType = "none" | "menu" | "chat" | "search";

interface OverlayContextType {
  activeOverlay: OverlayType;
  setActiveOverlay: (overlay: OverlayType) => void;
  isOverlayActive: (overlay: OverlayType) => boolean;
}

const OverlayContext = createContext<OverlayContextType | undefined>(undefined);

export const OverlayProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeOverlay, setActiveOverlay] = useState<OverlayType>("none");

  const isOverlayActive = (overlay: OverlayType): boolean => {
    return activeOverlay === overlay;
  };

  return (
    <OverlayContext.Provider value={{ activeOverlay, setActiveOverlay, isOverlayActive }}>
      {children}
    </OverlayContext.Provider>
  );
};

export const useOverlay = (): OverlayContextType => {
  const context = useContext(OverlayContext);
  if (!context) {
    throw new Error("useOverlay must be used within an OverlayProvider");
  }
  return context;
};
