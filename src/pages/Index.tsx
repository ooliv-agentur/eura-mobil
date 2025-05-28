
import React from 'react';
import { Layout } from '@/components/Layout';
import BeraterFlow from '@/components/Wohnmobilberater/BeraterFlow';
import { WohnmobilberaterProvider } from '@/context/WohnmobilberaterContext';

const Index = () => {
  return (
    <WohnmobilberaterProvider>
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <BeraterFlow />
        </div>
      </Layout>
    </WohnmobilberaterProvider>
  );
};

export default Index;
