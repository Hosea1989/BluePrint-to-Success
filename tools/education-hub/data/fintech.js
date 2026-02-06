// Financial Technology (Fintech) Curriculum Data
const fintechData = {
    id: 'fintech',
    title: 'Financial Technology',
    icon: '📱',
    description: 'Navigate the fintech revolution — from digital banking and payment apps to DeFi and AI-powered finance.',
    graduationGoal: 'Leverage modern fintech tools to optimize your finances and understand the technology reshaping money',
    difficulty: 'intermediate',
    prerequisites: ['personalfinance', 'banking'],
    learningObjectives: [
        'Understand how fintech is transforming traditional finance',
        'Use digital banking and payment apps effectively',
        'Evaluate fintech tools for investing, budgeting, and banking',
        'Understand DeFi, blockchain, and crypto technologies',
        'Protect yourself from fintech scams and risks'
    ],
    relatedTracks: ['banking', 'crypto', 'investing', 'digitalliteracy'],
    resources: [
        { title: 'Fintech News', url: 'https://www.fintechnews.org/' }
    ],
    levels: [
        {
            id: 1,
            title: 'The Fintech Revolution',
            subtitle: 'How technology is transforming money',
            topics: [
                {
                    id: 'what-is-fintech',
                    title: 'What Is Fintech?',
                    content: `
                        <h2>What Is Fintech?</h2>
                        <p>Fintech (Financial Technology) refers to the use of technology to deliver financial services more efficiently, accessibly, and affordably. It's one of the fastest-growing sectors in the world and it's changing how everyone — from individuals to giant corporations — interacts with money.</p>
                        <h3>Why Fintech Matters to You</h3>
                        <ul>
                            <li><strong>Lower costs:</strong> Fintech companies often charge less than traditional banks because they have no physical branches</li>
                            <li><strong>Better access:</strong> You can invest, send money, and manage finances from your phone 24/7</li>
                            <li><strong>Financial inclusion:</strong> People without traditional bank access can use mobile wallets, micro-investing apps, and digital payments</li>
                            <li><strong>Automation:</strong> AI and algorithms handle budgeting, investing, and tax optimization automatically</li>
                        </ul>
                        <h3>The Scale of Fintech</h3>
                        <ul>
                            <li>Global fintech market valued at $300+ billion and growing 20%+ annually</li>
                            <li>Over 10,000 fintech startups worldwide</li>
                            <li>Major players: Stripe, Square/Block, PayPal, Robinhood, Chime, Plaid</li>
                            <li>Every major bank now has significant fintech initiatives</li>
                        </ul>
                        <div class="highlight">
                            <strong>Key Insight:</strong> You're probably already using fintech — Venmo, Cash App, Apple Pay, and even your bank's mobile app are all fintech products.
                        </div>
                    `,
                    quiz: {
                        question: 'What is a key advantage of fintech over traditional banking?',
                        options: [
                            'Fintech companies are always more trustworthy than banks',
                            'Lower costs and 24/7 accessibility through technology',
                            'Fintech is guaranteed to make you money',
                            'Fintech eliminates all financial risk'
                        ],
                        correct: 1
                    }
                },
                {
                    id: 'digital-banking',
                    title: 'Digital Banking & Neobanks',
                    content: `
                        <h2>Digital Banking & Neobanks</h2>
                        <p>Neobanks are online-only banks with no physical branches. They offer most traditional banking services through apps, often with lower fees and higher interest rates.</p>
                        <h3>Popular Digital Banks</h3>
                        <ul>
                            <li><strong>Chime:</strong> No-fee checking, early direct deposit, automatic savings round-ups</li>
                            <li><strong>Ally Bank:</strong> High-yield savings (often 4-5%), no minimum balance, excellent customer service</li>
                            <li><strong>Marcus by Goldman Sachs:</strong> High-yield savings and personal loans</li>
                            <li><strong>SoFi:</strong> Banking, investing, student loan refinancing, all in one platform</li>
                            <li><strong>Current:</strong> Designed for teens and young adults with financial literacy features</li>
                        </ul>
                        <h3>Advantages Over Traditional Banks</h3>
                        <ul>
                            <li>Higher savings interest rates (4-5% vs 0.01% at big banks)</li>
                            <li>No or minimal fees (no monthly maintenance fees, no overdraft fees)</li>
                            <li>Early direct deposit (get paid 2 days early)</li>
                            <li>Better mobile experience and features</li>
                        </ul>
                        <h3>Things to Consider</h3>
                        <ul>
                            <li><strong>FDIC insurance:</strong> Make sure your digital bank is FDIC insured (most are, through partner banks)</li>
                            <li><strong>Cash deposits:</strong> Harder without physical branches — may need to use cash deposit network</li>
                            <li><strong>Customer service:</strong> Usually phone/chat only — no in-person option</li>
                            <li><strong>Stability:</strong> Some neobanks are startups — stick with well-funded ones</li>
                        </ul>
                    `,
                    quiz: {
                        question: 'Why do neobanks typically offer higher savings interest rates?',
                        options: [
                            'They take more risks with your money',
                            'They have no physical branches so their overhead costs are much lower',
                            'The government subsidizes them',
                            'They are not regulated like traditional banks'
                        ],
                        correct: 1
                    }
                },
                {
                    id: 'payment-technology',
                    title: 'Payment Technology',
                    content: `
                        <h2>Payment Technology</h2>
                        <p>The way we pay for things has been completely transformed by technology. Cash and checks are declining; digital payments are booming.</p>
                        <h3>Peer-to-Peer (P2P) Payments</h3>
                        <ul>
                            <li><strong>Venmo:</strong> Social-feed style payments, popular for splitting bills. Owned by PayPal</li>
                            <li><strong>Cash App:</strong> P2P payments plus investing, Bitcoin buying, and Cash Card. Owned by Block (Square)</li>
                            <li><strong>Zelle:</strong> Bank-integrated instant transfers, no social features. Built by major banks</li>
                            <li><strong>Apple Pay / Google Pay:</strong> Contactless payments using your phone or watch</li>
                        </ul>
                        <h3>Buy Now, Pay Later (BNPL)</h3>
                        <ul>
                            <li><strong>How it works:</strong> Split purchases into 4 interest-free payments over 6-8 weeks</li>
                            <li><strong>Major players:</strong> Klarna, Afterpay, Affirm</li>
                            <li><strong>The good:</strong> Can be useful for planned purchases, no interest if paid on time</li>
                            <li><strong>The risk:</strong> Easy to overspend, late fees add up, multiple BNPL plans can become unmanageable</li>
                        </ul>
                        <h3>Safety Tips for Digital Payments</h3>
                        <ul>
                            <li>Only send money to people you know and trust (P2P payments are usually not reversible)</li>
                            <li>Enable two-factor authentication on all payment apps</li>
                            <li>Be wary of scammers requesting payment via Cash App or Venmo</li>
                            <li>Use a credit card (not debit) for online purchases for better fraud protection</li>
                        </ul>
                    `,
                    quiz: {
                        question: 'What is a key risk of Buy Now, Pay Later (BNPL) services?',
                        options: [
                            'They always charge high interest rates',
                            'They\'re only available for luxury items',
                            'They make it easy to overspend and accumulate multiple payment plans',
                            'They require a perfect credit score'
                        ],
                        correct: 2
                    }
                }
            ]
        },
        {
            id: 2,
            title: 'Investing & Wealth Tech',
            subtitle: 'Technology that makes investing accessible to everyone',
            topics: [
                {
                    id: 'investing-apps',
                    title: 'Investing Apps & Platforms',
                    content: `
                        <h2>Investing Apps & Platforms</h2>
                        <p>Technology has democratized investing. You can now start investing with as little as $1, commission-free, from your phone.</p>
                        <h3>Types of Investing Platforms</h3>
                        <ul>
                            <li><strong>Self-Directed:</strong> You choose your own investments
                                <ul>
                                    <li>Robinhood: Commission-free, beginner-friendly, stocks/ETFs/crypto/options</li>
                                    <li>Webull: More advanced tools, paper trading, extended hours</li>
                                    <li>Fidelity: Full-service broker, excellent research tools, fractional shares</li>
                                    <li>Charles Schwab: Comprehensive platform, merged with TD Ameritrade</li>
                                </ul>
                            </li>
                            <li><strong>Robo-Advisors:</strong> Algorithms build and manage your portfolio
                                <ul>
                                    <li>Betterment: Automatic portfolio management, tax-loss harvesting</li>
                                    <li>Wealthfront: Automated investing, financial planning tools</li>
                                    <li>Vanguard Digital Advisor: Low-cost with Vanguard's index fund expertise</li>
                                </ul>
                            </li>
                            <li><strong>Micro-Investing:</strong> Invest small amounts automatically
                                <ul>
                                    <li>Acorns: Rounds up purchases and invests the change</li>
                                    <li>Stash: Fractional shares starting at $5, educational content</li>
                                </ul>
                            </li>
                        </ul>
                        <h3>Choosing the Right Platform</h3>
                        <ul>
                            <li><strong>Complete beginner?</strong> Start with a robo-advisor like Betterment</li>
                            <li><strong>Want to learn?</strong> Self-directed platforms like Fidelity or Schwab</li>
                            <li><strong>Just want to start small?</strong> Acorns or Stash for micro-investing</li>
                        </ul>
                    `,
                    quiz: {
                        question: 'What is a robo-advisor?',
                        options: [
                            'A robot that trades stocks at high frequency',
                            'An algorithm that automatically builds and manages your investment portfolio',
                            'A chatbot that gives financial advice',
                            'A tool that only invests in technology stocks'
                        ],
                        correct: 1
                    }
                },
                {
                    id: 'budgeting-tools',
                    title: 'Budgeting & Personal Finance Tools',
                    content: `
                        <h2>Budgeting & Personal Finance Tools</h2>
                        <p>Technology has made tracking your money easier than ever. The right tools can automate your budgeting and give you a clear picture of your financial health.</p>
                        <h3>Top Budgeting Apps</h3>
                        <ul>
                            <li><strong>YNAB (You Need A Budget):</strong> Zero-based budgeting philosophy — every dollar gets a job. $14.99/month but users save an average of $600 in first 2 months</li>
                            <li><strong>Mint:</strong> Free, auto-categorizes transactions, tracks net worth. Owned by Intuit</li>
                            <li><strong>Monarch Money:</strong> Modern UI, shared finances for couples, net worth tracking</li>
                            <li><strong>Copilot:</strong> AI-powered insights, clean design, Apple-first</li>
                            <li><strong>PocketGuard:</strong> Shows how much you have left to spend after bills and savings goals</li>
                        </ul>
                        <h3>Net Worth & Wealth Tracking</h3>
                        <ul>
                            <li><strong>Personal Capital (Empower):</strong> Free net worth tracking, investment analysis, retirement planner</li>
                            <li><strong>Kubera:</strong> Track all assets including crypto, real estate, alternative investments</li>
                        </ul>
                        <h3>Choosing the Right Tool</h3>
                        <ul>
                            <li><strong>Want strict budgeting?</strong> YNAB (best methodology, worth the cost)</li>
                            <li><strong>Want free & easy?</strong> Mint or PocketGuard</li>
                            <li><strong>Want investment tracking?</strong> Personal Capital/Empower</li>
                            <li><strong>Best tip:</strong> The best budget app is the one you'll actually use consistently</li>
                        </ul>
                        <div class="highlight">
                            <strong>Pro Tip:</strong> Connect your bank accounts to a budgeting app today. The simple act of seeing where your money goes is often enough to start making better decisions.
                        </div>
                    `,
                    quiz: {
                        question: 'What is the YNAB budgeting philosophy?',
                        options: [
                            'Spend as little as possible on everything',
                            'Every dollar gets a job — zero-based budgeting',
                            'Only track big purchases over $50',
                            'Save exactly 50% of your income'
                        ],
                        correct: 1
                    }
                },
                {
                    id: 'tax-technology',
                    title: 'Tax Technology',
                    content: `
                        <h2>Tax Technology</h2>
                        <p>Filing taxes has been transformed by technology. What once required expensive accountants can now be done on your phone for free or low cost.</p>
                        <h3>Tax Filing Software</h3>
                        <ul>
                            <li><strong>TurboTax:</strong> Most popular, guided interview format, expensive for complex returns</li>
                            <li><strong>H&R Block:</strong> Similar to TurboTax, often cheaper, in-person option available</li>
                            <li><strong>FreeTaxUSA:</strong> Free federal filing, low-cost state filing, handles complex situations</li>
                            <li><strong>Cash App Taxes:</strong> Completely free for federal and state (formerly Credit Karma Tax)</li>
                            <li><strong>IRS Free File:</strong> Free if income is below $79,000 (through partner companies)</li>
                        </ul>
                        <h3>Tax Optimization Technology</h3>
                        <ul>
                            <li><strong>Tax-Loss Harvesting:</strong> Robo-advisors like Betterment automatically sell losing investments to offset gains — saving you money on taxes</li>
                            <li><strong>Asset Location:</strong> Some platforms optimize which investments go in tax-advantaged vs taxable accounts</li>
                            <li><strong>Crypto Tax Tools:</strong> CoinTracker, TaxBit — essential if you trade crypto, as every transaction is a taxable event</li>
                        </ul>
                        <h3>Smart Tax Tips</h3>
                        <ul>
                            <li>If your situation is simple (W-2 income, standard deduction), use free software</li>
                            <li>If you have investments, self-employment income, or rental property, consider paid software or a CPA</li>
                            <li>Always file on time — even if you can't pay, filing avoids the failure-to-file penalty</li>
                            <li>Keep digital records of all tax documents for at least 3 years</li>
                        </ul>
                    `,
                    quiz: {
                        question: 'What is tax-loss harvesting?',
                        options: [
                            'Hiding income to avoid paying taxes',
                            'Selling losing investments to offset taxable gains',
                            'Filing taxes late to delay payment',
                            'Investing only in tax-free bonds'
                        ],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 3,
            title: 'Blockchain & Cryptocurrency',
            subtitle: 'Understanding the technology behind digital money',
            topics: [
                {
                    id: 'blockchain-basics',
                    title: 'How Blockchain Works',
                    content: `
                        <h2>How Blockchain Works</h2>
                        <p>Blockchain is the technology underlying cryptocurrencies, but its applications go far beyond digital money. Understanding the basics helps you evaluate crypto claims and spot opportunities.</p>
                        <h3>The Core Concept</h3>
                        <p>A blockchain is a distributed digital ledger — a record of transactions that is:</p>
                        <ul>
                            <li><strong>Decentralized:</strong> No single entity controls it; copies exist on thousands of computers worldwide</li>
                            <li><strong>Immutable:</strong> Once data is written, it can't be changed or deleted</li>
                            <li><strong>Transparent:</strong> Anyone can view the transaction history</li>
                            <li><strong>Trustless:</strong> You don't need to trust a bank or middleman — the math verifies everything</li>
                        </ul>
                        <h3>How a Transaction Works</h3>
                        <ol>
                            <li>You initiate a transaction (e.g., send 1 Bitcoin to someone)</li>
                            <li>The transaction is broadcast to the network</li>
                            <li>Miners/validators verify the transaction is legitimate</li>
                            <li>The verified transaction is added to a "block" with other transactions</li>
                            <li>The block is added to the chain — permanent and public</li>
                        </ol>
                        <h3>Beyond Cryptocurrency</h3>
                        <ul>
                            <li><strong>Supply chain tracking:</strong> Verify where products come from</li>
                            <li><strong>Digital identity:</strong> Secure, portable identity verification</li>
                            <li><strong>Smart contracts:</strong> Self-executing agreements (no lawyers needed)</li>
                            <li><strong>Voting systems:</strong> Tamper-proof digital voting</li>
                        </ul>
                    `,
                    quiz: {
                        question: 'What makes blockchain "trustless"?',
                        options: [
                            'Nobody should trust blockchain technology',
                            'You don\'t need to trust a central authority — the math and consensus verify transactions',
                            'The blockchain has been hacked many times',
                            'Only trusted individuals can use blockchain'
                        ],
                        correct: 1
                    }
                },
                {
                    id: 'crypto-ecosystem',
                    title: 'The Crypto Ecosystem',
                    content: `
                        <h2>The Crypto Ecosystem</h2>
                        <p>Cryptocurrency is just one application of blockchain technology, but it's the most well-known. Here's a map of the ecosystem.</p>
                        <h3>Major Categories</h3>
                        <ul>
                            <li><strong>Bitcoin (BTC):</strong> The original cryptocurrency. "Digital gold" — store of value, limited supply of 21 million</li>
                            <li><strong>Ethereum (ETH):</strong> Platform for smart contracts and decentralized apps. Powers DeFi and NFTs</li>
                            <li><strong>Stablecoins:</strong> Pegged to the dollar (USDC, USDT). Used for trading and as a digital dollar</li>
                            <li><strong>DeFi Tokens:</strong> Power decentralized finance platforms (lending, borrowing without banks)</li>
                            <li><strong>Layer 2 Solutions:</strong> Faster, cheaper transactions built on top of Ethereum (Polygon, Arbitrum)</li>
                        </ul>
                        <h3>Where to Buy and Store Crypto</h3>
                        <ul>
                            <li><strong>Exchanges:</strong> Coinbase (beginner-friendly), Kraken (advanced), Binance (global)</li>
                            <li><strong>Hot wallets:</strong> Software wallets on your phone/computer (convenient but less secure)</li>
                            <li><strong>Cold wallets:</strong> Hardware devices like Ledger or Trezor (most secure for large holdings)</li>
                        </ul>
                        <h3>Critical Warnings</h3>
                        <ul>
                            <li>Never invest more in crypto than you can afford to lose entirely</li>
                            <li>Beware of scams — "guaranteed returns" in crypto don't exist</li>
                            <li>"Not your keys, not your coins" — if the exchange goes down, your crypto could be lost (see FTX collapse)</li>
                            <li>Every crypto trade is a taxable event in the US</li>
                        </ul>
                    `,
                    quiz: {
                        question: 'What does "not your keys, not your coins" mean in crypto?',
                        options: [
                            'You need a physical key to access cryptocurrency',
                            'If you don\'t hold your private keys (e.g., crypto is on an exchange), you don\'t truly control your crypto',
                            'Cryptocurrency requires two-factor authentication',
                            'You should share your keys with trusted friends for backup'
                        ],
                        correct: 1
                    }
                },
                {
                    id: 'defi-overview',
                    title: 'Decentralized Finance (DeFi)',
                    content: `
                        <h2>Decentralized Finance (DeFi)</h2>
                        <p>DeFi aims to recreate traditional financial services (lending, borrowing, trading, insurance) using blockchain technology — without banks, brokers, or intermediaries.</p>
                        <h3>Key DeFi Services</h3>
                        <ul>
                            <li><strong>Decentralized Exchanges (DEXs):</strong> Trade crypto without a central exchange. Examples: Uniswap, SushiSwap</li>
                            <li><strong>Lending/Borrowing:</strong> Earn interest by lending crypto, or borrow against your crypto. Examples: Aave, Compound</li>
                            <li><strong>Yield Farming:</strong> Provide liquidity to protocols and earn rewards (high risk, high potential reward)</li>
                            <li><strong>Staking:</strong> Lock up crypto to help secure the network and earn rewards</li>
                        </ul>
                        <h3>DeFi Risks</h3>
                        <ul>
                            <li><strong>Smart contract bugs:</strong> Code errors can lead to millions being stolen</li>
                            <li><strong>Impermanent loss:</strong> Providing liquidity can sometimes result in less value than just holding</li>
                            <li><strong>Regulatory risk:</strong> Governments are still figuring out how to regulate DeFi</li>
                            <li><strong>Complexity:</strong> DeFi is not beginner-friendly — one wrong transaction can lose funds permanently</li>
                        </ul>
                        <div class="highlight">
                            <strong>Honest Take:</strong> DeFi is innovative and could reshape finance, but right now it's still early and risky. Don't put money into DeFi that you can't afford to lose, and never chase high yields without understanding the risks.
                        </div>
                    `,
                    quiz: {
                        question: 'What is a significant risk of using DeFi protocols?',
                        options: [
                            'They charge the same fees as banks',
                            'Smart contract bugs can lead to loss of funds',
                            'They require a bank account to use',
                            'They are too slow for financial transactions'
                        ],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 4,
            title: 'AI in Finance',
            subtitle: 'How artificial intelligence is reshaping financial services',
            topics: [
                {
                    id: 'ai-financial-tools',
                    title: 'AI-Powered Financial Tools',
                    content: `
                        <h2>AI-Powered Financial Tools</h2>
                        <p>Artificial intelligence is being integrated into nearly every financial product. Understanding what AI can and can't do helps you use these tools wisely.</p>
                        <h3>AI in Personal Finance</h3>
                        <ul>
                            <li><strong>AI Budgeting:</strong> Apps like Copilot use AI to categorize spending, identify patterns, and suggest savings</li>
                            <li><strong>Robo-Advisors:</strong> AI algorithms manage your investment portfolio, rebalance automatically, and optimize taxes</li>
                            <li><strong>Credit Scoring:</strong> AI models use alternative data (rent payments, utility bills) to score people with thin credit files</li>
                            <li><strong>Fraud Detection:</strong> Your bank's AI flags suspicious transactions in real-time</li>
                            <li><strong>Chatbots:</strong> AI customer service for banking questions and account management</li>
                        </ul>
                        <h3>AI in Investing</h3>
                        <ul>
                            <li><strong>Sentiment Analysis:</strong> AI reads news articles and social media to gauge market sentiment</li>
                            <li><strong>Algorithmic Trading:</strong> AI executes trades based on patterns humans can't see</li>
                            <li><strong>Research Assistants:</strong> AI tools that summarize earnings calls, analyze financial statements</li>
                        </ul>
                        <h3>What AI Can't Do (Yet)</h3>
                        <ul>
                            <li>Predict the future — AI can identify patterns but can't foresee black swan events</li>
                            <li>Replace human judgment entirely — context and nuance still matter</li>
                            <li>Guarantee returns — any "AI trading bot" promising guaranteed profits is a scam</li>
                        </ul>
                        <div class="highlight">
                            <strong>Bottom Line:</strong> Use AI tools as assistants, not oracles. They make managing money easier and more efficient, but you still need to understand the fundamentals.
                        </div>
                    `,
                    quiz: {
                        question: 'What is a red flag when someone claims to use AI for investing?',
                        options: [
                            'They use AI to analyze financial statements',
                            'They promise guaranteed returns from an AI trading bot',
                            'They use AI to diversify portfolios',
                            'They use AI for fraud detection'
                        ],
                        correct: 1
                    }
                },
                {
                    id: 'open-banking',
                    title: 'Open Banking & APIs',
                    content: `
                        <h2>Open Banking & APIs</h2>
                        <p>Open banking is a system where banks share customer data (with permission) with third-party apps through APIs (Application Programming Interfaces). It's the infrastructure that makes most fintech apps possible.</p>
                        <h3>How It Works</h3>
                        <ul>
                            <li>You authorize a fintech app (like Mint or Venmo) to access your bank data</li>
                            <li>The app connects to your bank through an API (often via Plaid or similar services)</li>
                            <li>The app can read your transactions, balances, and account info (but usually can't move money without additional authorization)</li>
                        </ul>
                        <h3>Benefits of Open Banking</h3>
                        <ul>
                            <li><strong>Better financial products:</strong> Apps can see your full financial picture and give personalized advice</li>
                            <li><strong>Easier switching:</strong> Move between banks and services without starting over</li>
                            <li><strong>Competition:</strong> Banks must compete with fintech on user experience and fees</li>
                            <li><strong>Innovation:</strong> Developers can build new financial tools on top of banking data</li>
                        </ul>
                        <h3>Privacy & Security Concerns</h3>
                        <ul>
                            <li>Only connect accounts to reputable, well-reviewed apps</li>
                            <li>Regularly review which apps have access to your financial data</li>
                            <li>Revoke access for apps you no longer use</li>
                            <li>Understand what data each app collects and how it's used</li>
                        </ul>
                    `,
                    quiz: {
                        question: 'What enables fintech apps to access your bank account information?',
                        options: [
                            'They hack into bank databases',
                            'APIs that allow authorized data sharing between banks and apps',
                            'They require your bank login permanently',
                            'Banks automatically share all customer data publicly'
                        ],
                        correct: 1
                    }
                },
                {
                    id: 'regtech-compliance',
                    title: 'RegTech & Financial Regulation',
                    content: `
                        <h2>RegTech & Financial Regulation</h2>
                        <p>As fintech grows, so does the need for regulation. RegTech (Regulatory Technology) uses technology to help financial companies comply with regulations.</p>
                        <h3>Key Regulatory Concepts</h3>
                        <ul>
                            <li><strong>KYC (Know Your Customer):</strong> Verifying customer identity — that's why apps ask for your SSN and ID</li>
                            <li><strong>AML (Anti-Money Laundering):</strong> Systems that detect suspicious financial activity</li>
                            <li><strong>FDIC Insurance:</strong> Deposits at insured banks are protected up to $250,000</li>
                            <li><strong>SIPC Protection:</strong> Protects brokerage accounts up to $500,000 if the broker fails</li>
                        </ul>
                        <h3>The Regulatory Landscape</h3>
                        <ul>
                            <li><strong>SEC:</strong> Regulates securities and investment products</li>
                            <li><strong>CFPB:</strong> Consumer Financial Protection Bureau — protects consumers from unfair practices</li>
                            <li><strong>State regulators:</strong> Money transmission licenses vary by state</li>
                            <li><strong>Crypto regulation:</strong> Still evolving — SEC, CFTC, and Congress are all involved</li>
                        </ul>
                        <h3>What This Means for You</h3>
                        <ul>
                            <li>Check if your fintech platform is properly licensed and regulated</li>
                            <li>Understand what protections you have (and don't have) with different types of accounts</li>
                            <li>Be cautious with platforms that operate in regulatory gray areas</li>
                            <li>Remember: regulation exists to protect you — unregulated doesn't mean better</li>
                        </ul>
                    `,
                    quiz: {
                        question: 'Why should you check if a fintech platform is properly regulated?',
                        options: [
                            'Regulated platforms always have higher returns',
                            'Regulation provides consumer protections like FDIC insurance',
                            'Unregulated platforms are always scams',
                            'It helps you get lower fees'
                        ],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 5,
            title: 'The Future of Fintech',
            subtitle: 'Emerging trends and how to stay ahead',
            topics: [
                {
                    id: 'embedded-finance',
                    title: 'Embedded Finance',
                    content: `
                        <h2>Embedded Finance</h2>
                        <p>Embedded finance is the integration of financial services into non-financial platforms. Instead of going to a bank, financial services come to you wherever you already are.</p>
                        <h3>Examples You've Already Seen</h3>
                        <ul>
                            <li><strong>Uber:</strong> Payments, tipping, and driver financing built right into the ride-sharing app</li>
                            <li><strong>Shopify:</strong> Loans to merchants, payment processing, banking — all within the e-commerce platform</li>
                            <li><strong>Apple:</strong> Apple Pay, Apple Card, Apple Savings — finance embedded in your phone's ecosystem</li>
                            <li><strong>Amazon:</strong> Amazon Lending for sellers, Amazon Pay for buyers</li>
                            <li><strong>Instagram/TikTok:</strong> In-app shopping and payments</li>
                        </ul>
                        <h3>Why This Matters</h3>
                        <ul>
                            <li><strong>Convenience:</strong> No need to switch between apps — finance is where you need it</li>
                            <li><strong>Better data:</strong> Platforms can offer more personalized financial products based on your activity</li>
                            <li><strong>Lower costs:</strong> Competition drives down fees</li>
                            <li><strong>Watch out:</strong> Impulse spending becomes easier when buying is frictionless</li>
                        </ul>
                        <div class="highlight">
                            <strong>The Trend:</strong> Every company is becoming a fintech company. The winners will be platforms that seamlessly integrate financial services into experiences you already use.
                        </div>
                    `,
                    quiz: {
                        question: 'What is embedded finance?',
                        options: [
                            'A new type of bank account',
                            'Financial services integrated into non-financial platforms',
                            'Cryptocurrency embedded in smart contracts',
                            'A fintech company that only operates online'
                        ],
                        correct: 1
                    }
                },
                {
                    id: 'cbdc-digital-currency',
                    title: 'Central Bank Digital Currencies',
                    content: `
                        <h2>Central Bank Digital Currencies (CBDCs)</h2>
                        <p>CBDCs are digital versions of a country's currency, issued and backed by the central bank. Unlike crypto, they're government-controlled and designed to complement (or replace) physical cash.</p>
                        <h3>How CBDCs Differ from Crypto</h3>
                        <ul>
                            <li><strong>Centralized:</strong> Controlled by the government/central bank (crypto is decentralized)</li>
                            <li><strong>Stable:</strong> Pegged to the national currency (no price volatility)</li>
                            <li><strong>Legal tender:</strong> Would be required to be accepted for payments</li>
                            <li><strong>Not anonymous:</strong> Government can track transactions (unlike some crypto)</li>
                        </ul>
                        <h3>Global Status</h3>
                        <ul>
                            <li><strong>China:</strong> Digital Yuan (e-CNY) is in advanced testing with millions of users</li>
                            <li><strong>EU:</strong> Digital Euro is in development</li>
                            <li><strong>US:</strong> Exploring a "digital dollar" but no firm timeline</li>
                            <li><strong>Bahamas, Nigeria:</strong> Already launched CBDCs</li>
                        </ul>
                        <h3>Potential Impact</h3>
                        <ul>
                            <li><strong>Positive:</strong> Financial inclusion, faster payments, reduced cash handling costs</li>
                            <li><strong>Concerns:</strong> Privacy (government tracking all transactions), impact on commercial banks, cybersecurity risks</li>
                        </ul>
                    `,
                    quiz: {
                        question: 'How do CBDCs differ from cryptocurrencies like Bitcoin?',
                        options: [
                            'CBDCs are more volatile than Bitcoin',
                            'CBDCs are decentralized while Bitcoin is centralized',
                            'CBDCs are centralized, government-controlled, and stable in value',
                            'CBDCs can only be used for international transfers'
                        ],
                        correct: 2
                    }
                },
                {
                    id: 'staying-ahead',
                    title: 'Staying Ahead in Fintech',
                    content: `
                        <h2>Staying Ahead in Fintech</h2>
                        <p>Fintech is evolving fast. Here's how to stay informed and make the most of the opportunities it creates.</p>
                        <h3>Fintech Career Opportunities</h3>
                        <ul>
                            <li><strong>Product Management:</strong> Design and build financial products. $100K-$200K+</li>
                            <li><strong>Software Engineering:</strong> Build fintech platforms. $120K-$250K+</li>
                            <li><strong>Data Science:</strong> Use AI/ML for financial applications. $110K-$200K+</li>
                            <li><strong>Compliance/RegTech:</strong> Navigate financial regulations. $80K-$150K+</li>
                            <li><strong>UX Design:</strong> Make financial tools intuitive and accessible. $90K-$170K+</li>
                        </ul>
                        <h3>How to Optimize Your Finances with Fintech</h3>
                        <ul>
                            <li>Move savings to a high-yield neobank (earn 4-5% vs 0.01%)</li>
                            <li>Set up automatic investing with a robo-advisor or brokerage</li>
                            <li>Use a budgeting app to track every dollar</li>
                            <li>File taxes yourself with free/low-cost software</li>
                            <li>Use credit monitoring tools (Credit Karma is free)</li>
                        </ul>
                        <h3>Staying Informed</h3>
                        <ul>
                            <li><strong>Newsletters:</strong> Fintech Today, The Fintech Blueprint</li>
                            <li><strong>Podcasts:</strong> Lex Fridman (tech), All-In Podcast (finance/tech)</li>
                            <li><strong>Follow on X/Twitter:</strong> Fintech founders, analysts, and reporters</li>
                            <li><strong>Try new tools:</strong> Sign up for new fintech products and explore them</li>
                        </ul>
                        <div class="highlight">
                            <strong>Action Plan:</strong> This week, do three things: (1) Open a high-yield savings account if you don't have one, (2) Connect your accounts to a budgeting app, (3) Set up automatic monthly investing, even if it's just $25.
                        </div>
                    `,
                    quiz: {
                        question: 'What is the single most impactful fintech move for most people?',
                        options: [
                            'Investing in cryptocurrency',
                            'Moving savings to a high-yield account and automating investing',
                            'Day trading with AI tools',
                            'Using only cash for all transactions'
                        ],
                        correct: 1
                    }
                }
            ]
        }
    ]
};
