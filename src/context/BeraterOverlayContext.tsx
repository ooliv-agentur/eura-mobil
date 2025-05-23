
import React, { createContext, useContext, useState, ReactNode } from "react";

interface BeraterOverlayContextType {
  isOverlayOpen: boolean;
  openOverlay: () => void;
  closeOverlay: () => void;
}

const BeraterOverlayContext = createContext<BeraterOverlayContextType | undefined>(undefined);

export const BeraterOverlayProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const openOverlay = () => setIsOverlayOpen(true);
  const closeOverlay = () => setIsOverlayOpen(false);

  return (
    <BeraterOverlayContext.Provider value={{ isOverlayOpen, openOverlay, closeOverlay }}>
      {children}
    </BeraterOverlayContext.Provider>
  );
};

export const useBeraterOverlay = () => {
  const context = useContext(BeraterOverlayContext);
  if (context === undefined) {
    throw new Error("useBeraterOverlay must be used within a BeraterOverlayProvider");
  }
  return context;
};
