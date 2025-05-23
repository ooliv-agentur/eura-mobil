
import React from "react";
import { Button } from "@/components/ui/button";
import { useWohnmobilberater } from "@/context/WohnmobilberaterContext";

interface BeraterButtonProps {
  className?: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
}

const BeraterButton: React.FC<BeraterButtonProps> = ({
  className,
  variant = "default",
  size = "default",
}) => {
  const { openBerater } = useWohnmobilberater();

  return (
    <Button 
      onClick={openBerater} 
      className={className}
      variant={variant}
      size={size}
    >
      Beratung starten
    </Button>
  );
};

export default BeraterButton;
