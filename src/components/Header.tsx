import { Button } from "@/components/ui/button";
import { MessageSquare, Leaf, CloudSun, TrendingUp, Menu } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">AgroBuddy</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#chat" className="flex items-center space-x-1 text-muted-foreground hover:text-primary transition-colors">
              <MessageSquare className="h-4 w-4" />
              <span>Ask AI</span>
            </a>
            <a href="#advisory" className="flex items-center space-x-1 text-muted-foreground hover:text-primary transition-colors">
              <Leaf className="h-4 w-4" />
              <span>Crop Advisory</span>
            </a>
            <a href="#weather" className="flex items-center space-x-1 text-muted-foreground hover:text-primary transition-colors">
              <CloudSun className="h-4 w-4" />
              <span>Weather</span>
            </a>
            <a href="#market" className="flex items-center space-x-1 text-muted-foreground hover:text-primary transition-colors">
              <TrendingUp className="h-4 w-4" />
              <span>Markets</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="outline"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-4 w-4" />
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-3 pt-4">
              <a href="#chat" className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
                <MessageSquare className="h-4 w-4" />
                <span>Ask AI</span>
              </a>
              <a href="#advisory" className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
                <Leaf className="h-4 w-4" />
                <span>Crop Advisory</span>
              </a>
              <a href="#weather" className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
                <CloudSun className="h-4 w-4" />
                <span>Weather</span>
              </a>
              <a href="#market" className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
                <TrendingUp className="h-4 w-4" />
                <span>Markets</span>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};