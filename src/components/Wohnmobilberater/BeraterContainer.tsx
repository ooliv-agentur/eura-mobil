
import React from 'react';
import { useWohnmobilberater } from '@/context/WohnmobilberaterContext';
import BeraterOverlay from './BeraterOverlay';
import { useComparison } from '@/context/ComparisonContext';

const BeraterContainer: React.FC = () => {
  const { isOpen, closeBerater } = useWohnmobilberater();
  
  // Ensure proper cleanup when closing the berater
  const handleClose = () => {
    closeBerater();
  };
  
  if (!isOpen) return null;
  
  return <BeraterOverlay isOpen={isOpen} onClose={handleClose} />;
};

export default BeraterContainer;
