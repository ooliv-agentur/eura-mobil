
import React from "react";
import { Button } from "@/components/ui/button";
import { useBeraterOverlay } from "@/context/BeraterOverlayContext";

interface BeraterButtonProps {
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
}

const BeraterButton: React.FC<BeraterButtonProps> = ({ 
  variant = "default", 
  size = "default", 
  className = "" 
}) => {
  const { openOverlay } = useBeraterOverlay();

  return (
    <Button 
      variant={variant} 
      size={size} 
      className={className} 
      onClick={openOverlay}
    >
      Beratung starten
    </Button>
  );
};

export default BeraterButton;
