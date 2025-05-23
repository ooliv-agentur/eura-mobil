
import React, { createContext, useContext, useState, ReactNode } from "react";

interface WohnmobilberaterContextType {
  isOpen: boolean;
  openBerater: () => void;
  closeBerater: () => void;
}

const WohnmobilberaterContext = createContext<WohnmobilberaterContextType | undefined>(undefined);

export const WohnmobilberaterProvider: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openBerater = () => {
    setIsOpen(true);
  };

  const closeBerater = () => {
    setIsOpen(false);
  };

  return (
    <WohnmobilberaterContext.Provider value={{ isOpen, openBerater, closeBerater }}>
      {children}
      {isOpen && <BeraterOverlay isOpen={isOpen} onClose={closeBerater} />}
    </WohnmobilberaterContext.Provider>
  );
};

export const useWohnmobilberater = (): WohnmobilberaterContextType => {
  const context = useContext(WohnmobilberaterContext);
  if (!context) {
    throw new Error("useWohnmobilberater must be used within a WohnmobilberaterProvider");
  }
  return context;
};

// Import at the end to avoid circular dependency issues
import BeraterOverlay from "@/components/Wohnmobilberater/BeraterOverlay";
