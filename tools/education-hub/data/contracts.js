// Contracts & Legal Literacy Curriculum Data
const contractsData = {
    id: 'contracts',
    title: 'Contracts & Legal Literacy',
    icon: '📋',
    description: 'Understand the documents you sign — employment agreements, leases, NDAs, arbitration clauses, and more — before they bite you.',
    graduationGoal: 'Confidently read, negotiate, and understand any contract before signing',
    difficulty: 'beginner',
    prerequisites: [],
    learningObjectives: [
        'Read and understand common contracts',
        'Identify problematic clauses (arbitration, non-compete, etc.)',
        'Negotiate contract terms before signing',
        'Know when to consult a lawyer',
        'Protect yourself from unfair contracts'
    ],
    relatedTracks: ['workplacerights', 'labor', 'freelancing', 'business'],
    resources: [
        { title: 'Nolo - Contract Law', url: 'https://www.nolo.com/legal-encyclopedia/contracts' }
    ],
    levels: [
        {
            id: 1,
            title: 'Contracts 101',
            subtitle: 'The fundamentals everyone should know',
            topics: [
                {
                    id: 'what-makes-contract-valid',
                    title: 'What Makes a Contract Valid',
                    content: `
                        <h2>What Makes a Contract Valid</h2>

                        <h3>The 4 Essential Elements</h3>
                        <p>Every valid contract requires these four things:</p>
                        <ol>
                            <li><strong>Offer:</strong> One party proposes specific terms ("I'll paint your house for $3,000")</li>
                            <li><strong>Acceptance:</strong> The other party agrees to those terms ("Deal")</li>
                            <li><strong>Consideration:</strong> Each side gives something of value (money, services, goods, a promise)</li>
                            <li><strong>Mutual Assent:</strong> Both parties understand and agree to the terms (no coercion, fraud, or misunderstanding)</li>
                        </ol>

                        <h3>Additional Requirements</h3>
                        <ul>
                            <li><strong>Legal capacity:</strong> Both parties must be of legal age and sound mind</li>
                            <li><strong>Legal purpose:</strong> The contract can't be for something illegal</li>
                            <li><strong>Statute of Frauds:</strong> Some contracts MUST be in writing (real estate, contracts lasting 1+ year, debt guarantees)</li>
                        </ul>

                        <h3>Common Misconceptions</h3>
                        <ul>
                            <li><strong>"It's not a real contract unless it's notarized"</strong> — False. Most contracts don't need notarization.</li>
                            <li><strong>"Verbal agreements aren't binding"</strong> — False. Most verbal agreements ARE legally binding (just harder to prove).</li>
                            <li><strong>"I can cancel any contract within 3 days"</strong> — Mostly false. The 3-day cooling-off period only applies to specific situations (door-to-door sales, some home loans).</li>
                            <li><strong>"If I didn't read it, I'm not bound by it"</strong> — False. You're generally bound by what you signed, even if you didn't read it.</li>
                        </ul>

                        <div class="highlight">
                            <strong>The Hard Truth:</strong> "I didn't read it" is not a legal defense. Courts will hold you to contracts you signed without reading. Always read before you sign.
                        </div>
                    `
                },
                {
                    id: 'key-contract-terms',
                    title: 'Key Terms Everyone Should Know',
                    content: `
                        <h2>Key Contract Terms Everyone Should Know</h2>

                        <h3>The Terms That Matter Most</h3>

                        <h4>Payment & Financial Terms</h4>
                        <ul>
                            <li><strong>Consideration:</strong> What each side is giving (money, services, etc.)</li>
                            <li><strong>Indemnification:</strong> Who pays if something goes wrong — this can shift enormous liability to you</li>
                            <li><strong>Liquidated damages:</strong> A pre-set penalty amount if you break the contract</li>
                            <li><strong>Penalties & late fees:</strong> What happens if you're late on payments or performance</li>
                        </ul>

                        <h4>Duration & Termination</h4>
                        <ul>
                            <li><strong>Term:</strong> How long the contract lasts</li>
                            <li><strong>Auto-renewal:</strong> Does it automatically renew? (Many do — watch for this)</li>
                            <li><strong>Termination clause:</strong> How and when you can end the contract</li>
                            <li><strong>Notice period:</strong> How much advance notice is required to cancel (30 days? 90 days?)</li>
                            <li><strong>Early termination fee:</strong> What it costs to get out early</li>
                        </ul>

                        <h4>Liability & Risk</h4>
                        <ul>
                            <li><strong>Limitation of liability:</strong> Caps on how much one party can be held responsible for</li>
                            <li><strong>Force majeure:</strong> What happens if extraordinary events prevent performance (natural disasters, pandemics)</li>
                            <li><strong>Warranty:</strong> Guarantees about the quality or condition of what's being provided</li>
                            <li><strong>"As-is" clause:</strong> No guarantees — you accept whatever you get</li>
                        </ul>

                        <h4>Dispute Resolution</h4>
                        <ul>
                            <li><strong>Arbitration clause:</strong> You agree to resolve disputes through private arbitration instead of court — this usually favors the company</li>
                            <li><strong>Class action waiver:</strong> You give up the right to join a class action lawsuit</li>
                            <li><strong>Governing law:</strong> Which state's laws apply to the contract</li>
                            <li><strong>Venue:</strong> Where disputes must be handled (could be a different state!)</li>
                        </ul>

                        <div class="example">
                            <strong>Real-World Trap:</strong> You sign a gym membership with an auto-renewal clause and a 60-day cancellation notice requirement. When you try to cancel, they say you missed the notice window and charge you for another full year. Always check auto-renewal and notice period terms.
                        </div>

                        <div class="highlight">
                            <strong>Red Flag Terms:</strong> "Indemnify and hold harmless," "binding arbitration," "waive your right to," "auto-renew," and "as-is" — when you see these, slow down and understand what you're agreeing to.
                        </div>
                    `
                },
                {
                    id: 'verbal-agreements',
                    title: 'When Verbal Agreements Are Binding',
                    content: `
                        <h2>When Verbal Agreements Are Binding</h2>

                        <h3>The General Rule</h3>
                        <p>Verbal contracts are legally binding in most situations. The problem isn't validity — it's <strong>proof.</strong></p>

                        <h3>When Verbal Agreements ARE Enforceable</h3>
                        <ul>
                            <li>Service agreements ("I'll do X for Y amount")</li>
                            <li>Promises of compensation ("We'll give you a bonus if...")</li>
                            <li>Verbal job offers with specific terms</li>
                            <li>Agreements for sale of goods under $500 (UCC)</li>
                            <li>Day-to-day business dealings and handshake agreements</li>
                        </ul>

                        <h3>When Verbal Agreements Are NOT Enforceable</h3>
                        <p>The <strong>Statute of Frauds</strong> requires these to be in writing:</p>
                        <ul>
                            <li>Real estate sales or leases over 1 year</li>
                            <li>Contracts that can't be completed within 1 year</li>
                            <li>Promises to pay someone else's debt</li>
                            <li>Sale of goods over $500 (UCC)</li>
                            <li>Prenuptial agreements</li>
                        </ul>

                        <h3>Proving a Verbal Agreement</h3>
                        <ul>
                            <li><strong>Witnesses:</strong> Anyone who heard the agreement</li>
                            <li><strong>Subsequent behavior:</strong> Did both parties act consistent with the agreement?</li>
                            <li><strong>Text messages/emails:</strong> Follow-up communications referencing the agreement</li>
                            <li><strong>Partial performance:</strong> Did one party start doing what was agreed?</li>
                        </ul>

                        <div class="example">
                            <strong>Workplace Example:</strong> Your manager verbally promises you a raise after 90 days. After 90 days, they deny saying it. Without documentation, it's your word against theirs. <strong>Always follow up verbal promises with an email:</strong> "Just confirming our conversation — you mentioned a salary review after my 90-day mark. Looking forward to it!"
                        </div>

                        <div class="highlight">
                            <strong>Golden Rule:</strong> If it matters, get it in writing. Even a simple email confirmation turns an unprovable verbal agreement into documented evidence.
                        </div>
                    `
                },
                {
                    id: 'how-to-read-contract',
                    title: 'How to Actually Read a Contract',
                    content: `
                        <h2>How to Actually Read a Contract</h2>

                        <h3>The 10-Minute Contract Review</h3>
                        <p>You don't need to be a lawyer to understand the important parts. Here's a systematic approach:</p>

                        <h4>Step 1: Start at the End</h4>
                        <ul>
                            <li>The most dangerous clauses are often buried at the back</li>
                            <li>Look for: arbitration, liability, termination, penalties</li>
                        </ul>

                        <h4>Step 2: Find the Money</h4>
                        <ul>
                            <li>What are you paying? What are you getting paid?</li>
                            <li>When are payments due?</li>
                            <li>What are the penalties for late payment or non-performance?</li>
                            <li>Are there hidden fees?</li>
                        </ul>

                        <h4>Step 3: Find the Exit</h4>
                        <ul>
                            <li>How do you get out of this contract?</li>
                            <li>What's the notice period?</li>
                            <li>Is there an early termination fee?</li>
                            <li>Does it auto-renew?</li>
                        </ul>

                        <h4>Step 4: Find the Risks</h4>
                        <ul>
                            <li>What happens if something goes wrong?</li>
                            <li>Who is liable?</li>
                            <li>Are you indemnifying the other party?</li>
                            <li>Is there an "as-is" clause?</li>
                        </ul>

                        <h4>Step 5: Find the Restrictions</h4>
                        <ul>
                            <li>What can't you do? (Non-compete, NDA, exclusivity)</li>
                            <li>How long do restrictions last after the contract ends?</li>
                            <li>What's the geographic scope?</li>
                        </ul>

                        <h3>Questions to Always Ask</h3>
                        <ol>
                            <li>"What am I agreeing to that limits my future options?"</li>
                            <li>"What's the worst-case scenario under this contract?"</li>
                            <li>"Can I negotiate any of these terms?"</li>
                            <li>"What happens if I need to get out of this?"</li>
                        </ol>

                        <div class="highlight">
                            <strong>Never Feel Rushed:</strong> "Take it or leave it" and "everyone signs this" are pressure tactics. You ALWAYS have the right to take a contract home, read it, and ask questions. If they won't give you time to review, that's a red flag.
                        </div>
                    `
                }
            ],
            quiz: {
                questions: [
                    {
                        question: 'Which of the following is NOT one of the four essential elements of a valid contract?',
                        options: ['Offer', 'Notarization', 'Consideration', 'Acceptance'],
                        correct: 1,
                        explanation: 'The four essential elements are offer, acceptance, consideration, and mutual assent. Notarization is NOT required for most contracts.'
                    },
                    {
                        question: 'If you sign a contract without reading it, are you still bound by its terms?',
                        options: [
                            'No — you can claim you didn\'t know what was in it',
                            'Only if the contract is under 5 pages',
                            'Yes — "I didn\'t read it" is generally not a legal defense',
                            'Only in certain states'
                        ],
                        correct: 2,
                        explanation: 'Courts generally hold that you are bound by contracts you sign, even if you didn\'t read them. It\'s your responsibility to understand what you\'re signing.'
                    },
                    {
                        question: 'What is an "arbitration clause"?',
                        options: [
                            'A clause that lets you sue the company',
                            'A clause where you agree to resolve disputes through private arbitration instead of court',
                            'A clause that guarantees fair treatment',
                            'A clause that allows you to cancel the contract'
                        ],
                        correct: 1,
                        explanation: 'An arbitration clause means you agree to resolve disputes through a private arbitrator instead of the court system. This typically favors the company and limits your legal options.'
                    }
                ]
            }
        },
        {
            id: 2,
            title: 'Employment Documents',
            subtitle: 'The papers that control your work life',
            topics: [
                {
                    id: 'offer-letters',
                    title: 'Offer Letters & Employment Agreements',
                    content: `
                        <h2>Offer Letters & Employment Agreements</h2>

                        <h3>Offer Letter vs. Employment Contract</h3>
                        <ul>
                            <li><strong>Offer Letter:</strong> Outlines basic terms (title, salary, start date). Usually confirms at-will status. Less formal.</li>
                            <li><strong>Employment Contract:</strong> Detailed, binding agreement covering duties, compensation, termination, restrictive covenants. More common for executives and specialized roles.</li>
                        </ul>

                        <h3>What to Look For in an Offer Letter</h3>
                        <ul>
                            <li><strong>Job title and reporting structure</strong></li>
                            <li><strong>Compensation:</strong> Base salary, bonus structure, commission, equity</li>
                            <li><strong>Benefits:</strong> Health insurance, 401(k), PTO, etc.</li>
                            <li><strong>Start date and location</strong></li>
                            <li><strong>At-will language:</strong> Almost always included — understand what it means</li>
                            <li><strong>Contingencies:</strong> Background check, drug test, references</li>
                        </ul>

                        <h3>What to Negotiate</h3>
                        <ul>
                            <li>Salary (always negotiate — the first offer is rarely the best)</li>
                            <li>Signing bonus</li>
                            <li>Start date</li>
                            <li>Remote work flexibility</li>
                            <li>PTO and vacation days</li>
                            <li>Title (affects future earning potential)</li>
                            <li>Severance terms (yes, you can negotiate this upfront)</li>
                        </ul>

                        <h3>Red Flags in Offer Letters</h3>
                        <ul>
                            <li>Vague compensation ("competitive salary" with no number)</li>
                            <li>No written benefits details</li>
                            <li>Unusual probationary periods with reduced rights</li>
                            <li>Requirements to sign additional documents (NDA, non-compete) with no time to review</li>
                        </ul>

                        <div class="highlight">
                            <strong>Get It in Writing:</strong> Verbal promises made during the interview ("We'll review your salary in 6 months") mean nothing unless they're in the offer letter. If they said it, ask for it in writing.
                        </div>
                    `
                },
                {
                    id: 'non-competes',
                    title: 'Non-Competes & Non-Solicitation Agreements',
                    content: `
                        <h2>Non-Competes & Non-Solicitation Agreements</h2>

                        <h3>Non-Compete Agreements (NCAs)</h3>
                        <div class="definition">
                            A clause that prevents you from working for a competitor or starting a competing business for a certain time after leaving.
                        </div>

                        <h3>Key Elements</h3>
                        <ul>
                            <li><strong>Duration:</strong> How long? (6 months to 2 years is common)</li>
                            <li><strong>Geographic scope:</strong> Where? (city, state, nationwide?)</li>
                            <li><strong>Industry scope:</strong> What counts as "competing"?</li>
                            <li><strong>Reasonableness:</strong> Courts often strike down overly broad non-competes</li>
                        </ul>

                        <h3>State Variations — This Is HUGE</h3>
                        <ul>
                            <li><strong>California:</strong> Non-competes are virtually UNENFORCEABLE. California law strongly protects worker mobility.</li>
                            <li><strong>FTC Rule (2024):</strong> The FTC voted to ban most non-competes nationwide — though enforcement is still being litigated</li>
                            <li><strong>Many states</strong> are increasingly limiting or banning non-competes, especially for low-wage workers</li>
                            <li>Even in states that allow them, courts often narrow overly broad agreements</li>
                        </ul>

                        <h3>Non-Solicitation Agreements</h3>
                        <ul>
                            <li>Prevents you from recruiting former coworkers or contacting former clients/customers</li>
                            <li>Generally more enforceable than non-competes</li>
                            <li>Still must be reasonable in scope and duration</li>
                        </ul>

                        <h3>What to Do If Asked to Sign</h3>
                        <ul>
                            <li>Ask for time to review (they legally have to give you time)</li>
                            <li>Negotiate the scope: narrower industry definition, shorter duration, smaller geography</li>
                            <li>Ask for a "garden leave" clause — they pay you during the non-compete period</li>
                            <li>Consult an attorney, especially if the scope seems broad</li>
                        </ul>

                        <div class="highlight">
                            <strong>Know Your State:</strong> If you're in California, non-competes are essentially meaningless. In other states, they may be enforceable but negotiable. Don't assume you're locked in — many employees never challenge these and miss opportunities they were legally free to take.
                        </div>
                    `
                },
                {
                    id: 'ndas',
                    title: 'NDAs & Confidentiality Agreements',
                    content: `
                        <h2>NDAs & Confidentiality Agreements</h2>

                        <h3>What NDAs Cover</h3>
                        <ul>
                            <li><strong>Trade secrets:</strong> Formulas, processes, proprietary methods</li>
                            <li><strong>Business information:</strong> Financial data, strategies, client lists</li>
                            <li><strong>Intellectual property:</strong> Inventions, designs, code developed at work</li>
                            <li><strong>Internal communications:</strong> Sometimes broadly defined to cover almost anything</li>
                        </ul>

                        <h3>What NDAs CANNOT Prevent You From Doing</h3>
                        <ul>
                            <li><strong>Reporting illegal activity</strong> to government agencies (whistleblower protections override NDAs)</li>
                            <li><strong>Discussing wages and working conditions</strong> with coworkers (protected by NLRA)</li>
                            <li><strong>Filing discrimination or harassment complaints</strong></li>
                            <li><strong>Cooperating with government investigations</strong></li>
                            <li><strong>Testifying under subpoena</strong></li>
                        </ul>

                        <h3>Red Flags in NDAs</h3>
                        <ul>
                            <li><strong>Overly broad definitions:</strong> "All information related to the company" — this could cover anything</li>
                            <li><strong>No time limit:</strong> NDAs should have an expiration (1-3 years is common for most business info)</li>
                            <li><strong>Penalties that exceed damages:</strong> Unreasonable liquidated damages clauses</li>
                            <li><strong>Covers publicly available information:</strong> You can't be bound to secrecy about things that are public</li>
                            <li><strong>One-sided:</strong> You're bound but the company has no obligations</li>
                        </ul>

                        <h3>Negotiate These Points</h3>
                        <ul>
                            <li>Narrow the definition of "confidential information"</li>
                            <li>Add a time limit</li>
                            <li>Exclude information you already knew or that becomes public</li>
                            <li>Ensure you can discuss general skills and experience at future jobs</li>
                            <li>Carve out clear exceptions for legal reporting</li>
                        </ul>

                        <div class="highlight">
                            <strong>Key Takeaway:</strong> NDAs cannot silence you about illegal activity, discrimination, or your working conditions. If an employer uses an NDA to threaten you into silence about those things, the NDA provision is likely unenforceable — and the threat itself may be illegal retaliation.
                        </div>
                    `
                },
                {
                    id: 'arbitration-clauses',
                    title: 'Arbitration Clauses — Signing Away Your Day in Court',
                    content: `
                        <h2>Arbitration Clauses</h2>

                        <h3>What Arbitration Means</h3>
                        <div class="definition">
                            <strong>Mandatory arbitration:</strong> You agree that any legal disputes with the company will be resolved by a private arbitrator — NOT a judge or jury. You give up your right to sue in court.
                        </div>

                        <h3>Why Companies Love Arbitration</h3>
                        <ul>
                            <li><strong>Private:</strong> No public record — bad behavior stays hidden</li>
                            <li><strong>Company-friendly:</strong> Studies show arbitrators rule for companies more often than courts</li>
                            <li><strong>Lower damages:</strong> Arbitration awards are typically lower than jury verdicts</li>
                            <li><strong>No class actions:</strong> Usually paired with a class action waiver</li>
                            <li><strong>Limited discovery:</strong> You get less access to company documents and internal communications</li>
                            <li><strong>Limited appeal:</strong> Very difficult to appeal an arbitration decision</li>
                        </ul>

                        <h3>Where You'll Find Them</h3>
                        <ul>
                            <li>Employment agreements and employee handbooks</li>
                            <li>Credit card agreements</li>
                            <li>Cell phone contracts</li>
                            <li>Streaming service terms</li>
                            <li>Bank account agreements</li>
                            <li>Basically everywhere — and most people don't know they signed one</li>
                        </ul>

                        <h3>Can You Opt Out?</h3>
                        <ul>
                            <li>Some arbitration clauses have an <strong>opt-out period</strong> (usually 30 days after signing)</li>
                            <li>READ THE FINE PRINT — if there's an opt-out, use it</li>
                            <li>Opting out of arbitration does NOT affect your employment or account</li>
                            <li>California and some states have moved to limit mandatory employment arbitration</li>
                        </ul>

                        <h3>Exceptions</h3>
                        <ul>
                            <li><strong>EEOC complaints:</strong> You can still file with the EEOC regardless of an arbitration clause</li>
                            <li><strong>NLRB complaints:</strong> Protected regardless</li>
                            <li><strong>Government agency complaints:</strong> Generally not affected by arbitration clauses</li>
                            <li><strong>Sexual harassment/assault:</strong> The 2022 Ending Forced Arbitration Act exempts these claims</li>
                        </ul>

                        <div class="highlight">
                            <strong>Action:</strong> Check your current employment agreement. If there's an arbitration clause with an opt-out period you haven't passed yet, consider opting out. If you're signing a new agreement, try to negotiate removal of the arbitration clause or at least opt out within the window.
                        </div>
                    `
                },
                {
                    id: 'employee-handbooks',
                    title: 'Employee Handbooks as Implied Contracts',
                    content: `
                        <h2>Employee Handbooks as Implied Contracts</h2>

                        <h3>Are Handbooks Binding?</h3>
                        <p>This is where it gets interesting. Employee handbooks can create <strong>implied contracts</strong> even in at-will employment states.</p>

                        <h3>When a Handbook Creates Obligations</h3>
                        <ul>
                            <li>If it promises specific procedures (e.g., "progressive discipline: verbal warning → written warning → suspension → termination")</li>
                            <li>If it outlines specific benefits without disclaimer language</li>
                            <li>If employees reasonably rely on the handbook's promises</li>
                            <li>If the company has consistently followed its own policies (creates precedent)</li>
                        </ul>

                        <h3>How Companies Protect Themselves</h3>
                        <ul>
                            <li><strong>Disclaimer language:</strong> "This handbook is not a contract" — but courts sometimes see through this</li>
                            <li><strong>"At-will" reminders:</strong> Scattered throughout the handbook</li>
                            <li><strong>Reservation of rights:</strong> "Company reserves the right to change policies at any time"</li>
                            <li><strong>Acknowledgment page:</strong> You sign saying you received and understand the handbook</li>
                        </ul>

                        <h3>How to Use the Handbook to Your Advantage</h3>
                        <ul>
                            <li><strong>Save a copy</strong> — companies can change handbooks at any time, and you want proof of what it said when you were hired</li>
                            <li><strong>Cite specific policies</strong> when filing complaints: "Per the Employee Handbook, Section 4.2..."</li>
                            <li><strong>Show inconsistent application:</strong> If the handbook says "progressive discipline" but you were fired without it, that's powerful evidence</li>
                            <li><strong>Use it for comparison evidence:</strong> If the handbook policy applies to you but not others, that supports a retaliation or discrimination claim</li>
                        </ul>

                        <div class="highlight">
                            <strong>Save Your Handbook:</strong> Download or photograph your employee handbook the day you receive it. If the company later changes policies to justify actions against you, you'll have proof of what the rules actually were.
                        </div>
                    `
                }
            ],
            quiz: {
                questions: [
                    {
                        question: 'If you sign a non-compete agreement, are you always bound by it?',
                        options: [
                            'Yes — you signed it, so it\'s enforceable',
                            'No — non-competes are illegal everywhere',
                            'It depends on your state\'s laws and whether the terms are reasonable — many are unenforceable or negotiable',
                            'Only if you were paid extra to sign it'
                        ],
                        correct: 2,
                        explanation: 'Non-compete enforceability varies greatly by state. California essentially bans them. Many states require them to be reasonable in scope, duration, and geography. Courts frequently narrow or strike down overly broad non-competes.'
                    },
                    {
                        question: 'What can an NDA NOT prevent you from doing?',
                        options: [
                            'Sharing trade secrets with competitors',
                            'Discussing proprietary business strategies publicly',
                            'Reporting illegal activity to government agencies and discussing wages with coworkers',
                            'Sharing client lists with a new employer'
                        ],
                        correct: 2,
                        explanation: 'NDAs cannot prevent you from reporting illegal activity (whistleblower protections), discussing wages and working conditions with coworkers (NLRA), or cooperating with government investigations. These rights override NDA provisions.'
                    },
                    {
                        question: 'Why should you save a copy of your employee handbook?',
                        options: [
                            'It\'s required by law',
                            'Companies can change policies at any time — you want proof of what the rules were when you were hired in case they\'re applied inconsistently',
                            'To share it with competitors',
                            'It\'s not important to save it'
                        ],
                        correct: 1,
                        explanation: 'Companies frequently update handbooks. Having a copy from when you were hired proves what policies existed at the time, which is crucial if the company tries to enforce new rules retroactively or inconsistently.'
                    }
                ]
            }
        },
        {
            id: 3,
            title: 'Financial & Consumer Contracts',
            subtitle: 'Leases, loans, and the fine print of daily life',
            topics: [
                {
                    id: 'leases',
                    title: 'Leases & Rental Agreements',
                    content: `
                        <h2>Leases & Rental Agreements</h2>

                        <h3>Key Lease Terms to Understand</h3>
                        <ul>
                            <li><strong>Lease term:</strong> Fixed (12 months) vs. month-to-month (more flexibility, less security)</li>
                            <li><strong>Rent amount and due date:</strong> Also check for grace periods and late fees</li>
                            <li><strong>Security deposit:</strong> Amount, what it covers, conditions for return, timeline for refund</li>
                            <li><strong>Utilities:</strong> What's included vs. what you pay</li>
                            <li><strong>Maintenance responsibilities:</strong> What the landlord fixes vs. what's on you</li>
                            <li><strong>Subletting policy:</strong> Can you sublet if you need to leave early?</li>
                            <li><strong>Early termination:</strong> Penalties for breaking the lease early</li>
                            <li><strong>Renewal terms:</strong> What happens when the lease ends?</li>
                            <li><strong>Guest policies:</strong> Restrictions on who can stay and for how long</li>
                        </ul>

                        <h3>Red Flags in Leases</h3>
                        <ul>
                            <li>Waiving your right to a habitable dwelling (illegal in most states)</li>
                            <li>Landlord can enter without notice (most states require 24-48 hours)</li>
                            <li>Excessive security deposit (state laws cap these)</li>
                            <li>No itemized move-in condition report</li>
                            <li>"Tenant responsible for all repairs" clauses</li>
                            <li>Arbitration clauses in residential leases</li>
                        </ul>

                        <h3>Before You Sign</h3>
                        <ul>
                            <li>Document the condition of everything (photos/video with timestamps)</li>
                            <li>Get any verbal promises in writing (the landlord said they'd fix the dishwasher? Get it in the lease)</li>
                            <li>Know your state's tenant rights (they override unfair lease terms)</li>
                            <li>Keep a signed copy of the lease for your records</li>
                        </ul>

                        <div class="highlight">
                            <strong>Know Your Rights:</strong> Many illegal lease clauses are unenforceable even if you signed them. State tenant protection laws override unfair lease terms. Know your state's rules.
                        </div>
                    `
                },
                {
                    id: 'loan-agreements',
                    title: 'Loan Agreements & Promissory Notes',
                    content: `
                        <h2>Loan Agreements & Promissory Notes</h2>

                        <h3>Key Terms in Any Loan</h3>
                        <ul>
                            <li><strong>Principal:</strong> The amount you're borrowing</li>
                            <li><strong>Interest rate:</strong> Fixed vs. variable — and the APR (annual percentage rate, includes fees)</li>
                            <li><strong>Repayment schedule:</strong> Monthly payments, due dates, total number of payments</li>
                            <li><strong>Prepayment penalties:</strong> Some loans charge you for paying early (check this!)</li>
                            <li><strong>Default provisions:</strong> What happens if you miss payments (late fees, acceleration, collections)</li>
                            <li><strong>Collateral:</strong> What the lender can take if you don't pay (secured vs. unsecured)</li>
                        </ul>

                        <h3>Important Protections (TILA)</h3>
                        <p>The Truth in Lending Act requires lenders to disclose:</p>
                        <ul>
                            <li>The APR</li>
                            <li>Total cost of the loan over its lifetime</li>
                            <li>Payment schedule</li>
                            <li>Prepayment penalties</li>
                            <li>Late payment fees</li>
                        </ul>

                        <h3>Predatory Lending Red Flags</h3>
                        <ul>
                            <li>Interest rates above 36% APR</li>
                            <li>No credit check required (means they expect you to default)</li>
                            <li>Balloon payments (small monthly payments then one massive final payment)</li>
                            <li>Pressure to borrow more than you need</li>
                            <li>Encouraging you to lie on the application</li>
                            <li>Payday loans and title loans (almost always predatory)</li>
                        </ul>

                        <div class="highlight">
                            <strong>Always Calculate:</strong> Before signing any loan, calculate the TOTAL amount you'll pay over the life of the loan (principal + all interest + fees). This number is often shockingly higher than the principal.
                        </div>
                    `
                },
                {
                    id: 'terms-of-service',
                    title: 'Terms of Service & Digital Contracts',
                    content: `
                        <h2>Terms of Service & Digital Contracts</h2>

                        <h3>You "Agree" Constantly</h3>
                        <ul>
                            <li>Every app, website, and service has Terms of Service (ToS)</li>
                            <li>Clicking "I Agree" or even just using the service can bind you</li>
                            <li><strong>Clickwrap:</strong> You click "I Agree" — generally enforceable</li>
                            <li><strong>Browsewrap:</strong> Terms posted on the website with no click required — less enforceable</li>
                        </ul>

                        <h3>What They Typically Include</h3>
                        <ul>
                            <li><strong>Data usage:</strong> What they do with your information (sell it, share it, use it for training AI)</li>
                            <li><strong>Content ownership:</strong> You may be granting them a license to your content (photos, posts, etc.)</li>
                            <li><strong>Arbitration clause:</strong> Almost always included</li>
                            <li><strong>Class action waiver:</strong> You give up group lawsuit rights</li>
                            <li><strong>Limitation of liability:</strong> They're not responsible for almost anything</li>
                            <li><strong>Modification rights:</strong> They can change terms at any time, often without notifying you</li>
                        </ul>

                        <h3>Practical Tips</h3>
                        <ul>
                            <li>Use tools like <strong>ToS;DR</strong> (tosdr.org) that rate and summarize terms of service</li>
                            <li>Look for opt-out provisions (especially for arbitration)</li>
                            <li>Be aware of what data you're giving away</li>
                            <li>Know that free services make money from your data — you are the product</li>
                        </ul>

                        <div class="highlight">
                            <strong>Reality Check:</strong> No one reads every ToS — but you should know the general patterns. Almost every service collects your data, includes arbitration, and limits their liability. The key is knowing when to push back (opt out of arbitration) and when the stakes are too low to worry about.
                        </div>
                    `
                },
                {
                    id: 'cancellation-traps',
                    title: 'Cancellation Traps & How to Escape Them',
                    content: `
                        <h2>Cancellation Traps & How to Escape Them</h2>

                        <h3>Common Cancellation Traps</h3>
                        <ul>
                            <li><strong>Gym memberships:</strong> Auto-renewal, long cancellation windows, require certified mail or in-person cancellation</li>
                            <li><strong>Subscription services:</strong> "Free trial" converts to paid, cancellation buried in settings</li>
                            <li><strong>Cable/internet:</strong> Early termination fees, retention departments designed to prevent cancellation</li>
                            <li><strong>Timeshares:</strong> Notoriously difficult to cancel — seek specialized legal help</li>
                            <li><strong>Extended warranties:</strong> Auto-renewing, minimal coverage</li>
                        </ul>

                        <h3>Your Rights (FTC Click-to-Cancel Rule)</h3>
                        <ul>
                            <li>As of 2024, the FTC's "click-to-cancel" rule requires that canceling must be as easy as signing up</li>
                            <li>Companies can no longer require phone calls to cancel if you signed up online</li>
                            <li>Must clearly disclose all material terms before charging</li>
                            <li>Must get your informed consent before auto-renewing</li>
                        </ul>

                        <h3>How to Cancel Effectively</h3>
                        <ol>
                            <li>Read the cancellation terms in your contract</li>
                            <li>Send cancellation in writing (email + certified mail for important ones)</li>
                            <li>Keep confirmation of cancellation</li>
                            <li>Monitor your credit card/bank statements for continued charges</li>
                            <li>If they keep charging you: dispute with your credit card company</li>
                            <li>File complaints with the FTC and your state attorney general if they won't stop</li>
                        </ol>

                        <div class="highlight">
                            <strong>Pro Tip:</strong> Before signing up for any subscription or free trial, set a reminder on your phone for before the renewal date. Future you will thank present you.
                        </div>
                    `
                }
            ],
            quiz: {
                questions: [
                    {
                        question: 'What should you always do before signing a lease?',
                        options: [
                            'Just trust the landlord\'s word',
                            'Document the condition of everything with photos, get verbal promises in writing, and know your state\'s tenant rights',
                            'Sign as quickly as possible to secure the apartment',
                            'Only read the first page'
                        ],
                        correct: 1,
                        explanation: 'Before signing a lease, document the condition of the property, get any verbal promises included in the lease, understand all terms, and know your state tenant rights — which override unfair lease clauses.'
                    },
                    {
                        question: 'What does the FTC\'s "click-to-cancel" rule require?',
                        options: [
                            'You must call to cancel all subscriptions',
                            'Canceling must be as easy as signing up',
                            'Companies don\'t have to let you cancel',
                            'You have 30 days to cancel anything'
                        ],
                        correct: 1,
                        explanation: 'The FTC\'s click-to-cancel rule requires companies to make cancellation as easy as the signup process. If you signed up online, they can\'t require you to call to cancel.'
                    }
                ]
            }
        },
        {
            id: 4,
            title: 'Writing Your Own Documents',
            subtitle: 'Create simple legal documents to protect yourself',
            topics: [
                {
                    id: 'demand-letters',
                    title: 'Writing Effective Demand Letters',
                    content: `
                        <h2>Writing Effective Demand Letters</h2>

                        <h3>When to Write a Demand Letter</h3>
                        <ul>
                            <li>Someone owes you money and won't pay</li>
                            <li>A business provided defective goods or services</li>
                            <li>Your security deposit wasn't returned properly</li>
                            <li>A contractor didn't complete agreed work</li>
                            <li>An employer owes you unpaid wages</li>
                            <li>Before filing a small claims case (often required or recommended)</li>
                        </ul>

                        <h3>Structure of a Demand Letter</h3>
                        <ol>
                            <li><strong>Your information:</strong> Name, address, contact info</li>
                            <li><strong>Date</strong></li>
                            <li><strong>Recipient's information</strong></li>
                            <li><strong>Subject line:</strong> "DEMAND FOR [PAYMENT/ACTION] — [Brief description]"</li>
                            <li><strong>Statement of facts:</strong> What happened, with dates and specifics</li>
                            <li><strong>Legal basis:</strong> Why they owe you (contract terms, law citations)</li>
                            <li><strong>Specific demand:</strong> Exactly what you want (dollar amount, specific action)</li>
                            <li><strong>Deadline:</strong> "Please respond within [14-30] days"</li>
                            <li><strong>Consequence:</strong> "If I do not receive a satisfactory response, I will pursue all available legal remedies, including but not limited to filing in small claims court"</li>
                        </ol>

                        <h3>Tips</h3>
                        <ul>
                            <li>Be professional — no threats, no emotions, just facts and law</li>
                            <li>Send via certified mail AND email</li>
                            <li>Keep copies of everything</li>
                            <li>A demand letter often resolves disputes without court — people take written demands seriously</li>
                        </ul>

                        <div class="highlight">
                            <strong>Success Rate:</strong> A well-written demand letter resolves many disputes without ever going to court. The formality and legal language signal that you're serious and prepared to follow through.
                        </div>
                    `
                },
                {
                    id: 'contractor-agreements',
                    title: 'Independent Contractor Agreements',
                    content: `
                        <h2>Independent Contractor Agreements</h2>

                        <h3>When You Need One</h3>
                        <ul>
                            <li>Hiring a freelancer (web designer, writer, photographer, etc.)</li>
                            <li>Doing freelance work for a client</li>
                            <li>Any project-based work relationship</li>
                        </ul>

                        <h3>Essential Clauses</h3>
                        <ul>
                            <li><strong>Scope of work:</strong> EXACTLY what is being delivered (be specific)</li>
                            <li><strong>Payment terms:</strong> Amount, milestones, due dates, method of payment</li>
                            <li><strong>Timeline:</strong> Start date, deadlines, delivery schedule</li>
                            <li><strong>Revision policy:</strong> How many rounds of revisions are included</li>
                            <li><strong>Ownership/IP:</strong> Who owns the finished work? (This is critical for creative work)</li>
                            <li><strong>Confidentiality:</strong> Mutual NDA provisions if needed</li>
                            <li><strong>Termination:</strong> How either party can end the agreement</li>
                            <li><strong>Independent contractor status:</strong> Clarifies no employment relationship exists</li>
                        </ul>

                        <h3>Protecting Yourself as a Freelancer</h3>
                        <ul>
                            <li>Get a deposit upfront (25-50% is standard)</li>
                            <li>Include a "kill fee" if the client cancels mid-project</li>
                            <li>Specify that you retain ownership until final payment</li>
                            <li>Limit scope — define what's NOT included to prevent scope creep</li>
                        </ul>

                        <div class="highlight">
                            <strong>Never Work Without a Contract:</strong> Even for friends and family — especially for friends and family. A clear agreement prevents misunderstandings and protects both parties.
                        </div>
                    `
                },
                {
                    id: 'service-contracts',
                    title: 'Simple Service Contracts & Letters of Intent',
                    content: `
                        <h2>Simple Service Contracts & Letters of Intent</h2>

                        <h3>Simple Service Contract</h3>
                        <p>For hiring or providing services (cleaning, tutoring, home repair, etc.):</p>
                        <ul>
                            <li><strong>Parties:</strong> Who is providing and receiving the service</li>
                            <li><strong>Service description:</strong> What exactly will be done</li>
                            <li><strong>Schedule:</strong> When it will be done</li>
                            <li><strong>Price and payment:</strong> How much and when</li>
                            <li><strong>Materials:</strong> Who provides them (and who pays)</li>
                            <li><strong>Satisfaction guarantee:</strong> What happens if work isn't satisfactory</li>
                            <li><strong>Cancellation:</strong> How to cancel and any fees</li>
                            <li><strong>Signatures and date</strong></li>
                        </ul>

                        <h3>Letters of Intent (LOI) / Memorandums of Understanding (MOU)</h3>
                        <ul>
                            <li>Not a full contract — but documents the parties' intention to enter into an agreement</li>
                            <li>Commonly used in business negotiations, partnerships, and real estate</li>
                            <li>Some provisions can be binding (confidentiality, exclusivity) while others are non-binding (price, timeline)</li>
                            <li>Useful for documenting what was agreed before the formal contract is drafted</li>
                        </ul>

                        <div class="highlight">
                            <strong>Free Templates:</strong> Sites like LawDepot, Rocket Lawyer, and even Google Docs have free contract templates. For simple agreements, these work fine. For anything complex or high-stakes, have an attorney review.
                        </div>
                    `
                }
            ],
            quiz: {
                questions: [
                    {
                        question: 'What is the purpose of a demand letter?',
                        options: [
                            'To threaten someone',
                            'To formally request payment or action, documenting the dispute and signaling willingness to pursue legal remedies',
                            'To replace a lawsuit',
                            'To make someone feel guilty'
                        ],
                        correct: 1,
                        explanation: 'A demand letter is a formal written request for payment or action that documents the dispute, cites relevant facts and law, and signals that you\'re prepared to take legal action if the matter isn\'t resolved.'
                    },
                    {
                        question: 'What is the most important clause in a freelancer/contractor agreement for protecting your work?',
                        options: [
                            'The confidentiality clause',
                            'The ownership/IP clause specifying who owns the finished work',
                            'The timeline clause',
                            'The non-compete clause'
                        ],
                        correct: 1,
                        explanation: 'The ownership/IP clause determines who owns the work product. Without it, you could create something valuable and lose all rights to it. Always specify ownership and consider retaining rights until final payment is received.'
                    }
                ]
            }
        },
        {
            id: 5,
            title: 'When Things Go Wrong',
            subtitle: 'Disputes, courts, and getting resolution',
            topics: [
                {
                    id: 'breach-of-contract',
                    title: 'Breach of Contract Basics',
                    content: `
                        <h2>Breach of Contract Basics</h2>

                        <h3>What Is a Breach?</h3>
                        <p>A breach occurs when one party fails to fulfill their obligations under the contract.</p>

                        <h3>Types of Breach</h3>
                        <ul>
                            <li><strong>Material breach:</strong> A significant failure that undermines the purpose of the contract (contractor builds a house with the wrong foundation). Entitles the other party to stop performing and seek damages.</li>
                            <li><strong>Minor breach:</strong> A small deviation that doesn't undermine the contract's purpose (contractor uses a slightly different paint color). Must still perform, but can seek damages for the difference.</li>
                            <li><strong>Anticipatory breach:</strong> One party announces in advance they won't fulfill their obligations. You can treat it as a breach immediately.</li>
                        </ul>

                        <h3>Remedies for Breach</h3>
                        <ul>
                            <li><strong>Compensatory damages:</strong> Money to put you in the position you'd be in if the contract was fulfilled</li>
                            <li><strong>Consequential damages:</strong> Losses that resulted from the breach (lost profits, additional costs)</li>
                            <li><strong>Specific performance:</strong> Court orders the breaching party to fulfill the contract (rare, usually for unique items/property)</li>
                            <li><strong>Rescission:</strong> Contract is cancelled and both parties return to their pre-contract positions</li>
                        </ul>

                        <h3>Your Duty to Mitigate</h3>
                        <ul>
                            <li>You must take reasonable steps to reduce your losses</li>
                            <li>Example: If your contractor walks off the job, you must try to hire a replacement — not just let the damage accumulate</li>
                            <li>Courts reduce your damages by any amount you could have avoided</li>
                        </ul>

                        <div class="highlight">
                            <strong>Document the Breach:</strong> If someone breaches a contract with you, document it immediately. Save communications, take photos, note dates and costs. This is your evidence for any legal action.
                        </div>
                    `
                },
                {
                    id: 'small-claims-court',
                    title: 'Small Claims Court',
                    content: `
                        <h2>Small Claims Court</h2>

                        <h3>What Is Small Claims?</h3>
                        <ul>
                            <li>A simplified court for resolving disputes involving smaller amounts of money</li>
                            <li>No lawyers needed (in many states, lawyers aren't even allowed)</li>
                            <li>Faster, cheaper, and simpler than regular court</li>
                            <li>Filing fees typically $30-$75</li>
                        </ul>

                        <h3>Claim Limits by State (Examples)</h3>
                        <ul>
                            <li><strong>California:</strong> $10,000 (individuals), $5,000 (businesses)</li>
                            <li><strong>New York:</strong> $5,000-$10,000 depending on court</li>
                            <li><strong>Texas:</strong> $20,000</li>
                            <li><strong>Florida:</strong> $8,000</li>
                            <li>Check your state's limit</li>
                        </ul>

                        <h3>Common Small Claims Cases</h3>
                        <ul>
                            <li>Security deposit disputes</li>
                            <li>Unpaid invoices</li>
                            <li>Property damage</li>
                            <li>Breach of contract (within dollar limits)</li>
                            <li>Defective products or services</li>
                            <li>Minor auto accident damage</li>
                        </ul>

                        <h3>How to Prepare</h3>
                        <ol>
                            <li><strong>Organize your evidence:</strong> Contracts, receipts, photos, texts, emails</li>
                            <li><strong>Write a clear timeline:</strong> What happened and when</li>
                            <li><strong>Calculate your damages:</strong> Be specific about the amount you're claiming and why</li>
                            <li><strong>Practice your presentation:</strong> You typically get 10-15 minutes</li>
                            <li><strong>Bring witnesses</strong> if you have them</li>
                            <li><strong>Bring copies:</strong> One for you, one for the judge, one for the other party</li>
                        </ol>

                        <div class="highlight">
                            <strong>Winning Tip:</strong> The person with the best documentation usually wins in small claims court. Judges appreciate organized, factual presentations with supporting evidence.
                        </div>
                    `
                },
                {
                    id: 'dispute-resolution',
                    title: 'Dispute Resolution Options',
                    content: `
                        <h2>Dispute Resolution Options</h2>

                        <h3>Your Options from Least to Most Formal</h3>

                        <h4>1. Direct Negotiation</h4>
                        <ul>
                            <li>Talk directly with the other party</li>
                            <li>Often the fastest and cheapest resolution</li>
                            <li>Put any agreement in writing</li>
                        </ul>

                        <h4>2. Mediation</h4>
                        <ul>
                            <li>A neutral third party helps both sides reach an agreement</li>
                            <li>Non-binding (unless you reach an agreement and sign it)</li>
                            <li>Cost: $100-$500 for community mediation, more for private mediators</li>
                            <li>Preserves relationships better than adversarial processes</li>
                        </ul>

                        <h4>3. Arbitration</h4>
                        <ul>
                            <li>A private judge (arbitrator) hears both sides and makes a decision</li>
                            <li>Usually binding — very limited ability to appeal</li>
                            <li>Faster than court, but can still be expensive</li>
                            <li>Often required by contracts (employment, consumer)</li>
                        </ul>

                        <h4>4. Small Claims Court</h4>
                        <ul>
                            <li>For smaller dollar amounts</li>
                            <li>No lawyer needed</li>
                            <li>Judge makes a binding decision</li>
                        </ul>

                        <h4>5. Civil Court (Litigation)</h4>
                        <ul>
                            <li>The full formal court process</li>
                            <li>Discovery, depositions, trial, potential appeal</li>
                            <li>Most expensive and time-consuming</li>
                            <li>Necessary for complex cases or large damages</li>
                        </ul>

                        <h3>Choosing the Right Option</h3>
                        <ul>
                            <li><strong>Low stakes + want to preserve relationship:</strong> Negotiate or mediate</li>
                            <li><strong>Medium stakes + need a resolution:</strong> Small claims or arbitration</li>
                            <li><strong>High stakes + need full legal protection:</strong> Civil court with an attorney</li>
                        </ul>

                        <div class="highlight">
                            <strong>Try the Least Expensive Option First:</strong> Most disputes can be resolved through direct communication or mediation. Save courts and lawyers for when other methods fail or the stakes are high.
                        </div>
                    `
                },
                {
                    id: 'statute-of-limitations',
                    title: 'Statute of Limitations — Don\'t Wait Too Long',
                    content: `
                        <h2>Statute of Limitations</h2>

                        <div class="definition">
                            <strong>Statute of Limitations:</strong> The deadline for filing a lawsuit. Miss it, and you lose your right to sue — no matter how strong your case is.
                        </div>

                        <h3>Common Statutes of Limitations</h3>
                        <table>
                            <tr><th>Claim Type</th><th>Typical Range</th></tr>
                            <tr><td>Written contract</td><td>4-6 years</td></tr>
                            <tr><td>Oral contract</td><td>2-4 years</td></tr>
                            <tr><td>Personal injury</td><td>2-3 years</td></tr>
                            <tr><td>Property damage</td><td>3-6 years</td></tr>
                            <tr><td>Employment discrimination</td><td>180-300 days (EEOC)</td></tr>
                            <tr><td>Wage claims</td><td>2-3 years</td></tr>
                            <tr><td>Fraud</td><td>3-6 years</td></tr>
                        </table>
                        <p><em>These vary significantly by state — always check your specific state's deadlines.</em></p>

                        <h3>When the Clock Starts</h3>
                        <ul>
                            <li><strong>Generally:</strong> From the date of the breach or injury</li>
                            <li><strong>Discovery rule:</strong> Some claims start from when you discovered (or should have discovered) the issue</li>
                            <li><strong>Continuing violation:</strong> For ongoing wrongs, the clock may restart with each new violation</li>
                        </ul>

                        <h3>Tolling (Pausing the Clock)</h3>
                        <ul>
                            <li>The defendant was out of state</li>
                            <li>The plaintiff was a minor</li>
                            <li>The plaintiff was mentally incapacitated</li>
                            <li>The defendant concealed the wrong (fraud)</li>
                        </ul>

                        <div class="highlight">
                            <strong>Don't Gamble with Deadlines:</strong> If you think you have a legal claim, act sooner rather than later. Statutes of limitations are strict deadlines. Consulting an attorney early — even just a free consultation — ensures you don't lose your rights by waiting too long.
                        </div>
                    `
                }
            ],
            quiz: {
                questions: [
                    {
                        question: 'What is a "material breach" of contract?',
                        options: [
                            'Any minor deviation from the contract terms',
                            'A significant failure that undermines the core purpose of the contract',
                            'A breach that involves physical materials',
                            'Breaking a contract after it expires'
                        ],
                        correct: 1,
                        explanation: 'A material breach is a significant failure that goes to the heart of the contract\'s purpose. It entitles the non-breaching party to stop performing their obligations and seek full damages.'
                    },
                    {
                        question: 'What happens if you miss the statute of limitations for filing a lawsuit?',
                        options: [
                            'You get a small extension',
                            'The court can waive it if you have a good case',
                            'You lose your right to sue — no matter how strong your case is',
                            'Nothing — there are no deadlines for lawsuits'
                        ],
                        correct: 2,
                        explanation: 'The statute of limitations is a strict deadline. Once it passes, you permanently lose the right to file a lawsuit, regardless of the merits of your case. This is why acting promptly is critical.'
                    }
                ]
            }
        }
    ]
};
