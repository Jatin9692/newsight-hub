
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, ChevronRight } from 'lucide-react';

const DailySummary = () => {
  const navigate = useNavigate();
  const [expandedStories, setExpandedStories] = useState<Record<string, boolean>>({});

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

  const toggleStory = (storyId: string) => {
    setExpandedStories(prev => ({
      ...prev,
      [storyId]: !prev[storyId]
    }));
  };

  const summaryStories = [
    {
      id: 'trump-ceasefire',
      title: 'Trump announces potential ceasefire in Iran-Israel war',
      isExpanded: false,
      article: {
        title: "Trump announces potential ceasefire in Iran-Israel war",
        source: "Truth Social",
        time: "1 hour ago",
        slug: "trump-ceasefire-war-iran-israel"
      }
    },
    {
      id: 'global-markets',
      title: 'Global markets respond to new economic policies',
      isExpanded: false
    },
    {
      id: 'tech-companies',
      title: 'Tech companies unveil innovative marketing strategies',
      isExpanded: false
    },
    {
      id: 'political-shifts',
      title: 'Political shifts impact international trade agreements',
      isExpanded: false
    },
    {
      id: 'championship-finals',
      title: 'Championship finals break viewing records',
      isExpanded: false
    },
    {
      id: 'renewable-energy',
      title: 'New renewable energy initiatives gain traction',
      isExpanded: false
    }
  ];

  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <div className="mb-4">
        <h2 className="text-lg font-bold text-gray-800 mb-1">Daily Summary</h2>
        <p className="text-sm text-gray-600">Tuesday, April 15, 2025</p>
      </div>

      <div className="mb-4">
        <h3 className="text-md font-semibold text-gray-800 mb-2">Top Stories Today</h3>
      </div>

      <div className="space-y-2">
        {summaryStories.map((story) => (
          <div key={story.id} className="border-b border-gray-200 pb-2">
            <div 
              className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors"
              onClick={() => story.article ? handleNewsClick(story.article) : toggleStory(story.id)}
            >
              <span className="text-sm font-medium text-gray-800 flex-1">
                {story.title}
              </span>
              {!story.article && (
                <div className="ml-2">
                  {expandedStories[story.id] ? (
                    <ChevronDown size={16} className="text-gray-500" />
                  ) : (
                    <ChevronRight size={16} className="text-gray-500" />
                  )}
                </div>
              )}
            </div>
            
            {expandedStories[story.id] && !story.article && (
              <div className="mt-2 ml-4 text-xs text-gray-600">
                <p>More details about this story will be available soon...</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailySummary;
