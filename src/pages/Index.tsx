
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
    
    // Set to fullpage mode and start the advisor
    setDisplayMode("fullpage");
    startBerater(step === '1' ? 1 : 0); // Start with intro or step 1 based on URL parameter
  }, [setDisplayMode, startBerater, location.search]);

  return (
    <Layout>
      <Wohnmobilberater />
    </Layout>
  );
};

export default Index;
