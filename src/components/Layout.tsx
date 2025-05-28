
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ChatbotWidget from "./chatbot/ChatbotWidget";
import { ComparisonBar } from "./comparison/ComparisonBar";
import { useComparison } from "@/context/ComparisonContext";
import { useLocation } from "react-router-dom";

export const Layout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const { selectedModels } = useComparison();
  const location = useLocation();
  
  // Show comparison bar on berater page only after results (when models are selected)
  const showComparisonBar = selectedModels.length > 0 && location.pathname === '/berater';

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
      <ChatbotWidget />
      {showComparisonBar && <ComparisonBar />}
    </div>
  );
};
