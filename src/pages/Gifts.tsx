
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ExternalLink, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const experts = [
  {
    name: "Dr. Emma Chen",
    specialty: "Economics",
    description: "Expert in global market analysis and economic policy",
    avatar: "EC"
  },
  {
    name: "Marcus Johnson",
    specialty: "Marketing",
    description: "Digital marketing strategist specializing in content optimization",
    avatar: "MJ"
  },
  {
    name: "Sophia Patel",
    specialty: "Finance",
    description: "Investment advisor with focus on sustainable portfolio management",
    avatar: "SP"
  }
];

const tools = [
  {
    name: "Market Analyzer Pro",
    description: "Track market trends and analyze stock performance",
    url: "#"
  },
  {
    name: "Content Calendar",
    description: "Plan and schedule your content strategy effectively",
    url: "#"
  },
  {
    name: "Budget Tracker",
    description: "Manage expenses and monitor financial goals",
    url: "#"
  }
];

const Gifts = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 container py-6">
        <div className="mb-6">
          <Link to="/" className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Home
          </Link>
        </div>
        
        <h1 className="text-3xl font-bold tracking-tighter mb-6">Gifts</h1>
        
        <div className="grid gap-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Expert Connections</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {experts.map((expert) => (
                <Card key={expert.name} className="hover:shadow-md transition-shadow">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <Avatar>
                      <AvatarFallback>{expert.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{expert.name}</CardTitle>
                      <CardDescription>{expert.specialty}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{expert.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Useful Tools</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {tools.map((tool) => (
                <Card key={tool.name} className="hover:shadow-md transition-shadow group">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center justify-between">
                      {tool.name}
                      <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{tool.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Gifts;
