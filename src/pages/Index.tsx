
import { useEffect } from "react";
import { Layout } from "@/components/Layout";
import BeraterContainer from "@/components/Wohnmobilberater/BeraterContainer";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  // If accessed directly, redirect to home with overlay trigger
  useEffect(() => {
    // Small delay to ensure component is mounted
    const timer = setTimeout(() => {
      // The BeraterContainer component will handle showing the flow
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout>
      <BeraterContainer />
    </Layout>
  );
};

export default Index;
