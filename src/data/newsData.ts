import { NewsCategory } from "../components/CategoryTabs";

export interface NewsArticle {
  title: string;
  summary: string;
  source: string;
  date: string;
  readTime: number;
}

export const newsData: Record<NewsCategory, NewsArticle[]> = {
  finance: [
    {
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
      source: "Jatin",
      date: "June 18, 2025",
      readTime: 3
    },
    {
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
        
        <h4><strong>Declining Share Prices & Need to Sell at "Recovery" Levels</h4>
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
      source: "Angel One",
      date: "May 24, 2025",
      readTime: 5
    },
    {
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
      source: "Business Today",
      date: "May 24, 2025",
      readTime: 3
    },
    {
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
      source: "Bloomberg",
      date: "May 24, 2025",
      readTime: 3
    }
  ],
  marketing: [
    {
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
      source: "Business Today",
      date: "May 24, 2025",
      readTime: 2
    },
    {
      title: "Digital marketing trends reshaping brand strategies",
      summary: `<div class="article-content">
        <p class="lead-paragraph">Companies are rapidly adapting their marketing approaches as consumer behavior shifts toward digital-first interactions and personalized experiences.</p>
        
        <h3>Key Trends</h3>
        <ul>
          <li><strong>AI-Powered Personalization:</strong> Advanced algorithms create tailored content for individual users</li>
          <li><strong>Voice Search Optimization:</strong> Brands optimize for conversational queries</li>
          <li><strong>Interactive Content:</strong> Polls, quizzes, and AR experiences drive engagement</li>
        </ul>
      </div>`,
      source: "Marketing Week",
      date: "May 23, 2025",
      readTime: 4
    },
    {
      title: "Social commerce drives new revenue streams",
      summary: `<div class="article-content">
        <p class="lead-paragraph">Social media platforms are becoming primary sales channels as brands integrate shopping experiences directly into social content.</p>
        
        <h3>Platform Innovations</h3>
        <ul>
          <li><strong>Instagram Shopping:</strong> Seamless product discovery and purchase</li>
          <li><strong>TikTok Commerce:</strong> Video-driven product demonstrations</li>
          <li><strong>Live Shopping:</strong> Real-time interaction and sales</li>
        </ul>
      </div>`,
      source: "eCommerce Times",
      date: "May 22, 2025",
      readTime: 3
    }
  ],
  politics: [
    {
      title: "Election reforms spark nationwide debate",
      summary: `<div class="article-content">
        <p class="lead-paragraph">Proposed changes to electoral processes have ignited discussions about democracy, representation, and voting rights across the nation.</p>
        
        <h3>Key Proposals</h3>
        <ul>
          <li><strong>Digital Voting Systems:</strong> Enhanced security and accessibility</li>
          <li><strong>Campaign Finance Reform:</strong> New transparency requirements</li>
          <li><strong>Redistricting Guidelines:</strong> Updated criteria for fair representation</li>
        </ul>
      </div>`,
      source: "Political Gazette",
      date: "May 23, 2025",
      readTime: 5
    },
    {
      title: "International trade agreements under review",
      summary: `<div class="article-content">
        <p class="lead-paragraph">Government officials are reassessing existing trade partnerships to address changing global economic conditions and domestic priorities.</p>
        
        <h3>Focus Areas</h3>
        <ul>
          <li><strong>Supply Chain Security:</strong> Reducing dependencies on single sources</li>
          <li><strong>Labor Standards:</strong> Ensuring fair working conditions</li>
          <li><strong>Environmental Impact:</strong> Sustainable trade practices</li>
        </ul>
      </div>`,
      source: "Trade Policy Review",
      date: "May 22, 2025",
      readTime: 4
    },
    {
      title: "Healthcare policy reforms gain momentum",
      summary: `<div class="article-content">
        <p class="lead-paragraph">Bipartisan support emerges for comprehensive healthcare reforms aimed at improving accessibility and reducing costs for citizens.</p>
        
        <h3>Reform Elements</h3>
        <ul>
          <li><strong>Prescription Drug Pricing:</strong> New negotiation mechanisms</li>
          <li><strong>Telehealth Expansion:</strong> Permanent remote care options</li>
          <li><strong>Mental Health Services:</strong> Increased funding and access</li>
        </ul>
      </div>`,
      source: "Health Policy Today",
      date: "May 21, 2025",
      readTime: 6
    }
  ],
  ai: [
    {
      title: "Breakthrough in quantum-AI hybrid computing",
      summary: `<div class="article-content">
        <p class="lead-paragraph">Researchers achieve significant milestone in combining quantum computing power with artificial intelligence, opening new possibilities for complex problem-solving.</p>
        
        <h3>Applications</h3>
        <ul>
          <li><strong>Drug Discovery:</strong> Accelerated molecular simulation</li>
          <li><strong>Climate Modeling:</strong> Enhanced weather prediction accuracy</li>
          <li><strong>Financial Optimization:</strong> Real-time risk assessment</li>
        </ul>
      </div>`,
      source: "Tech Research Journal",
      date: "May 24, 2025",
      readTime: 4
    },
    {
      title: "AI ethics framework gains global adoption",
      summary: `<div class="article-content">
        <p class="lead-paragraph">International organizations collaborate on establishing comprehensive guidelines for responsible AI development and deployment across industries.</p>
        
        <h3>Key Principles</h3>
        <ul>
          <li><strong>Transparency:</strong> Clear explanation of AI decision-making</li>
          <li><strong>Fairness:</strong> Elimination of algorithmic bias</li>
          <li><strong>Privacy Protection:</strong> Safeguarding user data</li>
        </ul>
      </div>`,
      source: "AI Ethics Consortium",
      date: "May 23, 2025",
      readTime: 3
    },
    {
      title: "Machine learning revolutionizes medical diagnosis",
      summary: `<div class="article-content">
        <p class="lead-paragraph">Advanced AI systems demonstrate unprecedented accuracy in detecting diseases early, potentially saving millions of lives through faster, more precise medical diagnoses.</p>
        
        <h3>Medical Breakthroughs</h3>
        <ul>
          <li><strong>Cancer Detection:</strong> 95% accuracy in early-stage identification</li>
          <li><strong>Rare Diseases:</strong> Pattern recognition for difficult diagnoses</li>
          <li><strong>Predictive Medicine:</strong> Risk assessment for preventive care</li>
        </ul>
      </div>`,
      source: "Medical AI Review",
      date: "May 22, 2025",
      readTime: 5
    }
  ]
};
export const articles: NewsArticle[] = [
  // ... your updated list with slugs
];
