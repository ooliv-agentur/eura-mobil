
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ChatbotWidget from "./chatbot/ChatbotWidget";
import { OverlayProvider } from "@/context/OverlayContext";

export const Layout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <OverlayProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <ChatbotWidget />
      </div>
    </OverlayProvider>
  );
};
