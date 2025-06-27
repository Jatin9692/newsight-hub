import { NewsCategory } from "../components/CategoryTabs";

// Improved slugify function for better URL compatibility
const slugify = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters except spaces and hyphens
    .replace(/\s+/g, '-')     // Replace spaces with hyphens
    .replace(/-+/g, '-')      // Replace multiple hyphens with single hyphen
    .replace(/^-+|-+$/g, '')  // Remove leading/trailing hyphens
    .trim();
};

export interface NewsArticle {
  title: string;
  slug: string;
  summary: string;
  source: string;
  date: string;
  readTime: number;
}

export const newsData: Record<NewsCategory, NewsArticle[]> = {
  finance: [
    {
      title: "Credit Card Spending Surges 15% - Travel Boom Drives ₹1.9L Crore in May",
      source: "Economic Times",
      time: "2 hours ago",
      readTime: 4,
      summary: "Holiday season and summer travel significantly boosted credit card transactions across India, with over 760,000 new cards issued in May 2025 alone.",
      slug: "credit-card-spending-surge-travel-boom-may-2025"
    },
    {
      title: "Hindalco Acquires US Firm AluChem for $125M to Double Alumina Capacity",
      source: "Business Standard",
      time: "4 hours ago",
      readTime: 3,
      summary: "Strategic acquisition will help Hindalco strengthen its specialty alumina portfolio and expand high-tech materials business significantly.",
      slug: "hindalco-acquires-aluchem-125-million-alumina-capacity"
    },
    {
      title: "Trump Confirms US–China Trade Truce; Big India Deal Coming",
      source: "BizNewsDaily",
      time: "1 hour ago",
      readTime: 6,
      summary: "Trump seals US-China truce, hints at historic US-India trade deal with big textile & pharma boosts.",
      slug: "us-china-trade-deal-trump-india-news"
    },
    {
      title: "U.S. Joins Israel in Striking Iran's Nuclear Sites – iran-israel war escalates under Trump's order",
      slug: "us-joins-israel-striking-irans-nuclear-sites-iran-israel-war-trump",
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
      source: "BizNews Daily",
      date: "June 22, 2025",
      readTime: 6
    },
    {
      title: "What Is Aladdin by Jio BlackRock?",
      slug: "what-is-aladdin-by-jio-blackrock",
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
      slug: "flipkart-exits-blackbuck-abfrl-in-1250-crore-block-deals",
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
      source: "Angel One",
      date: "May 24, 2025",
      readTime: 5
    },
    {
      title: "FASTag Annual Pass 2025: Travel India's Highways for a Year with Just ₹3,000",
      slug: "fastag-annual-pass-2025-travel-indias-highways-for-a-year-with-just-3000",
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
      source: "Biz News Daily",
      date: "June 19, 2025",
      readTime: 4
    },
    {
      title: "Financial sector embraces blockchain technology",
      slug: "financial-sector-embraces-blockchain-technology",
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
      title: "Google Just Killed Half the Internet – Welcome to the AGI Era",
      slug: "google-just-killed-half-the-internet-welcome-to-the-agi-era",
      summary: `<div class="article-content">
        <p class="lead-paragraph">Google's I/O 2025 didn't just make headlines. It shook industries. From Perplexity-like search results built right into Google Search to a real-time Google Meet that translates your speech live — without delay — the tech world will never be the same.</p>
        
        <h3>Key Announcements</h3>
        <ul>
          <li><strong>AI Mode in Google Search:</strong> Say goodbye to blue links. Google introduced a new "AI Mode" for its Search platform, transforming traditional search queries into conversational interactions.</li>
          <li><strong>Real-Time Meet Translation:</strong> No more language barriers ever again. You speak in English they hear in perfect Spanish. No lag, no subtitles.</li>
          <li><strong>Try-On AI Shopping:</strong> Upload your pic → And you can virtually try on any clothes</li>
          <li><strong>Agent Mode in Gemini:</strong> AI assistant to handle real-world tasks- Finds your flat, plans your trip, books your table.</li>
          <li><strong>Veo 3 & Flow:</strong> One prompt = Hollywood-level videos with scenes & sound.</li>
          <li><strong>Jules:</strong> An AI dev that updates your GitHub with a single English prompt</li>
          <li><strong>Project Astra:</strong> Camera-based AI that can search and act on your behalf.</li>
        </ul>
        
        <h4>Also in the mix:</h4>
        <ul>
          <li><strong>Google Diffusion:</strong> Codes 15x faster than LLMs.</li>
          <li><strong>Stitch:</strong> From prompt to Figma UI.</li>
          <li><strong>SignGemma:</strong> Real-time sign language translation.</li>
        </ul>
        
        <p class="conclusion">Google is not playing around. The AGI wave is real — and Google might just be leading the pack.</p>
      </div>`,
      source: "Business Today",
      date: "May 24, 2025",
      readTime: 2
    },
    {
      title: "Digital marketing trends reshaping brand strategies",
      slug: "digital-marketing-trends-reshaping-brand-strategies",
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
      slug: "social-commerce-drives-new-revenue-streams",
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
      title: "Trump Confirms US–China Trade Truce; Big India Deal Coming",
      source: "BizNewsDaily",
      time: "1 hour ago",
      readTime: 6,
      summary: "Trump seals US-China truce, hints at historic US-India trade deal with big textile & pharma boosts.",
      slug: "us-china-trade-deal-trump-india-news"
    },
    {
      title: "New Healthcare Reform Bill Passes Senate Committee",
      source: "Political Wire",
      time: "3 hours ago",
      readTime: 5,
      summary: "Comprehensive healthcare legislation moves forward with bipartisan support, focusing on prescription drug costs and rural healthcare access.",
      slug: "healthcare-reform-bill-senate-committee-passes"
    },
    {
      title: "Trump announces potential ceasefire in Iran-Israel war",
      source: "Truth Social",
      time: "1 hour ago",
      readTime: 5,
      summary: "Former President claims breakthrough in Middle East diplomacy through back-channel negotiations involving Qatar as mediator.",
      slug: "trump-ceasefire-war-iran-israel"
    },
    {
      title: "Election reforms spark nationwide debate",
      slug: "election-reforms-spark-nationwide-debate",
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
      slug: "international-trade-agreements-under-review",
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
      slug: "healthcare-policy-reforms-gain-momentum",
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
      slug: "breakthrough-in-quantum-ai-hybrid-computing",
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
      slug: "ai-ethics-framework-gains-global-adoption",
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
      slug: "machine-learning-revolutionizes-medical-diagnosis",
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

// Flattened array of all articles with slugs for easy access
export const articles: NewsArticle[] = Object.values(newsData).flat();
