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
      title: "BluSmart Saga: What really happened?",
      source: "Mixed",
      summary: "The Situation: Signs of a Startup in Trouble. BluSmart, an electric vehicle (EV) ride-hailing service founded in 2019, is experiencing a significant leadership crisis with the simultaneous resignation of its CEO, CBO, CTO, and VP. Problem with BluSmart – The business model problem: While other ride hailing companies like Ola and Uber operate primarily as platforms connecting passengers with independent drivers, BluSmart positioned itself as an eco-friendly alternative by operating a fleet of electric vehicles that it had to lease on its own, exposing it to significant financial risk.",
      date: "Sep 15, 2023",
      readTime: 3
    },
    {
      title: "RBI's ₹2.69 Lakh Crore Gift to the Government: What It Means for You and the Economy",
      source: "Business Today",
      summary: `The Reserve Bank of India (RBI) has approved a record surplus transfer of ₹2.68–2.69 lakh crore to the Central Government for the fiscal year ending March 31, 2025. This payout is a 27.4% increase over the ₹2.1 lakh crore transferred in FY 2023-24. 

Reasons Behind the Record Transfer:
- Higher Earnings from Forex Operations: Strong foreign exchange gains, driven by increased dollar sales and favourable exchange-rate movements, boosted the RBI's income.

Key Details of the Payout:
Fiscal Year 2022-23: ₹87,416 crore (6.0% CRB)
Fiscal Year 2023-24: ₹2.10 lakh crore (6.5% CRB)  
Fiscal Year 2024-25: ₹2.68–2.69 lakh crore (7.5% CRB)

Consequences & Implications:
For the Central Government: The ₹2.69 lakh crore helps narrow the fiscal deficit without additional market borrowing and frees up capital for infrastructure, healthcare, education, and social welfare schemes.

For Financial Markets: This signals robust economic management, bolstering credit ratings and attracting foreign investment. Lower government borrowing requirements may exert less pressure on bond yields.

For Citizens: With the government better funded, there's less need for tax hikes, helping keep the overall tax burden stable while improving public services.`,
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
      title: "The Campa Strategy by Reliance ",
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
