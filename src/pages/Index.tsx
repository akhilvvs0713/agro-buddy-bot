import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ChatBot } from "@/components/ChatBot";
import { CropAdvisory } from "@/components/CropAdvisory";
import { WeatherWidget } from "@/components/WeatherWidget";
import { MarketPrices } from "@/components/MarketPrices";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ChatBot />
        <CropAdvisory />
        <WeatherWidget />
        <MarketPrices />
      </main>
      
      <footer className="bg-primary text-primary-foreground py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="text-xl font-bold">AgroBuddy</div>
          </div>
          <p className="text-sm text-primary-foreground/80 mb-4">
            Your AI-powered farming assistant for better yields and smarter decisions
          </p>
          <div className="text-xs text-primary-foreground/60">
            © 2024 AgroBuddy. Empowering farmers with AI technology.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;