
import React from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ArticleContent from '../components/ArticleContent';
import ArticleSuggestions from '../components/ArticleSuggestions';
import RelatedArticles from '../components/RelatedArticles';
import { useArticleFinder } from '../hooks/useArticleFinder';

const NewsDetail = () => {
  const { category, slug } = useParams<{ category: string; slug: string }>();
  const location = useLocation();
  const { findArticle, getSuggestions } = useArticleFinder();

  // Check if article data is passed via navigation state (from Daily Summary)
  const stateArticle = location.state?.article;
  const isDailySummary = location.state?.isDailySummary;

  let article = null;
  
  if (stateArticle && isDailySummary) {
    // Use the article from Daily Summary state
    article = stateArticle;
  } else if (slug) {
    // Try to find the article by slug
    article = findArticle(slug);
  }

  const suggestions = getSuggestions(slug);
  const canonicalUrl = `https://biznewsdaily.live/news/${slug || 'article'}`;

  if (!article) {
    return (
      <div className="flex min-h-screen flex-col">
        <Helmet>
          <title>Article Not Found - Biznews Daily</title>
          <meta name="description" content="The requested article could not be found. Browse our suggested articles below." />
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
          
          <ArticleSuggestions 
            suggestions={suggestions} 
            category={category || 'finance'} 
          />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Helmet>
        <title>{article.title} - Biznews Daily</title>
        <meta name="description" content={`${article.title} - Read the latest news and insights on Biznews Daily`} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={`${article.title} - Read the latest news and insights on Biznews Daily`} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article.title} />
        <meta name="twitter:description" content={`${article.title} - Read the latest news and insights on Biznews Daily`} />
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

        <ArticleContent 
          article={article} 
          category={category || 'politics'} 
        />

        <RelatedArticles 
          currentArticle={article} 
          category={category || 'politics'} 
        />
      </main>
      <Footer />
    </div>
  );
};

export default NewsDetail;
