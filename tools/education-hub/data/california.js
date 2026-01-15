// California Law & Rights Curriculum Data
const californiaData = {
    id: 'california',
    title: 'California Law & Rights',
    icon: '⚖️',
    description: 'Know your rights in California—police interactions, housing, employment, and more.',
    graduationGoal: 'Know your rights and how to protect yourself in California',
    levels: [
        {
            id: 1,
            title: 'Constitutional Rights',
            subtitle: 'Your fundamental rights in practice',
            topics: [
                {
                    id: 'first-amendment',
                    title: 'First Amendment Rights',
                    content: `
                        <h2>First Amendment Rights</h2>
                        <h3>What's Protected</h3>
                        <ul>
                            <li><strong>Speech:</strong> Express opinions, criticize government</li>
                            <li><strong>Press:</strong> Report news, publish information</li>
                            <li><strong>Religion:</strong> Practice (or not) any religion</li>
                            <li><strong>Assembly:</strong> Gather peacefully, protest</li>
                            <li><strong>Petition:</strong> Ask government for change</li>
                        </ul>
                        <h3>What's NOT Protected</h3>
                        <ul>
                            <li>True threats of violence</li>
                            <li>Incitement to imminent lawless action</li>
                            <li>Fighting words (direct provocation)</li>
                            <li>Defamation (knowingly false statements that harm)</li>
                            <li>Some obscenity</li>
                        </ul>
                        <h3>Protest Rights in California</h3>
                        <ul>
                            <li>Can protest on public property (sidewalks, parks)</li>
                            <li>Permits may be required for large gatherings</li>
                            <li>Can record police in public (with some limits)</li>
                            <li>Cannot block traffic without permit</li>
                            <li>Private property owners can remove you</li>
                        </ul>
                        <div class="highlight">
                            <strong>Key Point:</strong> First Amendment protects you from GOVERNMENT censorship, not private companies (Twitter, your employer can still restrict your speech).
                        </div>
                    `
                },
                {
                    id: 'fourth-fifth-amendment',
                    title: 'Fourth & Fifth Amendment Rights',
                    content: `
                        <h2>Fourth & Fifth Amendment Rights</h2>
                        <h3>Fourth Amendment: Search & Seizure</h3>
                        <ul>
                            <li>Protection against unreasonable searches</li>
                            <li>Police generally need a warrant</li>
                            <li><strong>Exceptions:</strong> Consent, plain view, vehicle searches, exigent circumstances, search incident to arrest</li>
                        </ul>
                        <h3>You Have the Right To:</h3>
                        <ul>
                            <li>Refuse consent to a search</li>
                            <li>Ask "Am I free to go?"</li>
                            <li>Ask "Do you have a warrant?"</li>
                            <li>Say "I do not consent to a search"</li>
                        </ul>
                        <h3>Fifth Amendment: Self-Incrimination</h3>
                        <ul>
                            <li>Right to remain silent</li>
                            <li>Cannot be forced to testify against yourself</li>
                            <li>Must invoke it clearly: "I am exercising my right to remain silent"</li>
                        </ul>
                        <h3>Miranda Rights</h3>
                        <ul>
                            <li>Required when: In custody + being interrogated</li>
                            <li>Right to remain silent</li>
                            <li>Anything you say can be used against you</li>
                            <li>Right to an attorney</li>
                            <li>If you can't afford one, one will be provided</li>
                        </ul>
                        <div class="highlight">
                            <strong>Remember:</strong> You must clearly invoke your rights. Silence alone may not be enough. Say: "I invoke my right to remain silent. I want a lawyer."
                        </div>
                    `
                },
                {
                    id: 'fourteenth-amendment',
                    title: 'Fourteenth Amendment: Equal Protection',
                    content: `
                        <h2>Fourteenth Amendment: Equal Protection</h2>
                        <h3>What It Guarantees</h3>
                        <ul>
                            <li>Equal protection under the law</li>
                            <li>Due process (fair legal procedures)</li>
                            <li>Applies Bill of Rights to states</li>
                        </ul>
                        <h3>Protected Classes</h3>
                        <ul>
                            <li>Race and national origin</li>
                            <li>Religion</li>
                            <li>Sex/gender</li>
                            <li>California adds: Sexual orientation, gender identity, disability, age, and more</li>
                        </ul>
                        <h3>What This Means</h3>
                        <ul>
                            <li>Government cannot discriminate based on protected characteristics</li>
                            <li>California law extends protections to private discrimination (housing, employment)</li>
                            <li>You have a right to equal treatment in public services</li>
                        </ul>
                        <div class="highlight">
                            <strong>California Advantage:</strong> California's civil rights laws are broader than federal protections. More categories are protected, and there's often stronger enforcement.
                        </div>
                    `
                }
            ],
            quiz: [
                {
                    question: 'What does the Fourth Amendment protect against?',
                    options: [
                        'Free speech restrictions',
                        'Unreasonable searches and seizures',
                        'Self-incrimination',
                        'Cruel punishment'
                    ],
                    correct: 1,
                    explanation: 'The Fourth Amendment protects against unreasonable searches and seizures by the government. Police generally need a warrant or an exception to search you.'
                },
                {
                    question: 'How should you invoke your Fifth Amendment right to remain silent?',
                    options: [
                        'Just stay quiet',
                        'Say "I invoke my right to remain silent"',
                        'Shake your head',
                        'Walk away'
                    ],
                    correct: 1,
                    explanation: 'Courts have ruled you must clearly and unambiguously invoke your right to silence. Say: "I am invoking my right to remain silent."'
                },
                {
                    question: 'Does the First Amendment protect your speech from your employer?',
                    options: [
                        'Yes, completely',
                        'No - it only protects against government censorship',
                        'Only in California',
                        'Only for political speech'
                    ],
                    correct: 1,
                    explanation: 'The First Amendment only restricts government censorship, not private actors. Your employer can generally restrict your speech (with some exceptions for protected activities).'
                }
            ]
        },
        {
            id: 2,
            title: 'Interactions with Police',
            subtitle: 'Know your rights during police encounters',
            topics: [
                {
                    id: 'traffic-stops',
                    title: 'Traffic Stops',
                    content: `
                        <h2>Traffic Stops in California</h2>
                        <h3>What Police Can Do</h3>
                        <ul>
                            <li>Ask for license, registration, insurance</li>
                            <li>Ask you to exit the vehicle</li>
                            <li>Conduct "Terry frisk" for weapons if reasonable suspicion</li>
                            <li>Search the vehicle with probable cause or consent</li>
                        </ul>
                        <h3>What You Should Do</h3>
                        <ul>
                            <li>Pull over safely, turn on interior light at night</li>
                            <li>Keep hands visible on steering wheel</li>
                            <li>Be calm and polite</li>
                            <li>Provide license, registration, insurance when asked</li>
                            <li>You CAN refuse to answer other questions</li>
                        </ul>
                        <h3>What You Can Say</h3>
                        <div class="example">
                            "Officer, I'd prefer not to answer questions."<br>
                            "I do not consent to a search."<br>
                            "Am I being detained or am I free to go?"<br>
                            "I'd like to remain silent."
                        </div>
                        <h3>California Specific</h3>
                        <ul>
                            <li>Passengers don't have to provide ID (unless arrested)</li>
                            <li>You can record the stop</li>
                            <li>Police must tell you why you're stopped</li>
                        </ul>
                        <div class="highlight">
                            <strong>Safety First:</strong> Assert your rights calmly. Arguing on the roadside won't help—challenge it in court later. Your safety is the priority.
                        </div>
                    `
                },
                {
                    id: 'street-encounters',
                    title: 'Street Encounters',
                    content: `
                        <h2>Street Encounters with Police</h2>
                        <h3>Three Types of Encounters</h3>
                        <ol>
                            <li><strong>Consensual Contact:</strong> You're free to leave, don't have to talk</li>
                            <li><strong>Detention:</strong> Reasonable suspicion of crime, brief hold</li>
                            <li><strong>Arrest:</strong> Probable cause, not free to leave</li>
                        </ol>
                        <h3>The Key Question</h3>
                        <div class="example">
                            "Officer, am I being detained or am I free to go?"
                        </div>
                        <p>If not detained, you can leave. If detained, you can invoke your rights.</p>
                        <h3>During a Detention</h3>
                        <ul>
                            <li>Stay calm, keep hands visible</li>
                            <li>You can refuse to answer questions</li>
                            <li>You can refuse searches</li>
                            <li>You MUST provide your name if asked in California</li>
                            <li>Don't resist physically—challenge it legally later</li>
                        </ul>
                        <h3>Recording Police</h3>
                        <ul>
                            <li>Legal in California in public</li>
                            <li>Stay at safe distance, don't interfere</li>
                            <li>Police cannot order you to stop recording</li>
                            <li>Cannot delete your recordings</li>
                        </ul>
                        <div class="highlight">
                            <strong>Document Everything:</strong> If you believe your rights were violated, write down badge numbers, times, witness names. File complaint within 1 year.
                        </div>
                    `
                },
                {
                    id: 'if-arrested',
                    title: 'If You\'re Arrested',
                    content: `
                        <h2>If You're Arrested</h2>
                        <h3>Your Rights</h3>
                        <ul>
                            <li>You have the right to remain silent—use it</li>
                            <li>You have the right to an attorney</li>
                            <li>If you can't afford one, a public defender will be provided</li>
                            <li>You have the right to know the charges</li>
                            <li>You have the right to a phone call</li>
                        </ul>
                        <h3>What to Say</h3>
                        <div class="example">
                            "I am invoking my right to remain silent."<br>
                            "I want to speak to a lawyer."<br>
                            Then: STOP TALKING. Don't try to explain.
                        </div>
                        <h3>What NOT to Do</h3>
                        <ul>
                            <li>Don't resist arrest physically (even if wrongful)</li>
                            <li>Don't try to explain or talk your way out</li>
                            <li>Don't consent to searches</li>
                            <li>Don't sign anything without a lawyer</li>
                            <li>Don't discuss your case on jail phones (recorded)</li>
                        </ul>
                        <h3>California Bail</h3>
                        <ul>
                            <li>Some offenses allow release on own recognizance</li>
                            <li>Bail schedules set by county</li>
                            <li>Bail reform may affect release conditions</li>
                        </ul>
                        <div class="highlight">
                            <strong>The Rule:</strong> Say "I want a lawyer" and then stay silent. Everything you say can and will be used against you. Let your attorney speak for you.
                        </div>
                    `
                }
            ],
            quiz: [
                {
                    question: 'During a traffic stop, what MUST you provide to police in California?',
                    options: [
                        'Answer all questions',
                        'License, registration, and insurance',
                        'Your phone password',
                        'Permission to search your car'
                    ],
                    correct: 1,
                    explanation: 'You must provide license, registration, and proof of insurance. You don\'t have to answer questions or consent to searches.'
                },
                {
                    question: 'What is the first question to ask during a police encounter?',
                    options: [
                        'What did I do?',
                        'Can I leave?',
                        'Am I being detained or am I free to go?',
                        'Where is your badge?'
                    ],
                    correct: 2,
                    explanation: '"Am I being detained or am I free to go?" determines whether you must stay. If you\'re free to go, you can leave. If detained, invoke your rights.'
                },
                {
                    question: 'If you\'re arrested, what should you do?',
                    options: [
                        'Try to explain what happened',
                        'Say "I want a lawyer" and remain silent',
                        'Resist the arrest',
                        'Agree to cooperate fully'
                    ],
                    correct: 1,
                    explanation: 'Say "I want a lawyer" and then remain completely silent. Don\'t try to explain—anything you say can be used against you. Let your attorney handle it.'
                }
            ]
        },
        {
            id: 3,
            title: 'Tenant & Housing Rights',
            subtitle: 'Know your rights as a renter in California',
            topics: [
                {
                    id: 'tenant-protections',
                    title: 'California Tenant Protections',
                    content: `
                        <h2>California Tenant Protections</h2>
                        <h3>Statewide Rent Control (AB 1482)</h3>
                        <ul>
                            <li>Applies to buildings 15+ years old</li>
                            <li>Rent increases capped at 5% + local inflation (max 10%)</li>
                            <li>"Just cause" eviction required after 12 months</li>
                            <li>Exemptions: Single-family homes (most), new construction</li>
                        </ul>
                        <h3>Just Cause Eviction</h3>
                        <p>After 12 months of tenancy, landlord needs a valid reason:</p>
                        <ul>
                            <li><strong>At-fault:</strong> Non-payment, lease violation, nuisance</li>
                            <li><strong>No-fault:</strong> Owner move-in, substantial remodel, withdrawal from rental market</li>
                            <li>No-fault requires relocation assistance (1 month rent)</li>
                        </ul>
                        <h3>Security Deposits</h3>
                        <ul>
                            <li>Max: 2 months rent (unfurnished), 3 months (furnished)</li>
                            <li>Must return within 21 days after move-out</li>
                            <li>Itemized statement required for any deductions</li>
                            <li>Normal wear and tear is NOT deductible</li>
                        </ul>
                        <div class="highlight">
                            <strong>Know Your City:</strong> Many California cities (LA, SF, Oakland, etc.) have STRONGER local rent control. Check your city's specific rules.
                        </div>
                    `
                },
                {
                    id: 'habitability-repairs',
                    title: 'Habitability and Repairs',
                    content: `
                        <h2>Habitability and Repairs</h2>
                        <h3>Your Right to Habitable Housing</h3>
                        <p>Landlords MUST provide and maintain:</p>
                        <ul>
                            <li>Waterproofing and weather protection</li>
                            <li>Working plumbing, heating, electricity</li>
                            <li>Clean and sanitary conditions</li>
                            <li>Working smoke and CO detectors</li>
                            <li>Proper trash receptacles</li>
                            <li>Floors, stairs, railings in good repair</li>
                            <li>Deadbolt locks on entry doors</li>
                        </ul>
                        <h3>Repair Request Process</h3>
                        <ol>
                            <li>Request repairs in WRITING (keep copy)</li>
                            <li>Landlord must respond within 30 days (sooner for emergencies)</li>
                            <li>If they don't respond, you have options</li>
                        </ol>
                        <h3>If Landlord Won't Repair</h3>
                        <ul>
                            <li><strong>"Repair and deduct":</strong> Fix it yourself, deduct from rent (up to 1 month, max 2x/year)</li>
                            <li><strong>Withhold rent:</strong> Risky—must deposit into escrow account</li>
                            <li><strong>Report to code enforcement</strong></li>
                            <li><strong>Sue for rent reduction</strong></li>
                        </ul>
                        <div class="highlight">
                            <strong>Document Everything:</strong> Photos, videos, written requests with dates. Paper trail is essential if disputes go to court.
                        </div>
                    `
                },
                {
                    id: 'eviction-process',
                    title: 'The Eviction Process',
                    content: `
                        <h2>The Eviction Process in California</h2>
                        <h3>Notice Requirements</h3>
                        <ul>
                            <li><strong>3-Day Notice:</strong> Non-payment of rent, nuisance</li>
                            <li><strong>30-Day Notice:</strong> Tenancy under 1 year</li>
                            <li><strong>60-Day Notice:</strong> Tenancy over 1 year</li>
                            <li><strong>90-Day Notice:</strong> Section 8/subsidized housing</li>
                        </ul>
                        <h3>What Landlord Must Do</h3>
                        <ol>
                            <li>Serve proper written notice</li>
                            <li>Wait for notice period to expire</li>
                            <li>File "unlawful detainer" lawsuit</li>
                            <li>Serve lawsuit papers on tenant</li>
                            <li>Win in court</li>
                            <li>Get sheriff to enforce</li>
                        </ol>
                        <h3>Your Rights During Eviction</h3>
                        <ul>
                            <li>Stay until court orders you out</li>
                            <li>Respond to lawsuit within 5 days</li>
                            <li>Request a trial</li>
                            <li>Raise defenses (retaliation, discrimination, habitability)</li>
                            <li>Landlord cannot: change locks, shut off utilities, remove belongings</li>
                        </ul>
                        <h3>Self-Help Eviction is ILLEGAL</h3>
                        <p>Landlord cannot:</p>
                        <ul>
                            <li>Lock you out</li>
                            <li>Remove your belongings</li>
                            <li>Shut off utilities</li>
                            <li>Harass you into leaving</li>
                        </ul>
                        <div class="highlight">
                            <strong>Get Help:</strong> If facing eviction, contact a legal aid organization immediately. Many offer free help to tenants.
                        </div>
                    `
                }
            ],
            quiz: [
                {
                    question: 'How much can a landlord raise rent annually under California state law (AB 1482)?',
                    options: ['Any amount', '5% + local inflation (max 10%)', '3%', '20%'],
                    correct: 1,
                    explanation: 'Under AB 1482, rent increases are capped at 5% plus local inflation, with a maximum of 10% per year for covered properties.'
                },
                {
                    question: 'How long does a landlord have to return your security deposit?',
                    options: ['7 days', '14 days', '21 days', '30 days'],
                    correct: 2,
                    explanation: 'California law requires landlords to return security deposits within 21 days of move-out, along with an itemized statement of any deductions.'
                },
                {
                    question: 'What is "self-help eviction"?',
                    options: [
                        'A valid eviction method',
                        'Illegal acts like changing locks or shutting off utilities',
                        'When tenants leave voluntarily',
                        'A type of notice'
                    ],
                    correct: 1,
                    explanation: 'Self-help eviction (changing locks, removing belongings, shutting off utilities) is ILLEGAL in California. Only a sheriff can remove a tenant after a court order.'
                }
            ]
        },
        {
            id: 4,
            title: 'Employment Rights',
            subtitle: 'Know your rights in the workplace',
            topics: [
                {
                    id: 'wage-rights',
                    title: 'Wage and Hour Rights',
                    content: `
                        <h2>Wage and Hour Rights in California</h2>
                        <h3>Minimum Wage (2024)</h3>
                        <ul>
                            <li>California: $16/hour statewide</li>
                            <li>Fast food: $20/hour</li>
                            <li>Healthcare: $23/hour (rising to $25)</li>
                            <li>Many cities higher (SF, LA, etc.)</li>
                        </ul>
                        <h3>Overtime</h3>
                        <ul>
                            <li>Over 8 hours/day: 1.5x pay</li>
                            <li>Over 12 hours/day: 2x pay</li>
                            <li>7th consecutive day: 1.5x (first 8 hours), 2x after</li>
                            <li>Over 40 hours/week: 1.5x</li>
                        </ul>
                        <h3>Meal and Rest Breaks</h3>
                        <ul>
                            <li><strong>Meal break:</strong> 30 min unpaid after 5 hours</li>
                            <li><strong>Rest break:</strong> 10 min paid per 4 hours worked</li>
                            <li>Employer must PROVIDE breaks (not just allow)</li>
                            <li>Missed breaks = 1 hour extra pay penalty</li>
                        </ul>
                        <h3>Paystub Requirements</h3>
                        <ul>
                            <li>Must receive itemized paystub</li>
                            <li>Shows hours, rates, deductions</li>
                            <li>Penalty for inaccurate paystubs: $50 per violation</li>
                        </ul>
                        <div class="highlight">
                            <strong>Wage Theft:</strong> If your employer isn't paying correctly, file a claim with the Labor Commissioner. You can recover back wages, penalties, and interest.
                        </div>
                    `
                },
                {
                    id: 'discrimination-harassment',
                    title: 'Discrimination and Harassment',
                    content: `
                        <h2>Workplace Discrimination and Harassment</h2>
                        <h3>Protected Characteristics (California)</h3>
                        <ul>
                            <li>Race, color, ancestry, national origin</li>
                            <li>Religion, age (40+)</li>
                            <li>Disability (physical and mental)</li>
                            <li>Sex, gender, gender identity, gender expression</li>
                            <li>Sexual orientation</li>
                            <li>Marital status, pregnancy</li>
                            <li>Military/veteran status</li>
                            <li>Medical condition, genetic information</li>
                        </ul>
                        <h3>What's Prohibited</h3>
                        <ul>
                            <li>Refusing to hire based on protected characteristic</li>
                            <li>Unequal pay for equal work</li>
                            <li>Harassment based on protected characteristic</li>
                            <li>Retaliation for reporting discrimination</li>
                        </ul>
                        <h3>Sexual Harassment</h3>
                        <ul>
                            <li><strong>Quid pro quo:</strong> Benefits conditioned on sexual favors</li>
                            <li><strong>Hostile environment:</strong> Severe or pervasive conduct</li>
                            <li>Includes verbal, physical, visual harassment</li>
                            <li>Employers liable for supervisor harassment</li>
                        </ul>
                        <h3>Filing a Complaint</h3>
                        <ol>
                            <li>Report internally first (if safe)</li>
                            <li>File with California Civil Rights Department (CRD)</li>
                            <li>Or file with federal EEOC</li>
                            <li>Deadline: 3 years in California</li>
                        </ol>
                        <div class="highlight">
                            <strong>Document Everything:</strong> Keep copies of communications, write down incidents with dates and witnesses. This evidence is crucial.
                        </div>
                    `
                },
                {
                    id: 'at-will-wrongful',
                    title: 'At-Will Employment and Wrongful Termination',
                    content: `
                        <h2>At-Will Employment and Wrongful Termination</h2>
                        <h3>At-Will Employment</h3>
                        <p>California is an "at-will" state, meaning:</p>
                        <ul>
                            <li>Employer can fire you for any reason (or no reason)</li>
                            <li>You can quit for any reason</li>
                            <li>BUT there are major exceptions...</li>
                        </ul>
                        <h3>Illegal Reasons to Fire</h3>
                        <ul>
                            <li>Discrimination based on protected characteristics</li>
                            <li>Retaliation for reporting violations</li>
                            <li>Retaliation for filing workers' comp claim</li>
                            <li>Refusing to commit illegal acts</li>
                            <li>Taking protected leave (FMLA, CFRA)</li>
                            <li>Whistleblowing</li>
                        </ul>
                        <h3>Protected Activities</h3>
                        <ul>
                            <li>Reporting safety violations</li>
                            <li>Discussing wages with coworkers</li>
                            <li>Filing discrimination complaints</li>
                            <li>Requesting reasonable accommodation</li>
                            <li>Taking family/medical leave</li>
                        </ul>
                        <h3>If You're Wrongfully Terminated</h3>
                        <ol>
                            <li>Request termination reason in writing</li>
                            <li>File for unemployment</li>
                            <li>Consult an employment attorney</li>
                            <li>Document everything from your time there</li>
                        </ol>
                        <div class="highlight">
                            <strong>Time Limits:</strong> Wrongful termination claims have deadlines. Consult a lawyer quickly—many offer free consultations.
                        </div>
                    `
                }
            ],
            quiz: [
                {
                    question: 'When is overtime required in California?',
                    options: [
                        'Only after 40 hours in a week',
                        'After 8 hours in a day OR 40 hours in a week',
                        'After 10 hours in a day',
                        'Never required'
                    ],
                    correct: 1,
                    explanation: 'California requires overtime after 8 hours in a single day AND after 40 hours in a week. Daily overtime is unique to California.'
                },
                {
                    question: 'How long do you have to file a discrimination complaint in California?',
                    options: ['1 year', '2 years', '3 years', '180 days'],
                    correct: 2,
                    explanation: 'In California, you have 3 years to file a discrimination complaint with the Civil Rights Department (CRD). Federal EEOC deadline is shorter.'
                },
                {
                    question: 'Which of these is NOT a legal reason to fire someone in California?',
                    options: [
                        'Poor performance',
                        'Company downsizing',
                        'Reporting safety violations',
                        'Personality conflicts'
                    ],
                    correct: 2,
                    explanation: 'Firing someone for reporting safety violations is illegal retaliation. Whistleblowers are protected under California law.'
                }
            ]
        },
        {
            id: 5,
            title: 'Legal System Navigation',
            subtitle: 'When and how to use the legal system',
            topics: [
                {
                    id: 'small-claims',
                    title: 'Small Claims Court',
                    content: `
                        <h2>Small Claims Court</h2>
                        <h3>What It Is</h3>
                        <ul>
                            <li>Informal court for disputes up to $12,500 (individuals)</li>
                            <li>$6,250 max if you're a business</li>
                            <li>No lawyers allowed (in most cases)</li>
                            <li>Filing fee: $30-75</li>
                        </ul>
                        <h3>Good Cases for Small Claims</h3>
                        <ul>
                            <li>Security deposit disputes</li>
                            <li>Breach of contract</li>
                            <li>Property damage</li>
                            <li>Unpaid loans to friends/family</li>
                            <li>Defective goods/services</li>
                        </ul>
                        <h3>How to File</h3>
                        <ol>
                            <li>Identify the correct defendant (exact name)</li>
                            <li>File claim at courthouse where defendant lives/business operates</li>
                            <li>Pay filing fee</li>
                            <li>Serve defendant (deliver papers properly)</li>
                            <li>Prepare your evidence</li>
                            <li>Attend hearing and present your case</li>
                        </ol>
                        <h3>Tips for Success</h3>
                        <ul>
                            <li>Bring all documentation organized</li>
                            <li>Photos, contracts, receipts, text messages</li>
                            <li>Bring witnesses if possible</li>
                            <li>Be calm, factual, and concise</li>
                            <li>Focus on what you can prove</li>
                        </ul>
                        <div class="highlight">
                            <strong>Winning isn't everything:</strong> Even if you win, you still have to collect. Research whether defendant can actually pay before filing.
                        </div>
                    `
                },
                {
                    id: 'when-need-lawyer',
                    title: 'When to Get a Lawyer',
                    content: `
                        <h2>When to Get a Lawyer</h2>
                        <h3>You Likely Need a Lawyer For</h3>
                        <ul>
                            <li>Criminal charges (even "minor" ones)</li>
                            <li>Large civil disputes ($12,500+)</li>
                            <li>Complex legal matters (immigration, bankruptcy)</li>
                            <li>Employment disputes with high damages</li>
                            <li>Personal injury with serious injuries</li>
                            <li>Family law (divorce, custody)</li>
                        </ul>
                        <h3>You Might Handle Yourself</h3>
                        <ul>
                            <li>Small claims court</li>
                            <li>Traffic tickets</li>
                            <li>Simple contracts</li>
                            <li>Basic legal documents</li>
                        </ul>
                        <h3>Finding Legal Help</h3>
                        <ul>
                            <li><strong>Legal aid:</strong> Free for low-income (lawhelp.org)</li>
                            <li><strong>Pro bono:</strong> Volunteer lawyers</li>
                            <li><strong>Contingency:</strong> Lawyer paid from winnings (injury, employment)</li>
                            <li><strong>Lawyer referral:</strong> California State Bar</li>
                            <li><strong>Law school clinics:</strong> Free supervised services</li>
                        </ul>
                        <h3>Questions to Ask Lawyers</h3>
                        <ul>
                            <li>Do you handle cases like mine?</li>
                            <li>What are my chances of success?</li>
                            <li>How much will this cost? (Fee structure)</li>
                            <li>How long will it take?</li>
                            <li>Who will actually work on my case?</li>
                        </ul>
                        <div class="highlight">
                            <strong>Free Consultations:</strong> Many lawyers offer free initial consultations. Use them to understand your options before committing.
                        </div>
                    `
                },
                {
                    id: 'resources',
                    title: 'Legal Resources in California',
                    content: `
                        <h2>Legal Resources in California</h2>
                        <h3>Free Legal Help</h3>
                        <ul>
                            <li><strong>LawHelpCA.org:</strong> Find free legal aid near you</li>
                            <li><strong>California Courts Self-Help:</strong> selfhelp.courts.ca.gov</li>
                            <li><strong>Legal Aid Society:</strong> Multiple locations statewide</li>
                            <li><strong>Bay Area Legal Aid:</strong> SF Bay Area</li>
                            <li><strong>Bet Tzedek:</strong> Los Angeles area</li>
                        </ul>
                        <h3>Government Resources</h3>
                        <ul>
                            <li><strong>Labor Commissioner:</strong> Wage theft, workplace violations</li>
                            <li><strong>Civil Rights Department (CRD):</strong> Discrimination complaints</li>
                            <li><strong>Dept of Fair Employment & Housing</strong></li>
                            <li><strong>Tenant protection hotlines:</strong> By county</li>
                        </ul>
                        <h3>Know Your Rights Hotlines</h3>
                        <ul>
                            <li><strong>ACLU of California</strong></li>
                            <li><strong>National Lawyers Guild</strong></li>
                            <li><strong>Immigrant rights organizations</strong></li>
                        </ul>
                        <h3>Online Resources</h3>
                        <ul>
                            <li><strong>Nolo.com:</strong> Legal self-help books and info</li>
                            <li><strong>Avvo.com:</strong> Lawyer reviews and Q&A</li>
                            <li><strong>California Courts:</strong> Forms and procedures</li>
                        </ul>
                        <div class="highlight">
                            <strong>Don't Wait:</strong> Legal issues have deadlines. Seek help early, even if just to understand your timeline and options.
                        </div>
                    `
                }
            ],
            quiz: [
                {
                    question: 'What is the maximum amount you can sue for in California small claims court as an individual?',
                    options: ['$5,000', '$10,000', '$12,500', '$25,000'],
                    correct: 2,
                    explanation: 'Individuals can sue for up to $12,500 in California small claims court. Businesses are limited to $6,250.'
                },
                {
                    question: 'Which type of lawyer is paid only if you win?',
                    options: ['Retainer', 'Hourly', 'Contingency', 'Pro bono'],
                    correct: 2,
                    explanation: 'Contingency lawyers take a percentage of your winnings (usually 33-40%) and nothing if you lose. Common for personal injury and employment cases.'
                },
                {
                    question: 'Where can you find free legal help in California?',
                    options: [
                        'Only private attorneys',
                        'LawHelpCA.org and legal aid organizations',
                        'There is no free legal help',
                        'Only for criminal cases'
                    ],
                    correct: 1,
                    explanation: 'LawHelpCA.org connects you with free legal aid organizations based on your location and legal issue. Many offer free services for qualifying individuals.'
                }
            ]
        }
    ]
};
