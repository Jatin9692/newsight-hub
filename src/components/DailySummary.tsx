
import React, { useState, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

// Mock news data - in a real app, this would come from an API
const newsItems = [
  {
    id: 1,
    title: "Global markets respond to new economic policies",
    summary: "Major stock indices worldwide showed varied responses to the introduction of new economic policies aimed at stabilizing inflation and promoting sustainable growth across developing markets."
  },
  {
    id: 2,
    title: "Tech companies unveil innovative marketing strategies",
    summary: "Leading technology firms are revolutionizing their approach to digital marketing by implementing AI-driven content creation and personalized user experiences, resulting in significantly improved engagement metrics."
  },
  {
    id: 3,
    title: "Political shifts impact international trade agreements",
    summary: "Recent changes in political leadership across several key nations have led to renegotiations of major trade agreements, with potential long-term implications for global supply chains and commodity prices."
  },
  {
    id: 4,
    title: "Championship finals break viewing records",
    summary: "The recent championship finals attracted unprecedented viewer numbers across streaming platforms and traditional broadcast channels, demonstrating the growing global interest in professional sports competitions."
  },
  {
    id: 5,
    title: "New renewable energy initiatives gain traction",
    summary: "Several countries have announced ambitious renewable energy projects, signaling a potential acceleration in the global transition away from fossil fuels and towards sustainable power generation."
  },
  {
    id: 6,
    title: "Financial sector embraces blockchain technology",
    summary: "Major financial institutions are increasingly adopting blockchain solutions for transaction processing and record-keeping, marking a significant shift in how the banking industry approaches security and efficiency."
  }
];

const NewsItem = ({ item, onClick }: { item: typeof newsItems[0], onClick: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-full border-b border-border pb-2 last:border-0 last:pb-0"
    >
      <div className="flex items-start justify-between py-2">
        <CollapsibleTrigger 
          className="flex items-start justify-between w-full text-left"
          onClick={(e) => {
            // Prevent the trigger from toggling if we're clicking to navigate
            if (e.target === e.currentTarget) {
              e.stopPropagation();
              onClick();
            }
          }}
        >
          <span className="text-sm font-medium">{item.title}</span>
          <span className="ml-2 flex-shrink-0 mt-0.5">
            {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </span>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="text-sm text-muted-foreground pl-2 pr-6 animate-accordion-down">
        <p>{item.summary}</p>
        <button 
          onClick={onClick} 
          className="mt-2 text-primary text-xs font-medium hover:underline"
        >
          Read full story
        </button>
      </CollapsibleContent>
    </Collapsible>
  );
};

const DailySummary = () => {
  const isMobile = useIsMobile();
  const today = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
  
  const desktopHeight = "h-full";
  
  const handleNewsClick = (newsId: number) => {
    console.log(`Navigating to news with ID: ${newsId}`);
    // In a real app, you would navigate to the full article page
    // Example: navigate(`/news/${newsId}`);
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
                  onClick={() => handleNewsClick(item.id)} 
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
