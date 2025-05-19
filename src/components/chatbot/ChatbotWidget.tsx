
import React, { useState } from "react";
import ChatbotButton from "./ChatbotButton";
import ChatbotDialog from "./ChatbotDialog";

const ChatbotWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-4 right-4 z-[40]">
      <ChatbotButton onClick={toggleChat} />
      <ChatbotDialog isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default ChatbotWidget;
