
import React from 'react';
import { useWohnmobilberater } from '@/context/WohnmobilberaterContext';
import BeraterOverlay from './BeraterOverlay';

const BeraterContainer: React.FC = () => {
  const { isOpen, closeBerater } = useWohnmobilberater();
  
  if (!isOpen) return null;
  
  return <BeraterOverlay isOpen={isOpen} onClose={closeBerater} />;
};

export default BeraterContainer;
