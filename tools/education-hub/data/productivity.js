// Productivity & Focus Curriculum Data
const productivityData = {
    id: 'productivity',
    title: 'Productivity & Focus',
    icon: '🎯',
    description: 'Build systems that actually work for your brain, especially if traditional advice hasn\'t helped.',
    graduationGoal: 'Have systems that actually work for your brain',
    difficulty: 'beginner',
    prerequisites: [],
    learningObjectives: [
        'Build productivity systems that work for your brain',
        'Master time management and prioritization',
        'Overcome procrastination and build focus',
        'Use tools and techniques effectively',
        'Create sustainable productivity habits'
    ],
    relatedTracks: ['communication', 'career', 'emotionaliq'],
    resources: [
        { title: 'Getting Things Done', url: 'https://gettingthingsdone.com/' }
    ],
    levels: [
        {
            id: 1,
            title: 'Understanding Your Brain',
            subtitle: 'Why traditional productivity advice may not work for you',
            topics: [
                {
                    id: 'brain-differences',
                    title: 'How Different Brains Work',
                    content: `
                        <h2>How Different Brains Work</h2>
                        <h3>Why "Just Do It" Doesn't Work</h3>
                        <p>Traditional productivity advice assumes everyone's brain works the same way. It doesn't.</p>
                        <ul>
                            <li>Some brains need urgency to activate</li>
                            <li>Some brains struggle with dopamine regulation</li>
                            <li>Some brains have difficulty with time blindness</li>
                            <li>Some brains need external structure</li>
                        </ul>
                        <h3>ADHD-Friendly Principles</h3>
                        <ul>
                            <li><strong>External accountability:</strong> Deadlines, body doubling, commitments</li>
                            <li><strong>Interest-based motivation:</strong> Novelty, urgency, challenge, passion</li>
                            <li><strong>Visual systems:</strong> If you can't see it, it doesn't exist</li>
                            <li><strong>Lower activation energy:</strong> Make starting easier</li>
                            <li><strong>Forgiveness:</strong> Systems fail—restart without guilt</li>
                        </ul>
                        <h3>Work WITH Your Brain</h3>
                        <ul>
                            <li>Identify when you have energy (morning? night?)</li>
                            <li>Notice what conditions help you focus</li>
                            <li>Accept that some days will be harder</li>
                            <li>Build systems that don't rely on willpower</li>
                        </ul>
                        <div class="highlight">
                            <strong>Key Mindset:</strong> You're not broken. You just need different tools than what's commonly taught.
                        </div>
                    `
                },
                {
                    id: 'energy-management',
                    title: 'Energy Management',
                    content: `
                        <h2>Energy Management</h2>
                        <h3>Energy vs Time Management</h3>
                        <p>Managing time is useless if you have no energy. Energy is the foundation.</p>
                        <h3>The Four Energy Types</h3>
                        <ul>
                            <li><strong>Physical:</strong> Sleep, nutrition, movement</li>
                            <li><strong>Emotional:</strong> Stress, relationships, self-care</li>
                            <li><strong>Mental:</strong> Focus capacity, cognitive load</li>
                            <li><strong>Spiritual:</strong> Purpose, meaning, alignment</li>
                        </ul>
                        <h3>Energy Drains</h3>
                        <ul>
                            <li>Poor sleep (most impactful)</li>
                            <li>Decision fatigue</li>
                            <li>Context switching</li>
                            <li>Unresolved stress</li>
                            <li>Physical inactivity</li>
                        </ul>
                        <h3>Energy Boosters</h3>
                        <ul>
                            <li>7-9 hours of sleep (non-negotiable)</li>
                            <li>Movement (even 10 min walk)</li>
                            <li>Breaks every 90 minutes</li>
                            <li>Time in nature</li>
                            <li>Social connection</li>
                        </ul>
                        <div class="highlight">
                            <strong>Priority #1:</strong> Fix your sleep. Everything else is 10x harder when you're tired. Sleep is the foundation of productivity.
                        </div>
                    `
                }
            ],
            quiz: [
                {
                    question: 'Why doesn\'t "just do it" work for everyone?',
                    options: [
                        'Some people are lazy',
                        'Different brains have different dopamine and motivation systems',
                        'It only works for simple tasks',
                        'People don\'t want to succeed'
                    ],
                    correct: 1,
                    explanation: 'Brains differ in dopamine regulation, time perception, and activation energy. What feels easy for one person can be genuinely difficult for another\'s brain wiring.'
                },
                {
                    question: 'What should be fixed FIRST for better productivity?',
                    options: ['Time management', 'Sleep', 'To-do apps', 'Morning routine'],
                    correct: 1,
                    explanation: 'Sleep is the foundation. When tired, focus, decision-making, and willpower all suffer. Fix sleep before optimizing anything else.'
                }
            ]
        },
        {
            id: 2,
            title: 'Task Management Systems',
            subtitle: 'Capture, organize, and actually do your tasks',
            topics: [
                {
                    id: 'capture-system',
                    title: 'The Capture Habit',
                    content: `
                        <h2>The Capture Habit</h2>
                        <h3>Why Capture Matters</h3>
                        <p>Your brain is for having ideas, not holding them. If you try to remember everything, you'll:</p>
                        <ul>
                            <li>Forget important things</li>
                            <li>Feel anxious about what you might be forgetting</li>
                            <li>Waste mental energy on remembering</li>
                        </ul>
                        <h3>The Two-Minute Rule</h3>
                        <p>If something takes less than 2 minutes, do it now. Otherwise, capture it.</p>
                        <h3>Capture Tools</h3>
                        <ul>
                            <li><strong>Simple:</strong> Notes app on phone</li>
                            <li><strong>Voice:</strong> Voice memos for ideas on the go</li>
                            <li><strong>Paper:</strong> Pocket notebook</li>
                            <li><strong>Apps:</strong> Todoist, Things, Apple Reminders</li>
                        </ul>
                        <h3>Capture Everything</h3>
                        <ul>
                            <li>Tasks and to-dos</li>
                            <li>Ideas and thoughts</li>
                            <li>Commitments you've made</li>
                            <li>Things you're waiting on</li>
                            <li>Someday/maybe items</li>
                        </ul>
                        <div class="highlight">
                            <strong>Key:</strong> One capture location you always have with you. If you have to think about where to put something, you won't do it.
                        </div>
                    `
                },
                {
                    id: 'organizing-tasks',
                    title: 'Organizing Your Tasks',
                    content: `
                        <h2>Organizing Your Tasks</h2>
                        <h3>Keep It Simple</h3>
                        <p>Complex systems fail. Start with:</p>
                        <ul>
                            <li><strong>Inbox:</strong> Where everything lands first</li>
                            <li><strong>Today:</strong> What you'll actually do today (max 3-5)</li>
                            <li><strong>This Week:</strong> Coming up soon</li>
                            <li><strong>Someday:</strong> Ideas, not commitments</li>
                        </ul>
                        <h3>Daily Review (5 minutes)</h3>
                        <ol>
                            <li>Check calendar for appointments</li>
                            <li>Review today's tasks</li>
                            <li>Move items from inbox to proper list</li>
                            <li>Identify your ONE most important task</li>
                        </ol>
                        <h3>Weekly Review (30 minutes)</h3>
                        <ol>
                            <li>Process all inboxes to zero</li>
                            <li>Review last week's tasks</li>
                            <li>Check calendar for upcoming week</li>
                            <li>Identify 3-5 priorities for the week</li>
                            <li>Clear your head—capture anything missed</li>
                        </ol>
                        <div class="highlight">
                            <strong>MIT (Most Important Task):</strong> Each day, identify ONE thing that would make the day successful. Do that first.
                        </div>
                    `
                },
                {
                    id: 'prioritization',
                    title: 'Prioritization Methods',
                    content: `
                        <h2>Prioritization Methods</h2>
                        <h3>The Eisenhower Matrix</h3>
                        <ul>
                            <li><strong>Urgent + Important:</strong> Do now (crises, deadlines)</li>
                            <li><strong>Important, Not Urgent:</strong> Schedule (planning, growth)</li>
                            <li><strong>Urgent, Not Important:</strong> Delegate or minimize</li>
                            <li><strong>Neither:</strong> Eliminate (time wasters)</li>
                        </ul>
                        <h3>1-3-5 Rule</h3>
                        <p>Each day, plan to accomplish:</p>
                        <ul>
                            <li>1 big thing</li>
                            <li>3 medium things</li>
                            <li>5 small things</li>
                        </ul>
                        <h3>Eat the Frog</h3>
                        <p>Do your hardest, most important task first thing in the morning. Everything else feels easier after.</p>
                        <h3>For ADHD Brains</h3>
                        <p>Sometimes you need to:</p>
                        <ul>
                            <li>Start with something easy to build momentum</li>
                            <li>Follow your interest (motivation is precious)</li>
                            <li>Use urgency intentionally (artificial deadlines)</li>
                        </ul>
                        <div class="highlight">
                            <strong>Experiment:</strong> Try different methods. What works for others may not work for you. Find YOUR pattern.
                        </div>
                    `
                }
            ],
            quiz: [
                {
                    question: 'What is the Two-Minute Rule?',
                    options: [
                        'Only work for 2 minutes at a time',
                        'If a task takes less than 2 minutes, do it now instead of adding to your list',
                        'Review your tasks every 2 minutes',
                        'Take 2-minute breaks'
                    ],
                    correct: 1,
                    explanation: 'The Two-Minute Rule says if something takes less than 2 minutes to complete, do it immediately rather than adding it to your task list where it creates overhead.'
                },
                {
                    question: 'What is an MIT in productivity terms?',
                    options: [
                        'The university',
                        'Most Important Task - the one thing that makes your day successful',
                        'Minimum Input Task',
                        'Meeting In Time'
                    ],
                    correct: 1,
                    explanation: 'MIT stands for Most Important Task—identifying the ONE thing that would make today a success. Complete this before anything else.'
                }
            ]
        },
        {
            id: 3,
            title: 'Time Blocking & Scheduling',
            subtitle: 'Making time for what matters',
            topics: [
                {
                    id: 'time-blocking',
                    title: 'Time Blocking Basics',
                    content: `
                        <h2>Time Blocking Basics</h2>
                        <div class="definition">
                            <strong>Time Blocking:</strong> Scheduling specific blocks of time for specific tasks, rather than working from a list.
                        </div>
                        <h3>Why Time Blocking Works</h3>
                        <ul>
                            <li>Tasks expand to fill available time (Parkinson's Law)</li>
                            <li>Provides structure and accountability</li>
                            <li>Reduces decision fatigue</li>
                            <li>Creates realistic view of available time</li>
                        </ul>
                        <h3>How to Time Block</h3>
                        <ol>
                            <li>List tasks you need to accomplish</li>
                            <li>Estimate time for each (then add 50%)</li>
                            <li>Block time on calendar for each task</li>
                            <li>Protect those blocks—treat like meetings</li>
                        </ol>
                        <h3>Sample Day Structure</h3>
                        <div class="example">
                            8-10am: Deep work (most important task)<br>
                            10-10:30am: Email/messages<br>
                            10:30-12pm: Project work<br>
                            12-1pm: Lunch break (actually take it!)<br>
                            1-3pm: Meetings/collaboration<br>
                            3-4pm: Admin tasks<br>
                            4-5pm: Planning tomorrow
                        </div>
                        <div class="highlight">
                            <strong>Key:</strong> Time blocking shows you the truth about how much time you actually have. You can't fit 12 hours of work into 8 hours.
                        </div>
                    `
                },
                {
                    id: 'deep-work',
                    title: 'Deep Work Sessions',
                    content: `
                        <h2>Deep Work Sessions</h2>
                        <div class="definition">
                            <strong>Deep Work:</strong> Focused, uninterrupted work on cognitively demanding tasks that create real value.
                        </div>
                        <h3>Deep Work Rules</h3>
                        <ul>
                            <li>Schedule it (don't hope for it)</li>
                            <li>Eliminate distractions (phone away, notifications off)</li>
                            <li>One task only (no multitasking)</li>
                            <li>Set a clear goal for the session</li>
                            <li>Time-box it (90-120 min max)</li>
                        </ul>
                        <h3>Creating a Deep Work Environment</h3>
                        <ul>
                            <li>Phone in another room or Do Not Disturb</li>
                            <li>Close email and Slack</li>
                            <li>Noise-canceling headphones or background music</li>
                            <li>Clear workspace</li>
                            <li>Water/coffee ready (no excuses to get up)</li>
                        </ul>
                        <h3>For Distraction-Prone Brains</h3>
                        <ul>
                            <li>Website blockers (Freedom, Cold Turkey)</li>
                            <li>Body doubling (work alongside someone)</li>
                            <li>Pomodoro technique (25 min on, 5 min break)</li>
                            <li>External accountability (tell someone your goal)</li>
                        </ul>
                        <div class="highlight">
                            <strong>Start Small:</strong> Even 30 minutes of true deep work is valuable. Build up gradually.
                        </div>
                    `
                },
                {
                    id: 'batching',
                    title: 'Task Batching',
                    content: `
                        <h2>Task Batching</h2>
                        <div class="definition">
                            <strong>Batching:</strong> Grouping similar tasks together to minimize context switching.
                        </div>
                        <h3>Why Batching Works</h3>
                        <ul>
                            <li>Context switching costs 23 minutes per switch</li>
                            <li>Similar tasks use the same mental mode</li>
                            <li>Reduces decision fatigue</li>
                            <li>Creates flow state</li>
                        </ul>
                        <h3>What to Batch</h3>
                        <ul>
                            <li><strong>Email:</strong> 2-3 times per day, not constantly</li>
                            <li><strong>Calls:</strong> Back-to-back call blocks</li>
                            <li><strong>Admin:</strong> Expense reports, invoices, paperwork</li>
                            <li><strong>Errands:</strong> All in one trip</li>
                            <li><strong>Content:</strong> Write/create in batches</li>
                        </ul>
                        <h3>Theme Days</h3>
                        <div class="example">
                            Monday: Meetings/planning<br>
                            Tuesday: Deep work<br>
                            Wednesday: Meetings/collaboration<br>
                            Thursday: Deep work<br>
                            Friday: Admin, review, planning next week
                        </div>
                        <div class="highlight">
                            <strong>Email Tip:</strong> Checking email constantly is the #1 productivity killer. Check 2-3 times per day at set times.
                        </div>
                    `
                }
            ],
            quiz: [
                {
                    question: 'What is Parkinson\'s Law?',
                    options: [
                        'Work should be done quickly',
                        'Tasks expand to fill the time available',
                        'Always park your work early',
                        'Take frequent breaks'
                    ],
                    correct: 1,
                    explanation: 'Parkinson\'s Law states that work expands to fill the time available. This is why time blocking works—it constrains how long you spend on tasks.'
                },
                {
                    question: 'How long does it take to refocus after a context switch?',
                    options: ['2 minutes', '5 minutes', '23 minutes', '1 hour'],
                    correct: 2,
                    explanation: 'Research shows it takes about 23 minutes to fully refocus after an interruption or task switch. This is why batching similar tasks is so valuable.'
                }
            ]
        },
        {
            id: 4,
            title: 'Environment & Habits',
            subtitle: 'Setting yourself up for success',
            topics: [
                {
                    id: 'environment-design',
                    title: 'Designing Your Environment',
                    content: `
                        <h2>Designing Your Environment</h2>
                        <h3>Environment > Willpower</h3>
                        <p>It's easier to change your environment than to rely on willpower. Design your space to make the right behavior automatic.</p>
                        <h3>Reduce Friction for Good Behaviors</h3>
                        <ul>
                            <li>Want to read? Put book on pillow</li>
                            <li>Want to exercise? Sleep in workout clothes</li>
                            <li>Want to work? Have dedicated space</li>
                            <li>Want to eat healthy? Pre-prep meals</li>
                        </ul>
                        <h3>Add Friction for Bad Behaviors</h3>
                        <ul>
                            <li>Phone addiction? Keep it in another room</li>
                            <li>Snacking? Don't keep junk food at home</li>
                            <li>Social media? Log out, delete apps</li>
                            <li>Oversleeping? Alarm across the room</li>
                        </ul>
                        <h3>Workspace Optimization</h3>
                        <ul>
                            <li>Clear desk = clear mind</li>
                            <li>Everything you need within reach</li>
                            <li>Nothing distracting in view</li>
                            <li>Good lighting and temperature</li>
                            <li>Designated work zone (not your bed)</li>
                        </ul>
                        <div class="highlight">
                            <strong>Key Insight:</strong> You're not lazy. You're just fighting an environment designed for distraction. Redesign your environment to make success the default.
                        </div>
                    `
                },
                {
                    id: 'habit-building',
                    title: 'Building Habits That Stick',
                    content: `
                        <h2>Building Habits That Stick</h2>
                        <h3>The Habit Loop</h3>
                        <ul>
                            <li><strong>Cue:</strong> What triggers the behavior</li>
                            <li><strong>Routine:</strong> The behavior itself</li>
                            <li><strong>Reward:</strong> The benefit you get</li>
                        </ul>
                        <h3>Habit Stacking</h3>
                        <p>Attach new habits to existing ones:</p>
                        <div class="example">
                            "After I [existing habit], I will [new habit]"<br><br>
                            After I pour my coffee, I will review my tasks<br>
                            After I sit at my desk, I will put my phone away<br>
                            After I brush my teeth, I will read for 5 minutes
                        </div>
                        <h3>Start Stupidly Small</h3>
                        <ul>
                            <li>Want to exercise? Start with 2 minutes</li>
                            <li>Want to meditate? Start with 1 minute</li>
                            <li>Want to journal? Start with 1 sentence</li>
                        </ul>
                        <p>The goal is showing up. You can't improve a habit you don't have.</p>
                        <h3>Track It</h3>
                        <ul>
                            <li>Simple habit tracker (paper or app)</li>
                            <li>Don't break the chain (visual streak)</li>
                            <li>Review weekly what's working</li>
                        </ul>
                        <div class="highlight">
                            <strong>Two-Day Rule:</strong> Never miss twice. Missing once is an accident. Missing twice is the start of a new (bad) habit.
                        </div>
                    `
                },
                {
                    id: 'routines',
                    title: 'Morning and Evening Routines',
                    content: `
                        <h2>Morning and Evening Routines</h2>
                        <h3>Why Routines Matter</h3>
                        <ul>
                            <li>Reduce decision fatigue</li>
                            <li>Start/end day intentionally</li>
                            <li>Build momentum automatically</li>
                            <li>Protect important habits</li>
                        </ul>
                        <h3>Morning Routine Elements</h3>
                        <ul>
                            <li>No phone for first 30 minutes</li>
                            <li>Hydration (water first)</li>
                            <li>Movement (even light stretching)</li>
                            <li>Intention setting (what's today's goal?)</li>
                            <li>Hardest task early (eat the frog)</li>
                        </ul>
                        <h3>Evening Routine Elements</h3>
                        <ul>
                            <li>Plan tomorrow (5 min)</li>
                            <li>Process inbox/clear desk</li>
                            <li>Screen cutoff (1 hour before bed)</li>
                            <li>Wind-down activity (reading, stretching)</li>
                            <li>Consistent bedtime</li>
                        </ul>
                        <h3>Keep It Realistic</h3>
                        <p>A 2-hour morning routine sounds nice but probably won't happen. Start with 15-30 minutes.</p>
                        <div class="highlight">
                            <strong>Win Your Morning:</strong> How you start your day often determines how it goes. Even a small, consistent routine creates momentum.
                        </div>
                    `
                }
            ],
            quiz: [
                {
                    question: 'What is the most effective way to build a new habit?',
                    options: [
                        'Commit to doing it perfectly every day',
                        'Start stupidly small and stack it onto existing habits',
                        'Wait until you feel motivated',
                        'Tell everyone about your plans'
                    ],
                    correct: 1,
                    explanation: 'Starting small (2 minutes) and attaching to existing habits creates a success spiral. You can\'t improve a habit you don\'t have—first build consistency.'
                },
                {
                    question: 'What is the Two-Day Rule for habits?',
                    options: [
                        'Do habits every two days',
                        'Never miss a habit twice in a row',
                        'Build two habits at a time',
                        'Review habits every two days'
                    ],
                    correct: 1,
                    explanation: 'Never miss twice. Missing once is an accident, but missing twice starts a new (bad) pattern. Get back on track immediately.'
                }
            ]
        },
        {
            id: 5,
            title: 'Maintaining Momentum',
            subtitle: 'Long-term productivity and avoiding burnout',
            topics: [
                {
                    id: 'accountability',
                    title: 'Accountability Systems',
                    content: `
                        <h2>Accountability Systems</h2>
                        <h3>Why We Need External Accountability</h3>
                        <p>Self-accountability is hard. External accountability works because:</p>
                        <ul>
                            <li>We don't want to let others down</li>
                            <li>Public commitment creates pressure</li>
                            <li>Others notice when we slip</li>
                            <li>It creates urgency (someone's waiting)</li>
                        </ul>
                        <h3>Types of Accountability</h3>
                        <ul>
                            <li><strong>Accountability partner:</strong> Regular check-ins with someone</li>
                            <li><strong>Body doubling:</strong> Working alongside someone (even virtually)</li>
                            <li><strong>Public commitment:</strong> Telling others your goals</li>
                            <li><strong>Coaches/groups:</strong> Paid accountability</li>
                            <li><strong>Deadlines:</strong> External commitments to deliver</li>
                        </ul>
                        <h3>Finding an Accountability Partner</h3>
                        <ul>
                            <li>Someone with similar goals</li>
                            <li>Regular check-ins (daily or weekly)</li>
                            <li>Honest but supportive feedback</li>
                            <li>Not too close (friends may let you off easy)</li>
                        </ul>
                        <h3>Virtual Co-Working</h3>
                        <ul>
                            <li>Focusmate (matching service)</li>
                            <li>Discord productivity servers</li>
                            <li>Study streams on YouTube</li>
                            <li>Working on video call with friends</li>
                        </ul>
                        <div class="highlight">
                            <strong>The Power of "Someone's Watching":</strong> Just having someone else present—even virtually—can dramatically increase focus and follow-through.
                        </div>
                    `
                },
                {
                    id: 'recovery-restart',
                    title: 'Recovery and Restarts',
                    content: `
                        <h2>Recovery and Restarts</h2>
                        <h3>Systems Will Fail</h3>
                        <p>This is normal. Life happens. The goal isn't perfection—it's:</p>
                        <ul>
                            <li>Noticing when you've fallen off</li>
                            <li>Restarting without guilt</li>
                            <li>Learning what caused the slip</li>
                            <li>Adjusting the system if needed</li>
                        </ul>
                        <h3>Signs You Need Recovery</h3>
                        <ul>
                            <li>Constant exhaustion</li>
                            <li>Dreading work you used to enjoy</li>
                            <li>Declining quality of work</li>
                            <li>Physical symptoms (headaches, tension)</li>
                            <li>Irritability and emotional volatility</li>
                        </ul>
                        <h3>How to Restart</h3>
                        <ol>
                            <li><strong>Forgive yourself:</strong> Guilt wastes energy</li>
                            <li><strong>Start small:</strong> Don't try to catch up all at once</li>
                            <li><strong>Pick ONE thing:</strong> What's most important right now?</li>
                            <li><strong>Reduce scope:</strong> Temporarily lower expectations</li>
                            <li><strong>Rebuild gradually:</strong> Add habits back slowly</li>
                        </ol>
                        <div class="highlight">
                            <strong>Remember:</strong> Every expert has restarted countless times. The difference is they restart without making it mean something about themselves.
                        </div>
                    `
                },
                {
                    id: 'sustainable-productivity',
                    title: 'Sustainable Productivity',
                    content: `
                        <h2>Sustainable Productivity</h2>
                        <h3>The Productivity Trap</h3>
                        <p>Being productive is not the goal. Living a good life is the goal. Productivity is just a tool.</p>
                        <h3>Signs of Unsustainable Productivity</h3>
                        <ul>
                            <li>Never feeling "done"</li>
                            <li>Guilt when resting</li>
                            <li>Sacrificing health, relationships</li>
                            <li>Optimization addiction</li>
                            <li>Burnout cycles</li>
                        </ul>
                        <h3>Sustainable Practices</h3>
                        <ul>
                            <li><strong>Rest without guilt:</strong> Rest is productive</li>
                            <li><strong>Good enough:</strong> Done is better than perfect</li>
                            <li><strong>Boundaries:</strong> Protect personal time</li>
                            <li><strong>Buffer time:</strong> Don't schedule 100% of capacity</li>
                            <li><strong>Regular breaks:</strong> Weekly, quarterly, annually</li>
                        </ul>
                        <h3>What Actually Matters</h3>
                        <p>Ask: "Am I optimizing for what matters, or just optimizing?"</p>
                        <ul>
                            <li>Health and wellbeing</li>
                            <li>Relationships</li>
                            <li>Meaningful work</li>
                            <li>Joy and play</li>
                            <li>Growth and learning</li>
                        </ul>
                        <div class="highlight">
                            <strong>Final Wisdom:</strong> The best productivity system is one you actually use consistently. Simple and sustainable beats complex and abandoned.
                        </div>
                    `
                }
            ],
            quiz: [
                {
                    question: 'What is body doubling?',
                    options: [
                        'Working twice as hard',
                        'Working alongside someone (even virtually) for accountability',
                        'Having a backup person for tasks',
                        'Doing two tasks at once'
                    ],
                    correct: 1,
                    explanation: 'Body doubling is working alongside someone else (in person or virtually) to increase focus and accountability. Just having someone present helps many people focus.'
                },
                {
                    question: 'What should you do when your productivity system fails?',
                    options: [
                        'Give up and accept you\'re not productive',
                        'Restart with a completely new system',
                        'Forgive yourself, start small, and rebuild gradually',
                        'Work twice as hard to catch up'
                    ],
                    correct: 2,
                    explanation: 'When systems fail, forgive yourself (guilt wastes energy), start small with ONE thing, and rebuild gradually. Trying to catch up all at once often leads to another failure.'
                },
                {
                    question: 'What is the ultimate goal of productivity?',
                    options: [
                        'Getting more done',
                        'Living a good life - productivity is just a tool',
                        'Impressing others',
                        'Never resting'
                    ],
                    correct: 1,
                    explanation: 'Productivity is a tool, not the goal. The goal is living a good life. Productivity should serve your wellbeing, relationships, and meaningful work—not replace them.'
                }
            ]
        }
    ]
};
