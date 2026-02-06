// Family & Life Planning Curriculum Data
const familyplanningData = {
    id: 'familyplanning',
    title: 'Family & Life Planning',
    icon: '👨‍👩‍👧',
    description: 'Navigate family finances, plan for children, manage relationships and money, and build a secure future together.',
    graduationGoal: 'Make confident financial and life decisions for yourself and your family',
    difficulty: 'beginner',
    prerequisites: ['personalfinance'],
    learningObjectives: [
        'Plan financially for having children',
        'Manage money in relationships effectively',
        'Create family financial goals and budgets',
        'Plan for education and future expenses',
        'Build financial security for your family'
    ],
    relatedTracks: ['personalfinance', 'retirement', 'estateplanning', 'health'],
    resources: [
        { title: 'Smart About Money - Family Finances', url: 'https://www.smartaboutmoney.org/Topics/Family-Finances' }
    ],
    levels: [
        {
            id: 1,
            title: 'Relationships & Money',
            subtitle: 'The conversation no one teaches you to have',
            topics: [
                {
                    id: 'money-and-relationships',
                    title: 'Money & Relationships',
                    content: `
                        <h2>Money & Relationships</h2>

                        <h3>Why Money Is the #1 Relationship Stressor</h3>
                        <ul>
                            <li>Money is about values, control, security, and freedom — not just dollars</li>
                            <li>Different "money personalities" cause conflict (saver vs. spender, risk-averse vs. risk-taker)</li>
                            <li>Financial infidelity (hiding spending, secret accounts) is as damaging as other betrayals</li>
                            <li>Open communication about money is the foundation of a healthy partnership</li>
                        </ul>

                        <h3>The Money Talk — Before You Merge</h3>
                        <p>Before combining finances (or moving in together), discuss:</p>
                        <ul>
                            <li><strong>Income:</strong> What do you each earn? (No shame — just transparency)</li>
                            <li><strong>Debt:</strong> Student loans, credit cards, car loans — all of it</li>
                            <li><strong>Credit scores:</strong> This affects your ability to rent, buy a home, and get loans together</li>
                            <li><strong>Financial goals:</strong> Short-term and long-term — are they compatible?</li>
                            <li><strong>Spending habits:</strong> What does each person prioritize?</li>
                            <li><strong>Money history:</strong> How did your families handle money? What habits did you inherit?</li>
                        </ul>

                        <h3>Joint vs. Separate Finances</h3>
                        <ul>
                            <li><strong>Fully joint:</strong> Everything in one pot. Maximum transparency, can feel restrictive.</li>
                            <li><strong>Fully separate:</strong> Each person manages their own. More independence, harder to plan together.</li>
                            <li><strong>Hybrid (most popular):</strong> Joint account for shared expenses + individual accounts for personal spending. Best of both worlds.</li>
                        </ul>

                        <h3>Regular Money Dates</h3>
                        <ul>
                            <li>Schedule monthly "money dates" to review finances together</li>
                            <li>Review budget, upcoming expenses, progress toward goals</li>
                            <li>Keep it positive — celebrate wins, problem-solve challenges</li>
                            <li>No blaming — you're on the same team</li>
                        </ul>

                        <div class="highlight">
                            <strong>The Rule:</strong> Never make a financial decision over $[X] without discussing it together. Set your own threshold ($100, $200, $500) and stick to it. This one rule prevents most money fights.
                        </div>
                    `
                },
                {
                    id: 'marriage-finances',
                    title: 'Marriage & Financial Planning',
                    content: `
                        <h2>Marriage & Financial Planning</h2>

                        <h3>Pre-Marriage Financial Checklist</h3>
                        <ul>
                            <li>Full disclosure of all assets, debts, and income</li>
                            <li>Discuss and align on financial goals</li>
                            <li>Decide on joint/separate/hybrid account structure</li>
                            <li>Update beneficiary designations</li>
                            <li>Review insurance needs</li>
                            <li>Consider a prenuptial agreement (it's not unromantic — it's responsible)</li>
                        </ul>

                        <h3>Prenuptial Agreements</h3>
                        <ul>
                            <li><strong>What they do:</strong> Define how assets and debts are divided if the marriage ends</li>
                            <li><strong>Who needs one:</strong> Anyone with significant assets, a business, children from previous relationships, or unequal financial situations</li>
                            <li><strong>The reframe:</strong> A prenup is an insurance policy for your marriage — hope you never need it, smart to have it</li>
                            <li><strong>Both parties need separate attorneys</strong> for a prenup to be valid</li>
                        </ul>

                        <h3>Tax Implications of Marriage</h3>
                        <ul>
                            <li><strong>Filing status:</strong> Married Filing Jointly vs. Separately — run the numbers both ways</li>
                            <li><strong>Tax bracket changes:</strong> Combined income may push you into a higher bracket</li>
                            <li><strong>Deductions:</strong> Some deductions change when married</li>
                            <li><strong>Student loans:</strong> Income-driven repayment may be affected by combined income</li>
                        </ul>

                        <div class="highlight">
                            <strong>Before the Wedding:</strong> Have the money talk. Disclose everything. Set up your financial structure. Update your documents. It's not romantic, but it's the foundation for a partnership that lasts.
                        </div>
                    `
                }
            ],
            quiz: {
                questions: [
                    {
                        question: 'What is the most recommended approach for managing finances in a partnership?',
                        options: [
                            'One person controls all the money',
                            'Keep everything completely separate',
                            'A hybrid approach — joint account for shared expenses plus individual accounts for personal spending',
                            'Don\'t discuss money at all'
                        ],
                        correct: 2,
                        explanation: 'The hybrid approach (joint account for shared expenses + individual accounts for personal spending) is the most popular and often most effective, offering both transparency for shared goals and independence for personal spending.'
                    },
                    {
                        question: 'When should couples have "the money talk"?',
                        options: [
                            'After the wedding',
                            'Only when there\'s a financial crisis',
                            'Before combining finances — and then regularly through monthly "money dates"',
                            'Never — it\'s too awkward'
                        ],
                        correct: 2,
                        explanation: 'Financial discussions should happen before combining finances or moving in together, covering income, debt, credit scores, and goals. Ongoing monthly "money dates" keep you aligned and prevent surprises.'
                    }
                ]
            }
        },
        {
            id: 2,
            title: 'Planning for Children',
            subtitle: 'The financial reality of raising kids',
            topics: [
                {
                    id: 'cost-of-kids',
                    title: 'The Real Cost of Raising Children',
                    content: `
                        <h2>The Real Cost of Raising Children</h2>

                        <h3>By the Numbers</h3>
                        <ul>
                            <li><strong>USDA estimate:</strong> $233,000+ to raise a child to age 18 (2015 dollars — higher today)</li>
                            <li><strong>Does NOT include college</strong></li>
                            <li>That's roughly $12,000-$14,000 per year</li>
                        </ul>

                        <h3>Biggest Expenses</h3>
                        <ul>
                            <li><strong>Childcare:</strong> $10,000-$25,000/year (varies wildly by location and type)</li>
                            <li><strong>Housing:</strong> Need for more space increases housing costs</li>
                            <li><strong>Food:</strong> $2,000-$5,000/year per child</li>
                            <li><strong>Healthcare:</strong> Insurance premiums, copays, dental, vision</li>
                            <li><strong>Education:</strong> Supplies, activities, tutoring, private school (if applicable)</li>
                            <li><strong>Activities:</strong> Sports, music, camps — adds up fast</li>
                        </ul>

                        <h3>Financial Preparation Checklist</h3>
                        <ul>
                            <li>Build emergency fund to 6 months (3 months isn't enough with kids)</li>
                            <li>Review health insurance (add child, compare plans)</li>
                            <li>Start life insurance (term life — 10-12x your income)</li>
                            <li>Create/update your will and guardianship designations</li>
                            <li>Research childcare costs in your area NOW</li>
                            <li>Understand parental leave policies at your job</li>
                            <li>Start a baby fund 6-12 months before planned pregnancy</li>
                        </ul>

                        <div class="highlight">
                            <strong>Don't Wait Until It's "Perfect":</strong> There's never a "perfect" financial time to have kids. But being informed about the real costs and having a basic plan puts you ahead of most parents. The key is awareness, not perfection.
                        </div>
                    `
                },
                {
                    id: 'college-planning',
                    title: '529 Plans & College Savings',
                    content: `
                        <h2>529 Plans & College Savings</h2>

                        <h3>What Is a 529 Plan?</h3>
                        <ul>
                            <li>Tax-advantaged savings account designed for education expenses</li>
                            <li>Earnings grow tax-free</li>
                            <li>Withdrawals are tax-free when used for qualified education expenses</li>
                            <li>Can be used for K-12 tuition (up to $10,000/year) and college expenses</li>
                            <li>Recent change: unused 529 funds can now be rolled into a Roth IRA (up to $35,000 lifetime)</li>
                        </ul>

                        <h3>How to Start</h3>
                        <ul>
                            <li>Open an account through your state's plan (check for state tax deductions) or any state's plan</li>
                            <li>You control the account (the child is the beneficiary)</li>
                            <li>Can change the beneficiary to another family member</li>
                            <li>Anyone can contribute — great for grandparents' gifts</li>
                            <li>Even small amounts help — $50-$100/month adds up significantly over 18 years</li>
                        </ul>

                        <h3>Other Education Savings Options</h3>
                        <ul>
                            <li><strong>Coverdell ESA:</strong> More flexible investment options, $2,000/year limit</li>
                            <li><strong>UTMA/UGMA:</strong> Custodial accounts — less tax-advantaged, transfers to child at 18-21</li>
                            <li><strong>Roth IRA:</strong> Can withdraw contributions (not earnings) penalty-free for education</li>
                        </ul>

                        <h3>The Power of Starting Early</h3>
                        <div class="example">
                            <strong>Example:</strong> $100/month from birth to age 18 at 7% average return = ~$43,000. Start at age 10? Only ~$16,000. Starting early nearly triples your money.
                        </div>

                        <div class="highlight">
                            <strong>Prioritize Retirement:</strong> Don't sacrifice your retirement savings for your child's college fund. Your kids can get loans, scholarships, and work-study. You can't get a loan for retirement.
                        </div>
                    `
                }
            ],
            quiz: {
                questions: [
                    {
                        question: 'What is the approximate cost of raising a child to age 18 (not including college)?',
                        options: [
                            '$50,000',
                            '$100,000',
                            '$233,000+ according to USDA estimates',
                            '$500,000'
                        ],
                        correct: 2,
                        explanation: 'The USDA estimates it costs over $233,000 to raise a child to age 18, and this doesn\'t include college. The biggest expenses are childcare, housing, food, and healthcare.'
                    },
                    {
                        question: 'Should you prioritize your child\'s college savings over your own retirement savings?',
                        options: [
                            'Yes — education is more important',
                            'No — prioritize retirement because kids can get loans, scholarships, and work-study, but you can\'t get a loan for retirement',
                            'Save equally for both',
                            'Only save for college'
                        ],
                        correct: 1,
                        explanation: 'Always prioritize retirement savings. Your children have multiple options for funding education (loans, scholarships, work-study, grants), but there\'s no "retirement loan." Put on your own oxygen mask first.'
                    }
                ]
            }
        },
        {
            id: 3,
            title: 'Protecting Your Family',
            subtitle: 'Insurance, emergency planning, and safety nets',
            topics: [
                {
                    id: 'family-insurance',
                    title: 'Essential Family Insurance',
                    content: `
                        <h2>Essential Family Insurance</h2>

                        <h3>Life Insurance — Non-Negotiable for Parents</h3>
                        <ul>
                            <li><strong>Term life insurance:</strong> Affordable, covers you for a specific period (20-30 years)</li>
                            <li><strong>How much:</strong> 10-12x your annual income (covers income replacement while kids grow up)</li>
                            <li><strong>Both parents need it:</strong> Even a stay-at-home parent's contributions (childcare, household management) have significant monetary value</li>
                            <li><strong>Cost:</strong> A healthy 30-year-old can get $500,000 in term coverage for $20-$30/month</li>
                        </ul>

                        <h3>Disability Insurance</h3>
                        <ul>
                            <li>More likely to become disabled than to die before 65</li>
                            <li>Covers a portion of your income if you can't work</li>
                            <li>Employer plans typically cover 60% of salary</li>
                            <li>Consider supplemental coverage if your family depends on your income</li>
                        </ul>

                        <h3>Health Insurance</h3>
                        <ul>
                            <li>Adding a child to your plan — compare costs during open enrollment</li>
                            <li>CHIP if you don't qualify for employer coverage</li>
                            <li>HSA (Health Savings Account) if on a high-deductible plan — triple tax advantage</li>
                        </ul>

                        <h3>Umbrella Insurance</h3>
                        <ul>
                            <li>Extra liability coverage above auto and home insurance limits</li>
                            <li>$1-2 million in coverage for $200-$400/year</li>
                            <li>Protects your family's assets if you're sued</li>
                        </ul>

                        <div class="highlight">
                            <strong>If You Do Nothing Else:</strong> Get term life insurance. It's the single most important financial protection for your family. If something happens to you, it replaces your income so your family can survive and maintain their lives.
                        </div>
                    `
                },
                {
                    id: 'family-emergency-plan',
                    title: 'Family Emergency & Legal Planning',
                    content: `
                        <h2>Family Emergency & Legal Planning</h2>

                        <h3>Legal Documents Every Parent Needs</h3>
                        <ul>
                            <li><strong>Will:</strong> Names guardians for your children — THE most important reason to have a will</li>
                            <li><strong>Trust (optional but recommended):</strong> Controls when and how your children receive assets</li>
                            <li><strong>Healthcare directive:</strong> Medical decisions if you're incapacitated</li>
                            <li><strong>Power of attorney:</strong> Financial decisions if you're incapacitated</li>
                            <li><strong>Beneficiary designations:</strong> Updated on all accounts</li>
                        </ul>

                        <h3>The Guardian Decision</h3>
                        <ul>
                            <li>Choose someone who shares your values about raising children</li>
                            <li>Make sure they're willing and able</li>
                            <li>Name an alternate in case your first choice can't serve</li>
                            <li>Consider separating the guardian (raises the kids) from the trustee (manages the money)</li>
                            <li>Discuss your wishes with the chosen guardian</li>
                        </ul>

                        <h3>The Family Emergency Binder</h3>
                        <p>Create a binder (physical and digital) containing:</p>
                        <ul>
                            <li>All insurance policies and contact numbers</li>
                            <li>Bank and investment account information</li>
                            <li>Will, trust, and legal document locations</li>
                            <li>Login information for key accounts (use a password manager)</li>
                            <li>Monthly bills and payment information</li>
                            <li>Key contacts (attorney, accountant, financial advisor)</li>
                            <li>Children's medical information, school info, and routines</li>
                        </ul>

                        <div class="highlight">
                            <strong>The Question That Matters:</strong> If something happened to you tomorrow, would your family know where everything is, who to call, and what to do? If not, the emergency binder is your weekend project.
                        </div>
                    `
                }
            ],
            quiz: {
                questions: [
                    {
                        question: 'How much term life insurance do financial experts recommend for parents?',
                        options: [
                            '1-2x annual income',
                            '5x annual income',
                            '10-12x annual income',
                            '20x annual income'
                        ],
                        correct: 2,
                        explanation: '10-12x your annual income is the general recommendation. This provides enough to replace your income for a decade or more while your children grow up and your family adjusts.'
                    },
                    {
                        question: 'What is the most important reason for parents to have a will?',
                        options: [
                            'To distribute their stuff',
                            'To reduce taxes',
                            'To name guardians for their children — without a will, the court decides who raises your kids',
                            'It\'s not really important'
                        ],
                        correct: 2,
                        explanation: 'For parents, the most critical function of a will is naming guardians for minor children. Without a will, the court decides who raises your kids — and it may not be who you would choose.'
                    }
                ]
            }
        },
        {
            id: 4,
            title: 'Teaching Kids About Money',
            subtitle: 'Raising financially literate children',
            topics: [
                {
                    id: 'kids-and-money',
                    title: 'Age-Appropriate Financial Education',
                    content: `
                        <h2>Age-Appropriate Financial Education</h2>

                        <h3>Ages 3-5: The Basics</h3>
                        <ul>
                            <li>Money is used to buy things</li>
                            <li>Coins and bills have different values</li>
                            <li>You have to wait and save for things you want</li>
                            <li>Use a clear piggy bank so they can see money grow</li>
                        </ul>

                        <h3>Ages 6-10: Building Habits</h3>
                        <ul>
                            <li>Give an allowance tied (or not) to chores — both approaches have merit</li>
                            <li>Introduce the 3-jar system: Save, Spend, Give</li>
                            <li>Let them make spending decisions (and experience regret!)</li>
                            <li>Open a savings account in their name</li>
                            <li>Explain what you're doing at the store (comparing prices, using coupons)</li>
                        </ul>

                        <h3>Ages 11-14: Real-World Skills</h3>
                        <ul>
                            <li>Introduce budgeting with their allowance or earnings</li>
                            <li>Explain needs vs. wants</li>
                            <li>Show them compound interest with real examples</li>
                            <li>Involve them in family financial discussions (age-appropriately)</li>
                            <li>Let them earn money (lawn mowing, babysitting, etc.)</li>
                        </ul>

                        <h3>Ages 15-18: Preparing for Independence</h3>
                        <ul>
                            <li>Open a checking account with a debit card</li>
                            <li>Teach them about credit (maybe an authorized user on your card)</li>
                            <li>Discuss student loans and college costs realistically</li>
                            <li>Help them file taxes on their first job earnings</li>
                            <li>Introduce investing concepts (even with small amounts)</li>
                            <li>Discuss the real cost of living independently</li>
                        </ul>

                        <div class="highlight">
                            <strong>The Best Teacher:</strong> Let kids make small financial mistakes while the stakes are low. A 10-year-old who blows their allowance on candy and has nothing left for the toy they wanted learns more from that experience than from any lecture.
                        </div>
                    `
                },
                {
                    id: 'breaking-money-cycles',
                    title: 'Breaking Generational Money Cycles',
                    content: `
                        <h2>Breaking Generational Money Cycles</h2>

                        <h3>Patterns That Pass Down</h3>
                        <ul>
                            <li><strong>Money silence:</strong> "We don't talk about money" — creates shame and ignorance</li>
                            <li><strong>Scarcity mindset:</strong> "We can never afford anything" — creates fear and hoarding</li>
                            <li><strong>Overspending:</strong> "You only live once" — creates debt and instability</li>
                            <li><strong>Financial dependence:</strong> Never learning to manage money independently</li>
                            <li><strong>Status spending:</strong> Spending to appear wealthy instead of building wealth</li>
                        </ul>

                        <h3>Breaking the Cycle</h3>
                        <ul>
                            <li><strong>Talk about money openly:</strong> Normalize financial conversations</li>
                            <li><strong>Model healthy behavior:</strong> Kids learn more from what you do than what you say</li>
                            <li><strong>Be honest about mistakes:</strong> "I made a financial mistake and here's what I learned"</li>
                            <li><strong>Create abundance mindset:</strong> "We choose to spend our money on X instead of Y" (not "we can't afford Y")</li>
                            <li><strong>Celebrate saving:</strong> Make saving and investing as exciting as spending</li>
                        </ul>

                        <h3>Building Generational Wealth</h3>
                        <ul>
                            <li>Start investing for your children (custodial accounts, 529 plans)</li>
                            <li>Teach kids about investing as early as possible</li>
                            <li>Build assets that can be passed down</li>
                            <li>Estate planning ensures your wealth transfers efficiently</li>
                            <li>Financial literacy is the greatest inheritance you can give</li>
                        </ul>

                        <div class="highlight">
                            <strong>You Can Be the One:</strong> Every family's financial trajectory changes when one person decides to learn, plan, and do things differently. You don't need to come from money to build it. You just need to start.
                        </div>
                    `
                }
            ],
            quiz: {
                questions: [
                    {
                        question: 'What is the "3-jar system" for teaching kids about money?',
                        options: [
                            'Save, Invest, and Donate',
                            'Save, Spend, and Give — teaching kids to allocate money into three categories',
                            'Checking, Savings, and Credit',
                            'Food, Fun, and Future'
                        ],
                        correct: 1,
                        explanation: 'The 3-jar system teaches children to divide their money into Save (for future goals), Spend (for current wants), and Give (for helping others). It builds foundational money habits from an early age.'
                    },
                    {
                        question: 'What is the most effective way kids learn about money?',
                        options: [
                            'Lectures about saving',
                            'Reading books about finance',
                            'Making their own small financial decisions (and experiencing the consequences)',
                            'Watching educational videos'
                        ],
                        correct: 2,
                        explanation: 'Children learn best about money through direct experience — making their own spending and saving decisions with real money and experiencing real consequences (like running out of allowance). This experiential learning is far more powerful than any lecture.'
                    }
                ]
            }
        },
        {
            id: 5,
            title: 'Life Transitions',
            subtitle: 'Navigating divorce, loss, and major changes',
            topics: [
                {
                    id: 'divorce-finances',
                    title: 'Financial Survival Guide for Divorce',
                    content: `
                        <h2>Financial Survival Guide for Divorce</h2>

                        <h3>Before Filing</h3>
                        <ul>
                            <li><strong>Gather financial documents:</strong> Tax returns, bank statements, investment accounts, property records, debt records</li>
                            <li><strong>Know your assets:</strong> Make a complete inventory of everything owned by both parties</li>
                            <li><strong>Establish independent credit:</strong> Open accounts in your name only if you don't already have them</li>
                            <li><strong>Build an emergency fund:</strong> You'll need money for legal fees, deposits, and living expenses</li>
                            <li><strong>Understand your budget:</strong> Know what it costs to live independently</li>
                        </ul>

                        <h3>During the Process</h3>
                        <ul>
                            <li><strong>Get a good attorney:</strong> This is not the time to DIY (unless truly amicable and simple)</li>
                            <li><strong>Understand community property vs. equitable distribution</strong> (depends on your state)</li>
                            <li><strong>Don't forget retirement accounts:</strong> 401(k)s, pensions, and IRAs are marital assets</li>
                            <li><strong>Consider tax implications:</strong> Some assets are worth more after-tax than others</li>
                            <li><strong>Update beneficiary designations</strong> immediately</li>
                        </ul>

                        <h3>After Divorce</h3>
                        <ul>
                            <li>Create a new budget based on single-income reality</li>
                            <li>Update all legal documents (will, POA, healthcare directive)</li>
                            <li>Close joint accounts and open individual ones</li>
                            <li>Review and update insurance (health, auto, home)</li>
                            <li>Rebuild your financial identity and plan</li>
                        </ul>

                        <div class="highlight">
                            <strong>Protect Yourself:</strong> Even if the divorce is amicable, protect your financial interests. Get professional advice. Too many people accept unfair settlements because they want it to be "over" — but the financial impact lasts much longer than the proceedings.
                        </div>
                    `
                },
                {
                    id: 'financial-fresh-start',
                    title: 'The Financial Fresh Start',
                    content: `
                        <h2>The Financial Fresh Start</h2>

                        <h3>After Any Major Life Change</h3>
                        <p>Whether it's divorce, death of a spouse, job loss, or a major move — the financial reset process is similar:</p>

                        <ol>
                            <li><strong>Assess:</strong> Where do you stand? (Income, expenses, assets, debts)</li>
                            <li><strong>Stabilize:</strong> Cover essentials first (housing, food, utilities, insurance)</li>
                            <li><strong>Plan:</strong> Create a new budget based on your new reality</li>
                            <li><strong>Protect:</strong> Update all legal and financial documents</li>
                            <li><strong>Build:</strong> Set new financial goals and work toward them</li>
                        </ol>

                        <h3>Dealing with Grief and Finances</h3>
                        <ul>
                            <li>Don't make major financial decisions in the first 6-12 months after a loss</li>
                            <li>Accept help from trusted family, friends, or professionals</li>
                            <li>Be wary of people who try to "help" with your money during vulnerable times</li>
                            <li>It's okay to not have it all figured out immediately</li>
                        </ul>

                        <h3>Building Financial Confidence</h3>
                        <ul>
                            <li>Take it one step at a time — you don't need to master everything overnight</li>
                            <li>Small wins build momentum (opened a new account, created a budget, saved $100)</li>
                            <li>Financial literacy courses (like this one!) build knowledge and confidence</li>
                            <li>Consider a fee-only financial advisor for complex situations</li>
                        </ul>

                        <div class="highlight">
                            <strong>You've Got This:</strong> Starting over financially is scary, but it's also an opportunity to build something better. You now know things you didn't know before. Use that knowledge to create the financial life you actually want.
                        </div>
                    `
                }
            ],
            quiz: {
                questions: [
                    {
                        question: 'What should you do financially BEFORE filing for divorce?',
                        options: [
                            'Close all joint accounts immediately',
                            'Gather financial documents, inventory all assets, establish independent credit, and build an emergency fund',
                            'Move all money to your personal account',
                            'Nothing — your lawyer will handle everything'
                        ],
                        correct: 1,
                        explanation: 'Before filing, you should gather all financial documents, make a complete inventory of assets and debts, establish credit in your own name, and build an emergency fund for legal fees and living expenses.'
                    },
                    {
                        question: 'How long should you wait after a major loss before making big financial decisions?',
                        options: [
                            'Make decisions immediately to move forward',
                            '1-2 weeks',
                            '6-12 months — to allow for clearer thinking after the initial grief and adjustment',
                            '5 years'
                        ],
                        correct: 2,
                        explanation: 'Financial experts recommend waiting 6-12 months after a major loss (death of spouse, divorce) before making significant financial decisions. Grief and stress impair judgment, and decisions made during this period are often regretted.'
                    }
                ]
            }
        }
    ]
};
