// Labor Laws Curriculum Data
const laborData = {
    id: 'labor',
    title: 'Labor Laws',
    icon: '⚖️',
    description: 'Know your rights as an employee and understand employment law fundamentals.',
    levels: [
        {
            id: 1,
            title: 'Employment Basics',
            subtitle: 'Foundation of workplace rights',
            topics: [
                {
                    id: 'employee-vs-contractor',
                    title: 'Employee vs Independent Contractor',
                    content: `
                        <h2>Employee vs Independent Contractor</h2>
                        
                        <div class="definition">
                            <strong>Employee:</strong> Someone who works under the control and direction of an employer. The employer controls WHAT work is done and HOW it's done.
                        </div>
                        
                        <div class="definition">
                            <strong>Independent Contractor:</strong> Self-employed individuals who control how they complete work. The client only controls the final result.
                        </div>
                        
                        <h3>Why Classification Matters</h3>
                        
                        <p><strong>Employees Get:</strong></p>
                        <ul>
                            <li>Minimum wage protection</li>
                            <li>Overtime pay</li>
                            <li>Workers' compensation</li>
                            <li>Unemployment insurance</li>
                            <li>Tax withholding</li>
                            <li>Anti-discrimination protection</li>
                            <li>FMLA leave (if eligible)</li>
                        </ul>
                        
                        <p><strong>Contractors Get:</strong></p>
                        <ul>
                            <li>More flexibility</li>
                            <li>Tax deductions for expenses</li>
                            <li>Control over schedule</li>
                            <li>Can work for multiple clients</li>
                        </ul>
                        
                        <h3>IRS Classification Test</h3>
                        <ul>
                            <li><strong>Behavioral:</strong> Does the company control how you work?</li>
                            <li><strong>Financial:</strong> Who controls business aspects (expenses, tools)?</li>
                            <li><strong>Relationship:</strong> Benefits, contracts, permanence?</li>
                        </ul>
                        
                        <div class="highlight">
                            <strong>Warning:</strong> Misclassification is illegal. If you're treated like an employee but classified as a contractor, you may be entitled to back pay and benefits.
                        </div>
                    `
                },
                {
                    id: 'at-will-employment',
                    title: 'At-Will Employment',
                    content: `
                        <h2>At-Will Employment</h2>
                        
                        <div class="definition">
                            <strong>At-Will Employment:</strong> Employment that can be terminated by either party (employer or employee) at any time, for any legal reason, with or without cause or notice.
                        </div>
                        
                        <h3>The Default Rule</h3>
                        <ul>
                            <li>At-will is the default in 49 states (not Montana)</li>
                            <li>No contract required for employment</li>
                            <li>Either side can end the relationship</li>
                        </ul>
                        
                        <h3>Exceptions to At-Will</h3>
                        <p>You CANNOT be fired for:</p>
                        <ul>
                            <li><strong>Discrimination:</strong> Race, sex, religion, age, disability, etc.</li>
                            <li><strong>Retaliation:</strong> For reporting violations or filing complaints</li>
                            <li><strong>Public Policy:</strong> Refusing illegal acts, jury duty, voting</li>
                            <li><strong>Contract:</strong> If you have an employment contract</li>
                            <li><strong>Implied Contract:</strong> Promises made in handbooks/policies</li>
                        </ul>
                        
                        <h3>Documentation Matters</h3>
                        <ul>
                            <li>Keep records of your work performance</li>
                            <li>Save positive evaluations</li>
                            <li>Document any concerning incidents</li>
                            <li>Keep copies of policies and handbooks</li>
                        </ul>
                        
                        <div class="highlight">
                            <strong>Know Your Rights:</strong> Even in at-will states, employers must follow anti-discrimination laws and cannot fire you for illegal reasons.
                        </div>
                    `
                },
                {
                    id: 'minimum-wage-overtime',
                    title: 'Minimum Wage and Overtime',
                    content: `
                        <h2>Minimum Wage and Overtime (FLSA)</h2>
                        
                        <div class="definition">
                            <strong>FLSA:</strong> Fair Labor Standards Act. Federal law establishing minimum wage, overtime pay, and child labor standards.
                        </div>
                        
                        <h3>Federal Minimum Wage</h3>
                        <ul>
                            <li>Current federal minimum: $7.25/hour</li>
                            <li>Many states and cities have higher minimums</li>
                            <li>You get whichever is HIGHER</li>
                            <li>Tipped employees: $2.13/hour (if tips make up difference)</li>
                        </ul>
                        
                        <h3>Overtime Rules</h3>
                        <ul>
                            <li><strong>Rate:</strong> 1.5x regular rate for hours over 40/week</li>
                            <li><strong>Applies to:</strong> Non-exempt employees</li>
                            <li>Some states require daily overtime (over 8 hours/day)</li>
                            <li>Overtime is based on hours WORKED, not scheduled</li>
                        </ul>
                        
                        <h3>Who's Covered</h3>
                        <ul>
                            <li>Most hourly workers</li>
                            <li>Some salaried workers (if under salary threshold)</li>
                            <li>Businesses with $500,000+ revenue</li>
                            <li>Interstate commerce</li>
                        </ul>
                        
                        <div class="example">
                            <strong>Example:</strong><br>
                            Hourly rate: $20/hour<br>
                            Hours worked: 50 hours<br><br>
                            Regular pay (40 hrs): $800<br>
                            Overtime pay (10 hrs × $30): $300<br>
                            <strong>Total: $1,100</strong>
                        </div>
                        
                        <div class="highlight">
                            <strong>Check Your State:</strong> Many states have higher minimum wages. California, Washington, and Massachusetts exceed $15/hour.
                        </div>
                    `
                }
            ],
            quiz: [
                {
                    question: "What's the main difference between an employee and contractor?",
                    options: [
                        "Contractors make more money",
                        "Employees are controlled by employer on how work is done",
                        "Contractors get better benefits",
                        "There is no real difference"
                    ],
                    correct: 1,
                    explanation: "The key distinction is control. Employers control how employees do their work, while contractors control their own methods."
                },
                {
                    question: "What is 'at-will' employment?",
                    options: [
                        "Employment that requires a contract",
                        "Employment that can be ended by either party for any legal reason",
                        "Part-time work only",
                        "Government employment"
                    ],
                    correct: 1,
                    explanation: "At-will employment means either the employer or employee can end the relationship at any time, for any legal reason."
                },
                {
                    question: "What is the federal overtime rate?",
                    options: [
                        "Same as regular pay",
                        "Double time",
                        "1.5 times regular rate (time and a half)",
                        "Varies by employer"
                    ],
                    correct: 2,
                    explanation: "The FLSA requires overtime pay at 1.5 times the regular rate for hours worked over 40 in a week."
                },
                {
                    question: "Can you be fired for reporting safety violations?",
                    options: [
                        "Yes, under at-will employment",
                        "No, that's illegal retaliation",
                        "Only if you signed a waiver",
                        "Yes, but only in certain states"
                    ],
                    correct: 1,
                    explanation: "Firing someone for reporting violations is illegal retaliation. This is an exception to at-will employment."
                },
                {
                    question: "If state minimum wage is higher than federal, which applies?",
                    options: [
                        "Federal always",
                        "The higher amount (state)",
                        "Employer's choice",
                        "The lower amount"
                    ],
                    correct: 1,
                    explanation: "Workers are entitled to whichever minimum wage is higher—federal or state."
                }
            ]
        },
        {
            id: 2,
            title: 'Worker Rights',
            subtitle: 'Discrimination, leave, and safety',
            topics: [
                {
                    id: 'discrimination-laws',
                    title: 'Anti-Discrimination Laws',
                    content: `
                        <h2>Anti-Discrimination Laws</h2>
                        
                        <h3>Title VII of the Civil Rights Act</h3>
                        <div class="definition">
                            <strong>Title VII:</strong> Prohibits discrimination based on race, color, religion, sex, or national origin. Applies to employers with 15+ employees.
                        </div>
                        
                        <h3>Protected Characteristics</h3>
                        <ul>
                            <li><strong>Race and Color</strong></li>
                            <li><strong>Religion:</strong> Includes accommodation needs</li>
                            <li><strong>Sex:</strong> Includes pregnancy, sexual orientation, gender identity</li>
                            <li><strong>National Origin:</strong> Ancestry, accent, ethnic background</li>
                            <li><strong>Age:</strong> 40+ (Age Discrimination in Employment Act)</li>
                            <li><strong>Disability:</strong> (Americans with Disabilities Act)</li>
                            <li><strong>Genetic Information:</strong> (GINA)</li>
                        </ul>
                        
                        <h3>Types of Discrimination</h3>
                        
                        <p><strong>Disparate Treatment:</strong> Intentional discrimination</p>
                        <ul>
                            <li>Treating someone differently because of protected status</li>
                        </ul>
                        
                        <p><strong>Disparate Impact:</strong> Unintentional discrimination</p>
                        <ul>
                            <li>Neutral policies that disproportionately affect protected groups</li>
                        </ul>
                        
                        <p><strong>Harassment:</strong> Including sexual harassment</p>
                        <ul>
                            <li>Quid pro quo (this for that)</li>
                            <li>Hostile work environment</li>
                        </ul>
                        
                        <h3>Filing a Complaint</h3>
                        <ul>
                            <li>File with EEOC (Equal Employment Opportunity Commission)</li>
                            <li>Must file within 180-300 days of incident</li>
                            <li>EEOC investigates and may sue on your behalf</li>
                        </ul>
                    `
                },
                {
                    id: 'fmla',
                    title: 'Family and Medical Leave (FMLA)',
                    content: `
                        <h2>Family and Medical Leave Act (FMLA)</h2>
                        
                        <div class="definition">
                            <strong>FMLA:</strong> Provides eligible employees up to 12 weeks of unpaid, job-protected leave per year for certain family and medical reasons.
                        </div>
                        
                        <h3>Eligibility Requirements</h3>
                        <ul>
                            <li>Work for covered employer (50+ employees within 75 miles)</li>
                            <li>Worked for employer 12+ months</li>
                            <li>Worked 1,250+ hours in past 12 months</li>
                        </ul>
                        
                        <h3>Qualifying Reasons for Leave</h3>
                        <ul>
                            <li>Birth and care of newborn child</li>
                            <li>Placement of child for adoption or foster care</li>
                            <li>Serious health condition of employee</li>
                            <li>Caring for spouse, child, or parent with serious health condition</li>
                            <li>Military family leave</li>
                        </ul>
                        
                        <h3>What FMLA Provides</h3>
                        <ul>
                            <li>Up to 12 weeks unpaid leave</li>
                            <li>Job protection (same or equivalent job)</li>
                            <li>Continued health insurance</li>
                            <li>Can be taken intermittently in some cases</li>
                        </ul>
                        
                        <div class="highlight">
                            <strong>Note:</strong> FMLA leave is UNPAID. However, some states have paid family leave programs, and employers may offer paid leave.
                        </div>
                        
                        <h3>States with Paid Leave</h3>
                        <p>Some states have paid family leave:</p>
                        <ul>
                            <li>California</li>
                            <li>New York</li>
                            <li>New Jersey</li>
                            <li>Washington</li>
                            <li>Massachusetts</li>
                            <li>And others...</li>
                        </ul>
                    `
                },
                {
                    id: 'workplace-safety',
                    title: 'Workplace Safety (OSHA)',
                    content: `
                        <h2>Workplace Safety - OSHA</h2>
                        
                        <div class="definition">
                            <strong>OSHA:</strong> Occupational Safety and Health Administration. Ensures safe and healthy working conditions.
                        </div>
                        
                        <h3>Employer Responsibilities</h3>
                        <ul>
                            <li>Provide workplace free from recognized hazards</li>
                            <li>Comply with OSHA standards</li>
                            <li>Provide safety training</li>
                            <li>Provide required protective equipment</li>
                            <li>Keep records of injuries and illnesses</li>
                        </ul>
                        
                        <h3>Employee Rights</h3>
                        <ul>
                            <li>Work in safe conditions</li>
                            <li>Receive training in a language you understand</li>
                            <li>Report unsafe conditions</li>
                            <li>Request OSHA inspection</li>
                            <li>See injury and illness records</li>
                            <li>Be free from retaliation for reporting</li>
                        </ul>
                        
                        <h3>Right to Refuse Dangerous Work</h3>
                        <p>You may refuse work if:</p>
                        <ul>
                            <li>You believe you're in imminent danger</li>
                            <li>A reasonable person would agree</li>
                            <li>You've asked employer to fix the danger</li>
                            <li>There's no time to go through normal channels</li>
                        </ul>
                        
                        <h3>Filing a Complaint</h3>
                        <ul>
                            <li>Online at OSHA.gov</li>
                            <li>Call 1-800-321-OSHA</li>
                            <li>Complaints can be confidential</li>
                            <li>Retaliation is illegal</li>
                        </ul>
                        
                        <div class="highlight">
                            <strong>Whistleblower Protection:</strong> You cannot be punished for reporting safety concerns. Retaliation is illegal and you can file a complaint within 30 days.
                        </div>
                    `
                }
            ],
            quiz: [
                {
                    question: "Which law prohibits discrimination based on race, sex, and religion?",
                    options: [
                        "FLSA",
                        "Title VII of the Civil Rights Act",
                        "OSHA",
                        "FMLA"
                    ],
                    correct: 1,
                    explanation: "Title VII of the Civil Rights Act prohibits employment discrimination based on race, color, religion, sex, and national origin."
                },
                {
                    question: "How much leave does FMLA provide?",
                    options: [
                        "4 weeks paid",
                        "12 weeks unpaid",
                        "Unlimited",
                        "6 months paid"
                    ],
                    correct: 1,
                    explanation: "FMLA provides up to 12 weeks of unpaid, job-protected leave per year."
                },
                {
                    question: "To be eligible for FMLA, you must have worked:",
                    options: [
                        "Any amount of time",
                        "6 months and 500 hours",
                        "12 months and 1,250 hours",
                        "2 years full-time"
                    ],
                    correct: 2,
                    explanation: "FMLA eligibility requires working for a covered employer for 12+ months and 1,250+ hours in the past year."
                },
                {
                    question: "What agency handles workplace safety?",
                    options: [
                        "FBI",
                        "EEOC",
                        "OSHA",
                        "IRS"
                    ],
                    correct: 2,
                    explanation: "OSHA (Occupational Safety and Health Administration) is responsible for workplace safety regulations."
                },
                {
                    question: "Can you be fired for reporting safety violations to OSHA?",
                    options: [
                        "Yes, at-will employment allows it",
                        "No, retaliation is illegal",
                        "Only if the complaint is false",
                        "It depends on the state"
                    ],
                    correct: 1,
                    explanation: "Retaliation for reporting safety concerns is illegal. OSHA has strong whistleblower protections."
                }
            ]
        },
        {
            id: 3,
            title: 'Compensation Laws',
            subtitle: 'Pay, exemptions, and paychecks',
            topics: [
                {
                    id: 'exempt-nonexempt',
                    title: 'Exempt vs Non-Exempt Employees',
                    content: `
                        <h2>Exempt vs Non-Exempt Status</h2>
                        
                        <div class="definition">
                            <strong>Exempt:</strong> Not entitled to overtime pay. Must meet specific salary and duties tests.
                        </div>
                        
                        <div class="definition">
                            <strong>Non-Exempt:</strong> Entitled to overtime pay for hours over 40/week.
                        </div>
                        
                        <h3>Requirements for Exempt Status</h3>
                        <p>Must meet ALL criteria:</p>
                        <ol>
                            <li><strong>Salary Basis:</strong> Paid a fixed salary (not hourly)</li>
                            <li><strong>Salary Level:</strong> At least $684/week ($35,568/year)</li>
                            <li><strong>Duties Test:</strong> Perform exempt-type work</li>
                        </ol>
                        
                        <h3>Common Exempt Categories</h3>
                        
                        <p><strong>Executive:</strong></p>
                        <ul>
                            <li>Manages the business or department</li>
                            <li>Supervises 2+ employees</li>
                            <li>Has hiring/firing authority</li>
                        </ul>
                        
                        <p><strong>Administrative:</strong></p>
                        <ul>
                            <li>Office/non-manual work</li>
                            <li>Exercise independent judgment on significant matters</li>
                        </ul>
                        
                        <p><strong>Professional:</strong></p>
                        <ul>
                            <li>Advanced knowledge in science or learning</li>
                            <li>Requires prolonged specialized study</li>
                        </ul>
                        
                        <div class="highlight">
                            <strong>Common Misclassification:</strong> Job title alone doesn't determine status. A "Manager" who doesn't meet the duties test may still be entitled to overtime.
                        </div>
                    `
                },
                {
                    id: 'overtime-rules',
                    title: 'Overtime Rules in Detail',
                    content: `
                        <h2>Overtime Rules</h2>
                        
                        <h3>Federal Rules</h3>
                        <ul>
                            <li>Time and a half (1.5x) after 40 hours/week</li>
                            <li>Based on regular rate of pay</li>
                            <li>Week is 7 consecutive 24-hour periods</li>
                            <li>No daily overtime requirement federally</li>
                        </ul>
                        
                        <h3>Calculating Regular Rate</h3>
                        <p>Regular rate includes:</p>
                        <ul>
                            <li>Hourly wage</li>
                            <li>Non-discretionary bonuses</li>
                            <li>Commissions</li>
                            <li>Shift differentials</li>
                        </ul>
                        
                        <div class="example">
                            <strong>Example with Bonus:</strong><br>
                            Hourly: $20/hour × 45 hours = $900<br>
                            Weekly bonus: $100<br><br>
                            Regular rate: ($900 + $100) ÷ 45 = $22.22<br>
                            OT premium: $22.22 × 0.5 × 5 hours = $55.56<br>
                            <strong>Total: $1,055.56</strong>
                        </div>
                        
                        <h3>State Variations</h3>
                        <ul>
                            <li><strong>California:</strong> Daily OT (over 8 hours), double time over 12</li>
                            <li><strong>Alaska:</strong> Daily OT over 8 hours</li>
                            <li><strong>Nevada:</strong> Daily OT over 8 (if paid under 1.5x minimum)</li>
                        </ul>
                        
                        <h3>Comp Time</h3>
                        <div class="definition">
                            <strong>Comp Time:</strong> Time off instead of overtime pay. Generally NOT allowed for private employers—only government employers can offer it.
                        </div>
                    `
                },
                {
                    id: 'pay-requirements',
                    title: 'Pay Frequency and Final Paychecks',
                    content: `
                        <h2>Pay Frequency and Requirements</h2>
                        
                        <h3>Federal Requirements</h3>
                        <ul>
                            <li>No federal law on pay frequency</li>
                            <li>Wages must be paid on regular paydays</li>
                            <li>Cannot withhold pay as punishment</li>
                        </ul>
                        
                        <h3>State Pay Frequency Laws</h3>
                        <ul>
                            <li>Most states require at least monthly pay</li>
                            <li>Many require bi-weekly or semi-monthly</li>
                            <li>Some allow monthly for exempt employees only</li>
                        </ul>
                        
                        <h3>Final Paycheck Rules</h3>
                        <p>Varies significantly by state:</p>
                        
                        <p><strong>Immediate (or next business day):</strong></p>
                        <ul>
                            <li>California (if fired)</li>
                            <li>Montana</li>
                            <li>Massachusetts</li>
                        </ul>
                        
                        <p><strong>Within 72 hours:</strong></p>
                        <ul>
                            <li>California (if quit without notice)</li>
                        </ul>
                        
                        <p><strong>Next regular payday:</strong></p>
                        <ul>
                            <li>Many states</li>
                        </ul>
                        
                        <h3>Deductions from Pay</h3>
                        <p>Employers CAN deduct:</p>
                        <ul>
                            <li>Taxes (required by law)</li>
                            <li>Benefits you authorized</li>
                            <li>Court-ordered garnishments</li>
                        </ul>
                        
                        <p>Employers generally CANNOT deduct:</p>
                        <ul>
                            <li>Cash register shortages</li>
                            <li>Broken equipment</li>
                            <li>Uniforms (if reduces below minimum wage)</li>
                        </ul>
                        
                        <div class="highlight">
                            <strong>Know Your State:</strong> Final paycheck laws vary dramatically. Check your state's labor department website.
                        </div>
                    `
                }
            ],
            quiz: [
                {
                    question: "What is the minimum salary for exempt status under federal law?",
                    options: [
                        "$25,000/year",
                        "$35,568/year ($684/week)",
                        "$50,000/year",
                        "No minimum"
                    ],
                    correct: 1,
                    explanation: "To be exempt from overtime, employees must earn at least $684/week ($35,568/year) and meet duties tests."
                },
                {
                    question: "Does job title alone determine exempt status?",
                    options: [
                        "Yes, if it says 'Manager'",
                        "Yes, if the employee agrees",
                        "No, must meet salary AND duties tests",
                        "Title is the only factor"
                    ],
                    correct: 2,
                    explanation: "Job title doesn't determine status. Employees must meet both salary and duties tests to be exempt."
                },
                {
                    question: "Can private employers offer 'comp time' instead of overtime pay?",
                    options: [
                        "Yes, always",
                        "No, only government employers can",
                        "Yes, if employee agrees",
                        "Yes, for managers only"
                    ],
                    correct: 1,
                    explanation: "Private employers generally cannot offer comp time in lieu of overtime pay. This is only allowed for government employers."
                },
                {
                    question: "Can an employer deduct pay for a broken piece of equipment?",
                    options: [
                        "Yes, anytime",
                        "Generally no, especially if it would reduce pay below minimum wage",
                        "Only if over $100",
                        "Yes, with written notice"
                    ],
                    correct: 1,
                    explanation: "Employers generally cannot make deductions for broken equipment, especially if it would reduce wages below minimum wage."
                },
                {
                    question: "Which state requires immediate final paycheck when fired?",
                    options: [
                        "Texas",
                        "New York",
                        "California",
                        "Florida"
                    ],
                    correct: 2,
                    explanation: "California requires employers to provide final paychecks immediately upon termination."
                }
            ]
        },
        {
            id: 4,
            title: 'Hiring and Firing',
            subtitle: 'Legal boundaries in employment decisions',
            topics: [
                {
                    id: 'legal-interviews',
                    title: 'Legal Interview Questions',
                    content: `
                        <h2>Legal and Illegal Interview Questions</h2>
                        
                        <h3>The Basic Rule</h3>
                        <div class="definition">
                            Questions should relate to job requirements. If it doesn't help evaluate ability to do the job, it's probably inappropriate.
                        </div>
                        
                        <h3>Generally ILLEGAL to Ask</h3>
                        <ul>
                            <li><strong>Age:</strong> "How old are you?"</li>
                            <li><strong>Religion:</strong> "What church do you attend?"</li>
                            <li><strong>Family Status:</strong> "Do you have kids?" "Are you pregnant?"</li>
                            <li><strong>National Origin:</strong> "Where are you from originally?"</li>
                            <li><strong>Disability:</strong> "Do you have any disabilities?"</li>
                            <li><strong>Marital Status:</strong> "Are you married?"</li>
                            <li><strong>Arrest Record:</strong> (in many states)</li>
                        </ul>
                        
                        <h3>LEGAL to Ask</h3>
                        <ul>
                            <li>"Are you authorized to work in the US?"</li>
                            <li>"Can you perform the essential functions of this job?"</li>
                            <li>"Are you available to work required hours?"</li>
                            <li>"Do you have relevant experience?"</li>
                            <li>"Have you been convicted of a crime?" (in most cases)</li>
                        </ul>
                        
                        <h3>If You're Asked Illegal Questions</h3>
                        <ul>
                            <li>You don't have to answer</li>
                            <li>Redirect to job-related topics</li>
                            <li>Consider if you want to work there</li>
                            <li>Document the interaction</li>
                        </ul>
                        
                        <div class="highlight">
                            <strong>Ban the Box:</strong> Many states/cities prohibit asking about criminal history on job applications. Questions come later in the process.
                        </div>
                    `
                },
                {
                    id: 'background-checks',
                    title: 'Background Checks',
                    content: `
                        <h2>Background Checks</h2>
                        
                        <h3>FCRA Requirements</h3>
                        <div class="definition">
                            <strong>FCRA:</strong> Fair Credit Reporting Act. Regulates how employers can use background checks.
                        </div>
                        
                        <h3>Employer Must:</h3>
                        <ul>
                            <li>Get your written consent BEFORE running check</li>
                            <li>Provide disclosure that check will be run</li>
                            <li>Give you copy of report if adverse action</li>
                            <li>Give you time to dispute errors</li>
                        </ul>
                        
                        <h3>What Background Checks Include</h3>
                        <ul>
                            <li>Criminal history</li>
                            <li>Employment verification</li>
                            <li>Education verification</li>
                            <li>Credit report (certain jobs)</li>
                            <li>Driving record (driving jobs)</li>
                            <li>Professional license verification</li>
                        </ul>
                        
                        <h3>Your Rights</h3>
                        <ul>
                            <li>Must consent to background check</li>
                            <li>Must be notified before adverse action</li>
                            <li>Right to dispute inaccurate information</li>
                            <li>Right to explanation of rights</li>
                        </ul>
                        
                        <h3>Credit Checks</h3>
                        <ul>
                            <li>Only allowed for certain positions</li>
                            <li>Many states restrict their use</li>
                            <li>Generally for financial positions</li>
                        </ul>
                        
                        <div class="highlight">
                            <strong>Pre-Adverse Action:</strong> Before rejecting you based on a background check, employer must give you the report and a chance to explain or dispute.
                        </div>
                    `
                },
                {
                    id: 'wrongful-termination',
                    title: 'Wrongful Termination',
                    content: `
                        <h2>Wrongful Termination</h2>
                        
                        <div class="definition">
                            <strong>Wrongful Termination:</strong> Being fired for an illegal reason, despite at-will employment.
                        </div>
                        
                        <h3>Illegal Reasons for Firing</h3>
                        <ul>
                            <li><strong>Discrimination:</strong> Based on protected characteristics</li>
                            <li><strong>Retaliation:</strong> For protected activities</li>
                            <li><strong>Breach of Contract:</strong> Violating employment agreement</li>
                            <li><strong>Public Policy:</strong> Refusing illegal acts</li>
                            <li><strong>FMLA Retaliation:</strong> For taking protected leave</li>
                        </ul>
                        
                        <h3>Protected Activities (Can't Fire For)</h3>
                        <ul>
                            <li>Filing discrimination complaint</li>
                            <li>Reporting safety violations</li>
                            <li>Filing workers' comp claim</li>
                            <li>Whistleblowing</li>
                            <li>Jury duty</li>
                            <li>Military service</li>
                            <li>Voting</li>
                        </ul>
                        
                        <h3>What to Do If Wrongfully Terminated</h3>
                        <ol>
                            <li><strong>Document everything:</strong> Keep records, emails, witnesses</li>
                            <li><strong>Request written reason:</strong> Ask why you were fired</li>
                            <li><strong>File for unemployment:</strong> Immediately</li>
                            <li><strong>Consult an attorney:</strong> Many offer free consultations</li>
                            <li><strong>File complaint:</strong> EEOC, state agency, OSHA</li>
                        </ol>
                        
                        <h3>Statute of Limitations</h3>
                        <ul>
                            <li>EEOC complaints: 180-300 days</li>
                            <li>State claims: Varies (often 1-3 years)</li>
                            <li>Act quickly!</li>
                        </ul>
                    `
                },
                {
                    id: 'severance-unemployment',
                    title: 'Severance and Unemployment',
                    content: `
                        <h2>Severance and Unemployment</h2>
                        
                        <h3>Severance Pay</h3>
                        <div class="definition">
                            <strong>Severance:</strong> Payment to departing employees. NOT required by federal law but may be required by:
                        </div>
                        <ul>
                            <li>Employment contracts</li>
                            <li>Company policy</li>
                            <li>Union agreements</li>
                            <li>WARN Act (mass layoffs)</li>
                        </ul>
                        
                        <h3>Typical Severance Packages</h3>
                        <ul>
                            <li>1-2 weeks pay per year of service</li>
                            <li>Continuation of benefits</li>
                            <li>Outplacement services</li>
                            <li>Reference agreement</li>
                        </ul>
                        
                        <h3>What You Might Sign Away</h3>
                        <ul>
                            <li>Right to sue the employer</li>
                            <li>Confidentiality agreement</li>
                            <li>Non-disparagement clause</li>
                            <li>Non-compete (review carefully!)</li>
                        </ul>
                        
                        <h3>Unemployment Insurance</h3>
                        <ul>
                            <li><strong>Eligibility:</strong> Generally if laid off or fired without cause</li>
                            <li><strong>Benefits:</strong> Partial wage replacement (varies by state)</li>
                            <li><strong>Duration:</strong> Typically 26 weeks</li>
                            <li><strong>Disqualification:</strong> Usually if you quit or were fired for misconduct</li>
                        </ul>
                        
                        <h3>Applying for Unemployment</h3>
                        <ol>
                            <li>File immediately after job loss</li>
                            <li>Provide employment history</li>
                            <li>Employer may contest (you can appeal)</li>
                            <li>Continue certifying while job searching</li>
                        </ol>
                        
                        <div class="highlight">
                            <strong>Negotiate:</strong> Severance is often negotiable. Before signing anything, consider consulting an employment attorney.
                        </div>
                    `
                }
            ],
            quiz: [
                {
                    question: "Is it legal to ask 'Do you have children?' in a job interview?",
                    options: [
                        "Yes, it's common",
                        "No, it's generally illegal",
                        "Only for certain jobs",
                        "Yes, if asked nicely"
                    ],
                    correct: 1,
                    explanation: "Questions about family status, including children, are generally illegal in interviews as they could indicate discrimination."
                },
                {
                    question: "Under FCRA, what must employers do before running a background check?",
                    options: [
                        "Nothing",
                        "Get your written consent",
                        "Pay you for your time",
                        "Check with the government"
                    ],
                    correct: 1,
                    explanation: "The Fair Credit Reporting Act requires employers to get written consent before running background checks."
                },
                {
                    question: "Can you be fired for filing a workers' compensation claim?",
                    options: [
                        "Yes, at-will employment allows it",
                        "No, that's illegal retaliation",
                        "Only in certain states",
                        "Yes, after 90 days"
                    ],
                    correct: 1,
                    explanation: "Firing someone for filing a workers' comp claim is illegal retaliation. It's a protected activity."
                },
                {
                    question: "Is severance pay required by federal law?",
                    options: [
                        "Yes, always",
                        "Yes, after 5 years of service",
                        "No, but may be required by contract or policy",
                        "Yes, minimum 2 weeks"
                    ],
                    correct: 2,
                    explanation: "Federal law doesn't require severance pay, but it may be required by employment contracts, company policy, or union agreements."
                },
                {
                    question: "When should you apply for unemployment benefits?",
                    options: [
                        "After 30 days",
                        "After you've used up savings",
                        "Immediately after job loss",
                        "Only if you qualify"
                    ],
                    correct: 2,
                    explanation: "Apply for unemployment immediately after losing your job. There's often a waiting period before benefits begin."
                }
            ]
        },
        {
            id: 5,
            title: 'Advanced Topics',
            subtitle: 'Unions, contracts, and state variations',
            topics: [
                {
                    id: 'union-rights',
                    title: 'Union Rights and Collective Bargaining',
                    content: `
                        <h2>Union Rights</h2>
                        
                        <h3>National Labor Relations Act (NLRA)</h3>
                        <div class="definition">
                            <strong>NLRA:</strong> Protects employees' rights to organize, form unions, and bargain collectively.
                        </div>
                        
                        <h3>Protected Rights</h3>
                        <ul>
                            <li>Discuss wages and working conditions with coworkers</li>
                            <li>Form or join a union</li>
                            <li>Bargain collectively through representatives</li>
                            <li>Take action to improve working conditions</li>
                            <li>Choose not to participate in union activities</li>
                        </ul>
                        
                        <h3>What Employers Cannot Do</h3>
                        <ul>
                            <li>Threaten employees for union activity</li>
                            <li>Promise benefits to discourage union support</li>
                            <li>Interrogate about union activities</li>
                            <li>Spy on union meetings</li>
                            <li>Retaliate against union supporters</li>
                        </ul>
                        
                        <h3>Collective Bargaining</h3>
                        <div class="definition">
                            <strong>Collective Bargaining:</strong> Negotiation between employer and union over wages, benefits, and working conditions. Results in a collective bargaining agreement (CBA).
                        </div>
                        
                        <h3>Right-to-Work States</h3>
                        <ul>
                            <li>Cannot be required to join union as condition of employment</li>
                            <li>Cannot be required to pay union dues</li>
                            <li>27 states have right-to-work laws</li>
                        </ul>
                        
                        <div class="highlight">
                            <strong>Key Right:</strong> You can discuss your pay with coworkers. Policies prohibiting wage discussions are illegal under the NLRA.
                        </div>
                    `
                },
                {
                    id: 'non-compete-agreements',
                    title: 'Non-Compete Agreements',
                    content: `
                        <h2>Non-Compete Agreements</h2>
                        
                        <div class="definition">
                            <strong>Non-Compete:</strong> A contract restricting your ability to work for competitors or start a competing business after leaving.
                        </div>
                        
                        <h3>Enforceability Varies by State</h3>
                        
                        <p><strong>Generally NOT enforceable:</strong></p>
                        <ul>
                            <li>California (banned for employees)</li>
                            <li>North Dakota</li>
                            <li>Oklahoma</li>
                        </ul>
                        
                        <p><strong>Limited enforceability:</strong></p>
                        <ul>
                            <li>Must be reasonable in scope</li>
                            <li>Must protect legitimate business interest</li>
                            <li>Must not be overly burdensome</li>
                        </ul>
                        
                        <h3>Factors Courts Consider</h3>
                        <ul>
                            <li><strong>Duration:</strong> 1-2 years often acceptable, 5+ years rarely</li>
                            <li><strong>Geographic scope:</strong> Must match business operations</li>
                            <li><strong>Industry scope:</strong> Cannot be overly broad</li>
                            <li><strong>Consideration:</strong> Must get something in return</li>
                        </ul>
                        
                        <h3>FTC Proposed Ban</h3>
                        <p>The FTC has proposed banning most non-competes nationwide. Status may change.</p>
                        
                        <h3>Other Restrictive Covenants</h3>
                        <ul>
                            <li><strong>Non-Solicitation:</strong> Can't recruit former colleagues/clients</li>
                            <li><strong>Non-Disclosure:</strong> Can't share confidential information</li>
                            <li><strong>Garden Leave:</strong> Paid period before joining competitor</li>
                        </ul>
                        
                        <div class="highlight">
                            <strong>Before Signing:</strong> Review any non-compete carefully. Consult an attorney. You may be able to negotiate terms.
                        </div>
                    `
                },
                {
                    id: 'whistleblower-protection',
                    title: 'Whistleblower Protections',
                    content: `
                        <h2>Whistleblower Protections</h2>
                        
                        <div class="definition">
                            <strong>Whistleblower:</strong> Someone who reports illegal or unethical conduct by their employer to authorities or the public.
                        </div>
                        
                        <h3>Federal Whistleblower Laws</h3>
                        <ul>
                            <li><strong>Sarbanes-Oxley:</strong> Securities fraud (public companies)</li>
                            <li><strong>Dodd-Frank:</strong> SEC violations (with rewards!)</li>
                            <li><strong>False Claims Act:</strong> Government contract fraud</li>
                            <li><strong>OSHA:</strong> Workplace safety</li>
                            <li><strong>EPA:</strong> Environmental violations</li>
                        </ul>
                        
                        <h3>Protection Against Retaliation</h3>
                        <p>Employers cannot:</p>
                        <ul>
                            <li>Fire you</li>
                            <li>Demote you</li>
                            <li>Reduce pay or hours</li>
                            <li>Harass or intimidate</li>
                            <li>Blacklist you</li>
                        </ul>
                        
                        <h3>Whistleblower Rewards</h3>
                        <ul>
                            <li><strong>SEC:</strong> 10-30% of sanctions over $1 million</li>
                            <li><strong>IRS:</strong> 15-30% of collected proceeds</li>
                            <li><strong>False Claims Act:</strong> 15-30% of recovery</li>
                        </ul>
                        
                        <h3>How to Blow the Whistle</h3>
                        <ol>
                            <li>Document everything</li>
                            <li>Try internal channels first (unless futile)</li>
                            <li>Consider consulting a whistleblower attorney</li>
                            <li>Report to appropriate agency</li>
                            <li>Keep records of any retaliation</li>
                        </ol>
                        
                        <div class="highlight">
                            <strong>Qui Tam:</strong> Under the False Claims Act, whistleblowers can file lawsuits on behalf of the government and receive a portion of any recovery.
                        </div>
                    `
                },
                {
                    id: 'state-variations',
                    title: 'State-by-State Variations',
                    content: `
                        <h2>State Labor Law Variations</h2>
                        
                        <p>Employment laws vary significantly by state. Here are key differences:</p>
                        
                        <h3>Minimum Wage</h3>
                        <ul>
                            <li><strong>Federal:</strong> $7.25/hour</li>
                            <li><strong>California:</strong> $16.00+/hour</li>
                            <li><strong>Washington:</strong> $16.28/hour</li>
                            <li><strong>Texas:</strong> Federal minimum</li>
                        </ul>
                        
                        <h3>Paid Sick Leave</h3>
                        <ul>
                            <li><strong>California:</strong> 40 hours/year minimum</li>
                            <li><strong>New York:</strong> Varies by employer size</li>
                            <li><strong>Many states:</strong> No requirement</li>
                        </ul>
                        
                        <h3>Paid Family Leave</h3>
                        <ul>
                            <li><strong>California, New York, New Jersey:</strong> Yes</li>
                            <li><strong>Most states:</strong> No</li>
                        </ul>
                        
                        <h3>At-Will Exceptions</h3>
                        <ul>
                            <li><strong>Montana:</strong> Only state without at-will</li>
                            <li>Other states vary on implied contract exceptions</li>
                        </ul>
                        
                        <h3>Resources to Check Your State</h3>
                        <ul>
                            <li>State Department of Labor website</li>
                            <li>State bar association</li>
                            <li>Legal aid organizations</li>
                            <li>NOLO.com (legal information)</li>
                        </ul>
                        
                        <div class="highlight">
                            <strong>Always Check Local Laws:</strong> Cities sometimes have additional requirements beyond state law (minimum wage, sick leave, scheduling).
                        </div>
                    `
                }
            ],
            quiz: [
                {
                    question: "Under the NLRA, can you discuss your salary with coworkers?",
                    options: [
                        "No, it's confidential",
                        "Yes, it's a protected right",
                        "Only with manager permission",
                        "Only in unions"
                    ],
                    correct: 1,
                    explanation: "Discussing wages with coworkers is a protected right under the National Labor Relations Act. Policies banning it are illegal."
                },
                {
                    question: "In which state are non-compete agreements generally unenforceable?",
                    options: [
                        "Texas",
                        "New York",
                        "California",
                        "Florida"
                    ],
                    correct: 2,
                    explanation: "California generally bans non-compete agreements for employees, making them unenforceable."
                },
                {
                    question: "What is a qui tam lawsuit?",
                    options: [
                        "A lawsuit against a union",
                        "A whistleblower lawsuit filed on behalf of the government",
                        "A discrimination lawsuit",
                        "A contract dispute"
                    ],
                    correct: 1,
                    explanation: "Qui tam allows whistleblowers to file False Claims Act lawsuits on behalf of the government and receive a portion of recovery."
                },
                {
                    question: "Which state does NOT have at-will employment?",
                    options: [
                        "California",
                        "Texas",
                        "Montana",
                        "New York"
                    ],
                    correct: 2,
                    explanation: "Montana is the only state without default at-will employment. Employers need cause to fire employees after a probationary period."
                },
                {
                    question: "Under Dodd-Frank, what can SEC whistleblowers receive?",
                    options: [
                        "A thank you letter",
                        "Job protection only",
                        "10-30% of sanctions over $1 million",
                        "Nothing"
                    ],
                    correct: 2,
                    explanation: "The SEC whistleblower program offers 10-30% of sanctions collected over $1 million as a reward for reporting securities violations."
                }
            ]
        }
    ]
};
