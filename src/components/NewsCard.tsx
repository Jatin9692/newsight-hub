
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { NewsArticle } from '../data/newsData';
import { NewsCategory } from './CategoryTabs';
import { Clock } from 'lucide-react';

interface NewsCardProps {
  article: NewsArticle;
  category: NewsCategory;
}

const NewsCard = ({ article, category }: NewsCardProps) => {
  const getCategoryStyle = () => {
    switch (category) {
      case 'finance':
        return 'border-l-4 border-news-finance';
      case 'marketing':
        return 'border-l-4 border-news-marketing';
      case 'politics':
        return 'border-l-4 border-news-politics';
      case 'sports':
        return 'border-l-4 border-news-sports';
      default:
        return '';
    }
  };

  return (
    <Card className={`news-card h-full flex flex-col ${getCategoryStyle()}`}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg font-semibold">{article.title}</CardTitle>
            <CardDescription className="text-sm text-muted-foreground">{article.source}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="py-2 flex-grow">
        <p className="text-sm">{article.summary}</p>
      </CardContent>
      <CardFooter className="pt-2 flex justify-end items-center text-xs text-muted-foreground">
        <div className="flex items-center gap-1">
          <Clock size={12} />
          <span>{article.readTime} min read</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default NewsCard;
