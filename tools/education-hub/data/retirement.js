// Retirement Planning Curriculum Data
const retirementData = {
    id: 'retirement',
    title: 'Retirement Planning',
    icon: '🏖️',
    description: 'Plan for your future with 401(k)s, IRAs, and long-term investing strategies.',
    graduationGoal: 'Have a clear retirement strategy and accounts in place',
    difficulty: 'beginner',
    prerequisites: ['personalfinance', 'investing'],
    learningObjectives: [
        'Understand different retirement accounts (401k, IRA, Roth)',
        'Calculate how much you need to retire comfortably',
        'Maximize employer matching and tax advantages',
        'Create a retirement savings plan',
        'Manage retirement accounts effectively'
    ],
    relatedTracks: ['investing', 'personalfinance', 'stocks', 'estateplanning'],
    resources: [
        { title: 'Social Security Administration', url: 'https://www.ssa.gov/' },
        { title: 'IRS - Retirement Plans', url: 'https://www.irs.gov/retirement-plans' },
        { title: 'AARP Retirement Planning', url: 'https://www.aarp.org/retirement/' }
    ],
    levels: [
        {
            id: 1,
            title: 'Why Retirement Planning Matters',
            subtitle: 'The power of starting early',
            topics: [
                {
                    id: 'compound-interest',
                    title: 'The Magic of Compound Interest',
                    content: `
                        <h2>The Magic of Compound Interest</h2>
                        <div class="definition">
                            <strong>Compound Interest:</strong> When your earnings generate their own earnings. Your money makes money, which then makes more money.
                        </div>
                        <h3>Simple Example</h3>
                        <div class="example">
                            Invest $10,000 at 8% annual return:<br>
                            Year 1: $10,800 (+$800)<br>
                            Year 10: $21,589<br>
                            Year 20: $46,610<br>
                            Year 30: $100,627<br>
                            Year 40: $217,245<br>
                            <strong>You invested $10k. Compound interest added $207k!</strong>
                        </div>
                        <h3>Why Starting Early Matters</h3>
                        <div class="example">
                            Person A: Invests $200/month from age 25-35 (10 years, $24,000 total)<br>
                            Person B: Invests $200/month from age 35-65 (30 years, $72,000 total)<br>
                            At age 65 (8% return):<br>
                            Person A: $427,219<br>
                            Person B: $298,072<br>
                            <strong>Person A invested less but has more!</strong>
                        </div>
                        <div class="highlight">
                            <strong>Key Insight:</strong> Time in the market beats timing the market. Start now, even with small amounts.
                        </div>
                    `
                },
                {
                    id: 'retirement-reality',
                    title: 'The Retirement Reality',
                    content: `
                        <h2>The Retirement Reality</h2>
                        <h3>Why You Can't Rely on Social Security</h3>
                        <ul>
                            <li>Average Social Security benefit: ~$1,800/month</li>
                            <li>Designed to replace only 40% of income</li>
                            <li>May face reductions in the future</li>
                            <li>Not enough for comfortable retirement</li>
                        </ul>
                        <h3>How Much Will You Need?</h3>
                        <p>Common rule: You'll need 70-80% of pre-retirement income</p>
                        <div class="example">
                            Current income: $60,000/year<br>
                            Retirement need: $48,000/year (80%)<br>
                            For 25-year retirement: $1.2 million+ needed
                        </div>
                        <h3>The 4% Rule</h3>
                        <p>You can safely withdraw 4% per year from your retirement savings.</p>
                        <div class="example">
                            Want $40,000/year in retirement?<br>
                            $40,000 ÷ 0.04 = $1,000,000 needed
                        </div>
                        <div class="highlight">
                            <strong>Start Now:</strong> The earlier you start, the less you need to save monthly to reach your goal.
                        </div>
                    `
                }
            ],
            quiz: [
                {
                    question: 'What is compound interest?',
                    options: [
                        'Interest paid on the original amount only',
                        'Interest that earns interest over time',
                        'A type of loan',
                        'A government benefit'
                    ],
                    correct: 1,
                    explanation: 'Compound interest is when your earnings generate their own earnings. Over decades, this creates exponential growth.'
                },
                {
                    question: 'Using the 4% rule, how much do you need to withdraw $50,000/year?',
                    options: ['$500,000', '$1,000,000', '$1,250,000', '$2,000,000'],
                    correct: 2,
                    explanation: '$50,000 ÷ 0.04 = $1,250,000. The 4% rule suggests you need 25 times your annual withdrawal amount.'
                },
                {
                    question: 'Why is starting to invest early so important?',
                    options: [
                        'You get better interest rates',
                        'Time allows compound interest to work its magic',
                        'Early investors get tax breaks',
                        'You can retire at any time'
                    ],
                    correct: 1,
                    explanation: 'The earlier you start, the more time compound interest has to grow your money. Starting 10 years earlier can double your retirement savings.'
                }
            ]
        },
        {
            id: 2,
            title: 'Retirement Accounts',
            subtitle: 'Understanding 401(k)s and IRAs',
            topics: [
                {
                    id: '401k-basics',
                    title: '401(k) Basics',
                    content: `
                        <h2>401(k) Basics</h2>
                        <div class="definition">
                            <strong>401(k):</strong> An employer-sponsored retirement account where you contribute pre-tax dollars, reducing your current taxes while saving for retirement.
                        </div>
                        <h3>Key Features</h3>
                        <ul>
                            <li><strong>2024 Contribution Limit:</strong> $23,000 ($30,500 if 50+)</li>
                            <li><strong>Tax Treatment:</strong> Contributions reduce taxable income now</li>
                            <li><strong>Employer Match:</strong> Free money! (typically 3-6% of salary)</li>
                            <li><strong>Withdrawals:</strong> Taxed as income in retirement</li>
                            <li><strong>Early Withdrawal:</strong> 10% penalty before age 59½</li>
                        </ul>
                        <h3>Employer Match Example</h3>
                        <div class="example">
                            Salary: $60,000<br>
                            Employer matches 50% up to 6%<br>
                            You contribute 6% = $3,600<br>
                            Employer adds: $1,800<br>
                            <strong>That's a 50% instant return on your money!</strong>
                        </div>
                        <div class="highlight">
                            <strong>Priority #1:</strong> Always contribute enough to get the FULL employer match. It's free money you're leaving on the table otherwise.
                        </div>
                    `
                },
                {
                    id: 'ira-basics',
                    title: 'IRA Basics (Traditional & Roth)',
                    content: `
                        <h2>IRA Basics</h2>
                        <div class="definition">
                            <strong>IRA (Individual Retirement Account):</strong> A personal retirement account you open yourself, separate from an employer.
                        </div>
                        <h3>Traditional IRA</h3>
                        <ul>
                            <li>Contributions may be tax-deductible</li>
                            <li>Grows tax-deferred</li>
                            <li>Pay taxes on withdrawals in retirement</li>
                            <li>Required Minimum Distributions (RMDs) at 73</li>
                        </ul>
                        <h3>Roth IRA</h3>
                        <ul>
                            <li>Contributions with after-tax money</li>
                            <li>Grows tax-free</li>
                            <li><strong>Withdrawals are 100% tax-free!</strong></li>
                            <li>No RMDs during your lifetime</li>
                            <li>Can withdraw contributions anytime (not earnings)</li>
                        </ul>
                        <h3>2024 Limits</h3>
                        <ul>
                            <li>Contribution: $7,000 ($8,000 if 50+)</li>
                            <li>Roth income limit: $161,000 single, $240,000 married</li>
                        </ul>
                        <div class="highlight">
                            <strong>General Rule:</strong> If you expect higher taxes in retirement (younger, lower income now), choose Roth. If you expect lower taxes later, choose Traditional.
                        </div>
                    `
                },
                {
                    id: 'roth-vs-traditional',
                    title: 'Roth vs Traditional: Which to Choose?',
                    content: `
                        <h2>Roth vs Traditional</h2>
                        <h3>Choose Roth If:</h3>
                        <ul>
                            <li>You're young and in a low tax bracket now</li>
                            <li>You expect income to grow significantly</li>
                            <li>You want tax-free income in retirement</li>
                            <li>You want flexibility (contributions withdrawable anytime)</li>
                            <li>You expect tax rates to increase in the future</li>
                        </ul>
                        <h3>Choose Traditional If:</h3>
                        <ul>
                            <li>You're in a high tax bracket now</li>
                            <li>You need the tax deduction today</li>
                            <li>You expect to be in a lower bracket in retirement</li>
                            <li>You're close to retirement</li>
                        </ul>
                        <h3>The Hedge Strategy</h3>
                        <p>Do both! Having both Roth and Traditional gives you flexibility in retirement to optimize taxes.</p>
                        <div class="example">
                            <strong>Ideal Setup:</strong><br>
                            1. 401(k) up to employer match<br>
                            2. Max out Roth IRA ($7,000)<br>
                            3. Back to 401(k) if more to invest<br>
                            4. Taxable brokerage after all tax-advantaged space used
                        </div>
                    `
                }
            ],
            quiz: [
                {
                    question: 'What should be your first priority when investing for retirement?',
                    options: [
                        'Max out your IRA',
                        'Contribute enough to 401(k) to get full employer match',
                        'Open a taxable brokerage account',
                        'Pay off all debt first'
                    ],
                    correct: 1,
                    explanation: 'The employer match is free money—often 50-100% instant return. Always capture the full match before other investments.'
                },
                {
                    question: 'What is the main advantage of a Roth IRA?',
                    options: [
                        'Higher contribution limits',
                        'Tax deduction now',
                        'Tax-free withdrawals in retirement',
                        'No income limits'
                    ],
                    correct: 2,
                    explanation: 'Roth IRAs grow tax-free and qualified withdrawals in retirement are 100% tax-free—you\'ll never pay taxes on the growth.'
                },
                {
                    question: 'What happens if you withdraw from a 401(k) before age 59½?',
                    options: [
                        'Nothing special',
                        '10% penalty plus regular income tax',
                        'You lose the money',
                        'You must repay it within a year'
                    ],
                    correct: 1,
                    explanation: 'Early 401(k) withdrawals face a 10% penalty plus regular income taxes. There are some exceptions like hardship withdrawals.'
                }
            ]
        },
        {
            id: 3,
            title: 'Employer Benefits',
            subtitle: 'Maximizing workplace retirement benefits',
            topics: [
                {
                    id: 'employer-match',
                    title: 'Understanding Employer Match',
                    content: `
                        <h2>Understanding Employer Match</h2>
                        <h3>Common Match Formulas</h3>
                        <ul>
                            <li><strong>Dollar-for-dollar up to X%:</strong> 100% match on first X% you contribute</li>
                            <li><strong>50 cents per dollar up to X%:</strong> 50% match on first X% you contribute</li>
                            <li><strong>Tiered:</strong> Different rates at different levels</li>
                        </ul>
                        <div class="example">
                            <strong>"100% match on first 3%, 50% on next 2%"</strong><br>
                            Salary: $50,000<br>
                            You contribute 5% ($2,500)<br>
                            Match: 3% × 100% = $1,500<br>
                            Match: 2% × 50% = $500<br>
                            <strong>Total match: $2,000 (80% return!)</strong>
                        </div>
                        <h3>Vesting Schedules</h3>
                        <p>Employer contributions may vest over time:</p>
                        <ul>
                            <li><strong>Immediate:</strong> You own it right away</li>
                            <li><strong>Cliff:</strong> 100% vested after X years</li>
                            <li><strong>Graded:</strong> 20% per year over 5 years</li>
                        </ul>
                        <div class="highlight">
                            <strong>Know Your Vesting:</strong> If you leave before fully vested, you forfeit unvested employer contributions.
                        </div>
                    `
                },
                {
                    id: 'hsa-benefits',
                    title: 'HSA: The Triple Tax Advantage',
                    content: `
                        <h2>HSA: The Triple Tax Advantage</h2>
                        <div class="definition">
                            <strong>HSA (Health Savings Account):</strong> A tax-advantaged account for medical expenses, available with high-deductible health plans.
                        </div>
                        <h3>The Triple Tax Benefit</h3>
                        <ol>
                            <li><strong>Tax-deductible contributions</strong></li>
                            <li><strong>Tax-free growth</strong></li>
                            <li><strong>Tax-free withdrawals for medical expenses</strong></li>
                        </ol>
                        <h3>2024 Limits</h3>
                        <ul>
                            <li>Individual: $4,150</li>
                            <li>Family: $8,300</li>
                            <li>55+ catch-up: +$1,000</li>
                        </ul>
                        <h3>HSA as Stealth Retirement Account</h3>
                        <ul>
                            <li>No "use it or lose it" — funds roll over forever</li>
                            <li>After 65, withdrawals for any purpose (just taxed like IRA)</li>
                            <li>Save receipts — reimburse yourself years later</li>
                        </ul>
                        <div class="highlight">
                            <strong>Strategy:</strong> If you can afford it, pay medical expenses out-of-pocket, let HSA grow, and reimburse yourself in retirement.
                        </div>
                    `
                }
            ],
            quiz: [
                {
                    question: 'What is vesting?',
                    options: [
                        'The type of investment in your 401(k)',
                        'How much of employer contributions you own based on time worked',
                        'The clothing your employer provides',
                        'The interest rate on your account'
                    ],
                    correct: 1,
                    explanation: 'Vesting determines how much of your employer\'s contributions you own. If you leave before fully vested, you forfeit the unvested portion.'
                },
                {
                    question: 'What is the "triple tax advantage" of an HSA?',
                    options: [
                        'Three times the contribution limit',
                        'Tax-deductible going in, tax-free growth, tax-free withdrawals for medical',
                        'You can contribute three times per year',
                        'Three different accounts combined'
                    ],
                    correct: 1,
                    explanation: 'HSAs offer a unique triple tax benefit: tax-deductible contributions, tax-free growth, and tax-free withdrawals for qualified medical expenses.'
                }
            ]
        },
        {
            id: 4,
            title: 'Investment Strategies',
            subtitle: 'Building your retirement portfolio',
            topics: [
                {
                    id: 'asset-allocation',
                    title: 'Asset Allocation by Age',
                    content: `
                        <h2>Asset Allocation by Age</h2>
                        <h3>The Basic Rule</h3>
                        <p>Old rule: Your age in bonds, rest in stocks</p>
                        <p>Modern rule: (Your age - 10 or 20) in bonds</p>
                        <div class="example">
                            <strong>Age 30:</strong> 10-20% bonds, 80-90% stocks<br>
                            <strong>Age 50:</strong> 30-40% bonds, 60-70% stocks<br>
                            <strong>Age 70:</strong> 50-60% bonds, 40-50% stocks
                        </div>
                        <h3>Why This Matters</h3>
                        <ul>
                            <li>Young: More time to recover from downturns → more stocks</li>
                            <li>Older: Need stability, less time to recover → more bonds</li>
                        </ul>
                        <h3>Target Date Funds</h3>
                        <p>Set-it-and-forget-it option:</p>
                        <ul>
                            <li>Choose fund based on retirement year (e.g., 2055)</li>
                            <li>Automatically adjusts allocation over time</li>
                            <li>Great for beginners</li>
                        </ul>
                        <div class="highlight">
                            <strong>Simplest Strategy:</strong> Put everything in a target date fund that matches your expected retirement year. It does all the work for you.
                        </div>
                    `
                },
                {
                    id: 'index-funds',
                    title: 'Index Funds: The Smart Choice',
                    content: `
                        <h2>Index Funds: The Smart Choice</h2>
                        <div class="definition">
                            <strong>Index Fund:</strong> A fund that tracks a market index (like S&P 500) instead of trying to beat it.
                        </div>
                        <h3>Why Index Funds Win</h3>
                        <ul>
                            <li><strong>Lower fees:</strong> 0.03-0.20% vs 1%+ for active funds</li>
                            <li><strong>Better performance:</strong> 80-90% of active funds underperform</li>
                            <li><strong>Diversification:</strong> Own hundreds of companies instantly</li>
                            <li><strong>Tax efficient:</strong> Less trading = fewer taxable events</li>
                        </ul>
                        <h3>The Three-Fund Portfolio</h3>
                        <div class="example">
                            <strong>Simple, diversified portfolio:</strong><br>
                            60% US Total Stock Market (VTI, FSKAX)<br>
                            20% International Stocks (VXUS, FTIHX)<br>
                            20% US Bonds (BND, FXNAX)<br>
                            Adjust percentages based on age
                        </div>
                        <div class="highlight">
                            <strong>Warren Buffett's Advice:</strong> "Put 90% in a low-cost S&P 500 index fund." He even bet (and won) that an index fund would beat hedge funds over 10 years.
                        </div>
                    `
                }
            ],
            quiz: [
                {
                    question: 'What is a target date fund?',
                    options: [
                        'A fund that matures on a specific date',
                        'A fund that automatically adjusts allocation based on your retirement year',
                        'A fund with a guaranteed return date',
                        'A fund you can only buy on certain dates'
                    ],
                    correct: 1,
                    explanation: 'Target date funds automatically adjust from aggressive (more stocks) to conservative (more bonds) as you approach your target retirement year.'
                },
                {
                    question: 'Why do most financial experts recommend index funds?',
                    options: [
                        'They guarantee returns',
                        'Lower fees and most active funds underperform them',
                        'They\'re only available to experts',
                        'They\'re risk-free'
                    ],
                    correct: 1,
                    explanation: 'Index funds have much lower fees (0.03% vs 1%+) and studies show 80-90% of actively managed funds underperform their benchmark index over time.'
                }
            ]
        },
        {
            id: 5,
            title: 'Planning Your Number',
            subtitle: 'How much do you need to retire?',
            topics: [
                {
                    id: 'calculating-needs',
                    title: 'Calculating Your Retirement Number',
                    content: `
                        <h2>Calculating Your Retirement Number</h2>
                        <h3>Step 1: Estimate Annual Expenses</h3>
                        <ul>
                            <li>Current expenses as baseline</li>
                            <li>Subtract: commuting, work clothes, some taxes</li>
                            <li>Add: healthcare, travel, hobbies</li>
                            <li>Rule of thumb: 70-80% of current income</li>
                        </ul>
                        <h3>Step 2: Apply the 4% Rule</h3>
                        <div class="example">
                            Annual expenses in retirement: $50,000<br>
                            $50,000 ÷ 0.04 = <strong>$1,250,000 needed</strong>
                        </div>
                        <h3>Step 3: Account for Social Security</h3>
                        <div class="example">
                            Need: $50,000/year<br>
                            Social Security: $20,000/year<br>
                            Gap: $30,000/year from savings<br>
                            $30,000 ÷ 0.04 = <strong>$750,000 needed</strong>
                        </div>
                        <h3>Online Calculators</h3>
                        <ul>
                            <li>Vanguard Retirement Calculator</li>
                            <li>Fidelity Retirement Score</li>
                            <li>NerdWallet Calculator</li>
                        </ul>
                        <div class="highlight">
                            <strong>Remember:</strong> These are estimates. Life changes. Review and adjust your plan annually.
                        </div>
                    `
                },
                {
                    id: 'creating-action-plan',
                    title: 'Creating Your Retirement Action Plan',
                    content: `
                        <h2>Creating Your Retirement Action Plan</h2>
                        <h3>Immediate Actions (This Week)</h3>
                        <ol>
                            <li>Check if you're getting full employer 401(k) match</li>
                            <li>Open a Roth IRA if eligible</li>
                            <li>Enroll in autopay/auto-increase</li>
                        </ol>
                        <h3>Short-Term (Next Month)</h3>
                        <ol>
                            <li>Review your current retirement account allocations</li>
                            <li>Consider target date fund if unsure</li>
                            <li>Calculate your retirement number</li>
                        </ol>
                        <h3>Ongoing</h3>
                        <ul>
                            <li>Increase contributions by 1% each year</li>
                            <li>Review allocations annually</li>
                            <li>Adjust as life changes (marriage, kids, job change)</li>
                        </ul>
                        <h3>Savings Rate Guideline</h3>
                        <div class="example">
                            <strong>Target: 15-20% of income for retirement</strong><br>
                            Including employer match<br>
                            Starting at 25 → need ~15%<br>
                            Starting at 35 → need ~25%<br>
                            Starting at 45 → need ~35%+
                        </div>
                        <div class="highlight">
                            <strong>Start Now:</strong> The best time to start was yesterday. The second best time is today. Even $50/month matters.
                        </div>
                    `
                }
            ],
            quiz: [
                {
                    question: 'Using the 4% rule, if you need $40,000/year in retirement, how much do you need saved?',
                    options: ['$400,000', '$800,000', '$1,000,000', '$1,600,000'],
                    correct: 2,
                    explanation: '$40,000 ÷ 0.04 = $1,000,000. The 4% rule suggests you need 25 times your annual withdrawal needs.'
                },
                {
                    question: 'What percentage of income should you ideally save for retirement?',
                    options: ['5%', '10%', '15-20%', '50%'],
                    correct: 2,
                    explanation: 'Most financial experts recommend saving 15-20% of your income for retirement (including employer match) if you start in your 20s.'
                },
                {
                    question: 'What is the most important thing to do TODAY for retirement?',
                    options: [
                        'Wait until you make more money',
                        'Start contributing something, even if small',
                        'Pay off all debt first',
                        'Wait until you understand everything perfectly'
                    ],
                    correct: 1,
                    explanation: 'Starting now, even with small amounts, is crucial because of compound interest. Time is your greatest asset—every year you wait costs you significantly.'
                }
            ]
        }
    ]
};
