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
    title: "Breaking the Choke: South Africa's Epic ICC World Test Championship Triumph at Lord's",
    summary: `<div class="article-content">
      <p class="lead-paragraph"><strong>Q: How did South Africa finally end their 27-year ICC title drought in the World Test Championship Final?</strong></p>
      
      <p><strong>A:</strong> In a breathtaking <strong>Lord's</strong> climax, <strong>South Africa</strong> chased down <strong>282 with five wickets in hand</strong>, powered by <strong>Aiden Markram's 136</strong> and <strong>Temba Bavuma's</strong> unbeaten <strong>65</strong>, to beat <strong>Australia</strong> and claim their first <strong>ICC trophy since 1998</strong>.</p>
      
      <hr style="margin: 20px 0; border: 1px solid #ddd;">
      
      <h3><strong>Who were the match-winners?</strong></h3>
      <ul>
        <li><strong>Aiden Markram (SA):</strong> Match-defining <strong>136 off 207 balls</strong> in the fourth innings.</li>
        <li><strong>Temba Bavuma (c, SA):</strong> Calm <strong>65*</strong> under pressure to steer the chase.</li>
        <li><strong>Kagiso Rabada (SA):</strong> Seam strike-machine, finishing with <strong>nine wickets</strong> across both innings.</li>
      </ul>
      
      <hr style="margin: 20px 0; border: 1px solid #ddd;">
      
      <h3><strong>How did the final unfold?</strong></h3>
      <ol>
        <li><strong>Australia batted first:</strong> 212 all out (Cummins 5–28).</li>
        <li><strong>South Africa replied:</strong> 138 all out (Starc 3–41), conceding a 74-run deficit.</li>
        <li><strong>Australia's second innings:</strong> 207 (Rabada 6–66), setting a target of 282.</li>
        <li><strong>The epic chase:</strong>
          <ul>
            <li>Early jitters at <strong>30 for 4</strong> on Day 1 evening.</li>
            <li><strong>Markram</strong> and <strong>Bavuma</strong> stitched a <strong>167-run partnership</strong>.</li>
            <li><strong>Proteas</strong> sealed victory at <strong>282 for 5</strong> on Day 4.</li>
          </ul>
        </li>
      </ol>
      
      <hr style="margin: 20px 0; border: 1px solid #ddd;">
      
      <ul>
        <li>With this victory, <strong>Africa Erased the "chokers" tag</strong> that haunted <strong>SA</strong> since the <strong>1999 World Cup semi-final</strong>.</li>
        <li><strong>South Africans</strong> were united—<strong>Black, coloured, white</strong>—celebrating a turn-around that generations dreamt of.</li>
      </ul>
      
      <hr style="margin: 20px 0; border: 1px solid #ddd;">
      
      <h3><strong>Man of the match</strong></h3>
      <p><strong>Aiden Markram</strong></p>
      
      <h3><strong>Records & Milestones</strong></h3>
      <div class="payout-table">
        <div class="table-row"><strong>First ICC Title since 1998:</strong> Ended a 27-year wait</div>
        <div class="table-row"><strong>Highest successful chase in a Final:</strong> 282/5</div>
        <div class="table-row"><strong>Most wickets in Final (Match):</strong> Kagiso Rabada – 9</div>
        <div class="table-row"><strong>First South African captain to lift mace:</strong> Temba Bavuma</div>
      </div>
      
      <hr style="margin: 20px 0; border: 1px solid #ddd;">
      
      <p><strong>This was Test cricket's ultimate drama—served at its finest.</strong></p>
      
      <hr style="margin: 20px 0; border: 1px solid #ddd;">
      
      <p class="conclusion">"<strong>There were lot of doubters, but the way we played would have wiped all of that out. Special moment for u all, special moment back home.</strong>" said <strong>Bavuma</strong>.</p>
    </div>`,
    category: "General",
    date: "june 15, 2025",
    readTime: 4,
    source: "ESPN Cricinfo"
  },
  {
    id: 2,
    title: "Stampede Shocks Bengaluru: Devastating Chaos at RCB Felicitation",
    summary: `<div class="article-content">
      <p class="lead-paragraph">Yesterday evening, thousands of passionate <strong>Royal Challengers Bengaluru (RCB)</strong> fans poured into the heart of <strong>Bengaluru</strong> to celebrate their team's success in the IPL.</p>
      
      <p>By mid‐afternoon, the crowd reached to nearly <strong>100,000 people</strong>, many pressing against barricades, climbing walls. Desperate to see their favorite players, fans tried to force their way through gates and hop fences. In a matter of moments, the crowd surged like a wave, and people at the front were pushed and crushed against metal barriers.</p>
      
      <p>Within seconds, what had been a celebration turned into a nightmare. Reports say <strong>11 people lost their lives and 47 were injured</strong>, some fatally, as they were suffocated in the press of bodies.</p>
      
      <p><strong>Vidhana Soudha</strong> and <strong>M. Chinnaswamy Stadium</strong> sit in one of <strong>Bengaluru's</strong> busiest central districts. Narrow roads, limited open space, and key traffic arteries left no room for emergency vehicles to quickly reach the scene. Bystanders and police tried to give CPR or break up the crush with <strong>lathis</strong>, but there were simply too many people in too little space.</p>
      
      <p>Organizers underestimated how many fans would turn up, without proper crowd estimates, there were no extra barricades or police posted. In reality, there were not enough entry gates or controlled passages to direct everyone safely. Police manpower was stretched thin. At peak crush, very few officers were at each critical spot, and when fans––some unconnected to <strong>RCB</strong>––saw an opening, they surged in, overwhelming the scene.</p>
      
      <p>This tragedy is a grim reminder that even in a modern city like <strong>Bengaluru</strong>—public infrastructure can become dangerously inadequate when massive crowds gather spontaneously.</p>
      
      <h3><strong>Our Thoughts</strong></h3>
      <p>It is almost unbelievable that a joyous occasion—fans gathering to celebrate <strong>RCB's cricket heroes</strong>—ended with parents weeping for lost children, and a city mourning <strong>11 precious lives</strong>. Families who came to celebrate are now planning funerals. One grandmother lost her <strong>14‐year‐old granddaughter</strong> who had turned pale after being shoved to the ground.</p>
      
      <p>For <strong>Bengaluru</strong>, IPL organizers, the <strong>BCCI</strong>, and <strong>RCB</strong> itself, this is a wake-up call. Cricket is our passion, <strong>RCB</strong> is our pride—but lives are irreplaceable. May the memory of those we lost inspire better planning so no family ever faces this kind of agony again.</p>
      
      <p class="conclusion">Stay safe, <strong>Bengaluru</strong>. May those we lost find peace, and may their families find strength in our collective sorrow.</p>
    </div>`,
    category: "General",
    date: "may 25, 2025",
    readTime: 4,
    source: "Bengaluru Times"
  },
  {
    id: 3,
    title: "Hyundai and Kia Pull Out of Ola Electric as Losses Mount",
    summary: `<div class="article-content">
      <p class="lead-paragraph"><strong>Hyundai Motor Company</strong> sold its entire 2.47% stake in Ola Electric (about 10.88 crore shares) for a total of ₹551.96 crore, at an average price of ₹50.70 per share. At the same time, <strong>Kia Corporation</strong> sold 0.62% of Ola Electric (around 2.71 crore shares) for ₹137.35 crore, at an average price of ₹50.55 per share. After these transactions, Ola Electric's share price fell by 7.58%, closing at ₹49.61 on the National Stock Exchange (NSE).</p>
      
      <p>In its latest quarterly results (January–March 2025), Ola Electric posted a net loss of ₹870 crore, compared with a loss of ₹416 crore in the same period a year earlier. Its revenue for that quarter dropped to ₹611 crore from ₹1,598 crore in Q4 of FY 2023–24. For the full year FY 2024–25, Ola Electric recorded a net loss of ₹2,276 crore versus</p>
      
      <h3><strong>Reasons Behind this</strong></h3>
      <ol>
        <li><strong>Portfolio Re-allocation by Hyundai and Kia</strong>
          <ul>
            <li>Automakers often invest in emerging electric-vehicle (EV) startups but may later sell those stakes to free up cash for core business needs (for example, new model development or supply-chain investments).</li>
            <li>Given Ola Electric's recent losses and revenue decline, Hyundai and Kia likely decided it was a good time to exit and reallocate capital elsewhere.</li>
          </ul>
        </li>
        <li><strong>Ola Electric's Financial Performance</strong>
          <ul>
            <li>The widening losses (₹870 crore in Q4 and ₹2,276 crore for FY 2025) suggest the company needs fresh capital or better margins. Large investors sometimes reduce their holdings when a company is burning cash, signaling caution.</li>
          </ul>
        </li>
      </ol>
      
      <h3><strong>Other points</strong></h3>
      <h4><strong>Investor Confidence takes the hit</strong></h4>
      <p>When two major global automakers sell their entire stakes, it can weaken confidence among retail investors and drive the stock price down in the short term.</p>
      
      <h4><strong>Impact on Ola Electric's Funding Needs</strong></h4>
      <p>Reducing large strategic investors can make it harder for Ola Electric to raise fresh funds at favorable prices. New investors may demand steeper discounts to buy equity, or existing lenders may charge higher interest on debt</p>
      
      <h4><strong>Automakers Rethinking EV Partnerships</strong></h4>
      <p>Hyundai and Kia's exit may prompt other carmakers to reevaluate their stakes in EV startups. If a company like Ola Electric struggles with scale or margins, automakers could decide they receive better returns by developing in-house EV platforms rather than partnering or investing in independent firms.</p>
      
      <h4><strong>Sensitive Indian Market</strong></h4>
      <p>Ola Electric's stock drop of 7.58% shows how sensitive investors are to large shareholders exiting.</p>
      
      <h4><strong>Shifts in Institutional Allocation</strong></h4>
      <p>Some mutual funds or pension portfolios might reduce exposure to EV startups, preferring more established automakers or diversified tech companies.</p>
      
      <h4><strong>Valuation Re-benchmarking</strong></h4>
      <p>After this sale, Ola Electric's implied market cap dropped. Future fund-raising rounds may happen at a lower valuation, influencing how other EV startups price their own equity rounds.</p>
    </div>`,
    category: "Finance",
    date: "may 24, 2025",
    readTime: 4,
    source: "Economic Times"
  },
  {
    id: 4,
    title: "Flipkart Exits Blackbuck & ABFRL in ₹1,250 Crore Block Deals",
    summary: `<div class="article-content">
      <p class="lead-paragraph"><strong>Flipkart</strong>, the <strong>Walmart-backed</strong> e-commerce giant, sold two of its investments this week:</p>
      
      <ol>
        <li><strong>9% stake in Blackbuck</strong> (via its subsidiary <strong>Quikroutes International</strong>) for <strong>₹672 crore</strong></li>
        <li><strong>6% stake in Aditya Birla Fashion & Retail (ABFRL)</strong> for <strong>₹587.7 crore</strong></li>
      </ol>
      
      <ul>
        <li>In total, <strong>Flipkart</strong> cashed out <strong>₹1,259.7 crore</strong> through these "block deals" (large, institutional share trades) as the stock market gained after a slow start to the year.</li>
        <li>Both deals happened at slight discounts to recent trading prices, reflecting broader market conditions.</li>
        <li><strong>Blackbuck</strong> (logistics tech) was an early investment (around 2014–2015), but <strong>Flipkart</strong> may now believe its capital and management bandwidth is better spent on core businesses—like expanding its e-commerce, grocery, or fintech operations.</li>
        <li><strong>ABFRL</strong> (fashion retailer) is only tangentially related to <strong>Flipkart's</strong> core commerce business, so they likely chose to return that capital to shareholders or redeploy it elsewhere.</li>
      </ul>
      
      <h3><strong>Reasons Behind the Sales</strong></h3>
      <h4><strong>Market Recovery & Secondary Deal Frenzy</strong></h4>
      <ul>
        <li>At the beginning of 2025, Indian equities (publicly traded stocks) saw a sharp decline. In April–May, though, the market began to recover. When stock prices bounce back, promoters (original backers), private equity (PE) firms, and strategic investors—often use that window to trim or exit some positions.</li>
        <li><strong>Flipkart</strong> joined this wave, choosing now to monetize (sell) stakes that were acquired years ago.</li>
      </ul>
      
      <h4><strong>Declining Share Prices & Need to Sell at "Recovery" Levels</strong></h4>
      <ul>
        <li><strong>ABFRL's</strong> share price dropped by about <strong>11.5%</strong> right before <strong>Flipkart</strong> sold, dipping to <strong>₹76.10</strong> on the BSE (Bombay Stock Exchange). By executing the block deal at <strong>₹80.32</strong>—a small discount to the previous close—<strong>Flipkart</strong> locked in an acceptable price before any further fall.</li>
        <li>In <strong>Blackbuck's</strong> case, the company's early-growth stage had given way to slower growth and profitability concerns in recent quarters. <strong>Flipkart</strong> may have recognized that holding on could risk further value erosion.</li>
      </ul>
      
      <p>By exiting non-core assets (logistics tech and fashion retail), <strong>Flipkart</strong> can free up cash to invest in strengthening its own supply chain, technology platforms, marketing, and new segments like grocery or fintech.</p>
      
      <p>As markets recover, other promoters and PEs will likely trim their stakes in public or large private companies.</p>
      
      <h3><strong>Consequences & Implications</strong></h3>
      
      <h4><strong>For Flipkart</strong></h4>
      <ul>
        <li><strong>Stronger Balance Sheet, More Firesale Cash:</strong> With <strong>₹1,250 crore</strong> freshly unlocked, <strong>Flipkart</strong> can:
          <ul>
            <li>Pursue upgrades in its technology .Enhance its logistics network and may ramp up marketing and customer-acquisition spending</li>
          </ul>
        </li>
      </ul>
      
      <h4><strong>For the Industry & Ecosystem</strong></h4>
      
      <h4><strong>Logistics Tech Sector</strong></h4>
      <p><strong>Maturing Bubble:</strong> Early 2020s saw sky-high valuations for logistics tech (delivery aggregators, fleet management, SaaS solutions). This exit highlights that the hype has cooled</p>
      
      <h4><strong>Fashion Retail Sector</strong></h4>
      <p><strong>Cautious Investor Appetite:</strong> Large PE or strategic investors will be more selective, focusing on companies with:</p>
      <ul>
        <li>Omni-channel presence (both online + offline)</li>
        <li>Proven traction in value-conscious segments (fast fashion or affordable brands)</li>
      </ul>
      
      <p class="conclusion">In short, <strong>Flipkart's</strong> <strong>₹1,250-crore exit</strong> from <strong>Blackbuck</strong> and <strong>ABFRL</strong> is both a sign of India's maturing start-up and retail ecosystem—and a demonstration that even big players must constantly reassess where they put their money. This move sharpens <strong>Flipkart's</strong> focus on core e-commerce goals while sending a clear message: "Investors must show real growth, profits, or face portfolio trimming when markets improve."</p>
    </div>`,
    category: "Finance",
    date: "may 24, 2025",
    readTime: 5,
    source: "Angel One"
  },
  {
    id: 5,
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
      
      <h3>Consequences & Implications</h3>
      <h4>For the Central Government</h4>
      <ul>
        <li><strong>Fiscal Relief:</strong> The ₹2.69 lakh crore helps narrow the fiscal deficit (targeted at 4.4% of GDP for FY 2025-26) without having to take additional market borrowing.</li>
        <li><strong>Enhanced Spending Capacity:</strong> Frees up capital for infrastructure, healthcare, education, and social welfare schemes—without cutting other expenditures.</li>
        <li><strong>Lower Borrowing Costs in Future:</strong> Reduced pressure on government bonds.</li>
      </ul>
      
      <h4>For the RBI</h4>
      <p><strong>Maintained Buffers:</strong> By raising the CRB to 7.5%, the RBI retains a strong cushion against unforeseen shocks. Contingency Risk Buffer (CRB). It's like emergency savings in case something goes wrong in the future (like a financial crisis or sudden loss).</p>
      
      <h4>For Financial Markets</h4>
      <ul>
        <li><strong>Investor Confidence:</strong> A large surplus transfer, such as this, signals robust economic management, bolstering credit ratings and attracting foreign investment.</li>
        <li><strong>Bond Market Dynamics:</strong> Lower government borrowing requirements may exert less pressure on bond yields, benefiting both corporate and retail borrowers.</li>
      </ul>
      
      <h4>For Banks & Financial Institutions</h4>
      <p><strong>Liquidity Support:</strong> RBI's strong financial position ensures it can provide liquidity through tools like repo operations during stress periods.</p>
      
      <h4>For Taxpayers & Citizens</h4>
      <ul>
        <li><strong>Indirect Benefits:</strong> With the government better funded, there's less need for tax hikes or fee increases—helping keep the overall tax burden stable.</li>
        <li><strong>Better Public Services:</strong> Improved financing for public goods (roads, healthcare, education) enhances the quality of life.</li>
      </ul>
      
      <p class="conclusion">This record surplus transfer of ₹2.68–2.69 lakh crore reflects the RBI's earnings from forex operations. It provides a significant fiscal boost to the government, bolsters market confidence, and ensures that the RBI retains sufficient buffer to navigate future economic uncertainties.</p>
    </div>`,
    category: "Finance",
    date: "may 24, 2025",
    readTime: 3,
    source: "Business Today"
  },
  {
    id: 6,
    title: "𝐆𝐨𝐨𝐠𝐥𝐞 𝐉𝐮𝐬𝐭 𝐊𝐢𝐥𝐥𝐞𝐝 𝐇𝐚𝐥𝐟 𝐭𝐡𝐞 𝐈𝐧𝐭𝐞𝐫𝐧𝐞𝐭 – 𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐭𝐨 𝐭𝐡𝐞 𝐀𝐆𝐈 𝐄𝐫𝐚",
    summary: `<div class="article-content">
      <p class="lead-paragraph">𝐆𝐨𝐨𝐠𝐥𝐞's 𝐈/𝐎 2025 didn't just make headlines. It shook industries. From Perplexity-like search results built right into Google Search to a real-time Google Meet that 𝐭𝐫𝐚𝐧𝐬𝐥𝐚𝐭𝐞𝐬 𝐲𝐨𝐮𝐫 𝐬𝐩𝐞𝐞𝐜𝐡 𝐥𝐢𝐯𝐞 — without delay — the tech world will never be the same.</p>
      
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
      
      <h4>Also in the mix:</h4>
      <ul>
        <li><strong>𝐆𝐨𝐨𝐠𝐥𝐞 𝐃𝐢𝐟𝐟𝐮𝐬𝐢𝐨𝐧:</strong> Codes 15x faster than LLMs.</li>
        <li><strong>𝐒𝐭𝐢𝐭𝐜𝐡:</strong> From prompt to Figma UI.</li>
        <li><strong>𝐒𝐢𝐠𝐧𝐆𝐞𝐦𝐦𝐚:</strong> Real-time sign language translation.</li>
      </ul>
      
      <p class="conclusion">Google is not playing around. 𝐓𝐡𝐞 𝐀𝐆𝐈 𝐰𝐚𝐯𝐞 𝐢𝐬 𝐫𝐞𝐚𝐥 — 𝐚𝐧𝐝 𝐆𝐨𝐨𝐠𝐥𝐞 𝐦𝐢𝐠𝐡𝐭 𝐣𝐮𝐬𝐭 𝐛𝐞 𝐥𝐞𝐚𝐝𝐢𝐧𝐠 𝐭𝐡𝐞 𝐩𝐚𝐜𝐤.</p>
    </div>`,
    category: "Marketing",
    date: "may 24, 2025",
    readTime: 2,
    source: "Business Today"
  },
  {
    id: 7,
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
