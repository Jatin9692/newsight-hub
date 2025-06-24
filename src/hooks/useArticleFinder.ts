
import { articles, NewsArticle } from '../data/newsData';

// Define the daily summary articles with their slugs
const dailySummaryArticles = [
  {
    slug: "trump-ceasefire-war-iran-israel",
    title: "Trump Announces Potential Ceasefire in Iran-Israel War",
    source: "Truth Social",
    date: "June 24, 2025",
    readTime: 5,
    category: "Politics",
    summary: `<div class="formatted-article-content">
      <p class="lead-paragraph">In a dramatic diplomatic development, former President Donald Trump announced through his Truth Social platform that he has brokered preliminary ceasefire discussions between Iran and Israel, potentially ending weeks of escalating military confrontations in the Middle East.</p>
      
      <h2>🔥 Latest Developments</h2>
      <p>June 24, 2025 - 11:45 AM EST: Trump posted on Truth Social claiming "major breakthrough" in Iran-Israel tensions through "back-channel diplomacy" involving Qatar as mediator.</p>
      
      <h2>What Trump Claims to Have Achieved</h2>
      <p>According to Trump's social media statements, the proposed ceasefire includes immediate cessation of military strikes, withdrawal of forces from contested border areas, international monitoring through UN peacekeepers, and humanitarian corridors for civilian populations.</p>
      
      <h2>Official Government Response</h2>
      <p>The Biden administration has not confirmed Trump's claims. White House Press Secretary stated they are "aware of various diplomatic initiatives" but emphasized that "official U.S. foreign policy is conducted through proper government channels."</p>
      
      <p class="conclusion">DEVELOPING STORY: We will continue monitoring this situation and provide updates as official confirmations emerge from all parties involved. The potential for peace remains fragile but represents a crucial moment for Middle East stability.</p>
    </div>`
  },
  {
    slug: "us-joins-israel-striking-irans-nuclear-sites-iran-israel-war-trump",
    title: "U.S. Joins Israel in Striking Iran's Nuclear Sites – iran-israel war escalates under Trump's order",
    source: "BizNews Daily",
    date: "June 22, 2025",
    readTime: 6,
    category: "Politics",
    summary: `<div class="formatted-article-content">
      <p class="lead-paragraph">In a major escalation of Middle East tensions, the United States has joined Israel in bombing three of Iran's key nuclear sites—Fordow, Natanz, and Isfahan—after weeks of mounting hostilities.</p>
      
      <h2>What's Going On in the iran-israel war?</h2>
      <p>On June 22, 2025, U.S. B-2 stealth bombers and submarine-launched missiles joined Israeli jets in hitting Iran's nuclear facilities. Israel cited new intelligence on Iran's bomb program; President Trump personally authorized U.S. involvement.</p>
      
      <h2>How Trump Ordered U.S. Strikes in the iran-israel war</h2>
      <p>Without seeking Congress, Trump invoked executive war powers. He called it a "spectacular success" and said it "obliterated" Iran's nuclear threat.</p>
      
      <h2>What Was Destroyed in Iran's Nuclear Sites?</h2>
      <p>Precision strikes heavily damaged uranium enrichment halls at Fordow, Natanz, and Isfahan. Nearby missile and drone factories were also hit to degrade Iran's wider military capacity.</p>
      
      <h2>Who Was Killed in the War—Key IRGC Figures & Civilians</h2>
      <p>Two senior IRGC generals—Saeed Izadi and Behnam Shahriyari—were killed. Iran reports 430–657 total deaths, including 263+ civilians. Retaliatory Iranian attacks have killed 24+ civilians in Israel.</p>
      
      <p class="conclusion">With U.S. forces now directly involved, the iran-israel war has entered a new phase. The world watches nervously as both sides prepare for possible further escalation.</p>
    </div>`
  }
];

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

    // First: Check daily summary articles
    const dailyArticle = dailySummaryArticles.find(a => a.slug === slug);
    if (dailyArticle) {
      return {
        ...dailyArticle,
        slug: dailyArticle.slug
      } as NewsArticle;
    }

    // Second: Check regular articles with exact slug match
    let article = articles.find(a => a.slug === slug);
    if (article) return article;

    // Third: Normalized slug match
    const normalizedSlug = normalizeSlug(slug);
    article = articles.find(a => normalizeSlug(a.slug) === normalizedSlug);
    if (article) return article;

    // Fourth: Title-based matching
    article = articles.find(a => normalizeSlug(a.title) === normalizedSlug);
    if (article) return article;

    // Fifth: Partial title matching (for URL-decoded cases)
    const decodedSlug = decodeURIComponent(slug);
    const normalizedDecodedSlug = normalizeSlug(decodedSlug);
    article = articles.find(a => normalizeSlug(a.title) === normalizedDecodedSlug);
    if (article) return article;

    // Sixth: Fuzzy matching for common variations
    article = articles.find(a => {
      const articleTitle = normalizeSlug(a.title);
      const searchSlug = normalizedSlug;
      
      // Check if the article title contains the search slug or vice versa
      return articleTitle.includes(searchSlug) || searchSlug.includes(articleTitle);
    });

    return article || null;
  };

  const getSuggestions = (slug?: string): NewsArticle[] => {
    if (!slug) return [...dailySummaryArticles, ...articles].slice(0, 3);
    
    const normalizedSlug = normalizeSlug(slug);
    const keywords = normalizedSlug.split('-').filter(word => word.length > 2);
    
    const allArticles = [...dailySummaryArticles, ...articles];
    const suggestions = allArticles
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

    return suggestions.length > 0 ? suggestions : allArticles.slice(0, 3);
  };

  return { findArticle, getSuggestions };
};
