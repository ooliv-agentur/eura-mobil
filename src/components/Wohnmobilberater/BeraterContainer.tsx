
import React from 'react';
import { useWohnmobilberater } from '@/context/WohnmobilberaterContext';
import { Navigate, useLocation } from 'react-router-dom';
import BeraterFlow from './BeraterFlow';

const BeraterContainer: React.FC = () => {
  const { isOpen, closeBerater } = useWohnmobilberater();
  const location = useLocation();
  
  // Only render on the berater route
  if (location.pathname !== '/berater') {
    return null;
  }
  
  // Show the berater flow
  return <BeraterFlow />;
};

export default BeraterContainer;
