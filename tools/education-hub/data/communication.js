// Communication & Public Speaking Curriculum Data
const communicationData = {
    id: 'communication',
    title: 'Communication & Public Speaking',
    icon: '🎤',
    description: 'Master the art of clear communication, confident public speaking, difficult conversations, and persuasion.',
    whyItMatters: 'Communication is the #1 skill employers look for. Your career, relationships, and influence all depend on how well you communicate. It\'s a learnable skill.',
    graduationGoal: 'Communicate clearly, speak confidently in public, and handle difficult conversations',
    difficulty: 'beginner',
    prerequisites: [],
    learningObjectives: [
        'Communicate clearly in writing and speaking',
        'Speak confidently in public settings',
        'Handle difficult conversations effectively',
        'Use persuasion and influence techniques',
        'Build strong professional relationships'
    ],
    relatedTracks: ['career', 'negotiation', 'emotionaliq', 'productivity'],
    resources: [
        { title: 'Toastmasters International', url: 'https://www.toastmasters.org/' }
    ],
    levels: [
        {
            id: 1,
            title: 'Communication Fundamentals',
            subtitle: 'The foundation of every interaction',
            topics: [
                {
                    id: 'communication-basics',
                    title: 'The Power of Clear Communication',
                    content: `
                        <h2>The Power of Clear Communication</h2>
                        <h3>Why Communication Matters</h3>
                        <ul>
                            <li>93% of communication is non-verbal (tone, body language)</li>
                            <li>#1 skill employers value across all industries</li>
                            <li>Directly impacts salary, promotions, and opportunities</li>
                            <li>Most conflicts stem from miscommunication, not disagreement</li>
                        </ul>
                        <h3>The Communication Framework</h3>
                        <ul>
                            <li><strong>Clarity:</strong> Say what you mean simply and directly</li>
                            <li><strong>Conciseness:</strong> Use fewer words, not more</li>
                            <li><strong>Audience:</strong> Adapt to who you're talking to</li>
                            <li><strong>Intent:</strong> Know what outcome you want before speaking</li>
                        </ul>
                        <h3>Common Communication Killers</h3>
                        <ul>
                            <li>Using jargon when plain language works</li>
                            <li>Talking without a clear point</li>
                            <li>Not reading the room (audience, timing, tone)</li>
                            <li>Defensive body language (crossed arms, no eye contact)</li>
                            <li>Listening to respond instead of listening to understand</li>
                        </ul>
                        <div class="highlight">
                            <strong>Simple Test:</strong> Could an 8th grader understand what you just said? If not, simplify. The clearest communicators make complex ideas feel simple.
                        </div>
                    `
                },
                {
                    id: 'active-listening',
                    title: 'Active Listening',
                    content: `
                        <h2>Active Listening</h2>
                        <h3>Most People Don't Listen</h3>
                        <p>We retain only 25-50% of what we hear. Most people listen just enough to respond, not to understand.</p>
                        <h3>Active Listening Techniques</h3>
                        <ul>
                            <li><strong>Full attention:</strong> Put the phone away. Make eye contact.</li>
                            <li><strong>Don't interrupt:</strong> Let them finish. Pause before responding.</li>
                            <li><strong>Reflect back:</strong> "So what I'm hearing is..." (confirms understanding)</li>
                            <li><strong>Ask follow-up questions:</strong> Shows genuine interest</li>
                            <li><strong>Acknowledge emotions:</strong> "That sounds frustrating" (validates feelings)</li>
                        </ul>
                        <h3>Why It Matters</h3>
                        <ul>
                            <li>People who feel heard trust you more</li>
                            <li>You gather better information for decisions</li>
                            <li>Reduces misunderstandings and conflict</li>
                            <li>Makes you stand out (most people are terrible listeners)</li>
                        </ul>
                        <div class="highlight">
                            <strong>Challenge:</strong> In your next conversation, try to listen for 80% of the time and speak for 20%. Notice how the other person responds differently.
                        </div>
                    `
                },
                {
                    id: 'written-communication',
                    title: 'Professional Written Communication',
                    content: `
                        <h2>Professional Written Communication</h2>
                        <h3>Email Best Practices</h3>
                        <ul>
                            <li><strong>Subject line:</strong> Specific and actionable ("Meeting moved to 3pm Thursday")</li>
                            <li><strong>First sentence:</strong> State the purpose immediately</li>
                            <li><strong>Body:</strong> Keep under 5 sentences when possible</li>
                            <li><strong>Action item:</strong> Be explicit about what you need and by when</li>
                            <li><strong>Proofread:</strong> Always. Typos undermine credibility.</li>
                        </ul>
                        <h3>The BLUF Method (Bottom Line Up Front)</h3>
                        <div class="example">
                            <strong>Bad:</strong> "I was thinking about the project timeline, and after reviewing the requirements and considering various factors..."<br><br>
                            <strong>BLUF:</strong> "The project deadline needs to move to March 15. Here's why and the updated plan."
                        </div>
                        <h3>Slack/Teams Messages</h3>
                        <ul>
                            <li>Don't just say "Hi" and wait — send the actual message</li>
                            <li>Use threads to keep conversations organized</li>
                            <li>Bold key points or decisions</li>
                            <li>Respect Do Not Disturb hours</li>
                        </ul>
                        <div class="highlight">
                            <strong>Write Less, Say More:</strong> Every sentence should earn its place. If you can say it in 3 sentences instead of 3 paragraphs, do it.
                        </div>
                    `
                }
            ],
            quiz: {
                questions: [
                    {
                        question: 'What is the BLUF method in writing?',
                        options: ['Using bullet points', 'Bottom Line Up Front — state the main point first', 'Bold, Large, Underlined Font', 'A grammar technique'],
                        correct: 1,
                        explanation: 'BLUF (Bottom Line Up Front) means leading with your main point or request. Busy people skim—put the important stuff first.'
                    },
                    {
                        question: 'What percentage of communication is non-verbal?',
                        options: ['About 50%', 'About 93%', 'About 25%', 'About 75%'],
                        correct: 1,
                        explanation: 'Research suggests up to 93% of communication is non-verbal—tone of voice, facial expressions, and body language matter more than your words.'
                    },
                    {
                        question: 'What is the key to active listening?',
                        options: ['Preparing your response while they speak', 'Listening to understand, not just to respond', 'Taking detailed notes', 'Asking as many questions as possible'],
                        correct: 1,
                        explanation: 'Active listening means focusing on understanding the other person rather than preparing your response. Reflect back what you hear to confirm understanding.'
                    }
                ]
            }
        },
        {
            id: 2,
            title: 'Public Speaking',
            subtitle: 'Speak with confidence in any setting',
            topics: [
                {
                    id: 'overcoming-fear',
                    title: 'Overcoming the Fear of Public Speaking',
                    content: `
                        <h2>Overcoming the Fear of Public Speaking</h2>
                        <h3>You're Not Alone</h3>
                        <ul>
                            <li>75% of people have glossophobia (fear of public speaking)</li>
                            <li>It's often ranked as a bigger fear than death</li>
                            <li>Even professional speakers get nervous</li>
                            <li>The fear is manageable—and even useful</li>
                        </ul>
                        <h3>Reframe the Fear</h3>
                        <ul>
                            <li><strong>Nervousness = excitement</strong> (same physical response)</li>
                            <li>The audience WANTS you to succeed</li>
                            <li>They notice your nervousness 10% as much as you feel it</li>
                            <li>Perfection isn't the goal—connection is</li>
                        </ul>
                        <h3>Practical Techniques</h3>
                        <ul>
                            <li><strong>Power pose:</strong> 2 minutes before speaking (reduces cortisol)</li>
                            <li><strong>Box breathing:</strong> Inhale 4 sec, hold 4, exhale 4, hold 4</li>
                            <li><strong>Arrive early:</strong> Get comfortable in the space</li>
                            <li><strong>Practice out loud:</strong> 3x minimum before the real thing</li>
                            <li><strong>Start with a story:</strong> Stories are easier to deliver than data</li>
                        </ul>
                        <div class="highlight">
                            <strong>The Secret:</strong> Courage isn't the absence of fear—it's speaking despite the fear. Every great speaker started terrified. The only way through is practice.
                        </div>
                    `
                },
                {
                    id: 'speech-structure',
                    title: 'Structuring a Great Speech',
                    content: `
                        <h2>Structuring a Great Speech</h2>
                        <h3>The Classic Structure</h3>
                        <ol>
                            <li><strong>Hook:</strong> Grab attention in the first 30 seconds (story, question, startling fact)</li>
                            <li><strong>Thesis:</strong> One clear main point</li>
                            <li><strong>Body:</strong> 3 supporting points (rule of 3)</li>
                            <li><strong>Conclusion:</strong> Restate thesis + call to action</li>
                        </ol>
                        <h3>Opening Techniques</h3>
                        <ul>
                            <li><strong>Story:</strong> "Last Tuesday, something happened that changed how I think about..."</li>
                            <li><strong>Question:</strong> "How many of you have ever...?"</li>
                            <li><strong>Startling statistic:</strong> "40% of Americans can't cover a $400 emergency."</li>
                            <li><strong>Bold statement:</strong> "Everything you know about X is wrong."</li>
                        </ul>
                        <h3>The Rule of 3</h3>
                        <p>People remember things in threes. Structure your speech around 3 main points, not 7.</p>
                        <h3>Closing Strong</h3>
                        <ul>
                            <li>Circle back to your opening story</li>
                            <li>Give a clear call to action ("Here's what I want you to do...")</li>
                            <li>End with a powerful quote or statement</li>
                            <li>Never end with "So, yeah... that's it"</li>
                        </ul>
                        <div class="highlight">
                            <strong>Prep Formula:</strong> Know your opening cold. Know your closing cold. The middle will flow. People remember the first and last things you say.
                        </div>
                    `
                },
                {
                    id: 'delivery-skills',
                    title: 'Delivery & Presence',
                    content: `
                        <h2>Delivery & Presence</h2>
                        <h3>Voice Techniques</h3>
                        <ul>
                            <li><strong>Pace:</strong> Slow down. Nervous speakers rush. Pauses are powerful.</li>
                            <li><strong>Volume:</strong> Project to the back of the room</li>
                            <li><strong>Inflection:</strong> Vary your tone — monotone = boring</li>
                            <li><strong>Pause:</strong> Before key points, pause for 2-3 seconds. It builds tension.</li>
                        </ul>
                        <h3>Body Language</h3>
                        <ul>
                            <li><strong>Eye contact:</strong> Hold for 3-5 seconds per person/section</li>
                            <li><strong>Hands:</strong> Use natural gestures. Don't grip the podium.</li>
                            <li><strong>Stance:</strong> Feet shoulder-width apart, grounded</li>
                            <li><strong>Movement:</strong> Move with purpose, not nervous pacing</li>
                        </ul>
                        <h3>Common Mistakes</h3>
                        <ul>
                            <li>Reading slides word for word</li>
                            <li>Filler words: "um," "like," "basically," "so"</li>
                            <li>Apologizing: "I'm not good at this" (undermines credibility)</li>
                            <li>Going over time (respect your audience)</li>
                        </ul>
                        <div class="highlight">
                            <strong>Pro Tip:</strong> Record yourself speaking and watch it back. Painful? Yes. Effective? Incredibly. You'll see habits you didn't know you had.
                        </div>
                    `
                }
            ],
            quiz: {
                questions: [
                    {
                        question: 'What is the "Rule of 3" in public speaking?',
                        options: ['Speak for exactly 3 minutes', 'Practice 3 times', 'Structure your speech around 3 main points for memorability', 'Use 3 slides'],
                        correct: 2,
                        explanation: 'People naturally remember information in groups of three. Structuring around 3 key points makes your speech more memorable and easier to follow.'
                    },
                    {
                        question: 'What is the most powerful technique for a nervous speaker?',
                        options: ['Memorize every word', 'Avoid eye contact', 'Practice out loud at least 3 times and use breathing techniques', 'Speak faster to get it over with'],
                        correct: 2,
                        explanation: 'Practicing out loud (not just in your head) and using techniques like box breathing are the most effective ways to manage speaking anxiety.'
                    },
                    {
                        question: 'What should you never do at the end of a speech?',
                        options: ['Give a call to action', 'Circle back to the opening', 'Say "So, yeah... that\'s it"', 'Use a powerful quote'],
                        correct: 2,
                        explanation: 'A weak ending ruins a great speech. Always close with intention—a call to action, a callback to your opening, or a powerful statement.'
                    }
                ]
            }
        },
        {
            id: 3,
            title: 'Difficult Conversations',
            subtitle: 'Navigate tough talks with confidence',
            topics: [
                {
                    id: 'difficult-conversations',
                    title: 'Having Difficult Conversations',
                    content: `
                        <h2>Having Difficult Conversations</h2>
                        <h3>Why We Avoid Them</h3>
                        <ul>
                            <li>Fear of conflict or damaging the relationship</li>
                            <li>Not knowing what to say</li>
                            <li>Worry about emotional reactions</li>
                            <li>Hope the problem will resolve itself (it won't)</li>
                        </ul>
                        <h3>The Framework</h3>
                        <ol>
                            <li><strong>Prepare:</strong> What do you want the outcome to be?</li>
                            <li><strong>Open:</strong> Start with facts, not accusations</li>
                            <li><strong>Share:</strong> Express your perspective using "I" statements</li>
                            <li><strong>Listen:</strong> Hear their side fully</li>
                            <li><strong>Resolve:</strong> Find common ground and next steps</li>
                        </ol>
                        <h3>"I" Statements vs. "You" Statements</h3>
                        <div class="example">
                            <strong>"You" (triggers defense):</strong> "You never listen to me."<br>
                            <strong>"I" (opens dialogue):</strong> "I feel unheard when I share ideas and they're dismissed."
                        </div>
                        <h3>Key Phrases</h3>
                        <ul>
                            <li>"I'd like to talk about something important to me."</li>
                            <li>"Here's what I've observed..."</li>
                            <li>"Help me understand your perspective."</li>
                            <li>"What can we do differently going forward?"</li>
                        </ul>
                        <div class="highlight">
                            <strong>Truth:</strong> Avoiding difficult conversations doesn't prevent conflict—it delays and amplifies it. The conversation you're avoiding is usually the one you need most.
                        </div>
                    `
                },
                {
                    id: 'persuasion',
                    title: 'The Art of Persuasion',
                    content: `
                        <h2>The Art of Persuasion</h2>
                        <h3>Persuasion Is Not Manipulation</h3>
                        <p>Persuasion = helping someone see a better option. Manipulation = tricking them against their interest.</p>
                        <h3>Cialdini's 6 Principles of Influence</h3>
                        <ul>
                            <li><strong>Reciprocity:</strong> Give first, and people naturally want to give back</li>
                            <li><strong>Commitment:</strong> Small yeses lead to bigger yeses</li>
                            <li><strong>Social Proof:</strong> "Others like you have done this"</li>
                            <li><strong>Authority:</strong> Expertise and credibility build trust</li>
                            <li><strong>Liking:</strong> People say yes to people they like</li>
                            <li><strong>Scarcity:</strong> Limited availability increases perceived value</li>
                        </ul>
                        <h3>Practical Application</h3>
                        <ul>
                            <li><strong>Salary negotiation:</strong> Use authority (your results) and social proof (market rate)</li>
                            <li><strong>Selling an idea:</strong> Frame it from THEIR perspective and benefit</li>
                            <li><strong>Getting buy-in:</strong> Start with common ground, then introduce your proposal</li>
                        </ul>
                        <div class="highlight">
                            <strong>The Most Persuasive Thing:</strong> Understanding what the other person actually wants and showing how your idea serves THEIR interests, not just yours.
                        </div>
                    `
                },
                {
                    id: 'giving-feedback',
                    title: 'Giving & Receiving Feedback',
                    content: `
                        <h2>Giving & Receiving Feedback</h2>
                        <h3>The SBI Model (Situation-Behavior-Impact)</h3>
                        <div class="example">
                            <strong>Bad:</strong> "You're always late."<br>
                            <strong>SBI:</strong> "In this morning's meeting (Situation), you arrived 15 minutes late (Behavior), which meant we had to catch you up and ran over time (Impact)."
                        </div>
                        <h3>Giving Feedback Well</h3>
                        <ul>
                            <li>Be specific (not "good job" but "your analysis on the Q3 report was thorough")</li>
                            <li>Focus on behavior, not personality</li>
                            <li>Give it timely (not 3 months later)</li>
                            <li>Private for criticism, public for praise</li>
                            <li>Ask permission: "Can I share some feedback?"</li>
                        </ul>
                        <h3>Receiving Feedback Gracefully</h3>
                        <ul>
                            <li>Don't get defensive (breathe, listen)</li>
                            <li>Ask clarifying questions</li>
                            <li>Thank them (it takes courage to give honest feedback)</li>
                            <li>Decide what to act on (not all feedback is valid)</li>
                        </ul>
                        <div class="highlight">
                            <strong>Growth Hack:</strong> Actively seek feedback. Ask: "What's one thing I could do better?" People who seek feedback grow faster than those who avoid it.
                        </div>
                    `
                }
            ],
            quiz: {
                questions: [
                    {
                        question: 'What is the SBI feedback model?',
                        options: ['Speak, Breathe, Inspire', 'Situation, Behavior, Impact', 'Simple, Brief, Informative', 'Start, Build, Iterate'],
                        correct: 1,
                        explanation: 'SBI (Situation-Behavior-Impact) makes feedback specific and actionable by describing exactly what happened and its effect.'
                    },
                    {
                        question: 'Why use "I" statements instead of "You" statements?',
                        options: ['They\'re more grammatically correct', '"You" statements trigger defensiveness; "I" statements open dialogue', 'There\'s no difference', '"I" statements are more formal'],
                        correct: 1,
                        explanation: '"You" statements feel like accusations and trigger defensiveness. "I" statements express your perspective without attacking, keeping the conversation productive.'
                    },
                    {
                        question: 'What is the most important element of persuasion?',
                        options: ['Speaking louder', 'Understanding what the other person wants and aligning your idea with their interests', 'Using big words', 'Being more aggressive'],
                        correct: 1,
                        explanation: 'True persuasion comes from understanding and serving the other person\'s interests. If they see how your idea benefits them, resistance drops dramatically.'
                    }
                ]
            }
        },
        {
            id: 4,
            title: 'Professional Communication',
            subtitle: 'Excel at work through communication',
            topics: [
                {
                    id: 'meetings-presentations',
                    title: 'Running & Participating in Meetings',
                    content: `
                        <h2>Running & Participating in Meetings</h2>
                        <h3>Running Effective Meetings</h3>
                        <ul>
                            <li><strong>Agenda:</strong> Share beforehand. No agenda = no meeting.</li>
                            <li><strong>Time:</strong> Start on time, end early. Default to 25 or 50 min.</li>
                            <li><strong>Invite:</strong> Only people who need to be there</li>
                            <li><strong>Decisions:</strong> End with clear action items and owners</li>
                            <li><strong>Follow-up:</strong> Send summary email within 24 hours</li>
                        </ul>
                        <h3>Speaking Up in Meetings</h3>
                        <ul>
                            <li>Prepare 1-2 talking points before the meeting</li>
                            <li>Speak early (harder to jump in later)</li>
                            <li>Be concise — don't repeat what's been said</li>
                            <li>Build on others' ideas: "Building on what Sarah said..."</li>
                        </ul>
                        <h3>Presentation Tips</h3>
                        <ul>
                            <li>1 idea per slide maximum</li>
                            <li>Less text, more visuals</li>
                            <li>Know your audience (executives want conclusions, teams want details)</li>
                            <li>Practice the transitions between slides</li>
                        </ul>
                        <div class="highlight">
                            <strong>Career Tip:</strong> People who communicate well in meetings get noticed. You don't need to talk the most—you need to say the most valuable things.
                        </div>
                    `
                },
                {
                    id: 'networking-communication',
                    title: 'Networking & Relationship Building',
                    content: `
                        <h2>Networking & Relationship Building</h2>
                        <h3>Networking Is Not Slimy</h3>
                        <p>Networking = building genuine relationships. The goal isn't to collect business cards—it's to provide value and create mutual connections.</p>
                        <h3>Conversation Starters</h3>
                        <ul>
                            <li>"What are you working on that excites you?"</li>
                            <li>"How did you get into [their field]?"</li>
                            <li>"What's the biggest challenge in your role right now?"</li>
                            <li>"What do you wish more people understood about [their industry]?"</li>
                        </ul>
                        <h3>Following Up</h3>
                        <ul>
                            <li>Send a personalized message within 48 hours</li>
                            <li>Reference something specific from your conversation</li>
                            <li>Offer value: an article, introduction, or resource</li>
                            <li>Don't ask for favors in the first follow-up</li>
                        </ul>
                        <h3>Building Long-Term Relationships</h3>
                        <ul>
                            <li>Check in quarterly (not just when you need something)</li>
                            <li>Share relevant articles or opportunities</li>
                            <li>Congratulate on achievements</li>
                            <li>Be the connector — introduce people in your network</li>
                        </ul>
                        <div class="highlight">
                            <strong>The Key:</strong> Give before you ask. Build relationships before you need them. The best networkers are the most generous ones.
                        </div>
                    `
                }
            ],
            quiz: {
                questions: [
                    {
                        question: 'What is the most important element of an effective meeting?',
                        options: ['Long duration', 'Clear agenda shared beforehand with action items at the end', 'Having everyone in the company attend', 'Free food'],
                        correct: 1,
                        explanation: 'Every effective meeting needs a clear agenda (shared ahead of time) and ends with specific action items and owners. No agenda = no meeting.'
                    },
                    {
                        question: 'When following up after networking, what should you do?',
                        options: ['Immediately ask for a job referral', 'Send a generic "nice to meet you" message', 'Reference something specific from your conversation and offer value', 'Wait a month to seem not desperate'],
                        correct: 2,
                        explanation: 'The best follow-ups are personalized, reference your actual conversation, and offer value. Follow up within 48 hours while the connection is fresh.'
                    }
                ]
            }
        }
    ]
};
