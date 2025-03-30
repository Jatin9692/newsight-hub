
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const EducationalFocus = () => {
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
        
        <h1 className="text-3xl font-bold tracking-tighter mb-6">Educational Focus</h1>
        
        <Tabs defaultValue="business" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="business">Business</TabsTrigger>
            <TabsTrigger value="finance">Finance</TabsTrigger>
            <TabsTrigger value="technology">Technology</TabsTrigger>
          </TabsList>
          
          <TabsContent value="business">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Understanding Business Models</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    A business model describes how an organization creates, delivers, and captures value.
                    Effective business models align with market needs while maintaining profitability.
                  </p>
                  <h3 className="font-bold mt-4 mb-2">Key Components:</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Value proposition</li>
                    <li>Customer segments</li>
                    <li>Revenue streams</li>
                    <li>Cost structure</li>
                    <li>Key activities and resources</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Strategic Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Strategic management involves formulating and implementing major goals and initiatives
                    based on consideration of resources and assessment of internal and external environments.
                    It provides the direction for long-term success while adapting to market changes.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="finance">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Financial Statements</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Financial statements provide a structured representation of a company's financial position,
                    performance, and cash flows. They are essential for making informed business decisions.
                  </p>
                  <h3 className="font-bold mt-4 mb-2">Primary Financial Statements:</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Balance Sheet</li>
                    <li>Income Statement</li>
                    <li>Cash Flow Statement</li>
                    <li>Statement of Changes in Equity</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Investment Principles</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Successful investing requires understanding key principles such as diversification,
                    risk management, and the time value of money. These fundamentals help investors
                    build portfolios aligned with their financial goals and risk tolerance.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="technology">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Digital Transformation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Digital transformation is the integration of digital technology into all areas of a business,
                    fundamentally changing how you operate and deliver value to customers.
                  </p>
                  <p>
                    Successful transformation requires cultural change, leadership commitment, and 
                    a clear vision for how technology can enhance business processes and customer experiences.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Emerging Technologies</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Emerging technologies like artificial intelligence, blockchain, and IoT are reshaping
                    industries and creating new business opportunities.
                  </p>
                  <p>
                    Understanding these technologies and their potential applications can help 
                    organizations gain competitive advantages and solve complex business problems.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default EducationalFocus;
