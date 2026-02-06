// Personal Finance & Budgeting Curriculum Data
const personalfinanceData = {
    id: 'personalfinance',
    title: 'Personal Finance & Budgeting',
    icon: '💵',
    description: 'Master the fundamentals of managing your money—budgeting, saving, spending wisely, and building a strong financial foundation.',
    whyItMatters: 'Money touches every part of your life. Financial stress is the #1 cause of anxiety in America. Yet schools rarely teach this. Master your money and you master your options.',
    graduationGoal: 'Have a working budget, emergency fund started, and clear financial goals',
    difficulty: 'beginner',
    prerequisites: [],
    learningObjectives: [
        'Create and stick to a realistic budget',
        'Build an emergency fund to protect against unexpected expenses',
        'Understand the difference between needs and wants',
        'Set and achieve financial goals',
        'Develop healthy money habits that last a lifetime'
    ],
    relatedTracks: ['credit', 'debt', 'banking', 'investing', 'retirement'],
    resources: [
        { title: 'Consumer Financial Protection Bureau', url: 'https://www.consumerfinance.gov/consumer-tools/' },
        { title: 'MyMoney.gov', url: 'https://www.mymoney.gov/' },
        { title: 'NerdWallet - Personal Finance', url: 'https://www.nerdwallet.com/article/finance/personal-finance-basics' }
    ],
    levels: [
        {
            id: 1,
            title: 'Money Mindset & Basics',
            subtitle: 'Understanding your relationship with money',
            learningObjectives: [
                'Identify your money mindset and beliefs',
                'Understand the difference between scarcity and abundance thinking',
                'Recognize how emotions affect financial decisions',
                'Develop a healthy relationship with money'
            ],
            keyTakeaways: [
                'Your money mindset drives every financial decision',
                'Scarcity thinking leads to fear-based choices',
                'Money is a tool, not a measure of worth',
                'Changing your mindset is the first step to financial success'
            ],
            applyIt: 'Write down 3 money beliefs you have. Challenge each one. Are they helping or hurting you? Replace limiting beliefs with empowering ones.',
            topics: [
                {
                    id: 'money-mindset',
                    title: 'Your Money Mindset',
                    content: `
                        <h2>Your Money Mindset</h2>
                        <h3>Why Mindset Comes First</h3>
                        <p>Before budgets and spreadsheets, you need to understand how you THINK about money. Your beliefs about money drive every financial decision.</p>
                        <h3>Common Money Beliefs (And Reality)</h3>
                        <ul>
                            <li><strong>"I'm just bad with money"</strong> → No one taught you. It's a skill, not a talent.</li>
                            <li><strong>"I don't make enough to save"</strong> → Start with $5. The habit matters more than the amount.</li>
                            <li><strong>"Rich people are lucky"</strong> → Wealth is mostly built through consistent habits over time.</li>
                            <li><strong>"I'll deal with it later"</strong> → Every day you wait costs you compound growth.</li>
                            <li><strong>"Money is evil"</strong> → Money is a tool. It amplifies who you already are.</li>
                        </ul>
                        <h3>Scarcity vs. Abundance Mindset</h3>
                        <ul>
                            <li><strong>Scarcity:</strong> "There's never enough" → leads to fear, hoarding, or reckless spending</li>
                            <li><strong>Abundance:</strong> "I can learn and grow" → leads to planning, investing, and confidence</li>
                        </ul>
                        <div class="highlight">
                            <strong>Key Insight:</strong> You can't budget your way out of a mindset problem. Fix the beliefs first, then the numbers follow.
                        </div>
                    `
                },
                {
                    id: 'income-expenses',
                    title: 'Income vs. Expenses: The Foundation',
                    content: `
                        <h2>Income vs. Expenses: The Foundation</h2>
                        <h3>The Wealth Equation</h3>
                        <div class="example">
                            <strong>Wealth = Income − Expenses + (Savings × Time)</strong><br>
                            It's not about how much you make. It's about how much you KEEP.
                        </div>
                        <h3>Types of Income</h3>
                        <ul>
                            <li><strong>Gross Income:</strong> Total before taxes and deductions</li>
                            <li><strong>Net Income:</strong> What actually hits your bank account (take-home pay)</li>
                            <li><strong>Side Income:</strong> Freelance, gig work, selling items</li>
                            <li><strong>Passive Income:</strong> Investments, rental income, royalties</li>
                        </ul>
                        <h3>Types of Expenses</h3>
                        <ul>
                            <li><strong>Fixed:</strong> Same every month (rent, car payment, subscriptions)</li>
                            <li><strong>Variable:</strong> Changes monthly (groceries, gas, entertainment)</li>
                            <li><strong>Periodic:</strong> Not monthly (car insurance, holidays, annual fees)</li>
                            <li><strong>Invisible:</strong> Small charges you forget about (subscriptions, fees)</li>
                        </ul>
                        <h3>Know Your Numbers</h3>
                        <p>Before budgeting, answer:</p>
                        <ul>
                            <li>What is your monthly take-home pay?</li>
                            <li>What are your total monthly expenses?</li>
                            <li>What's the difference? (positive = surplus, negative = deficit)</li>
                        </ul>
                        <div class="highlight">
                            <strong>Action Step:</strong> Check your bank statements for the last 3 months. Add up every dollar spent. Most people are shocked by the total.
                        </div>
                    `
                },
                {
                    id: 'financial-goals',
                    title: 'Setting Financial Goals',
                    content: `
                        <h2>Setting Financial Goals</h2>
                        <h3>Why Goals Matter</h3>
                        <p>Without goals, money just happens to you. With goals, you control where it goes.</p>
                        <h3>Goal Categories</h3>
                        <ul>
                            <li><strong>Emergency (Now):</strong> $1,000 starter emergency fund</li>
                            <li><strong>Short-term (1 year):</strong> Vacation, new laptop, pay off a credit card</li>
                            <li><strong>Medium-term (1-5 years):</strong> Car, down payment, wedding</li>
                            <li><strong>Long-term (5+ years):</strong> Retirement, financial independence, home</li>
                        </ul>
                        <h3>SMART Financial Goals</h3>
                        <div class="example">
                            <strong>Bad:</strong> "I want to save money"<br>
                            <strong>SMART:</strong> "I will save $3,000 for an emergency fund by December by putting $250/month into a high-yield savings account"
                        </div>
                        <ul>
                            <li><strong>Specific:</strong> Exact amount and purpose</li>
                            <li><strong>Measurable:</strong> Can you track it?</li>
                            <li><strong>Achievable:</strong> Realistic with your income</li>
                            <li><strong>Relevant:</strong> Matters to YOUR life</li>
                            <li><strong>Time-bound:</strong> Has a deadline</li>
                        </ul>
                        <h3>Priority Order</h3>
                        <ol>
                            <li>$1,000 emergency fund</li>
                            <li>Pay off high-interest debt</li>
                            <li>3-6 month emergency fund</li>
                            <li>Retirement investing (at least employer match)</li>
                            <li>Everything else</li>
                        </ol>
                        <div class="highlight">
                            <strong>Write It Down:</strong> People who write their financial goals are 42% more likely to achieve them.
                        </div>
                    `
                }
            ],
            quiz: {
                questions: [
                    {
                        question: 'What is the "wealth equation"?',
                        options: ['Income × Savings', 'Income − Expenses + (Savings × Time)', 'Income ÷ Debt', 'Salary × Years Worked'],
                        correct: 1,
                        explanation: 'Wealth = Income − Expenses + (Savings × Time). It\'s not about how much you make, but how much you keep and grow over time.'
                    },
                    {
                        question: 'What should be your FIRST financial goal?',
                        options: ['Max out retirement accounts', 'Buy a house', '$1,000 starter emergency fund', 'Pay off all debt'],
                        correct: 2,
                        explanation: 'A $1,000 starter emergency fund prevents you from going deeper into debt when unexpected expenses hit. It\'s the foundation everything else builds on.'
                    },
                    {
                        question: 'What is NET income?',
                        options: ['Your total salary before deductions', 'What actually hits your bank account after taxes', 'Your investment returns', 'Income from the internet'],
                        correct: 1,
                        explanation: 'Net income is your take-home pay after taxes and deductions. This is the real number you budget with—not your gross salary.'
                    }
                ]
            }
        },
        {
            id: 2,
            title: 'Building Your Budget',
            subtitle: 'Creating a plan that actually works',
            learningObjectives: [
                'Create a realistic budget using the 50/30/20 rule or zero-based budgeting',
                'Track income and expenses accurately',
                'Identify spending patterns and areas for improvement',
                'Adjust your budget as life changes'
            ],
            keyTakeaways: [
                'A budget is a plan for your money, not a restriction',
                'The 50/30/20 rule: 50% needs, 30% wants, 20% savings',
                'Track every expense for at least one month',
                'Budgets should be flexible and realistic'
            ],
            applyIt: 'Create your first budget using the 50/30/20 rule. Track all expenses for 30 days. Use the Budget Planner tool on this site to make it easy.',
            topics: [
                {
                    id: 'budgeting-methods',
                    title: 'Budgeting Methods Compared',
                    content: `
                        <h2>Budgeting Methods Compared</h2>
                        <h3>50/30/20 Rule (Simplest)</h3>
                        <ul>
                            <li><strong>50% Needs:</strong> Rent, utilities, groceries, minimum debt payments, insurance</li>
                            <li><strong>30% Wants:</strong> Dining out, entertainment, shopping, subscriptions</li>
                            <li><strong>20% Savings/Debt:</strong> Emergency fund, investing, extra debt payments</li>
                        </ul>
                        <div class="example">
                            <strong>Example:</strong> $4,000 take-home<br>
                            Needs: $2,000 | Wants: $1,200 | Savings: $800
                        </div>
                        <h3>Zero-Based Budget (Most Control)</h3>
                        <p>Every dollar gets a job. Income − All Expenses = $0</p>
                        <ul>
                            <li>Most detailed and intentional</li>
                            <li>Best for paying off debt or tight budgets</li>
                            <li>Takes more time but gives total control</li>
                        </ul>
                        <h3>Pay-Yourself-First (Easiest to Maintain)</h3>
                        <ol>
                            <li>Automate savings/investing FIRST on payday</li>
                            <li>Pay fixed bills</li>
                            <li>Spend the rest freely</li>
                        </ol>
                        <h3>Envelope System (Best for Overspenders)</h3>
                        <ul>
                            <li>Physical or digital "envelopes" for each category</li>
                            <li>When the envelope is empty, you stop spending</li>
                            <li>Great for variable expenses like dining and entertainment</li>
                        </ul>
                        <div class="highlight">
                            <strong>Best Method:</strong> The one you'll actually use. Start with 50/30/20 if you're new. Switch to zero-based when you're ready for more control.
                        </div>
                    `
                },
                {
                    id: 'creating-first-budget',
                    title: 'Creating Your First Budget',
                    content: `
                        <h2>Creating Your First Budget</h2>
                        <h3>Step 1: Gather Your Numbers</h3>
                        <ul>
                            <li>Last 3 months of bank/card statements</li>
                            <li>All income sources</li>
                            <li>All recurring bills</li>
                            <li>Average spending by category</li>
                        </ul>
                        <h3>Step 2: List Every Expense Category</h3>
                        <ul>
                            <li>Housing (rent/mortgage)</li>
                            <li>Utilities (electric, water, internet, phone)</li>
                            <li>Transportation (car payment, gas, insurance, transit)</li>
                            <li>Food (groceries AND dining out—separate them)</li>
                            <li>Insurance (health, auto, renters)</li>
                            <li>Debt payments (minimum payments)</li>
                            <li>Personal care (haircuts, toiletries)</li>
                            <li>Entertainment (streaming, hobbies, going out)</li>
                            <li>Savings goals</li>
                            <li>Miscellaneous / buffer</li>
                        </ul>
                        <h3>Step 3: Assign Dollar Amounts</h3>
                        <p>Use actual spending data, not what you WISH you spent.</p>
                        <h3>Step 4: Find the Gaps</h3>
                        <ul>
                            <li>Income > Expenses? Great—direct surplus to goals</li>
                            <li>Income < Expenses? Find cuts or increase income</li>
                        </ul>
                        <h3>Step 5: Review Weekly</h3>
                        <p>Set a 15-minute weekly money date. Review spending, adjust as needed.</p>
                        <div class="highlight">
                            <strong>Your first budget will be wrong.</strong> That's fine. It takes 2-3 months to dial in a budget that reflects your real life. Keep adjusting.
                        </div>
                        <a href="../budget-planner/index.html" class="tool-callout" target="_blank">
                            <span class="tool-callout-icon">💰</span>
                            <div class="tool-callout-content">
                                <strong>🧰 Ready to build your budget? Open the Budget Planner</strong>
                                <p>Put what you just learned into practice — set up your income, expenses, and savings goals with our interactive Budget Planner tool.</p>
                            </div>
                            <span class="tool-callout-arrow">→</span>
                        </a>
                    `
                },
                {
                    id: 'tracking-spending',
                    title: 'Tracking Your Spending',
                    content: `
                        <h2>Tracking Your Spending</h2>
                        <h3>Why Tracking Matters</h3>
                        <p>You can't manage what you don't measure. Most people underestimate their spending by 20-40%.</p>
                        <h3>Tracking Methods</h3>
                        <ul>
                            <li><strong>Apps:</strong> Mint, YNAB, Copilot, Monarch Money</li>
                            <li><strong>Spreadsheet:</strong> Google Sheets, Excel (full control)</li>
                            <li><strong>Pen & Paper:</strong> Old school but effective for some</li>
                            <li><strong>Bank Categories:</strong> Most banks categorize spending now</li>
                        </ul>
                        <h3>The Latte Factor (And Why It Matters)</h3>
                        <p>Small daily expenses add up fast:</p>
                        <div class="example">
                            $5 coffee × 365 days = $1,825/year<br>
                            $15 lunch × 250 work days = $3,750/year<br>
                            $50 unused subscriptions × 12 = $600/year<br>
                            <strong>Total: $6,175/year in "small" expenses</strong>
                        </div>
                        <p>This isn't about never buying coffee. It's about being AWARE and INTENTIONAL.</p>
                        <h3>The Subscription Audit</h3>
                        <ol>
                            <li>List every recurring charge</li>
                            <li>Ask: "Would I actively sign up for this today?"</li>
                            <li>Cancel anything you forgot you had</li>
                            <li>Repeat every 3 months</li>
                        </ol>
                        <div class="highlight">
                            <strong>Challenge:</strong> Track every dollar you spend for 30 days. No judgment, just observation. Awareness alone changes behavior.
                        </div>
                    `
                },
                {
                    id: 'needs-vs-wants',
                    title: 'Needs vs. Wants: Spending Intentionally',
                    content: `
                        <h2>Needs vs. Wants</h2>
                        <h3>The Difference</h3>
                        <ul>
                            <li><strong>Need:</strong> Required for basic survival and functioning (shelter, food, transportation to work, basic clothing)</li>
                            <li><strong>Want:</strong> Makes life enjoyable but isn't essential (dining out, new shoes, streaming services)</li>
                        </ul>
                        <h3>The Gray Area</h3>
                        <p>Some things are tricky:</p>
                        <ul>
                            <li><strong>Phone:</strong> Need a phone (want the latest iPhone)</li>
                            <li><strong>Food:</strong> Need groceries (want premium organic everything)</li>
                            <li><strong>Car:</strong> Need reliable transport (want a luxury car)</li>
                            <li><strong>Clothing:</strong> Need basic clothes (want designer brands)</li>
                        </ul>
                        <h3>Intentional Spending</h3>
                        <p>The goal isn't to cut all wants. It's to spend on wants that actually make you happy.</p>
                        <ul>
                            <li><strong>Cut ruthlessly</strong> on things you don't care about</li>
                            <li><strong>Spend generously</strong> on things you love</li>
                        </ul>
                        <h3>The 24-Hour Rule</h3>
                        <p>For any purchase over $50:</p>
                        <ol>
                            <li>Wait 24 hours before buying</li>
                            <li>Ask: "Will this matter in 30 days?"</li>
                            <li>If yes after 24 hours, buy it guilt-free</li>
                        </ol>
                        <div class="highlight">
                            <strong>Mindset:</strong> Frugality isn't deprivation—it's choosing what matters. Spend on what brings genuine value; cut what doesn't.
                        </div>
                    `
                }
            ],
            quiz: {
                questions: [
                    {
                        question: 'In the 50/30/20 rule, what does the 20% represent?',
                        options: ['Entertainment', 'Housing', 'Savings and debt repayment', 'Food'],
                        correct: 2,
                        explanation: 'The 20% goes toward savings (emergency fund, investing) and extra debt payments beyond minimums.'
                    },
                    {
                        question: 'What is zero-based budgeting?',
                        options: ['Having zero savings', 'Spending zero on wants', 'Assigning every dollar a job so income minus expenses equals zero', 'Starting your budget from scratch each month'],
                        correct: 2,
                        explanation: 'Zero-based budgeting means every dollar of income is assigned to a specific purpose, leaving $0 unallocated. It gives you maximum control.'
                    },
                    {
                        question: 'What is the 24-hour rule for spending?',
                        options: ['Only shop for 24 hours per month', 'Wait 24 hours before non-essential purchases over $50', 'Check your bank every 24 hours', 'Return items within 24 hours'],
                        correct: 1,
                        explanation: 'The 24-hour rule helps curb impulse spending. Waiting a day before buying often reveals you didn\'t really need the item.'
                    }
                ]
            }
        },
        {
            id: 3,
            title: 'Saving Strategies',
            subtitle: 'Building your financial cushion',
            learningObjectives: [
                'Build an emergency fund to cover 3-6 months of expenses',
                'Use automation to make saving effortless',
                'Set up separate savings accounts for different goals',
                'Overcome common barriers to saving'
            ],
            keyTakeaways: [
                'Pay yourself first - automate savings',
                'Emergency fund should cover 3-6 months of expenses',
                'Separate accounts for different goals keep you focused',
                'Start small - even $5 a week adds up'
            ],
            applyIt: 'Open a high-yield savings account. Set up automatic transfers of $50-100 per month. Start building your emergency fund today, even if it\'s just $25.',
            topics: [
                {
                    id: 'emergency-fund',
                    title: 'Building Your Emergency Fund',
                    content: `
                        <h2>Building Your Emergency Fund</h2>
                        <h3>Why It's Priority #1</h3>
                        <ul>
                            <li>40% of Americans can't cover a $400 emergency</li>
                            <li>Without one, any surprise = debt</li>
                            <li>Reduces stress and improves decision-making</li>
                            <li>Gives you options (can leave bad job, bad situation)</li>
                        </ul>
                        <h3>How Much to Save</h3>
                        <ul>
                            <li><strong>Phase 1:</strong> $1,000 (starter fund — do this FAST)</li>
                            <li><strong>Phase 2:</strong> 1 month of expenses</li>
                            <li><strong>Phase 3:</strong> 3 months of expenses (minimum target)</li>
                            <li><strong>Phase 4:</strong> 6 months of expenses (full security)</li>
                        </ul>
                        <h3>Where to Keep It</h3>
                        <ul>
                            <li><strong>High-Yield Savings Account (HYSA)</strong> — 4-5% APY currently</li>
                            <li>NOT in your checking account (too easy to spend)</li>
                            <li>NOT in investments (need instant access)</li>
                            <li>Separate bank can reduce temptation</li>
                        </ul>
                        <h3>Building From $0</h3>
                        <ul>
                            <li>Start with $25-50/paycheck — automate it</li>
                            <li>Sell items you don't use</li>
                            <li>Direct tax refund to savings</li>
                            <li>Do a no-spend week challenge</li>
                            <li>Pick up a temporary side hustle</li>
                        </ul>
                        <div class="highlight">
                            <strong>Rule:</strong> Emergency fund is for EMERGENCIES only. Job loss, medical bills, car breakdown. Not a sale at your favorite store.
                        </div>
                    `
                },
                {
                    id: 'automating-savings',
                    title: 'Automating Your Finances',
                    content: `
                        <h2>Automating Your Finances</h2>
                        <h3>Why Automate?</h3>
                        <ul>
                            <li>Removes willpower from the equation</li>
                            <li>You can't spend what you don't see</li>
                            <li>Never miss a bill payment</li>
                            <li>Builds wealth on autopilot</li>
                        </ul>
                        <h3>The Automation System</h3>
                        <p>Set up on payday:</p>
                        <ol>
                            <li><strong>Paycheck deposits</strong> into checking</li>
                            <li><strong>Auto-transfer:</strong> Savings → HYSA (pay yourself first)</li>
                            <li><strong>Auto-transfer:</strong> Retirement → 401(k)/IRA</li>
                            <li><strong>Auto-pay:</strong> All fixed bills (rent, utilities, insurance)</li>
                            <li><strong>What's left:</strong> Your spending money</li>
                        </ol>
                        <h3>Tools for Automation</h3>
                        <ul>
                            <li><strong>Bank auto-transfers:</strong> Schedule recurring transfers</li>
                            <li><strong>Direct deposit split:</strong> Many employers let you split paycheck</li>
                            <li><strong>Round-up apps:</strong> Acorns, Qapital — save spare change</li>
                            <li><strong>Auto-increase:</strong> Raise savings by 1% each quarter</li>
                        </ul>
                        <div class="highlight">
                            <strong>The Goal:</strong> Set it up once, then your money manages itself. The best financial plan is one that runs without you thinking about it.
                        </div>
                    `
                },
                {
                    id: 'sinking-funds',
                    title: 'Sinking Funds: Saving for Known Expenses',
                    content: `
                        <h2>Sinking Funds</h2>
                        <div class="definition">
                            <strong>Sinking Fund:</strong> Money set aside monthly for a known future expense, so it doesn't wreck your budget when it arrives.
                        </div>
                        <h3>Common Sinking Funds</h3>
                        <ul>
                            <li><strong>Car maintenance:</strong> $50-100/month</li>
                            <li><strong>Holiday gifts:</strong> $50/month (start in January!)</li>
                            <li><strong>Annual subscriptions:</strong> Divide by 12, save monthly</li>
                            <li><strong>Vacation:</strong> $100-200/month</li>
                            <li><strong>Medical expenses:</strong> $50-100/month</li>
                            <li><strong>Clothing:</strong> $25-50/month</li>
                            <li><strong>Home repairs:</strong> 1% home value ÷ 12</li>
                        </ul>
                        <h3>How to Set Them Up</h3>
                        <ol>
                            <li>List all non-monthly expenses for the year</li>
                            <li>Estimate the total cost</li>
                            <li>Divide by months until needed</li>
                            <li>Automate monthly transfers</li>
                        </ol>
                        <div class="example">
                            <strong>Example:</strong> Car insurance = $1,200/year<br>
                            $1,200 ÷ 12 = $100/month into car insurance sinking fund<br>
                            When the bill comes, the money is ready.
                        </div>
                        <div class="highlight">
                            <strong>Game Changer:</strong> Sinking funds turn "emergencies" into planned expenses. Christmas comes every December—it's not a surprise.
                        </div>
                    `
                }
            ],
            quiz: {
                questions: [
                    {
                        question: 'Where should you keep your emergency fund?',
                        options: ['In your checking account', 'In a high-yield savings account', 'In stocks', 'Under your mattress'],
                        correct: 1,
                        explanation: 'A high-yield savings account gives you instant access for emergencies while earning 4-5% interest, and keeps it separate from spending money.'
                    },
                    {
                        question: 'What is a sinking fund?',
                        options: ['A fund that\'s losing money', 'Money set aside monthly for planned future expenses', 'A type of investment account', 'Emergency savings'],
                        correct: 1,
                        explanation: 'Sinking funds spread known future expenses across months so they don\'t hit your budget all at once. It turns "emergencies" into planned events.'
                    },
                    {
                        question: 'What is the most important principle of automation?',
                        options: ['It saves time on tax day', 'It removes willpower—you save before you can spend', 'It earns more interest', 'It looks impressive to banks'],
                        correct: 1,
                        explanation: 'Automation works because you can\'t spend money you never see. Paying yourself first on autopilot builds wealth without relying on willpower.'
                    }
                ]
            }
        },
        {
            id: 4,
            title: 'Reducing Expenses & Growing Income',
            subtitle: 'Both sides of the equation',
            learningObjectives: [
                'Identify and eliminate unnecessary expenses',
                'Negotiate better rates on bills and services',
                'Find ways to increase your income',
                'Balance lifestyle with financial goals'
            ],
            keyTakeaways: [
                'Small expenses add up - track everything',
                'You can negotiate almost anything',
                'Increasing income is often easier than cutting expenses',
                'Focus on high-impact changes first'
            ],
            applyIt: 'Review your last 3 months of expenses. Identify 3 subscriptions or services you can cancel. Call one service provider (internet, phone, insurance) and negotiate a better rate.',
            topics: [
                {
                    id: 'cutting-expenses',
                    title: 'Smart Ways to Cut Expenses',
                    content: `
                        <h2>Smart Ways to Cut Expenses</h2>
                        <h3>Big Wins (Focus Here First)</h3>
                        <ul>
                            <li><strong>Housing:</strong> Roommate, negotiate rent, move to cheaper area</li>
                            <li><strong>Transportation:</strong> Used car, public transit, bike</li>
                            <li><strong>Insurance:</strong> Shop annually, bundle, raise deductibles</li>
                            <li><strong>Food:</strong> Cook more, meal prep, grocery list</li>
                            <li><strong>Cell phone:</strong> Switch to discount carrier (Mint, Cricket)</li>
                        </ul>
                        <h3>Quick Wins</h3>
                        <ul>
                            <li>Cancel unused subscriptions (do an audit NOW)</li>
                            <li>Negotiate cable/internet bill (call and ask)</li>
                            <li>Use cashback apps (Rakuten, Ibotta)</li>
                            <li>Switch to generic brands (same quality)</li>
                            <li>Use the library (books, movies, events—all free)</li>
                        </ul>
                        <h3>The Savings Hierarchy</h3>
                        <ol>
                            <li><strong>Eliminate:</strong> Things you don't use or value</li>
                            <li><strong>Reduce:</strong> Downgrade what you can</li>
                            <li><strong>Optimize:</strong> Get better deals on necessities</li>
                            <li><strong>Substitute:</strong> Find free or cheaper alternatives</li>
                        </ol>
                        <div class="highlight">
                            <strong>Focus on the Big 3:</strong> Housing, transportation, and food make up 60-70% of most budgets. Optimize these first for maximum impact.
                        </div>
                    `
                },
                {
                    id: 'increasing-income',
                    title: 'Increasing Your Income',
                    content: `
                        <h2>Increasing Your Income</h2>
                        <h3>Why Income Matters</h3>
                        <p>There's a floor to cutting expenses but no ceiling on income. At some point, you need to earn more, not just spend less.</p>
                        <h3>Quick Income Boosts</h3>
                        <ul>
                            <li><strong>Ask for a raise</strong> (see our Negotiation track)</li>
                            <li><strong>Sell unused items</strong> (Facebook Marketplace, eBay, Poshmark)</li>
                            <li><strong>Freelance your skills</strong> (see our Freelancing track)</li>
                            <li><strong>Gig economy:</strong> DoorDash, Uber, TaskRabbit</li>
                            <li><strong>Overtime</strong> if available</li>
                        </ul>
                        <h3>Medium-Term Income Growth</h3>
                        <ul>
                            <li>Get a certification or learn a new skill</li>
                            <li>Switch jobs (often 10-20% raise)</li>
                            <li>Start a side business</li>
                            <li>Negotiate at every job change</li>
                        </ul>
                        <h3>The Income Ladder</h3>
                        <div class="example">
                            Level 1: Trade time for money (hourly job)<br>
                            Level 2: Trade skills for money (salaried/freelance)<br>
                            Level 3: Trade systems for money (business)<br>
                            Level 4: Trade money for money (investing)
                        </div>
                        <div class="highlight">
                            <strong>Both/And Strategy:</strong> Cut expenses AND grow income simultaneously. One dollar saved and one dollar earned both equal one dollar—but earning has no ceiling.
                        </div>
                    `
                },
                {
                    id: 'lifestyle-inflation',
                    title: 'Avoiding Lifestyle Inflation',
                    content: `
                        <h2>Avoiding Lifestyle Inflation</h2>
                        <div class="definition">
                            <strong>Lifestyle Inflation:</strong> When your spending rises to match (or exceed) your income increases. You make more but save the same.
                        </div>
                        <h3>How It Happens</h3>
                        <ul>
                            <li>Get a raise → nicer apartment, nicer car</li>
                            <li>Bonus → immediately spent on "treats"</li>
                            <li>Promotion → upgrade everything</li>
                            <li>Social pressure → keeping up with others</li>
                        </ul>
                        <h3>The 50% Rule</h3>
                        <p>When you get a raise or bonus:</p>
                        <ul>
                            <li>50% goes to savings/investing/debt</li>
                            <li>50% you can enjoy and improve lifestyle</li>
                        </ul>
                        <h3>Signs You're Inflating</h3>
                        <ul>
                            <li>Making more but still living paycheck to paycheck</li>
                            <li>Savings rate hasn't increased with income</li>
                            <li>You "need" things you didn't need 2 years ago</li>
                            <li>Debt is growing despite higher income</li>
                        </ul>
                        <div class="highlight">
                            <strong>The Secret:</strong> Wealthy people aren't the ones with the nicest stuff. They're the ones who grew their savings rate as their income grew.
                        </div>
                    `
                }
            ],
            quiz: {
                questions: [
                    {
                        question: 'What are the "Big 3" expenses to optimize first?',
                        options: ['Coffee, streaming, gym', 'Housing, transportation, and food', 'Insurance, taxes, utilities', 'Entertainment, clothing, dining'],
                        correct: 1,
                        explanation: 'Housing, transportation, and food make up 60-70% of most budgets. Optimizing these has far more impact than cutting small luxuries.'
                    },
                    {
                        question: 'What is lifestyle inflation?',
                        options: ['Prices going up due to inflation', 'Spending more as you earn more, saving the same', 'Upgrading your lifestyle intentionally', 'A type of investment strategy'],
                        correct: 1,
                        explanation: 'Lifestyle inflation means your spending rises to match income increases, leaving you no better off despite earning more. The 50% rule helps combat this.'
                    },
                    {
                        question: 'When you get a raise, how much should go to savings?',
                        options: ['0% — enjoy it', '25%', 'At least 50%', '100%'],
                        correct: 2,
                        explanation: 'The 50% rule: at least half of any raise should go to savings/investing/debt. The other half you can enjoy guilt-free.'
                    }
                ]
            }
        },
        {
            id: 5,
            title: 'Financial Protection & Next Steps',
            subtitle: 'Protecting what you\'ve built and leveling up',
            learningObjectives: [
                'Protect your finances with insurance and legal documents',
                'Set long-term financial goals',
                'Plan for major life events',
                'Continue building wealth beyond the basics'
            ],
            keyTakeaways: [
                'Insurance protects your wealth from disasters',
                'Estate planning ensures your wishes are followed',
                'Long-term goals require long-term planning',
                'Financial success is a journey, not a destination'
            ],
            applyIt: 'Review your insurance coverage (health, auto, renters/homeowners). Make sure you have adequate protection. Set one 5-year financial goal and create a plan to achieve it.',
            topics: [
                {
                    id: 'financial-protection',
                    title: 'Protecting Your Finances',
                    content: `
                        <h2>Protecting Your Finances</h2>
                        <h3>Identity Theft Prevention</h3>
                        <ul>
                            <li>Freeze your credit at all 3 bureaus (free)</li>
                            <li>Use unique passwords for financial accounts</li>
                            <li>Enable 2-factor authentication everywhere</li>
                            <li>Monitor your credit regularly (Credit Karma, AnnualCreditReport.com)</li>
                            <li>Shred sensitive documents</li>
                        </ul>
                        <h3>Fraud Protection</h3>
                        <ul>
                            <li>Never share account info via phone/email/text</li>
                            <li>Verify requests independently (call the bank directly)</li>
                            <li>Set up transaction alerts on all accounts</li>
                            <li>Use credit cards (not debit) for purchases—better fraud protection</li>
                        </ul>
                        <h3>Insurance Basics</h3>
                        <ul>
                            <li><strong>Health insurance:</strong> Non-negotiable. Medical bankruptcy is real.</li>
                            <li><strong>Renters insurance:</strong> $15-20/month. Covers your stuff.</li>
                            <li><strong>Auto insurance:</strong> Required. Shop annually for rates.</li>
                            <li><strong>Life insurance:</strong> If anyone depends on your income.</li>
                        </ul>
                        <div class="highlight">
                            <strong>Key Principle:</strong> Building wealth without protecting it is like filling a bucket with holes. Plug the holes first.
                        </div>
                    `
                },
                {
                    id: 'understanding-paystub',
                    title: 'Understanding Your Paycheck',
                    content: `
                        <h2>Understanding Your Paycheck</h2>
                        <h3>What's on Your Pay Stub</h3>
                        <ul>
                            <li><strong>Gross Pay:</strong> Total earned before deductions</li>
                            <li><strong>Federal Tax:</strong> Based on tax bracket and W-4</li>
                            <li><strong>State Tax:</strong> Varies by state (CA has high rates)</li>
                            <li><strong>Social Security (FICA):</strong> 6.2% of gross</li>
                            <li><strong>Medicare:</strong> 1.45% of gross</li>
                            <li><strong>Health Insurance:</strong> Your premium share</li>
                            <li><strong>401(k):</strong> Your retirement contribution</li>
                            <li><strong>Net Pay:</strong> What you actually take home</li>
                        </ul>
                        <h3>Why This Matters</h3>
                        <div class="example">
                            <strong>$60,000 salary ≠ $60,000 in your pocket</strong><br>
                            Federal tax: ~$5,000<br>
                            State tax (CA): ~$2,000<br>
                            FICA/Medicare: ~$4,590<br>
                            Health insurance: ~$2,400<br>
                            401(k) at 6%: ~$3,600<br>
                            <strong>Take-home: ~$42,410 ($3,534/month)</strong>
                        </div>
                        <h3>Optimizing Your Paycheck</h3>
                        <ul>
                            <li>Update W-4 if getting big refund or owing money</li>
                            <li>Contribute enough to 401(k) for employer match</li>
                            <li>Consider HSA if you have high-deductible health plan</li>
                            <li>Review open enrollment benefits annually</li>
                        </ul>
                        <div class="highlight">
                            <strong>Action:</strong> Pull up your most recent pay stub right now. Can you identify every line item? If not, ask HR to explain.
                        </div>
                    `
                },
                {
                    id: 'financial-planning-age',
                    title: 'Financial Planning by Life Stage',
                    content: `
                        <h2>Financial Planning by Life Stage</h2>
                        <h3>18-25: Building the Foundation</h3>
                        <ul>
                            <li>Build credit (secured card → regular card)</li>
                            <li>Start emergency fund</li>
                            <li>Avoid high-interest debt</li>
                            <li>Start investing even $25/month (compound interest!)</li>
                            <li>Build marketable skills</li>
                        </ul>
                        <h3>25-35: Accelerating</h3>
                        <ul>
                            <li>Maximize employer retirement match</li>
                            <li>Open Roth IRA</li>
                            <li>Build 6-month emergency fund</li>
                            <li>Pay off high-interest debt aggressively</li>
                            <li>Start saving for big goals (house, wedding)</li>
                        </ul>
                        <h3>35-50: Building Wealth</h3>
                        <ul>
                            <li>Maximize retirement contributions</li>
                            <li>Diversify investments</li>
                            <li>Estate planning (will, life insurance)</li>
                            <li>Children's education savings (529)</li>
                            <li>Review and optimize all insurance</li>
                        </ul>
                        <h3>50+: Protecting & Transitioning</h3>
                        <ul>
                            <li>Catch-up retirement contributions</li>
                            <li>Shift to more conservative investments</li>
                            <li>Medicare and Social Security planning</li>
                            <li>Long-term care considerations</li>
                            <li>Estate planning updates</li>
                        </ul>
                        <div class="highlight">
                            <strong>No Matter Your Age:</strong> The best time to start was 10 years ago. The second best time is TODAY. You're not behind—you're starting.
                        </div>
                    `
                }
            ],
            quiz: {
                questions: [
                    {
                        question: 'Why should you use credit cards instead of debit for purchases?',
                        options: ['Higher credit limit', 'Better fraud protection and easier to dispute charges', 'You don\'t have to pay it back', 'They\'re always accepted'],
                        correct: 1,
                        explanation: 'Credit cards offer much better fraud protection than debit cards. With debit, stolen money comes straight from your bank account and can be harder to recover.'
                    },
                    {
                        question: 'What percentage of gross pay goes to Social Security (FICA)?',
                        options: ['1.45%', '6.2%', '10%', '15%'],
                        correct: 1,
                        explanation: 'Social Security tax (FICA) takes 6.2% of your gross pay, plus 1.45% for Medicare, totaling 7.65% in payroll taxes.'
                    },
                    {
                        question: 'What should someone aged 18-25 prioritize financially?',
                        options: ['Buying a house', 'Maximizing 401(k)', 'Building credit, emergency fund, and avoiding high-interest debt', 'Aggressive stock trading'],
                        correct: 2,
                        explanation: 'At 18-25, the priorities are building credit, starting an emergency fund, avoiding high-interest debt, and starting to invest even small amounts.'
                    }
                ]
            }
        }
    ]
};
