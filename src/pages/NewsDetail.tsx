
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { articles, NewsArticle } from '../data/newsData';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Helmet } from 'react-helmet';

const NewsDetail = () => {
  const { category, slug } = useParams<{ category: string; slug: string }>();

  // Utility: normalize string (like slugify but lighter)
  const normalize = (text: string) =>
    text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-').trim();

  // Try to find the article safely
  let article: NewsArticle | undefined;

  // First try to find by slug
  if (slug) {
    article = articles.find((a: NewsArticle) => a.slug === slug);
  }

  // Fallback to title-match if slug isn't found
  if (!article && slug) {
    const safeSlug = normalize(slug);
    article = articles.find((a: NewsArticle) =>
      normalize(a.title) === safeSlug
    );
  }

  // Generate suggestions for similar articles if not found
  const getSuggestions = () => {
    if (!slug) return [];
    const safeSlug = normalize(slug);
    return articles
      .filter((a: NewsArticle) => {
        const normalizedTitle = normalize(a.title);
        return normalizedTitle.includes(safeSlug.split('-')[0]) || 
               safeSlug.includes(normalizedTitle.split('-')[0]);
      })
      .slice(0, 3);
  };

  const getCategoryColor = () => {
    switch (category) {
      case 'finance': return 'text-news-finance';
      case 'marketing': return 'text-news-marketing';
      case 'politics': return 'text-news-politics';
      case 'ai': return 'text-green-700';
      case 'software': return 'text-blue-700';
      default: return 'text-primary';
    }
  };

  if (!article) {
    const suggestions = getSuggestions();
    
    return (
      <div className="flex min-h-screen flex-col">
        <Helmet>
          <title>Article Not Found | BizNewsDaily</title>
          <meta name="description" content="The article you're looking for could not be found. Browse our latest news articles." />
        </Helmet>
        
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
            <p className="text-muted-foreground mb-6">
              The article you're looking for doesn't exist or has been removed.
            </p>
            
            {suggestions.length > 0 && (
              <div className="max-w-2xl mx-auto">
                <h2 className="text-lg font-semibold mb-4">Did you mean...</h2>
                <div className="space-y-2">
                  {suggestions.map((suggestion) => (
                    <Link
                      key={suggestion.slug}
                      to={`/news/${category || 'finance'}/${suggestion.slug}`}
                      className="block p-3 bg-card rounded-lg hover:bg-accent transition-colors text-left"
                    >
                      <h3 className="font-medium text-sm">{suggestion.title}</h3>
                      <p className="text-xs text-muted-foreground mt-1">
                        {suggestion.source} • {suggestion.date}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Helmet>
        <title>{article.title} | BizNewsDaily</title>
        <meta name="description" content={article.summary.replace(/<[^>]+>/g, '').slice(0, 160)} />
        <link rel="canonical" href={window.location.href} />
      </Helmet>

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
                <span className={`font-medium capitalize ${getCategoryColor()}`}>{category}</span>
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
