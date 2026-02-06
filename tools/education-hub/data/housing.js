// Housing & Home Ownership Curriculum Data
const housingData = {
    id: 'housing',
    title: 'Housing & Home Ownership',
    icon: '🏠',
    description: 'Navigate renting, buying, mortgages, and home maintenance. Housing is your biggest expense—master it.',
    whyItMatters: 'Housing typically takes 25-35% of your income. Making smart decisions here—whether renting or buying—can save or cost you hundreds of thousands of dollars over your lifetime.',
    graduationGoal: 'Make confident housing decisions and maintain your home',
    difficulty: 'beginner',
    prerequisites: ['personalfinance', 'credit'],
    learningObjectives: [
        'Decide whether to rent or buy',
        'Navigate the home buying process',
        'Understand mortgages and financing',
        'Maintain and protect your home',
        'Maximize your housing investment'
    ],
    relatedTracks: ['personalfinance', 'realestate', 'credit', 'california'],
    resources: [
        { title: 'HUD Housing Resources', url: 'https://www.hud.gov/' },
        { title: 'Consumer Financial Protection Bureau - Mortgages', url: 'https://www.consumerfinance.gov/owning-a-home/' }
    ],
    levels: [
        {
            id: 1,
            title: 'Renting Smart',
            subtitle: 'Get the most from renting',
            topics: [
                {
                    id: 'renting-basics',
                    title: 'Renting Fundamentals',
                    content: `
                        <h2>Renting Fundamentals</h2>
                        <h3>Renting Is Not "Throwing Money Away"</h3>
                        <ul>
                            <li>Flexibility to move for opportunities</li>
                            <li>No maintenance costs or surprises</li>
                            <li>No property taxes or HOA fees</li>
                            <li>Investment difference can go to stocks (often better returns)</li>
                            <li>Makes sense in expensive markets</li>
                        </ul>
                        <h3>The 30% Rule</h3>
                        <ul>
                            <li>Housing should be ≤30% of gross income</li>
                            <li>In expensive cities, may need to stretch to 35-40%</li>
                            <li>Include utilities in calculation</li>
                            <li>Lower = more financial flexibility</li>
                        </ul>
                        <h3>What Landlords Look For</h3>
                        <ul>
                            <li>Credit score (usually 620+ preferred)</li>
                            <li>Income 2.5-3x monthly rent</li>
                            <li>Rental history and references</li>
                            <li>Employment verification</li>
                            <li>Background check</li>
                        </ul>
                    `
                },
                {
                    id: 'apartment-hunting',
                    title: 'Smart Apartment Hunting',
                    content: `
                        <h2>Smart Apartment Hunting</h2>
                        <h3>Before You Search</h3>
                        <ul>
                            <li>Know your max budget (30% of gross income)</li>
                            <li>Check your credit score (know what you're working with)</li>
                            <li>Gather documents: pay stubs, ID, bank statements, references</li>
                            <li>Save for move-in costs: first month + deposit + moving expenses</li>
                        </ul>
                        <h3>What to Look For</h3>
                        <ul>
                            <li><strong>Location:</strong> Commute time, safety, walkability, grocery access</li>
                            <li><strong>True cost:</strong> Rent + utilities + parking + renters insurance</li>
                            <li><strong>Condition:</strong> Water pressure, outlets, appliances, storage</li>
                            <li><strong>Noise:</strong> Visit at different times of day</li>
                            <li><strong>Cell service:</strong> Test inside the unit</li>
                        </ul>
                        <h3>Red Flags</h3>
                        <ul>
                            <li>Landlord won't let you see the actual unit</li>
                            <li>Pressure to sign immediately</li>
                            <li>Cash-only payments with no receipts</li>
                            <li>Asking for deposit before you see the place</li>
                            <li>Listings that seem too good to be true</li>
                        </ul>
                        <div class="highlight">
                            <strong>Pro Tip:</strong> Take photos/videos of EVERYTHING during your walkthrough and at move-in. This protects your security deposit when you leave.
                        </div>
                    `
                },
                {
                    id: 'lease-agreements',
                    title: 'Understanding Leases',
                    content: `
                        <h2>Understanding Leases</h2>
                        <h3>Key Lease Terms</h3>
                        <ul>
                            <li><strong>Lease term:</strong> Length of agreement (usually 12 months)</li>
                            <li><strong>Security deposit:</strong> Usually 1-2 months rent</li>
                            <li><strong>Pet deposit/rent:</strong> Additional costs for pets</li>
                            <li><strong>Utilities:</strong> What's included vs. your responsibility</li>
                            <li><strong>Renewal terms:</strong> How rent can increase</li>
                        </ul>
                        <h3>Red Flags in Leases</h3>
                        <ul>
                            <li>No written lease (always get it in writing)</li>
                            <li>Automatic renewal without notice</li>
                            <li>Excessive fees or penalties</li>
                            <li>Landlord can enter without notice</li>
                            <li>You're responsible for major repairs</li>
                        </ul>
                        <h3>California Tenant Rights</h3>
                        <ul>
                            <li>Security deposit max = 2 months rent</li>
                            <li>Landlord must return deposit within 21 days</li>
                            <li>24-hour notice required for entry</li>
                            <li>Rent control in many cities</li>
                            <li>Just cause eviction protections</li>
                        </ul>
                        <div class="highlight">
                            <strong>Pro Tip:</strong> Document everything with photos when moving in AND out. Email issues to create paper trail.
                        </div>
                    `
                }
            ],
            quiz: {
                questions: [
                    {
                        question: 'What percentage of income should go to housing?',
                        options: ['10-15%', '20-25%', '30% or less', '40-50%'],
                        correct: 2,
                        explanation: 'The general guideline is 30% or less of gross income on housing, including utilities.'
                    },
                    {
                        question: 'In California, how long does a landlord have to return a security deposit?',
                        options: ['7 days', '14 days', '21 days', '30 days'],
                        correct: 2,
                        explanation: 'California law requires landlords to return security deposits within 21 days of move-out.'
                    }
                ]
            }
        },
        {
            id: 2,
            title: 'Buying Basics',
            subtitle: 'Is home ownership right for you?',
            topics: [
                {
                    id: 'rent-vs-buy',
                    title: 'Rent vs. Buy Decision',
                    content: `
                        <h2>Rent vs. Buy Decision</h2>
                        <h3>When Buying Makes Sense</h3>
                        <ul>
                            <li>Staying 5+ years in same location</li>
                            <li>Stable income and job security</li>
                            <li>20% down payment saved (or close)</li>
                            <li>Emergency fund separate from down payment</li>
                            <li>Monthly cost ≤ rent for similar place</li>
                        </ul>
                        <h3>When Renting Makes Sense</h3>
                        <ul>
                            <li>May move within 3-5 years</li>
                            <li>Career or life in transition</li>
                            <li>Expensive market (rent-to-price ratio high)</li>
                            <li>Don't want maintenance responsibility</li>
                            <li>Would rather invest difference</li>
                        </ul>
                        <h3>True Cost of Home Ownership</h3>
                        <ul>
                            <li>Mortgage payment (principal + interest)</li>
                            <li>Property taxes (1-2% home value annually)</li>
                            <li>Home insurance</li>
                            <li>HOA fees (if applicable)</li>
                            <li>Maintenance (budget 1-2% home value/year)</li>
                            <li>Repairs and emergencies</li>
                        </ul>
                        <div class="example">
                            <strong>Example:</strong> $500K home<br>
                            Mortgage: $2,500/month<br>
                            Taxes: $500/month<br>
                            Insurance: $150/month<br>
                            Maintenance: $400/month<br>
                            <strong>True cost: $3,550/month</strong> (not just $2,500)
                        </div>
                    `
                },
                {
                    id: 'mortgage-basics',
                    title: 'Understanding Mortgages',
                    content: `
                        <h2>Understanding Mortgages</h2>
                        <h3>Mortgage Types</h3>
                        <ul>
                            <li><strong>Conventional:</strong> Standard loan, usually needs 620+ credit, 3-20% down</li>
                            <li><strong>FHA:</strong> Government-backed, 580+ credit, 3.5% down</li>
                            <li><strong>VA:</strong> Veterans only, 0% down possible</li>
                            <li><strong>USDA:</strong> Rural areas, 0% down possible</li>
                        </ul>
                        <h3>Fixed vs. Adjustable Rate</h3>
                        <ul>
                            <li><strong>Fixed:</strong> Same rate for life of loan (recommended)</li>
                            <li><strong>ARM:</strong> Rate adjusts after initial period (risky)</li>
                        </ul>
                        <h3>What Lenders Look At</h3>
                        <ul>
                            <li><strong>Credit score:</strong> Higher = better rate</li>
                            <li><strong>Debt-to-income:</strong> Usually max 43%</li>
                            <li><strong>Down payment:</strong> 20% avoids PMI</li>
                            <li><strong>Employment history:</strong> Stability matters</li>
                            <li><strong>Savings/assets:</strong> Reserves after closing</li>
                        </ul>
                        <h3>PMI (Private Mortgage Insurance)</h3>
                        <ul>
                            <li>Required if down payment < 20%</li>
                            <li>Costs 0.5-1% of loan annually</li>
                            <li>Can be removed at 20% equity</li>
                        </ul>
                    `
                }
            ],
            quiz: {
                questions: [
                    {
                        question: 'How long should you plan to stay to make buying worthwhile?',
                        options: ['1-2 years', '3-4 years', '5+ years', '10+ years'],
                        correct: 2,
                        explanation: 'Generally, you should plan to stay 5+ years to recoup transaction costs and build equity.'
                    },
                    {
                        question: 'What happens if your down payment is less than 20%?',
                        options: ['You can\'t buy', 'You pay PMI', 'You get a better rate', 'Nothing different'],
                        correct: 1,
                        explanation: 'Down payments under 20% require Private Mortgage Insurance (PMI), adding 0.5-1% annually to your costs.'
                    }
                ]
            }
        },
        {
            id: 3,
            title: 'The Buying Process',
            subtitle: 'Step by step to home ownership',
            topics: [
                {
                    id: 'buying-steps',
                    title: 'Home Buying Steps',
                    content: `
                        <h2>Home Buying Steps</h2>
                        <h3>Step 1: Get Pre-Approved</h3>
                        <ul>
                            <li>Shop multiple lenders (rates vary)</li>
                            <li>Get pre-approval letter (not just pre-qualification)</li>
                            <li>Know your max budget</li>
                            <li>Lock in rate when ready</li>
                        </ul>
                        <h3>Step 2: Find a Home</h3>
                        <ul>
                            <li>Work with a buyer's agent (free to you)</li>
                            <li>Know your must-haves vs. nice-to-haves</li>
                            <li>Research neighborhoods thoroughly</li>
                            <li>Don't rush—it's a major decision</li>
                        </ul>
                        <h3>Step 3: Make an Offer</h3>
                        <ul>
                            <li>Research comparable sales</li>
                            <li>Include contingencies (inspection, financing)</li>
                            <li>Expect negotiation</li>
                        </ul>
                        <h3>Step 4: Close the Deal</h3>
                        <ul>
                            <li>Home inspection (negotiate repairs)</li>
                            <li>Appraisal (bank confirms value)</li>
                            <li>Final walkthrough</li>
                            <li>Sign closing documents</li>
                            <li>Get keys!</li>
                        </ul>
                        <div class="highlight">
                            <strong>Budget for Closing Costs:</strong> 2-5% of home price for fees, taxes, and prepaid items.
                        </div>
                    `
                },
                {
                    id: 'first-time-buyer',
                    title: 'First-Time Buyer Programs',
                    content: `
                        <h2>First-Time Buyer Programs</h2>
                        <h3>Federal Programs</h3>
                        <ul>
                            <li><strong>FHA Loans:</strong> 3.5% down, lower credit requirements</li>
                            <li><strong>VA Loans:</strong> 0% down for veterans</li>
                            <li><strong>USDA Loans:</strong> 0% down in rural areas</li>
                        </ul>
                        <h3>California Programs</h3>
                        <ul>
                            <li><strong>CalHFA:</strong> Down payment assistance</li>
                            <li><strong>MyHome Assistance:</strong> Deferred loans for down payment</li>
                            <li><strong>California Dream for All:</strong> Shared appreciation loan</li>
                        </ul>
                        <h3>Other Assistance</h3>
                        <ul>
                            <li>Employer programs</li>
                            <li>City/county first-time buyer programs</li>
                            <li>Non-profit housing organizations</li>
                            <li>Family gift funds</li>
                        </ul>
                        <h3>What "First-Time Buyer" Means</h3>
                        <p>Usually: Haven't owned a home in the past 3 years. Some programs have income limits.</p>
                    `
                }
            ],
            quiz: {
                questions: [
                    {
                        question: 'What should you get before house hunting?',
                        options: ['Pre-qualification', 'Pre-approval', 'Full mortgage approval', 'Nothing needed'],
                        correct: 1,
                        explanation: 'Pre-approval (not just pre-qualification) shows sellers you\'re serious and know exactly what you can afford.'
                    },
                    {
                        question: 'How much should you budget for closing costs?',
                        options: ['0-1%', '2-5%', '10-15%', '20%'],
                        correct: 1,
                        explanation: 'Closing costs typically run 2-5% of the home price, covering fees, taxes, and prepaid items.'
                    }
                ]
            }
        },
        {
            id: 4,
            title: 'Home Maintenance',
            subtitle: 'Protect your investment',
            topics: [
                {
                    id: 'maintenance-basics',
                    title: 'Essential Home Maintenance',
                    content: `
                        <h2>Essential Home Maintenance</h2>
                        <h3>Monthly Tasks</h3>
                        <ul>
                            <li>Test smoke/CO detectors</li>
                            <li>Check HVAC filters</li>
                            <li>Run water in unused drains</li>
                            <li>Check for leaks under sinks</li>
                        </ul>
                        <h3>Seasonal Tasks</h3>
                        <ul>
                            <li><strong>Spring:</strong> HVAC service, clean gutters, check roof</li>
                            <li><strong>Summer:</strong> Service AC, check irrigation</li>
                            <li><strong>Fall:</strong> Clean gutters, winterize pipes, furnace service</li>
                            <li><strong>Winter:</strong> Check for ice dams, maintain heating</li>
                        </ul>
                        <h3>Annual Tasks</h3>
                        <ul>
                            <li>HVAC professional service</li>
                            <li>Water heater flush</li>
                            <li>Chimney cleaning (if applicable)</li>
                            <li>Roof inspection</li>
                            <li>Foundation check</li>
                        </ul>
                        <div class="highlight">
                            <strong>Budget:</strong> Set aside 1-2% of home value annually for maintenance and repairs.
                        </div>
                    `
                },
                {
                    id: 'diy-vs-pro',
                    title: 'DIY vs. Hiring Professionals',
                    content: `
                        <h2>DIY vs. Hiring Professionals</h2>
                        <h3>Good DIY Projects</h3>
                        <ul>
                            <li>Painting</li>
                            <li>Basic plumbing (toilet, faucet)</li>
                            <li>Caulking and weatherstripping</li>
                            <li>Filter replacements</li>
                            <li>Minor drywall repairs</li>
                            <li>Landscaping basics</li>
                        </ul>
                        <h3>Always Hire Professionals</h3>
                        <ul>
                            <li>Electrical work (safety + permits)</li>
                            <li>Major plumbing</li>
                            <li>HVAC installation/major repairs</li>
                            <li>Roof repairs</li>
                            <li>Structural changes</li>
                            <li>Gas line work</li>
                        </ul>
                        <h3>Finding Good Contractors</h3>
                        <ul>
                            <li>Get 3 quotes minimum</li>
                            <li>Check license and insurance</li>
                            <li>Read reviews (Yelp, Google, Nextdoor)</li>
                            <li>Ask for references</li>
                            <li>Get everything in writing</li>
                            <li>Never pay 100% upfront</li>
                        </ul>
                    `
                }
            ],
            quiz: {
                questions: [
                    {
                        question: 'How much should you budget annually for home maintenance?',
                        options: ['0.5%', '1-2%', '5%', '10%'],
                        correct: 1,
                        explanation: 'Budget 1-2% of your home\'s value annually for maintenance and repairs—a $400K home needs $4,000-8,000/year set aside.'
                    },
                    {
                        question: 'Which project should you ALWAYS hire a professional for?',
                        options: ['Painting', 'Electrical work', 'Filter replacement', 'Caulking'],
                        correct: 1,
                        explanation: 'Always hire professionals for electrical work—it requires permits, is a safety hazard, and DIY can void insurance.'
                    }
                ]
            }
        },
        {
            id: 5,
            title: 'Housing Strategy',
            subtitle: 'Advanced decisions for your housing future',
            topics: [
                {
                    id: 'rent-vs-buy-deep',
                    title: 'Rent vs. Buy: The Real Math',
                    content: `
                        <h2>Rent vs. Buy: The Real Math</h2>
                        <h3>The Myth</h3>
                        <p>"Renting is throwing money away." This oversimplification has cost people fortunes.</p>
                        <h3>True Cost of Homeownership</h3>
                        <ul>
                            <li><strong>Mortgage payment</strong> (principal + interest)</li>
                            <li><strong>Property taxes</strong> (1-2% of home value/year)</li>
                            <li><strong>Insurance</strong> ($1,000-3,000/year)</li>
                            <li><strong>Maintenance</strong> (1-2% of home value/year)</li>
                            <li><strong>HOA fees</strong> ($200-600/month if applicable)</li>
                            <li><strong>Opportunity cost</strong> of down payment (that money could invest)</li>
                            <li><strong>Closing costs</strong> (2-5% when buying, 6-10% when selling)</li>
                        </ul>
                        <h3>When Buying Makes Sense</h3>
                        <ul>
                            <li>You'll stay 5+ years (break even on transaction costs)</li>
                            <li>You have 10-20% down payment saved</li>
                            <li>Your total housing cost < 28% of gross income</li>
                            <li>You have 6-month emergency fund AFTER down payment</li>
                            <li>Local market favors buyers (price-to-rent ratio)</li>
                        </ul>
                        <h3>When Renting Wins</h3>
                        <ul>
                            <li>You might move within 3-5 years</li>
                            <li>You're in a very expensive market (SF, NYC, LA)</li>
                            <li>You'd rather invest the difference</li>
                            <li>You value flexibility and mobility</li>
                        </ul>
                        <div class="highlight">
                            <strong>Use the NYT Calculator:</strong> Search "NYT rent vs buy calculator" — it accounts for all real costs and shows your break-even point.
                        </div>
                    `
                },
                {
                    id: 'housing-hacks',
                    title: 'Housing Hacks: Reducing Your Biggest Expense',
                    content: `
                        <h2>Housing Hacks</h2>
                        <h3>House Hacking</h3>
                        <ul>
                            <li>Buy a duplex/triplex, live in one unit, rent the others</li>
                            <li>Rent out spare bedrooms (Roommates or Airbnb)</li>
                            <li>ADU (Accessory Dwelling Unit) for rental income</li>
                            <li>Can eliminate or reduce your housing payment entirely</li>
                        </ul>
                        <h3>Negotiation Strategies</h3>
                        <ul>
                            <li><strong>Renting:</strong> Offer longer lease for lower rent, pay 2 months upfront</li>
                            <li><strong>Buying:</strong> Get pre-approved, ask for closing cost credits</li>
                            <li><strong>Renewal:</strong> Research comps, negotiate before renewal date</li>
                        </ul>
                        <h3>Save on Utilities</h3>
                        <ul>
                            <li>Smart thermostat (saves 10-15% on heating/cooling)</li>
                            <li>LED bulbs throughout</li>
                            <li>Weatherstrip doors and windows</li>
                            <li>Wash clothes in cold water</li>
                            <li>Unplug phantom loads</li>
                        </ul>
                        <h3>When to Move</h3>
                        <ul>
                            <li>Housing exceeds 35% of income consistently</li>
                            <li>Long commute costing more than rent savings</li>
                            <li>Neighborhood no longer meets your needs</li>
                            <li>Better opportunities in another area</li>
                        </ul>
                        <div class="highlight">
                            <strong>The Goal:</strong> Housing is your biggest expense. Every dollar saved here has massive impact. Always be optimizing.
                        </div>
                    `
                },
                {
                    id: 'housing-rights',
                    title: 'Know Your Housing Rights',
                    content: `
                        <h2>Know Your Housing Rights</h2>
                        <h3>Federal Fair Housing Act</h3>
                        <p>Landlords CANNOT discriminate based on:</p>
                        <ul>
                            <li>Race, color, national origin</li>
                            <li>Religion</li>
                            <li>Sex (including gender identity and sexual orientation)</li>
                            <li>Familial status (having kids)</li>
                            <li>Disability</li>
                        </ul>
                        <h3>Tenant Rights (Most States)</h3>
                        <ul>
                            <li><strong>Habitability:</strong> Landlord must maintain safe, livable conditions</li>
                            <li><strong>Notice before entry:</strong> 24-48 hours typically required</li>
                            <li><strong>Security deposit limits:</strong> Usually 1-2 months rent max</li>
                            <li><strong>Retaliation protection:</strong> Can't evict you for complaining</li>
                            <li><strong>Repair and deduct:</strong> In some states, fix issues and deduct from rent</li>
                        </ul>
                        <h3>California Specific</h3>
                        <ul>
                            <li>AB 1482: Statewide rent cap (5% + CPI or 10%, whichever is less)</li>
                            <li>Just-cause eviction protections after 12 months</li>
                            <li>Security deposit: Max 1 month rent (as of 2024)</li>
                            <li>21 days to return deposit after move-out</li>
                        </ul>
                        <h3>If Your Rights Are Violated</h3>
                        <ol>
                            <li>Document everything in writing</li>
                            <li>Send written notice to landlord (certified mail)</li>
                            <li>Contact local tenant rights organization</li>
                            <li>File complaint with HUD or state agency</li>
                            <li>Consult a tenant rights attorney (often free consultation)</li>
                        </ol>
                        <div class="highlight">
                            <strong>Power:</strong> Knowing your rights changes the dynamic. Most landlord violations happen because tenants don't know their protections.
                        </div>
                    `
                }
            ],
            quiz: {
                questions: [
                    {
                        question: 'How long should you plan to stay to make buying a home worthwhile?',
                        options: ['1-2 years', '3-4 years', '5+ years', 'It doesn\'t matter'],
                        correct: 2,
                        explanation: 'Due to closing costs (2-5% buying, 6-10% selling), you typically need to stay 5+ years to break even on the transaction costs of buying vs. renting.'
                    },
                    {
                        question: 'What is house hacking?',
                        options: ['Breaking into houses', 'Buying a multi-unit property, living in one unit, renting the others', 'Renovating cheaply', 'Renting without a lease'],
                        correct: 1,
                        explanation: 'House hacking means buying a duplex/triplex, living in one unit and renting the others. The rental income can cover most or all of your housing costs.'
                    },
                    {
                        question: 'Under California law (AB 1482), what is the maximum annual rent increase?',
                        options: ['Any amount', '5% + CPI or 10%, whichever is less', '3%', '15%'],
                        correct: 1,
                        explanation: 'AB 1482 caps rent increases at 5% plus local CPI (inflation) or 10%, whichever is lower, for most rental units in California.'
                    }
                ]
            }
        }
    ]
};
