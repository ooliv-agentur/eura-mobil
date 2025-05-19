
import { useEffect } from "react";
import { useWohnmobilberater } from "@/context/WohnmobilberaterContext";
import { Layout } from "@/components/Layout";
import Wohnmobilberater from "@/components/Wohnmobilberater/Wohnmobilberater";

const Index = () => {
  const { startBerater, setDisplayMode } = useWohnmobilberater();
  
  useEffect(() => {
    // Set to fullpage mode and start the advisor
    setDisplayMode("fullpage");
    startBerater(0); // Start with intro step for the standalone page
  }, [setDisplayMode, startBerater]);

  return (
    <Layout>
      <Wohnmobilberater />
    </Layout>
  );
};

export default Index;
