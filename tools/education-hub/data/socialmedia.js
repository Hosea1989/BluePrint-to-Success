// Social Media Growth Curriculum Data
const socialmediaData = {
    id: 'socialmedia',
    title: 'Social Media Growth',
    icon: '📱',
    description: 'Master social media strategy to build your brand, grow your audience, and drive real results.',
    graduationGoal: 'Build and execute a social media strategy that grows a real audience',
    difficulty: 'beginner',
    prerequisites: [],
    learningObjectives: [
        'Develop a social media strategy for your brand',
        'Create engaging content that grows your audience',
        'Use analytics to measure and optimize performance',
        'Build authentic engagement and community',
        'Monetize your social media presence'
    ],
    relatedTracks: ['marketing', 'business', 'clothingbrand'],
    resources: [
        { title: 'Hootsuite - Social Media Resources', url: 'https://blog.hootsuite.com/' },
        { title: 'Buffer - Social Media Guide', url: 'https://buffer.com/library' }
    ],
    levels: [
        {
            id: 1,
            title: 'Social Media Foundations',
            subtitle: 'Understanding platforms and building your strategy',
            topics: [
                {
                    id: 'why-social-media',
                    title: 'Why Social Media Matters',
                    content: `
                        <h2>Why Social Media Matters</h2>
                        <p>Social media isn't just posting pictures — it's one of the most powerful tools for building a personal brand, growing a business, or creating opportunities. Over 4.9 billion people use social media worldwide.</p>
                        <h3>What Social Media Can Do For You</h3>
                        <ul>
                            <li><strong>Build brand awareness:</strong> Get your name and message in front of thousands</li>
                            <li><strong>Connect with your audience:</strong> Direct conversations with customers, fans, or followers</li>
                            <li><strong>Drive traffic and sales:</strong> Send people to your website, store, or product</li>
                            <li><strong>Establish authority:</strong> Position yourself as an expert in your field</li>
                            <li><strong>Generate income:</strong> Brand deals, affiliate marketing, product sales, coaching</li>
                        </ul>
                        <h3>Personal Brand vs Business Brand</h3>
                        <ul>
                            <li><strong>Personal brand:</strong> You are the brand. Your face, name, and expertise. More flexible and relatable.</li>
                            <li><strong>Business brand:</strong> A company identity. More scalable but harder to build trust initially.</li>
                            <li><strong>Best approach:</strong> Many successful businesses are built on the founder's personal brand first.</li>
                        </ul>
                    `,
                    quiz: {
                        question: 'What is one of the biggest advantages of building a personal brand on social media?',
                        options: [
                            'You never have to post consistently',
                            'It is more relatable and flexible than a faceless business brand',
                            'Personal brands don\'t need any strategy',
                            'You can only do it if you\'re already famous'
                        ],
                        correct: 1
                    }
                },
                {
                    id: 'choosing-platforms',
                    title: 'Choosing the Right Platforms',
                    content: `
                        <h2>Choosing the Right Platforms</h2>
                        <p>You don't need to be on every platform. Focus on 1-2 where your audience actually spends time.</p>
                        <h3>Platform Breakdown</h3>
                        <ul>
                            <li><strong>Instagram:</strong> Visual content, lifestyle brands, 25-44 age range. Reels are the #1 growth tool. Best for fashion, food, fitness, beauty, and creative businesses.</li>
                            <li><strong>TikTok:</strong> Short-form video, massive organic reach, Gen Z to millennials. Best for entertainment, education, and showing personality. Easiest platform to go viral.</li>
                            <li><strong>YouTube:</strong> Long-form video, evergreen content, all ages. Best for tutorials, vlogs, reviews. Hardest to grow but highest long-term value per subscriber.</li>
                            <li><strong>LinkedIn:</strong> Professional networking, B2B, thought leadership. Best for consultants, coaches, career content, and professional services.</li>
                            <li><strong>Twitter/X:</strong> Text-based, real-time conversation, tech and media. Best for commentary, networking, and building authority in niche topics.</li>
                        </ul>
                        <h3>How to Choose</h3>
                        <ol>
                            <li>Where does your target audience spend time?</li>
                            <li>What type of content do you enjoy creating?</li>
                            <li>What are your goals (brand awareness, sales, community)?</li>
                        </ol>
                        <div class="highlight">
                            <strong>Strategy:</strong> Master one platform first. Once you have a system and consistent results, expand to a second platform by repurposing content.
                        </div>
                    `,
                    quiz: {
                        question: 'Which platform currently offers the easiest organic reach for new creators?',
                        options: ['LinkedIn', 'Facebook', 'TikTok', 'Pinterest'],
                        correct: 2
                    }
                },
                {
                    id: 'content-pillars',
                    title: 'Content Pillars & Strategy',
                    content: `
                        <h2>Content Pillars & Strategy</h2>
                        <p>Random posting doesn't grow accounts. You need a content strategy built around 3-5 content pillars — recurring themes that your audience expects from you.</p>
                        <h3>What Are Content Pillars?</h3>
                        <p>Content pillars are the core topics you consistently create content around. They keep your feed cohesive and help your audience know what to expect.</p>
                        <h3>Example: Fitness Coach</h3>
                        <ul>
                            <li><strong>Pillar 1:</strong> Workout tutorials and form tips</li>
                            <li><strong>Pillar 2:</strong> Nutrition and meal prep</li>
                            <li><strong>Pillar 3:</strong> Client transformations and testimonials</li>
                            <li><strong>Pillar 4:</strong> Personal life and behind-the-scenes</li>
                        </ul>
                        <h3>Content Types</h3>
                        <ul>
                            <li><strong>Educational:</strong> Teach something valuable (tips, tutorials, how-tos)</li>
                            <li><strong>Entertaining:</strong> Make people laugh or feel something (trends, relatable content)</li>
                            <li><strong>Inspirational:</strong> Motivate and share success stories</li>
                            <li><strong>Promotional:</strong> Sell your product or service (keep to 20% or less of content)</li>
                        </ul>
                        <div class="highlight">
                            <strong>The 80/20 Rule:</strong> 80% of your content should provide value (educate, entertain, inspire). 20% can be promotional. Give before you ask.
                        </div>
                    `,
                    quiz: {
                        question: 'What percentage of your content should be promotional according to the 80/20 rule?',
                        options: ['80%', '50%', '20%', '0%'],
                        correct: 2
                    }
                }
            ]
        },
        {
            id: 2,
            title: 'Growth Tactics',
            subtitle: 'Proven strategies to grow your following and engagement',
            topics: [
                {
                    id: 'algorithm-basics',
                    title: 'How Algorithms Work',
                    content: `
                        <h2>How Algorithms Work</h2>
                        <p>Every platform uses an algorithm to decide who sees your content. Understanding algorithms is key to growth.</p>
                        <h3>What Algorithms Measure</h3>
                        <ul>
                            <li><strong>Engagement rate:</strong> Likes, comments, shares, saves relative to your reach</li>
                            <li><strong>Watch time:</strong> How long people watch your video (especially on TikTok/Reels)</li>
                            <li><strong>Shares and saves:</strong> Weighted more heavily than likes on most platforms</li>
                            <li><strong>Speed of engagement:</strong> How quickly your post gets interaction after posting</li>
                            <li><strong>Profile visits:</strong> Do people click to your profile after seeing your content?</li>
                        </ul>
                        <h3>How to Work With the Algorithm</h3>
                        <ul>
                            <li><strong>Hook in the first 1-3 seconds:</strong> Grab attention immediately or people scroll past</li>
                            <li><strong>Post when your audience is active:</strong> Check your analytics for peak times</li>
                            <li><strong>Encourage saves and shares:</strong> Create content people want to come back to</li>
                            <li><strong>Reply to comments quickly:</strong> Engagement begets more engagement</li>
                            <li><strong>Be consistent:</strong> Algorithms favor accounts that post regularly</li>
                        </ul>
                        <div class="highlight">
                            <strong>Key Insight:</strong> The algorithm isn't against you — it shows your content to a small test audience first, and if they engage, it shows it to more people. Your job is to make that first group care.
                        </div>
                    `,
                    quiz: {
                        question: 'Which engagement metric do most algorithms weight most heavily?',
                        options: [
                            'Number of followers',
                            'Shares and saves',
                            'Number of posts per day',
                            'How old your account is'
                        ],
                        correct: 1
                    }
                },
                {
                    id: 'hashtags-seo',
                    title: 'Hashtags & Social SEO',
                    content: `
                        <h2>Hashtags & Social SEO</h2>
                        <p>Getting discovered on social media increasingly works like search engines. Hashtags and keywords help new people find your content.</p>
                        <h3>Hashtag Strategy</h3>
                        <ul>
                            <li><strong>Mix sizes:</strong> Use a combination of large (1M+ posts), medium (100K-1M), and small/niche (under 100K) hashtags</li>
                            <li><strong>Be specific:</strong> #FitnessForBeginners is better than #Fitness</li>
                            <li><strong>Rotate hashtags:</strong> Don't use the same 30 hashtags every post</li>
                            <li><strong>Instagram:</strong> 5-15 relevant hashtags. Quality over quantity.</li>
                            <li><strong>TikTok:</strong> 3-5 hashtags in the caption or spoken in the video</li>
                        </ul>
                        <h3>Social SEO</h3>
                        <p>Platforms are becoming search engines. People search TikTok and Instagram like they search Google.</p>
                        <ul>
                            <li><strong>Use keywords in your captions:</strong> Write like someone would search for your content</li>
                            <li><strong>Optimize your bio:</strong> Include keywords that describe what you do</li>
                            <li><strong>Alt text:</strong> Add descriptive alt text to images on Instagram</li>
                            <li><strong>Spoken keywords:</strong> Say keywords out loud in videos — platforms transcribe audio</li>
                        </ul>
                    `,
                    quiz: {
                        question: 'Why is using spoken keywords in videos helpful for social media growth?',
                        options: [
                            'It makes the video longer',
                            'Platforms transcribe audio and use it for search and discovery',
                            'It makes you sound more professional',
                            'It replaces the need for hashtags'
                        ],
                        correct: 1
                    }
                },
                {
                    id: 'engagement-growth',
                    title: 'Growing Engagement',
                    content: `
                        <h2>Growing Engagement</h2>
                        <p>Followers mean nothing without engagement. 1,000 engaged followers are worth more than 100,000 passive ones.</p>
                        <h3>Engagement Tactics</h3>
                        <ul>
                            <li><strong>Ask questions:</strong> End captions with a question to spark comments</li>
                            <li><strong>Create shareable content:</strong> Infographics, relatable memes, valuable tips that people forward to friends</li>
                            <li><strong>Use calls-to-action (CTAs):</strong> "Save this for later," "Tag someone who needs this," "Drop a 🔥 if you agree"</li>
                            <li><strong>Go live:</strong> Live streams get priority in algorithms and build real connection</li>
                            <li><strong>Engage first:</strong> Spend 15 minutes before and after posting engaging with others in your niche</li>
                        </ul>
                        <h3>Collaborations</h3>
                        <ul>
                            <li><strong>Collab posts:</strong> Instagram lets you co-author posts that appear on both profiles</li>
                            <li><strong>Duets and stitches:</strong> React to or build on other creators' TikTok content</li>
                            <li><strong>Guest appearances:</strong> Go live together or appear in each other's content</li>
                            <li><strong>Giveaways:</strong> Partner with other creators for a combined audience giveaway</li>
                        </ul>
                    `,
                    quiz: {
                        question: 'Why are 1,000 engaged followers more valuable than 100,000 passive ones?',
                        options: [
                            'Engaged followers actually interact, share, and buy — driving real results',
                            'Passive followers cost more money to maintain',
                            'Social platforms delete passive followers',
                            'Brands only count followers under 10,000'
                        ],
                        correct: 0
                    }
                }
            ]
        },
        {
            id: 3,
            title: 'Monetization & Analytics',
            subtitle: 'Turn your audience into income and track what works',
            topics: [
                {
                    id: 'monetization-methods',
                    title: 'Monetizing Your Audience',
                    content: `
                        <h2>Monetizing Your Audience</h2>
                        <p>Once you have an engaged audience, there are multiple ways to generate income.</p>
                        <h3>Revenue Streams</h3>
                        <ul>
                            <li><strong>Brand deals / Sponsorships:</strong> Companies pay you to promote their products. Rates: $100-$1,000+ per 10K followers depending on niche and engagement.</li>
                            <li><strong>Affiliate marketing:</strong> Share product links and earn commission on sales (Amazon Associates, ShareASale, brand-specific programs).</li>
                            <li><strong>Your own products:</strong> Sell merch, courses, ebooks, coaching, or services. Highest profit margins.</li>
                            <li><strong>Platform monetization:</strong> TikTok Creator Fund, YouTube AdSense, Instagram bonuses.</li>
                            <li><strong>User-generated content (UGC):</strong> Create content for brands to use in their ads — doesn't require a large following.</li>
                        </ul>
                        <h3>When to Start Monetizing</h3>
                        <ul>
                            <li><strong>UGC:</strong> You can start immediately, even with 0 followers</li>
                            <li><strong>Affiliate links:</strong> Start at any follower count</li>
                            <li><strong>Brand deals:</strong> Usually need 1,000+ engaged followers minimum</li>
                            <li><strong>Your own products:</strong> Start when you understand your audience's needs</li>
                        </ul>
                        <div class="highlight">
                            <strong>Best Strategy:</strong> Build an email list from social media. Social platforms can change algorithms or ban accounts. Your email list is the one audience you truly own.
                        </div>
                    `,
                    quiz: {
                        question: 'Which monetization method can you start with zero followers?',
                        options: [
                            'Brand deals with major companies',
                            'YouTube AdSense',
                            'User-generated content (UGC) creation for brands',
                            'Platform Creator Fund payments'
                        ],
                        correct: 2
                    }
                },
                {
                    id: 'analytics-tracking',
                    title: 'Analytics & Metrics',
                    content: `
                        <h2>Analytics & Metrics</h2>
                        <p>What gets measured gets improved. Understanding your analytics tells you what's working and what to do more of.</p>
                        <h3>Key Metrics to Track</h3>
                        <ul>
                            <li><strong>Follower growth rate:</strong> How fast your audience is growing (week over week)</li>
                            <li><strong>Engagement rate:</strong> (Likes + Comments + Shares + Saves) / Reach × 100. Good rate: 3-6%.</li>
                            <li><strong>Reach:</strong> How many unique accounts see your content</li>
                            <li><strong>Impressions:</strong> Total number of times your content was displayed</li>
                            <li><strong>Click-through rate:</strong> How many people click your links</li>
                            <li><strong>Saves and shares:</strong> The strongest signals of valuable content</li>
                        </ul>
                        <h3>How to Use Analytics</h3>
                        <ul>
                            <li>Review your top-performing posts weekly — what do they have in common?</li>
                            <li>Note your best posting times and days</li>
                            <li>Track which content pillars get the most engagement</li>
                            <li>Double down on what works, iterate on what doesn't</li>
                        </ul>
                        <h3>Tools</h3>
                        <ul>
                            <li>Built-in platform analytics (Instagram Insights, TikTok Analytics)</li>
                            <li>Notion or Google Sheets for tracking trends over time</li>
                            <li>Later or Hootsuite for scheduling and deeper analytics</li>
                        </ul>
                    `,
                    quiz: {
                        question: 'What is considered a good engagement rate on social media?',
                        options: ['0.1-0.5%', '3-6%', '50-75%', '100%'],
                        correct: 1
                    }
                },
                {
                    id: 'content-creation-workflow',
                    title: 'Content Creation Workflow',
                    content: `
                        <h2>Content Creation Workflow</h2>
                        <p>Consistency is the #1 factor in social media growth. A repeatable workflow makes consistency sustainable.</p>
                        <h3>Batch Content Creation</h3>
                        <p>Instead of creating one post at a time, batch similar tasks together:</p>
                        <ol>
                            <li><strong>Ideation day:</strong> Brainstorm 2-4 weeks of content ideas</li>
                            <li><strong>Creation day:</strong> Film/design multiple pieces of content in one session</li>
                            <li><strong>Editing day:</strong> Edit all content in one sitting</li>
                            <li><strong>Scheduling:</strong> Use tools to schedule posts in advance</li>
                        </ol>
                        <h3>Content Repurposing</h3>
                        <p>One piece of content can become many:</p>
                        <ul>
                            <li>A YouTube video → 3-5 TikTok/Reels clips</li>
                            <li>A Twitter thread → an Instagram carousel</li>
                            <li>A podcast episode → audiogram clips + blog post</li>
                            <li>A long caption → email newsletter content</li>
                        </ul>
                        <h3>Recommended Posting Frequency</h3>
                        <ul>
                            <li><strong>TikTok:</strong> 1-3x per day for maximum growth</li>
                            <li><strong>Instagram Reels:</strong> 4-7x per week</li>
                            <li><strong>Instagram Feed:</strong> 3-5x per week</li>
                            <li><strong>YouTube:</strong> 1-2x per week</li>
                            <li><strong>LinkedIn:</strong> 3-5x per week</li>
                        </ul>
                        <div class="highlight">
                            <strong>Sustainability Tip:</strong> It's better to post 3x/week consistently for a year than to post daily for a month and burn out. Find a pace you can maintain.
                        </div>
                    `,
                    quiz: {
                        question: 'What is the main benefit of batch content creation?',
                        options: [
                            'It makes each post higher quality',
                            'It makes consistency sustainable by grouping similar tasks',
                            'It eliminates the need for editing',
                            'It guarantees viral content'
                        ],
                        correct: 1
                    }
                }
            ]
        }
    ],
    finalExam: [
        {
            question: 'What should you focus on before expanding to multiple platforms?',
            options: ['Being on every platform simultaneously', 'Mastering one platform first', 'Only posting on weekends', 'Deleting your accounts and starting over'],
            correct: 1
        },
        {
            question: 'What are content pillars?',
            options: ['Physical structures that hold up buildings', 'The 3-5 core topics you consistently create content around', 'Types of social media accounts', 'The number of hashtags you use'],
            correct: 1
        },
        {
            question: 'What does the algorithm show your content to first?',
            options: ['Everyone on the platform at once', 'A small test audience, then expands based on engagement', 'Only people who have liked your previous posts', 'Random accounts in other countries'],
            correct: 1
        },
        {
            question: 'What is the 80/20 rule in social media content?',
            options: ['80% selfies, 20% products', '80% value content, 20% promotional', '80% hashtags, 20% content', '80% followers, 20% following'],
            correct: 1
        },
        {
            question: 'Why should you build an email list from social media?',
            options: ['Email is the only marketing channel', 'You own your email list — platforms can change algorithms or ban accounts', 'Email gets 100% open rates', 'Social media doesn\'t allow links'],
            correct: 1
        },
        {
            question: 'A good engagement rate on Instagram is:',
            options: ['0.01%', '3-6%', '50%+', '100%'],
            correct: 1
        },
        {
            question: 'What is UGC?',
            options: ['Universal Growth Calculator', 'User-Generated Content created for brands', 'Unlimited Guaranteed Conversions', 'User Group Chat'],
            correct: 1
        },
        {
            question: 'What is content repurposing?',
            options: ['Deleting old content', 'Turning one piece of content into multiple formats for different platforms', 'Copying other creators\' content', 'Posting the same exact content everywhere'],
            correct: 1
        }
    ]
};
