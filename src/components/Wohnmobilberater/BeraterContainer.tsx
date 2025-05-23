
import React from 'react';
import { useWohnmobilberater } from '@/context/WohnmobilberaterContext';
import { Navigate } from 'react-router-dom';

const BeraterContainer: React.FC = () => {
  const { isOpen, closeBerater } = useWohnmobilberater();
  
  // If berater is opened via context, redirect to the berater page
  if (isOpen) {
    closeBerater(); // Close the modal state
    return <Navigate to="/berater" replace />;
  }
  
  return null;
};

export default BeraterContainer;
