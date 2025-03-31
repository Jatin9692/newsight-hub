
import React from 'react';
import { useLocation, useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { NewsArticle } from '../data/newsData';
import { NewsCategory } from '../components/CategoryTabs';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Clock } from 'lucide-react';

interface LocationState {
  article: NewsArticle;
  category: NewsCategory;
}

const NewsDetail = () => {
  const location = useLocation();
  const { category } = useParams<{ category: string; slug: string }>();
  const state = location.state as LocationState;

  // If we don't have state (e.g., from a direct link), we could fetch the article
  // based on slug and category, but for this example we'll just display a message
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
  
  // Get category color class
  const getCategoryColor = () => {
    switch (category) {
      case 'finance': return 'text-news-finance';
      case 'marketing': return 'text-news-marketing';
      case 'politics': return 'text-news-politics';
      case 'sports': return 'text-news-sports';
      default: return 'text-primary';
    }
  };

  // Example expanded article content - in a real app this would come from an API
  const expandedContent = `
    ${article.summary}
    
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu felis vel metus interdum facilisis. 
    Donec sem nisl, vulputate et lorem non, aliquam lacinia metus. Donec efficitur nulla a lacus volutpat, 
    in ultricies enim finibus. Nullam euismod nisl vel tellus suscipit, ut feugiat turpis eleifend.
    
    Praesent a enim vitae est fringilla venenatis. Sed a tortor risus. Nullam porttitor at nisl id 
    tincidunt. Suspendisse eleifend gravida neque ut aliquam. Donec fermentum, metus id pulvinar 
    vestibulum, ante lectus gravida eros, vel fringilla tellus nisl eget eros. Ut et ipsum et ante 
    luctus faucibus nec id ex.
    
    In a real application, this would be a full article with proper formatting, images, and potentially 
    other interactive elements like charts or embedded videos.
  `;

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
        
        <article className="max-w-3xl mx-auto">
          <header className="mb-8">
            <h1 className="text-3xl font-bold mb-2">{article.title}</h1>
            <div className="flex flex-wrap gap-4 items-center text-sm text-muted-foreground mb-4">
              <span className={`font-medium capitalize ${getCategoryColor()}`}>{category}</span>
              <span>{article.source}</span>
              <span>{article.date}</span>
              <div className="flex items-center gap-1">
                <Clock size={14} />
                <span>{article.readTime} min read</span>
              </div>
            </div>
          </header>
          
          <div className="prose prose-sm sm:prose lg:prose-lg max-w-none">
            {expandedContent.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-4">{paragraph}</p>
            ))}
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default NewsDetail;
