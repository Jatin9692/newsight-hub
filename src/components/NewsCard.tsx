
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { NewsArticle } from '../data/newsData';
import { NewsCategory } from './CategoryTabs';
import { Clock, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface NewsCardProps {
  article: NewsArticle;
  category: NewsCategory;
}

const NewsCard = ({ article, category }: NewsCardProps) => {
  const navigate = useNavigate();
  
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

  const handleCardClick = () => {
    // Create a URL-friendly slug from the title
    const slug = article.title.toLowerCase().replace(/[^\w\s]/gi, '').replace(/\s+/g, '-');
    // Navigate to a detail page with category and slug
    navigate(`/news/${category}/${slug}`, { 
      state: { article, category }
    });
  };

  return (
    <Card 
      className={`news-card h-full flex flex-col ${getCategoryStyle()} cursor-pointer hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200`}
      onClick={handleCardClick}
    >
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-base font-semibold">{article.title}</CardTitle>
            <CardDescription className="text-xs text-muted-foreground">{article.source}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="py-2 flex-grow">
        <p className="text-xs">{article.summary}</p>
      </CardContent>
      <CardFooter className="pt-2 flex justify-between items-center text-xs text-muted-foreground">
        <div className="flex items-center gap-1">
          <Clock size={12} />
          <span>{article.readTime} min read</span>
        </div>
        <div className="text-primary flex items-center gap-1 hover:underline">
          <span className="text-xs">Read more</span>
          <ArrowRight size={12} />
        </div>
      </CardFooter>
    </Card>
  );
};

export default NewsCard;
