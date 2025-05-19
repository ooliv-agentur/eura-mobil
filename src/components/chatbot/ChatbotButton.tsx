
import React from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

interface ChatbotButtonProps {
  onClick: () => void;
}

const ChatbotButton: React.FC<ChatbotButtonProps> = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      className="flex items-center gap-2 rounded-full shadow-md bg-[#2563eb] hover:bg-[#1d4ed8]"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">Fragen zu EURA MOBIL?</span>
    </Button>
  );
};

export default ChatbotButton;
