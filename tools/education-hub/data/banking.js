// Banking & Financial Accounts Curriculum Data
const bankingData = {
    id: 'banking',
    title: 'Banking & Financial Accounts',
    icon: '🏦',
    description: 'Navigate checking accounts, savings accounts, credit unions, and financial tools to manage your money effectively.',
    whyItMatters: 'Your bank is the foundation of your financial life. The wrong accounts cost you money in fees, low interest, and missed opportunities. The right setup makes everything easier.',
    graduationGoal: 'Have optimized bank accounts and understand all financial account types',
    difficulty: 'beginner',
    prerequisites: [],
    learningObjectives: [
        'Choose the right bank and account types for your needs',
        'Avoid bank fees and maximize interest earnings',
        'Understand the difference between banks and credit unions',
        'Use online banking and financial tools effectively',
        'Protect your accounts from fraud and scams'
    ],
    relatedTracks: ['personalfinance', 'credit', 'investing'],
    resources: [
        { title: 'FDIC - Deposit Insurance', url: 'https://www.fdic.gov/resources/deposit-insurance/' },
        { title: 'Consumer Financial Protection Bureau - Banking', url: 'https://www.consumerfinance.gov/consumer-tools/bank-accounts/' }
    ],
    levels: [
        {
            id: 1,
            title: 'Banking Basics',
            subtitle: 'Understanding your financial home base',
            topics: [
                {
                    id: 'banking-fundamentals',
                    title: 'How Banking Works',
                    content: `
                        <h2>How Banking Works</h2>
                        <h3>What Banks Actually Do</h3>
                        <ul>
                            <li>Hold your money safely (FDIC insured up to $250,000)</li>
                            <li>Process transactions (payments, transfers)</li>
                            <li>Lend money (using your deposits to make loans)</li>
                            <li>Provide financial products (credit cards, loans)</li>
                        </ul>
                        <h3>Types of Financial Institutions</h3>
                        <ul>
                            <li><strong>Big Banks:</strong> Chase, Bank of America, Wells Fargo — wide ATM networks, many branches</li>
                            <li><strong>Credit Unions:</strong> Member-owned, often better rates and lower fees</li>
                            <li><strong>Online Banks:</strong> Higher savings rates, lower fees, no physical branches</li>
                            <li><strong>Community Banks:</strong> Local, personal service, community focused</li>
                        </ul>
                        <h3>FDIC Insurance</h3>
                        <ul>
                            <li>Your money is insured up to $250,000 per depositor, per bank</li>
                            <li>Checking, savings, CDs, and money market accounts are covered</li>
                            <li>Joint accounts get $250K per co-owner ($500K total)</li>
                            <li>Stocks and investments are NOT FDIC insured</li>
                        </ul>
                        <div class="highlight">
                            <strong>Pro Tip:</strong> Consider using BOTH a big bank (convenience, ATMs) and an online bank (higher savings rates). They complement each other.
                        </div>
                    `
                },
                {
                    id: 'account-types',
                    title: 'Types of Bank Accounts',
                    content: `
                        <h2>Types of Bank Accounts</h2>
                        <h3>Checking Account</h3>
                        <ul>
                            <li>Daily transactions: deposits, withdrawals, bill pay</li>
                            <li>Debit card for purchases</li>
                            <li>Usually earns 0% interest</li>
                            <li>Watch for: monthly fees, minimum balance requirements, overdraft fees</li>
                        </ul>
                        <h3>Savings Account</h3>
                        <ul>
                            <li>Park money you're not spending right now</li>
                            <li>Earns interest (0.01% at big banks vs. 4-5% at online banks!)</li>
                            <li>May have transfer limits</li>
                            <li>Best for: emergency fund, sinking funds, short-term goals</li>
                        </ul>
                        <h3>High-Yield Savings Account (HYSA)</h3>
                        <div class="example">
                            <strong>Big Bank Savings:</strong> $10,000 × 0.01% = $1/year<br>
                            <strong>HYSA:</strong> $10,000 × 4.5% = $450/year<br>
                            <strong>Same money, 450x more interest!</strong>
                        </div>
                        <h3>Other Account Types</h3>
                        <ul>
                            <li><strong>Money Market:</strong> Like savings with check-writing ability, competitive rates</li>
                            <li><strong>CD (Certificate of Deposit):</strong> Lock money for set term (6 months-5 years) for guaranteed rate</li>
                            <li><strong>Brokerage Account:</strong> For investing in stocks, bonds, ETFs</li>
                        </ul>
                        <div class="highlight">
                            <strong>Action Step:</strong> If your savings is at a big bank earning 0.01%, open a HYSA today (Marcus, Ally, Discover, Capital One 360). Moving $10K earns you $400+ more per year.
                        </div>
                    `
                },
                {
                    id: 'avoiding-bank-fees',
                    title: 'Eliminating Bank Fees',
                    content: `
                        <h2>Eliminating Bank Fees</h2>
                        <h3>Common Fees (and How to Avoid Them)</h3>
                        <ul>
                            <li><strong>Monthly maintenance ($5-15):</strong> Meet minimum balance or set up direct deposit</li>
                            <li><strong>Overdraft ($35 per occurrence!):</strong> Opt OUT of overdraft protection, link savings as backup</li>
                            <li><strong>ATM fees ($2-5 each):</strong> Use in-network ATMs, get cash back at stores</li>
                            <li><strong>Wire transfer ($15-30):</strong> Use Zelle, Venmo, or ACH instead</li>
                            <li><strong>Paper statement ($2-5):</strong> Switch to paperless</li>
                        </ul>
                        <h3>The Overdraft Trap</h3>
                        <div class="example">
                            Account balance: $10<br>
                            You buy coffee for $5, lunch for $12, gas for $40<br>
                            The $12 and $40 overdraft:<br>
                            Coffee: $5 | Lunch: $12 + $35 fee | Gas: $40 + $35 fee<br>
                            <strong>That $52 in purchases cost you $127!</strong>
                        </div>
                        <h3>Steps to Go Fee-Free</h3>
                        <ol>
                            <li>Check your last 12 months of statements for fees</li>
                            <li>Call your bank and ask them to reverse recent fees</li>
                            <li>Opt out of overdraft "protection"</li>
                            <li>Set up low-balance alerts</li>
                            <li>Consider switching to a no-fee bank/credit union</li>
                        </ol>
                        <div class="highlight">
                            <strong>Americans pay $8+ billion in overdraft fees yearly.</strong> Opt out of overdraft, set up alerts, and switch to a bank that doesn't charge maintenance fees.
                        </div>
                    `
                }
            ],
            quiz: {
                questions: [
                    {
                        question: 'How much more interest can a HYSA earn compared to a traditional savings account?',
                        options: ['About the same', '2-3x more', '100-450x more', '10x more'],
                        correct: 2,
                        explanation: 'Traditional big bank savings offer 0.01% while HYSAs offer 4-5%, which is 400-500x more interest on the same money.'
                    },
                    {
                        question: 'What is the FDIC insurance limit per depositor, per bank?',
                        options: ['$100,000', '$250,000', '$500,000', '$1,000,000'],
                        correct: 1,
                        explanation: 'FDIC insures up to $250,000 per depositor, per bank. Joint accounts get $250K per co-owner. Exceeding this? Spread across multiple banks.'
                    },
                    {
                        question: 'How should you handle overdraft protection?',
                        options: ['Always keep it on', 'Opt OUT and set up low-balance alerts instead', 'It doesn\'t matter', 'Use it as a line of credit'],
                        correct: 1,
                        explanation: 'Overdraft fees are $35+ per occurrence. Opt out of overdraft "protection," set up balance alerts, and link a savings account as backup.'
                    }
                ]
            }
        },
        {
            id: 2,
            title: 'Credit Unions & Online Banking',
            subtitle: 'Better options for your money',
            topics: [
                {
                    id: 'credit-unions',
                    title: 'Credit Unions: The Alternative',
                    content: `
                        <h2>Credit Unions: The Alternative</h2>
                        <h3>How They're Different</h3>
                        <ul>
                            <li><strong>Member-owned</strong> (not shareholder-owned)</li>
                            <li>Profits go back to members as better rates and lower fees</li>
                            <li>Typically offer higher savings rates and lower loan rates</li>
                            <li>More personal service</li>
                            <li>Insured by NCUA (same $250K protection as FDIC)</li>
                        </ul>
                        <h3>Credit Union vs. Big Bank</h3>
                        <ul>
                            <li><strong>Savings rate:</strong> CU 0.5-3% vs. Big Bank 0.01%</li>
                            <li><strong>Auto loan rate:</strong> CU often 1-2% lower</li>
                            <li><strong>Fees:</strong> CU typically far fewer and lower</li>
                            <li><strong>Personal loan access:</strong> CU more willing to work with you</li>
                        </ul>
                        <h3>How to Join</h3>
                        <ul>
                            <li>Check eligibility (employer, location, family, associations)</li>
                            <li>Many have open membership through partner organizations</li>
                            <li>Use Co-Op Shared Branching (access other CU branches nationwide)</li>
                            <li>Most now have excellent mobile apps</li>
                        </ul>
                        <div class="highlight">
                            <strong>Consider:</strong> Keep a big bank for convenience AND a credit union for savings and loans. Best of both worlds.
                        </div>
                    `
                },
                {
                    id: 'online-banking',
                    title: 'Online Banking & FinTech',
                    content: `
                        <h2>Online Banking & FinTech</h2>
                        <h3>Why Online Banks Offer Better Rates</h3>
                        <ul>
                            <li>No physical branches = lower overhead costs</li>
                            <li>Savings passed to customers as higher interest rates</li>
                            <li>Often zero fees (no maintenance, no minimums)</li>
                        </ul>
                        <h3>Top Online Banks</h3>
                        <ul>
                            <li><strong>Ally Bank:</strong> Great all-around, no fees, competitive rates</li>
                            <li><strong>Marcus (Goldman Sachs):</strong> High HYSA rates, no fees</li>
                            <li><strong>Discover Bank:</strong> HYSA + cashback checking</li>
                            <li><strong>Capital One 360:</strong> Full-service online banking</li>
                            <li><strong>SoFi:</strong> Banking + investing in one platform</li>
                        </ul>
                        <h3>FinTech Apps</h3>
                        <ul>
                            <li><strong>Chime:</strong> No-fee banking, early direct deposit</li>
                            <li><strong>Current:</strong> Banking for younger users</li>
                            <li><strong>Cash App:</strong> P2P payments + banking + investing</li>
                            <li><strong>Venmo/PayPal:</strong> P2P payments, now offering debit cards</li>
                        </ul>
                        <h3>Security Tips for Online Banking</h3>
                        <ul>
                            <li>Use unique, strong password for each financial account</li>
                            <li>Enable 2-factor authentication</li>
                            <li>Never bank on public Wi-Fi without VPN</li>
                            <li>Monitor accounts weekly</li>
                        </ul>
                        <div class="highlight">
                            <strong>Important:</strong> Make sure any online bank is FDIC insured. Fintech apps may route through partner banks—verify the insurance.
                        </div>
                    `
                }
            ],
            quiz: {
                questions: [
                    {
                        question: 'Why do credit unions often have better rates than big banks?',
                        options: ['They\'re government funded', 'They\'re member-owned and return profits to members', 'They have more customers', 'They take more risks'],
                        correct: 1,
                        explanation: 'Credit unions are member-owned cooperatives. Since they don\'t need to maximize shareholder profits, they pass savings to members through better rates and lower fees.'
                    },
                    {
                        question: 'Why do online banks typically offer higher savings rates?',
                        options: ['They\'re riskier', 'No physical branches means lower overhead costs passed as higher rates', 'They have less security', 'Government subsidies'],
                        correct: 1,
                        explanation: 'Without the cost of maintaining physical branches, online banks have significantly lower overhead and pass those savings to customers as higher interest rates.'
                    }
                ]
            }
        },
        {
            id: 3,
            title: 'Investment Accounts',
            subtitle: 'Beyond savings—growing your money',
            topics: [
                {
                    id: 'retirement-accounts',
                    title: 'Retirement Account Types',
                    content: `
                        <h2>Retirement Account Types</h2>
                        <h3>401(k) / 403(b)</h3>
                        <ul>
                            <li>Employer-sponsored retirement account</li>
                            <li>2024 limit: $23,000/year ($30,500 if 50+)</li>
                            <li><strong>Employer match = free money</strong> — always contribute at least to match</li>
                            <li>Traditional: Tax-deductible now, taxed at withdrawal</li>
                            <li>Roth 401(k): Taxed now, tax-free at withdrawal</li>
                        </ul>
                        <h3>IRA (Individual Retirement Account)</h3>
                        <ul>
                            <li>You open this yourself (not through employer)</li>
                            <li>2024 limit: $7,000/year ($8,000 if 50+)</li>
                            <li><strong>Traditional IRA:</strong> May be tax-deductible, taxed at withdrawal</li>
                            <li><strong>Roth IRA:</strong> No deduction now, but TAX-FREE growth and withdrawals</li>
                        </ul>
                        <h3>Roth IRA: The Best Account for Young People</h3>
                        <ul>
                            <li>Tax-free growth for decades</li>
                            <li>Withdraw contributions (not earnings) anytime penalty-free</li>
                            <li>No required minimum distributions</li>
                            <li>Income limits apply (use backdoor Roth if over limit)</li>
                        </ul>
                        <h3>Priority Order</h3>
                        <ol>
                            <li>401(k) up to employer match (free money)</li>
                            <li>Max out Roth IRA ($7,000)</li>
                            <li>Go back and max 401(k) ($23,000)</li>
                            <li>Taxable brokerage account (no limits)</li>
                        </ol>
                        <div class="highlight">
                            <strong>Start Now:</strong> $500/month invested from age 25 to 65 at 10% average return = <strong>$2.6 million</strong>. Starting at 35? Only $1 million. Time is your biggest advantage.
                        </div>
                    `
                },
                {
                    id: 'brokerage-accounts',
                    title: 'Brokerage & Investment Accounts',
                    content: `
                        <h2>Brokerage & Investment Accounts</h2>
                        <h3>What Is a Brokerage Account?</h3>
                        <ul>
                            <li>An account for buying and selling investments (stocks, ETFs, bonds)</li>
                            <li>No contribution limits (unlike retirement accounts)</li>
                            <li>No tax advantages (capital gains taxed when you sell)</li>
                            <li>No withdrawal restrictions (access money anytime)</li>
                        </ul>
                        <h3>Where to Open One</h3>
                        <ul>
                            <li><strong>Fidelity:</strong> Excellent all-around, great for beginners</li>
                            <li><strong>Vanguard:</strong> Pioneer in low-cost index funds</li>
                            <li><strong>Charles Schwab:</strong> Full-service, great customer support</li>
                            <li><strong>Robinhood:</strong> Simple interface, good for starters (limited features)</li>
                        </ul>
                        <h3>Other Investment Accounts</h3>
                        <ul>
                            <li><strong>529 Plan:</strong> Tax-free growth for education expenses</li>
                            <li><strong>HSA:</strong> Triple tax advantage for medical expenses (and retirement!)</li>
                            <li><strong>UGMA/UTMA:</strong> Custodial accounts for minors</li>
                            <li><strong>SEP IRA / Solo 401(k):</strong> For self-employed individuals</li>
                        </ul>
                        <div class="highlight">
                            <strong>Simple Start:</strong> Open a Roth IRA at Fidelity or Vanguard. Buy a total market index fund (like VTI or FSKAX). Contribute monthly. That's it—you're investing.
                        </div>
                    `
                }
            ],
            quiz: {
                questions: [
                    {
                        question: 'What should be your first investment priority?',
                        options: ['Max out Roth IRA', 'Individual stocks', '401(k) up to employer match (free money)', 'Crypto'],
                        correct: 2,
                        explanation: 'Employer match is literally free money—a 100% return instantly. Always contribute at least enough to get the full match before investing elsewhere.'
                    },
                    {
                        question: 'Why is a Roth IRA especially powerful for young people?',
                        options: ['No contribution limits', 'Tax-free growth for decades, plus flexible withdrawals', 'Higher returns than other accounts', 'Employer matching'],
                        correct: 1,
                        explanation: 'Roth IRA contributions are after-tax, but decades of growth and all withdrawals in retirement are completely tax-free. You can also withdraw contributions anytime.'
                    }
                ]
            }
        }
    ]
};
