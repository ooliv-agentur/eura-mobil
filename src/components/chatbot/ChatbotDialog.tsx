import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send, X } from "lucide-react";
import { Link } from "react-router-dom";

interface Message {
  role: "user" | "bot";
  content: string;
  isHtml?: boolean;
}

interface ChatbotDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

// Predefined responses
const KNOWN_RESPONSES: Record<string, Message> = {
  "integra-vs-line-gt": {
    role: "bot",
    content: `
      <div>
        <h3 class="font-bold mb-2">Unterschiede zwischen Integra und Integra Line GT:</h3>
        <table class="w-full border-collapse mb-4">
          <thead>
            <tr class="bg-gray-50">
              <th class="border p-2 text-left">Eigenschaft</th>
              <th class="border p-2 text-left">Integra</th>
              <th class="border p-2 text-left">Integra Line GT</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border p-2 font-medium">Aufbau</td>
              <td class="border p-2">Vollintegriert, Premium-Segment</td>
              <td class="border p-2">Vollintegriert, höheres Mittelsegment</td>
            </tr>
            <tr>
              <td class="border p-2 font-medium">Größe</td>
              <td class="border p-2">8,99 m Länge</td>
              <td class="border p-2">7,89 m Länge</td>
            </tr>
            <tr>
              <td class="border p-2 font-medium">Basis</td>
              <td class="border p-2">Fiat Ducato Tiefrahmen-Chassis</td>
              <td class="border p-2">Mercedes Sprinter Chassis</td>
            </tr>
            <tr>
              <td class="border p-2 font-medium">Ausstattung</td>
              <td class="border p-2">Luxuriöse Vollausstattung</td>
              <td class="border p-2">Gehobene Ausstattung</td>
            </tr>
            <tr>
              <td class="border p-2 font-medium">Preis</td>
              <td class="border p-2">ab 120.900 €</td>
              <td class="border p-2">ab 92.500 €</td>
            </tr>
          </tbody>
        </table>
        <p class="mb-4">
          Der Integra ist unser Flaggschiff und bietet maximalen Luxus, während der Integra Line GT 
          auf Mercedes-Basis eine sportliche Alternative im gehobenen Segment darstellt.
        </p>
        <p>
          <a href="/modellvergleich" class="text-blue-600 hover:underline">
            Hier findest du beide Modelle im Vergleich: Modellvergleich öffnen
          </a>
        </p>
      </div>
    `,
    isHtml: true
  }
};

// Suggestions for the chatbot
const SUGGESTIONS = [
  "Was unterscheidet das Modell Integra vom Integra Line GT?",
  "Modelle vergleichen",
  "Fragen zur Ausstattung",
  "Garantiebedingungen"
];

const ChatbotDialog: React.FC<ChatbotDialogProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      content: "Hallo! Ich bin der EURA MOBIL Assistent. Wie kann ich dir heute helfen?",
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Scroll to bottom when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    // Add user message
    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    
    // Reset input
    setInput("");
    
    // Generate response
    setTimeout(() => {
      let botResponse: Message;
      
      // Check for specific questions about Integra vs Integra Line GT
      if (input.toLowerCase().includes("integra") && 
          (input.toLowerCase().includes("line") || input.toLowerCase().includes("unterschied"))) {
        botResponse = KNOWN_RESPONSES["integra-vs-line-gt"];
      } else {
        // Default response
        botResponse = {
          role: "bot",
          content: "Danke für deine Frage. Zu diesem Thema kann ich dir leider noch keine detaillierte Auskunft geben. Bitte kontaktiere unser Team oder besuche unsere Website für weitere Informationen.",
        };
      }
      
      setMessages((prev) => [...prev, botResponse]);
    }, 1000);
  };
  
  // Handle suggestion click
  const handleSuggestionClick = (suggestion: string) => {
    setInput(suggestion);
    // Submit the form programmatically
    const form = document.getElementById("chatbot-form") as HTMLFormElement;
    form.dispatchEvent(new Event("submit", { cancelable: true }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-20 right-4 w-[480px] max-w-[calc(100vw-2rem)] z-50">
      <div className="bg-white rounded-lg shadow-lg border border-gray-200 max-h-[calc(100vh-120px)] flex flex-col">
        {/* Header */}
        <div className="p-4 border-b flex justify-between items-center bg-blue-600 text-white rounded-t-lg">
          <h2 className="text-lg font-semibold">EURA MOBIL Assistent</h2>
          <Button variant="ghost" size="icon" onClick={onClose} className="text-white hover:bg-blue-700 h-8 w-8">
            <X className="h-4 w-4" />
          </Button>
        </div>
        
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-[200px] max-h-[300px]">
          {messages.map((message, index) => (
            <div 
              key={index} 
              className={`flex ${
                message.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div 
                className={`max-w-[90%] p-3 rounded-lg text-sm ${
                  message.role === "user" 
                    ? "bg-blue-600 text-white" 
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                {message.isHtml ? (
                  <div dangerouslySetInnerHTML={{ __html: message.content }} />
                ) : (
                  <p>{message.content}</p>
                )}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        
        {/* Suggestions */}
        <div className="p-3 border-t flex gap-2 overflow-x-auto">
          {SUGGESTIONS.map((suggestion) => (
            <Button 
              key={suggestion} 
              variant="outline" 
              size="sm" 
              className="whitespace-nowrap text-xs"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </Button>
          ))}
        </div>
        
        {/* Input */}
        <form 
          id="chatbot-form"
          onSubmit={handleSubmit} 
          className="p-3 border-t flex gap-2 items-end"
        >
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Stell mir eine Frage..."
            className="resize-none text-sm"
            rows={1}
          />
          <Button type="submit" size="icon" className="h-8 w-8">
            <Send className="h-3 w-3" />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ChatbotDialog;
