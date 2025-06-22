
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Clock } from 'lucide-react';
import { NewsArticle } from '../data/newsData';
import { articles } from '../data/newsData';

interface RelatedArticlesProps {
  currentArticle: NewsArticle;
  category: string;
}

const RelatedArticles = ({ currentArticle, category }: RelatedArticlesProps) => {
  const relatedArticles = articles
    .filter(a => a.slug !== currentArticle.slug)
    .slice(0, 3);

  return (
    <div className="mt-12">
      <h2 className="text-xl font-bold mb-6">Related Articles</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {relatedArticles.map((relatedArticle) => (
          <Card key={relatedArticle.slug} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-4">
              <Link
                to={`/news/${category}/${relatedArticle.slug}`}
                className="block group"
              >
                <h3 className="font-semibold text-sm mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {relatedArticle.title}
                </h3>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{relatedArticle.source}</span>
                  <span>{relatedArticle.date}</span>
                </div>
                <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground">
                  <Clock size={12} />
                  <span>{relatedArticle.readTime} min read</span>
                </div>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RelatedArticles;
