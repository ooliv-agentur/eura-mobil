
import React from "react";
import { Layout } from "./Layout";

interface ProductLayoutProps {
  children: React.ReactNode;
}

export const ProductLayout: React.FC<ProductLayoutProps> = ({ children }) => {
  return (
    <Layout>
      <div className="product-detail-container">
        {children}
      </div>
    </Layout>
  );
};

export default ProductLayout;
