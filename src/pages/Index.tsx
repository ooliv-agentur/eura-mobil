
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useWohnmobilberater } from "@/context/WohnmobilberaterContext";
import { Layout } from "@/components/Layout";
import Wohnmobilberater from "@/components/Wohnmobilberater/Wohnmobilberater";

const Index = () => {
  const { startBerater, setDisplayMode } = useWohnmobilberater();
  const location = useLocation();
  
  useEffect(() => {
    // Get the step from URL query parameters
    const searchParams = new URLSearchParams(location.search);
    const step = searchParams.get('step');
    
    // Set to fullpage mode and start the advisor with a slight delay to ensure initialization
    setDisplayMode("fullpage");
    
    // Use setTimeout to avoid race conditions
    setTimeout(() => {
      const initialStep = step === '1' ? 1 : 0;
      console.log("Starting berater with step:", initialStep);
      startBerater(initialStep); // Start with intro or step 1 based on URL parameter
    }, 100);
    
  }, [setDisplayMode, startBerater, location.search]);

  return (
    <Layout>
      <Wohnmobilberater />
    </Layout>
  );
};

export default Index;
