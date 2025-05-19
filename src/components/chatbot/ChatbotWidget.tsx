
import React, { useState, useEffect } from "react";
import ChatbotButton from "./ChatbotButton";
import ChatbotDialog from "./ChatbotDialog";
import { useOverlay } from "@/context/OverlayContext";

const ChatbotWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { activeOverlay, setActiveOverlay, isOverlayActive } = useOverlay();

  // Sync chat state with overlay context
  useEffect(() => {
    if (isOpen && activeOverlay !== "chat") {
      setIsOpen(false);
    } else if (!isOpen && activeOverlay === "chat") {
      setIsOpen(true);
    }
  }, [activeOverlay, isOpen]);

  const toggleChat = () => {
    if (isOverlayActive("chat")) {
      setActiveOverlay("none");
    } else {
      setActiveOverlay("chat");
    }
  };

  return (
    <div className={`fixed bottom-4 right-4 z-[40] ${activeOverlay === "menu" ? "hidden" : ""}`}>
      <ChatbotButton onClick={toggleChat} />
      <ChatbotDialog 
        isOpen={isOpen} 
        onClose={() => setActiveOverlay("none")} 
      />
    </div>
  );
};

export default ChatbotWidget;
