// Credit Building Curriculum Data
const creditData = {
    id: 'credit',
    title: 'Credit Building',
    icon: '💳',
    description: 'Master your credit score and use credit strategically to build wealth.',
    graduationGoal: 'Confidently build and optimize your credit score',
    levels: [
        {
            id: 1,
            title: 'Credit Score Fundamentals',
            subtitle: 'Understanding how credit scores work',
            topics: [
                {
                    id: 'what-is-credit-score',
                    title: 'What is a Credit Score?',
                    content: `
                        <h2>What is a Credit Score?</h2>
                        <div class="definition">
                            <strong>Credit Score:</strong> A three-digit number (300-850) that represents your creditworthiness—how likely you are to repay borrowed money.
                        </div>
                        <h3>Why It Matters</h3>
                        <ul>
                            <li><strong>Loan Approval:</strong> Determines if you get approved</li>
                            <li><strong>Interest Rates:</strong> Higher score = lower rates</li>
                            <li><strong>Rental Applications:</strong> Landlords check credit</li>
                            <li><strong>Insurance Rates:</strong> Affects premiums in many states</li>
                            <li><strong>Employment:</strong> Some employers check credit</li>
                            <li><strong>Cell Phone Plans:</strong> May require deposit with low score</li>
                        </ul>
                        <h3>Score Ranges</h3>
                        <ul>
                            <li><strong>800-850:</strong> Exceptional</li>
                            <li><strong>740-799:</strong> Very Good</li>
                            <li><strong>670-739:</strong> Good</li>
                            <li><strong>580-669:</strong> Fair</li>
                            <li><strong>300-579:</strong> Poor</li>
                        </ul>
                        <div class="highlight">
                            <strong>Real Impact:</strong> A 720 vs 620 credit score on a $300,000 mortgage could mean $200+ difference in monthly payments and $72,000+ over the loan life.
                        </div>
                    `
                },
                {
                    id: 'fico-vs-vantage',
                    title: 'FICO vs VantageScore',
                    content: `
                        <h2>FICO vs VantageScore</h2>
                        <h3>FICO Score</h3>
                        <ul>
                            <li>Used by 90% of lenders</li>
                            <li>Created by Fair Isaac Corporation</li>
                            <li>Multiple versions (FICO 8, 9, 10, etc.)</li>
                            <li>Score range: 300-850</li>
                        </ul>
                        <h3>VantageScore</h3>
                        <ul>
                            <li>Created by the 3 credit bureaus</li>
                            <li>Newer, less commonly used</li>
                            <li>Often used for free credit monitoring</li>
                            <li>Score range: 300-850</li>
                        </ul>
                        <h3>Where to Check Your Score</h3>
                        <ul>
                            <li><strong>AnnualCreditReport.com:</strong> Free reports from all 3 bureaus</li>
                            <li><strong>Credit Karma:</strong> Free VantageScore</li>
                            <li><strong>Experian:</strong> Free FICO Score 8</li>
                            <li><strong>Credit card apps:</strong> Many provide free FICO scores</li>
                        </ul>
                        <div class="highlight">
                            <strong>Important:</strong> Your VantageScore (Credit Karma) may differ from your FICO score by 20-50+ points. For accuracy, check your FICO score since that's what lenders use.
                        </div>
                    `
                },
                {
                    id: 'five-factors',
                    title: 'The 5 Factors of Your Credit Score',
                    content: `
                        <h2>The 5 Factors of Your Credit Score</h2>
                        <h3>1. Payment History (35%)</h3>
                        <p>Do you pay on time? Late payments hurt significantly.</p>
                        <ul>
                            <li>30-day late: Moderate damage</li>
                            <li>60-90+ day late: Severe damage</li>
                            <li>Collections/charge-offs: Very severe</li>
                        </ul>
                        <h3>2. Credit Utilization (30%)</h3>
                        <p>How much of your available credit are you using?</p>
                        <ul>
                            <li>Ideal: Under 30% (under 10% is better)</li>
                            <li>Example: $3,000 used on $10,000 limit = 30%</li>
                        </ul>
                        <h3>3. Length of Credit History (15%)</h3>
                        <p>How long have your accounts been open?</p>
                        <p>Older accounts are better. Don't close old cards.</p>
                        <h3>4. Credit Mix (10%)</h3>
                        <p>Do you have different types of credit?</p>
                        <ul>
                            <li>Revolving: Credit cards, lines of credit</li>
                            <li>Installment: Mortgages, car loans, student loans</li>
                        </ul>
                        <h3>5. New Credit (10%)</h3>
                        <p>How many new accounts and hard inquiries?</p>
                        <p>Too many applications = higher risk signal</p>
                        <div class="highlight">
                            <strong>Focus On:</strong> Payment history and utilization make up 65% of your score. Master these two for the biggest impact.
                        </div>
                    `
                },
                {
                    id: 'credit-bureaus',
                    title: 'The Three Credit Bureaus',
                    content: `
                        <h2>The Three Credit Bureaus</h2>
                        <div class="definition">
                            <strong>Credit Bureau:</strong> A company that collects and maintains credit information about consumers, then sells that information to lenders.
                        </div>
                        <h3>The Big Three</h3>
                        <ul>
                            <li><strong>Experian:</strong> Largest bureau, most data</li>
                            <li><strong>Equifax:</strong> Major bureau (had massive breach in 2017)</li>
                            <li><strong>TransUnion:</strong> Third major bureau</li>
                        </ul>
                        <h3>Why Scores Differ Between Bureaus</h3>
                        <ul>
                            <li>Not all creditors report to all three bureaus</li>
                            <li>Report dates may vary</li>
                            <li>Different scoring models used</li>
                        </ul>
                        <h3>Your Rights</h3>
                        <ul>
                            <li>Free annual credit report from each bureau</li>
                            <li>Right to dispute inaccurate information</li>
                            <li>Right to freeze your credit (free)</li>
                            <li>Right to know who has checked your credit</li>
                        </ul>
                        <div class="highlight">
                            <strong>Action Step:</strong> Get your free reports from AnnualCreditReport.com. Check all three for errors—mistakes are common and can hurt your score.
                        </div>
                    `
                }
            ],
            quiz: [
                {
                    question: 'What is the most important factor in your credit score?',
                    options: ['Credit age', 'Payment history', 'Number of cards', 'Income level'],
                    correct: 1,
                    explanation: 'Payment history accounts for 35% of your FICO score—the largest single factor. Paying on time is the most important thing you can do for your credit.'
                },
                {
                    question: 'What is credit utilization?',
                    options: [
                        'How often you use cash',
                        'The percentage of available credit you\'re using',
                        'How many credit cards you have',
                        'Your total debt amount'
                    ],
                    correct: 1,
                    explanation: 'Credit utilization is the percentage of your available credit that you\'re currently using. Using $3,000 of a $10,000 limit = 30% utilization.'
                },
                {
                    question: 'What credit score is generally considered "Good"?',
                    options: ['500-579', '580-669', '670-739', '740-799'],
                    correct: 2,
                    explanation: '670-739 is considered "Good" by FICO standards. 740+ is "Very Good" and 800+ is "Exceptional."'
                },
                {
                    question: 'Which credit score do most lenders use?',
                    options: ['VantageScore', 'FICO Score', 'Credit Karma Score', 'Bank Score'],
                    correct: 1,
                    explanation: 'About 90% of top lenders use FICO scores for credit decisions. VantageScore is often used for free monitoring but less for actual lending decisions.'
                },
                {
                    question: 'How often can you get free credit reports from each bureau?',
                    options: ['Monthly', 'Annually', 'Every 5 years', 'Never - you must pay'],
                    correct: 1,
                    explanation: 'By law, you can get one free credit report from each of the three bureaus every year at AnnualCreditReport.com.'
                }
            ]
        },
        {
            id: 2,
            title: 'Credit Reports',
            subtitle: 'Reading and fixing your credit report',
            topics: [
                {
                    id: 'reading-report',
                    title: 'How to Read Your Credit Report',
                    content: `
                        <h2>How to Read Your Credit Report</h2>
                        <h3>Four Main Sections</h3>
                        <h4>1. Personal Information</h4>
                        <ul>
                            <li>Name (and any variations)</li>
                            <li>Current and previous addresses</li>
                            <li>Social Security Number</li>
                            <li>Employers (current and past)</li>
                        </ul>
                        <h4>2. Credit Accounts (Trade Lines)</h4>
                        <ul>
                            <li>Account name and number</li>
                            <li>Type (credit card, mortgage, etc.)</li>
                            <li>Date opened</li>
                            <li>Credit limit or loan amount</li>
                            <li>Current balance</li>
                            <li>Payment history (24-84 months)</li>
                            <li>Account status</li>
                        </ul>
                        <h4>3. Public Records</h4>
                        <ul>
                            <li>Bankruptcies</li>
                            <li>Tax liens (older reports)</li>
                            <li>Civil judgments (older reports)</li>
                        </ul>
                        <h4>4. Inquiries</h4>
                        <ul>
                            <li><strong>Hard inquiries:</strong> From credit applications</li>
                            <li><strong>Soft inquiries:</strong> From pre-approvals, your own checks</li>
                        </ul>
                    `
                },
                {
                    id: 'common-errors',
                    title: 'Common Credit Report Errors',
                    content: `
                        <h2>Common Credit Report Errors</h2>
                        <div class="highlight">
                            <strong>Statistic:</strong> FTC studies show 1 in 5 people have errors on their credit reports. 1 in 20 have errors significant enough to affect loan rates.
                        </div>
                        <h3>Types of Errors to Look For</h3>
                        <ul>
                            <li><strong>Wrong personal info:</strong> Misspelled name, wrong address</li>
                            <li><strong>Duplicate accounts:</strong> Same debt listed twice</li>
                            <li><strong>Wrong account status:</strong> Closed account shown as open</li>
                            <li><strong>Incorrect balances:</strong> Old balance not updated</li>
                            <li><strong>Wrong payment history:</strong> On-time payments shown as late</li>
                            <li><strong>Accounts not yours:</strong> Identity theft or mixed file</li>
                            <li><strong>Old negative info:</strong> Items that should have fallen off</li>
                            <li><strong>Unauthorized inquiries:</strong> Hard pulls you didn't authorize</li>
                        </ul>
                        <h3>How Long Things Stay on Report</h3>
                        <ul>
                            <li><strong>Late payments:</strong> 7 years from date of delinquency</li>
                            <li><strong>Collections:</strong> 7 years from original delinquency</li>
                            <li><strong>Bankruptcy:</strong> 7-10 years depending on type</li>
                            <li><strong>Hard inquiries:</strong> 2 years</li>
                            <li><strong>Positive accounts:</strong> 10 years after closing</li>
                        </ul>
                    `
                },
                {
                    id: 'dispute-process',
                    title: 'How to Dispute Errors',
                    content: `
                        <h2>How to Dispute Credit Report Errors</h2>
                        <h3>Step 1: Document the Error</h3>
                        <ul>
                            <li>Circle the error on your report</li>
                            <li>Gather supporting documents</li>
                            <li>Write a clear explanation</li>
                        </ul>
                        <h3>Step 2: File Disputes</h3>
                        <p>Dispute with all bureaus showing the error:</p>
                        <ul>
                            <li><strong>Online:</strong> Each bureau has dispute portal</li>
                            <li><strong>Mail:</strong> Send certified letter with documents</li>
                            <li><strong>Also dispute with:</strong> The creditor directly</li>
                        </ul>
                        <h3>Step 3: Wait for Investigation</h3>
                        <ul>
                            <li>Bureaus have 30 days to investigate</li>
                            <li>They contact the creditor for verification</li>
                            <li>If creditor can't verify, item must be removed</li>
                        </ul>
                        <h3>Step 4: Check Results</h3>
                        <ul>
                            <li>Bureau sends results in writing</li>
                            <li>Updated credit report provided free</li>
                            <li>Can escalate if not resolved</li>
                        </ul>
                        <div class="highlight">
                            <strong>Pro Tip:</strong> Dispute by mail for serious issues. Include copies (never originals) of supporting documents. Keep records of everything.
                        </div>
                    `
                },
                {
                    id: 'credit-monitoring',
                    title: 'Credit Monitoring and Freezes',
                    content: `
                        <h2>Credit Monitoring and Freezes</h2>
                        <h3>Free Credit Monitoring</h3>
                        <ul>
                            <li><strong>Credit Karma:</strong> TransUnion and Equifax</li>
                            <li><strong>Credit Sesame:</strong> TransUnion</li>
                            <li><strong>Experian:</strong> Free FICO and monitoring</li>
                            <li><strong>Many credit cards:</strong> Provide free FICO</li>
                        </ul>
                        <h3>Credit Freeze</h3>
                        <div class="definition">
                            <strong>Credit Freeze:</strong> Locks your credit file so new accounts can't be opened. Free to place and lift.
                        </div>
                        <ul>
                            <li>Must freeze at all 3 bureaus separately</li>
                            <li>Temporarily lift when applying for credit</li>
                            <li>Best protection against identity theft</li>
                            <li>Doesn't affect existing accounts</li>
                        </ul>
                        <h3>Fraud Alert vs Freeze</h3>
                        <ul>
                            <li><strong>Fraud Alert:</strong> Creditors must verify identity (weaker protection)</li>
                            <li><strong>Freeze:</strong> Blocks all access until you unfreeze (stronger)</li>
                        </ul>
                        <div class="highlight">
                            <strong>Recommendation:</strong> Freeze your credit at all three bureaus and only temporarily unfreeze when needed. It's free and prevents identity theft.
                        </div>
                    `
                }
            ],
            quiz: [
                {
                    question: 'How long do late payments stay on your credit report?',
                    options: ['1 year', '3 years', '7 years', '10 years'],
                    correct: 2,
                    explanation: 'Late payments remain on your credit report for 7 years from the date of the original delinquency.'
                },
                {
                    question: 'What percentage of people have errors on their credit reports?',
                    options: ['5%', '10%', '20%', '50%'],
                    correct: 2,
                    explanation: 'FTC studies show approximately 1 in 5 (20%) people have errors on their credit reports. This is why checking your reports regularly is important.'
                },
                {
                    question: 'How long do credit bureaus have to investigate a dispute?',
                    options: ['10 days', '30 days', '60 days', '90 days'],
                    correct: 1,
                    explanation: 'By law, credit bureaus must investigate disputes within 30 days (45 days if you submit additional information).'
                },
                {
                    question: 'What is a credit freeze?',
                    options: [
                        'When your credit score stops changing',
                        'Locking your credit file so new accounts can\'t be opened',
                        'Closing all your credit cards',
                        'When your credit card is declined'
                    ],
                    correct: 1,
                    explanation: 'A credit freeze locks your credit file, preventing new accounts from being opened. You can temporarily lift it when you need to apply for credit.'
                },
                {
                    question: 'Which type of inquiry affects your credit score?',
                    options: ['Soft inquiry', 'Hard inquiry', 'Both equally', 'Neither'],
                    correct: 1,
                    explanation: 'Only hard inquiries (from credit applications) affect your score. Soft inquiries (checking your own credit, pre-approvals) do not.'
                }
            ]
        },
        {
            id: 3,
            title: 'Credit Card Strategy',
            subtitle: 'Using credit cards wisely',
            topics: [
                {
                    id: 'credit-card-basics',
                    title: 'Credit Card Basics',
                    content: `
                        <h2>Credit Card Basics</h2>
                        <div class="definition">
                            <strong>Credit Card:</strong> A revolving line of credit that lets you borrow money up to a limit, paying interest only if you carry a balance.
                        </div>
                        <h3>Key Terms</h3>
                        <ul>
                            <li><strong>Credit Limit:</strong> Maximum you can borrow</li>
                            <li><strong>APR:</strong> Annual Percentage Rate (interest)</li>
                            <li><strong>Minimum Payment:</strong> Smallest amount due each month</li>
                            <li><strong>Statement Balance:</strong> What you owed at statement close</li>
                            <li><strong>Grace Period:</strong> Time to pay before interest charges (usually 21-25 days)</li>
                        </ul>
                        <h3>The Golden Rule</h3>
                        <div class="highlight">
                            <strong>Pay your statement balance in full every month.</strong> If you do this, you'll never pay interest and build great credit.
                        </div>
                        <h3>How Interest Works</h3>
                        <div class="example">
                            Balance: $1,000<br>
                            APR: 24%<br>
                            Monthly interest: $1,000 × (24%/12) = $20<br>
                            Paying minimum only: Takes years to pay off
                        </div>
                    `
                },
                {
                    id: 'utilization-strategy',
                    title: 'Utilization Optimization',
                    content: `
                        <h2>Utilization Optimization</h2>
                        <h3>Utilization Thresholds</h3>
                        <ul>
                            <li><strong>Best:</strong> Under 10%</li>
                            <li><strong>Good:</strong> Under 30%</li>
                            <li><strong>Okay:</strong> Under 50%</li>
                            <li><strong>Bad:</strong> Over 50%</li>
                            <li><strong>Terrible:</strong> Over 75%</li>
                        </ul>
                        <h3>Types of Utilization</h3>
                        <ul>
                            <li><strong>Per-card:</strong> Utilization on each individual card</li>
                            <li><strong>Overall:</strong> Total utilization across all cards</li>
                        </ul>
                        <p>Both matter, but overall is usually more important.</p>
                        <h3>Timing Matters</h3>
                        <p>Your utilization is reported when your statement closes, NOT when you pay.</p>
                        <div class="example">
                            Statement closes: 15th of month<br>
                            Balance on 15th: $800 / $1,000 limit = 80% reported<br>
                            You pay on 20th: Still shows 80% until next statement
                        </div>
                        <div class="highlight">
                            <strong>Hack:</strong> Pay down your balance BEFORE your statement closes to report lower utilization, even if you pay in full.
                        </div>
                    `
                },
                {
                    id: 'choosing-cards',
                    title: 'Choosing the Right Credit Cards',
                    content: `
                        <h2>Choosing the Right Credit Cards</h2>
                        <h3>For Building Credit</h3>
                        <ul>
                            <li><strong>Secured Cards:</strong> Require deposit, easier approval</li>
                            <li><strong>Student Cards:</strong> Designed for limited credit history</li>
                            <li><strong>Store Cards:</strong> Easier approval but high APR</li>
                        </ul>
                        <h3>For Rewards (Once Credit is Good)</h3>
                        <ul>
                            <li><strong>Cash Back:</strong> 1-5% back on purchases</li>
                            <li><strong>Travel:</strong> Points for flights/hotels</li>
                            <li><strong>0% APR:</strong> Interest-free period for big purchases</li>
                        </ul>
                        <h3>What to Look For</h3>
                        <ul>
                            <li><strong>Annual fee:</strong> Worth it only if rewards exceed fee</li>
                            <li><strong>APR:</strong> Matters only if carrying balance (don't!)</li>
                            <li><strong>Rewards rate:</strong> Compare to your spending habits</li>
                            <li><strong>Sign-up bonus:</strong> Can be valuable but don't overspend</li>
                            <li><strong>Foreign transaction fee:</strong> Important for travelers</li>
                        </ul>
                        <div class="highlight">
                            <strong>Beginner's First Card:</strong> Discover it Secured or Capital One Platinum. Both report to all bureaus and have paths to unsecured cards.
                        </div>
                    `
                },
                {
                    id: 'credit-card-mistakes',
                    title: 'Credit Card Mistakes to Avoid',
                    content: `
                        <h2>Credit Card Mistakes to Avoid</h2>
                        <h3>1. Paying Only the Minimum</h3>
                        <p>Minimum payments are designed to keep you in debt.</p>
                        <div class="example">
                            $5,000 balance at 20% APR, $100 minimum:<br>
                            Time to pay off: 9+ years<br>
                            Total paid: $11,000+ (more than double!)
                        </div>
                        <h3>2. Maxing Out Cards</h3>
                        <p>High utilization tanks your score, even if you pay in full.</p>
                        <h3>3. Closing Old Cards</h3>
                        <p>Reduces your average age and total credit limit. Instead:</p>
                        <ul>
                            <li>Keep oldest cards open</li>
                            <li>Use them occasionally (once every 6 months)</li>
                            <li>Downgrade to no-fee version if needed</li>
                        </ul>
                        <h3>4. Applying for Too Many Cards</h3>
                        <p>Each application = hard inquiry. Space applications 3-6 months apart.</p>
                        <h3>5. Missing Payments</h3>
                        <p>One 30-day late payment can drop score 100+ points. Set up autopay for at least minimum.</p>
                        <div class="highlight">
                            <strong>Best Practice:</strong> Use cards for normal spending only, pay statement balance in full, never carry a balance. Treat it like a debit card that builds credit.
                        </div>
                    `
                }
            ],
            quiz: [
                {
                    question: 'What is the ideal credit utilization percentage?',
                    options: ['Under 50%', 'Under 30%', 'Under 10%', 'Exactly 0%'],
                    correct: 2,
                    explanation: 'While under 30% is "good," under 10% is optimal for the best credit score impact. Having 1% utilization is better than 0% as it shows active use.'
                },
                {
                    question: 'When is your credit utilization typically reported?',
                    options: [
                        'When you make a purchase',
                        'When you make a payment',
                        'When your statement closes',
                        'On the 1st of each month'
                    ],
                    correct: 2,
                    explanation: 'Utilization is reported when your statement closes. Even if you pay in full later, the balance at statement close is what gets reported.'
                },
                {
                    question: 'Why should you avoid closing old credit cards?',
                    options: [
                        'It costs money to close them',
                        'It reduces your average account age and total credit limit',
                        'The bank will charge a fee',
                        'You lose your rewards points'
                    ],
                    correct: 1,
                    explanation: 'Closing old cards reduces your credit age (15% of score) and total available credit (increasing utilization). Keep them open but use occasionally.'
                },
                {
                    question: 'What is the best way to use a credit card?',
                    options: [
                        'Max it out and pay minimum',
                        'Never use it at all',
                        'Use it for normal spending and pay statement balance in full',
                        'Use it only for emergencies'
                    ],
                    correct: 2,
                    explanation: 'The best strategy is using your card for normal spending you\'d make anyway, then paying the full statement balance each month. This builds credit without paying interest.'
                },
                {
                    question: 'What is a secured credit card?',
                    options: [
                        'A card with extra fraud protection',
                        'A card that requires a cash deposit as collateral',
                        'A card only for large purchases',
                        'A card with a very high limit'
                    ],
                    correct: 1,
                    explanation: 'Secured cards require a cash deposit (usually $200-500) that becomes your credit limit. They\'re designed for building or rebuilding credit.'
                }
            ]
        },
        {
            id: 4,
            title: 'Building Credit',
            subtitle: 'Strategies to build and improve your credit',
            topics: [
                {
                    id: 'starting-from-zero',
                    title: 'Building Credit from Zero',
                    content: `
                        <h2>Building Credit from Zero</h2>
                        <h3>Why It's Hard</h3>
                        <p>The "credit catch-22": You need credit to get credit, but you need credit history to get credit.</p>
                        <h3>Strategies for New Credit</h3>
                        <h4>1. Secured Credit Card</h4>
                        <p>Best first step. Deposit becomes your limit.</p>
                        <ul>
                            <li>Discover it Secured (graduates to unsecured)</li>
                            <li>Capital One Platinum Secured</li>
                            <li>OpenSky Secured (no credit check)</li>
                        </ul>
                        <h4>2. Become an Authorized User</h4>
                        <p>Get added to someone else's card (parent, family member).</p>
                        <ul>
                            <li>Their payment history helps your score</li>
                            <li>You don't need the physical card</li>
                            <li>Choose someone with perfect payment history</li>
                        </ul>
                        <h4>3. Credit-Builder Loans</h4>
                        <p>Bank holds loan amount, releases when paid off.</p>
                        <ul>
                            <li>Self (app-based)</li>
                            <li>Credit unions</li>
                            <li>Some online banks</li>
                        </ul>
                        <h4>4. Rent/Utility Reporting</h4>
                        <ul>
                            <li>Experian Boost (utility/phone bills)</li>
                            <li>Rent reporting services</li>
                        </ul>
                    `
                },
                {
                    id: 'rebuilding-credit',
                    title: 'Rebuilding Damaged Credit',
                    content: `
                        <h2>Rebuilding Damaged Credit</h2>
                        <h3>Common Causes of Damage</h3>
                        <ul>
                            <li>Late/missed payments</li>
                            <li>Collections accounts</li>
                            <li>Maxed out credit cards</li>
                            <li>Bankruptcy</li>
                            <li>Foreclosure</li>
                        </ul>
                        <h3>Recovery Timeline</h3>
                        <ul>
                            <li><strong>Late payment:</strong> Score starts recovering in 6-12 months</li>
                            <li><strong>Collections:</strong> Impact lessens over time, falls off at 7 years</li>
                            <li><strong>Bankruptcy:</strong> Can rebuild to 700+ in 2-3 years</li>
                        </ul>
                        <h3>Step-by-Step Recovery Plan</h3>
                        <ol>
                            <li><strong>Stop the bleeding:</strong> Get current on all accounts</li>
                            <li><strong>Check reports:</strong> Dispute any errors</li>
                            <li><strong>Lower utilization:</strong> Pay down balances</li>
                            <li><strong>Add positive history:</strong> Secured card + on-time payments</li>
                            <li><strong>Be patient:</strong> Negative items fade over time</li>
                        </ol>
                        <div class="highlight">
                            <strong>Hope:</strong> Even after bankruptcy, you can rebuild to 700+ in 2-3 years with disciplined habits. Time heals most credit damage.
                        </div>
                    `
                },
                {
                    id: 'rapid-rescoring',
                    title: 'Quick Wins for Score Improvement',
                    content: `
                        <h2>Quick Wins for Score Improvement</h2>
                        <h3>Immediate Impact (Days to Weeks)</h3>
                        <h4>1. Pay Down Balances</h4>
                        <p>Reducing utilization can boost score 20-100 points quickly.</p>
                        <div class="example">
                            Current: 80% utilization → Score: 620<br>
                            Pay down to: 10% utilization → Score: 680-700+
                        </div>
                        <h4>2. Experian Boost</h4>
                        <p>Add utility and phone payments to Experian. Free, instant.</p>
                        <h4>3. Request Credit Limit Increase</h4>
                        <p>Higher limit = lower utilization (if balance stays same).</p>
                        <h4>4. Become Authorized User</h4>
                        <p>On a card with perfect history and low utilization.</p>
                        <h3>Medium-Term (1-3 Months)</h3>
                        <ul>
                            <li>Open secured card and use responsibly</li>
                            <li>Dispute errors and wait for resolution</li>
                            <li>Request goodwill deletion of late payment</li>
                        </ul>
                        <div class="highlight">
                            <strong>Fastest Fix:</strong> If you have high utilization, paying it down is often the fastest way to see significant score improvement.
                        </div>
                    `
                },
                {
                    id: 'credit-building-timeline',
                    title: 'Credit Building Timeline',
                    content: `
                        <h2>Credit Building Timeline</h2>
                        <h3>Month 1-3: Foundation</h3>
                        <ul>
                            <li>Get secured card or become authorized user</li>
                            <li>Set up autopay for all bills</li>
                            <li>Check all three credit reports</li>
                            <li>Dispute any errors</li>
                        </ul>
                        <h3>Month 4-6: Building</h3>
                        <ul>
                            <li>Make small purchases monthly</li>
                            <li>Pay statement balance in full</li>
                            <li>Keep utilization under 10%</li>
                            <li>First score should appear (takes ~6 months for FICO)</li>
                        </ul>
                        <h3>Month 7-12: Growing</h3>
                        <ul>
                            <li>Request credit limit increase</li>
                            <li>Consider second card (if ready)</li>
                            <li>Score should be 650-700+ with perfect history</li>
                        </ul>
                        <h3>Year 2+: Optimizing</h3>
                        <ul>
                            <li>Graduate secured card to unsecured</li>
                            <li>Add rewards cards strategically</li>
                            <li>Maintain low utilization</li>
                            <li>Target 750+ score</li>
                        </ul>
                        <div class="highlight">
                            <strong>Reality:</strong> Building excellent credit (750+) typically takes 2-5 years. There are no shortcuts—just consistent, responsible behavior over time.
                        </div>
                    `
                }
            ],
            quiz: [
                {
                    question: 'What is the fastest way to improve credit if you have high utilization?',
                    options: [
                        'Open new credit cards',
                        'Pay down your balances',
                        'Close unused accounts',
                        'Wait 7 years'
                    ],
                    correct: 1,
                    explanation: 'Paying down balances (reducing utilization) often has the fastest impact on credit scores. Going from 80% to 10% utilization can boost your score significantly within one billing cycle.'
                },
                {
                    question: 'What is Experian Boost?',
                    options: [
                        'A paid credit repair service',
                        'A free service that adds utility/phone payments to your Experian report',
                        'A type of credit card',
                        'A credit score simulator'
                    ],
                    correct: 1,
                    explanation: 'Experian Boost is a free service that adds your utility, phone, and streaming payments to your Experian credit report, potentially boosting your score immediately.'
                },
                {
                    question: 'How long does it typically take to generate a FICO score from scratch?',
                    options: ['1 month', '3 months', '6 months', '12 months'],
                    correct: 2,
                    explanation: 'You need at least 6 months of credit history and at least one account reported to generate a FICO score.'
                },
                {
                    question: 'What is an authorized user?',
                    options: [
                        'Someone who steals credit cards',
                        'Someone added to another person\'s credit card account',
                        'The primary cardholder',
                        'A credit bureau employee'
                    ],
                    correct: 1,
                    explanation: 'An authorized user is added to someone else\'s credit card. The account\'s history can appear on the authorized user\'s credit report, helping them build credit.'
                },
                {
                    question: 'How long after bankruptcy can you rebuild to a 700+ credit score?',
                    options: ['Never', '10+ years', '2-3 years with discipline', '6 months'],
                    correct: 2,
                    explanation: 'With disciplined credit habits, many people rebuild to 700+ within 2-3 years after bankruptcy. The impact lessens over time, especially with positive new accounts.'
                }
            ]
        },
        {
            id: 5,
            title: 'Advanced Credit',
            subtitle: 'Mastering credit and business credit',
            topics: [
                {
                    id: 'credit-optimization',
                    title: 'Advanced Score Optimization',
                    content: `
                        <h2>Advanced Score Optimization</h2>
                        <h3>AZEO Method</h3>
                        <p>All Zero Except One - For maximum scores:</p>
                        <ol>
                            <li>Pay all cards to $0 before statement closes</li>
                            <li>Let ONE card report a small balance (1-9%)</li>
                            <li>Result: Shows activity while minimizing utilization</li>
                        </ol>
                        <h3>Statement Balance Timing</h3>
                        <ul>
                            <li>Know when each card's statement closes</li>
                            <li>Pay down BEFORE statement date</li>
                            <li>What posts to your report = statement balance</li>
                        </ul>
                        <h3>Strategic Inquiries</h3>
                        <p>When you need multiple applications:</p>
                        <ul>
                            <li>Apply for same loan type within 14-45 days</li>
                            <li>Mortgage/auto inquiries count as one if grouped</li>
                            <li>Credit card inquiries don't group</li>
                        </ul>
                        <h3>Credit Limit Increase Strategy</h3>
                        <ul>
                            <li>Request every 6 months</li>
                            <li>Some issuers do soft pulls (Capital One, Discover)</li>
                            <li>Others do hard pulls—ask first</li>
                        </ul>
                        <div class="highlight">
                            <strong>800+ Club:</strong> To maintain 800+, keep utilization under 10%, never miss payments, have a mix of credit types, and let accounts age.
                        </div>
                    `
                },
                {
                    id: 'business-credit',
                    title: 'Business Credit Introduction',
                    content: `
                        <h2>Business Credit Introduction</h2>
                        <div class="definition">
                            <strong>Business Credit:</strong> A credit profile separate from your personal credit, used for business financing. Doesn't affect personal credit score.
                        </div>
                        <h3>Why Business Credit Matters</h3>
                        <ul>
                            <li>Separate personal and business finances</li>
                            <li>Access larger credit lines</li>
                            <li>Business cards have better rewards</li>
                            <li>Build business value/assets</li>
                        </ul>
                        <h3>Business Credit Bureaus</h3>
                        <ul>
                            <li><strong>Dun & Bradstreet:</strong> PAYDEX score (0-100)</li>
                            <li><strong>Experian Business:</strong> Intelliscore (0-100)</li>
                            <li><strong>Equifax Business:</strong> Business Credit Risk Score</li>
                        </ul>
                        <h3>Getting Started</h3>
                        <ol>
                            <li>Form your business (LLC recommended)</li>
                            <li>Get an EIN from IRS</li>
                            <li>Open business bank account</li>
                            <li>Get business phone number</li>
                            <li>Get D-U-N-S number (free from D&B)</li>
                            <li>Start with trade credit (net 30 vendors)</li>
                        </ol>
                    `
                },
                {
                    id: 'credit-card-rewards',
                    title: 'Maximizing Credit Card Rewards',
                    content: `
                        <h2>Maximizing Credit Card Rewards</h2>
                        <h3>Types of Rewards</h3>
                        <ul>
                            <li><strong>Cash Back:</strong> 1-5% back, simplest</li>
                            <li><strong>Points:</strong> Flexible, often 1-2 cents per point</li>
                            <li><strong>Miles:</strong> Travel focused, can be very valuable</li>
                        </ul>
                        <h3>Category Bonuses</h3>
                        <p>Many cards offer bonus categories:</p>
                        <ul>
                            <li>5% on groceries (Amex Blue Cash Preferred)</li>
                            <li>5% on rotating categories (Discover, Chase Freedom)</li>
                            <li>3x on dining and travel (Chase Sapphire Preferred)</li>
                        </ul>
                        <h3>Sign-Up Bonuses</h3>
                        <div class="example">
                            Chase Sapphire Preferred: Spend $4,000 in 3 months → 60,000 points<br>
                            Value: $750+ in travel
                        </div>
                        <h3>The Trifecta Strategy</h3>
                        <p>Use multiple cards to maximize every category:</p>
                        <ul>
                            <li>Card A: Groceries (5%)</li>
                            <li>Card B: Dining/Travel (3%)</li>
                            <li>Card C: Everything else (2%)</li>
                        </ul>
                        <div class="highlight">
                            <strong>Warning:</strong> Only pursue rewards if you pay in full every month. Interest charges will wipe out all rewards value.
                        </div>
                    `
                },
                {
                    id: 'protecting-credit',
                    title: 'Protecting Your Credit Long-Term',
                    content: `
                        <h2>Protecting Your Credit Long-Term</h2>
                        <h3>Identity Theft Prevention</h3>
                        <ul>
                            <li><strong>Freeze all three bureaus</strong> (free)</li>
                            <li>Use strong, unique passwords</li>
                            <li>Enable 2FA on financial accounts</li>
                            <li>Monitor credit reports regularly</li>
                            <li>Be careful with public WiFi</li>
                        </ul>
                        <h3>If You're a Victim</h3>
                        <ol>
                            <li>Place fraud alerts with all bureaus</li>
                            <li>File report at IdentityTheft.gov</li>
                            <li>File police report</li>
                            <li>Dispute fraudulent accounts</li>
                            <li>Consider identity theft protection service</li>
                        </ol>
                        <h3>Maintaining Excellent Credit</h3>
                        <ul>
                            <li>Never miss a payment (set up autopay)</li>
                            <li>Keep utilization low</li>
                            <li>Don't close old accounts</li>
                            <li>Limit new applications</li>
                            <li>Mix of credit types helps</li>
                        </ul>
                        <div class="highlight">
                            <strong>Final Advice:</strong> Great credit is built over years of consistent behavior. Set up systems (autopay, alerts) so you don't have to think about it. Then let time do its work.
                        </div>
                    `
                }
            ],
            quiz: [
                {
                    question: 'What is the AZEO method?',
                    options: [
                        'A type of credit card',
                        'All Zero Except One - paying all cards to $0 except one small balance',
                        'A bankruptcy strategy',
                        'An identity theft protection method'
                    ],
                    correct: 1,
                    explanation: 'AZEO (All Zero Except One) is a score optimization technique where you pay all cards to $0 before statement close, except one card which reports a small balance to show activity.'
                },
                {
                    question: 'What is a D-U-N-S number?',
                    options: [
                        'A type of credit score',
                        'A unique identifier for businesses used by Dun & Bradstreet',
                        'A credit card number',
                        'A tax identification number'
                    ],
                    correct: 1,
                    explanation: 'A D-U-N-S (Data Universal Numbering System) number is a unique 9-digit identifier for businesses, used by Dun & Bradstreet to track business credit.'
                },
                {
                    question: 'Why do mortgage/auto loan inquiries sometimes count as one?',
                    options: [
                        'They\'re from the same lender',
                        'Rate shopping protection - multiple inquiries within 14-45 days count as one',
                        'They\'re automatically combined',
                        'The government requires it'
                    ],
                    correct: 1,
                    explanation: 'Credit scoring models recognize rate shopping for mortgages and auto loans. Multiple inquiries within a 14-45 day window count as a single inquiry.'
                },
                {
                    question: 'What should you do FIRST if you\'re a victim of identity theft?',
                    options: [
                        'Close all your accounts',
                        'Place fraud alerts with all three credit bureaus',
                        'Stop using credit cards',
                        'Move to a new address'
                    ],
                    correct: 1,
                    explanation: 'The first step is placing fraud alerts with all three bureaus (Experian, Equifax, TransUnion). This makes it harder for thieves to open new accounts in your name.'
                },
                {
                    question: 'What is the main rule for credit card rewards to be worthwhile?',
                    options: [
                        'Apply for as many cards as possible',
                        'Only use rewards cards for large purchases',
                        'Pay your balance in full every month - interest wipes out rewards',
                        'Always choose cash back over points'
                    ],
                    correct: 2,
                    explanation: 'Credit card rewards are only valuable if you pay in full and never pay interest. At 20%+ APR, interest charges will far exceed any rewards earned.'
                }
            ]
        }
    ]
};
