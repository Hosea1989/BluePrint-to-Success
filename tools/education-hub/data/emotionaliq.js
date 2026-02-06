// Emotional Intelligence & Conflict Resolution Curriculum Data
const emotionaliqData = {
    id: 'emotionaliq',
    title: 'Emotional Intelligence & Conflict Resolution',
    icon: '🧠',
    description: 'Master your emotions, navigate difficult people, set boundaries, and resolve conflicts with confidence.',
    graduationGoal: 'Handle any interpersonal situation with emotional intelligence, clarity, and composure',
    difficulty: 'beginner',
    prerequisites: [],
    learningObjectives: [
        'Understand and manage your own emotions',
        'Recognize and respond to others\' emotions',
        'Set healthy boundaries in relationships',
        'Resolve conflicts constructively',
        'Build stronger personal and professional relationships'
    ],
    relatedTracks: ['communication', 'selfcare', 'career'],
    resources: [
        { title: 'Six Seconds - Emotional Intelligence', url: 'https://www.6seconds.org/' }
    ],
    levels: [
        {
            id: 1,
            title: 'Understanding Emotional Intelligence',
            subtitle: 'The skill that changes everything',
            topics: [
                {
                    id: 'what-is-eq',
                    title: 'What Is Emotional Intelligence?',
                    content: `
                        <h2>What Is Emotional Intelligence?</h2>

                        <h3>The Four Components of EQ</h3>
                        <ol>
                            <li><strong>Self-Awareness:</strong> Recognizing your own emotions and how they affect your behavior</li>
                            <li><strong>Self-Management:</strong> Controlling impulsive feelings and behaviors, adapting to changing circumstances</li>
                            <li><strong>Social Awareness:</strong> Understanding other people's emotions, needs, and concerns (empathy)</li>
                            <li><strong>Relationship Management:</strong> Developing and maintaining good relationships, communicating clearly, inspiring and influencing others</li>
                        </ol>

                        <h3>Why EQ Matters More Than IQ</h3>
                        <ul>
                            <li>EQ is the #1 predictor of professional success</li>
                            <li>90% of top performers have high emotional intelligence</li>
                            <li>EQ impacts relationships, leadership, decision-making, and mental health</li>
                            <li>Unlike IQ, EQ can be developed and improved at any age</li>
                        </ul>

                        <h3>Signs of Low EQ</h3>
                        <ul>
                            <li>Frequently getting into arguments</li>
                            <li>Blaming others for your problems</li>
                            <li>Difficulty understanding why people react the way they do</li>
                            <li>Outbursts you regret later</li>
                            <li>Feeling like people are "too sensitive"</li>
                            <li>Struggling to maintain relationships</li>
                        </ul>

                        <h3>Signs of High EQ</h3>
                        <ul>
                            <li>Staying calm under pressure</li>
                            <li>Understanding and managing your emotional triggers</li>
                            <li>Empathizing with others even when you disagree</li>
                            <li>Communicating difficult things clearly and kindly</li>
                            <li>Taking responsibility for your reactions</li>
                        </ul>

                        <div class="highlight">
                            <strong>The Good News:</strong> Emotional intelligence is a learned skill, not a fixed trait. Every technique in this track can be practiced and improved, starting today.
                        </div>
                    `
                },
                {
                    id: 'emotional-triggers',
                    title: 'Understanding Your Emotional Triggers',
                    content: `
                        <h2>Understanding Your Emotional Triggers</h2>

                        <h3>What Are Triggers?</h3>
                        <ul>
                            <li>Situations, words, or behaviors that provoke a strong emotional reaction</li>
                            <li>Often rooted in past experiences, values, or unmet needs</li>
                            <li>The reaction feels automatic — but it can be managed</li>
                        </ul>

                        <h3>Common Workplace Triggers</h3>
                        <ul>
                            <li>Feeling disrespected or dismissed</li>
                            <li>Being micromanaged or not trusted</li>
                            <li>Injustice or unfair treatment</li>
                            <li>Being excluded or left out</li>
                            <li>Public criticism or humiliation</li>
                            <li>Broken promises or unmet expectations</li>
                            <li>Feeling powerless or out of control</li>
                        </ul>

                        <h3>The Trigger → Response Cycle</h3>
                        <ol>
                            <li><strong>Event:</strong> Something happens (boss assigns you to a menial task)</li>
                            <li><strong>Interpretation:</strong> You give it meaning ("They don't respect me")</li>
                            <li><strong>Emotion:</strong> You feel something (anger, hurt, frustration)</li>
                            <li><strong>Reaction:</strong> You act on the emotion (snap at someone, shut down, vent)</li>
                        </ol>

                        <h3>Breaking the Cycle</h3>
                        <ul>
                            <li><strong>Name it:</strong> "I'm feeling angry because I feel disrespected" — naming the emotion reduces its power</li>
                            <li><strong>Pause:</strong> Create space between the trigger and your response (even 10 seconds helps)</li>
                            <li><strong>Question your interpretation:</strong> "Is there another explanation for what happened?"</li>
                            <li><strong>Choose your response:</strong> Act based on your goals, not your emotions</li>
                        </ul>

                        <div class="example">
                            <strong>Workplace Example:</strong> Your manager publicly corrects you in a meeting. Your trigger: feeling humiliated. Your automatic reaction: defensive argument. Better response: "Thank you for the feedback. Can we discuss the details after the meeting?" You've preserved your dignity, avoided a scene, and created space to respond strategically.
                        </div>

                        <div class="highlight">
                            <strong>Know Your Top 3 Triggers:</strong> Identify the situations that consistently get under your skin. Once you know them, you can prepare responses in advance instead of reacting in the moment.
                        </div>
                    `
                }
            ],
            quiz: {
                questions: [
                    {
                        question: 'What are the four components of emotional intelligence?',
                        options: [
                            'Strength, speed, intelligence, charisma',
                            'Self-awareness, self-management, social awareness, and relationship management',
                            'Reading, writing, speaking, and listening',
                            'Happiness, sadness, anger, and fear'
                        ],
                        correct: 1,
                        explanation: 'The four components of emotional intelligence are: self-awareness (knowing your emotions), self-management (controlling your reactions), social awareness (understanding others\' emotions), and relationship management (navigating interactions effectively).'
                    },
                    {
                        question: 'What is the most effective way to manage an emotional trigger?',
                        options: [
                            'Suppress the emotion completely',
                            'React immediately so you don\'t bottle it up',
                            'Name the emotion, pause, question your interpretation, then choose your response',
                            'Avoid all triggering situations'
                        ],
                        correct: 2,
                        explanation: 'The most effective approach is to: (1) name the emotion to reduce its power, (2) pause to create space, (3) question your interpretation, and (4) choose a response aligned with your goals rather than reacting impulsively.'
                    }
                ]
            }
        },
        {
            id: 2,
            title: 'Self-Regulation & Resilience',
            subtitle: 'Staying composed when it matters most',
            topics: [
                {
                    id: 'emotional-regulation',
                    title: 'Emotional Regulation Techniques',
                    content: `
                        <h2>Emotional Regulation Techniques</h2>

                        <h3>In-the-Moment Techniques</h3>
                        <ul>
                            <li><strong>Box breathing:</strong> Inhale 4 counts → hold 4 → exhale 4 → hold 4. Repeat 3-4 times. This activates your parasympathetic nervous system.</li>
                            <li><strong>The 10-second rule:</strong> Before responding to anything emotional, count to 10. If still heated, wait 10 minutes. If still heated, wait 24 hours for written responses.</li>
                            <li><strong>Physical reset:</strong> Step away, get water, go for a short walk. Physical movement processes stress hormones.</li>
                            <li><strong>Grounding:</strong> Name 5 things you can see, 4 you can touch, 3 you can hear, 2 you can smell, 1 you can taste.</li>
                        </ul>

                        <h3>The "STOP" Method</h3>
                        <ol>
                            <li><strong>S</strong>top: Freeze. Don't react.</li>
                            <li><strong>T</strong>ake a breath: One deep breath.</li>
                            <li><strong>O</strong>bserve: What am I feeling? What's happening?</li>
                            <li><strong>P</strong>roceed: Choose a thoughtful response.</li>
                        </ol>

                        <h3>Reframing</h3>
                        <ul>
                            <li>Change how you interpret the situation</li>
                            <li>"This is happening TO me" → "This is a challenge I can handle"</li>
                            <li>"They're trying to hurt me" → "They may be dealing with their own issues"</li>
                            <li>"This is the end" → "This is a difficult chapter, not the whole story"</li>
                        </ul>

                        <h3>The 24-Hour Email Rule</h3>
                        <p>Never send an emotional email. Draft it, save it, review it in 24 hours. You'll almost always change it — and be glad you waited.</p>

                        <div class="highlight">
                            <strong>Your Superpower in Conflict:</strong> The person who stays calm has all the power. When everyone else is reactive, your composure gives you clarity, credibility, and control of the situation.
                        </div>
                    `
                },
                {
                    id: 'building-resilience',
                    title: 'Building Emotional Resilience',
                    content: `
                        <h2>Building Emotional Resilience</h2>

                        <h3>What Is Resilience?</h3>
                        <ul>
                            <li>The ability to recover from setbacks, adapt to change, and keep going</li>
                            <li>It's not about being tough or unfeeling — it's about bouncing back</li>
                            <li>Resilience is built through practice, not by avoiding difficulty</li>
                        </ul>

                        <h3>The Pillars of Resilience</h3>
                        <ul>
                            <li><strong>Connection:</strong> Strong relationships provide support during hard times</li>
                            <li><strong>Purpose:</strong> A sense of meaning helps you endure difficulty</li>
                            <li><strong>Self-care:</strong> Physical health directly impacts emotional resilience</li>
                            <li><strong>Perspective:</strong> Seeing setbacks as temporary and specific, not permanent and pervasive</li>
                            <li><strong>Agency:</strong> Focusing on what you CAN control, accepting what you can't</li>
                        </ul>

                        <h3>Building Your Resilience Toolkit</h3>
                        <ul>
                            <li><strong>Daily reflection:</strong> 5 minutes journaling about what went well and what you learned</li>
                            <li><strong>Physical exercise:</strong> Even a 20-minute walk reduces stress hormones</li>
                            <li><strong>Sleep:</strong> Non-negotiable for emotional regulation</li>
                            <li><strong>Social support:</strong> Regular connection with people who energize you</li>
                            <li><strong>Gratitude practice:</strong> 3 things you're grateful for daily (rewires your brain toward positive focus)</li>
                        </ul>

                        <h3>After a Setback</h3>
                        <ol>
                            <li>Allow yourself to feel the emotions (don't suppress)</li>
                            <li>Give yourself a time limit for wallowing (1-2 days, then shift)</li>
                            <li>Ask: "What can I learn from this?"</li>
                            <li>Identify one small action you can take today</li>
                            <li>Lean on your support system</li>
                        </ol>

                        <div class="highlight">
                            <strong>Resilience Is a Muscle:</strong> Every challenge you face and work through builds your resilience capacity. The difficult situations you're navigating right now are literally making you stronger for what comes next.
                        </div>
                    `
                }
            ],
            quiz: {
                questions: [
                    {
                        question: 'What is the "STOP" method for emotional regulation?',
                        options: [
                            'Stop talking, Think about yourself, Overreact, Panic',
                            'Stop, Take a breath, Observe what you\'re feeling, Proceed with a thoughtful response',
                            'Scream, Throw things, Overpower, Prevail',
                            'Smile, Talk, Open up, Push through'
                        ],
                        correct: 1,
                        explanation: 'STOP stands for: Stop (don\'t react), Take a breath, Observe (what am I feeling? what\'s happening?), Proceed (choose a thoughtful response). It creates space between trigger and reaction.'
                    },
                    {
                        question: 'What is the "24-hour email rule"?',
                        options: [
                            'Reply to all emails within 24 hours',
                            'Only check email once every 24 hours',
                            'Never send an emotional email — draft it, save it, review it 24 hours later before sending',
                            'Delete all emails after 24 hours'
                        ],
                        correct: 2,
                        explanation: 'The 24-hour rule means you should never send an email written in an emotional state. Draft it, save it, and review it the next day. You\'ll almost always revise it — and avoid saying something you\'d regret.'
                    }
                ]
            }
        },
        {
            id: 3,
            title: 'Setting Boundaries',
            subtitle: 'Protecting your time, energy, and well-being',
            topics: [
                {
                    id: 'boundary-basics',
                    title: 'Boundaries 101',
                    content: `
                        <h2>Boundaries 101</h2>

                        <h3>What Are Boundaries?</h3>
                        <ul>
                            <li>Limits you set on what you will and won't accept in how others treat you</li>
                            <li>Not about controlling others — about defining what's acceptable TO YOU</li>
                            <li>Healthy boundaries are not mean, selfish, or rude — they're necessary for well-being</li>
                        </ul>

                        <h3>Types of Boundaries</h3>
                        <ul>
                            <li><strong>Physical:</strong> Personal space, touch, physical needs</li>
                            <li><strong>Emotional:</strong> Protecting your feelings, not taking on others' emotions</li>
                            <li><strong>Time:</strong> How you spend your time, availability</li>
                            <li><strong>Mental:</strong> Your right to your own thoughts and opinions</li>
                            <li><strong>Material:</strong> Your possessions, money, lending</li>
                            <li><strong>Digital:</strong> Response times, social media, phone availability</li>
                        </ul>

                        <h3>Signs Your Boundaries Need Work</h3>
                        <ul>
                            <li>You say yes when you want to say no</li>
                            <li>You feel resentful or taken advantage of</li>
                            <li>You feel guilty for having needs</li>
                            <li>Other people's moods dictate your mood</li>
                            <li>You overshare personal information</li>
                            <li>You tolerate disrespectful behavior to avoid conflict</li>
                        </ul>

                        <h3>The Boundary Formula</h3>
                        <p>"When you [specific behavior], I feel [emotion]. I need [what you need]. If [boundary is crossed], I will [consequence]."</p>
                        <div class="example">
                            <strong>Example:</strong> "When you call me after 9pm about work issues, I feel stressed and unable to rest. I need work calls to be during business hours. If I receive calls after 9pm, I won't answer until the next morning."
                        </div>

                        <div class="highlight">
                            <strong>The Hardest Part:</strong> Setting boundaries isn't the hard part — maintaining them is. People will test your boundaries. The moment you enforce them consistently, people learn to respect them. The moment you cave, they learn your boundaries don't mean anything.
                        </div>
                    `
                },
                {
                    id: 'workplace-boundaries',
                    title: 'Setting Boundaries at Work',
                    content: `
                        <h2>Setting Boundaries at Work</h2>

                        <h3>Common Workplace Boundary Violations</h3>
                        <ul>
                            <li>Expected to be available 24/7</li>
                            <li>Workload beyond reasonable capacity</li>
                            <li>Personal questions or comments that are inappropriate</li>
                            <li>Being volunteered for projects without being asked</li>
                            <li>Colleagues dumping emotional labor on you</li>
                            <li>Criticism disguised as "feedback" delivered publicly</li>
                        </ul>

                        <h3>Professional Boundary-Setting Scripts</h3>
                        <ul>
                            <li><strong>Taking on too much:</strong> "I want to do great work on this. Given my current projects, I can take this on if we deprioritize [X]. Which would you prefer?"</li>
                            <li><strong>After-hours communication:</strong> "I try to disconnect after 6pm so I can recharge. I'll review this first thing in the morning."</li>
                            <li><strong>Inappropriate questions:</strong> "I prefer to keep my personal life private. Let's focus on [work topic]."</li>
                            <li><strong>Last-minute requests:</strong> "I need at least [X time] notice to deliver quality work. Can we plan better next time?"</li>
                            <li><strong>Gossip:</strong> "I'm not comfortable discussing [person] when they're not here. Have you talked to them directly?"</li>
                        </ul>

                        <h3>The Power of "No"</h3>
                        <ul>
                            <li>"No" is a complete sentence — but at work, a diplomatic "no" is more effective</li>
                            <li>"No, but..." offers an alternative: "I can't do Friday, but Monday works"</li>
                            <li>Don't over-explain or justify — it weakens your position</li>
                            <li>Practice saying no to small things first (builds the muscle)</li>
                        </ul>

                        <div class="highlight">
                            <strong>Boundaries Earn Respect:</strong> The people who respect your boundaries are the people worth having in your life. The people who get angry when you set boundaries are the people who benefited from you having none.
                        </div>
                    `
                }
            ],
            quiz: {
                questions: [
                    {
                        question: 'What is the "boundary formula"?',
                        options: [
                            'Just say no and walk away',
                            '"When you [behavior], I feel [emotion]. I need [what you need]. If [boundary is crossed], I will [consequence]"',
                            'Give a long explanation for why you need boundaries',
                            'Ask for permission to set boundaries'
                        ],
                        correct: 1,
                        explanation: 'The boundary formula clearly communicates: the specific behavior that\'s a problem, how it affects you emotionally, what you need instead, and what the consequence will be if the boundary is crossed.'
                    },
                    {
                        question: 'How should you typically respond to people who get angry when you set boundaries?',
                        options: [
                            'Remove the boundary to keep the peace',
                            'Recognize that their anger often means they benefited from you having no boundaries — maintain your boundary consistently',
                            'Get angry back',
                            'Avoid them completely'
                        ],
                        correct: 1,
                        explanation: 'People who react negatively to your boundaries are often the ones who were benefiting from your lack of boundaries. Maintaining them consistently is essential — people will learn to respect boundaries you enforce.'
                    }
                ]
            }
        },
        {
            id: 4,
            title: 'Dealing with Difficult People',
            subtitle: 'Navigate toxic behavior without losing yourself',
            topics: [
                {
                    id: 'difficult-personality-types',
                    title: 'Recognizing Difficult Personality Types',
                    content: `
                        <h2>Recognizing Difficult Personality Types</h2>

                        <h3>Common Difficult Types</h3>

                        <h4>The Bully</h4>
                        <ul>
                            <li>Uses intimidation, aggression, and dominance</li>
                            <li><strong>Strategy:</strong> Stand firm but calm. Bullies target those who shrink. Set clear limits.</li>
                        </ul>

                        <h4>The Passive-Aggressive</h4>
                        <ul>
                            <li>Seems agreeable but undermines through indirect actions (sarcasm, "forgetting," backhanded compliments)</li>
                            <li><strong>Strategy:</strong> Address the behavior directly. "When you said X, it seemed like you meant Y. Can you clarify?"</li>
                        </ul>

                        <h4>The Victim</h4>
                        <ul>
                            <li>Nothing is ever their fault. Always has an excuse. Seeks sympathy constantly.</li>
                            <li><strong>Strategy:</strong> Empathize briefly, then redirect to solutions. "That sounds tough. What do you plan to do about it?"</li>
                        </ul>

                        <h4>The Know-It-All</h4>
                        <ul>
                            <li>Dismisses others' ideas, always needs to be right</li>
                            <li><strong>Strategy:</strong> Use questions instead of statements. "That's interesting — have you considered [alternative]?"</li>
                        </ul>

                        <h4>The Manipulator</h4>
                        <ul>
                            <li>Uses guilt, flattery, or deception to get what they want</li>
                            <li><strong>Strategy:</strong> Trust actions, not words. Set boundaries and document interactions.</li>
                        </ul>

                        <h3>The Universal Approach</h3>
                        <ul>
                            <li>Don't take it personally — their behavior reflects them, not you</li>
                            <li>Stay factual, not emotional</li>
                            <li>Set and enforce boundaries</li>
                            <li>Document if it's at work</li>
                            <li>Limit your exposure when possible</li>
                            <li>Know when to disengage — not every battle is worth fighting</li>
                        </ul>

                        <div class="highlight">
                            <strong>You Can't Change Them:</strong> You can only change how you respond. Focus your energy on managing your reactions and protecting your well-being, not on trying to fix someone else's behavior.
                        </div>
                    `
                },
                {
                    id: 'conflict-resolution',
                    title: 'Conflict Resolution Framework',
                    content: `
                        <h2>Conflict Resolution Framework</h2>

                        <h3>The 5-Step Resolution Process</h3>
                        <ol>
                            <li><strong>Identify the issue:</strong> What's the actual problem? (Often it's not what the argument is about)</li>
                            <li><strong>Understand all perspectives:</strong> Listen to the other side fully before responding</li>
                            <li><strong>Find common ground:</strong> What do you both agree on? Start there.</li>
                            <li><strong>Brainstorm solutions:</strong> Focus on interests (what people need), not positions (what they demand)</li>
                            <li><strong>Agree on next steps:</strong> Be specific. Who does what, by when?</li>
                        </ol>

                        <h3>Conflict Resolution Scripts</h3>
                        <ul>
                            <li><strong>Opening:</strong> "I'd like to discuss [issue] and find a solution that works for both of us."</li>
                            <li><strong>Expressing your view:</strong> "From my perspective..." (not "You always...")</li>
                            <li><strong>Seeking understanding:</strong> "Help me understand your perspective on this."</li>
                            <li><strong>Finding solutions:</strong> "What would work for both of us?"</li>
                            <li><strong>If stuck:</strong> "Can we take a break and come back to this in [time]?"</li>
                        </ul>

                        <h3>The "Interest vs. Position" Technique</h3>
                        <div class="example">
                            <strong>Position:</strong> "I want to work from home on Fridays" vs. "No remote work allowed"<br>
                            <strong>Interest behind positions:</strong> Employee needs focused time. Manager needs team collaboration.<br>
                            <strong>Solution:</strong> Work from home mornings, team meeting in the afternoon.
                        </div>

                        <h3>When Conflict Can't Be Resolved</h3>
                        <ul>
                            <li>Not all conflicts have a resolution — sometimes you agree to disagree</li>
                            <li>If the other person won't engage in good faith, protect yourself</li>
                            <li>At work: escalate to a neutral third party (mediator, HR, manager's manager)</li>
                            <li>In life: limit contact, enforce boundaries, walk away if necessary</li>
                        </ul>

                        <div class="highlight">
                            <strong>The Goal:</strong> Conflict resolution isn't about winning — it's about finding a solution that addresses the real needs of both parties. The best outcome is one where both sides feel heard and the relationship is preserved.
                        </div>
                    `
                }
            ],
            quiz: {
                questions: [
                    {
                        question: 'What is the best strategy for dealing with a passive-aggressive person?',
                        options: [
                            'Be passive-aggressive back',
                            'Ignore the behavior completely',
                            'Address the behavior directly: "When you said X, it seemed like you meant Y. Can you clarify?"',
                            'Complain about them to others'
                        ],
                        correct: 2,
                        explanation: 'Passive-aggressive behavior thrives on indirectness. Addressing it directly and calmly — naming what you observed and asking for clarification — removes its power and forces honest communication.'
                    },
                    {
                        question: 'What is the difference between a "position" and an "interest" in conflict resolution?',
                        options: [
                            'They\'re the same thing',
                            'A position is what someone demands; an interest is the underlying need behind the demand — focusing on interests creates more solutions',
                            'An interest is more important than a position',
                            'Positions are professional and interests are personal'
                        ],
                        correct: 1,
                        explanation: 'Positions are the specific demands people make ("I want X"). Interests are the underlying needs behind those demands ("I need Y"). Focusing on interests rather than positions opens up creative solutions that satisfy both parties.'
                    }
                ]
            }
        },
        {
            id: 5,
            title: 'Advanced EQ Skills',
            subtitle: 'Influence, empathy, and emotional leadership',
            topics: [
                {
                    id: 'empathy-in-action',
                    title: 'Empathy as a Strategic Skill',
                    content: `
                        <h2>Empathy as a Strategic Skill</h2>

                        <h3>Three Types of Empathy</h3>
                        <ul>
                            <li><strong>Cognitive empathy:</strong> Understanding someone's perspective intellectually ("I can see why you'd think that")</li>
                            <li><strong>Emotional empathy:</strong> Feeling what someone else feels ("I can feel your frustration")</li>
                            <li><strong>Compassionate empathy:</strong> Understanding + feeling + being moved to help</li>
                        </ul>

                        <h3>Why Empathy Is Strategic</h3>
                        <ul>
                            <li>People who feel understood are more likely to cooperate</li>
                            <li>Empathy diffuses hostility faster than logic</li>
                            <li>Understanding others' motivations helps you anticipate their behavior</li>
                            <li>It builds trust and loyalty in professional and personal relationships</li>
                            <li>It makes you a better negotiator — you understand what the other side actually needs</li>
                        </ul>

                        <h3>Practicing Empathy</h3>
                        <ul>
                            <li><strong>Listen without planning your response:</strong> Just absorb</li>
                            <li><strong>Validate before problem-solving:</strong> "That makes sense" or "I can see why you feel that way"</li>
                            <li><strong>Ask open-ended questions:</strong> "How did that make you feel?" "What do you need?"</li>
                            <li><strong>Separate the person from the behavior:</strong> You can empathize with someone's feelings without agreeing with their actions</li>
                        </ul>

                        <h3>Empathy in Conflict</h3>
                        <p>The most powerful thing you can say in a conflict is: <strong>"Help me understand your perspective."</strong> It immediately shifts the dynamic from adversarial to collaborative.</p>

                        <div class="highlight">
                            <strong>Empathy ≠ Agreement:</strong> You can understand someone's feelings without agreeing with their position. Empathy is about connection and understanding — it doesn't mean you give in or abandon your own needs.
                        </div>
                    `
                },
                {
                    id: 'emotional-leadership',
                    title: 'Emotional Leadership',
                    content: `
                        <h2>Emotional Leadership</h2>

                        <h3>Leading with EQ</h3>
                        <ul>
                            <li>Emotional leaders set the emotional tone for those around them</li>
                            <li>Your composure, positivity, or anxiety is contagious — emotional states spread</li>
                            <li>The higher your role, the more your emotions impact others</li>
                        </ul>

                        <h3>Key Emotional Leadership Skills</h3>
                        <ul>
                            <li><strong>Modeling behavior:</strong> Be the calm you want to see in the room</li>
                            <li><strong>Creating psychological safety:</strong> People perform best when they feel safe to take risks and make mistakes</li>
                            <li><strong>Giving feedback with empathy:</strong> "Here's what I noticed... Here's the impact... Here's what I need"</li>
                            <li><strong>Having courageous conversations:</strong> Address issues early before they become crises</li>
                            <li><strong>Celebrating others:</strong> Recognition is one of the most powerful motivators</li>
                        </ul>

                        <h3>Applying EQ to the Workplace Rights Context</h3>
                        <ul>
                            <li><strong>Advocating for yourself with composure</strong> makes your message more powerful</li>
                            <li><strong>Understanding your manager's pressures</strong> helps you strategize more effectively</li>
                            <li><strong>Staying professional under retaliation</strong> strengthens your case and credibility</li>
                            <li><strong>Supporting coworkers</strong> facing similar issues builds allies</li>
                            <li><strong>Knowing when to fight and when to strategically withdraw</strong> preserves your resources</li>
                        </ul>

                        <div class="highlight">
                            <strong>The Ultimate EQ Move:</strong> Using emotional intelligence doesn't mean being passive. It means being strategic. You can be assertive, firm, and uncompromising on your rights while being calm, professional, and emotionally intelligent in HOW you do it. That combination is unstoppable.
                        </div>
                    `
                }
            ],
            quiz: {
                questions: [
                    {
                        question: 'What is the difference between cognitive empathy and emotional empathy?',
                        options: [
                            'There\'s no difference',
                            'Cognitive empathy is understanding someone\'s perspective intellectually; emotional empathy is actually feeling what they feel',
                            'Cognitive empathy is for smart people; emotional empathy is for emotional people',
                            'Cognitive empathy is fake; emotional empathy is real'
                        ],
                        correct: 1,
                        explanation: 'Cognitive empathy is understanding someone\'s perspective intellectually ("I see why you think that"). Emotional empathy is actually sharing their emotional experience ("I feel your frustration"). Both are valuable tools.'
                    },
                    {
                        question: 'How does emotional intelligence apply to workplace self-advocacy?',
                        options: [
                            'It means you should suppress your emotions at work',
                            'It helps you be assertive about your rights while remaining professional and strategic — making your message more powerful and credible',
                            'It means always agreeing with your employer',
                            'It only applies to personal relationships'
                        ],
                        correct: 1,
                        explanation: 'Emotional intelligence in self-advocacy means you can be firm, assertive, and uncompromising about your rights while being calm, professional, and strategic in how you communicate. This combination strengthens your credibility and your case.'
                    }
                ]
            }
        }
    ]
};
