
import React from 'react';
import Navbar from '../components/Navbar';
import DailySummary from '../components/DailySummary';
import CategoryTabs from '../components/CategoryTabs';
import Footer from '../components/Footer';
import { Link, useNavigate } from 'react-router-dom';
import AIToolsDialog from '../components/AIToolsDialog';
import { Lightbulb } from 'lucide-react';

// Content for the clickable boxes
const featureContent = {
  insights: {
    title: "Simplified Insights",
    description: "We break down complex topics into easily digestible formats, helping you understand the most important aspects of today's news."
  },
  gifts: {
    title: "Gifts",
    description: "Discover a collection of useful tools and connect with experts who specialize in various topics, curated just for you."
  },
  educational: {
    title: "Educational Focus",
    description: "All our content is designed to help you learn and stay informed about the world around you, with a focus on educational value."
  }
};

const Index = () => {
  const navigate = useNavigate();

  const handleFeatureClick = (feature: 'insights' | 'gifts' | 'educational') => {
    // In a real app, navigate to the appropriate page
    if (feature === 'insights') {
      navigate('/simplified-insights');
    } else if (feature === 'gifts') {
      navigate('/gifts');
    } else if (feature === 'educational') {
      navigate('/educational-focus');
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="container py-4 md:py-6">
          <div className="flex flex-col items-center justify-center space-y-2 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Welcome to <span className="text-primary">Biznews</span>
            </h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Your comprehensive resource for Simplified news insights.
            </p>
          </div>
        </section>

        {/* Featured Article Banner */}
        <section className="container py-2">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-lg p-4 mb-4">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-blue-900 mb-1">🚨 Breaking: Trade Breakthrough</h3>
                <p className="text-sm text-blue-700 mb-2">Trump confirms US-China trade truce and hints at historic US-India trade deal with major market impact</p>
                <a 
                  href="/us-china-trade-deal-trump-india-news.html"
                  className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Read Full Analysis →
                </a>
              </div>
              <div className="text-2xl">📈</div>
            </div>
          </div>

          {/* Latest Finance News */}
          <div className="bg-gradient-to-r from-purple-50 to-orange-50 border border-purple-200 rounded-lg p-4 mb-4">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-purple-900 mb-1">💰 Finance Alert: Adani NCD Issue</h3>
                <p className="text-sm text-purple-700 mb-2">Adani Enterprises raises ₹1,000 cr via AA-rated NCD at up to 9.30% yield — full market impact here</p>
                <a 
                  href="/daily-summary/adani-enterprises-ncd-overview.html"
                  className="inline-flex items-center text-sm font-medium text-purple-600 hover:text-purple-800 transition-colors"
                >
                  View Analysis →
                </a>
              </div>
              <div className="text-2xl">🏦</div>
            </div>
          </div>
        </section>

        <section className="container py-2">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
            <div className="md:col-span-1 relative">
              <DailySummary />
              
              {/* AI Tools Quick Access Button */}
              <div className="absolute top-4 right-4 md:top-auto md:right-auto md:bottom-4 md:left-4">
                <AIToolsDialog triggerId="quick-ai-tools">
                  <div 
                    className="bg-primary/20 hover:bg-primary/40 p-2 rounded-full transition-colors cursor-pointer" 
                    title="AI Tools"
                  >
                    <Lightbulb size={16} className="text-primary" />
                  </div>
                </AIToolsDialog>
              </div>
            </div>
            <div className="md:col-span-2 lg:col-span-3">
              <CategoryTabs />
            </div>
          </div>
        </section>

        <section className="container py-4 md:py-6">
          <div className="flex flex-col items-center justify-center space-y-3 text-center">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
              Why Choose Biznews?
            </h2>
            <p className="max-w-[700px] text-muted-foreground">
              We simplify complex topics, provide educational resources, and keep you updated with relevant insights.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full pt-3">
              <div 
                onClick={() => handleFeatureClick('insights')}
                className="flex flex-col items-center p-3 bg-secondary/50 rounded-lg hover:bg-secondary/70 transition-colors cursor-pointer shadow-sm hover:shadow-md"
              >
                <h3 className="font-bold mb-1">{featureContent.insights.title}</h3>
                <p className="text-sm text-center">{featureContent.insights.description}</p>
              </div>
              
              <div 
                onClick={() => handleFeatureClick('gifts')}
                className="flex flex-col items-center p-3 bg-secondary/50 rounded-lg hover:bg-secondary/70 transition-colors cursor-pointer shadow-sm hover:shadow-md"
              >
                <h3 className="font-bold mb-1">{featureContent.gifts.title}</h3>
                <p className="text-sm text-center">{featureContent.gifts.description}</p>
              </div>
              
              <div 
                onClick={() => handleFeatureClick('educational')}
                className="flex flex-col items-center p-3 bg-secondary/50 rounded-lg hover:bg-secondary/70 transition-colors cursor-pointer shadow-sm hover:shadow-md"
              >
                <h3 className="font-bold mb-1">{featureContent.educational.title}</h3>
                <p className="text-sm text-center">{featureContent.educational.description}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="container py-4">
          <div className="bg-primary/10 p-4 rounded-lg">
            <AIToolsDialog triggerId="surprise-ai-tools">
              <div className="cursor-pointer">
                <h2 className="text-xl font-bold mb-2">Surprise</h2>
                <h3 className="text-md font-medium mb-3">Free AI Tools</h3>
                <ul className="text-sm space-y-1">
                  <li className="hover:text-primary cursor-pointer transition-colors">• Bubble AI - The powerful no-code platform</li>
                  <li className="hover:text-primary cursor-pointer transition-colors">• Zapier - Automation for busy people</li>
                  <li className="hover:text-primary cursor-pointer transition-colors">• Eleven Labs - Prime AI voices</li>
                </ul>
              </div>
            </AIToolsDialog>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
