
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock } from 'lucide-react';
import { NewsArticle } from '../data/newsData';

interface ArticleContentProps {
  article: NewsArticle;
  category: string;
}

const ArticleContent = ({ article, category }: ArticleContentProps) => {
  const getCategoryColor = (cat?: string) => {
    switch (cat) {
      case 'finance': return 'text-blue-600';
      case 'marketing': return 'text-purple-600';
      case 'politics': return 'text-red-600';
      case 'ai': return 'text-green-600';
      case 'software': return 'text-indigo-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <article className="max-w-4xl mx-auto">
      <Card className="bg-card shadow-lg">
        <CardHeader className="pb-4">
          <div className="flex flex-wrap gap-3 items-center text-sm mb-4">
            <span className={`font-semibold capitalize px-2 py-1 rounded-full bg-opacity-10 ${getCategoryColor(category)}`}>
              {category || 'News'}
            </span>
            <span className="text-muted-foreground">•</span>
            <span className="font-medium text-muted-foreground">{article.source}</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">{article.date}</span>
            <span className="text-muted-foreground">•</span>
            <div className="flex items-center gap-1 text-muted-foreground">
              <Clock size={14} />
              <span>{article.readTime} min read</span>
            </div>
          </div>
          <CardTitle className="text-2xl md:text-3xl font-bold leading-tight">
            {article.title}
          </CardTitle>
        </CardHeader>
        
        <CardContent className="formatted-article-content">
          <div
            dangerouslySetInnerHTML={{ __html: article.summary }}
          />
        </CardContent>
      </Card>
    </article>
  );
};

export default ArticleContent;
