import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown, Minus, DollarSign, MapPin, Calendar } from "lucide-react";

export const MarketPrices = () => {
  const marketData = [
    {
      id: 1,
      crop: "Corn",
      currentPrice: 245,
      previousPrice: 238,
      unit: "per ton",
      location: "Local Market",
      lastUpdated: "2 hours ago",
      trend: "up",
      change: 2.9
    },
    {
      id: 2,
      crop: "Wheat", 
      currentPrice: 320,
      previousPrice: 325,
      unit: "per ton",
      location: "Regional Hub",
      lastUpdated: "1 hour ago", 
      trend: "down",
      change: -1.5
    },
    {
      id: 3,
      crop: "Soybeans",
      currentPrice: 485,
      previousPrice: 485,
      unit: "per ton", 
      location: "Export Terminal",
      lastUpdated: "30 min ago",
      trend: "stable",
      change: 0
    },
    {
      id: 4,
      crop: "Rice",
      currentPrice: 380,
      previousPrice: 365,
      unit: "per ton",
      location: "Wholesale Market", 
      lastUpdated: "4 hours ago",
      trend: "up",
      change: 4.1
    },
    {
      id: 5,
      crop: "Tomatoes",
      currentPrice: 85,
      previousPrice: 92,
      unit: "per crate",
      location: "Fresh Market",
      lastUpdated: "1 hour ago",
      trend: "down", 
      change: -7.6
    },
    {
      id: 6,
      crop: "Onions",
      currentPrice: 45,
      previousPrice: 43,
      unit: "per bag",
      location: "Farmers Market",
      lastUpdated: "3 hours ago",
      trend: "up",
      change: 4.7
    }
  ];

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="h-4 w-4 text-primary" />;
      case 'down':
        return <TrendingDown className="h-4 w-4 text-destructive" />;
      default:
        return <Minus className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getTrendBadge = (trend: string, change: number) => {
    const variants = {
      up: "bg-primary/10 text-primary border-primary/20",
      down: "bg-destructive/10 text-destructive border-destructive/20",
      stable: "bg-muted/50 text-muted-foreground border-muted"
    };
    
    return (
      <Badge className={variants[trend as keyof typeof variants]}>
        {getTrendIcon(trend)}
        <span className="ml-1">
          {change > 0 ? '+' : ''}{change.toFixed(1)}%
        </span>
      </Badge>
    );
  };

  return (
    <section id="market" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Market Prices</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stay updated with real-time market prices to make informed selling decisions and maximize your profits.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {marketData.map((item) => (
              <Card key={item.id} className="shadow-card hover:shadow-soft transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <DollarSign className="h-5 w-5 text-earth" />
                      {item.crop}
                    </CardTitle>
                    {getTrendBadge(item.trend, item.change)}
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-1">
                      ${item.currentPrice}
                    </div>
                    <div className="text-sm text-muted-foreground">{item.unit}</div>
                    {item.previousPrice !== item.currentPrice && (
                      <div className="text-xs text-muted-foreground">
                        Previous: ${item.previousPrice}
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-3 w-3 text-muted-foreground" />
                      <span className="text-muted-foreground">{item.location}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-3 w-3 text-muted-foreground" />
                      <span className="text-muted-foreground">Updated {item.lastUpdated}</span>
                    </div>
                  </div>

                  <Button variant="outline" size="sm" className="w-full">
                    View History
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Market Insights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Best Selling Opportunities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <div className="font-medium text-primary text-sm">Rice</div>
                    <div className="text-xs text-muted-foreground">
                      Prices up 4.1% - Good time to sell excess inventory
                    </div>
                  </div>
                  
                  <div className="p-3 bg-crop/10 rounded-lg">
                    <div className="font-medium text-crop text-sm">Onions</div>
                    <div className="text-xs text-muted-foreground">
                      Strong demand, prices rising - Consider immediate sales
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingDown className="h-5 w-5 text-destructive" />
                  Buy Low Alerts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-destructive/10 rounded-lg">
                    <div className="font-medium text-destructive text-sm">Tomatoes</div>
                    <div className="text-xs text-muted-foreground">
                      Prices down 7.6% - Good buying opportunity for processing
                    </div>
                  </div>
                  
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <div className="font-medium text-accent text-sm">Wheat</div>
                    <div className="text-xs text-muted-foreground">
                      Slight decline - Consider stocking up for future needs
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};