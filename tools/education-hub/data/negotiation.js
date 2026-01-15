// Negotiation Skills Curriculum Data
const negotiationData = {
    id: 'negotiation',
    title: 'Negotiation Skills',
    icon: '🤝',
    description: 'Learn to negotiate salary, contracts, and everyday situations confidently.',
    graduationGoal: 'Confidently negotiate in any situation',
    levels: [
        {
            id: 1,
            title: 'Negotiation Psychology',
            subtitle: 'Understanding how negotiation works',
            topics: [
                {
                    id: 'negotiation-mindset',
                    title: 'The Negotiation Mindset',
                    content: `
                        <h2>The Negotiation Mindset</h2>
                        <h3>Why Negotiation Matters</h3>
                        <ul>
                            <li>A 10% raise at 25 = $1M+ lifetime earnings</li>
                            <li>Negotiating a car price saves $2,000+ instantly</li>
                            <li>Better contracts mean less stress</li>
                            <li>Most things ARE negotiable</li>
                        </ul>
                        <h3>Mindset Shifts</h3>
                        <ul>
                            <li><strong>It's not confrontational:</strong> It's collaborative problem-solving</li>
                            <li><strong>They expect it:</strong> Employers budget for negotiation</li>
                            <li><strong>No doesn't mean failure:</strong> You learn for next time</li>
                            <li><strong>You're not being greedy:</strong> You're advocating for fair value</li>
                        </ul>
                        <div class="highlight">
                            <strong>Key Insight:</strong> The person who's comfortable with silence and walking away has the power. Desperation is visible and costly.
                        </div>
                    `
                },
                {
                    id: 'batna',
                    title: 'BATNA: Your Source of Power',
                    content: `
                        <h2>BATNA: Your Source of Power</h2>
                        <div class="definition">
                            <strong>BATNA:</strong> Best Alternative To a Negotiated Agreement. Your backup option if this deal falls through.
                        </div>
                        <h3>Why BATNA Matters</h3>
                        <ul>
                            <li>Gives you confidence to walk away</li>
                            <li>Sets your minimum acceptable outcome</li>
                            <li>Reduces desperation (which weakens you)</li>
                        </ul>
                        <h3>Examples</h3>
                        <div class="example">
                            <strong>Salary negotiation:</strong> Your BATNA is your current job or other offers<br>
                            <strong>Car buying:</strong> Other dealers with similar cars<br>
                            <strong>Vendor contract:</strong> Alternative vendors
                        </div>
                        <h3>Strengthening Your BATNA</h3>
                        <ul>
                            <li>Get multiple job offers before negotiating</li>
                            <li>Research alternatives before any negotiation</li>
                            <li>Be willing to actually walk away</li>
                        </ul>
                        <div class="highlight">
                            <strong>Golden Rule:</strong> Never enter a negotiation without knowing your BATNA. It's your power source.
                        </div>
                    `
                },
                {
                    id: 'anchoring',
                    title: 'The Power of Anchoring',
                    content: `
                        <h2>The Power of Anchoring</h2>
                        <div class="definition">
                            <strong>Anchoring:</strong> The first number mentioned heavily influences the final outcome. People adjust from the anchor.
                        </div>
                        <h3>How It Works</h3>
                        <div class="example">
                            House listed at $400,000 → You think in terms of $400k<br>
                            House listed at $450,000 → You think in terms of $450k<br>
                            Same house. The anchor changed your perception.
                        </div>
                        <h3>Using Anchoring</h3>
                        <ul>
                            <li>Make the first offer when you have good information</li>
                            <li>Anchor HIGH (but justifiable) when selling</li>
                            <li>Anchor LOW (but justifiable) when buying</li>
                            <li>Always have a reason for your number</li>
                        </ul>
                        <h3>Defending Against Anchoring</h3>
                        <ul>
                            <li>Do your research before they anchor</li>
                            <li>Ignore unreasonable anchors entirely</li>
                            <li>Re-anchor with your own number</li>
                            <li>Say "Based on my research, the market rate is..."</li>
                        </ul>
                    `
                }
            ],
            quiz: [
                {
                    question: 'What is BATNA?',
                    options: [
                        'A negotiation technique',
                        'Your Best Alternative To a Negotiated Agreement',
                        'A type of contract',
                        'The final offer'
                    ],
                    correct: 1,
                    explanation: 'BATNA is your backup option—what you\'ll do if this negotiation fails. Having a strong BATNA gives you confidence and power.'
                },
                {
                    question: 'What is anchoring in negotiation?',
                    options: [
                        'Staying firm on your position',
                        'The first number mentioned influences the final outcome',
                        'Keeping notes during negotiation',
                        'Meeting in a fixed location'
                    ],
                    correct: 1,
                    explanation: 'Anchoring is a psychological phenomenon where the first number mentioned sets the baseline for all subsequent discussion.'
                },
                {
                    question: 'What\'s the best mindset for negotiation?',
                    options: [
                        'Win at all costs',
                        'Avoid conflict completely',
                        'Collaborative problem-solving for mutual benefit',
                        'Accept whatever is offered'
                    ],
                    correct: 2,
                    explanation: 'Effective negotiation is collaborative—finding solutions that work for both parties. This leads to better outcomes and preserved relationships.'
                }
            ]
        },
        {
            id: 2,
            title: 'Salary Negotiation',
            subtitle: 'Getting paid what you\'re worth',
            topics: [
                {
                    id: 'salary-research',
                    title: 'Researching Your Market Value',
                    content: `
                        <h2>Researching Your Market Value</h2>
                        <h3>Data Sources</h3>
                        <ul>
                            <li><strong>Glassdoor:</strong> Company-specific salaries</li>
                            <li><strong>LinkedIn Salary:</strong> Role-based data</li>
                            <li><strong>Levels.fyi:</strong> Tech industry specifics</li>
                            <li><strong>Payscale:</strong> Comprehensive salary data</li>
                            <li><strong>Bureau of Labor Statistics:</strong> Official data</li>
                        </ul>
                        <h3>What to Research</h3>
                        <ul>
                            <li>Role + Location + Experience level</li>
                            <li>Company size and industry</li>
                            <li>Total compensation (not just base salary)</li>
                            <li>Range, not just average</li>
                        </ul>
                        <h3>Talk to Real People</h3>
                        <ul>
                            <li>Recruiters (they know market rates)</li>
                            <li>People in similar roles (LinkedIn connections)</li>
                            <li>Industry communities</li>
                        </ul>
                        <div class="highlight">
                            <strong>Know Your Number:</strong> Before any salary conversation, know the market range. Aim for 75th percentile or higher based on your qualifications.
                        </div>
                    `
                },
                {
                    id: 'salary-scripts',
                    title: 'Salary Negotiation Scripts',
                    content: `
                        <h2>Salary Negotiation Scripts</h2>
                        <h3>When They Ask Your Current Salary</h3>
                        <div class="example">
                            "I'd prefer to focus on the value I can bring to this role and what's fair for the market. What's the range you've budgeted for this position?"
                        </div>
                        <h3>Receiving an Offer</h3>
                        <div class="example">
                            "Thank you for the offer! I'm excited about this opportunity. I'd like to take a day or two to review the full package. When do you need my decision?"
                        </div>
                        <h3>Counter-Offer</h3>
                        <div class="example">
                            "Based on my research and the value I'll bring with [specific skills/experience], I was hoping for something closer to [your number]. Is there flexibility here?"
                        </div>
                        <h3>If They Say No</h3>
                        <div class="example">
                            "I understand the budget constraints. Are there other parts of the package we could discuss, such as signing bonus, extra PTO, or an early review for a raise?"
                        </div>
                        <div class="highlight">
                            <strong>Never Accept Immediately:</strong> Always take time to think. Even if it's a great offer, sleeping on it gives you leverage and prevents regret.
                        </div>
                    `
                },
                {
                    id: 'total-compensation',
                    title: 'Negotiating Total Compensation',
                    content: `
                        <h2>Negotiating Total Compensation</h2>
                        <h3>Beyond Base Salary</h3>
                        <ul>
                            <li><strong>Signing bonus:</strong> Often easier to negotiate than salary</li>
                            <li><strong>Equity/Stock:</strong> Can be significant at startups/tech</li>
                            <li><strong>Annual bonus:</strong> Target percentage</li>
                            <li><strong>PTO:</strong> Extra vacation days</li>
                            <li><strong>Remote work:</strong> Flexibility</li>
                            <li><strong>Professional development:</strong> Conference budget, courses</li>
                            <li><strong>Title:</strong> Better title = future leverage</li>
                            <li><strong>Start date:</strong> Negotiate time off before starting</li>
                            <li><strong>Review timing:</strong> 6-month review for raise</li>
                        </ul>
                        <h3>Strategy When Salary Is Fixed</h3>
                        <p>If they truly can't move on base salary:</p>
                        <ol>
                            <li>Ask for signing bonus</li>
                            <li>Request early performance review (6 months)</li>
                            <li>Negotiate other benefits</li>
                            <li>Get promises in writing</li>
                        </ol>
                        <div class="highlight">
                            <strong>Everything Is Negotiable:</strong> Even if they say salary is fixed, other components often have flexibility.
                        </div>
                    `
                }
            ],
            quiz: [
                {
                    question: 'How should you respond when asked about your current salary?',
                    options: [
                        'Tell them immediately',
                        'Deflect and focus on the value you bring and market rates',
                        'Lie about it',
                        'Say you don\'t know'
                    ],
                    correct: 1,
                    explanation: 'Deflecting to your value and market rates prevents anchoring to your current (potentially low) salary. Many states have even banned salary history questions.'
                },
                {
                    question: 'What should you do immediately after receiving a job offer?',
                    options: [
                        'Accept it to show enthusiasm',
                        'Reject it to show you have options',
                        'Ask for time to review the full package',
                        'Start negotiating immediately'
                    ],
                    correct: 2,
                    explanation: 'Always ask for time to review. This is expected, professional, and gives you leverage. Never accept on the spot even if you plan to say yes.'
                },
                {
                    question: 'If base salary is truly fixed, what should you negotiate?',
                    options: [
                        'Nothing - accept or decline',
                        'Signing bonus, PTO, review timing, equity, remote flexibility',
                        'Just the title',
                        'Ask them to fire the other candidate'
                    ],
                    correct: 1,
                    explanation: 'When salary is fixed, many other elements are negotiable: signing bonus, extra PTO, earlier review for raise, equity, flexibility, professional development budget, etc.'
                }
            ]
        },
        {
            id: 3,
            title: 'Business Negotiations',
            subtitle: 'Contracts, vendors, and partnerships',
            topics: [
                {
                    id: 'contract-negotiation',
                    title: 'Contract Negotiation Basics',
                    content: `
                        <h2>Contract Negotiation Basics</h2>
                        <h3>What's Typically Negotiable</h3>
                        <ul>
                            <li>Payment terms (net 15 vs net 30)</li>
                            <li>Scope of work</li>
                            <li>Liability caps</li>
                            <li>Intellectual property rights</li>
                            <li>Exclusivity clauses</li>
                            <li>Termination terms</li>
                            <li>Non-compete clauses</li>
                        </ul>
                        <h3>Red Flags in Contracts</h3>
                        <ul>
                            <li>Unlimited liability</li>
                            <li>Automatic renewals</li>
                            <li>Broad non-compete clauses</li>
                            <li>IP ownership you didn't intend to give</li>
                            <li>One-sided termination rights</li>
                        </ul>
                        <h3>Negotiation Approach</h3>
                        <ol>
                            <li>Read everything before signing</li>
                            <li>Mark items you want to discuss</li>
                            <li>Propose specific alternative language</li>
                            <li>Explain your reasoning</li>
                            <li>Be willing to compromise on minor points</li>
                        </ol>
                        <div class="highlight">
                            <strong>Rule:</strong> The bigger the contract, the more time to review. Get a lawyer for anything over $10,000 or with long-term implications.
                        </div>
                    `
                },
                {
                    id: 'vendor-negotiation',
                    title: 'Negotiating with Vendors',
                    content: `
                        <h2>Negotiating with Vendors</h2>
                        <h3>Leverage Points</h3>
                        <ul>
                            <li><strong>Volume:</strong> More business = better pricing</li>
                            <li><strong>Long-term commitment:</strong> Trade years for discounts</li>
                            <li><strong>Payment terms:</strong> Pay faster for discounts</li>
                            <li><strong>Competition:</strong> Other vendors want your business</li>
                            <li><strong>Timing:</strong> End of quarter/year = hungry salespeople</li>
                        </ul>
                        <h3>Questions to Ask</h3>
                        <ul>
                            <li>"Is this your best price?"</li>
                            <li>"What would it take to get 20% off?"</li>
                            <li>"Can you match [competitor's] offer?"</li>
                            <li>"What if we committed to a longer term?"</li>
                            <li>"What about annual vs monthly pricing?"</li>
                        </ul>
                        <h3>B2B SaaS Negotiation</h3>
                        <div class="example">
                            <strong>Typical discounts available:</strong><br>
                            Annual prepay: 15-20% off<br>
                            Multi-year: 20-40% off<br>
                            End of quarter: 10-30% off<br>
                            Non-profit/startup: 20-50% off
                        </div>
                    `
                }
            ],
            quiz: [
                {
                    question: 'What is a red flag in a contract?',
                    options: [
                        'Clear payment terms',
                        'Unlimited liability clause',
                        'Defined scope of work',
                        'Mutual termination rights'
                    ],
                    correct: 1,
                    explanation: 'Unlimited liability means you could be on the hook for any amount of damages. Always negotiate a liability cap proportional to the contract value.'
                },
                {
                    question: 'When is the best time to negotiate with vendors?',
                    options: [
                        'Beginning of the year',
                        'End of quarter or fiscal year when they need to hit quotas',
                        'During their busiest season',
                        'Right after they raise prices'
                    ],
                    correct: 1,
                    explanation: 'Salespeople have quotas. At end of quarter/year, they\'re often willing to offer bigger discounts to close deals and hit their numbers.'
                }
            ]
        },
        {
            id: 4,
            title: 'Everyday Negotiations',
            subtitle: 'Bills, fees, and daily life',
            topics: [
                {
                    id: 'bills-fees',
                    title: 'Negotiating Bills and Fees',
                    content: `
                        <h2>Negotiating Bills and Fees</h2>
                        <h3>What You Can Negotiate</h3>
                        <ul>
                            <li>Cable/Internet bills</li>
                            <li>Cell phone plans</li>
                            <li>Credit card interest rates</li>
                            <li>Bank fees</li>
                            <li>Medical bills</li>
                            <li>Insurance premiums</li>
                            <li>Gym memberships</li>
                            <li>Rent</li>
                        </ul>
                        <h3>Scripts That Work</h3>
                        <h4>For Cable/Phone:</h4>
                        <div class="example">
                            "Hi, I'm considering switching to [competitor]. What can you offer to keep my business?"
                        </div>
                        <h4>For Bank Fees:</h4>
                        <div class="example">
                            "I noticed a [fee] on my account. I've been a customer for [X years]. Could you please waive this as a courtesy?"
                        </div>
                        <h4>For Medical Bills:</h4>
                        <div class="example">
                            "I'm prepared to pay today. What discount can you offer for immediate payment? Also, do you have a financial hardship program?"
                        </div>
                        <div class="highlight">
                            <strong>Success Rate:</strong> Studies show simply asking gets results 70%+ of the time. Most people never ask.
                        </div>
                    `
                },
                {
                    id: 'major-purchases',
                    title: 'Negotiating Major Purchases',
                    content: `
                        <h2>Negotiating Major Purchases</h2>
                        <h3>Car Buying Strategy</h3>
                        <ol>
                            <li>Research invoice price (Edmunds, TrueCar)</li>
                            <li>Get quotes from multiple dealers (email)</li>
                            <li>Negotiate price BEFORE discussing trade-in</li>
                            <li>Shop for financing separately</li>
                            <li>Be ready to walk away</li>
                        </ol>
                        <div class="example">
                            <strong>Target:</strong> 3-5% above invoice price<br>
                            <strong>Never start from:</strong> MSRP (sticker price)
                        </div>
                        <h3>Furniture and Appliances</h3>
                        <ul>
                            <li>Floor models: 20-40% off</li>
                            <li>End of season: 30%+ off</li>
                            <li>Package deals: Bigger discounts</li>
                            <li>Delivery/installation: Often waived</li>
                        </ul>
                        <h3>The Magic Question</h3>
                        <div class="example">
                            "Is this the best you can do?"<br>
                            Then: Wait silently.
                        </div>
                        <div class="highlight">
                            <strong>Key Principle:</strong> The more prepared you are with research, the more power you have.
                        </div>
                    `
                }
            ],
            quiz: [
                {
                    question: 'What percentage of the time does simply asking for a discount work?',
                    options: ['10-20%', '30-40%', '50-60%', '70%+'],
                    correct: 3,
                    explanation: 'Studies show that simply asking gets positive results over 70% of the time. Most people never ask, leaving money on the table.'
                },
                {
                    question: 'When buying a car, when should you discuss your trade-in?',
                    options: [
                        'First, to establish your budget',
                        'Only after negotiating the purchase price',
                        'At the same time as the new car price',
                        'Never - sell it privately instead'
                    ],
                    correct: 1,
                    explanation: 'Negotiate the new car price first. Dealers often manipulate trade-in values to make you think you\'re getting a better deal than you are.'
                }
            ]
        },
        {
            id: 5,
            title: 'Advanced Tactics',
            subtitle: 'Master-level negotiation techniques',
            topics: [
                {
                    id: 'silence',
                    title: 'The Power of Silence',
                    content: `
                        <h2>The Power of Silence</h2>
                        <h3>Why Silence Works</h3>
                        <ul>
                            <li>Most people are uncomfortable with silence</li>
                            <li>They fill it by conceding or offering more</li>
                            <li>It signals confidence</li>
                            <li>Gives you time to think</li>
                        </ul>
                        <h3>When to Use Silence</h3>
                        <ul>
                            <li>After stating your position</li>
                            <li>After receiving an offer</li>
                            <li>After asking a question</li>
                            <li>When they make a lowball offer</li>
                        </ul>
                        <h3>How to Practice</h3>
                        <ol>
                            <li>State your position</li>
                            <li>Close your mouth</li>
                            <li>Count to 10 internally</li>
                            <li>Maintain comfortable eye contact</li>
                            <li>Let them speak first</li>
                        </ol>
                        <div class="highlight">
                            <strong>The Rule:</strong> After making an offer, the first person to speak loses leverage. Master the pause.
                        </div>
                    `
                },
                {
                    id: 'walking-away',
                    title: 'The Walk-Away',
                    content: `
                        <h2>The Walk-Away</h2>
                        <h3>When to Walk Away</h3>
                        <ul>
                            <li>When the deal is below your BATNA</li>
                            <li>When you've hit a genuine impasse</li>
                            <li>When the other party is negotiating in bad faith</li>
                            <li>When you need time to think</li>
                        </ul>
                        <h3>How to Walk Away Gracefully</h3>
                        <div class="example">
                            "I appreciate your time, but we're too far apart on this. If anything changes on your end, please reach out."
                        </div>
                        <h3>The Psychology</h3>
                        <ul>
                            <li>Shows you have alternatives</li>
                            <li>Creates urgency and scarcity</li>
                            <li>Often results in them coming back with better offer</li>
                            <li>Proves you're not desperate</li>
                        </ul>
                        <h3>Be Prepared for Either Outcome</h3>
                        <ul>
                            <li>They may let you walk (that's okay)</li>
                            <li>They may call you back</li>
                            <li>You may need to re-engage later</li>
                        </ul>
                        <div class="highlight">
                            <strong>Key:</strong> Never threaten to walk away unless you're actually willing to do it. Empty threats destroy credibility.
                        </div>
                    `
                },
                {
                    id: 'win-win',
                    title: 'Creating Win-Win Outcomes',
                    content: `
                        <h2>Creating Win-Win Outcomes</h2>
                        <h3>Expanding the Pie</h3>
                        <p>Instead of fighting over a fixed amount, find ways to create more value:</p>
                        <ul>
                            <li>What do they value that's easy for you to give?</li>
                            <li>What do you value that's easy for them to give?</li>
                            <li>Are there creative solutions neither has considered?</li>
                        </ul>
                        <h3>Example</h3>
                        <div class="example">
                            <strong>Scenario:</strong> You want higher salary, they have budget constraints<br>
                            <strong>Win-Win:</strong> Lower salary + equity + remote work + extra PTO<br>
                            Both get what matters most to them
                        </div>
                        <h3>Questions to Find Win-Win</h3>
                        <ul>
                            <li>"What's most important to you in this deal?"</li>
                            <li>"Is there flexibility on the timing?"</li>
                            <li>"What if we structured it differently?"</li>
                            <li>"What would make this a home run for you?"</li>
                        </ul>
                        <div class="highlight">
                            <strong>The Best Negotiations:</strong> Both parties feel they got a good deal. This builds relationships and leads to future opportunities.
                        </div>
                    `
                }
            ],
            quiz: [
                {
                    question: 'What should you do after making an offer?',
                    options: [
                        'Immediately explain why it\'s fair',
                        'Lower it if they look surprised',
                        'Stay silent and wait for their response',
                        'Ask if they need time to think'
                    ],
                    correct: 2,
                    explanation: 'After making an offer, stay silent. The first person to speak often loses leverage. Let them respond and fill the silence.'
                },
                {
                    question: 'When should you walk away from a negotiation?',
                    options: [
                        'As a bluff to get a better offer',
                        'When the deal is below your BATNA and you\'re genuinely willing to leave',
                        'At the beginning to show strength',
                        'Only if they insult you'
                    ],
                    correct: 1,
                    explanation: 'Only walk away when you\'re truly willing to do so. The deal must be below your BATNA. Empty walk-away threats destroy your credibility.'
                },
                {
                    question: 'What is "expanding the pie" in negotiation?',
                    options: [
                        'Asking for a bigger budget',
                        'Finding creative solutions that create more value for both parties',
                        'Bringing more people to the negotiation',
                        'Extending the negotiation timeline'
                    ],
                    correct: 1,
                    explanation: 'Expanding the pie means finding creative solutions where both parties can get more of what they value, rather than fighting over a fixed amount.'
                }
            ]
        }
    ]
};
