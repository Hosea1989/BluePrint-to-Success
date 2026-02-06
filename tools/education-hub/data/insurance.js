// Insurance Curriculum Data
const insuranceData = {
    id: 'insurance',
    title: 'Insurance & Risk Management',
    icon: '🛡️',
    description: 'Understand insurance types, how to choose coverage, and protect yourself from financial catastrophe.',
    whyItMatters: 'One major accident, illness, or lawsuit can wipe out everything you\'ve built. Insurance is the shield that protects your financial life.',
    graduationGoal: 'Understand all major insurance types and have appropriate coverage',
    difficulty: 'beginner',
    prerequisites: ['personalfinance'],
    learningObjectives: [
        'Understand different types of insurance and when you need them',
        'Choose appropriate coverage levels and deductibles',
        'Compare insurance policies and find the best rates',
        'File insurance claims effectively',
        'Protect your assets from major financial risks'
    ],
    relatedTracks: ['personalfinance', 'estateplanning', 'health'],
    resources: [
        { title: 'Insurance Information Institute', url: 'https://www.iii.org/' },
        { title: 'NAIC - Insurance Basics', url: 'https://content.naic.org/consumer_insurance_basics.htm' }
    ],
    levels: [
        {
            id: 1,
            title: 'Insurance Fundamentals',
            subtitle: 'How insurance works and why it matters',
            topics: [
                {
                    id: 'how-insurance-works',
                    title: 'How Insurance Actually Works',
                    content: `
                        <h2>How Insurance Actually Works</h2>
                        <h3>The Basic Concept</h3>
                        <p>Insurance = paying a small, predictable amount (premium) to protect against large, unpredictable losses.</p>
                        <div class="example">
                            <strong>Example:</strong> You pay $150/month for health insurance. If you need surgery costing $80,000, insurance covers most of it. Without insurance, you'd face financial ruin.
                        </div>
                        <h3>Key Terms</h3>
                        <ul>
                            <li><strong>Premium:</strong> Monthly/annual cost to maintain coverage</li>
                            <li><strong>Deductible:</strong> Amount you pay before insurance kicks in</li>
                            <li><strong>Copay:</strong> Fixed amount per service ($20 doctor visit)</li>
                            <li><strong>Coinsurance:</strong> Your percentage after deductible (e.g., you pay 20%)</li>
                            <li><strong>Out-of-Pocket Max:</strong> Your annual cap—after this, insurance pays 100%</li>
                            <li><strong>Claim:</strong> Request for insurance to pay for a covered loss</li>
                            <li><strong>Exclusion:</strong> What insurance specifically does NOT cover</li>
                        </ul>
                        <h3>The Trade-Off</h3>
                        <ul>
                            <li><strong>Higher premium</strong> = lower deductible = less you pay at time of loss</li>
                            <li><strong>Lower premium</strong> = higher deductible = more you pay at time of loss</li>
                        </ul>
                        <div class="highlight">
                            <strong>Rule of Thumb:</strong> Insure against catastrophic losses (house fire, cancer, lawsuit). Self-insure small losses (cracked phone screen, minor fender bender).
                        </div>
                    `
                },
                {
                    id: 'insurance-types-overview',
                    title: 'Types of Insurance You Need',
                    content: `
                        <h2>Types of Insurance You Need</h2>
                        <h3>Essential (Must-Have)</h3>
                        <ul>
                            <li><strong>Health Insurance:</strong> Medical bankruptcy is the #1 cause in America</li>
                            <li><strong>Auto Insurance:</strong> Legally required in most states</li>
                            <li><strong>Renters Insurance:</strong> $15-20/month protects your belongings</li>
                            <li><strong>Homeowners Insurance:</strong> Required by mortgage lender</li>
                        </ul>
                        <h3>Important (Situational)</h3>
                        <ul>
                            <li><strong>Life Insurance:</strong> If someone depends on your income</li>
                            <li><strong>Disability Insurance:</strong> Protects your income if you can't work</li>
                            <li><strong>Umbrella Insurance:</strong> Extra liability protection beyond standard policies</li>
                        </ul>
                        <h3>Usually Skip</h3>
                        <ul>
                            <li><strong>Extended warranties:</strong> Rarely worth it (especially electronics)</li>
                            <li><strong>Flight insurance:</strong> Credit cards often include this</li>
                            <li><strong>Cancer/disease-specific insurance:</strong> Health insurance should cover</li>
                            <li><strong>Rental car insurance:</strong> Check if auto policy already covers</li>
                        </ul>
                        <div class="highlight">
                            <strong>Priority Order:</strong> Health → Auto → Renters/Homeowners → Disability → Life → Umbrella. Don't over-insure small risks or under-insure big ones.
                        </div>
                    `
                },
                {
                    id: 'shopping-insurance',
                    title: 'How to Shop for Insurance',
                    content: `
                        <h2>How to Shop for Insurance</h2>
                        <h3>The Process</h3>
                        <ol>
                            <li><strong>Determine coverage needs</strong> (what are you protecting?)</li>
                            <li><strong>Get 3-5 quotes</strong> (prices vary dramatically)</li>
                            <li><strong>Compare apples to apples</strong> (same coverage levels)</li>
                            <li><strong>Check company ratings</strong> (AM Best, J.D. Power)</li>
                            <li><strong>Read the exclusions</strong> (what's NOT covered matters)</li>
                        </ol>
                        <h3>Ways to Save</h3>
                        <ul>
                            <li><strong>Bundle:</strong> Same company for auto + renters = 10-25% discount</li>
                            <li><strong>Higher deductible:</strong> Raise deductible from $500 to $1,000 to lower premium</li>
                            <li><strong>Shop annually:</strong> Loyalty doesn't pay—rates change</li>
                            <li><strong>Ask about discounts:</strong> Good student, safe driver, paperless, autopay</li>
                            <li><strong>Use independent agents:</strong> They compare multiple companies for you</li>
                        </ul>
                        <h3>Filing Claims</h3>
                        <ul>
                            <li>Document everything (photos, police reports, receipts)</li>
                            <li>File promptly (most policies have time limits)</li>
                            <li>Know that small claims may raise your rates</li>
                            <li>Consider paying small losses out-of-pocket</li>
                        </ul>
                        <div class="highlight">
                            <strong>Annual Review:</strong> Every year, review all policies. Life changes (marriage, kids, new car, new home) often require coverage updates.
                        </div>
                    `
                }
            ],
            quiz: {
                questions: [
                    {
                        question: 'What is a deductible?',
                        options: ['Your monthly payment', 'The amount you pay before insurance kicks in', 'The maximum insurance will pay', 'A tax deduction for insurance'],
                        correct: 1,
                        explanation: 'The deductible is the amount you pay out-of-pocket before insurance starts covering costs. Higher deductible = lower premium, and vice versa.'
                    },
                    {
                        question: 'Which insurance should almost everyone have?',
                        options: ['Cancer insurance', 'Flight insurance', 'Health, auto, and renters/homeowners', 'Extended warranties'],
                        correct: 2,
                        explanation: 'Health, auto, and renters/homeowners insurance protect against the most common catastrophic financial losses.'
                    },
                    {
                        question: 'What is the easiest way to save on insurance?',
                        options: ['Never file claims', 'Get quotes from multiple companies and bundle policies', 'Choose the cheapest option always', 'Skip coverage you might need'],
                        correct: 1,
                        explanation: 'Shopping around (prices vary widely) and bundling multiple policies with one company can save 10-25% or more.'
                    }
                ]
            }
        },
        {
            id: 2,
            title: 'Health & Auto Insurance',
            subtitle: 'Your two most important policies',
            topics: [
                {
                    id: 'health-insurance',
                    title: 'Health Insurance Deep Dive',
                    content: `
                        <h2>Health Insurance Deep Dive</h2>
                        <h3>Plan Types</h3>
                        <ul>
                            <li><strong>HMO:</strong> Must use in-network, need referrals, lowest cost</li>
                            <li><strong>PPO:</strong> More flexibility, see specialists without referral, higher cost</li>
                            <li><strong>EPO:</strong> In-network only but no referrals needed</li>
                            <li><strong>HDHP + HSA:</strong> High deductible, but triple tax advantage with HSA</li>
                        </ul>
                        <h3>The HSA Advantage</h3>
                        <ul>
                            <li>Contributions are tax-deductible</li>
                            <li>Growth is tax-free</li>
                            <li>Withdrawals for medical expenses are tax-free</li>
                            <li>Rolls over year after year (unlike FSA)</li>
                            <li>After 65, works like a regular retirement account</li>
                        </ul>
                        <h3>Getting Coverage</h3>
                        <ul>
                            <li><strong>Employer:</strong> Most common, employer pays portion</li>
                            <li><strong>Marketplace:</strong> HealthCare.gov, may get subsidies</li>
                            <li><strong>Medicaid:</strong> Low-income, free or very low cost</li>
                            <li><strong>Medicare:</strong> Age 65+</li>
                            <li><strong>Parent's plan:</strong> Until age 26</li>
                        </ul>
                        <div class="highlight">
                            <strong>If Young & Healthy:</strong> Consider HDHP + HSA. Low premiums, and you build a tax-free medical savings account that can become a retirement powerhouse.
                        </div>
                    `
                },
                {
                    id: 'auto-insurance',
                    title: 'Auto Insurance Explained',
                    content: `
                        <h2>Auto Insurance Explained</h2>
                        <h3>Coverage Types</h3>
                        <ul>
                            <li><strong>Liability:</strong> Covers damage YOU cause to others (required)</li>
                            <li><strong>Collision:</strong> Covers your car in an accident</li>
                            <li><strong>Comprehensive:</strong> Covers theft, weather, vandalism</li>
                            <li><strong>Uninsured Motorist:</strong> Protects you if other driver has no insurance</li>
                            <li><strong>Medical Payments:</strong> Covers medical bills from accident</li>
                        </ul>
                        <h3>How Much Coverage?</h3>
                        <ul>
                            <li>State minimum is NOT enough — one accident can exceed it</li>
                            <li>Recommended: 100/300/100 ($100K per person, $300K per accident, $100K property)</li>
                            <li>Drop collision/comprehensive if car value < $5,000</li>
                        </ul>
                        <h3>Ways to Lower Your Rate</h3>
                        <ul>
                            <li>Shop around every 6-12 months</li>
                            <li>Raise deductible to $1,000</li>
                            <li>Bundle with renters/homeowners</li>
                            <li>Ask about safe driver, good student, low-mileage discounts</li>
                            <li>Consider usage-based programs</li>
                            <li>Maintain good credit (affects rates in most states)</li>
                        </ul>
                        <div class="highlight">
                            <strong>After an Accident:</strong> Don't admit fault. Exchange info. Take photos. File police report. Contact YOUR insurance company first.
                        </div>
                    `
                },
                {
                    id: 'renters-insurance',
                    title: 'Renters Insurance: The Best Deal',
                    content: `
                        <h2>Renters Insurance: The Best Deal</h2>
                        <h3>What It Covers</h3>
                        <ul>
                            <li><strong>Personal property:</strong> Theft, fire, water damage to YOUR stuff</li>
                            <li><strong>Liability:</strong> If someone is injured in your apartment</li>
                            <li><strong>Additional living expenses:</strong> Hotel costs if apartment is uninhabitable</li>
                            <li><strong>Off-premises:</strong> Laptop stolen from car? Covered.</li>
                        </ul>
                        <h3>The Cost</h3>
                        <div class="example">
                            Average: $15-20/month for $30,000+ in coverage<br>
                            That's less than a streaming subscription to protect everything you own.
                        </div>
                        <h3>What It Doesn't Cover</h3>
                        <ul>
                            <li>Floods (separate policy needed)</li>
                            <li>Earthquakes (separate rider/policy)</li>
                            <li>Your roommate's stuff (they need their own policy)</li>
                            <li>Your car (that's auto insurance)</li>
                        </ul>
                        <h3>How to Get It</h3>
                        <ol>
                            <li>Inventory your belongings (take photos/video)</li>
                            <li>Estimate total replacement value</li>
                            <li>Choose replacement cost coverage (NOT actual cash value)</li>
                            <li>Bundle with auto for discount</li>
                        </ol>
                        <div class="highlight">
                            <strong>No Brainer:</strong> For $180/year, renters insurance covers tens of thousands in belongings AND liability. If you don't have it, get it today.
                        </div>
                    `
                }
            ],
            quiz: {
                questions: [
                    {
                        question: 'What is the triple tax advantage of an HSA?',
                        options: ['Three tax deductions per year', 'Tax-deductible contributions, tax-free growth, tax-free medical withdrawals', 'Three family members can use it', 'You get 3x the tax refund'],
                        correct: 1,
                        explanation: 'HSAs are the only account with a triple tax advantage: tax-deductible going in, tax-free growth, and tax-free withdrawals for medical expenses.'
                    },
                    {
                        question: 'What auto insurance coverage level is recommended?',
                        options: ['State minimum only', '100/300/100', 'Liability only', 'The cheapest available'],
                        correct: 1,
                        explanation: '100/300/100 provides strong protection: $100K per person, $300K per accident, $100K property damage. State minimums are often dangerously low.'
                    },
                    {
                        question: 'How much does renters insurance typically cost?',
                        options: ['$100-200/month', '$15-20/month', '$50-75/month', '$200+/month'],
                        correct: 1,
                        explanation: 'Renters insurance averages $15-20/month for $30,000+ in coverage—one of the best deals in personal finance.'
                    }
                ]
            }
        },
        {
            id: 3,
            title: 'Life & Disability Insurance',
            subtitle: 'Protecting your income and loved ones',
            topics: [
                {
                    id: 'life-insurance',
                    title: 'Life Insurance Explained',
                    content: `
                        <h2>Life Insurance Explained</h2>
                        <h3>Do You Need It?</h3>
                        <ul>
                            <li><strong>Yes if:</strong> Someone depends on your income (spouse, kids, aging parents)</li>
                            <li><strong>Yes if:</strong> You have debts a co-signer would inherit</li>
                            <li><strong>Maybe not if:</strong> You're single with no dependents</li>
                        </ul>
                        <h3>Term vs. Whole Life</h3>
                        <ul>
                            <li><strong>Term Life:</strong> Coverage for set period (20-30 years), affordable, straightforward</li>
                            <li><strong>Whole Life:</strong> Coverage for life, builds cash value, 5-10x more expensive</li>
                        </ul>
                        <h3>Term Life Is Almost Always the Right Choice</h3>
                        <ul>
                            <li>10-20x cheaper than whole life</li>
                            <li>Cover the years dependents need you most</li>
                            <li>Invest the premium difference yourself</li>
                            <li>Simple and transparent</li>
                        </ul>
                        <h3>How Much Coverage?</h3>
                        <ul>
                            <li>Rule of thumb: 10-12x your annual income</li>
                            <li>Factor in: mortgage payoff, kids' education, spouse's needs</li>
                            <li>Example: $75K income → $750K-$900K policy</li>
                            <li>$500K 20-year term for healthy 30-year-old: ~$25-30/month</li>
                        </ul>
                        <div class="highlight">
                            <strong>"Buy term and invest the rest"</strong> — this is the advice most financial experts agree on. Don't let an insurance agent upsell you whole life.
                        </div>
                    `
                },
                {
                    id: 'disability-insurance',
                    title: 'Disability Insurance: Protecting Your Income',
                    content: `
                        <h2>Disability Insurance</h2>
                        <h3>The Overlooked Risk</h3>
                        <ul>
                            <li>1 in 4 workers becomes disabled before retirement</li>
                            <li>Average disability lasts 2.5 years</li>
                            <li>Your ability to earn is your biggest asset</li>
                            <li>Most people insure their car but not their income</li>
                        </ul>
                        <h3>Types</h3>
                        <ul>
                            <li><strong>Short-term disability (STD):</strong> Covers 3-6 months, often employer-provided</li>
                            <li><strong>Long-term disability (LTD):</strong> Covers years/until retirement, critical to have</li>
                            <li><strong>Social Security Disability:</strong> Government program, hard to qualify, takes months</li>
                        </ul>
                        <h3>What to Look For</h3>
                        <ul>
                            <li><strong>Own-occupation:</strong> Pays if you can't do YOUR job (vs. ANY job)</li>
                            <li><strong>Benefit period:</strong> To age 65 is ideal</li>
                            <li><strong>Elimination period:</strong> 90 days is standard (cheaper than 30-day)</li>
                            <li><strong>Coverage amount:</strong> 60-70% of pre-tax income</li>
                        </ul>
                        <div class="highlight">
                            <strong>Check Your Benefits:</strong> Many employers offer basic LTD. Check if it's "own-occupation" and if the benefit amount is enough. You may need supplemental coverage.
                        </div>
                    `
                }
            ],
            quiz: {
                questions: [
                    {
                        question: 'Which type of life insurance do most experts recommend?',
                        options: ['Whole life', 'Universal life', 'Term life', 'Variable life'],
                        correct: 2,
                        explanation: 'Term life insurance is 10-20x cheaper than whole life and covers you during the years you need it most. "Buy term and invest the rest" is the standard advice.'
                    },
                    {
                        question: 'What percentage of workers become disabled before retirement?',
                        options: ['1 in 100', '1 in 20', '1 in 4', '1 in 2'],
                        correct: 2,
                        explanation: '1 in 4 workers becomes disabled before retirement, yet most people don\'t have disability insurance. Your income is your most valuable asset.'
                    }
                ]
            }
        },
        {
            id: 4,
            title: 'Home & Specialty Insurance',
            subtitle: 'Protecting your property and assets',
            topics: [
                {
                    id: 'homeowners-insurance',
                    title: 'Homeowners Insurance',
                    content: `
                        <h2>Homeowners Insurance</h2>
                        <h3>What It Covers</h3>
                        <ul>
                            <li><strong>Dwelling:</strong> Structure of your home</li>
                            <li><strong>Personal property:</strong> Your belongings inside</li>
                            <li><strong>Liability:</strong> If someone is injured on your property</li>
                            <li><strong>Additional living expenses:</strong> Temporary housing if home is damaged</li>
                            <li><strong>Other structures:</strong> Detached garage, fence, shed</li>
                        </ul>
                        <h3>What It Typically Doesn't Cover</h3>
                        <ul>
                            <li>Floods (need separate flood insurance)</li>
                            <li>Earthquakes (need separate rider)</li>
                            <li>Maintenance issues (gradual damage)</li>
                            <li>Sewer backups (need rider)</li>
                        </ul>
                        <h3>How Much Coverage</h3>
                        <ul>
                            <li>Dwelling: Enough to REBUILD your home (not market value)</li>
                            <li>Personal property: 50-70% of dwelling coverage</li>
                            <li>Liability: At least $300K (consider umbrella for more)</li>
                        </ul>
                        <h3>Saving Money</h3>
                        <ul>
                            <li>Raise deductible to $1,000-2,500</li>
                            <li>Install security system and smoke detectors</li>
                            <li>Bundle with auto insurance</li>
                            <li>Shop around every 2-3 years</li>
                        </ul>
                        <div class="highlight">
                            <strong>Critical:</strong> Do a home inventory. Take photos/videos of every room and valuable item. Store in cloud. If disaster strikes, you'll be glad you did.
                        </div>
                    `
                },
                {
                    id: 'umbrella-insurance',
                    title: 'Umbrella Insurance',
                    content: `
                        <h2>Umbrella Insurance</h2>
                        <h3>What Is It?</h3>
                        <p>Extra liability coverage that kicks in AFTER your auto or homeowners policy limits are exhausted.</p>
                        <h3>Why You Might Need It</h3>
                        <ul>
                            <li>You have assets worth protecting (home, savings, investments)</li>
                            <li>You could be sued for more than your policy limits</li>
                            <li>You have a pool, trampoline, or dog (liability risks)</li>
                            <li>You're a landlord</li>
                            <li>You have teenage drivers</li>
                        </ul>
                        <h3>The Cost</h3>
                        <div class="example">
                            $1 million umbrella policy: $150-300/year<br>
                            $2 million policy: $200-400/year<br>
                            One of the cheapest forms of insurance per dollar of coverage.
                        </div>
                        <h3>What It Covers</h3>
                        <ul>
                            <li>Auto accident injuries exceeding your auto policy limit</li>
                            <li>Liability from property you own</li>
                            <li>Defamation, libel, slander lawsuits</li>
                            <li>Legal defense costs</li>
                        </ul>
                        <div class="highlight">
                            <strong>Rule:</strong> Once your net worth exceeds $300K, consider umbrella insurance. It's incredibly cheap for the protection it provides.
                        </div>
                    `
                }
            ],
            quiz: {
                questions: [
                    {
                        question: 'What does homeowners insurance typically NOT cover?',
                        options: ['Fire damage', 'Theft', 'Floods and earthquakes', 'Liability'],
                        correct: 2,
                        explanation: 'Floods and earthquakes require separate policies or riders. This is the most common gap in homeowners insurance.'
                    },
                    {
                        question: 'How much does a $1 million umbrella policy typically cost?',
                        options: ['$1,000-2,000/year', '$150-300/year', '$500-800/year', '$50/year'],
                        correct: 1,
                        explanation: 'Umbrella insurance is one of the best deals in insurance—$1 million in extra liability coverage for just $150-300/year.'
                    }
                ]
            }
        },
        {
            id: 5,
            title: 'Insurance Strategy',
            subtitle: 'Optimizing your total coverage',
            topics: [
                {
                    id: 'insurance-audit',
                    title: 'Running an Insurance Audit',
                    content: `
                        <h2>Running an Insurance Audit</h2>
                        <h3>Annual Review Checklist</h3>
                        <ol>
                            <li>List all current policies and costs</li>
                            <li>Review coverage amounts vs. current needs</li>
                            <li>Check for gaps (new assets? Life changes?)</li>
                            <li>Compare rates (get 3+ quotes)</li>
                            <li>Review deductibles (can you afford them?)</li>
                            <li>Check beneficiaries are current</li>
                        </ol>
                        <h3>Life Events That Require Updates</h3>
                        <ul>
                            <li>Marriage or divorce</li>
                            <li>Having children</li>
                            <li>Buying a home</li>
                            <li>Starting a business</li>
                            <li>Significant income change</li>
                            <li>Major purchase or asset change</li>
                        </ul>
                        <h3>Common Mistakes</h3>
                        <ul>
                            <li>Being underinsured to save on premiums</li>
                            <li>Not updating beneficiaries after life changes</li>
                            <li>Paying for coverage you don't need</li>
                            <li>Not shopping around (loyalty costs money)</li>
                            <li>Skipping renters or disability insurance</li>
                        </ul>
                        <div class="highlight">
                            <strong>Schedule It:</strong> Put an annual insurance review on your calendar. 30 minutes once a year can save you thousands and prevent gaps.
                        </div>
                    `
                },
                {
                    id: 'insurance-scams',
                    title: 'Avoiding Insurance Mistakes & Scams',
                    content: `
                        <h2>Avoiding Insurance Mistakes & Scams</h2>
                        <h3>Red Flags</h3>
                        <ul>
                            <li>Agent pushes whole life insurance aggressively (they earn bigger commissions)</li>
                            <li>Pressure to buy "credit life insurance" at bank</li>
                            <li>Mandatory arbitration clauses hidden in fine print</li>
                            <li>"Guaranteed issue" life insurance (usually terrible rates)</li>
                            <li>Extended warranties pushed at checkout</li>
                        </ul>
                        <h3>Common Over-Insurance</h3>
                        <ul>
                            <li>Collision on a car worth less than $5,000</li>
                            <li>Extended warranties on electronics</li>
                            <li>Mortgage life insurance (term life is cheaper)</li>
                            <li>Pet insurance for minor costs (consider self-insuring)</li>
                        </ul>
                        <h3>Common Under-Insurance</h3>
                        <ul>
                            <li>No renters insurance (most common gap)</li>
                            <li>No disability insurance (your income IS your biggest asset)</li>
                            <li>Auto liability at state minimums (one accident exceeds it)</li>
                            <li>No life insurance when you have dependents</li>
                        </ul>
                        <div class="highlight">
                            <strong>The Right Amount:</strong> Insure what would be catastrophic. Self-insure what you can absorb. Skip what's unlikely or low-impact.
                        </div>
                    `
                }
            ],
            quiz: {
                questions: [
                    {
                        question: 'How often should you review your insurance coverage?',
                        options: ['Only when buying a new policy', 'Every 5 years', 'Annually and after major life events', 'Never — set it and forget it'],
                        correct: 2,
                        explanation: 'Review annually and after major life events (marriage, kids, home purchase). Rates change, needs change, and gaps can develop.'
                    },
                    {
                        question: 'What is the most commonly skipped insurance?',
                        options: ['Auto insurance', 'Renters insurance and disability insurance', 'Homeowners insurance', 'Health insurance'],
                        correct: 1,
                        explanation: 'Renters insurance ($15-20/month) and disability insurance are the most commonly skipped, despite protecting against major financial risks.'
                    }
                ]
            }
        }
    ]
};
