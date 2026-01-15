// Politics & Government Curriculum Data
const politicsData = {
    id: 'politics',
    title: 'Politics & Government',
    icon: '🏛️',
    description: 'Understand how government works and how to effectively participate.',
    graduationGoal: 'Understand how power works and how to participate',
    levels: [
        {
            id: 1,
            title: 'How Government Works',
            subtitle: 'The structure of American government',
            topics: [
                {
                    id: 'three-branches',
                    title: 'The Three Branches',
                    content: `
                        <h2>The Three Branches of Government</h2>
                        <h3>Legislative Branch (Congress)</h3>
                        <ul>
                            <li><strong>Makes laws</strong></li>
                            <li><strong>Senate:</strong> 100 members (2 per state), 6-year terms</li>
                            <li><strong>House:</strong> 435 members (by population), 2-year terms</li>
                            <li>Controls spending and taxation</li>
                            <li>Can declare war</li>
                            <li>Can impeach officials</li>
                        </ul>
                        <h3>Executive Branch (President)</h3>
                        <ul>
                            <li><strong>Enforces laws</strong></li>
                            <li>President serves 4-year term (max 2 terms)</li>
                            <li>Commander-in-Chief of military</li>
                            <li>Negotiates treaties</li>
                            <li>Appoints judges and officials</li>
                            <li>Can veto legislation</li>
                        </ul>
                        <h3>Judicial Branch (Courts)</h3>
                        <ul>
                            <li><strong>Interprets laws</strong></li>
                            <li>Supreme Court: 9 justices, lifetime appointments</li>
                            <li>Can declare laws unconstitutional</li>
                            <li>Final authority on constitutional questions</li>
                        </ul>
                        <div class="highlight">
                            <strong>Checks and Balances:</strong> Each branch can limit the others. President can veto Congress; Congress can override with 2/3 vote; Courts can strike down both.
                        </div>
                    `
                },
                {
                    id: 'federal-state-local',
                    title: 'Federal vs State vs Local',
                    content: `
                        <h2>Federal vs State vs Local Government</h2>
                        <h3>Federal Government</h3>
                        <ul>
                            <li>National defense and military</li>
                            <li>Foreign policy and treaties</li>
                            <li>Immigration</li>
                            <li>Interstate commerce</li>
                            <li>Currency and banking</li>
                            <li>Social Security, Medicare</li>
                        </ul>
                        <h3>State Government</h3>
                        <ul>
                            <li>Education policies</li>
                            <li>Healthcare regulations (Medicaid)</li>
                            <li>Criminal law (most crimes)</li>
                            <li>Driver's licenses</li>
                            <li>State taxes</li>
                            <li>Business regulations</li>
                        </ul>
                        <h3>Local Government</h3>
                        <ul>
                            <li>Police and fire departments</li>
                            <li>Public schools</li>
                            <li>Local roads and infrastructure</li>
                            <li>Zoning and land use</li>
                            <li>Property taxes</li>
                            <li>Local ordinances</li>
                        </ul>
                        <div class="highlight">
                            <strong>Impact on You:</strong> Local government often affects daily life most directly—schools, policing, roads, housing. Yet local elections have lowest turnout.
                        </div>
                    `
                }
            ],
            quiz: [
                {
                    question: 'Which branch of government makes laws?',
                    options: ['Executive', 'Judicial', 'Legislative', 'Administrative'],
                    correct: 2,
                    explanation: 'The Legislative branch (Congress—Senate and House of Representatives) makes federal laws.'
                },
                {
                    question: 'How many justices serve on the Supreme Court?',
                    options: ['5', '7', '9', '12'],
                    correct: 2,
                    explanation: 'The Supreme Court has 9 justices who serve lifetime appointments. They have final authority on constitutional questions.'
                },
                {
                    question: 'Which level of government controls public schools?',
                    options: ['Federal only', 'State only', 'Local (with state oversight)', 'All equally'],
                    correct: 2,
                    explanation: 'Public schools are primarily controlled at the local level (school boards) with state oversight. Federal role is limited.'
                }
            ]
        },
        {
            id: 2,
            title: 'Elections & Voting',
            subtitle: 'How to participate in democracy',
            topics: [
                {
                    id: 'voting-basics',
                    title: 'Voting Basics',
                    content: `
                        <h2>Voting Basics</h2>
                        <h3>Voter Registration</h3>
                        <ul>
                            <li>Must register before voting (deadlines vary by state)</li>
                            <li>Register at Vote.org or your state's website</li>
                            <li>Update when you move</li>
                            <li>Some states have same-day registration</li>
                        </ul>
                        <h3>Types of Elections</h3>
                        <ul>
                            <li><strong>Primary:</strong> Parties choose candidates (closed vs open)</li>
                            <li><strong>General:</strong> All voters choose between parties' candidates</li>
                            <li><strong>Special:</strong> Fill unexpected vacancies</li>
                            <li><strong>Local/Municipal:</strong> Often held off-cycle</li>
                        </ul>
                        <h3>How to Vote</h3>
                        <ul>
                            <li><strong>In-person:</strong> On Election Day at your polling place</li>
                            <li><strong>Early voting:</strong> Available in most states</li>
                            <li><strong>Mail/Absentee:</strong> Rules vary by state</li>
                        </ul>
                        <h3>What You're Voting For</h3>
                        <ul>
                            <li>President (every 4 years)</li>
                            <li>Congress (every 2 years)</li>
                            <li>State officials (governor, legislature)</li>
                            <li>Local officials (mayor, city council, school board)</li>
                            <li>Ballot measures (direct democracy)</li>
                        </ul>
                        <div class="highlight">
                            <strong>Key Dates:</strong> Presidential elections: November every 4 years. Midterms: November every 4 years between presidential. Primaries: Varies by state.
                        </div>
                    `
                },
                {
                    id: 'electoral-college',
                    title: 'The Electoral College',
                    content: `
                        <h2>The Electoral College</h2>
                        <div class="definition">
                            <strong>Electoral College:</strong> The system by which the President is actually elected. States, not individuals, cast the deciding votes.
                        </div>
                        <h3>How It Works</h3>
                        <ul>
                            <li>Each state gets electors = Senators + Representatives</li>
                            <li>Total: 538 electors (DC gets 3)</li>
                            <li>Need 270 to win</li>
                            <li>Most states: Winner-take-all (win state = all electors)</li>
                        </ul>
                        <h3>Why It Exists</h3>
                        <ul>
                            <li>Compromise at founding (balancing large and small states)</li>
                            <li>Founders skeptical of direct democracy</li>
                            <li>Continues due to difficulty of amending Constitution</li>
                        </ul>
                        <h3>Implications</h3>
                        <ul>
                            <li>Swing states get disproportionate attention</li>
                            <li>Possible to win presidency without popular vote</li>
                            <li>California voter and Wyoming voter have different "weight"</li>
                        </ul>
                        <div class="highlight">
                            <strong>Your Vote Still Matters:</strong> Even in "safe" states, voting affects down-ballot races, ballot measures, and builds political power over time.
                        </div>
                    `
                }
            ],
            quiz: [
                {
                    question: 'How many electoral votes are needed to win the presidency?',
                    options: ['200', '270', '300', '350'],
                    correct: 1,
                    explanation: 'A presidential candidate needs 270 electoral votes (a majority of the 538 total) to win the election.'
                },
                {
                    question: 'What is a primary election?',
                    options: [
                        'The most important election',
                        'An election where parties choose their candidates',
                        'The first election you vote in',
                        'A local-only election'
                    ],
                    correct: 1,
                    explanation: 'Primary elections allow party members to choose which candidate will represent their party in the general election.'
                }
            ]
        },
        {
            id: 3,
            title: 'How Laws Are Made',
            subtitle: 'The legislative process',
            topics: [
                {
                    id: 'bill-to-law',
                    title: 'How a Bill Becomes Law',
                    content: `
                        <h2>How a Bill Becomes Law</h2>
                        <h3>The Process</h3>
                        <ol>
                            <li><strong>Introduction:</strong> Member of Congress introduces bill</li>
                            <li><strong>Committee:</strong> Bill assigned to relevant committee</li>
                            <li><strong>Committee Vote:</strong> Committee decides to advance or not</li>
                            <li><strong>Floor Debate:</strong> Full chamber debates the bill</li>
                            <li><strong>Chamber Vote:</strong> House or Senate votes</li>
                            <li><strong>Other Chamber:</strong> Process repeats in other chamber</li>
                            <li><strong>Conference:</strong> Reconcile differences between versions</li>
                            <li><strong>President:</strong> Signs (becomes law) or vetoes</li>
                            <li><strong>Override:</strong> Congress can override with 2/3 vote</li>
                        </ol>
                        <h3>Where Bills Die</h3>
                        <ul>
                            <li>Most never make it out of committee</li>
                            <li>Senate filibuster can block votes</li>
                            <li>Conference committee disagreements</li>
                            <li>Presidential veto</li>
                        </ul>
                        <div class="highlight">
                            <strong>Reality:</strong> Only about 4% of introduced bills become law. The system is designed to make passing laws difficult.
                        </div>
                    `
                },
                {
                    id: 'lobbying-influence',
                    title: 'Lobbying and Influence',
                    content: `
                        <h2>Lobbying and Influence</h2>
                        <div class="definition">
                            <strong>Lobbying:</strong> Attempting to influence legislators' decisions. Legal and protected by First Amendment right to petition government.
                        </div>
                        <h3>Who Lobbies?</h3>
                        <ul>
                            <li>Corporations and industry groups</li>
                            <li>Labor unions</li>
                            <li>Nonprofit advocacy groups</li>
                            <li>Foreign governments</li>
                            <li>State and local governments</li>
                            <li>You (constituent contact is lobbying)</li>
                        </ul>
                        <h3>How It Works</h3>
                        <ul>
                            <li>Direct meetings with legislators</li>
                            <li>Campaign contributions</li>
                            <li>Grassroots mobilization</li>
                            <li>Research and information</li>
                            <li>Coalition building</li>
                        </ul>
                        <h3>Money in Politics</h3>
                        <ul>
                            <li>PACs: Donate directly to candidates</li>
                            <li>Super PACs: Unlimited spending, no coordination</li>
                            <li>Dark money: Nonprofit spending without disclosure</li>
                        </ul>
                        <div class="highlight">
                            <strong>Your Power:</strong> Constituent contact matters. Representatives track calls, letters, and town hall attendance. Organized groups of voters have influence.
                        </div>
                    `
                }
            ],
            quiz: [
                {
                    question: 'What percentage of introduced bills typically become law?',
                    options: ['About 4%', 'About 25%', 'About 50%', 'About 75%'],
                    correct: 0,
                    explanation: 'Only about 4% of bills introduced in Congress become law. The system is intentionally designed to make passing legislation difficult.'
                },
                {
                    question: 'What is a filibuster?',
                    options: [
                        'A type of bill',
                        'A Senate tactic to delay or block votes by extending debate',
                        'A committee vote',
                        'A presidential veto'
                    ],
                    correct: 1,
                    explanation: 'A filibuster is a Senate procedure where senators can extend debate indefinitely to block a vote. It takes 60 votes to end a filibuster.'
                }
            ]
        },
        {
            id: 4,
            title: 'Political Parties & Ideologies',
            subtitle: 'Understanding the political spectrum',
            topics: [
                {
                    id: 'political-spectrum',
                    title: 'The Political Spectrum',
                    content: `
                        <h2>The Political Spectrum</h2>
                        <h3>Traditional Left-Right</h3>
                        <ul>
                            <li><strong>Left/Liberal:</strong> More government role in economy, social equality focus</li>
                            <li><strong>Right/Conservative:</strong> Limited government, traditional values, free markets</li>
                            <li><strong>Center/Moderate:</strong> Mix of positions from both sides</li>
                        </ul>
                        <h3>Beyond Left-Right</h3>
                        <p>Political views are multi-dimensional:</p>
                        <ul>
                            <li><strong>Economic:</strong> Government intervention vs free markets</li>
                            <li><strong>Social:</strong> Traditional values vs progressive values</li>
                            <li><strong>Libertarian:</strong> Limited government in both economic and social</li>
                            <li><strong>Authoritarian:</strong> Strong government in both areas</li>
                        </ul>
                        <h3>Common Political Labels</h3>
                        <ul>
                            <li>Progressive, Liberal, Moderate, Conservative, Libertarian</li>
                            <li>Labels often oversimplify complex positions</li>
                            <li>Most people hold mix of views from different categories</li>
                        </ul>
                        <div class="highlight">
                            <strong>Think Critically:</strong> Don't accept labels at face value. Understand the specific positions and reasoning behind them.
                        </div>
                    `
                },
                {
                    id: 'two-parties',
                    title: 'The Two-Party System',
                    content: `
                        <h2>The Two-Party System</h2>
                        <h3>Why Two Parties?</h3>
                        <ul>
                            <li>Winner-take-all elections favor big parties</li>
                            <li>Historical development since founding</li>
                            <li>Media and debate access favors two parties</li>
                            <li>Self-reinforcing: voters don't want to "waste" votes</li>
                        </ul>
                        <h3>Democratic Party</h3>
                        <ul>
                            <li>Generally left-of-center</li>
                            <li>Healthcare, environment, social programs</li>
                            <li>Coalition: urban, minorities, young voters</li>
                        </ul>
                        <h3>Republican Party</h3>
                        <ul>
                            <li>Generally right-of-center</li>
                            <li>Tax cuts, deregulation, traditional values</li>
                            <li>Coalition: rural, religious, older voters</li>
                        </ul>
                        <h3>Third Parties</h3>
                        <ul>
                            <li>Libertarian: Limited government overall</li>
                            <li>Green: Environmental, progressive</li>
                            <li>Rarely win major offices but can influence debate</li>
                        </ul>
                        <div class="highlight">
                            <strong>Nuance:</strong> Both parties have internal diversity. There are moderate Democrats and moderate Republicans, progressives and conservatives in each.
                        </div>
                    `
                }
            ],
            quiz: [
                {
                    question: 'Why does the US tend toward a two-party system?',
                    options: [
                        'Constitution requires it',
                        'Winner-take-all elections favor large parties',
                        'Americans only have two viewpoints',
                        'Third parties are illegal'
                    ],
                    correct: 1,
                    explanation: 'Winner-take-all elections mean third parties struggle to win any seats, so voters tend to choose between the two major parties rather than "waste" votes.'
                },
                {
                    question: 'What does "left" generally mean in American politics?',
                    options: [
                        'Wrong or incorrect',
                        'Support for more government role in economy and social equality',
                        'Support for traditional values',
                        'Anti-government'
                    ],
                    correct: 1,
                    explanation: '"Left" or "liberal" in American politics generally refers to support for government involvement in the economy and focus on social equality.'
                }
            ]
        },
        {
            id: 5,
            title: 'Civic Engagement',
            subtitle: 'How to make your voice heard',
            topics: [
                {
                    id: 'contacting-reps',
                    title: 'Contacting Your Representatives',
                    content: `
                        <h2>Contacting Your Representatives</h2>
                        <h3>Finding Your Representatives</h3>
                        <ul>
                            <li>Federal: House.gov, Senate.gov (enter zip code)</li>
                            <li>State: Your state legislature website</li>
                            <li>Local: City/county government website</li>
                        </ul>
                        <h3>Most Effective Methods (Ranked)</h3>
                        <ol>
                            <li><strong>In-person meetings</strong> (town halls, office visits)</li>
                            <li><strong>Phone calls</strong> (tracked and tallied)</li>
                            <li><strong>Personalized letters</strong> (especially handwritten)</li>
                            <li><strong>Email</strong> (personal > form)</li>
                            <li><strong>Social media</strong> (public pressure)</li>
                        </ol>
                        <h3>What to Say</h3>
                        <div class="example">
                            1. Introduce yourself as a constituent<br>
                            2. State your position clearly<br>
                            3. Share a personal story if relevant<br>
                            4. Ask for a specific action<br>
                            5. Request a response
                        </div>
                        <h3>Script Example</h3>
                        <div class="example">
                            "Hi, I'm [name], a constituent from [city]. I'm calling about [issue]. I want the [Representative] to [specific action]. This matters to me because [brief reason]. Can I count on their support?"
                        </div>
                        <div class="highlight">
                            <strong>Numbers Matter:</strong> Representatives track constituent contact by issue. Join with others to amplify your voice.
                        </div>
                    `
                },
                {
                    id: 'beyond-voting',
                    title: 'Beyond Voting: Other Ways to Engage',
                    content: `
                        <h2>Beyond Voting: Other Ways to Engage</h2>
                        <h3>Political Participation</h3>
                        <ul>
                            <li>Join a political party or local committee</li>
                            <li>Volunteer for campaigns</li>
                            <li>Attend town halls and public meetings</li>
                            <li>Donate to candidates or causes</li>
                            <li>Write letters to the editor</li>
                            <li>Organize with others on issues you care about</li>
                        </ul>
                        <h3>Running for Office</h3>
                        <ul>
                            <li>Start local (school board, city council)</li>
                            <li>No special qualifications needed for most offices</li>
                            <li>Contact local party for support</li>
                            <li>Organizations like Run for Something help first-timers</li>
                        </ul>
                        <h3>Staying Informed</h3>
                        <ul>
                            <li>Read multiple news sources</li>
                            <li>Understand difference between news and opinion</li>
                            <li>Check primary sources when possible</li>
                            <li>Be aware of your own biases</li>
                        </ul>
                        <div class="highlight">
                            <strong>Start Somewhere:</strong> You don't have to do everything. Pick one issue or one type of engagement and commit to it consistently.
                        </div>
                    `
                }
            ],
            quiz: [
                {
                    question: 'What is the most effective way to contact your representative?',
                    options: [
                        'Social media comments',
                        'Form emails',
                        'Phone calls and in-person meetings',
                        'Online petitions'
                    ],
                    correct: 2,
                    explanation: 'Phone calls and in-person meetings (like town halls) are most effective because staff track them and they demonstrate genuine constituent engagement.'
                },
                {
                    question: 'What should you include when contacting your representative?',
                    options: [
                        'Just your name',
                        'Your address to prove you\'re a constituent and a specific ask',
                        'Only your opinion',
                        'A long essay about the issue'
                    ],
                    correct: 1,
                    explanation: 'Include your address (to prove you\'re a constituent), state your position clearly, and ask for a specific action. Representatives respond to constituents, not random callers.'
                }
            ]
        }
    ]
};
