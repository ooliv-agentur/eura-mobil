
import { useEffect } from "react";
import { Layout } from "@/components/Layout";
import Wohnmobilberater from "@/components/Wohnmobilberater/Wohnmobilberater";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  // If accessed directly, redirect to home with overlay trigger
  useEffect(() => {
    // Small delay to ensure component is mounted
    const timer = setTimeout(() => {
      // The Wohnmobilberater component will handle opening the overlay
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout>
      <Wohnmobilberater />
    </Layout>
  );
};

export default Index;
