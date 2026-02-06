// Government Benefits & Safety Net Curriculum Data
const benefitsData = {
    id: 'benefits',
    title: 'Government Benefits & Safety Net',
    icon: '🏛️',
    description: 'Understand the programs that exist to help you — unemployment, food assistance, healthcare, housing, disability, and more.',
    graduationGoal: 'Know exactly what benefits you qualify for and how to access them when you need them',
    difficulty: 'beginner',
    prerequisites: [],
    learningObjectives: [
        'Identify government benefits you may qualify for',
        'Navigate the application process for benefits',
        'Understand unemployment, food assistance, and healthcare programs',
        'Access housing and disability benefits',
        'Maximize your eligibility and maintain benefits'
    ],
    relatedTracks: ['california', 'personalfinance', 'health', 'housing'],
    resources: [
        { title: 'Benefits.gov', url: 'https://www.benefits.gov/' },
        { title: 'California Benefits', url: 'https://www.benefitscal.com/' }
    ],
    levels: [
        {
            id: 1,
            title: 'Understanding the Safety Net',
            subtitle: 'What exists and how to navigate it',
            topics: [
                {
                    id: 'safety-net-overview',
                    title: 'The Safety Net Overview',
                    content: `
                        <h2>The Safety Net Overview</h2>

                        <h3>Why This Matters</h3>
                        <ul>
                            <li>Millions of Americans qualify for benefits they never apply for</li>
                            <li>The application process is intentionally complex — don't let that stop you</li>
                            <li>These programs exist because you paid into them (taxes, payroll deductions)</li>
                            <li>Using them is not "handouts" — it's using the system you've funded</li>
                        </ul>

                        <h3>Major Federal Programs</h3>
                        <ul>
                            <li><strong>Unemployment Insurance (UI):</strong> Temporary income when you lose your job</li>
                            <li><strong>SNAP (Food Stamps):</strong> Help buying groceries</li>
                            <li><strong>Medicaid:</strong> Free or low-cost healthcare for low-income individuals</li>
                            <li><strong>ACA Marketplace:</strong> Subsidized health insurance</li>
                            <li><strong>Section 8 / Housing Choice Vouchers:</strong> Help paying rent</li>
                            <li><strong>Social Security:</strong> Retirement and disability income</li>
                            <li><strong>SSDI / SSI:</strong> Disability benefits</li>
                            <li><strong>WIC:</strong> Nutrition for women, infants, and children</li>
                            <li><strong>TANF:</strong> Temporary cash assistance for families</li>
                            <li><strong>LIHEAP:</strong> Help with energy/utility bills</li>
                            <li><strong>Pell Grants:</strong> College financial aid you don't repay</li>
                        </ul>

                        <h3>Finding What You Qualify For</h3>
                        <ul>
                            <li><strong>Benefits.gov:</strong> Federal screening tool</li>
                            <li><strong>Your state's 211 hotline:</strong> Dial 2-1-1 for local resources</li>
                            <li><strong>Local Community Action Agencies:</strong> Help with applications</li>
                            <li><strong>Library:</strong> Free internet, application help, social workers</li>
                        </ul>

                        <div class="highlight">
                            <strong>No Shame:</strong> These programs exist because life happens — job loss, illness, economic downturns. Using them when you qualify is exactly what they're for. That's why you pay taxes.
                        </div>
                    `
                },
                {
                    id: 'applying-tips',
                    title: 'How to Navigate the Application Process',
                    content: `
                        <h2>How to Navigate the Application Process</h2>

                        <h3>Why Applications Are Hard</h3>
                        <ul>
                            <li>Complex paperwork is a feature, not a bug — it reduces enrollment</li>
                            <li>Long wait times, confusing requirements, and bureaucratic language are barriers by design</li>
                            <li>Knowing this helps you approach it strategically instead of getting discouraged</li>
                        </ul>

                        <h3>General Tips for Any Application</h3>
                        <ul>
                            <li><strong>Apply as soon as you're eligible</strong> — many programs have backlogs and processing takes weeks</li>
                            <li><strong>Gather documents first:</strong> ID, Social Security card, proof of income, bank statements, lease/mortgage, utility bills</li>
                            <li><strong>Apply for multiple programs simultaneously</strong> — qualifying for one often qualifies you for others</li>
                            <li><strong>Keep copies of everything</strong> you submit</li>
                            <li><strong>Follow up regularly</strong> — don't assume silence means progress</li>
                            <li><strong>If denied, APPEAL</strong> — many initial denials are overturned on appeal</li>
                        </ul>

                        <h3>Getting Help with Applications</h3>
                        <ul>
                            <li><strong>Community Action Agencies:</strong> Free help with benefit applications</li>
                            <li><strong>Legal Aid:</strong> Free legal help for benefit denials and appeals</li>
                            <li><strong>Social workers:</strong> At hospitals, libraries, and community centers</li>
                            <li><strong>Nonprofit organizations:</strong> Many specialize in helping people access benefits</li>
                        </ul>

                        <div class="example">
                            <strong>Pro Tip:</strong> When you call government agencies, note the date, time, who you spoke with, and what they told you. If they give you wrong information (which happens often), your notes protect you.
                        </div>

                        <div class="highlight">
                            <strong>Don't Give Up After a Denial:</strong> Initial denials are extremely common and often wrong. The appeal process exists because the system makes mistakes. Many people get approved on appeal who were initially denied.
                        </div>
                    `
                }
            ],
            quiz: {
                questions: [
                    {
                        question: 'What is the best first step when you think you might qualify for government benefits?',
                        options: [
                            'Wait until you\'re desperate',
                            'Apply as soon as you\'re eligible since processing takes weeks, and use Benefits.gov to screen for programs',
                            'Only apply for one program at a time',
                            'Ask your employer for help'
                        ],
                        correct: 1,
                        explanation: 'Apply as soon as you\'re eligible because processing takes weeks or months. Use Benefits.gov as a screening tool, and apply for multiple programs simultaneously since eligibility often overlaps.'
                    },
                    {
                        question: 'What should you do if your benefits application is denied?',
                        options: [
                            'Accept the decision and move on',
                            'Appeal — many initial denials are overturned, and the appeal process exists because the system makes mistakes',
                            'Reapply from scratch',
                            'Complain on social media'
                        ],
                        correct: 1,
                        explanation: 'Always appeal a denial. Initial denials are common and often based on errors or missing information. Many people who appeal are ultimately approved. Free legal aid organizations can help with appeals.'
                    }
                ]
            }
        },
        {
            id: 2,
            title: 'Unemployment Benefits',
            subtitle: 'Your income lifeline between jobs',
            topics: [
                {
                    id: 'unemployment-basics',
                    title: 'Unemployment Insurance Basics',
                    content: `
                        <h2>Unemployment Insurance Basics</h2>

                        <h3>What It Is</h3>
                        <ul>
                            <li>Temporary income replacement when you lose your job through no fault of your own</li>
                            <li>Funded by employer payroll taxes (you don't directly pay into it)</li>
                            <li>Administered by your state — rules vary</li>
                            <li>Typically replaces 40-50% of your previous income, up to a state cap</li>
                        </ul>

                        <h3>Who Qualifies</h3>
                        <ul>
                            <li>Lost your job through no fault of your own (layoff, reduction in force, company closure)</li>
                            <li>Worked enough hours/earned enough to qualify (varies by state)</li>
                            <li>Able and available to work</li>
                            <li>Actively searching for work</li>
                        </ul>

                        <h3>Who Typically Doesn't Qualify</h3>
                        <ul>
                            <li>Quit voluntarily (with important exceptions — see constructive discharge)</li>
                            <li>Fired for serious misconduct (not just poor performance)</li>
                            <li>Independent contractors (with some exceptions)</li>
                            <li>Self-employed (unless your state has specific provisions)</li>
                        </ul>

                        <h3>Important Exceptions</h3>
                        <ul>
                            <li><strong>Constructive discharge:</strong> If you quit due to intolerable conditions, you may still qualify</li>
                            <li><strong>Good cause quit:</strong> Quitting for safety reasons, harassment, or significant contract violations</li>
                            <li><strong>Reduced hours:</strong> If your hours were significantly cut, you may qualify for partial benefits</li>
                        </ul>

                        <h3>How to Apply</h3>
                        <ol>
                            <li>File with your state's unemployment office (usually online)</li>
                            <li>File in the state where you WORKED (not necessarily where you live)</li>
                            <li>File as soon as you're unemployed — there's often a waiting week</li>
                            <li>Continue certifying weekly that you're looking for work</li>
                        </ol>

                        <div class="highlight">
                            <strong>If Your Employer Contests Your Claim:</strong> You have the right to a hearing. Prepare your documentation, show up, and present your case. Many employers contest claims routinely — don't let that discourage you. The hearing process often sides with workers who were laid off or forced out.
                        </div>
                    `
                },
                {
                    id: 'maximizing-unemployment',
                    title: 'Maximizing Your Unemployment Benefits',
                    content: `
                        <h2>Maximizing Your Unemployment Benefits</h2>

                        <h3>Duration and Amount</h3>
                        <ul>
                            <li><strong>Typical duration:</strong> 26 weeks in most states (can be extended during recessions)</li>
                            <li><strong>Weekly amount:</strong> Varies by state — check your state's calculator</li>
                            <li><strong>Taxes:</strong> Unemployment benefits ARE taxable income — have taxes withheld or set money aside</li>
                        </ul>

                        <h3>Strategies to Maximize</h3>
                        <ul>
                            <li><strong>File immediately:</strong> Benefits don't backdate in most states</li>
                            <li><strong>Report all income accurately:</strong> Part-time work may reduce but not eliminate benefits</li>
                            <li><strong>Keep detailed job search records:</strong> Many states require documenting your search activities</li>
                            <li><strong>Don't turn down "suitable" work:</strong> Refusing suitable employment can disqualify you</li>
                            <li><strong>Attend all required meetings and trainings</strong></li>
                            <li><strong>Ask about training programs:</strong> Some states fund education/training while you receive benefits</li>
                        </ul>

                        <h3>While Receiving Benefits</h3>
                        <ul>
                            <li>Apply for SNAP, Medicaid, and other benefits — unemployment status often qualifies you</li>
                            <li>Contact your mortgage company or landlord about hardship programs</li>
                            <li>Look into utility assistance (LIHEAP)</li>
                            <li>Use this time for skills development and networking</li>
                        </ul>

                        <div class="highlight">
                            <strong>Training Opportunities:</strong> Many states offer free training programs, tuition assistance, or career development through the unemployment system. Ask your case worker about available programs — this is an often-overlooked benefit.
                        </div>
                    `
                }
            ],
            quiz: {
                questions: [
                    {
                        question: 'Can you receive unemployment benefits if you quit your job?',
                        options: [
                            'Never — quitting always disqualifies you',
                            'Yes, if you quit for "good cause" such as constructive discharge, safety reasons, or significant contract violations',
                            'Only if you give two weeks notice',
                            'Only if your employer agrees'
                        ],
                        correct: 1,
                        explanation: 'While voluntary quitting typically disqualifies you, there are important exceptions. "Good cause" reasons like constructive discharge, unsafe working conditions, or significant changes to your employment terms can qualify you.'
                    },
                    {
                        question: 'What should you do immediately after losing your job?',
                        options: [
                            'Wait a few weeks to see if you find something',
                            'File for unemployment immediately and apply for other benefits like SNAP and Medicaid',
                            'Only apply for unemployment after you\'ve exhausted your savings',
                            'Wait for your employer to file on your behalf'
                        ],
                        correct: 1,
                        explanation: 'File for unemployment immediately — benefits usually don\'t backdate, and processing takes time. Simultaneously apply for other benefits (SNAP, Medicaid, utility assistance) since unemployment status often qualifies you.'
                    }
                ]
            }
        },
        {
            id: 3,
            title: 'Food & Nutrition Assistance',
            subtitle: 'Making sure you and your family can eat',
            topics: [
                {
                    id: 'snap-benefits',
                    title: 'SNAP (Food Stamps)',
                    content: `
                        <h2>SNAP (Supplemental Nutrition Assistance Program)</h2>

                        <h3>What It Is</h3>
                        <ul>
                            <li>Monthly benefits loaded onto an EBT card (works like a debit card)</li>
                            <li>Can be used to buy groceries at most stores</li>
                            <li>Based on household size and income</li>
                        </ul>

                        <h3>Who Qualifies</h3>
                        <ul>
                            <li>Gross income below 130% of the federal poverty level (higher in some states)</li>
                            <li>Net income below 100% of poverty level</li>
                            <li>Asset limits may apply (varies by state — many states have eliminated asset tests)</li>
                            <li>Must be a U.S. citizen or qualified non-citizen</li>
                        </ul>

                        <h3>Benefit Amounts (Approximate)</h3>
                        <ul>
                            <li>Individual: ~$200-$290/month</li>
                            <li>Family of 2: ~$370-$530/month</li>
                            <li>Family of 4: ~$680-$970/month</li>
                            <li>Amounts depend on income, deductions, and your state</li>
                        </ul>

                        <h3>What SNAP Covers</h3>
                        <ul>
                            <li>Fruits, vegetables, meat, dairy, bread, cereals</li>
                            <li>Seeds and plants that produce food</li>
                            <li>Does NOT cover: alcohol, tobacco, vitamins, hot prepared foods, non-food items</li>
                        </ul>

                        <h3>How to Apply</h3>
                        <ul>
                            <li>Apply through your state's SNAP office (usually online, by phone, or in person)</li>
                            <li>You'll have an interview (phone or in-person)</li>
                            <li>Bring proof of identity, income, housing costs, and household size</li>
                            <li>Processing typically takes 30 days (7 days for expedited/emergency)</li>
                        </ul>

                        <div class="highlight">
                            <strong>Don't Assume You Won't Qualify:</strong> Income limits are higher than many people think, especially for larger households. If you're going through a tough time — job loss, medical emergency, reduced hours — apply. The worst they can say is no.
                        </div>
                    `
                },
                {
                    id: 'wic-other-food',
                    title: 'WIC & Other Food Programs',
                    content: `
                        <h2>WIC & Other Food Programs</h2>

                        <h3>WIC (Women, Infants, and Children)</h3>
                        <ul>
                            <li>Provides nutrition support for pregnant women, new mothers, and children under 5</li>
                            <li>Covers specific nutritious foods (milk, eggs, cereal, fruits/vegetables, baby formula)</li>
                            <li>Income limit: 185% of federal poverty level</li>
                            <li>Also provides nutrition education and healthcare referrals</li>
                        </ul>

                        <h3>School Meal Programs</h3>
                        <ul>
                            <li><strong>Free & Reduced Lunch:</strong> Based on family income</li>
                            <li><strong>Summer meals:</strong> Free meals for kids when school is out</li>
                            <li><strong>Community Eligibility:</strong> Some schools provide free meals to all students</li>
                        </ul>

                        <h3>Other Food Resources</h3>
                        <ul>
                            <li><strong>Food banks:</strong> Free groceries, usually no income verification required</li>
                            <li><strong>Community fridges/pantries:</strong> Take what you need, no questions asked</li>
                            <li><strong>Meals on Wheels:</strong> Delivered meals for seniors and homebound individuals</li>
                            <li><strong>TEFAP:</strong> USDA commodity food distributed through local agencies</li>
                            <li><strong>Religious organizations:</strong> Many churches, mosques, and synagogues run food programs</li>
                        </ul>

                        <h3>Finding Local Resources</h3>
                        <ul>
                            <li><strong>Dial 2-1-1:</strong> Connects you to local food resources</li>
                            <li><strong>FeedingAmerica.org:</strong> Food bank locator</li>
                            <li><strong>Your state's DHS/DHHS website</strong></li>
                        </ul>

                        <div class="highlight">
                            <strong>No Stigma:</strong> Food banks and pantries serve people from all walks of life. College students, families between jobs, seniors on fixed incomes, working people whose wages don't cover everything. Using these resources is smart, not shameful.
                        </div>
                    `
                }
            ],
            quiz: {
                questions: [
                    {
                        question: 'What can SNAP benefits be used to purchase?',
                        options: [
                            'Any items at any store',
                            'Groceries like fruits, vegetables, meat, dairy, and bread — but not alcohol, tobacco, or hot prepared foods',
                            'Only canned goods',
                            'Anything except luxury items'
                        ],
                        correct: 1,
                        explanation: 'SNAP benefits can be used to buy most groceries and food items, but cannot be used for alcohol, tobacco, vitamins, hot prepared foods, or non-food items.'
                    },
                    {
                        question: 'How can you find local food assistance resources?',
                        options: [
                            'There\'s no central resource',
                            'Dial 2-1-1, check FeedingAmerica.org, or contact your state\'s DHS',
                            'Only through your employer',
                            'You have to wait for someone to tell you about them'
                        ],
                        correct: 1,
                        explanation: 'Dialing 2-1-1 connects you to local resources in your area. FeedingAmerica.org has a food bank locator, and your state\'s Department of Human Services website lists available programs.'
                    }
                ]
            }
        },
        {
            id: 4,
            title: 'Healthcare Benefits',
            subtitle: 'Accessing affordable medical care',
            topics: [
                {
                    id: 'medicaid-basics',
                    title: 'Medicaid & CHIP',
                    content: `
                        <h2>Medicaid & CHIP</h2>

                        <h3>Medicaid</h3>
                        <ul>
                            <li>Free or very low-cost health coverage</li>
                            <li>For low-income adults, children, pregnant women, elderly, and people with disabilities</li>
                            <li>Expansion states cover adults up to 138% of the federal poverty level (~$20,000/year for individual)</li>
                            <li>Covers doctor visits, hospital stays, prescriptions, mental health, and more</li>
                        </ul>

                        <h3>CHIP (Children's Health Insurance Program)</h3>
                        <ul>
                            <li>Covers children in families that earn too much for Medicaid but can't afford private insurance</li>
                            <li>Income limits are higher than Medicaid (varies by state, often up to 200-300% of poverty level)</li>
                            <li>Low-cost premiums and copays</li>
                        </ul>

                        <h3>Marketplace Insurance (ACA)</h3>
                        <ul>
                            <li>Healthcare.gov or your state's exchange</li>
                            <li>Subsidies available based on income (up to 400% of poverty level, sometimes higher)</li>
                            <li>Open enrollment: November-January (special enrollment if you lose job-based coverage)</li>
                            <li>Losing your job is a "qualifying life event" — you can enroll outside open enrollment</li>
                        </ul>

                        <h3>COBRA</h3>
                        <ul>
                            <li>Continue your employer's insurance for up to 18 months after leaving</li>
                            <li>You pay the FULL premium (employer + employee portion) plus 2% admin fee</li>
                            <li>Often very expensive — compare with Marketplace options first</li>
                            <li>You have 60 days to elect COBRA after losing coverage</li>
                        </ul>

                        <div class="highlight">
                            <strong>Lost Your Job?</strong> Apply for Medicaid AND check Healthcare.gov for subsidized plans immediately. COBRA is an option but is usually much more expensive than Marketplace plans with subsidies. Don't go uninsured — one medical emergency without coverage can cause financial ruin.
                        </div>
                    `
                },
                {
                    id: 'navigating-healthcare',
                    title: 'Reducing Medical Costs',
                    content: `
                        <h2>Reducing Medical Costs</h2>

                        <h3>Even WITH Insurance</h3>
                        <ul>
                            <li><strong>Negotiate bills:</strong> Hospital bills are negotiable. Always ask for an itemized bill first.</li>
                            <li><strong>Payment plans:</strong> Most providers offer interest-free payment plans</li>
                            <li><strong>Financial assistance:</strong> Hospitals (especially nonprofits) must offer charity care programs</li>
                            <li><strong>Generic medications:</strong> Ask for generics — same drug, fraction of the cost</li>
                            <li><strong>GoodRx:</strong> Free app that finds the lowest prescription prices</li>
                        </ul>

                        <h3>Without Insurance</h3>
                        <ul>
                            <li><strong>Community health centers (FQHCs):</strong> Sliding scale fees based on income. Find one at findahealthcenter.hrsa.gov</li>
                            <li><strong>Free clinics:</strong> Volunteer-staffed clinics that provide care at no cost</li>
                            <li><strong>Telehealth:</strong> Often cheaper than in-person visits</li>
                            <li><strong>Dental schools:</strong> Reduced-cost dental care supervised by faculty</li>
                            <li><strong>Planned Parenthood:</strong> Sliding scale reproductive and general healthcare</li>
                        </ul>

                        <h3>Mental Health Resources</h3>
                        <ul>
                            <li><strong>988 Suicide & Crisis Lifeline:</strong> Call or text 988</li>
                            <li><strong>Crisis Text Line:</strong> Text HOME to 741741</li>
                            <li><strong>Open Path Collective:</strong> Therapy sessions for $30-$80</li>
                            <li><strong>BetterHelp / Talkspace:</strong> Online therapy with financial assistance options</li>
                            <li><strong>NAMI:</strong> Free support groups and resources</li>
                        </ul>

                        <div class="highlight">
                            <strong>Always Ask:</strong> "Do you offer a cash pay discount?" or "Do you have a financial assistance program?" These questions can reduce your bill by 20-60%. Medical providers expect to negotiate — you should too.
                        </div>
                    `
                }
            ],
            quiz: {
                questions: [
                    {
                        question: 'If you lose your job, what is usually the most affordable health insurance option?',
                        options: [
                            'COBRA — continuing your employer\'s plan',
                            'Going without insurance',
                            'Checking for Medicaid eligibility and ACA Marketplace plans with subsidies',
                            'Buying insurance directly from an insurance company'
                        ],
                        correct: 2,
                        explanation: 'Medicaid (if you qualify based on income) is free or nearly free. ACA Marketplace plans with subsidies are typically much cheaper than COBRA, which requires you to pay the full premium. Always compare before choosing COBRA.'
                    },
                    {
                        question: 'What should you do when you receive a large medical bill?',
                        options: [
                            'Pay it immediately in full',
                            'Ignore it and hope it goes away',
                            'Request an itemized bill, negotiate the charges, and ask about financial assistance programs and payment plans',
                            'Only pay the minimum amount on the bill'
                        ],
                        correct: 2,
                        explanation: 'Always request an itemized bill (errors are common), negotiate the charges, ask about the provider\'s financial assistance/charity care program, and set up an interest-free payment plan if needed.'
                    }
                ]
            }
        },
        {
            id: 5,
            title: 'Housing, Disability & Social Security',
            subtitle: 'Long-term safety net programs',
            topics: [
                {
                    id: 'housing-assistance',
                    title: 'Housing Assistance Programs',
                    content: `
                        <h2>Housing Assistance Programs</h2>

                        <h3>Section 8 / Housing Choice Vouchers</h3>
                        <ul>
                            <li>Government pays a portion of your rent to your landlord</li>
                            <li>You pay 30% of your income toward rent</li>
                            <li>Income must be below 50% of area median income</li>
                            <li><strong>Challenge:</strong> Long waiting lists (months to years) — apply as soon as you think you might need it</li>
                        </ul>

                        <h3>Public Housing</h3>
                        <ul>
                            <li>Government-owned housing with below-market rent</li>
                            <li>Managed by local Public Housing Authorities (PHAs)</li>
                            <li>Also has waiting lists but can be faster than Section 8</li>
                        </ul>

                        <h3>Emergency Housing Assistance</h3>
                        <ul>
                            <li><strong>Emergency Rental Assistance (ERA):</strong> One-time help with rent and utilities</li>
                            <li><strong>HUD Emergency Solutions Grants:</strong> Homelessness prevention</li>
                            <li><strong>Salvation Army / St. Vincent de Paul:</strong> Emergency rent assistance</li>
                            <li><strong>Local nonprofits:</strong> Many provide one-time rent or deposit assistance</li>
                        </ul>

                        <h3>Other Housing Resources</h3>
                        <ul>
                            <li><strong>USDA Rural Housing:</strong> Loans and grants for rural areas</li>
                            <li><strong>HUD counseling:</strong> Free housing counseling — HUD.gov</li>
                            <li><strong>Tenant rights hotlines:</strong> Free legal advice for renters</li>
                        </ul>

                        <div class="highlight">
                            <strong>Apply Early:</strong> Section 8 waiting lists are long. If you think you might need housing assistance in the future, get on the list now. You can decline the voucher if you don't need it when your name comes up.
                        </div>
                    `
                },
                {
                    id: 'disability-benefits',
                    title: 'Social Security Disability (SSDI & SSI)',
                    content: `
                        <h2>Social Security Disability</h2>

                        <h3>SSDI vs. SSI</h3>
                        <ul>
                            <li><strong>SSDI (Social Security Disability Insurance):</strong> For people who worked and paid into Social Security. Based on your work history and earnings.</li>
                            <li><strong>SSI (Supplemental Security Income):</strong> For people with limited income and resources, regardless of work history. Need-based.</li>
                            <li>You can potentially receive both</li>
                        </ul>

                        <h3>Who Qualifies</h3>
                        <ul>
                            <li>A medical condition that prevents you from working</li>
                            <li>Condition expected to last at least 12 months or result in death</li>
                            <li>You cannot perform "substantial gainful activity" (SGA)</li>
                            <li>SSDI: Enough work credits (generally 5 of the last 10 years)</li>
                            <li>SSI: Limited income and resources ($2,000 individual, $3,000 couple)</li>
                        </ul>

                        <h3>The Application Reality</h3>
                        <ul>
                            <li><strong>Initial denial rate: 60-70%.</strong> Most people are denied on their first application.</li>
                            <li>This doesn't mean you don't qualify — it means the system is designed this way</li>
                            <li><strong>Always appeal.</strong> Many people are approved at the hearing level (before an administrative law judge)</li>
                            <li>The process can take 6 months to 2+ years</li>
                        </ul>

                        <h3>Tips for Success</h3>
                        <ul>
                            <li><strong>Get a disability attorney or advocate</strong> — they work on contingency (paid from your back pay)</li>
                            <li><strong>Thorough medical documentation</strong> is crucial — see your doctors regularly</li>
                            <li><strong>Be honest but thorough</strong> about limitations in daily life</li>
                            <li><strong>Don't give up after initial denial</strong> — the appeal is where most cases are won</li>
                        </ul>

                        <div class="highlight">
                            <strong>The 60-70% Denial Rate Is Not the End:</strong> If you're denied, appeal immediately. Get a disability attorney (free until you win). Many people win at the hearing stage. The system is designed to deny initial claims — don't take it personally.
                        </div>
                    `
                },
                {
                    id: 'social-security-basics',
                    title: 'Social Security Retirement Basics',
                    content: `
                        <h2>Social Security Retirement Basics</h2>

                        <h3>How It Works</h3>
                        <ul>
                            <li>You earn Social Security credits by working and paying payroll taxes</li>
                            <li>Need 40 credits (about 10 years of work) to qualify</li>
                            <li>Benefit amount based on your highest 35 years of earnings</li>
                        </ul>

                        <h3>When to Claim</h3>
                        <ul>
                            <li><strong>Age 62:</strong> Earliest you can claim — permanently reduced benefit (~30% less)</li>
                            <li><strong>Full Retirement Age (FRA):</strong> 66-67 depending on birth year — full benefit</li>
                            <li><strong>Age 70:</strong> Maximum benefit — 8% per year increase for delaying past FRA</li>
                        </ul>

                        <h3>Other Social Security Benefits</h3>
                        <ul>
                            <li><strong>Spousal benefits:</strong> Up to 50% of your spouse's benefit</li>
                            <li><strong>Survivor benefits:</strong> For widows/widowers and dependent children</li>
                            <li><strong>Dependent benefits:</strong> For children of retired or disabled workers</li>
                        </ul>

                        <h3>Checking Your Benefits</h3>
                        <ul>
                            <li>Create an account at <strong>ssa.gov</strong></li>
                            <li>Review your earnings history (errors happen — correct them)</li>
                            <li>See your estimated benefit at different claiming ages</li>
                        </ul>

                        <div class="highlight">
                            <strong>Action Item:</strong> Create your free account at ssa.gov today and check your earnings record. Errors in your earnings history can reduce your benefits. Finding and fixing errors now ensures you get the full amount you've earned.
                        </div>
                    `
                }
            ],
            quiz: {
                questions: [
                    {
                        question: 'What is the initial denial rate for Social Security Disability (SSDI) applications?',
                        options: [
                            '10-20%',
                            '30-40%',
                            '60-70% — and appealing is often successful',
                            '90-95%'
                        ],
                        correct: 2,
                        explanation: 'About 60-70% of initial SSDI applications are denied. However, many people are approved on appeal, especially at the hearing level. This is why it\'s crucial to never give up after an initial denial and to get a disability attorney.'
                    },
                    {
                        question: 'How much more can you receive from Social Security by waiting until age 70 instead of claiming at 62?',
                        options: [
                            'About the same amount',
                            'About 10% more',
                            'Up to 76% more (benefit grows ~8% per year after full retirement age)',
                            'Double'
                        ],
                        correct: 2,
                        explanation: 'Claiming at 62 gives you about 70% of your full benefit. Waiting until 70 gives you about 124-132% of your full benefit (8% per year increase after full retirement age). The difference can be 76% or more.'
                    }
                ]
            }
        }
    ]
};
