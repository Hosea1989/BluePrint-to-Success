// Estate Planning Curriculum Data
const estateplanningData = {
    id: 'estateplanning',
    title: 'Estate Planning & Legal Documents',
    icon: '📜',
    description: 'Protect your family and assets with essential legal documents—wills, trusts, powers of attorney, and beneficiary designations.',
    whyItMatters: 'Without estate planning, the government decides what happens to your money, your kids, and your medical care. It\'s not just for the wealthy—everyone needs these documents.',
    graduationGoal: 'Have essential legal documents in place and understand estate planning basics',
    difficulty: 'beginner',
    prerequisites: ['personalfinance'],
    learningObjectives: [
        'Understand essential estate planning documents (will, trust, POA)',
        'Designate beneficiaries on all accounts',
        'Protect your family and assets with proper planning',
        'Minimize estate taxes and probate costs',
        'Create a plan that reflects your wishes'
    ],
    relatedTracks: ['retirement', 'personalfinance', 'insurance'],
    resources: [
        { title: 'Nolo - Estate Planning', url: 'https://www.nolo.com/legal-encyclopedia/estate-planning' },
        { title: 'AARP - Estate Planning', url: 'https://www.aarp.org/money/estate-planning/' }
    ],
    levels: [
        {
            id: 1,
            title: 'Estate Planning Basics',
            subtitle: 'Why everyone needs a plan (not just the rich)',
            topics: [
                {
                    id: 'why-estate-planning',
                    title: 'Why Estate Planning Matters at Every Age',
                    content: `
                        <h2>Why Estate Planning Matters</h2>
                        <h3>Common Myths</h3>
                        <ul>
                            <li><strong>"I'm too young"</strong> → Accidents don't check your age</li>
                            <li><strong>"I don't have enough money"</strong> → It's about decisions, not just dollars</li>
                            <li><strong>"My family will figure it out"</strong> → That's how families fight and assets get lost</li>
                            <li><strong>"I'll do it later"</strong> → You might not get a "later"</li>
                        </ul>
                        <h3>What Happens Without a Plan</h3>
                        <ul>
                            <li>State law decides who gets your assets (may not be who you want)</li>
                            <li>Court appoints guardian for your kids (not your choice)</li>
                            <li>Family disputes over your wishes (expensive and painful)</li>
                            <li>No one can make medical decisions for you if incapacitated</li>
                            <li>Assets may go through lengthy, expensive probate</li>
                        </ul>
                        <h3>The Essential Documents</h3>
                        <ol>
                            <li><strong>Will:</strong> Who gets what, who raises your kids</li>
                            <li><strong>Healthcare Directive:</strong> Medical wishes if you can't speak</li>
                            <li><strong>Power of Attorney:</strong> Who manages your money if you can't</li>
                            <li><strong>Beneficiary Designations:</strong> On accounts (overrides your will!)</li>
                        </ol>
                        <div class="highlight">
                            <strong>Minimum for Everyone:</strong> Will + Healthcare Directive + Power of Attorney. You can get basic versions online for under $200 or through an attorney for $500-1,500.
                        </div>
                    `
                },
                {
                    id: 'wills',
                    title: 'Understanding Wills',
                    content: `
                        <h2>Understanding Wills</h2>
                        <h3>What a Will Does</h3>
                        <ul>
                            <li>Names who inherits your assets</li>
                            <li>Names a guardian for minor children</li>
                            <li>Names an executor (person who carries out your wishes)</li>
                            <li>Can include funeral wishes</li>
                        </ul>
                        <h3>Creating a Valid Will</h3>
                        <ul>
                            <li>Must be 18+ and of sound mind</li>
                            <li>Must be written (handwritten "holographic" wills valid in some states)</li>
                            <li>Must be signed and witnessed (requirements vary by state)</li>
                            <li>Should be stored safely (fireproof safe, with attorney, or trusted person)</li>
                        </ul>
                        <h3>What a Will Doesn't Cover</h3>
                        <ul>
                            <li>Retirement accounts (controlled by beneficiary designation)</li>
                            <li>Life insurance (controlled by beneficiary designation)</li>
                            <li>Joint property (passes to surviving owner)</li>
                            <li>Trust assets (controlled by trust document)</li>
                        </ul>
                        <h3>DIY vs. Attorney</h3>
                        <ul>
                            <li><strong>DIY (simple situations):</strong> Trust & Will, LegalZoom ($100-200)</li>
                            <li><strong>Attorney (complex situations):</strong> Blended families, significant assets, business owners ($500-2,000)</li>
                        </ul>
                        <div class="highlight">
                            <strong>Update Your Will:</strong> After marriage, divorce, kids, significant asset changes, or moving to a new state. An outdated will can be worse than none.
                        </div>
                    `
                },
                {
                    id: 'beneficiary-designations',
                    title: 'Beneficiary Designations: The Override',
                    content: `
                        <h2>Beneficiary Designations</h2>
                        <h3>What Are They?</h3>
                        <p>Instructions on specific accounts for who receives the money when you die. These OVERRIDE your will.</p>
                        <h3>Accounts with Beneficiary Designations</h3>
                        <ul>
                            <li>401(k) and IRA accounts</li>
                            <li>Life insurance policies</li>
                            <li>Bank accounts (POD — Payable on Death)</li>
                            <li>Investment/brokerage accounts (TOD — Transfer on Death)</li>
                            <li>HSA accounts</li>
                        </ul>
                        <h3>Why This Matters</h3>
                        <div class="example">
                            <strong>Scenario:</strong> You marry spouse #2 but never update your 401(k) beneficiary from spouse #1.<br>
                            Your will says "everything to spouse #2."<br>
                            <strong>Result:</strong> Spouse #1 gets the 401(k). Beneficiary designation wins.
                        </div>
                        <h3>Action Steps</h3>
                        <ol>
                            <li>Log into every financial account</li>
                            <li>Check who is listed as beneficiary</li>
                            <li>Update if needed (after marriage, divorce, death, birth)</li>
                            <li>Name contingent (backup) beneficiaries too</li>
                            <li>Review annually</li>
                        </ol>
                        <div class="highlight">
                            <strong>Critical:</strong> This is the most commonly overlooked part of estate planning. Check your beneficiaries TODAY. It takes 10 minutes and could save your family a nightmare.
                        </div>
                    `
                }
            ],
            quiz: {
                questions: [
                    {
                        question: 'What happens to your assets if you die without a will?',
                        options: ['Everything goes to charity', 'State law decides who gets what (which may not be your wishes)', 'Your best friend gets everything', 'Nothing happens'],
                        correct: 1,
                        explanation: 'Without a will, state intestacy laws determine who inherits your assets—and it may not align with your wishes at all.'
                    },
                    {
                        question: 'Which overrides your will?',
                        options: ['Your spouse\'s wishes', 'Beneficiary designations on financial accounts', 'Your parents\' wishes', 'State law always'],
                        correct: 1,
                        explanation: 'Beneficiary designations on 401(k)s, IRAs, life insurance, and bank accounts override whatever your will says. Always keep them updated.'
                    },
                    {
                        question: 'What are the minimum estate planning documents everyone needs?',
                        options: ['Just a will', 'Will, healthcare directive, and power of attorney', 'Only life insurance', 'Trust and will'],
                        correct: 1,
                        explanation: 'At minimum: a will (who gets what), healthcare directive (medical wishes), and power of attorney (who manages finances if incapacitated).'
                    }
                ]
            }
        },
        {
            id: 2,
            title: 'Healthcare & Financial Directives',
            subtitle: 'Protecting yourself while you\'re alive',
            topics: [
                {
                    id: 'healthcare-directive',
                    title: 'Healthcare Directive & Living Will',
                    content: `
                        <h2>Healthcare Directive & Living Will</h2>
                        <h3>What It Does</h3>
                        <p>Tells doctors your medical wishes if you can't communicate them yourself (coma, severe illness, incapacitation).</p>
                        <h3>Key Decisions</h3>
                        <ul>
                            <li>Life support: Do you want it? Under what conditions?</li>
                            <li>Resuscitation: DNR (Do Not Resuscitate) preference?</li>
                            <li>Artificial nutrition and hydration</li>
                            <li>Pain management preferences</li>
                            <li>Organ donation wishes</li>
                        </ul>
                        <h3>Healthcare Proxy / Medical POA</h3>
                        <ul>
                            <li>Names someone to make medical decisions for you</li>
                            <li>Choose someone who knows your values</li>
                            <li>Talk to them about your wishes</li>
                            <li>Give them a copy of your directive</li>
                        </ul>
                        <div class="highlight">
                            <strong>Don't skip this.</strong> Without it, your family may face agonizing decisions without knowing your wishes, and may end up in court fighting over them.
                        </div>
                    `
                },
                {
                    id: 'power-of-attorney',
                    title: 'Power of Attorney',
                    content: `
                        <h2>Power of Attorney (POA)</h2>
                        <h3>What It Is</h3>
                        <p>A legal document giving someone authority to act on your behalf for financial/legal matters.</p>
                        <h3>Types</h3>
                        <ul>
                            <li><strong>General POA:</strong> Broad financial powers</li>
                            <li><strong>Limited POA:</strong> Specific actions only (e.g., selling a property)</li>
                            <li><strong>Durable POA:</strong> Remains in effect if you become incapacitated (MOST IMPORTANT)</li>
                            <li><strong>Springing POA:</strong> Only activates upon incapacity</li>
                        </ul>
                        <h3>What Your Agent Can Do</h3>
                        <ul>
                            <li>Pay your bills</li>
                            <li>Manage investments</li>
                            <li>File taxes</li>
                            <li>Access bank accounts</li>
                            <li>Make legal decisions</li>
                        </ul>
                        <h3>Choosing Your Agent</h3>
                        <ul>
                            <li>Someone you trust completely</li>
                            <li>Financially responsible</li>
                            <li>Willing and able to serve</li>
                            <li>Name a backup agent</li>
                        </ul>
                        <div class="highlight">
                            <strong>Without a Durable POA:</strong> If you're incapacitated, your family must go to court to get guardianship/conservatorship. This is expensive, slow, and stressful.
                        </div>
                    `
                }
            ],
            quiz: {
                questions: [
                    {
                        question: 'What does a healthcare directive do?',
                        options: ['Pays your medical bills', 'Communicates your medical wishes if you can\'t speak for yourself', 'Chooses your doctor', 'Provides health insurance'],
                        correct: 1,
                        explanation: 'A healthcare directive tells doctors your wishes about life support, resuscitation, and other medical decisions if you\'re unable to communicate.'
                    },
                    {
                        question: 'Why is a DURABLE power of attorney important?',
                        options: ['It lasts longer', 'It remains in effect even if you become incapacitated', 'It covers more assets', 'It\'s cheaper'],
                        correct: 1,
                        explanation: 'A durable POA stays in effect if you become incapacitated—which is exactly when you need someone acting on your behalf.'
                    }
                ]
            }
        },
        {
            id: 3,
            title: 'Trusts & Advanced Planning',
            subtitle: 'For those with more assets or complex situations',
            topics: [
                {
                    id: 'trusts-basics',
                    title: 'Understanding Trusts',
                    content: `
                        <h2>Understanding Trusts</h2>
                        <h3>What Is a Trust?</h3>
                        <p>A legal arrangement where one party (trustee) holds assets for the benefit of another (beneficiary).</p>
                        <h3>Revocable Living Trust</h3>
                        <ul>
                            <li>You control it while alive (you're the trustee)</li>
                            <li>Avoids probate (assets transfer immediately)</li>
                            <li>Remains private (unlike a will, which becomes public record)</li>
                            <li>Can be changed or revoked anytime</li>
                            <li>You name a successor trustee for when you can't manage it</li>
                        </ul>
                        <h3>Trust vs. Will</h3>
                        <ul>
                            <li><strong>Will:</strong> Goes through probate (public, slow, costs 3-7% of estate)</li>
                            <li><strong>Trust:</strong> Avoids probate (private, fast, lower cost)</li>
                            <li><strong>Will:</strong> Only effective at death</li>
                            <li><strong>Trust:</strong> Works during life AND at death</li>
                        </ul>
                        <h3>When a Trust Makes Sense</h3>
                        <ul>
                            <li>You own real estate</li>
                            <li>You want to avoid probate</li>
                            <li>You value privacy</li>
                            <li>You have minor children (trust manages assets for them)</li>
                            <li>Your estate is above state exemption thresholds</li>
                        </ul>
                        <div class="highlight">
                            <strong>Important:</strong> A trust only works if you FUND it—transfer assets into it. An empty trust does nothing.
                        </div>
                    `
                },
                {
                    id: 'estate-taxes',
                    title: 'Estate Taxes & Gifting',
                    content: `
                        <h2>Estate Taxes & Gifting</h2>
                        <h3>Federal Estate Tax</h3>
                        <ul>
                            <li>2024 exemption: $13.61 million per person</li>
                            <li>Married couples: $27.22 million combined</li>
                            <li>Only affects about 0.1% of estates</li>
                            <li>Tax rate: 40% on amounts above exemption</li>
                        </ul>
                        <h3>State Estate/Inheritance Taxes</h3>
                        <ul>
                            <li>12 states + DC have estate taxes (often lower exemptions)</li>
                            <li>6 states have inheritance taxes</li>
                            <li>California has NO state estate or inheritance tax</li>
                        </ul>
                        <h3>Gift Tax & Annual Exclusion</h3>
                        <ul>
                            <li>2024: Give up to $18,000/person/year with no tax implications</li>
                            <li>Married couples: $36,000/person/year</li>
                            <li>Unlimited gifts for medical bills paid directly to provider</li>
                            <li>Unlimited gifts for tuition paid directly to school</li>
                        </ul>
                        <div class="highlight">
                            <strong>For Most People:</strong> Estate taxes won't affect you. But state taxes might. Focus on having proper documents rather than tax avoidance strategies.
                        </div>
                    `
                }
            ],
            quiz: {
                questions: [
                    {
                        question: 'What is the main advantage of a revocable living trust over a will?',
                        options: ['It\'s cheaper', 'It avoids probate and remains private', 'It\'s easier to create', 'It covers more assets'],
                        correct: 1,
                        explanation: 'A trust avoids the public, slow, expensive probate process. Assets transfer immediately and privately to beneficiaries.'
                    },
                    {
                        question: 'How much can you gift per person per year without tax implications (2024)?',
                        options: ['$5,000', '$10,000', '$18,000', '$50,000'],
                        correct: 2,
                        explanation: 'The 2024 annual gift tax exclusion is $18,000 per person. A married couple can give $36,000 to any individual without triggering gift tax reporting.'
                    }
                ]
            }
        }
    ]
};
