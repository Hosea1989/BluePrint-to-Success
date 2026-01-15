// Digital Marketing Curriculum Data - Expanded
const marketingData = {
    id: 'marketing',
    title: 'Digital Marketing',
    icon: '📱',
    description: 'Master the complete toolkit to market your business or personal brand effectively.',
    graduationGoal: 'Launch and optimize a complete marketing strategy for any business',
    levels: [
        {
            id: 1,
            title: 'Marketing Fundamentals',
            subtitle: 'Understanding modern marketing psychology',
            topics: [
                {
                    id: 'marketing-basics',
                    title: 'What is Marketing?',
                    content: `
                        <h2>What is Marketing?</h2>
                        <div class="definition">
                            <strong>Marketing:</strong> The process of identifying customer needs and positioning your product/service to meet those needs profitably.
                        </div>
                        <h3>Marketing vs Sales</h3>
                        <ul>
                            <li><strong>Marketing:</strong> Getting them to come to you</li>
                            <li><strong>Sales:</strong> Converting them when they arrive</li>
                        </ul>
                        <h3>The Marketing Funnel</h3>
                        <ol>
                            <li><strong>Awareness:</strong> They learn you exist</li>
                            <li><strong>Interest:</strong> They want to know more</li>
                            <li><strong>Consideration:</strong> They compare options</li>
                            <li><strong>Purchase:</strong> They buy</li>
                            <li><strong>Loyalty:</strong> They buy again and refer others</li>
                        </ol>
                        <h3>Key Marketing Questions</h3>
                        <ul>
                            <li>Who is my ideal customer?</li>
                            <li>What problem do I solve for them?</li>
                            <li>Where do they spend time online?</li>
                            <li>What makes me different from competitors?</li>
                        </ul>
                        <div class="highlight">
                            <strong>Core Truth:</strong> Good marketing isn't about tricks—it's about clearly communicating the right message to the right people.
                        </div>
                    `
                },
                {
                    id: 'target-audience',
                    title: 'Defining Your Target Audience',
                    content: `
                        <h2>Defining Your Target Audience</h2>
                        <h3>Why Targeting Matters</h3>
                        <p>"If you're marketing to everyone, you're marketing to no one."</p>
                        <ul>
                            <li>Limited budget goes further when focused</li>
                            <li>Messaging resonates more when specific</li>
                            <li>You can't be everything to everyone</li>
                        </ul>
                        <h3>Customer Avatar Exercise</h3>
                        <p>Create a detailed profile:</p>
                        <ul>
                            <li><strong>Demographics:</strong> Age, location, income, job</li>
                            <li><strong>Psychographics:</strong> Values, fears, goals</li>
                            <li><strong>Behaviors:</strong> Where they spend time, what they read</li>
                            <li><strong>Pain points:</strong> Problems they need solved</li>
                        </ul>
                        <div class="example">
                            <strong>Example Avatar:</strong><br>
                            Sarah, 32, marketing manager in LA, makes $85k, stressed about work-life balance, active on Instagram and LinkedIn, reads business podcasts during commute, wants to start a side business but doesn't know where to start.
                        </div>
                        <div class="highlight">
                            <strong>Pro Tip:</strong> Talk to real customers. Ask about their challenges, goals, and how they found you. Data beats assumptions.
                        </div>
                    `
                },
                {
                    id: 'value-proposition',
                    title: 'Crafting Your Value Proposition',
                    content: `
                        <h2>Crafting Your Value Proposition</h2>
                        <div class="definition">
                            <strong>Value Proposition:</strong> A clear statement of why someone should choose you over alternatives.
                        </div>
                        <h3>Value Proposition Formula</h3>
                        <div class="example">
                            I help [target customer] achieve [desired outcome] through [your unique approach], unlike [alternative] which [limitation].
                        </div>
                        <h3>What Makes You Different?</h3>
                        <ul>
                            <li>Speed (faster results)</li>
                            <li>Price (more affordable)</li>
                            <li>Quality (better outcomes)</li>
                            <li>Service (better experience)</li>
                            <li>Specialization (niche expertise)</li>
                            <li>Convenience (easier to use)</li>
                        </ul>
                        <h3>Testing Your Value Prop</h3>
                        <ul>
                            <li>Can you explain it in 10 seconds?</li>
                            <li>Does it focus on customer benefit (not features)?</li>
                            <li>Is it specific and measurable?</li>
                            <li>Does it differentiate from competitors?</li>
                        </ul>
                        <div class="highlight">
                            <strong>Test:</strong> Read your value proposition to someone unfamiliar with your business. If they don't immediately understand what you offer and why it matters, simplify.
                        </div>
                    `
                },
                {
                    id: 'marketing-psychology',
                    title: 'Marketing Psychology',
                    content: `
                        <h2>Marketing Psychology</h2>
                        <h3>Why Psychology Matters</h3>
                        <p>People make decisions emotionally, then justify logically. Understanding psychology helps you connect.</p>
                        
                        <h3>Key Psychological Principles</h3>
                        <ul>
                            <li><strong>Social Proof:</strong> "Others like me bought this" (reviews, testimonials, user counts)</li>
                            <li><strong>Scarcity:</strong> Limited availability increases desire ("Only 3 left!")</li>
                            <li><strong>Urgency:</strong> Time limits prompt action ("Sale ends tonight")</li>
                            <li><strong>Reciprocity:</strong> Give value first, they'll want to give back</li>
                            <li><strong>Authority:</strong> Expertise and credentials build trust</li>
                            <li><strong>Liking:</strong> People buy from people they like and relate to</li>
                        </ul>
                        
                        <h3>Loss Aversion</h3>
                        <p>People fear losing more than they desire gaining. Frame benefits as what they'll miss without you.</p>
                        <div class="example">
                            <strong>Gain frame:</strong> "Save $500 with our service"<br>
                            <strong>Loss frame:</strong> "Stop losing $500 every month" ← More powerful
                        </div>
                        
                        <h3>The Power of Story</h3>
                        <ul>
                            <li>Stories are 22x more memorable than facts</li>
                            <li>Include: Character (customer), Problem, Solution (you), Transformation</li>
                            <li>Make your customer the hero, not your product</li>
                        </ul>
                        
                        <div class="highlight">
                            <strong>Ethics:</strong> Use psychology to help people make good decisions, not to manipulate. The best marketing serves the customer.
                        </div>
                    `
                },
                {
                    id: 'competitive-analysis',
                    title: 'Competitive Analysis',
                    content: `
                        <h2>Competitive Analysis</h2>
                        <h3>Why Study Competitors?</h3>
                        <ul>
                            <li>Learn what's working in your market</li>
                            <li>Find gaps you can fill</li>
                            <li>Avoid their mistakes</li>
                            <li>Differentiate your positioning</li>
                        </ul>
                        
                        <h3>What to Analyze</h3>
                        <ul>
                            <li><strong>Their offer:</strong> What do they sell? At what price?</li>
                            <li><strong>Their messaging:</strong> How do they describe themselves?</li>
                            <li><strong>Their channels:</strong> Where do they market?</li>
                            <li><strong>Their content:</strong> What topics do they cover?</li>
                            <li><strong>Their reviews:</strong> What do customers praise/complain about?</li>
                        </ul>
                        
                        <h3>Free Tools for Research</h3>
                        <ul>
                            <li>Google their brand name</li>
                            <li>Follow their social media</li>
                            <li>Sign up for their email list</li>
                            <li>Read their reviews (Google, Yelp, G2)</li>
                            <li>Use SimilarWeb for traffic estimates</li>
                        </ul>
                        
                        <h3>Finding Your Angle</h3>
                        <p>Don't copy competitors—differentiate. Ask:</p>
                        <ul>
                            <li>What are they NOT doing well?</li>
                            <li>What audience are they ignoring?</li>
                            <li>What's the opposite of their approach?</li>
                        </ul>
                        
                        <div class="highlight">
                            <strong>Mindset:</strong> Competitors validate your market exists. Study them, but don't obsess. Your real focus should be on customers, not competition.
                        </div>
                    `
                }
            ],
            quiz: [
                {
                    question: 'What is the main purpose of marketing?',
                    options: [
                        'To trick people into buying',
                        'To identify customer needs and position products to meet them',
                        'To make pretty graphics',
                        'To spend advertising budget'
                    ],
                    correct: 1,
                    explanation: 'Marketing is about understanding customer needs and communicating how your product/service meets those needs. It\'s about connection, not manipulation.'
                },
                {
                    question: 'Which psychological principle explains why "Only 3 left!" works?',
                    options: ['Social proof', 'Reciprocity', 'Scarcity', 'Authority'],
                    correct: 2,
                    explanation: 'Scarcity—limited availability increases desire. When something is rare, we value it more and act faster to get it.'
                },
                {
                    question: 'Why is targeting a specific audience important?',
                    options: [
                        'To exclude potential customers',
                        'Because you can\'t afford to reach everyone anyway, and specific messaging resonates more',
                        'To seem exclusive',
                        'To avoid competition'
                    ],
                    correct: 1,
                    explanation: 'With limited resources, focused targeting makes your message more relevant and your budget more efficient.'
                }
            ]
        },
        {
            id: 2,
            title: 'Content Marketing & Copywriting',
            subtitle: 'Creating content that attracts and converts',
            topics: [
                {
                    id: 'content-strategy',
                    title: 'Content Strategy Basics',
                    content: `
                        <h2>Content Strategy Basics</h2>
                        <div class="definition">
                            <strong>Content Marketing:</strong> Creating and sharing valuable content to attract and retain customers, ultimately driving profitable action.
                        </div>
                        <h3>Types of Content</h3>
                        <ul>
                            <li><strong>Blog posts:</strong> SEO, thought leadership</li>
                            <li><strong>Videos:</strong> YouTube, TikTok, Reels</li>
                            <li><strong>Podcasts:</strong> Deep engagement</li>
                            <li><strong>Social posts:</strong> Quick engagement</li>
                            <li><strong>Email newsletters:</strong> Direct relationship</li>
                            <li><strong>Infographics:</strong> Shareable visuals</li>
                        </ul>
                        <h3>Content Pillars</h3>
                        <p>Choose 3-5 main topics you'll consistently cover:</p>
                        <div class="example">
                            <strong>Fitness coach example:</strong><br>
                            1. Workout routines<br>
                            2. Nutrition tips<br>
                            3. Mindset and motivation<br>
                            4. Behind-the-scenes/personal
                        </div>
                        <div class="highlight">
                            <strong>Rule:</strong> 80% value, 20% promotion. Give before you ask.
                        </div>
                    `
                },
                {
                    id: 'copywriting-basics',
                    title: 'Copywriting Fundamentals',
                    content: `
                        <h2>Copywriting Fundamentals</h2>
                        <div class="definition">
                            <strong>Copywriting:</strong> Writing that persuades people to take action—buy, click, sign up, share.
                        </div>
                        
                        <h3>The AIDA Formula</h3>
                        <ol>
                            <li><strong>Attention:</strong> Stop them with a hook (headline)</li>
                            <li><strong>Interest:</strong> Connect to their problem</li>
                            <li><strong>Desire:</strong> Show the transformation</li>
                            <li><strong>Action:</strong> Tell them what to do next</li>
                        </ol>
                        
                        <h3>Headline Formulas That Work</h3>
                        <ul>
                            <li>"How to [achieve desire] without [pain point]"</li>
                            <li>"[Number] ways to [achieve result]"</li>
                            <li>"The secret to [desired outcome]"</li>
                            <li>"Why [common belief] is wrong"</li>
                            <li>"[Specific result] in [timeframe]"</li>
                        </ul>
                        
                        <h3>Key Copywriting Principles</h3>
                        <ul>
                            <li><strong>Benefits over features:</strong> "Sleep better" beats "Memory foam mattress"</li>
                            <li><strong>You, not we:</strong> Focus on the reader, not yourself</li>
                            <li><strong>Specificity:</strong> "Lost 23 lbs in 6 weeks" beats "Lose weight fast"</li>
                            <li><strong>One idea per sentence:</strong> Keep it simple</li>
                            <li><strong>Active voice:</strong> "Get results" not "Results will be gotten"</li>
                        </ul>
                        
                        <div class="highlight">
                            <strong>Practice:</strong> Before writing, complete this: "After reading this, my reader will ___." If you can't finish it clearly, you're not ready to write.
                        </div>
                    `
                },
                {
                    id: 'social-media-strategy',
                    title: 'Social Media Strategy',
                    content: `
                        <h2>Social Media Strategy</h2>
                        <h3>Platform Selection</h3>
                        <ul>
                            <li><strong>Instagram:</strong> Visual brands, lifestyle, B2C</li>
                            <li><strong>LinkedIn:</strong> B2B, professional services</li>
                            <li><strong>TikTok:</strong> Entertainment, younger audience, viral potential</li>
                            <li><strong>YouTube:</strong> Long-form, tutorials, SEO value</li>
                            <li><strong>Twitter/X:</strong> News, tech, thought leadership</li>
                            <li><strong>Facebook:</strong> Local business, older demographics, groups</li>
                        </ul>
                        <h3>Choose 1-2 Platforms to Master</h3>
                        <p>Better to be great on one platform than mediocre on five.</p>
                        <h3>Posting Consistency</h3>
                        <ul>
                            <li>Quality > Quantity</li>
                            <li>But consistency builds trust</li>
                            <li>Start with sustainable frequency</li>
                            <li>Better 3x/week forever than daily for a month</li>
                        </ul>
                        <div class="highlight">
                            <strong>Algorithm Truth:</strong> All platforms reward engagement. Create content that sparks comments, shares, and saves—not just likes.
                        </div>
                    `
                },
                {
                    id: 'video-marketing',
                    title: 'Video Marketing',
                    content: `
                        <h2>Video Marketing</h2>
                        <h3>Why Video Dominates</h3>
                        <ul>
                            <li>Video gets 1200% more shares than text and images combined</li>
                            <li>People retain 95% of a message via video vs 10% via text</li>
                            <li>Video builds trust faster (they see and hear you)</li>
                        </ul>
                        
                        <h3>Video Types to Create</h3>
                        <ul>
                            <li><strong>Educational:</strong> How-tos, tutorials, tips</li>
                            <li><strong>Behind-the-scenes:</strong> Humanizes your brand</li>
                            <li><strong>Testimonials:</strong> Customer stories</li>
                            <li><strong>Product demos:</strong> Show it in action</li>
                            <li><strong>Talking head:</strong> You sharing expertise</li>
                        </ul>
                        
                        <h3>Short-Form vs Long-Form</h3>
                        <ul>
                            <li><strong>Short (< 60 sec):</strong> TikTok, Reels, Shorts—discovery, hooks</li>
                            <li><strong>Long (5-20 min):</strong> YouTube—depth, SEO, retention</li>
                        </ul>
                        
                        <h3>Video Best Practices</h3>
                        <ul>
                            <li>Hook in first 3 seconds (or they scroll)</li>
                            <li>Add captions (85% watch without sound)</li>
                            <li>Good audio matters more than good video</li>
                            <li>End with clear CTA</li>
                        </ul>
                        
                        <div class="highlight">
                            <strong>Start Simple:</strong> Your phone is good enough. Authenticity beats production value. Just start creating.
                        </div>
                    `
                }
            ],
            quiz: [
                {
                    question: 'What ratio of value to promotion should your content have?',
                    options: ['50% value, 50% promotion', '80% value, 20% promotion', '100% promotion', '20% value, 80% promotion'],
                    correct: 1,
                    explanation: 'The 80/20 rule suggests 80% of your content should provide value without asking for anything. This builds trust before you sell.'
                },
                {
                    question: 'What does AIDA stand for in copywriting?',
                    options: [
                        'Advertise, Implement, Design, Analyze',
                        'Attention, Interest, Desire, Action',
                        'Audience, Intent, Delivery, Assessment',
                        'Attract, Inform, Decide, Act'
                    ],
                    correct: 1,
                    explanation: 'AIDA is a classic copywriting formula: grab Attention, build Interest, create Desire, then prompt Action.'
                },
                {
                    question: 'What percentage of people watch videos without sound?',
                    options: ['25%', '50%', '85%', '10%'],
                    correct: 2,
                    explanation: '85% of social media videos are watched without sound, which is why captions are essential for engagement.'
                }
            ]
        },
        {
            id: 3,
            title: 'SEO & Search Marketing',
            subtitle: 'Getting found when people search',
            topics: [
                {
                    id: 'seo-fundamentals',
                    title: 'SEO Fundamentals',
                    content: `
                        <h2>SEO Fundamentals</h2>
                        <div class="definition">
                            <strong>SEO (Search Engine Optimization):</strong> The practice of optimizing your website to rank higher in search engine results.
                        </div>
                        <h3>Why SEO Matters</h3>
                        <ul>
                            <li>53% of website traffic comes from organic search</li>
                            <li>Free, ongoing traffic (unlike paid ads)</li>
                            <li>High intent—people are searching for solutions</li>
                        </ul>
                        <h3>How Search Engines Work</h3>
                        <ol>
                            <li><strong>Crawling:</strong> Bots discover your pages</li>
                            <li><strong>Indexing:</strong> Content is stored and organized</li>
                            <li><strong>Ranking:</strong> Algorithm determines order</li>
                        </ol>
                        <h3>Three Pillars of SEO</h3>
                        <ul>
                            <li><strong>Technical SEO:</strong> Site speed, mobile-friendly, structure</li>
                            <li><strong>On-page SEO:</strong> Content, keywords, meta tags</li>
                            <li><strong>Off-page SEO:</strong> Backlinks, authority</li>
                        </ul>
                        <div class="highlight">
                            <strong>Reality:</strong> SEO takes 3-12 months to see results. It's a long game but compounds over time.
                        </div>
                    `
                },
                {
                    id: 'keyword-research',
                    title: 'Keyword Research',
                    content: `
                        <h2>Keyword Research</h2>
                        <h3>What to Look For</h3>
                        <ul>
                            <li><strong>Search volume:</strong> How many people search this?</li>
                            <li><strong>Competition:</strong> How hard to rank?</li>
                            <li><strong>Intent:</strong> Are they looking to buy?</li>
                            <li><strong>Relevance:</strong> Does it match your business?</li>
                        </ul>
                        <h3>Free Keyword Tools</h3>
                        <ul>
                            <li>Google Keyword Planner</li>
                            <li>Ubersuggest</li>
                            <li>AnswerThePublic</li>
                            <li>Google autocomplete/related searches</li>
                        </ul>
                        <h3>Long-Tail Keywords</h3>
                        <div class="example">
                            <strong>Short-tail:</strong> "fitness" (high volume, high competition)<br>
                            <strong>Long-tail:</strong> "fitness tips for busy moms" (lower volume, easier to rank, higher intent)
                        </div>
                        <div class="highlight">
                            <strong>Strategy:</strong> Start with long-tail keywords. They're easier to rank for and often have higher purchase intent.
                        </div>
                    `
                },
                {
                    id: 'local-seo',
                    title: 'Local SEO',
                    content: `
                        <h2>Local SEO</h2>
                        <div class="definition">
                            <strong>Local SEO:</strong> Optimizing to appear in local search results ("near me" searches, Google Maps).
                        </div>
                        
                        <h3>Why Local SEO Matters</h3>
                        <ul>
                            <li>46% of all Google searches have local intent</li>
                            <li>88% of local searches result in a call or visit within 24 hours</li>
                            <li>Essential for brick-and-mortar and service businesses</li>
                        </ul>
                        
                        <h3>Google Business Profile (Essential)</h3>
                        <ol>
                            <li>Claim and verify your listing</li>
                            <li>Complete every field (hours, services, photos)</li>
                            <li>Choose accurate categories</li>
                            <li>Add photos weekly</li>
                            <li>Respond to all reviews</li>
                        </ol>
                        
                        <h3>Local SEO Ranking Factors</h3>
                        <ul>
                            <li><strong>Reviews:</strong> Quantity, quality, recency</li>
                            <li><strong>Proximity:</strong> Distance from searcher</li>
                            <li><strong>NAP consistency:</strong> Name, Address, Phone same everywhere</li>
                            <li><strong>Citations:</strong> Listings on Yelp, directories, etc.</li>
                        </ul>
                        
                        <div class="highlight">
                            <strong>Quick Win:</strong> Ask happy customers for Google reviews. 5 recent 5-star reviews can dramatically improve your local ranking.
                        </div>
                    `
                },
                {
                    id: 'link-building',
                    title: 'Link Building Basics',
                    content: `
                        <h2>Link Building Basics</h2>
                        <div class="definition">
                            <strong>Backlinks:</strong> Links from other websites to yours. Google sees them as "votes" for your credibility.
                        </div>
                        
                        <h3>Why Links Matter</h3>
                        <ul>
                            <li>One of the top 3 ranking factors</li>
                            <li>Quality > Quantity (one NYT link > 100 spam links)</li>
                            <li>Relevant links matter most</li>
                        </ul>
                        
                        <h3>White Hat Link Building Strategies</h3>
                        <ul>
                            <li><strong>Create linkable content:</strong> Original research, tools, comprehensive guides</li>
                            <li><strong>Guest posting:</strong> Write for relevant blogs</li>
                            <li><strong>HARO:</strong> Help reporters with expert quotes</li>
                            <li><strong>Broken link building:</strong> Find broken links, offer your content as replacement</li>
                            <li><strong>Partner mentions:</strong> Get linked by suppliers, partners, associations</li>
                        </ul>
                        
                        <h3>What to Avoid</h3>
                        <ul>
                            <li>Buying links (Google penalizes this)</li>
                            <li>Link farms and spam directories</li>
                            <li>Irrelevant links</li>
                        </ul>
                        
                        <div class="highlight">
                            <strong>Best Strategy:</strong> Create content so good that people naturally want to link to it. That's the most sustainable approach.
                        </div>
                    `
                }
            ],
            quiz: [
                {
                    question: 'What percentage of website traffic comes from organic search?',
                    options: ['10%', '25%', '53%', '75%'],
                    correct: 2,
                    explanation: 'About 53% of all website traffic comes from organic search, making SEO one of the most important marketing channels.'
                },
                {
                    question: 'What are long-tail keywords?',
                    options: [
                        'Very long website URLs',
                        'Specific, longer phrases with lower competition and higher intent',
                        'Keywords with many letters',
                        'Keywords used infrequently'
                    ],
                    correct: 1,
                    explanation: 'Long-tail keywords are specific phrases (3+ words) that are easier to rank for and often indicate stronger purchase intent.'
                },
                {
                    question: 'What percentage of local searches result in a call or visit within 24 hours?',
                    options: ['25%', '50%', '75%', '88%'],
                    correct: 3,
                    explanation: '88% of local mobile searches result in a call or visit within 24 hours, showing the high intent of local searchers.'
                }
            ]
        },
        {
            id: 4,
            title: 'Paid Advertising',
            subtitle: 'Accelerating growth with ads',
            topics: [
                {
                    id: 'paid-ads-basics',
                    title: 'Introduction to Paid Ads',
                    content: `
                        <h2>Introduction to Paid Ads</h2>
                        <h3>Major Ad Platforms</h3>
                        <ul>
                            <li><strong>Google Ads:</strong> Search intent, highest intent traffic</li>
                            <li><strong>Facebook/Instagram Ads:</strong> Targeting, awareness, retargeting</li>
                            <li><strong>LinkedIn Ads:</strong> B2B, expensive but targeted</li>
                            <li><strong>TikTok Ads:</strong> Younger audience, creative content</li>
                            <li><strong>YouTube Ads:</strong> Video reach, skippable/non-skippable</li>
                        </ul>
                        <h3>Ad Pricing Models</h3>
                        <ul>
                            <li><strong>CPC (Cost Per Click):</strong> Pay when someone clicks</li>
                            <li><strong>CPM (Cost Per Mille):</strong> Pay per 1,000 impressions</li>
                            <li><strong>CPA (Cost Per Acquisition):</strong> Pay per conversion</li>
                        </ul>
                        <h3>When to Use Paid Ads</h3>
                        <ul>
                            <li>You have a proven offer (people are buying organically)</li>
                            <li>You can track ROI</li>
                            <li>You have budget to test ($500+ minimum)</li>
                            <li>You need faster results than SEO provides</li>
                        </ul>
                        <div class="highlight">
                            <strong>Warning:</strong> Don't throw money at ads without tracking. Know your cost per customer and lifetime value first.
                        </div>
                    `
                },
                {
                    id: 'ad-creative',
                    title: 'Ad Creative Best Practices',
                    content: `
                        <h2>Ad Creative Best Practices</h2>
                        <h3>The 3-Second Rule</h3>
                        <p>You have 3 seconds to capture attention. Your ad must:</p>
                        <ul>
                            <li>Stop the scroll</li>
                            <li>Communicate the benefit</li>
                            <li>Create curiosity to learn more</li>
                        </ul>
                        
                        <h3>Effective Ad Formats</h3>
                        <ul>
                            <li><strong>UGC-style:</strong> Looks native, not like an ad</li>
                            <li><strong>Problem-solution:</strong> Show the pain, then relief</li>
                            <li><strong>Testimonial:</strong> Real customers, real results</li>
                            <li><strong>Before/after:</strong> Visual transformation</li>
                            <li><strong>Demonstration:</strong> Product in action</li>
                        </ul>
                        
                        <h3>Copy Tips for Ads</h3>
                        <ul>
                            <li>Lead with benefit, not feature</li>
                            <li>Use numbers and specifics</li>
                            <li>Include social proof</li>
                            <li>Clear, single CTA</li>
                            <li>Match ad to landing page</li>
                        </ul>
                        
                        <div class="example">
                            <strong>Weak:</strong> "Buy our software today!"<br>
                            <strong>Strong:</strong> "2,847 marketers saved 10+ hours/week. See how →"
                        </div>
                        
                        <div class="highlight">
                            <strong>Testing Rule:</strong> Creative is the #1 variable. Test multiple images/videos before changing targeting.
                        </div>
                    `
                },
                {
                    id: 'retargeting',
                    title: 'The Power of Retargeting',
                    content: `
                        <h2>The Power of Retargeting</h2>
                        <div class="definition">
                            <strong>Retargeting:</strong> Showing ads to people who have already visited your website or engaged with your content.
                        </div>
                        <h3>Why Retargeting Works</h3>
                        <ul>
                            <li>97% of visitors don't buy on first visit</li>
                            <li>Retargeted visitors are 70% more likely to convert</li>
                            <li>Keeps you top-of-mind</li>
                            <li>Much cheaper than cold ads</li>
                        </ul>
                        <h3>Retargeting Strategies</h3>
                        <ul>
                            <li>Show product they viewed</li>
                            <li>Offer discount to complete purchase</li>
                            <li>Share testimonials and social proof</li>
                            <li>Remind of cart abandonment</li>
                        </ul>
                        <div class="highlight">
                            <strong>Start Here:</strong> If you're new to ads, start with retargeting your website visitors. It's the highest ROI ad spend.
                        </div>
                    `
                },
                {
                    id: 'budget-management',
                    title: 'Ad Budget Management',
                    content: `
                        <h2>Ad Budget Management</h2>
                        <h3>Starting Budget Guidelines</h3>
                        <ul>
                            <li><strong>Testing phase:</strong> $500-1,000 to learn</li>
                            <li><strong>Scaling:</strong> Increase 20-30% at a time</li>
                            <li><strong>Never bet more than you can lose</strong></li>
                        </ul>
                        
                        <h3>Budget Allocation</h3>
                        <div class="example">
                            <strong>Suggested Split:</strong><br>
                            70% - Proven campaigns (what's working)<br>
                            20% - Testing new audiences/creatives<br>
                            10% - Experimental (new platforms, ideas)
                        </div>
                        
                        <h3>When to Kill an Ad</h3>
                        <ul>
                            <li>After spending 2-3x your target CPA with no conversions</li>
                            <li>CTR below 1% (people aren't interested)</li>
                            <li>High frequency (same people seeing it too many times)</li>
                        </ul>
                        
                        <h3>Scaling Strategies</h3>
                        <ul>
                            <li><strong>Vertical:</strong> Increase budget on winning campaigns</li>
                            <li><strong>Horizontal:</strong> Duplicate to new audiences</li>
                            <li><strong>Platform expansion:</strong> Take winning creative to new platforms</li>
                        </ul>
                        
                        <div class="highlight">
                            <strong>Golden Rule:</strong> Only scale what's profitable. Know your numbers before spending more.
                        </div>
                    `
                }
            ],
            quiz: [
                {
                    question: 'When should you NOT use paid advertising?',
                    options: [
                        'When you have a proven offer',
                        'When you can track ROI',
                        'When you can\'t track conversions and don\'t know your customer value',
                        'When you want faster results than SEO'
                    ],
                    correct: 2,
                    explanation: 'Paid ads without tracking is burning money. You need to know your cost per customer and customer lifetime value before scaling.'
                },
                {
                    question: 'What percentage of website visitors buy on their first visit?',
                    options: ['50%', '25%', '10%', '3%'],
                    correct: 3,
                    explanation: 'Only about 3% of visitors convert on their first visit, which is why retargeting is so important.'
                },
                {
                    question: 'What is the #1 variable to test in paid ads?',
                    options: ['Targeting', 'Budget', 'Creative (images/video)', 'Time of day'],
                    correct: 2,
                    explanation: 'Creative is the biggest lever in ad performance. Test multiple images and videos before adjusting targeting.'
                }
            ]
        },
        {
            id: 5,
            title: 'Email Marketing',
            subtitle: 'Building direct relationships that convert',
            topics: [
                {
                    id: 'email-basics',
                    title: 'Why Email Marketing Still Works',
                    content: `
                        <h2>Why Email Marketing Still Works</h2>
                        <h3>Email ROI</h3>
                        <ul>
                            <li>$36-42 return for every $1 spent (highest of any channel)</li>
                            <li>You own your list (unlike social followers)</li>
                            <li>Direct access to inbox (no algorithm)</li>
                            <li>Works for any business type</li>
                        </ul>
                        
                        <h3>Email vs Social Media</h3>
                        <ul>
                            <li><strong>Social:</strong> Rented audience, algorithm controls reach</li>
                            <li><strong>Email:</strong> Owned audience, you control delivery</li>
                            <li>Email conversion rate: 6.05% vs social: 1.9%</li>
                        </ul>
                        
                        <h3>Types of Email Marketing</h3>
                        <ul>
                            <li><strong>Newsletters:</strong> Regular value, relationship building</li>
                            <li><strong>Promotional:</strong> Sales, launches, offers</li>
                            <li><strong>Automated sequences:</strong> Welcome, nurture, abandon cart</li>
                            <li><strong>Transactional:</strong> Receipts, shipping, account updates</li>
                        </ul>
                        
                        <div class="highlight">
                            <strong>Mindset:</strong> Your email list is your most valuable marketing asset. Treat subscribers like VIPs, not targets.
                        </div>
                    `
                },
                {
                    id: 'list-building',
                    title: 'Building Your Email List',
                    content: `
                        <h2>Building Your Email List</h2>
                        <h3>Lead Magnets (Free Value)</h3>
                        <p>Give something valuable in exchange for their email:</p>
                        <ul>
                            <li><strong>Checklists/cheat sheets:</strong> Quick wins</li>
                            <li><strong>Ebooks/guides:</strong> Comprehensive value</li>
                            <li><strong>Templates:</strong> Save them time</li>
                            <li><strong>Webinars:</strong> Live or recorded training</li>
                            <li><strong>Discounts:</strong> First-purchase incentive</li>
                            <li><strong>Quizzes:</strong> Personalized results</li>
                        </ul>
                        
                        <h3>Opt-in Placement</h3>
                        <ul>
                            <li>Homepage hero section</li>
                            <li>Blog post content upgrades</li>
                            <li>Exit-intent popups</li>
                            <li>Footer on every page</li>
                            <li>Social media bio links</li>
                        </ul>
                        
                        <h3>Best Practices</h3>
                        <ul>
                            <li>Be specific about what they'll get</li>
                            <li>Set expectations (frequency)</li>
                            <li>Use double opt-in for quality</li>
                            <li>Deliver lead magnet immediately</li>
                        </ul>
                        
                        <div class="highlight">
                            <strong>Quality > Quantity:</strong> 1,000 engaged subscribers beats 10,000 uninterested ones. Focus on attracting your ideal customers.
                        </div>
                    `
                },
                {
                    id: 'email-sequences',
                    title: 'Email Sequences That Convert',
                    content: `
                        <h2>Email Sequences That Convert</h2>
                        <h3>Welcome Sequence (Essential)</h3>
                        <div class="example">
                            <strong>Day 1:</strong> Deliver lead magnet + introduce yourself<br>
                            <strong>Day 2:</strong> Share your story/why you do this<br>
                            <strong>Day 3:</strong> Provide value (tip, resource, insight)<br>
                            <strong>Day 4:</strong> Social proof (case study, testimonial)<br>
                            <strong>Day 5:</strong> Soft pitch (introduce your offer)
                        </div>
                        
                        <h3>Nurture Sequence</h3>
                        <p>Ongoing emails to build relationship:</p>
                        <ul>
                            <li>Weekly newsletter with value</li>
                            <li>Behind-the-scenes content</li>
                            <li>Customer success stories</li>
                            <li>Industry insights and tips</li>
                        </ul>
                        
                        <h3>Sales Sequence</h3>
                        <ul>
                            <li><strong>Email 1:</strong> Identify the problem</li>
                            <li><strong>Email 2:</strong> Agitate the problem (cost of not solving)</li>
                            <li><strong>Email 3:</strong> Introduce your solution</li>
                            <li><strong>Email 4:</strong> Social proof</li>
                            <li><strong>Email 5:</strong> Handle objections</li>
                            <li><strong>Email 6:</strong> Urgency + final CTA</li>
                        </ul>
                        
                        <div class="highlight">
                            <strong>Key:</strong> Sequence emails so each builds on the last. Guide them through a journey, don't just blast offers.
                        </div>
                    `
                },
                {
                    id: 'email-best-practices',
                    title: 'Email Best Practices',
                    content: `
                        <h2>Email Best Practices</h2>
                        <h3>Subject Lines</h3>
                        <ul>
                            <li>Keep under 50 characters</li>
                            <li>Create curiosity or promise benefit</li>
                            <li>Personalization can boost open rates 26%</li>
                            <li>Avoid spam triggers (FREE!!!, Act now!!!)</li>
                            <li>Test different approaches</li>
                        </ul>
                        
                        <h3>Email Structure</h3>
                        <ul>
                            <li>One main idea per email</li>
                            <li>Short paragraphs (2-3 sentences)</li>
                            <li>Clear, single CTA</li>
                            <li>Write like you're emailing a friend</li>
                            <li>Include your personality</li>
                        </ul>
                        
                        <h3>Deliverability Tips</h3>
                        <ul>
                            <li>Clean your list regularly (remove bounces, unengaged)</li>
                            <li>Use authenticated sending domain</li>
                            <li>Balance text and images</li>
                            <li>Include unsubscribe link (required by law)</li>
                            <li>Send from a real person, not "noreply"</li>
                        </ul>
                        
                        <h3>Key Metrics</h3>
                        <ul>
                            <li><strong>Open rate:</strong> 20-25% is good</li>
                            <li><strong>Click rate:</strong> 2-5% is good</li>
                            <li><strong>Unsubscribe rate:</strong> Under 0.5%</li>
                        </ul>
                        
                        <div class="highlight">
                            <strong>Test Everything:</strong> Subject lines, send times, content length. Small improvements compound to big results.
                        </div>
                    `
                }
            ],
            quiz: [
                {
                    question: 'What is the average ROI of email marketing?',
                    options: ['$5 for every $1 spent', '$15 for every $1 spent', '$36-42 for every $1 spent', '$100 for every $1 spent'],
                    correct: 2,
                    explanation: 'Email marketing returns $36-42 for every $1 spent, making it the highest ROI marketing channel available.'
                },
                {
                    question: 'What is a "lead magnet"?',
                    options: [
                        'A tool to find email addresses',
                        'Something valuable you give away in exchange for an email signup',
                        'An ad that attracts customers',
                        'A type of email subject line'
                    ],
                    correct: 1,
                    explanation: 'A lead magnet is free valuable content (guide, checklist, template) you offer in exchange for someone\'s email address.'
                },
                {
                    question: 'What is a good email open rate?',
                    options: ['5-10%', '20-25%', '50-60%', '80-90%'],
                    correct: 1,
                    explanation: '20-25% is considered a good open rate for email marketing. Higher is great, but anything above 20% means your subject lines are working.'
                }
            ]
        },
        {
            id: 6,
            title: 'Analytics & Optimization',
            subtitle: 'Measuring and improving your marketing',
            topics: [
                {
                    id: 'marketing-metrics',
                    title: 'Key Marketing Metrics',
                    content: `
                        <h2>Key Marketing Metrics</h2>
                        <h3>Essential Metrics to Track</h3>
                        <ul>
                            <li><strong>Traffic:</strong> Visitors to your site</li>
                            <li><strong>Conversion Rate:</strong> % who take desired action</li>
                            <li><strong>Cost Per Lead (CPL):</strong> Ad spend ÷ leads</li>
                            <li><strong>Cost Per Acquisition (CPA):</strong> Ad spend ÷ customers</li>
                            <li><strong>Customer Lifetime Value (LTV):</strong> Total revenue per customer</li>
                            <li><strong>Return on Ad Spend (ROAS):</strong> Revenue ÷ ad spend</li>
                        </ul>
                        <h3>The Most Important Ratio</h3>
                        <div class="example">
                            <strong>LTV:CAC Ratio</strong><br>
                            Customer Lifetime Value ÷ Customer Acquisition Cost<br>
                            Healthy ratio: 3:1 or higher<br>
                            (Customer worth 3x+ what it costs to acquire them)
                        </div>
                        <h3>Free Analytics Tools</h3>
                        <ul>
                            <li>Google Analytics 4</li>
                            <li>Google Search Console</li>
                            <li>Platform-specific insights</li>
                            <li>Hotjar (heatmaps, recordings)</li>
                        </ul>
                        <div class="highlight">
                            <strong>Rule:</strong> What gets measured gets improved. Set up tracking before spending on marketing.
                        </div>
                    `
                },
                {
                    id: 'ab-testing',
                    title: 'A/B Testing',
                    content: `
                        <h2>A/B Testing</h2>
                        <div class="definition">
                            <strong>A/B Testing:</strong> Comparing two versions of something to see which performs better.
                        </div>
                        <h3>What to Test</h3>
                        <ul>
                            <li>Headlines and copy</li>
                            <li>Images and videos</li>
                            <li>Call-to-action buttons</li>
                            <li>Pricing and offers</li>
                            <li>Email subject lines</li>
                            <li>Landing page layouts</li>
                        </ul>
                        <h3>A/B Testing Rules</h3>
                        <ol>
                            <li>Test ONE variable at a time</li>
                            <li>Get enough data (statistical significance)</li>
                            <li>Run test long enough (at least 1-2 weeks)</li>
                            <li>Implement winner, then test next thing</li>
                        </ol>
                        <div class="example">
                            <strong>Example Test:</strong><br>
                            Version A: "Sign Up Now"<br>
                            Version B: "Start Your Free Trial"<br>
                            Run for 2 weeks, 1,000+ visitors each<br>
                            Result: B converts 23% better → implement
                        </div>
                        <div class="highlight">
                            <strong>Mindset:</strong> Marketing is a series of experiments. Every test teaches you something about your customers.
                        </div>
                    `
                },
                {
                    id: 'cro',
                    title: 'Conversion Rate Optimization',
                    content: `
                        <h2>Conversion Rate Optimization (CRO)</h2>
                        <div class="definition">
                            <strong>CRO:</strong> Systematically improving your website to get more visitors to take action.
                        </div>
                        
                        <h3>Why CRO Matters</h3>
                        <p>Doubling your conversion rate = doubling revenue without more traffic.</p>
                        <div class="example">
                            1,000 visitors × 2% conversion = 20 customers<br>
                            1,000 visitors × 4% conversion = 40 customers<br>
                            Same traffic, 2x results!
                        </div>
                        
                        <h3>High-Impact CRO Elements</h3>
                        <ul>
                            <li><strong>Headlines:</strong> Clear benefit in first thing they see</li>
                            <li><strong>CTA buttons:</strong> Clear, action-oriented, visible</li>
                            <li><strong>Social proof:</strong> Testimonials, reviews, trust badges</li>
                            <li><strong>Forms:</strong> Fewer fields = more completions</li>
                            <li><strong>Page speed:</strong> 1 second delay = 7% fewer conversions</li>
                        </ul>
                        
                        <h3>CRO Process</h3>
                        <ol>
                            <li>Analyze current data (where do people drop off?)</li>
                            <li>Form hypothesis (what might improve it?)</li>
                            <li>Test one change</li>
                            <li>Measure results</li>
                            <li>Implement winner, repeat</li>
                        </ol>
                        
                        <div class="highlight">
                            <strong>Low-Hanging Fruit:</strong> Start with your highest-traffic pages. Small improvements there have the biggest impact.
                        </div>
                    `
                }
            ],
            quiz: [
                {
                    question: 'What is a healthy LTV:CAC ratio?',
                    options: ['1:1', '2:1', '3:1 or higher', '10:1'],
                    correct: 2,
                    explanation: 'A 3:1 ratio means customers are worth 3x what you spend to acquire them. Below 3:1 often means unsustainable marketing spend.'
                },
                {
                    question: 'What is the key rule of A/B testing?',
                    options: [
                        'Test as many things as possible at once',
                        'Test one variable at a time',
                        'Only test colors',
                        'Stop the test as soon as you see a difference'
                    ],
                    correct: 1,
                    explanation: 'Testing one variable at a time ensures you know exactly what caused any difference in performance.'
                },
                {
                    question: 'What happens if you double your conversion rate?',
                    options: [
                        'You need twice as much traffic',
                        'You double revenue without needing more traffic',
                        'Your bounce rate increases',
                        'Nothing significant'
                    ],
                    correct: 1,
                    explanation: 'Doubling conversion rate means you get twice as many customers from the same amount of traffic—effectively doubling revenue.'
                }
            ]
        },
        {
            id: 7,
            title: 'Branding & Positioning',
            subtitle: 'Building a memorable brand identity',
            topics: [
                {
                    id: 'brand-basics',
                    title: 'What is Branding?',
                    content: `
                        <h2>What is Branding?</h2>
                        <div class="definition">
                            <strong>Brand:</strong> Not your logo—it's how people feel about you. The sum of all impressions, experiences, and associations.
                        </div>
                        
                        <h3>Brand vs Marketing</h3>
                        <ul>
                            <li><strong>Marketing:</strong> Getting attention and driving action</li>
                            <li><strong>Branding:</strong> What they remember and feel after</li>
                        </ul>
                        
                        <h3>Why Branding Matters</h3>
                        <ul>
                            <li>Differentiation in crowded markets</li>
                            <li>Premium pricing (people pay more for brands they trust)</li>
                            <li>Customer loyalty and referrals</li>
                            <li>Makes all marketing more effective</li>
                        </ul>
                        
                        <h3>Brand Elements</h3>
                        <ul>
                            <li><strong>Brand Strategy:</strong> Purpose, values, positioning</li>
                            <li><strong>Visual Identity:</strong> Logo, colors, typography</li>
                            <li><strong>Brand Voice:</strong> How you communicate</li>
                            <li><strong>Brand Experience:</strong> Every touchpoint</li>
                        </ul>
                        
                        <div class="highlight">
                            <strong>Truth:</strong> Your brand exists whether you intentionally build it or not. People form impressions. Better to shape them deliberately.
                        </div>
                    `
                },
                {
                    id: 'brand-positioning',
                    title: 'Brand Positioning',
                    content: `
                        <h2>Brand Positioning</h2>
                        <div class="definition">
                            <strong>Positioning:</strong> The unique space your brand occupies in customers' minds relative to competitors.
                        </div>
                        
                        <h3>Positioning Statement Formula</h3>
                        <div class="example">
                            For [target customer] who [need/want], [brand] is the [category] that [key benefit] because [reason to believe].
                        </div>
                        
                        <h3>Positioning Strategies</h3>
                        <ul>
                            <li><strong>Category leader:</strong> "The #1 choice for..."</li>
                            <li><strong>Against leader:</strong> "Unlike [competitor], we..."</li>
                            <li><strong>New category:</strong> Create your own category</li>
                            <li><strong>Niche focus:</strong> "The [category] for [specific audience]"</li>
                            <li><strong>Price position:</strong> Premium, value, or budget</li>
                        </ul>
                        
                        <h3>Finding Your Position</h3>
                        <ol>
                            <li>Map competitors on key attributes</li>
                            <li>Find gaps or underserved spaces</li>
                            <li>Choose position you can own and defend</li>
                            <li>Commit fully (you can't be everything)</li>
                        </ol>
                        
                        <div class="highlight">
                            <strong>Key:</strong> Better to be #1 in a small category than #5 in a big one. Narrow beats broad.
                        </div>
                    `
                },
                {
                    id: 'visual-branding',
                    title: 'Visual Brand Identity',
                    content: `
                        <h2>Visual Brand Identity</h2>
                        <h3>Core Visual Elements</h3>
                        <ul>
                            <li><strong>Logo:</strong> Simple, memorable, works in all sizes</li>
                            <li><strong>Color palette:</strong> 2-3 primary, 2-3 secondary colors</li>
                            <li><strong>Typography:</strong> 1-2 fonts for consistency</li>
                            <li><strong>Imagery style:</strong> Photography, illustration, icons</li>
                        </ul>
                        
                        <h3>Color Psychology</h3>
                        <ul>
                            <li><strong>Blue:</strong> Trust, professionalism, calm</li>
                            <li><strong>Red:</strong> Energy, urgency, passion</li>
                            <li><strong>Green:</strong> Growth, health, nature</li>
                            <li><strong>Yellow:</strong> Optimism, warmth, attention</li>
                            <li><strong>Black:</strong> Luxury, sophistication, power</li>
                            <li><strong>Purple:</strong> Creativity, luxury, wisdom</li>
                        </ul>
                        
                        <h3>Consistency Rules</h3>
                        <ul>
                            <li>Use same colors everywhere</li>
                            <li>Same fonts across all materials</li>
                            <li>Consistent logo placement</li>
                            <li>Similar photo/image style</li>
                        </ul>
                        
                        <div class="highlight">
                            <strong>DIY Tools:</strong> Canva for graphics, Coolors for color palettes, Google Fonts for typography. You don't need expensive designers to start.
                        </div>
                    `
                },
                {
                    id: 'brand-voice',
                    title: 'Brand Voice & Storytelling',
                    content: `
                        <h2>Brand Voice & Storytelling</h2>
                        <h3>Defining Your Brand Voice</h3>
                        <p>Brand voice is HOW you say things, not what you say.</p>
                        
                        <h3>Voice Attributes</h3>
                        <p>Choose 3-4 words that describe your voice:</p>
                        <div class="example">
                            <strong>Examples:</strong><br>
                            Professional but approachable<br>
                            Bold and confident<br>
                            Friendly and helpful<br>
                            Expert but not condescending
                        </div>
                        
                        <h3>Brand Story Framework</h3>
                        <ol>
                            <li><strong>Origin:</strong> Why did you start?</li>
                            <li><strong>Mission:</strong> What change do you want to create?</li>
                            <li><strong>Values:</strong> What do you stand for?</li>
                            <li><strong>Vision:</strong> Where are you going?</li>
                        </ol>
                        
                        <h3>Storytelling in Marketing</h3>
                        <ul>
                            <li>Make customer the hero, not your brand</li>
                            <li>Show transformation (before → after)</li>
                            <li>Be specific (details make stories believable)</li>
                            <li>Include emotion (people remember feelings)</li>
                        </ul>
                        
                        <div class="highlight">
                            <strong>Consistency:</strong> Your voice should be recognizable whether it's an email, social post, or customer service reply. Same personality everywhere.
                        </div>
                    `
                }
            ],
            quiz: [
                {
                    question: 'What is a brand?',
                    options: [
                        'Your logo',
                        'Your company name',
                        'How people feel about you—the sum of all impressions and experiences',
                        'Your marketing materials'
                    ],
                    correct: 2,
                    explanation: 'A brand is not your logo or name—it\'s the overall impression and feeling people have about you based on every interaction.'
                },
                {
                    question: 'What is brand positioning?',
                    options: [
                        'Where your logo appears',
                        'The unique space your brand occupies in customers\' minds vs competitors',
                        'Your office location',
                        'Your market share'
                    ],
                    correct: 1,
                    explanation: 'Positioning is about occupying a distinct place in customers\' minds—how they perceive you relative to alternatives.'
                },
                {
                    question: 'In brand storytelling, who should be the hero?',
                    options: [
                        'Your brand/company',
                        'Your founder',
                        'Your customer',
                        'Your product'
                    ],
                    correct: 2,
                    explanation: 'Make the customer the hero of the story. They have a problem, you help them overcome it, and they achieve transformation.'
                }
            ]
        },
        {
            id: 8,
            title: 'Influencer & Partnership Marketing',
            subtitle: 'Leveraging others\' audiences',
            topics: [
                {
                    id: 'influencer-basics',
                    title: 'Influencer Marketing Fundamentals',
                    content: `
                        <h2>Influencer Marketing Fundamentals</h2>
                        <div class="definition">
                            <strong>Influencer Marketing:</strong> Partnering with people who have engaged audiences to promote your brand.
                        </div>
                        
                        <h3>Why Influencers Work</h3>
                        <ul>
                            <li>Trust transfer (their audience trusts them)</li>
                            <li>Targeted reach (niche audiences)</li>
                            <li>Content creation (they make the content)</li>
                            <li>Social proof (endorsement)</li>
                        </ul>
                        
                        <h3>Types of Influencers</h3>
                        <ul>
                            <li><strong>Nano (1K-10K):</strong> Highest engagement, cheapest, very niche</li>
                            <li><strong>Micro (10K-100K):</strong> Good engagement, affordable, targeted</li>
                            <li><strong>Mid-tier (100K-500K):</strong> Broader reach, moderate cost</li>
                            <li><strong>Macro (500K-1M):</strong> Mass reach, expensive</li>
                            <li><strong>Mega (1M+):</strong> Celebrity status, very expensive</li>
                        </ul>
                        
                        <h3>Best ROI</h3>
                        <p>For most businesses, micro-influencers (10K-100K) offer the best ROI—good engagement and targeted audiences at reasonable cost.</p>
                        
                        <div class="highlight">
                            <strong>Key Metric:</strong> Engagement rate matters more than follower count. 10% engagement on 10K followers > 0.5% engagement on 1M followers.
                        </div>
                    `
                },
                {
                    id: 'finding-influencers',
                    title: 'Finding & Vetting Influencers',
                    content: `
                        <h2>Finding & Vetting Influencers</h2>
                        <h3>Where to Find Them</h3>
                        <ul>
                            <li>Search hashtags in your niche</li>
                            <li>Look at who your customers follow</li>
                            <li>Check competitor partnerships</li>
                            <li>Influencer platforms (Upfluence, AspireIQ)</li>
                            <li>Ask your audience for recommendations</li>
                        </ul>
                        
                        <h3>What to Look For</h3>
                        <ul>
                            <li><strong>Engagement rate:</strong> 3%+ is good</li>
                            <li><strong>Audience authenticity:</strong> Real comments, not bots</li>
                            <li><strong>Content quality:</strong> Matches your brand?</li>
                            <li><strong>Audience demographics:</strong> Your target market?</li>
                            <li><strong>Past brand partnerships:</strong> How did they perform?</li>
                        </ul>
                        
                        <h3>Red Flags</h3>
                        <ul>
                            <li>Fake followers (sudden spikes, generic comments)</li>
                            <li>Very low engagement despite high followers</li>
                            <li>Promotes anything and everything</li>
                            <li>Unprofessional communication</li>
                        </ul>
                        
                        <div class="highlight">
                            <strong>Pro Tip:</strong> Check their audience's comments. Are they asking real questions? Engaging genuinely? That tells you more than follower count.
                        </div>
                    `
                },
                {
                    id: 'influencer-deals',
                    title: 'Structuring Influencer Deals',
                    content: `
                        <h2>Structuring Influencer Deals</h2>
                        <h3>Compensation Models</h3>
                        <ul>
                            <li><strong>Free product:</strong> For nano/micro influencers</li>
                            <li><strong>Flat fee:</strong> Fixed payment per post</li>
                            <li><strong>Affiliate/commission:</strong> % of sales they drive</li>
                            <li><strong>Hybrid:</strong> Smaller fee + commission</li>
                        </ul>
                        
                        <h3>What to Include in Agreement</h3>
                        <ul>
                            <li>Deliverables (posts, stories, videos)</li>
                            <li>Timeline and due dates</li>
                            <li>Content approval process</li>
                            <li>Usage rights (can you reuse their content?)</li>
                            <li>FTC disclosure requirements</li>
                            <li>Exclusivity period</li>
                        </ul>
                        
                        <h3>Pricing Guidelines</h3>
                        <div class="example">
                            <strong>Rough estimates (varies widely):</strong><br>
                            Nano: $50-250 per post<br>
                            Micro: $250-1,000 per post<br>
                            Mid-tier: $1,000-5,000 per post<br>
                            Macro: $5,000-20,000 per post
                        </div>
                        
                        <div class="highlight">
                            <strong>Start Small:</strong> Test with smaller influencers first. Learn what works before investing big budgets.
                        </div>
                    `
                },
                {
                    id: 'partnerships',
                    title: 'Strategic Partnerships & Affiliates',
                    content: `
                        <h2>Strategic Partnerships & Affiliates</h2>
                        <h3>Types of Partnerships</h3>
                        <ul>
                            <li><strong>Affiliate programs:</strong> Others promote you for commission</li>
                            <li><strong>Co-marketing:</strong> Joint campaigns with complementary brands</li>
                            <li><strong>Referral partnerships:</strong> Exchange referrals with related businesses</li>
                            <li><strong>Content collaborations:</strong> Guest posts, podcast swaps, joint webinars</li>
                        </ul>
                        
                        <h3>Finding Good Partners</h3>
                        <ul>
                            <li>Same target audience, different product</li>
                            <li>Complementary, not competitive</li>
                            <li>Similar values and quality standards</li>
                            <li>Mutual benefit (win-win)</li>
                        </ul>
                        
                        <h3>Affiliate Marketing Basics</h3>
                        <ul>
                            <li>Give partners unique tracking links</li>
                            <li>Offer competitive commissions (15-30%+)</li>
                            <li>Provide marketing materials</li>
                            <li>Pay reliably and on time</li>
                        </ul>
                        
                        <div class="example">
                            <strong>Partnership Example:</strong><br>
                            Fitness app partners with healthy meal delivery service. Both serve health-conscious customers but don't compete. They promote each other to their audiences—win-win.
                        </div>
                        
                        <div class="highlight">
                            <strong>Long-Term View:</strong> Best partnerships are relationships, not transactions. Invest in partners who share your values.
                        </div>
                    `
                }
            ],
            quiz: [
                {
                    question: 'Which type of influencer typically has the best ROI for most businesses?',
                    options: ['Mega influencers (1M+)', 'Macro influencers (500K-1M)', 'Micro influencers (10K-100K)', 'Celebrity influencers'],
                    correct: 2,
                    explanation: 'Micro influencers (10K-100K) typically offer the best ROI—they have high engagement, targeted audiences, and reasonable costs.'
                },
                {
                    question: 'What is more important than follower count when evaluating influencers?',
                    options: ['Their location', 'Engagement rate', 'How long they\'ve been posting', 'Their posting frequency'],
                    correct: 1,
                    explanation: 'Engagement rate shows how actively their audience interacts with their content. High followers with low engagement often indicates fake followers or disengaged audience.'
                },
                {
                    question: 'What makes a good strategic partnership?',
                    options: [
                        'Partnering with your biggest competitor',
                        'Finding someone with the same product',
                        'Same target audience, different product (complementary, not competitive)',
                        'The biggest brand you can find'
                    ],
                    correct: 2,
                    explanation: 'The best partnerships are with businesses that serve the same customers but offer different, complementary products—you help each other without competing.'
                }
            ]
        }
    ]
};
