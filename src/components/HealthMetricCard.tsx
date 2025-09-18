import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

interface HealthMetricCardProps {
  title: string;
  value: string;
  unit?: string;
  trend?: "up" | "down" | "stable";
  trendValue?: string;
  progress?: number;
  status?: "good" | "warning" | "danger";
  description?: string;
}

const HealthMetricCard = ({
  title,
  value,
  unit,
  trend,
  trendValue,
  progress,
  status = "good",
  description
}: HealthMetricCardProps) => {
  const getTrendIcon = () => {
    switch (trend) {
      case "up":
        return <TrendingUp className="h-4 w-4 text-health-success" />;
      case "down":
        return <TrendingDown className="h-4 w-4 text-health-danger" />;
      default:
        return <Minus className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getStatusColor = () => {
    switch (status) {
      case "warning":
        return "text-health-warning";
      case "danger":
        return "text-health-danger";
      default:
        return "text-health-success";
    }
  };

  return (
    <Card className="relative overflow-hidden bg-gradient-to-br from-card to-card/80 border-border/50 hover:border-primary/50 transition-all duration-300">
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-medium text-muted-foreground flex items-center justify-between">
          {title}
          {trend && (
            <div className="flex items-center space-x-1">
              {getTrendIcon()}
              <span className="text-xs">{trendValue}</span>
            </div>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex items-baseline space-x-2 mb-2">
          <span className={`text-2xl font-bold ${getStatusColor()}`}>
            {value}
          </span>
          {unit && <span className="text-sm text-muted-foreground">{unit}</span>}
        </div>
        
        {progress !== undefined && (
          <div className="mb-2">
            <Progress 
              value={progress} 
              className="h-2"
            />
          </div>
        )}
        
        {description && (
          <p className="text-xs text-muted-foreground mt-2">{description}</p>
        )}
      </CardContent>
    </Card>
  );
};

export default HealthMetricCard;