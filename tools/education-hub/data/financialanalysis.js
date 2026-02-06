// Financial Analysis Curriculum Data
const financialanalysisData = {
    id: 'financialanalysis',
    title: 'Financial Analysis',
    icon: '📊',
    description: 'Learn to read financial statements, build models, and make data-driven financial decisions — skills that open doors to high-paying careers.',
    graduationGoal: 'Confidently analyze financial statements and build basic financial models',
    difficulty: 'advanced',
    prerequisites: ['personalfinance', 'investing', 'stocks'],
    learningObjectives: [
        'Read and interpret financial statements (income statement, balance sheet, cash flow)',
        'Calculate key financial ratios and metrics',
        'Build basic financial models in Excel',
        'Analyze company performance and valuation',
        'Make data-driven investment and business decisions'
    ],
    relatedTracks: ['stocks', 'investing', 'business', 'career'],
    resources: [
        { title: 'SEC EDGAR Database', url: 'https://www.sec.gov/edgar.shtml' },
        { title: 'CFI - Financial Analysis', url: 'https://corporatefinanceinstitute.com/resources/knowledge/finance/financial-analysis/' }
    ],
    levels: [
        {
            id: 1,
            title: 'Financial Statement Foundations',
            subtitle: 'Learn to read the three core financial statements',
            topics: [
                {
                    id: 'why-financial-analysis',
                    title: 'Why Financial Analysis Matters',
                    content: `
                        <h2>Why Financial Analysis Matters</h2>
                        <p>Financial analysis is the skill of examining financial data to make informed decisions. Whether you want a career in finance or just want to evaluate investments and businesses intelligently, this skill is foundational.</p>
                        <h3>Career Paths in Financial Analysis</h3>
                        <ul>
                            <li><strong>Financial Analyst:</strong> Analyzes financial data for companies or investment firms. Salary: $60K-$120K+</li>
                            <li><strong>Investment Banker:</strong> Advises on mergers, acquisitions, and capital raising. Salary: $90K-$200K+</li>
                            <li><strong>Portfolio Manager:</strong> Manages investment portfolios for clients or funds. Salary: $80K-$180K+</li>
                            <li><strong>Risk Manager:</strong> Identifies and mitigates financial risks. Salary: $70K-$150K+</li>
                            <li><strong>Corporate Finance:</strong> Manages a company's financial planning and strategy. Salary: $70K-$160K+</li>
                        </ul>
                        <h3>Even If You Don't Want a Finance Career</h3>
                        <p>Financial analysis skills help you:</p>
                        <ul>
                            <li>Evaluate stocks and investments for your personal portfolio</li>
                            <li>Understand if a business you want to start (or buy) is viable</li>
                            <li>Negotiate better deals by understanding the numbers behind them</li>
                            <li>Make smarter decisions as a manager or business owner</li>
                        </ul>
                        <div class="highlight">
                            <strong>Key Insight:</strong> Numbers tell stories. Financial analysis is learning to read those stories.
                        </div>
                    `,
                    quiz: {
                        question: 'Financial analysis skills are useful for:',
                        options: [
                            'Only people pursuing finance careers',
                            'Evaluating investments, understanding businesses, and making smarter decisions',
                            'Only people who are already wealthy',
                            'Only accountants and bookkeepers'
                        ],
                        correct: 1
                    }
                },
                {
                    id: 'income-statement',
                    title: 'The Income Statement',
                    content: `
                        <h2>The Income Statement</h2>
                        <p>The income statement (also called the Profit & Loss statement or P&L) shows how much money a company made and spent over a period of time (usually a quarter or year).</p>
                        <h3>Key Line Items</h3>
                        <ul>
                            <li><strong>Revenue (Top Line):</strong> Total money earned from selling products/services</li>
                            <li><strong>Cost of Goods Sold (COGS):</strong> Direct costs to make/deliver the product</li>
                            <li><strong>Gross Profit:</strong> Revenue - COGS (how much you make before overhead)</li>
                            <li><strong>Operating Expenses (OpEx):</strong> Rent, salaries, marketing, R&D</li>
                            <li><strong>Operating Income (EBIT):</strong> Gross Profit - OpEx</li>
                            <li><strong>Net Income (Bottom Line):</strong> What's left after ALL expenses, taxes, and interest</li>
                        </ul>
                        <h3>What to Look For</h3>
                        <ul>
                            <li><strong>Revenue growth:</strong> Is the company growing? How fast?</li>
                            <li><strong>Gross margin:</strong> Gross Profit / Revenue — higher is generally better</li>
                            <li><strong>Operating margin:</strong> Operating Income / Revenue — shows operational efficiency</li>
                            <li><strong>Net margin:</strong> Net Income / Revenue — overall profitability</li>
                            <li><strong>Trends:</strong> Are margins expanding or contracting over time?</li>
                        </ul>
                        <div class="highlight">
                            <strong>Think of it this way:</strong> Revenue is vanity, profit is sanity, and cash flow is reality.
                        </div>
                    `,
                    quiz: {
                        question: 'What does the income statement show?',
                        options: [
                            'Everything a company owns and owes at a point in time',
                            'How much money came in and went out over a period of time',
                            'How much cash a company has in the bank',
                            'The stock price history of a company'
                        ],
                        correct: 1
                    }
                },
                {
                    id: 'balance-sheet',
                    title: 'The Balance Sheet',
                    content: `
                        <h2>The Balance Sheet</h2>
                        <p>The balance sheet is a snapshot of everything a company owns and owes at a specific point in time. It follows the fundamental equation:</p>
                        <p><strong>Assets = Liabilities + Shareholders' Equity</strong></p>
                        <h3>Assets (What the Company Owns)</h3>
                        <ul>
                            <li><strong>Current Assets:</strong> Cash, accounts receivable, inventory (convertible to cash within 1 year)</li>
                            <li><strong>Non-Current Assets:</strong> Property, equipment, patents, goodwill (long-term value)</li>
                        </ul>
                        <h3>Liabilities (What the Company Owes)</h3>
                        <ul>
                            <li><strong>Current Liabilities:</strong> Accounts payable, short-term debt (due within 1 year)</li>
                            <li><strong>Non-Current Liabilities:</strong> Long-term debt, lease obligations</li>
                        </ul>
                        <h3>Shareholders' Equity</h3>
                        <p>What's left for owners after subtracting liabilities from assets. Includes retained earnings (accumulated profits not paid out as dividends).</p>
                        <h3>Key Ratios from the Balance Sheet</h3>
                        <ul>
                            <li><strong>Current Ratio:</strong> Current Assets / Current Liabilities (>1 means company can pay short-term obligations)</li>
                            <li><strong>Debt-to-Equity:</strong> Total Debt / Shareholders' Equity (lower is generally safer)</li>
                            <li><strong>Book Value per Share:</strong> Equity / Shares Outstanding</li>
                        </ul>
                    `,
                    quiz: {
                        question: 'What is the fundamental balance sheet equation?',
                        options: [
                            'Revenue - Expenses = Profit',
                            'Assets = Liabilities + Shareholders\' Equity',
                            'Cash In - Cash Out = Net Cash',
                            'Income - Taxes = Net Income'
                        ],
                        correct: 1
                    }
                },
                {
                    id: 'cash-flow-statement',
                    title: 'The Cash Flow Statement',
                    content: `
                        <h2>The Cash Flow Statement</h2>
                        <p>The cash flow statement shows the actual movement of cash in and out of a business. A company can be profitable on paper but still run out of cash — the cash flow statement reveals this.</p>
                        <h3>Three Sections</h3>
                        <ul>
                            <li><strong>Operating Cash Flow (OCF):</strong> Cash generated from day-to-day business operations. This is the most important — it shows if the core business generates cash</li>
                            <li><strong>Investing Cash Flow:</strong> Cash spent on (or received from) buying/selling assets — equipment, property, acquisitions, investments</li>
                            <li><strong>Financing Cash Flow:</strong> Cash from/to investors and lenders — issuing stock, paying dividends, borrowing, repaying debt</li>
                        </ul>
                        <h3>Free Cash Flow (FCF)</h3>
                        <p>The most important number for investors:</p>
                        <p><strong>Free Cash Flow = Operating Cash Flow - Capital Expenditures</strong></p>
                        <p>This is the cash a company has left after maintaining its operations — available for dividends, buybacks, debt repayment, or growth.</p>
                        <h3>Red Flags</h3>
                        <ul>
                            <li>Positive net income but negative operating cash flow (earnings quality concern)</li>
                            <li>Consistently negative free cash flow (company burning cash)</li>
                            <li>Heavy reliance on financing cash flow to fund operations</li>
                        </ul>
                        <div class="highlight">
                            <strong>Remember:</strong> "Cash is king." A company can survive years of losses but only a few months without cash.
                        </div>
                    `,
                    quiz: {
                        question: 'What is Free Cash Flow?',
                        options: [
                            'Total revenue minus total expenses',
                            'Operating cash flow minus capital expenditures',
                            'Cash received from issuing stock',
                            'Net income plus depreciation'
                        ],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 2,
            title: 'Financial Ratios & Metrics',
            subtitle: 'The numbers that tell you if a business is healthy',
            topics: [
                {
                    id: 'profitability-ratios',
                    title: 'Profitability Ratios',
                    content: `
                        <h2>Profitability Ratios</h2>
                        <p>Profitability ratios measure how effectively a company turns revenue into profit.</p>
                        <h3>Key Ratios</h3>
                        <ul>
                            <li><strong>Gross Margin:</strong> (Revenue - COGS) / Revenue × 100. Example: Apple's gross margin is ~43%, meaning they keep 43 cents of every dollar after production costs</li>
                            <li><strong>Operating Margin:</strong> Operating Income / Revenue × 100. Shows how efficient the company is at running its operations</li>
                            <li><strong>Net Profit Margin:</strong> Net Income / Revenue × 100. The ultimate profitability measure — what percentage of revenue becomes actual profit</li>
                            <li><strong>Return on Equity (ROE):</strong> Net Income / Shareholders' Equity × 100. How efficiently the company uses shareholder money to generate profits</li>
                            <li><strong>Return on Assets (ROA):</strong> Net Income / Total Assets × 100. How efficiently the company uses ALL its resources</li>
                        </ul>
                        <h3>Industry Benchmarks</h3>
                        <ul>
                            <li><strong>Software companies:</strong> Often 20-30%+ net margins (low costs after development)</li>
                            <li><strong>Retailers:</strong> Often 2-5% net margins (high volume, low margins)</li>
                            <li><strong>Banks:</strong> Typically 20-30% net margins</li>
                        </ul>
                        <div class="highlight">
                            <strong>Pro Tip:</strong> Always compare ratios to industry peers, not across industries. A 5% margin is terrible for software but excellent for grocery stores.
                        </div>
                    `,
                    quiz: {
                        question: 'Why should you compare profitability ratios within the same industry?',
                        options: [
                            'All industries have the same margin expectations',
                            'Different industries have vastly different cost structures and margin profiles',
                            'It doesn\'t matter — higher margins are always better',
                            'Only tech companies need to track profitability ratios'
                        ],
                        correct: 1
                    }
                },
                {
                    id: 'valuation-ratios',
                    title: 'Valuation Ratios',
                    content: `
                        <h2>Valuation Ratios</h2>
                        <p>Valuation ratios help you determine if a stock is overvalued, undervalued, or fairly priced relative to its earnings, sales, or book value.</p>
                        <h3>Key Ratios</h3>
                        <ul>
                            <li><strong>Price-to-Earnings (P/E):</strong> Stock Price / Earnings per Share. A P/E of 20 means you're paying $20 for every $1 of earnings. Higher P/E = higher growth expectations</li>
                            <li><strong>Price-to-Sales (P/S):</strong> Market Cap / Revenue. Useful for companies that aren't yet profitable</li>
                            <li><strong>Price-to-Book (P/B):</strong> Stock Price / Book Value per Share. A P/B below 1 could mean the stock is undervalued (or the company is in trouble)</li>
                            <li><strong>PEG Ratio:</strong> P/E / Earnings Growth Rate. Adjusts P/E for growth — a PEG of 1 or below is often considered a good value</li>
                            <li><strong>EV/EBITDA:</strong> Enterprise Value / EBITDA. Useful for comparing companies with different capital structures</li>
                        </ul>
                        <h3>How to Use Them</h3>
                        <ul>
                            <li>Compare a company's ratios to its own history (is it cheaper or more expensive than usual?)</li>
                            <li>Compare to industry peers (is it cheap relative to competitors?)</li>
                            <li>No single ratio tells the full story — use multiple ratios together</li>
                            <li>Growth companies typically have higher ratios (the market is pricing in future earnings)</li>
                        </ul>
                    `,
                    quiz: {
                        question: 'What does a P/E ratio of 25 mean?',
                        options: [
                            'The company makes $25 per share',
                            'The stock price is $25',
                            'You are paying $25 for every $1 of the company\'s earnings',
                            'The company has 25 years of earnings left'
                        ],
                        correct: 2
                    }
                },
                {
                    id: 'liquidity-solvency',
                    title: 'Liquidity & Solvency Ratios',
                    content: `
                        <h2>Liquidity & Solvency Ratios</h2>
                        <p>These ratios tell you if a company can pay its bills (liquidity) and survive long-term (solvency).</p>
                        <h3>Liquidity Ratios (Short-Term Health)</h3>
                        <ul>
                            <li><strong>Current Ratio:</strong> Current Assets / Current Liabilities. Above 1.0 = can cover short-term obligations. 1.5-2.0 is generally healthy</li>
                            <li><strong>Quick Ratio (Acid Test):</strong> (Current Assets - Inventory) / Current Liabilities. More conservative — excludes inventory which may not sell quickly</li>
                            <li><strong>Cash Ratio:</strong> Cash / Current Liabilities. The most conservative measure — can you pay bills with just cash on hand?</li>
                        </ul>
                        <h3>Solvency Ratios (Long-Term Health)</h3>
                        <ul>
                            <li><strong>Debt-to-Equity:</strong> Total Debt / Shareholders' Equity. Below 1.0 means more equity than debt (generally safer)</li>
                            <li><strong>Interest Coverage:</strong> EBIT / Interest Expense. How easily can the company pay its interest? Below 1.5 is a warning sign</li>
                            <li><strong>Debt-to-Assets:</strong> Total Debt / Total Assets. What percentage of the company is funded by debt?</li>
                        </ul>
                        <h3>Warning Signs</h3>
                        <ul>
                            <li>Current ratio below 1.0 — may struggle to pay bills</li>
                            <li>Rapidly rising debt-to-equity — taking on too much leverage</li>
                            <li>Declining interest coverage — debt payments eating into profits</li>
                        </ul>
                    `,
                    quiz: {
                        question: 'A company has a current ratio of 0.7. What does this indicate?',
                        options: [
                            'The company is very profitable',
                            'The company may struggle to pay its short-term obligations',
                            'The company has too much cash',
                            'The company should take on more debt'
                        ],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 3,
            title: 'Valuation Methods',
            subtitle: 'How to determine what a business is really worth',
            topics: [
                {
                    id: 'dcf-analysis',
                    title: 'Discounted Cash Flow (DCF) Analysis',
                    content: `
                        <h2>Discounted Cash Flow (DCF) Analysis</h2>
                        <p>DCF is considered the gold standard of valuation methods. It estimates what a business is worth based on the cash it will generate in the future, discounted back to today's dollars.</p>
                        <h3>The Core Concept</h3>
                        <p>A dollar today is worth more than a dollar tomorrow (because you could invest it). DCF calculates the present value of all future cash flows.</p>
                        <h3>The Steps</h3>
                        <ol>
                            <li><strong>Project future free cash flows:</strong> Estimate FCF for the next 5-10 years</li>
                            <li><strong>Determine a discount rate:</strong> Usually the Weighted Average Cost of Capital (WACC), typically 8-12%</li>
                            <li><strong>Calculate terminal value:</strong> The value of all cash flows beyond your projection period</li>
                            <li><strong>Discount everything to present value:</strong> Using the discount rate</li>
                            <li><strong>Sum it up:</strong> Total = sum of discounted cash flows + discounted terminal value</li>
                        </ol>
                        <h3>Strengths & Weaknesses</h3>
                        <ul>
                            <li><strong>Strength:</strong> Based on fundamental cash generation — the most theoretically sound approach</li>
                            <li><strong>Weakness:</strong> Highly sensitive to assumptions — small changes in growth rate or discount rate drastically change the result</li>
                        </ul>
                        <div class="highlight">
                            <strong>Key Insight:</strong> DCF is less about getting an exact number and more about building a framework for thinking about value.
                        </div>
                    `,
                    quiz: {
                        question: 'What is the core principle behind DCF analysis?',
                        options: [
                            'A company is worth its total assets minus liabilities',
                            'A company is worth the present value of its future cash flows',
                            'A company is worth whatever the stock market says',
                            'A company is worth its revenue multiplied by its P/E ratio'
                        ],
                        correct: 1
                    }
                },
                {
                    id: 'comparable-analysis',
                    title: 'Comparable Company Analysis',
                    content: `
                        <h2>Comparable Company Analysis (Comps)</h2>
                        <p>Comps is the most commonly used valuation method in practice. You value a company by comparing it to similar companies that are already publicly traded.</p>
                        <h3>How It Works</h3>
                        <ol>
                            <li><strong>Select comparable companies:</strong> Find 5-10 companies in the same industry, of similar size</li>
                            <li><strong>Calculate key multiples:</strong> P/E, EV/EBITDA, P/S, etc. for each comparable</li>
                            <li><strong>Find the median/average:</strong> This becomes your benchmark multiple</li>
                            <li><strong>Apply to your target:</strong> Multiply the target's metric by the benchmark multiple</li>
                        </ol>
                        <h3>Example</h3>
                        <ul>
                            <li>5 comparable software companies have median EV/Revenue of 8x</li>
                            <li>Your target company has $100M in revenue</li>
                            <li>Implied valuation: 8 × $100M = $800M</li>
                        </ul>
                        <h3>Pros & Cons</h3>
                        <ul>
                            <li><strong>Pro:</strong> Market-based — reflects what investors are actually willing to pay</li>
                            <li><strong>Pro:</strong> Quick and intuitive</li>
                            <li><strong>Con:</strong> No two companies are truly identical</li>
                            <li><strong>Con:</strong> If the whole market is overvalued, comps will give you an overvalued number</li>
                        </ul>
                    `,
                    quiz: {
                        question: 'What is the main advantage of comparable company analysis?',
                        options: [
                            'It gives a perfectly accurate valuation',
                            'It reflects what investors are actually willing to pay in the market',
                            'It requires no research',
                            'It works for companies with no revenue'
                        ],
                        correct: 1
                    }
                },
                {
                    id: 'precedent-transactions',
                    title: 'Precedent Transactions Analysis',
                    content: `
                        <h2>Precedent Transactions Analysis</h2>
                        <p>This method values a company based on what similar companies were actually acquired for. It's particularly useful for M&A (mergers and acquisitions) scenarios.</p>
                        <h3>How It Works</h3>
                        <ol>
                            <li><strong>Find similar transactions:</strong> Identify recent acquisitions in the same industry</li>
                            <li><strong>Calculate transaction multiples:</strong> EV/EBITDA, EV/Revenue at the time of each deal</li>
                            <li><strong>Apply median multiples:</strong> To your target company's metrics</li>
                        </ol>
                        <h3>Control Premium</h3>
                        <p>Precedent transactions typically include a "control premium" — acquirers pay 20-40% above the public market price because:</p>
                        <ul>
                            <li>They get control of the company's operations and strategy</li>
                            <li>They expect to realize synergies (cost savings from combining companies)</li>
                            <li>There may be competitive bidding driving up the price</li>
                        </ul>
                        <h3>When to Use Each Method</h3>
                        <ul>
                            <li><strong>DCF:</strong> Best for companies with predictable cash flows (mature businesses)</li>
                            <li><strong>Comps:</strong> Best for getting a market-based sanity check</li>
                            <li><strong>Precedent Transactions:</strong> Best for M&A situations and understanding acquisition premiums</li>
                            <li><strong>Best practice:</strong> Use all three and triangulate — the truth is usually in the overlap</li>
                        </ul>
                        <div class="highlight">
                            <strong>Pro Tip:</strong> Investment bankers always use a "football field" chart showing the range from each valuation method. If all three point to the same range, you have more confidence in the valuation.
                        </div>
                    `,
                    quiz: {
                        question: 'Why do precedent transaction multiples tend to be higher than comparable company multiples?',
                        options: [
                            'Because they use different financial metrics',
                            'Because acquirers pay a control premium above market price',
                            'Because historical data is always inflated',
                            'Because smaller companies are always overvalued'
                        ],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 4,
            title: 'Financial Modeling Basics',
            subtitle: 'Building your first financial model in a spreadsheet',
            topics: [
                {
                    id: 'modeling-foundations',
                    title: 'Financial Modeling 101',
                    content: `
                        <h2>Financial Modeling 101</h2>
                        <p>A financial model is a spreadsheet that projects a company's financial statements into the future. It's the primary tool financial analysts use to make investment recommendations and business decisions.</p>
                        <h3>Types of Financial Models</h3>
                        <ul>
                            <li><strong>3-Statement Model:</strong> Links Income Statement, Balance Sheet, and Cash Flow Statement together (the foundation of all models)</li>
                            <li><strong>DCF Model:</strong> Builds on the 3-statement model to calculate intrinsic value</li>
                            <li><strong>LBO Model:</strong> Used in private equity to evaluate leveraged buyouts</li>
                            <li><strong>Merger Model:</strong> Analyzes what happens when two companies combine</li>
                            <li><strong>Budget/Forecast Model:</strong> Used internally for company planning</li>
                        </ul>
                        <h3>Best Practices</h3>
                        <ul>
                            <li><strong>Blue = input:</strong> Cells where you enter assumptions (blue font)</li>
                            <li><strong>Black = formula:</strong> Cells that calculate based on inputs (black font)</li>
                            <li><strong>Green = link:</strong> Cells that pull from other sheets/sources</li>
                            <li><strong>Separate assumptions:</strong> Keep all your assumptions in one clearly labeled section</li>
                            <li><strong>No hardcoded numbers in formulas:</strong> Always reference cells</li>
                        </ul>
                        <div class="highlight">
                            <strong>Getting Started:</strong> Excel and Google Sheets are the primary tools. Start with Google Sheets (free) and learn keyboard shortcuts — speed matters in finance.
                        </div>
                    `,
                    quiz: {
                        question: 'What is the foundational financial model that all others build upon?',
                        options: [
                            'The DCF Model',
                            'The LBO Model',
                            'The 3-Statement Model',
                            'The Merger Model'
                        ],
                        correct: 2
                    }
                },
                {
                    id: 'key-assumptions',
                    title: 'Driving Assumptions',
                    content: `
                        <h2>Driving Assumptions</h2>
                        <p>Every financial model is only as good as its assumptions. Understanding which assumptions matter most is critical.</p>
                        <h3>Revenue Assumptions</h3>
                        <ul>
                            <li><strong>Growth rate:</strong> How fast will revenue grow? (Based on historical trends, market size, competitive position)</li>
                            <li><strong>Revenue drivers:</strong> Units sold × Price per unit, or Users × Revenue per user</li>
                            <li><strong>Seasonality:</strong> Does revenue fluctuate by quarter/season?</li>
                        </ul>
                        <h3>Cost Assumptions</h3>
                        <ul>
                            <li><strong>COGS as % of revenue:</strong> Will margins improve with scale?</li>
                            <li><strong>Operating expenses:</strong> Which costs are fixed vs variable?</li>
                            <li><strong>Capital expenditures:</strong> How much must the company invest to maintain/grow operations?</li>
                        </ul>
                        <h3>Sensitivity Analysis</h3>
                        <p>Because assumptions are uncertain, always build a sensitivity table showing how the valuation changes when key assumptions change:</p>
                        <ul>
                            <li>What if growth is 15% instead of 20%?</li>
                            <li>What if margins compress by 2%?</li>
                            <li>What if the discount rate is 12% instead of 10%?</li>
                        </ul>
                        <div class="highlight">
                            <strong>Rule of Thumb:</strong> If changing an assumption by a reasonable amount dramatically changes your conclusion, that assumption needs more research.
                        </div>
                    `,
                    quiz: {
                        question: 'Why is sensitivity analysis important in financial modeling?',
                        options: [
                            'It makes the spreadsheet look more professional',
                            'It shows how changes in key assumptions impact the valuation',
                            'It eliminates all risk from the investment',
                            'It is required by law for financial analysts'
                        ],
                        correct: 1
                    }
                },
                {
                    id: 'presentation-skills',
                    title: 'Presenting Your Analysis',
                    content: `
                        <h2>Presenting Your Analysis</h2>
                        <p>Being able to analyze data is only half the battle — you also need to communicate your findings clearly and persuasively.</p>
                        <h3>Key Deliverables</h3>
                        <ul>
                            <li><strong>Executive Summary:</strong> 1-page overview of your conclusion, key metrics, and recommendation</li>
                            <li><strong>Investment Thesis:</strong> Clear, concise statement of why you recommend buying/selling/holding</li>
                            <li><strong>Supporting Analysis:</strong> Charts, ratios, and data that back up your thesis</li>
                            <li><strong>Risk Factors:</strong> What could go wrong? (shows intellectual honesty)</li>
                        </ul>
                        <h3>Data Visualization Tips</h3>
                        <ul>
                            <li>Use line charts for trends over time</li>
                            <li>Use bar charts for comparisons across companies</li>
                            <li>Keep charts clean — no 3D effects, minimal colors</li>
                            <li>Always label axes and include units</li>
                            <li>Highlight the key insight, don't make the audience search for it</li>
                        </ul>
                        <h3>Professional Certifications to Consider</h3>
                        <ul>
                            <li><strong>CFA (Chartered Financial Analyst):</strong> Gold standard for investment professionals — 3 rigorous exams</li>
                            <li><strong>CPA (Certified Public Accountant):</strong> If you lean toward accounting</li>
                            <li><strong>FRM (Financial Risk Manager):</strong> For risk management specialization</li>
                            <li><strong>FMVA (Financial Modeling & Valuation Analyst):</strong> Focused on practical modeling skills</li>
                        </ul>
                        <div class="highlight">
                            <strong>30-Day Learning Plan:</strong> Week 1: Master financial statements. Week 2: Learn financial ratios and practice calculating them. Week 3: Build a basic 3-statement model in a spreadsheet. Week 4: Present your analysis to a friend for feedback.
                        </div>
                    `,
                    quiz: {
                        question: 'What should always be included in a professional financial analysis presentation?',
                        options: [
                            'Only the positive aspects of the investment',
                            'An executive summary, supporting analysis, AND risk factors',
                            'Just the spreadsheet model with no explanation',
                            'Only the recommendation without supporting data'
                        ],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 5,
            title: 'Applied Financial Analysis',
            subtitle: 'Putting it all together with real-world practice',
            topics: [
                {
                    id: 'analyzing-real-company',
                    title: 'Analyzing a Real Company',
                    content: `
                        <h2>Analyzing a Real Company: A Step-by-Step Framework</h2>
                        <p>Now let's put everything together. Here's the framework professional analysts use to evaluate a company.</p>
                        <h3>Step 1: Understand the Business</h3>
                        <ul>
                            <li>What does the company do? How does it make money?</li>
                            <li>Who are its customers? What's the market size?</li>
                            <li>What's the competitive landscape? Does it have a "moat"?</li>
                        </ul>
                        <h3>Step 2: Analyze the Financials</h3>
                        <ul>
                            <li>Pull the last 3-5 years of financial statements (10-K filings on SEC.gov)</li>
                            <li>Calculate profitability, valuation, and liquidity ratios</li>
                            <li>Identify trends — are things getting better or worse?</li>
                        </ul>
                        <h3>Step 3: Compare to Peers</h3>
                        <ul>
                            <li>How does it stack up against competitors on key metrics?</li>
                            <li>Is it growing faster? More profitable? More expensive?</li>
                        </ul>
                        <h3>Step 4: Value the Company</h3>
                        <ul>
                            <li>Run a DCF with reasonable assumptions</li>
                            <li>Check with comps to see if the market agrees</li>
                            <li>Determine a price range — not a single number</li>
                        </ul>
                        <h3>Step 5: Make a Decision</h3>
                        <ul>
                            <li>Is the current stock price below your estimated value? → Potential buy</li>
                            <li>Is it above? → Maybe wait or sell</li>
                            <li>Always consider your margin of safety — buy at a discount to your estimate</li>
                        </ul>
                    `,
                    quiz: {
                        question: 'What should be the first step when analyzing a company?',
                        options: [
                            'Look at the stock price chart',
                            'Understand the business — what it does and how it makes money',
                            'Calculate the P/E ratio',
                            'Check what social media says about it'
                        ],
                        correct: 1
                    }
                },
                {
                    id: 'common-mistakes',
                    title: 'Common Analysis Mistakes',
                    content: `
                        <h2>Common Financial Analysis Mistakes</h2>
                        <p>Even experienced analysts make mistakes. Here are the most common pitfalls and how to avoid them.</p>
                        <h3>Analytical Mistakes</h3>
                        <ul>
                            <li><strong>Looking at one year in isolation:</strong> Always examine trends over 3-5+ years</li>
                            <li><strong>Ignoring cash flow:</strong> A company can report profits while burning cash — always check cash flow</li>
                            <li><strong>Comparing across industries:</strong> A 10x P/E means different things in different industries</li>
                            <li><strong>Ignoring debt:</strong> Two companies with the same earnings but different debt levels are not equally safe</li>
                            <li><strong>Anchoring on past prices:</strong> A stock at $50 isn't cheap just because it was $100 last year</li>
                        </ul>
                        <h3>Modeling Mistakes</h3>
                        <ul>
                            <li><strong>Overly optimistic growth assumptions:</strong> Very few companies sustain 30%+ growth for long</li>
                            <li><strong>Circular references:</strong> Common error when linking financial statements — learn how to resolve them</li>
                            <li><strong>Not stress-testing:</strong> Always check: what happens if things go wrong?</li>
                        </ul>
                        <h3>Behavioral Mistakes</h3>
                        <ul>
                            <li><strong>Falling in love with a stock:</strong> Analyze objectively, not emotionally</li>
                            <li><strong>Confirmation bias:</strong> Seek out the bear case, not just the bull case</li>
                            <li><strong>Analysis paralysis:</strong> Perfect information doesn't exist — make decisions with good-enough data</li>
                        </ul>
                        <div class="highlight">
                            <strong>Best Practice:</strong> Before finalizing your analysis, ask someone to poke holes in it. The best analysts actively seek criticism of their work.
                        </div>
                    `,
                    quiz: {
                        question: 'Why should you always examine financial trends over 3-5 years rather than just one year?',
                        options: [
                            'One year is too recent to be accurate',
                            'A single year can be misleading — trends reveal the true direction of the business',
                            'Financial statements are only available in 5-year batches',
                            'It\'s a legal requirement for investors'
                        ],
                        correct: 1
                    }
                },
                {
                    id: 'building-career',
                    title: 'Building Your Finance Career',
                    content: `
                        <h2>Building Your Finance Career</h2>
                        <p>Whether you want to break into finance or just use these skills as an investor, here's your roadmap.</p>
                        <h3>For Career Seekers</h3>
                        <ul>
                            <li><strong>Start with free resources:</strong> Khan Academy (accounting), Investopedia, 10-K filings</li>
                            <li><strong>Build a model portfolio:</strong> Create a portfolio of 5-10 stock analyses to show employers</li>
                            <li><strong>Get Excel-certified:</strong> Speed and proficiency in Excel is non-negotiable in finance</li>
                            <li><strong>Network:</strong> Join finance clubs, attend industry events, connect on LinkedIn</li>
                            <li><strong>Consider certifications:</strong> CFA Level 1 signals serious intent to employers</li>
                        </ul>
                        <h3>For Personal Investors</h3>
                        <ul>
                            <li>Practice by analyzing stocks you already own</li>
                            <li>Read 10-K filings of companies you use daily (Apple, Google, Amazon)</li>
                            <li>Start with index funds while you develop your skills</li>
                            <li>Only invest in individual stocks with money you can afford to lose</li>
                        </ul>
                        <h3>Recommended Resources</h3>
                        <ul>
                            <li><strong>Books:</strong> "The Intelligent Investor" (Graham), "Financial Modeling" (Benninga), "Valuation" (McKinsey)</li>
                            <li><strong>Practice:</strong> SEC EDGAR for free financial filings, Yahoo Finance for quick data</li>
                            <li><strong>Tools:</strong> Google Sheets (free), Excel, Bloomberg Terminal (professional)</li>
                        </ul>
                        <div class="highlight">
                            <strong>Remember:</strong> Financial analysis is a skill that compounds over time. Each company you analyze makes you better at analyzing the next one. Start today.
                        </div>
                    `,
                    quiz: {
                        question: 'What is the best way to develop financial analysis skills?',
                        options: [
                            'Read about finance theory without practicing',
                            'Wait until you have a finance job to start learning',
                            'Practice by analyzing real companies and building model portfolios',
                            'Only focus on passing the CFA exam'
                        ],
                        correct: 2
                    }
                }
            ]
        }
    ]
};
