import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import NewsCard from './NewsCard';
import { newsData } from '../data/newsData';
import { useIsMobile } from "@/hooks/use-mobile";

export type NewsCategory = 'finance' | 'marketing' | 'politics' | 'ai';

const CategoryTabs = () => {
  const [activeTab, setActiveTab] = useState<NewsCategory>('finance');
  const isMobile = useIsMobile();

  const categories: { value: NewsCategory; label: string; description: string }[] = [
    { value: 'finance', label: 'Finance', description: 'Latest financial news and market updates' },
    { value: 'marketing', label: 'Marketing', description: 'Marketing trends and business strategies' },
    { value: 'politics', label: 'Politics', description: 'Political developments and analysis' },
    { value: 'ai', label: 'AI', description: 'Artificial Intelligence and technology news' }
  ];

  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle>Latest News</CardTitle>
        <CardDescription>Stay updated with the latest developments</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs 
          value={activeTab} 
          onValueChange={(value) => setActiveTab(value as NewsCategory)} 
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <TabsTrigger 
                key={category.value} 
                value={category.value} 
                className="text-xs"
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {categories.map((category) => (
            <TabsContent 
              key={category.value} 
              value={category.value} 
              className="mt-4"
            >
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  {category.description}
                </p>
                <div className={`grid gap-4 ${isMobile ? 'grid-cols-1' : 'grid-cols-1 lg:grid-cols-2'}`}>
                  {newsData[category.value].map((article, index) => (
                    <NewsCard 
                      key={index} 
                      article={article} 
                      category={category.value}
                    />
                  ))}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default CategoryTabs;
