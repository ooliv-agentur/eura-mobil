
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ChatbotWidget from "./chatbot/ChatbotWidget";
import { useLocation } from "react-router-dom";

export const Layout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const location = useLocation();
  
  // Check if we're on the fullscreen berater page
  const isFullscreenBerater = location.pathname === '/berater' && location.search.includes('step=');

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
      <ChatbotWidget />
    </div>
  );
};
