'use client'
import { Button } from 'Todo/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export const Hero = () => {
  return (
    <section className="relative py-20 lg:py-32 w-full flex flex-col items-center" >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="container relative px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm text-primary">
              <CheckCircle className="h-4 w-4 mr-2" />
              Organize Your Life
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Stay Organized with
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                {" "}Smart Todos
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A beautiful and intuitive task management app that helps you stay productive. 
              Organize your tasks, set priorities, and never miss a deadline again.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/tasks">
              <Button size="lg" className="group">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16">
            <div className="text-center space-y-2">
              <div className="text-2xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Free to Use</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-2xl font-bold text-primary">∞</div>
              <div className="text-sm text-muted-foreground">Unlimited Tasks</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-2xl font-bold text-primary">📱</div>
              <div className="text-sm text-muted-foreground">Mobile Friendly</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};