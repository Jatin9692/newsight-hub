
import React, { useState } from 'react';
import { useLocation, useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { NewsArticle } from '../data/newsData';
import { NewsCategory } from '../components/CategoryTabs';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Clock, ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface LocationState {
  article: NewsArticle;
  category: NewsCategory;
  isDailySummary?: boolean;
}

const NewsDetail = () => {
  const location = useLocation();
  const { category } = useParams<{ category: string; slug: string }>();
  const state = location.state as LocationState;
  const [isExpanded, setIsExpanded] = useState(false);

  if (!state || !state.article) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="container flex-1 py-8">
          <div className="mb-6">
            <Button variant="ghost" asChild>
              <Link to="/" className="inline-flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>
          <div className="text-center py-12">
            <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
            <p className="text-muted-foreground">
              The article you're looking for doesn't exist or has been removed.
            </p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const { article } = state;
  
  const getCategoryColor = () => {
    switch (category) {
      case 'finance': return 'text-news-finance';
      case 'marketing': return 'text-news-marketing';
      case 'politics': return 'text-news-politics';
      case 'sports': return 'text-news-sports';
      default: return 'text-primary';
    }
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const isHTMLContent = article.summary.includes('<div class="article-content">');
  const displaySummary = isHTMLContent ? 
    article.summary : 
    `<div class="article-content"><p>${article.summary}</p></div>`;

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="container flex-1 py-8">
        <div className="mb-6">
          <Button variant="ghost" asChild>
            <Link to="/" className="inline-flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
        
        <article className="max-w-4xl mx-auto">
          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="text-3xl mb-4 leading-tight">{article.title}</CardTitle>
              <div className="flex flex-wrap gap-4 items-center text-sm text-muted-foreground">
                {!state.isDailySummary && (
                  <span className={`font-medium capitalize ${getCategoryColor()}`}>{category}</span>
                )}
                <span className="font-medium">{article.source}</span>
                <span>{article.date}</span>
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  <span>{article.readTime} min read</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className={`article-preview ${isExpanded ? 'expanded' : 'collapsed'}`}>
                <div 
                  className="formatted-article-content"
                  dangerouslySetInnerHTML={{ __html: displaySummary }}
                />
              </div>
              
              <Button
                onClick={toggleExpanded}
                variant="outline"
                className="mt-4 w-full flex items-center justify-center gap-1"
              >
                {isExpanded ? (
                  <>Show Less <ChevronUp size={16} /></>
                ) : (
                  <>Read More <ChevronDown size={16} /></>
                )}
              </Button>
            </CardContent>
          </Card>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default NewsDetail;
