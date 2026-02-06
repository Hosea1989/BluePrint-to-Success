// Self Care Curriculum Data
const selfcareData = {
    id: 'selfcare',
    title: 'Self Care & Wellness',
    icon: '🧘',
    description: 'Build sustainable habits for mental, physical, and emotional well-being.',
    graduationGoal: 'Establish a personalized self-care routine that supports your goals',
    difficulty: 'beginner',
    prerequisites: [],
    learningObjectives: [
        'Build sustainable self-care habits',
        'Manage stress and prevent burnout',
        'Prioritize your mental and emotional health',
        'Create a personalized wellness routine',
        'Maintain balance in all areas of life'
    ],
    relatedTracks: ['health', 'emotionaliq', 'productivity'],
    resources: [
        { title: 'Mental Health America - Self-Care', url: 'https://www.mhanational.org/self-care' }
    ],
    levels: [
        {
            id: 1,
            title: 'Mental Health Foundations',
            subtitle: 'Understanding and prioritizing your mental well-being',
            topics: [
                {
                    id: 'mental-health-matters',
                    title: 'Why Mental Health Matters',
                    content: `
                        <h2>Why Mental Health Matters</h2>
                        <p>Self-care isn't selfish — it's the foundation for success in every other area of life. You can't pour from an empty cup, and taking care of your mental health isn't a luxury, it's a necessity.</p>
                        <h3>Breaking the Stigma</h3>
                        <p>Seeking help is a sign of strength, not weakness. Many people — especially men and people of color — face cultural pressure to "tough it out." But unaddressed mental health issues affect your career, relationships, finances, and physical health.</p>
                        <h3>Signs You Need to Prioritize Mental Health</h3>
                        <ul>
                            <li>Constant fatigue despite adequate sleep</li>
                            <li>Losing interest in things you used to enjoy</li>
                            <li>Difficulty concentrating or making decisions</li>
                            <li>Irritability or emotional numbness</li>
                            <li>Withdrawing from friends and family</li>
                            <li>Using substances to cope</li>
                        </ul>
                        <h3>The Connection to Success</h3>
                        <p>Your mental state directly impacts your ability to focus, create, lead, and build wealth. The most successful people invest in their mental health as seriously as they invest in their careers.</p>
                        <div class="highlight">
                            <strong>Key Truth:</strong> Taking care of yourself isn't taking time away from your goals — it's fueling your ability to achieve them.
                        </div>
                    `,
                    quiz: {
                        question: 'Why is seeking help for mental health considered a sign of strength?',
                        options: [
                            'Because therapy is expensive',
                            'Because it takes courage to address issues that affect every area of your life',
                            'Because only weak people don\'t need help',
                            'Because employers require it'
                        ],
                        correct: 1
                    }
                },
                {
                    id: 'therapy-counseling',
                    title: 'Therapy & Counseling',
                    content: `
                        <h2>Therapy & Counseling</h2>
                        <p>Therapy isn't just for crisis situations. It's a proactive tool for understanding yourself, processing experiences, and developing coping strategies.</p>
                        <h3>Types of Therapy</h3>
                        <ul>
                            <li><strong>CBT (Cognitive Behavioral Therapy):</strong> Identifies and changes negative thought patterns. Great for anxiety and depression.</li>
                            <li><strong>Talk Therapy:</strong> Process experiences and emotions through conversation</li>
                            <li><strong>Group Therapy:</strong> Connect with others facing similar challenges</li>
                            <li><strong>EMDR:</strong> Effective for trauma processing</li>
                        </ul>
                        <h3>How to Find a Therapist</h3>
                        <ul>
                            <li><strong>Psychology Today directory:</strong> Filter by location, insurance, specialty, and identity</li>
                            <li><strong>BetterHelp / Talkspace:</strong> Online therapy platforms ($60-90/week)</li>
                            <li><strong>Open Path Collective:</strong> Affordable therapy ($30-80/session)</li>
                            <li><strong>Your insurance provider:</strong> Check in-network therapists</li>
                            <li><strong>Community health centers:</strong> Often offer sliding-scale fees</li>
                        </ul>
                        <h3>What to Expect</h3>
                        <p>The first few sessions are about building rapport and understanding your background. It's okay to try different therapists until you find the right fit — the relationship matters more than the approach.</p>
                    `,
                    quiz: {
                        question: 'What type of therapy focuses on identifying and changing negative thought patterns?',
                        options: [
                            'EMDR',
                            'Group Therapy',
                            'CBT (Cognitive Behavioral Therapy)',
                            'Hypnotherapy'
                        ],
                        correct: 2
                    }
                },
                {
                    id: 'mindfulness-meditation',
                    title: 'Mindfulness & Meditation',
                    content: `
                        <h2>Mindfulness & Meditation</h2>
                        <p>Meditation isn't about clearing your mind completely — it's about training your attention and becoming aware of your thoughts without being controlled by them.</p>
                        <h3>Benefits (Backed by Research)</h3>
                        <ul>
                            <li>Reduces stress and anxiety</li>
                            <li>Improves focus and concentration</li>
                            <li>Better emotional regulation</li>
                            <li>Lower blood pressure</li>
                            <li>Improved sleep quality</li>
                        </ul>
                        <h3>How to Start</h3>
                        <ol>
                            <li><strong>Start with 5 minutes:</strong> Sit comfortably, close your eyes, focus on your breath</li>
                            <li><strong>When your mind wanders:</strong> That's normal. Gently return focus to your breath</li>
                            <li><strong>Build up gradually:</strong> Add 1-2 minutes per week until you reach 15-20 minutes</li>
                            <li><strong>Same time daily:</strong> Morning is popular, but any consistent time works</li>
                        </ol>
                        <h3>Apps to Help</h3>
                        <ul>
                            <li><strong>Headspace:</strong> Guided meditations for beginners</li>
                            <li><strong>Calm:</strong> Sleep stories and meditation</li>
                            <li><strong>Insight Timer:</strong> Free, huge library of guided meditations</li>
                            <li><strong>Waking Up:</strong> More philosophical approach to mindfulness</li>
                        </ul>
                        <h3>Journaling as Meditation</h3>
                        <p>If sitting still isn't your thing, journaling serves a similar purpose. Write freely for 10 minutes each morning — get your thoughts out of your head and onto paper.</p>
                    `,
                    quiz: {
                        question: 'When your mind wanders during meditation, what should you do?',
                        options: [
                            'Stop meditating because it\'s not working',
                            'Get frustrated with yourself',
                            'Gently return your focus to your breath — wandering is normal',
                            'Start over from the beginning'
                        ],
                        correct: 2
                    }
                }
            ]
        },
        {
            id: 2,
            title: 'Physical Wellness',
            subtitle: 'Taking care of your body as the foundation for everything',
            topics: [
                {
                    id: 'exercise-basics',
                    title: 'Exercise & Movement',
                    content: `
                        <h2>Exercise & Movement</h2>
                        <p>Exercise isn't just about looking good — it's one of the most powerful tools for mental clarity, stress relief, and long-term health.</p>
                        <h3>Types of Exercise</h3>
                        <ul>
                            <li><strong>Strength training:</strong> 2-3x per week. Builds muscle, boosts metabolism, strengthens bones. Start with bodyweight exercises or basic weights.</li>
                            <li><strong>Cardio:</strong> 150 minutes of moderate activity per week (walking, cycling, swimming). Good for heart health and stress.</li>
                            <li><strong>Flexibility/Mobility:</strong> Stretching, yoga, foam rolling. Prevents injury and reduces tension.</li>
                            <li><strong>Daily movement:</strong> Walk 7,000-10,000 steps. Take stairs. Stand up every hour.</li>
                        </ul>
                        <h3>Starting a Routine</h3>
                        <ol>
                            <li>Start with 20-30 minutes, 3x per week</li>
                            <li>Choose something you actually enjoy</li>
                            <li>Schedule it like a meeting — it's non-negotiable</li>
                            <li>Track your workouts (apps like Strong or Apple Fitness)</li>
                            <li>Progressive overload: gradually increase intensity</li>
                        </ol>
                        <div class="highlight">
                            <strong>The Best Exercise:</strong> The one you'll actually do consistently. Don't worry about the "optimal" routine — just move your body regularly.
                        </div>
                    `,
                    quiz: {
                        question: 'How much moderate cardio exercise per week is generally recommended?',
                        options: [
                            '30 minutes total',
                            '150 minutes',
                            '7 hours',
                            'As much as possible every day'
                        ],
                        correct: 1
                    }
                },
                {
                    id: 'nutrition-basics',
                    title: 'Nutrition Fundamentals',
                    content: `
                        <h2>Nutrition Fundamentals</h2>
                        <p>What you eat directly affects your energy, focus, mood, and physical performance. Good nutrition doesn't have to be complicated.</p>
                        <h3>Basic Principles</h3>
                        <ul>
                            <li><strong>Eat whole foods:</strong> Fruits, vegetables, lean proteins, whole grains, nuts, seeds</li>
                            <li><strong>Limit processed foods:</strong> Added sugars, artificial ingredients, excess sodium</li>
                            <li><strong>Stay hydrated:</strong> Aim for half your body weight in ounces of water daily</li>
                            <li><strong>Don't skip meals:</strong> Especially breakfast — it sets your energy for the day</li>
                        </ul>
                        <h3>Macronutrients</h3>
                        <ul>
                            <li><strong>Protein:</strong> Builds and repairs muscle. Aim for 0.7-1g per pound of body weight. Sources: chicken, fish, eggs, beans, Greek yogurt.</li>
                            <li><strong>Carbohydrates:</strong> Your body's primary energy source. Choose complex carbs: brown rice, oats, sweet potatoes.</li>
                            <li><strong>Fats:</strong> Essential for hormone production and brain health. Good sources: avocado, olive oil, nuts, fatty fish.</li>
                        </ul>
                        <h3>Meal Prep Basics</h3>
                        <p>Spending 1-2 hours on Sunday preparing meals for the week saves time, money, and makes healthy eating effortless.</p>
                        <ul>
                            <li>Cook proteins in bulk (chicken, rice, ground turkey)</li>
                            <li>Prep vegetables and salads in containers</li>
                            <li>Have healthy snacks ready (fruit, nuts, protein bars)</li>
                        </ul>
                    `,
                    quiz: {
                        question: 'How much protein should you aim for daily if you weigh 180 pounds?',
                        options: [
                            '50 grams', '90 grams', '126-180 grams', '360 grams'
                        ],
                        correct: 2
                    }
                },
                {
                    id: 'sleep-hygiene',
                    title: 'Sleep & Recovery',
                    content: `
                        <h2>Sleep & Recovery</h2>
                        <p>Sleep is when your body repairs, your brain processes information, and your hormones regulate. Chronic sleep deprivation destroys productivity, mood, and health.</p>
                        <h3>How Much Sleep?</h3>
                        <p><strong>7-9 hours per night</strong> for adults. Less than 6 hours consistently is associated with cognitive decline, weight gain, weakened immunity, and increased disease risk.</p>
                        <h3>Sleep Hygiene Tips</h3>
                        <ul>
                            <li><strong>Consistent schedule:</strong> Same bedtime and wake time every day (even weekends)</li>
                            <li><strong>Dark and cool room:</strong> 65-68°F is optimal. Use blackout curtains.</li>
                            <li><strong>No screens 30-60 minutes before bed:</strong> Blue light suppresses melatonin</li>
                            <li><strong>No caffeine after 2pm:</strong> Caffeine has a half-life of 5-6 hours</li>
                            <li><strong>Wind-down routine:</strong> Reading, stretching, or meditation before bed</li>
                        </ul>
                        <h3>Rest Days</h3>
                        <p>Rest is not laziness. Your muscles grow during rest, not during workouts. Take 1-2 rest days per week from intense exercise. Active recovery (walking, gentle stretching) is fine.</p>
                        <div class="highlight">
                            <strong>Hustle Culture Myth:</strong> "I'll sleep when I'm dead" is terrible advice. Sleep-deprived people make worse decisions, earn less money, and have shorter lifespans. Rest is productive.
                        </div>
                    `,
                    quiz: {
                        question: 'What room temperature is considered optimal for sleep?',
                        options: ['72-75°F', '65-68°F', '80°F', '60°F'],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 3,
            title: 'Emotional Well-being',
            subtitle: 'Building emotional resilience and healthy relationships',
            topics: [
                {
                    id: 'setting-boundaries',
                    title: 'Setting Healthy Boundaries',
                    content: `
                        <h2>Setting Healthy Boundaries</h2>
                        <p>Boundaries are the limits you set to protect your time, energy, and emotional health. They're not mean — they're necessary for sustainable relationships.</p>
                        <h3>Types of Boundaries</h3>
                        <ul>
                            <li><strong>Time boundaries:</strong> "I don't take work calls after 7pm"</li>
                            <li><strong>Emotional boundaries:</strong> "I'm not responsible for managing your feelings"</li>
                            <li><strong>Physical boundaries:</strong> Personal space and physical comfort</li>
                            <li><strong>Digital boundaries:</strong> When you check your phone, social media limits</li>
                            <li><strong>Financial boundaries:</strong> How much you lend, spend, or give</li>
                        </ul>
                        <h3>How to Set Boundaries</h3>
                        <ol>
                            <li><strong>Identify what drains you:</strong> Pay attention to situations that leave you exhausted or resentful</li>
                            <li><strong>Communicate clearly:</strong> "I can't do that" or "That doesn't work for me" — no lengthy justification needed</li>
                            <li><strong>Be consistent:</strong> Boundaries only work if you enforce them</li>
                            <li><strong>Accept discomfort:</strong> Some people won't like your boundaries. That's okay.</li>
                        </ol>
                        <div class="highlight">
                            <strong>Remember:</strong> People who get upset about your boundaries are usually the ones who benefited most from you not having them.
                        </div>
                    `,
                    quiz: {
                        question: 'Why is it okay if some people are upset by your boundaries?',
                        options: [
                            'Because you should never care about other people',
                            'Because those are usually the people who benefited from you not having boundaries',
                            'Because boundaries are only for selfish people',
                            'Because everyone will always agree with your limits'
                        ],
                        correct: 1
                    }
                },
                {
                    id: 'emotional-regulation',
                    title: 'Emotional Regulation',
                    content: `
                        <h2>Emotional Regulation</h2>
                        <p>Emotional regulation is the ability to manage and respond to emotions in a healthy way — not suppressing them, but not being controlled by them either.</p>
                        <h3>The STOP Technique</h3>
                        <ol>
                            <li><strong>S - Stop:</strong> Pause before reacting</li>
                            <li><strong>T - Take a breath:</strong> Deep breathing activates your parasympathetic nervous system</li>
                            <li><strong>O - Observe:</strong> What emotion are you feeling? Name it. ("I'm feeling frustrated because...")</li>
                            <li><strong>P - Proceed:</strong> Choose how to respond rather than react impulsively</li>
                        </ol>
                        <h3>Healthy Emotional Outlets</h3>
                        <ul>
                            <li><strong>Physical:</strong> Exercise, boxing, running — move the energy through your body</li>
                            <li><strong>Creative:</strong> Music, art, writing, cooking</li>
                            <li><strong>Social:</strong> Talking to a trusted friend or therapist</li>
                            <li><strong>Reflective:</strong> Journaling, meditation, prayer</li>
                        </ul>
                        <h3>Unhealthy Patterns to Watch</h3>
                        <ul>
                            <li>Suppressing emotions ("I'm fine" when you're not)</li>
                            <li>Numbing with alcohol, substances, or excessive social media</li>
                            <li>Projecting anger onto people who aren't the real source</li>
                            <li>Avoidance and isolation</li>
                        </ul>
                    `,
                    quiz: {
                        question: 'What does the "O" in the STOP technique stand for?',
                        options: [
                            'Overcome your feelings',
                            'Observe — name the emotion you\'re feeling',
                            'Overreact to get it out',
                            'Opt out of the situation'
                        ],
                        correct: 1
                    }
                },
                {
                    id: 'building-habits',
                    title: 'Building Sustainable Habits',
                    content: `
                        <h2>Building Sustainable Habits</h2>
                        <p>Self-care isn't a one-time event — it's a daily practice. The key is building habits that are so small and easy that you can't say no.</p>
                        <h3>The Habit Stack</h3>
                        <p>Attach new habits to existing ones:</p>
                        <ul>
                            <li>"After I pour my morning coffee, I will journal for 5 minutes"</li>
                            <li>"After I brush my teeth at night, I will meditate for 3 minutes"</li>
                            <li>"After I park my car at work, I will listen to 10 minutes of a podcast"</li>
                        </ul>
                        <h3>Start Ridiculously Small</h3>
                        <ul>
                            <li>Want to exercise daily? Start with 5 pushups.</li>
                            <li>Want to meditate? Start with 2 minutes.</li>
                            <li>Want to read more? Start with 1 page.</li>
                        </ul>
                        <h3>Your Self-Care Non-Negotiables</h3>
                        <p>Choose 3-5 daily practices that are non-negotiable. Examples:</p>
                        <ol>
                            <li>7+ hours of sleep</li>
                            <li>30 minutes of movement</li>
                            <li>10 minutes of quiet reflection</li>
                            <li>Drinking enough water</li>
                            <li>Connecting with someone you care about</li>
                        </ol>
                        <div class="highlight">
                            <strong>Remember:</strong> You don't rise to the level of your goals — you fall to the level of your systems. Build the systems and the results follow.
                        </div>
                    `,
                    quiz: {
                        question: 'What is habit stacking?',
                        options: [
                            'Doing as many habits as possible at once',
                            'Attaching a new habit to an existing routine to make it easier to remember',
                            'Replacing all bad habits immediately',
                            'Stacking books about habits on your shelf'
                        ],
                        correct: 1
                    }
                }
            ]
        }
    ],
    finalExam: [
        {
            question: 'Why is self-care considered essential rather than selfish?',
            options: ['Because it is trendy', 'Because it is the foundation for success in every area of life', 'Because everyone else does it', 'Because doctors require it'],
            correct: 1
        },
        {
            question: 'What type of therapy is most effective for changing negative thought patterns?',
            options: ['EMDR', 'Group therapy', 'CBT (Cognitive Behavioral Therapy)', 'Art therapy'],
            correct: 2
        },
        {
            question: 'How should you start a meditation practice?',
            options: ['With 60-minute sessions right away', 'Start with 5 minutes and gradually increase', 'Only meditate when stressed', 'You need a teacher to start'],
            correct: 1
        },
        {
            question: 'What is the recommended amount of sleep for adults?',
            options: ['4-5 hours', '5-6 hours', '7-9 hours', '10-12 hours'],
            correct: 2
        },
        {
            question: 'What is the STOP technique used for?',
            options: ['Stopping all emotions permanently', 'Pausing to manage emotional responses before reacting', 'Stopping other people from upsetting you', 'A traffic safety method'],
            correct: 1
        },
        {
            question: 'What makes a habit stick best?',
            options: ['Willpower alone', 'Starting ridiculously small and attaching it to existing routines', 'Doing it perfectly from day one', 'Only doing it when motivated'],
            correct: 1
        },
        {
            question: 'Why is sleep deprivation harmful to success?',
            options: ['It only affects physical appearance', 'It impairs decision-making, reduces earnings, and shortens lifespan', 'It has no real impact on performance', 'It only matters for athletes'],
            correct: 1
        },
        {
            question: 'What are healthy boundaries?',
            options: ['Walls that keep everyone out', 'Limits you set to protect your time, energy, and emotional health', 'Being rude to people you don\'t like', 'Never saying yes to anything'],
            correct: 1
        }
    ]
};
