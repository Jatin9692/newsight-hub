
import React, { useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { NewsArticle } from '../data/newsData';
import { articles } from '../data/newsData';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const NewsDetail = () => {
  const { category, slug } = useParams<{ category: string; slug: string }>();
  const location = useLocation();

  // Check if article is passed from Daily Summary or find by slug
  const articleFromState = location.state?.article;
  const isDailySummary = location.state?.isDailySummary;
  
  const article = articleFromState || articles.find((a: NewsArticle) => a.slug === slug);

  // Set dynamic title and meta description
  useEffect(() => {
    if (article) {
      // Update page title
      document.title = `${article.title} | Biz News Daily`;
      
      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      const plainTextSummary = article.summary.replace(/<[^>]*>/g, '').substring(0, 160);
      if (metaDescription) {
        metaDescription.setAttribute('content', plainTextSummary + '...');
      } else {
        const newMetaDescription = document.createElement('meta');
        newMetaDescription.name = 'description';
        newMetaDescription.content = plainTextSummary + '...';
        document.head.appendChild(newMetaDescription);
      }

      // Add canonical URL
      const existingCanonical = document.querySelector('link[rel="canonical"]');
      if (existingCanonical) {
        existingCanonical.setAttribute('href', window.location.href);
      } else {
        const canonical = document.createElement('link');
        canonical.rel = 'canonical';
        canonical.href = window.location.href;
        document.head.appendChild(canonical);
      }
    }
  }, [article]);

  if (!article) {
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

  const getCategoryColor = () => {
    switch (category) {
      case 'finance': return 'text-news-finance';
      case 'marketing': return 'text-news-marketing';
      case 'politics': return 'text-news-politics';
      case 'ai': return 'text-green-700';
      default: return 'text-primary';
    }
  };

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
          <Card className="bg-card shadow-md">
            <CardHeader>
              <CardTitle className="text-3xl font-bold mb-4 leading-tight">{article.title}</CardTitle>
              <div className="flex flex-wrap gap-3 items-center text-sm text-muted-foreground">
                <span className={`font-medium capitalize ${getCategoryColor()}`}>{category || article.category}</span>
                <span className="font-medium">{article.source}</span>
                <span>{article.date}</span>
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  <span>{article.readTime} min read</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="prose max-w-none">
              {article.summary.includes('<div class="article-content">') ? (
                <div
                  className="formatted-article-content"
                  dangerouslySetInnerHTML={{ __html: article.summary }}
                />
              ) : (
                <div className="formatted-article-content">
                  <p className="lead-paragraph">{article.summary}</p>
                </div>
              )}
            </CardContent>
          </Card>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default NewsDetail;
