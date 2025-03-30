
import React from 'react';
import Navbar from '../components/Navbar';
import DailySummary from '../components/DailySummary';
import CategoryTabs from '../components/CategoryTabs';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="container py-6 md:py-10">
          <div className="flex flex-col items-center justify-center space-y-3 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Welcome to <span className="text-primary">NewsightHub</span>
            </h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Your comprehensive resource for student and professional news insights.
            </p>
          </div>
        </section>

        <section className="container py-4">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4">
            <div className="md:col-span-1">
              <DailySummary />
            </div>
            <div className="md:col-span-2 lg:col-span-3">
              <CategoryTabs />
            </div>
          </div>
        </section>

        <section className="container py-8 md:py-12">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
              Why Choose NewsightHub?
            </h2>
            <p className="max-w-[700px] text-muted-foreground">
              We simplify complex topics, provide educational resources, and keep you updated with relevant insights.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full pt-6">
              <div className="flex flex-col items-center p-6 bg-secondary/50 rounded-lg">
                <h3 className="font-bold mb-2">Simplified Insights</h3>
                <p className="text-sm text-center">Complex topics explained in an accessible way for students and professionals.</p>
              </div>
              <div className="flex flex-col items-center p-6 bg-secondary/50 rounded-lg">
                <h3 className="font-bold mb-2">Curated Content</h3>
                <p className="text-sm text-center">News and resources carefully selected to be relevant to your interests and career.</p>
              </div>
              <div className="flex flex-col items-center p-6 bg-secondary/50 rounded-lg">
                <h3 className="font-bold mb-2">Educational Focus</h3>
                <p className="text-sm text-center">Everything is designed to help you learn and stay informed about the world around you.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
