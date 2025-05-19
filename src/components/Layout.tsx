
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ChatbotWidget from "./chatbot/ChatbotWidget";

export const Layout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
      <ChatbotWidget />
    </div>
  );
};
