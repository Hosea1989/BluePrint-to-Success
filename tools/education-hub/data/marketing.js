// Digital Marketing Curriculum Data
const marketingData = {
    id: 'marketing',
    title: 'Digital Marketing',
    icon: '📱',
    description: 'Learn to market your business or personal brand effectively online.',
    graduationGoal: 'Market your business or personal brand effectively',
    levels: [
        {
            id: 1,
            title: 'Marketing Fundamentals',
            subtitle: 'Understanding modern marketing',
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
                    question: 'Why is targeting a specific audience important?',
                    options: [
                        'To exclude potential customers',
                        'Because you can\'t afford to reach everyone anyway, and specific messaging resonates more',
                        'To seem exclusive',
                        'To avoid competition'
                    ],
                    correct: 1,
                    explanation: 'With limited resources, focused targeting makes your message more relevant and your budget more efficient. Specific messaging converts better than generic.'
                }
            ]
        },
        {
            id: 2,
            title: 'Content Marketing',
            subtitle: 'Creating valuable content that attracts customers',
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
                    id: 'social-media-strategy',
                    title: 'Social Media Strategy',
                    content: `
                        <h2>Social Media Strategy</h2>
                        <h3>Platform Selection</h3>
                        <ul>
                            <li><strong>Instagram:</strong> Visual brands, lifestyle, B2C</li>
                            <li><strong>LinkedIn:</strong> B2B, professional services</li>
                            <li><strong>TikTok:</strong> Entertainment, younger audience</li>
                            <li><strong>YouTube:</strong> Long-form, tutorials, SEO</li>
                            <li><strong>Twitter/X:</strong> News, tech, thought leadership</li>
                            <li><strong>Facebook:</strong> Local business, older demographics</li>
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
                    question: 'How many social media platforms should you focus on initially?',
                    options: ['All major platforms', '1-2 platforms to master', 'Only paid ads', 'Whatever is trending'],
                    correct: 1,
                    explanation: 'It\'s better to be great on 1-2 platforms than mediocre on five. Master your primary platforms before expanding.'
                }
            ]
        },
        {
            id: 3,
            title: 'SEO Basics',
            subtitle: 'Getting found in search engines',
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
                    question: 'What is retargeting?',
                    options: [
                        'Targeting new audiences',
                        'Showing ads to people who already visited your site',
                        'Setting new advertising goals',
                        'Changing your target market'
                    ],
                    correct: 1,
                    explanation: 'Retargeting shows ads to people who have already interacted with your brand. It\'s highly effective because they already know you.'
                }
            ]
        },
        {
            id: 5,
            title: 'Analytics and Optimization',
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
                            <li>Google Analytics</li>
                            <li>Google Search Console</li>
                            <li>Platform-specific insights</li>
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
                    explanation: 'Testing one variable at a time ensures you know exactly what caused any difference in performance. Multiple changes confuse results.'
                }
            ]
        }
    ]
};
