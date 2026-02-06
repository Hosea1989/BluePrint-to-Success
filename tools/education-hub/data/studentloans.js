// Student Loans Curriculum Data
const studentloansData = {
    id: 'studentloans',
    title: 'Student Loans & Education Funding',
    icon: '🎓',
    description: 'Navigate student loans, repayment options, forgiveness programs, and strategies to minimize education debt.',
    whyItMatters: 'Student loan debt totals $1.7 trillion in America. The average borrower owes $37,000. Understanding your options can save tens of thousands and years of payments.',
    graduationGoal: 'Have an optimized repayment strategy and know all your options',
    difficulty: 'beginner',
    prerequisites: ['personalfinance'],
    learningObjectives: [
        'Understand different types of student loans and their terms',
        'Choose the best repayment plan for your situation',
        'Navigate loan forgiveness and discharge programs',
        'Refinance student loans when appropriate',
        'Minimize total interest paid over the life of the loan'
    ],
    relatedTracks: ['debt', 'personalfinance', 'credit'],
    resources: [
        { title: 'Federal Student Aid', url: 'https://studentaid.gov/' },
        { title: 'Student Loan Borrower Assistance', url: 'https://www.studentloanborrowerassistance.org/' }
    ],
    levels: [
        {
            id: 1,
            title: 'Student Loan Basics',
            subtitle: 'Understanding what you owe and to whom',
            topics: [
                {
                    id: 'loan-types',
                    title: 'Federal vs. Private Loans',
                    content: `
                        <h2>Federal vs. Private Loans</h2>
                        <h3>Federal Student Loans</h3>
                        <ul>
                            <li>Come from the government (Department of Education)</li>
                            <li>Fixed interest rates (set annually by Congress)</li>
                            <li>Income-driven repayment options available</li>
                            <li>Forgiveness programs (PSLF, IDR forgiveness)</li>
                            <li>Deferment and forbearance options</li>
                            <li>No credit check for most (except PLUS loans)</li>
                        </ul>
                        <h3>Types of Federal Loans</h3>
                        <ul>
                            <li><strong>Direct Subsidized:</strong> Government pays interest while in school (based on financial need)</li>
                            <li><strong>Direct Unsubsidized:</strong> Interest accrues while in school</li>
                            <li><strong>Direct PLUS:</strong> For grad students or parents, credit check required</li>
                            <li><strong>Perkins:</strong> Discontinued but some still being repaid</li>
                        </ul>
                        <h3>Private Student Loans</h3>
                        <ul>
                            <li>From banks, credit unions, or online lenders</li>
                            <li>Variable OR fixed rates (often higher)</li>
                            <li>No income-driven repayment options</li>
                            <li>No forgiveness programs</li>
                            <li>Limited hardship options</li>
                            <li>Credit score and cosigner usually required</li>
                        </ul>
                        <div class="highlight">
                            <strong>Rule:</strong> Always exhaust federal loans BEFORE taking private loans. Federal loans have far more protections and flexible options.
                        </div>
                    `
                },
                {
                    id: 'know-your-loans',
                    title: 'Finding & Understanding Your Loans',
                    content: `
                        <h2>Finding & Understanding Your Loans</h2>
                        <h3>Step 1: Find All Your Loans</h3>
                        <ul>
                            <li><strong>Federal:</strong> Log into StudentAid.gov → My Aid</li>
                            <li><strong>Private:</strong> Check your credit report at AnnualCreditReport.com</li>
                            <li>Many people don't know exactly what they owe — find out today</li>
                        </ul>
                        <h3>Step 2: Document Each Loan</h3>
                        <ul>
                            <li>Loan servicer (who you pay)</li>
                            <li>Loan type (federal/private, subsidized/unsubsidized)</li>
                            <li>Interest rate</li>
                            <li>Current balance</li>
                            <li>Monthly payment</li>
                            <li>Repayment plan you're currently on</li>
                        </ul>
                        <h3>Understanding Interest</h3>
                        <div class="example">
                            $30,000 at 5% interest on standard 10-year plan:<br>
                            Monthly payment: $318<br>
                            Total paid: $38,184<br>
                            <strong>Interest cost: $8,184</strong>
                        </div>
                        <div class="highlight">
                            <strong>Know Your Servicer:</strong> Your loan servicer is who you pay monthly (Mohela, Nelnet, Aidvantage, etc.). They're different from the lender. If you have issues, call them.
                        </div>
                    `
                },
                {
                    id: 'grace-period',
                    title: 'Grace Period & Repayment Start',
                    content: `
                        <h2>Grace Period & Repayment Start</h2>
                        <h3>What Is the Grace Period?</h3>
                        <ul>
                            <li>6 months after graduating, leaving school, or dropping below half-time</li>
                            <li>No payments required during this period</li>
                            <li>Interest still accrues on unsubsidized loans!</li>
                        </ul>
                        <h3>Use the Grace Period Wisely</h3>
                        <ul>
                            <li>Set up your budget including loan payments</li>
                            <li>Log into StudentAid.gov and review all loans</li>
                            <li>Research repayment plans</li>
                            <li>Make interest-only payments if possible (prevents capitalization)</li>
                            <li>Set up autopay for 0.25% interest rate reduction</li>
                        </ul>
                        <h3>What Is Interest Capitalization?</h3>
                        <div class="example">
                            Your loan: $25,000<br>
                            Interest during school + grace period: $3,000<br>
                            After capitalization: <strong>$28,000 is your new balance</strong><br>
                            Now you pay interest on $28,000 instead of $25,000!
                        </div>
                        <div class="highlight">
                            <strong>Pro Tip:</strong> Even $25-50/month toward interest during school or grace period prevents capitalization and saves you thousands long-term.
                        </div>
                    `
                }
            ],
            quiz: {
                questions: [
                    {
                        question: 'Why should you exhaust federal loans before private loans?',
                        options: ['Federal loans have lower limits', 'Federal loans have more protections, repayment options, and forgiveness programs', 'Private loans are always better', 'It doesn\'t matter'],
                        correct: 1,
                        explanation: 'Federal loans offer income-driven repayment, forgiveness programs, deferment/forbearance, and fixed rates—protections that private loans don\'t have.'
                    },
                    {
                        question: 'Where can you find all your federal student loans?',
                        options: ['Your bank\'s website', 'StudentAid.gov', 'The IRS website', 'Your school\'s website'],
                        correct: 1,
                        explanation: 'StudentAid.gov shows all your federal student loans, servicers, balances, and interest rates in one place.'
                    },
                    {
                        question: 'What is interest capitalization?',
                        options: ['When interest rates go up', 'When unpaid interest is added to your principal balance', 'When you pay off interest early', 'A type of tax deduction'],
                        correct: 1,
                        explanation: 'Capitalization adds accrued unpaid interest to your loan principal, meaning you then pay interest on a larger balance—effectively interest on interest.'
                    }
                ]
            }
        },
        {
            id: 2,
            title: 'Repayment Strategies',
            subtitle: 'Choose the right plan for your situation',
            topics: [
                {
                    id: 'repayment-plans',
                    title: 'Federal Repayment Plans',
                    content: `
                        <h2>Federal Repayment Plans</h2>
                        <h3>Standard Repayment</h3>
                        <ul>
                            <li>Fixed payments over 10 years</li>
                            <li>Pays the least total interest</li>
                            <li>Highest monthly payment</li>
                            <li>Default plan if you don't choose another</li>
                        </ul>
                        <h3>Income-Driven Repayment (IDR) Plans</h3>
                        <ul>
                            <li><strong>SAVE Plan:</strong> Newest, most generous. 5-10% of discretionary income</li>
                            <li><strong>IBR:</strong> 10-15% of discretionary income</li>
                            <li><strong>PAYE:</strong> 10% of discretionary income, must be newer borrower</li>
                            <li><strong>ICR:</strong> 20% of discretionary income (least generous)</li>
                        </ul>
                        <h3>IDR Key Facts</h3>
                        <ul>
                            <li>Payments adjust annually based on income</li>
                            <li>Remaining balance forgiven after 20-25 years</li>
                            <li>Must recertify income each year</li>
                            <li>Forgiven amount may be taxable (except PSLF)</li>
                        </ul>
                        <h3>Other Plans</h3>
                        <ul>
                            <li><strong>Graduated:</strong> Payments start low, increase every 2 years (10 years)</li>
                            <li><strong>Extended:</strong> Fixed or graduated over 25 years (lower monthly, more interest)</li>
                        </ul>
                        <div class="highlight">
                            <strong>Use the Loan Simulator:</strong> StudentAid.gov has a repayment simulator. Enter your info and compare plans side-by-side. Many borrowers are on the wrong plan.
                        </div>
                    `
                },
                {
                    id: 'payoff-strategies',
                    title: 'Aggressive Payoff Strategies',
                    content: `
                        <h2>Aggressive Payoff Strategies</h2>
                        <h3>When to Pay Off Aggressively</h3>
                        <ul>
                            <li>Interest rate is above 6%</li>
                            <li>You're NOT pursuing PSLF</li>
                            <li>You have stable income and emergency fund</li>
                            <li>Debt stress is affecting quality of life</li>
                        </ul>
                        <h3>Strategies</h3>
                        <ul>
                            <li><strong>Avalanche:</strong> Target highest interest rate first</li>
                            <li><strong>Snowball:</strong> Target smallest balance first (motivation)</li>
                            <li><strong>Refinance:</strong> Lower interest rate through private lender</li>
                            <li><strong>Extra payments:</strong> Specify "apply to principal" when paying extra</li>
                        </ul>
                        <h3>Refinancing: When It Makes Sense</h3>
                        <ul>
                            <li>You have good credit (720+)</li>
                            <li>Stable income and career</li>
                            <li>NOT pursuing forgiveness (refinancing = lose federal protections)</li>
                            <li>Can get significantly lower rate</li>
                        </ul>
                        <h3>Finding Extra Money</h3>
                        <ul>
                            <li>Tax refund → straight to loans</li>
                            <li>Bonuses and raises → 50% to loans</li>
                            <li>Side hustle income → 100% to loans during payoff</li>
                            <li>Employer student loan repayment benefit (ask HR!)</li>
                        </ul>
                        <div class="highlight">
                            <strong>Important:</strong> When making extra payments, call your servicer and say "Apply this to PRINCIPAL, not future payments." Otherwise they just advance your due date.
                        </div>
                    `
                },
                {
                    id: 'deferment-forbearance',
                    title: 'Deferment & Forbearance',
                    content: `
                        <h2>Deferment & Forbearance</h2>
                        <h3>When You Can't Make Payments</h3>
                        <p>If you're struggling, do NOT ignore your loans. Contact your servicer immediately.</p>
                        <h3>Deferment (Better Option)</h3>
                        <ul>
                            <li>Temporarily pause payments</li>
                            <li>Subsidized loan interest may be covered by government</li>
                            <li>Available for: grad school, economic hardship, unemployment, military</li>
                            <li>Must apply through your servicer</li>
                        </ul>
                        <h3>Forbearance (Use as Last Resort)</h3>
                        <ul>
                            <li>Temporarily pause or reduce payments</li>
                            <li>Interest continues on ALL loans</li>
                            <li>General forbearance: 12 months (at servicer's discretion)</li>
                            <li>Interest capitalizes after forbearance ends</li>
                        </ul>
                        <h3>Better Than Forbearance</h3>
                        <ul>
                            <li>Switch to income-driven plan (payments could be $0)</li>
                            <li>$0 payments on IDR still count toward forgiveness!</li>
                            <li>Interest may be partially subsidized on SAVE plan</li>
                        </ul>
                        <div class="highlight">
                            <strong>Never Default:</strong> Defaulting destroys credit, enables wage garnishment, and eliminates repayment options. Always call your servicer before missing payments.
                        </div>
                    `
                }
            ],
            quiz: {
                questions: [
                    {
                        question: 'What is the SAVE plan?',
                        options: ['A savings account', 'The newest income-driven repayment plan with 5-10% of discretionary income', 'A forgiveness program', 'A type of scholarship'],
                        correct: 1,
                        explanation: 'SAVE is the newest and most generous income-driven repayment plan, with payments at 5% (undergrad) or 10% (grad) of discretionary income.'
                    },
                    {
                        question: 'When making extra student loan payments, what should you tell your servicer?',
                        options: ['Nothing special', 'Apply to principal, not future payments', 'Put it in savings', 'Apply to interest only'],
                        correct: 1,
                        explanation: 'Without specifying, servicers may just advance your due date instead of reducing your principal. Always specify "apply to principal."'
                    },
                    {
                        question: 'What is better than forbearance when struggling to pay?',
                        options: ['Ignoring the loans', 'Switching to an income-driven plan where payments could be $0', 'Taking out more loans', 'Paying with credit cards'],
                        correct: 1,
                        explanation: 'Income-driven plans can have $0 payments based on income, and those payments still count toward eventual forgiveness—unlike forbearance where interest compounds.'
                    }
                ]
            }
        },
        {
            id: 3,
            title: 'Forgiveness Programs',
            subtitle: 'Getting your loans reduced or eliminated',
            topics: [
                {
                    id: 'pslf',
                    title: 'Public Service Loan Forgiveness (PSLF)',
                    content: `
                        <h2>Public Service Loan Forgiveness (PSLF)</h2>
                        <h3>How It Works</h3>
                        <ul>
                            <li>Make 120 qualifying payments (10 years)</li>
                            <li>While working full-time for qualifying employer</li>
                            <li>Remaining balance forgiven TAX-FREE</li>
                        </ul>
                        <h3>Qualifying Employers</h3>
                        <ul>
                            <li>Government (federal, state, local, tribal)</li>
                            <li>501(c)(3) nonprofits</li>
                            <li>Military service</li>
                            <li>Public schools and universities</li>
                            <li>Public hospitals</li>
                        </ul>
                        <h3>Requirements</h3>
                        <ul>
                            <li>Direct Loans only (consolidate FFEL if needed)</li>
                            <li>On income-driven repayment plan</li>
                            <li>Full-time employment (30+ hours/week)</li>
                            <li>Submit Employment Certification Form annually</li>
                        </ul>
                        <h3>PSLF Strategy</h3>
                        <ul>
                            <li>Get on cheapest IDR plan (lower payments = more forgiven)</li>
                            <li>Submit ECF every year (don't wait until 120 payments)</li>
                            <li>Track payments on StudentAid.gov</li>
                            <li>Keep records of everything</li>
                        </ul>
                        <div class="example">
                            <strong>Example:</strong> $80K in loans, $50K income<br>
                            IDR payments: ~$200/month for 10 years = $24,000 paid<br>
                            Remaining $56K+ = <strong>FORGIVEN, tax-free</strong>
                        </div>
                        <div class="highlight">
                            <strong>This is huge:</strong> If you work in public service, PSLF can save you tens of thousands. Don't leave this money on the table.
                        </div>
                    `
                },
                {
                    id: 'idr-forgiveness',
                    title: 'IDR Forgiveness & Other Programs',
                    content: `
                        <h2>IDR Forgiveness & Other Programs</h2>
                        <h3>Income-Driven Repayment Forgiveness</h3>
                        <ul>
                            <li>Any remaining balance forgiven after 20-25 years of payments</li>
                            <li>20 years for undergraduate loans</li>
                            <li>25 years for graduate loans</li>
                            <li><strong>Currently:</strong> Forgiven amount may be taxable income (but tax-free through 2025)</li>
                        </ul>
                        <h3>Teacher Loan Forgiveness</h3>
                        <ul>
                            <li>5 years teaching at low-income school</li>
                            <li>Up to $17,500 forgiven (STEM/special ed) or $5,000 (others)</li>
                            <li>Can be combined with PSLF (but years don't overlap)</li>
                        </ul>
                        <h3>Other Forgiveness/Assistance</h3>
                        <ul>
                            <li><strong>State programs:</strong> Many states offer forgiveness for specific careers</li>
                            <li><strong>Employer repayment:</strong> Growing number of employers offer this benefit</li>
                            <li><strong>Military:</strong> Various branches offer loan repayment programs</li>
                            <li><strong>AmeriCorps/Peace Corps:</strong> Education awards and partial forgiveness</li>
                        </ul>
                        <div class="highlight">
                            <strong>Research Your State:</strong> Search "[your state] student loan forgiveness programs." Many people qualify for state-level assistance they don't know about.
                        </div>
                    `
                }
            ],
            quiz: {
                questions: [
                    {
                        question: 'How many qualifying payments are needed for PSLF?',
                        options: ['60 payments (5 years)', '120 payments (10 years)', '240 payments (20 years)', '300 payments (25 years)'],
                        correct: 1,
                        explanation: '120 qualifying monthly payments (10 years) while working full-time for a qualifying government or nonprofit employer.'
                    },
                    {
                        question: 'Is PSLF forgiveness taxable?',
                        options: ['Yes, always', 'No, PSLF forgiveness is tax-free', 'Only if over $50,000', 'Depends on your income'],
                        correct: 1,
                        explanation: 'PSLF forgiveness is tax-free at both federal and state levels, unlike IDR forgiveness which may be taxable.'
                    }
                ]
            }
        },
        {
            id: 4,
            title: 'Smart Education Funding',
            subtitle: 'Paying for education without crushing debt',
            topics: [
                {
                    id: 'minimizing-student-debt',
                    title: 'Minimizing Student Loan Debt',
                    content: `
                        <h2>Minimizing Student Loan Debt</h2>
                        <h3>Before Borrowing</h3>
                        <ul>
                            <li>Calculate expected salary for your intended career</li>
                            <li>Total loans should be LESS than first year's expected salary</li>
                            <li>$80K in debt for a $35K/year career = red flag</li>
                        </ul>
                        <h3>Free Money First</h3>
                        <ol>
                            <li><strong>FAFSA:</strong> File every year (even if you think you won't qualify)</li>
                            <li><strong>Scholarships:</strong> Apply to many small ones (less competition)</li>
                            <li><strong>Grants:</strong> Pell Grant, state grants, institutional grants</li>
                            <li><strong>Work-study:</strong> Part-time campus jobs</li>
                        </ol>
                        <h3>Reduce Costs</h3>
                        <ul>
                            <li><strong>Community college first:</strong> 2 years at CC, transfer to 4-year ($20K+ saved)</li>
                            <li><strong>In-state tuition:</strong> Establish residency if possible</li>
                            <li><strong>Live at home:</strong> Room and board is often 50% of total cost</li>
                            <li><strong>CLEP/AP credits:</strong> Test out of courses for $90 each</li>
                            <li><strong>Used textbooks:</strong> Rent, buy used, or find free PDFs</li>
                        </ul>
                        <h3>ROI of Education</h3>
                        <div class="example">
                            High ROI: Nursing ($40K degree → $80K salary)<br>
                            Medium ROI: Business ($80K degree → $65K salary)<br>
                            Low ROI: Liberal arts from private school ($200K degree → $40K salary)<br>
                            <strong>This doesn't mean don't follow your passion—just borrow wisely.</strong>
                        </div>
                        <div class="highlight">
                            <strong>The Golden Rule:</strong> Don't borrow more than your expected first-year salary. If you need more, find cheaper paths to the same education.
                        </div>
                    `
                },
                {
                    id: 'education-alternatives',
                    title: 'Education Alternatives & Career Training',
                    content: `
                        <h2>Education Alternatives</h2>
                        <h3>Not Everyone Needs a 4-Year Degree</h3>
                        <p>College is ONE path, not the ONLY path. Consider ROI carefully.</p>
                        <h3>Alternative Paths</h3>
                        <ul>
                            <li><strong>Trade schools:</strong> Electrician, plumber, HVAC, welding ($50-80K+ salary)</li>
                            <li><strong>Coding bootcamps:</strong> 12-24 weeks, career-ready ($70-120K salary)</li>
                            <li><strong>Certifications:</strong> IT, healthcare, project management</li>
                            <li><strong>Apprenticeships:</strong> Earn while you learn (many trades, some tech)</li>
                            <li><strong>Military:</strong> Training + GI Bill for future education</li>
                            <li><strong>Self-education:</strong> Online courses, portfolios, proven results</li>
                        </ul>
                        <h3>Free/Low-Cost Learning</h3>
                        <ul>
                            <li>Google Career Certificates ($49/month, 6-month programs)</li>
                            <li>freeCodeCamp (completely free coding education)</li>
                            <li>Khan Academy (free everything)</li>
                            <li>MIT OpenCourseWare (free college courses)</li>
                            <li>Local library workshops and resources</li>
                        </ul>
                        <div class="highlight">
                            <strong>What Employers Actually Want:</strong> Skills, experience, and results. A portfolio of work often beats a degree. The world is shifting—don't overpay for credentials.
                        </div>
                    `
                }
            ],
            quiz: {
                questions: [
                    {
                        question: 'How much should total student loans ideally be relative to expected salary?',
                        options: ['Any amount is fine', 'Less than first year\'s expected salary', 'Twice your expected salary', 'It doesn\'t matter with forgiveness'],
                        correct: 1,
                        explanation: 'The golden rule: total student loan debt should be less than your expected first-year salary. More than that and repayment becomes a serious burden.'
                    },
                    {
                        question: 'What is the cheapest way to start a college education?',
                        options: ['Private university with scholarships', 'Community college for 2 years then transfer', 'Online-only university', 'Out-of-state public school'],
                        correct: 1,
                        explanation: 'Community college for 2 years then transferring to a 4-year school can save $20,000+ while earning the same bachelor\'s degree.'
                    }
                ]
            }
        }
    ]
};
