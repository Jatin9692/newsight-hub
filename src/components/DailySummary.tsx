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
    title: "Trump to Apple: Build in the USA or Pay the Price – iPhone Costs Could Skyrocket",
    summary: `<div class="article-content">
      <p class="lead-paragraph">U.S. President Donald Trump has threatened to slap a 25% tariff (extra tax) on any iPhones sold in America that aren't made in the U.S. Following from earlier, he urged Apple's CEO, Tim Cook, to ensure that iPhone production happens on American soil—otherwise customers here will pay much more.</p>
      
      <p>Apple's stock fell sharply after the announcement. Companies like Apple juggle multiple factories worldwide; this could force costly shifts, putting global supply chain at risk.</p>
      
      <h3>Why Trump Did This</h3>
      <ul>
        <li><strong>Protect American Jobs:</strong> By forcing Apple to build phones in the U.S., more factory jobs would stay here.</li>
        <li><strong>Leverage in Trade Negotiations:</strong> It puts pressure on Apple (and indirectly on India) during broader trade discussions.</li>
        <li><strong>Bring Manufacturing Home:</strong> He wants major companies to "re-shore" production to the U.S. instead of overseas.</li>
      </ul>
      
      <h3>Consequences & Impact</h3>
      <div class="payout-table">
        <div class="table-row"><strong>Consumers in US:</strong> Could see higher prices on iPhones—25% more if made abroad.</div>
        <div class="table-row"><strong>Apple:</strong> Faces the choice to relocate production, absorb higher costs, or pay hefty tariffs.</div>
        <div class="table-row"><strong>Indian Factories:</strong> May lose business if Apple shifts orders back to the U.S., slowing India's tech growth.</div>
        <div class="table-row"><strong>U.S.-India Relations:</strong> Adds tension to ongoing trade talks; India might demand concessions elsewhere.</div>
        <div class="table-row"><strong>American Workers:</strong> Could gain jobs if factories return—but this takes time and huge investment.</div>
        <div class="table-row"><strong>Global Trade:</strong> Signals rising protectionism, risking retaliatory tariffs and more trade barriers.</div>
      </div>
      
      <p class="conclusion">If Trump follows through, iPhones made in India (or China) will cost more in the U.S. Thus, Apple must decide whether to shift production back to the U.S. or absorb/pass on the extra tax. This could also make trade talks between the U.S. and India more complex, as India defends its manufacturing sector.</p>
    </div>`,
    category: "finance",
    date: "may 24, 2025",
    readTime: 2,
    source: "Economic Times"
  },
  {
    id: 2,
    title: "₹1.5 Lakh Crore Bet on the Northeast: Reliance, Adani & Vedanta to Spark Industrial Revolution in India's East",
    summary: `<div class="article-content">
      <p class="lead-paragraph">At the summit to boost Northeast India's growth, three big Indian companies—Reliance Industries (RIL), the Adani Group, and Vedanta—each announced they'll pour in ₹30,000–50,000 crore more into the region over the coming years.</p>
      
      <p>These funds will go into things like power, roads, telecom (5G), green energy, healthcare, retail, digital infrastructure, and more. Together, these projects are expected to create around 100,000 new jobs in Assam and the six other Northeastern states.</p>
      
      <h3>Why They're Investing (Reason Behind It)</h3>
      <ul>
        <li><strong>Attractive Investment due to Incentives:</strong> India's "Act East" policy and special state incentives make the Northeast an attractive place to invest.</li>
        <li><strong>New Markets - Untapped Demand:</strong> The region's economy is growing fast—more people, rising incomes, and under-served sectors (like fiber-broadband and retail).</li>
        <li><strong>Diversification:</strong> Companies want to spread out where they do business (not just in big cities or traditional hubs), reducing risk.</li>
      </ul>
      
      <p class="conclusion">This trio of mega-investments is a clear bet on the Northeast—transforming it from a traditionally under-invested region into a hub of jobs, industry, and connectivity, with positive ripple effects for India's entire economy.</p>
    </div>`,
    category: "General",
    date: "may 24, 2025",
    readTime: 4,
    source: "Economic Times"
  },
  {
    id: 3,
    title: "Porter Joins the Unicorn Club with $200M Boost—India's Logistics Star Rises",
    summary: `<div class="article-content">
      <p class="lead-paragraph">Porter—India's own on-demand urban logistics platform—has just raised $200 million in its latest funding round led by Kedaara Capital and Wellington Management, valuing the company at $1.1–1.2 billion.</p>
      
      <p>This makes Porter India's third unicorn of 2025 (after Netradyne and Juspay) and its third of 2024 (alongside Krutrim AI and Perfios). Porter offers mini-truck and two-wheeler delivery services within cities, primarily serving small businesses (MSMEs).</p>
      
      <h3>Key Financial Metrics</h3>
      <div class="payout-table">
        <div class="table-row"><strong>Revenue:</strong> ₹4,000 crore (up from ₹2,766 crore in FY 24)</div>
        <div class="table-row"><strong>Loss:</strong> ₹96 crore (narrowed from ₹175 crore in FY 23)</div>
        <div class="table-row"><strong>Geography:</strong> Present in 22+ Indian cities; exploring peer-to-peer parcel delivery</div>
      </div>
      
      <p class="conclusion">Porter's $200 million raise and unicorn valuation underline the strong momentum in India's tech-enabled logistics space. Backed by top private equity firms and a clear path to profitability, Porter is well-positioned to deepen its urban footprint, support small businesses, and influence how India moves goods within its cities.</p>
    </div>`,
    category: "Finance",
    date: "may 24, 2025",
    readTime: 5,
    source: "Angel One"
  },
  {
    id: 4,
    title: "RBI's ₹2.69 Lakh Crore Gift to the Government: What It Means for You and the Economy",
    summary: `<div class="article-content">
      <p class="lead-paragraph">The Reserve Bank of India (RBI) has approved a record surplus transfer of ₹2.68–2.69 lakh crore to the Central Government for the fiscal year ending March 31, 2025. This payout is a 27.4% increase over the ₹2.1 lakh crore transferred in FY 2023-24.</p>
      
      <h3>Reasons Behind the Record Transfer</h3>
      <h4>Higher Earnings from Forex Operations</h4>
      <p>Strong foreign exchange gains, driven by increased dollar sales and favourable exchange-rate movements, boosted the RBI's income. These gains form a significant part of the central bank's surplus.</p>
      
      <div class="note">Note: Despite paying out a larger dividend, the RBI maintains a robust CRB (now 7.5%)—well within the 4.5–7.5% range set by the revised ECF—ensuring a buffer for contingencies.</div>
      
      <h3>Key Details of the Payout</h3>
      <div class="payout-table">
        <div class="table-row"><strong>2022-23:</strong> ₹87,416 crore (6.0% CRB)</div>
        <div class="table-row"><strong>2023-24:</strong> ₹2.10 lakh crore (6.5% CRB)</div>
        <div class="table-row"><strong>2024-25:</strong> ₹2.68–2.69 lakh crore (7.5% CRB)</div>
      </div>
      
      <p class="conclusion">This record surplus transfer of ₹2.68–2.69 lakh crore reflects the RBI's earnings from forex operations. It provides a significant fiscal boost to the government, bolsters market confidence, and ensures that the RBI retains sufficient buffer to navigate future economic uncertainties.</p>
    </div>`,
    category: "Finance",
    date: "may 24, 2025",
    readTime: 3,
    source: "Business Today"
  },
  {
    id: 5,
    title: "𝐆𝐨𝐨𝐠𝐥𝐞 𝐉𝐮𝐬𝐭 𝐊𝐢𝐥𝐥𝐞𝐝 𝐇𝐚𝐥𝐟 𝐭𝐡𝐞 𝐈𝐧𝐭𝐞𝐫𝐧𝐞𝐭 – 𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐭𝐨 𝐭𝐡𝐞 𝐀𝐆𝐈 𝐄𝐫𝐚",
    summary: `<div class="article-content">
      <p class="lead-paragraph">𝐆𝐨𝐨𝐠𝐥𝐞'𝐬 𝐈/𝐎 2025 didn't just make headlines. It shook industries. From Perplexity-like search results built right into Google Search to a real-time Google Meet that 𝐭𝐫𝐚𝐧𝐬𝐥𝐚𝐭𝐞𝐬 𝐲𝐨𝐮𝐫 𝐬𝐩𝐞𝐞𝐜𝐡 𝐥𝐢𝐯𝐞 — without delay — the tech world will never be the same.</p>
      
      <h3>Key Announcements</h3>
      <ul>
        <li><strong>𝐀𝐈 𝐌𝐨𝐝𝐞 𝐢𝐧 𝐆𝐨𝐨𝐠𝐥𝐞 𝐒𝐞𝐚𝐫𝐜𝐡:</strong> Say goodbye to blue links. Google introduced a new "AI Mode" for its Search platform, transforming traditional search queries into conversational interactions.</li>
        <li><strong>𝐑𝐞𝐚𝐥-𝐓𝐢𝐦𝐞 𝐌𝐞𝐞𝐭 𝐓𝐫𝐚𝐧𝐬𝐥𝐚𝐭𝐢𝐨𝐧:</strong> No more language barriers ever again. You speak in English they hear in perfect Spanish. No lag, no subtitles.</li>
        <li><strong>𝐓𝐫𝐲-𝐎𝐧 𝐀𝐈 𝐒𝐡𝐨𝐩𝐩𝐢𝐧𝐠:</strong> Upload your pic → And you can virtually try on any clothes</li>
        <li><strong>Agent Mode in Gemini:</strong> AI assistant to handle real-world tasks- Finds your flat, plans your trip, books your table.</li>
        <li><strong>𝐕𝐞𝐨 3 & 𝐅𝐥𝐨𝐰:</strong> One prompt = Hollywood-level videos with scenes & sound.</li>
        <li><strong>𝐉𝐮𝐥𝐞𝐬:</strong> An AI dev that updates your GitHub with a single English prompt</li>
        <li><strong>𝐏𝐫𝐨𝐣𝐞𝐜𝐭 𝐀𝐬𝐭𝐫𝐚:</strong> Camera-based AI that can search and act on your behalf.</li>
      </ul>
      
      <p class="conclusion">Google is not playing around. 𝐓𝐡𝐞 𝐀𝐆𝐈 𝐰𝐚𝐯𝐞 𝐢𝐬 𝐫𝐞𝐚𝐥 — 𝐚𝐧𝐝 𝐆𝐨𝐨𝐠𝐥𝐞 𝐦𝐢𝐠𝐡𝐭 𝐣𝐮𝐬𝐭 𝐛𝐞 𝐥𝐞𝐚𝐝𝐢𝐧𝐠 𝐭𝐡𝐞 𝐩𝐚𝐜𝐤.</p>
    </div>`,
    category: "Marketing",
    date: "may 24, 2025",
    readTime: 2,
    source: "Business Today"
  },
  {
    id: 6,
    title: "Financial sector embraces blockchain technology",
    summary: `<div class="article-content">
      <p class="lead-paragraph">Major financial institutions are increasingly adopting blockchain solutions for transaction processing and record-keeping, marking a significant shift in how the banking industry approaches security and efficiency.</p>
      
      <h3>Key Benefits</h3>
      <ul>
        <li><strong>Enhanced Security:</strong> Blockchain provides immutable transaction records</li>
        <li><strong>Improved Efficiency:</strong> Faster processing times for international transfers</li>
        <li><strong>Cost Reduction:</strong> Lower fees for cross-border transactions</li>
      </ul>
    </div>`,
    category: "finance",
    date: "may 24, 2025",
    readTime: 3,
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
