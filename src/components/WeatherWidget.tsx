import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CloudSun, Droplets, Wind, Thermometer, Eye, Gauge } from "lucide-react";

export const WeatherWidget = () => {
  // Mock weather data - in a real app, this would come from a weather API
  const weatherData = {
    location: "Farm Location",
    temperature: 28,
    humidity: 65,
    windSpeed: 12,
    visibility: 8,
    pressure: 1013,
    precipitation: 15,
    condition: "Partly Cloudy",
    forecast: [
      { day: "Today", high: 32, low: 18, condition: "Sunny", rain: 0 },
      { day: "Tomorrow", high: 29, low: 16, condition: "Cloudy", rain: 20 },
      { day: "Wed", high: 25, low: 14, condition: "Rainy", rain: 85 },
      { day: "Thu", high: 27, low: 15, condition: "Partly Cloudy", rain: 10 }
    ]
  };

  return (
    <section id="weather" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Weather Forecast</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stay informed about weather conditions to make better farming decisions. Plan your activities based on accurate forecasts.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Current Weather */}
            <div className="lg:col-span-2">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CloudSun className="h-5 w-5 text-accent" />
                    Current Weather - {weatherData.location}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="text-4xl font-bold text-primary">{weatherData.temperature}°C</div>
                      <div className="text-muted-foreground">{weatherData.condition}</div>
                    </div>
                    <CloudSun className="h-16 w-16 text-accent" />
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="flex items-center gap-2">
                      <Droplets className="h-4 w-4 text-sky" />
                      <div>
                        <div className="text-sm font-medium">{weatherData.humidity}%</div>
                        <div className="text-xs text-muted-foreground">Humidity</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Wind className="h-4 w-4 text-primary" />
                      <div>
                        <div className="text-sm font-medium">{weatherData.windSpeed} km/h</div>
                        <div className="text-xs text-muted-foreground">Wind Speed</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Eye className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <div className="text-sm font-medium">{weatherData.visibility} km</div>
                        <div className="text-xs text-muted-foreground">Visibility</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Gauge className="h-4 w-4 text-earth" />
                      <div>
                        <div className="text-sm font-medium">{weatherData.pressure} mb</div>
                        <div className="text-xs text-muted-foreground">Pressure</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Droplets className="h-4 w-4 text-sky" />
                      <div>
                        <div className="text-sm font-medium">{weatherData.precipitation}%</div>
                        <div className="text-xs text-muted-foreground">Rain Chance</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Farming Recommendations */}
            <div>
              <Card className="shadow-card h-fit">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Thermometer className="h-5 w-5 text-primary" />
                    Today's Recommendations
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <div className="text-sm font-medium text-primary">Irrigation</div>
                    <div className="text-xs text-muted-foreground">Good day for watering. Low wind, moderate humidity.</div>
                  </div>
                  
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <div className="text-sm font-medium text-accent">Spraying</div>
                    <div className="text-xs text-muted-foreground">Ideal conditions for pesticide application.</div>
                  </div>
                  
                  <div className="p-3 bg-earth/20 rounded-lg">
                    <div className="text-sm font-medium text-earth">Field Work</div>
                    <div className="text-xs text-muted-foreground">Perfect weather for harvesting and field operations.</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* 4-Day Forecast */}
          <Card className="mt-6 shadow-card">
            <CardHeader>
              <CardTitle>4-Day Forecast</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {weatherData.forecast.map((day, index) => (
                  <div key={index} className="text-center p-4 bg-muted/20 rounded-lg">
                    <div className="font-medium text-sm mb-2">{day.day}</div>
                    <CloudSun className="h-8 w-8 mx-auto mb-2 text-accent" />
                    <div className="text-xs text-muted-foreground mb-1">{day.condition}</div>
                    <div className="text-sm font-medium">{day.high}°/{day.low}°</div>
                    <div className="text-xs text-sky flex items-center justify-center gap-1 mt-1">
                      <Droplets className="h-3 w-3" />
                      {day.rain}%
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};