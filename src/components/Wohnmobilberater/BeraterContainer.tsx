
import React from 'react';
import { useWohnmobilberater } from '@/context/WohnmobilberaterContext';
import { Navigate } from 'react-router-dom';
import BeraterFlow from './BeraterFlow';

const BeraterContainer: React.FC = () => {
  const { isOpen, closeBerater } = useWohnmobilberater();
  
  // If berater is opened via context but we're not on the berater route, redirect
  if (isOpen && window.location.pathname !== '/berater') {
    closeBerater(); // Close the modal state
    return <Navigate to="/berater" replace />;
  }
  
  // Show the berater flow
  return <BeraterFlow />;
};

export default BeraterContainer;
