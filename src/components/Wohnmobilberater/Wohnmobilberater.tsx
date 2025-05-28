
import React, { useEffect, useState } from "react";
import { useWohnmobilberater } from "@/context/WohnmobilberaterContext";
import { useNavigate, useLocation } from "react-router-dom";
import BeraterOverlay from "./BeraterOverlay";

const Wohnmobilberater: React.FC = () => {
  const { resetBerater, isOpen } = useWohnmobilberater();
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Check if we should open the overlay based on the current route
  useEffect(() => {
    if (location.pathname === '/berater') {
      setIsOverlayOpen(true);
      resetBerater();
    } else if (isOpen) {
      setIsOverlayOpen(true);
    }
  }, [location.pathname, resetBerater, isOpen]);

  // Handle overlay close - navigate back to home
  const handleClose = () => {
    setIsOverlayOpen(false);
    if (location.pathname === '/berater') {
      navigate('/');
    }
  };

  return (
    <BeraterOverlay 
      isOpen={isOverlayOpen} 
      onClose={handleClose} 
    />
  );
};

export default Wohnmobilberater;
