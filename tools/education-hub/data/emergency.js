// Emergency & Crisis Preparedness Curriculum Data
const emergencyData = {
    id: 'emergency',
    title: 'Emergency Preparedness',
    icon: '🚨',
    description: 'Prepare for natural disasters, job loss, and economic downturns. Build resilience that protects you and your family.',
    whyItMatters: 'Emergencies don\'t announce themselves. The difference between thriving and struggling through a crisis is preparation. This track gives you practical skills to weather any storm—literal or financial.',
    graduationGoal: 'Be fully prepared for any emergency with savings, supplies, and a plan',
    difficulty: 'beginner',
    prerequisites: ['personalfinance'],
    learningObjectives: [
        'Build an emergency fund and financial safety net',
        'Prepare for natural disasters and emergencies',
        'Create emergency plans for your family',
        'Navigate job loss and economic downturns',
        'Build resilience to handle any crisis'
    ],
    relatedTracks: ['personalfinance', 'health', 'housing'],
    resources: [
        { title: 'FEMA Preparedness', url: 'https://www.ready.gov/' },
        { title: 'Red Cross Emergency Preparedness', url: 'https://www.redcross.org/get-help/how-to-prepare-for-emergencies' }
    ],
    levels: [
        {
            id: 1,
            title: 'Understanding Emergencies',
            subtitle: 'Why preparation is your best investment',
            topics: [
                {
                    id: 'why-prepare',
                    title: 'Why Preparation Matters',
                    content: `
                        <h2>Why Preparation Matters</h2>
                        
                        <div class="definition">
                            <strong>Core Truth:</strong> Emergencies are not "if" but "when." The average person will face 3-4 major emergencies in their lifetime.
                        </div>
                        
                        <h3>Types of Emergencies</h3>
                        <ul>
                            <li><strong>Natural Disasters:</strong> Earthquakes, wildfires, floods, hurricanes, power outages</li>
                            <li><strong>Financial Crises:</strong> Job loss, medical emergency, economic recession</li>
                            <li><strong>Personal Emergencies:</strong> Car breakdown, home repair, family crisis</li>
                            <li><strong>Systemic Disruptions:</strong> Supply chain issues, bank failures, civil unrest</li>
                        </ul>
                        
                        <h3>The Cost of Being Unprepared</h3>
                        <ul>
                            <li>63% of Americans can't cover a $500 emergency</li>
                            <li>Average family loses $10,000+ in preventable emergency costs</li>
                            <li>Unprepared households take 2-3x longer to recover</li>
                            <li>Stress and poor decisions compound the damage</li>
                        </ul>
                        
                        <div class="highlight">
                            <strong>Key Insight:</strong> Every dollar spent on preparation saves $10 in crisis response. Preparation isn't paranoia—it's wisdom.
                        </div>
                        
                        <h3>The Prepared Mindset</h3>
                        <ul>
                            <li><strong>Accept reality:</strong> Bad things happen to good people</li>
                            <li><strong>Take responsibility:</strong> You are your first responder</li>
                            <li><strong>Start small:</strong> Any preparation is better than none</li>
                            <li><strong>Build systems:</strong> Habits and plans beat panic decisions</li>
                        </ul>
                    `
                },
                {
                    id: 'emergency-categories',
                    title: 'The 5 Pillars of Preparedness',
                    content: `
                        <h2>The 5 Pillars of Preparedness</h2>
                        
                        <p>True resilience covers all five areas. Most people focus only on one or two.</p>
                        
                        <h3>1. Financial Resilience</h3>
                        <ul>
                            <li>Emergency fund (3-6 months expenses)</li>
                            <li>Low debt burden</li>
                            <li>Multiple income sources</li>
                            <li>Accessible cash and accounts</li>
                        </ul>
                        
                        <h3>2. Physical Supplies</h3>
                        <ul>
                            <li>72-hour emergency kit</li>
                            <li>2-week food and water supply</li>
                            <li>First aid and medications</li>
                            <li>Tools and equipment</li>
                        </ul>
                        
                        <h3>3. Information & Documents</h3>
                        <ul>
                            <li>Important documents secured</li>
                            <li>Contact lists and plans</li>
                            <li>Knowledge and skills</li>
                            <li>Local emergency information</li>
                        </ul>
                        
                        <h3>4. Social Network</h3>
                        <ul>
                            <li>Family emergency plan</li>
                            <li>Trusted neighbors and friends</li>
                            <li>Community connections</li>
                            <li>Professional contacts (doctor, lawyer, etc.)</li>
                        </ul>
                        
                        <h3>5. Mental Readiness</h3>
                        <ul>
                            <li>Calm under pressure</li>
                            <li>Problem-solving skills</li>
                            <li>Adaptability</li>
                            <li>Stress management</li>
                        </ul>
                        
                        <div class="highlight">
                            <strong>Assessment:</strong> Rate yourself 1-10 in each pillar. Your lowest score is your biggest vulnerability.
                        </div>
                    `
                },
                {
                    id: 'preparation-priority',
                    title: 'Where to Start',
                    content: `
                        <h2>Where to Start: Priority Order</h2>
                        
                        <p>Don't try to do everything at once. Follow this proven order:</p>
                        
                        <h3>Week 1: The Basics</h3>
                        <ul>
                            <li>Start an emergency fund ($100 is a start)</li>
                            <li>Identify your local risks (earthquake? flood? tornado?)</li>
                            <li>Know your evacuation routes</li>
                            <li>Have 3 days of water stored</li>
                        </ul>
                        
                        <h3>Month 1: Foundation</h3>
                        <ul>
                            <li>Build emergency fund to $1,000</li>
                            <li>Complete a 72-hour kit</li>
                            <li>Gather and secure important documents</li>
                            <li>Create a family communication plan</li>
                        </ul>
                        
                        <h3>Quarter 1: Solid Ground</h3>
                        <ul>
                            <li>Emergency fund = 1 month expenses</li>
                            <li>2-week food and water supply</li>
                            <li>Review and update insurance</li>
                            <li>Learn basic first aid</li>
                        </ul>
                        
                        <h3>Year 1: Fully Prepared</h3>
                        <ul>
                            <li>Emergency fund = 3-6 months</li>
                            <li>Complete supplies for all scenarios</li>
                            <li>Skills training (first aid, fire safety)</li>
                            <li>Regular practice and updates</li>
                        </ul>
                        
                        <div class="example">
                            <strong>Pro Tip:</strong> Add one item to your emergency supplies each grocery trip. Small consistent actions build major resilience.
                        </div>
                    `
                }
            ],
            quiz: {
                questions: [
                    {
                        question: 'What percentage of Americans can\'t cover a $500 emergency?',
                        options: ['23%', '43%', '63%', '83%'],
                        correct: 2,
                        explanation: '63% of Americans can\'t cover a $500 emergency—highlighting why preparation is so critical.'
                    },
                    {
                        question: 'What are the 5 Pillars of Preparedness?',
                        options: [
                            'Money, Food, Water, Shelter, Transportation',
                            'Financial, Physical Supplies, Information, Social Network, Mental',
                            'Savings, Insurance, Documents, Skills, Location',
                            'Budget, Emergency Kit, Family Plan, First Aid, Communication'
                        ],
                        correct: 1,
                        explanation: 'The 5 Pillars are Financial Resilience, Physical Supplies, Information & Documents, Social Network, and Mental Readiness.'
                    },
                    {
                        question: 'How much should your emergency fund goal be?',
                        options: ['$1,000', '1 month expenses', '3-6 months expenses', '1 year salary'],
                        correct: 2,
                        explanation: 'The standard recommendation is 3-6 months of living expenses, though some situations warrant more.'
                    }
                ]
            }
        },
        {
            id: 2,
            title: 'Natural Disaster Preparedness',
            subtitle: 'Ready for earthquakes, fires, floods, and more',
            topics: [
                {
                    id: 'california-disasters',
                    title: 'Know Your Regional Risks',
                    content: `
                        <h2>Know Your Regional Risks</h2>
                        
                        <p>Different areas face different threats. Know what's most likely where you live.</p>
                        
                        <h3>California-Specific Risks</h3>
                        <ul>
                            <li><strong>Earthquakes:</strong> Major fault lines throughout the state. The "Big One" is overdue.</li>
                            <li><strong>Wildfires:</strong> Fire season (June-November) is increasingly severe</li>
                            <li><strong>Mudslides:</strong> After wildfires, rain causes deadly slides</li>
                            <li><strong>Drought:</strong> Water restrictions and supply issues</li>
                            <li><strong>Power Shutoffs:</strong> PSPS events during high fire risk</li>
                        </ul>
                        
                        <h3>Other Common US Disasters</h3>
                        <ul>
                            <li><strong>Hurricanes:</strong> Southeast and Gulf Coast</li>
                            <li><strong>Tornadoes:</strong> Midwest "Tornado Alley"</li>
                            <li><strong>Flooding:</strong> Coastal and river areas nationwide</li>
                            <li><strong>Winter Storms:</strong> Northern states</li>
                            <li><strong>Heat Waves:</strong> Increasingly everywhere</li>
                        </ul>
                        
                        <h3>Research Your Specific Location</h3>
                        <ul>
                            <li>Check FEMA flood maps for your address</li>
                            <li>Look up fire hazard zones</li>
                            <li>Know distance from fault lines</li>
                            <li>Understand your evacuation zones</li>
                        </ul>
                        
                        <div class="highlight">
                            <strong>Action Item:</strong> Go to your county's emergency services website today and download their hazard assessment for your area.
                        </div>
                    `
                },
                {
                    id: '72-hour-kit',
                    title: 'Building Your 72-Hour Emergency Kit',
                    content: `
                        <h2>Building Your 72-Hour Emergency Kit</h2>
                        
                        <div class="definition">
                            <strong>The 72-Hour Rule:</strong> In a major disaster, you may need to survive 72 hours before help arrives. Your kit must sustain you independently.
                        </div>
                        
                        <h3>Water (Most Critical)</h3>
                        <ul>
                            <li>1 gallon per person per day (3 gallons minimum)</li>
                            <li>Water purification tablets or filter</li>
                            <li>Consider water storage containers</li>
                        </ul>
                        
                        <h3>Food</h3>
                        <ul>
                            <li>Non-perishable, easy-to-prepare foods</li>
                            <li>Can opener (if needed)</li>
                            <li>High-calorie options: nuts, peanut butter, protein bars</li>
                            <li>Comfort foods for morale</li>
                            <li>Special dietary needs (baby food, pet food)</li>
                        </ul>
                        
                        <h3>First Aid</h3>
                        <ul>
                            <li>Basic first aid kit</li>
                            <li>Prescription medications (7-day supply minimum)</li>
                            <li>Pain relievers, antihistamines</li>
                            <li>Any medical devices needed</li>
                        </ul>
                        
                        <h3>Light & Communication</h3>
                        <ul>
                            <li>Flashlight with extra batteries</li>
                            <li>Battery or crank radio (NOAA weather)</li>
                            <li>Phone charger (battery pack or solar)</li>
                            <li>Whistle for signaling</li>
                        </ul>
                        
                        <h3>Documents (In Waterproof Container)</h3>
                        <ul>
                            <li>Copies of IDs, insurance, and important papers</li>
                            <li>Emergency contact list</li>
                            <li>Cash in small bills ($200+ recommended)</li>
                            <li>USB drive with digital copies</li>
                        </ul>
                        
                        <h3>Clothing & Shelter</h3>
                        <ul>
                            <li>Change of clothes per person</li>
                            <li>Sturdy shoes</li>
                            <li>Rain gear or emergency blankets</li>
                            <li>Work gloves</li>
                        </ul>
                        
                        <div class="example">
                            <strong>Storage Tip:</strong> Keep your kit in an easy-to-grab backpack or bin near your exit. Check and rotate supplies every 6 months.
                        </div>
                    `
                },
                {
                    id: 'evacuation-planning',
                    title: 'Evacuation Planning',
                    content: `
                        <h2>Evacuation Planning</h2>
                        
                        <h3>Know Your Routes (Before You Need Them)</h3>
                        <ul>
                            <li>Identify 2-3 ways out of your neighborhood</li>
                            <li>Know routes to high ground (floods) or safe zones (fires)</li>
                            <li>Practice driving these routes</li>
                            <li>Have paper maps (phones may not work)</li>
                        </ul>
                        
                        <h3>The "Go Bag" Checklist</h3>
                        <p>When evacuation is ordered, you may have 15 minutes. Know what to grab:</p>
                        <ol>
                            <li>72-hour kit</li>
                            <li>Important documents</li>
                            <li>Medications</li>
                            <li>Phone and charger</li>
                            <li>Laptop/hard drive with irreplaceable files</li>
                            <li>Irreplaceable photos or items (pre-identify these)</li>
                            <li>Pet supplies if applicable</li>
                        </ol>
                        
                        <h3>Meeting Points</h3>
                        <ul>
                            <li><strong>Near Home:</strong> Specific spot if you evacuate separately</li>
                            <li><strong>Out of Neighborhood:</strong> In case you can't return home</li>
                            <li><strong>Out of Region:</strong> A friend/family member's home far away</li>
                        </ul>
                        
                        <h3>Communication Plan</h3>
                        <ul>
                            <li>Designate an out-of-state contact (local lines may be jammed)</li>
                            <li>Everyone knows to check in with this person</li>
                            <li>Text instead of call (texts get through when calls don't)</li>
                            <li>Have contact numbers written down (not just in your phone)</li>
                        </ul>
                        
                        <div class="highlight">
                            <strong>Critical:</strong> Don't wait for mandatory evacuation if you feel unsafe. Early voluntary evacuation is always smarter than last-minute panic.
                        </div>
                    `
                },
                {
                    id: 'shelter-in-place',
                    title: 'Shelter-in-Place Preparation',
                    content: `
                        <h2>Shelter-in-Place Preparation</h2>
                        
                        <p>Sometimes the safest option is staying home. Be ready for extended periods without utilities or services.</p>
                        
                        <h3>Extended Water Storage</h3>
                        <ul>
                            <li>2 weeks minimum: 14 gallons per person</li>
                            <li>Large containers or water bricks</li>
                            <li>Water heater can be emergency source (40-80 gallons)</li>
                            <li>Bathtub water storage (fill when storm approaching)</li>
                        </ul>
                        
                        <h3>Extended Food Supply</h3>
                        <ul>
                            <li>2 weeks of shelf-stable food minimum</li>
                            <li>Variety to prevent "food fatigue"</li>
                            <li>Include comfort foods</li>
                            <li>Rotate stock (eat oldest first)</li>
                        </ul>
                        
                        <h3>Power Outage Preparedness</h3>
                        <ul>
                            <li>Flashlights and lanterns (not candles—fire risk)</li>
                            <li>Battery-powered or hand-crank radio</li>
                            <li>Phone charging options</li>
                            <li>Consider a generator or solar panels</li>
                            <li>Know how to manually open garage door</li>
                        </ul>
                        
                        <h3>Heating/Cooling Without Power</h3>
                        <ul>
                            <li>Extra blankets and warm clothing</li>
                            <li>One room that's easier to heat/cool</li>
                            <li>Battery-powered fans</li>
                            <li>Never use outdoor grills/generators inside (CO poisoning)</li>
                        </ul>
                        
                        <h3>Sanitation</h3>
                        <ul>
                            <li>Toilet can flush with bucket of water</li>
                            <li>Heavy-duty garbage bags</li>
                            <li>Hand sanitizer and cleaning supplies</li>
                            <li>Know where water shutoff valve is</li>
                        </ul>
                        
                        <div class="example">
                            <strong>Reality Check:</strong> During the 2021 Texas winter storm, millions lost power for days. Those with preparation were uncomfortable. Those without faced life-threatening situations.
                        </div>
                    `
                }
            ],
            quiz: {
                questions: [
                    {
                        question: 'How much water should you store per person per day?',
                        options: ['½ gallon', '1 gallon', '2 gallons', '3 gallons'],
                        correct: 1,
                        explanation: 'The standard recommendation is 1 gallon per person per day for drinking, cooking, and basic hygiene.'
                    },
                    {
                        question: 'Why should you have an out-of-state emergency contact?',
                        options: [
                            'They can send money faster',
                            'Local phone lines may be jammed but long-distance may work',
                            'They won\'t be affected by local disasters',
                            'Both B and C'
                        ],
                        correct: 3,
                        explanation: 'An out-of-state contact won\'t be affected by local disasters and can serve as a communication hub when local lines are jammed.'
                    },
                    {
                        question: 'What should you do first when an evacuation is likely?',
                        options: [
                            'Wait for the official order',
                            'Leave early to avoid traffic and panic',
                            'Call 911 to confirm',
                            'Post on social media'
                        ],
                        correct: 1,
                        explanation: 'Early voluntary evacuation is always smarter than last-minute mandatory evacuation. Don\'t wait if you feel unsafe.'
                    }
                ]
            }
        },
        {
            id: 3,
            title: 'Emergency Fund Mastery',
            subtitle: 'Build your financial safety net',
            topics: [
                {
                    id: 'emergency-fund-why',
                    title: 'Why Emergency Funds Are Non-Negotiable',
                    content: `
                        <h2>Why Emergency Funds Are Non-Negotiable</h2>
                        
                        <div class="definition">
                            <strong>Emergency Fund:</strong> Money set aside specifically for unexpected expenses or income loss. It's not savings for goals—it's insurance against disaster.
                        </div>
                        
                        <h3>What Happens Without One</h3>
                        <ul>
                            <li><strong>Credit card debt:</strong> 20%+ interest turns $1,000 emergency into $1,500+ debt</li>
                            <li><strong>Payday loans:</strong> 400%+ APR traps people for years</li>
                            <li><strong>Selling investments:</strong> Often at a loss, plus taxes</li>
                            <li><strong>Borrowing from retirement:</strong> Penalties and lost growth</li>
                            <li><strong>Stress:</strong> Financial anxiety affects health, work, relationships</li>
                        </ul>
                        
                        <h3>What It Actually Provides</h3>
                        <ul>
                            <li><strong>Peace of mind:</strong> Sleep better knowing you're covered</li>
                            <li><strong>Better decisions:</strong> Not desperate = smarter choices</li>
                            <li><strong>Negotiating power:</strong> Can walk away from bad deals/jobs</li>
                            <li><strong>Opportunity readiness:</strong> Can take advantage of opportunities</li>
                            <li><strong>Protection for others:</strong> Don't burden family when crisis hits</li>
                        </ul>
                        
                        <div class="highlight">
                            <strong>Mindset Shift:</strong> An emergency fund isn't money you're "not using"—it's actively working as insurance 24/7, protecting everything else you've built.
                        </div>
                        
                        <h3>Emergency Fund vs. Savings Goals</h3>
                        <table>
                            <tr><td><strong>Emergency Fund</strong></td><td><strong>Savings Goals</strong></td></tr>
                            <tr><td>For unexpected events</td><td>For planned purchases</td></tr>
                            <tr><td>Untouchable except for emergencies</td><td>Can be used when goal is reached</td></tr>
                            <tr><td>In easily accessible account</td><td>Can be in less accessible accounts</td></tr>
                            <tr><td>Never "done"—always maintained</td><td>Complete when goal achieved</td></tr>
                        </table>
                    `
                },
                {
                    id: 'how-much-emergency',
                    title: 'How Much Do You Actually Need?',
                    content: `
                        <h2>How Much Do You Actually Need?</h2>
                        
                        <h3>The Standard: 3-6 Months of Expenses</h3>
                        <p>This covers most job losses and major emergencies. But your specific number depends on your situation.</p>
                        
                        <h3>Factors That Increase Your Need</h3>
                        <ul>
                            <li><strong>Single income household:</strong> No backup if you lose your job</li>
                            <li><strong>Self-employed/Freelance:</strong> Income already variable</li>
                            <li><strong>Specialized career:</strong> Harder to find new job quickly</li>
                            <li><strong>Health issues:</strong> Higher likelihood of unexpected costs</li>
                            <li><strong>Homeowner:</strong> More things can break</li>
                            <li><strong>Dependents:</strong> More people relying on you</li>
                        </ul>
                        
                        <h3>Calculate Your Number</h3>
                        <ol>
                            <li>List essential monthly expenses:
                                <ul>
                                    <li>Housing (rent/mortgage)</li>
                                    <li>Utilities</li>
                                    <li>Food</li>
                                    <li>Insurance</li>
                                    <li>Transportation</li>
                                    <li>Minimum debt payments</li>
                                    <li>Phone/Internet</li>
                                </ul>
                            </li>
                            <li>Total = Your Monthly "Survival Budget"</li>
                            <li>Multiply by 3 (minimum) to 6 (solid) months</li>
                        </ol>
                        
                        <div class="example">
                            <strong>Example:</strong><br>
                            Monthly essentials: $3,000<br>
                            3 months: $9,000 (minimum target)<br>
                            6 months: $18,000 (solid target)<br>
                            Single income or high risk: Consider $27,000 (9 months)
                        </div>
                        
                        <h3>Start Where You Are</h3>
                        <ul>
                            <li>$500 = Starter (covers minor emergencies)</li>
                            <li>$1,000 = Foundation (covers most common emergencies)</li>
                            <li>1 month = Real protection begins</li>
                            <li>3 months = Solid foundation</li>
                            <li>6 months = Full protection</li>
                        </ul>
                    `
                },
                {
                    id: 'where-keep-emergency',
                    title: 'Where to Keep Your Emergency Fund',
                    content: `
                        <h2>Where to Keep Your Emergency Fund</h2>
                        
                        <h3>The Two Requirements</h3>
                        <ol>
                            <li><strong>Accessible:</strong> You can get it within 1-2 days</li>
                            <li><strong>Safe:</strong> Can't lose value (not invested in stocks)</li>
                        </ol>
                        
                        <h3>Best Option: High-Yield Savings Account (HYSA)</h3>
                        <ul>
                            <li>Currently earning 4-5% APY (as of 2024-2025)</li>
                            <li>FDIC insured up to $250,000</li>
                            <li>Transfer to checking in 1-2 days</li>
                            <li>No risk of loss</li>
                            <li>Separate from daily spending (reduces temptation)</li>
                        </ul>
                        
                        <h3>Good Options</h3>
                        <ul>
                            <li><strong>Money Market Account:</strong> Similar to HYSA, sometimes with check-writing</li>
                            <li><strong>Short-term CDs:</strong> Slightly higher rates, less flexible</li>
                            <li><strong>Treasury Bills:</strong> Government-backed, very safe</li>
                        </ul>
                        
                        <h3>Where NOT to Keep It</h3>
                        <ul>
                            <li><strong>Checking account:</strong> Too easy to spend</li>
                            <li><strong>Under mattress:</strong> No growth, theft/fire risk</li>
                            <li><strong>Stocks/Crypto:</strong> Could be down 40% when you need it</li>
                            <li><strong>Retirement accounts:</strong> Penalties and taxes for early withdrawal</li>
                        </ul>
                        
                        <h3>Popular High-Yield Savings Options</h3>
                        <ul>
                            <li>Marcus (Goldman Sachs)</li>
                            <li>Ally Bank</li>
                            <li>Discover</li>
                            <li>Capital One 360</li>
                            <li>Wealthfront Cash Account</li>
                        </ul>
                        
                        <div class="highlight">
                            <strong>Pro Tip:</strong> Keep it at a DIFFERENT bank than your checking. The slight inconvenience of transferring prevents impulsive spending.
                        </div>
                    `
                },
                {
                    id: 'building-emergency-fund',
                    title: 'Building Your Emergency Fund from $0',
                    content: `
                        <h2>Building Your Emergency Fund from $0</h2>
                        
                        <h3>Strategy 1: The Automatic Start</h3>
                        <ul>
                            <li>Open a high-yield savings account today</li>
                            <li>Set up automatic transfer: Even $25/week = $1,300/year</li>
                            <li>Treat it like a bill—non-negotiable</li>
                            <li>Transfer happens on payday, before you can spend it</li>
                        </ul>
                        
                        <h3>Strategy 2: The Snowball</h3>
                        <ul>
                            <li>Start with whatever you can ($10, $50, $100)</li>
                            <li>Add any "extra" money that comes in</li>
                            <li>Tax refunds, bonuses, gifts → emergency fund</li>
                            <li>Sell things you don't need</li>
                            <li>Increase contribution as income grows</li>
                        </ul>
                        
                        <h3>Strategy 3: The Side Hustle</h3>
                        <ul>
                            <li>Dedicate specific income to emergency fund only</li>
                            <li>Freelance work, gig economy, overtime</li>
                            <li>Selling items online</li>
                            <li>Weekend or evening work temporarily</li>
                        </ul>
                        
                        <h3>Strategy 4: The Trim</h3>
                        <ul>
                            <li>Audit subscriptions and cancel unused ones</li>
                            <li>Negotiate bills (cable, insurance, phone)</li>
                            <li>Redirect those savings to emergency fund</li>
                            <li>$100/month in cuts = $1,200/year</li>
                        </ul>
                        
                        <div class="example">
                            <strong>Real Example:</strong><br>
                            Auto-transfer: $100/week<br>
                            Tax refund: $2,000/year<br>
                            Cancelled subscriptions: $50/month<br>
                            Side gig: $200/month<br>
                            <strong>Total: $9,800/year</strong>—A full emergency fund in under 2 years
                        </div>
                        
                        <h3>What Counts as an Emergency?</h3>
                        <ul>
                            <li>✅ Job loss</li>
                            <li>✅ Medical emergency</li>
                            <li>✅ Car breakdown (needed for work)</li>
                            <li>✅ Essential home repair (broken heater)</li>
                            <li>❌ Vacation</li>
                            <li>❌ Concert tickets</li>
                            <li>❌ New phone (unless yours is broken)</li>
                            <li>❌ Good sales</li>
                        </ul>
                    `
                }
            ],
            quiz: {
                questions: [
                    {
                        question: 'Why should you keep your emergency fund in a different bank than your checking?',
                        options: [
                            'Better interest rates',
                            'The inconvenience prevents impulsive spending',
                            'Tax advantages',
                            'FDIC requires it'
                        ],
                        correct: 1,
                        explanation: 'The slight friction of transferring between banks helps prevent impulsive spending of your emergency fund.'
                    },
                    {
                        question: 'What\'s the minimum recommended emergency fund for most people?',
                        options: ['$500', '$1,000', '1 month expenses', '3 months expenses'],
                        correct: 3,
                        explanation: 'While $1,000 is a good starter, 3 months of expenses is the minimum for real protection against job loss or major emergencies.'
                    },
                    {
                        question: 'Where is the BEST place to keep an emergency fund?',
                        options: [
                            'Checking account for easy access',
                            'Stock market for growth',
                            'High-yield savings account',
                            'Under your mattress'
                        ],
                        correct: 2,
                        explanation: 'A high-yield savings account offers the best combination of safety (FDIC insured), accessibility (1-2 day transfers), and growth (4-5% interest).'
                    }
                ]
            }
        },
        {
            id: 4,
            title: 'Job Loss Preparation',
            subtitle: 'Protect your income before you need to',
            topics: [
                {
                    id: 'job-security-myths',
                    title: 'The Truth About Job Security',
                    content: `
                        <h2>The Truth About Job Security</h2>
                        
                        <div class="definition">
                            <strong>Reality Check:</strong> The average person will have 12 jobs in their lifetime. Job loss is not a matter of "if" but "when."
                        </div>
                        
                        <h3>Job Security Myths</h3>
                        <ul>
                            <li><strong>"I'm too valuable to fire"</strong> → Companies eliminate entire departments</li>
                            <li><strong>"I've been here 20 years"</strong> → Tenure doesn't protect against layoffs</li>
                            <li><strong>"My company is doing well"</strong> → Markets change quickly</li>
                            <li><strong>"I have a government job"</strong> → Budget cuts affect everyone</li>
                            <li><strong>"I'm not doing anything wrong"</strong> → Layoffs aren't about performance</li>
                        </ul>
                        
                        <h3>Warning Signs of Potential Layoffs</h3>
                        <ul>
                            <li>Hiring freeze or reduction</li>
                            <li>Budget cuts across departments</li>
                            <li>Leadership changes or turnover</li>
                            <li>Company acquired or merged</li>
                            <li>Declining revenue or stock price</li>
                            <li>Industry disruption (automation, AI, etc.)</li>
                            <li>Your projects getting cancelled</li>
                            <li>Being left out of meetings you used to attend</li>
                        </ul>
                        
                        <h3>The Prepared Mindset</h3>
                        <ul>
                            <li>Always be interview-ready</li>
                            <li>Network before you need to</li>
                            <li>Keep skills current</li>
                            <li>Don't tie your identity to your job</li>
                            <li>Have income diversification</li>
                        </ul>
                        
                        <div class="highlight">
                            <strong>Key Insight:</strong> The best time to look for a job is when you have one. Update your resume every 6 months, even if you're happy.
                        </div>
                    `
                },
                {
                    id: 'layoff-proofing',
                    title: 'Making Yourself Layoff-Resistant',
                    content: `
                        <h2>Making Yourself Layoff-Resistant</h2>
                        
                        <h3>Increase Your Value</h3>
                        <ul>
                            <li><strong>Be a revenue generator:</strong> Work on projects that make money</li>
                            <li><strong>Be visible:</strong> Leadership should know your contributions</li>
                            <li><strong>Solve expensive problems:</strong> Save or make the company money</li>
                            <li><strong>Be cross-functional:</strong> Know multiple areas of the business</li>
                            <li><strong>Build relationships:</strong> People protect people they like and trust</li>
                        </ul>
                        
                        <h3>Reduce Your Risk</h3>
                        <ul>
                            <li><strong>Avoid being siloed:</strong> Don't be the only one who can do something</li>
                            <li><strong>Document your work:</strong> Make your contributions visible</li>
                            <li><strong>Stay current:</strong> Don't let skills become outdated</li>
                            <li><strong>Be adaptable:</strong> Embrace change instead of resisting it</li>
                        </ul>
                        
                        <h3>Build Your External Brand</h3>
                        <ul>
                            <li>Active LinkedIn presence</li>
                            <li>Industry connections outside your company</li>
                            <li>Thought leadership (writing, speaking, mentoring)</li>
                            <li>Certifications and credentials</li>
                        </ul>
                        
                        <h3>Keep Your Exit Ready</h3>
                        <ul>
                            <li>Resume updated (review every 6 months)</li>
                            <li>References identified and maintained</li>
                            <li>Portfolio of work (where appropriate)</li>
                            <li>Know your market value (check salary data)</li>
                        </ul>
                        
                        <div class="example">
                            <strong>Pro Tip:</strong> Set a calendar reminder every 6 months to update your resume with recent accomplishments—even if you love your job. Future you will thank you.
                        </div>
                    `
                },
                {
                    id: 'unemployment-benefits',
                    title: 'Understanding Unemployment Benefits',
                    content: `
                        <h2>Understanding Unemployment Benefits</h2>
                        
                        <h3>What Unemployment Insurance Provides</h3>
                        <ul>
                            <li>Partial wage replacement (typically 40-50% of previous pay)</li>
                            <li>Usually up to 26 weeks (varies by state)</li>
                            <li>Funded by employer taxes (you paid into this)</li>
                        </ul>
                        
                        <h3>Who Qualifies</h3>
                        <ul>
                            <li><strong>Yes:</strong> Laid off, company closed, hours significantly reduced</li>
                            <li><strong>Maybe:</strong> Quit for "good cause" (hostile environment, relocation)</li>
                            <li><strong>Usually No:</strong> Quit voluntarily, fired for misconduct</li>
                            <li><strong>Requirements:</strong> Must be actively seeking work</li>
                        </ul>
                        
                        <h3>California-Specific (EDD)</h3>
                        <ul>
                            <li>Maximum benefit: ~$450/week (as of 2024)</li>
                            <li>Apply online at EDD.ca.gov</li>
                            <li>Must certify every 2 weeks that you're seeking work</li>
                            <li>Keep records of job applications</li>
                        </ul>
                        
                        <h3>How to Apply</h3>
                        <ol>
                            <li>File immediately after job loss (don't wait)</li>
                            <li>Gather: SSN, employer info, work history, bank account</li>
                            <li>File online (faster than phone)</li>
                            <li>Certify every 2 weeks</li>
                            <li>Appeal if denied (many initial denials get overturned)</li>
                        </ol>
                        
                        <div class="highlight">
                            <strong>Important:</strong> Don't let pride stop you from filing. You and your employers paid into this system—it's not charity, it's insurance you've earned.
                        </div>
                        
                        <h3>Beyond Unemployment</h3>
                        <ul>
                            <li><strong>COBRA:</strong> Continue employer health insurance (expensive but available)</li>
                            <li><strong>ACA Marketplace:</strong> Often cheaper than COBRA</li>
                            <li><strong>Food assistance (SNAP):</strong> Available during hardship</li>
                            <li><strong>Utility assistance:</strong> Many programs during unemployment</li>
                        </ul>
                    `
                },
                {
                    id: 'income-diversification',
                    title: 'Diversifying Your Income',
                    content: `
                        <h2>Diversifying Your Income</h2>
                        
                        <div class="definition">
                            <strong>Income Diversification:</strong> Having multiple sources of income so that losing one doesn't devastate you financially.
                        </div>
                        
                        <h3>Why It Matters</h3>
                        <ul>
                            <li>100% reliance on one income = 100% risk</li>
                            <li>Even small additional income provides cushion</li>
                            <li>Skills developed can become full-time if needed</li>
                            <li>Psychological security is powerful</li>
                        </ul>
                        
                        <h3>Types of Additional Income</h3>
                        <ul>
                            <li><strong>Skill-based freelancing:</strong> Writing, design, coding, consulting</li>
                            <li><strong>Gig economy:</strong> Rideshare, delivery, TaskRabbit</li>
                            <li><strong>Passive income:</strong> Investments, rental property, digital products</li>
                            <li><strong>Part-time work:</strong> Weekend or evening job in different field</li>
                            <li><strong>Small business:</strong> E-commerce, services, content creation</li>
                        </ul>
                        
                        <h3>Getting Started</h3>
                        <ol>
                            <li><strong>Audit your skills:</strong> What can you do that others need?</li>
                            <li><strong>Start small:</strong> One client, one gig, one product</li>
                            <li><strong>Test on weekends:</strong> Don't quit your job to start</li>
                            <li><strong>Build gradually:</strong> Aim for income covering one bill at first</li>
                        </ol>
                        
                        <div class="example">
                            <strong>Examples by Career:</strong><br>
                            <li>Accountant → Freelance bookkeeping</li>
                            <li>Teacher → Tutoring, course creation</li>
                            <li>Designer → Freelance design, selling templates</li>
                            <li>Writer → Blog, freelance articles, copywriting</li>
                            <li>Anyone → Gig work, reselling, rental income</li>
                        </div>
                        
                        <h3>Goal: The Safety Net</h3>
                        <p>You don't need to replace your income—you need enough to:</p>
                        <ul>
                            <li>Cover basic bills while job hunting</li>
                            <li>Extend your runway during unemployment</li>
                            <li>Reduce desperation (which leads to bad decisions)</li>
                        </ul>
                        
                        <div class="highlight">
                            <strong>Target:</strong> Side income covering 25-50% of essential expenses provides massive security and peace of mind.
                        </div>
                    `
                }
            ],
            quiz: {
                questions: [
                    {
                        question: 'What\'s the best time to look for a new job?',
                        options: [
                            'When you\'re unhappy',
                            'After you\'ve been laid off',
                            'When you already have a job',
                            'During a recession'
                        ],
                        correct: 2,
                        explanation: 'The best time to look for a job is when you have one—you negotiate from strength, not desperation.'
                    },
                    {
                        question: 'What percentage of previous pay does unemployment typically replace?',
                        options: ['10-20%', '40-50%', '70-80%', '100%'],
                        correct: 1,
                        explanation: 'Unemployment insurance typically replaces 40-50% of your previous wages, which is why emergency funds are critical.'
                    },
                    {
                        question: 'What\'s a good initial target for side income?',
                        options: [
                            'Replace your full salary',
                            'Cover 25-50% of essential expenses',
                            'Make enough to quit your job',
                            'Just a few dollars per month'
                        ],
                        correct: 1,
                        explanation: 'Side income covering 25-50% of essential expenses provides significant security without requiring massive time investment.'
                    }
                ]
            }
        },
        {
            id: 5,
            title: 'Economic Downturn Survival',
            subtitle: 'Navigate recessions and financial crises',
            topics: [
                {
                    id: 'understanding-recessions',
                    title: 'Understanding Economic Downturns',
                    content: `
                        <h2>Understanding Economic Downturns</h2>
                        
                        <div class="definition">
                            <strong>Recession:</strong> A significant decline in economic activity lasting more than a few months. Technically: two consecutive quarters of GDP decline.
                        </div>
                        
                        <h3>What Happens in a Recession</h3>
                        <ul>
                            <li>Unemployment rises (companies cut costs)</li>
                            <li>Consumer spending decreases</li>
                            <li>Stock market typically declines</li>
                            <li>Housing prices may fall</li>
                            <li>Credit becomes harder to get</li>
                            <li>Businesses close or struggle</li>
                        </ul>
                        
                        <h3>Warning Signs of Coming Recession</h3>
                        <ul>
                            <li><strong>Inverted yield curve:</strong> Short-term rates higher than long-term</li>
                            <li><strong>Rising unemployment claims:</strong> Early indicator of trouble</li>
                            <li><strong>Falling consumer confidence:</strong> People stop spending</li>
                            <li><strong>Corporate earnings declining:</strong> Less profit = more layoffs</li>
                            <li><strong>Housing market cooling:</strong> Prices dropping, sales slowing</li>
                        </ul>
                        
                        <h3>Historical Perspective</h3>
                        <ul>
                            <li>Recessions happen roughly every 7-10 years</li>
                            <li>They typically last 8-18 months</li>
                            <li>Recovery always follows (though timing varies)</li>
                            <li>Those prepared often come out ahead</li>
                        </ul>
                        
                        <div class="highlight">
                            <strong>Key Insight:</strong> Recessions are normal parts of economic cycles. They're temporary. Panic makes things worse; preparation makes things manageable.
                        </div>
                    `
                },
                {
                    id: 'recession-preparation',
                    title: 'Preparing Before a Recession Hits',
                    content: `
                        <h2>Preparing Before a Recession Hits</h2>
                        
                        <h3>Financial Fortress Building</h3>
                        <ul>
                            <li><strong>Maximize emergency fund:</strong> In uncertain times, aim for 6-12 months</li>
                            <li><strong>Pay down debt:</strong> Especially variable-rate debt (credit cards)</li>
                            <li><strong>Avoid new debt:</strong> Don't take on car payments or big loans</li>
                            <li><strong>Build credit:</strong> You may need it; make sure it's strong</li>
                            <li><strong>Lock in rates:</strong> Refinance to fixed rates if possible</li>
                        </ul>
                        
                        <h3>Career Fortification</h3>
                        <ul>
                            <li>Update resume and LinkedIn</li>
                            <li>Strengthen professional network</li>
                            <li>Learn recession-resistant skills</li>
                            <li>Consider certifications that increase value</li>
                            <li>Document your accomplishments</li>
                        </ul>
                        
                        <h3>Expense Audit</h3>
                        <ul>
                            <li>Review all subscriptions—cut unnecessary ones</li>
                            <li>Identify expenses you could eliminate if needed</li>
                            <li>Know your true "survival budget"</li>
                            <li>Negotiate recurring bills now</li>
                        </ul>
                        
                        <h3>Investment Strategy</h3>
                        <ul>
                            <li>Don't try to time the market</li>
                            <li>Stay diversified</li>
                            <li>Continue regular contributions (dollar-cost averaging)</li>
                            <li>Have some cash available for opportunities</li>
                        </ul>
                        
                        <div class="example">
                            <strong>Pre-Recession Checklist:</strong>
                            <ul>
                                <li>☐ Emergency fund at 6+ months</li>
                                <li>☐ High-interest debt paid off</li>
                                <li>☐ Resume updated</li>
                                <li>☐ Network active</li>
                                <li>☐ Skills current</li>
                                <li>☐ Know your survival budget</li>
                            </ul>
                        </div>
                    `
                },
                {
                    id: 'during-recession',
                    title: 'Navigating During a Recession',
                    content: `
                        <h2>Navigating During a Recession</h2>
                        
                        <h3>If You Still Have Your Job</h3>
                        <ul>
                            <li><strong>Become essential:</strong> Take on critical projects</li>
                            <li><strong>Be visible:</strong> Make sure leadership knows your value</li>
                            <li><strong>Stay positive:</strong> Negative attitudes get cut first</li>
                            <li><strong>Keep networking:</strong> Just in case</li>
                            <li><strong>Save aggressively:</strong> Now is not the time to spend</li>
                        </ul>
                        
                        <h3>If You Lose Your Job</h3>
                        <ol>
                            <li><strong>File for unemployment immediately</strong></li>
                            <li><strong>Cut to survival budget:</strong> Eliminate non-essentials</li>
                            <li><strong>Preserve emergency fund:</strong> Make it last</li>
                            <li><strong>Job search intensively:</strong> Treat it as your full-time job</li>
                            <li><strong>Consider temporary work:</strong> Any income helps</li>
                            <li><strong>Use this time:</strong> Learn new skills, improve resume</li>
                        </ol>
                        
                        <h3>What NOT to Do</h3>
                        <ul>
                            <li><strong>Don't panic sell investments:</strong> You lock in losses</li>
                            <li><strong>Don't rack up credit card debt:</strong> Makes recovery harder</li>
                            <li><strong>Don't withdraw from retirement:</strong> Penalties plus lost growth</li>
                            <li><strong>Don't stop all investing:</strong> Recessions are buying opportunities</li>
                            <li><strong>Don't isolate:</strong> Lean on community and network</li>
                        </ul>
                        
                        <h3>Recession Opportunities</h3>
                        <ul>
                            <li>Stock market "on sale" (buy low)</li>
                            <li>Real estate may be discounted</li>
                            <li>Less competition for some jobs</li>
                            <li>Time to build skills and education</li>
                            <li>Starting a business can be cheaper</li>
                        </ul>
                        
                        <div class="highlight">
                            <strong>Mindset:</strong> Recessions end. Every single one in history has ended. Your job is to survive and position yourself to thrive in the recovery.
                        </div>
                    `
                },
                {
                    id: 'recession-recovery',
                    title: 'Positioning for Recovery',
                    content: `
                        <h2>Positioning for Recovery</h2>
                        
                        <h3>Signs Recovery is Coming</h3>
                        <ul>
                            <li>Unemployment claims start decreasing</li>
                            <li>Consumer confidence rising</li>
                            <li>Stock market showing sustained gains</li>
                            <li>Companies start hiring again</li>
                            <li>Credit becomes easier to obtain</li>
                        </ul>
                        
                        <h3>Position Yourself for Growth</h3>
                        <ul>
                            <li><strong>Skills:</strong> New skills learned during downturn pay off</li>
                            <li><strong>Network:</strong> Connections made during hard times are strongest</li>
                            <li><strong>Investments:</strong> Purchases made at bottom grow most</li>
                            <li><strong>Career:</strong> Be ready to pursue new opportunities</li>
                        </ul>
                        
                        <h3>Rebuild What Was Depleted</h3>
                        <ol>
                            <li>Replenish emergency fund first</li>
                            <li>Resume retirement contributions</li>
                            <li>Pay off any debt accumulated</li>
                            <li>Then consider investing and spending</li>
                        </ol>
                        
                        <h3>Learn from the Experience</h3>
                        <ul>
                            <li>What would you do differently?</li>
                            <li>What preparation saved you?</li>
                            <li>What skills do you wish you had?</li>
                            <li>How can you be more resilient next time?</li>
                        </ul>
                        
                        <div class="example">
                            <strong>Post-Recession Winners:</strong> Many successful businesses started during recessions—Disney, Microsoft, Airbnb, Uber. Downturns create opportunities for the prepared.
                        </div>
                        
                        <h3>The Recession Cycle</h3>
                        <p>Remember: Another recession will come. Use the recovery period to prepare for the next one. The cycle continues—those who learn and prepare, prosper.</p>
                        
                        <div class="highlight">
                            <strong>Final Thought:</strong> The goal isn't just to survive recessions—it's to use them as opportunities to get ahead while others struggle. Preparation is your competitive advantage.
                        </div>
                    `
                }
            ],
            quiz: {
                questions: [
                    {
                        question: 'How often do recessions typically occur?',
                        options: ['Every 2-3 years', 'Every 7-10 years', 'Every 15-20 years', 'Randomly, no pattern'],
                        correct: 1,
                        explanation: 'Recessions historically occur roughly every 7-10 years, making preparation a wise ongoing practice.'
                    },
                    {
                        question: 'What should you NOT do during a recession?',
                        options: [
                            'Cut expenses to survival budget',
                            'Panic sell investments',
                            'File for unemployment',
                            'Continue learning new skills'
                        ],
                        correct: 1,
                        explanation: 'Panic selling investments locks in losses. Markets recover, and selling low means missing the rebound.'
                    },
                    {
                        question: 'What should be your FIRST priority after a recession ends?',
                        options: [
                            'Buy a new car',
                            'Invest aggressively in stocks',
                            'Replenish your emergency fund',
                            'Take a vacation'
                        ],
                        correct: 2,
                        explanation: 'Replenishing your emergency fund should be the first priority—another recession will come, and you need to be prepared.'
                    }
                ]
            }
        },
        {
            id: 6,
            title: 'Recovery & Resilience',
            subtitle: 'Bouncing back stronger after any crisis',
            topics: [
                {
                    id: 'post-crisis-mindset',
                    title: 'The Recovery Mindset',
                    content: `
                        <h2>The Recovery Mindset</h2>
                        
                        <h3>Acknowledge What Happened</h3>
                        <ul>
                            <li>It's okay to feel frustrated, scared, or angry</li>
                            <li>Grief for lost stability is normal</li>
                            <li>Don't rush the emotional process</li>
                            <li>But don't stay stuck either</li>
                        </ul>
                        
                        <h3>Shift from Victim to Victor</h3>
                        <ul>
                            <li><strong>Victim mindset:</strong> "Why did this happen to me?"</li>
                            <li><strong>Victor mindset:</strong> "What can I learn and do now?"</li>
                            <li>Focus on what you CAN control</li>
                            <li>Take small actions daily</li>
                        </ul>
                        
                        <h3>Post-Traumatic Growth</h3>
                        <p>Many people report being stronger after adversity:</p>
                        <ul>
                            <li>New appreciation for life</li>
                            <li>Deeper relationships</li>
                            <li>Recognition of personal strength</li>
                            <li>New possibilities and paths</li>
                            <li>Spiritual or philosophical growth</li>
                        </ul>
                        
                        <div class="highlight">
                            <strong>Key Insight:</strong> You can't control what happened, but you can control what happens next. Every recovery starts with a decision to move forward.
                        </div>
                        
                        <h3>Building Mental Resilience</h3>
                        <ul>
                            <li>Maintain routines and structure</li>
                            <li>Stay connected to supportive people</li>
                            <li>Focus on health (sleep, exercise, nutrition)</li>
                            <li>Limit news/social media if it increases anxiety</li>
                            <li>Seek professional help if needed</li>
                        </ul>
                    `
                },
                {
                    id: 'financial-recovery',
                    title: 'Financial Recovery Plan',
                    content: `
                        <h2>Financial Recovery Plan</h2>
                        
                        <h3>Step 1: Assess the Damage</h3>
                        <ul>
                            <li>What's your current cash position?</li>
                            <li>What debts were accumulated?</li>
                            <li>What assets remain?</li>
                            <li>What's your income situation now?</li>
                        </ul>
                        
                        <h3>Step 2: Stabilize</h3>
                        <ul>
                            <li>Ensure income covers essential expenses</li>
                            <li>Stop any financial bleeding</li>
                            <li>Make minimum payments on all debts</li>
                            <li>Don't accumulate new debt</li>
                        </ul>
                        
                        <h3>Step 3: Rebuild (In This Order)</h3>
                        <ol>
                            <li><strong>Small emergency fund:</strong> $500-1,000</li>
                            <li><strong>Pay off high-interest debt:</strong> Credit cards first</li>
                            <li><strong>Full emergency fund:</strong> 3-6 months</li>
                            <li><strong>Resume retirement contributions</strong></li>
                            <li><strong>Other goals:</strong> Investing, major purchases</li>
                        </ol>
                        
                        <h3>Timeline Expectations</h3>
                        <ul>
                            <li>Recovery takes time—often 1-3 years for major setbacks</li>
                            <li>Progress won't be linear (expect setbacks)</li>
                            <li>Celebrate small wins along the way</li>
                            <li>Focus on trends, not daily fluctuations</li>
                        </ul>
                        
                        <div class="example">
                            <strong>Recovery Milestones:</strong>
                            <ul>
                                <li>Month 1: Stabilized, survival budget working</li>
                                <li>Month 3: Small emergency fund rebuilt</li>
                                <li>Month 6: Debt payoff started</li>
                                <li>Year 1: Major debt paid, emergency fund growing</li>
                                <li>Year 2: Back to pre-crisis financial health</li>
                            </ul>
                        </div>
                    `
                },
                {
                    id: 'building-resilience',
                    title: 'Building Long-Term Resilience',
                    content: `
                        <h2>Building Long-Term Resilience</h2>
                        
                        <h3>Financial Resilience Systems</h3>
                        <ul>
                            <li><strong>Automated savings:</strong> Emergency fund contributions on autopilot</li>
                            <li><strong>Multiple income streams:</strong> Never 100% dependent on one source</li>
                            <li><strong>Low fixed expenses:</strong> The lower your baseline, the more flexible you are</li>
                            <li><strong>Strong credit:</strong> Access to emergency credit if needed</li>
                            <li><strong>Insurance review:</strong> Adequate coverage for your situation</li>
                        </ul>
                        
                        <h3>Career Resilience Systems</h3>
                        <ul>
                            <li><strong>Continuous learning:</strong> Regular skill updates</li>
                            <li><strong>Network maintenance:</strong> Stay connected even when you don't need to</li>
                            <li><strong>Portfolio career:</strong> Multiple ways to earn</li>
                            <li><strong>Personal brand:</strong> Be known in your field</li>
                        </ul>
                        
                        <h3>Personal Resilience Systems</h3>
                        <ul>
                            <li><strong>Health investment:</strong> Prevention is cheaper than treatment</li>
                            <li><strong>Relationships:</strong> Strong support network</li>
                            <li><strong>Stress management:</strong> Regular practices (exercise, meditation, etc.)</li>
                            <li><strong>Adaptability:</strong> Embrace change as constant</li>
                        </ul>
                        
                        <h3>The Resilience Formula</h3>
                        <div class="highlight">
                            <strong>Resilience = Preparation + Flexibility + Recovery Capacity</strong>
                            <ul>
                                <li><strong>Preparation:</strong> Resources and plans in place</li>
                                <li><strong>Flexibility:</strong> Ability to adapt quickly</li>
                                <li><strong>Recovery:</strong> Systems to bounce back</li>
                            </ul>
                        </div>
                    `
                },
                {
                    id: 'lessons-learned',
                    title: 'Documenting Lessons Learned',
                    content: `
                        <h2>Documenting Lessons Learned</h2>
                        
                        <h3>Why Document?</h3>
                        <ul>
                            <li>You WILL face future challenges</li>
                            <li>Memory fades—lessons learned can be forgotten</li>
                            <li>Written plans are more effective</li>
                            <li>Helps others you care about</li>
                        </ul>
                        
                        <h3>Questions to Answer</h3>
                        <ul>
                            <li>What warning signs did I miss?</li>
                            <li>What preparation would have helped?</li>
                            <li>What did I do right?</li>
                            <li>What would I do differently?</li>
                            <li>What resources did I wish I had?</li>
                            <li>Who was most helpful?</li>
                            <li>What skills do I need to develop?</li>
                        </ul>
                        
                        <h3>Create Your Emergency Playbook</h3>
                        <p>Document for future you (or your family):</p>
                        <ul>
                            <li>Emergency contact list</li>
                            <li>Location of important documents</li>
                            <li>Account information and passwords</li>
                            <li>Insurance policy details</li>
                            <li>Steps to take in various emergencies</li>
                            <li>Lessons learned from this experience</li>
                        </ul>
                        
                        <div class="example">
                            <strong>Sample Lesson Entry:</strong><br>
                            <em>"During the 2024 layoff, I learned that I needed to have my resume ready BEFORE signs of trouble. I also learned that networking while employed is essential—starting from zero during job loss is much harder. Next time, I will update my resume quarterly and have at least two active professional relationships outside my company."</em>
                        </div>
                        
                        <h3>Share Your Wisdom</h3>
                        <ul>
                            <li>Help family members prepare</li>
                            <li>Mentor others going through similar situations</li>
                            <li>Your experience has value</li>
                        </ul>
                        
                        <div class="highlight">
                            <strong>Final Thought:</strong> Every crisis is a teacher. The tuition is high—don't waste the education. Use what you've learned to build a life that's more resilient than before.
                        </div>
                    `
                }
            ],
            quiz: {
                questions: [
                    {
                        question: 'What\'s the first step in financial recovery?',
                        options: [
                            'Invest aggressively to make up losses',
                            'Assess the damage and stabilize',
                            'Apply for new credit cards',
                            'Take a vacation to de-stress'
                        ],
                        correct: 1,
                        explanation: 'Before anything else, you need to assess your current situation and stabilize—ensure income covers essentials and stop accumulating new debt.'
                    },
                    {
                        question: 'What is the "Resilience Formula"?',
                        options: [
                            'Money + Insurance + Luck',
                            'Preparation + Flexibility + Recovery Capacity',
                            'Savings + Investment + Debt Payoff',
                            'Income + Expenses + Net Worth'
                        ],
                        correct: 1,
                        explanation: 'True resilience combines Preparation (resources and plans), Flexibility (ability to adapt), and Recovery Capacity (systems to bounce back).'
                    },
                    {
                        question: 'Why should you document lessons learned after a crisis?',
                        options: [
                            'For tax purposes',
                            'To share on social media',
                            'Because memory fades and you\'ll face future challenges',
                            'It\'s required by law'
                        ],
                        correct: 2,
                        explanation: 'Memory fades over time, and you will face future challenges. Documenting lessons ensures you don\'t repeat mistakes and can reference what worked.'
                    }
                ]
            }
        }
    ]
};
