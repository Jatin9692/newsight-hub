import { articles, NewsArticle } from '../data/newsData';

// Define the daily summary articles with their slugs
const dailySummaryArticles = [
  {
    slug: "us-china-trade-deal-trump-india-news",
    title: "Trump Confirms US–China Trade Truce; Big India Deal Coming",
    source: "BizNewsDaily",
    date: "June 27, 2025",
    readTime: 6,
    category: "Politics",
    summary: `<div class="formatted-article-content">
      <p class="lead-paragraph">President Donald Trump announced a headline US–China tariff truce and teased a major US–India trade deal, sending global markets and Indian exporters surging on hopes of tariff relief and new opportunities.</p>
      
      <h2>🔥 US–China Trade Truce Details</h2>
      <p>After nearly three years of tit-for-tat tariffs—up to 45% on over $500 billion in goods—Trump said the U.S. "has just signed" a deal with China based on April's Geneva talks. The truce halts new tariffs while existing duties remain in place.</p>
      
      <h2>💼 Historic US–India Deal Coming</h2>
      <p>Immediately after the China news, Trump promised a "very big" deal with India. Focus areas include textiles ($40B exports), pharmaceuticals ($13B), and IT services ($150B) with potential for significant tariff cuts and regulatory streamlining.</p>
      
      <h2>📈 Market Reaction</h2>
      <p>S&P 500 +0.7%, Dow Jones +180 points, CSI 300 +1.1%, Sensex +0.8% (72,450), Nifty 50 +0.9% (22,100), and rupee strengthened to ₹83.25.</p>
      
      <p class="conclusion">Trump's announcements signal a strategic shift towards negotiation, with potential tariff relief and expanded market access reshaping global trade dynamics.</p>
    </div>`
  },
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
    slug: "top-business-news-today",
    title: "Top Business News Today India - Latest Market Updates",
    source: "BizNewsDaily",
    date: "June 25, 2025",
    readTime: 8,
    category: "Business",
    summary: `<div class="formatted-article-content">
      <p class="lead-paragraph">Stay updated with the top business news today from India's dynamic market landscape. From credit card spending surges to major acquisitions, here are the 6 biggest business stories shaping India's economy on June 25, 2025.</p>
      
      <h2>🔥 Credit Card Spending Surge</h2>
      <p>Holiday travel helped push credit card spending to ₹1.9 lakh crore in May 2025, a 15% year-on-year rise. Over 760,000 new cards were issued in May alone, led by HDFC Bank, SBI, and Axis Bank.</p>
      
      <h2>💼 Major Acquisitions</h2>
      <p>Hindalco Industries is acquiring AluChem, a US-based specialty alumina firm, for $125 million to strengthen its high-tech materials portfolio and double capacity to 1 million tonnes.</p>
      
      <h2>🚗 Manufacturing Investments</h2>
      <p>Jaguar Land Rover will invest ₹9,000 crore in Tamil Nadu to assemble luxury SUVs—Range Rover & Velar—by early 2026 under Tata Motors' expansion plan.</p>
      
      <p class="conclusion">Today's top business news highlights India's growing consumer spending, strategic acquisitions, and expanding global presence across multiple sectors.</p>
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
