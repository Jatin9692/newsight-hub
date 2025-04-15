import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useIsMobile } from "@/hooks/use-mobile";
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// Mock news data - in a real app, this would come from an API
const newsItems = [
  {
    id: 1,
    title: "Global markets respond to new economic policies",
    summary: "Major stock indices worldwide showed varied responses to the introduction of new economic policies aimed at stabilizing inflation and promoting sustainable growth across developing markets.",
    category: "finance",
    date: "Sep 15, 2023",
    readTime: 5,
    source: "Financial Times"
  },
  {
    id: 2,
    title: "Tech companies unveil innovative marketing strategies",
    summary: "Leading technology firms are revolutionizing their approach to digital marketing by implementing AI-driven content creation and personalized user experiences, resulting in significantly improved engagement metrics.",
    category: "marketing",
    date: "Sep 14, 2023",
    readTime: 4,
    source: "Marketing Today"
  },
  {
    id: 3,
    title: "Political shifts impact international trade agreements",
    summary: "Recent changes in political leadership across several key nations have led to renegotiations of major trade agreements, with potential long-term implications for global supply chains and commodity prices.",
    category: "politics",
    date: "Sep 13, 2023",
    readTime: 6,
    source: "International Policy Review"
  },
  {
    id: 4,
    title: "Championship finals break viewing records",
    summary: "The recent championship finals attracted unprecedented viewer numbers across streaming platforms and traditional broadcast channels, demonstrating the growing global interest in professional sports competitions.",
    category: "sports",
    date: "Sep 14, 2023",
    readTime: 3,
    source: "Sports Network"
  },
  {
    id: 5,
    title: "New renewable energy initiatives gain traction",
    summary: "Several countries have announced ambitious renewable energy projects, signaling a potential acceleration in the global transition away from fossil fuels and towards sustainable power generation.",
    category: "finance",
    date: "Sep 12, 2023",
    readTime: 5,
    source: "Energy Report"
  },
  {
    id: 6,
    title: "Financial sector embraces blockchain technology",
    summary: "Major financial institutions are increasingly adopting blockchain solutions for transaction processing and record-keeping, marking a significant shift in how the banking industry approaches security and efficiency.",
    category: "finance",
    date: "Sep 11, 2023",
    readTime: 7,
    source: "Bloomberg"
  }
];

const NewsItem = ({ item, onClick }: { item: typeof newsItems[0], onClick: () => void }) => {
  return (
    <div 
      onClick={onClick}
      className="w-full border-b border-border pb-2 last:border-0 last:pb-0 cursor-pointer hover:bg-secondary/10 p-2 rounded transition-colors"
    >
      <div className="flex items-start justify-between">
        <span className="text-sm font-medium hover:text-primary transition-colors flex-grow">{item.title}</span>
        <ArrowRight className="h-4 w-4 text-muted-foreground flex-shrink-0 ml-2" />
      </div>
    </div>
  );
};

const DailySummary = () => {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  
  const today = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
  
  const desktopHeight = "h-full";
  
  const handleNewsClick = (newsItem: typeof newsItems[0]) => {
    const slug = newsItem.title.toLowerCase().replace(/[^\w\s]/gi, '').replace(/\s+/g, '-');
    navigate(`/news/${newsItem.category}/${slug}`, { 
      state: { 
        article: {
          title: newsItem.title,
          source: newsItem.source,
          summary: newsItem.summary,
          date: newsItem.date,
          readTime: newsItem.readTime
        },
        category: newsItem.category,
        isDailySummary: true
      }
    });
  };

  return (
    <Card className={`w-full ${isMobile ? 'h-auto' : desktopHeight} bg-gradient-to-br from-primary/10 to-primary/5`}>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold">Daily Summary</CardTitle>
        <CardDescription>{today}</CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-2">
          <h3 className="font-medium">Top Stories Today</h3>
          <ScrollArea className={`${isMobile ? 'h-[200px]' : 'h-[350px]'} pr-3`}>
            <div className="space-y-1">
              {newsItems.map((item) => (
                <NewsItem 
                  key={item.id} 
                  item={item} 
                  onClick={() => handleNewsClick(item)} 
                />
              ))}
            </div>
          </ScrollArea>
        </div>
        <div className="pt-4">
          <p className="text-sm text-muted-foreground">
            Stay informed with our daily curated summaries of what matters most.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default DailySummary;
