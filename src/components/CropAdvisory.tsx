import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Leaf, Calendar, Droplets, Scissors, AlertTriangle, CheckCircle, Clock } from "lucide-react";

export const CropAdvisory = () => {
  const crops = [
    {
      id: 1,
      name: "Corn",
      stage: "Vegetative Growth",
      health: "Good",
      nextAction: "Side-dress with nitrogen",
      daysUntilAction: 3,
      recommendations: [
        "Monitor for corn borer damage",
        "Ensure adequate soil moisture",
        "Check for nutrient deficiency signs"
      ],
      status: "healthy"
    },
    {
      id: 2,
      name: "Tomatoes",
      stage: "Flowering",
      health: "Excellent", 
      nextAction: "Support heavy branches",
      daysUntilAction: 1,
      recommendations: [
        "Continue regular pruning",
        "Watch for early blight symptoms",
        "Maintain consistent watering"
      ],
      status: "excellent"
    },
    {
      id: 3,
      name: "Soybeans",
      stage: "Pod Development",
      health: "Attention Needed",
      nextAction: "Apply fungicide treatment",
      daysUntilAction: 0,
      recommendations: [
        "Urgent: Treat for rust disease",
        "Increase monitoring frequency",
        "Consider drainage improvements"
      ],
      status: "warning"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'excellent':
        return <CheckCircle className="h-4 w-4 text-primary" />;
      case 'healthy':
        return <CheckCircle className="h-4 w-4 text-crop" />;
      case 'warning':
        return <AlertTriangle className="h-4 w-4 text-destructive" />;
      default:
        return <Clock className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getStatusBadge = (status: string, health: string) => {
    const variants = {
      excellent: "bg-primary/10 text-primary border-primary/20",
      healthy: "bg-crop/10 text-crop border-crop/20",  
      warning: "bg-destructive/10 text-destructive border-destructive/20"
    };
    
    return (
      <Badge className={variants[status as keyof typeof variants] || "bg-muted text-muted-foreground"}>
        {getStatusIcon(status)}
        <span className="ml-1">{health}</span>
      </Badge>
    );
  };

  return (
    <section id="advisory" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Crop Advisory Dashboard</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get personalized recommendations for your crops based on growth stage, weather conditions, and best practices.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {crops.map((crop) => (
              <Card key={crop.id} className="shadow-card">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <Leaf className="h-5 w-5 text-crop" />
                      {crop.name}
                    </CardTitle>
                    {getStatusBadge(crop.status, crop.health)}
                  </div>
                  <p className="text-sm text-muted-foreground">{crop.stage}</p>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="p-3 bg-gradient-earth rounded-lg text-white">
                    <div className="flex items-center gap-2 mb-1">
                      <Calendar className="h-4 w-4" />
                      <span className="font-medium text-sm">Next Action</span>
                    </div>
                    <p className="text-sm mb-2">{crop.nextAction}</p>
                    <div className="flex items-center gap-1 text-xs">
                      <Clock className="h-3 w-3" />
                      {crop.daysUntilAction === 0 ? 'Today' : `In ${crop.daysUntilAction} days`}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-sm mb-2 flex items-center gap-1">
                      <CheckCircle className="h-3 w-3" />
                      Recommendations
                    </h4>
                    <ul className="space-y-1">
                      {crop.recommendations.map((rec, index) => (
                        <li key={index} className="text-xs text-muted-foreground flex items-start gap-2">
                          <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          {rec}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button size="sm" className="w-full">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quick Actions */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Scissors className="h-5 w-5 text-primary" />
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Button variant="outline" className="h-auto p-4 flex-col gap-2">
                  <Droplets className="h-6 w-6 text-sky" />
                  <span className="text-sm">Schedule Irrigation</span>
                </Button>
                
                <Button variant="outline" className="h-auto p-4 flex-col gap-2">
                  <Leaf className="h-6 w-6 text-crop" />
                  <span className="text-sm">Add New Crop</span>
                </Button>
                
                <Button variant="outline" className="h-auto p-4 flex-col gap-2">
                  <AlertTriangle className="h-6 w-6 text-destructive" />
                  <span className="text-sm">Report Issue</span>
                </Button>
                
                <Button variant="outline" className="h-auto p-4 flex-col gap-2">
                  <Calendar className="h-6 w-6 text-earth" />
                  <span className="text-sm">Plan Activities</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};