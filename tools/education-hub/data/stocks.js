// Stock Market Curriculum Data
const stocksData = {
    id: 'stocks',
    title: 'Stock Market',
    icon: '📈',
    description: 'Learn how the stock market works, from basic terminology to advanced trading strategies.',
    difficulty: 'beginner',
    prerequisites: ['personalfinance'],
    learningObjectives: [
        'Explain how the stock market works and why it exists',
        'Analyze stocks using fundamental and technical indicators',
        'Build and manage a diversified portfolio',
        'Evaluate risk vs. return for different investment strategies',
        'Execute trades and manage a brokerage account'
    ],
    relatedTracks: ['investing', 'crypto', 'financialanalysis', 'retirement'],
    resources: [
        { title: 'Investor.gov - SEC', url: 'https://www.investor.gov/' },
        { title: 'Investopedia - Stock Basics', url: 'https://www.investopedia.com/stocks-4427785' },
        { title: 'FINRA Investor Education', url: 'https://www.finra.org/investors' }
    ],
    levels: [
        {
            id: 1,
            title: 'Foundations',
            subtitle: 'Understanding the basics of stocks and markets',
            learningObjectives: [
                'Define what a stock is and why companies issue them',
                'Identify major stock exchanges and how prices are set',
                'Use essential stock market terminology correctly',
                'Compare different types of investments (stocks, ETFs, bonds)'
            ],
            keyTakeaways: [
                'A stock represents partial ownership in a company',
                'Stock prices are driven by supply and demand',
                'Brokerage accounts are needed to buy stocks',
                'ETFs provide instant diversification for beginners'
            ],
            applyIt: 'Open a free brokerage account (Fidelity or Schwab) and look up 3 companies you use every day. Check their stock price, ticker symbol, and P/E ratio. Practice with paper trading before investing real money.',
            topics: [
                {
                    id: 'what-is-stock',
                    title: 'What is a Stock?',
                    content: `
                        <h2>What is a Stock?</h2>
                        
                        <div class="definition">
                            <strong>Definition:</strong> A stock (also called a share or equity) represents partial ownership in a company. When you buy a stock, you're buying a small piece of that business.
                        </div>
                        
                        <h3>Why Do Companies Issue Stocks?</h3>
                        <p>Companies sell stocks to raise money (capital) for various purposes:</p>
                        <ul>
                            <li><strong>Expansion:</strong> Opening new locations, entering new markets</li>
                            <li><strong>Research & Development:</strong> Creating new products</li>
                            <li><strong>Paying off debt:</strong> Reducing financial obligations</li>
                            <li><strong>Hiring:</strong> Growing the team</li>
                        </ul>
                        
                        <h3>What Do You Get as a Stockholder?</h3>
                        <ul>
                            <li><strong>Ownership:</strong> A tiny piece of the company</li>
                            <li><strong>Voting Rights:</strong> Say in major company decisions (usually)</li>
                            <li><strong>Dividends:</strong> Share of profits (if the company pays them)</li>
                            <li><strong>Capital Gains:</strong> Profit if the stock price rises</li>
                        </ul>
                        
                        <div class="highlight">
                            <strong>Key Insight:</strong> When you own Apple stock, you literally own a piece of Apple Inc. If Apple does well, your ownership becomes more valuable. If Apple struggles, your ownership decreases in value.
                        </div>
                        
                        <h3>Stock vs. Other Investments</h3>
                        <p><strong>Stocks</strong> = Ownership in a company</p>
                        <p><strong>Bonds</strong> = Lending money to a company or government (they owe you)</p>
                        <p><strong>Savings Account</strong> = Lending money to a bank (very safe, low returns)</p>
                    `
                },
                {
                    id: 'stock-market-basics',
                    title: 'How the Stock Market Works',
                    content: `
                        <h2>How the Stock Market Works</h2>
                        
                        <div class="definition">
                            <strong>The Stock Market:</strong> A marketplace where buyers and sellers trade stocks. Think of it like eBay, but for pieces of companies.
                        </div>
                        
                        <h3>Major Stock Exchanges</h3>
                        <ul>
                            <li><strong>NYSE (New York Stock Exchange):</strong> The largest exchange in the world. Companies like Coca-Cola, Disney, and Walmart trade here.</li>
                            <li><strong>NASDAQ:</strong> Known for tech companies. Apple, Microsoft, Amazon, and Google trade here.</li>
                            <li><strong>Other Exchanges:</strong> London Stock Exchange, Tokyo Stock Exchange, etc.</li>
                        </ul>
                        
                        <h3>How Prices Are Set</h3>
                        <p>Stock prices are determined by <strong>supply and demand</strong>:</p>
                        <ul>
                            <li>More buyers than sellers → Price goes <strong>UP</strong></li>
                            <li>More sellers than buyers → Price goes <strong>DOWN</strong></li>
                        </ul>
                        
                        <div class="example">
                            <strong>Example:</strong> If Apple announces record iPhone sales, more people want to buy Apple stock. This increased demand pushes the price higher.
                        </div>
                        
                        <h3>Market Hours</h3>
                        <p>US stock markets are open:</p>
                        <ul>
                            <li><strong>Regular Hours:</strong> 9:30 AM - 4:00 PM Eastern Time</li>
                            <li><strong>Pre-Market:</strong> 4:00 AM - 9:30 AM ET</li>
                            <li><strong>After-Hours:</strong> 4:00 PM - 8:00 PM ET</li>
                        </ul>
                        <p>Markets are closed on weekends and major holidays.</p>
                        
                        <h3>How to Buy Stocks</h3>
                        <p>You need a <strong>brokerage account</strong> to buy stocks. Popular brokers include:</p>
                        <ul>
                            <li>Fidelity</li>
                            <li>Charles Schwab</li>
                            <li>Robinhood</li>
                            <li>TD Ameritrade</li>
                            <li>Webull</li>
                        </ul>
                    `
                },
                {
                    id: 'key-terminology',
                    title: 'Essential Stock Market Terms',
                    content: `
                        <h2>Essential Stock Market Terms</h2>
                        
                        <p>Master these terms to understand stocks:</p>
                        
                        <h3>Basic Terms</h3>
                        
                        <div class="definition">
                            <strong>Share:</strong> One unit of stock. If you own 10 shares of Apple, you own 10 units of Apple stock.
                        </div>
                        
                        <div class="definition">
                            <strong>Ticker Symbol:</strong> The abbreviated code used to identify a stock. Apple = AAPL, Tesla = TSLA, Microsoft = MSFT.
                        </div>
                        
                        <div class="definition">
                            <strong>Market Cap (Market Capitalization):</strong> The total value of all a company's shares. <br>
                            Formula: Stock Price × Total Shares Outstanding<br>
                            Example: If Apple's stock is $150 and there are 16 billion shares, market cap = $2.4 trillion
                        </div>
                        
                        <h3>Price & Value Terms</h3>
                        
                        <div class="definition">
                            <strong>Bid Price:</strong> The highest price a buyer is willing to pay right now.
                        </div>
                        
                        <div class="definition">
                            <strong>Ask Price:</strong> The lowest price a seller is willing to accept right now.
                        </div>
                        
                        <div class="definition">
                            <strong>Spread:</strong> The difference between bid and ask price. A small spread means high liquidity (easy to buy/sell).
                        </div>
                        
                        <h3>Performance Terms</h3>
                        
                        <div class="definition">
                            <strong>Dividend:</strong> A payment companies make to shareholders from their profits. Not all stocks pay dividends.
                        </div>
                        
                        <div class="definition">
                            <strong>Dividend Yield:</strong> Annual dividend ÷ Stock price. If a $100 stock pays $3/year in dividends, yield = 3%.
                        </div>
                        
                        <div class="definition">
                            <strong>P/E Ratio (Price-to-Earnings):</strong> Stock price ÷ Earnings per share. Shows how much you're paying for each dollar of profit. Lower P/E might mean better value.
                        </div>
                        
                        <div class="highlight">
                            <strong>Pro Tip:</strong> Don't worry about memorizing everything. These terms will become natural as you continue learning and practicing.
                        </div>
                    `
                },
                {
                    id: 'investment-types',
                    title: 'Types of Investments',
                    content: `
                        <h2>Types of Investments</h2>
                        
                        <p>Stocks aren't the only option. Here's how they compare to other investments:</p>
                        
                        <h3>Individual Stocks</h3>
                        <ul>
                            <li><strong>What:</strong> Shares of a single company</li>
                            <li><strong>Risk:</strong> High (company could fail)</li>
                            <li><strong>Reward:</strong> High potential returns</li>
                            <li><strong>Best for:</strong> People who want to pick specific companies</li>
                        </ul>
                        
                        <h3>ETFs (Exchange-Traded Funds)</h3>
                        <div class="definition">
                            <strong>ETF:</strong> A basket of stocks that trades like a single stock. One purchase gives you exposure to many companies.
                        </div>
                        <ul>
                            <li><strong>Example:</strong> SPY tracks the S&P 500 (500 largest US companies)</li>
                            <li><strong>Risk:</strong> Lower than individual stocks (diversified)</li>
                            <li><strong>Best for:</strong> Beginners, passive investors</li>
                        </ul>
                        
                        <h3>Mutual Funds</h3>
                        <ul>
                            <li><strong>What:</strong> Professionally managed basket of investments</li>
                            <li><strong>Difference from ETFs:</strong> Priced once daily, often higher fees</li>
                            <li><strong>Best for:</strong> Long-term retirement investing</li>
                        </ul>
                        
                        <h3>Index Funds</h3>
                        <div class="definition">
                            <strong>Index Fund:</strong> A fund designed to match a market index (like the S&P 500). Very low fees because no active management.
                        </div>
                        
                        <h3>Bonds</h3>
                        <ul>
                            <li><strong>What:</strong> Loans to governments or companies</li>
                            <li><strong>Risk:</strong> Generally lower than stocks</li>
                            <li><strong>Return:</strong> Fixed interest payments</li>
                            <li><strong>Best for:</strong> Conservative investors, balancing portfolios</li>
                        </ul>
                        
                        <div class="highlight">
                            <strong>Beginner Recommendation:</strong> Start with index funds or ETFs. They provide instant diversification and lower risk while you learn.
                        </div>
                    `
                },
                {
                    id: 'opening-brokerage',
                    title: 'Opening a Brokerage Account',
                    content: `
                        <h2>Opening a Brokerage Account</h2>
                        
                        <p>To buy stocks, you need a brokerage account. Here's how to get started:</p>
                        
                        <h3>Types of Brokerage Accounts</h3>
                        
                        <div class="definition">
                            <strong>Taxable Brokerage Account:</strong> Regular investment account. You pay taxes on gains each year.
                        </div>
                        
                        <div class="definition">
                            <strong>Roth IRA:</strong> Retirement account. Contribute after-tax money, but withdrawals in retirement are TAX-FREE.
                        </div>
                        
                        <div class="definition">
                            <strong>Traditional IRA:</strong> Retirement account. Contribute pre-tax money (tax deduction now), pay taxes when you withdraw.
                        </div>
                        
                        <h3>Popular Brokers Compared</h3>
                        <ul>
                            <li><strong>Fidelity:</strong> Great for beginners, excellent research tools, no minimums</li>
                            <li><strong>Charles Schwab:</strong> Full-service broker, great customer service</li>
                            <li><strong>Robinhood:</strong> Simple app, good for beginners, limited features</li>
                            <li><strong>Webull:</strong> More advanced tools, paper trading available</li>
                            <li><strong>TD Ameritrade:</strong> Excellent education resources, thinkorswim platform</li>
                        </ul>
                        
                        <h3>What You Need to Open an Account</h3>
                        <ul>
                            <li>Social Security Number</li>
                            <li>Government ID</li>
                            <li>Bank account for funding</li>
                            <li>Employment information</li>
                        </ul>
                        
                        <h3>Steps to Get Started</h3>
                        <ol>
                            <li>Choose a broker</li>
                            <li>Complete the application (10-15 minutes)</li>
                            <li>Link your bank account</li>
                            <li>Transfer funds (1-3 business days)</li>
                            <li>Start with paper trading to practice!</li>
                        </ol>
                        
                        <div class="highlight">
                            <strong>Pro Tip:</strong> Many brokers offer paper trading (simulated trading with fake money). Use this to practice before risking real money!
                        </div>
                    `
                }
            ],
            quiz: [
                {
                    question: "What does owning a stock represent?",
                    options: [
                        "A loan to a company",
                        "Partial ownership in a company",
                        "A promise of future payment",
                        "Insurance against company failure"
                    ],
                    correct: 1,
                    explanation: "A stock represents partial ownership in a company. When you buy shares, you become a part-owner of that business."
                },
                {
                    question: "What determines stock prices?",
                    options: [
                        "The government sets them",
                        "The company's CEO decides",
                        "Supply and demand from buyers and sellers",
                        "A random number generator"
                    ],
                    correct: 2,
                    explanation: "Stock prices are determined by supply and demand. If more people want to buy than sell, the price goes up, and vice versa."
                },
                {
                    question: "What is a ticker symbol?",
                    options: [
                        "A company's tax ID number",
                        "An abbreviated code identifying a stock",
                        "The stock's current price",
                        "The number of shares available"
                    ],
                    correct: 1,
                    explanation: "A ticker symbol is the abbreviated code used to identify a stock on an exchange. For example, Apple's ticker is AAPL."
                },
                {
                    question: "What is an ETF?",
                    options: [
                        "A type of savings account",
                        "A single company's stock",
                        "A basket of stocks that trades like a single stock",
                        "A government bond"
                    ],
                    correct: 2,
                    explanation: "An ETF (Exchange-Traded Fund) is a basket of stocks that trades like a single stock, providing instant diversification."
                },
                {
                    question: "What is a dividend?",
                    options: [
                        "A fee you pay to buy stocks",
                        "A payment companies make to shareholders from profits",
                        "The price difference between bid and ask",
                        "A type of stock order"
                    ],
                    correct: 1,
                    explanation: "A dividend is a payment that companies distribute to shareholders from their profits. Not all companies pay dividends."
                }
            ]
        },
        {
            id: 2,
            title: 'Reading the Market',
            subtitle: 'Understanding charts, indicators, and market trends',
            learningObjectives: [
                'Read and interpret stock charts and candlestick patterns',
                'Understand key market indicators (volume, moving averages)',
                'Identify market trends and patterns',
                'Use technical analysis tools effectively'
            ],
            keyTakeaways: [
                'Charts show price movement over time',
                'Volume indicates how many shares are being traded',
                'Moving averages help identify trends',
                'Support and resistance levels guide entry/exit points'
            ],
            applyIt: 'Pick one stock you're interested in and create a watchlist. Track its price for a week, noting when it hits support or resistance levels. Practice reading its chart on Yahoo Finance or your broker\'s platform.',
            topics: [
                {
                    id: 'reading-charts',
                    title: 'How to Read Stock Charts',
                    content: `
                        <h2>How to Read Stock Charts</h2>
                        
                        <p>Charts visualize a stock's price movement over time. Learning to read them is essential.</p>
                        
                        <h3>Types of Charts</h3>
                        
                        <div class="definition">
                            <strong>Line Chart:</strong> The simplest chart. A line connecting closing prices over time. Good for seeing overall trends.
                        </div>
                        
                        <div class="definition">
                            <strong>Candlestick Chart:</strong> Shows open, high, low, and close prices. Most popular among traders.
                        </div>
                        
                        <h3>Reading Candlesticks</h3>
                        <p>Each candlestick shows 4 pieces of information:</p>
                        <ul>
                            <li><strong>Open:</strong> Price when the period started</li>
                            <li><strong>Close:</strong> Price when the period ended</li>
                            <li><strong>High:</strong> Highest price during the period</li>
                            <li><strong>Low:</strong> Lowest price during the period</li>
                        </ul>
                        
                        <div class="highlight">
                            <strong>Candlestick Colors:</strong><br>
                            🟢 <strong>Green/White:</strong> Close higher than open (bullish/up day)<br>
                            🔴 <strong>Red/Black:</strong> Close lower than open (bearish/down day)
                        </div>
                        
                        <h3>Timeframes</h3>
                        <p>Charts can show different time periods:</p>
                        <ul>
                            <li><strong>1-minute, 5-minute:</strong> Day trading</li>
                            <li><strong>1-hour, 4-hour:</strong> Swing trading</li>
                            <li><strong>Daily, Weekly:</strong> Long-term investing</li>
                        </ul>
                        
                        <h3>Volume</h3>
                        <div class="definition">
                            <strong>Volume:</strong> The number of shares traded in a period. High volume confirms price moves. Low volume suggests weak conviction.
                        </div>
                    `
                },
                {
                    id: 'technical-indicators',
                    title: 'Technical Indicators',
                    content: `
                        <h2>Technical Indicators</h2>
                        
                        <p>Indicators are mathematical calculations based on price and volume that help predict future movements.</p>
                        
                        <h3>Moving Averages</h3>
                        <div class="definition">
                            <strong>Moving Average (MA):</strong> The average price over a specific period. Smooths out price action to show trends.
                        </div>
                        <ul>
                            <li><strong>50-day MA:</strong> Short-term trend</li>
                            <li><strong>200-day MA:</strong> Long-term trend</li>
                            <li><strong>Golden Cross:</strong> 50-day crosses ABOVE 200-day (bullish signal)</li>
                            <li><strong>Death Cross:</strong> 50-day crosses BELOW 200-day (bearish signal)</li>
                        </ul>
                        
                        <h3>RSI (Relative Strength Index)</h3>
                        <div class="definition">
                            <strong>RSI:</strong> Measures momentum on a scale of 0-100.<br>
                            Above 70 = Overbought (might drop)<br>
                            Below 30 = Oversold (might rise)
                        </div>
                        
                        <h3>MACD (Moving Average Convergence Divergence)</h3>
                        <div class="definition">
                            <strong>MACD:</strong> Shows the relationship between two moving averages. Useful for identifying trend changes.
                        </div>
                        
                        <h3>Bollinger Bands</h3>
                        <div class="definition">
                            <strong>Bollinger Bands:</strong> Three lines showing a moving average with upper and lower bands. When price touches the bands, it often reverses.
                        </div>
                        
                        <div class="highlight">
                            <strong>Important:</strong> No indicator is perfect. Use multiple indicators together and never rely on just one.
                        </div>
                    `
                },
                {
                    id: 'market-indexes',
                    title: 'Understanding Market Indexes',
                    content: `
                        <h2>Understanding Market Indexes</h2>
                        
                        <p>Indexes measure the performance of a group of stocks, giving you a snapshot of the overall market.</p>
                        
                        <h3>Major US Indexes</h3>
                        
                        <div class="definition">
                            <strong>S&P 500:</strong> 500 largest US companies. The most watched index. If someone says "the market is up 2%," they usually mean this.
                        </div>
                        
                        <div class="definition">
                            <strong>Dow Jones Industrial Average (DJIA):</strong> 30 large, established companies. The oldest US index. Companies include Apple, Microsoft, Coca-Cola.
                        </div>
                        
                        <div class="definition">
                            <strong>NASDAQ Composite:</strong> All stocks on the NASDAQ exchange (mostly tech). More volatile than S&P 500.
                        </div>
                        
                        <div class="definition">
                            <strong>Russell 2000:</strong> 2000 small-cap companies. Good indicator of small business health.
                        </div>
                        
                        <h3>Why Indexes Matter</h3>
                        <ul>
                            <li><strong>Benchmarking:</strong> Compare your returns to the market</li>
                            <li><strong>Sentiment:</strong> Gauge overall investor confidence</li>
                            <li><strong>Investing:</strong> You can buy index funds that track these indexes</li>
                        </ul>
                        
                        <div class="highlight">
                            <strong>Fun Fact:</strong> From 1957-2023, the S&P 500 has averaged about 10% annual returns. Most professional fund managers can't consistently beat this!
                        </div>
                    `
                },
                {
                    id: 'bull-bear-markets',
                    title: 'Bull vs Bear Markets',
                    content: `
                        <h2>Bull vs Bear Markets</h2>
                        
                        <h3>Bull Market 🐂</h3>
                        <div class="definition">
                            <strong>Bull Market:</strong> A period when stock prices are rising or expected to rise. Generally defined as a 20%+ rise from recent lows.
                        </div>
                        <ul>
                            <li>Optimism and confidence</li>
                            <li>Strong economy</li>
                            <li>Low unemployment</li>
                            <li>Rising corporate profits</li>
                        </ul>
                        
                        <h3>Bear Market 🐻</h3>
                        <div class="definition">
                            <strong>Bear Market:</strong> A period when stock prices are falling. Generally defined as a 20%+ drop from recent highs.
                        </div>
                        <ul>
                            <li>Pessimism and fear</li>
                            <li>Economic weakness</li>
                            <li>Rising unemployment</li>
                            <li>Falling corporate profits</li>
                        </ul>
                        
                        <h3>Market Cycles</h3>
                        <p>Markets move in cycles:</p>
                        <ol>
                            <li><strong>Accumulation:</strong> Smart money starts buying after a bear market</li>
                            <li><strong>Markup:</strong> Prices rise, more investors join (bull market)</li>
                            <li><strong>Distribution:</strong> Smart money starts selling at highs</li>
                            <li><strong>Markdown:</strong> Prices fall, panic selling (bear market)</li>
                        </ol>
                        
                        <div class="highlight">
                            <strong>Key Insight:</strong> Bear markets are painful but temporary. Every bear market in history has eventually been followed by a bull market. Long-term investors should see bear markets as buying opportunities.
                        </div>
                    `
                },
                {
                    id: 'support-resistance',
                    title: 'Support and Resistance',
                    content: `
                        <h2>Support and Resistance</h2>
                        
                        <p>These are key price levels where buying or selling pressure tends to change.</p>
                        
                        <h3>Support</h3>
                        <div class="definition">
                            <strong>Support:</strong> A price level where a stock tends to stop falling and bounce back up. Think of it as a "floor."
                        </div>
                        <ul>
                            <li>Buyers see value and step in</li>
                            <li>Demand increases at this level</li>
                            <li>If broken, often becomes resistance</li>
                        </ul>
                        
                        <h3>Resistance</h3>
                        <div class="definition">
                            <strong>Resistance:</strong> A price level where a stock tends to stop rising and pull back. Think of it as a "ceiling."
                        </div>
                        <ul>
                            <li>Sellers take profits at this level</li>
                            <li>Supply increases</li>
                            <li>If broken, often becomes support</li>
                        </ul>
                        
                        <h3>How to Identify Them</h3>
                        <ul>
                            <li>Look for prices that were tested multiple times</li>
                            <li>Round numbers often act as psychological levels ($100, $50)</li>
                            <li>Previous highs and lows</li>
                            <li>Moving averages can act as dynamic support/resistance</li>
                        </ul>
                        
                        <div class="highlight">
                            <strong>Trading Tip:</strong> Many traders buy near support and sell near resistance. When these levels break, it often signals a strong move in that direction.
                        </div>
                    `
                }
            ],
            quiz: [
                {
                    question: "What does a green (or white) candlestick indicate?",
                    options: [
                        "The stock price dropped that day",
                        "The stock closed higher than it opened",
                        "High trading volume",
                        "A dividend was paid"
                    ],
                    correct: 1,
                    explanation: "A green candlestick means the closing price was higher than the opening price - a bullish/up day."
                },
                {
                    question: "What does an RSI above 70 typically suggest?",
                    options: [
                        "The stock is undervalued",
                        "The stock might be overbought",
                        "High trading volume",
                        "A bull market is starting"
                    ],
                    correct: 1,
                    explanation: "An RSI above 70 suggests the stock may be overbought (potentially due for a pullback)."
                },
                {
                    question: "What is the S&P 500?",
                    options: [
                        "The 500 cheapest stocks",
                        "An index tracking 500 large US companies",
                        "A type of bond",
                        "A cryptocurrency"
                    ],
                    correct: 1,
                    explanation: "The S&P 500 is an index that tracks the 500 largest publicly traded US companies."
                },
                {
                    question: "What defines a bear market?",
                    options: [
                        "A 5% drop from highs",
                        "Any red day in the market",
                        "A 20%+ drop from recent highs",
                        "When bears are bought at zoos"
                    ],
                    correct: 2,
                    explanation: "A bear market is typically defined as a 20% or greater decline from recent highs."
                },
                {
                    question: "What is a support level?",
                    options: [
                        "The highest price a stock ever reached",
                        "A price floor where stocks tend to stop falling",
                        "Customer service for brokers",
                        "The minimum investment amount"
                    ],
                    correct: 1,
                    explanation: "Support is a price level where demand increases and the stock tends to stop falling - acting like a floor."
                }
            ]
        },
        {
            id: 3,
            title: 'Stock Analysis',
            subtitle: 'Fundamental and technical analysis techniques',
            learningObjectives: [
                'Analyze companies using fundamental metrics (P/E, revenue, debt)',
                'Evaluate a company\'s financial health and growth potential',
                'Use technical indicators to time entry and exit points',
                'Combine fundamental and technical analysis for better decisions'
            ],
            keyTakeaways: [
                'Fundamental analysis evaluates a company\'s financial health',
                'P/E ratio compares stock price to earnings',
                'Technical analysis uses charts and patterns to predict price movement',
                'The best investors combine both approaches'
            ],
            applyIt: 'Pick a company you know well (like Apple or Microsoft). Research its P/E ratio, revenue growth, and debt levels. Then look at its 1-year chart and identify any trends or patterns. Write down your analysis.',
            topics: [
                {
                    id: 'fundamental-analysis',
                    title: 'Fundamental Analysis Basics',
                    content: `
                        <h2>Fundamental Analysis</h2>
                        
                        <div class="definition">
                            <strong>Fundamental Analysis:</strong> Evaluating a company's financial health and intrinsic value by analyzing financial statements, industry position, and economic factors.
                        </div>
                        
                        <h3>Key Financial Statements</h3>
                        
                        <p><strong>1. Income Statement (Profit & Loss)</strong></p>
                        <ul>
                            <li>Revenue: Total money earned</li>
                            <li>Expenses: Costs to run the business</li>
                            <li>Net Income: Profit (Revenue - Expenses)</li>
                        </ul>
                        
                        <p><strong>2. Balance Sheet</strong></p>
                        <ul>
                            <li>Assets: What the company owns</li>
                            <li>Liabilities: What the company owes</li>
                            <li>Equity: Assets - Liabilities (ownership value)</li>
                        </ul>
                        
                        <p><strong>3. Cash Flow Statement</strong></p>
                        <ul>
                            <li>Operating: Cash from business operations</li>
                            <li>Investing: Cash for buying/selling assets</li>
                            <li>Financing: Cash from loans, stock sales</li>
                        </ul>
                        
                        <h3>What to Look For</h3>
                        <ul>
                            <li>Growing revenue year over year</li>
                            <li>Consistent or increasing profit margins</li>
                            <li>Positive free cash flow</li>
                            <li>Manageable debt levels</li>
                            <li>Strong competitive position</li>
                        </ul>
                    `
                },
                {
                    id: 'valuation-ratios',
                    title: 'Important Valuation Ratios',
                    content: `
                        <h2>Valuation Ratios</h2>
                        
                        <p>Ratios help you compare companies and determine if a stock is fairly priced.</p>
                        
                        <h3>P/E Ratio (Price-to-Earnings)</h3>
                        <div class="definition">
                            <strong>P/E Ratio</strong> = Stock Price ÷ Earnings Per Share<br><br>
                            Shows how much you pay for each dollar of profit.<br>
                            Lower P/E might mean better value (or problems).<br>
                            S&P 500 average: ~20-25
                        </div>
                        
                        <h3>P/S Ratio (Price-to-Sales)</h3>
                        <div class="definition">
                            <strong>P/S Ratio</strong> = Market Cap ÷ Annual Revenue<br><br>
                            Useful for companies without profits yet.<br>
                            Under 2 is generally considered good value.
                        </div>
                        
                        <h3>P/B Ratio (Price-to-Book)</h3>
                        <div class="definition">
                            <strong>P/B Ratio</strong> = Stock Price ÷ Book Value Per Share<br><br>
                            Compares price to net asset value.<br>
                            Under 1 might mean undervalued (or troubled).
                        </div>
                        
                        <h3>PEG Ratio</h3>
                        <div class="definition">
                            <strong>PEG Ratio</strong> = P/E ÷ Earnings Growth Rate<br><br>
                            Accounts for growth. Under 1 is attractive.<br>
                            Example: P/E of 30 with 30% growth = PEG of 1
                        </div>
                        
                        <div class="highlight">
                            <strong>Warning:</strong> Never use just one ratio. Always compare to industry peers and look at the bigger picture.
                        </div>
                    `
                },
                {
                    id: 'technical-analysis-advanced',
                    title: 'Advanced Technical Analysis',
                    content: `
                        <h2>Advanced Technical Analysis</h2>
                        
                        <h3>Chart Patterns</h3>
                        
                        <p><strong>Bullish Patterns (Price may rise):</strong></p>
                        <ul>
                            <li><strong>Cup and Handle:</strong> U-shaped recovery with small pullback</li>
                            <li><strong>Double Bottom:</strong> W shape, two lows at similar price</li>
                            <li><strong>Ascending Triangle:</strong> Higher lows with flat resistance</li>
                            <li><strong>Bull Flag:</strong> Sharp rise, then small consolidation</li>
                        </ul>
                        
                        <p><strong>Bearish Patterns (Price may fall):</strong></p>
                        <ul>
                            <li><strong>Head and Shoulders:</strong> Three peaks, middle highest</li>
                            <li><strong>Double Top:</strong> M shape, two highs at similar price</li>
                            <li><strong>Descending Triangle:</strong> Lower highs with flat support</li>
                            <li><strong>Bear Flag:</strong> Sharp drop, then small bounce</li>
                        </ul>
                        
                        <h3>Fibonacci Retracements</h3>
                        <div class="definition">
                            <strong>Fibonacci Levels:</strong> Key percentages (23.6%, 38.2%, 50%, 61.8%) where price often reverses. Based on the mathematical Fibonacci sequence.
                        </div>
                        
                        <h3>Volume Analysis</h3>
                        <ul>
                            <li><strong>Rising price + high volume:</strong> Strong bullish signal</li>
                            <li><strong>Falling price + high volume:</strong> Strong bearish signal</li>
                            <li><strong>Price move + low volume:</strong> Weak, might reverse</li>
                        </ul>
                        
                        <div class="highlight">
                            <strong>Remember:</strong> Technical analysis is not fortune-telling. It's about probabilities and managing risk, not certainties.
                        </div>
                    `
                },
                {
                    id: 'researching-stocks',
                    title: 'How to Research a Stock',
                    content: `
                        <h2>How to Research a Stock</h2>
                        
                        <h3>Step 1: Understand the Business</h3>
                        <ul>
                            <li>What does the company do?</li>
                            <li>How does it make money?</li>
                            <li>Who are its customers?</li>
                            <li>What are its competitive advantages?</li>
                        </ul>
                        
                        <h3>Step 2: Analyze Financials</h3>
                        <ul>
                            <li>Is revenue growing?</li>
                            <li>Is the company profitable?</li>
                            <li>How much debt does it have?</li>
                            <li>Is it generating cash?</li>
                        </ul>
                        
                        <h3>Step 3: Check Valuation</h3>
                        <ul>
                            <li>Compare P/E, P/S to industry peers</li>
                            <li>Is current price reasonable given growth?</li>
                            <li>What do analysts estimate for future earnings?</li>
                        </ul>
                        
                        <h3>Step 4: Consider Risks</h3>
                        <ul>
                            <li>Competition threats</li>
                            <li>Regulatory risks</li>
                            <li>Economic sensitivity</li>
                            <li>Management quality</li>
                        </ul>
                        
                        <h3>Free Research Tools</h3>
                        <ul>
                            <li><strong>Yahoo Finance:</strong> Basic financials, news</li>
                            <li><strong>Finviz:</strong> Screening, charts</li>
                            <li><strong>SEC.gov:</strong> Official filings (10-K, 10-Q)</li>
                            <li><strong>Seeking Alpha:</strong> Analysis articles</li>
                        </ul>
                    `
                },
                {
                    id: 'sec-filings',
                    title: 'Reading SEC Filings',
                    content: `
                        <h2>Understanding SEC Filings</h2>
                        
                        <div class="definition">
                            <strong>SEC:</strong> Securities and Exchange Commission. Public companies must file regular reports with detailed financial information.
                        </div>
                        
                        <h3>Key Filing Types</h3>
                        
                        <p><strong>10-K (Annual Report)</strong></p>
                        <ul>
                            <li>Filed once per year</li>
                            <li>Comprehensive overview of business</li>
                            <li>Full financial statements</li>
                            <li>Risk factors disclosure</li>
                        </ul>
                        
                        <p><strong>10-Q (Quarterly Report)</strong></p>
                        <ul>
                            <li>Filed three times per year</li>
                            <li>Unaudited financials</li>
                            <li>Updates on business</li>
                        </ul>
                        
                        <p><strong>8-K (Current Report)</strong></p>
                        <ul>
                            <li>Filed when major events occur</li>
                            <li>Acquisitions, executive changes</li>
                            <li>Earnings announcements</li>
                        </ul>
                        
                        <h3>Sections to Focus On</h3>
                        <ul>
                            <li><strong>Business Description:</strong> What the company does</li>
                            <li><strong>Risk Factors:</strong> What could go wrong</li>
                            <li><strong>MD&A:</strong> Management's analysis of results</li>
                            <li><strong>Financial Statements:</strong> The numbers</li>
                        </ul>
                        
                        <div class="highlight">
                            <strong>Pro Tip:</strong> Read the risk factors section carefully. Companies must disclose what could hurt their business. This is where you find red flags.
                        </div>
                    `
                }
            ],
            quiz: [
                {
                    question: "What is fundamental analysis?",
                    options: [
                        "Only looking at stock charts",
                        "Evaluating a company's financial health and value",
                        "Following news headlines",
                        "Copying other investors"
                    ],
                    correct: 1,
                    explanation: "Fundamental analysis involves evaluating a company's financial statements, competitive position, and intrinsic value."
                },
                {
                    question: "A P/E ratio of 15 means:",
                    options: [
                        "The stock costs $15",
                        "You pay $15 for every $1 of earnings",
                        "The company has 15 employees",
                        "The stock rose 15%"
                    ],
                    correct: 1,
                    explanation: "A P/E of 15 means investors are paying $15 for every $1 of annual earnings the company generates."
                },
                {
                    question: "What does a 'double bottom' pattern suggest?",
                    options: [
                        "The stock will likely fall",
                        "A potential bullish reversal",
                        "The company is bankrupt",
                        "High dividend payment"
                    ],
                    correct: 1,
                    explanation: "A double bottom (W shape) is a bullish reversal pattern suggesting the stock may rise after testing support twice."
                },
                {
                    question: "What is a 10-K filing?",
                    options: [
                        "A daily stock price report",
                        "A comprehensive annual report filed with the SEC",
                        "A type of retirement account",
                        "A 10-thousand dollar investment"
                    ],
                    correct: 1,
                    explanation: "A 10-K is a comprehensive annual report that public companies must file with the SEC, containing detailed financial and business information."
                },
                {
                    question: "Rising price with HIGH volume suggests:",
                    options: [
                        "Weak price movement",
                        "Strong conviction behind the move",
                        "The stock is overvalued",
                        "A dividend is coming"
                    ],
                    correct: 1,
                    explanation: "High volume confirms a price move, showing strong conviction from many market participants."
                }
            ]
        },
        {
            id: 4,
            title: 'Investing Strategies',
            subtitle: 'Building and managing your investment portfolio',
            learningObjectives: [
                'Design a diversified portfolio based on your risk tolerance',
                'Implement dollar-cost averaging to reduce risk',
                'Rebalance your portfolio periodically',
                'Choose between active and passive investing strategies'
            ],
            keyTakeaways: [
                'Diversification reduces risk by spreading investments across assets',
                'Dollar-cost averaging smooths out market volatility',
                'Rebalancing keeps your portfolio aligned with your goals',
                'Most investors should use a passive, index-based approach'
            ],
            applyIt: 'Create a mock portfolio with $10,000. Allocate it across 5-10 different stocks or ETFs based on your risk tolerance. Track it for a month and see how it performs. Practice rebalancing if one position grows too large.',
            topics: [
                {
                    id: 'investing-vs-trading',
                    title: 'Investing vs Trading',
                    content: `
                        <h2>Investing vs Trading</h2>
                        
                        <h3>Long-Term Investing</h3>
                        <div class="definition">
                            <strong>Investing:</strong> Buying and holding assets for years or decades. Focus on long-term growth.
                        </div>
                        <ul>
                            <li>Time horizon: Years to decades</li>
                            <li>Based on fundamentals</li>
                            <li>Lower stress, less time needed</li>
                            <li>Benefits from compound growth</li>
                            <li>Lower tax rates (long-term capital gains)</li>
                        </ul>
                        
                        <h3>Trading</h3>
                        <div class="definition">
                            <strong>Trading:</strong> Buying and selling frequently to profit from short-term price movements.
                        </div>
                        <ul>
                            <li>Time horizon: Minutes to months</li>
                            <li>Based on technical analysis</li>
                            <li>Higher stress, more time needed</li>
                            <li>Higher transaction costs</li>
                            <li>Higher taxes (short-term gains)</li>
                        </ul>
                        
                        <div class="highlight">
                            <strong>Statistics:</strong> Studies show 70-90% of day traders lose money. Long-term index investing has historically been the most reliable way to build wealth.
                        </div>
                        
                        <h3>Which is Right for You?</h3>
                        <p>Consider investing if you:</p>
                        <ul>
                            <li>Have limited time</li>
                            <li>Prefer lower stress</li>
                            <li>Are building for retirement</li>
                        </ul>
                        <p>Consider trading only if you:</p>
                        <ul>
                            <li>Have time to dedicate</li>
                            <li>Can handle losses emotionally</li>
                            <li>Are using money you can afford to lose</li>
                        </ul>
                    `
                },
                {
                    id: 'dollar-cost-averaging',
                    title: 'Dollar-Cost Averaging',
                    content: `
                        <h2>Dollar-Cost Averaging (DCA)</h2>
                        
                        <div class="definition">
                            <strong>Dollar-Cost Averaging:</strong> Investing a fixed amount at regular intervals, regardless of price. This removes emotion and reduces timing risk.
                        </div>
                        
                        <h3>How It Works</h3>
                        <div class="example">
                            <strong>Example:</strong> You invest $500/month in an S&P 500 fund:<br><br>
                            Month 1: Price $100 → Buy 5 shares<br>
                            Month 2: Price $80 → Buy 6.25 shares<br>
                            Month 3: Price $120 → Buy 4.17 shares<br><br>
                            Total: $1,500 invested, 15.42 shares<br>
                            Average cost: $97.27/share
                        </div>
                        
                        <h3>Benefits</h3>
                        <ul>
                            <li><strong>Removes emotion:</strong> No trying to "time the market"</li>
                            <li><strong>Reduces risk:</strong> Averages out your purchase price</li>
                            <li><strong>Builds discipline:</strong> Consistent investing habit</li>
                            <li><strong>Works automatically:</strong> Set it and forget it</li>
                        </ul>
                        
                        <h3>When to Use DCA</h3>
                        <ul>
                            <li>Regular contributions to retirement accounts</li>
                            <li>Building a position over time</li>
                            <li>Uncertain or volatile markets</li>
                        </ul>
                        
                        <div class="highlight">
                            <strong>Pro Tip:</strong> Set up automatic investments on payday. You'll never miss the money, and your wealth builds automatically.
                        </div>
                    `
                },
                {
                    id: 'diversification',
                    title: 'Portfolio Diversification',
                    content: `
                        <h2>Portfolio Diversification</h2>
                        
                        <div class="definition">
                            <strong>Diversification:</strong> Spreading investments across different assets to reduce risk. "Don't put all your eggs in one basket."
                        </div>
                        
                        <h3>Types of Diversification</h3>
                        
                        <p><strong>Asset Class Diversification</strong></p>
                        <ul>
                            <li>Stocks (growth potential)</li>
                            <li>Bonds (stability, income)</li>
                            <li>Real estate (inflation hedge)</li>
                            <li>Cash (safety, liquidity)</li>
                        </ul>
                        
                        <p><strong>Sector Diversification</strong></p>
                        <ul>
                            <li>Technology</li>
                            <li>Healthcare</li>
                            <li>Finance</li>
                            <li>Consumer goods</li>
                            <li>Energy</li>
                        </ul>
                        
                        <p><strong>Geographic Diversification</strong></p>
                        <ul>
                            <li>US stocks</li>
                            <li>International developed markets</li>
                            <li>Emerging markets</li>
                        </ul>
                        
                        <h3>Sample Portfolio Allocations</h3>
                        <p><strong>Aggressive (Young, high risk tolerance):</strong></p>
                        <ul>
                            <li>90% Stocks / 10% Bonds</li>
                        </ul>
                        
                        <p><strong>Moderate (Middle-aged):</strong></p>
                        <ul>
                            <li>70% Stocks / 30% Bonds</li>
                        </ul>
                        
                        <p><strong>Conservative (Near retirement):</strong></p>
                        <ul>
                            <li>40% Stocks / 60% Bonds</li>
                        </ul>
                        
                        <div class="highlight">
                            <strong>Simple approach:</strong> A total stock market index fund + total bond market index fund gives you instant diversification across thousands of securities.
                        </div>
                    `
                },
                {
                    id: 'risk-management',
                    title: 'Risk Management',
                    content: `
                        <h2>Risk Management</h2>
                        
                        <p>Managing risk is just as important as finding good investments.</p>
                        
                        <h3>Position Sizing</h3>
                        <div class="definition">
                            <strong>Position Sizing:</strong> Limiting how much of your portfolio goes into any single investment.
                        </div>
                        <ul>
                            <li><strong>General rule:</strong> No more than 5-10% in any single stock</li>
                            <li><strong>Why:</strong> If one stock drops 50%, your portfolio only drops 5%</li>
                        </ul>
                        
                        <h3>Stop-Loss Orders</h3>
                        <div class="definition">
                            <strong>Stop-Loss:</strong> An order to sell if the price drops to a certain level. Limits potential losses.
                        </div>
                        <ul>
                            <li>Example: Buy at $100, set stop-loss at $90 (10% max loss)</li>
                            <li>Removes emotion from selling decisions</li>
                        </ul>
                        
                        <h3>The 2% Rule (For Traders)</h3>
                        <ul>
                            <li>Never risk more than 2% of your portfolio on a single trade</li>
                            <li>Allows you to survive losing streaks</li>
                        </ul>
                        
                        <h3>Emotional Risk Management</h3>
                        <ul>
                            <li><strong>FOMO:</strong> Don't buy just because something is going up</li>
                            <li><strong>Panic selling:</strong> Don't sell just because something dropped</li>
                            <li><strong>Have a plan:</strong> Know your buy/sell criteria BEFORE investing</li>
                        </ul>
                        
                        <div class="highlight">
                            <strong>Warren Buffett's Rules:</strong><br>
                            Rule #1: Never lose money.<br>
                            Rule #2: Never forget rule #1.<br><br>
                            This means prioritize protecting your capital over chasing gains.
                        </div>
                    `
                },
                {
                    id: 'when-to-buy-sell',
                    title: 'When to Buy and Sell',
                    content: `
                        <h2>When to Buy and Sell</h2>
                        
                        <h3>When to Buy</h3>
                        <ul>
                            <li><strong>You've done your research:</strong> Understand the business</li>
                            <li><strong>Valuation is reasonable:</strong> Not overpaying</li>
                            <li><strong>Long-term thesis is intact:</strong> You believe in the future</li>
                            <li><strong>Market dips:</strong> Quality stocks "on sale"</li>
                        </ul>
                        
                        <h3>When NOT to Buy</h3>
                        <ul>
                            <li>Because everyone else is buying (FOMO)</li>
                            <li>Hot tips from friends/internet</li>
                            <li>You can't afford to lose the money</li>
                            <li>You don't understand the business</li>
                        </ul>
                        
                        <h3>When to Sell</h3>
                        <ul>
                            <li><strong>Thesis changed:</strong> The reason you bought no longer applies</li>
                            <li><strong>Better opportunity:</strong> Found something with higher potential</li>
                            <li><strong>Rebalancing:</strong> Position grew too large</li>
                            <li><strong>You need the money:</strong> Life happens</li>
                        </ul>
                        
                        <h3>When NOT to Sell</h3>
                        <ul>
                            <li>Just because the price dropped (if fundamentals unchanged)</li>
                            <li>Market panic (often the worst time to sell)</li>
                            <li>Short-term noise</li>
                        </ul>
                        
                        <div class="highlight">
                            <strong>Peter Lynch's advice:</strong> "Far more money has been lost by investors preparing for corrections, or trying to anticipate corrections, than has been lost in corrections themselves."
                        </div>
                    `
                }
            ],
            quiz: [
                {
                    question: "What percentage of day traders typically lose money?",
                    options: [
                        "10-20%",
                        "30-40%",
                        "50-60%",
                        "70-90%"
                    ],
                    correct: 3,
                    explanation: "Studies consistently show that 70-90% of day traders lose money over time. Long-term investing has historically been more reliable."
                },
                {
                    question: "What is dollar-cost averaging?",
                    options: [
                        "Buying only cheap stocks",
                        "Investing a fixed amount at regular intervals",
                        "Selling when prices drop",
                        "Timing the market perfectly"
                    ],
                    correct: 1,
                    explanation: "Dollar-cost averaging means investing a fixed amount regularly regardless of price, which averages out your purchase price over time."
                },
                {
                    question: "Why is diversification important?",
                    options: [
                        "It guarantees profits",
                        "It makes investing more exciting",
                        "It reduces risk by spreading investments",
                        "It increases trading fees"
                    ],
                    correct: 2,
                    explanation: "Diversification reduces risk by spreading investments across different assets, so poor performance in one area doesn't devastate your entire portfolio."
                },
                {
                    question: "What is a stop-loss order?",
                    options: [
                        "An order to buy more if price drops",
                        "An order to automatically sell at a certain price",
                        "A way to stop receiving dividends",
                        "A market closing order"
                    ],
                    correct: 1,
                    explanation: "A stop-loss is an order that automatically sells your position if the price drops to a certain level, limiting your potential losses."
                },
                {
                    question: "When should you consider selling a stock?",
                    options: [
                        "Whenever the price drops",
                        "When the original reason for buying no longer applies",
                        "When your friend tells you to",
                        "On Fridays"
                    ],
                    correct: 1,
                    explanation: "Consider selling when your investment thesis has changed - when the fundamental reason you bought the stock no longer applies."
                }
            ]
        },
        {
            id: 5,
            title: 'Advanced Topics',
            subtitle: 'Options, short selling, and tax implications',
            learningObjectives: [
                'Understand options trading and when to use it',
                'Explain short selling and its risks',
                'Minimize taxes on investment gains',
                'Use advanced strategies for experienced investors'
            ],
            keyTakeaways: [
                'Options give you the right to buy/sell at a set price',
                'Short selling bets against a stock\'s price',
                'Tax-loss harvesting can reduce your tax bill',
                'Advanced strategies require significant knowledge and risk tolerance'
            ],
            applyIt: 'If you have taxable investments, review your gains and losses for the year. Research tax-loss harvesting strategies. Consider consulting a tax professional before implementing advanced strategies.',
            topics: [
                {
                    id: 'options-basics',
                    title: 'Introduction to Options',
                    content: `
                        <h2>Introduction to Options</h2>
                        
                        <div class="definition">
                            <strong>Option:</strong> A contract giving you the RIGHT (not obligation) to buy or sell a stock at a specific price before a certain date.
                        </div>
                        
                        <h3>Two Types of Options</h3>
                        
                        <p><strong>Call Option</strong></p>
                        <ul>
                            <li>Right to BUY a stock at a set price</li>
                            <li>You profit if the stock goes UP</li>
                            <li>Used when you're bullish</li>
                        </ul>
                        
                        <p><strong>Put Option</strong></p>
                        <ul>
                            <li>Right to SELL a stock at a set price</li>
                            <li>You profit if the stock goes DOWN</li>
                            <li>Used when you're bearish or hedging</li>
                        </ul>
                        
                        <h3>Key Terms</h3>
                        <ul>
                            <li><strong>Strike Price:</strong> The price at which you can buy/sell</li>
                            <li><strong>Premium:</strong> The cost of the option contract</li>
                            <li><strong>Expiration:</strong> When the option expires</li>
                            <li><strong>In the Money:</strong> Option has intrinsic value</li>
                            <li><strong>Out of the Money:</strong> Option has no intrinsic value</li>
                        </ul>
                        
                        <div class="example">
                            <strong>Example:</strong> Apple trades at $150. You buy a call option with $160 strike for $5 premium.<br><br>
                            If Apple rises to $180: Your option is worth $20 (180-160). Profit = $15 (20-5).<br>
                            If Apple stays below $160: Option expires worthless. Loss = $5 (your premium).
                        </div>
                        
                        <div class="highlight">
                            <strong>Warning:</strong> Options can result in 100% loss of your investment. Only trade options with money you can afford to lose and after thorough education.
                        </div>
                    `
                },
                {
                    id: 'short-selling',
                    title: 'Short Selling',
                    content: `
                        <h2>Short Selling</h2>
                        
                        <div class="definition">
                            <strong>Short Selling:</strong> Borrowing shares, selling them, then buying them back later (hopefully at a lower price) to profit from a stock's decline.
                        </div>
                        
                        <h3>How Short Selling Works</h3>
                        <ol>
                            <li>Borrow shares from your broker</li>
                            <li>Sell the borrowed shares immediately</li>
                            <li>Wait for price to drop</li>
                            <li>Buy shares back at lower price</li>
                            <li>Return shares to broker, keep the difference</li>
                        </ol>
                        
                        <div class="example">
                            <strong>Example:</strong><br>
                            1. Borrow and sell 100 shares at $50 = $5,000<br>
                            2. Price drops to $30<br>
                            3. Buy back 100 shares at $30 = $3,000<br>
                            4. Return shares, profit = $2,000
                        </div>
                        
                        <h3>Risks of Short Selling</h3>
                        <ul>
                            <li><strong>Unlimited loss potential:</strong> Stock can rise infinitely</li>
                            <li><strong>Short squeeze:</strong> Price spikes forcing shorts to cover</li>
                            <li><strong>Borrowing costs:</strong> Fees to borrow shares</li>
                            <li><strong>Margin requirements:</strong> Must maintain collateral</li>
                        </ul>
                        
                        <div class="highlight">
                            <strong>Famous Short Squeeze:</strong> GameStop (GME) in January 2021. Short sellers lost billions when retail investors drove the price from $20 to $400+.
                        </div>
                        
                        <p><strong>Bottom Line:</strong> Short selling is very risky and not recommended for beginners.</p>
                    `
                },
                {
                    id: 'margin-trading',
                    title: 'Margin Trading',
                    content: `
                        <h2>Margin Trading</h2>
                        
                        <div class="definition">
                            <strong>Margin:</strong> Borrowing money from your broker to buy more stocks than you could with your own cash. It amplifies both gains AND losses.
                        </div>
                        
                        <h3>How Margin Works</h3>
                        <div class="example">
                            You have $10,000 cash. With 2:1 margin, you can buy $20,000 worth of stock.<br><br>
                            If stock rises 10%: $2,000 gain on $10,000 cash = 20% return!<br>
                            If stock falls 10%: $2,000 loss on $10,000 cash = 20% loss!
                        </div>
                        
                        <h3>Margin Call</h3>
                        <div class="definition">
                            <strong>Margin Call:</strong> When your account value drops below the required minimum. You must deposit more money or sell positions immediately.
                        </div>
                        
                        <h3>Risks</h3>
                        <ul>
                            <li>Losses can exceed your initial investment</li>
                            <li>Interest charges on borrowed money</li>
                            <li>Forced selling at worst times</li>
                            <li>Emotional stress during volatility</li>
                        </ul>
                        
                        <div class="highlight">
                            <strong>Recommendation:</strong> Avoid margin as a beginner. Many experienced investors never use it. If you do use margin, keep it minimal and understand the risks completely.
                        </div>
                    `
                },
                {
                    id: 'tax-implications',
                    title: 'Tax Implications of Trading',
                    content: `
                        <h2>Tax Implications of Trading</h2>
                        
                        <h3>Capital Gains Tax</h3>
                        <div class="definition">
                            <strong>Capital Gain:</strong> Profit from selling an investment for more than you paid.
                        </div>
                        
                        <p><strong>Short-Term Capital Gains (held < 1 year):</strong></p>
                        <ul>
                            <li>Taxed as ordinary income</li>
                            <li>Could be 10% to 37% depending on income</li>
                        </ul>
                        
                        <p><strong>Long-Term Capital Gains (held > 1 year):</strong></p>
                        <ul>
                            <li>Favorable tax rates: 0%, 15%, or 20%</li>
                            <li>Most people pay 15%</li>
                        </ul>
                        
                        <h3>Tax-Loss Harvesting</h3>
                        <div class="definition">
                            <strong>Tax-Loss Harvesting:</strong> Selling losing investments to offset gains and reduce taxes.
                        </div>
                        <ul>
                            <li>Losses offset gains dollar for dollar</li>
                            <li>Can deduct up to $3,000 of excess losses against income</li>
                            <li>Remaining losses carry forward to future years</li>
                        </ul>
                        
                        <h3>Wash Sale Rule</h3>
                        <div class="definition">
                            <strong>Wash Sale:</strong> If you sell at a loss and buy substantially identical security within 30 days, you can't claim the loss.
                        </div>
                        
                        <h3>Tax-Advantaged Accounts</h3>
                        <ul>
                            <li><strong>Roth IRA:</strong> No taxes on gains ever</li>
                            <li><strong>Traditional IRA/401k:</strong> Tax-deferred growth</li>
                            <li><strong>HSA:</strong> Triple tax advantage for health expenses</li>
                        </ul>
                        
                        <div class="highlight">
                            <strong>Strategy:</strong> Hold long-term investments in taxable accounts. Use tax-advantaged accounts for investments you'll trade more frequently.
                        </div>
                    `
                },
                {
                    id: 'continuous-learning',
                    title: 'Continuing Your Education',
                    content: `
                        <h2>Continuing Your Education</h2>
                        
                        <p>Congratulations on completing the stock market track! Here's how to keep learning:</p>
                        
                        <h3>Recommended Books</h3>
                        <ul>
                            <li><strong>The Intelligent Investor</strong> - Benjamin Graham</li>
                            <li><strong>A Random Walk Down Wall Street</strong> - Burton Malkiel</li>
                            <li><strong>One Up On Wall Street</strong> - Peter Lynch</li>
                            <li><strong>The Little Book of Common Sense Investing</strong> - John Bogle</li>
                        </ul>
                        
                        <h3>Practice Without Risk</h3>
                        <ul>
                            <li><strong>Paper trading:</strong> Webull, TradingView offer free simulators</li>
                            <li><strong>Stock games:</strong> Investopedia simulator</li>
                        </ul>
                        
                        <h3>Stay Informed</h3>
                        <ul>
                            <li>Financial news: Bloomberg, CNBC, WSJ</li>
                            <li>Podcasts: Motley Fool, Invest Like the Best</li>
                            <li>YouTube: Learn about specific topics</li>
                        </ul>
                        
                        <h3>Your Action Plan</h3>
                        <ol>
                            <li><strong>Open an account</strong> if you haven't already</li>
                            <li><strong>Paper trade</strong> for 1-3 months</li>
                            <li><strong>Start small</strong> with real money</li>
                            <li><strong>Use index funds</strong> for most of your portfolio</li>
                            <li><strong>Keep learning</strong> and stay patient</li>
                        </ol>
                        
                        <div class="highlight">
                            <strong>Final Wisdom:</strong> "The stock market is a device for transferring money from the impatient to the patient." - Warren Buffett<br><br>
                            Time in the market beats timing the market. Start now, stay consistent, and think long-term.
                        </div>
                    `
                }
            ],
            quiz: [
                {
                    question: "What does a call option give you the right to do?",
                    options: [
                        "Sell a stock at a set price",
                        "Buy a stock at a set price",
                        "Borrow shares from a broker",
                        "Receive dividends"
                    ],
                    correct: 1,
                    explanation: "A call option gives you the right (not obligation) to BUY a stock at a specific price before expiration."
                },
                {
                    question: "What is the main risk of short selling?",
                    options: [
                        "Limited profit potential",
                        "Unlimited loss potential",
                        "Low trading fees",
                        "Must hold for one year"
                    ],
                    correct: 1,
                    explanation: "Short selling has unlimited loss potential because a stock's price can theoretically rise infinitely."
                },
                {
                    question: "Long-term capital gains are taxed at:",
                    options: [
                        "Higher rates than short-term",
                        "The same rates as income",
                        "Lower, favorable rates (0%, 15%, or 20%)",
                        "A flat 30%"
                    ],
                    correct: 2,
                    explanation: "Long-term capital gains (assets held over 1 year) are taxed at favorable rates of 0%, 15%, or 20%, which is typically lower than ordinary income tax rates."
                },
                {
                    question: "What is a margin call?",
                    options: [
                        "A phone call from your broker about promotions",
                        "When you must deposit money or sell because your account dropped below minimum",
                        "A call option on margin",
                        "A free consultation"
                    ],
                    correct: 1,
                    explanation: "A margin call occurs when your account value falls below the required minimum, forcing you to deposit more money or sell positions."
                },
                {
                    question: "What is tax-loss harvesting?",
                    options: [
                        "Avoiding all taxes",
                        "Only buying stocks that lose money",
                        "Selling losers to offset gains and reduce taxes",
                        "Harvesting crops for tax deductions"
                    ],
                    correct: 2,
                    explanation: "Tax-loss harvesting involves strategically selling investments at a loss to offset capital gains and reduce your tax bill."
                }
            ]
        }
    ]
};
