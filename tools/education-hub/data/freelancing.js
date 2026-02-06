// Freelancing & Side Hustles Curriculum Data
const freelancingData = {
    id: 'freelancing',
    title: 'Freelancing & Side Hustles',
    icon: '💼',
    description: 'Start earning extra income with your skills while keeping your day job.',
    graduationGoal: 'Earning consistent side income from your skills',
    difficulty: 'beginner',
    prerequisites: [],
    learningObjectives: [
        'Identify marketable skills and find freelance opportunities',
        'Set your rates and negotiate contracts',
        'Manage freelance finances and taxes',
        'Build a client base and maintain relationships',
        'Scale from side hustle to full-time business'
    ],
    relatedTracks: ['business', 'negotiation', 'taxes', 'career'],
    resources: [
        { title: 'Upwork - Freelancer Resources', url: 'https://www.upwork.com/resources' },
        { title: 'Freelancers Union', url: 'https://www.freelancersunion.org/' }
    ],
    levels: [
        {
            id: 1,
            title: 'Finding Your Hustle',
            subtitle: 'Identifying marketable skills',
            topics: [
                {
                    id: 'skills-inventory',
                    title: 'Taking a Skills Inventory',
                    content: `
                        <h2>Taking a Skills Inventory</h2>
                        <h3>What Can You Offer?</h3>
                        <p>Think about:</p>
                        <ul>
                            <li><strong>Job skills:</strong> What do you do at work?</li>
                            <li><strong>Hobbies:</strong> What do friends ask you for help with?</li>
                            <li><strong>Past experience:</strong> All jobs, volunteer work, projects</li>
                            <li><strong>Natural abilities:</strong> What comes easy to you?</li>
                        </ul>
                        <h3>High-Demand Freelance Skills</h3>
                        <ul>
                            <li>Writing/Copywriting</li>
                            <li>Graphic Design</li>
                            <li>Web Development</li>
                            <li>Video Editing</li>
                            <li>Social Media Management</li>
                            <li>Bookkeeping</li>
                            <li>Virtual Assistance</li>
                            <li>Photography</li>
                            <li>Consulting (any expertise)</li>
                        </ul>
                        <div class="highlight">
                            <strong>Key Insight:</strong> You don't need to be an expert—just better than your client at that specific task. Many businesses need "good enough" help.
                        </div>
                    `
                },
                {
                    id: 'choosing-hustle',
                    title: 'Choosing Your Side Hustle',
                    content: `
                        <h2>Choosing Your Side Hustle</h2>
                        <h3>The Sweet Spot</h3>
                        <p>Your ideal hustle is where these overlap:</p>
                        <ul>
                            <li>What you're good at</li>
                            <li>What people will pay for</li>
                            <li>What you enjoy (or at least tolerate)</li>
                        </ul>
                        <h3>Types of Side Hustles</h3>
                        <ul>
                            <li><strong>Service-based:</strong> Trading time for money (consulting, design)</li>
                            <li><strong>Product-based:</strong> Selling things (Etsy, e-commerce)</li>
                            <li><strong>Content-based:</strong> Audience building (YouTube, courses)</li>
                            <li><strong>Gig economy:</strong> Platforms (Uber, DoorDash, TaskRabbit)</li>
                        </ul>
                        <h3>Which to Choose?</h3>
                        <div class="example">
                            <strong>Need money fast?</strong> → Service-based or gig economy<br>
                            <strong>Have patience for growth?</strong> → Content/products<br>
                            <strong>Want highest income potential?</strong> → Services (then productize)
                        </div>
                        <div class="highlight">
                            <strong>Start Simple:</strong> Pick ONE thing and get your first paying client. Don't overthink it. You can always pivot later.
                        </div>
                    `
                }
            ],
            quiz: [
                {
                    question: 'What makes a good freelance skill?',
                    options: [
                        'Something no one else can do',
                        'Something you\'re slightly better at than potential clients need',
                        'Only technical skills',
                        'Skills that take 10+ years to learn'
                    ],
                    correct: 1,
                    explanation: 'You don\'t need to be the world\'s best—just better than your client at that specific task. Many businesses need "good enough" help.'
                },
                {
                    question: 'Which type of side hustle typically generates income fastest?',
                    options: ['Building a YouTube channel', 'Service-based freelancing', 'Writing a book', 'Creating an app'],
                    correct: 1,
                    explanation: 'Service-based freelancing (trading your skills for money) typically generates income fastest because you can start earning with your first client.'
                }
            ]
        },
        {
            id: 2,
            title: 'Getting Started',
            subtitle: 'Setting up and finding clients',
            topics: [
                {
                    id: 'platforms',
                    title: 'Freelance Platforms',
                    content: `
                        <h2>Freelance Platforms</h2>
                        <h3>General Marketplaces</h3>
                        <ul>
                            <li><strong>Upwork:</strong> Largest, most categories, competitive</li>
                            <li><strong>Fiverr:</strong> Good for productized services</li>
                            <li><strong>Freelancer.com:</strong> Similar to Upwork</li>
                        </ul>
                        <h3>Specialized Platforms</h3>
                        <ul>
                            <li><strong>Toptal:</strong> Elite developers/designers (hard to get in)</li>
                            <li><strong>99designs:</strong> Graphic design</li>
                            <li><strong>Contently:</strong> Writing</li>
                            <li><strong>Clarity.fm:</strong> Consulting calls</li>
                        </ul>
                        <h3>Non-Platform Options</h3>
                        <ul>
                            <li>Direct outreach to businesses</li>
                            <li>LinkedIn networking</li>
                            <li>Referrals from network</li>
                            <li>Local businesses (your neighborhood)</li>
                        </ul>
                        <div class="highlight">
                            <strong>Strategy:</strong> Start on platforms to build experience and testimonials. Then transition to direct clients who pay more.
                        </div>
                    `
                },
                {
                    id: 'profile-portfolio',
                    title: 'Creating Your Profile and Portfolio',
                    content: `
                        <h2>Creating Your Profile and Portfolio</h2>
                        <h3>Profile Essentials</h3>
                        <ul>
                            <li>Professional photo</li>
                            <li>Clear headline (what you do + who you help)</li>
                            <li>Results-focused description</li>
                            <li>Relevant skills/keywords</li>
                            <li>Portfolio samples</li>
                        </ul>
                        <h3>No Experience? Create Samples</h3>
                        <ul>
                            <li>Do mock projects for fake companies</li>
                            <li>Redesign existing websites/materials</li>
                            <li>Offer free/discounted work to 2-3 people</li>
                            <li>Document personal projects</li>
                        </ul>
                        <h3>Headline Formula</h3>
                        <div class="example">
                            "I help [target client] achieve [result] through [your skill]"<br><br>
                            Example: "I help small businesses get more customers through SEO-optimized content"
                        </div>
                        <div class="highlight">
                            <strong>Focus on Results:</strong> Clients don't buy your skills—they buy outcomes. Always talk about what they GET, not what you DO.
                        </div>
                    `
                }
            ],
            quiz: [
                {
                    question: 'What should be the focus of your freelance profile?',
                    options: [
                        'Your education and certifications',
                        'The results and outcomes clients will get',
                        'How many years of experience you have',
                        'Your personal story'
                    ],
                    correct: 1,
                    explanation: 'Clients care about results, not credentials. Focus your profile on the outcomes you deliver and the problems you solve.'
                },
                {
                    question: 'How can you build a portfolio with no client experience?',
                    options: [
                        'You can\'t - you need clients first',
                        'Create mock projects, redesign existing work, or offer free samples',
                        'Buy portfolio samples',
                        'Copy others\' work'
                    ],
                    correct: 1,
                    explanation: 'You can create portfolio pieces without clients by doing mock projects, redesigning existing materials, or offering a few free samples to build testimonials.'
                }
            ]
        },
        {
            id: 3,
            title: 'Pricing and Proposals',
            subtitle: 'How to price your services and win clients',
            topics: [
                {
                    id: 'pricing-strategies',
                    title: 'Pricing Your Services',
                    content: `
                        <h2>Pricing Your Services</h2>
                        <h3>Pricing Models</h3>
                        <ul>
                            <li><strong>Hourly:</strong> Simple, but caps your income</li>
                            <li><strong>Project-based:</strong> Fixed price for defined scope</li>
                            <li><strong>Value-based:</strong> Based on value to client (advanced)</li>
                            <li><strong>Retainer:</strong> Monthly fee for ongoing work</li>
                        </ul>
                        <h3>How to Set Your Rate</h3>
                        <ol>
                            <li>Research market rates (Glassdoor, Upwork profiles)</li>
                            <li>Consider your experience level</li>
                            <li>Calculate your minimum (expenses + profit goal)</li>
                            <li>Start competitive, raise as you get testimonials</li>
                        </ol>
                        <h3>Typical Starting Rates (US)</h3>
                        <div class="example">
                            Writing: $25-75/hour or $0.10-0.50/word<br>
                            Design: $35-100/hour<br>
                            Development: $50-150/hour<br>
                            VA work: $15-40/hour<br>
                            Consulting: $100-300/hour
                        </div>
                        <div class="highlight">
                            <strong>Key Rule:</strong> Price based on value, not time. A logo that takes 2 hours but transforms a brand is worth more than $200.
                        </div>
                    `
                },
                {
                    id: 'winning-proposals',
                    title: 'Writing Winning Proposals',
                    content: `
                        <h2>Writing Winning Proposals</h2>
                        <h3>Proposal Structure</h3>
                        <ol>
                            <li><strong>Hook:</strong> Show you understand their problem</li>
                            <li><strong>Solution:</strong> How you'll solve it specifically</li>
                            <li><strong>Proof:</strong> Relevant experience/samples</li>
                            <li><strong>Process:</strong> How you work</li>
                            <li><strong>Price:</strong> Clear pricing and timeline</li>
                            <li><strong>CTA:</strong> Next step (call, questions, etc.)</li>
                        </ol>
                        <h3>What Clients Want to See</h3>
                        <ul>
                            <li>That you read their job posting carefully</li>
                            <li>Specific, not generic responses</li>
                            <li>Relevant samples</li>
                            <li>Clear communication skills</li>
                            <li>Confidence without arrogance</li>
                        </ul>
                        <h3>Common Mistakes</h3>
                        <ul>
                            <li>Copy-paste generic proposals</li>
                            <li>Focusing on yourself, not the client</li>
                            <li>Being too cheap (signals low quality)</li>
                            <li>Not including a clear next step</li>
                        </ul>
                        <div class="highlight">
                            <strong>Quality Over Quantity:</strong> 5 great, personalized proposals beat 50 generic ones. Take time to stand out.
                        </div>
                    `
                }
            ],
            quiz: [
                {
                    question: 'Which pricing model has the highest income potential?',
                    options: ['Hourly', 'Project-based', 'Value-based', 'Per-word'],
                    correct: 2,
                    explanation: 'Value-based pricing (charging based on the value you create for the client) has the highest potential because it\'s not tied to time spent.'
                },
                {
                    question: 'What\'s the most important element of a proposal?',
                    options: [
                        'Being the cheapest option',
                        'Showing you understand the client\'s specific problem',
                        'Having the most experience',
                        'A long list of services'
                    ],
                    correct: 1,
                    explanation: 'Clients want to know you understand THEIR specific problem. A personalized proposal that addresses their needs beats generic experience every time.'
                }
            ]
        },
        {
            id: 4,
            title: 'Client Management',
            subtitle: 'Delivering great work and avoiding problems',
            topics: [
                {
                    id: 'client-communication',
                    title: 'Managing Client Relationships',
                    content: `
                        <h2>Managing Client Relationships</h2>
                        <h3>Communication Best Practices</h3>
                        <ul>
                            <li>Set expectations upfront (timeline, process, communication)</li>
                            <li>Respond within 24 hours (even if just acknowledging)</li>
                            <li>Give regular updates without being asked</li>
                            <li>Over-communicate on timeline changes</li>
                            <li>Put everything important in writing</li>
                        </ul>
                        <h3>Setting Boundaries</h3>
                        <ul>
                            <li>Define working hours</li>
                            <li>Specify revision limits in contracts</li>
                            <li>Charge for scope creep</li>
                            <li>Have a process for urgent requests</li>
                        </ul>
                        <h3>Contracts Are Essential</h3>
                        <p>Every project needs a written agreement covering:</p>
                        <ul>
                            <li>Scope of work (what's included/excluded)</li>
                            <li>Timeline and milestones</li>
                            <li>Payment terms and schedule</li>
                            <li>Revision policy</li>
                            <li>Cancellation terms</li>
                        </ul>
                        <div class="highlight">
                            <strong>Golden Rule:</strong> Under-promise and over-deliver. It's better to finish early than to miss a deadline.
                        </div>
                    `
                },
                {
                    id: 'scope-creep',
                    title: 'Handling Scope Creep',
                    content: `
                        <h2>Handling Scope Creep</h2>
                        <div class="definition">
                            <strong>Scope Creep:</strong> When a project expands beyond the original agreement without additional compensation.
                        </div>
                        <h3>Prevention</h3>
                        <ul>
                            <li>Be VERY specific in your proposal</li>
                            <li>List what's included AND excluded</li>
                            <li>Define "rounds of revisions"</li>
                            <li>Get sign-off on the scope before starting</li>
                        </ul>
                        <h3>When It Happens</h3>
                        <p>Use this script:</p>
                        <div class="example">
                            "I'd be happy to add [request]! That's outside our original scope, so let me put together a quick quote for the additional work. Would you like me to do that?"
                        </div>
                        <h3>Red Flags to Watch For</h3>
                        <ul>
                            <li>"Can you just quickly..."</li>
                            <li>"While you're at it..."</li>
                            <li>"I thought this was included..."</li>
                            <li>Endless revision requests</li>
                        </ul>
                        <div class="highlight">
                            <strong>Remember:</strong> Your time is your inventory. Giving it away for free devalues your work and enables bad behavior.
                        </div>
                    `
                }
            ],
            quiz: [
                {
                    question: 'What is scope creep?',
                    options: [
                        'A type of bug in software',
                        'When a project expands beyond the original agreement without extra pay',
                        'When clients pay late',
                        'When you work too slowly'
                    ],
                    correct: 1,
                    explanation: 'Scope creep is when clients keep adding requests beyond the original project agreement. It\'s a major income killer if not managed.'
                },
                {
                    question: 'How should you respond to "Can you just quickly add..."?',
                    options: [
                        'Say no immediately',
                        'Always say yes to keep them happy',
                        'Acknowledge and offer to quote the additional work',
                        'Ignore the request'
                    ],
                    correct: 2,
                    explanation: 'The professional response is to acknowledge the request and offer to quote it as additional work. This sets boundaries while remaining helpful.'
                }
            ]
        },
        {
            id: 5,
            title: 'Scaling Up',
            subtitle: 'Growing your freelance business',
            topics: [
                {
                    id: 'raising-rates',
                    title: 'When and How to Raise Rates',
                    content: `
                        <h2>When and How to Raise Rates</h2>
                        <h3>Signs You Should Raise Rates</h3>
                        <ul>
                            <li>You're fully booked</li>
                            <li>Clients say yes immediately (too cheap)</li>
                            <li>You've gained significant experience</li>
                            <li>You have strong testimonials</li>
                            <li>You're turning down work</li>
                        </ul>
                        <h3>How to Raise Rates</h3>
                        <ul>
                            <li><strong>New clients:</strong> Quote new, higher rate</li>
                            <li><strong>Existing clients:</strong> Give 30-60 days notice</li>
                            <li>Raise 15-25% at a time</li>
                            <li>Add value when you raise (new deliverables, faster turnaround)</li>
                        </ul>
                        <h3>Script for Existing Clients</h3>
                        <div class="example">
                            "Starting [date], my rates will be increasing to [new rate]. I've loved working with you and want to continue our partnership. Let me know if you have any questions."
                        </div>
                        <div class="highlight">
                            <strong>Reality:</strong> Some clients will leave. That's okay—they make room for clients who value your work more.
                        </div>
                    `
                },
                {
                    id: 'going-full-time',
                    title: 'Transitioning to Full-Time',
                    content: `
                        <h2>Transitioning to Full-Time</h2>
                        <h3>When You're Ready</h3>
                        <ul>
                            <li>Side income equals 50-75% of salary</li>
                            <li>Consistent work for 3-6+ months</li>
                            <li>6+ months expenses saved</li>
                            <li>Clear path to replace full income</li>
                            <li>Health insurance figured out</li>
                        </ul>
                        <h3>Before You Quit</h3>
                        <ul>
                            <li>Max out 401(k) contributions</li>
                            <li>Apply for any credit you might need</li>
                            <li>Use benefits (dental, vision, etc.)</li>
                            <li>Save extra emergency fund</li>
                            <li>Line up more clients than you need</li>
                        </ul>
                        <h3>The Income Rollercoaster</h3>
                        <p>Full-time freelance income is variable. Prepare by:</p>
                        <ul>
                            <li>Building retainer clients (steady monthly income)</li>
                            <li>Creating multiple income streams</li>
                            <li>Having larger emergency fund (6+ months)</li>
                            <li>Living below your means</li>
                        </ul>
                        <div class="highlight">
                            <strong>The Goal:</strong> Don't quit out of frustration with your job. Quit because your freelance business is pulling you toward something better.
                        </div>
                    `
                }
            ],
            quiz: [
                {
                    question: 'What\'s a sign you should raise your rates?',
                    options: [
                        'You\'re struggling to find clients',
                        'Clients say yes immediately and you\'re fully booked',
                        'You just started freelancing',
                        'Your expenses went up'
                    ],
                    correct: 1,
                    explanation: 'If clients say yes immediately and you\'re fully booked, you\'re probably undercharging. Price is a signal of value.'
                },
                {
                    question: 'When should you consider going full-time freelance?',
                    options: [
                        'As soon as you get your first client',
                        'When you hate your job',
                        'When side income equals 50-75% of salary with consistent work and savings',
                        'Only if you get a big contract'
                    ],
                    correct: 2,
                    explanation: 'The safest transition is when you have proven, consistent income (50-75% of salary), several months of savings, and a clear path to full income replacement.'
                }
            ]
        }
    ]
};
