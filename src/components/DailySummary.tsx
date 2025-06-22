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
    title: "U.S. Joins Israel in Striking Iran's Nuclear Sites – iran-israel war escalates under Trump's order",
    summary: `<div class="article-content">
      <p class="lead-paragraph">In a major escalation of Middle East tensions, the United States has joined Israel in bombing three of Iran's key nuclear sites—Fordow, Natanz, and Isfahan—after weeks of mounting hostilities.</p>
      
      <h2>What's Going On in the iran-israel war?</h2>
      <p>On June 22, 2025, U.S. B-2 stealth bombers and submarine-launched missiles joined Israeli jets in hitting Iran's nuclear facilities. Israel cited new intelligence on Iran's bomb program; President Trump personally authorized U.S. involvement.</p>
      
      <h2>How Trump Ordered U.S. Strikes in the iran-israel war</h2>
      <p>Without seeking Congress, Trump invoked executive war powers. He called it a "spectacular success" and said it "obliterated" Iran's nuclear threat.</p>
      
      <h2>What Was Destroyed in Iran's Nuclear Sites?</h2>
      <p>Precision strikes heavily damaged uranium enrichment halls at Fordow, Natanz, and Isfahan. Nearby missile and drone factories were also hit to degrade Iran's wider military capacity.</p>
      
      <h2>Who Was Killed in the War—Key IRGC Figures & Civilians</h2>
      <p>Two senior IRGC generals—Saeed Izadi and Behnam Shahriyari—were killed. Iran reports 430–657 total deaths, including 263+ civilians. Retaliatory Iranian attacks have killed 24+ civilians in Israel.</p>
      
      <h2>Why Trump and Israel Say They Hit Iran's Nuclear Program</h2>
      <p>They argue these strikes prevent an Iranian bomb and restore deterrence. Both governments say diplomacy had failed to halt Tehran's nuclear push.</p>
      
      <h2>Global Reactions to the iran-israel war under Trump</h2>
      <p>China and Russia condemned the strikes. European nations urged restraint and offered mediation. The United Nations warned about rising humanitarian and nuclear safety risks.</p>
      
      <h2>What's Next in the iran-israel war?</h2>
      <p>Iran has already launched drone and missile barrages on Israeli cities. Houthi rebels in Yemen threaten to strike U.S. naval vessels. Experts fear a wider regional conflict.</p>
      
      <h2>In Simple Terms: The iran-israel war & Trump's role</h2>
      <p>The U.S. and Israel bombed Iran's nuclear sites to stop its bomb program. Iran retaliated. The conflict now risks spreading beyond its current hotspots.</p>
      
      <p class="conclusion">With U.S. forces now directly involved, the iran-israel war has entered a new phase. The world watches nervously as both sides prepare for possible further escalation.</p>
    </div>`,
    category: "Politics",
    date: "June 22, 2025",
    readTime: 6,
    source: "BizNews Daily"
  },
  {
    id: 2,
    title: "FASTag Annual Pass 2025: Travel India's Highways for a Year with Just ₹3,000",
    summary: `<div class="article-content">
      <p class="lead-paragraph">India's road commuters are in for a major relief with the introduction of the FASTag Annual Pass—a game-changing initiative launched by Union Minister Nitin Gadkari. This pass allows owners of private vehicles to travel across national highways with ease and predictability by paying a one-time fee of ₹3,000 for up to 200 toll plaza crossings over a one-year period.</p>
      
      <h3><strong>What Is the FASTag Annual Pass?</strong></h3>
      <p>The FASTag Annual Pass is a prepaid subscription designed for non-commercial private vehicles such as cars, jeeps, and vans. It provides up to 200 toll transactions on national highways and expressways, valid for 12 months from the date of activation.</p>
      <p>Instead of paying individually at each toll booth, vehicle owners can enjoy a smoother and cost-effective travel experience with this single annual recharge.</p>
      
      <h3><strong>FASTag Annual Pass Launch Date</strong></h3>
      <p>The scheme will go live on August 15, 2025. From this date, eligible vehicle owners can activate the pass through their existing FASTag account and start using it across toll plazas on India's national highway network.</p>
      
      <h3><strong>Key Features of the ₹3000 FASTag Annual Pass</strong></h3>
      <ul>
        <li><strong>One-time payment:</strong> ₹3,000 per vehicle</li>
        <li><strong>Validity:</strong> One year or 200 toll plaza crossings (whichever comes first)</li>
        <li><strong>Vehicle type:</strong> Only for non-commercial private vehicles</li>
        <li><strong>Activation platform:</strong> Rajmarg Yatra mobile app, NHAI, or MoRTH websites</li>
        <li><strong>No hardware required:</strong> Existing FASTag remains valid</li>
        <li><strong>Nationwide coverage:</strong> Applicable across all NHAI toll plazas</li>
      </ul>
      
      <h3><strong>Who Can Apply for the FASTag Annual Pass?</strong></h3>
      <p>To be eligible, users must own a non-commercial private vehicle and have a valid, active FASTag that is not blacklisted. Commercial vehicles, such as trucks or taxis, are not eligible for this scheme.</p>
      
      <h3><strong>How to Activate the FASTag Annual Pass</strong></h3>
      <p>Here is a step-by-step guide to activating the ₹3000 FASTag pass:</p>
      <ol>
        <li>Download the Rajmarg Yatra App or visit the NHAI/MoRTH official portals</li>
        <li>Log in with your existing FASTag credentials</li>
        <li>Choose the "Annual Pass" option</li>
        <li>Pay ₹3,000 and activate the pass</li>
        <li>Begin toll-free travel on national highways from August 15 onward</li>
      </ol>
      
      <h3><strong>Major Benefits of the FASTag Annual Pass</strong></h3>
      <ul>
        <li><strong>Cost savings:</strong> Frequent highway travelers usually spend ₹8,000–₹12,000 per year on tolls. This pass cuts the cost to ₹3,000.</li>
        <li><strong>Convenience:</strong> No need to stop and pay tolls at every booth</li>
        <li><strong>Predictable spending:</strong> One-time recharge for the entire year</li>
        <li><strong>Faster movement:</strong> Reduces congestion and wait time at toll plazas</li>
      </ul>
      
      <h3><strong>What Happens After 200 Trips or 1 Year?</strong></h3>
      <p>Once the 200-trip limit is exhausted or the 12-month period ends (whichever is earlier), the FASTag reverts to the regular pay-per-use toll deduction model. To continue enjoying benefits, users can purchase a new pass.</p>
      
      <h3><strong>Is It Valid on All Roads?</strong></h3>
      <p>The pass is only valid on toll plazas under the National Highways Authority of India (NHAI). It will not apply to tolls collected by state governments, municipalities, or private operators managing local roads.</p>
      
      <h3><strong>Optional, Not Mandatory</strong></h3>
      <p>The annual pass is completely optional. If you're an occasional highway user, you can continue paying tolls via your existing FASTag balance as usual.</p>
    </div>`,
    category: "Finance",
    date: "june 19, 2025",
    readTime: 4,
    source: "Biz News Daily"
  },
  {
    id: 3,
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
    id: 4,
    title: "What Is Aladdin by Jio BlackRock?",
    summary: `<div class="article-content">
      <p class="lead-paragraph">Aladdin (Asset, Liability, and Debt and Derivative Investment Network) is BlackRock's flagship, cloud based platform for institutional investors—and it's now available in India through the Jio BlackRock joint venture. By bringing together portfolio management, risk analytics, trade execution, compliance monitoring, and reporting into one unified dashboard, Aladdin empowers investors to see the full picture, plan for every scenario, and act with confidence.</p>
      
      <hr style="margin: 20px 0; border: 1px solid #ddd;">
      
      <p>Think of Aladdin as a super powerful "control center" for investments. Here's what it is and what it does, in everyday terms:</p>
      
      <h3><strong>1. All in One Dashboard</strong></h3>
      <p>Imagine you have dozens of bank accounts, stocks, bonds, loans, even derivatives—all in different places. Aladdin brings every piece of your portfolio into one screen so you can see the full picture at a glance.</p>
      
      <h3><strong>2. Risk Radar</strong></h3>
      <p>It constantly scans your investments for potential dangers—like a sudden market drop, currency swings, or interest rate spikes—and shows you which holdings are most vulnerable.</p>
      
      <h3><strong>3. What If Simulator</strong></h3>
      <p>Want to know what would happen if oil prices jumped 20% or if a major economy slipped into recession? Aladdin runs those scenarios in seconds, so you can plan ahead.</p>
      
      <h3><strong>4. Trade & Compliance Hub</strong></h3>
      <p>When you decide to buy or sell, Aladdin helps you execute trades efficiently and checks in real time that you're following all the rules (both internal guidelines and regulatory requirements).</p>
      
      <h3><strong>5. Performance Tracker</strong></h3>
      <p>It measures how each part of your portfolio is doing—what's making you money, what's dragging you down—and breaks it down by region, asset type, or team.</p>
      
      <h3><strong>6. Collaboration & Reporting</strong></h3>
      <p>Teams around the world can work together on the same platform, and it automatically generates clear reports for clients, managers, or regulators.</p>
    </div>`,
    category: "Finance",
    date: "june 18, 2025",
    readTime: 3,
    source: "Jatin"
  },
  {
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
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
    <Card className={`w-full ${isMobile ? 'h-auto'  : desktopHeight} bg-gradient-to-br from-primary/10 to-primary/5`}>
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
