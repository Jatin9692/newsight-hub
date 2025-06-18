import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { NewsArticle } from '../data/newsData';
import { NewsCategory } from './CategoryTabs';
import { Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

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
      case 'ai':
        return 'border-l-4 border-green-500';
      default:
        return '';
    }
  };

  // Create a clean summary with just plain text for the preview
  const createPlainTextSummary = (htmlContent: string) => {
    if (htmlContent.includes('<div class="article-content">')) {
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = htmlContent;
      return tempDiv.textContent || tempDiv.innerText || '';
    }
    return htmlContent;
  };

  const plainTextSummary = createPlainTextSummary(article.summary);
  const previewText = plainTextSummary.length > 120 ? 
    plainTextSummary.substring(0, 120) + '...' : 
    plainTextSummary;

  return (
    <Link to={`/news/${category}/${article.slug}`} className="block h-full">
      <Card 
        className={`news-card h-full flex flex-col ${getCategoryStyle()} cursor-pointer hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 group`}
      >
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-base font-semibold group-hover:text-primary transition-colors">{article.title}</CardTitle>
              <CardDescription className="text-xs text-muted-foreground">{article.source}</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="py-2 flex-grow">
          <div className="text-xs text-gray-700">
            <p>{previewText}</p>
          </div>
        </CardContent>
        <CardFooter className="pt-2 flex justify-between items-center text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock size={12} />
            <span>{article.readTime} min read</span>
          </div>
          <div className="text-primary flex items-center gap-1 group-hover:underline">
            <span className="text-xs">Full Article</span>
            <ArrowRight size={12} />
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default NewsCard;
