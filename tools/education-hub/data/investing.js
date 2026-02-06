// Investing Fundamentals Curriculum Data
const investingData = {
    id: 'investing',
    title: 'Investing Fundamentals',
    icon: '📈',
    description: 'Learn how to grow your wealth through smart investing — from the basics to building a diversified portfolio.',
    graduationGoal: 'Confidently build and manage an investment portfolio',
    difficulty: 'beginner',
    prerequisites: ['personalfinance'],
    learningObjectives: [
        'Understand why investing is essential for building wealth',
        'Compare different investment vehicles (stocks, bonds, ETFs)',
        'Build a diversified portfolio based on your risk tolerance',
        'Implement dollar-cost averaging and other proven strategies',
        'Manage and rebalance your portfolio over time'
    ],
    relatedTracks: ['stocks', 'retirement', 'crypto', 'realestate'],
    resources: [
        { title: 'Investor.gov - Getting Started', url: 'https://www.investor.gov/introduction-investing' },
        { title: 'Bogleheads Wiki', url: 'https://www.bogleheads.org/wiki/Main_Page' },
        { title: 'Investopedia - Investing Basics', url: 'https://www.investopedia.com/investing-4427695' }
    ],
    levels: [
        {
            id: 1,
            title: 'Investment Foundations',
            subtitle: 'Understanding what investing is and why it matters',
            topics: [
                {
                    id: 'why-invest',
                    title: 'Why Invest?',
                    content: `
                        <h2>Why Invest?</h2>
                        <p>Investing is putting your money to work so it grows over time. Instead of letting cash sit in a bank account earning almost nothing, investing allows your money to compound and build real wealth.</p>
                        <h3>The Power of Compounding</h3>
                        <p>Compound interest is often called the eighth wonder of the world. When your investment earns returns, those returns earn returns too. Over decades, this snowball effect is dramatic.</p>
                        <ul>
                            <li><strong>$200/month at 10% for 30 years</strong> = ~$452,000 (you only put in $72,000)</li>
                            <li><strong>Starting at 25 vs 35:</strong> That 10-year head start can mean double the final amount</li>
                            <li><strong>Inflation protection:</strong> Cash loses ~3% of purchasing power per year — investing fights that</li>
                        </ul>
                        <h3>Investing vs Saving</h3>
                        <ul>
                            <li><strong>Saving:</strong> Low risk, low return. Good for emergency funds and short-term goals</li>
                            <li><strong>Investing:</strong> Higher risk, higher potential return. Best for goals 5+ years away</li>
                        </ul>
                        <div class="highlight">
                            <strong>Key Insight:</strong> Time in the market beats timing the market. The best day to start investing was yesterday — the second best is today.
                        </div>
                    `,
                    quiz: {
                        question: 'What makes compound interest so powerful for investors?',
                        options: [
                            'You earn interest only on your original investment',
                            'Your returns earn returns, creating a snowball effect over time',
                            'The bank guarantees your returns will never go down',
                            'You pay less in taxes on compound interest'
                        ],
                        correct: 1
                    }
                },
                {
                    id: 'investment-vehicles',
                    title: 'Types of Investments',
                    content: `
                        <h2>Types of Investments</h2>
                        <p>There are many ways to invest your money. Each has different risk levels, return potential, and time horizons.</p>
                        <h3>Stocks</h3>
                        <p>Ownership shares in a company. When the company does well, your shares increase in value. Some stocks also pay dividends — regular cash payments to shareholders.</p>
                        <ul>
                            <li><strong>Potential returns:</strong> Historically ~10% per year (S&P 500 average)</li>
                            <li><strong>Risk:</strong> Higher — individual stocks can lose significant value</li>
                            <li><strong>Best for:</strong> Long-term growth</li>
                        </ul>
                        <h3>Bonds</h3>
                        <p>Loans you make to a company or government. They pay you interest over time and return your principal at maturity.</p>
                        <ul>
                            <li><strong>Potential returns:</strong> 3-6% typically</li>
                            <li><strong>Risk:</strong> Lower than stocks, but not zero</li>
                            <li><strong>Best for:</strong> Stability and income</li>
                        </ul>
                        <h3>Mutual Funds & ETFs</h3>
                        <p>Baskets of investments managed together. Instead of buying one stock, you buy a slice of hundreds.</p>
                        <ul>
                            <li><strong>Mutual Funds:</strong> Professionally managed, bought at end of day</li>
                            <li><strong>ETFs:</strong> Trade like stocks throughout the day, usually lower fees</li>
                            <li><strong>Index Funds:</strong> Track a market index like the S&P 500 — low fees, broad diversification</li>
                        </ul>
                        <h3>Real Estate</h3>
                        <p>Property investments for rental income or appreciation. Can also invest through REITs (Real Estate Investment Trusts) without buying property directly.</p>
                    `,
                    quiz: {
                        question: 'What is the key advantage of index funds for beginner investors?',
                        options: [
                            'They guarantee profits every year',
                            'They are managed by AI and never lose money',
                            'They provide broad diversification with low fees',
                            'They only invest in technology stocks'
                        ],
                        correct: 2
                    }
                },
                {
                    id: 'risk-and-return',
                    title: 'Risk and Return',
                    content: `
                        <h2>Risk and Return</h2>
                        <p>Every investment carries risk — the possibility that you could lose some or all of your money. Understanding risk is critical to making smart decisions.</p>
                        <h3>The Risk-Return Tradeoff</h3>
                        <p>Higher potential returns generally come with higher risk. This is the most fundamental concept in investing.</p>
                        <ul>
                            <li><strong>Low Risk / Low Return:</strong> Savings accounts, CDs, Treasury bonds</li>
                            <li><strong>Medium Risk / Medium Return:</strong> Corporate bonds, balanced funds</li>
                            <li><strong>High Risk / High Return:</strong> Individual stocks, crypto, startups</li>
                        </ul>
                        <h3>Types of Risk</h3>
                        <ul>
                            <li><strong>Market Risk:</strong> The entire market drops (like in 2008 or 2020)</li>
                            <li><strong>Company Risk:</strong> A specific company performs badly</li>
                            <li><strong>Inflation Risk:</strong> Your returns don't keep up with rising prices</li>
                            <li><strong>Liquidity Risk:</strong> You can't sell an investment quickly when you need to</li>
                        </ul>
                        <h3>Know Your Risk Tolerance</h3>
                        <p>Your risk tolerance depends on your age, income stability, financial goals, and personality. A 25-year-old with decades to invest can handle more risk than someone retiring next year.</p>
                        <div class="highlight">
                            <strong>Rule of Thumb:</strong> Subtract your age from 110 — that's roughly what percentage of your portfolio should be in stocks. The rest in bonds. (110 - 25 = 85% stocks)
                        </div>
                    `,
                    quiz: {
                        question: 'Which type of risk refers to the entire stock market declining?',
                        options: [
                            'Company Risk',
                            'Liquidity Risk',
                            'Market Risk',
                            'Inflation Risk'
                        ],
                        correct: 2
                    }
                },
                {
                    id: 'diversification',
                    title: 'Diversification',
                    content: `
                        <h2>Diversification</h2>
                        <p>Diversification means spreading your investments across different assets so that poor performance in one area doesn't wipe you out.</p>
                        <h3>Why Diversify?</h3>
                        <p>Think of it as not putting all your eggs in one basket. If one investment drops 50%, but it's only 5% of your portfolio, the impact is manageable.</p>
                        <h3>Ways to Diversify</h3>
                        <ul>
                            <li><strong>Across asset classes:</strong> Stocks, bonds, real estate, cash</li>
                            <li><strong>Across sectors:</strong> Tech, healthcare, energy, finance, consumer goods</li>
                            <li><strong>Across geographies:</strong> U.S., international, emerging markets</li>
                            <li><strong>Across company sizes:</strong> Large-cap, mid-cap, small-cap</li>
                        </ul>
                        <h3>The Easy Way to Diversify</h3>
                        <p>A single total stock market index fund (like VTI or VTSAX) gives you exposure to thousands of companies. Add a total bond fund and an international fund, and you have a well-diversified portfolio with just three funds.</p>
                        <div class="highlight">
                            <strong>Three-Fund Portfolio:</strong> U.S. total stock market + International stock market + U.S. total bond market. Simple, effective, and used by millions of investors.
                        </div>
                    `,
                    quiz: {
                        question: 'What is the primary purpose of diversification?',
                        options: [
                            'To guarantee that all investments make money',
                            'To reduce risk by spreading investments across different assets',
                            'To maximize returns by concentrating in one sector',
                            'To avoid paying taxes on investment gains'
                        ],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 2,
            title: 'Getting Started',
            subtitle: 'Setting up accounts and making your first investments',
            topics: [
                {
                    id: 'before-you-invest',
                    title: 'Before You Invest',
                    content: `
                        <h2>Before You Invest</h2>
                        <p>Before putting money into the market, make sure your financial foundation is solid.</p>
                        <h3>Prerequisites Checklist</h3>
                        <ol>
                            <li><strong>Pay off high-interest debt:</strong> Credit card debt at 20%+ interest will eat any investment gains. Pay that off first.</li>
                            <li><strong>Build an emergency fund:</strong> 3-6 months of living expenses in a high-yield savings account. This keeps you from having to sell investments at a loss during emergencies.</li>
                            <li><strong>Employer 401(k) match:</strong> If your employer matches 401(k) contributions, contribute at least enough to get the full match — it's literally free money with a 100% instant return.</li>
                        </ol>
                        <h3>Set Clear Goals</h3>
                        <ul>
                            <li><strong>Retirement:</strong> 20-40 years away — can take more risk</li>
                            <li><strong>House down payment:</strong> 3-7 years — moderate risk</li>
                            <li><strong>Emergency fund:</strong> Need it anytime — keep in savings, not investments</li>
                        </ul>
                        <div class="highlight">
                            <strong>Priority Order:</strong> 1) Employer match → 2) High-interest debt → 3) Emergency fund → 4) Roth IRA → 5) Max 401(k) → 6) Taxable brokerage
                        </div>
                    `,
                    quiz: {
                        question: 'What should you do BEFORE investing in the stock market?',
                        options: [
                            'Buy cryptocurrency first to practice',
                            'Pay off high-interest debt and build an emergency fund',
                            'Wait until you have $10,000 to invest',
                            'Find a financial advisor and pay their management fee'
                        ],
                        correct: 1
                    }
                },
                {
                    id: 'account-types',
                    title: 'Investment Account Types',
                    content: `
                        <h2>Investment Account Types</h2>
                        <p>Where you invest matters almost as much as what you invest in. Different account types have different tax advantages.</p>
                        <h3>Tax-Advantaged Accounts</h3>
                        <ul>
                            <li><strong>401(k) / 403(b):</strong> Employer-sponsored. Contributions reduce your taxable income today. Taxed when you withdraw in retirement. 2024 limit: $23,000.</li>
                            <li><strong>Traditional IRA:</strong> Individual retirement account. Tax-deductible contributions. Taxed on withdrawal. 2024 limit: $7,000.</li>
                            <li><strong>Roth IRA:</strong> Contribute after-tax money. Grows tax-free. Withdrawals in retirement are tax-free. 2024 limit: $7,000. Income limits apply.</li>
                            <li><strong>HSA (Health Savings Account):</strong> Triple tax advantage — deductible contributions, tax-free growth, tax-free withdrawals for medical expenses.</li>
                        </ul>
                        <h3>Taxable Brokerage Account</h3>
                        <p>No tax advantages, but no restrictions either. No contribution limits, no early withdrawal penalties, no income limits. Good for investing beyond retirement accounts.</p>
                        <h3>Roth vs Traditional</h3>
                        <ul>
                            <li><strong>Choose Roth if:</strong> You're young, in a lower tax bracket now, expect higher income later</li>
                            <li><strong>Choose Traditional if:</strong> You're in a high tax bracket now and expect lower income in retirement</li>
                        </ul>
                        <div class="highlight">
                            <strong>Young Investor Tip:</strong> If you're in your 20s-30s, the Roth IRA is often the best move. You pay taxes now at a low rate and never pay taxes on the growth — which could be decades of compounding.
                        </div>
                    `,
                    quiz: {
                        question: 'What is the main benefit of a Roth IRA?',
                        options: [
                            'Contributions are tax-deductible',
                            'There are no contribution limits',
                            'Withdrawals in retirement are completely tax-free',
                            'Your employer matches your contributions'
                        ],
                        correct: 2
                    }
                },
                {
                    id: 'opening-accounts',
                    title: 'Opening a Brokerage Account',
                    content: `
                        <h2>Opening a Brokerage Account</h2>
                        <p>Opening an investment account is straightforward and can be done online in minutes.</p>
                        <h3>Top Brokerage Options</h3>
                        <ul>
                            <li><strong>Fidelity:</strong> Excellent research tools, no minimums, fractional shares</li>
                            <li><strong>Charles Schwab:</strong> Full-service broker, great customer service</li>
                            <li><strong>Vanguard:</strong> Pioneer of index funds, investor-owned company</li>
                            <li><strong>Robinhood:</strong> Simple interface, good for beginners (but limited tools)</li>
                        </ul>
                        <h3>What You Need to Open</h3>
                        <ul>
                            <li>Social Security Number</li>
                            <li>Government-issued ID</li>
                            <li>Bank account for transfers</li>
                            <li>Employment information</li>
                        </ul>
                        <h3>Your First Investment</h3>
                        <p>Start simple. A single target-date fund or a total stock market index fund is a perfectly good first investment. You can get more sophisticated later.</p>
                        <div class="highlight">
                            <strong>Start Small:</strong> Many brokerages have no minimums. You can start with $50 or $100 through fractional shares. The point is to start.
                        </div>
                    `,
                    quiz: {
                        question: 'What is a good first investment for a beginner?',
                        options: [
                            'Individual penny stocks with high growth potential',
                            'A total stock market index fund or target-date fund',
                            'Cryptocurrency and NFTs',
                            'Options trading for quick returns'
                        ],
                        correct: 1
                    }
                },
                {
                    id: 'dollar-cost-averaging',
                    title: 'Dollar-Cost Averaging',
                    content: `
                        <h2>Dollar-Cost Averaging</h2>
                        <p>Dollar-cost averaging (DCA) means investing a fixed amount on a regular schedule, regardless of what the market is doing.</p>
                        <h3>How It Works</h3>
                        <p>Instead of trying to time the market and invest a lump sum at the "perfect" moment, you invest consistently:</p>
                        <ul>
                            <li>$200 every paycheck into your 401(k)</li>
                            <li>$100 every month into your Roth IRA</li>
                            <li>$50 every week into a brokerage account</li>
                        </ul>
                        <h3>Why It Works</h3>
                        <ul>
                            <li><strong>Removes emotion:</strong> You invest on schedule, not based on fear or greed</li>
                            <li><strong>Buys more when cheap:</strong> When prices drop, your fixed amount buys more shares</li>
                            <li><strong>Reduces timing risk:</strong> You don't risk putting all your money in at a market peak</li>
                            <li><strong>Builds discipline:</strong> Automatic investing becomes a habit</li>
                        </ul>
                        <h3>Automate It</h3>
                        <p>Set up automatic transfers from your bank to your brokerage account. Most brokerages let you auto-invest into specific funds. Set it and forget it.</p>
                        <div class="highlight">
                            <strong>Real Example:</strong> If you invested $500/month in the S&P 500 starting in 2000 (right before the dot-com crash), you'd still have over $500,000 by 2023 despite two major crashes along the way.
                        </div>
                    `,
                    quiz: {
                        question: 'What is the main advantage of dollar-cost averaging?',
                        options: [
                            'It guarantees you will always buy at the lowest price',
                            'It eliminates all investment risk',
                            'It removes emotional decision-making and reduces timing risk',
                            'It allows you to avoid paying taxes on gains'
                        ],
                        correct: 2
                    }
                }
            ]
        },
        {
            id: 3,
            title: 'Reading Charts & Analysis',
            subtitle: 'Understanding market data and making informed decisions',
            topics: [
                {
                    id: 'chart-types',
                    title: 'Types of Financial Charts',
                    content: `
                        <h2>Types of Financial Charts</h2>
                        <p>Charts are visual representations of price movement over time. Understanding them helps you see patterns and make informed decisions.</p>
                        <h3>Line Charts</h3>
                        <p>The simplest chart type. Connects closing prices over time with a single line. Good for seeing the big picture and overall trend.</p>
                        <h3>Bar Charts (OHLC)</h3>
                        <p>Each bar shows four data points for a time period: Open, High, Low, and Close. More detail than a line chart.</p>
                        <h3>Candlestick Charts</h3>
                        <p>The most popular chart type among traders. Similar to bar charts but more visual:</p>
                        <ul>
                            <li><strong>Green/White candle:</strong> Price closed higher than it opened (bullish)</li>
                            <li><strong>Red/Black candle:</strong> Price closed lower than it opened (bearish)</li>
                            <li><strong>Body:</strong> The thick part showing open-to-close range</li>
                            <li><strong>Wicks/Shadows:</strong> Thin lines showing the high and low</li>
                        </ul>
                        <h3>Time Frames</h3>
                        <ul>
                            <li><strong>1-minute / 5-minute:</strong> Day trading</li>
                            <li><strong>Daily:</strong> Swing trading and short-term investing</li>
                            <li><strong>Weekly / Monthly:</strong> Long-term investing and trend identification</li>
                        </ul>
                    `,
                    quiz: {
                        question: 'On a candlestick chart, what does a green candle indicate?',
                        options: [
                            'The stock lost value that day',
                            'The stock price closed higher than it opened',
                            'The stock is environmentally friendly',
                            'Trading volume was very high'
                        ],
                        correct: 1
                    }
                },
                {
                    id: 'support-resistance',
                    title: 'Support and Resistance',
                    content: `
                        <h2>Support and Resistance</h2>
                        <p>Support and resistance are price levels where buying or selling pressure tends to emerge, creating "floors" and "ceilings" for price movement.</p>
                        <h3>Support</h3>
                        <p>A price level where a stock tends to stop falling and bounce back up. Buyers step in because they see value at that price.</p>
                        <ul>
                            <li>Think of it as a floor</li>
                            <li>The more times a price bounces off support, the stronger it is</li>
                            <li>When support breaks, it often becomes resistance</li>
                        </ul>
                        <h3>Resistance</h3>
                        <p>A price level where a stock tends to stop rising and pull back. Sellers step in because they think the price is high enough.</p>
                        <ul>
                            <li>Think of it as a ceiling</li>
                            <li>When resistance breaks, it often becomes support</li>
                            <li>Breaking through resistance on high volume is a bullish signal</li>
                        </ul>
                        <h3>How to Identify Them</h3>
                        <p>Look for price levels that have been tested multiple times. The more touches, the more significant the level. Round numbers (like $100, $50) often act as psychological support/resistance.</p>
                    `,
                    quiz: {
                        question: 'What happens when a stock breaks through a resistance level on high volume?',
                        options: [
                            'It is always a signal to sell immediately',
                            'The resistance level often becomes a new support level',
                            'The stock will always continue rising forever',
                            'It means the company is about to report earnings'
                        ],
                        correct: 1
                    }
                },
                {
                    id: 'technical-indicators',
                    title: 'Key Technical Indicators',
                    content: `
                        <h2>Key Technical Indicators</h2>
                        <p>Technical indicators are mathematical calculations based on price and volume data. They help identify trends, momentum, and potential entry/exit points.</p>
                        <h3>Moving Averages</h3>
                        <ul>
                            <li><strong>SMA (Simple Moving Average):</strong> Average price over a set period (e.g., 50-day, 200-day)</li>
                            <li><strong>EMA (Exponential Moving Average):</strong> Gives more weight to recent prices</li>
                            <li><strong>Golden Cross:</strong> 50-day MA crosses above 200-day MA — bullish signal</li>
                            <li><strong>Death Cross:</strong> 50-day MA crosses below 200-day MA — bearish signal</li>
                        </ul>
                        <h3>RSI (Relative Strength Index)</h3>
                        <p>Measures momentum on a scale of 0-100:</p>
                        <ul>
                            <li><strong>Above 70:</strong> Overbought — may be due for a pullback</li>
                            <li><strong>Below 30:</strong> Oversold — may be due for a bounce</li>
                        </ul>
                        <h3>Volume</h3>
                        <p>The number of shares traded. Volume confirms price movements:</p>
                        <ul>
                            <li><strong>Price up + high volume:</strong> Strong bullish move</li>
                            <li><strong>Price up + low volume:</strong> Weak move, may reverse</li>
                        </ul>
                        <h3>MACD</h3>
                        <p>Moving Average Convergence Divergence — shows the relationship between two moving averages. When the MACD line crosses above the signal line, it's a bullish signal.</p>
                    `,
                    quiz: {
                        question: 'An RSI reading above 70 generally indicates what?',
                        options: [
                            'The stock is undervalued and a great buy',
                            'The stock may be overbought and due for a pullback',
                            'Volume is increasing significantly',
                            'A golden cross is about to occur'
                        ],
                        correct: 1
                    }
                },
                {
                    id: 'fundamental-analysis',
                    title: 'Fundamental vs Technical Analysis',
                    content: `
                        <h2>Fundamental vs Technical Analysis</h2>
                        <p>There are two main approaches to evaluating investments. Most successful investors use elements of both.</p>
                        <h3>Fundamental Analysis</h3>
                        <p>Examines the actual business behind the stock to determine its true value:</p>
                        <ul>
                            <li><strong>Revenue & Earnings:</strong> Is the company making money and growing?</li>
                            <li><strong>P/E Ratio:</strong> Price-to-Earnings ratio — how much you pay per dollar of earnings</li>
                            <li><strong>Debt levels:</strong> Is the company overleveraged?</li>
                            <li><strong>Competitive advantage:</strong> Does the company have a moat?</li>
                            <li><strong>Management quality:</strong> Are leaders making good decisions?</li>
                        </ul>
                        <h3>Technical Analysis</h3>
                        <p>Studies price patterns and market psychology to predict future movements:</p>
                        <ul>
                            <li><strong>Chart patterns:</strong> Head and shoulders, double bottoms, triangles</li>
                            <li><strong>Indicators:</strong> RSI, MACD, moving averages</li>
                            <li><strong>Volume analysis:</strong> Confirming price moves</li>
                        </ul>
                        <h3>Which to Use?</h3>
                        <ul>
                            <li><strong>Long-term investors:</strong> Focus more on fundamentals</li>
                            <li><strong>Active traders:</strong> Focus more on technicals</li>
                            <li><strong>Best approach:</strong> Use fundamentals to choose WHAT to buy, technicals to choose WHEN</li>
                        </ul>
                    `,
                    quiz: {
                        question: 'What does the P/E ratio measure?',
                        options: [
                            'The profit-to-expense ratio of a company',
                            'How much investors pay per dollar of the company earnings',
                            'The percentage of employees who own stock',
                            'The price change over the past year'
                        ],
                        correct: 1
                    }
                },
                {
                    id: 'common-mistakes',
                    title: 'Common Investing Mistakes',
                    content: `
                        <h2>Common Investing Mistakes</h2>
                        <p>Even smart people make these mistakes. Awareness is the first step to avoiding them.</p>
                        <h3>Emotional Mistakes</h3>
                        <ul>
                            <li><strong>Panic selling:</strong> Selling during a downturn locks in losses. Markets have always recovered.</li>
                            <li><strong>FOMO buying:</strong> Buying something because everyone else is. By the time it's trendy, it may be overpriced.</li>
                            <li><strong>Checking too often:</strong> Daily portfolio watching leads to emotional decisions. Check monthly at most.</li>
                        </ul>
                        <h3>Strategy Mistakes</h3>
                        <ul>
                            <li><strong>Trying to time the market:</strong> Even professionals can't do this consistently</li>
                            <li><strong>Not diversifying:</strong> Putting everything in one stock or sector</li>
                            <li><strong>Paying high fees:</strong> A 1% fee vs 0.03% fee can cost you hundreds of thousands over a lifetime</li>
                            <li><strong>Investing money you need soon:</strong> Don't invest your rent money or emergency fund</li>
                        </ul>
                        <h3>Knowledge Mistakes</h3>
                        <ul>
                            <li><strong>Following hot tips:</strong> If your barber is recommending stocks, be cautious</li>
                            <li><strong>Ignoring fees:</strong> Expense ratios, trading commissions, and advisor fees all eat returns</li>
                            <li><strong>Not understanding what you own:</strong> Always know what you're invested in and why</li>
                        </ul>
                        <div class="highlight">
                            <strong>Warren Buffett's Rule:</strong> "Be fearful when others are greedy and greedy when others are fearful."
                        </div>
                    `,
                    quiz: {
                        question: 'Why is panic selling during a market downturn a mistake?',
                        options: [
                            'Because the government will fine you for selling',
                            'Because it locks in your losses and markets have historically always recovered',
                            'Because you can only sell stocks on certain days',
                            'Because your broker charges extra fees during downturns'
                        ],
                        correct: 1
                    }
                }
            ]
        }
    ],
    finalExam: [
        {
            question: 'What is compound interest?',
            options: ['Interest paid only on your original deposit', 'Interest earned on both your principal and accumulated interest', 'A fee your bank charges for holding your money', 'A type of stock dividend'],
            correct: 1
        },
        {
            question: 'Which investment type typically has the highest long-term returns?',
            options: ['Savings accounts', 'Bonds', 'Stocks', 'CDs'],
            correct: 2
        },
        {
            question: 'What is an ETF?',
            options: ['An Electronic Tax Form', 'A type of savings account', 'An Exchange-Traded Fund that holds a basket of investments', 'A government retirement account'],
            correct: 2
        },
        {
            question: 'What should you do before investing in the stock market?',
            options: ['Find the hottest stock tip', 'Pay off high-interest debt and build an emergency fund', 'Wait until you can invest at least $10,000', 'Open accounts at every brokerage'],
            correct: 1
        },
        {
            question: 'What is the benefit of a Roth IRA for young investors?',
            options: ['No tax ever on anything', 'Contributions are tax-deductible', 'Growth and withdrawals in retirement are tax-free', 'Your employer matches contributions'],
            correct: 2
        },
        {
            question: 'Dollar-cost averaging means:',
            options: ['Buying only when prices are low', 'Investing a fixed amount on a regular schedule regardless of market conditions', 'Converting dollars to foreign currency before investing', 'Averaging your gains and losses for tax purposes'],
            correct: 1
        },
        {
            question: 'On a candlestick chart, a long lower wick (shadow) indicates:',
            options: ['Heavy selling pressure throughout the day', 'Buyers pushed the price back up after it dropped', 'The market is closed', 'Low trading volume'],
            correct: 1
        },
        {
            question: 'A "golden cross" in technical analysis refers to:',
            options: ['When gold prices reach an all-time high', 'When the 50-day moving average crosses above the 200-day moving average', 'When a stock hits exactly $100 per share', 'When two stocks merge together'],
            correct: 1
        },
        {
            question: 'What does a P/E ratio of 25 mean?',
            options: ['The stock has lost 25% this year', 'Investors are paying $25 for every $1 of company earnings', 'The company has 25 employees', 'The stock costs $25 per share'],
            correct: 1
        },
        {
            question: 'Which is the most effective approach to investing for most people?',
            options: ['Day trading individual stocks based on news', 'Consistently investing in diversified index funds over decades', 'Putting all money in the highest-performing stock from last year', 'Waiting for a market crash before investing anything'],
            correct: 1
        }
    ]
};
