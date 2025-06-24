
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock } from 'lucide-react';
import { Rocket, Flame, BrainCircuit } from 'lucide-react';

const DailySummary = () => {
  const navigate = useNavigate();

  const handleNewsClick = (article: any) => {
    // For static HTML articles, navigate directly to the file
    if (article.slug === 'trump-ceasefire-war-iran-israel' || article.slug === 'us-joins-israel-striking-irans-nuclear-sites-iran-israel-war-trump') {
      window.location.href = `/news/${article.slug}.html`;
      return;
    }
    
    // For other articles, use the React router
    navigate(`/news/${article.slug}`, { 
      state: { article, isDailySummary: true } 
    });
  };

  const summaryData = [
    {
      category: "Business",
      bgColor: "bg-blue-600",
      icon: Rocket,
      articles: [
        {
          title: "Musk's SpaceX lands record government contract",
          source: "TechCrunch",
          time: "2 hours ago",
          slug: "musk-spacex-government-contract"
        },
        {
          title: "Apple unveils new AI chip for upcoming devices",
          source: "The Verge",
          time: "4 hours ago",
          slug: "apple-new-ai-chip"
        },
        {
          title: "Global oil prices surge amid supply chain disruptions",
          source: "Reuters",
          time: "6 hours ago",
          slug: "global-oil-prices-surge"
        },
      ],
    },
    {
      category: "Politics",
      bgColor: "bg-red-600",
      icon: Flame,
      articles: [
        {
          title: "Trump announces potential ceasefire in Iran-Israel war",
          source: "Truth Social",
          time: "1 hour ago",
          slug: "trump-ceasefire-war-iran-israel"
        },
        {
          title: "U.S. Joins Israel in Striking Iran's Nuclear Sites",
          source: "BizNews Daily",
          time: "2 days ago",
          slug: "us-joins-israel-striking-irans-nuclear-sites-iran-israel-war-trump"
        },
        {
          title: "Senate passes bipartisan infrastructure bill",
          source: "CNN",
          time: "3 hours ago",
          slug: "senate-passes-infrastructure-bill"
        },
      ],
    },
    {
      category: "Technology",
      bgColor: "bg-purple-600",
      icon: BrainCircuit,
      articles: [
        {
          title: "Google's quantum computer achieves breakthrough",
          source: "Nature",
          time: "5 hours ago",
          slug: "google-quantum-computer-breakthrough"
        },
        {
          title: "Amazon invests heavily in renewable energy projects",
          source: "Bloomberg",
          time: "8 hours ago",
          slug: "amazon-renewable-energy-investment"
        },
        {
          title: "Microsoft launches new developer tools for AI",
          source: "ZDNet",
          time: "10 hours ago",
          slug: "microsoft-developer-tools-ai"
        },
      ],
    },
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Daily News Summary
        </h2>
        <p className="text-muted-foreground">
          Stay updated with today's most important business and political developments
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {summaryData.map((section) => (
          <Card key={section.category} className="overflow-hidden hover:shadow-lg transition-shadow">
            <CardHeader className={`text-white ${section.bgColor}`}>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <section.icon size={24} />
                  {section.category}
                </CardTitle>
                <Badge variant="secondary" className="bg-white/20 text-white">
                  {section.articles.length} updates
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="space-y-1">
                {section.articles.map((article, index) => (
                  <div
                    key={index}
                    onClick={() => handleNewsClick(article)}
                    className="p-4 border-b last:border-b-0 hover:bg-gray-50 cursor-pointer transition-colors group"
                  >
                    <h4 className="font-medium text-sm mb-1 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {article.title}
                    </h4>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{article.source}</span>
                      <div className="flex items-center gap-2">
                        <span>{article.time}</span>
                        <Clock size={12} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DailySummary;
