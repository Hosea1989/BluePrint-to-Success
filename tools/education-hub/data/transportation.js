// Transportation & Auto Curriculum Data
const transportationData = {
    id: 'transportation',
    title: 'Transportation & Auto',
    icon: '🚗',
    description: 'Buy cars smart, understand auto insurance, handle accidents, and manage your transportation costs.',
    graduationGoal: 'Make smart transportation decisions and handle any auto situation with confidence',
    difficulty: 'beginner',
    prerequisites: ['personalfinance'],
    learningObjectives: [
        'Buy a car without getting ripped off',
        'Understand auto loans and financing',
        'Choose the right auto insurance',
        'Handle accidents and repairs',
        'Minimize transportation costs'
    ],
    relatedTracks: ['personalfinance', 'insurance', 'credit'],
    resources: [
        { title: 'NHTSA Vehicle Safety', url: 'https://www.nhtsa.gov/' }
    ],
    levels: [
        {
            id: 1,
            title: 'Buying a Car Smart',
            subtitle: 'Don\'t get ripped off at the dealership',
            topics: [
                {
                    id: 'new-vs-used',
                    title: 'New vs. Used — The Real Math',
                    content: `
                        <h2>New vs. Used — The Real Math</h2>

                        <h3>The Depreciation Problem</h3>
                        <ul>
                            <li>A new car loses <strong>20-30% of its value in the first year</strong></li>
                            <li>After 5 years, it's worth about 40% of what you paid</li>
                            <li>The moment you drive it off the lot, you've lost thousands</li>
                        </ul>

                        <h3>The Sweet Spot: 2-3 Year Old Used Cars</h3>
                        <ul>
                            <li>Someone else absorbed the biggest depreciation hit</li>
                            <li>Still relatively new with modern safety features</li>
                            <li>Often still under manufacturer warranty</li>
                            <li>Certified Pre-Owned (CPO) offers additional peace of mind</li>
                        </ul>

                        <h3>When New Makes Sense</h3>
                        <ul>
                            <li>Very low interest rate (0% financing)</li>
                            <li>Specific features or technology you need</li>
                            <li>Planning to keep the car 10+ years</li>
                            <li>Strong manufacturer incentives</li>
                        </ul>

                        <h3>Total Cost of Ownership</h3>
                        <p>The purchase price is just the beginning. Consider:</p>
                        <ul>
                            <li><strong>Insurance:</strong> Varies dramatically by car model (check before buying)</li>
                            <li><strong>Fuel costs:</strong> MPG matters more than you think over 5+ years</li>
                            <li><strong>Maintenance:</strong> Some brands are far cheaper to maintain than others</li>
                            <li><strong>Depreciation:</strong> How much value you'll lose while you own it</li>
                            <li><strong>Registration and taxes:</strong> Annual costs that add up</li>
                        </ul>

                        <div class="highlight">
                            <strong>The Best Financial Move:</strong> Buy a reliable 2-3 year old car in cash (or with a short-term loan), maintain it well, and drive it for 10+ years. This minimizes depreciation, interest, and per-year cost of ownership.
                        </div>
                    `
                },
                {
                    id: 'dealership-tactics',
                    title: 'Dealership Tactics & How to Counter Them',
                    content: `
                        <h2>Dealership Tactics & How to Counter Them</h2>

                        <h3>Common Dealer Tricks</h3>

                        <h4>The Four-Square Method</h4>
                        <ul>
                            <li>Dealer draws a box with 4 squares: trade-in, purchase price, down payment, monthly payment</li>
                            <li>Designed to confuse you by juggling numbers between squares</li>
                            <li><strong>Counter:</strong> Negotiate ONE thing at a time — purchase price first. Ignore the four-square.</li>
                        </ul>

                        <h4>The Monthly Payment Trap</h4>
                        <ul>
                            <li>"What monthly payment can you afford?" — they stretch the loan to hit your number while you pay more overall</li>
                            <li><strong>Counter:</strong> Negotiate on total out-the-door price, not monthly payment</li>
                        </ul>

                        <h4>The Add-Ons</h4>
                        <ul>
                            <li>Fabric protection, paint sealant, extended warranties, gap insurance, VIN etching</li>
                            <li>These have enormous markups (500-1000%)</li>
                            <li><strong>Counter:</strong> Say "no" to everything in the finance office. You can buy gap insurance and extended warranties cheaper elsewhere.</li>
                        </ul>

                        <h3>Preparation Is Power</h3>
                        <ul>
                            <li><strong>Know the fair market price:</strong> KBB.com, Edmunds.com, TrueCar.com</li>
                            <li><strong>Get pre-approved for financing:</strong> Your bank or credit union almost always beats the dealer</li>
                            <li><strong>Know your trade-in value:</strong> Get offers from Carvana, CarMax, or KBB before going to the dealer</li>
                            <li><strong>Shop multiple dealers:</strong> Get quotes via email and make them compete</li>
                            <li><strong>Best time to buy:</strong> End of month, end of quarter, end of year (dealers have quotas)</li>
                        </ul>

                        <div class="highlight">
                            <strong>The #1 Rule:</strong> Be willing to walk away. The dealer's biggest fear is losing a sale. If you can walk out the door, you have all the power.
                        </div>
                    `
                }
            ],
            quiz: {
                questions: [
                    {
                        question: 'How much value does a new car typically lose in the first year?',
                        options: ['5-10%', '10-15%', '20-30%', '50%'],
                        correct: 2,
                        explanation: 'New cars typically depreciate 20-30% in the first year alone. This is why buying a 2-3 year old car is often the better financial decision — someone else absorbed the biggest loss.'
                    },
                    {
                        question: 'What should you negotiate at a car dealership?',
                        options: [
                            'The monthly payment amount',
                            'The total out-the-door price — negotiating on monthly payments lets dealers stretch the loan',
                            'Nothing — the sticker price is fixed',
                            'Only the trade-in value'
                        ],
                        correct: 1,
                        explanation: 'Always negotiate the total out-the-door price, not the monthly payment. Dealers use monthly payments to obscure the true cost by extending loan terms, making you pay much more over time.'
                    }
                ]
            }
        },
        {
            id: 2,
            title: 'Auto Insurance',
            subtitle: 'Understanding coverage and saving money',
            topics: [
                {
                    id: 'auto-insurance-types',
                    title: 'Auto Insurance Coverage Types',
                    content: `
                        <h2>Auto Insurance Coverage Types</h2>

                        <h3>Required Coverage (Varies by State)</h3>
                        <ul>
                            <li><strong>Liability — Bodily Injury:</strong> Covers injuries you cause to others. Most states require this.</li>
                            <li><strong>Liability — Property Damage:</strong> Covers damage you cause to others' property.</li>
                            <li><strong>Uninsured/Underinsured Motorist:</strong> Covers you if hit by someone without adequate insurance. Required in some states.</li>
                        </ul>

                        <h3>Optional (But Often Smart) Coverage</h3>
                        <ul>
                            <li><strong>Collision:</strong> Covers damage to YOUR car from an accident (regardless of fault)</li>
                            <li><strong>Comprehensive:</strong> Covers non-collision damage (theft, hail, fire, hitting an animal)</li>
                            <li><strong>Medical Payments / PIP:</strong> Covers medical bills for you and passengers</li>
                            <li><strong>Gap Insurance:</strong> Covers the difference between what your car is worth and what you owe (important if you're underwater on a loan)</li>
                            <li><strong>Rental Car Coverage:</strong> Pays for a rental while your car is being repaired</li>
                        </ul>

                        <h3>How Much Coverage Do You Need?</h3>
                        <ul>
                            <li><strong>Liability minimums are too low:</strong> State minimums (like 15/30/5) barely cover a fender bender. Get at least 100/300/100.</li>
                            <li><strong>Drop collision/comprehensive on old cars:</strong> If your car is worth less than $3,000-$5,000, the premium may not be worth it</li>
                            <li><strong>Higher deductible = lower premium:</strong> Choose the highest deductible you can afford in an emergency ($500-$1,000)</li>
                        </ul>

                        <div class="highlight">
                            <strong>Umbrella Policy:</strong> For an extra $200-$400/year, an umbrella policy adds $1-2 million in liability coverage on top of your auto and home insurance. Essential if you have any assets to protect.
                        </div>
                    `
                },
                {
                    id: 'saving-on-insurance',
                    title: 'Saving Money on Auto Insurance',
                    content: `
                        <h2>Saving Money on Auto Insurance</h2>

                        <h3>Strategies That Actually Work</h3>
                        <ul>
                            <li><strong>Shop around every year:</strong> Get 3-5 quotes. Loyalty doesn't save money — competition does.</li>
                            <li><strong>Bundle policies:</strong> Auto + home/renters with the same company = 10-25% discount</li>
                            <li><strong>Raise your deductible:</strong> Going from $250 to $1,000 can save 20-40% on premiums</li>
                            <li><strong>Good driver discounts:</strong> Clean record, defensive driving course</li>
                            <li><strong>Good student discount:</strong> For students with B average or better</li>
                            <li><strong>Low mileage discount:</strong> If you drive less than average</li>
                            <li><strong>Pay in full:</strong> Paying annually instead of monthly avoids installment fees</li>
                            <li><strong>Credit score:</strong> In most states, better credit = lower rates (work on your credit)</li>
                        </ul>

                        <h3>Factors That Raise Your Rate</h3>
                        <ul>
                            <li>Accidents and tickets (stay for 3-5 years)</li>
                            <li>Young age (rates drop significantly after 25)</li>
                            <li>Expensive car to repair or high theft rate</li>
                            <li>Poor credit score</li>
                            <li>Living in a high-accident area</li>
                        </ul>

                        <h3>After an Accident</h3>
                        <ul>
                            <li>Ask about accident forgiveness (some companies don't raise rates for first accident)</li>
                            <li>Get quotes from other companies — some are more forgiving than others</li>
                            <li>Consider if it's worth filing a claim for minor damage (small claims can raise rates more than the payout)</li>
                        </ul>

                        <div class="highlight">
                            <strong>The 15-Minute Check:</strong> Spend 15 minutes getting online quotes from 3 companies. Many people save $500-$1,000/year just by switching. Do this every renewal period.
                        </div>
                    `
                }
            ],
            quiz: {
                questions: [
                    {
                        question: 'Why are state minimum liability limits often insufficient?',
                        options: [
                            'They\'re perfectly fine for everyone',
                            'State minimums are very low and barely cover a minor accident — a serious accident could leave you personally liable for thousands',
                            'They\'re only for new drivers',
                            'Insurance companies set the minimums'
                        ],
                        correct: 1,
                        explanation: 'State minimum liability limits (like 15/30/5) are extremely low and may not cover the costs of a serious accident. You could be personally liable for amounts exceeding your coverage, putting your assets at risk.'
                    },
                    {
                        question: 'What is the most effective way to save on auto insurance?',
                        options: [
                            'Stay with the same company for loyalty discounts',
                            'Shop around and get 3-5 quotes every year — competition saves more than loyalty',
                            'Only buy the state minimum',
                            'Never file any claims'
                        ],
                        correct: 1,
                        explanation: 'Shopping around annually is the most effective way to save. Insurance companies frequently change rates, and getting competitive quotes often saves $500-$1,000/year. Loyalty rarely results in the best rates.'
                    }
                ]
            }
        },
        {
            id: 3,
            title: 'Handling Accidents & Repairs',
            subtitle: 'What to do when something goes wrong',
            topics: [
                {
                    id: 'accident-steps',
                    title: 'What to Do After an Accident',
                    content: `
                        <h2>What to Do After an Accident</h2>

                        <h3>At the Scene</h3>
                        <ol>
                            <li><strong>Check for injuries:</strong> Call 911 if anyone is hurt</li>
                            <li><strong>Move to safety:</strong> If possible, move vehicles out of traffic</li>
                            <li><strong>Call the police:</strong> Get an official report (required in many states for significant damage)</li>
                            <li><strong>Exchange information:</strong> Name, insurance, license plate, phone number, driver's license</li>
                            <li><strong>Document everything:</strong> Photos of all vehicles, damage, license plates, road conditions, traffic signs</li>
                            <li><strong>Get witness information:</strong> Names and phone numbers</li>
                            <li><strong>Do NOT admit fault:</strong> Don't say "I'm sorry" or "It was my fault" — even if you think it was</li>
                        </ol>

                        <h3>After the Scene</h3>
                        <ul>
                            <li><strong>Notify your insurance company</strong> promptly</li>
                            <li><strong>See a doctor</strong> even if you feel fine — injuries can appear days later</li>
                            <li><strong>Keep all receipts</strong> (medical, rental car, towing, etc.)</li>
                            <li><strong>Don't give a recorded statement</strong> to the OTHER driver's insurance without consulting yours first</li>
                        </ul>

                        <h3>Dealing with Insurance Claims</h3>
                        <ul>
                            <li><strong>File with YOUR insurance</strong> first if the other driver is uncooperative</li>
                            <li><strong>Get multiple repair estimates</strong> — you have the right to choose your own shop</li>
                            <li><strong>Don't accept the first settlement offer</strong> — it's often low, especially for injury claims</li>
                            <li><strong>Consider an attorney</strong> for significant injuries or disputed fault</li>
                        </ul>

                        <div class="highlight">
                            <strong>Keep an Accident Kit in Your Car:</strong> Insurance card, registration, a pen, a notepad, and a charged phone. When an accident happens, you'll be stressed — having everything ready helps you follow the steps.
                        </div>
                    `
                },
                {
                    id: 'avoiding-repair-scams',
                    title: 'Avoiding Repair Scams',
                    content: `
                        <h2>Avoiding Repair Scams</h2>

                        <h3>Common Mechanic Scams</h3>
                        <ul>
                            <li><strong>The Phantom Fix:</strong> Charging for work that wasn't done</li>
                            <li><strong>Unnecessary Repairs:</strong> "While we were in there, we found..."</li>
                            <li><strong>Used Parts Billed as New:</strong> Charging new-part prices for used or refurbished parts</li>
                            <li><strong>The Bait and Switch:</strong> Low estimate, then calling with "unexpected" costs</li>
                            <li><strong>Fluid Flush Scams:</strong> Recommending unnecessary fluid changes</li>
                        </ul>

                        <h3>How to Protect Yourself</h3>
                        <ul>
                            <li><strong>Get a written estimate</strong> before any work begins</li>
                            <li><strong>Ask to see the old parts</strong> that were replaced</li>
                            <li><strong>Get a second opinion</strong> for expensive repairs</li>
                            <li><strong>Use ASE-certified mechanics</strong></li>
                            <li><strong>Check reviews:</strong> Google, Yelp, BBB before choosing a shop</li>
                            <li><strong>Know your car's maintenance schedule:</strong> Check the owner's manual, not the dealer's recommendations</li>
                        </ul>

                        <h3>Basic Maintenance You Should Know</h3>
                        <ul>
                            <li><strong>Oil changes:</strong> Every 5,000-7,500 miles (check manual — modern cars go longer)</li>
                            <li><strong>Tire pressure:</strong> Check monthly, keep at recommended PSI (sticker inside driver's door)</li>
                            <li><strong>Tire rotation:</strong> Every 5,000-7,500 miles</li>
                            <li><strong>Air filter:</strong> Every 15,000-30,000 miles (easy DIY)</li>
                            <li><strong>Brakes:</strong> Replace when you hear squealing or grinding</li>
                        </ul>

                        <div class="highlight">
                            <strong>Your Rights:</strong> In most states, mechanics must give you a written estimate, get approval before exceeding the estimate, and return old parts if you request them. Know these rights before walking in.
                        </div>
                    `
                }
            ],
            quiz: {
                questions: [
                    {
                        question: 'What should you NOT do at the scene of a car accident?',
                        options: [
                            'Call the police',
                            'Take photos of the damage',
                            'Admit fault or say "I\'m sorry" — even if you think it was your fault',
                            'Exchange insurance information'
                        ],
                        correct: 2,
                        explanation: 'Never admit fault at the scene of an accident. Saying "I\'m sorry" or "It was my fault" can be used against you by the other driver\'s insurance company, even if the accident wasn\'t actually your fault.'
                    },
                    {
                        question: 'How can you protect yourself from mechanic scams?',
                        options: [
                            'Always go to the closest shop',
                            'Get a written estimate, ask to see old parts, get second opinions for expensive repairs, and use ASE-certified mechanics',
                            'Only go to the dealership',
                            'Never question the mechanic\'s recommendations'
                        ],
                        correct: 1,
                        explanation: 'Protect yourself by getting written estimates, asking to see replaced parts, getting second opinions for expensive repairs, and using certified mechanics. These steps prevent most common repair scams.'
                    }
                ]
            }
        },
        {
            id: 4,
            title: 'Alternative Transportation',
            subtitle: 'Beyond the car payment',
            topics: [
                {
                    id: 'true-cost-of-driving',
                    title: 'The True Cost of Car Ownership',
                    content: `
                        <h2>The True Cost of Car Ownership</h2>

                        <h3>Annual Cost Breakdown (Average American)</h3>
                        <ul>
                            <li><strong>Car payment:</strong> $500-$700/month ($6,000-$8,400/year)</li>
                            <li><strong>Insurance:</strong> $150-$250/month ($1,800-$3,000/year)</li>
                            <li><strong>Gas:</strong> $150-$300/month ($1,800-$3,600/year)</li>
                            <li><strong>Maintenance & repairs:</strong> $100-$200/month ($1,200-$2,400/year)</li>
                            <li><strong>Registration, fees, parking:</strong> $50-$150/month ($600-$1,800/year)</li>
                            <li><strong>Total: $11,400-$19,200/year</strong> — that's $950-$1,600/month!</li>
                        </ul>

                        <h3>Reducing Your Transportation Costs</h3>
                        <ul>
                            <li><strong>Buy used, pay cash:</strong> Eliminates the biggest expense (car payments)</li>
                            <li><strong>Choose reliability over flash:</strong> Honda, Toyota, and Mazda consistently top reliability and low maintenance cost lists</li>
                            <li><strong>Do basic maintenance yourself:</strong> Oil changes, air filters, tire rotations (YouTube university)</li>
                            <li><strong>Carpool or ride-share:</strong> Split gas and reduce wear on your car</li>
                            <li><strong>Work from home:</strong> Even 2 days/week saves 40% on commuting costs</li>
                        </ul>

                        <h3>When a Car May Not Be Worth It</h3>
                        <ul>
                            <li>If you live in a city with good public transit</li>
                            <li>If you can walk or bike to work</li>
                            <li>If the car payment + expenses exceeds 20% of your income</li>
                            <li>If Uber/Lyft would cost less per month than ownership</li>
                        </ul>

                        <div class="highlight">
                            <strong>The 20% Rule:</strong> Transportation should not exceed 20% of your take-home pay. If it does, you're car-poor — driving a depreciating asset that's eating your ability to build wealth.
                        </div>
                    `
                },
                {
                    id: 'alternative-options',
                    title: 'Public Transit, Bikes & Other Options',
                    content: `
                        <h2>Alternative Transportation Options</h2>

                        <h3>Public Transit</h3>
                        <ul>
                            <li>Monthly passes are often cheaper than a single car payment</li>
                            <li>Some employers offer pre-tax transit benefits ($300/month tax-free)</li>
                            <li>Use the commute time to read, learn, or work</li>
                            <li>Google Maps and transit apps make route planning easy</li>
                        </ul>

                        <h3>Biking</h3>
                        <ul>
                            <li>E-bikes have made bike commuting accessible to more people (range: 20-60 miles)</li>
                            <li>Cost: $500-$2,000 for a good e-bike vs. $30,000+ for a new car</li>
                            <li>Built-in exercise — saves on gym membership too</li>
                            <li>Many cities improving bike infrastructure</li>
                        </ul>

                        <h3>Ride-Sharing & Car-Sharing</h3>
                        <ul>
                            <li><strong>Uber/Lyft:</strong> For occasional trips — do the math vs. ownership</li>
                            <li><strong>Car-sharing (Zipcar, Turo):</strong> Rent a car by the hour or day when you need one</li>
                            <li><strong>Carpooling:</strong> Apps like Waze Carpool or coworker arrangements</li>
                        </ul>

                        <h3>The Hybrid Approach</h3>
                        <ul>
                            <li>Many people find the best strategy is: public transit for daily commute + car-share or ride-share for occasional needs</li>
                            <li>Or: one car per household instead of two, supplemented with transit and ride-sharing</li>
                            <li>Run the numbers for YOUR situation — the savings may surprise you</li>
                        </ul>

                        <div class="highlight">
                            <strong>Challenge:</strong> For one month, track every trip you make by car and calculate the cost. Then research alternatives for each trip. You might find that 50-80% of your trips could be done cheaper another way.
                        </div>
                    `
                }
            ],
            quiz: {
                questions: [
                    {
                        question: 'What is the average total annual cost of car ownership in the US?',
                        options: [
                            '$2,000-$4,000',
                            '$5,000-$8,000',
                            '$11,400-$19,200 when you include payments, insurance, gas, maintenance, and fees',
                            'Over $30,000'
                        ],
                        correct: 2,
                        explanation: 'When you add up car payments, insurance, gas, maintenance, registration, and parking, the average American spends $11,400-$19,200 per year on car ownership — that\'s $950-$1,600 per month.'
                    },
                    {
                        question: 'What is the "20% rule" for transportation costs?',
                        options: [
                            'You should save 20% of your income for a car',
                            'Transportation should not exceed 20% of your take-home pay',
                            'You should put 20% down on a car',
                            'Cars lose 20% of value per year'
                        ],
                        correct: 1,
                        explanation: 'The 20% rule says your total transportation costs (payments, insurance, gas, maintenance) should not exceed 20% of your take-home pay. Exceeding this makes you "car-poor" and limits your ability to build wealth.'
                    }
                ]
            }
        },
        {
            id: 5,
            title: 'EV & Future of Transportation',
            subtitle: 'Making smart decisions about electric vehicles and beyond',
            topics: [
                {
                    id: 'ev-decision',
                    title: 'Should You Go Electric?',
                    content: `
                        <h2>Should You Go Electric?</h2>

                        <h3>Pros of Electric Vehicles</h3>
                        <ul>
                            <li><strong>Fuel savings:</strong> Electricity costs ~$0.04/mile vs. ~$0.15/mile for gas</li>
                            <li><strong>Low maintenance:</strong> No oil changes, fewer brake replacements, simpler drivetrain</li>
                            <li><strong>Tax credits:</strong> Federal tax credit up to $7,500 for new EVs (eligibility varies)</li>
                            <li><strong>State incentives:</strong> Additional rebates in many states</li>
                            <li><strong>HOV lane access:</strong> In some states, even with just the driver</li>
                        </ul>

                        <h3>Cons / Considerations</h3>
                        <ul>
                            <li><strong>Higher purchase price:</strong> Though gap is closing, and total cost of ownership may be lower</li>
                            <li><strong>Charging infrastructure:</strong> Improving rapidly but may be limited in rural areas</li>
                            <li><strong>Range anxiety:</strong> Most EVs get 200-350 miles per charge (sufficient for 95% of daily driving)</li>
                            <li><strong>Home charging:</strong> Level 2 charger installation costs $500-$2,000</li>
                            <li><strong>Battery degradation:</strong> Batteries lose capacity over time (most are warrantied 8 years/100,000 miles)</li>
                        </ul>

                        <h3>When EV Makes Sense</h3>
                        <ul>
                            <li>You can charge at home (apartment charging is still challenging)</li>
                            <li>Your daily commute is under 100 miles round trip</li>
                            <li>You're buying new (used EV market still developing)</li>
                            <li>Your state has strong incentives</li>
                            <li>You drive enough for fuel savings to offset the price premium</li>
                        </ul>

                        <div class="highlight">
                            <strong>Do the Math:</strong> Compare 5-year total cost of ownership (purchase + fuel + maintenance + insurance) between an EV and a comparable gas car. For many drivers, EVs are already cheaper over the ownership period, even with the higher sticker price.
                        </div>
                    `
                },
                {
                    id: 'car-sharing-future',
                    title: 'The Future of Getting Around',
                    content: `
                        <h2>The Future of Getting Around</h2>

                        <h3>Trends to Watch</h3>
                        <ul>
                            <li><strong>Autonomous vehicles:</strong> Self-driving technology is advancing — may reduce the need for personal car ownership</li>
                            <li><strong>Mobility as a Service (MaaS):</strong> Apps that integrate transit, ride-share, bike-share, and car-share into one platform</li>
                            <li><strong>Subscription models:</strong> Monthly fee for access to various vehicles instead of owning one</li>
                            <li><strong>Remote work revolution:</strong> Less commuting = less need for daily transportation</li>
                            <li><strong>Micro-mobility:</strong> E-scooters, e-bikes, and other small electric vehicles for short trips</li>
                        </ul>

                        <h3>Making Smart Decisions Now</h3>
                        <ul>
                            <li>Don't lock into long-term auto commitments (7-year loans) — the landscape is changing fast</li>
                            <li>Consider how remote work options affect your transportation needs</li>
                            <li>Factor in housing location — living near transit can save thousands per year</li>
                            <li>Stay flexible — the cheapest transportation plan is often a mix of options</li>
                        </ul>

                        <div class="highlight">
                            <strong>The Big Picture:</strong> Transportation is one of the top 3 expenses for most Americans. Every dollar you save on transportation is a dollar you can invest, save, or use to build your future. Think strategically about how you get around — it's not just about the car, it's about your financial freedom.
                        </div>
                    `
                }
            ],
            quiz: {
                questions: [
                    {
                        question: 'What is the approximate cost per mile to drive an electric vehicle vs. a gas vehicle?',
                        options: [
                            'EV and gas cost about the same per mile',
                            'EV: ~$0.04/mile vs. Gas: ~$0.15/mile — EVs are significantly cheaper to fuel',
                            'Gas is cheaper per mile',
                            'EV: $0.50/mile vs. Gas: $0.25/mile'
                        ],
                        correct: 1,
                        explanation: 'Electric vehicles cost roughly $0.04 per mile to "fuel" with electricity, compared to about $0.15 per mile for gas. Over tens of thousands of miles, these savings add up significantly.'
                    },
                    {
                        question: 'What should you consider before buying an electric vehicle?',
                        options: [
                            'Only the sticker price',
                            'Whether you can charge at home, your daily driving distance, available tax credits, and 5-year total cost of ownership',
                            'Only the range',
                            'Nothing — EVs are always the better choice'
                        ],
                        correct: 1,
                        explanation: 'A smart EV decision considers: home charging access, daily commute distance, available federal and state incentives, and the full 5-year total cost of ownership compared to a gas vehicle.'
                    }
                ]
            }
        }
    ]
};
