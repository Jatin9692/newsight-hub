
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { NewsArticle } from '../data/newsData';
import { NewsCategory } from './CategoryTabs';
import { Clock, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface NewsCardProps {
  article: NewsArticle;
  category: NewsCategory;
}

const NewsCard = ({ article, category }: NewsCardProps) => {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);
  
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

  const handleCardClick = () => {
    const slug = article.title.toLowerCase().replace(/[^\w\s]/gi, '').replace(/\s+/g, '-');
    navigate(`/news/${category}/${slug}`, { 
      state: { article, category }
    });
  };

  // Create a clean summary with just plain text for the preview
  const createPlainTextSummary = (htmlContent: string) => {
    // For HTML content, create a temporary div to extract text
    if (htmlContent.includes('<div class="article-content">')) {
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = htmlContent;
      return tempDiv.textContent || tempDiv.innerText || '';
    }
    // For plain text, just return it directly
    return htmlContent;
  };

  const plainTextSummary = createPlainTextSummary(article.summary);
  const previewText = plainTextSummary.length > 120 ? 
    plainTextSummary.substring(0, 120) + '...' : 
    plainTextSummary;

  const toggleExpanded = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card click when clicking the button
    setIsExpanded(!isExpanded);
  };

  return (
    <Card 
      className={`news-card h-full flex flex-col ${getCategoryStyle()} cursor-pointer hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 group`}
      onClick={handleCardClick}
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
          {!isExpanded ? (
            <p>{previewText}</p>
          ) : (
            article.summary.includes('<div class="article-content">') ? (
              <div 
                className="formatted-article-content text-xs"
                dangerouslySetInnerHTML={{ __html: article.summary }}
              />
            ) : (
              <p>{article.summary}</p>
            )
          )}
        </div>
        {plainTextSummary.length > 120 && (
          <Button
            onClick={toggleExpanded}
            variant="ghost"
            size="sm"
            className="mt-2 p-0 h-auto text-xs text-primary hover:underline"
          >
            {isExpanded ? (
              <>Show Less <ChevronUp size={12} /></>
            ) : (
              <>Read More <ChevronDown size={12} /></>
            )}
          </Button>
        )}
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
  );
};

export default NewsCard;
