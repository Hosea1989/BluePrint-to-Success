// Business Taxes Curriculum Data
const taxesData = {
    id: 'taxes',
    title: 'Business Taxes',
    icon: '🧾',
    description: 'Understand why businesses pay taxes, deductions, and strategies to minimize tax burden legally.',
    difficulty: 'intermediate',
    prerequisites: ['personalfinance', 'business'],
    learningObjectives: [
        'Understand how business taxes work and when they\'re due',
        'Identify deductible business expenses',
        'Choose the right business structure for tax benefits',
        'File business taxes correctly and on time',
        'Use legal strategies to minimize tax burden'
    ],
    relatedTracks: ['business', 'personalfinance', 'freelancing'],
    resources: [
        { title: 'IRS Small Business Tax Center', url: 'https://www.irs.gov/businesses/small-businesses-self-employed' },
        { title: 'SBA - Tax Information', url: 'https://www.sba.gov/business-guide/manage-your-business/manage-your-business-taxes' }
    ],
    levels: [
        {
            id: 1,
            title: 'Tax Basics',
            subtitle: 'Understanding how business taxes work',
            topics: [
                {
                    id: 'why-taxes-exist',
                    title: 'Why Businesses Pay Taxes',
                    content: `
                        <h2>Why Businesses Pay Taxes</h2>
                        
                        <h3>The Purpose of Business Taxes</h3>
                        <p>Taxes fund the infrastructure that makes business possible:</p>
                        <ul>
                            <li><strong>Roads & Transportation:</strong> Moving goods and employees</li>
                            <li><strong>Legal System:</strong> Contract enforcement, dispute resolution</li>
                            <li><strong>Education:</strong> Creating skilled workers</li>
                            <li><strong>Security:</strong> Police, fire, national defense</li>
                            <li><strong>Utilities:</strong> Water, power grid infrastructure</li>
                        </ul>
                        
                        <div class="definition">
                            <strong>Key Concept:</strong> Businesses benefit from public infrastructure. Taxes are essentially paying for the systems that allow businesses to operate.
                        </div>
                        
                        <h3>What Happens if You Don't Pay?</h3>
                        <ul>
                            <li><strong>Penalties:</strong> 5% per month on unpaid taxes</li>
                            <li><strong>Interest:</strong> Compounds on unpaid amounts</li>
                            <li><strong>Liens:</strong> Government claims on your property</li>
                            <li><strong>Criminal charges:</strong> Tax evasion is a felony</li>
                        </ul>
                        
                        <div class="highlight">
                            <strong>Important Distinction:</strong><br>
                            <strong>Tax Avoidance:</strong> Legal strategies to reduce taxes ✓<br>
                            <strong>Tax Evasion:</strong> Illegal hiding of income ✗
                        </div>
                    `
                },
                {
                    id: 'types-of-business-taxes',
                    title: 'Types of Business Taxes',
                    content: `
                        <h2>Types of Business Taxes</h2>
                        
                        <h3>1. Income Tax</h3>
                        <div class="definition">
                            <strong>Business Income Tax:</strong> Tax on profits (Revenue - Expenses = Taxable Income)
                        </div>
                        <ul>
                            <li>Federal corporate rate: 21%</li>
                            <li>State rates vary: 0% to 12%</li>
                            <li>Some businesses pay through personal returns (pass-through)</li>
                        </ul>
                        
                        <h3>2. Self-Employment Tax</h3>
                        <div class="definition">
                            <strong>Self-Employment Tax:</strong> Social Security and Medicare taxes for self-employed individuals. 15.3% of net earnings.
                        </div>
                        <ul>
                            <li>12.4% Social Security (on first ~$160k)</li>
                            <li>2.9% Medicare (no limit)</li>
                            <li>Employees split this with employer; self-employed pay both halves</li>
                        </ul>
                        
                        <h3>3. Payroll Taxes</h3>
                        <ul>
                            <li><strong>Employer's share:</strong> 7.65% of wages</li>
                            <li><strong>Federal unemployment (FUTA):</strong> 6% on first $7,000</li>
                            <li><strong>State unemployment:</strong> Varies</li>
                        </ul>
                        
                        <h3>4. Sales Tax</h3>
                        <ul>
                            <li>Collected from customers on taxable goods/services</li>
                            <li>Business remits to state</li>
                            <li>Rates vary by state and locality</li>
                        </ul>
                        
                        <h3>5. Property Tax</h3>
                        <ul>
                            <li>On real estate owned by business</li>
                            <li>Some states tax equipment/inventory too</li>
                        </ul>
                    `
                },
                {
                    id: 'tax-year-deadlines',
                    title: 'Tax Year and Filing Deadlines',
                    content: `
                        <h2>Tax Year and Filing Deadlines</h2>
                        
                        <h3>Tax Year Options</h3>
                        <div class="definition">
                            <strong>Calendar Year:</strong> January 1 - December 31 (most common)
                        </div>
                        <div class="definition">
                            <strong>Fiscal Year:</strong> Any 12-month period ending on last day of any month except December
                        </div>
                        
                        <h3>Key Federal Deadlines</h3>
                        
                        <p><strong>Sole Proprietors & Single-Member LLCs:</strong></p>
                        <ul>
                            <li>April 15: Personal return (Form 1040 + Schedule C)</li>
                        </ul>
                        
                        <p><strong>Partnerships & Multi-Member LLCs:</strong></p>
                        <ul>
                            <li>March 15: Partnership return (Form 1065)</li>
                        </ul>
                        
                        <p><strong>S Corporations:</strong></p>
                        <ul>
                            <li>March 15: S Corp return (Form 1120S)</li>
                        </ul>
                        
                        <p><strong>C Corporations:</strong></p>
                        <ul>
                            <li>April 15: Corporate return (Form 1120)</li>
                        </ul>
                        
                        <h3>Quarterly Estimated Taxes</h3>
                        <p>If you expect to owe $1,000+ in taxes, pay quarterly:</p>
                        <ul>
                            <li>Q1: April 15</li>
                            <li>Q2: June 15</li>
                            <li>Q3: September 15</li>
                            <li>Q4: January 15 (following year)</li>
                        </ul>
                        
                        <div class="highlight">
                            <strong>Pro Tip:</strong> Extensions give you more TIME to file, not more time to PAY. You still owe penalties on unpaid taxes.
                        </div>
                    `
                },
                {
                    id: 'tax-forms-overview',
                    title: 'Common Tax Forms',
                    content: `
                        <h2>Common Business Tax Forms</h2>
                        
                        <h3>For Self-Employed / Sole Proprietors</h3>
                        <ul>
                            <li><strong>Schedule C:</strong> Profit or Loss from Business (attaches to Form 1040)</li>
                            <li><strong>Schedule SE:</strong> Self-Employment Tax calculation</li>
                            <li><strong>Form 1099-NEC:</strong> Report payments to contractors ($600+)</li>
                        </ul>
                        
                        <h3>For Partnerships/LLCs</h3>
                        <ul>
                            <li><strong>Form 1065:</strong> Partnership Return</li>
                            <li><strong>Schedule K-1:</strong> Each partner's share of income (issued to partners)</li>
                        </ul>
                        
                        <h3>For Corporations</h3>
                        <ul>
                            <li><strong>Form 1120:</strong> C Corporation Return</li>
                            <li><strong>Form 1120S:</strong> S Corporation Return</li>
                        </ul>
                        
                        <h3>Payroll Forms</h3>
                        <ul>
                            <li><strong>Form W-2:</strong> Employee wage statement</li>
                            <li><strong>Form 941:</strong> Quarterly payroll tax report</li>
                            <li><strong>Form 940:</strong> Annual unemployment tax</li>
                        </ul>
                        
                        <h3>Information Returns</h3>
                        <ul>
                            <li><strong>Form 1099-NEC:</strong> Payments to contractors</li>
                            <li><strong>Form 1099-INT:</strong> Interest payments</li>
                            <li><strong>Form 1099-DIV:</strong> Dividend payments</li>
                        </ul>
                        
                        <div class="highlight">
                            <strong>Keeping Records:</strong> Keep all tax records for at least 7 years. The IRS can audit up to 3 years back (6 years if significant underreporting).
                        </div>
                    `
                }
            ],
            quiz: [
                {
                    question: "What's the difference between tax avoidance and tax evasion?",
                    options: [
                        "They're the same thing",
                        "Avoidance is legal, evasion is illegal",
                        "Evasion is legal, avoidance is illegal",
                        "Both are illegal"
                    ],
                    correct: 1,
                    explanation: "Tax avoidance uses legal strategies to reduce taxes, while tax evasion is the illegal hiding of income or fraud."
                },
                {
                    question: "What is self-employment tax?",
                    options: [
                        "A penalty for being self-employed",
                        "Social Security and Medicare taxes (15.3%)",
                        "State income tax only",
                        "Optional insurance payment"
                    ],
                    correct: 1,
                    explanation: "Self-employment tax is 15.3% covering both the employer and employee portions of Social Security and Medicare taxes."
                },
                {
                    question: "When are quarterly estimated taxes due for Q1?",
                    options: [
                        "January 15",
                        "March 15",
                        "April 15",
                        "June 15"
                    ],
                    correct: 2,
                    explanation: "Q1 estimated taxes are due April 15, Q2 is June 15, Q3 is September 15, and Q4 is January 15."
                },
                {
                    question: "What form do sole proprietors use to report business income?",
                    options: [
                        "Form 1065",
                        "Schedule C (with Form 1040)",
                        "Form 1120",
                        "Form W-2"
                    ],
                    correct: 1,
                    explanation: "Sole proprietors report business income on Schedule C, which attaches to their personal Form 1040."
                },
                {
                    question: "How long should you keep tax records?",
                    options: [
                        "1 year",
                        "3 years",
                        "At least 7 years",
                        "Forever"
                    ],
                    correct: 2,
                    explanation: "Keep tax records for at least 7 years. The IRS can audit 3 years back, or 6 years if there's significant underreporting."
                }
            ]
        },
        {
            id: 2,
            title: 'Business Structures',
            subtitle: 'How your business type affects taxes',
            topics: [
                {
                    id: 'sole-proprietorship-taxes',
                    title: 'Sole Proprietorship Taxes',
                    content: `
                        <h2>Sole Proprietorship Taxes</h2>
                        
                        <div class="definition">
                            <strong>Sole Proprietorship:</strong> The simplest business structure. You and your business are the same legal entity.
                        </div>
                        
                        <h3>How It's Taxed</h3>
                        <ul>
                            <li>Business income flows directly to your personal tax return</li>
                            <li>Report on Schedule C (Form 1040)</li>
                            <li>Pay self-employment tax (15.3%) on net earnings</li>
                            <li>No separate business tax return</li>
                        </ul>
                        
                        <h3>Tax Advantages</h3>
                        <ul>
                            <li>Simplest to set up and maintain</li>
                            <li>No double taxation</li>
                            <li>Can deduct business losses against other income</li>
                            <li>Lowest administrative costs</li>
                        </ul>
                        
                        <h3>Tax Disadvantages</h3>
                        <ul>
                            <li>Full self-employment tax on all profits</li>
                            <li>No liability protection (personal assets at risk)</li>
                            <li>Harder to raise money</li>
                            <li>All income taxed in year earned</li>
                        </ul>
                        
                        <div class="example">
                            <strong>Example:</strong> You earn $80,000 profit as a sole proprietor.<br><br>
                            Self-Employment Tax: $80,000 × 15.3% = $12,240<br>
                            Plus income tax on $80,000 (minus deductions)<br>
                            You can deduct half of SE tax ($6,120) from income
                        </div>
                    `
                },
                {
                    id: 'llc-taxes',
                    title: 'LLC Taxes',
                    content: `
                        <h2>LLC Taxes</h2>
                        
                        <div class="definition">
                            <strong>LLC (Limited Liability Company):</strong> A flexible structure that provides liability protection while allowing various tax treatments.
                        </div>
                        
                        <h3>Default Tax Treatment</h3>
                        <ul>
                            <li><strong>Single-Member LLC:</strong> Taxed as sole proprietorship (Schedule C)</li>
                            <li><strong>Multi-Member LLC:</strong> Taxed as partnership (Form 1065)</li>
                        </ul>
                        
                        <h3>Electing Different Tax Treatment</h3>
                        <p>LLCs can elect to be taxed as:</p>
                        <ul>
                            <li><strong>S Corporation:</strong> File Form 2553</li>
                            <li><strong>C Corporation:</strong> File Form 8832</li>
                        </ul>
                        
                        <h3>Why Choose S Corp Election?</h3>
                        <div class="highlight">
                            <strong>The S Corp Advantage:</strong> Pay yourself a "reasonable salary" and take remaining profits as distributions, which are NOT subject to self-employment tax.
                        </div>
                        
                        <div class="example">
                            <strong>Example:</strong> LLC earns $100,000 profit<br><br>
                            <strong>As Sole Prop:</strong> SE tax on $100,000 = $15,300<br><br>
                            <strong>As S Corp:</strong><br>
                            $60,000 salary → SE tax ~$9,180<br>
                            $40,000 distribution → $0 SE tax<br>
                            Total SE tax: $9,180 (save $6,120!)
                        </div>
                        
                        <h3>When S Corp Makes Sense</h3>
                        <ul>
                            <li>Generally when profits exceed $40,000-50,000</li>
                            <li>Must pay "reasonable salary" for your role</li>
                            <li>Additional payroll/accounting costs to consider</li>
                        </ul>
                    `
                },
                {
                    id: 'scorp-taxes',
                    title: 'S Corporation Deep Dive',
                    content: `
                        <h2>S Corporation Taxes</h2>
                        
                        <div class="definition">
                            <strong>S Corporation:</strong> A tax election that passes income through to shareholders while avoiding double taxation.
                        </div>
                        
                        <h3>Requirements</h3>
                        <ul>
                            <li>100 or fewer shareholders</li>
                            <li>Only one class of stock</li>
                            <li>Shareholders must be US citizens/residents</li>
                            <li>Cannot be owned by other corporations</li>
                        </ul>
                        
                        <h3>How S Corps Are Taxed</h3>
                        <ol>
                            <li>Corporation files Form 1120S (informational)</li>
                            <li>Issues K-1 to each shareholder</li>
                            <li>Shareholders report income on personal returns</li>
                            <li>Corporation pays NO federal income tax</li>
                        </ol>
                        
                        <h3>The Reasonable Salary Requirement</h3>
                        <ul>
                            <li>Owner-employees MUST take a salary</li>
                            <li>IRS scrutinizes salaries that are too low</li>
                            <li>Compare to what you'd pay someone else for the job</li>
                            <li>Document your salary determination</li>
                        </ul>
                        
                        <h3>Tax Savings Calculation</h3>
                        <div class="example">
                            Business profit: $150,000<br>
                            Reasonable salary: $80,000<br>
                            Distribution: $70,000<br><br>
                            
                            Payroll taxes on $80,000: ~$12,240<br>
                            Taxes on $70,000 distribution: $0 payroll taxes!<br><br>
                            
                            <strong>vs Sole Proprietorship:</strong><br>
                            SE tax on $150,000: ~$21,200<br>
                            <strong>Savings: ~$8,960/year</strong>
                        </div>
                    `
                },
                {
                    id: 'ccorp-taxes',
                    title: 'C Corporation Taxes',
                    content: `
                        <h2>C Corporation Taxes</h2>
                        
                        <div class="definition">
                            <strong>C Corporation:</strong> A separate legal entity that pays its own taxes. The default for corporations.
                        </div>
                        
                        <h3>Double Taxation</h3>
                        <p>C Corps face "double taxation":</p>
                        <ol>
                            <li>Corporation pays 21% federal tax on profits</li>
                            <li>Shareholders pay tax on dividends received</li>
                        </ol>
                        
                        <div class="example">
                            <strong>Example:</strong> C Corp earns $100,000 profit<br><br>
                            Corporate tax: $100,000 × 21% = $21,000<br>
                            After-tax profit: $79,000<br><br>
                            If distributed as dividend:<br>
                            Shareholder tax (20% rate): $15,800<br><br>
                            Total tax: $36,800 (36.8% effective rate)
                        </div>
                        
                        <h3>When C Corp Makes Sense</h3>
                        <ul>
                            <li><strong>Reinvesting profits:</strong> 21% rate vs higher personal rates</li>
                            <li><strong>Seeking investors:</strong> VCs prefer C Corps</li>
                            <li><strong>Going public:</strong> Required for IPO</li>
                            <li><strong>Many shareholders:</strong> No S Corp limitations</li>
                        </ul>
                        
                        <h3>Tax Advantages</h3>
                        <ul>
                            <li>Flat 21% rate on retained earnings</li>
                            <li>More deduction options</li>
                            <li>Can provide more employee benefits</li>
                            <li>Easier to raise capital</li>
                        </ul>
                        
                        <h3>Avoiding Double Taxation</h3>
                        <ul>
                            <li>Pay salaries to owners (deductible)</li>
                            <li>Retain earnings for growth</li>
                            <li>Provide benefits instead of dividends</li>
                        </ul>
                    `
                }
            ],
            quiz: [
                {
                    question: "How is a single-member LLC taxed by default?",
                    options: [
                        "As a C Corporation",
                        "As a sole proprietorship",
                        "As an S Corporation",
                        "It pays no taxes"
                    ],
                    correct: 1,
                    explanation: "By default, a single-member LLC is taxed as a sole proprietorship, reporting income on Schedule C."
                },
                {
                    question: "What is the main tax advantage of S Corp election?",
                    options: [
                        "No taxes at all",
                        "Distributions avoid self-employment tax",
                        "Lower income tax rates",
                        "No filing requirements"
                    ],
                    correct: 1,
                    explanation: "S Corp distributions (beyond salary) are not subject to self-employment tax, potentially saving thousands."
                },
                {
                    question: "What does 'double taxation' mean for C Corporations?",
                    options: [
                        "You pay taxes twice a year",
                        "Corporate profits are taxed, then dividends are taxed again",
                        "Federal and state taxes",
                        "Two different tax rates apply"
                    ],
                    correct: 1,
                    explanation: "Double taxation means the corporation pays tax on profits, then shareholders pay tax again when receiving dividends."
                },
                {
                    question: "What is the federal corporate tax rate for C Corps?",
                    options: [
                        "15%",
                        "21%",
                        "35%",
                        "It varies by income"
                    ],
                    correct: 1,
                    explanation: "The federal corporate tax rate is a flat 21% for C Corporations."
                },
                {
                    question: "S Corp owner-employees must:",
                    options: [
                        "Take no salary",
                        "Pay a reasonable salary to themselves",
                        "Only take dividends",
                        "Work at least 40 hours weekly"
                    ],
                    correct: 1,
                    explanation: "S Corp owner-employees must pay themselves a 'reasonable salary' for their work. The IRS scrutinizes salaries that are too low."
                }
            ]
        },
        {
            id: 3,
            title: 'Deductions & Write-Offs',
            subtitle: 'Legitimate ways to reduce taxable income',
            topics: [
                {
                    id: 'understanding-deductions',
                    title: 'How Deductions Work',
                    content: `
                        <h2>Understanding Tax Deductions</h2>
                        
                        <div class="definition">
                            <strong>Tax Deduction:</strong> An expense you can subtract from your income before calculating taxes. Reduces your taxable income, not your actual tax dollar-for-dollar.
                        </div>
                        
                        <h3>Deduction vs Credit</h3>
                        <ul>
                            <li><strong>Deduction:</strong> Reduces taxable income</li>
                            <li><strong>Credit:</strong> Reduces actual tax owed (more valuable!)</li>
                        </ul>
                        
                        <div class="example">
                            <strong>Example:</strong> You're in the 22% tax bracket<br><br>
                            $1,000 deduction saves: $1,000 × 22% = <strong>$220</strong><br>
                            $1,000 credit saves: <strong>$1,000</strong> (dollar for dollar)
                        </div>
                        
                        <h3>The "Ordinary and Necessary" Rule</h3>
                        <p>To be deductible, an expense must be:</p>
                        <ul>
                            <li><strong>Ordinary:</strong> Common in your industry</li>
                            <li><strong>Necessary:</strong> Helpful for your business</li>
                            <li><strong>Reasonable:</strong> Not excessive</li>
                        </ul>
                        
                        <h3>Documentation Requirements</h3>
                        <ul>
                            <li>Keep receipts for all business expenses</li>
                            <li>Note the business purpose</li>
                            <li>Separate personal and business expenses</li>
                            <li>Use a dedicated business bank account/card</li>
                        </ul>
                        
                        <div class="highlight">
                            <strong>Important:</strong> A deduction is NOT "free money." Spending $1,000 to get a $220 tax break still costs you $780. Only spend on things your business actually needs.
                        </div>
                    `
                },
                {
                    id: 'common-deductions',
                    title: 'Common Business Deductions',
                    content: `
                        <h2>Common Business Deductions</h2>
                        
                        <h3>Operating Expenses</h3>
                        <ul>
                            <li><strong>Rent:</strong> Office, retail space, warehouse</li>
                            <li><strong>Utilities:</strong> Electric, gas, water, internet</li>
                            <li><strong>Supplies:</strong> Office supplies, materials</li>
                            <li><strong>Insurance:</strong> Business liability, health (for self-employed)</li>
                        </ul>
                        
                        <h3>Professional Services</h3>
                        <ul>
                            <li><strong>Accounting:</strong> Tax prep, bookkeeping</li>
                            <li><strong>Legal:</strong> Contracts, business formation</li>
                            <li><strong>Consulting:</strong> Business advice, coaching</li>
                            <li><strong>Contractors:</strong> Freelancers, subcontractors</li>
                        </ul>
                        
                        <h3>Marketing & Sales</h3>
                        <ul>
                            <li><strong>Advertising:</strong> Online ads, print, radio</li>
                            <li><strong>Website:</strong> Hosting, domain, design</li>
                            <li><strong>Business cards:</strong> Printing, design</li>
                            <li><strong>Promotional items:</strong> Giveaways, samples</li>
                        </ul>
                        
                        <h3>Travel & Meals</h3>
                        <ul>
                            <li><strong>Business travel:</strong> Flights, hotels, car rental (100%)</li>
                            <li><strong>Business meals:</strong> With clients/prospects (50%)</li>
                            <li><strong>Conference attendance:</strong> Registration, travel</li>
                        </ul>
                        
                        <h3>Technology & Equipment</h3>
                        <ul>
                            <li><strong>Computers:</strong> Hardware, software</li>
                            <li><strong>Phones:</strong> Business phone/plan</li>
                            <li><strong>Subscriptions:</strong> SaaS tools, apps</li>
                        </ul>
                        
                        <div class="highlight">
                            <strong>The 50% Rule:</strong> Business meals are only 50% deductible. A $100 client dinner = $50 deduction.
                        </div>
                    `
                },
                {
                    id: 'home-office-deduction',
                    title: 'Home Office Deduction',
                    content: `
                        <h2>Home Office Deduction</h2>
                        
                        <div class="definition">
                            <strong>Home Office Deduction:</strong> Allows you to deduct a portion of home expenses if you use part of your home exclusively for business.
                        </div>
                        
                        <h3>Requirements</h3>
                        <ul>
                            <li><strong>Regular and Exclusive Use:</strong> Used only for business</li>
                            <li><strong>Principal Place of Business:</strong> Main location for work OR where you meet clients</li>
                            <li>Must be self-employed or receive Form 1099</li>
                            <li>W-2 employees generally cannot claim this</li>
                        </ul>
                        
                        <h3>Two Calculation Methods</h3>
                        
                        <p><strong>1. Simplified Method</strong></p>
                        <ul>
                            <li>$5 per square foot</li>
                            <li>Maximum 300 square feet</li>
                            <li>Maximum deduction: $1,500</li>
                            <li>Easiest to calculate</li>
                        </ul>
                        
                        <p><strong>2. Regular Method</strong></p>
                        <ul>
                            <li>Calculate percentage of home used</li>
                            <li>Deduct that percentage of: mortgage interest/rent, utilities, insurance, repairs, depreciation</li>
                            <li>More work but often larger deduction</li>
                        </ul>
                        
                        <div class="example">
                            <strong>Regular Method Example:</strong><br>
                            Home: 2,000 sq ft, Office: 200 sq ft<br>
                            Business use: 10%<br><br>
                            Annual home expenses:<br>
                            Rent: $18,000 × 10% = $1,800<br>
                            Utilities: $2,400 × 10% = $240<br>
                            Internet: $1,200 × 10% = $120<br>
                            <strong>Total deduction: $2,160</strong>
                        </div>
                    `
                },
                {
                    id: 'vehicle-deduction',
                    title: 'Vehicle & Mileage Deductions',
                    content: `
                        <h2>Vehicle & Mileage Deductions</h2>
                        
                        <h3>Two Methods</h3>
                        
                        <p><strong>1. Standard Mileage Rate</strong></p>
                        <ul>
                            <li>2024 rate: 67 cents per business mile</li>
                            <li>Track miles driven for business</li>
                            <li>Simple calculation</li>
                            <li>Cannot use if you claimed depreciation in prior years</li>
                        </ul>
                        
                        <p><strong>2. Actual Expenses</strong></p>
                        <ul>
                            <li>Gas, insurance, repairs, depreciation</li>
                            <li>Multiply by business use percentage</li>
                            <li>Requires detailed record keeping</li>
                            <li>Better for expensive vehicles with high business use</li>
                        </ul>
                        
                        <div class="example">
                            <strong>Comparison:</strong> 10,000 business miles<br><br>
                            <strong>Standard Rate:</strong><br>
                            10,000 × $0.67 = $6,700<br><br>
                            <strong>Actual Expenses:</strong><br>
                            Total car costs: $8,000/year<br>
                            Business use: 60%<br>
                            Deduction: $8,000 × 60% = $4,800<br><br>
                            Standard rate wins in this example!
                        </div>
                        
                        <h3>What Counts as Business Miles</h3>
                        <ul>
                            <li>✓ Driving to meet clients</li>
                            <li>✓ Going to the bank/post office for business</li>
                            <li>✓ Traveling between work locations</li>
                            <li>✗ Commuting from home to a regular office</li>
                        </ul>
                        
                        <div class="highlight">
                            <strong>Pro Tip:</strong> Use a mileage tracking app (like MileIQ or Everlance) to automatically log business trips. The IRS requires contemporaneous records.
                        </div>
                    `
                },
                {
                    id: 'depreciation',
                    title: 'Depreciation & Section 179',
                    content: `
                        <h2>Depreciation & Section 179</h2>
                        
                        <div class="definition">
                            <strong>Depreciation:</strong> Spreading the cost of expensive assets over their useful life instead of deducting all at once.
                        </div>
                        
                        <h3>Why Depreciation Exists</h3>
                        <ul>
                            <li>Assets provide value over many years</li>
                            <li>Matching expenses to the periods they benefit</li>
                            <li>Required for assets over $2,500</li>
                        </ul>
                        
                        <h3>Section 179 Deduction</h3>
                        <div class="definition">
                            <strong>Section 179:</strong> Allows immediate deduction of the full cost of qualifying equipment in the year purchased, instead of depreciating over time.
                        </div>
                        
                        <ul>
                            <li>2024 limit: $1,160,000</li>
                            <li>Applies to equipment, vehicles, software</li>
                            <li>Must be used more than 50% for business</li>
                        </ul>
                        
                        <h3>Bonus Depreciation</h3>
                        <ul>
                            <li>Additional first-year depreciation</li>
                            <li>Currently 60% in 2024 (decreasing each year)</li>
                            <li>Can be combined with Section 179</li>
                        </ul>
                        
                        <div class="example">
                            <strong>Example:</strong> You buy a $50,000 vehicle for business<br><br>
                            <strong>Without Section 179:</strong><br>
                            Depreciate over 5 years: ~$10,000/year<br><br>
                            <strong>With Section 179:</strong><br>
                            Deduct full $50,000 in year 1<br>
                            (Subject to limits and business use %)<br><br>
                            <strong>Tax savings (25% bracket):</strong> $12,500 THIS year vs spread out
                        </div>
                        
                        <div class="highlight">
                            <strong>Strategic Use:</strong> Section 179 is powerful in high-income years when you need deductions. But don't buy things just for the deduction!
                        </div>
                    `
                }
            ],
            quiz: [
                {
                    question: "What makes a business expense deductible?",
                    options: [
                        "Any expense you want",
                        "Ordinary and necessary for business",
                        "Only expenses over $500",
                        "Only approved by the IRS in advance"
                    ],
                    correct: 1,
                    explanation: "Expenses must be 'ordinary and necessary' for your type of business to be deductible."
                },
                {
                    question: "What percentage of business meals can you deduct?",
                    options: [
                        "100%",
                        "75%",
                        "50%",
                        "25%"
                    ],
                    correct: 2,
                    explanation: "Business meals with clients are 50% deductible."
                },
                {
                    question: "What is the simplified home office deduction rate?",
                    options: [
                        "$3 per square foot",
                        "$5 per square foot",
                        "$10 per square foot",
                        "10% of rent"
                    ],
                    correct: 1,
                    explanation: "The simplified method allows $5 per square foot, up to 300 square feet ($1,500 max)."
                },
                {
                    question: "What is Section 179?",
                    options: [
                        "A tax on equipment",
                        "Immediate deduction of equipment cost instead of depreciating",
                        "A type of business structure",
                        "A tax credit"
                    ],
                    correct: 1,
                    explanation: "Section 179 allows businesses to deduct the full cost of qualifying equipment in the year purchased, rather than depreciating over time."
                },
                {
                    question: "Which is MORE valuable: a $1,000 deduction or $1,000 credit?",
                    options: [
                        "Deduction",
                        "Credit",
                        "They're equal",
                        "Depends on income"
                    ],
                    correct: 1,
                    explanation: "A credit reduces your tax dollar-for-dollar ($1,000), while a deduction only reduces taxable income (saving $220-$370 depending on bracket)."
                }
            ]
        },
        {
            id: 4,
            title: 'Tax Strategy',
            subtitle: 'Planning and optimizing your tax situation',
            topics: [
                {
                    id: 'quarterly-taxes',
                    title: 'Quarterly Estimated Taxes',
                    content: `
                        <h2>Quarterly Estimated Taxes</h2>
                        
                        <div class="definition">
                            <strong>Estimated Taxes:</strong> Pay-as-you-go tax payments required when taxes aren't withheld from your income (self-employment, investments, etc.)
                        </div>
                        
                        <h3>Who Must Pay</h3>
                        <ul>
                            <li>Self-employed individuals</li>
                            <li>Business owners with pass-through income</li>
                            <li>Those expecting to owe $1,000+ in taxes</li>
                            <li>Income not subject to withholding</li>
                        </ul>
                        
                        <h3>Due Dates</h3>
                        <ul>
                            <li><strong>Q1:</strong> April 15</li>
                            <li><strong>Q2:</strong> June 15</li>
                            <li><strong>Q3:</strong> September 15</li>
                            <li><strong>Q4:</strong> January 15 (next year)</li>
                        </ul>
                        
                        <h3>Safe Harbor Rules</h3>
                        <p>Avoid penalties by paying at least:</p>
                        <ul>
                            <li>100% of last year's tax liability, OR</li>
                            <li>90% of current year's liability</li>
                            <li>(110% of prior year if income > $150,000)</li>
                        </ul>
                        
                        <h3>How to Calculate</h3>
                        <ol>
                            <li>Estimate annual income</li>
                            <li>Subtract estimated deductions</li>
                            <li>Calculate tax on taxable income</li>
                            <li>Add self-employment tax</li>
                            <li>Divide by 4 for quarterly payments</li>
                        </ol>
                        
                        <div class="highlight">
                            <strong>Pro Tip:</strong> Use IRS Form 1040-ES worksheet or accounting software to calculate. Set aside 25-30% of each payment received for taxes.
                        </div>
                    `
                },
                {
                    id: 'retirement-accounts',
                    title: 'Retirement Account Tax Benefits',
                    content: `
                        <h2>Retirement Account Tax Benefits</h2>
                        
                        <p>Retirement accounts are one of the most powerful tax reduction tools for business owners.</p>
                        
                        <h3>SEP IRA</h3>
                        <div class="definition">
                            <strong>SEP IRA:</strong> Simplified Employee Pension. Easy to set up, high contribution limits.
                        </div>
                        <ul>
                            <li>Contribute up to 25% of net self-employment income</li>
                            <li>2024 limit: $69,000</li>
                            <li>Contributions are tax-deductible</li>
                            <li>No employee contributions</li>
                        </ul>
                        
                        <h3>Solo 401(k)</h3>
                        <div class="definition">
                            <strong>Solo 401(k):</strong> For self-employed with no employees. Highest contribution potential.
                        </div>
                        <ul>
                            <li><strong>Employee contribution:</strong> $23,000 (2024)</li>
                            <li><strong>Employer contribution:</strong> 25% of compensation</li>
                            <li><strong>Total limit:</strong> $69,000 (2024)</li>
                            <li>Can include Roth option</li>
                        </ul>
                        
                        <h3>SIMPLE IRA</h3>
                        <ul>
                            <li>For businesses with ≤100 employees</li>
                            <li>Employee contribution: $16,000 (2024)</li>
                            <li>Employer match required</li>
                        </ul>
                        
                        <div class="example">
                            <strong>Tax Savings Example:</strong><br>
                            Self-employed income: $100,000<br>
                            Solo 401(k) contribution: $30,000<br>
                            Tax bracket: 24%<br><br>
                            <strong>Tax savings: $30,000 × 24% = $7,200</strong><br>
                            Plus the money grows tax-deferred!
                        </div>
                        
                        <div class="highlight">
                            <strong>Best Strategy:</strong> Max out retirement contributions before looking for other deductions. It's a guaranteed tax reduction AND builds wealth.
                        </div>
                    `
                },
                {
                    id: 'tax-credits',
                    title: 'Business Tax Credits',
                    content: `
                        <h2>Business Tax Credits</h2>
                        
                        <p>Credits reduce your tax dollar-for-dollar, making them more valuable than deductions.</p>
                        
                        <h3>Common Business Tax Credits</h3>
                        
                        <p><strong>R&D Tax Credit</strong></p>
                        <ul>
                            <li>For developing new products/processes</li>
                            <li>Up to 20% of qualified research expenses</li>
                            <li>Startups can offset payroll taxes</li>
                        </ul>
                        
                        <p><strong>Work Opportunity Tax Credit</strong></p>
                        <ul>
                            <li>Hiring from targeted groups (veterans, etc.)</li>
                            <li>$2,400-$9,600 per eligible employee</li>
                        </ul>
                        
                        <p><strong>Small Employer Health Insurance Credit</strong></p>
                        <ul>
                            <li>Up to 50% of premiums paid</li>
                            <li>Must have fewer than 25 employees</li>
                            <li>Average wages under $58,000</li>
                        </ul>
                        
                        <p><strong>Disabled Access Credit</strong></p>
                        <ul>
                            <li>Making business accessible</li>
                            <li>Up to $5,000 annually</li>
                        </ul>
                        
                        <h3>QBI Deduction (Not a Credit, But Important)</h3>
                        <div class="definition">
                            <strong>QBI Deduction:</strong> Qualified Business Income deduction. Up to 20% of pass-through business income. Effectively reduces your tax rate.
                        </div>
                        
                        <div class="example">
                            <strong>QBI Example:</strong><br>
                            Business income: $100,000<br>
                            QBI deduction: $100,000 × 20% = $20,000<br>
                            Tax bracket: 24%<br>
                            <strong>Savings: $20,000 × 24% = $4,800</strong>
                        </div>
                    `
                },
                {
                    id: 'loss-strategies',
                    title: 'Using Business Losses',
                    content: `
                        <h2>Using Business Losses Strategically</h2>
                        
                        <div class="definition">
                            <strong>Net Operating Loss (NOL):</strong> When business deductions exceed income. Can be valuable for reducing taxes in other years.
                        </div>
                        
                        <h3>How Losses Work</h3>
                        <ul>
                            <li>Business losses can offset other income (wages, investments)</li>
                            <li>Excess losses carry forward to future years</li>
                            <li>Can offset up to 80% of taxable income in carryforward years</li>
                        </ul>
                        
                        <h3>Strategic Use of Losses</h3>
                        <ul>
                            <li><strong>Startup years:</strong> Losses offset other income</li>
                            <li><strong>Major purchases:</strong> Section 179 can create losses</li>
                            <li><strong>High income years:</strong> Accelerate expenses</li>
                            <li><strong>Low income years:</strong> Defer deductions</li>
                        </ul>
                        
                        <div class="example">
                            <strong>Example:</strong><br>
                            W-2 job income: $80,000<br>
                            Side business loss: -$20,000<br><br>
                            Total taxable income: $60,000<br>
                            Tax savings (22% bracket): $4,400
                        </div>
                        
                        <h3>Hobby Loss Rules</h3>
                        <div class="highlight">
                            <strong>Warning:</strong> The IRS may classify your business as a "hobby" if you consistently lose money. To avoid this:
                            <ul>
                                <li>Show profit in 3 of 5 years</li>
                                <li>Operate in a businesslike manner</li>
                                <li>Keep detailed records</li>
                                <li>Have a clear profit motive</li>
                            </ul>
                        </div>
                    `
                },
                {
                    id: 'year-end-planning',
                    title: 'Year-End Tax Planning',
                    content: `
                        <h2>Year-End Tax Planning</h2>
                        
                        <h3>Before December 31</h3>
                        
                        <p><strong>If You Had a GOOD Year (high income):</strong></p>
                        <ul>
                            <li>Maximize retirement contributions</li>
                            <li>Prepay deductible expenses</li>
                            <li>Make equipment purchases (Section 179)</li>
                            <li>Pay bonuses before year-end</li>
                            <li>Defer income to next year if possible</li>
                        </ul>
                        
                        <p><strong>If You Had a LOW Year:</strong></p>
                        <ul>
                            <li>Accelerate income into this year</li>
                            <li>Delay expenses to next year</li>
                            <li>Take advantage of lower tax bracket</li>
                            <li>Consider Roth IRA conversion</li>
                        </ul>
                        
                        <h3>Review Your Situation</h3>
                        <ul>
                            <li>Calculate projected taxable income</li>
                            <li>Review quarterly tax payments</li>
                            <li>Check retirement contribution room</li>
                            <li>Review estimated vs actual expenses</li>
                        </ul>
                        
                        <h3>Documentation</h3>
                        <ul>
                            <li>Organize receipts by category</li>
                            <li>Update mileage logs</li>
                            <li>Document home office use</li>
                            <li>Prepare 1099s for contractors</li>
                        </ul>
                        
                        <div class="highlight">
                            <strong>Key Deadlines to Remember:</strong><br>
                            Dec 31: Last day for most deductions<br>
                            Jan 15: Q4 estimated taxes due<br>
                            Jan 31: W-2s and 1099s due to recipients<br>
                            April 15: Tax returns due (or extension)
                        </div>
                    `
                }
            ],
            quiz: [
                {
                    question: "What is the 'safe harbor' rule for estimated taxes?",
                    options: [
                        "Pay whatever you want",
                        "Pay 100% of last year's tax or 90% of current year",
                        "Only pay in December",
                        "Pay after April 15"
                    ],
                    correct: 1,
                    explanation: "Safe harbor means paying at least 100% of last year's tax liability or 90% of current year's to avoid penalties."
                },
                {
                    question: "What's the maximum Solo 401(k) contribution for 2024?",
                    options: [
                        "$23,000",
                        "$46,000",
                        "$69,000",
                        "$100,000"
                    ],
                    correct: 2,
                    explanation: "The total Solo 401(k) limit is $69,000 for 2024 (employee + employer contributions combined)."
                },
                {
                    question: "What is the QBI deduction?",
                    options: [
                        "A retirement account",
                        "Up to 20% deduction on pass-through business income",
                        "A tax credit for hiring",
                        "A type of business license"
                    ],
                    correct: 1,
                    explanation: "The Qualified Business Income deduction allows up to 20% of pass-through business income to be deducted."
                },
                {
                    question: "How can business losses be used?",
                    options: [
                        "They have no value",
                        "To offset other income and reduce taxes",
                        "Only against future business income",
                        "To get a refund from prior years"
                    ],
                    correct: 1,
                    explanation: "Business losses can offset other income (like wages) and reduce your overall tax bill."
                },
                {
                    question: "In a high-income year, you should generally:",
                    options: [
                        "Defer expenses to next year",
                        "Accelerate income",
                        "Maximize deductions and defer income",
                        "Do nothing different"
                    ],
                    correct: 2,
                    explanation: "In high-income years, maximize deductions (retirement, expenses, equipment) and defer income to next year when possible."
                }
            ]
        },
        {
            id: 5,
            title: 'Advanced Tax Topics',
            subtitle: 'Corporate strategies, audits, and compliance',
            topics: [
                {
                    id: 'corporate-tax-strategies',
                    title: 'How Big Companies Minimize Taxes',
                    content: `
                        <h2>How Corporations Minimize Taxes Legally</h2>
                        
                        <p>Large corporations use sophisticated (but legal) strategies to reduce taxes. Understanding these helps you apply similar principles.</p>
                        
                        <h3>Common Corporate Strategies</h3>
                        
                        <p><strong>1. Deferring Income</strong></p>
                        <ul>
                            <li>Keeping profits overseas</li>
                            <li>Using installment sales</li>
                            <li>Timing revenue recognition</li>
                        </ul>
                        
                        <p><strong>2. Accelerating Deductions</strong></p>
                        <ul>
                            <li>Aggressive depreciation</li>
                            <li>Prepaying expenses</li>
                            <li>Large R&D investments</li>
                        </ul>
                        
                        <p><strong>3. Tax Credits</strong></p>
                        <ul>
                            <li>R&D credits (billions claimed annually)</li>
                            <li>Energy credits</li>
                            <li>Job creation credits</li>
                        </ul>
                        
                        <p><strong>4. Business Structure</strong></p>
                        <ul>
                            <li>Holding companies</li>
                            <li>Subsidiaries in favorable jurisdictions</li>
                            <li>Intercompany transactions</li>
                        </ul>
                        
                        <h3>What Small Businesses Can Learn</h3>
                        <ul>
                            <li>Time income and expenses strategically</li>
                            <li>Take every legitimate deduction</li>
                            <li>Use retirement accounts aggressively</li>
                            <li>Choose the right business structure</li>
                            <li>Reinvest in growth (lower tax vs distribution)</li>
                        </ul>
                        
                        <div class="highlight">
                            <strong>Important:</strong> Most corporate tax strategies require scale to work. Focus on the fundamentals that apply to your business size.
                        </div>
                    `
                },
                {
                    id: 'audit-protection',
                    title: 'Audit Triggers and Protection',
                    content: `
                        <h2>Avoiding IRS Audits</h2>
                        
                        <h3>Red Flags That Trigger Audits</h3>
                        <ul>
                            <li><strong>Math errors:</strong> Double-check everything</li>
                            <li><strong>High deductions relative to income:</strong> Unusual ratios</li>
                            <li><strong>Round numbers:</strong> $10,000 exactly looks estimated</li>
                            <li><strong>Home office deduction:</strong> Highly scrutinized</li>
                            <li><strong>Consistent losses:</strong> "Hobby loss" concern</li>
                            <li><strong>Cash businesses:</strong> Higher audit rates</li>
                            <li><strong>Missing 1099s:</strong> IRS has copies</li>
                        </ul>
                        
                        <h3>Audit Protection Strategies</h3>
                        <ul>
                            <li><strong>Keep meticulous records:</strong> Receipts for everything</li>
                            <li><strong>Document business purpose:</strong> Note why expenses were needed</li>
                            <li><strong>Separate personal/business:</strong> Use dedicated accounts</li>
                            <li><strong>Be consistent:</strong> Same methods year to year</li>
                            <li><strong>File on time:</strong> Late returns attract attention</li>
                        </ul>
                        
                        <h3>If You're Audited</h3>
                        <ol>
                            <li><strong>Don't panic:</strong> Most are resolved favorably</li>
                            <li><strong>Respond promptly:</strong> Meet all deadlines</li>
                            <li><strong>Provide only what's asked:</strong> Don't volunteer extra info</li>
                            <li><strong>Get professional help:</strong> CPA or tax attorney</li>
                            <li><strong>Know your rights:</strong> You can appeal decisions</li>
                        </ol>
                        
                        <div class="highlight">
                            <strong>Statistics:</strong> Only about 0.4% of returns are audited. Keeping good records makes even an audit manageable.
                        </div>
                    `
                },
                {
                    id: 'international-taxes',
                    title: 'International Tax Basics',
                    content: `
                        <h2>International Tax Considerations</h2>
                        
                        <h3>US Tax on Worldwide Income</h3>
                        <div class="definition">
                            <strong>Key Principle:</strong> US citizens and residents pay US taxes on worldwide income, regardless of where it's earned.
                        </div>
                        
                        <h3>Foreign Income Exclusion</h3>
                        <ul>
                            <li>Exclude up to $126,500 (2024) of foreign earned income</li>
                            <li>Must live abroad 330+ days/year</li>
                            <li>Must have "tax home" in foreign country</li>
                        </ul>
                        
                        <h3>Foreign Tax Credit</h3>
                        <ul>
                            <li>Credit for taxes paid to other countries</li>
                            <li>Prevents double taxation</li>
                            <li>Dollar-for-dollar credit (up to limits)</li>
                        </ul>
                        
                        <h3>FBAR Reporting</h3>
                        <div class="definition">
                            <strong>FBAR:</strong> Foreign Bank Account Report. Required if foreign accounts exceed $10,000 at any time during the year.
                        </div>
                        <ul>
                            <li>Separate from tax return</li>
                            <li>Due April 15 (auto-extended to October)</li>
                            <li>Severe penalties for non-compliance</li>
                        </ul>
                        
                        <h3>Selling to International Customers</h3>
                        <ul>
                            <li>Generally, income is taxed where you're located</li>
                            <li>No US sales tax on international sales</li>
                            <li>May have VAT obligations in customer's country</li>
                        </ul>
                        
                        <div class="highlight">
                            <strong>Seek Professional Help:</strong> International taxes are complex. If you have foreign income or assets, consult a tax professional.
                        </div>
                    `
                },
                {
                    id: 'hiring-tax-implications',
                    title: 'Tax Implications of Hiring',
                    content: `
                        <h2>Tax Implications of Hiring</h2>
                        
                        <h3>Employee vs Contractor</h3>
                        
                        <p><strong>Employees (W-2):</strong></p>
                        <ul>
                            <li>You pay 7.65% employer payroll tax</li>
                            <li>Withhold employee's income and payroll taxes</li>
                            <li>Pay unemployment insurance</li>
                            <li>May need workers' comp</li>
                        </ul>
                        
                        <p><strong>Contractors (1099):</strong></p>
                        <ul>
                            <li>No payroll taxes</li>
                            <li>No withholding</li>
                            <li>No benefits required</li>
                            <li>But: IRS scrutinizes misclassification!</li>
                        </ul>
                        
                        <h3>Classification Test</h3>
                        <p>IRS looks at three areas:</p>
                        <ul>
                            <li><strong>Behavioral:</strong> Do you control what/how they work?</li>
                            <li><strong>Financial:</strong> Do you control business aspects?</li>
                            <li><strong>Relationship:</strong> Written contracts, benefits, permanence</li>
                        </ul>
                        
                        <h3>True Cost of an Employee</h3>
                        <div class="example">
                            <strong>Example:</strong> $50,000 salary employee<br><br>
                            Salary: $50,000<br>
                            Employer payroll tax (7.65%): $3,825<br>
                            Unemployment insurance: ~$420<br>
                            Workers' comp: ~$500<br>
                            Benefits: Variable<br><br>
                            <strong>True cost: $54,745+ (before benefits)</strong>
                        </div>
                        
                        <div class="highlight">
                            <strong>Warning:</strong> Misclassifying employees as contractors can result in back taxes, penalties, and interest. When in doubt, treat workers as employees.
                        </div>
                    `
                },
                {
                    id: 'building-tax-team',
                    title: 'Building Your Tax Team',
                    content: `
                        <h2>Building Your Tax Team</h2>
                        
                        <h3>When to DIY vs Hire Help</h3>
                        
                        <p><strong>You Can DIY If:</strong></p>
                        <ul>
                            <li>Simple sole proprietorship</li>
                            <li>Few transactions</li>
                            <li>Comfortable with tax software</li>
                            <li>Time to learn and do it right</li>
                        </ul>
                        
                        <p><strong>Hire Help When:</strong></p>
                        <ul>
                            <li>Business income exceeds $50,000</li>
                            <li>Multiple income sources</li>
                            <li>Employees or complex structure</li>
                            <li>Significant deductions to optimize</li>
                            <li>Multi-state or international activity</li>
                        </ul>
                        
                        <h3>Types of Tax Professionals</h3>
                        
                        <p><strong>Bookkeeper</strong></p>
                        <ul>
                            <li>Day-to-day transaction recording</li>
                            <li>Monthly reconciliation</li>
                            <li>$200-$500/month</li>
                        </ul>
                        
                        <p><strong>CPA (Certified Public Accountant)</strong></p>
                        <ul>
                            <li>Tax planning and preparation</li>
                            <li>Financial statement review</li>
                            <li>$500-$3,000+ for tax prep</li>
                        </ul>
                        
                        <p><strong>Tax Attorney</strong></p>
                        <ul>
                            <li>Complex legal/tax issues</li>
                            <li>IRS disputes and audits</li>
                            <li>$300-$500+/hour</li>
                        </ul>
                        
                        <h3>Questions to Ask</h3>
                        <ul>
                            <li>Experience with your industry?</li>
                            <li>Credentials and licensing?</li>
                            <li>Availability year-round?</li>
                            <li>Fee structure?</li>
                            <li>Will they represent you in an audit?</li>
                        </ul>
                        
                        <div class="highlight">
                            <strong>ROI of Good Tax Help:</strong> A good CPA typically saves more in taxes than they cost. They spot deductions you'd miss and keep you compliant.
                        </div>
                    `
                }
            ],
            quiz: [
                {
                    question: "What percentage of tax returns are typically audited?",
                    options: [
                        "About 10%",
                        "About 5%",
                        "About 0.4%",
                        "About 25%"
                    ],
                    correct: 2,
                    explanation: "Only about 0.4% of returns are audited. Good records make even an audit manageable."
                },
                {
                    question: "What is FBAR?",
                    options: [
                        "A type of retirement account",
                        "Foreign Bank Account Report (for accounts over $10,000)",
                        "A business structure",
                        "A tax deduction"
                    ],
                    correct: 1,
                    explanation: "FBAR (Foreign Bank Account Report) is required if your foreign accounts exceed $10,000 at any time during the year."
                },
                {
                    question: "What's a major risk of misclassifying employees as contractors?",
                    options: [
                        "No risk at all",
                        "Slightly higher taxes",
                        "Back taxes, penalties, and interest",
                        "Loss of business license"
                    ],
                    correct: 2,
                    explanation: "Misclassification can result in back taxes, penalties, interest, and potential legal issues. The IRS actively investigates this."
                },
                {
                    question: "When should you hire a CPA?",
                    options: [
                        "Only if you're audited",
                        "When business income exceeds $50,000 or complexity increases",
                        "Only for corporations",
                        "Never, always do taxes yourself"
                    ],
                    correct: 1,
                    explanation: "Consider hiring a CPA when business income exceeds $50,000, you have employees, multiple income sources, or complex deductions."
                },
                {
                    question: "US citizens pay taxes on:",
                    options: [
                        "Only US income",
                        "Worldwide income regardless of where earned",
                        "Only income over $100,000",
                        "Only business income"
                    ],
                    correct: 1,
                    explanation: "US citizens and residents are taxed on worldwide income, regardless of where it's earned. Foreign tax credits help prevent double taxation."
                }
            ]
        }
    ]
};
