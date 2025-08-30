import { Button } from "@/components/ui/button";
import { MessageSquare, Camera, Leaf, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-agriculture.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <img 
        src={heroImage} 
        alt="Modern agricultural landscape with technology"
        className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
      />
      
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-lg">
            Your AI-Powered
            <span className="block bg-gradient-to-r from-crop-light to-sky bg-clip-text text-transparent">
              Farming Assistant
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl mx-auto text-white/90 drop-shadow">
            Get instant answers about crops, soil, weather, and farming techniques. 
            Boost your yield with personalized AI recommendations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 shadow-glow group"
            >
              <MessageSquare className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              Ask AI Assistant
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
            >
              <Camera className="mr-2 h-5 w-5" />
              Scan Plant Disease
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: Leaf, label: "Crop Advisory", count: "50K+" },
              { icon: MessageSquare, label: "AI Responses", count: "1M+" },
              { icon: Camera, label: "Disease Scans", count: "100K+" },
              { icon: ArrowRight, label: "Happy Farmers", count: "25K+" }
            ].map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <item.icon className="h-8 w-8 mx-auto mb-2 text-crop-light" />
                <div className="text-2xl font-bold mb-1">{item.count}</div>
                <div className="text-sm text-white/80">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};