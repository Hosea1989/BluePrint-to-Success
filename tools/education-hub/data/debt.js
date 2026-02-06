// Debt Management Curriculum Data
const debtData = {
    id: 'debt',
    title: 'Debt Management',
    icon: '💳',
    description: 'Understand, manage, and eliminate debt. Learn strategies to break free from debt and stay debt-free.',
    whyItMatters: 'The average American has $104,000 in debt. Interest payments drain wealth daily. Understanding debt is the difference between it controlling you and you controlling it.',
    graduationGoal: 'Have a clear debt payoff plan and the knowledge to stay debt-free',
    difficulty: 'beginner',
    prerequisites: ['personalfinance'],
    learningObjectives: [
        'Understand different types of debt and their costs',
        'Create a debt payoff plan using snowball or avalanche methods',
        'Negotiate with creditors to reduce debt',
        'Avoid debt traps and stay debt-free',
        'Use debt strategically when appropriate'
    ],
    relatedTracks: ['personalfinance', 'credit', 'banking', 'studentloans'],
    resources: [
        { title: 'National Foundation for Credit Counseling', url: 'https://www.nfcc.org/' },
        { title: 'Consumer Financial Protection Bureau - Debt', url: 'https://www.consumerfinance.gov/consumer-tools/debt-collection/' }
    ],
    levels: [
        {
            id: 1,
            title: 'Understanding Debt',
            subtitle: 'Know what you\'re dealing with',
            topics: [
                {
                    id: 'types-of-debt',
                    title: 'Types of Debt Explained',
                    content: `
                        <h2>Types of Debt Explained</h2>
                        <h3>Good Debt vs. Bad Debt</h3>
                        <p>"Good" debt helps build wealth or income. "Bad" debt costs you money with no return.</p>
                        <h3>Potentially Good Debt</h3>
                        <ul>
                            <li><strong>Mortgage:</strong> Builds equity, home appreciates (usually)</li>
                            <li><strong>Student loans:</strong> Increases earning potential (if degree has ROI)</li>
                            <li><strong>Business loans:</strong> Funds income-generating ventures</li>
                        </ul>
                        <h3>Bad Debt (High Interest, No Return)</h3>
                        <ul>
                            <li><strong>Credit card debt:</strong> 18-29% interest — wealth killer #1</li>
                            <li><strong>Payday loans:</strong> 300-600% APR — predatory</li>
                            <li><strong>Car loans on depreciating cars:</strong> Loses value daily</li>
                            <li><strong>Personal loans for lifestyle:</strong> Borrowing to consume</li>
                            <li><strong>Buy-now-pay-later:</strong> Can snowball fast</li>
                        </ul>
                        <h3>Understanding Interest</h3>
                        <div class="example">
                            $5,000 credit card at 24% APR, paying minimums:<br>
                            Time to pay off: <strong>17+ years</strong><br>
                            Total paid: <strong>$12,000+</strong><br>
                            Interest cost: <strong>$7,000 on a $5,000 balance!</strong>
                        </div>
                        <div class="highlight">
                            <strong>The Rule:</strong> If debt isn't building your net worth or income, it's destroying both.
                        </div>
                    `
                },
                {
                    id: 'debt-assessment',
                    title: 'Assessing Your Debt Situation',
                    content: `
                        <h2>Assessing Your Debt Situation</h2>
                        <h3>The Debt Inventory</h3>
                        <p>List every debt with:</p>
                        <ul>
                            <li>Creditor name</li>
                            <li>Total balance owed</li>
                            <li>Interest rate (APR)</li>
                            <li>Minimum monthly payment</li>
                            <li>Due date</li>
                        </ul>
                        <h3>Key Ratios to Know</h3>
                        <ul>
                            <li><strong>Debt-to-Income Ratio:</strong> Total monthly debt payments ÷ gross monthly income</li>
                            <li>Under 20% = manageable</li>
                            <li>20-35% = getting tight</li>
                            <li>Over 36% = danger zone</li>
                        </ul>
                        <div class="example">
                            <strong>Example:</strong><br>
                            Monthly income: $4,000<br>
                            Car payment: $350<br>
                            Student loan: $200<br>
                            Credit card minimums: $150<br>
                            Total debt payments: $700<br>
                            DTI: $700 ÷ $4,000 = <strong>17.5% (manageable)</strong>
                        </div>
                        <h3>Check Your Credit Report</h3>
                        <ul>
                            <li>Free at AnnualCreditReport.com</li>
                            <li>Verify all debts are yours</li>
                            <li>Check for errors (25% of reports have them)</li>
                            <li>Dispute anything incorrect</li>
                        </ul>
                        <div class="highlight">
                            <strong>First Step:</strong> You can't fight what you can't see. List every debt today. The number might be scary, but knowing is the first step to fixing it.
                        </div>
                    `
                },
                {
                    id: 'interest-explained',
                    title: 'How Interest Really Works',
                    content: `
                        <h2>How Interest Really Works</h2>
                        <h3>Simple vs. Compound Interest on Debt</h3>
                        <ul>
                            <li><strong>Simple interest:</strong> Charged on original balance only (some auto/student loans)</li>
                            <li><strong>Compound interest:</strong> Charged on balance + accumulated interest (credit cards)</li>
                        </ul>
                        <h3>APR vs. Daily Rate</h3>
                        <p>Credit cards charge DAILY interest:</p>
                        <div class="example">
                            24% APR ÷ 365 = 0.0657% per day<br>
                            $5,000 balance × 0.0657% = <strong>$3.29/day in interest</strong><br>
                            That's $100/month before you even pay anything!
                        </div>
                        <h3>Minimum Payment Trap</h3>
                        <ul>
                            <li>Minimums are designed to keep you in debt</li>
                            <li>Often 80-90% of minimum goes to interest</li>
                            <li>Only $10-20 of a $200 minimum reduces your balance</li>
                            <li>Credit card companies LOVE minimum payers</li>
                        </ul>
                        <h3>The Real Cost of Debt</h3>
                        <div class="example">
                            <strong>$10,000 at different rates (minimum payments):</strong><br>
                            6% (student loan): 10 years, $1,900 in interest<br>
                            18% (credit card): 27 years, $15,000 in interest<br>
                            24% (store card): 37 years, $27,000 in interest
                        </div>
                        <div class="highlight">
                            <strong>Mind-Blowing:</strong> At 24% interest, you'd pay almost 3x the original balance. Every extra dollar you pay saves you multiples in interest.
                        </div>
                    `
                }
            ],
            quiz: {
                questions: [
                    {
                        question: 'What makes credit card debt especially dangerous?',
                        options: ['You can use it anywhere', 'High interest rates (18-29%) that compound daily', 'It affects your credit score', 'You have to pay it monthly'],
                        correct: 1,
                        explanation: 'Credit card interest rates of 18-29% compound daily, meaning interest is charged on top of interest. At minimums, a $5,000 balance can cost over $12,000 to repay.'
                    },
                    {
                        question: 'What is a healthy debt-to-income ratio?',
                        options: ['Under 20%', '30-40%', '50%', 'Any amount is fine'],
                        correct: 0,
                        explanation: 'Under 20% is manageable, 20-35% is getting tight, and over 36% is the danger zone. Lenders also use this ratio to evaluate your creditworthiness.'
                    },
                    {
                        question: 'Why is paying only the minimum on credit cards a trap?',
                        options: ['It doesn\'t count as a payment', 'Most of the minimum goes to interest, barely reducing the balance', 'The minimum increases each month', 'It ruins your credit'],
                        correct: 1,
                        explanation: '80-90% of minimum payments go straight to interest. Only $10-20 of a $200 minimum actually reduces what you owe. This is by design.'
                    }
                ]
            }
        },
        {
            id: 2,
            title: 'Debt Payoff Strategies',
            subtitle: 'Choose your attack plan',
            topics: [
                {
                    id: 'snowball-method',
                    title: 'Debt Snowball Method',
                    content: `
                        <h2>Debt Snowball Method</h2>
                        <div class="definition">
                            <strong>Snowball Method:</strong> Pay off debts from smallest balance to largest, regardless of interest rate. Popularized by Dave Ramsey.
                        </div>
                        <h3>How It Works</h3>
                        <ol>
                            <li>List all debts from smallest to largest balance</li>
                            <li>Pay minimums on everything except the smallest</li>
                            <li>Throw every extra dollar at the smallest debt</li>
                            <li>When smallest is paid off, roll that payment to the next</li>
                            <li>Repeat until all debts are gone</li>
                        </ol>
                        <div class="example">
                            <strong>Example:</strong><br>
                            Debt A: $500 (min $25) ← Attack this first<br>
                            Debt B: $2,000 (min $50)<br>
                            Debt C: $8,000 (min $150)<br>
                            Extra budget: $200<br><br>
                            Month 1-3: Pay $225/month to Debt A → PAID OFF!<br>
                            Now roll $225 + $50 to Debt B = $275/month<br>
                            Now roll $275 + $150 to Debt C = $425/month
                        </div>
                        <h3>Pros</h3>
                        <ul>
                            <li>Quick wins build motivation and momentum</li>
                            <li>Psychological boost from eliminating debts</li>
                            <li>Simplifies as you go (fewer bills)</li>
                        </ul>
                        <h3>Cons</h3>
                        <ul>
                            <li>May pay more in total interest</li>
                            <li>Not mathematically optimal</li>
                        </ul>
                        <div class="highlight">
                            <strong>Best For:</strong> People who need motivation and quick wins. If you've tried and failed before, the snowball's psychological wins keep you going.
                        </div>
                    `
                },
                {
                    id: 'avalanche-method',
                    title: 'Debt Avalanche Method',
                    content: `
                        <h2>Debt Avalanche Method</h2>
                        <div class="definition">
                            <strong>Avalanche Method:</strong> Pay off debts from highest interest rate to lowest. Mathematically saves the most money.
                        </div>
                        <h3>How It Works</h3>
                        <ol>
                            <li>List all debts from highest to lowest interest rate</li>
                            <li>Pay minimums on everything except the highest rate</li>
                            <li>Throw every extra dollar at the highest-rate debt</li>
                            <li>When paid off, roll that payment to the next highest</li>
                            <li>Repeat until debt-free</li>
                        </ol>
                        <div class="example">
                            <strong>Example:</strong><br>
                            Credit card: $3,000 at 24% ← Attack first<br>
                            Car loan: $8,000 at 6%<br>
                            Student loan: $15,000 at 4.5%
                        </div>
                        <h3>Pros</h3>
                        <ul>
                            <li>Saves the most money in interest</li>
                            <li>Mathematically optimal</li>
                            <li>Gets you debt-free faster overall</li>
                        </ul>
                        <h3>Cons</h3>
                        <ul>
                            <li>First payoff can take longer (less motivation)</li>
                            <li>Requires discipline without quick wins</li>
                        </ul>
                        <h3>Snowball vs. Avalanche: Which to Choose?</h3>
                        <ul>
                            <li><strong>Snowball:</strong> If motivation is your biggest challenge</li>
                            <li><strong>Avalanche:</strong> If you're disciplined and want to save the most</li>
                            <li><strong>Hybrid:</strong> Pay off one small debt for a win, then switch to avalanche</li>
                        </ul>
                        <div class="highlight">
                            <strong>Truth:</strong> The best method is the one you'll stick with. Both work. Doing SOMETHING beats doing nothing.
                        </div>
                    `
                },
                {
                    id: 'debt-payoff-accelerators',
                    title: 'Accelerating Debt Payoff',
                    content: `
                        <h2>Accelerating Debt Payoff</h2>
                        <h3>Find Extra Money</h3>
                        <ul>
                            <li><strong>Tax refund:</strong> Apply entire refund to debt</li>
                            <li><strong>Side hustle income:</strong> Dedicate 100% to debt</li>
                            <li><strong>Sell stuff:</strong> Clothes, electronics, furniture</li>
                            <li><strong>Cut temporarily:</strong> Pause subscriptions, eat at home</li>
                            <li><strong>Windfalls:</strong> Bonuses, gifts, stimulus</li>
                        </ul>
                        <h3>Balance Transfer</h3>
                        <ul>
                            <li>Move high-interest debt to 0% APR card</li>
                            <li>Typical: 0% for 12-18 months</li>
                            <li>Transfer fee: 3-5% (still saves money)</li>
                            <li><strong>Critical:</strong> PAY IT OFF before the promo ends!</li>
                        </ul>
                        <h3>Debt Consolidation</h3>
                        <ul>
                            <li>Combine multiple debts into one lower-rate loan</li>
                            <li>Personal loan from bank or credit union</li>
                            <li>Simplifies payments (one bill instead of five)</li>
                            <li><strong>Warning:</strong> Don't rack up new debt on freed-up cards</li>
                        </ul>
                        <h3>Negotiating with Creditors</h3>
                        <ul>
                            <li>Call and ask for lower interest rate (worst they say is no)</li>
                            <li>Ask about hardship programs</li>
                            <li>Negotiate settlement on old debt (pay less than full)</li>
                            <li>Get any agreement in writing</li>
                        </ul>
                        <div class="highlight">
                            <strong>Power Move:</strong> Every extra $100/month toward a $5,000 credit card at 24% saves you $3,000+ in interest and years of payments.
                        </div>
                        <a href="../budget-planner/index.html" class="tool-callout" target="_blank">
                            <span class="tool-callout-icon">💰</span>
                            <div class="tool-callout-content">
                                <strong>🧰 Find extra money to pay off debt — open the Budget Planner</strong>
                                <p>Use the Budget Planner to see where your money is going and find areas to cut back. Redirect that money straight to your debt payoff plan.</p>
                            </div>
                            <span class="tool-callout-arrow">→</span>
                        </a>
                    `
                }
            ],
            quiz: {
                questions: [
                    {
                        question: 'What is the debt snowball method?',
                        options: ['Pay highest interest first', 'Pay smallest balance first for quick wins', 'Pay all debts equally', 'Only pay minimums'],
                        correct: 1,
                        explanation: 'The snowball method targets the smallest balance first, giving you quick psychological wins that build momentum to tackle bigger debts.'
                    },
                    {
                        question: 'Which method saves the most money in interest?',
                        options: ['Snowball', 'Avalanche', 'They\'re the same', 'Consolidation'],
                        correct: 1,
                        explanation: 'The avalanche method (highest interest first) saves the most money because you eliminate the most expensive debt first.'
                    },
                    {
                        question: 'What is the biggest risk with a balance transfer?',
                        options: ['It hurts your credit', 'If you don\'t pay it off before the promo rate ends, interest skyrockets', 'Transfer fees are too high', 'You can only do it once'],
                        correct: 1,
                        explanation: 'Balance transfer cards offer 0% interest for 12-18 months, but if you don\'t pay it off by then, the rate jumps to 20%+ on the remaining balance.'
                    }
                ]
            }
        },
        {
            id: 3,
            title: 'Specific Debt Types',
            subtitle: 'Strategies for different kinds of debt',
            topics: [
                {
                    id: 'credit-card-debt',
                    title: 'Crushing Credit Card Debt',
                    content: `
                        <h2>Crushing Credit Card Debt</h2>
                        <h3>Why Credit Cards Are Dangerous</h3>
                        <ul>
                            <li>Average rate: 24-29% APR</li>
                            <li>Compound interest charges daily</li>
                            <li>Easy to overspend (doesn't "feel" real)</li>
                            <li>Minimum payments designed to maximize interest</li>
                        </ul>
                        <h3>Action Plan</h3>
                        <ol>
                            <li><strong>Stop adding to the balance</strong> (use cash/debit only)</li>
                            <li><strong>Call for a rate reduction</strong> (ask to speak to retention)</li>
                            <li><strong>Consider balance transfer</strong> to 0% APR card</li>
                            <li><strong>Pay more than the minimum</strong> — even $20 extra helps</li>
                            <li><strong>Automate payments</strong> above minimums</li>
                        </ol>
                        <h3>Using Credit Cards Wisely (After Debt-Free)</h3>
                        <ul>
                            <li>Pay full balance every month — never carry a balance</li>
                            <li>Use for cashback/rewards only</li>
                            <li>Set up autopay for full balance</li>
                            <li>Never charge more than you have in checking</li>
                        </ul>
                        <div class="highlight">
                            <strong>Rule:</strong> If you can't pay it off this month, you can't afford it. Credit cards are a tool, not a loan.
                        </div>
                    `
                },
                {
                    id: 'student-loan-debt',
                    title: 'Tackling Student Loans',
                    content: `
                        <h2>Tackling Student Loans</h2>
                        <h3>Federal vs. Private</h3>
                        <ul>
                            <li><strong>Federal:</strong> Government loans — more protections and options</li>
                            <li><strong>Private:</strong> From banks — fewer protections, often higher rates</li>
                        </ul>
                        <h3>Federal Loan Repayment Options</h3>
                        <ul>
                            <li><strong>Standard:</strong> Fixed payments over 10 years</li>
                            <li><strong>Income-Driven (IDR):</strong> Payments based on income (IBR, PAYE, SAVE)</li>
                            <li><strong>Graduated:</strong> Payments start low, increase over time</li>
                            <li><strong>Extended:</strong> Lower payments over 25 years</li>
                        </ul>
                        <h3>Forgiveness Programs</h3>
                        <ul>
                            <li><strong>PSLF:</strong> 120 payments while working for government/nonprofit → forgiven</li>
                            <li><strong>IDR Forgiveness:</strong> Remaining balance forgiven after 20-25 years</li>
                            <li><strong>Teacher Loan Forgiveness:</strong> Up to $17,500 for qualifying teachers</li>
                        </ul>
                        <h3>Should You Pay Off Early?</h3>
                        <ul>
                            <li>Rate > 6%? Consider aggressive payoff</li>
                            <li>Rate < 4%? Investing may earn more (but peace of mind matters)</li>
                            <li>Pursuing PSLF? Don't pay extra—make qualifying payments instead</li>
                        </ul>
                        <div class="highlight">
                            <strong>Check:</strong> Log into StudentAid.gov to see all federal loans, rates, and explore repayment options. Many people are on the wrong plan.
                        </div>
                    `
                },
                {
                    id: 'medical-debt',
                    title: 'Managing Medical Debt',
                    content: `
                        <h2>Managing Medical Debt</h2>
                        <h3>The Reality</h3>
                        <ul>
                            <li>Medical debt is the #1 cause of bankruptcy in America</li>
                            <li>Even insured people face massive bills</li>
                            <li>Hospital bills are often negotiable</li>
                            <li>Billing errors are extremely common</li>
                        </ul>
                        <h3>Step-by-Step Defense</h3>
                        <ol>
                            <li><strong>Request itemized bill</strong> (not just a total — look for errors)</li>
                            <li><strong>Verify insurance paid correctly</strong> (check EOB from insurance)</li>
                            <li><strong>Ask for financial assistance</strong> (hospitals have charity care programs)</li>
                            <li><strong>Negotiate the bill</strong> (offer to pay 40-60% lump sum)</li>
                            <li><strong>Set up payment plan</strong> (most hospitals offer 0% interest plans)</li>
                        </ol>
                        <h3>What to Say</h3>
                        <div class="example">
                            "I received a bill for $X. I'm unable to pay this amount. Do you have a financial hardship or charity care program? I'd like to apply."<br><br>
                            "I can offer $X as a lump-sum payment today to settle this. Can we work something out?"
                        </div>
                        <h3>Protections</h3>
                        <ul>
                            <li>Medical debt under $500 can't go on credit reports (2023 rule)</li>
                            <li>Paid medical collections removed from credit reports</li>
                            <li>1-year waiting period before reporting to credit bureaus</li>
                        </ul>
                        <div class="highlight">
                            <strong>Never Ignore It:</strong> Medical debt has more negotiation room than almost any other type. But you have to ask.
                        </div>
                    `
                }
            ],
            quiz: {
                questions: [
                    {
                        question: 'What should be your first step with a large medical bill?',
                        options: ['Pay it immediately', 'Ignore it and hope it goes away', 'Request an itemized bill and check for errors', 'Put it on a credit card'],
                        correct: 2,
                        explanation: 'Always request an itemized bill—billing errors are extremely common. Then check that insurance paid correctly and apply for financial assistance before paying.'
                    },
                    {
                        question: 'What is PSLF for student loans?',
                        options: ['Private Student Loan Forgiveness', 'Public Service Loan Forgiveness — debt forgiven after 120 qualifying payments', 'A type of student loan', 'A payment plan'],
                        correct: 1,
                        explanation: 'PSLF forgives remaining federal student loan balances after 120 qualifying payments (10 years) while working for government or non-profit employers.'
                    },
                    {
                        question: 'After paying off credit card debt, how should you use credit cards?',
                        options: ['Never use them again', 'Pay full balance every month and never carry a balance', 'Only use for emergencies', 'Max them out for rewards'],
                        correct: 1,
                        explanation: 'After becoming debt-free, use credit cards for rewards/cashback but pay the full balance every month. Set up autopay for the full amount.'
                    }
                ]
            }
        },
        {
            id: 4,
            title: 'Debt Prevention',
            subtitle: 'Breaking the cycle for good',
            topics: [
                {
                    id: 'staying-debt-free',
                    title: 'Staying Debt-Free',
                    content: `
                        <h2>Staying Debt-Free</h2>
                        <h3>Why People Fall Back Into Debt</h3>
                        <ul>
                            <li>Emergency without emergency fund</li>
                            <li>Lifestyle inflation after becoming debt-free</li>
                            <li>Not changing spending habits</li>
                            <li>Using credit cards without a plan</li>
                            <li>Not having sinking funds for irregular expenses</li>
                        </ul>
                        <h3>The Debt-Prevention System</h3>
                        <ol>
                            <li><strong>Emergency fund:</strong> 3-6 months (non-negotiable)</li>
                            <li><strong>Sinking funds:</strong> For car repairs, medical, holidays</li>
                            <li><strong>Cash buffer:</strong> 1 month ahead on bills</li>
                            <li><strong>Credit card autopay:</strong> Full balance every month</li>
                            <li><strong>Monthly budget review:</strong> Stay aware of spending</li>
                        </ol>
                        <h3>Smart Borrowing Rules</h3>
                        <ul>
                            <li>Only borrow for appreciating assets (home) or income (education with ROI)</li>
                            <li>Interest rate should be below expected return</li>
                            <li>Monthly payment should fit easily in budget</li>
                            <li>Always have a payoff timeline before borrowing</li>
                        </ul>
                        <div class="highlight">
                            <strong>Freedom:</strong> The goal isn't to never borrow money. It's to borrow intentionally, with a plan, and only when it builds your future.
                        </div>
                    `
                },
                {
                    id: 'predatory-lending',
                    title: 'Avoiding Predatory Lending',
                    content: `
                        <h2>Avoiding Predatory Lending</h2>
                        <h3>What Is Predatory Lending?</h3>
                        <p>Lending practices designed to trap borrowers in cycles of debt, often targeting low-income communities.</p>
                        <h3>Red Flags</h3>
                        <ul>
                            <li><strong>Payday loans:</strong> 300-600% APR — avoid at all costs</li>
                            <li><strong>Title loans:</strong> Risk losing your car for a small loan</li>
                            <li><strong>Rent-to-own:</strong> Pay 2-3x retail price</li>
                            <li><strong>"No credit check" loans:</strong> Extremely high rates</li>
                            <li><strong>Dealer financing tricks:</strong> Packed payments, yo-yo financing</li>
                        </ul>
                        <h3>Better Alternatives</h3>
                        <ul>
                            <li><strong>Credit unions:</strong> Often offer small emergency loans at fair rates</li>
                            <li><strong>Employer advance:</strong> Many offer paycheck advances</li>
                            <li><strong>Negotiate bills:</strong> Ask for payment plans or extensions</li>
                            <li><strong>Community assistance:</strong> 211.org connects you to local help</li>
                            <li><strong>Credit card (carefully):</strong> Even 24% is better than 400%</li>
                        </ul>
                        <h3>The Math of Payday Loans</h3>
                        <div class="example">
                            Borrow $500 for 2 weeks at $15 per $100:<br>
                            Fee: $75<br>
                            APR: <strong>391%</strong><br>
                            If rolled over 4 times: You've paid $300 in fees on $500<br>
                            80% of payday borrowers roll over or re-borrow within 14 days
                        </div>
                        <div class="highlight">
                            <strong>Know This:</strong> Predatory lenders profit from your desperation. Build alternatives (emergency fund, credit union membership) BEFORE you need them.
                        </div>
                    `
                },
                {
                    id: 'debt-and-relationships',
                    title: 'Debt and Relationships',
                    content: `
                        <h2>Debt and Relationships</h2>
                        <h3>Money and Partners</h3>
                        <p>Money is the #1 source of relationship conflict. Being open about debt is essential.</p>
                        <h3>When to Have "The Talk"</h3>
                        <ul>
                            <li>Before combining finances or moving in together</li>
                            <li>Before marriage (legal implications)</li>
                            <li>When making major joint financial decisions</li>
                        </ul>
                        <h3>How to Discuss Debt</h3>
                        <ul>
                            <li>Be honest about the full picture</li>
                            <li>Share your payoff plan (shows responsibility)</li>
                            <li>Discuss financial goals together</li>
                            <li>Agree on a budget approach</li>
                            <li>Set regular money dates (monthly check-in)</li>
                        </ul>
                        <h3>Legal Considerations</h3>
                        <ul>
                            <li>In most states, debt before marriage stays individual</li>
                            <li>Debt during marriage may be shared (community property states like CA)</li>
                            <li>Joint accounts mean joint liability</li>
                            <li>Cosigning makes you fully responsible</li>
                        </ul>
                        <div class="highlight">
                            <strong>Key:</strong> A partner with debt but a plan is better than a partner with no debt and no financial awareness. It's about the trajectory.
                        </div>
                    `
                }
            ],
            quiz: {
                questions: [
                    {
                        question: 'What is the typical APR on a payday loan?',
                        options: ['24-29%', '50-100%', '300-600%', '10-15%'],
                        correct: 2,
                        explanation: 'Payday loans typically have APRs of 300-600%, and 80% of borrowers end up rolling them over, making them one of the most predatory forms of lending.'
                    },
                    {
                        question: 'What is the best alternative to a payday loan in an emergency?',
                        options: ['Another payday loan', 'Credit union small emergency loan', 'Title loan', 'Rent-to-own'],
                        correct: 1,
                        explanation: 'Credit unions often offer small emergency loans at much lower rates. Many also have payday alternative loans (PALs) specifically designed to replace predatory options.'
                    },
                    {
                        question: 'What is the most important system for staying debt-free?',
                        options: ['Never using credit cards', 'Having an emergency fund and sinking funds for irregular expenses', 'Making more money', 'Paying cash for everything'],
                        correct: 1,
                        explanation: 'Most people fall back into debt because of emergencies or irregular expenses. An emergency fund and sinking funds prevent you from needing to borrow.'
                    }
                ]
            }
        },
        {
            id: 5,
            title: 'Advanced Debt Strategies',
            subtitle: 'For complex situations',
            topics: [
                {
                    id: 'debt-settlement',
                    title: 'Debt Settlement & Negotiation',
                    content: `
                        <h2>Debt Settlement & Negotiation</h2>
                        <h3>When Settlement Makes Sense</h3>
                        <ul>
                            <li>Debt is in collections or charged off</li>
                            <li>You have a lump sum available</li>
                            <li>Debt is old and past statute of limitations</li>
                            <li>You're considering bankruptcy as alternative</li>
                        </ul>
                        <h3>How to Negotiate</h3>
                        <ol>
                            <li>Know what you can afford to pay</li>
                            <li>Start by offering 25-30% of the balance</li>
                            <li>Expect to settle at 40-60%</li>
                            <li>Get the agreement IN WRITING before paying</li>
                            <li>Pay by cashier's check — never give bank access</li>
                        </ol>
                        <h3>Debt Settlement Companies</h3>
                        <ul>
                            <li><strong>Be very cautious:</strong> Many are scams</li>
                            <li>They charge 15-25% of enrolled debt</li>
                            <li>They tell you to stop paying (hurts credit)</li>
                            <li>You can negotiate yourself for free</li>
                        </ul>
                        <h3>Tax Implications</h3>
                        <ul>
                            <li>Forgiven debt over $600 is taxable income</li>
                            <li>You'll receive a 1099-C form</li>
                            <li>Exception: If you're insolvent (debts > assets)</li>
                        </ul>
                        <div class="highlight">
                            <strong>DIY First:</strong> Try negotiating yourself before paying a settlement company. The scripts are simple and you keep the fee savings.
                        </div>
                    `
                },
                {
                    id: 'bankruptcy-basics',
                    title: 'Understanding Bankruptcy',
                    content: `
                        <h2>Understanding Bankruptcy</h2>
                        <h3>When Bankruptcy May Be the Right Choice</h3>
                        <ul>
                            <li>Debt is overwhelming and payoff timeline is 5+ years</li>
                            <li>Creditors are garnishing wages</li>
                            <li>You're facing foreclosure or repossession</li>
                            <li>Your quality of life is severely impacted</li>
                        </ul>
                        <h3>Chapter 7 (Liquidation)</h3>
                        <ul>
                            <li>Most debts are eliminated entirely</li>
                            <li>Must pass income test (means test)</li>
                            <li>Takes 3-6 months</li>
                            <li>Stays on credit report for 10 years</li>
                            <li>May lose some assets (varies by state exemptions)</li>
                        </ul>
                        <h3>Chapter 13 (Reorganization)</h3>
                        <ul>
                            <li>3-5 year repayment plan</li>
                            <li>Keep your assets</li>
                            <li>Stays on credit report for 7 years</li>
                            <li>Must have regular income</li>
                        </ul>
                        <h3>What Bankruptcy Doesn't Erase</h3>
                        <ul>
                            <li>Most student loans (with rare exceptions)</li>
                            <li>Tax debt (recent taxes)</li>
                            <li>Child support and alimony</li>
                            <li>Fraud-related debts</li>
                        </ul>
                        <h3>Life After Bankruptcy</h3>
                        <ul>
                            <li>You CAN rebuild credit (secured cards, patience)</li>
                            <li>Many people see improved credit within 1-2 years</li>
                            <li>Fresh start can be life-changing</li>
                        </ul>
                        <div class="highlight">
                            <strong>No Shame:</strong> Bankruptcy is a legal tool, not a moral failing. Corporations use it strategically. It exists to give people a fresh start.
                        </div>
                    `
                },
                {
                    id: 'credit-after-debt',
                    title: 'Rebuilding After Debt',
                    content: `
                        <h2>Rebuilding After Debt</h2>
                        <h3>The Fresh Start Plan</h3>
                        <ol>
                            <li><strong>Month 1:</strong> Build $1,000 emergency fund</li>
                            <li><strong>Month 2-3:</strong> Get a secured credit card</li>
                            <li><strong>Month 3+:</strong> Use card for small charges, pay in full monthly</li>
                            <li><strong>Month 6:</strong> Check credit score, ensure accuracy</li>
                            <li><strong>Year 1:</strong> Apply for regular credit card if eligible</li>
                        </ol>
                        <h3>New Rules for New Life</h3>
                        <ul>
                            <li>Never carry a credit card balance again</li>
                            <li>Maintain emergency fund always</li>
                            <li>Use sinking funds for irregular expenses</li>
                            <li>Monthly budget reviews (15 minutes)</li>
                            <li>Automatic savings on every payday</li>
                        </ul>
                        <h3>Celebrate Your Progress</h3>
                        <ul>
                            <li>Debt-free date: Mark it, celebrate it</li>
                            <li>Track your net worth monthly (watch it grow!)</li>
                            <li>Share your story (you'll inspire others)</li>
                        </ul>
                        <div class="highlight">
                            <strong>You Did It:</strong> Getting out of debt is one of the hardest financial accomplishments. Everything after this is building—and you've proven you can do hard things.
                        </div>
                    `
                }
            ],
            quiz: {
                questions: [
                    {
                        question: 'When negotiating debt settlement, what should you offer first?',
                        options: ['Full balance', '80% of balance', '25-30% of balance', '50%'],
                        correct: 2,
                        explanation: 'Start by offering 25-30% of the balance. Most settlements end up at 40-60%. Always get the agreement in writing before paying.'
                    },
                    {
                        question: 'How long does Chapter 7 bankruptcy stay on your credit report?',
                        options: ['3 years', '5 years', '7 years', '10 years'],
                        correct: 3,
                        explanation: 'Chapter 7 stays on your credit report for 10 years, while Chapter 13 stays for 7 years. However, your credit can start improving much sooner.'
                    },
                    {
                        question: 'What is the first step to rebuilding after becoming debt-free?',
                        options: ['Open multiple credit cards', 'Build a $1,000 emergency fund', 'Start investing aggressively', 'Buy a house'],
                        correct: 1,
                        explanation: 'Rebuild your emergency fund first to prevent falling back into debt. Then gradually rebuild credit with a secured card.'
                    }
                ]
            }
        }
    ]
};
