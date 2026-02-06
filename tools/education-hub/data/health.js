// Health & Wellness Curriculum Data
const healthData = {
    id: 'health',
    title: 'Health & Wellness',
    icon: '💪',
    description: 'Master the fundamentals of physical and mental health. Your health is the foundation everything else is built on.',
    whyItMatters: 'Without health, nothing else matters. Medical bills are the #1 cause of bankruptcy. Energy levels affect every area of your life. This track gives you the knowledge to take control.',
    graduationGoal: 'Build sustainable habits for physical and mental wellness',
    difficulty: 'beginner',
    prerequisites: [],
    learningObjectives: [
        'Build sustainable exercise and nutrition habits',
        'Manage stress and mental health effectively',
        'Navigate healthcare and insurance',
        'Prevent chronic diseases through lifestyle',
        'Optimize energy and performance'
    ],
    relatedTracks: ['selfcare', 'emotionaliq', 'insurance'],
    resources: [
        { title: 'CDC Health Information', url: 'https://www.cdc.gov/healthyyouth/' },
        { title: 'Mental Health America', url: 'https://www.mhanational.org/' }
    ],
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
                    id: 'hydration',
                    title: 'Hydration: The Overlooked Foundation',
                    content: `
                        <h2>Hydration: The Overlooked Foundation</h2>
                        <h3>Why Water Matters</h3>
                        <ul>
                            <li>Your body is 60% water</li>
                            <li>Even 2% dehydration impairs cognitive function</li>
                            <li>Dehydration mimics hunger (you eat when you should drink)</li>
                            <li>Most headaches are dehydration</li>
                        </ul>
                        <h3>How Much to Drink</h3>
                        <ul>
                            <li><strong>Minimum:</strong> Half your body weight in ounces</li>
                            <li><strong>Example:</strong> 180 lbs → 90 oz (about 11 cups)</li>
                            <li>More if you exercise, drink coffee, or live in hot climate</li>
                            <li>Check your urine: pale yellow = hydrated</li>
                        </ul>
                        <h3>Hydration Tips</h3>
                        <ul>
                            <li>Start your day with 16 oz of water before coffee</li>
                            <li>Carry a water bottle everywhere</li>
                            <li>Set hourly reminders if needed</li>
                            <li>Add lemon or fruit for flavor</li>
                            <li>Eat water-rich foods (cucumbers, watermelon, oranges)</li>
                        </ul>
                        <div class="highlight">
                            <strong>Simple Test:</strong> If you're tired, have a headache, or feel hungry between meals—drink water first. Wait 20 minutes. Often that's all you needed.
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
                    },
                    {
                        question: 'How many hours of sleep do adults need?',
                        options: ['4-5 hours', '5-6 hours', '7-9 hours', '10-12 hours'],
                        correct: 2,
                        explanation: 'Adults need 7-9 hours of quality sleep. Consistently getting less impairs memory, immune function, and emotional regulation.'
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
                },
                {
                    id: 'reading-labels',
                    title: 'Reading Food Labels',
                    content: `
                        <h2>Reading Food Labels</h2>
                        <h3>What to Look At First</h3>
                        <ul>
                            <li><strong>Serving size:</strong> Everything is based on this (often misleading)</li>
                            <li><strong>Calories:</strong> Context matters — 200 cal of nuts ≠ 200 cal of candy</li>
                            <li><strong>Protein:</strong> Aim for higher protein per serving</li>
                            <li><strong>Added sugars:</strong> Keep under 25g/day (women) or 36g/day (men)</li>
                            <li><strong>Sodium:</strong> Under 2,300mg/day total</li>
                        </ul>
                        <h3>Ingredients List</h3>
                        <ul>
                            <li>Listed by weight — first ingredient = most of the product</li>
                            <li>If sugar is in the first 3 ingredients, think twice</li>
                            <li>Fewer ingredients usually = less processed</li>
                            <li>If you can't pronounce it, research it</li>
                        </ul>
                        <h3>Marketing Tricks</h3>
                        <ul>
                            <li><strong>"Natural"</strong> — means nothing legally</li>
                            <li><strong>"Low fat"</strong> — often high in sugar to compensate</li>
                            <li><strong>"Sugar-free"</strong> — may have artificial sweeteners</li>
                            <li><strong>"Multigrain"</strong> — not the same as whole grain</li>
                        </ul>
                        <div class="highlight">
                            <strong>Simple Rule:</strong> Shop the perimeter of the grocery store (produce, meat, dairy). Most processed foods are in the middle aisles.
                        </div>
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
                    id: 'home-workouts',
                    title: 'No-Equipment Home Workouts',
                    content: `
                        <h2>No-Equipment Home Workouts</h2>
                        <h3>No Gym? No Problem</h3>
                        <p>You can build real strength and fitness with zero equipment, zero cost, and zero commute.</p>
                        <h3>Bodyweight Exercises by Muscle Group</h3>
                        <ul>
                            <li><strong>Chest/Arms:</strong> Push-ups, dips (on chair), diamond push-ups</li>
                            <li><strong>Back:</strong> Superman holds, doorframe rows</li>
                            <li><strong>Legs:</strong> Squats, lunges, wall sits, calf raises</li>
                            <li><strong>Core:</strong> Planks, dead bugs, mountain climbers</li>
                            <li><strong>Full body:</strong> Burpees, jumping jacks, bear crawls</li>
                        </ul>
                        <h3>Beginner 20-Minute Routine</h3>
                        <ol>
                            <li>Warm-up: 2 min jumping jacks</li>
                            <li>Push-ups: 3 sets of 8-12</li>
                            <li>Bodyweight squats: 3 sets of 15</li>
                            <li>Plank: 3 sets of 30 seconds</li>
                            <li>Lunges: 3 sets of 10 each leg</li>
                            <li>Cool-down: 3 min stretching</li>
                        </ol>
                        <h3>Free Resources</h3>
                        <ul>
                            <li>YouTube: FitnessBlender, THENX, Blogilates</li>
                            <li>Apps: Nike Training Club (free), FitOn</li>
                            <li>r/bodyweightfitness recommended routine</li>
                        </ul>
                        <div class="highlight">
                            <strong>Truth:</strong> You don't need a gym to get in shape. Consistency with bodyweight exercises will transform your health.
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
        },
        {
            id: 5,
            title: 'Navigating Healthcare',
            subtitle: 'Understanding the system and protecting your health',
            topics: [
                {
                    id: 'healthcare-system',
                    title: 'Understanding the Healthcare System',
                    content: `
                        <h2>Understanding the Healthcare System</h2>
                        <h3>Types of Healthcare Providers</h3>
                        <ul>
                            <li><strong>Primary Care (PCP):</strong> Your main doctor for checkups and referrals</li>
                            <li><strong>Specialists:</strong> Focused on specific areas (dermatology, cardiology)</li>
                            <li><strong>Urgent Care:</strong> For non-emergency issues outside business hours</li>
                            <li><strong>ER:</strong> True emergencies only (chest pain, severe injury, breathing issues)</li>
                            <li><strong>Telehealth:</strong> Virtual visits — often cheaper and faster</li>
                        </ul>
                        <h3>When to Go Where</h3>
                        <ul>
                            <li><strong>PCP:</strong> Annual checkups, ongoing health concerns, prescriptions</li>
                            <li><strong>Urgent Care:</strong> Sprains, minor cuts, flu symptoms, UTIs ($50-200)</li>
                            <li><strong>ER:</strong> Chest pain, severe bleeding, stroke symptoms, broken bones ($1,000-5,000+)</li>
                            <li><strong>Telehealth:</strong> Colds, rashes, mental health, medication refills ($0-75)</li>
                        </ul>
                        <h3>Preventive Care (Usually Free)</h3>
                        <ul>
                            <li>Annual physical exam</li>
                            <li>Blood pressure and cholesterol screening</li>
                            <li>Diabetes screening</li>
                            <li>Cancer screenings (by age)</li>
                            <li>Vaccinations</li>
                            <li>Mental health screening</li>
                        </ul>
                        <div class="highlight">
                            <strong>Pro Tip:</strong> Most insurance plans cover preventive care at 100% (no cost to you). Use these benefits — catching problems early saves lives and money.
                        </div>
                    `
                },
                {
                    id: 'health-insurance-basics',
                    title: 'Health Insurance Essentials',
                    content: `
                        <h2>Health Insurance Essentials</h2>
                        <h3>Key Terms</h3>
                        <ul>
                            <li><strong>Premium:</strong> Monthly cost (what you pay to HAVE insurance)</li>
                            <li><strong>Deductible:</strong> What you pay before insurance kicks in</li>
                            <li><strong>Copay:</strong> Fixed amount per visit ($20-50 typical)</li>
                            <li><strong>Coinsurance:</strong> Your % after deductible (usually 20-30%)</li>
                            <li><strong>Out-of-Pocket Max:</strong> Most you'll pay in a year — then insurance covers 100%</li>
                        </ul>
                        <h3>Plan Types</h3>
                        <ul>
                            <li><strong>HMO:</strong> Must use network doctors, need PCP referrals, lower cost</li>
                            <li><strong>PPO:</strong> More flexibility to see specialists, higher cost</li>
                            <li><strong>HDHP:</strong> High deductible but can use HSA (tax savings)</li>
                        </ul>
                        <h3>How to Choose</h3>
                        <ul>
                            <li>Healthy and rarely see doctors? → HDHP with HSA</li>
                            <li>Regular medications or conditions? → PPO or HMO</li>
                            <li>Want lowest monthly cost? → HDHP</li>
                            <li>Want predictable costs? → HMO with copays</li>
                        </ul>
                        <h3>If You Don't Have Insurance</h3>
                        <ul>
                            <li>HealthCare.gov marketplace (may qualify for subsidies)</li>
                            <li>Medicaid (income-based, free or very low cost)</li>
                            <li>Community health centers (sliding scale fees)</li>
                            <li>Covered California (state marketplace)</li>
                        </ul>
                        <div class="highlight">
                            <strong>Critical:</strong> Medical bills are the #1 cause of bankruptcy. Health insurance isn't optional — it's financial protection.
                        </div>
                    `
                },
                {
                    id: 'managing-medical-costs',
                    title: 'Managing Medical Costs',
                    content: `
                        <h2>Managing Medical Costs</h2>
                        <h3>Before Treatment</h3>
                        <ul>
                            <li>Ask: "Is this covered by my insurance?"</li>
                            <li>Request cost estimates in advance</li>
                            <li>Compare prices (same procedure varies 5-10x between providers)</li>
                            <li>Use GoodRx for prescription discounts</li>
                            <li>Ask for generic medications (same drug, fraction of cost)</li>
                        </ul>
                        <h3>After Treatment</h3>
                        <ul>
                            <li>Review itemized bills carefully for errors</li>
                            <li>Compare bill to your EOB (Explanation of Benefits)</li>
                            <li>Call billing department to negotiate</li>
                            <li>Ask about payment plans (often 0% interest)</li>
                            <li>Apply for financial assistance if needed</li>
                        </ul>
                        <h3>Cost-Saving Strategies</h3>
                        <ul>
                            <li><strong>Use HSA/FSA:</strong> Pay with pre-tax dollars (30% savings)</li>
                            <li><strong>Telehealth first:</strong> $0-75 vs $150+ in-office</li>
                            <li><strong>Preventive care:</strong> Usually 100% covered — use it!</li>
                            <li><strong>In-network only:</strong> Out-of-network costs can be 2-5x more</li>
                            <li><strong>Negotiate cash pay:</strong> Uninsured? Ask for cash discount (30-50% off)</li>
                        </ul>
                        <div class="highlight">
                            <strong>Always Ask:</strong> "Is there a less expensive alternative?" and "Do you offer a cash-pay discount?" These two questions can save thousands.
                        </div>
                    `
                }
            ],
            quiz: {
                questions: [
                    {
                        question: 'When should you go to the ER vs. urgent care?',
                        options: ['ER for everything', 'ER for true emergencies (chest pain, severe injury); urgent care for non-emergency issues', 'Urgent care for everything', 'It doesn\'t matter'],
                        correct: 1,
                        explanation: 'The ER is for life-threatening emergencies. Urgent care handles non-emergency issues at a fraction of the cost ($50-200 vs $1,000-5,000+).'
                    },
                    {
                        question: 'What is an "out-of-pocket maximum"?',
                        options: ['The minimum you must pay', 'The most you\'ll pay in a year — then insurance covers 100%', 'Your monthly premium', 'The amount your employer pays'],
                        correct: 1,
                        explanation: 'The out-of-pocket maximum is your safety net — once you hit this amount in a year, insurance covers everything at 100%.'
                    },
                    {
                        question: 'What is the easiest way to save money on prescriptions?',
                        options: ['Skip medications', 'Ask for generic versions and use GoodRx', 'Order from overseas', 'Only take half the dose'],
                        correct: 1,
                        explanation: 'Generic medications have the same active ingredients as brand-name drugs at a fraction of the cost. GoodRx can save 50-80% at the pharmacy.'
                    }
                ]
            }
        }
    ]
};
