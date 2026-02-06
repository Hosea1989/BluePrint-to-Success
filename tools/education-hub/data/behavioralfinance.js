// Behavioral Finance Curriculum Data
const behavioralfinanceData = {
    id: 'behavioralfinance',
    title: 'Behavioral Finance',
    icon: '🧠',
    description: 'Understand how psychology affects financial decisions and learn to overcome cognitive biases that hurt your wallet.',
    graduationGoal: 'Recognize and overcome the mental traps that lead to poor financial decisions',
    difficulty: 'intermediate',
    prerequisites: ['personalfinance', 'investing'],
    learningObjectives: [
        'Identify common cognitive biases that affect financial decisions',
        'Understand how emotions drive financial behavior',
        'Recognize mental traps like FOMO, loss aversion, and anchoring',
        'Develop strategies to make rational financial decisions',
        'Use behavioral insights to improve your financial outcomes'
    ],
    relatedTracks: ['investing', 'personalfinance', 'stocks'],
    resources: [
        { title: 'Behavioral Economics - Investopedia', url: 'https://www.investopedia.com/terms/b/behavioraleconomics.asp' }
    ],
    levels: [
        {
            id: 1,
            title: 'The Psychology of Money',
            subtitle: 'Why smart people make irrational financial choices',
            topics: [
                {
                    id: 'intro-behavioral-finance',
                    title: 'What Is Behavioral Finance?',
                    content: `
                        <h2>What Is Behavioral Finance?</h2>
                        <p>Traditional economics assumes people are rational — that they always make decisions in their best interest with all available information. Behavioral finance says: not so fast. Humans are emotional, biased, and often predictably irrational with money.</p>
                        <h3>Why This Matters</h3>
                        <p>Understanding behavioral finance helps you:</p>
                        <ul>
                            <li><strong>Spot your own biases</strong> before they cost you money</li>
                            <li><strong>Make better investment decisions</strong> by removing emotion</li>
                            <li><strong>Understand market swings</strong> caused by collective psychology</li>
                            <li><strong>Build systems</strong> that protect you from yourself</li>
                        </ul>
                        <h3>Key Figures</h3>
                        <ul>
                            <li><strong>Daniel Kahneman:</strong> Nobel Prize winner who proved humans use mental shortcuts (heuristics) that often lead to errors</li>
                            <li><strong>Amos Tversky:</strong> Collaborated with Kahneman on prospect theory — how people perceive gains and losses differently</li>
                            <li><strong>Richard Thaler:</strong> Nobel Prize winner for "nudge theory" — small design changes that improve decisions</li>
                        </ul>
                        <div class="highlight">
                            <strong>Key Insight:</strong> You don't need to be a psychologist to benefit. Just knowing these biases exist makes you 10x better at managing money.
                        </div>
                    `,
                    quiz: {
                        question: 'What does behavioral finance study?',
                        options: [
                            'How banks set interest rates',
                            'How psychology and emotions affect financial decisions',
                            'How to read stock charts',
                            'How government policy impacts markets'
                        ],
                        correct: 1
                    }
                },
                {
                    id: 'rational-vs-irrational',
                    title: 'Rational vs Irrational Decisions',
                    content: `
                        <h2>Rational vs Irrational Decisions</h2>
                        <p>A rational decision maximizes your expected outcome given the information you have. An irrational decision feels right in the moment but actually works against your goals.</p>
                        <h3>Examples of Irrational Financial Behavior</h3>
                        <ul>
                            <li><strong>Buying lottery tickets:</strong> Expected value is negative, but the dream feels worth it</li>
                            <li><strong>Panic selling during a crash:</strong> Locking in losses when history shows markets recover</li>
                            <li><strong>Keeping money in a savings account earning 0.01%:</strong> Feels "safe" but you're losing to inflation</li>
                            <li><strong>Spending $5/day on coffee but saying you "can't afford" to invest:</strong> Mental accounting tricks</li>
                        </ul>
                        <h3>System 1 vs System 2 Thinking</h3>
                        <p>Daniel Kahneman described two modes of thinking:</p>
                        <ul>
                            <li><strong>System 1 (Fast):</strong> Automatic, emotional, instinctive. Great for survival, terrible for investing</li>
                            <li><strong>System 2 (Slow):</strong> Deliberate, logical, analytical. This is what you want for financial decisions</li>
                        </ul>
                        <div class="highlight">
                            <strong>Pro Tip:</strong> Never make a financial decision when you're emotional. Sleep on it. The 24-hour rule saves more money than any budget app.
                        </div>
                    `,
                    quiz: {
                        question: 'Which thinking system should you use for major financial decisions?',
                        options: [
                            'System 1 — fast and instinctive',
                            'System 2 — slow and deliberate',
                            'Neither — just go with your gut',
                            'System 1 for buying, System 2 for selling'
                        ],
                        correct: 1
                    }
                },
                {
                    id: 'prospect-theory',
                    title: 'Prospect Theory & Loss Aversion',
                    content: `
                        <h2>Prospect Theory & Loss Aversion</h2>
                        <p>Prospect theory, developed by Kahneman and Tversky, is one of the most important ideas in behavioral finance. It explains why losing $100 feels about twice as painful as gaining $100 feels good.</p>
                        <h3>Loss Aversion in Action</h3>
                        <ul>
                            <li><strong>Holding losing stocks too long:</strong> You don't want to "realize" the loss, so you hold and hope</li>
                            <li><strong>Selling winners too early:</strong> You lock in the gain because you're afraid of losing it</li>
                            <li><strong>Avoiding the stock market entirely:</strong> The fear of loss keeps people in low-return savings accounts</li>
                            <li><strong>Overpaying for insurance:</strong> We overpay to eliminate even small risks</li>
                        </ul>
                        <h3>The Math of Loss Aversion</h3>
                        <p>Studies show losses are psychologically about 2x more powerful than equivalent gains. This means:</p>
                        <ul>
                            <li>A coin flip to win $100 or lose $100 feels bad even though it's mathematically fair</li>
                            <li>You'd need to win $200+ to feel the flip is "worth it"</li>
                            <li>This asymmetry distorts all your financial decisions</li>
                        </ul>
                        <div class="highlight">
                            <strong>Antidote:</strong> Focus on your long-term portfolio value, not individual wins and losses. Check your investments quarterly, not daily.
                        </div>
                    `,
                    quiz: {
                        question: 'What does loss aversion mean?',
                        options: [
                            'People avoid all risky investments',
                            'Losses feel roughly twice as painful as equivalent gains feel good',
                            'People always sell losing investments immediately',
                            'Markets always go down more than they go up'
                        ],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 2,
            title: 'Cognitive Biases That Cost You Money',
            subtitle: 'The mental shortcuts that lead to financial mistakes',
            topics: [
                {
                    id: 'confirmation-bias',
                    title: 'Confirmation Bias',
                    content: `
                        <h2>Confirmation Bias</h2>
                        <p>Confirmation bias is the tendency to search for, interpret, and remember information that confirms what you already believe — while ignoring evidence that contradicts it.</p>
                        <h3>How It Hurts Your Finances</h3>
                        <ul>
                            <li><strong>Stock picking:</strong> You research a company you like and only read positive articles about it</li>
                            <li><strong>Crypto enthusiasm:</strong> You follow only bullish crypto influencers and dismiss warnings</li>
                            <li><strong>Real estate:</strong> You believe "real estate always goes up" and ignore markets where it crashed</li>
                            <li><strong>Budgeting:</strong> You think you spend less than you do because you only remember the times you were frugal</li>
                        </ul>
                        <h3>How to Fight It</h3>
                        <ul>
                            <li><strong>Seek out opposing views:</strong> Before buying a stock, actively search for bear cases</li>
                            <li><strong>Use data, not feelings:</strong> Track actual spending, actual returns, actual performance</li>
                            <li><strong>Play devil's advocate:</strong> Ask "What would convince me I'm wrong?"</li>
                            <li><strong>Diversify your information sources:</strong> Don't just follow people who agree with you</li>
                        </ul>
                        <div class="highlight">
                            <strong>Reality Check:</strong> If you can't articulate the strongest argument against your financial position, you probably have confirmation bias.
                        </div>
                    `,
                    quiz: {
                        question: 'Which is the best way to combat confirmation bias in investing?',
                        options: [
                            'Only follow trusted financial advisors',
                            'Actively seek out opposing viewpoints and bear cases',
                            'Ignore all news and just invest in index funds',
                            'Invest based on what your friends recommend'
                        ],
                        correct: 1
                    }
                },
                {
                    id: 'anchoring-bias',
                    title: 'Anchoring Bias',
                    content: `
                        <h2>Anchoring Bias</h2>
                        <p>Anchoring is the tendency to rely too heavily on the first piece of information you encounter (the "anchor") when making decisions.</p>
                        <h3>Anchoring in Financial Decisions</h3>
                        <ul>
                            <li><strong>Stock prices:</strong> "This stock was $150 last month, so $120 is a bargain" — but $120 might still be overvalued</li>
                            <li><strong>Salary negotiations:</strong> The first number mentioned becomes the anchor for the entire negotiation</li>
                            <li><strong>House prices:</strong> The listing price anchors your perception of what the house is "worth"</li>
                            <li><strong>Sales and discounts:</strong> "Was $200, now $99!" — the $200 anchor makes $99 feel like a steal</li>
                        </ul>
                        <h3>How to Fight It</h3>
                        <ul>
                            <li><strong>Do your own research first:</strong> Form your own valuation before seeing others' prices</li>
                            <li><strong>Use multiple reference points:</strong> Don't rely on a single price or metric</li>
                            <li><strong>Ask "Would I buy this if I'd never seen the original price?"</strong></li>
                            <li><strong>Focus on intrinsic value:</strong> What is the asset actually worth based on fundamentals?</li>
                        </ul>
                        <div class="highlight">
                            <strong>Key Insight:</strong> Retailers, car dealerships, and real estate agents all use anchoring strategically. Being aware of it is your best defense.
                        </div>
                    `,
                    quiz: {
                        question: 'A stock dropped from $200 to $100. What does anchoring bias make you think?',
                        options: [
                            'The stock must be overvalued at any price',
                            'The stock is a bargain because it used to be $200',
                            'You should sell immediately',
                            'The stock will return to $200 soon'
                        ],
                        correct: 1
                    }
                },
                {
                    id: 'herd-mentality',
                    title: 'Herd Mentality & FOMO',
                    content: `
                        <h2>Herd Mentality & FOMO</h2>
                        <p>Herd mentality is the tendency to follow what everyone else is doing, especially in uncertain situations. FOMO (Fear of Missing Out) is the anxiety that others are profiting while you're not.</p>
                        <h3>Historic Examples</h3>
                        <ul>
                            <li><strong>Dot-com Bubble (1999-2000):</strong> Everyone was buying internet stocks, regardless of whether companies made money. NASDAQ crashed 78%</li>
                            <li><strong>Housing Bubble (2006-2008):</strong> "Everyone's flipping houses and getting rich!" — then housing prices collapsed</li>
                            <li><strong>Meme Stocks (2021):</strong> GameStop went from $20 to $480 on social media hype. Most late buyers lost money</li>
                            <li><strong>Crypto Mania (2021):</strong> Bitcoin to $69K, dog coins, NFTs — massive corrections followed</li>
                        </ul>
                        <h3>Why We Follow the Herd</h3>
                        <ul>
                            <li><strong>Social proof:</strong> "If everyone's doing it, it must be right"</li>
                            <li><strong>Fear of regret:</strong> Missing out feels worse than losing money</li>
                            <li><strong>Information cascade:</strong> Early adopters influence later followers</li>
                        </ul>
                        <h3>How to Resist</h3>
                        <ul>
                            <li>Have a written investment plan and stick to it</li>
                            <li>Ask: "Would I buy this if nobody else was talking about it?"</li>
                            <li>Remember Warren Buffett: "Be fearful when others are greedy, and greedy when others are fearful"</li>
                            <li>Unfollow hype-driven social media accounts</li>
                        </ul>
                    `,
                    quiz: {
                        question: 'What is the best defense against herd mentality in investing?',
                        options: [
                            'Always invest in whatever is trending on social media',
                            'Follow what the majority of investors are doing',
                            'Have a written investment plan and stick to it regardless of hype',
                            'Wait until everyone is selling before you buy'
                        ],
                        correct: 2
                    }
                },
                {
                    id: 'overconfidence',
                    title: 'Overconfidence & Recency Bias',
                    content: `
                        <h2>Overconfidence & Recency Bias</h2>
                        <h3>Overconfidence Bias</h3>
                        <p>Overconfidence is believing you know more than you do and that your predictions are more accurate than they actually are.</p>
                        <ul>
                            <li><strong>Day traders:</strong> 90% of day traders lose money, but most believe they'll be in the winning 10%</li>
                            <li><strong>Stock pickers:</strong> Most actively managed funds underperform index funds over 10+ years</li>
                            <li><strong>Concentrated bets:</strong> "I'm so sure about this one stock" — lack of diversification from overconfidence</li>
                            <li><strong>Ignoring risk:</strong> Overconfident investors underestimate downside scenarios</li>
                        </ul>
                        <h3>Recency Bias</h3>
                        <p>Recency bias is giving too much weight to recent events when making predictions about the future.</p>
                        <ul>
                            <li><strong>Bull market:</strong> After years of gains, people assume stocks will keep rising forever</li>
                            <li><strong>Bear market:</strong> After a crash, people assume markets will never recover</li>
                            <li><strong>Hot sectors:</strong> Last year's best-performing sector often underperforms the next year</li>
                        </ul>
                        <h3>Antidotes</h3>
                        <ul>
                            <li>Track your predictions — write them down and check back later</li>
                            <li>Study long-term historical data, not just recent performance</li>
                            <li>Use index funds as your core strategy to remove the temptation to outsmart the market</li>
                            <li>Accept that uncertainty is normal and build it into your plan</li>
                        </ul>
                    `,
                    quiz: {
                        question: 'What does recency bias cause investors to do?',
                        options: [
                            'Always invest in the oldest companies',
                            'Give too much weight to recent events when predicting the future',
                            'Only invest in bonds after age 50',
                            'Diversify their portfolio more than necessary'
                        ],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 3,
            title: 'Emotional Traps in Investing',
            subtitle: 'How fear, greed, and regret sabotage your portfolio',
            topics: [
                {
                    id: 'fear-and-greed',
                    title: 'The Fear-Greed Cycle',
                    content: `
                        <h2>The Fear-Greed Cycle</h2>
                        <p>Markets swing between two dominant emotions: fear and greed. Understanding this cycle is key to not becoming its victim.</p>
                        <h3>The Emotional Market Cycle</h3>
                        <ol>
                            <li><strong>Optimism:</strong> Things are looking up, people start investing</li>
                            <li><strong>Excitement:</strong> Returns are good, more people jump in</li>
                            <li><strong>Thrill:</strong> "I'm a genius!" — this is when risk is highest</li>
                            <li><strong>Euphoria:</strong> Maximum financial risk — everyone is buying (point of maximum risk)</li>
                            <li><strong>Anxiety:</strong> Wait, things are going down...</li>
                            <li><strong>Denial:</strong> "It's just a dip, it'll come back"</li>
                            <li><strong>Fear:</strong> Losses are real, panic sets in</li>
                            <li><strong>Desperation/Panic:</strong> Mass selling (point of maximum opportunity)</li>
                            <li><strong>Depression:</strong> "I'm never investing again"</li>
                            <li><strong>Hope:</strong> Markets stabilize, slow recovery begins</li>
                        </ol>
                        <h3>The Irony</h3>
                        <p>Most investors buy near the top (euphoria) and sell near the bottom (panic) — the exact opposite of "buy low, sell high." This is why the average investor significantly underperforms the market average.</p>
                        <div class="highlight">
                            <strong>Strategy:</strong> Automate your investing with regular contributions (dollar-cost averaging) to remove emotion from the equation entirely.
                        </div>
                    `,
                    quiz: {
                        question: 'At what point in the emotional market cycle is financial risk highest?',
                        options: [
                            'During the anxiety phase',
                            'During the depression phase',
                            'During the euphoria phase',
                            'During the hope phase'
                        ],
                        correct: 2
                    }
                },
                {
                    id: 'sunk-cost-fallacy',
                    title: 'The Sunk Cost Fallacy',
                    content: `
                        <h2>The Sunk Cost Fallacy</h2>
                        <p>The sunk cost fallacy is continuing to invest time, money, or effort into something because of what you've already put in — even when it no longer makes sense to continue.</p>
                        <h3>Financial Examples</h3>
                        <ul>
                            <li><strong>Bad investments:</strong> "I've already lost $5,000 on this stock — I can't sell now" (but it might drop another $5,000)</li>
                            <li><strong>Failed businesses:</strong> Pouring more money into a failing venture because you've already invested so much</li>
                            <li><strong>Subscriptions:</strong> Keeping a gym membership you never use because you already paid for the year</li>
                            <li><strong>Education:</strong> Finishing a degree you hate because you're "already 3 years in"</li>
                        </ul>
                        <h3>How to Think About It</h3>
                        <p>The money you've already spent is gone regardless. The only question that matters is:</p>
                        <p><strong>"If I were starting from scratch today, would I make this same investment?"</strong></p>
                        <ul>
                            <li>If yes → keep going</li>
                            <li>If no → cut your losses and redirect resources to something better</li>
                        </ul>
                        <div class="highlight">
                            <strong>Warren Buffett's Rule:</strong> "When you find yourself in a hole, stop digging."
                        </div>
                    `,
                    quiz: {
                        question: 'What question should you ask to overcome the sunk cost fallacy?',
                        options: [
                            'How much have I already invested?',
                            'What will my friends think if I quit?',
                            'If I were starting from scratch today, would I make this same investment?',
                            'How long have I been doing this?'
                        ],
                        correct: 2
                    }
                },
                {
                    id: 'mental-accounting',
                    title: 'Mental Accounting',
                    content: `
                        <h2>Mental Accounting</h2>
                        <p>Mental accounting is treating money differently based on where it came from or what it's "earmarked" for, even though all money is fungible (interchangeable).</p>
                        <h3>Common Examples</h3>
                        <ul>
                            <li><strong>Tax refund splurge:</strong> Treating a tax refund as "free money" and spending it frivolously — it's YOUR money that was withheld all year</li>
                            <li><strong>Bonus spending:</strong> Blowing a work bonus on luxury items while carrying credit card debt at 25% interest</li>
                            <li><strong>Casino winnings:</strong> "Playing with house money" — but those winnings are now YOUR money</li>
                            <li><strong>Gift cards:</strong> Spending more freely because it doesn't feel like "real" money</li>
                            <li><strong>Separate accounts:</strong> Having savings earning 1% while paying 20% on credit card debt</li>
                        </ul>
                        <h3>The Fix</h3>
                        <ul>
                            <li>Treat all money as one pool — a dollar is a dollar regardless of source</li>
                            <li>Always pay off high-interest debt before saving in low-interest accounts</li>
                            <li>When you get "extra" money (bonus, refund, gift), apply it to your highest-priority financial goal</li>
                            <li>Use automation to route money to the right places before mental accounting kicks in</li>
                        </ul>
                    `,
                    quiz: {
                        question: 'What is mental accounting?',
                        options: [
                            'Using a calculator for all financial decisions',
                            'Treating money differently based on its source or intended use',
                            'Keeping detailed records of all spending',
                            'Using mental math instead of a calculator'
                        ],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 4,
            title: 'Market Psychology',
            subtitle: 'How collective behavior drives bubbles, crashes, and trends',
            topics: [
                {
                    id: 'bubbles-and-crashes',
                    title: 'Understanding Bubbles & Crashes',
                    content: `
                        <h2>Understanding Bubbles & Crashes</h2>
                        <p>A bubble forms when asset prices rise far above their actual value, driven by speculation and herd behavior. A crash happens when reality catches up.</p>
                        <h3>Anatomy of a Bubble</h3>
                        <ol>
                            <li><strong>Displacement:</strong> A new technology or trend creates genuine excitement (internet, crypto, AI)</li>
                            <li><strong>Boom:</strong> Early investors make real money, attracting more investors</li>
                            <li><strong>Euphoria:</strong> Everyone's buying, prices disconnect from reality, "this time is different"</li>
                            <li><strong>Profit-taking:</strong> Smart money starts selling quietly</li>
                            <li><strong>Panic:</strong> Prices collapse, everyone rushes for the exit</li>
                        </ol>
                        <h3>Famous Bubbles</h3>
                        <ul>
                            <li><strong>Tulip Mania (1637):</strong> Single tulip bulbs sold for the price of houses in the Netherlands</li>
                            <li><strong>South Sea Bubble (1720):</strong> Isaac Newton himself lost a fortune</li>
                            <li><strong>Dot-com Bubble (2000):</strong> Companies with no revenue valued at billions</li>
                            <li><strong>Housing Bubble (2008):</strong> Triggered the worst financial crisis since the Great Depression</li>
                        </ul>
                        <h3>Warning Signs of a Bubble</h3>
                        <ul>
                            <li>People who never invest are suddenly "experts"</li>
                            <li>"This time is different" becomes a common phrase</li>
                            <li>Assets are priced based on the "greater fool" theory</li>
                            <li>Leverage (borrowing to invest) increases dramatically</li>
                        </ul>
                    `,
                    quiz: {
                        question: 'Which is a common warning sign of a financial bubble?',
                        options: [
                            'Professional investors are cautious about valuations',
                            'People who never invest are suddenly "experts" and buying in',
                            'Market volatility decreases significantly',
                            'Interest rates are rising steadily'
                        ],
                        correct: 1
                    }
                },
                {
                    id: 'media-influence',
                    title: 'Media & Social Media Influence',
                    content: `
                        <h2>Media & Social Media Influence</h2>
                        <p>Financial media and social media are powerful forces that shape investor behavior — often in harmful ways.</p>
                        <h3>Traditional Financial Media</h3>
                        <ul>
                            <li><strong>Sensationalism:</strong> "MARKET CRASH!" headlines get clicks but create panic</li>
                            <li><strong>Expert predictions:</strong> Studies show financial pundits are right about 50% of the time — same as flipping a coin</li>
                            <li><strong>Recency narrative:</strong> Media always has a story explaining why the market went up or down, creating false patterns</li>
                            <li><strong>Conflict of interest:</strong> Many "analysts" have positions in what they recommend</li>
                        </ul>
                        <h3>Social Media Amplifiers</h3>
                        <ul>
                            <li><strong>Finfluencers:</strong> Many lack credentials; some are paid to promote investments</li>
                            <li><strong>Echo chambers:</strong> Algorithms show you content that confirms your existing beliefs</li>
                            <li><strong>Survivorship bias:</strong> You only see winners posting gains, never the losers</li>
                            <li><strong>Speed of FOMO:</strong> Viral trends move faster than your ability to research them</li>
                        </ul>
                        <h3>Protecting Yourself</h3>
                        <ul>
                            <li>Limit financial news consumption to weekly or monthly reviews</li>
                            <li>Follow the data, not the narrative</li>
                            <li>Verify any social media investment advice with independent research</li>
                            <li>Remember: if someone is selling you a "guaranteed" return, run</li>
                        </ul>
                    `,
                    quiz: {
                        question: 'Why is social media particularly dangerous for investment decisions?',
                        options: [
                            'It always provides accurate financial information',
                            'Algorithms create echo chambers and survivorship bias hides losers',
                            'Social media has better analysts than traditional media',
                            'It makes investing too easy and accessible'
                        ],
                        correct: 1
                    }
                },
                {
                    id: 'contrarian-thinking',
                    title: 'Contrarian Thinking',
                    content: `
                        <h2>Contrarian Thinking</h2>
                        <p>Contrarian investing means going against the prevailing market sentiment. It's based on the idea that the crowd is often wrong at extremes.</p>
                        <h3>Famous Contrarians</h3>
                        <ul>
                            <li><strong>Warren Buffett:</strong> "Be fearful when others are greedy, and greedy when others are fearful"</li>
                            <li><strong>John Templeton:</strong> Bought stocks during WWII when everyone was selling — made a fortune</li>
                            <li><strong>Michael Burry:</strong> Bet against the housing market in 2007 when everyone called him crazy</li>
                            <li><strong>Howard Marks:</strong> Wrote memos warning about dot-com excess before the crash</li>
                        </ul>
                        <h3>When Contrarian Thinking Works</h3>
                        <ul>
                            <li>When consensus sentiment reaches an extreme (maximum greed or fear)</li>
                            <li>When fundamentals diverge significantly from market prices</li>
                            <li>When you have a long time horizon to wait for the market to correct</li>
                        </ul>
                        <h3>When It Doesn't Work</h3>
                        <ul>
                            <li>Being contrarian just to be different — you need a thesis backed by data</li>
                            <li>Going against trends too early — "the market can stay irrational longer than you can stay solvent"</li>
                            <li>Confusing a bad investment with a contrarian one</li>
                        </ul>
                        <div class="highlight">
                            <strong>Balance:</strong> The goal isn't to always go against the crowd. It's to think independently and make decisions based on evidence, not emotion.
                        </div>
                    `,
                    quiz: {
                        question: 'What is a key requirement for successful contrarian investing?',
                        options: [
                            'Always doing the opposite of what everyone else does',
                            'Having a data-backed thesis, not just going against the crowd',
                            'Only investing in assets that are declining in price',
                            'Following social media for unpopular opinions'
                        ],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 5,
            title: 'Building a Bias-Proof Financial System',
            subtitle: 'Practical strategies to protect yourself from your own brain',
            topics: [
                {
                    id: 'investment-policy',
                    title: 'Creating an Investment Policy Statement',
                    content: `
                        <h2>Creating an Investment Policy Statement</h2>
                        <p>An Investment Policy Statement (IPS) is your personal constitution for investing. You write it when you're calm and rational, then follow it during times of fear and greed.</p>
                        <h3>What to Include</h3>
                        <ul>
                            <li><strong>Your goals:</strong> What are you investing for? (Retirement, house, freedom)</li>
                            <li><strong>Time horizon:</strong> When will you need this money?</li>
                            <li><strong>Risk tolerance:</strong> How much decline can you stomach without panic selling?</li>
                            <li><strong>Asset allocation:</strong> What percentage in stocks, bonds, real estate, cash?</li>
                            <li><strong>Rebalancing rules:</strong> When and how will you rebalance?</li>
                            <li><strong>Sell rules:</strong> Under what specific conditions will you sell an investment?</li>
                            <li><strong>Emergency plan:</strong> What will you do during a 30%+ market crash?</li>
                        </ul>
                        <h3>Sample Rules</h3>
                        <ul>
                            <li>"I will invest $500/month regardless of market conditions"</li>
                            <li>"I will rebalance annually to maintain 80% stocks / 20% bonds"</li>
                            <li>"I will not check my portfolio more than once per quarter"</li>
                            <li>"I will not invest more than 5% of my portfolio in any single stock"</li>
                            <li>"If the market drops 20%+, I will increase my monthly contribution, not decrease it"</li>
                        </ul>
                        <div class="highlight">
                            <strong>Action Step:</strong> Write your IPS today. Print it. Tape it to your wall. Read it every time you feel the urge to make an emotional financial decision.
                        </div>
                    `,
                    quiz: {
                        question: 'When should you create your Investment Policy Statement?',
                        options: [
                            'During a market crash when emotions are high',
                            'Right after receiving a big investment gain',
                            'When you are calm and rational, before emotional situations arise',
                            'Only after you have been investing for at least 5 years'
                        ],
                        correct: 2
                    }
                },
                {
                    id: 'automation-systems',
                    title: 'Automating Good Decisions',
                    content: `
                        <h2>Automating Good Decisions</h2>
                        <p>The most powerful way to overcome behavioral biases is to remove yourself from the equation entirely through automation.</p>
                        <h3>What to Automate</h3>
                        <ul>
                            <li><strong>Dollar-cost averaging:</strong> Set up automatic monthly investments into index funds — removes timing anxiety</li>
                            <li><strong>401(k) contributions:</strong> Max them out automatically before you see the money</li>
                            <li><strong>Emergency fund:</strong> Auto-transfer a fixed amount to savings every paycheck</li>
                            <li><strong>Bill payments:</strong> Autopay eliminates late fees and the stress of manual payments</li>
                            <li><strong>Rebalancing:</strong> Use target-date funds or robo-advisors that rebalance automatically</li>
                        </ul>
                        <h3>The "Set It and Forget It" Portfolio</h3>
                        <p>For most people, the best investment strategy is the simplest:</p>
                        <ol>
                            <li>Choose a target-date fund or a simple 3-fund portfolio</li>
                            <li>Set up automatic monthly contributions</li>
                            <li>Don't touch it for 20+ years</li>
                            <li>Review and rebalance once per year</li>
                        </ol>
                        <h3>Why Automation Works</h3>
                        <ul>
                            <li>Removes emotion from the process</li>
                            <li>Eliminates the need for market timing</li>
                            <li>Leverages consistency — the most underrated investing superpower</li>
                            <li>Prevents impulse decisions during volatility</li>
                        </ul>
                    `,
                    quiz: {
                        question: 'Why is automation the most effective defense against behavioral biases?',
                        options: [
                            'It helps you time the market better',
                            'It removes emotion from financial decisions',
                            'It guarantees higher returns',
                            'It eliminates all investment risk'
                        ],
                        correct: 1
                    }
                },
                {
                    id: 'decision-journal',
                    title: 'The Decision Journal',
                    content: `
                        <h2>The Decision Journal</h2>
                        <p>A decision journal is one of the most powerful tools for improving your financial decision-making over time. It forces you to document your reasoning before you know the outcome.</p>
                        <h3>How It Works</h3>
                        <p>Before making any significant financial decision, write down:</p>
                        <ol>
                            <li><strong>The decision:</strong> What are you doing and why?</li>
                            <li><strong>Your reasoning:</strong> What information are you using? What assumptions are you making?</li>
                            <li><strong>Expected outcome:</strong> What do you think will happen?</li>
                            <li><strong>Your emotional state:</strong> Are you excited? Anxious? Fearful?</li>
                            <li><strong>What could go wrong:</strong> What's the bear case?</li>
                            <li><strong>Review date:</strong> When will you evaluate this decision?</li>
                        </ol>
                        <h3>The Review Process</h3>
                        <p>Periodically review past entries to identify patterns:</p>
                        <ul>
                            <li>Do you make worse decisions when emotional?</li>
                            <li>Are you consistently overconfident or underconfident?</li>
                            <li>Which types of decisions tend to work out? Which don't?</li>
                            <li>Are there biases that show up repeatedly?</li>
                        </ul>
                        <div class="highlight">
                            <strong>The Goal:</strong> Over time, you'll develop a much clearer picture of your own blind spots and become a significantly better decision-maker — not just in finance, but in life.
                        </div>
                    `,
                    quiz: {
                        question: 'What should you record in a decision journal BEFORE making a financial decision?',
                        options: [
                            'Only the amount of money involved',
                            'Your reasoning, expected outcome, emotional state, and what could go wrong',
                            'Just whether you think it will go up or down',
                            'The opinions of your friends and family'
                        ],
                        correct: 1
                    }
                }
            ]
        }
    ]
};
