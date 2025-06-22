
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Clock } from 'lucide-react';
import { NewsArticle } from '../data/newsData';

interface ArticleSuggestionsProps {
  suggestions: NewsArticle[];
  category: string;
}

const ArticleSuggestions = ({ suggestions, category }: ArticleSuggestionsProps) => {
  return (
    <div className="text-center py-12">
      <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
      <p className="text-muted-foreground mb-8">
        We couldn't find the article you're looking for. Here are some suggestions:
      </p>
      
      <div className="max-w-4xl mx-auto">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {suggestions.map((suggestion) => (
            <Card key={suggestion.slug} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-4">
                <Link
                  to={`/news/${category}/${suggestion.slug}`}
                  className="block group"
                >
                  <h3 className="font-semibold text-sm mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {suggestion.title}
                  </h3>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{suggestion.source}</span>
                    <span>{suggestion.date}</span>
                  </div>
                  <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground">
                    <Clock size={12} />
                    <span>{suggestion.readTime} min read</span>
                  </div>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticleSuggestions;
