import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Send, Bot, User, Loader2, Upload } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

export const ChatBot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: "Hello! I'm your AI farming assistant. Ask me anything about crops, soil, weather, or farming techniques. You can also upload images of plants for disease detection!",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const sampleQuestions = [
    "What are the best crops for my region?",
    "How to identify tomato blight?",
    "When should I water my crops?",
    "Best fertilizer for corn?"
  ];

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: getAIResponse(input),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsLoading(false);
    }, 1500);
  };

  const getAIResponse = (question: string): string => {
    const responses = {
      "crops": "Based on your region's climate and soil conditions, I recommend drought-resistant crops like sorghum, millet, or improved maize varieties. These crops require less water and are more resilient to climate variations.",
      "tomato": "Tomato blight shows as dark spots on leaves that spread rapidly. Look for yellowing around the spots and white mold on leaf undersides. Remove affected leaves immediately and apply copper-based fungicide.",
      "water": "Water crops early morning (5-7 AM) or late evening (6-8 PM) to minimize evaporation. Check soil moisture 2-3 inches deep. Most crops need 1-2 inches of water weekly, including rainfall.",
      "fertilizer": "For corn, use balanced NPK fertilizer (10-10-10) at planting, then side-dress with nitrogen (urea) when plants are knee-high. Apply 120-150 kg/ha nitrogen total for optimal yield."
    };

    const lowerQuestion = question.toLowerCase();
    for (const [key, response] of Object.entries(responses)) {
      if (lowerQuestion.includes(key)) {
        return response;
      }
    }

    return "That's a great question! Based on agricultural best practices, I recommend consulting local extension services for region-specific advice. Meanwhile, ensure proper soil testing, adequate water management, and integrated pest management for optimal results.";
  };

  const handleImageUpload = () => {
    toast({
      title: "Feature Coming Soon!",
      description: "Image-based disease detection will be available in the next update.",
    });
  };

  return (
    <section id="chat" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ask Your AI Assistant</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get instant answers to your farming questions. Our AI is trained on agricultural best practices and can help with crops, soil, weather, and more.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bot className="h-5 w-5 text-primary" />
                Farming Assistant
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-96 overflow-y-auto mb-4 space-y-4 p-4 bg-muted/20 rounded-lg">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex items-start gap-3 ${
                      message.type === 'user' ? 'flex-row-reverse' : ''
                    }`}
                  >
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                      message.type === 'user' 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-accent text-accent-foreground'
                    }`}>
                      {message.type === 'user' ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                    </div>
                    <div className={`flex-1 max-w-xs md:max-w-md lg:max-w-lg ${
                      message.type === 'user' ? 'text-right' : ''
                    }`}>
                      <div className={`p-3 rounded-lg ${
                        message.type === 'user' 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-card border'
                      }`}>
                        <p className="text-sm">{message.content}</p>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        {message.timestamp.toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center">
                      <Bot className="h-4 w-4" />
                    </div>
                    <div className="bg-card border p-3 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span className="text-sm">Thinking...</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex gap-2 mb-4">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about crops, soil, weather, or farming techniques..."
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  className="flex-1"
                />
                <Button onClick={handleImageUpload} variant="outline" size="icon">
                  <Upload className="h-4 w-4" />
                </Button>
                <Button onClick={handleSend} disabled={!input.trim() || isLoading}>
                  <Send className="h-4 w-4" />
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {sampleQuestions.map((question, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="justify-start text-left h-auto p-2 whitespace-normal"
                    onClick={() => setInput(question)}
                  >
                    {question}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};