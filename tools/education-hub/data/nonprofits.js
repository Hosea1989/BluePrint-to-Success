// Nonprofit Organizations Curriculum Data
const nonprofitsData = {
    id: 'nonprofits',
    title: 'Nonprofit Organizations',
    icon: '🤝',
    description: 'Learn how nonprofits work, their tax benefits, and how to start your own 501(c)(3).',
    difficulty: 'intermediate',
    prerequisites: ['business'],
    learningObjectives: [
        'Understand how nonprofits work and their legal structure',
        'Navigate 501(c)(3) formation and compliance',
        'Fundraise and manage nonprofit finances',
        'Build a board and manage volunteers',
        'Create sustainable impact'
    ],
    relatedTracks: ['business', 'taxes'],
    resources: [
        { title: 'IRS - Tax Information for Charities', url: 'https://www.irs.gov/charities-non-profits' },
        { title: 'National Council of Nonprofits', url: 'https://www.councilofnonprofits.org/' }
    ],
    levels: [
        {
            id: 1,
            title: 'What is a Nonprofit?',
            subtitle: 'Understanding nonprofit basics',
            topics: [
                {
                    id: 'nonprofit-definition',
                    title: 'Definition and Purpose',
                    content: `
                        <h2>What is a Nonprofit Organization?</h2>
                        
                        <div class="definition">
                            <strong>Nonprofit:</strong> An organization that uses surplus revenues to achieve its goals rather than distributing them as profits to owners or shareholders.
                        </div>
                        
                        <h3>Key Characteristics</h3>
                        <ul>
                            <li><strong>Mission-driven:</strong> Exists to serve a public purpose</li>
                            <li><strong>No owners:</strong> No one "owns" a nonprofit</li>
                            <li><strong>No profit distribution:</strong> Revenue stays in the organization</li>
                            <li><strong>Governed by board:</strong> Directors oversee the organization</li>
                        </ul>
                        
                        <h3>Common Nonprofit Purposes</h3>
                        <ul>
                            <li>Charitable (helping the poor, disaster relief)</li>
                            <li>Educational (schools, research)</li>
                            <li>Religious (churches, temples)</li>
                            <li>Scientific (medical research)</li>
                            <li>Literary (libraries, publishing)</li>
                            <li>Public safety (volunteer fire departments)</li>
                        </ul>
                        
                        <div class="highlight">
                            <strong>Important:</strong> "Nonprofit" doesn't mean the organization can't make money. It means profits can't be distributed to individuals—they must further the mission.
                        </div>
                    `
                },
                {
                    id: '501c3-explained',
                    title: '501(c)(3) Explained',
                    content: `
                        <h2>Understanding 501(c)(3)</h2>
                        
                        <div class="definition">
                            <strong>501(c)(3):</strong> A section of the IRS tax code that grants tax-exempt status to qualifying charitable organizations.
                        </div>
                        
                        <h3>Benefits of 501(c)(3) Status</h3>
                        <ul>
                            <li><strong>Tax exemption:</strong> No federal income tax on revenue</li>
                            <li><strong>Donor deductions:</strong> Donations are tax-deductible for donors</li>
                            <li><strong>Grant eligibility:</strong> Access to foundation grants</li>
                            <li><strong>State exemptions:</strong> Often exempt from state taxes too</li>
                            <li><strong>Discounts:</strong> Reduced postage, advertising rates</li>
                        </ul>
                        
                        <h3>Two Types of 501(c)(3)</h3>
                        
                        <p><strong>Public Charity</strong></p>
                        <ul>
                            <li>Receives broad public support</li>
                            <li>Most common type (churches, schools, hospitals)</li>
                            <li>Must receive at least 1/3 support from public</li>
                            <li>Less IRS scrutiny</li>
                        </ul>
                        
                        <p><strong>Private Foundation</strong></p>
                        <ul>
                            <li>Typically funded by one source (family, corporation)</li>
                            <li>Example: Bill & Melinda Gates Foundation</li>
                            <li>More IRS rules and requirements</li>
                            <li>Must distribute 5% of assets annually</li>
                        </ul>
                        
                        <h3>Requirements to Maintain Status</h3>
                        <ul>
                            <li>Operate exclusively for exempt purposes</li>
                            <li>No private benefit to individuals</li>
                            <li>Limited political activity</li>
                            <li>Annual reporting (Form 990)</li>
                        </ul>
                    `
                },
                {
                    id: 'nonprofit-vs-forprofit',
                    title: 'Nonprofit vs For-Profit',
                    content: `
                        <h2>Nonprofit vs For-Profit Comparison</h2>
                        
                        <h3>Ownership</h3>
                        <ul>
                            <li><strong>For-Profit:</strong> Owned by shareholders or individuals</li>
                            <li><strong>Nonprofit:</strong> No owners; governed by board</li>
                        </ul>
                        
                        <h3>Purpose</h3>
                        <ul>
                            <li><strong>For-Profit:</strong> Generate returns for owners</li>
                            <li><strong>Nonprofit:</strong> Serve a public or charitable mission</li>
                        </ul>
                        
                        <h3>Profits</h3>
                        <ul>
                            <li><strong>For-Profit:</strong> Distributed as dividends or reinvested</li>
                            <li><strong>Nonprofit:</strong> Must be reinvested in the mission</li>
                        </ul>
                        
                        <h3>Taxes</h3>
                        <ul>
                            <li><strong>For-Profit:</strong> Pay income taxes</li>
                            <li><strong>Nonprofit:</strong> Generally tax-exempt</li>
                        </ul>
                        
                        <h3>Funding Sources</h3>
                        <ul>
                            <li><strong>For-Profit:</strong> Sales, investments, loans</li>
                            <li><strong>Nonprofit:</strong> Donations, grants, program fees, some sales</li>
                        </ul>
                        
                        <div class="example">
                            <strong>Example Comparison:</strong><br><br>
                            <strong>For-Profit Hospital:</strong> Pays taxes, profits go to shareholders<br>
                            <strong>Nonprofit Hospital:</strong> Tax-exempt, profits reinvested in facilities, services, community health
                        </div>
                        
                        <div class="highlight">
                            <strong>Can Nonprofits Pay Salaries?</strong> Yes! Nonprofits can and do pay competitive salaries. What they can't do is pay "profits" to owners—because there are no owners.
                        </div>
                    `
                }
            ],
            quiz: [
                {
                    question: "What happens to profits in a nonprofit organization?",
                    options: [
                        "They're distributed to board members",
                        "They're returned to donors",
                        "They're reinvested in the organization's mission",
                        "They're given to the government"
                    ],
                    correct: 2,
                    explanation: "Nonprofit 'profits' (surplus revenues) must be reinvested back into the organization's mission, not distributed to individuals."
                },
                {
                    question: "What does 501(c)(3) refer to?",
                    options: [
                        "A type of business loan",
                        "A section of tax code granting tax-exempt status",
                        "The number of board members required",
                        "A fundraising requirement"
                    ],
                    correct: 1,
                    explanation: "501(c)(3) is a section of the IRS tax code that grants tax-exempt status to qualifying charitable organizations."
                },
                {
                    question: "Can nonprofits pay salaries to employees?",
                    options: [
                        "No, all work must be volunteer",
                        "Yes, they can pay competitive salaries",
                        "Only minimum wage",
                        "Only to board members"
                    ],
                    correct: 1,
                    explanation: "Nonprofits can absolutely pay competitive salaries to employees. They just can't distribute profits to owners (because there are no owners)."
                },
                {
                    question: "What's the main difference between a public charity and private foundation?",
                    options: [
                        "Size of the organization",
                        "Source of funding (broad public vs single source)",
                        "Location",
                        "Number of employees"
                    ],
                    correct: 1,
                    explanation: "Public charities receive broad public support, while private foundations are typically funded by one source like a family or corporation."
                },
                {
                    question: "Who owns a nonprofit organization?",
                    options: [
                        "The founder",
                        "The board of directors",
                        "The donors",
                        "No one - nonprofits have no owners"
                    ],
                    correct: 3,
                    explanation: "Nonprofits have no owners. They are governed by a board of directors who oversee the organization on behalf of its mission."
                }
            ]
        },
        {
            id: 2,
            title: 'Types of Nonprofits',
            subtitle: 'Different categories and purposes',
            topics: [
                {
                    id: 'charitable-orgs',
                    title: 'Charitable Organizations',
                    content: `
                        <h2>Charitable Organizations - 501(c)(3)</h2>
                        
                        <p>The most common and well-known type of nonprofit.</p>
                        
                        <h3>Qualifying Purposes</h3>
                        <ul>
                            <li>Relief of the poor and distressed</li>
                            <li>Advancement of education</li>
                            <li>Advancement of religion</li>
                            <li>Promotion of health</li>
                            <li>Scientific research</li>
                            <li>Literary purposes</li>
                            <li>Prevention of cruelty to children or animals</li>
                        </ul>
                        
                        <h3>Examples</h3>
                        <ul>
                            <li><strong>Red Cross:</strong> Disaster relief</li>
                            <li><strong>Habitat for Humanity:</strong> Housing</li>
                            <li><strong>Universities:</strong> Education</li>
                            <li><strong>Churches:</strong> Religious</li>
                            <li><strong>Hospitals:</strong> Healthcare</li>
                        </ul>
                        
                        <h3>Key Benefits</h3>
                        <ul>
                            <li>Donations are tax-deductible for donors</li>
                            <li>Exempt from federal income tax</li>
                            <li>Often exempt from state and local taxes</li>
                            <li>Eligible for most grants</li>
                        </ul>
                        
                        <div class="highlight">
                            <strong>Restrictions:</strong> 501(c)(3) organizations cannot participate in political campaigns and lobbying must be limited.
                        </div>
                    `
                },
                {
                    id: 'social-welfare',
                    title: 'Social Welfare Organizations',
                    content: `
                        <h2>Social Welfare Organizations - 501(c)(4)</h2>
                        
                        <div class="definition">
                            <strong>501(c)(4):</strong> Organizations operated exclusively for the promotion of social welfare. More flexibility for advocacy and lobbying.
                        </div>
                        
                        <h3>Key Characteristics</h3>
                        <ul>
                            <li>Can engage in unlimited lobbying</li>
                            <li>Can participate in some political activities</li>
                            <li>Donations are NOT tax-deductible</li>
                            <li>Organization is still tax-exempt</li>
                        </ul>
                        
                        <h3>Examples</h3>
                        <ul>
                            <li>Civic leagues</li>
                            <li>Advocacy organizations</li>
                            <li>Homeowners associations</li>
                            <li>Volunteer fire departments</li>
                        </ul>
                        
                        <h3>501(c)(3) vs 501(c)(4)</h3>
                        <table style="width: 100%; margin: 16px 0;">
                            <tr>
                                <th>Feature</th>
                                <th>501(c)(3)</th>
                                <th>501(c)(4)</th>
                            </tr>
                            <tr>
                                <td>Donations deductible</td>
                                <td>Yes</td>
                                <td>No</td>
                            </tr>
                            <tr>
                                <td>Lobbying allowed</td>
                                <td>Limited</td>
                                <td>Unlimited</td>
                            </tr>
                            <tr>
                                <td>Political activity</td>
                                <td>Prohibited</td>
                                <td>Some allowed</td>
                            </tr>
                        </table>
                    `
                },
                {
                    id: 'trade-associations',
                    title: 'Trade Associations & Other Types',
                    content: `
                        <h2>Other Types of Tax-Exempt Organizations</h2>
                        
                        <h3>501(c)(6) - Trade Associations</h3>
                        <ul>
                            <li>Business leagues, chambers of commerce</li>
                            <li>Real estate boards</li>
                            <li>Professional associations (ABA, AMA)</li>
                            <li>Can lobby for industry interests</li>
                            <li>Dues may be partially deductible</li>
                        </ul>
                        
                        <h3>501(c)(7) - Social Clubs</h3>
                        <ul>
                            <li>Country clubs, hobby clubs</li>
                            <li>Organized for pleasure and recreation</li>
                            <li>Primarily funded by member dues</li>
                        </ul>
                        
                        <h3>501(c)(19) - Veterans Organizations</h3>
                        <ul>
                            <li>VFW, American Legion</li>
                            <li>Donations are tax-deductible</li>
                            <li>Can engage in political activities</li>
                        </ul>
                        
                        <h3>Fiscal Sponsorship Alternative</h3>
                        <div class="definition">
                            <strong>Fiscal Sponsor:</strong> An existing 501(c)(3) that sponsors projects that don't have their own tax-exempt status yet.
                        </div>
                        <ul>
                            <li>Quick way to accept tax-deductible donations</li>
                            <li>Sponsor takes 5-10% fee</li>
                            <li>Good while waiting for IRS approval</li>
                        </ul>
                    `
                }
            ],
            quiz: [
                {
                    question: "What is unique about 501(c)(4) organizations?",
                    options: [
                        "They can pay higher salaries",
                        "They can do unlimited lobbying",
                        "Donations are tax-deductible",
                        "They don't need a board"
                    ],
                    correct: 1,
                    explanation: "501(c)(4) social welfare organizations can engage in unlimited lobbying, unlike 501(c)(3) organizations which are limited."
                },
                {
                    question: "What is a trade association (501(c)(6))?",
                    options: [
                        "A charity",
                        "A business league or professional association",
                        "A religious organization",
                        "A government agency"
                    ],
                    correct: 1,
                    explanation: "501(c)(6) organizations are business leagues, chambers of commerce, and professional associations that promote common business interests."
                },
                {
                    question: "What is fiscal sponsorship?",
                    options: [
                        "A type of loan",
                        "When an existing nonprofit sponsors a project without tax-exempt status",
                        "Government funding",
                        "A tax penalty"
                    ],
                    correct: 1,
                    explanation: "Fiscal sponsorship is when an existing 501(c)(3) sponsors projects that don't have their own tax-exempt status, allowing them to accept tax-deductible donations."
                },
                {
                    question: "Can 501(c)(3) organizations participate in political campaigns?",
                    options: [
                        "Yes, unlimited",
                        "Yes, but limited",
                        "No, it's prohibited",
                        "Only in election years"
                    ],
                    correct: 2,
                    explanation: "501(c)(3) organizations are prohibited from participating in political campaigns. This is a strict requirement."
                },
                {
                    question: "Are donations to 501(c)(4) organizations tax-deductible?",
                    options: [
                        "Yes, always",
                        "Yes, up to $1,000",
                        "No, they are not",
                        "Only for businesses"
                    ],
                    correct: 2,
                    explanation: "Donations to 501(c)(4) organizations are NOT tax-deductible for donors, unlike 501(c)(3) donations."
                }
            ]
        },
        {
            id: 3,
            title: 'Starting a Nonprofit',
            subtitle: 'Steps to form a 501(c)(3)',
            topics: [
                {
                    id: 'formation-steps',
                    title: 'Steps to Form a Nonprofit',
                    content: `
                        <h2>Steps to Start a 501(c)(3)</h2>
                        
                        <h3>Step 1: Define Your Mission</h3>
                        <ul>
                            <li>Clear, specific purpose</li>
                            <li>Must fit IRS exempt purposes</li>
                            <li>Identify who you'll serve</li>
                        </ul>
                        
                        <h3>Step 2: Name Your Organization</h3>
                        <ul>
                            <li>Check state database for availability</li>
                            <li>Consider trademark search</li>
                            <li>Reserve the name if needed</li>
                        </ul>
                        
                        <h3>Step 3: Recruit Board of Directors</h3>
                        <ul>
                            <li>Most states require 3+ directors</li>
                            <li>Directors should not be related</li>
                            <li>Diverse skills are valuable</li>
                        </ul>
                        
                        <h3>Step 4: File Articles of Incorporation</h3>
                        <ul>
                            <li>File with state (usually Secretary of State)</li>
                            <li>Include required IRS language</li>
                            <li>Fees vary by state ($25-$500)</li>
                        </ul>
                        
                        <h3>Step 5: Create Bylaws</h3>
                        <ul>
                            <li>Operating rules for the organization</li>
                            <li>Board structure and meetings</li>
                            <li>Officer roles and duties</li>
                        </ul>
                        
                        <h3>Step 6: Get an EIN</h3>
                        <ul>
                            <li>Apply online at IRS.gov (free)</li>
                            <li>Needed for bank accounts, tax filings</li>
                        </ul>
                        
                        <h3>Step 7: Apply for 501(c)(3) Status</h3>
                        <ul>
                            <li>File Form 1023 or 1023-EZ</li>
                            <li>Fee: $275-$600</li>
                            <li>Processing: 3-6 months</li>
                        </ul>
                    `
                },
                {
                    id: 'board-requirements',
                    title: 'Board of Directors',
                    content: `
                        <h2>Board of Directors Requirements</h2>
                        
                        <h3>Board Responsibilities</h3>
                        <ul>
                            <li><strong>Governance:</strong> Set organizational direction</li>
                            <li><strong>Fiduciary:</strong> Ensure financial health</li>
                            <li><strong>Compliance:</strong> Legal and ethical operations</li>
                            <li><strong>Fundraising:</strong> Support and lead fundraising</li>
                            <li><strong>Hiring:</strong> Select and evaluate ED/CEO</li>
                        </ul>
                        
                        <h3>Board Structure</h3>
                        <ul>
                            <li><strong>Chair/President:</strong> Leads board meetings</li>
                            <li><strong>Vice Chair:</strong> Assists chair, fills in</li>
                            <li><strong>Secretary:</strong> Maintains records, minutes</li>
                            <li><strong>Treasurer:</strong> Oversees finances</li>
                        </ul>
                        
                        <h3>Best Practices</h3>
                        <ul>
                            <li>Odd number of directors (prevents ties)</li>
                            <li>Staggered terms for continuity</li>
                            <li>Term limits to bring fresh perspectives</li>
                            <li>Diverse backgrounds and skills</li>
                            <li>Independent (not employees or related)</li>
                        </ul>
                        
                        <h3>Conflict of Interest</h3>
                        <div class="highlight">
                            <strong>Required:</strong> Every nonprofit should have a conflict of interest policy. Board members must disclose any personal interests in board decisions.
                        </div>
                        
                        <h3>Board vs Staff</h3>
                        <ul>
                            <li><strong>Board:</strong> Governs, sets policy, hires ED</li>
                            <li><strong>Staff:</strong> Implements, runs day-to-day operations</li>
                            <li>Clear separation is important</li>
                        </ul>
                    `
                },
                {
                    id: 'bylaws-governance',
                    title: 'Bylaws and Governance',
                    content: `
                        <h2>Bylaws and Governance Documents</h2>
                        
                        <h3>What Bylaws Include</h3>
                        <ul>
                            <li><strong>Purpose statement</strong></li>
                            <li><strong>Board structure:</strong> Size, terms, election process</li>
                            <li><strong>Officer positions:</strong> Roles and duties</li>
                            <li><strong>Meetings:</strong> Frequency, quorum, notice</li>
                            <li><strong>Committees:</strong> Standing and special</li>
                            <li><strong>Amendments:</strong> How to change bylaws</li>
                            <li><strong>Dissolution:</strong> What happens if org closes</li>
                        </ul>
                        
                        <h3>Required Policies</h3>
                        <ul>
                            <li><strong>Conflict of Interest:</strong> IRS expects this</li>
                            <li><strong>Document Retention:</strong> What to keep and how long</li>
                            <li><strong>Whistleblower:</strong> Reporting wrongdoing</li>
                        </ul>
                        
                        <h3>Recommended Policies</h3>
                        <ul>
                            <li>Gift acceptance policy</li>
                            <li>Investment policy</li>
                            <li>Executive compensation policy</li>
                            <li>Board member expectations</li>
                        </ul>
                        
                        <div class="example">
                            <strong>Sample Quorum Clause:</strong><br>
                            "A quorum for the transaction of business at any meeting of the Board shall consist of a majority of the directors then in office."
                        </div>
                        
                        <div class="highlight">
                            <strong>Tip:</strong> Many state associations of nonprofits provide free or low-cost bylaw templates.
                        </div>
                    `
                }
            ],
            quiz: [
                {
                    question: "What IRS form is used to apply for 501(c)(3) status?",
                    options: [
                        "Form 1040",
                        "Form 1023 or 1023-EZ",
                        "Form 990",
                        "Form W-2"
                    ],
                    correct: 1,
                    explanation: "Form 1023 (full application) or 1023-EZ (simplified) is used to apply for 501(c)(3) tax-exempt status."
                },
                {
                    question: "What document contains the operating rules for a nonprofit?",
                    options: [
                        "Articles of Incorporation",
                        "Mission Statement",
                        "Bylaws",
                        "Tax Return"
                    ],
                    correct: 2,
                    explanation: "Bylaws contain the operating rules including board structure, meetings, officers, and procedures."
                },
                {
                    question: "How many board members do most states require?",
                    options: [
                        "1",
                        "3 or more",
                        "10 or more",
                        "No requirement"
                    ],
                    correct: 1,
                    explanation: "Most states require at least 3 directors for a nonprofit corporation."
                },
                {
                    question: "What policy does the IRS expect all nonprofits to have?",
                    options: [
                        "Marketing policy",
                        "Conflict of interest policy",
                        "Social media policy",
                        "Dress code policy"
                    ],
                    correct: 1,
                    explanation: "The IRS expects nonprofits to have a conflict of interest policy to ensure board members act in the organization's best interest."
                },
                {
                    question: "What is an EIN?",
                    options: [
                        "Executive Information Number",
                        "Employer Identification Number (tax ID)",
                        "Environmental Impact Notice",
                        "Electronic Invoice Number"
                    ],
                    correct: 1,
                    explanation: "An EIN (Employer Identification Number) is the nonprofit's tax ID, needed for bank accounts, tax filings, and hiring."
                }
            ]
        },
        {
            id: 4,
            title: 'Nonprofit Finances',
            subtitle: 'Funding, budgets, and financial management',
            topics: [
                {
                    id: 'funding-sources',
                    title: 'How Nonprofits Make Money',
                    content: `
                        <h2>Nonprofit Funding Sources</h2>
                        
                        <h3>Individual Donations</h3>
                        <ul>
                            <li>Largest source for most nonprofits</li>
                            <li>One-time gifts and recurring donors</li>
                            <li>Major gifts (large donors)</li>
                            <li>Planned giving (bequests in wills)</li>
                        </ul>
                        
                        <h3>Grants</h3>
                        <ul>
                            <li><strong>Foundation grants:</strong> From private foundations</li>
                            <li><strong>Government grants:</strong> Federal, state, local</li>
                            <li><strong>Corporate grants:</strong> Company giving programs</li>
                            <li>Usually require application and reporting</li>
                        </ul>
                        
                        <h3>Earned Revenue</h3>
                        <ul>
                            <li><strong>Program fees:</strong> Charging for services</li>
                            <li><strong>Ticket sales:</strong> Events, performances</li>
                            <li><strong>Merchandise:</strong> Branded items</li>
                            <li><strong>Social enterprise:</strong> Business activities</li>
                        </ul>
                        
                        <h3>Events</h3>
                        <ul>
                            <li>Galas and dinners</li>
                            <li>Auctions</li>
                            <li>Walkathons, runs</li>
                            <li>Golf tournaments</li>
                        </ul>
                        
                        <h3>Investments</h3>
                        <ul>
                            <li>Endowment income</li>
                            <li>Interest and dividends</li>
                        </ul>
                        
                        <div class="highlight">
                            <strong>Best Practice:</strong> Diversify funding sources! Relying too heavily on one source is risky.
                        </div>
                    `
                },
                {
                    id: 'tax-exempt-benefits',
                    title: 'Tax-Exempt Status Benefits',
                    content: `
                        <h2>Benefits of Tax-Exempt Status</h2>
                        
                        <h3>Federal Tax Exemption</h3>
                        <ul>
                            <li>No federal income tax on revenue related to mission</li>
                            <li>Donors can deduct contributions</li>
                            <li>Eligible for tax-exempt bonds</li>
                        </ul>
                        
                        <h3>State and Local Exemptions</h3>
                        <ul>
                            <li>Often exempt from state income tax</li>
                            <li>May be exempt from sales tax (varies by state)</li>
                            <li>May be exempt from property tax</li>
                            <li>Must apply separately in most states</li>
                        </ul>
                        
                        <h3>Other Benefits</h3>
                        <ul>
                            <li><strong>Reduced postage rates</strong> for mailings</li>
                            <li><strong>Free/reduced advertising</strong> on some platforms</li>
                            <li><strong>Discounted software</strong> (Google, Microsoft nonprofits)</li>
                            <li><strong>Volunteer support</strong> (people donate time)</li>
                        </ul>
                        
                        <h3>What's NOT Exempt</h3>
                        <div class="definition">
                            <strong>UBIT:</strong> Unrelated Business Income Tax. Income from activities not related to the nonprofit's mission IS taxable.
                        </div>
                        
                        <div class="example">
                            <strong>UBIT Example:</strong><br>
                            Museum gift shop selling mission-related items: Exempt<br>
                            Same museum running a car wash: Taxable (unrelated)
                        </div>
                    `
                },
                {
                    id: 'form-990',
                    title: 'Form 990 and Financial Reporting',
                    content: `
                        <h2>Form 990 - Annual Reporting</h2>
                        
                        <div class="definition">
                            <strong>Form 990:</strong> Annual information return that tax-exempt organizations must file with the IRS. It's public!
                        </div>
                        
                        <h3>Which Form to File</h3>
                        <ul>
                            <li><strong>990-N (e-Postcard):</strong> Revenue under $50,000</li>
                            <li><strong>990-EZ:</strong> Revenue $50,000-$200,000</li>
                            <li><strong>990:</strong> Revenue over $200,000</li>
                        </ul>
                        
                        <h3>What's Reported</h3>
                        <ul>
                            <li>Revenue and expenses</li>
                            <li>Assets and liabilities</li>
                            <li>Program accomplishments</li>
                            <li>Compensation of officers and key employees</li>
                            <li>Board members and governance</li>
                        </ul>
                        
                        <h3>Why It Matters</h3>
                        <ul>
                            <li><strong>Public document:</strong> Anyone can view it</li>
                            <li><strong>Donors check it:</strong> For accountability</li>
                            <li><strong>Grantmakers review it:</strong> Before giving</li>
                            <li><strong>IRS uses it:</strong> To monitor compliance</li>
                        </ul>
                        
                        <h3>Where to Find 990s</h3>
                        <ul>
                            <li><strong>GuideStar/Candid:</strong> Free database</li>
                            <li><strong>ProPublica Nonprofit Explorer:</strong> Searchable</li>
                            <li><strong>Organization's website:</strong> Often posted</li>
                        </ul>
                        
                        <div class="highlight">
                            <strong>Due Date:</strong> 15th day of 5th month after fiscal year ends. For calendar year orgs: May 15.
                        </div>
                    `
                }
            ],
            quiz: [
                {
                    question: "What is typically the largest funding source for most nonprofits?",
                    options: [
                        "Government grants",
                        "Individual donations",
                        "Corporate sponsors",
                        "Investments"
                    ],
                    correct: 1,
                    explanation: "Individual donations are the largest source of funding for most nonprofits in the United States."
                },
                {
                    question: "What is UBIT?",
                    options: [
                        "Universal Business Income Tax",
                        "Unrelated Business Income Tax",
                        "United Business Investment Trust",
                        "Unrestricted Board Investment Tax"
                    ],
                    correct: 1,
                    explanation: "UBIT (Unrelated Business Income Tax) is tax on income from activities unrelated to the nonprofit's exempt purpose."
                },
                {
                    question: "Which organizations file Form 990-N (e-Postcard)?",
                    options: [
                        "All nonprofits",
                        "Only hospitals",
                        "Small nonprofits with revenue under $50,000",
                        "Only churches"
                    ],
                    correct: 2,
                    explanation: "Form 990-N (e-Postcard) is for small tax-exempt organizations with gross receipts normally $50,000 or less."
                },
                {
                    question: "Is Form 990 public?",
                    options: [
                        "No, it's confidential",
                        "Yes, anyone can view it",
                        "Only donors can see it",
                        "Only the IRS can see it"
                    ],
                    correct: 1,
                    explanation: "Form 990 is a public document. Anyone can view it, and organizations must make it available upon request."
                },
                {
                    question: "Why should nonprofits diversify funding sources?",
                    options: [
                        "It's required by law",
                        "To reduce risk if one source dries up",
                        "To pay less taxes",
                        "To have more board members"
                    ],
                    correct: 1,
                    explanation: "Diversifying funding reduces risk. If one source decreases (a major donor leaves, grant ends), the organization survives."
                }
            ]
        },
        {
            id: 5,
            title: 'Advanced Topics',
            subtitle: 'Complex rules and special situations',
            topics: [
                {
                    id: 'ubit-deep-dive',
                    title: 'Unrelated Business Income',
                    content: `
                        <h2>Understanding UBIT in Depth</h2>
                        
                        <h3>When Does UBIT Apply?</h3>
                        <p>Three conditions must be met:</p>
                        <ol>
                            <li>It's a <strong>trade or business</strong></li>
                            <li>It's <strong>regularly carried on</strong></li>
                            <li>It's <strong>not substantially related</strong> to exempt purpose</li>
                        </ol>
                        
                        <h3>Examples of UBIT Activities</h3>
                        <ul>
                            <li>Renting debt-financed property</li>
                            <li>Selling advertising in publications</li>
                            <li>Operating unrelated businesses</li>
                            <li>Providing services to non-members</li>
                        </ul>
                        
                        <h3>Exceptions (NOT subject to UBIT)</h3>
                        <ul>
                            <li>Volunteer labor (all or substantially all)</li>
                            <li>Donated merchandise sales</li>
                            <li>Member convenience activities</li>
                            <li>Bingo games (certain states)</li>
                            <li>Qualified sponsorship payments</li>
                        </ul>
                        
                        <h3>UBIT Tax Rate</h3>
                        <ul>
                            <li>Taxed at corporate rates (21%)</li>
                            <li>$1,000 specific deduction</li>
                            <li>File Form 990-T if UBI exceeds $1,000</li>
                        </ul>
                        
                        <div class="highlight">
                            <strong>Strategy:</strong> If considering revenue-generating activities, consult a nonprofit tax expert to structure them tax-efficiently.
                        </div>
                    `
                },
                {
                    id: 'lobbying-rules',
                    title: 'Lobbying and Political Activity',
                    content: `
                        <h2>Lobbying and Political Activity Rules</h2>
                        
                        <h3>Lobbying (501(c)(3) Organizations)</h3>
                        
                        <div class="definition">
                            <strong>Lobbying:</strong> Attempting to influence legislation. 501(c)(3)s can lobby, but it must be "insubstantial."
                        </div>
                        
                        <h3>Two Types of Lobbying</h3>
                        <ul>
                            <li><strong>Direct:</strong> Communicating with legislators about specific legislation</li>
                            <li><strong>Grassroots:</strong> Urging the public to contact legislators</li>
                        </ul>
                        
                        <h3>501(h) Election</h3>
                        <p>Charities can elect specific spending limits:</p>
                        <ul>
                            <li>Up to 20% of first $500,000 of exempt purpose expenditures</li>
                            <li>Declining percentage for larger organizations</li>
                            <li>Provides clearer rules than "insubstantial"</li>
                        </ul>
                        
                        <h3>Political Activity (PROHIBITED)</h3>
                        <div class="highlight">
                            <strong>Absolute Rule:</strong> 501(c)(3) organizations CANNOT participate in political campaigns for or against candidates. This is an absolute prohibition.
                        </div>
                        
                        <h3>What's Allowed</h3>
                        <ul>
                            <li>Voter registration drives (nonpartisan)</li>
                            <li>Voter education (all candidates equally)</li>
                            <li>Issue advocacy (not tied to candidates)</li>
                        </ul>
                        
                        <h3>What's NOT Allowed</h3>
                        <ul>
                            <li>Endorsing candidates</li>
                            <li>Campaign contributions</li>
                            <li>Candidate appearances (unless all invited)</li>
                        </ul>
                    `
                },
                {
                    id: 'converting-structures',
                    title: 'Converting Business Structures',
                    content: `
                        <h2>Converting Between Structures</h2>
                        
                        <h3>For-Profit to Nonprofit</h3>
                        <ul>
                            <li>Generally requires forming a new nonprofit</li>
                            <li>Cannot simply "convert" existing business</li>
                            <li>Assets transferred may have tax implications</li>
                            <li>Consider donating assets for tax deduction</li>
                        </ul>
                        
                        <h3>Nonprofit to For-Profit</h3>
                        <ul>
                            <li>Complex and heavily scrutinized</li>
                            <li>Assets must go to another nonprofit or charity</li>
                            <li>Cannot distribute to individuals</li>
                            <li>May require state attorney general approval</li>
                        </ul>
                        
                        <h3>Changing Nonprofit Types</h3>
                        <ul>
                            <li>501(c)(4) to 501(c)(3): Possible if meeting requirements</li>
                            <li>501(c)(3) to 501(c)(4): File new application</li>
                            <li>Each has different rules and restrictions</li>
                        </ul>
                        
                        <h3>Mergers and Acquisitions</h3>
                        <ul>
                            <li>Nonprofits can merge with other nonprofits</li>
                            <li>Must follow state nonprofit corporation law</li>
                            <li>Consider culture, mission alignment</li>
                            <li>Board approval required</li>
                        </ul>
                        
                        <h3>Dissolution</h3>
                        <div class="definition">
                            <strong>When Closing:</strong> 501(c)(3) assets must go to another 501(c)(3) or government entity. They cannot be distributed to individuals.
                        </div>
                    `
                },
                {
                    id: 'nonprofit-careers',
                    title: 'Working in Nonprofits',
                    content: `
                        <h2>Nonprofit Careers</h2>
                        
                        <h3>Common Nonprofit Roles</h3>
                        
                        <p><strong>Leadership</strong></p>
                        <ul>
                            <li>Executive Director / CEO</li>
                            <li>Chief Operating Officer</li>
                            <li>Chief Financial Officer</li>
                        </ul>
                        
                        <p><strong>Fundraising</strong></p>
                        <ul>
                            <li>Development Director</li>
                            <li>Grant Writer</li>
                            <li>Major Gifts Officer</li>
                            <li>Annual Fund Manager</li>
                        </ul>
                        
                        <p><strong>Programs</strong></p>
                        <ul>
                            <li>Program Director</li>
                            <li>Program Coordinator</li>
                            <li>Case Manager</li>
                        </ul>
                        
                        <p><strong>Operations</strong></p>
                        <ul>
                            <li>Communications Manager</li>
                            <li>Finance Manager</li>
                            <li>HR Manager</li>
                        </ul>
                        
                        <h3>Salary Reality</h3>
                        <div class="highlight">
                            <strong>Myth vs Reality:</strong> Nonprofit salaries are often competitive, especially for senior roles. While some positions pay less than corporate equivalents, many offer comparable compensation plus mission satisfaction.
                        </div>
                        
                        <h3>Getting Started</h3>
                        <ul>
                            <li><strong>Volunteer:</strong> Get experience and connections</li>
                            <li><strong>Board service:</strong> Great for professionals</li>
                            <li><strong>Idealist.org:</strong> Nonprofit job board</li>
                            <li><strong>LinkedIn Nonprofits:</strong> Job listings</li>
                        </ul>
                    `
                }
            ],
            quiz: [
                {
                    question: "When is income subject to UBIT?",
                    options: [
                        "All nonprofit income",
                        "Trade/business, regularly carried on, not related to exempt purpose",
                        "Only donations over $10,000",
                        "Investment income"
                    ],
                    correct: 1,
                    explanation: "UBIT applies when activity is a trade/business, regularly carried on, and not substantially related to the exempt purpose."
                },
                {
                    question: "Can 501(c)(3) organizations endorse political candidates?",
                    options: [
                        "Yes, it's protected speech",
                        "No, it's absolutely prohibited",
                        "Only in local elections",
                        "Only if the board approves"
                    ],
                    correct: 1,
                    explanation: "Political campaign activity is absolutely prohibited for 501(c)(3) organizations. This is a strict rule with no exceptions."
                },
                {
                    question: "What happens to assets when a 501(c)(3) dissolves?",
                    options: [
                        "Distributed to board members",
                        "Returned to donors",
                        "Must go to another 501(c)(3) or government",
                        "Kept by the founder"
                    ],
                    correct: 2,
                    explanation: "When a 501(c)(3) dissolves, assets must be distributed to another 501(c)(3) organization or government entity—never to individuals."
                },
                {
                    question: "What is the 501(h) election?",
                    options: [
                        "A way to avoid all taxes",
                        "Specific lobbying spending limits for 501(c)(3)s",
                        "A political activity permit",
                        "Board election procedures"
                    ],
                    correct: 1,
                    explanation: "The 501(h) election allows charities to elect specific spending limits for lobbying, providing clearer rules than the 'insubstantial' standard."
                },
                {
                    question: "What's a common myth about nonprofit salaries?",
                    options: [
                        "They're always high",
                        "They're always minimum wage",
                        "That they're never competitive (many actually are)",
                        "They're set by the government"
                    ],
                    correct: 2,
                    explanation: "A common myth is that nonprofit salaries are always low. In reality, many nonprofit positions, especially senior roles, offer competitive compensation."
                }
            ]
        }
    ]
};
