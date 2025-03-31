
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
      title: "BluSmart Crashes: How Intertwined Companies Created a Financial House of Cards
",
      source: "Finshots",
      summary: "The Situation: Signs of a Startup in Trouble"
BluSmart, an electric vehicle (EV) ride-hailing service founded in 2019, is experiencing a significant leadership crisis with the simultaneous resignation of its CEO, CBO, CTO, and VP.
Problem with BluSmart
   – The business model problem 
While other ride hailing companies like Ola and Uber operate primarily as platforms- connecting passengers with independent drivers who own or finance their vehicles
BluSmart, by contrast, positioned itself as an eco-friendly alternative by operating a fleet of electric vehicles that it had to lease on it’s own rather than having driver-partners supply their own vehicles.
 This model exposed BluSmart to significant financial risk by making it dependent on external leasing partners and vulnerable to changes in leasing costs.

SHared Leadership - Both companies were founded by Anmol Singh Jaggi, creating an tricky relationship between a public company (Gensol) and a private company (BluSmart). 
-	Practise : Gensol secured government-backed loans from the Indian Renewable Energy Development Agency (IREDA) to purchase thousands of EVs, most of which were leased to BluSmart. 
-	This effectively meant government-backed money intended for Gensol was indirectly fueling BluSmart's expansion.
-	 Substantial transactions: Gensol's FY24 annual report revealed contracts worth over ₹148 crores with BluSmart's subsidiaries.
 By the end of 2024, Gensol had accumulated unpaid loans of ₹470 crores to IREDA.
Gensol's stock price plummeted

Current Challenges

1.	Uncertainty of its Fleet: While Refex has agreed to lease its EVs to BluSmart for five years, it has suggested it might eventually stop the leasing arrangement and launch its own competing ride-hailing service.
2.	Competitive pressure: Refex is already working with Uber Green
3.	Funding: With Gensol no longer supporting it, BluSmart is struggling to raise new funds.
4.	Financial and operational issues: The company reported losses of ₹215 crores in FY23 and faces mounting customer service complaints.

The Deeper Issues

1.	Corporate governance conflicts: The arrangement allowed a public company's resources (Gensol) to benefit a private company (BluSmart) without direct benefits flowing to Gensol's public shareholders.
2.	Dependency risk: By relying heavily on a single partner for its fleet, BluSmart created a critical risk in its business model.
3.	Capital intensity in startups: Both EV leasing and ride-hailing are capital-intensive businesses, combining them put double pressure on the owner.
",
  
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
