
import { articles, NewsArticle } from '../data/newsData';

export const useArticleFinder = () => {
  const normalizeSlug = (text: string): string => {
    return text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '') // Remove special characters except spaces and hyphens
      .replace(/\s+/g, '-')     // Replace spaces with hyphens
      .replace(/-+/g, '-')      // Replace multiple hyphens with single hyphen
      .replace(/^-+|-+$/g, '')  // Remove leading/trailing hyphens
      .trim();
  };

  const findArticle = (slug: string): NewsArticle | null => {
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

  const getSuggestions = (slug?: string): NewsArticle[] => {
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

  return { findArticle, getSuggestions };
};
