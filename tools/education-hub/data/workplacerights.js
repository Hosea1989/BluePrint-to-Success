// Workplace Retaliation & Self-Advocacy Curriculum Data
const workplacerightsData = {
    id: 'workplacerights',
    title: 'Workplace Retaliation & Self-Advocacy',
    icon: '⚔️',
    description: 'Learn to recognize retaliation, protect yourself, document everything, and fight back when your employer crosses the line.',
    graduationGoal: 'Confidently advocate for yourself in any workplace situation and know exactly what to do when your rights are violated',
    difficulty: 'beginner',
    prerequisites: ['labor'],
    learningObjectives: [
        'Recognize workplace retaliation and illegal behavior',
        'Document workplace issues effectively',
        'Advocate for yourself confidently',
        'Know when and how to file complaints',
        'Protect yourself from employer retaliation'
    ],
    relatedTracks: ['labor', 'career', 'california', 'contracts'],
    resources: [
        { title: 'EEOC - Retaliation', url: 'https://www.eeoc.gov/retaliation' },
        { title: 'California DFEH', url: 'https://www.dfeh.ca.gov/' }
    ],
    levels: [
        {
            id: 1,
            title: 'Recognizing Retaliation',
            subtitle: 'Know what it looks like — obvious and subtle',
            topics: [
                {
                    id: 'what-is-retaliation',
                    title: 'What Is Workplace Retaliation?',
                    content: `
                        <h2>What Is Workplace Retaliation?</h2>

                        <div class="definition">
                            <strong>Retaliation:</strong> When an employer punishes an employee for engaging in a legally protected activity — like reporting discrimination, filing a complaint, requesting accommodations, or refusing to do something illegal.
                        </div>

                        <h3>The Legal Standard</h3>
                        <p>Retaliation requires three elements:</p>
                        <ol>
                            <li><strong>Protected Activity:</strong> You did something the law protects (complained, reported, participated in an investigation, etc.)</li>
                            <li><strong>Adverse Action:</strong> Your employer did something negative to you</li>
                            <li><strong>Causal Connection:</strong> The adverse action happened <em>because of</em> your protected activity</li>
                        </ol>

                        <h3>Why It Matters</h3>
                        <ul>
                            <li>Retaliation is the <strong>#1 most filed charge</strong> with the EEOC — more than discrimination itself</li>
                            <li>Over 56% of all EEOC charges include a retaliation claim</li>
                            <li>Many people experience retaliation but don't recognize it</li>
                            <li>It happens in <strong>every industry</strong> — corporate, nonprofit, government, small business</li>
                        </ul>

                        <h3>Key Federal Laws That Prohibit Retaliation</h3>
                        <ul>
                            <li><strong>Title VII (Civil Rights Act):</strong> Discrimination complaints</li>
                            <li><strong>ADA:</strong> Disability accommodation requests</li>
                            <li><strong>FMLA:</strong> Taking protected medical/family leave</li>
                            <li><strong>FLSA:</strong> Wage and hour complaints</li>
                            <li><strong>OSHA:</strong> Safety complaints</li>
                            <li><strong>Sarbanes-Oxley / Dodd-Frank:</strong> Whistleblowing</li>
                            <li><strong>NLRA:</strong> Organizing or discussing working conditions</li>
                        </ul>

                        <div class="highlight">
                            <strong>Critical:</strong> You don't have to be <em>right</em> about the underlying complaint to be protected from retaliation. If you filed a discrimination complaint in good faith, you're protected from retaliation even if the investigation finds no discrimination occurred.
                        </div>
                    `
                },
                {
                    id: 'protected-activities',
                    title: 'Protected Activities — What You\'re Allowed to Do',
                    content: `
                        <h2>Protected Activities</h2>

                        <h3>What the Law Protects</h3>
                        <p>You <strong>cannot</strong> be punished for any of the following:</p>

                        <h4>Reporting & Complaining</h4>
                        <ul>
                            <li>Filing a discrimination or harassment complaint (internal or external)</li>
                            <li>Reporting safety violations to OSHA</li>
                            <li>Reporting wage theft or unpaid overtime</li>
                            <li>Reporting fraud, illegal activity, or ethical violations</li>
                            <li>Reporting violations of any law to a government agency</li>
                        </ul>

                        <h4>Participating</h4>
                        <ul>
                            <li>Being a witness in someone else's complaint or investigation</li>
                            <li>Providing information during an internal or external investigation</li>
                            <li>Testifying in a legal proceeding</li>
                        </ul>

                        <h4>Exercising Your Rights</h4>
                        <ul>
                            <li>Requesting a reasonable accommodation (disability, religion)</li>
                            <li>Taking FMLA leave</li>
                            <li>Filing a workers' compensation claim</li>
                            <li>Discussing wages or working conditions with coworkers (NLRA)</li>
                            <li>Refusing to do something illegal</li>
                            <li>Requesting your personnel file</li>
                            <li>Voting or serving on jury duty</li>
                        </ul>

                        <h4>Organizing</h4>
                        <ul>
                            <li>Discussing forming a union</li>
                            <li>Signing a union card or petition</li>
                            <li>Attending union meetings</li>
                            <li>Engaging in "concerted activity" (group complaints about conditions)</li>
                        </ul>

                        <div class="example">
                            <strong>Real Example:</strong> An employee at a nonprofit tells their supervisor that the organization is not paying overtime correctly. Two weeks later, the employee is written up for "attitude problems" for the first time in 3 years. This is textbook retaliation — and it's illegal.
                        </div>

                        <div class="highlight">
                            <strong>Remember:</strong> Discussing pay with coworkers is ALWAYS protected under federal law (NLRA). Any policy that says "don't discuss your salary" is illegal. Period.
                        </div>
                    `
                },
                {
                    id: 'obvious-retaliation',
                    title: 'Obvious Retaliation — The Easy-to-Spot Signs',
                    content: `
                        <h2>Obvious Retaliation</h2>

                        <h3>Actions That Clearly Cross the Line</h3>
                        <p>These are the forms of retaliation that are easiest to recognize and prove:</p>

                        <ul>
                            <li><strong>Termination:</strong> Being fired shortly after a complaint or protected activity</li>
                            <li><strong>Demotion:</strong> Losing your title, responsibilities, or rank</li>
                            <li><strong>Pay Cut:</strong> Reduction in salary, hourly rate, or commission</li>
                            <li><strong>Hour Reduction:</strong> Cutting your scheduled hours</li>
                            <li><strong>Suspension:</strong> Being placed on unpaid leave without valid cause</li>
                            <li><strong>Transfer:</strong> Being moved to a worse location, shift, or role</li>
                            <li><strong>Denial of Promotion:</strong> Being passed over when you were the clear choice</li>
                            <li><strong>Denial of Benefits:</strong> Losing access to training, perks, or opportunities</li>
                        </ul>

                        <h3>Timing Is Everything</h3>
                        <p>Courts look at the <strong>timeline</strong> between your protected activity and the adverse action:</p>
                        <ul>
                            <li><strong>Days to weeks:</strong> Very strong inference of retaliation</li>
                            <li><strong>1-3 months:</strong> Still strong, especially with no other explanation</li>
                            <li><strong>3-6 months:</strong> Possible, but you'll need additional evidence</li>
                            <li><strong>6+ months:</strong> Harder to prove — but not impossible with a pattern</li>
                        </ul>

                        <div class="example">
                            <strong>Pattern to Watch:</strong> You had good performance reviews for years → You filed a complaint → Suddenly your performance reviews tank. This is a classic retaliation playbook, and courts recognize it.
                        </div>

                        <div class="highlight">
                            <strong>Document the Timeline:</strong> Write down (with dates) when you did the protected activity and when negative actions started. This timeline is your most powerful evidence.
                        </div>
                    `
                },
                {
                    id: 'subtle-retaliation',
                    title: 'Subtle Retaliation — The Harder-to-Spot Signs',
                    content: `
                        <h2>Subtle Retaliation</h2>

                        <h3>Death by a Thousand Cuts</h3>
                        <p>Smart employers know not to fire you the day after you complain. Instead, they make your life miserable gradually so you'll quit — this is called <strong>constructive discharge</strong> if it gets bad enough.</p>

                        <h4>Isolation & Exclusion</h4>
                        <ul>
                            <li>Left out of meetings you were previously included in</li>
                            <li>Excluded from emails, group chats, or decision-making</li>
                            <li>Coworkers suddenly act cold or distant (management may have poisoned the well)</li>
                            <li>Being physically relocated away from your team</li>
                            <li>Not invited to social events or team activities</li>
                        </ul>

                        <h4>Impossible Standards & Scrutiny</h4>
                        <ul>
                            <li>Suddenly being held to standards nobody else has to meet</li>
                            <li>Nitpicking your work when it was fine before</li>
                            <li>Being put on a Performance Improvement Plan (PIP) with unrealistic goals</li>
                            <li>Having your work double-checked when it never was before</li>
                            <li>Being micromanaged when you previously had autonomy</li>
                        </ul>

                        <h4>Gaslighting & Rewriting History</h4>
                        <ul>
                            <li>"We never had that conversation"</li>
                            <li>"Your performance has always been an issue" (contradicts past reviews)</li>
                            <li>Changing policies and then enforcing them retroactively against you</li>
                            <li>Selectively applying rules to you that aren't enforced for others</li>
                            <li>Changing your job description to set you up for failure</li>
                        </ul>

                        <h4>Other Subtle Forms</h4>
                        <ul>
                            <li>Giving you undesirable tasks or assignments ("grunt work")</li>
                            <li>Denying training or professional development</li>
                            <li>Negative references when you apply for internal positions</li>
                            <li>Increasing workload to unsustainable levels</li>
                            <li>Spreading rumors or damaging your reputation</li>
                            <li>Threatening immigration status</li>
                        </ul>

                        <div class="example">
                            <strong>Nonprofit Red Flag:</strong> A nonprofit employee questions how grant funds are being used. Suddenly, the organization starts applying obscure policies that were never enforced before — only to that employee. They're told they need to "follow the rules like everyone else," but nobody else is being held to those rules. <strong>This is retaliation disguised as policy enforcement.</strong>
                        </div>

                        <div class="highlight">
                            <strong>Key Test:</strong> Ask yourself — "Were they doing this to me BEFORE I spoke up?" If the answer is no, and the change happened after your protected activity, you likely have a retaliation situation.
                        </div>
                    `
                }
            ],
            quiz: {
                questions: [
                    {
                        question: 'What are the three elements required to establish workplace retaliation?',
                        options: [
                            'Bad boss, bad job, bad pay',
                            'Protected activity, adverse action, and causal connection',
                            'Written warning, suspension, and termination',
                            'Complaint, investigation, and resolution'
                        ],
                        correct: 1,
                        explanation: 'Retaliation requires: (1) a protected activity (like filing a complaint), (2) an adverse action by the employer, and (3) a causal connection between the two.'
                    },
                    {
                        question: 'If you file a discrimination complaint but the investigation finds no discrimination, are you still protected from retaliation?',
                        options: [
                            'No, you can only be protected if the complaint was valid',
                            'Yes, as long as the complaint was made in good faith',
                            'Only if you have a lawyer',
                            'Only in certain states'
                        ],
                        correct: 1,
                        explanation: 'You are protected from retaliation as long as your complaint was made in good faith — meaning you genuinely believed there was a violation. You don\'t have to be right.'
                    },
                    {
                        question: 'Which of the following is an example of SUBTLE retaliation?',
                        options: [
                            'Being fired the day after filing a complaint',
                            'Receiving a pay cut',
                            'Being excluded from meetings and held to standards no one else has to meet',
                            'Being formally suspended'
                        ],
                        correct: 2,
                        explanation: 'Subtle retaliation includes exclusion, impossible standards, micromanagement, and selectively enforcing rules — designed to make you quit rather than creating an obvious paper trail.'
                    },
                    {
                        question: 'Is it legal for your employer to have a policy prohibiting employees from discussing their salaries?',
                        options: [
                            'Yes, employers can set any workplace rules they want',
                            'Yes, but only for management-level employees',
                            'No, discussing wages is protected under the NLRA (National Labor Relations Act)',
                            'It depends on the state'
                        ],
                        correct: 2,
                        explanation: 'Under the National Labor Relations Act, employees have the right to discuss wages and working conditions with each other. Any policy prohibiting this is illegal.'
                    }
                ]
            }
        },
        {
            id: 2,
            title: 'Building Your Paper Trail',
            subtitle: 'Document like your case depends on it — because it does',
            topics: [
                {
                    id: 'why-document',
                    title: 'Why Documentation Is Everything',
                    content: `
                        <h2>Why Documentation Is Everything</h2>

                        <h3>The Reality</h3>
                        <ul>
                            <li>In any workplace dispute, it's your word against theirs — unless you have documentation</li>
                            <li>Employers have legal teams, HR departments, and resources. Your documentation levels the playing field.</li>
                            <li>Memory fades, but documents don't. What you write down today could save your case months from now.</li>
                            <li>Courts and agencies rely heavily on contemporaneous documentation (notes taken at or near the time of events)</li>
                        </ul>

                        <h3>What Good Documentation Does</h3>
                        <ul>
                            <li><strong>Establishes a timeline:</strong> Shows the before-and-after of your protected activity</li>
                            <li><strong>Shows patterns:</strong> One incident is easy to dismiss; a documented pattern is not</li>
                            <li><strong>Prevents gaslighting:</strong> Hard for them to say "that never happened" when you have it in writing</li>
                            <li><strong>Strengthens legal claims:</strong> Attorneys and agencies take cases more seriously with documentation</li>
                            <li><strong>Protects against fabricated reasons:</strong> If they claim poor performance, your documented positive feedback contradicts them</li>
                        </ul>

                        <h3>The Golden Rule</h3>
                        <p><strong>If it's not in writing, it didn't happen.</strong></p>
                        <ul>
                            <li>Verbal conversations? Follow up with an email: "Per our conversation today..."</li>
                            <li>Manager gave you a verbal warning? Ask for it in writing.</li>
                            <li>Got praised for good work? Save that email.</li>
                            <li>Policy changed? Screenshot the old version before it disappears.</li>
                        </ul>

                        <div class="highlight">
                            <strong>Start Today:</strong> Even if you're not in a dispute right now, start documenting. By the time you realize you need a paper trail, it may be too late to build one retroactively.
                        </div>
                    `
                },
                {
                    id: 'what-to-document',
                    title: 'What to Document & How',
                    content: `
                        <h2>What to Document & How</h2>

                        <h3>Document These Things</h3>

                        <h4>Every Incident</h4>
                        <ul>
                            <li><strong>Date and time</strong> (be specific: "Tuesday, March 5, 2024 at 2:15 PM")</li>
                            <li><strong>Location</strong> (office, conference room, parking lot, Zoom)</li>
                            <li><strong>Who was present</strong> (witnesses matter)</li>
                            <li><strong>What was said</strong> (use direct quotes when possible)</li>
                            <li><strong>What happened</strong> (actions taken, not just words)</li>
                            <li><strong>How it made you feel</strong> (relevant for hostile work environment claims)</li>
                            <li><strong>Business impact</strong> (lost opportunities, changed duties, etc.)</li>
                        </ul>

                        <h4>Positive Performance Evidence</h4>
                        <ul>
                            <li>Performance reviews (save copies!)</li>
                            <li>Praise emails from supervisors, clients, or coworkers</li>
                            <li>Awards, recognitions, achievements</li>
                            <li>Completed projects and positive outcomes</li>
                            <li>Any metrics showing your good performance</li>
                        </ul>

                        <h4>Policy & Communication</h4>
                        <ul>
                            <li>Employee handbook (save a copy — they can change it)</li>
                            <li>Company policies, especially ones being selectively enforced</li>
                            <li>Emails, texts, or messages related to your situation</li>
                            <li>Meeting notes and agendas</li>
                            <li>Any changes to your role, schedule, or responsibilities</li>
                        </ul>

                        <h3>How to Document</h3>

                        <h4>The Personal Log</h4>
                        <ul>
                            <li>Keep a <strong>private journal</strong> — not on your work computer</li>
                            <li>Use your personal email, phone, or a physical notebook</li>
                            <li>Write entries as close to the event as possible (same day is ideal)</li>
                            <li>Use factual language, not emotional ("She said X" not "She was being horrible")</li>
                            <li>Be consistent — document the mundane too (it shows the contrast)</li>
                        </ul>

                        <h4>The "Confirm in Writing" Technique</h4>
                        <p>After any important verbal conversation, send a follow-up email:</p>
                        <div class="example">
                            <strong>Template:</strong><br>
                            "Hi [Manager], I want to confirm what we discussed today. You mentioned that [specific details]. I want to make sure I understood correctly. Please let me know if I've missed anything."<br><br>
                            <em>If they don't correct you, their silence confirms your account. If they do correct you, you now have their version in writing too.</em>
                        </div>

                        <div class="highlight">
                            <strong>Never Use Work Devices:</strong> Your employer can access anything on work computers, phones, or email. Keep all personal documentation on your own devices and accounts.
                        </div>
                    `
                },
                {
                    id: 'preserving-evidence',
                    title: 'Preserving Evidence & Avoiding Traps',
                    content: `
                        <h2>Preserving Evidence & Avoiding Traps</h2>

                        <h3>Save Everything — The Right Way</h3>
                        <ul>
                            <li><strong>Forward emails to your personal account</strong> — but be careful. Some companies prohibit this. A safer method is to BCC yourself on emails you send, or screenshot/photograph your screen.</li>
                            <li><strong>Screenshot, don't download:</strong> Screenshots of conversations are harder to dispute than forwarded files.</li>
                            <li><strong>Save voicemails:</strong> Many phones let you save or record voicemails.</li>
                            <li><strong>Back up to cloud:</strong> Google Drive, iCloud, or another personal cloud service.</li>
                            <li><strong>Print physical copies:</strong> Keep a folder at home with key documents.</li>
                        </ul>

                        <h3>Recording Conversations</h3>
                        <ul>
                            <li><strong>One-party consent states:</strong> You can legally record conversations you're part of without telling the other person (includes California for in-person with some nuances — but CA is actually TWO-party for phone calls)</li>
                            <li><strong>Two-party consent states:</strong> All parties must agree to being recorded</li>
                            <li><strong>Check your state's law</strong> before recording anything</li>
                            <li>Even in two-party states, taking detailed notes immediately after is perfectly legal</li>
                        </ul>

                        <h3>Traps to Avoid</h3>
                        <ul>
                            <li><strong>Don't vent at work:</strong> Emotional outbursts can be used against you as "misconduct"</li>
                            <li><strong>Don't use work resources:</strong> Don't use company email, Slack, or computers for your personal documentation</li>
                            <li><strong>Don't take company property:</strong> There's a difference between keeping copies of your own work product and stealing proprietary information</li>
                            <li><strong>Don't post on social media:</strong> Anything you post can and will be used against you</li>
                            <li><strong>Don't give them a legitimate reason:</strong> Be impeccable with your work. Don't be late, don't miss deadlines, don't violate any policies. They're looking for any excuse.</li>
                            <li><strong>Don't trust verbal promises:</strong> "Don't worry, we'll take care of it" means nothing without documentation</li>
                        </ul>

                        <div class="example">
                            <strong>The Setup:</strong> After you complain, your manager suddenly assigns you a massive project with an impossible deadline. If you fail, they document it as poor performance. If you complain, they say you're "not a team player."<br><br>
                            <strong>Defense:</strong> Email your manager: "I want to make sure I prioritize correctly. Here is my current workload [list]. This new project requires [X hours]. Can you help me understand which existing tasks to deprioritize?" This creates a paper trail showing the unreasonable demand.
                        </div>

                        <div class="highlight">
                            <strong>Be the Most Professional Person in the Room:</strong> When you're being retaliated against, your behavior needs to be beyond reproach. Don't give them ammunition. Be calm, be factual, be documented.
                        </div>
                    `
                },
                {
                    id: 'building-comparison-evidence',
                    title: 'Building Comparison Evidence',
                    content: `
                        <h2>Building Comparison Evidence</h2>

                        <h3>Why Comparisons Matter</h3>
                        <p>One of the strongest ways to prove retaliation (or discrimination) is showing that <strong>you were treated differently than similarly situated coworkers.</strong></p>

                        <h3>What to Compare</h3>
                        <ul>
                            <li><strong>Policy enforcement:</strong> Are rules applied to you that aren't applied to others?</li>
                            <li><strong>Discipline:</strong> Did a coworker do the same thing and get a lighter consequence (or none)?</li>
                            <li><strong>Opportunities:</strong> Are others getting training, promotions, or projects you're denied?</li>
                            <li><strong>Workload:</strong> Is your workload significantly different from peers in the same role?</li>
                            <li><strong>Scrutiny level:</strong> Is your work being reviewed more closely than others?</li>
                            <li><strong>Attendance enforcement:</strong> Are you being written up for things others do without consequence?</li>
                        </ul>

                        <h3>How to Document Comparisons</h3>
                        <ul>
                            <li>Keep a log: "On [date], [coworker] did [same thing] and was not disciplined"</li>
                            <li>Note when policies are inconsistently applied</li>
                            <li>If possible, find out (through casual conversation, not snooping) how others are treated</li>
                            <li>Save any group communications that show different standards</li>
                        </ul>

                        <div class="example">
                            <strong>Nonprofit Example:</strong> You challenge a policy at your nonprofit and suddenly you're told you need to submit detailed time logs. You notice no one else on your team is required to do this. Document: (1) the new requirement, (2) when it started relative to your complaint, (3) evidence that others aren't held to this standard. This is powerful evidence of selective enforcement — a hallmark of retaliation.
                        </div>

                        <h3>The "Before and After" Framework</h3>
                        <table>
                            <tr><th>Before Protected Activity</th><th>After Protected Activity</th></tr>
                            <tr><td>Positive performance reviews</td><td>Suddenly "needs improvement"</td></tr>
                            <tr><td>Included in team meetings</td><td>Excluded from key meetings</td></tr>
                            <tr><td>Given growth opportunities</td><td>Stuck with menial tasks</td></tr>
                            <tr><td>Flexible schedule accepted</td><td>Every minute scrutinized</td></tr>
                            <tr><td>Normal policy application</td><td>Strict, selective enforcement</td></tr>
                        </table>

                        <div class="highlight">
                            <strong>This Framework Wins Cases:</strong> A clear before-and-after comparison, combined with a documented timeline, is the most compelling evidence you can present to an attorney, agency, or court.
                        </div>
                    `
                }
            ],
            quiz: {
                questions: [
                    {
                        question: 'Why is contemporaneous documentation (notes taken at or near the time of events) so important?',
                        options: [
                            'It\'s required by law',
                            'Courts and agencies give it more weight because it\'s more reliable than memory recalled months later',
                            'It\'s the only type of evidence allowed in court',
                            'It\'s easier to write'
                        ],
                        correct: 1,
                        explanation: 'Contemporaneous documentation — notes taken at or near the time of events — is considered more reliable and credible than recollections made weeks or months later. Courts and agencies give it significant weight.'
                    },
                    {
                        question: 'Where should you keep your personal documentation about workplace issues?',
                        options: [
                            'On your work computer in a password-protected folder',
                            'In your work email drafts folder',
                            'On your personal devices and accounts, NOT on any work-owned equipment',
                            'On the company shared drive'
                        ],
                        correct: 2,
                        explanation: 'Never store personal documentation on work devices or accounts. Your employer can access anything on their equipment. Use your personal phone, computer, email, or cloud storage.'
                    },
                    {
                        question: 'What is the "confirm in writing" technique?',
                        options: [
                            'Asking your employer to sign a contract',
                            'Following up verbal conversations with an email summarizing what was discussed',
                            'Recording all conversations',
                            'Sending a formal letter to HR'
                        ],
                        correct: 1,
                        explanation: 'After important verbal conversations, send a follow-up email summarizing what was discussed. If the other person doesn\'t correct your account, their silence effectively confirms it.'
                    },
                    {
                        question: 'What is the strongest type of evidence for proving retaliation?',
                        options: [
                            'Testimony from your friends',
                            'A clear before-and-after comparison showing how your treatment changed after your protected activity',
                            'Your personal feelings about the situation',
                            'Social media posts about your employer'
                        ],
                        correct: 1,
                        explanation: 'A documented timeline showing how your treatment changed after engaging in a protected activity — combined with comparison evidence showing others aren\'t treated the same way — is the most compelling evidence.'
                    }
                ]
            }
        },
        {
            id: 3,
            title: 'Understanding the Players',
            subtitle: 'HR, management, and the realities of power',
            topics: [
                {
                    id: 'hr-truth',
                    title: 'The Truth About HR',
                    content: `
                        <h2>The Truth About HR</h2>

                        <h3>The Uncomfortable Reality</h3>
                        <div class="definition">
                            <strong>HR exists to protect the company, not you.</strong> This doesn't mean HR is your enemy — but they are not your advocate. Understanding this is crucial for navigating workplace issues.
                        </div>

                        <h3>What HR Actually Does</h3>
                        <ul>
                            <li><strong>Protects the organization</strong> from legal liability</li>
                            <li><strong>Manages risk</strong> — and sometimes YOU are the "risk" they're managing</li>
                            <li><strong>Ensures compliance</strong> with employment laws (this can work in your favor)</li>
                            <li><strong>Supports management</strong> decisions, even bad ones</li>
                            <li><strong>Documents</strong> situations from the company's perspective</li>
                        </ul>

                        <h3>When HR Works in Your Favor</h3>
                        <ul>
                            <li>When your complaint is clear-cut and the company has obvious liability</li>
                            <li>When the person you're complaining about is expendable</li>
                            <li>When NOT acting would create bigger legal risk for the company</li>
                            <li>When there are multiple complaints about the same person/issue</li>
                        </ul>

                        <h3>When HR Works Against You</h3>
                        <ul>
                            <li>When you're complaining about someone powerful (C-suite, founder, major donor)</li>
                            <li>When the organization has more to lose from validating your claim than from ignoring it</li>
                            <li>When they've already decided to push you out</li>
                            <li>When they're building a file on you to justify a predetermined outcome</li>
                        </ul>

                        <h3>How to Interact with HR Strategically</h3>
                        <ul>
                            <li><strong>Always put complaints in writing</strong> — email, not verbal</li>
                            <li><strong>Keep copies of everything</strong> you submit to HR</li>
                            <li><strong>Be factual, not emotional</strong> — state what happened, cite policies and laws</li>
                            <li><strong>Don't overshare</strong> — provide relevant facts only</li>
                            <li><strong>Ask for written responses</strong> — "Can you confirm the outcome of this investigation in writing?"</li>
                            <li><strong>Note who you spoke with and when</strong></li>
                        </ul>

                        <div class="highlight">
                            <strong>The Test:</strong> If HR is more interested in how to make your complaint go away than in actually addressing it, they're protecting the company, not you. This is your signal to escalate externally.
                        </div>
                    `
                },
                {
                    id: 'nonprofit-specifics',
                    title: 'Nonprofit-Specific Issues',
                    content: `
                        <h2>Nonprofit-Specific Workplace Issues</h2>

                        <h3>The Nonprofit Myth</h3>
                        <div class="definition">
                            <strong>Myth:</strong> "We're a nonprofit, so the rules are different."<br>
                            <strong>Reality:</strong> Nonprofits must follow ALL the same employment laws as for-profit businesses. Period.
                        </div>

                        <h3>Common Nonprofit Problems</h3>

                        <h4>The "Mission" Manipulation</h4>
                        <ul>
                            <li>"We're all here for the mission" — used to guilt employees into accepting poor treatment</li>
                            <li>"We can't afford to pay more" — while executives earn comfortable salaries</li>
                            <li>"We're a family here" — used to discourage formal complaints</li>
                            <li>"You should be grateful to work here" — used to suppress advocacy for your rights</li>
                            <li>Expectation of unpaid overtime "for the cause"</li>
                        </ul>

                        <h4>Governance Issues</h4>
                        <ul>
                            <li><strong>Small boards:</strong> Board members may be personally connected to the ED/CEO, creating conflicts of interest</li>
                            <li><strong>Weak oversight:</strong> Less accountability than publicly traded companies</li>
                            <li><strong>Founder syndrome:</strong> Founders who run the organization like a personal kingdom</li>
                            <li><strong>Donor influence:</strong> Major donors may have inappropriate influence over employment decisions</li>
                        </ul>

                        <h4>HR & Compliance Gaps</h4>
                        <ul>
                            <li>Many small nonprofits have no dedicated HR (the ED does everything)</li>
                            <li>Complaints about the ED go... to the ED. Or to a board that's loyal to the ED.</li>
                            <li>Policies may be outdated, inconsistently applied, or nonexistent</li>
                            <li>Less legal sophistication means they may retaliate more blatantly — which actually helps your case</li>
                        </ul>

                        <h3>Your Rights Don't Change</h3>
                        <ul>
                            <li>Nonprofits with 15+ employees must comply with Title VII, ADA, and ADEA</li>
                            <li>Nonprofits with 20+ employees must comply with ADEA</li>
                            <li>FLSA (wage and hour) applies to nonprofits</li>
                            <li>OSHA applies to nonprofits</li>
                            <li>FMLA applies to nonprofits with 50+ employees</li>
                            <li>State and local laws may have even lower thresholds</li>
                        </ul>

                        <div class="example">
                            <strong>Real Scenario:</strong> A nonprofit employee notices the organization is applying a "new policy" to them that doesn't exist in the employee handbook and isn't being applied to anyone else. When they push back, they're told "that's just how we do things here." This isn't policy — it's targeted treatment. If it started after a protected activity, it's retaliation.
                        </div>

                        <h3>Where to Go When Internal Channels Fail</h3>
                        <ul>
                            <li>The board of directors (if the issue is with the ED)</li>
                            <li>State labor agencies</li>
                            <li>EEOC or equivalent state agency</li>
                            <li>The state attorney general (oversees nonprofits)</li>
                            <li>Funding agencies or grantors (nonprofits fear losing funding)</li>
                            <li>An employment attorney</li>
                        </ul>

                        <div class="highlight">
                            <strong>Remember:</strong> Nonprofits are not above the law. Their tax-exempt status does not exempt them from employment law. If anything, they face additional scrutiny because they serve the public trust.
                        </div>
                    `
                },
                {
                    id: 'management-tactics',
                    title: 'Common Management Retaliation Tactics',
                    content: `
                        <h2>Common Management Retaliation Tactics</h2>

                        <h3>The Playbook</h3>
                        <p>These are the tactics managers and organizations commonly use to retaliate while maintaining plausible deniability:</p>

                        <h4>1. The Paper Trail Buildup</h4>
                        <ul>
                            <li>Suddenly documenting every minor issue</li>
                            <li>Writing you up for things that were previously acceptable</li>
                            <li>Creating a narrative of "progressive discipline" to justify eventual termination</li>
                            <li><strong>Defense:</strong> Document the timeline. Show that no disciplinary action existed before your protected activity.</li>
                        </ul>

                        <h4>2. The Performance Improvement Plan (PIP)</h4>
                        <ul>
                            <li>PIPs are often used as a "termination runway" — not genuine improvement tools</li>
                            <li>Goals may be vague, subjective, or unrealistic</li>
                            <li>The person who put you on the PIP is also the person evaluating whether you "pass"</li>
                            <li><strong>Defense:</strong> Request specific, measurable goals in writing. Document your compliance. Consider consulting an attorney immediately.</li>
                        </ul>

                        <h4>3. The Role Restructure</h4>
                        <ul>
                            <li>"We're restructuring the department" — conveniently, your role is the one eliminated</li>
                            <li>Your duties are redistributed to others or a "new" position is created that's suspiciously similar</li>
                            <li><strong>Defense:</strong> Document what happened to your responsibilities and who took them over.</li>
                        </ul>

                        <h4>4. The Isolation Play</h4>
                        <ul>
                            <li>Removing you from projects, meetings, or communications</li>
                            <li>Reassigning your key responsibilities to others</li>
                            <li>Moving your workspace or changing your reporting structure</li>
                            <li><strong>Defense:</strong> Document every change with dates. Email your manager asking for clarification on your role.</li>
                        </ul>

                        <h4>5. The "Culture Fit" Excuse</h4>
                        <ul>
                            <li>"You're not a team player"</li>
                            <li>"There are concerns about your attitude"</li>
                            <li>"You're creating a hostile work environment" (ironic reversal)</li>
                            <li><strong>Defense:</strong> Ask for specific examples in writing. Vague "culture" complaints are hard to defend and easy to challenge.</li>
                        </ul>

                        <h4>6. The Weaponized Policy</h4>
                        <ul>
                            <li>Enforcing an obscure policy that hasn't been enforced for anyone else</li>
                            <li>Creating new rules specifically designed to trip you up</li>
                            <li>Retroactively applying policy changes</li>
                            <li><strong>Defense:</strong> Document the policy, when it started being enforced against you, and evidence that others aren't held to it.</li>
                        </ul>

                        <div class="highlight">
                            <strong>Pattern Recognition:</strong> Retaliation rarely involves just one tactic. It's usually a combination — isolation + increased scrutiny + paper trail buildup — designed to create a "legitimate business reason" for your eventual termination. Recognizing the pattern early gives you time to build your defense.
                        </div>
                    `
                },
                {
                    id: 'at-will-myth',
                    title: 'The "At-Will" Employment Myth',
                    content: `
                        <h2>The "At-Will" Employment Myth</h2>

                        <h3>What They Tell You</h3>
                        <div class="definition">
                            <strong>"You're an at-will employee, we can fire you for any reason."</strong><br>
                            This is technically true — but it's deeply misleading. At-will means they can fire you for <em>any legal reason</em>. And there are a LOT of illegal reasons.
                        </div>

                        <h3>What "At-Will" Actually Means</h3>
                        <ul>
                            <li>You can be fired without cause — BUT not for an <strong>illegal</strong> cause</li>
                            <li>The employer doesn't need a "good" reason — BUT they can't have a <strong>prohibited</strong> reason</li>
                            <li>It's a default rule — BUT it has dozens of exceptions carved out by federal, state, and local law</li>
                        </ul>

                        <h3>You CANNOT Be Fired For:</h3>
                        <ul>
                            <li><strong>Discrimination:</strong> Race, color, religion, sex, national origin, age (40+), disability, pregnancy, genetic information</li>
                            <li><strong>Retaliation:</strong> For any protected activity (complaints, reports, exercising rights)</li>
                            <li><strong>Exercising legal rights:</strong> FMLA leave, workers' comp claims, voting, jury duty</li>
                            <li><strong>Whistleblowing:</strong> Reporting illegal activity</li>
                            <li><strong>Organizing:</strong> Union activity or discussing working conditions</li>
                            <li><strong>Public policy violations:</strong> Refusing to commit illegal acts</li>
                        </ul>

                        <h3>State Exceptions to At-Will</h3>
                        <ul>
                            <li><strong>Implied contract:</strong> If the employee handbook promises certain procedures (like progressive discipline), the employer may be bound to follow them</li>
                            <li><strong>Implied covenant of good faith:</strong> Some states require employers to act in good faith</li>
                            <li><strong>Public policy exception:</strong> Can't fire someone for acting in the public interest (most states)</li>
                        </ul>

                        <h3>Why They Use "At-Will" to Intimidate</h3>
                        <ul>
                            <li>It discourages employees from asserting their rights</li>
                            <li>It creates a false sense of powerlessness</li>
                            <li>Most employees don't know the exceptions</li>
                            <li>It makes people afraid to rock the boat</li>
                        </ul>

                        <div class="example">
                            <strong>Scenario:</strong> Your manager says "Remember, you're at-will. I can fire you at any time." This is often said as a veiled threat when an employee pushes back. But if you were fired after filing a complaint, exercising FMLA, or reporting violations — "at-will" doesn't protect them. You have a case.
                        </div>

                        <div class="highlight">
                            <strong>Know This:</strong> "At-will" is not a magic shield for employers. It's the starting point, but federal, state, and local laws have carved out so many exceptions that wrongful termination claims are very real and very winnable.
                        </div>
                    `
                }
            ],
            quiz: {
                questions: [
                    {
                        question: 'Who does HR primarily work to protect?',
                        options: [
                            'The employees',
                            'The government',
                            'The company/organization',
                            'The customers/clients'
                        ],
                        correct: 2,
                        explanation: 'HR\'s primary role is to protect the organization from legal liability and manage risk. While they sometimes help employees (especially when it aligns with the company\'s interests), their loyalty is to the organization.'
                    },
                    {
                        question: 'Do nonprofits have to follow the same employment laws as for-profit companies?',
                        options: [
                            'No, they are exempt because of their tax status',
                            'Only if they receive government funding',
                            'Yes, nonprofits must follow all applicable employment laws',
                            'Only for employees who work full-time'
                        ],
                        correct: 2,
                        explanation: 'Nonprofits must comply with all the same employment laws as for-profit businesses, including Title VII, ADA, FMLA, FLSA, and OSHA. Tax-exempt status does not exempt them from employment law.'
                    },
                    {
                        question: 'What is a Performance Improvement Plan (PIP) often used for in retaliation situations?',
                        options: [
                            'To genuinely help the employee improve',
                            'As a "termination runway" to create documentation justifying a predetermined firing',
                            'To promote the employee faster',
                            'To increase the employee\'s salary'
                        ],
                        correct: 1,
                        explanation: 'In retaliation situations, PIPs are frequently used to build a paper trail of "poor performance" to justify an employee\'s termination, especially when the real reason is retaliation for a protected activity.'
                    },
                    {
                        question: 'What does "at-will employment" actually mean?',
                        options: [
                            'Your employer can fire you for any reason, including illegal reasons',
                            'You can be fired without cause, but NOT for an illegal cause like retaliation or discrimination',
                            'You must give two weeks notice before quitting',
                            'Your employer needs a documented reason to fire you'
                        ],
                        correct: 1,
                        explanation: 'At-will means you can be fired without a specific cause, but it does NOT mean you can be fired for illegal reasons. Discrimination, retaliation, exercising legal rights, and whistleblowing are all exceptions to at-will employment.'
                    }
                ]
            }
        },
        {
            id: 4,
            title: 'Taking Action',
            subtitle: 'Filing complaints, getting help, and fighting back',
            topics: [
                {
                    id: 'internal-complaints',
                    title: 'Filing Internal Complaints Strategically',
                    content: `
                        <h2>Filing Internal Complaints Strategically</h2>

                        <h3>Why File Internally First?</h3>
                        <ul>
                            <li>Many agencies (like the EEOC) want to see that you tried internal channels first</li>
                            <li>It creates a documented record that the company was put on notice</li>
                            <li>It establishes the timeline for your retaliation claim</li>
                            <li>Sometimes it actually resolves the issue (rare but possible)</li>
                            <li>The company's response (or lack thereof) becomes evidence</li>
                        </ul>

                        <h3>How to File an Effective Internal Complaint</h3>

                        <h4>Step 1: Put It in Writing</h4>
                        <ul>
                            <li>Email — not verbal. Always email.</li>
                            <li>Address it to HR and your manager's supervisor (or just HR if the issue is with your direct manager)</li>
                            <li>BCC your personal email</li>
                        </ul>

                        <h4>Step 2: Use Magic Language</h4>
                        <p>Include words that trigger legal obligations:</p>
                        <div class="example">
                            <strong>Use these phrases:</strong>
                            <ul>
                                <li>"I am reporting <strong>discrimination</strong> based on [protected class]"</li>
                                <li>"I believe this constitutes <strong>retaliation</strong> for my [protected activity]"</li>
                                <li>"I am requesting a <strong>reasonable accommodation</strong> under the ADA"</li>
                                <li>"I am filing a formal <strong>complaint</strong>"</li>
                                <li>"I am requesting that this be <strong>investigated</strong>"</li>
                            </ul>
                            <em>These words create legal duties for the employer. Once they're on notice, their failure to act properly becomes additional evidence.</em>
                        </div>

                        <h4>Step 3: Be Specific and Factual</h4>
                        <ul>
                            <li>State specific dates, actions, and people involved</li>
                            <li>Reference specific policies that were violated</li>
                            <li>Describe the impact on your employment</li>
                            <li>Avoid emotional language — be clinical and precise</li>
                        </ul>

                        <h4>Step 4: Request a Written Response</h4>
                        <ul>
                            <li>"Please confirm receipt of this complaint in writing"</li>
                            <li>"Please provide the outcome of any investigation in writing"</li>
                            <li>"Please provide a timeline for when this will be addressed"</li>
                        </ul>

                        <h3>After Filing</h3>
                        <ul>
                            <li>Document everything that happens next — this is when retaliation often escalates</li>
                            <li>Note if they investigate or don't</li>
                            <li>Note if anything changes (for better or worse)</li>
                            <li>If nothing changes in 2-4 weeks, follow up in writing</li>
                        </ul>

                        <div class="highlight">
                            <strong>The Dual Purpose:</strong> An internal complaint serves two purposes: (1) it might actually fix the problem, and (2) if it doesn't, it becomes powerful evidence in your external complaint. Either way, you win.
                        </div>
                    `
                },
                {
                    id: 'external-agencies',
                    title: 'Filing with Government Agencies',
                    content: `
                        <h2>Filing with Government Agencies</h2>

                        <h3>Know Your Agencies</h3>

                        <h4>EEOC (Equal Employment Opportunity Commission)</h4>
                        <ul>
                            <li><strong>What they handle:</strong> Discrimination and retaliation based on race, color, religion, sex, national origin, age, disability, genetic information</li>
                            <li><strong>Deadline:</strong> 180 days from the violation (300 days in states with their own agency)</li>
                            <li><strong>How to file:</strong> Online at eeoc.gov, in person at a local office, or by mail</li>
                            <li><strong>Cost:</strong> Free</li>
                            <li><strong>What happens:</strong> EEOC investigates, may attempt mediation, may issue a "right to sue" letter</li>
                        </ul>

                        <h4>State Civil Rights Agencies</h4>
                        <ul>
                            <li><strong>California:</strong> Civil Rights Department (CRD, formerly DFEH) — covers employers with 5+ employees (lower than federal threshold)</li>
                            <li>Many states have agencies that provide MORE protections than federal law</li>
                            <li>Filing with one often cross-files with the other</li>
                        </ul>

                        <h4>Department of Labor (DOL)</h4>
                        <ul>
                            <li><strong>What they handle:</strong> Wage and hour violations, FMLA violations, OSHA retaliation</li>
                            <li><strong>Wage claims:</strong> Back pay, overtime, minimum wage</li>
                            <li><strong>OSHA complaints:</strong> Safety violations and retaliation for reporting them</li>
                        </ul>

                        <h4>NLRB (National Labor Relations Board)</h4>
                        <ul>
                            <li><strong>What they handle:</strong> Violations of organizing rights, retaliation for concerted activity</li>
                            <li>Applies to most private sector employees (including nonprofits)</li>
                            <li><strong>Deadline:</strong> 6 months from the violation</li>
                        </ul>

                        <h4>State Attorney General</h4>
                        <ul>
                            <li>Oversees nonprofits in most states</li>
                            <li>Can investigate financial misconduct, misuse of funds, governance failures</li>
                            <li>Particularly powerful if a nonprofit is misusing grant funds or charitable donations</li>
                        </ul>

                        <h3>Key Deadlines to Know</h3>
                        <table>
                            <tr><th>Agency</th><th>Deadline</th></tr>
                            <tr><td>EEOC (no state agency)</td><td>180 days</td></tr>
                            <tr><td>EEOC (with state agency)</td><td>300 days</td></tr>
                            <tr><td>California CRD</td><td>3 years</td></tr>
                            <tr><td>NLRB</td><td>6 months</td></tr>
                            <tr><td>OSHA retaliation</td><td>30 days</td></tr>
                            <tr><td>DOL wage claims</td><td>2-3 years</td></tr>
                        </table>

                        <div class="highlight">
                            <strong>Don't Wait:</strong> Deadlines are strict and non-negotiable. If you think you have a claim, file sooner rather than later. You can always withdraw a complaint, but you can't file after the deadline passes.
                        </div>
                    `
                },
                {
                    id: 'finding-a-lawyer',
                    title: 'When & How to Get a Lawyer',
                    content: `
                        <h2>When & How to Get a Lawyer</h2>

                        <h3>When You Need an Attorney</h3>
                        <ul>
                            <li>You've been terminated or think termination is imminent</li>
                            <li>You've been offered a severance agreement (NEVER sign without a lawyer reviewing it)</li>
                            <li>You're being put on a PIP after protected activity</li>
                            <li>Internal complaints have gone nowhere or made things worse</li>
                            <li>The situation involves complex legal issues (ADA accommodation, FMLA interference)</li>
                            <li>You're not sure if what's happening to you is illegal</li>
                            <li>You want to file a government agency complaint and want guidance</li>
                        </ul>

                        <h3>Types of Employment Attorneys</h3>
                        <ul>
                            <li><strong>Plaintiff-side (employee-side):</strong> These are YOUR lawyers. They represent workers against employers.</li>
                            <li><strong>Defense-side (employer-side):</strong> These represent companies. Do NOT accidentally hire one of these.</li>
                            <li>Look for firms that specifically say "employee rights" or "workers' rights"</li>
                        </ul>

                        <h3>How to Find One</h3>
                        <ul>
                            <li><strong>NELA (National Employment Law Association):</strong> nela.org — directory of employee-side attorneys</li>
                            <li><strong>State bar association referral:</strong> Most state bars have lawyer referral services</li>
                            <li><strong>Legal aid organizations:</strong> Free legal help if you qualify based on income</li>
                            <li><strong>Law school clinics:</strong> Free representation supervised by professors</li>
                            <li><strong>Google reviews:</strong> Search "[your city] employment lawyer employee rights" and read reviews</li>
                        </ul>

                        <h3>Cost & Payment Structures</h3>
                        <ul>
                            <li><strong>Free consultation:</strong> Most employment attorneys offer free initial consultations (30-60 minutes)</li>
                            <li><strong>Contingency fee:</strong> Attorney gets paid only if you win (typically 33-40% of recovery). You pay nothing upfront.</li>
                            <li><strong>Hourly rate:</strong> $200-$500+/hour — used for cases that don't have large potential damages</li>
                            <li><strong>Hybrid:</strong> Reduced hourly rate + smaller contingency percentage</li>
                        </ul>

                        <h3>What to Bring to Your Consultation</h3>
                        <ul>
                            <li>Your timeline of events (the paper trail you've been building!)</li>
                            <li>Key documents: emails, performance reviews, complaint letters, PIP</li>
                            <li>Your employment contract or offer letter</li>
                            <li>Employee handbook</li>
                            <li>Pay stubs (if wage issues are involved)</li>
                            <li>Names of witnesses</li>
                            <li>A clear, concise summary of what happened</li>
                        </ul>

                        <div class="example">
                            <strong>Red Flags in an Attorney:</strong>
                            <ul>
                                <li>Promises a specific outcome ("You'll definitely win")</li>
                                <li>Pressures you to sign a retainer immediately</li>
                                <li>Doesn't explain the fee structure clearly</li>
                                <li>Also represents employers (conflict of interest)</li>
                                <li>Doesn't listen to your story</li>
                            </ul>
                        </div>

                        <div class="highlight">
                            <strong>The Consultation Is Free — Use It:</strong> Even if you're not sure you have a case, a free consultation with an employment attorney costs you nothing but time. Let them assess your situation. Having an attorney in your corner changes the dynamic entirely.
                        </div>
                    `
                },
                {
                    id: 'demand-letters',
                    title: 'Demand Letters & Formal Notices',
                    content: `
                        <h2>Demand Letters & Formal Notices</h2>

                        <h3>What Is a Demand Letter?</h3>
                        <div class="definition">
                            A formal written notice from you (or your attorney) to your employer, outlining the legal violations, the evidence you have, and what you want them to do about it.
                        </div>

                        <h3>Why Demand Letters Work</h3>
                        <ul>
                            <li><strong>Shows you're serious:</strong> An employer who receives a demand letter knows you're prepared to escalate</li>
                            <li><strong>Creates a legal record:</strong> Establishes that the employer was formally notified</li>
                            <li><strong>Often resolves without litigation:</strong> Many employers settle after a demand letter to avoid the cost and exposure of a lawsuit</li>
                            <li><strong>Attorney demand letters are more powerful:</strong> A letter on law firm letterhead gets immediate attention</li>
                        </ul>

                        <h3>What a Demand Letter Includes</h3>
                        <ol>
                            <li><strong>Statement of facts:</strong> What happened, with dates and specifics</li>
                            <li><strong>Legal basis:</strong> Which laws were violated</li>
                            <li><strong>Evidence summary:</strong> What documentation you have (don't reveal everything)</li>
                            <li><strong>Demand:</strong> What you want (reinstatement, back pay, policy changes, severance, etc.)</li>
                            <li><strong>Deadline:</strong> Typically 10-30 days to respond</li>
                            <li><strong>Consequences:</strong> What you'll do if they don't comply (file with EEOC, pursue litigation, etc.)</li>
                        </ol>

                        <h3>Writing Your Own (Without an Attorney)</h3>
                        <p>If you can't afford or access an attorney, you can write a demand letter yourself:</p>
                        <ul>
                            <li>Keep it professional and factual — no emotions, no threats beyond legal action</li>
                            <li>Be specific about dates, incidents, and legal violations</li>
                            <li>State clearly what resolution you're seeking</li>
                            <li>Send it via email AND certified mail (return receipt requested)</li>
                            <li>Keep copies of everything</li>
                        </ul>

                        <h3>When NOT to Send a Demand Letter</h3>
                        <ul>
                            <li>If you haven't documented enough yet — build your case first</li>
                            <li>If you're still employed and want to stay — it may escalate the situation</li>
                            <li>If your attorney advises against it (sometimes filing directly is better strategy)</li>
                        </ul>

                        <div class="highlight">
                            <strong>Power Move:</strong> A well-crafted demand letter from an employment attorney is often enough to bring an employer to the negotiating table. Most employers would rather settle than fight a well-documented retaliation case.
                        </div>
                    `
                },
                {
                    id: 'whistleblower-protections',
                    title: 'Whistleblower Protections Deep Dive',
                    content: `
                        <h2>Whistleblower Protections Deep Dive</h2>

                        <h3>Beyond Basic Reporting</h3>
                        <p>Whistleblower protections are some of the strongest anti-retaliation provisions in the law. If you're reporting illegal activity, fraud, or safety violations, you have powerful protections.</p>

                        <h3>Federal Whistleblower Laws</h3>
                        <ul>
                            <li><strong>False Claims Act (Qui Tam):</strong> Report fraud against the government — you can receive 15-30% of recovered funds. This is especially relevant for nonprofits receiving government grants.</li>
                            <li><strong>Sarbanes-Oxley:</strong> Protects employees of publicly traded companies who report securities fraud</li>
                            <li><strong>Dodd-Frank:</strong> SEC whistleblower program — 10-30% of sanctions over $1 million</li>
                            <li><strong>OSHA Whistleblower Program:</strong> Covers 25+ federal statutes protecting employees who report violations</li>
                        </ul>

                        <h3>Nonprofit-Specific Whistleblowing</h3>
                        <ul>
                            <li><strong>Grant fraud:</strong> If your nonprofit is misusing grant funds, you can report to the funding agency and potentially file a False Claims Act suit</li>
                            <li><strong>Tax fraud:</strong> Misrepresenting activities to maintain 501(c)(3) status — report to IRS</li>
                            <li><strong>Financial mismanagement:</strong> Report to the state attorney general who oversees nonprofits</li>
                            <li><strong>Safety violations:</strong> Same OSHA protections as any other employer</li>
                        </ul>

                        <h3>State Whistleblower Laws</h3>
                        <ul>
                            <li>Many states have their own whistleblower statutes with broader protections</li>
                            <li><strong>California:</strong> Labor Code §1102.5 — one of the broadest in the nation. Protects employees who report any violation of state or federal law.</li>
                            <li>Some states allow private lawsuits for whistleblower retaliation</li>
                        </ul>

                        <h3>How to Blow the Whistle Safely</h3>
                        <ol>
                            <li><strong>Document everything first</strong> — gather your evidence before making any reports</li>
                            <li><strong>Consult an attorney</strong> — preferably a whistleblower specialist (many work on contingency)</li>
                            <li><strong>Consider anonymous reporting</strong> if available (OSHA online, SEC tip line)</li>
                            <li><strong>Report to the right agency</strong> — your attorney can help you identify the right channel</li>
                            <li><strong>Keep meticulous records</strong> of any retaliation that follows</li>
                        </ol>

                        <div class="highlight">
                            <strong>Financial Incentive:</strong> Whistleblower rewards can be substantial. False Claims Act recoveries have totaled billions of dollars, with whistleblowers receiving hundreds of millions. If your nonprofit is defrauding the government, you could be compensated for coming forward.
                        </div>
                    `
                }
            ],
            quiz: {
                questions: [
                    {
                        question: 'Why is it important to use specific legal language (like "discrimination," "retaliation," "formal complaint") in your internal complaints?',
                        options: [
                            'To sound more professional',
                            'These words trigger legal obligations for the employer, creating duties they must fulfill',
                            'It makes HR more sympathetic to your case',
                            'It\'s required by law to use exact legal terms'
                        ],
                        correct: 1,
                        explanation: 'Using words like "discrimination," "retaliation," and "formal complaint" puts the employer on legal notice. Once they\'re on notice, their failure to properly investigate and address the issue becomes additional evidence against them.'
                    },
                    {
                        question: 'What is the EEOC filing deadline in a state that has its own civil rights agency?',
                        options: [
                            '30 days',
                            '90 days',
                            '180 days',
                            '300 days'
                        ],
                        correct: 3,
                        explanation: 'In states that have their own civil rights enforcement agency (like California\'s CRD), the EEOC filing deadline is extended from 180 days to 300 days from the date of the violation.'
                    },
                    {
                        question: 'What should you NEVER do when offered a severance agreement?',
                        options: [
                            'Read it carefully',
                            'Ask questions about it',
                            'Sign it immediately without having a lawyer review it',
                            'Take notes about it'
                        ],
                        correct: 2,
                        explanation: 'Never sign a severance agreement without having an employment attorney review it first. Severance agreements typically include a release of all legal claims — you could be signing away your right to pursue a retaliation case.'
                    },
                    {
                        question: 'Why is the False Claims Act (Qui Tam) particularly relevant for nonprofit employees?',
                        options: [
                            'It only applies to nonprofits',
                            'Many nonprofits receive government grants, and misusing those funds is fraud against the government — whistleblowers can receive 15-30% of recovered funds',
                            'It allows you to start your own nonprofit',
                            'It guarantees you won\'t be fired'
                        ],
                        correct: 1,
                        explanation: 'The False Claims Act allows whistleblowers to report fraud against the government and receive 15-30% of recovered funds. Nonprofits that misuse government grant money are committing exactly the type of fraud this law targets.'
                    }
                ]
            }
        },
        {
            id: 5,
            title: 'Advanced Self-Advocacy & Recovery',
            subtitle: 'Negotiate your exit, protect your future, and turn adversity into strength',
            topics: [
                {
                    id: 'constructive-discharge',
                    title: 'Constructive Discharge — When Quitting Is Being Fired',
                    content: `
                        <h2>Constructive Discharge</h2>

                        <div class="definition">
                            <strong>Constructive Discharge:</strong> When an employer makes working conditions so intolerable that a reasonable person would feel compelled to resign. Legally, this is treated as a termination — not a voluntary quit.
                        </div>

                        <h3>Why This Matters</h3>
                        <ul>
                            <li>If you quit, you typically can't claim wrongful termination or collect unemployment</li>
                            <li>Constructive discharge changes that — if conditions were bad enough, your "resignation" is treated as a firing</li>
                            <li>This preserves your legal claims and potentially your unemployment benefits</li>
                        </ul>

                        <h3>What Courts Look For</h3>
                        <ul>
                            <li>Conditions so intolerable that a <strong>reasonable person</strong> would resign</li>
                            <li>The employer <strong>knew or should have known</strong> about the conditions</li>
                            <li>The employee gave the employer a <strong>reasonable opportunity</strong> to fix it (usually by complaining)</li>
                            <li>A <strong>pattern</strong> of behavior, not just one bad day</li>
                        </ul>

                        <h3>Examples That May Qualify</h3>
                        <ul>
                            <li>Severe and ongoing harassment after complaints</li>
                            <li>Significant demotion in duties (even without title change)</li>
                            <li>Being set up to fail with impossible expectations</li>
                            <li>Complete isolation from team and decision-making</li>
                            <li>Creating a hostile environment that targets you specifically</li>
                            <li>Drastic and unjustified changes to your working conditions</li>
                        </ul>

                        <h3>Before You Quit</h3>
                        <ol>
                            <li><strong>Document everything</strong> — you need evidence of the intolerable conditions</li>
                            <li><strong>File internal complaints</strong> — show that you gave them a chance to fix it</li>
                            <li><strong>File with an external agency</strong> — EEOC, state agency</li>
                            <li><strong>Consult an attorney</strong> — they can tell you if your situation qualifies</li>
                            <li><strong>Don't just walk out</strong> — a strategic exit preserves your claims</li>
                        </ol>

                        <div class="highlight">
                            <strong>Critical:</strong> If you're thinking about quitting because conditions are unbearable, talk to an attorney FIRST. There's a right way and a wrong way to resign in a retaliation situation. The wrong way can cost you your entire case.
                        </div>
                    `
                },
                {
                    id: 'negotiating-exit',
                    title: 'Negotiating Your Exit',
                    content: `
                        <h2>Negotiating Your Exit</h2>

                        <h3>Leverage: You Have More Than You Think</h3>
                        <p>If you've been building your paper trail, filing complaints, and documenting retaliation, you have leverage — even if you feel powerless.</p>

                        <h3>What You Can Negotiate</h3>
                        <ul>
                            <li><strong>Severance pay:</strong> Typically 1-4 weeks per year of service, but can be more with leverage</li>
                            <li><strong>Extended health insurance:</strong> COBRA payments or continued coverage</li>
                            <li><strong>Positive reference:</strong> Written agreement on what they'll say about you</li>
                            <li><strong>Unemployment eligibility:</strong> Agreement not to contest your unemployment claim</li>
                            <li><strong>Non-disparagement clause:</strong> Mutual — they can't bad-mouth you, you can't bad-mouth them</li>
                            <li><strong>Removal of negative records:</strong> Clearing your personnel file of write-ups and PIPs</li>
                            <li><strong>Vesting of benefits:</strong> Accelerated vesting of 401(k) match or stock options</li>
                            <li><strong>Outplacement services:</strong> Help finding your next job</li>
                            <li><strong>Agreed-upon departure narrative:</strong> What you both tell people about why you left</li>
                        </ul>

                        <h3>What They Want from You</h3>
                        <ul>
                            <li><strong>Release of claims:</strong> You agree not to sue — THIS is what you're trading for severance</li>
                            <li><strong>Confidentiality:</strong> You agree not to discuss the terms or the situation</li>
                            <li><strong>Non-disparagement:</strong> You agree not to publicly criticize them</li>
                            <li><strong>Return of property:</strong> Company laptop, documents, etc.</li>
                        </ul>

                        <h3>Negotiation Tips</h3>
                        <ul>
                            <li><strong>Never accept the first offer</strong> — it's always negotiable</li>
                            <li><strong>Don't negotiate alone</strong> — have an attorney review everything</li>
                            <li><strong>Know your BATNA:</strong> What's your alternative? (EEOC claim, lawsuit, going public)</li>
                            <li><strong>Be professional but firm:</strong> "I appreciate the offer, but given the circumstances, I believe [X] is more appropriate"</li>
                            <li><strong>Get everything in writing</strong></li>
                            <li><strong>Review period:</strong> You have 21 days to review a severance agreement (40+ employees: 45 days), and 7 days to revoke after signing</li>
                        </ul>

                        <div class="example">
                            <strong>Leverage Example:</strong> You were retaliated against after reporting misuse of grant funds at a nonprofit. You have documented evidence, filed with the EEOC, and consulted an attorney. The nonprofit offers you 2 weeks' severance. Your attorney responds with a letter detailing the evidence and asking for 6 months' pay, continued insurance, and a positive reference — or you'll pursue litigation. They settle for 4 months' pay plus benefits. That's the power of documentation.
                        </div>

                        <div class="highlight">
                            <strong>The Release:</strong> NEVER sign a release of claims without understanding what you're giving up. Once you sign, you generally cannot pursue legal action related to the events covered by the release. An attorney can tell you what your claims are worth.
                        </div>
                    `
                },
                {
                    id: 'protecting-mental-health',
                    title: 'Protecting Your Mental Health',
                    content: `
                        <h2>Protecting Your Mental Health</h2>

                        <h3>The Toll Is Real</h3>
                        <ul>
                            <li>Workplace retaliation is a form of psychological abuse</li>
                            <li>It can cause anxiety, depression, sleep problems, loss of confidence, and PTSD-like symptoms</li>
                            <li>The gaslighting aspect ("You're overreacting," "That didn't happen") makes you doubt your own reality</li>
                            <li>Financial stress from potential job loss compounds everything</li>
                            <li>It's normal to feel angry, scared, exhausted, and overwhelmed — all at once</li>
                        </ul>

                        <h3>Protecting Yourself Mentally</h3>

                        <h4>Separate Your Identity from Your Job</h4>
                        <ul>
                            <li>You are not your job title, your performance review, or your employer's opinion of you</li>
                            <li>Their treatment of you says everything about them and nothing about your worth</li>
                            <li>Remind yourself: standing up for your rights takes courage, not weakness</li>
                        </ul>

                        <h4>Build Your Support System</h4>
                        <ul>
                            <li><strong>Trusted friends/family:</strong> People who believe you and validate your experience</li>
                            <li><strong>Therapist/counselor:</strong> A professional who understands workplace trauma</li>
                            <li><strong>Support groups:</strong> Others who've experienced workplace retaliation (online communities exist)</li>
                            <li><strong>Your attorney:</strong> Having someone who believes in your case is validating</li>
                        </ul>

                        <h4>Practical Self-Care During a Dispute</h4>
                        <ul>
                            <li>Set boundaries on when you think about work (not 24/7)</li>
                            <li>Exercise — it genuinely helps with stress and anxiety</li>
                            <li>Maintain routines outside of work</li>
                            <li>Limit alcohol and other coping mechanisms that make things worse</li>
                            <li>Journal — not just for evidence, but for processing emotions</li>
                            <li>Know that this is temporary — there IS an other side</li>
                        </ul>

                        <h3>When to Seek Professional Help</h3>
                        <ul>
                            <li>Persistent anxiety or panic attacks</li>
                            <li>Depression or hopelessness</li>
                            <li>Inability to sleep or constant fatigue</li>
                            <li>Difficulty concentrating outside of work</li>
                            <li>Withdrawal from relationships and activities you enjoy</li>
                        </ul>

                        <div class="highlight">
                            <strong>Your Health Comes First:</strong> No job is worth destroying your mental health. If the situation is making you physically or mentally sick, prioritize your well-being. Consult your attorney about options — including leave, constructive discharge, or a negotiated exit.
                        </div>
                    `
                },
                {
                    id: 'turning-adversity-into-advocacy',
                    title: 'From Adversity to Advocacy',
                    content: `
                        <h2>From Adversity to Advocacy</h2>

                        <h3>You're Not Alone — And Others Need What You've Learned</h3>
                        <p>Going through workplace retaliation is painful, but it also gives you knowledge and experience that can help others. Many of the strongest workplace advocates started as victims who refused to stay silent.</p>

                        <h3>Using Your Experience</h3>
                        <ul>
                            <li><strong>Help others recognize retaliation:</strong> Many people don't know what they're experiencing has a name — and that it's illegal</li>
                            <li><strong>Share resources:</strong> Direct people to EEOC, state agencies, NELA, legal aid</li>
                            <li><strong>Mentor others:</strong> Teach the documentation and self-advocacy skills you've learned</li>
                            <li><strong>Support pending cases:</strong> Your experience makes you a credible voice</li>
                        </ul>

                        <h3>Systemic Change</h3>
                        <ul>
                            <li><strong>Advocate for stronger workplace protections</strong> in your state and city</li>
                            <li><strong>Support organizations</strong> that fight for workers' rights (NELA, ACLU, worker centers)</li>
                            <li><strong>Share your story</strong> (when legally safe to do so) — public awareness drives change</li>
                            <li><strong>Review your former employer</strong> on Glassdoor (factual, not emotional) to warn others</li>
                        </ul>

                        <h3>Rebuilding Your Career</h3>
                        <ul>
                            <li><strong>You're not damaged goods:</strong> Many employers value people who stand up for what's right</li>
                            <li><strong>Reframe your narrative:</strong> "I identified issues and advocated for solutions" — this shows leadership</li>
                            <li><strong>Address gaps honestly:</strong> "I left due to a workplace dispute that was resolved" is fine — you don't owe details</li>
                            <li><strong>Lean on your network:</strong> Personal connections are the #1 way people find jobs</li>
                            <li><strong>Consider new paths:</strong> This experience may redirect you to more meaningful work — employment law, advocacy, HR reform, nonprofit oversight</li>
                        </ul>

                        <h3>The Bigger Picture</h3>
                        <p>Every person who stands up against workplace retaliation makes it a little harder for the next employer to get away with it. Your fight isn't just for you — it's for every coworker who's too scared to speak up, every employee who will come after you, and every worker who deserves better.</p>

                        <div class="highlight">
                            <strong>Final Thought:</strong> You spoke up. You challenged power. You advocated for yourself or others. That is something to be proud of, regardless of the outcome. The fact that you're here learning about your rights means you're already ahead of most people. Now go help someone else get there too.
                        </div>
                    `
                }
            ],
            quiz: {
                questions: [
                    {
                        question: 'What is "constructive discharge"?',
                        options: [
                            'When you voluntarily resign because you found a better job',
                            'When an employer makes conditions so intolerable that a reasonable person would feel compelled to resign — legally treated as termination',
                            'When you are officially fired with severance',
                            'When your contract naturally expires'
                        ],
                        correct: 1,
                        explanation: 'Constructive discharge occurs when working conditions become so intolerable that a reasonable person would resign. Courts treat this as an involuntary termination, preserving the employee\'s legal claims.'
                    },
                    {
                        question: 'How long do you typically have to review a severance agreement before signing?',
                        options: [
                            '24 hours',
                            '7 days',
                            '21 days (45 days if part of a group layoff), plus 7 days to revoke after signing',
                            'You must sign immediately'
                        ],
                        correct: 2,
                        explanation: 'Under the Older Workers Benefit Protection Act, employees must be given at least 21 days to review a severance agreement (45 days for group layoffs), plus 7 days after signing to revoke. Even if you\'re under 40, never let an employer rush you.'
                    },
                    {
                        question: 'What should you do BEFORE quitting a job where you\'re being retaliated against?',
                        options: [
                            'Post about it on social media first',
                            'Just walk out — your mental health is more important',
                            'Document everything, file internal and external complaints, and consult an attorney before resigning',
                            'Give two weeks notice with no other preparation'
                        ],
                        correct: 2,
                        explanation: 'Before quitting, you need to document conditions, file complaints (internal and external), and consult an attorney. A strategic exit preserves your legal claims, including potential constructive discharge. Walking out without preparation could cost you your case.'
                    },
                    {
                        question: 'What is the most important thing to remember about your experience with workplace retaliation?',
                        options: [
                            'You should never discuss it with anyone',
                            'It means you\'re a bad employee',
                            'Standing up for your rights takes courage, and your experience can help others in similar situations',
                            'You should always accept whatever the employer offers'
                        ],
                        correct: 2,
                        explanation: 'Experiencing workplace retaliation and advocating for yourself takes courage. Your knowledge and experience can help others recognize and fight retaliation — every person who stands up makes it harder for employers to get away with it.'
                    }
                ]
            }
        }
    ]
};
