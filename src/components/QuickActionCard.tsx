import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface QuickActionCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  variant?: "default" | "primary";
  onClick?: () => void;
}

const QuickActionCard = ({ 
  title, 
  description, 
  icon: Icon, 
  variant = "default",
  onClick 
}: QuickActionCardProps) => {
  return (
    <Card className={`group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg ${
      variant === "primary" 
        ? "bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 hover:border-primary/40" 
        : "bg-gradient-to-br from-card to-card/80 border-border/50 hover:border-primary/30"
    }`}>
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <div className={`p-3 rounded-lg ${
            variant === "primary" 
              ? "bg-primary text-primary-foreground" 
              : "bg-muted"
          }`}>
            <Icon className="h-6 w-6" />
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-foreground mb-1">{title}</h3>
            <p className="text-sm text-muted-foreground mb-3">{description}</p>
            
            <Button 
              variant={variant === "primary" ? "default" : "secondary"}
              size="sm"
              onClick={onClick}
              className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
            >
              Get Started
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickActionCard;