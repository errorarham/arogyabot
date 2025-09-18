import Header from "@/components/Header";
import HealthMetricCard from "@/components/HealthMetricCard";
import QuickActionCard from "@/components/QuickActionCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Activity, 
  Calendar, 
  FileText, 
  Stethoscope, 
  Pill,
  Users,
  TrendingUp,
  Clock
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Welcome back, <span className="text-primary">John</span>
          </h1>
          <p className="text-muted-foreground">
            Stay informed, prevent disease, and take charge of your health with <span className="font-semibold text-primary">AROGYABot</span>.
          </p>
        </div>

        {/* Health Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <HealthMetricCard
            title="Heart Rate"
            value="72"
            unit="bpm"
            trend="stable"
            trendValue="Normal"
            status="good"
            description="Resting heart rate is within healthy range"
          />
          <HealthMetricCard
            title="Blood Pressure"
            value="120/80"
            unit="mmHg"
            trend="up"
            trendValue="+2%"
            status="good"
            description="Optimal blood pressure levels"
          />
          <HealthMetricCard
            title="Weight"
            value="68.5"
            unit="kg"
            trend="down"
            trendValue="-0.5kg"
            status="good"
            description="On track with your fitness goals"
          />
          <HealthMetricCard
            title="Sleep Quality"
            value="8.2"
            unit="/10"
            trend="up"
            trendValue="+0.3"
            status="good"
            progress={82}
            description="Excellent sleep quality this week"
          />
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <QuickActionCard
              title="Book Consultation"
              description="Schedule an appointment with your healthcare provider"
              icon={Stethoscope}
              variant="primary"
            />
            <QuickActionCard
              title="Medication Reminder"
              description="Set up reminders for your daily medications"
              icon={Pill}
            />
            <QuickActionCard
              title="Health Records"
              description="View and manage your complete health history"
              icon={FileText}
            />
          </div>
        </div>

        {/* Recent Activity & Upcoming */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Activity */}
          <Card className="bg-gradient-to-br from-card to-card/80 border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Activity className="h-5 w-5 text-primary" />
                <span>Recent Activity</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50">
                <div className="w-2 h-2 rounded-full bg-health-success"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Blood pressure recorded</p>
                  <p className="text-xs text-muted-foreground">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Medication taken</p>
                  <p className="text-xs text-muted-foreground">6 hours ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50">
                <div className="w-2 h-2 rounded-full bg-health-warning"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Workout completed</p>
                  <p className="text-xs text-muted-foreground">1 day ago</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Appointments */}
          <Card className="bg-gradient-to-br from-card to-card/80 border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-primary" />
                <span>Upcoming</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg bg-primary/10 border border-primary/20">
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Dr. Smith Consultation</p>
                    <p className="text-sm text-muted-foreground">Tomorrow, 10:00 AM</p>
                  </div>
                </div>
                <Button size="sm" variant="secondary">
                  Join Call
                </Button>
              </div>
              
              <div className="flex items-center justify-between p-4 rounded-lg bg-muted/30">
                <div className="flex items-center space-x-3">
                  <Pill className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium text-foreground">Medication Refill</p>
                    <p className="text-sm text-muted-foreground">Due in 3 days</p>
                  </div>
                </div>
                <Button size="sm" variant="outline">
                  Remind Me
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Index;
