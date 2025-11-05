import { Card, CardContent, CardHeader, CardTitle } from 'Todo/components/ui/card';
import { 
  Save, 
  Palette, 
  Star, 
  Smartphone, 
  Zap, 
  Shield 
} from 'lucide-react';

const features = [
  {
    icon: Save,
    title: 'Local Storage',
    description: 'Your tasks are saved locally in your browser. No account needed, complete privacy.'
  },
  {
    icon: Palette,
    title: 'Dynamic Themes',
    description: 'Switch between light and dark modes to match your preference and reduce eye strain.'
  },
  {
    icon: Star,
    title: 'Priority Levels',
    description: 'Organize tasks by priority (high, medium, low) to focus on what matters most.'
  },
  {
    icon: Smartphone,
    title: 'Responsive Design',
    description: 'Works perfectly on desktop, tablet, and mobile devices. Take your todos anywhere.'
  },
  {
    icon: Zap,
    title: 'Fast & Efficient',
    description: 'Built with modern technologies for lightning-fast performance and smooth interactions.'
  },
  {
    icon: Shield,
    title: 'Secure & Private',
    description: 'All your data stays on your device. No servers, no tracking, complete privacy.'
  }
];

export const Features = () => {
  return (
    <section className="py-20 bg-muted/30  w-full flex flex-col items-center">
      <div className="container px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Everything You Need to Stay Organized
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to help you manage your tasks efficiently and boost your productivity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};