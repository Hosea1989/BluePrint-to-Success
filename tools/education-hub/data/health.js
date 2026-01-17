// Health & Wellness Curriculum Data
const healthData = {
    id: 'health',
    title: 'Health & Wellness',
    icon: '💪',
    description: 'Master the fundamentals of physical and mental health. Your health is the foundation everything else is built on.',
    whyItMatters: 'Without health, nothing else matters. Medical bills are the #1 cause of bankruptcy. Energy levels affect every area of your life. This track gives you the knowledge to take control.',
    graduationGoal: 'Build sustainable habits for physical and mental wellness',
    levels: [
        {
            id: 1,
            title: 'Health Foundations',
            subtitle: 'Understanding what actually matters',
            topics: [
                {
                    id: 'health-basics',
                    title: 'The Big Picture of Health',
                    content: `
                        <h2>The Big Picture of Health</h2>
                        <h3>The Four Pillars</h3>
                        <ul>
                            <li><strong>Sleep:</strong> Foundation of everything (7-9 hours)</li>
                            <li><strong>Nutrition:</strong> Fuel for body and brain</li>
                            <li><strong>Movement:</strong> Physical activity and exercise</li>
                            <li><strong>Stress Management:</strong> Mental and emotional health</li>
                        </ul>
                        <h3>Why It Matters Financially</h3>
                        <ul>
                            <li>Medical costs average $12,000+/year for unhealthy adults</li>
                            <li>Sick days cost income and opportunities</li>
                            <li>Low energy = lower productivity and earnings</li>
                            <li>Mental health affects decision-making</li>
                        </ul>
                        <div class="highlight">
                            <strong>Key Insight:</strong> Small consistent habits beat extreme interventions. 1% better each day = 37x better in a year.
                        </div>
                    `
                },
                {
                    id: 'sleep-fundamentals',
                    title: 'Sleep: Your Superpower',
                    content: `
                        <h2>Sleep: Your Superpower</h2>
                        <h3>Why Sleep Matters</h3>
                        <ul>
                            <li>Memory consolidation and learning</li>
                            <li>Hormone regulation (including weight)</li>
                            <li>Immune system function</li>
                            <li>Emotional regulation</li>
                            <li>Physical recovery</li>
                        </ul>
                        <h3>Sleep Hygiene Basics</h3>
                        <ul>
                            <li><strong>Consistent schedule:</strong> Same bedtime/wake time (even weekends)</li>
                            <li><strong>Dark room:</strong> Blackout curtains, no LEDs</li>
                            <li><strong>Cool temperature:</strong> 65-68°F optimal</li>
                            <li><strong>No screens 1hr before bed:</strong> Blue light blocks melatonin</li>
                            <li><strong>No caffeine after 2pm:</strong> Half-life is 6 hours</li>
                            <li><strong>Limit alcohol:</strong> Disrupts sleep quality</li>
                        </ul>
                        <h3>Signs You Need More Sleep</h3>
                        <ul>
                            <li>Need alarm to wake up</li>
                            <li>Drowsy during the day</li>
                            <li>Fall asleep within 5 minutes</li>
                            <li>Irritable or emotional</li>
                            <li>Difficulty concentrating</li>
                        </ul>
                    `
                }
            ],
            quiz: {
                questions: [
                    {
                        question: 'What are the four pillars of health?',
                        options: ['Diet, Exercise, Meditation, Supplements', 'Sleep, Nutrition, Movement, Stress Management', 'Cardio, Weights, Stretching, Rest', 'Water, Food, Air, Sunlight'],
                        correct: 1,
                        explanation: 'The four pillars are Sleep, Nutrition, Movement, and Stress Management—master these and most health issues improve.'
                    },
                    {
                        question: 'What temperature is optimal for sleep?',
                        options: ['70-75°F', '65-68°F', '60-62°F', '75-80°F'],
                        correct: 1,
                        explanation: '65-68°F is optimal for sleep—your body temperature needs to drop for quality rest.'
                    }
                ]
            }
        },
        {
            id: 2,
            title: 'Nutrition Basics',
            subtitle: 'Eating for energy and longevity',
            topics: [
                {
                    id: 'nutrition-fundamentals',
                    title: 'Nutrition Without the Hype',
                    content: `
                        <h2>Nutrition Without the Hype</h2>
                        <h3>What Actually Matters</h3>
                        <ul>
                            <li><strong>Calories:</strong> Energy in vs. energy out (for weight)</li>
                            <li><strong>Protein:</strong> 0.7-1g per pound of body weight</li>
                            <li><strong>Whole foods:</strong> Minimally processed is better</li>
                            <li><strong>Vegetables:</strong> Aim for half your plate</li>
                            <li><strong>Hydration:</strong> Half your body weight in ounces</li>
                        </ul>
                        <h3>What Doesn't Matter (Much)</h3>
                        <ul>
                            <li>Meal timing (eat when works for you)</li>
                            <li>Specific diet labels (keto, paleo, etc.)</li>
                            <li>Superfoods (no magic bullets)</li>
                            <li>Expensive supplements (most unnecessary)</li>
                        </ul>
                        <h3>Simple Plate Method</h3>
                        <ul>
                            <li>½ plate: Vegetables</li>
                            <li>¼ plate: Protein</li>
                            <li>¼ plate: Complex carbs</li>
                            <li>Add healthy fats (olive oil, avocado, nuts)</li>
                        </ul>
                        <div class="highlight">
                            <strong>80/20 Rule:</strong> Eat well 80% of the time. Perfect isn't sustainable. Consistency beats perfection.
                        </div>
                    `
                },
                {
                    id: 'meal-prep',
                    title: 'Practical Meal Planning',
                    content: `
                        <h2>Practical Meal Planning</h2>
                        <h3>Why Meal Prep Works</h3>
                        <ul>
                            <li>Saves money (less takeout)</li>
                            <li>Saves time during busy weekdays</li>
                            <li>Makes healthy eating the easy choice</li>
                            <li>Reduces decision fatigue</li>
                        </ul>
                        <h3>Simple Meal Prep System</h3>
                        <ol>
                            <li>Pick 2-3 proteins for the week</li>
                            <li>Choose 3-4 vegetables</li>
                            <li>Prepare 2 carb sources</li>
                            <li>Cook in batch on Sunday</li>
                            <li>Mix and match throughout week</li>
                        </ol>
                        <h3>Budget-Friendly Healthy Foods</h3>
                        <ul>
                            <li><strong>Protein:</strong> Eggs, chicken thighs, beans, canned tuna</li>
                            <li><strong>Vegetables:</strong> Frozen vegetables, cabbage, carrots</li>
                            <li><strong>Carbs:</strong> Rice, oats, potatoes</li>
                            <li><strong>Healthy fats:</strong> Olive oil, peanut butter</li>
                        </ul>
                    `
                }
            ],
            quiz: {
                questions: [
                    {
                        question: 'How much protein should you aim for daily?',
                        options: ['0.3-0.5g per pound', '0.7-1g per pound', '2-3g per pound', 'As little as possible'],
                        correct: 1,
                        explanation: '0.7-1g of protein per pound of body weight supports muscle maintenance, satiety, and overall health.'
                    },
                    {
                        question: 'What\'s the simple plate method?',
                        options: ['All protein', '½ veggies, ¼ protein, ¼ carbs', 'Equal parts of everything', 'No carbs ever'],
                        correct: 1,
                        explanation: 'The plate method: ½ vegetables, ¼ protein, ¼ complex carbs—a simple framework for balanced eating.'
                    }
                ]
            }
        },
        {
            id: 3,
            title: 'Movement & Exercise',
            subtitle: 'Building an active lifestyle',
            topics: [
                {
                    id: 'exercise-basics',
                    title: 'Exercise Fundamentals',
                    content: `
                        <h2>Exercise Fundamentals</h2>
                        <h3>Minimum Effective Dose</h3>
                        <ul>
                            <li><strong>150 minutes/week</strong> moderate cardio OR</li>
                            <li><strong>75 minutes/week</strong> vigorous cardio</li>
                            <li><strong>2x/week</strong> strength training</li>
                            <li><strong>Daily:</strong> Movement and walking</li>
                        </ul>
                        <h3>Types of Exercise</h3>
                        <ul>
                            <li><strong>Cardio:</strong> Heart health, endurance, mood</li>
                            <li><strong>Strength:</strong> Muscle, bone density, metabolism</li>
                            <li><strong>Flexibility:</strong> Mobility, injury prevention</li>
                            <li><strong>NEAT:</strong> Daily movement (stairs, walking)</li>
                        </ul>
                        <h3>Starting from Zero</h3>
                        <ul>
                            <li>Week 1-2: 10-minute walks daily</li>
                            <li>Week 3-4: 20-minute walks + basic bodyweight</li>
                            <li>Month 2: Add structure (gym or home workout)</li>
                            <li>Month 3+: Progressive overload</li>
                        </ul>
                        <div class="highlight">
                            <strong>Best Exercise:</strong> The one you'll actually do consistently. Walking is underrated—10K steps daily transforms health.
                        </div>
                    `
                },
                {
                    id: 'building-habit',
                    title: 'Building the Exercise Habit',
                    content: `
                        <h2>Building the Exercise Habit</h2>
                        <h3>Why Habits Beat Motivation</h3>
                        <ul>
                            <li>Motivation is temporary and unreliable</li>
                            <li>Habits are automatic and sustainable</li>
                            <li>Environment design beats willpower</li>
                        </ul>
                        <h3>Habit Building Strategies</h3>
                        <ul>
                            <li><strong>Stack it:</strong> Attach to existing habit (coffee → walk)</li>
                            <li><strong>Schedule it:</strong> Same time every day</li>
                            <li><strong>Prepare it:</strong> Lay out gym clothes night before</li>
                            <li><strong>Make it easy:</strong> Home workouts, nearby gym</li>
                            <li><strong>Start tiny:</strong> 5 minutes is better than zero</li>
                        </ul>
                        <h3>Overcoming Barriers</h3>
                        <ul>
                            <li>"No time" → 10 minutes counts, schedule it</li>
                            <li>"Too tired" → Start anyway, usually feel better</li>
                            <li>"Don't know how" → Start with walking, YouTube workouts</li>
                            <li>"Can't afford gym" → Bodyweight exercises at home</li>
                        </ul>
                    `
                }
            ],
            quiz: {
                questions: [
                    {
                        question: 'What\'s the minimum recommended cardio per week?',
                        options: ['30 minutes total', '75 minutes vigorous or 150 minutes moderate', '300 minutes', '60 minutes'],
                        correct: 1,
                        explanation: 'Guidelines recommend 150 minutes moderate OR 75 minutes vigorous cardio per week, plus strength training 2x/week.'
                    },
                    {
                        question: 'What\'s the best way to build an exercise habit?',
                        options: ['Rely on motivation', 'Start with 2-hour workouts', 'Start tiny and be consistent', 'Only exercise when you feel like it'],
                        correct: 2,
                        explanation: 'Starting tiny (even 5 minutes) and being consistent builds the habit. Motivation fades, but habits stick.'
                    }
                ]
            }
        },
        {
            id: 4,
            title: 'Mental Health',
            subtitle: 'Managing stress and building resilience',
            topics: [
                {
                    id: 'stress-management',
                    title: 'Understanding and Managing Stress',
                    content: `
                        <h2>Understanding and Managing Stress</h2>
                        <h3>Stress Types</h3>
                        <ul>
                            <li><strong>Acute stress:</strong> Short-term, can be beneficial</li>
                            <li><strong>Chronic stress:</strong> Long-term, destructive</li>
                            <li><strong>Eustress:</strong> Positive stress (excitement, challenge)</li>
                            <li><strong>Distress:</strong> Negative stress (anxiety, overwhelm)</li>
                        </ul>
                        <h3>Signs of Chronic Stress</h3>
                        <ul>
                            <li>Sleep problems</li>
                            <li>Irritability and mood swings</li>
                            <li>Difficulty concentrating</li>
                            <li>Physical symptoms (headaches, tension)</li>
                            <li>Changes in appetite</li>
                        </ul>
                        <h3>Stress Management Toolkit</h3>
                        <ul>
                            <li><strong>Physical:</strong> Exercise, sleep, nutrition</li>
                            <li><strong>Mental:</strong> Meditation, journaling, therapy</li>
                            <li><strong>Social:</strong> Connection, support systems</li>
                            <li><strong>Environmental:</strong> Nature, decluttering, boundaries</li>
                        </ul>
                        <h3>Quick Stress Relief</h3>
                        <ul>
                            <li>Box breathing: 4 counts in, hold, out, hold</li>
                            <li>5-minute walk outside</li>
                            <li>Cold water on face</li>
                            <li>Call a friend</li>
                        </ul>
                    `
                },
                {
                    id: 'mental-health-basics',
                    title: 'Mental Health Fundamentals',
                    content: `
                        <h2>Mental Health Fundamentals</h2>
                        <h3>Daily Practices</h3>
                        <ul>
                            <li><strong>Gratitude:</strong> 3 things you're grateful for daily</li>
                            <li><strong>Movement:</strong> Exercise is antidepressant</li>
                            <li><strong>Connection:</strong> Talk to people you care about</li>
                            <li><strong>Purpose:</strong> Work toward meaningful goals</li>
                            <li><strong>Rest:</strong> Protect your sleep and downtime</li>
                        </ul>
                        <h3>When to Seek Help</h3>
                        <ul>
                            <li>Symptoms persist more than 2 weeks</li>
                            <li>Affecting work or relationships</li>
                            <li>Thoughts of self-harm</li>
                            <li>Substance use to cope</li>
                            <li>You feel like you need help</li>
                        </ul>
                        <h3>Getting Help</h3>
                        <ul>
                            <li><strong>Therapy:</strong> Check insurance, sliding scale options</li>
                            <li><strong>Apps:</strong> Headspace, Calm, BetterHelp</li>
                            <li><strong>Crisis:</strong> 988 (Suicide & Crisis Lifeline)</li>
                            <li><strong>Community:</strong> Support groups, faith communities</li>
                        </ul>
                        <div class="highlight">
                            <strong>Remember:</strong> Seeking help is strength, not weakness. Mental health is health.
                        </div>
                    `
                }
            ],
            quiz: {
                questions: [
                    {
                        question: 'What\'s the difference between eustress and distress?',
                        options: ['Same thing', 'Eustress is positive/motivating, distress is negative/harmful', 'Eustress is physical, distress is mental', 'Distress is worse than eustress always'],
                        correct: 1,
                        explanation: 'Eustress is positive stress that motivates and excites us. Distress is negative stress that overwhelms and harms us.'
                    },
                    {
                        question: 'When should you seek professional mental health help?',
                        options: ['Only in emergencies', 'When symptoms persist 2+ weeks and affect daily life', 'Never, you can handle it alone', 'Only if others tell you to'],
                        correct: 1,
                        explanation: 'Seek help when symptoms persist more than 2 weeks, affect work/relationships, or you feel like you need support.'
                    }
                ]
            }
        }
    ]
};
