
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
    summary: "U.S. President Donald Trump has threatened to slap a 25% tariff (extra tax) on any iPhones sold in America that aren't made in the U.S. Following from earlier, he urged Apple's CEO, Tim Cook, to ensure that iPhone production happens on American soil—otherwise customers here will pay much more. Apple's stock fell sharply after the announcement. Companies like Apple juggle multiple factories worldwide; this could force costly shifts, putting global supply chain at risk. Why Trump Did This • Protect American Jobs: By forcing Apple to build phones in the U.S., more factory jobs would stay here. • Leverage in Trade Negotiations: It puts pressure on Apple (and indirectly on India) during broader trade discussions. • Bring Manufacturing Home: He wants major companies to 're-shore' production to the U.S. instead of overseas. Consequences & Impact Who What Happens Consumers in US Could see higher prices on iPhones—25% more if made abroad. Apple Faces the choice to relocate production, absorb higher costs, or pay hefty tariffs. Indian Factories May lose business if Apple shifts orders back to the U.S., slowing India's tech growth. U.S.-India Relations Adds tension to ongoing trade talks; India might demand concessions elsewhere. American Workers Could gain jobs if factories return—but this takes time and huge investment. Global Trade Signals rising protectionism, risking retaliatory tariffs and more trade barriers. If Trump follows through, iPhones made in India (or China) will cost more in the U.S. Thus, Apple must decide whether to shift production back to the U.S. or absorb/pass on the extra tax. This could also make trade talks between the U.S. and India more complex, as India defends its manufacturing sector.",
    category: "finance",
    date: "may 24, 2025",
    readTime: 2,
    source: "Economic Times"
  },
  {
    id: 2,
    title: "₹1.5 Lakh Crore Bet on the Northeast: Reliance, Adani & Vedanta to Spark Industrial Revolution in India's East",
    summary: "At the summit to boost Northeast India's growth, three big Indian companies—Reliance Industries (RIL), the Adani Group, and Vedanta—each announced they'll pour in ₹30,000–50,000 crore more into the region over the coming years. These funds will go into things like power, roads, telecom (5G), green energy, healthcare, retail, digital infrastructure, and more. Together, these projects are expected to create around 100,000 new jobs in Assam and the six other Northeastern states. Why They're Investing (Reason Behind It) 1. Attractive Investment due to Incentives India's 'Act East' policy and special state incentives make the Northeast an attractive place to invest. 2. New Markets - Untapped Demand a. The region's economy is growing fast—more people, rising incomes, and under-served sectors (like fiber-broadband and retail). 3. Diversification a. Companies want to spread out where they do business (not just in big cities or traditional hubs), reducing risk. Big Names Signal Confidence for North east, when RIL, Adani, and Vedanta commit hundreds of crores, it shows corporate India believes in the Northeast's potential. From 5G and AI in schools (Reliance) to green power grids (Adani) and data centers (Vedanta), investments cover everything—boosting multiple industries at once. Consequences & Impact Who It Helps How It Helps Local Communities New factories, better hospitals and schools, faster internet, cleaner energy, more jobs. State Governments Higher tax revenues, improved transport/energy networks, easier to attract further investment. Businesses Faster supply chains, access to new customers, and cheaper logistics in the region. National Economy Balances growth away from crowded metros, strengthens ties with Southeast Asia. Broader Effects • Job Creation: ~100,000 direct and indirect jobs—from construction to tech support. • Infrastructure Leap: Upgraded roads, power lines, and digital networks mean everyday life improves (less blackouts, faster downloads). • For everyone: Small farmers and local entrepreneurs can sell produce to big retail chains or offer services to corporate projects. • Geopolitical Edge: A well-connected Northeast strengthens links with Myanmar, Bangladesh, and beyond—boosting trade and national security. Bottom Line: This trio of mega-investments is a clear bet on the Northeast—transforming it from a traditionally under-invested region into a hub of jobs, industry, and connectivity, with positive ripple effects for India's entire economy.",
    category: "General",
    date: "may 24, 2025",
    readTime: 4,
    source: "Economic Times"
  },
  {
    id: 3,
    title: "Porter Joins the Unicorn Club with $200M Boost—India's Logistics Star Rises",
    summary: "Porter—India's own-( on-demand urban logistics platform) —has just raised $200 million in its latest funding round led by Kedaara Capital and Wellington Management, valuing the company at $1.1–1.2 billion. This makes Porter India's third unicorn of 2025 (after Netradyne and Juspay) and its third of 2024 (alongside Krutrim AI and Perfios) . Porter offers mini-truck and two-wheeler delivery services within cities, primarily serving small businesses (MSMEs). As of FY 25, it reported: • Revenue: ₹4,000 crore (up from ₹2,766 crore in FY 24) • Loss: ₹96 crore (narrowed from ₹175 crore in FY 23) • Geography: Present in 22+ Indian cities; exploring peer-to-peer parcel delivery Insights 1. Strong Secondary Market Demand: – Early investors cashed out, signalling confidence from new and existing backers. 2. Rapid Growth : – Revenues jumped ~45% year-on-year while cutting losses by ~45%, showing improving unit economics. 3. Unicorn Wave in Logistics: – Porter joins a select group of logistics unicorns, reflecting rising investor interest in tech-enabled supply-chain solutions Reasons Behind the Raise • Scale & Reach: Fuel expansion into more cities, new delivery categories (P2P parcels), and deeper tech investments (AI, route optimization). • Market Positioning: Porter stayed ahead of competitors like Dunzo, Rapido, and Uber by -strengthening network density and reducing per-order costs. Macro & Micro Market Context Context Level What It Shows Macro – Investors still back Indian startups despite global slowdown; logistics remains a key growth sector. – India is producing multiple unicorns yearly, underlining the country's maturing startup ecosystem. Micro – Porter's success spotlights rising demand from MSMEs for reliable, tech-driven local delivery. – Secondary transactions imply a liquid employee-share market, rewarding early team members. Consequences & Impact Stakeholder Impact Porter – Gains capital for expansion, product innovation, and margin improvement. MSMEs & Consumers – Better, faster intra-city deliveries and potentially more competitive pricing as Porter scales. Competitors – Intensifies the battle for urban logistics; may spur M&A or pricing competition. Labor/Gig Workers – Potential for more gig-economy earnings as Porter expands its network and service offerings. Bottom Line: Porter's $200 million raise and unicorn valuation underline the strong momentum in India's tech-enabled logistics space. Backed by top private equity firms and a clear path to profitability, Porter is well-positioned to deepen its urban footprint, support small businesses, and influence how India moves goods within its cities.",
    category: "Finance",
    date: "may 24, 2025",
    readTime: 5,
    source: "Angel One"
  },
  {
    id: 4,
    title: "RBI's ₹2.69 Lakh Crore Gift to the Government: What It Means for You and the Economy",
    summary: "The Reserve Bank of India (RBI) has approved a record surplus transfer of ₹2.68–2.69 lakh crore to the Central Government for the fiscal year ending March 31, 2025. This payout is a 27.4% increase over the ₹2.1 lakh crore transferred in FY 2023-24 Reasons Behind the Record Transfer - Higher Earnings from Forex Operations o Strong foreign exchange gains, driven by increased dollar sales and favourable exchange-rate movements, boosted the RBI's income. These gains form a significant part of the central bank's surplus. Note: Despite paying out a larger dividend, the RBI maintains a robust CRB (now 7.5%)—well within the 4.5–7.5% range set by the revised ECF—ensuring a buffer for contingencies. Key Details of the Payout Fiscal Year Dividend Transferred CRB Maintained 2022-23 ₹87,416 crore 6.0% 2023-24 ₹2.10 lakh crore 6.5% 2024-25 ₹2.68–2.69 lakh crore 7.5% Consequences & Implications For the Central Government • Fiscal Relief: The ₹2.69 lakh crore helps narrow the fiscal deficit (targeted at 4.4% of GDP for FY 2025-26) without having to take additional market borrowing • Enhanced Spending Capacity: Frees up capital for infrastructure, healthcare, education, and social welfare schemes—without cutting other expenditures. • Lower Borrowing Costs in Future: For the RBI - Maintained Buffers: By raising the CRB to 7.5%, the RBI retains a strong cushion against unforeseen shocks. Contingency Risk Buffer (CRB). It's like emergency savings in case something goes wrong in the future (like a financial crisis or sudden loss). For Financial Markets • Investor Confidence: A large surplus transfer, such as this, signals robust economic management, bolstering credit ratings and attracting foreign investment. • Bond Market Dynamics: Lower government borrowing requirements may exert less pressure on bond yields, benefiting both corporate and retail borrowers. For Banks & Financial Institutions • Liquidity Support: RBI's strong financial position ensures it can provide liquidity through tools like repo operations during stress periods. For Taxpayers & Citizens • Indirect Benefits: With the government better funded, there's less need for tax hikes or fee increases—helping keep the overall tax burden stable. • Better Public Services: Improved financing for public goods (roads, healthcare, education) enhances the quality of life. This record surplus transfer of ₹2.68–2.69 lakh crore reflects the RBI's earnings from forex operations. It provides a significant fiscal boost to the government, bolsters market confidence, and ensures that the RBI retains sufficient buffer to navigate future economic uncertainties.",
    category: "Finance",
    date: "may 24, 2025",
    readTime: 3,
    source: "Business Today"
  },
  {
    id: 5,
    title: "𝐆𝐨𝐨𝐠𝐥𝐞 𝐉𝐮𝐬𝐭 𝐊𝐢𝐥𝐥𝐞𝐝 𝐇𝐚𝐥𝐟 𝐭𝐡𝐞 𝐈𝐧𝐭𝐞𝐫𝐧𝐞𝐭 – 𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐭𝐨 𝐭𝐡𝐞 𝐀𝐆𝐈 𝐄𝐫𝐚",
    summary: "𝐆𝐨𝐨𝐠𝐥𝐞'𝐬 𝐈/𝐎 2025 didn't just make headlines. It shook industries. From Perplexity-like search results built right into Google Search to a real-time Google Meet that 𝐭𝐫𝐚𝐧𝐬𝐥𝐚𝐭𝐞𝐬 𝐲𝐨𝐮𝐫 𝐬𝐩𝐞𝐞𝐜𝐡 𝐥𝐢𝐯𝐞 — without delay — the tech world will never be the same. Here's the quick highlight reel: • 𝐀𝐈 𝐌𝐨𝐝𝐞 𝐢𝐧 𝐆𝐨𝐨𝐠𝐥𝐞 𝐒𝐞𝐚𝐫𝐜𝐡– Say goodbye to blue links. Google introduced a new 'AI Mode' for its Search platform, transforming traditional search queries into conversational interactions. (Bye-Bye Perplexity) • 𝐑𝐞𝐚𝐥-𝐓𝐢𝐦𝐞 𝐌𝐞𝐞𝐭 𝐓𝐫𝐚𝐧𝐬𝐥𝐚𝐭𝐢𝐨𝐧 – No more language barriers ever again. You speak in English they hear in perfect Spanish. No lag , no subtitles. • 𝐓𝐫𝐲-𝐎𝐧 𝐀𝐈 𝐒𝐡𝐨𝐩𝐩𝐢𝐧𝐠 – Upload your pic → And you can virtually try on any clothes • Agent Mode in Gemini – AI assistant to handle real-world tasks- Finds your flat, plans your trip, books your table. • 𝐕𝐞𝐨 3 & 𝐅𝐥𝐨𝐰 – One prompt = Hollywood-level videos with scenes & sound. • 𝐉𝐮𝐥𝐞𝐬 – An AI dev that updates your GitHub with a single English prompt • 𝐏𝐫𝐨𝐣𝐞𝐜𝐭 𝐀𝐬𝐭𝐫𝐚– Camera-based AI that can search and act on your behalf. Also in the mix: 𝐆𝐨𝐨𝐠𝐥𝐞 𝐃𝐢𝐟𝐟𝐮𝐬𝐢𝐨𝐧: Codes 15x faster than LLMs. 𝐒𝐭𝐢𝐭𝐜𝐡: From prompt to Figma UI. 𝐒𝐢𝐠𝐧𝐆𝐞𝐦𝐦𝐚: Real-time sign language translation. Google is not playing around. 𝐓𝐡𝐞 𝐀𝐆𝐈 𝐰𝐚𝐯𝐞 𝐢𝐬 𝐫𝐞𝐚𝐥 — 𝐚𝐧𝐝 𝐆𝐨𝐨𝐠𝐥𝐞 𝐦𝐢𝐠𝐡𝐭 𝐣𝐮𝐬𝐭 𝐛𝐞 𝐥𝐞𝐚𝐝𝐢𝐧𝐠 𝐭𝐡𝐞 𝐩𝐚𝐜𝐤.",
    category: "Marketing",
    date: "may 24, 2025",
    readTime: 2,
    source: "Business Today"
  },
  {
    id: 6,
    title: "Financial sector embraces blockchain technology",
    summary: "Major financial institutions are increasingly adopting blockchain solutions for transaction processing and record-keeping, marking a significant shift in how the banking industry approaches security and efficiency.",
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
