
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const SimplifiedInsights = () => {
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
        
        <h1 className="text-3xl font-bold tracking-tighter mb-6">Simplified Insights</h1>
        
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Understanding Market Fluctuations</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Market fluctuations can seem intimidating, but they follow predictable patterns
                based on economic indicators, investor sentiment, and external events.
              </p>
              <p>
                When markets show volatility, it typically reflects uncertainty rather than 
                fundamental economic problems. For investors, these moments often present 
                opportunities rather than reasons for alarm.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Digital Marketing Simplified</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Modern digital marketing relies on data-driven strategies that target specific 
                audience segments with personalized content across multiple channels.
              </p>
              <p>
                The most successful campaigns combine automation tools with creative storytelling,
                allowing businesses to scale their reach while maintaining authentic connections
                with their audience.
              </p>
            </CardContent>
          </Card>
          
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Blockchain Technology Explained</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Blockchain technology creates a transparent, immutable record of transactions
                without requiring a central authority to verify those transactions.
              </p>
              <p className="mb-4">
                While commonly associated with cryptocurrencies, blockchain's true innovation
                is its ability to establish trust in digital environments through cryptographic
                proof rather than institutional guarantees.
              </p>
              <p>
                For businesses, this means reduced transaction costs, faster settlement times,
                and new opportunities for creating value through digital assets and smart contracts.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SimplifiedInsights;
