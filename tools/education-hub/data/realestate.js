// Real Estate Investing Curriculum Data
const realestateData = {
    id: 'realestate',
    title: 'Real Estate Investing',
    icon: '🏠',
    description: 'Learn how to build wealth through real estate, from REITs to rental properties.',
    graduationGoal: 'Ready to analyze and invest in your first property',
    difficulty: 'intermediate',
    prerequisites: ['personalfinance', 'investing'],
    learningObjectives: [
        'Understand different real estate investment strategies',
        'Analyze properties for investment potential',
        'Calculate cash flow and return on investment',
        'Navigate financing and mortgages for investment properties',
        'Manage rental properties or invest in REITs'
    ],
    relatedTracks: ['investing', 'stocks', 'personalfinance'],
    resources: [
        { title: 'BiggerPockets - Real Estate Investing', url: 'https://www.biggerpockets.com/' },
        { title: 'NAREIT - REIT Education', url: 'https://www.reit.com/investing/reit-basics' }
    ],
    levels: [
        {
            id: 1,
            title: 'Real Estate Fundamentals',
            subtitle: 'Understanding different types of real estate investments',
            topics: [
                {
                    id: 'why-real-estate',
                    title: 'Why Invest in Real Estate?',
                    content: `
                        <h2>Why Invest in Real Estate?</h2>
                        <div class="definition">
                            <strong>Real Estate Investing:</strong> Using property to generate income or build wealth through appreciation, rental income, or both.
                        </div>
                        <h3>Benefits of Real Estate</h3>
                        <ul>
                            <li><strong>Passive Income:</strong> Rental properties can generate monthly cash flow</li>
                            <li><strong>Appreciation:</strong> Property values tend to increase over time</li>
                            <li><strong>Tax Benefits:</strong> Depreciation, deductions, and 1031 exchanges</li>
                            <li><strong>Leverage:</strong> Use borrowed money to control larger assets</li>
                            <li><strong>Inflation Hedge:</strong> Real assets protect against currency devaluation</li>
                            <li><strong>Tangible Asset:</strong> Unlike stocks, you can see and touch your investment</li>
                        </ul>
                        <h3>The Wealth Building Formula</h3>
                        <div class="highlight">
                            <strong>Cash Flow + Appreciation + Loan Paydown + Tax Benefits = Total Return</strong>
                            <p>Real estate is unique because you earn in four different ways simultaneously.</p>
                        </div>
                    `
                },
                {
                    id: 'types-of-investments',
                    title: 'Types of Real Estate Investments',
                    content: `
                        <h2>Types of Real Estate Investments</h2>
                        <h3>Direct Ownership</h3>
                        <ul>
                            <li><strong>Single-Family Homes:</strong> Houses rented to one tenant/family</li>
                            <li><strong>Multi-Family:</strong> Duplexes, triplexes, apartment buildings</li>
                            <li><strong>Commercial:</strong> Office buildings, retail, industrial</li>
                            <li><strong>Vacation Rentals:</strong> Airbnb, VRBO properties</li>
                            <li><strong>Land:</strong> Raw land for development or appreciation</li>
                        </ul>
                        <h3>Indirect Ownership</h3>
                        <ul>
                            <li><strong>REITs:</strong> Real Estate Investment Trusts (like stocks for real estate)</li>
                            <li><strong>Real Estate Crowdfunding:</strong> Pool money with other investors</li>
                            <li><strong>Real Estate Syndications:</strong> Group investments in larger deals</li>
                            <li><strong>Real Estate ETFs:</strong> Diversified baskets of REITs</li>
                        </ul>
                        <div class="example">
                            <strong>Starting Point Comparison:</strong><br>
                            REITs: $100 minimum<br>
                            Crowdfunding: $500-$1,000 minimum<br>
                            Rental Property: $20,000+ down payment
                        </div>
                    `
                },
                {
                    id: 'reits-explained',
                    title: 'REITs: Real Estate for Beginners',
                    content: `
                        <h2>REITs: Real Estate for Beginners</h2>
                        <div class="definition">
                            <strong>REIT (Real Estate Investment Trust):</strong> A company that owns, operates, or finances income-producing real estate. REITs trade like stocks and must pay 90% of taxable income as dividends.
                        </div>
                        <h3>Types of REITs</h3>
                        <ul>
                            <li><strong>Equity REITs:</strong> Own physical properties (most common)</li>
                            <li><strong>Mortgage REITs:</strong> Own real estate debt/mortgages</li>
                            <li><strong>Hybrid REITs:</strong> Mix of both</li>
                        </ul>
                        <h3>REIT Sectors</h3>
                        <ul>
                            <li>Residential (apartments)</li>
                            <li>Retail (malls, shopping centers)</li>
                            <li>Office buildings</li>
                            <li>Industrial/Warehouses</li>
                            <li>Healthcare facilities</li>
                            <li>Data centers</li>
                            <li>Cell towers</li>
                        </ul>
                        <div class="highlight">
                            <strong>Popular REITs:</strong> Realty Income (O), Prologis (PLD), American Tower (AMT), Public Storage (PSA)
                        </div>
                        <h3>Pros and Cons</h3>
                        <p><strong>Pros:</strong> Liquidity, diversification, dividends, no property management</p>
                        <p><strong>Cons:</strong> No leverage benefits, taxed as ordinary income, market volatility</p>
                    `
                },
                {
                    id: 'rental-vs-reits',
                    title: 'Physical Property vs REITs',
                    content: `
                        <h2>Physical Property vs REITs: Which is Right for You?</h2>
                        <h3>Choose Physical Property If:</h3>
                        <ul>
                            <li>You want maximum control over your investment</li>
                            <li>You can leverage financing (use bank's money)</li>
                            <li>You want significant tax benefits</li>
                            <li>You're willing to manage or hire management</li>
                            <li>You have $20,000+ for down payment</li>
                        </ul>
                        <h3>Choose REITs If:</h3>
                        <ul>
                            <li>You want passive, hands-off investing</li>
                            <li>You need liquidity (ability to sell quickly)</li>
                            <li>You want instant diversification</li>
                            <li>You have limited capital to start</li>
                            <li>You don't want landlord responsibilities</li>
                        </ul>
                        <div class="example">
                            <strong>Hybrid Approach:</strong> Many investors start with REITs while saving for their first rental property, then do both for maximum diversification.
                        </div>
                    `
                }
            ],
            quiz: [
                {
                    question: 'What are the four ways real estate can build wealth?',
                    options: [
                        'Stocks, bonds, crypto, and gold',
                        'Cash flow, appreciation, loan paydown, and tax benefits',
                        'Buying, selling, renting, and flipping',
                        'Interest, dividends, capital gains, and fees'
                    ],
                    correct: 1,
                    explanation: 'Real estate uniquely offers four wealth-building components: monthly cash flow from rent, property appreciation over time, tenants paying down your mortgage, and tax benefits like depreciation.'
                },
                {
                    question: 'What is a REIT?',
                    options: [
                        'A type of mortgage loan',
                        'A real estate license',
                        'A company that owns income-producing real estate and trades like a stock',
                        'A government housing program'
                    ],
                    correct: 2,
                    explanation: 'REITs (Real Estate Investment Trusts) are companies that own real estate portfolios and trade on stock exchanges, allowing anyone to invest in real estate with as little as $100.'
                },
                {
                    question: 'What percentage of taxable income must REITs pay as dividends?',
                    options: ['50%', '75%', '90%', '100%'],
                    correct: 2,
                    explanation: 'By law, REITs must distribute at least 90% of their taxable income to shareholders as dividends, which is why they often have high dividend yields.'
                },
                {
                    question: 'Which is NOT an advantage of physical rental property over REITs?',
                    options: [
                        'Leverage (using bank financing)',
                        'Liquidity (easy to sell quickly)',
                        'Tax benefits like depreciation',
                        'Control over the investment'
                    ],
                    correct: 1,
                    explanation: 'Liquidity is actually an advantage of REITs over physical property. You can sell REIT shares instantly, but selling a house takes weeks or months.'
                },
                {
                    question: 'What type of REIT owns physical properties like apartments and warehouses?',
                    options: ['Mortgage REIT', 'Equity REIT', 'Hybrid REIT', 'Private REIT'],
                    correct: 1,
                    explanation: 'Equity REITs own and operate physical real estate properties. They make money primarily from rent collected on those properties.'
                }
            ]
        },
        {
            id: 2,
            title: 'Analyzing Properties',
            subtitle: 'Learn the math behind real estate investments',
            topics: [
                {
                    id: 'cash-flow',
                    title: 'Understanding Cash Flow',
                    content: `
                        <h2>Understanding Cash Flow</h2>
                        <div class="definition">
                            <strong>Cash Flow:</strong> The money left over after collecting rent and paying all expenses. Positive cash flow means profit; negative means you're losing money monthly.
                        </div>
                        <h3>The Cash Flow Formula</h3>
                        <div class="example">
                            <strong>Gross Rent</strong><br>
                            - Vacancy (typically 5-10%)<br>
                            - Property Management (8-10%)<br>
                            - Repairs/Maintenance (5-10%)<br>
                            - Property Taxes<br>
                            - Insurance<br>
                            - Mortgage Payment (P&I)<br>
                            - Utilities (if included)<br>
                            - HOA Fees (if applicable)<br>
                            <strong>= Net Cash Flow</strong>
                        </div>
                        <h3>Example Analysis</h3>
                        <div class="example">
                            Monthly Rent: $1,500<br>
                            Vacancy (8%): -$120<br>
                            Management (10%): -$150<br>
                            Repairs (8%): -$120<br>
                            Taxes: -$200<br>
                            Insurance: -$100<br>
                            Mortgage: -$650<br>
                            <strong>Net Cash Flow: $160/month</strong>
                        </div>
                        <div class="highlight">
                            <strong>Rule of Thumb:</strong> Aim for at least $100-200 positive cash flow per unit per month to account for unexpected expenses.
                        </div>
                    `
                },
                {
                    id: 'cap-rate',
                    title: 'Cap Rate Explained',
                    content: `
                        <h2>Cap Rate (Capitalization Rate)</h2>
                        <div class="definition">
                            <strong>Cap Rate:</strong> The rate of return on a property based on its income, ignoring financing. It helps compare properties regardless of how they're financed.
                        </div>
                        <h3>Cap Rate Formula</h3>
                        <div class="example">
                            <strong>Cap Rate = (Net Operating Income / Property Price) × 100</strong>
                        </div>
                        <h3>Calculating NOI (Net Operating Income)</h3>
                        <p>NOI = Gross Income - Operating Expenses (NOT including mortgage)</p>
                        <div class="example">
                            Property Price: $200,000<br>
                            Annual Rent: $24,000<br>
                            Operating Expenses: $8,000<br>
                            NOI: $16,000<br>
                            <strong>Cap Rate: 8% ($16,000 / $200,000)</strong>
                        </div>
                        <h3>What's a Good Cap Rate?</h3>
                        <ul>
                            <li><strong>4-6%:</strong> Lower risk areas, appreciation markets (LA, NYC)</li>
                            <li><strong>6-8%:</strong> Balanced markets, good for beginners</li>
                            <li><strong>8-10%+:</strong> Higher risk/reward, often rural or declining areas</li>
                        </ul>
                        <div class="highlight">
                            <strong>Warning:</strong> Very high cap rates often indicate higher risk or hidden problems. Always investigate why a deal looks "too good."
                        </div>
                    `
                },
                {
                    id: 'cash-on-cash',
                    title: 'Cash-on-Cash Return',
                    content: `
                        <h2>Cash-on-Cash Return</h2>
                        <div class="definition">
                            <strong>Cash-on-Cash Return:</strong> The annual return on the actual cash you invested. Unlike cap rate, this factors in your financing.
                        </div>
                        <h3>Formula</h3>
                        <div class="example">
                            <strong>Cash-on-Cash = (Annual Cash Flow / Total Cash Invested) × 100</strong>
                        </div>
                        <h3>Example</h3>
                        <div class="example">
                            Purchase Price: $200,000<br>
                            Down Payment (20%): $40,000<br>
                            Closing Costs: $5,000<br>
                            <strong>Total Cash Invested: $45,000</strong><br><br>
                            Annual Cash Flow: $3,600 ($300/month)<br>
                            <strong>Cash-on-Cash Return: 8% ($3,600 / $45,000)</strong>
                        </div>
                        <h3>Why This Matters</h3>
                        <p>Cash-on-cash shows your actual return on the money you put in. A property with 5% cap rate might have 12% cash-on-cash return because you used leverage.</p>
                        <div class="highlight">
                            <strong>Target:</strong> Most investors aim for 8-12% cash-on-cash return. Above 15% is excellent but rare in good markets.
                        </div>
                    `
                },
                {
                    id: 'the-1-rule',
                    title: 'Quick Analysis: The 1% Rule',
                    content: `
                        <h2>The 1% Rule for Quick Analysis</h2>
                        <div class="definition">
                            <strong>The 1% Rule:</strong> A rental property should rent for at least 1% of its purchase price per month. This is a quick screening tool, not a final analysis.
                        </div>
                        <h3>Examples</h3>
                        <div class="example">
                            $100,000 property → Should rent for $1,000+/month<br>
                            $200,000 property → Should rent for $2,000+/month<br>
                            $300,000 property → Should rent for $3,000+/month
                        </div>
                        <h3>Reality Check</h3>
                        <ul>
                            <li><strong>Easy to find 1%:</strong> Midwest, South, rural areas</li>
                            <li><strong>Hard to find 1%:</strong> Coastal cities, high-cost markets</li>
                            <li><strong>0.8% rule:</strong> Many investors accept this in appreciating markets</li>
                        </ul>
                        <div class="highlight">
                            <strong>Important:</strong> The 1% rule is just a starting filter. Always run full numbers including all expenses before making an offer.
                        </div>
                        <h3>Other Quick Rules</h3>
                        <ul>
                            <li><strong>50% Rule:</strong> Assume 50% of rent goes to expenses (excluding mortgage)</li>
                            <li><strong>70% Rule (Flipping):</strong> Pay max 70% of ARV minus repairs</li>
                            <li><strong>2% Rule:</strong> Aggressive version of 1% rule for high cash flow</li>
                        </ul>
                    `
                }
            ],
            quiz: [
                {
                    question: 'What is cash flow in real estate?',
                    options: [
                        'The purchase price of a property',
                        'Money left over after collecting rent and paying all expenses',
                        'The down payment amount',
                        'The property appreciation rate'
                    ],
                    correct: 1,
                    explanation: 'Cash flow is the net income remaining after you collect rent and pay all operating expenses and the mortgage. Positive cash flow means profit.'
                },
                {
                    question: 'What does cap rate measure?',
                    options: [
                        'The return on a property ignoring financing',
                        'The maximum loan amount',
                        'The property tax rate',
                        'The insurance cost'
                    ],
                    correct: 0,
                    explanation: 'Cap rate (NOI / Property Price) measures the return based purely on the property\'s income, without considering how it\'s financed. It\'s useful for comparing properties.'
                },
                {
                    question: 'Using the 1% rule, what monthly rent should a $250,000 property generate?',
                    options: ['$1,000', '$2,000', '$2,500', '$3,000'],
                    correct: 2,
                    explanation: 'The 1% rule suggests rent should be at least 1% of the purchase price. $250,000 × 1% = $2,500 per month.'
                },
                {
                    question: 'Which metric factors in your actual down payment and financing?',
                    options: ['Cap rate', 'NOI', 'Cash-on-cash return', 'Gross rent multiplier'],
                    correct: 2,
                    explanation: 'Cash-on-cash return (Annual Cash Flow / Cash Invested) shows your return on the actual money you put into the deal, including down payment and closing costs.'
                },
                {
                    question: 'A high cap rate (10%+) usually indicates:',
                    options: [
                        'A low-risk investment in a prime location',
                        'Higher risk or potential issues with the property/area',
                        'The property will definitely appreciate',
                        'Low property taxes'
                    ],
                    correct: 1,
                    explanation: 'Very high cap rates often signal higher risk—perhaps a declining area, property issues, or difficult tenants. Always investigate why a deal seems too good to be true.'
                }
            ]
        },
        {
            id: 3,
            title: 'Financing Options',
            subtitle: 'How to fund your real estate investments',
            topics: [
                {
                    id: 'conventional-loans',
                    title: 'Conventional Mortgages',
                    content: `
                        <h2>Conventional Mortgages</h2>
                        <div class="definition">
                            <strong>Conventional Loan:</strong> A mortgage not backed by a government agency. These are the most common loans for investment properties.
                        </div>
                        <h3>Investment Property Requirements</h3>
                        <ul>
                            <li><strong>Down Payment:</strong> 15-25% (vs 3-5% for primary residence)</li>
                            <li><strong>Credit Score:</strong> 620+ (680+ for best rates)</li>
                            <li><strong>Debt-to-Income:</strong> Usually under 45%</li>
                            <li><strong>Cash Reserves:</strong> 6+ months of payments</li>
                            <li><strong>Interest Rate:</strong> 0.5-0.75% higher than primary residence</li>
                        </ul>
                        <h3>Property Limits</h3>
                        <p>Fannie Mae allows up to 10 financed properties per borrower, but requirements get stricter after 4.</p>
                        <div class="highlight">
                            <strong>Pro Tip:</strong> Start with house hacking (live in one unit, rent others) to get owner-occupied rates with just 3-5% down.
                        </div>
                    `
                },
                {
                    id: 'fha-va-loans',
                    title: 'FHA and VA Loans',
                    content: `
                        <h2>Government-Backed Loans</h2>
                        <h3>FHA Loans</h3>
                        <ul>
                            <li><strong>Down Payment:</strong> 3.5% with 580+ credit</li>
                            <li><strong>Must be primary residence</strong></li>
                            <li><strong>Can buy up to 4 units</strong> (live in one, rent others)</li>
                            <li><strong>MIP (Mortgage Insurance):</strong> Required for life of loan</li>
                        </ul>
                        <div class="example">
                            <strong>FHA House Hack Strategy:</strong><br>
                            Buy a fourplex with 3.5% down<br>
                            Live in one unit, rent three<br>
                            Tenants pay your mortgage<br>
                            After 1 year, move out and keep as rental
                        </div>
                        <h3>VA Loans (Veterans)</h3>
                        <ul>
                            <li><strong>Down Payment:</strong> 0% down!</li>
                            <li><strong>No PMI</strong></li>
                            <li><strong>Must be primary residence</strong></li>
                            <li><strong>Can buy up to 4 units</strong></li>
                            <li><strong>Can use multiple times</strong></li>
                        </ul>
                        <div class="highlight">
                            <strong>Veterans:</strong> VA loans are arguably the best wealth-building tool available. You can buy a fourplex with $0 down!
                        </div>
                    `
                },
                {
                    id: 'creative-financing',
                    title: 'Creative Financing Strategies',
                    content: `
                        <h2>Creative Financing Strategies</h2>
                        <h3>Seller Financing</h3>
                        <p>The seller acts as the bank. You make payments directly to them instead of a traditional lender.</p>
                        <ul>
                            <li>No bank qualification needed</li>
                            <li>Negotiable terms</li>
                            <li>Often higher interest rates</li>
                            <li>Common with motivated sellers</li>
                        </ul>
                        <h3>Subject-To</h3>
                        <p>Take over the seller's existing mortgage payments without formally assuming the loan.</p>
                        <div class="highlight">
                            <strong>Warning:</strong> Subject-to deals have risks. The loan stays in the seller's name, and there's a "due on sale" clause risk.
                        </div>
                        <h3>Hard Money Loans</h3>
                        <ul>
                            <li>Short-term loans (6-24 months)</li>
                            <li>Based on property value, not your credit</li>
                            <li>High interest (10-15%)</li>
                            <li>Best for flips or BRRRR</li>
                        </ul>
                        <h3>Private Money</h3>
                        <p>Loans from individuals (family, friends, other investors). Terms are fully negotiable.</p>
                    `
                },
                {
                    id: 'down-payment-strategies',
                    title: 'Building Your Down Payment',
                    content: `
                        <h2>Building Your Down Payment</h2>
                        <h3>Traditional Saving</h3>
                        <ul>
                            <li>High-yield savings account</li>
                            <li>Automate savings each paycheck</li>
                            <li>Cut expenses aggressively</li>
                            <li>Take on side hustles</li>
                        </ul>
                        <h3>Creative Sources</h3>
                        <ul>
                            <li><strong>401(k) Loan:</strong> Borrow up to 50% of balance</li>
                            <li><strong>HELOC:</strong> Use existing home equity</li>
                            <li><strong>Gift Funds:</strong> Family gifts (with proper documentation)</li>
                            <li><strong>Cash-Out Refi:</strong> Pull equity from current property</li>
                            <li><strong>Partner:</strong> Bring a money partner, you bring the work</li>
                        </ul>
                        <div class="example">
                            <strong>Partnership Structure Example:</strong><br>
                            Partner A: Provides $40,000 down payment<br>
                            Partner B: Finds deal, manages property<br>
                            Split: 50/50 cash flow and equity
                        </div>
                        <div class="highlight">
                            <strong>Reality Check:</strong> Your first deal is the hardest. After that, you can use equity from existing properties to fund new ones.
                        </div>
                    `
                }
            ],
            quiz: [
                {
                    question: 'What is the typical down payment for a conventional investment property loan?',
                    options: ['3-5%', '10%', '15-25%', '50%'],
                    correct: 2,
                    explanation: 'Investment properties typically require 15-25% down with conventional financing, compared to 3-5% for a primary residence.'
                },
                {
                    question: 'How can you use an FHA loan for real estate investing?',
                    options: [
                        'Buy any investment property with 3.5% down',
                        'Buy a 1-4 unit property, live in one unit, rent the others',
                        'FHA loans cannot be used for investing',
                        'Only for commercial properties'
                    ],
                    correct: 1,
                    explanation: 'FHA loans require owner-occupancy, but you can buy up to a 4-unit property, live in one unit, and rent out the others—this is called house hacking.'
                },
                {
                    question: 'What is seller financing?',
                    options: [
                        'When the bank finances the seller',
                        'When the seller acts as the lender and you make payments to them',
                        'A type of government loan',
                        'Financing only for commercial properties'
                    ],
                    correct: 1,
                    explanation: 'In seller financing, the property seller acts as the bank. Instead of getting a traditional mortgage, you make payments directly to the seller over time.'
                },
                {
                    question: 'Hard money loans are best used for:',
                    options: [
                        'Long-term buy and hold rentals',
                        'Primary residences',
                        'Short-term projects like flips or BRRRR',
                        'Buying REITs'
                    ],
                    correct: 2,
                    explanation: 'Hard money loans have high interest rates (10-15%) but quick approval based on property value. They\'re ideal for short-term strategies like flipping where you\'ll repay quickly.'
                },
                {
                    question: 'What special benefit do VA loans offer for real estate investing?',
                    options: [
                        'Lower property taxes',
                        '0% down payment on up to 4-unit properties',
                        'No inspections required',
                        'Guaranteed appreciation'
                    ],
                    correct: 1,
                    explanation: 'VA loans allow veterans to purchase up to 4-unit properties with 0% down payment and no PMI, as long as they live in one unit. This is one of the best wealth-building tools available.'
                }
            ]
        },
        {
            id: 4,
            title: 'Rental Properties',
            subtitle: 'Managing properties and tenants',
            topics: [
                {
                    id: 'finding-properties',
                    title: 'Finding Good Rental Properties',
                    content: `
                        <h2>Finding Good Rental Properties</h2>
                        <h3>Where to Search</h3>
                        <ul>
                            <li><strong>MLS (via agent):</strong> Most listings, but competitive</li>
                            <li><strong>Zillow/Redfin:</strong> Good for market research</li>
                            <li><strong>Auction sites:</strong> Auction.com, Hubzu</li>
                            <li><strong>Wholesalers:</strong> Off-market deals</li>
                            <li><strong>Direct mail:</strong> Contact owners directly</li>
                            <li><strong>Driving for dollars:</strong> Find distressed properties</li>
                        </ul>
                        <h3>What to Look For</h3>
                        <ul>
                            <li><strong>Location:</strong> Good schools, low crime, job growth</li>
                            <li><strong>Numbers:</strong> Meets 1% rule or close to it</li>
                            <li><strong>Condition:</strong> Cosmetic fixes OK, avoid major structural issues</li>
                            <li><strong>Rental demand:</strong> Check vacancy rates in area</li>
                            <li><strong>Landlord-friendly state:</strong> Research eviction laws</li>
                        </ul>
                        <div class="highlight">
                            <strong>Pro Tip:</strong> Talk to local property managers. They know which neighborhoods rent well and which to avoid.
                        </div>
                    `
                },
                {
                    id: 'tenant-screening',
                    title: 'Tenant Screening',
                    content: `
                        <h2>Tenant Screening</h2>
                        <div class="definition">
                            <strong>Key Principle:</strong> A bad tenant can cost you thousands in unpaid rent, damages, and eviction costs. Screen thoroughly!
                        </div>
                        <h3>Screening Criteria</h3>
                        <ul>
                            <li><strong>Income:</strong> 3x monthly rent minimum</li>
                            <li><strong>Credit Score:</strong> 620+ (flexible based on market)</li>
                            <li><strong>Background Check:</strong> No violent crimes, recent evictions</li>
                            <li><strong>Rental History:</strong> Call previous landlords</li>
                            <li><strong>Employment:</strong> Verify current employment</li>
                        </ul>
                        <h3>Questions to Ask Previous Landlords</h3>
                        <ul>
                            <li>Did they pay rent on time?</li>
                            <li>Did they take care of the property?</li>
                            <li>Any noise complaints or issues?</li>
                            <li>Would you rent to them again?</li>
                        </ul>
                        <div class="highlight">
                            <strong>Warning:</strong> Follow Fair Housing laws. You cannot discriminate based on race, religion, national origin, sex, familial status, or disability.
                        </div>
                    `
                },
                {
                    id: 'property-management',
                    title: 'Self-Manage vs Property Manager',
                    content: `
                        <h2>Self-Manage vs Property Manager</h2>
                        <h3>Property Manager Responsibilities</h3>
                        <ul>
                            <li>Marketing and showing units</li>
                            <li>Screening tenants</li>
                            <li>Collecting rent</li>
                            <li>Handling maintenance requests</li>
                            <li>Coordinating repairs</li>
                            <li>Managing evictions</li>
                        </ul>
                        <h3>Cost: 8-10% of Monthly Rent</h3>
                        <div class="example">
                            $1,500 rent × 10% = $150/month<br>
                            Annual cost: $1,800
                        </div>
                        <h3>When to Self-Manage</h3>
                        <ul>
                            <li>Property is local (within 30 minutes)</li>
                            <li>You have time and patience</li>
                            <li>You want to learn the business</li>
                            <li>Tight margins where 10% matters</li>
                        </ul>
                        <h3>When to Hire a Manager</h3>
                        <ul>
                            <li>Out-of-state investing</li>
                            <li>You value your time highly</li>
                            <li>Multiple properties</li>
                            <li>You don't want tenant calls at 2am</li>
                        </ul>
                    `
                },
                {
                    id: 'landlord-basics',
                    title: 'Landlord Legal Basics',
                    content: `
                        <h2>Landlord Legal Basics</h2>
                        <h3>Essential Documents</h3>
                        <ul>
                            <li><strong>Lease Agreement:</strong> Use state-specific templates</li>
                            <li><strong>Move-in/Move-out Checklist:</strong> Document condition with photos</li>
                            <li><strong>Lead Paint Disclosure:</strong> Required for pre-1978 homes</li>
                            <li><strong>Security Deposit Receipt</strong></li>
                        </ul>
                        <h3>Know Your State Laws</h3>
                        <ul>
                            <li>Security deposit limits and return timelines</li>
                            <li>Required notice periods for entry</li>
                            <li>Eviction process and timelines</li>
                            <li>Rent control (if applicable)</li>
                        </ul>
                        <h3>Landlord-Friendly vs Tenant-Friendly States</h3>
                        <div class="example">
                            <strong>Landlord-Friendly:</strong> Texas, Florida, Arizona, Georgia<br>
                            <strong>Tenant-Friendly:</strong> California, New York, New Jersey
                        </div>
                        <div class="highlight">
                            <strong>Protect Yourself:</strong> Form an LLC to hold properties, get landlord insurance (not just homeowners), and keep meticulous records.
                        </div>
                    `
                }
            ],
            quiz: [
                {
                    question: 'What income-to-rent ratio should you look for in tenants?',
                    options: ['1x monthly rent', '2x monthly rent', '3x monthly rent', '5x monthly rent'],
                    correct: 2,
                    explanation: 'The standard is 3x monthly rent. If rent is $1,500, tenants should earn at least $4,500/month to afford it comfortably.'
                },
                {
                    question: 'What is the typical cost of a property manager?',
                    options: ['2-4% of rent', '8-10% of rent', '15-20% of rent', '25% of rent'],
                    correct: 1,
                    explanation: 'Property managers typically charge 8-10% of collected rent. Some also charge placement fees (50-100% of first month\'s rent) for finding new tenants.'
                },
                {
                    question: 'Which is NOT a landlord-friendly state?',
                    options: ['Texas', 'Florida', 'California', 'Georgia'],
                    correct: 2,
                    explanation: 'California has strong tenant protections including rent control in some areas, longer eviction timelines, and strict security deposit rules.'
                },
                {
                    question: 'What should you ALWAYS do at move-in and move-out?',
                    options: [
                        'Paint every room',
                        'Document property condition with photos and checklist',
                        'Replace all appliances',
                        'Install new locks'
                    ],
                    correct: 1,
                    explanation: 'Documenting condition with photos and a written checklist protects you from disputes about security deposit deductions and damage claims.'
                },
                {
                    question: 'What is the best question to ask a previous landlord?',
                    options: [
                        'How much rent did they pay?',
                        'What color did they paint the walls?',
                        'Would you rent to them again?',
                        'How many pets did they have?'
                    ],
                    correct: 2,
                    explanation: '"Would you rent to them again?" is the most revealing question. It\'s simple but forces the previous landlord to summarize their entire experience.'
                }
            ]
        },
        {
            id: 5,
            title: 'Advanced Strategies',
            subtitle: 'Scaling your real estate portfolio',
            topics: [
                {
                    id: 'house-hacking',
                    title: 'House Hacking',
                    content: `
                        <h2>House Hacking</h2>
                        <div class="definition">
                            <strong>House Hacking:</strong> Living in a property while renting out part of it to offset or eliminate your housing costs.
                        </div>
                        <h3>House Hacking Methods</h3>
                        <ul>
                            <li><strong>Multi-family:</strong> Buy duplex-fourplex, live in one unit</li>
                            <li><strong>Rent by room:</strong> Rent bedrooms in single-family home</li>
                            <li><strong>Basement/ADU:</strong> Rent accessory dwelling unit</li>
                            <li><strong>Airbnb room:</strong> Short-term rent a room</li>
                        </ul>
                        <div class="example">
                            <strong>Example:</strong><br>
                            Buy a duplex for $300,000<br>
                            FHA loan: $10,500 down (3.5%)<br>
                            Mortgage: $2,200/month<br>
                            Rent other unit: $1,500/month<br>
                            <strong>Your cost: $700/month</strong> (vs $2,000 for similar apartment)
                        </div>
                        <div class="highlight">
                            <strong>Why It Works:</strong> You get owner-occupied loan rates (lower), can use low down payment options (FHA, VA), and start building equity while others pay your mortgage.
                        </div>
                    `
                },
                {
                    id: 'brrrr-method',
                    title: 'The BRRRR Strategy',
                    content: `
                        <h2>The BRRRR Strategy</h2>
                        <div class="definition">
                            <strong>BRRRR:</strong> Buy, Rehab, Rent, Refinance, Repeat. A strategy to recycle your capital and build a portfolio faster.
                        </div>
                        <h3>The Process</h3>
                        <ol>
                            <li><strong>Buy:</strong> Purchase undervalued property (distressed, foreclosure)</li>
                            <li><strong>Rehab:</strong> Renovate to increase value</li>
                            <li><strong>Rent:</strong> Find tenant at market rate</li>
                            <li><strong>Refinance:</strong> Get new loan based on improved value</li>
                            <li><strong>Repeat:</strong> Use pulled-out equity for next property</li>
                        </ol>
                        <div class="example">
                            Buy: $80,000 (needs work)<br>
                            Rehab: $30,000<br>
                            Total Invested: $110,000<br>
                            After Repair Value (ARV): $150,000<br>
                            Refinance at 75% LTV: $112,500<br>
                            <strong>Cash Back: $2,500 + you own a rental!</strong>
                        </div>
                        <div class="highlight">
                            <strong>The Magic:</strong> In a perfect BRRRR, you get all your money back AND own a cash-flowing property. Then repeat infinitely.
                        </div>
                    `
                },
                {
                    id: '1031-exchange',
                    title: '1031 Tax-Deferred Exchange',
                    content: `
                        <h2>1031 Tax-Deferred Exchange</h2>
                        <div class="definition">
                            <strong>1031 Exchange:</strong> Sell an investment property and defer capital gains taxes by reinvesting proceeds into a "like-kind" property.
                        </div>
                        <h3>Rules</h3>
                        <ul>
                            <li><strong>Like-Kind:</strong> Any real estate for real estate (single-family to apartment is OK)</li>
                            <li><strong>45 Days:</strong> Must identify replacement property within 45 days</li>
                            <li><strong>180 Days:</strong> Must close on replacement within 180 days</li>
                            <li><strong>Equal or Greater:</strong> Must buy equal or greater value</li>
                            <li><strong>Qualified Intermediary:</strong> Must use a third party to hold funds</li>
                        </ul>
                        <div class="example">
                            Sell property for $300,000 (bought for $200,000)<br>
                            Capital gain: $100,000<br>
                            Potential tax (20%): $20,000<br>
                            <strong>With 1031:</strong> Roll into bigger property, pay $0 tax now
                        </div>
                        <div class="highlight">
                            <strong>Wealth Building:</strong> Many wealthy investors never pay capital gains. They keep doing 1031 exchanges into larger properties, then pass to heirs who get stepped-up basis.
                        </div>
                    `
                },
                {
                    id: 'scaling-portfolio',
                    title: 'Scaling Your Portfolio',
                    content: `
                        <h2>Scaling Your Portfolio</h2>
                        <h3>Path to 10+ Properties</h3>
                        <ol>
                            <li>House hack your first property (low money down)</li>
                            <li>Save for 12 months while building equity</li>
                            <li>Buy second rental (use equity for down payment)</li>
                            <li>Repeat, accelerating with BRRRR or partnerships</li>
                            <li>Consider commercial loans after 4-10 properties</li>
                        </ol>
                        <h3>Financing Beyond 10 Properties</h3>
                        <ul>
                            <li><strong>Portfolio Loans:</strong> Local banks bundle multiple properties</li>
                            <li><strong>Commercial Loans:</strong> Based on property income, not personal</li>
                            <li><strong>DSCR Loans:</strong> Debt Service Coverage Ratio loans for investors</li>
                            <li><strong>Private Money:</strong> Build relationships with private lenders</li>
                        </ul>
                        <h3>Passive Income Goals</h3>
                        <div class="example">
                            10 properties × $200 cash flow = $2,000/month<br>
                            20 properties × $200 cash flow = $4,000/month<br>
                            50 properties × $200 cash flow = $10,000/month
                        </div>
                        <div class="highlight">
                            <strong>The Goal:</strong> Replace your W-2 income with rental income, then work becomes optional.
                        </div>
                    `
                }
            ],
            quiz: [
                {
                    question: 'What is house hacking?',
                    options: [
                        'Breaking into houses',
                        'Living in a property while renting part of it out',
                        'Flipping houses quickly',
                        'Buying foreclosures'
                    ],
                    correct: 1,
                    explanation: 'House hacking means living in a property (like a duplex) while renting out other units to offset your housing costs. It\'s one of the best ways to start in real estate.'
                },
                {
                    question: 'What does BRRRR stand for?',
                    options: [
                        'Buy, Rent, Refinance, Repeat, Return',
                        'Buy, Rehab, Rent, Refinance, Repeat',
                        'Build, Renovate, Rent, Resell, Repeat',
                        'Buy, Repair, Rent, Resell, Repeat'
                    ],
                    correct: 1,
                    explanation: 'BRRRR stands for Buy, Rehab, Rent, Refinance, Repeat. You buy undervalued properties, fix them up, rent them, refinance to pull out your capital, then repeat with that capital.'
                },
                {
                    question: 'How long do you have to identify a replacement property in a 1031 exchange?',
                    options: ['30 days', '45 days', '90 days', '180 days'],
                    correct: 1,
                    explanation: 'In a 1031 exchange, you must identify potential replacement properties within 45 days and close within 180 days of selling your original property.'
                },
                {
                    question: 'What is the main benefit of a 1031 exchange?',
                    options: [
                        'Lower interest rates',
                        'No property taxes',
                        'Deferring capital gains taxes',
                        'Faster loan approval'
                    ],
                    correct: 2,
                    explanation: 'A 1031 exchange allows you to defer capital gains taxes when you sell an investment property by reinvesting the proceeds into a like-kind property.'
                },
                {
                    question: 'What type of loan is specifically designed for real estate investors based on property cash flow?',
                    options: ['FHA loan', 'VA loan', 'DSCR loan', 'Conventional loan'],
                    correct: 2,
                    explanation: 'DSCR (Debt Service Coverage Ratio) loans qualify based on the property\'s income rather than your personal income, making them ideal for scaling beyond traditional loan limits.'
                }
            ]
        }
    ]
};
