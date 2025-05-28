
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import BeraterFlow from './BeraterFlow';

const BeraterContainer: React.FC = () => {
  const location = useLocation();
  
  // Only render on the berater route
  if (location.pathname !== '/berater') {
    return null;
  }
  
  // Render with full layout (header + footer)
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <BeraterFlow />
      </div>
    </Layout>
  );
};

export default BeraterContainer;
