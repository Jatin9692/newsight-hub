
import React from 'react';
import Navbar from '../components/Navbar';
import DailySummary from '../components/DailySummary';
import CategoryTabs from '../components/CategoryTabs';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Index = () => {
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
              Your comprehensive resource for student and professional news insights.
            </p>
          </div>
        </section>

        <section className="container py-2">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
            <div className="md:col-span-1">
              <DailySummary />
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
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full pt-4">
              <Link to="/simplified-insights" className="flex flex-col items-center p-4 bg-secondary/50 rounded-lg hover:bg-secondary/70 transition-colors cursor-pointer">
                <h3 className="font-bold mb-2">Simplified Insights</h3>
                <p className="text-sm text-center">Complex topics explained in an accessible way for students and professionals.</p>
              </Link>
              <Link to="/gifts" className="flex flex-col items-center p-4 bg-secondary/50 rounded-lg hover:bg-secondary/70 transition-colors cursor-pointer">
                <h3 className="font-bold mb-2">Gifts</h3>
                <p className="text-sm text-center">Tools and experts specializing in various topics curated just for you.</p>
              </Link>
              <Link to="/educational-focus" className="flex flex-col items-center p-4 bg-secondary/50 rounded-lg hover:bg-secondary/70 transition-colors cursor-pointer">
                <h3 className="font-bold mb-2">Educational Focus</h3>
                <p className="text-sm text-center">Everything is designed to help you learn and stay informed about the world around you.</p>
              </Link>
            </div>
          </div>
        </section>

        <section className="container py-4">
          <div className="bg-primary/10 p-4 rounded-lg">
            <h2 className="text-xl font-bold mb-2">Surprise</h2>
            <h3 className="text-md font-medium mb-3">Free AI Tools</h3>
            <ul className="text-sm space-y-1">
              <li className="hover:text-primary cursor-pointer transition-colors">• ChatGPT - The versatile AI assistant</li>
              <li className="hover:text-primary cursor-pointer transition-colors">• Midjourney - Create stunning AI-generated images</li>
              <li className="hover:text-primary cursor-pointer transition-colors">• Canva AI - Design with AI assistance</li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
