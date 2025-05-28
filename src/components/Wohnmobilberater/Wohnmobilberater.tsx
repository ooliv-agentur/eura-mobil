
import React, { useEffect, useState } from "react";
import { useWohnmobilberater } from "@/context/WohnmobilberaterContext";
import { useNavigate, useLocation } from "react-router-dom";
import BeraterOverlay from "./BeraterOverlay";

const Wohnmobilberater: React.FC = () => {
  const { resetBerater } = useWohnmobilberater();
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Check if we should open the overlay based on the current route
  useEffect(() => {
    if (location.pathname === '/berater') {
      setIsOverlayOpen(true);
      resetBerater();
    }
  }, [location.pathname, resetBerater]);

  // Handle overlay close - navigate back to home
  const handleClose = () => {
    setIsOverlayOpen(false);
    navigate('/');
  };

  return (
    <BeraterOverlay 
      isOpen={isOverlayOpen} 
      onClose={handleClose} 
    />
  );
};

export default Wohnmobilberater;
