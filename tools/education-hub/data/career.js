// Career Strategy Curriculum Data
const careerData = {
    id: 'career',
    title: 'Career Strategy',
    icon: '🎯',
    description: 'Master job searching, interviewing, personal branding, and career advancement. Your career is your biggest financial asset.',
    whyItMatters: 'Your career earnings will likely total $1-3 million over your lifetime. Small improvements in how you manage your career—negotiating, positioning, advancing—can mean hundreds of thousands of dollars in difference.',
    graduationGoal: 'Confidently navigate job searches, interviews, and career advancement',
    levels: [
        {
            id: 1,
            title: 'Career Foundation',
            subtitle: 'Understanding the modern career landscape',
            topics: [
                {
                    id: 'career-reality',
                    title: 'The New Career Reality',
                    content: `
                        <h2>The New Career Reality</h2>
                        
                        <div class="definition">
                            <strong>Key Truth:</strong> The average person will have 12 different jobs and 3-5 careers in their lifetime. Loyalty to one company rarely pays off anymore.
                        </div>
                        
                        <h3>Old vs. New Career Model</h3>
                        <table>
                            <tr><td><strong>Old Model</strong></td><td><strong>New Reality</strong></td></tr>
                            <tr><td>40 years at one company</td><td>2-4 years average tenure</td></tr>
                            <tr><td>Company manages your career</td><td>You manage your career</td></tr>
                            <tr><td>Loyalty rewarded with security</td><td>Skills rewarded with opportunity</td></tr>
                            <tr><td>Linear progression</td><td>Portfolio of experiences</td></tr>
                            <tr><td>Wait for promotions</td><td>Create your own opportunities</td></tr>
                        </table>
                        
                        <h3>What This Means for You</h3>
                        <ul>
                            <li><strong>You are a business:</strong> "You, Inc." - you sell your skills</li>
                            <li><strong>Skills are your product:</strong> Keep them valuable and current</li>
                            <li><strong>Network is your distribution:</strong> How opportunities find you</li>
                            <li><strong>Reputation is your brand:</strong> What people say when you're not there</li>
                        </ul>
                        
                        <h3>Career Capital</h3>
                        <p>Your career capital consists of:</p>
                        <ul>
                            <li><strong>Skills:</strong> What you can do</li>
                            <li><strong>Experience:</strong> Proof you've done it</li>
                            <li><strong>Credentials:</strong> Education, certifications</li>
                            <li><strong>Network:</strong> Who knows and trusts you</li>
                            <li><strong>Reputation:</strong> What you're known for</li>
                        </ul>
                        
                        <div class="highlight">
                            <strong>Mindset Shift:</strong> Stop thinking "I need a job." Start thinking "I have valuable skills to offer. Who needs them and will pay well?"
                        </div>
                    `
                },
                {
                    id: 'career-assessment',
                    title: 'Know Your Value',
                    content: `
                        <h2>Know Your Value</h2>
                        
                        <h3>Market Value Research</h3>
                        <p>You can't negotiate or position yourself without knowing your market value:</p>
                        <ul>
                            <li><strong>Glassdoor:</strong> Salary data by company and role</li>
                            <li><strong>LinkedIn Salary:</strong> Compensation insights</li>
                            <li><strong>Levels.fyi:</strong> Tech industry specifics</li>
                            <li><strong>PayScale:</strong> Detailed compensation reports</li>
                            <li><strong>Bureau of Labor Statistics:</strong> Official government data</li>
                        </ul>
                        
                        <h3>Factors That Affect Your Value</h3>
                        <ul>
                            <li><strong>Location:</strong> Same job pays differently in SF vs. Kansas City</li>
                            <li><strong>Industry:</strong> Finance pays more than nonprofits</li>
                            <li><strong>Company size:</strong> Big companies often pay more</li>
                            <li><strong>Skills scarcity:</strong> Rare skills command premiums</li>
                            <li><strong>Experience level:</strong> Years + quality of experience</li>
                        </ul>
                        
                        <h3>Skills Audit</h3>
                        <p>List your skills in three categories:</p>
                        <ul>
                            <li><strong>Hard skills:</strong> Technical abilities (coding, accounting, design)</li>
                            <li><strong>Soft skills:</strong> Interpersonal (communication, leadership, problem-solving)</li>
                            <li><strong>Domain knowledge:</strong> Industry-specific expertise</li>
                        </ul>
                        
                        <h3>Accomplishment Inventory</h3>
                        <p>Document achievements using the STAR method:</p>
                        <ul>
                            <li><strong>S</strong>ituation: What was the context?</li>
                            <li><strong>T</strong>ask: What were you responsible for?</li>
                            <li><strong>A</strong>ction: What did you specifically do?</li>
                            <li><strong>R</strong>esult: What was the measurable outcome?</li>
                        </ul>
                        
                        <div class="example">
                            <strong>Example:</strong><br>
                            Weak: "Managed social media"<br>
                            Strong: "Grew Instagram following from 5K to 50K in 6 months, generating $100K in sales through social campaigns"
                        </div>
                    `
                },
                {
                    id: 'career-direction',
                    title: 'Choosing Your Direction',
                    content: `
                        <h2>Choosing Your Direction</h2>
                        
                        <h3>The Sweet Spot</h3>
                        <p>The best career direction sits at the intersection of:</p>
                        <ul>
                            <li><strong>What you're good at:</strong> Skills and natural abilities</li>
                            <li><strong>What you enjoy:</strong> Work that energizes you</li>
                            <li><strong>What pays:</strong> Market demand and compensation</li>
                            <li><strong>What the world needs:</strong> Problems worth solving</li>
                        </ul>
                        
                        <h3>Questions to Explore</h3>
                        <ul>
                            <li>What tasks make time fly by?</li>
                            <li>What do people come to you for help with?</li>
                            <li>What would you do even if you weren't paid?</li>
                            <li>What problems do you enjoy solving?</li>
                            <li>What industries or topics fascinate you?</li>
                        </ul>
                        
                        <h3>Career Paths to Consider</h3>
                        <ul>
                            <li><strong>Specialist:</strong> Deep expertise in one area</li>
                            <li><strong>Generalist:</strong> Broad skills across many areas</li>
                            <li><strong>Manager:</strong> Leading and developing others</li>
                            <li><strong>Entrepreneur:</strong> Building your own thing</li>
                            <li><strong>Portfolio:</strong> Multiple roles/income streams</li>
                        </ul>
                        
                        <h3>Testing Directions</h3>
                        <p>Before committing, test your assumptions:</p>
                        <ul>
                            <li>Talk to people actually doing the work</li>
                            <li>Take on side projects in that area</li>
                            <li>Volunteer or intern to get real experience</li>
                            <li>Shadow someone for a day</li>
                            <li>Read day-in-the-life accounts</li>
                        </ul>
                        
                        <div class="highlight">
                            <strong>Reality Check:</strong> You don't need to find your "passion." Find work you're good at, that pays well, and that you don't hate. Passion often develops from mastery.
                        </div>
                    `
                }
            ],
            quiz: {
                questions: [
                    {
                        question: 'What is "career capital"?',
                        options: [
                            'Money saved from your job',
                            'Your combination of skills, experience, network, and reputation',
                            'Your retirement account',
                            'Your job title'
                        ],
                        correct: 1,
                        explanation: 'Career capital is your combination of skills, experience, credentials, network, and reputation—the assets that make you valuable in the job market.'
                    },
                    {
                        question: 'What does the STAR method stand for?',
                        options: [
                            'Skills, Training, Achievements, Results',
                            'Situation, Task, Action, Result',
                            'Strategy, Tactics, Analysis, Review',
                            'Strengths, Talents, Abilities, Resources'
                        ],
                        correct: 1,
                        explanation: 'STAR stands for Situation, Task, Action, Result—a framework for describing accomplishments in a compelling, specific way.'
                    },
                    {
                        question: 'How long does the average person stay at one job today?',
                        options: ['1-2 years', '2-4 years', '5-7 years', '10+ years'],
                        correct: 1,
                        explanation: 'The average job tenure today is 2-4 years, meaning you\'ll likely change jobs many times throughout your career.'
                    }
                ]
            }
        },
        {
            id: 2,
            title: 'Resume & Personal Branding',
            subtitle: 'Stand out in a crowded market',
            topics: [
                {
                    id: 'resume-fundamentals',
                    title: 'Building a Powerful Resume',
                    content: `
                        <h2>Building a Powerful Resume</h2>
                        
                        <div class="definition">
                            <strong>Resume Purpose:</strong> To get an interview. That's it. Not to tell your life story—to generate enough interest for a conversation.
                        </div>
                        
                        <h3>Resume Reality</h3>
                        <ul>
                            <li>Recruiters spend 6-10 seconds on initial scan</li>
                            <li>75% of resumes never seen by human (filtered by ATS)</li>
                            <li>Tailored resumes get 3x more interviews</li>
                        </ul>
                        
                        <h3>Essential Sections</h3>
                        <ol>
                            <li><strong>Header:</strong> Name, phone, email, LinkedIn, location (city/state only)</li>
                            <li><strong>Summary:</strong> 2-3 sentences positioning statement (optional but powerful)</li>
                            <li><strong>Experience:</strong> Reverse chronological, accomplishment-focused</li>
                            <li><strong>Skills:</strong> Relevant technical and soft skills</li>
                            <li><strong>Education:</strong> Degrees, relevant certifications</li>
                        </ol>
                        
                        <h3>Accomplishment Bullets Formula</h3>
                        <p><strong>Action Verb + What You Did + Result/Impact</strong></p>
                        <ul>
                            <li>❌ "Responsible for sales"</li>
                            <li>✅ "Increased regional sales 35% ($500K) by implementing new CRM and training 12 reps"</li>
                            <li>❌ "Helped with customer service"</li>
                            <li>✅ "Resolved 50+ customer issues daily with 98% satisfaction rating"</li>
                        </ul>
                        
                        <h3>Formatting Rules</h3>
                        <ul>
                            <li>1 page for <10 years experience, 2 pages max otherwise</li>
                            <li>Clean, readable fonts (Arial, Calibri, Garamond)</li>
                            <li>Consistent formatting throughout</li>
                            <li>PDF format (preserves formatting)</li>
                            <li>No photos, graphics, or fancy designs (unless creative field)</li>
                        </ul>
                        
                        <div class="highlight">
                            <strong>Pro Tip:</strong> Every bullet should answer "So what?" If it doesn't show impact or results, rewrite or remove it.
                        </div>
                    `
                },
                {
                    id: 'ats-optimization',
                    title: 'Beating the ATS (Applicant Tracking Systems)',
                    content: `
                        <h2>Beating the ATS</h2>
                        
                        <div class="definition">
                            <strong>ATS:</strong> Software that scans and filters resumes before humans see them. Used by 98% of Fortune 500 and most mid-size companies.
                        </div>
                        
                        <h3>How ATS Works</h3>
                        <ul>
                            <li>Scans for keywords matching job description</li>
                            <li>Ranks applicants by "match score"</li>
                            <li>Filters out resumes below threshold</li>
                            <li>Only top % get human review</li>
                        </ul>
                        
                        <h3>ATS-Friendly Formatting</h3>
                        <ul>
                            <li>Use standard section headers (Experience, Education, Skills)</li>
                            <li>No tables, columns, or text boxes</li>
                            <li>No headers/footers (often not read)</li>
                            <li>Standard fonts</li>
                            <li>.docx or PDF format</li>
                            <li>No images or graphics</li>
                        </ul>
                        
                        <h3>Keyword Optimization</h3>
                        <ol>
                            <li>Read the job description carefully</li>
                            <li>Identify key skills and requirements mentioned</li>
                            <li>Include exact phrases from job posting (naturally)</li>
                            <li>Match their language (if they say "customer success," don't say "client relations")</li>
                        </ol>
                        
                        <h3>Tailoring Strategy</h3>
                        <ul>
                            <li>Create a "master resume" with all experience</li>
                            <li>Customize for each application</li>
                            <li>Move most relevant experience to top</li>
                            <li>Adjust skills section for each job</li>
                            <li>Mirror language from job posting</li>
                        </ul>
                        
                        <div class="example">
                            <strong>Example:</strong><br>
                            Job posting says: "Experience with Salesforce CRM"<br>
                            Your resume should include: "Salesforce CRM" (exact match)<br>
                            NOT: "CRM software" or "customer database" (won't match)
                        </div>
                    `
                },
                {
                    id: 'linkedin-optimization',
                    title: 'LinkedIn Profile Optimization',
                    content: `
                        <h2>LinkedIn Profile Optimization</h2>
                        
                        <h3>Why LinkedIn Matters</h3>
                        <ul>
                            <li>87% of recruiters use LinkedIn</li>
                            <li>Your profile is searchable 24/7</li>
                            <li>First result when people Google your name</li>
                            <li>Gateway to hidden job market</li>
                        </ul>
                        
                        <h3>Profile Must-Haves</h3>
                        <ul>
                            <li><strong>Professional photo:</strong> Get 14x more views (headshot, good lighting, smile)</li>
                            <li><strong>Custom URL:</strong> linkedin.com/in/yourname</li>
                            <li><strong>Compelling headline:</strong> Not just your job title—your value proposition</li>
                            <li><strong>Keyword-rich summary:</strong> 3-5 paragraphs about your expertise and goals</li>
                            <li><strong>Detailed experience:</strong> Can be more detailed than resume</li>
                        </ul>
                        
                        <h3>Headline Formula</h3>
                        <p>Go beyond job title:</p>
                        <ul>
                            <li>❌ "Marketing Manager at XYZ Corp"</li>
                            <li>✅ "Marketing Manager | Helping B2B SaaS companies grow revenue through content"</li>
                            <li>❌ "Accountant"</li>
                            <li>✅ "CPA | Helping small businesses save money on taxes and make smarter financial decisions"</li>
                        </ul>
                        
                        <h3>Increasing Visibility</h3>
                        <ul>
                            <li>Post content regularly (even just commenting)</li>
                            <li>Engage with others' posts</li>
                            <li>Join and participate in groups</li>
                            <li>Connect with people in your industry</li>
                            <li>Get and give recommendations</li>
                            <li>Turn on "Open to Work" (can be visible only to recruiters)</li>
                        </ul>
                        
                        <div class="highlight">
                            <strong>Profile Checklist:</strong>
                            <ul>
                                <li>☐ Professional headshot</li>
                                <li>☐ Custom URL</li>
                                <li>☐ Value-focused headline</li>
                                <li>☐ Keyword-rich summary</li>
                                <li>☐ Complete work history</li>
                                <li>☐ Skills endorsed</li>
                                <li>☐ 3+ recommendations</li>
                            </ul>
                        </div>
                    `
                },
                {
                    id: 'personal-branding',
                    title: 'Building Your Personal Brand',
                    content: `
                        <h2>Building Your Personal Brand</h2>
                        
                        <div class="definition">
                            <strong>Personal Brand:</strong> What people say about you when you're not in the room. It's your professional reputation made intentional.
                        </div>
                        
                        <h3>Why Brand Matters</h3>
                        <ul>
                            <li>Opportunities come to those who are known</li>
                            <li>Strong brand = less need to job hunt</li>
                            <li>Commands higher compensation</li>
                            <li>Creates options and leverage</li>
                        </ul>
                        
                        <h3>Define Your Brand</h3>
                        <ol>
                            <li><strong>What do you want to be known for?</strong> Pick 2-3 themes</li>
                            <li><strong>Who is your audience?</strong> Who should know you?</li>
                            <li><strong>What's your unique angle?</strong> What makes you different?</li>
                            <li><strong>What value do you provide?</strong> How do you help others?</li>
                        </ol>
                        
                        <h3>Brand Building Activities</h3>
                        <ul>
                            <li><strong>Content creation:</strong> Blog posts, LinkedIn articles, videos</li>
                            <li><strong>Speaking:</strong> Conferences, webinars, podcasts</li>
                            <li><strong>Teaching:</strong> Mentoring, workshops, courses</li>
                            <li><strong>Networking:</strong> Industry events, online communities</li>
                            <li><strong>Social media:</strong> Consistent presence and engagement</li>
                        </ul>
                        
                        <h3>Consistency is Key</h3>
                        <ul>
                            <li>Same photo across platforms</li>
                            <li>Consistent messaging and themes</li>
                            <li>Regular activity (not sporadic)</li>
                            <li>Professional in all interactions</li>
                        </ul>
                        
                        <div class="example">
                            <strong>Brand Statement Example:</strong><br>
                            "I help early-stage startups build their first marketing engine. I specialize in content marketing and SEO for B2B SaaS companies, and I share what I learn through my weekly LinkedIn posts and newsletter."
                        </div>
                    `
                }
            ],
            quiz: {
                questions: [
                    {
                        question: 'How long do recruiters typically spend on the initial resume scan?',
                        options: ['1-2 seconds', '6-10 seconds', '30-60 seconds', '2-3 minutes'],
                        correct: 1,
                        explanation: 'Recruiters spend only 6-10 seconds on an initial resume scan, which is why clear formatting and strong top-of-resume content is critical.'
                    },
                    {
                        question: 'What percentage of large company resumes are filtered by ATS before human review?',
                        options: ['25%', '50%', '75%', '90%'],
                        correct: 2,
                        explanation: 'Approximately 75% of resumes are filtered out by ATS systems before a human ever sees them—making keyword optimization essential.'
                    },
                    {
                        question: 'What is a personal brand?',
                        options: [
                            'Your logo and business cards',
                            'What people say about you when you\'re not in the room',
                            'Your social media follower count',
                            'Your job title and company'
                        ],
                        correct: 1,
                        explanation: 'Your personal brand is your professional reputation—what people say and think about you when you\'re not present.'
                    }
                ]
            }
        },
        {
            id: 3,
            title: 'Job Search Strategy',
            subtitle: 'Find opportunities before they find you',
            topics: [
                {
                    id: 'job-search-methods',
                    title: 'Job Search Methods Ranked',
                    content: `
                        <h2>Job Search Methods Ranked</h2>
                        
                        <h3>Most Effective Methods</h3>
                        <ol>
                            <li><strong>Employee Referrals (30-50% of hires):</strong> Ask connections to refer you</li>
                            <li><strong>Direct Outreach:</strong> Contact hiring managers directly</li>
                            <li><strong>Recruiters:</strong> Build relationships with industry recruiters</li>
                            <li><strong>Company Websites:</strong> Apply directly on target companies</li>
                            <li><strong>Job Boards:</strong> LinkedIn, Indeed, Glassdoor (highest competition)</li>
                        </ol>
                        
                        <h3>The Hidden Job Market</h3>
                        <ul>
                            <li>60-80% of jobs are never publicly posted</li>
                            <li>Filled through referrals and networking</li>
                            <li>Often created for specific candidates</li>
                            <li>Accessed through relationships, not applications</li>
                        </ul>
                        
                        <h3>Creating a Target List</h3>
                        <ol>
                            <li>Identify 20-50 companies you'd want to work for</li>
                            <li>Research each company's culture, growth, and stability</li>
                            <li>Find connections at each company (LinkedIn)</li>
                            <li>Follow their social media and news</li>
                            <li>Apply to openings AND network in</li>
                        </ol>
                        
                        <h3>Application Numbers Game</h3>
                        <p>Typical conversion rates:</p>
                        <ul>
                            <li>100 applications → 10-15 responses → 5-8 phone screens → 2-3 final interviews → 1 offer</li>
                            <li>With referrals: cut all numbers by 50-70%</li>
                        </ul>
                        
                        <div class="highlight">
                            <strong>Strategy:</strong> Spend 50% of job search time on networking/referrals, 30% on direct outreach, and only 20% on job board applications.
                        </div>
                    `
                },
                {
                    id: 'networking-strategy',
                    title: 'Networking That Actually Works',
                    content: `
                        <h2>Networking That Actually Works</h2>
                        
                        <div class="definition">
                            <strong>Reframe:</strong> Networking isn't schmoozing or asking for favors. It's building genuine relationships and being helpful to others.
                        </div>
                        
                        <h3>Types of Networking</h3>
                        <ul>
                            <li><strong>Warm contacts:</strong> Friends, family, former colleagues</li>
                            <li><strong>Lukewarm:</strong> Friends of friends, alumni, shared group members</li>
                            <li><strong>Cold:</strong> People you don't know but want to</li>
                        </ul>
                        
                        <h3>The Coffee Chat Script</h3>
                        <p>Reaching out for informational interviews:</p>
                        <blockquote>
                            "Hi [Name], I came across your profile and was impressed by your work in [specific thing]. I'm exploring opportunities in [field] and would love to learn more about your experience at [company]. Would you have 15-20 minutes for a quick call sometime? I'd really appreciate your insights."
                        </blockquote>
                        
                        <h3>During the Conversation</h3>
                        <ul>
                            <li>Ask about their path and experience</li>
                            <li>Ask what they wish they knew earlier</li>
                            <li>Ask what skills are most valuable</li>
                            <li>Ask who else they'd recommend talking to</li>
                            <li>Don't ask for a job directly</li>
                        </ul>
                        
                        <h3>Follow-Up is Everything</h3>
                        <ul>
                            <li>Send thank you within 24 hours</li>
                            <li>Connect on LinkedIn with personalized note</li>
                            <li>Share something relevant periodically</li>
                            <li>Update them on your progress</li>
                            <li>Offer to help them when possible</li>
                        </ul>
                        
                        <h3>Building Network Before You Need It</h3>
                        <ul>
                            <li>Reach out when you DON'T need something</li>
                            <li>Give before you ask (share articles, make intros)</li>
                            <li>Stay in touch regularly, not just when job hunting</li>
                            <li>Be a connector for others</li>
                        </ul>
                        
                        <div class="example">
                            <strong>Networking Math:</strong><br>
                            5 conversations/week × 4 weeks = 20 new connections/month<br>
                            Each person knows ~250 people<br>
                            20 × 250 = 5,000 potential extended network from 1 month of effort
                        </div>
                    `
                },
                {
                    id: 'job-search-organization',
                    title: 'Organizing Your Job Search',
                    content: `
                        <h2>Organizing Your Job Search</h2>
                        
                        <h3>Track Everything</h3>
                        <p>Create a spreadsheet or use a tool to track:</p>
                        <ul>
                            <li>Company name</li>
                            <li>Position title</li>
                            <li>Date applied</li>
                            <li>Application method (referral, direct, job board)</li>
                            <li>Contact person</li>
                            <li>Status (applied, phone screen, interview, etc.)</li>
                            <li>Follow-up dates</li>
                            <li>Notes</li>
                        </ul>
                        
                        <h3>Daily Job Search Schedule</h3>
                        <p>Treat it like a job (if currently unemployed):</p>
                        <ul>
                            <li><strong>Morning:</strong> Apply to 3-5 jobs (quality over quantity)</li>
                            <li><strong>Midday:</strong> Networking outreach (3-5 people)</li>
                            <li><strong>Afternoon:</strong> Follow-ups, interview prep, skill building</li>
                            <li><strong>Evening:</strong> Research companies, update materials</li>
                        </ul>
                        
                        <h3>Follow-Up Cadence</h3>
                        <ul>
                            <li>After application: 1 week (if no response)</li>
                            <li>After interview: 24 hours (thank you)</li>
                            <li>If told "we'll let you know": Follow up after stated timeframe + 2 days</li>
                            <li>Networking contacts: Every 2-4 weeks with value-add</li>
                        </ul>
                        
                        <h3>Keep Momentum</h3>
                        <ul>
                            <li>Don't stop applying until you have a signed offer</li>
                            <li>Keep multiple opportunities moving simultaneously</li>
                            <li>Rejection is redirection—keep going</li>
                            <li>Celebrate small wins (interviews, callbacks)</li>
                        </ul>
                        
                        <div class="highlight">
                            <strong>Pro Tip:</strong> Set a daily goal (e.g., 5 applications, 3 networking messages) and track your streak. Consistency beats intensity.
                        </div>
                    `
                }
            ],
            quiz: {
                questions: [
                    {
                        question: 'What percentage of jobs are part of the "hidden job market" (never publicly posted)?',
                        options: ['20-30%', '40-50%', '60-80%', '90-100%'],
                        correct: 2,
                        explanation: '60-80% of jobs are filled through referrals and networking without ever being publicly posted, which is why networking is so critical.'
                    },
                    {
                        question: 'What\'s the most effective job search method?',
                        options: [
                            'Job boards like Indeed',
                            'Employee referrals',
                            'Company career pages',
                            'Newspaper ads'
                        ],
                        correct: 1,
                        explanation: 'Employee referrals account for 30-50% of hires and have the highest success rate because they come with built-in credibility.'
                    },
                    {
                        question: 'How should you spend your job search time?',
                        options: [
                            '90% job boards, 10% networking',
                            '50% networking, 30% direct outreach, 20% job boards',
                            '100% job boards for volume',
                            'Equal time on all methods'
                        ],
                        correct: 1,
                        explanation: 'The most effective mix is 50% networking/referrals, 30% direct outreach, and only 20% job boards—prioritizing higher-success methods.'
                    }
                ]
            }
        },
        {
            id: 4,
            title: 'Interview Mastery',
            subtitle: 'Convert interviews into offers',
            topics: [
                {
                    id: 'interview-preparation',
                    title: 'Interview Preparation',
                    content: `
                        <h2>Interview Preparation</h2>
                        
                        <div class="definition">
                            <strong>Key Insight:</strong> The best candidate doesn't always get the job—the best interviewer does. Interviewing is a skill you can learn.
                        </div>
                        
                        <h3>Research the Company</h3>
                        <ul>
                            <li>Company mission, values, and culture</li>
                            <li>Recent news and press releases</li>
                            <li>Products/services and target customers</li>
                            <li>Competitors and market position</li>
                            <li>Financial health (if public company)</li>
                            <li>Glassdoor reviews (take with grain of salt)</li>
                        </ul>
                        
                        <h3>Research the Role</h3>
                        <ul>
                            <li>Reread job description multiple times</li>
                            <li>Identify the top 3-5 requirements</li>
                            <li>Prepare examples for each requirement</li>
                            <li>Research typical salary range</li>
                        </ul>
                        
                        <h3>Research the Interviewer</h3>
                        <ul>
                            <li>LinkedIn profile</li>
                            <li>Their career path</li>
                            <li>Shared connections or experiences</li>
                            <li>Articles or posts they've written</li>
                        </ul>
                        
                        <h3>Prepare Your Stories</h3>
                        <p>Have 5-7 stories ready that can flex to different questions:</p>
                        <ul>
                            <li>A major accomplishment</li>
                            <li>A challenge you overcame</li>
                            <li>A time you failed and what you learned</li>
                            <li>A time you led or influenced others</li>
                            <li>A conflict and how you resolved it</li>
                            <li>A time you went above and beyond</li>
                        </ul>
                        
                        <div class="highlight">
                            <strong>Practice Out Loud:</strong> Rehearse your answers verbally, not just in your head. Record yourself or practice with a friend.
                        </div>
                    `
                },
                {
                    id: 'common-questions',
                    title: 'Answering Common Questions',
                    content: `
                        <h2>Answering Common Questions</h2>
                        
                        <h3>"Tell me about yourself"</h3>
                        <p>Structure: Present → Past → Future (2 minutes max)</p>
                        <ul>
                            <li><strong>Present:</strong> Current role and key accomplishments</li>
                            <li><strong>Past:</strong> How you got here (relevant highlights)</li>
                            <li><strong>Future:</strong> Why this role excites you</li>
                        </ul>
                        
                        <h3>"Why do you want to work here?"</h3>
                        <ul>
                            <li>Show you've researched the company</li>
                            <li>Connect their mission to your values</li>
                            <li>Explain why this specific role fits your goals</li>
                            <li>Never say "I need a job" or focus only on benefits</li>
                        </ul>
                        
                        <h3>"What's your greatest weakness?"</h3>
                        <ul>
                            <li>Choose a real weakness (not "I work too hard")</li>
                            <li>Show self-awareness</li>
                            <li>Explain what you're doing to improve</li>
                            <li>Don't choose something critical to the role</li>
                        </ul>
                        
                        <h3>"Why are you leaving your current job?"</h3>
                        <ul>
                            <li>Stay positive—never badmouth</li>
                            <li>Focus on what you're moving toward, not from</li>
                            <li>Examples: seeking growth, new challenges, better alignment</li>
                        </ul>
                        
                        <h3>Behavioral Questions (STAR Method)</h3>
                        <p>For "Tell me about a time when...":</p>
                        <ul>
                            <li><strong>Situation:</strong> Set the scene (brief)</li>
                            <li><strong>Task:</strong> Your responsibility</li>
                            <li><strong>Action:</strong> What YOU specifically did (most important)</li>
                            <li><strong>Result:</strong> Outcome with metrics if possible</li>
                        </ul>
                        
                        <div class="example">
                            <strong>Example Answer:</strong><br>
                            "Tell me about a time you handled a difficult customer"<br><br>
                            <strong>S:</strong> "A client was threatening to cancel a $100K account after a delivery issue"<br>
                            <strong>T:</strong> "I was responsible for retaining the account and resolving the issue"<br>
                            <strong>A:</strong> "I called within an hour, acknowledged the problem without excuses, expedited a replacement at no charge, and personally tracked delivery"<br>
                            <strong>R:</strong> "Client stayed, increased their contract 20%, and became a reference customer"
                        </div>
                    `
                },
                {
                    id: 'questions-to-ask',
                    title: 'Questions to Ask Interviewers',
                    content: `
                        <h2>Questions to Ask Interviewers</h2>
                        
                        <div class="definition">
                            <strong>Purpose:</strong> Your questions reveal your priorities and intelligence. Good questions differentiate you from other candidates.
                        </div>
                        
                        <h3>About the Role</h3>
                        <ul>
                            <li>"What does success look like in this role in the first 90 days?"</li>
                            <li>"What are the biggest challenges someone in this role will face?"</li>
                            <li>"How will my performance be measured?"</li>
                            <li>"What happened to the person who was in this role before?"</li>
                        </ul>
                        
                        <h3>About the Team/Manager</h3>
                        <ul>
                            <li>"Can you describe the team I'd be working with?"</li>
                            <li>"What's your management style?"</li>
                            <li>"How does the team handle disagreements?"</li>
                            <li>"What do you enjoy most about working here?"</li>
                        </ul>
                        
                        <h3>About the Company</h3>
                        <ul>
                            <li>"Where do you see the company in 3-5 years?"</li>
                            <li>"What's the company's biggest challenge right now?"</li>
                            <li>"How would you describe the culture here?"</li>
                            <li>"What do top performers here have in common?"</li>
                        </ul>
                        
                        <h3>About Next Steps</h3>
                        <ul>
                            <li>"What are the next steps in the interview process?"</li>
                            <li>"When can I expect to hear back?"</li>
                            <li>"Is there anything about my background that concerns you?"</li>
                        </ul>
                        
                        <h3>Questions to Avoid</h3>
                        <ul>
                            <li>❌ Anything easily found on website</li>
                            <li>❌ "What does the company do?"</li>
                            <li>❌ Salary/benefits (save for later stages)</li>
                            <li>❌ Vacation time (unless they bring it up)</li>
                            <li>❌ "Did I get the job?"</li>
                        </ul>
                        
                        <div class="highlight">
                            <strong>Pro Tip:</strong> Prepare 5-7 questions. Some will be answered during the interview, so you need backup options.
                        </div>
                    `
                },
                {
                    id: 'interview-followup',
                    title: 'Interview Follow-Up',
                    content: `
                        <h2>Interview Follow-Up</h2>
                        
                        <h3>Thank You Note (Within 24 Hours)</h3>
                        <p>Send to every person who interviewed you:</p>
                        <ul>
                            <li>Express appreciation for their time</li>
                            <li>Reference something specific from conversation</li>
                            <li>Reinforce your interest and fit</li>
                            <li>Keep it brief (3-4 sentences)</li>
                        </ul>
                        
                        <div class="example">
                            <strong>Sample Thank You:</strong><br>
                            "Hi [Name], Thank you for taking the time to meet with me today. I enjoyed learning about [specific topic discussed] and the exciting direction of the team. Our conversation reinforced my enthusiasm for this role—I believe my experience with [relevant skill] would help address the [challenge they mentioned]. I look forward to the next steps. Best, [Your name]"
                        </div>
                        
                        <h3>If You Don't Hear Back</h3>
                        <ul>
                            <li>Wait until after their stated timeline + 2 days</li>
                            <li>Send polite follow-up expressing continued interest</li>
                            <li>One follow-up is fine; multiple can seem desperate</li>
                            <li>If rejected, thank them and ask for feedback</li>
                        </ul>
                        
                        <h3>If You Get an Offer</h3>
                        <ul>
                            <li>Express enthusiasm (even if you need to negotiate)</li>
                            <li>Ask for the offer in writing</li>
                            <li>Request time to review (24-72 hours is reasonable)</li>
                            <li>Don't accept immediately if you have other processes in flight</li>
                        </ul>
                        
                        <h3>If You Get Rejected</h3>
                        <ul>
                            <li>Thank them for the opportunity</li>
                            <li>Ask for feedback (some will provide it)</li>
                            <li>Ask to stay in touch for future opportunities</li>
                            <li>Don't burn bridges—you may cross paths again</li>
                        </ul>
                        
                        <div class="highlight">
                            <strong>Remember:</strong> Every interview is practice for the next one. Even rejections make you better prepared for the right opportunity.
                        </div>
                    `
                }
            ],
            quiz: {
                questions: [
                    {
                        question: 'What\'s the best structure for "Tell me about yourself"?',
                        options: [
                            'Start from childhood and go chronologically',
                            'Present → Past → Future',
                            'List all your skills alphabetically',
                            'Read your resume out loud'
                        ],
                        correct: 1,
                        explanation: 'The Present → Past → Future structure is most effective: start with your current role, briefly explain how you got there, then connect to why this opportunity excites you.'
                    },
                    {
                        question: 'When should you send a thank you note after an interview?',
                        options: [
                            'Within 1 week',
                            'Within 24 hours',
                            'Only if you felt it went well',
                            'Only if they ask for one'
                        ],
                        correct: 1,
                        explanation: 'Send thank you notes within 24 hours to every person who interviewed you—it shows professionalism and keeps you top of mind.'
                    },
                    {
                        question: 'Which question should you AVOID asking in an early interview?',
                        options: [
                            '"What does success look like in this role?"',
                            '"What\'s the company\'s vacation policy?"',
                            '"What are the biggest challenges for this position?"',
                            '"How would you describe the team culture?"'
                        ],
                        correct: 1,
                        explanation: 'Avoid asking about vacation, salary, or benefits in early interviews—save these for later stages or after you have an offer.'
                    }
                ]
            }
        },
        {
            id: 5,
            title: 'Career Advancement',
            subtitle: 'Get promoted and increase your income',
            topics: [
                {
                    id: 'getting-promoted',
                    title: 'The Promotion Playbook',
                    content: `
                        <h2>The Promotion Playbook</h2>
                        
                        <div class="definition">
                            <strong>Hard Truth:</strong> Good work alone doesn't get promoted. Visibility + results + politics = advancement.
                        </div>
                        
                        <h3>Why Good People Don't Get Promoted</h3>
                        <ul>
                            <li>Work isn't visible to decision-makers</li>
                            <li>Haven't explicitly asked</li>
                            <li>Too valuable in current role (make yourself replaceable)</li>
                            <li>Don't understand what next level requires</li>
                            <li>Missing relationships with key people</li>
                        </ul>
                        
                        <h3>The Promotion Formula</h3>
                        <ol>
                            <li><strong>Do the job you want, not just the one you have:</strong> Show you can perform at the next level</li>
                            <li><strong>Make your work visible:</strong> Document and communicate accomplishments</li>
                            <li><strong>Build relationships with decision-makers:</strong> They need to know and trust you</li>
                            <li><strong>Understand the criteria:</strong> Know exactly what's required for promotion</li>
                            <li><strong>Ask explicitly:</strong> Make your intentions known</li>
                        </ol>
                        
                        <h3>The Promotion Conversation</h3>
                        <p>Schedule time with your manager:</p>
                        <blockquote>
                            "I'm interested in advancing to [next role]. I'd like to understand what success looks like for that position and create a plan to get there. Can we discuss what I need to demonstrate and what timeline might be realistic?"
                        </blockquote>
                        
                        <h3>Creating a Promotion Case</h3>
                        <ul>
                            <li>Document all accomplishments with metrics</li>
                            <li>Show how you've already performed at next level</li>
                            <li>Get feedback and endorsements from stakeholders</li>
                            <li>Present a clear case, not just a request</li>
                        </ul>
                        
                        <div class="highlight">
                            <strong>Timing:</strong> Have the conversation 3-6 months before review/promotion cycles, not during them. Give time to demonstrate and for decision-makers to build support.
                        </div>
                    `
                },
                {
                    id: 'managing-up',
                    title: 'Managing Up Effectively',
                    content: `
                        <h2>Managing Up Effectively</h2>
                        
                        <div class="definition">
                            <strong>Managing Up:</strong> Consciously working to make your manager's job easier while advancing your own career. It's not manipulation—it's professional effectiveness.
                        </div>
                        
                        <h3>Understand Your Manager</h3>
                        <ul>
                            <li>What are their goals and pressures?</li>
                            <li>How do they prefer to communicate?</li>
                            <li>What makes them look good to their boss?</li>
                            <li>What are their pet peeves?</li>
                            <li>What's their management style?</li>
                        </ul>
                        
                        <h3>Communication Best Practices</h3>
                        <ul>
                            <li><strong>Adapt to their style:</strong> Some want details, others want headlines</li>
                            <li><strong>Bring solutions, not just problems:</strong> "Here's an issue and here's my proposed fix"</li>
                            <li><strong>No surprises:</strong> Keep them informed of important developments</li>
                            <li><strong>Regular updates:</strong> Don't make them chase you for information</li>
                        </ul>
                        
                        <h3>Building Trust</h3>
                        <ul>
                            <li>Do what you say you'll do</li>
                            <li>Meet deadlines or communicate early if you can't</li>
                            <li>Take ownership of mistakes</li>
                            <li>Don't make them look bad (publicly or privately)</li>
                            <li>Make their job easier whenever possible</li>
                        </ul>
                        
                        <h3>Getting What You Need</h3>
                        <ul>
                            <li>Be direct about what you need to succeed</li>
                            <li>Frame requests in terms of team/company benefit</li>
                            <li>Come prepared with data and options</li>
                            <li>Pick your battles—don't ask for everything</li>
                        </ul>
                        
                        <div class="example">
                            <strong>Before:</strong> "I need a raise"<br>
                            <strong>After:</strong> "I've exceeded targets by 30% and taken on project X that generated $Y. I'd like to discuss aligning my compensation with my contributions and the market rate for my role."
                        </div>
                    `
                },
                {
                    id: 'when-to-leave',
                    title: 'Knowing When to Leave',
                    content: `
                        <h2>Knowing When to Leave</h2>
                        
                        <h3>Signs It's Time to Go</h3>
                        <ul>
                            <li><strong>No growth path:</strong> You've hit a ceiling with no way forward</li>
                            <li><strong>Values misalignment:</strong> Company culture conflicts with yours</li>
                            <li><strong>Compensation stuck:</strong> Significantly below market despite strong performance</li>
                            <li><strong>Bad management:</strong> Leader actively harms your career or wellbeing</li>
                            <li><strong>Company decline:</strong> Layoffs, instability, losing direction</li>
                            <li><strong>Better opportunity:</strong> Something significantly advances your goals</li>
                        </ul>
                        
                        <h3>Signs to Stay and Fix Things First</h3>
                        <ul>
                            <li>You haven't communicated your needs clearly</li>
                            <li>New leadership might change things</li>
                            <li>You're running from, not toward something</li>
                            <li>You haven't given it enough time (usually 2+ years)</li>
                            <li>There's still valuable learning to be done</li>
                        </ul>
                        
                        <h3>The Right Way to Leave</h3>
                        <ul>
                            <li>Have next job secured before resigning</li>
                            <li>Give appropriate notice (typically 2 weeks)</li>
                            <li>Don't badmouth on the way out</li>
                            <li>Document and transition your work</li>
                            <li>Stay connected with good colleagues</li>
                        </ul>
                        
                        <h3>The Counter-Offer Trap</h3>
                        <ul>
                            <li>80% who accept counter-offers leave within a year</li>
                            <li>Underlying issues usually remain</li>
                            <li>You may be marked as "flight risk"</li>
                            <li>If you needed to threaten to leave to get fair treatment...</li>
                        </ul>
                        
                        <div class="highlight">
                            <strong>Rule of Thumb:</strong> Leave when you've maximized learning and growth, not when things get hard. Running from problems follows you; running toward opportunities moves you forward.
                        </div>
                    `
                }
            ],
            quiz: {
                questions: [
                    {
                        question: 'Why do good workers often not get promoted?',
                        options: [
                            'They don\'t work hard enough',
                            'They\'re not qualified',
                            'Their work isn\'t visible and they don\'t ask explicitly',
                            'They need more education'
                        ],
                        correct: 2,
                        explanation: 'Good workers often miss promotions because their work isn\'t visible to decision-makers and they haven\'t explicitly expressed their interest and created a case.'
                    },
                    {
                        question: 'What is "managing up"?',
                        options: [
                            'Manipulating your boss',
                            'Making your manager\'s job easier while advancing your career',
                            'Telling your manager what to do',
                            'Going over your manager\'s head'
                        ],
                        correct: 1,
                        explanation: 'Managing up is the professional skill of making your manager\'s job easier while also advancing your own career—a win-win approach.'
                    },
                    {
                        question: 'What percentage of people who accept counter-offers leave within a year?',
                        options: ['20%', '40%', '60%', '80%'],
                        correct: 3,
                        explanation: '80% of people who accept counter-offers leave within a year—the underlying issues that made them want to leave usually remain.'
                    }
                ]
            }
        }
    ]
};
