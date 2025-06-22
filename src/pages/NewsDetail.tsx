
import React from 'react';
import { useParams, Link } from 'react-router-dom';
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
  const { findArticle, getSuggestions } = useArticleFinder();

  const article = slug ? findArticle(slug) : null;
  const suggestions = getSuggestions(slug);

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
          category={category || 'finance'} 
        />

        <RelatedArticles 
          currentArticle={article} 
          category={category || 'finance'} 
        />
      </main>
      <Footer />
    </div>
  );
};

export default NewsDetail;
