// Starting a Business Curriculum Data
const businessData = {
    id: 'business',
    title: 'Starting a Business',
    icon: '🏢',
    description: 'Learn how to legally form, fund, and launch your own business.',
    graduationGoal: 'Ready to legally form and launch your business',
    difficulty: 'intermediate',
    prerequisites: ['personalfinance'],
    learningObjectives: [
        'Choose the right business structure (LLC, corporation, sole proprietorship)',
        'Register your business legally',
        'Secure funding and manage business finances',
        'Create a business plan and launch strategy',
        'Navigate legal requirements and compliance'
    ],
    relatedTracks: ['freelancing', 'marketing', 'taxes', 'negotiation'],
    resources: [
        { title: 'SBA - Starting a Business', url: 'https://www.sba.gov/business-guide/launch-your-business' },
        { title: 'IRS - Business Structures', url: 'https://www.irs.gov/businesses/small-businesses-self-employed/business-structures' }
    ],
    levels: [
        {
            id: 1,
            title: 'Business Fundamentals',
            subtitle: 'Understanding business structures',
            topics: [
                {
                    id: 'business-structures',
                    title: 'Types of Business Structures',
                    content: `
                        <h2>Types of Business Structures</h2>
                        <h3>Sole Proprietorship</h3>
                        <ul>
                            <li>Simplest structure—you ARE the business</li>
                            <li>No separation between personal and business</li>
                            <li><strong>Con:</strong> You're personally liable for everything</li>
                            <li>Good for testing an idea, not for serious business</li>
                        </ul>
                        <h3>LLC (Limited Liability Company)</h3>
                        <ul>
                            <li>Separates personal and business assets</li>
                            <li>Pass-through taxation (profits taxed as personal income)</li>
                            <li>Flexible management structure</li>
                            <li><strong>Best for most small businesses</strong></li>
                        </ul>
                        <h3>S-Corp</h3>
                        <ul>
                            <li>Can save on self-employment taxes</li>
                            <li>Pay yourself "reasonable salary" + distributions</li>
                            <li>More complex than LLC</li>
                            <li>Consider when profit exceeds ~$50k</li>
                        </ul>
                        <h3>C-Corp</h3>
                        <ul>
                            <li>Separate tax entity (double taxation)</li>
                            <li>Required for venture capital funding</li>
                            <li>Most complex structure</li>
                            <li>Typically for larger, investor-funded businesses</li>
                        </ul>
                        <div class="highlight">
                            <strong>Recommendation:</strong> Most people should start with an LLC. It protects your personal assets and is simple to set up.
                        </div>
                    `
                },
                {
                    id: 'business-idea-types',
                    title: 'Types of Businesses You Can Start',
                    content: `
                        <h2>Types of Businesses You Can Start</h2>
                        <h3>Service Businesses (Lowest Startup Cost)</h3>
                        <ul>
                            <li>Consulting, coaching, freelancing</li>
                            <li>Cleaning, landscaping, handyman</li>
                            <li>Tutoring, personal training</li>
                            <li><strong>Startup cost:</strong> $0-500</li>
                        </ul>
                        <h3>Product Businesses</h3>
                        <ul>
                            <li>E-commerce (Shopify, Etsy)</li>
                            <li>Print-on-demand (no inventory)</li>
                            <li>Dropshipping</li>
                            <li>Physical products (higher capital needed)</li>
                            <li><strong>Startup cost:</strong> $500-10,000</li>
                        </ul>
                        <h3>Digital Businesses</h3>
                        <ul>
                            <li>Online courses and digital products</li>
                            <li>Software/apps (SaaS)</li>
                            <li>Content creation (YouTube, podcasting)</li>
                            <li>Affiliate marketing</li>
                            <li><strong>Startup cost:</strong> $0-2,000</li>
                        </ul>
                        <h3>Franchise & Existing Businesses</h3>
                        <ul>
                            <li>Buy an existing business (proven model)</li>
                            <li>Franchise (brand recognition + systems)</li>
                            <li><strong>Startup cost:</strong> $10,000-500,000+</li>
                        </ul>
                        <div class="highlight">
                            <strong>Best First Business:</strong> Service-based. Low risk, fast cash flow, builds skills. You can always scale into products later.
                        </div>
                    `
                },
                {
                    id: 'choosing-structure',
                    title: 'Choosing the Right Structure',
                    content: `
                        <h2>Choosing the Right Structure</h2>
                        <h3>Questions to Ask</h3>
                        <ol>
                            <li>Do I need liability protection? (Yes → LLC or Corp)</li>
                            <li>Will I have partners? (Consider Operating Agreement)</li>
                            <li>Do I need investors? (C-Corp for VC)</li>
                            <li>How much profit do I expect? (S-Corp for $50k+)</li>
                        </ol>
                        <h3>Decision Tree</h3>
                        <div class="example">
                            Just testing an idea? → Sole Prop (for now)<br>
                            Real business, any liability risk? → LLC<br>
                            Making $50k+ profit? → LLC with S-Corp election<br>
                            Seeking investors? → C-Corp (Delaware)
                        </div>
                        <h3>State Considerations</h3>
                        <ul>
                            <li><strong>Your state:</strong> Usually best for simplicity</li>
                            <li><strong>Delaware:</strong> Best for C-Corps seeking investors</li>
                            <li><strong>Wyoming/Nevada:</strong> No state income tax, privacy</li>
                        </ul>
                        <div class="highlight">
                            <strong>Note:</strong> You can always change structures later. Start simple (LLC) and evolve as needed.
                        </div>
                    `
                }
            ],
            quiz: [
                {
                    question: 'Which business structure offers liability protection and is easiest to set up?',
                    options: ['Sole Proprietorship', 'LLC', 'C-Corp', 'Partnership'],
                    correct: 1,
                    explanation: 'LLCs provide personal liability protection while being relatively simple to form and maintain. They\'re ideal for most small businesses.'
                },
                {
                    question: 'What is the main disadvantage of a sole proprietorship?',
                    options: [
                        'High taxes',
                        'You\'re personally liable for all business debts',
                        'Complex paperwork',
                        'Requires a board of directors'
                    ],
                    correct: 1,
                    explanation: 'In a sole proprietorship, there\'s no legal separation between you and the business. If the business is sued or has debt, your personal assets are at risk.'
                },
                {
                    question: 'When should you consider electing S-Corp status?',
                    options: [
                        'When starting out',
                        'When seeking venture capital',
                        'When profits exceed roughly $50,000',
                        'When you have employees'
                    ],
                    correct: 2,
                    explanation: 'S-Corp election can save on self-employment taxes when profits are high enough. The break-even point is typically around $50,000+ in profit.'
                }
            ]
        },
        {
            id: 2,
            title: 'Business Planning',
            subtitle: 'From idea to actionable plan',
            topics: [
                {
                    id: 'validating-idea',
                    title: 'Validating Your Business Idea',
                    content: `
                        <h2>Validating Your Business Idea</h2>
                        <h3>Before You Invest Time/Money</h3>
                        <ul>
                            <li>Is there a real problem you're solving?</li>
                            <li>Are people willing to pay for the solution?</li>
                            <li>Can you reach these customers affordably?</li>
                            <li>Is the market big enough?</li>
                        </ul>
                        <h3>Validation Methods</h3>
                        <ol>
                            <li><strong>Talk to potential customers:</strong> 10-20 conversations minimum</li>
                            <li><strong>Pre-sell:</strong> Get commitments before building</li>
                            <li><strong>Landing page test:</strong> See if people sign up</li>
                            <li><strong>MVP:</strong> Build the simplest version and test</li>
                        </ol>
                        <h3>Questions to Ask Customers</h3>
                        <ul>
                            <li>What's your biggest challenge with [problem]?</li>
                            <li>How are you currently solving it?</li>
                            <li>What would make a solution worth paying for?</li>
                            <li>How much do you currently spend on this?</li>
                        </ul>
                        <div class="highlight">
                            <strong>Warning:</strong> Don't ask "Would you buy this?" People say yes to be nice. Ask about their current behavior and problems instead.
                        </div>
                    `
                },
                {
                    id: 'market-research',
                    title: 'Basic Market Research',
                    content: `
                        <h2>Basic Market Research</h2>
                        <h3>Know Your Market</h3>
                        <ul>
                            <li><strong>TAM:</strong> Total Addressable Market (everyone who COULD buy)</li>
                            <li><strong>SAM:</strong> Serviceable Available Market (who you CAN reach)</li>
                            <li><strong>SOM:</strong> Serviceable Obtainable Market (realistic first target)</li>
                        </ul>
                        <h3>Free Research Methods</h3>
                        <ul>
                            <li><strong>Google Trends:</strong> Is demand growing or shrinking?</li>
                            <li><strong>Reddit/Forums:</strong> What are people complaining about?</li>
                            <li><strong>Amazon reviews:</strong> Read competitor product reviews (complaints = opportunities)</li>
                            <li><strong>Facebook groups:</strong> Join groups in your target market</li>
                            <li><strong>Competitor websites:</strong> What do they offer? What's missing?</li>
                        </ul>
                        <h3>Competitive Analysis</h3>
                        <ul>
                            <li>Who are the top 3-5 competitors?</li>
                            <li>What do they charge?</li>
                            <li>What do customers love/hate about them?</li>
                            <li>What gap can you fill?</li>
                        </ul>
                        <div class="highlight">
                            <strong>Competition is Good:</strong> If no one else is doing it, there might be no market. Competitors validate demand. Your job is to be different, not first.
                        </div>
                    `
                },
                {
                    id: 'business-plan-basics',
                    title: 'Creating a Simple Business Plan',
                    content: `
                        <h2>Creating a Simple Business Plan</h2>
                        <h3>One-Page Business Plan</h3>
                        <ol>
                            <li><strong>Problem:</strong> What pain point are you solving?</li>
                            <li><strong>Solution:</strong> How do you solve it?</li>
                            <li><strong>Target Customer:</strong> Who specifically?</li>
                            <li><strong>Revenue Model:</strong> How will you make money?</li>
                            <li><strong>Marketing:</strong> How will you reach customers?</li>
                            <li><strong>Costs:</strong> What will it cost to run?</li>
                            <li><strong>Milestones:</strong> First 3 goals</li>
                        </ol>
                        <h3>Don't Overthink It</h3>
                        <p>A 50-page business plan won't help. You need:</p>
                        <ul>
                            <li>Clarity on what you're building</li>
                            <li>Understanding of your customer</li>
                            <li>Basic financial projections</li>
                            <li>A plan to get first customers</li>
                        </ul>
                        <div class="highlight">
                            <strong>Reality:</strong> Your plan will change constantly. The goal is to start with a hypothesis and test it, not to predict the future perfectly.
                        </div>
                    `
                }
            ],
            quiz: [
                {
                    question: 'What is the best way to validate a business idea?',
                    options: [
                        'Ask friends if they like it',
                        'Talk to potential customers about their problems and current solutions',
                        'Write a detailed business plan',
                        'Quit your job and go all-in'
                    ],
                    correct: 1,
                    explanation: 'Talking to real potential customers about their problems (not your solution) is the best validation. You need to understand if the problem is real and worth paying to solve.'
                },
                {
                    question: 'What is an MVP?',
                    options: [
                        'Most Valuable Player',
                        'Maximum Value Product',
                        'Minimum Viable Product - the simplest version to test',
                        'Marketing Value Proposition'
                    ],
                    correct: 2,
                    explanation: 'MVP (Minimum Viable Product) is the simplest version of your product that lets you test with real customers and learn from feedback.'
                }
            ]
        },
        {
            id: 3,
            title: 'Funding Options',
            subtitle: 'How to finance your business',
            topics: [
                {
                    id: 'bootstrapping',
                    title: 'Bootstrapping Your Business',
                    content: `
                        <h2>Bootstrapping Your Business</h2>
                        <div class="definition">
                            <strong>Bootstrapping:</strong> Building a business using your own resources without external funding.
                        </div>
                        <h3>Advantages</h3>
                        <ul>
                            <li>You keep 100% ownership</li>
                            <li>No debt or investor pressure</li>
                            <li>Forces you to be profitable</li>
                            <li>You learn every aspect of the business</li>
                        </ul>
                        <h3>How to Bootstrap</h3>
                        <ul>
                            <li>Start while employed (side project)</li>
                            <li>Keep expenses minimal</li>
                            <li>Get customers before building</li>
                            <li>Use free tools (Google Workspace, Canva, etc.)</li>
                            <li>Reinvest all profits</li>
                        </ul>
                        <h3>How Much to Save First</h3>
                        <div class="example">
                            6 months expenses (personal) +<br>
                            Estimated startup costs +<br>
                            Buffer for surprises<br>
                            = <strong>Your runway</strong>
                        </div>
                        <div class="highlight">
                            <strong>Best Path:</strong> Start as a side project, validate, get paying customers, then quit your job when revenue can replace your salary.
                        </div>
                    `
                },
                {
                    id: 'business-finances',
                    title: 'Business Finance Basics',
                    content: `
                        <h2>Business Finance Basics</h2>
                        <h3>Revenue vs. Profit</h3>
                        <ul>
                            <li><strong>Revenue:</strong> Total money coming in (top line)</li>
                            <li><strong>Expenses:</strong> What it costs to run</li>
                            <li><strong>Profit:</strong> Revenue - Expenses (bottom line)</li>
                            <li>Revenue is vanity, profit is sanity</li>
                        </ul>
                        <h3>Key Financial Statements</h3>
                        <ul>
                            <li><strong>Profit & Loss (P&L):</strong> Revenue and expenses over time</li>
                            <li><strong>Balance Sheet:</strong> What you own vs. what you owe</li>
                            <li><strong>Cash Flow Statement:</strong> Money moving in and out</li>
                        </ul>
                        <h3>Cash Flow Is King</h3>
                        <ul>
                            <li>Profitable businesses fail due to cash flow problems</li>
                            <li>Invoice promptly and follow up on payments</li>
                            <li>Keep 3-6 months expenses as business reserve</li>
                            <li>Watch for seasonal patterns</li>
                        </ul>
                        <h3>Pricing Your Product/Service</h3>
                        <ul>
                            <li>Cost-plus: Calculate all costs + desired profit margin</li>
                            <li>Market-based: Match or undercut competitors</li>
                            <li>Value-based: Price based on value to customer</li>
                        </ul>
                        <div class="highlight">
                            <strong>Rule #1:</strong> Know your numbers. Review your P&L monthly. Businesses that track finances closely survive; those that don't, fail.
                        </div>
                    `
                },
                {
                    id: 'external-funding',
                    title: 'External Funding Options',
                    content: `
                        <h2>External Funding Options</h2>
                        <h3>Small Business Loans</h3>
                        <ul>
                            <li><strong>SBA Loans:</strong> Government-backed, lower rates</li>
                            <li><strong>Bank loans:</strong> Require good credit, collateral</li>
                            <li><strong>Online lenders:</strong> Faster but higher rates</li>
                        </ul>
                        <h3>Grants</h3>
                        <ul>
                            <li>Don't have to be repaid</li>
                            <li>Competitive application process</li>
                            <li>Check SBA.gov, Grants.gov, state programs</li>
                            <li>Many for minority/women-owned businesses</li>
                        </ul>
                        <h3>Angel Investors</h3>
                        <ul>
                            <li>High-net-worth individuals</li>
                            <li>Invest $25,000-500,000 typically</li>
                            <li>Take equity (ownership) in exchange</li>
                            <li>Often provide mentorship</li>
                        </ul>
                        <h3>Venture Capital</h3>
                        <ul>
                            <li>For high-growth startups</li>
                            <li>Invest $500,000+ usually</li>
                            <li>Expect 10x+ return</li>
                            <li>You give up significant control</li>
                        </ul>
                        <div class="highlight">
                            <strong>Reality:</strong> Most small businesses don't need investors. Bootstrap or use small loans. Only take VC if building a billion-dollar company.
                        </div>
                    `
                }
            ],
            quiz: [
                {
                    question: 'What is bootstrapping?',
                    options: [
                        'Getting a large bank loan',
                        'Building a business with your own resources, no outside funding',
                        'Selling equity to investors',
                        'Applying for government grants'
                    ],
                    correct: 1,
                    explanation: 'Bootstrapping means building your business using your own money and revenue, without taking outside investment or loans.'
                },
                {
                    question: 'Which funding source does NOT require giving up ownership?',
                    options: ['Angel investment', 'Venture capital', 'Grants', 'Equity crowdfunding'],
                    correct: 2,
                    explanation: 'Grants are free money that doesn\'t need to be repaid and doesn\'t require giving up ownership. They\'re competitive but worth pursuing.'
                }
            ]
        },
        {
            id: 4,
            title: 'Legal and Compliance',
            subtitle: 'Setting up your business properly',
            topics: [
                {
                    id: 'forming-business',
                    title: 'Steps to Form Your Business',
                    content: `
                        <h2>Steps to Form Your Business</h2>
                        <h3>1. Choose Your Business Name</h3>
                        <ul>
                            <li>Check state business name database</li>
                            <li>Check domain availability</li>
                            <li>Check trademark database (USPTO)</li>
                        </ul>
                        <h3>2. Register Your Business</h3>
                        <ul>
                            <li>File Articles of Organization (LLC)</li>
                            <li>File with Secretary of State</li>
                            <li>Pay filing fee ($50-500 depending on state)</li>
                        </ul>
                        <h3>3. Get Your EIN</h3>
                        <ul>
                            <li>Free from IRS (IRS.gov)</li>
                            <li>Needed for bank accounts, taxes, hiring</li>
                            <li>Like a Social Security number for business</li>
                        </ul>
                        <h3>4. Operating Agreement</h3>
                        <ul>
                            <li>Defines how business operates</li>
                            <li>Required for multi-member LLCs</li>
                            <li>Recommended even for single-member</li>
                        </ul>
                        <h3>5. Business Bank Account</h3>
                        <ul>
                            <li>NEVER mix personal and business money</li>
                            <li>Protects your liability protection</li>
                            <li>Makes taxes easier</li>
                        </ul>
                        <div class="highlight">
                            <strong>DIY vs Lawyer:</strong> You can form an LLC yourself for $50-200. Use LegalZoom, ZenBusiness, or your state's website. Save lawyer for complex situations.
                        </div>
                    `
                },
                {
                    id: 'licenses-insurance',
                    title: 'Licenses and Insurance',
                    content: `
                        <h2>Licenses and Insurance</h2>
                        <h3>Business Licenses</h3>
                        <ul>
                            <li><strong>Business license:</strong> Check city/county requirements</li>
                            <li><strong>Professional licenses:</strong> For regulated industries</li>
                            <li><strong>Sales tax permit:</strong> If selling goods</li>
                            <li><strong>Home occupation permit:</strong> If working from home</li>
                        </ul>
                        <h3>Insurance You May Need</h3>
                        <ul>
                            <li><strong>General Liability:</strong> Protects against lawsuits</li>
                            <li><strong>Professional Liability:</strong> For service businesses</li>
                            <li><strong>Workers' Comp:</strong> Required if you have employees</li>
                            <li><strong>Business Property:</strong> For equipment, inventory</li>
                        </ul>
                        <h3>Contracts</h3>
                        <ul>
                            <li>Service agreements with clients</li>
                            <li>Vendor/supplier contracts</li>
                            <li>Employment agreements</li>
                            <li>Non-disclosure agreements (NDAs)</li>
                        </ul>
                        <div class="highlight">
                            <strong>Minimum Coverage:</strong> At minimum, get general liability insurance. It's typically $400-1,000/year and can save you from catastrophic lawsuits.
                        </div>
                    `
                }
            ],
            quiz: [
                {
                    question: 'What is an EIN?',
                    options: [
                        'A type of business insurance',
                        'A tax ID number for your business from the IRS',
                        'A business license',
                        'A bank account number'
                    ],
                    correct: 1,
                    explanation: 'An EIN (Employer Identification Number) is like a Social Security number for your business. It\'s free from the IRS and needed for bank accounts, taxes, and hiring.'
                },
                {
                    question: 'Why should you NEVER mix personal and business finances?',
                    options: [
                        'It\'s illegal',
                        'It can pierce your liability protection and makes taxes difficult',
                        'Banks don\'t allow it',
                        'You\'ll pay higher fees'
                    ],
                    correct: 1,
                    explanation: 'Mixing finances can "pierce the corporate veil"—meaning courts might ignore your LLC protection. It also makes accounting and taxes a nightmare.'
                }
            ]
        },
        {
            id: 5,
            title: 'Launch and Operations',
            subtitle: 'Getting your business off the ground',
            topics: [
                {
                    id: 'launch-checklist',
                    title: 'Pre-Launch Checklist',
                    content: `
                        <h2>Pre-Launch Checklist</h2>
                        <h3>Legal Setup</h3>
                        <ul>
                            <li>☐ Business registered with state</li>
                            <li>☐ EIN obtained</li>
                            <li>☐ Operating agreement created</li>
                            <li>☐ Business bank account opened</li>
                            <li>☐ Licenses/permits acquired</li>
                            <li>☐ Insurance in place</li>
                        </ul>
                        <h3>Operations</h3>
                        <ul>
                            <li>☐ Accounting system set up (QuickBooks, Wave)</li>
                            <li>☐ Contract templates ready</li>
                            <li>☐ Payment processing set up (Stripe, Square)</li>
                            <li>☐ Email with custom domain</li>
                        </ul>
                        <h3>Marketing</h3>
                        <ul>
                            <li>☐ Website live</li>
                            <li>☐ Social media profiles created</li>
                            <li>☐ Google Business profile</li>
                            <li>☐ First customers identified</li>
                        </ul>
                        <div class="highlight">
                            <strong>Don't Wait for Perfect:</strong> Launch when you're 80% ready. You'll learn more from real customers than from planning.
                        </div>
                    `
                },
                {
                    id: 'first-customers',
                    title: 'Getting Your First Customers',
                    content: `
                        <h2>Getting Your First Customers</h2>
                        <h3>Warm Outreach</h3>
                        <ul>
                            <li>Tell everyone you know what you're doing</li>
                            <li>Ask for introductions</li>
                            <li>Post on personal social media</li>
                            <li>Email your network</li>
                        </ul>
                        <h3>Cold Outreach</h3>
                        <ul>
                            <li>Identify 100 potential customers</li>
                            <li>Personalized emails or DMs</li>
                            <li>Offer value first, sell second</li>
                            <li>Follow up (most sales happen after 5+ touches)</li>
                        </ul>
                        <h3>First 10 Customers Matter Most</h3>
                        <ul>
                            <li>Over-deliver to get testimonials</li>
                            <li>Ask for referrals</li>
                            <li>Get detailed feedback</li>
                            <li>Use them as case studies</li>
                        </ul>
                        <div class="highlight">
                            <strong>Your Goal:</strong> Get 10 paying customers who love what you do. Everything else can be figured out after that.
                        </div>
                    `
                }
            ],
            quiz: [
                {
                    question: 'When should you launch your business?',
                    options: [
                        'When everything is perfect',
                        'When you\'re about 80% ready - you\'ll learn from real customers',
                        'After 1 year of planning',
                        'Only when you have funding'
                    ],
                    correct: 1,
                    explanation: 'Perfectionism kills businesses. Launch when you\'re 80% ready and iterate based on real customer feedback. You\'ll learn more in 1 month of selling than 1 year of planning.'
                },
                {
                    question: 'What is the goal for your first customers?',
                    options: [
                        'Maximize profit',
                        'Get 10 customers who love your service for testimonials and referrals',
                        'Spend as little time as possible',
                        'Avoid talking to them'
                    ],
                    correct: 1,
                    explanation: 'Your first 10 customers are critical. Over-deliver to get testimonials, referrals, and feedback. They become the foundation for growth.'
                }
            ]
        }
    ]
};
