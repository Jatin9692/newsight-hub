
export interface NewsArticle {
  title: string;
  source: string;
  summary: string;
  date: string;
  readTime: number;
  imageUrl?: string;
}

export interface NewsDataType {
  finance: NewsArticle[];
  marketing: NewsArticle[];
  politics: NewsArticle[];
  sports: NewsArticle[];
}

export const newsData: NewsDataType = {
  finance: [
    {
      title: "Global Markets React to Federal Reserve's Latest Decision",
      source: "Financial Times",
      summary: "Markets responded positively to the Federal Reserve's announcement, with tech stocks seeing significant gains as interest rate expectations were confirmed.",
      date: "Sep 15, 2023",
      readTime: 4
    },
    {
      title: "Cryptocurrency Regulations Tighten in European Markets",
      source: "Bloomberg",
      summary: "New regulatory frameworks in the EU aim to provide clearer guidelines for cryptocurrency exchanges, impacting how digital assets are traded and managed.",
      date: "Sep 12, 2023",
      readTime: 5
    },
    {
      title: "Investment Trends Show Shift Toward Sustainable Finance",
      source: "WSJ",
      summary: "Investors are increasingly prioritizing ESG (Environmental, Social, and Governance) factors in their portfolios, leading to significant capital flow into sustainable businesses.",
      date: "Sep 10, 2023",
      readTime: 3
    }
  ],
  marketing: [
    {
      title: "AI-Driven Marketing Strategies Transform Customer Engagement",
      source: "Marketing Today",
      summary: "Companies leveraging artificial intelligence for customer segmentation and personalization are seeing conversion rate increases of up to 30% compared to traditional methods.",
      date: "Sep 14, 2023",
      readTime: 4
    },
    {
      title: "Social Commerce Emerges as Key Revenue Driver",
      source: "Digital Marketing Institute",
      summary: "The integration of shopping features directly into social media platforms is creating new opportunities for brands to convert followers into customers without leaving the app.",
      date: "Sep 11, 2023",
      readTime: 6
    },
    {
      title: "Video Content Continues to Dominate Digital Marketing",
      source: "Content Marketing Association",
      summary: "Short-form video content is showing the highest engagement rates across platforms, with brands adapting their strategies to focus on authentic, quick-consumption formats.",
      date: "Sep 9, 2023",
      readTime: 3
    }
  ],
  politics: [
    {
      title: "New Trade Agreements Reshape Global Supply Chains",
      source: "International Policy Review",
      summary: "Recently signed multilateral trade agreements are expected to significantly impact how goods move between major economies, with experts predicting both challenges and opportunities.",
      date: "Sep 13, 2023",
      readTime: 5
    },
    {
      title: "Climate Policy Takes Center Stage in International Discussions",
      source: "Global Affairs",
      summary: "World leaders at the recent summit committed to more aggressive carbon reduction targets, signaling a potential shift in how industries will operate in coming decades.",
      date: "Sep 12, 2023",
      readTime: 4
    },
    {
      title: "Tech Regulation Faces Bipartisan Support in Legislative Session",
      source: "Policy Insider",
      summary: "Lawmakers from both sides of the aisle are finding common ground on the need for updated regulations on data privacy and platform accountability.",
      date: "Sep 10, 2023",
      readTime: 3
    }
  ],
  sports: [
    {
      title: "Championship Finals Break Viewership Records",
      source: "Sports Network",
      summary: "The finals series attracted the largest global audience in the sport's history, with streaming numbers showing particularly strong growth among younger demographics.",
      date: "Sep 14, 2023",
      readTime: 3
    },
    {
      title: "Analytics Revolution Changes Team Recruitment Strategies",
      source: "Sports Analytics Weekly",
      summary: "Professional teams are increasingly relying on advanced data metrics to identify talent, resulting in surprising draft picks and transfer decisions that challenge conventional wisdom.",
      date: "Sep 11, 2023",
      readTime: 5
    },
    {
      title: "Student Athletes Benefit from New Endorsement Rules",
      source: "College Sports Today",
      summary: "Recent policy changes allowing college athletes to profit from their name, image, and likeness are creating unprecedented opportunities for students across various sports.",
      date: "Sep 9, 2023",
      readTime: 4
    }
  ]
};
