
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
  return (
    <Button 
      className={className}
      variant={variant}
      size={size}
      asChild
    >
      <Link to="/berater">
        Beratung starten
      </Link>
    </Button>
  );
};

export default BeraterButton;
