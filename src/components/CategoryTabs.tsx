
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NewsCard from './NewsCard';
import { newsData } from '../data/newsData';

export type NewsCategory = 'finance' | 'marketing' | 'politics' | 'sports';

const CategoryTabs = () => {
  return (
    <Tabs defaultValue="finance" className="w-full">
      <TabsList className="mb-6 grid w-full grid-cols-4">
        <TabsTrigger value="finance" className="category-button category-finance">Finance</TabsTrigger>
        <TabsTrigger value="marketing" className="category-button category-marketing">Marketing</TabsTrigger>
        <TabsTrigger value="politics" className="category-button category-politics">Politics</TabsTrigger>
        <TabsTrigger value="ai" className="category-button category-ai">AI</TabsTrigger>
      </TabsList>
      {(Object.keys(newsData) as NewsCategory[]).map((category) => (
        <TabsContent key={category} value={category} className="animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsData[category].map((item, index) => (
              <NewsCard key={index} article={item} category={category} />
            ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default CategoryTabs;
