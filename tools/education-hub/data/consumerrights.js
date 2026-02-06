// Consumer Rights & Self-Protection Curriculum Data
const consumerrightsData = {
    id: 'consumerrights',
    title: 'Consumer Rights & Self-Protection',
    icon: '🛡️',
    description: 'Know your rights as a consumer — dealing with debt collectors, disputing charges, fighting scams, and protecting yourself.',
    graduationGoal: 'Confidently protect yourself in any consumer situation and fight back when companies cross the line',
    difficulty: 'beginner',
    prerequisites: [],
    learningObjectives: [
        'Understand your rights as a consumer',
        'Deal with debt collectors legally',
        'Dispute charges and billing errors',
        'Recognize and avoid scams',
        'File complaints and get results'
    ],
    relatedTracks: ['debt', 'credit', 'personalfinance'],
    resources: [
        { title: 'Consumer Financial Protection Bureau', url: 'https://www.consumerfinance.gov/' },
        { title: 'FTC Consumer Information', url: 'https://www.consumer.ftc.gov/' }
    ],
    levels: [
        {
            id: 1,
            title: 'Your Consumer Rights',
            subtitle: 'The laws that protect you every day',
            topics: [
                {
                    id: 'consumer-protection-laws',
                    title: 'Key Consumer Protection Laws',
                    content: `
                        <h2>Key Consumer Protection Laws</h2>

                        <h3>Federal Protections You Should Know</h3>
                        <ul>
                            <li><strong>Fair Debt Collection Practices Act (FDCPA):</strong> Limits what debt collectors can do — no harassment, lies, or unfair practices</li>
                            <li><strong>Fair Credit Reporting Act (FCRA):</strong> You can dispute inaccurate credit report information; agencies must investigate</li>
                            <li><strong>Truth in Lending Act (TILA):</strong> Lenders must disclose loan terms clearly</li>
                            <li><strong>Fair Credit Billing Act:</strong> Right to dispute charges on your credit card</li>
                            <li><strong>FTC Act:</strong> Prohibits unfair or deceptive business practices</li>
                            <li><strong>Magnuson-Moss Warranty Act:</strong> Requires clear warranty terms</li>
                            <li><strong>Lemon Laws:</strong> State laws protecting against defective vehicles</li>
                        </ul>

                        <h3>Your Core Rights</h3>
                        <ul>
                            <li><strong>Right to accurate information:</strong> Companies can't lie about products or services</li>
                            <li><strong>Right to dispute:</strong> You can dispute charges, debts, and credit report errors</li>
                            <li><strong>Right to cancel:</strong> Cooling-off periods for certain purchases</li>
                            <li><strong>Right to privacy:</strong> Limits on how your data is used and shared</li>
                            <li><strong>Right to fair treatment:</strong> Protection from predatory and deceptive practices</li>
                        </ul>

                        <div class="highlight">
                            <strong>Knowledge Is Power:</strong> Companies count on consumers not knowing their rights. Simply knowing these laws exist gives you leverage when dealing with businesses that try to take advantage.
                        </div>
                    `
                },
                {
                    id: 'filing-complaints',
                    title: 'Where to File Consumer Complaints',
                    content: `
                        <h2>Where to File Consumer Complaints</h2>

                        <h3>Federal Agencies</h3>
                        <ul>
                            <li><strong>FTC (Federal Trade Commission):</strong> ftc.gov/complaint — scams, fraud, deceptive business practices</li>
                            <li><strong>CFPB (Consumer Financial Protection Bureau):</strong> consumerfinance.gov — banks, lenders, credit companies, debt collectors</li>
                            <li><strong>FCC:</strong> Telecom and phone issues (robocalls, billing)</li>
                            <li><strong>FDA:</strong> Food and drug safety issues</li>
                        </ul>

                        <h3>State-Level</h3>
                        <ul>
                            <li><strong>State Attorney General:</strong> Your most powerful state-level consumer advocate</li>
                            <li><strong>State consumer protection office:</strong> Handles complaints and mediates disputes</li>
                            <li><strong>State insurance commissioner:</strong> For insurance complaints</li>
                        </ul>

                        <h3>Other Effective Channels</h3>
                        <ul>
                            <li><strong>Better Business Bureau (BBB):</strong> Companies care about BBB ratings — complaints often get responses</li>
                            <li><strong>Social media:</strong> Public complaints on Twitter/X get faster responses than phone calls</li>
                            <li><strong>Credit card chargeback:</strong> Dispute directly with your card company</li>
                            <li><strong>Small claims court:</strong> For disputes under your state's limit</li>
                        </ul>

                        <h3>The Escalation Ladder</h3>
                        <ol>
                            <li>Contact the company directly (document everything)</li>
                            <li>Escalate to a supervisor or corporate office</li>
                            <li>File a CFPB or BBB complaint</li>
                            <li>File with your state AG</li>
                            <li>Consider small claims court or an attorney</li>
                        </ol>

                        <div class="highlight">
                            <strong>The CFPB Is Your Best Friend:</strong> When you file a CFPB complaint against a bank, lender, or debt collector, the company is REQUIRED to respond within 15 days. This is often the fastest way to resolve financial disputes.
                        </div>
                    `
                }
            ],
            quiz: {
                questions: [
                    {
                        question: 'Which federal agency is most effective for complaints against banks, lenders, and debt collectors?',
                        options: [
                            'FBI',
                            'FTC',
                            'CFPB (Consumer Financial Protection Bureau) — companies must respond within 15 days',
                            'IRS'
                        ],
                        correct: 2,
                        explanation: 'The CFPB handles consumer complaints against financial companies and requires them to respond within 15 days. It\'s one of the most effective tools consumers have for resolving financial disputes.'
                    },
                    {
                        question: 'What is the recommended first step when you have a consumer complaint?',
                        options: [
                            'Immediately hire a lawyer',
                            'Post about it on social media',
                            'Contact the company directly, document everything, then escalate if unresolved',
                            'File a police report'
                        ],
                        correct: 2,
                        explanation: 'Start by contacting the company directly and documenting the interaction. If that doesn\'t resolve it, escalate to supervisors, then file formal complaints with agencies like the CFPB or state AG.'
                    }
                ]
            }
        },
        {
            id: 2,
            title: 'Dealing with Debt Collectors',
            subtitle: 'Know your rights when someone comes collecting',
            topics: [
                {
                    id: 'debt-collector-rights',
                    title: 'Your Rights Under the FDCPA',
                    content: `
                        <h2>Your Rights Under the FDCPA</h2>

                        <h3>What Debt Collectors CANNOT Do</h3>
                        <ul>
                            <li><strong>Call before 8am or after 9pm</strong></li>
                            <li><strong>Call you at work</strong> if you tell them not to</li>
                            <li><strong>Harass, threaten, or use obscene language</strong></li>
                            <li><strong>Lie about the amount owed</strong></li>
                            <li><strong>Pretend to be a lawyer or government official</strong></li>
                            <li><strong>Threaten arrest or jail</strong> (you can't go to jail for most debts)</li>
                            <li><strong>Contact third parties</strong> about your debt (except your attorney, spouse, or to find your address)</li>
                            <li><strong>Add unauthorized fees or interest</strong></li>
                            <li><strong>Contact you after you send a written "cease contact" letter</strong></li>
                        </ul>

                        <h3>What Debt Collectors MUST Do</h3>
                        <ul>
                            <li>Identify themselves as debt collectors</li>
                            <li>Send you a written "validation notice" within 5 days of first contact</li>
                            <li>Verify the debt if you dispute it in writing within 30 days</li>
                            <li>Stop collection until they verify the debt (if you disputed)</li>
                        </ul>

                        <h3>The Debt Validation Letter</h3>
                        <p>Your most powerful tool. Within 30 days of first contact, send a written letter requesting:</p>
                        <ul>
                            <li>Proof that you owe the debt</li>
                            <li>The original creditor's name</li>
                            <li>The exact amount owed and how it was calculated</li>
                            <li>Proof that the collector has the right to collect</li>
                        </ul>
                        <p>Send via certified mail. They must stop collecting until they verify.</p>

                        <div class="highlight">
                            <strong>Never Ignore Debt Collectors — But Never Just Pay Without Verification:</strong> Verify the debt is legitimate and accurate first. Many collection accounts are for wrong amounts, wrong people, or past the statute of limitations.
                        </div>
                    `
                },
                {
                    id: 'negotiating-debt',
                    title: 'Negotiating and Settling Debts',
                    content: `
                        <h2>Negotiating and Settling Debts</h2>

                        <h3>The Reality of Debt Collection</h3>
                        <ul>
                            <li>Debt collectors often buy debts for pennies on the dollar (5-10 cents per dollar)</li>
                            <li>This means they have huge room to negotiate</li>
                            <li>They'd rather get something than nothing</li>
                        </ul>

                        <h3>Negotiation Strategies</h3>
                        <ul>
                            <li><strong>Start low:</strong> Offer 25-30% of the total — they'll counter, but you set the anchor</li>
                            <li><strong>Get it in writing BEFORE you pay:</strong> The settlement agreement must be in writing</li>
                            <li><strong>"Pay for delete":</strong> Agree to pay in exchange for removing the account from your credit report (not all will agree, but always ask)</li>
                            <li><strong>Lump sum vs. payments:</strong> Lump sum gets you a better deal</li>
                            <li><strong>Statute of limitations:</strong> If the debt is past your state's SOL, they may not be able to sue you — but paying on it can restart the clock</li>
                        </ul>

                        <h3>Important Warnings</h3>
                        <ul>
                            <li><strong>Never give bank account info over the phone</strong> — use a cashier's check or money order</li>
                            <li><strong>Never admit the debt is yours</strong> until it's verified — say "I'm looking into this"</li>
                            <li><strong>Settled debts may count as taxable income</strong> if over $600 (you'll get a 1099-C)</li>
                            <li><strong>Making a payment can restart the statute of limitations</strong> in some states</li>
                        </ul>

                        <div class="highlight">
                            <strong>Everything in Writing:</strong> Never make a verbal agreement with a debt collector. Get the settlement terms — amount, "paid in full" or "settled" language, and any credit reporting agreements — in writing before you send a penny.
                        </div>
                    `
                }
            ],
            quiz: {
                questions: [
                    {
                        question: 'What should you do within 30 days of first contact from a debt collector?',
                        options: [
                            'Pay the full amount immediately',
                            'Send a written debt validation letter requesting proof of the debt',
                            'Block their phone number',
                            'Hire a lawyer'
                        ],
                        correct: 1,
                        explanation: 'Within 30 days of first contact, you have the right to send a written debt validation letter requesting proof that you owe the debt, the amount, and the original creditor. They must stop collecting until they verify it.'
                    },
                    {
                        question: 'Why do debt collectors often accept settlements for less than the full amount?',
                        options: [
                            'They\'re being generous',
                            'It\'s required by law',
                            'They often buy debts for pennies on the dollar, so any payment above their purchase price is profit',
                            'They always accept the first offer'
                        ],
                        correct: 2,
                        explanation: 'Debt collectors typically buy debts for 5-10 cents per dollar. Accepting a settlement of 25-50% of the original amount is still highly profitable for them. This is why negotiation is always worth trying.'
                    }
                ]
            }
        },
        {
            id: 3,
            title: 'Scams & Identity Theft',
            subtitle: 'Recognize, avoid, and recover',
            topics: [
                {
                    id: 'common-scams',
                    title: 'Recognizing Common Scams',
                    content: `
                        <h2>Recognizing Common Scams</h2>

                        <h3>The Universal Red Flags</h3>
                        <ul>
                            <li>Urgency: "Act now or lose your account!"</li>
                            <li>Too good to be true: "You've won $10,000!"</li>
                            <li>Unusual payment methods: Gift cards, wire transfers, cryptocurrency</li>
                            <li>Unsolicited contact: You didn't initiate the conversation</li>
                            <li>Requests for personal information via email/text/phone</li>
                            <li>Pressure not to tell anyone or verify the information</li>
                        </ul>

                        <h3>Common Scam Types</h3>
                        <ul>
                            <li><strong>Phishing:</strong> Fake emails/texts pretending to be your bank, IRS, Amazon, etc.</li>
                            <li><strong>Tech support scams:</strong> "Your computer has a virus" pop-ups or calls</li>
                            <li><strong>Romance scams:</strong> Online relationships that eventually ask for money</li>
                            <li><strong>Job scams:</strong> Fake job offers that require upfront payment or personal info</li>
                            <li><strong>IRS/government impersonation:</strong> "You owe taxes, pay now or be arrested"</li>
                            <li><strong>Rental scams:</strong> Fake listings for apartments that don't exist</li>
                            <li><strong>Investment scams:</strong> Guaranteed returns, crypto schemes, MLMs</li>
                            <li><strong>Grandparent scam:</strong> "Your grandchild is in trouble and needs money"</li>
                        </ul>

                        <h3>How to Verify</h3>
                        <ul>
                            <li>Never click links in unsolicited emails — go to the website directly</li>
                            <li>Call the company using the number on their official website (not the number in the message)</li>
                            <li>The IRS will NEVER call you demanding immediate payment</li>
                            <li>No legitimate company asks for payment via gift cards</li>
                            <li>If unsure, hang up and call back using a verified number</li>
                        </ul>

                        <div class="highlight">
                            <strong>The #1 Rule:</strong> Legitimate organizations will never pressure you to act immediately. If someone creates urgency and won't let you verify, it's a scam. Take your time.
                        </div>
                    `
                },
                {
                    id: 'identity-theft-recovery',
                    title: 'Identity Theft: Prevention & Recovery',
                    content: `
                        <h2>Identity Theft: Prevention & Recovery</h2>

                        <h3>Prevention</h3>
                        <ul>
                            <li><strong>Freeze your credit:</strong> Free at all three bureaus (Equifax, Experian, TransUnion) — prevents new accounts being opened in your name</li>
                            <li><strong>Strong, unique passwords:</strong> Use a password manager</li>
                            <li><strong>Two-factor authentication:</strong> Enable on all financial accounts</li>
                            <li><strong>Monitor credit reports:</strong> AnnualCreditReport.com for free reports</li>
                            <li><strong>Shred documents:</strong> Bank statements, medical records, anything with personal info</li>
                            <li><strong>Be cautious with your SSN:</strong> Don't give it out unless legally required</li>
                        </ul>

                        <h3>If You're a Victim</h3>
                        <ol>
                            <li><strong>Place a fraud alert</strong> with all three credit bureaus (call one, they notify all three)</li>
                            <li><strong>Review credit reports</strong> for unauthorized accounts</li>
                            <li><strong>File a report</strong> at IdentityTheft.gov (creates a recovery plan)</li>
                            <li><strong>File a police report</strong> (may be needed for disputes)</li>
                            <li><strong>Contact affected institutions</strong> (banks, credit cards) to close fraudulent accounts</li>
                            <li><strong>Dispute fraudulent charges and accounts</strong> in writing</li>
                            <li><strong>Consider an identity theft freeze</strong> (stronger than a fraud alert)</li>
                        </ol>

                        <h3>Rights as a Victim</h3>
                        <ul>
                            <li>Fraud alerts are free and last 1 year (extended for confirmed victims: 7 years)</li>
                            <li>Companies must investigate disputed charges</li>
                            <li>You're not responsible for unauthorized charges over $50 on credit cards (most companies waive even that)</li>
                            <li>Credit bureaus must remove fraudulent information once verified</li>
                        </ul>

                        <div class="highlight">
                            <strong>Freeze Your Credit Today:</strong> It's free, takes 10 minutes, and prevents the most common form of identity theft (new accounts opened in your name). You can temporarily lift the freeze anytime you need to apply for credit.
                        </div>
                    `
                }
            ],
            quiz: {
                questions: [
                    {
                        question: 'What is the single most effective step to prevent identity theft?',
                        options: [
                            'Checking your email carefully',
                            'Using cash for all purchases',
                            'Freezing your credit at all three bureaus — it\'s free and prevents new accounts being opened in your name',
                            'Avoiding the internet'
                        ],
                        correct: 2,
                        explanation: 'A credit freeze is the most effective prevention measure because it stops anyone (including you, until you lift it) from opening new credit accounts in your name. It\'s free and takes about 10 minutes.'
                    },
                    {
                        question: 'What is the #1 red flag that indicates a scam?',
                        options: [
                            'They contact you via email',
                            'They have a professional-looking website',
                            'They create urgency and pressure you to act immediately without verifying',
                            'They ask for your name'
                        ],
                        correct: 2,
                        explanation: 'Urgency and pressure are the hallmarks of scams. Legitimate organizations will never pressure you into immediate action without allowing you to verify the situation through independent channels.'
                    }
                ]
            }
        },
        {
            id: 4,
            title: 'Credit Disputes & Chargebacks',
            subtitle: 'Fighting errors and fraud on your accounts',
            topics: [
                {
                    id: 'credit-report-disputes',
                    title: 'Disputing Credit Report Errors',
                    content: `
                        <h2>Disputing Credit Report Errors</h2>

                        <h3>How Common Are Errors?</h3>
                        <ul>
                            <li>FTC study found 1 in 4 consumers have errors on their credit reports</li>
                            <li>Errors can lower your score, increase interest rates, and affect job applications</li>
                            <li>You have the RIGHT to dispute and get errors corrected</li>
                        </ul>

                        <h3>Common Errors to Look For</h3>
                        <ul>
                            <li>Accounts that aren't yours</li>
                            <li>Incorrect balances or credit limits</li>
                            <li>Payments reported as late when they weren't</li>
                            <li>Closed accounts reported as open (or vice versa)</li>
                            <li>Same debt listed multiple times</li>
                            <li>Incorrect personal information</li>
                            <li>Old negative items that should have fallen off (7-10 years)</li>
                        </ul>

                        <h3>How to Dispute</h3>
                        <ol>
                            <li>Get your free reports from AnnualCreditReport.com</li>
                            <li>Identify all errors</li>
                            <li>Write a dispute letter to each bureau with the error (mail is better than online)</li>
                            <li>Include copies (not originals) of supporting documents</li>
                            <li>Send via certified mail with return receipt</li>
                            <li>Bureau has 30 days to investigate and respond</li>
                            <li>If not resolved, file with the CFPB</li>
                        </ol>

                        <h3>Your Rights Under the FCRA</h3>
                        <ul>
                            <li>Bureaus must investigate disputes within 30 days</li>
                            <li>If they can't verify the information, they must remove it</li>
                            <li>You can add a personal statement to your credit report</li>
                            <li>Furnishers (companies that report to bureaus) must correct inaccurate information</li>
                        </ul>

                        <div class="highlight">
                            <strong>Dispute in Writing:</strong> While credit bureaus offer online dispute forms, sending a dispute letter via certified mail creates stronger documentation and is taken more seriously. It also starts legal deadlines.
                        </div>
                    `
                },
                {
                    id: 'credit-card-chargebacks',
                    title: 'Credit Card Chargebacks',
                    content: `
                        <h2>Credit Card Chargebacks</h2>

                        <h3>What Is a Chargeback?</h3>
                        <p>A chargeback is a credit card charge reversal. Your credit card company takes the money back from the merchant and returns it to you.</p>

                        <h3>When to File a Chargeback</h3>
                        <ul>
                            <li>Unauthorized charges (fraud)</li>
                            <li>Items not received</li>
                            <li>Significantly different from what was described</li>
                            <li>Duplicate charges</li>
                            <li>Merchant refused to issue a refund for a valid return</li>
                            <li>Subscription charges after cancellation</li>
                        </ul>

                        <h3>How to File</h3>
                        <ol>
                            <li>Try to resolve with the merchant first (document your attempts)</li>
                            <li>Contact your credit card company (call, app, or write)</li>
                            <li>Provide details: merchant, amount, date, reason for dispute</li>
                            <li>Submit supporting evidence (receipts, emails, screenshots)</li>
                            <li>Card company issues a temporary credit while investigating</li>
                            <li>Investigation takes 30-90 days</li>
                        </ol>

                        <h3>Time Limits</h3>
                        <ul>
                            <li>Generally 60 days from the statement date for billing errors</li>
                            <li>120 days from the transaction for Visa/Mastercard disputes</li>
                            <li>Don't wait — file as soon as you identify the issue</li>
                        </ul>

                        <h3>Debit Card Disputes</h3>
                        <ul>
                            <li>You have fewer protections with debit cards than credit cards</li>
                            <li>Liability can be up to $500 if reported after 2 days but within 60 days</li>
                            <li>After 60 days, you could lose everything</li>
                            <li><strong>This is why credit cards are safer for purchases than debit cards</strong></li>
                        </ul>

                        <div class="highlight">
                            <strong>Use Credit Cards for Purchases:</strong> Credit cards offer significantly stronger consumer protections than debit cards. If a merchant won't refund you, a credit card chargeback is your safety net. With debit cards, the money is already gone from your account.
                        </div>
                    `
                }
            ],
            quiz: {
                questions: [
                    {
                        question: 'How long does a credit bureau have to investigate a dispute?',
                        options: [
                            '10 days',
                            '30 days — and if they can\'t verify the information, they must remove it',
                            '90 days',
                            'There\'s no time limit'
                        ],
                        correct: 1,
                        explanation: 'Under the FCRA, credit bureaus must investigate disputes within 30 days. If they cannot verify the disputed information with the creditor, they are required to remove it from your report.'
                    },
                    {
                        question: 'Why are credit cards safer than debit cards for purchases?',
                        options: [
                            'Credit cards have lower interest rates',
                            'Credit cards offer stronger consumer protections and chargeback rights — with debit cards, money is immediately taken from your account',
                            'Debit cards aren\'t accepted at most stores',
                            'There\'s no difference'
                        ],
                        correct: 1,
                        explanation: 'Credit cards offer stronger fraud protections (max $50 liability) and chargeback rights. With debit cards, money is immediately removed from your bank account, and your liability and recovery options are more limited.'
                    }
                ]
            }
        },
        {
            id: 5,
            title: 'Warranties, Returns & Lemon Laws',
            subtitle: 'When products fail, you have rights',
            topics: [
                {
                    id: 'warranty-rights',
                    title: 'Understanding Warranties',
                    content: `
                        <h2>Understanding Warranties</h2>

                        <h3>Types of Warranties</h3>
                        <ul>
                            <li><strong>Express warranty:</strong> Written or verbal promises about the product (ads count!)</li>
                            <li><strong>Implied warranty of merchantability:</strong> The product works as expected for its purpose (exists even without a written warranty)</li>
                            <li><strong>Implied warranty of fitness:</strong> If the seller recommended it for your specific purpose, it should work for that purpose</li>
                            <li><strong>Extended warranty/service plan:</strong> Optional additional coverage you purchase</li>
                        </ul>

                        <h3>Your Rights (Magnuson-Moss Warranty Act)</h3>
                        <ul>
                            <li>Warranties must be available for you to read BEFORE purchase</li>
                            <li>Must be written in plain language</li>
                            <li>"Full warranty" means they must fix or replace within reasonable time at no charge</li>
                            <li>"Limited warranty" has restrictions (parts only, time limits, etc.)</li>
                            <li>Companies CANNOT require you to use their repair service to maintain the warranty (right to repair)</li>
                        </ul>

                        <h3>When the Product Fails</h3>
                        <ol>
                            <li>Keep your receipt and warranty documentation</li>
                            <li>Contact the manufacturer or retailer</li>
                            <li>Document the defect (photos, videos)</li>
                            <li>Request repair, replacement, or refund</li>
                            <li>If denied, reference the warranty terms and applicable law</li>
                            <li>Escalate: CFPB complaint, state AG, small claims court</li>
                        </ol>

                        <div class="highlight">
                            <strong>"As-Is" Doesn't Always Mean No Warranty:</strong> Even "as-is" purchases may have implied warranties in some states. And if the seller made specific claims about the product (even verbally), those claims may constitute an express warranty.
                        </div>
                    `
                },
                {
                    id: 'lemon-laws',
                    title: 'Lemon Laws & Vehicle Protections',
                    content: `
                        <h2>Lemon Laws & Vehicle Protections</h2>

                        <h3>What Are Lemon Laws?</h3>
                        <ul>
                            <li>State laws that protect buyers of defective vehicles (and sometimes other products)</li>
                            <li>If a new vehicle has a substantial defect that can't be fixed after a reasonable number of attempts, you may be entitled to a replacement or refund</li>
                        </ul>

                        <h3>What Typically Qualifies</h3>
                        <ul>
                            <li>A substantial defect covered by warranty</li>
                            <li>Multiple repair attempts for the same issue (usually 3-4)</li>
                            <li>Vehicle out of service for extended period (usually 30+ days total)</li>
                            <li>Defect must substantially impair use, value, or safety</li>
                            <li>Must be within the warranty period or lemon law time limit</li>
                        </ul>

                        <h3>Your Options If You Have a Lemon</h3>
                        <ul>
                            <li><strong>Replacement:</strong> A comparable new vehicle</li>
                            <li><strong>Refund:</strong> Purchase price minus a usage deduction</li>
                            <li><strong>Cash settlement:</strong> Negotiated amount for diminished value</li>
                        </ul>

                        <h3>Used Car Protections</h3>
                        <ul>
                            <li>Some states extend lemon laws to used cars (including California)</li>
                            <li>FTC Used Car Rule requires dealers to display a Buyer's Guide</li>
                            <li>"As-is" means no warranty — but fraud or misrepresentation is still actionable</li>
                            <li>If a dealer hid known defects, that's fraud regardless of "as-is"</li>
                        </ul>

                        <div class="highlight">
                            <strong>Document Everything:</strong> Keep every repair receipt, communication with the dealer, and written record of how the defect affects your use of the vehicle. This documentation is essential for a lemon law claim.
                        </div>
                    `
                }
            ],
            quiz: {
                questions: [
                    {
                        question: 'What is an "implied warranty of merchantability"?',
                        options: [
                            'A written guarantee from the manufacturer',
                            'A warranty that exists by law — the product should work as expected for its intended purpose, even without a written warranty',
                            'A warranty you purchase separately',
                            'A warranty that only applies to vehicles'
                        ],
                        correct: 1,
                        explanation: 'The implied warranty of merchantability exists by law and means that a product should work as a reasonable consumer would expect for its intended purpose. It applies even when there is no written warranty.'
                    },
                    {
                        question: 'When might you have a lemon law claim?',
                        options: [
                            'When your car needs an oil change',
                            'When you don\'t like the car\'s color',
                            'When a new vehicle has a substantial defect that can\'t be fixed after multiple repair attempts',
                            'Only for vehicles over 10 years old'
                        ],
                        correct: 2,
                        explanation: 'Lemon laws typically apply when a new vehicle has a substantial defect covered by warranty that can\'t be fixed after a reasonable number of attempts (usually 3-4) or has been out of service for an extended period.'
                    }
                ]
            }
        }
    ]
};
