import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { articles, NewsArticle } from '../data/newsData';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const NewsDetail = () => {
  const { category, slug } = useParams<{ category: string; slug: string }>();

  // More robust slug matching function
  const normalizeSlug = (text: string): string => {
    return text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '') // Remove special characters except spaces and hyphens
      .replace(/\s+/g, '-')     // Replace spaces with hyphens
      .replace(/-+/g, '-')      // Replace multiple hyphens with single hyphen
      .replace(/^-+|-+$/g, '')  // Remove leading/trailing hyphens
      .trim();
  };

  // Enhanced article finding logic
  const findArticle = (): NewsArticle | null => {
    if (!slug) return null;

    // First: Exact slug match
    let article = articles.find(a => a.slug === slug);
    if (article) return article;

    // Second: Normalized slug match
    const normalizedSlug = normalizeSlug(slug);
    article = articles.find(a => normalizeSlug(a.slug) === normalizedSlug);
    if (article) return article;

    // Third: Title-based matching
    article = articles.find(a => normalizeSlug(a.title) === normalizedSlug);
    if (article) return article;

    // Fourth: Partial title matching (for URL-decoded cases)
    const decodedSlug = decodeURIComponent(slug);
    const normalizedDecodedSlug = normalizeSlug(decodedSlug);
    article = articles.find(a => normalizeSlug(a.title) === normalizedDecodedSlug);
    if (article) return article;

    // Fifth: Fuzzy matching for common variations
    article = articles.find(a => {
      const articleTitle = normalizeSlug(a.title);
      const searchSlug = normalizedSlug;
      
      // Check if the article title contains the search slug or vice versa
      return articleTitle.includes(searchSlug) || searchSlug.includes(articleTitle);
    });

    return article || null;
  };

  const article = findArticle();

  // Generate better suggestions
  const getSuggestions = (): NewsArticle[] => {
    if (!slug) return articles.slice(0, 3);
    
    const normalizedSlug = normalizeSlug(slug);
    const keywords = normalizedSlug.split('-').filter(word => word.length > 2);
    
    const suggestions = articles
      .map(a => ({
        article: a,
        score: keywords.reduce((score, keyword) => {
          const titleWords = normalizeSlug(a.title).split('-');
          return score + (titleWords.some(word => word.includes(keyword)) ? 1 : 0);
        }, 0)
      }))
      .filter(({ score }) => score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 5)
      .map(({ article }) => article);

    return suggestions.length > 0 ? suggestions : articles.slice(0, 3);
  };

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

  // If no article found, show suggestions
  if (!article) {
    const suggestions = getSuggestions();
    
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
                        to={`/news/${category || 'finance'}/${suggestion.slug}`}
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
        </main>
        <Footer />
      </div>
    );
  }

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
            
            <CardContent className="prose prose-slate max-w-none">
              <div
                className="article-content"
                dangerouslySetInnerHTML={{ __html: article.summary }}
              />
            </CardContent>
          </Card>

          {/* Related Articles */}
          <div className="mt-12">
            <h2 className="text-xl font-bold mb-6">Related Articles</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {articles
                .filter(a => a.slug !== article.slug)
                .slice(0, 3)
                .map((relatedArticle) => (
                  <Card key={relatedArticle.slug} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-4">
                      <Link
                        to={`/news/${category || 'finance'}/${relatedArticle.slug}`}
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
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default NewsDetail;
