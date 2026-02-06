// Language Learning Curriculum Data
const languagelearningData = {
    id: 'languagelearning',
    title: 'Language Learning',
    icon: '🌍',
    description: 'Master the strategies and methods to learn any new language effectively.',
    graduationGoal: 'Develop a personalized language learning plan and reach conversational level',
    difficulty: 'beginner',
    prerequisites: [],
    learningObjectives: [
        'Develop effective language learning strategies',
        'Build vocabulary and grammar systematically',
        'Practice speaking and listening skills',
        'Use language learning tools and resources',
        'Reach conversational fluency in a new language'
    ],
    relatedTracks: ['travel', 'communication'],
    resources: [
        { title: 'Duolingo', url: 'https://www.duolingo.com/' },
        { title: 'FluentU', url: 'https://www.fluentu.com/' }
    ],
    levels: [
        {
            id: 1,
            title: 'Getting Started',
            subtitle: 'Why and how to begin learning a new language',
            topics: [
                {
                    id: 'why-learn-language',
                    title: 'Why Learn a New Language?',
                    content: `
                        <h2>Why Learn a New Language?</h2>
                        <p>Speaking more than one language opens doors that most people don't even know exist. It's one of the highest-ROI skills you can develop.</p>
                        <h3>Career Advantages</h3>
                        <ul>
                            <li><strong>Higher earning potential:</strong> Bilingual employees earn 5-20% more on average</li>
                            <li><strong>Global opportunities:</strong> Work internationally or with global companies</li>
                            <li><strong>Competitive edge:</strong> Stand out in job applications and business</li>
                            <li><strong>Entrepreneurship:</strong> Access new markets and customer bases</li>
                        </ul>
                        <h3>Cognitive Benefits</h3>
                        <ul>
                            <li>Improved memory and problem-solving ability</li>
                            <li>Better multitasking skills</li>
                            <li>Delayed onset of cognitive decline and dementia</li>
                            <li>Enhanced creativity and mental flexibility</li>
                        </ul>
                        <h3>Personal Growth</h3>
                        <ul>
                            <li>Deeper travel experiences and cultural connections</li>
                            <li>Access to literature, music, and media in their original language</li>
                            <li>Build relationships with people you couldn't communicate with before</li>
                            <li>Sense of achievement and confidence</li>
                        </ul>
                        <div class="highlight">
                            <strong>The best time to start:</strong> Right now. You don't need to move to another country or go back to school. Modern tools make it possible to learn from anywhere.
                        </div>
                    `,
                    quiz: {
                        question: 'On average, how much more do bilingual employees earn?',
                        options: ['1-2%', '5-20%', '50-75%', 'They earn less due to confusion'],
                        correct: 1
                    }
                },
                {
                    id: 'choosing-language',
                    title: 'Choosing Your Language',
                    content: `
                        <h2>Choosing Your Language</h2>
                        <p>The "best" language to learn is the one you'll actually stick with. Here's how to choose.</p>
                        <h3>Consider Your Goals</h3>
                        <ul>
                            <li><strong>Career focus:</strong> Spanish (Americas), Mandarin (business), French (diplomacy), German (engineering)</li>
                            <li><strong>Cultural connection:</strong> Language of your heritage or partner's family</li>
                            <li><strong>Travel:</strong> Language of places you want to visit</li>
                            <li><strong>Interest:</strong> Japanese (anime/gaming), Korean (K-pop/dramas), Italian (food/art)</li>
                        </ul>
                        <h3>Popular Languages by Usefulness</h3>
                        <ul>
                            <li><strong>Spanish:</strong> 500M+ speakers, hugely useful in the Americas. Relatively easy for English speakers.</li>
                            <li><strong>Mandarin Chinese:</strong> Most spoken language globally. Challenging but massive business value.</li>
                            <li><strong>French:</strong> Spoken across 5 continents. Diplomatic and cultural significance.</li>
                            <li><strong>Portuguese:</strong> Brazil's economy + growing African markets.</li>
                            <li><strong>Arabic:</strong> 300M+ speakers, high demand in government and business.</li>
                        </ul>
                        <h3>Difficulty for English Speakers</h3>
                        <ul>
                            <li><strong>Easiest (24-30 weeks):</strong> Spanish, French, Italian, Portuguese</li>
                            <li><strong>Medium (36-44 weeks):</strong> German, Indonesian, Swahili</li>
                            <li><strong>Hard (44-88 weeks):</strong> Mandarin, Japanese, Korean, Arabic</li>
                        </ul>
                    `,
                    quiz: {
                        question: 'Which languages are generally easiest for English speakers to learn?',
                        options: [
                            'Mandarin and Japanese',
                            'Spanish, French, Italian, and Portuguese',
                            'Arabic and Korean',
                            'All languages take the same time'
                        ],
                        correct: 1
                    }
                },
                {
                    id: 'learning-stages',
                    title: 'Stages of Language Learning',
                    content: `
                        <h2>Stages of Language Learning</h2>
                        <p>Language proficiency is measured using the CEFR framework (Common European Framework of Reference). Understanding the stages helps you set realistic goals.</p>
                        <h3>The Levels</h3>
                        <ul>
                            <li><strong>A1 - Beginner:</strong> Basic phrases, introductions, simple questions. "Where is the bathroom?"</li>
                            <li><strong>A2 - Elementary:</strong> Everyday situations, simple conversations, basic needs. "I'd like to order..."</li>
                            <li><strong>B1 - Intermediate:</strong> Handle most travel situations, express opinions, understand main points. Real conversations start here.</li>
                            <li><strong>B2 - Upper Intermediate:</strong> Fluent conversation, understand complex texts, work in the language. Most people's practical goal.</li>
                            <li><strong>C1 - Advanced:</strong> Near-native fluency, academic or professional use</li>
                            <li><strong>C2 - Mastery:</strong> Native-level command. Very few non-native speakers reach this.</li>
                        </ul>
                        <h3>Realistic Timelines</h3>
                        <p>With consistent daily practice (30-60 minutes):</p>
                        <ul>
                            <li><strong>A1-A2:</strong> 2-4 months</li>
                            <li><strong>B1:</strong> 6-12 months</li>
                            <li><strong>B2:</strong> 12-24 months</li>
                        </ul>
                        <div class="highlight">
                            <strong>Practical Goal:</strong> B1-B2 is where language becomes genuinely useful for travel, work, and relationships. You don't need to be "fluent" to benefit enormously.
                        </div>
                    `,
                    quiz: {
                        question: 'At which CEFR level can you handle most travel situations and have real conversations?',
                        options: ['A1', 'A2', 'B1', 'C2'],
                        correct: 2
                    }
                }
            ]
        },
        {
            id: 2,
            title: 'Effective Learning Methods',
            subtitle: 'Proven strategies and tools for faster language acquisition',
            topics: [
                {
                    id: 'daily-practice',
                    title: 'Building a Daily Practice',
                    content: `
                        <h2>Building a Daily Practice</h2>
                        <p>Consistency beats intensity. 15-30 minutes daily will always outperform 3-hour weekend cramming sessions.</p>
                        <h3>The Ideal Daily Routine</h3>
                        <ol>
                            <li><strong>5-10 min:</strong> Vocabulary review with spaced repetition (Anki flashcards)</li>
                            <li><strong>10-15 min:</strong> Listening practice (podcast, YouTube, or music in target language)</li>
                            <li><strong>5-10 min:</strong> Speaking practice (shadowing, conversation, or self-talk)</li>
                            <li><strong>Optional:</strong> Reading a short article or book chapter</li>
                        </ol>
                        <h3>The Power of Spaced Repetition</h3>
                        <p>Your brain forgets information on a predictable curve. Spaced repetition systems (SRS) like Anki show you vocabulary cards just before you'd forget them, making learning 3-5x more efficient than traditional studying.</p>
                        <h3>Making It a Habit</h3>
                        <ul>
                            <li><strong>Same time every day:</strong> Morning routines work best for most people</li>
                            <li><strong>Habit stack:</strong> "After my morning coffee, I do 10 minutes of Anki"</li>
                            <li><strong>Track streaks:</strong> Use an app or calendar to maintain your daily streak</li>
                            <li><strong>Lower the bar:</strong> On busy days, even 5 minutes counts. Never do zero.</li>
                        </ul>
                    `,
                    quiz: {
                        question: 'Why is spaced repetition more effective than traditional studying?',
                        options: [
                            'It uses more expensive textbooks',
                            'It shows you information just before you would forget it, fighting the forgetting curve',
                            'It requires studying for longer hours',
                            'It only works for certain languages'
                        ],
                        correct: 1
                    }
                },
                {
                    id: 'immersion-methods',
                    title: 'Immersion Without Moving Abroad',
                    content: `
                        <h2>Immersion Without Moving Abroad</h2>
                        <p>You don't need to move to another country to immerse yourself in a language. You can create an immersion environment anywhere.</p>
                        <h3>Passive Immersion</h3>
                        <ul>
                            <li><strong>Change your phone language:</strong> You already know where everything is — now learn it in your target language</li>
                            <li><strong>Listen to podcasts:</strong> Start with beginner podcasts, graduate to native content</li>
                            <li><strong>Watch shows/movies:</strong> Start with subtitles in your language, then switch to target language subtitles, then no subtitles</li>
                            <li><strong>Music:</strong> Look up lyrics and sing along — great for pronunciation</li>
                        </ul>
                        <h3>Active Immersion</h3>
                        <ul>
                            <li><strong>Language exchanges:</strong> Tandem, HelloTalk — chat with native speakers who want to learn English</li>
                            <li><strong>Online tutors:</strong> iTalki offers affordable sessions ($5-20/hour) with native speakers worldwide</li>
                            <li><strong>Local communities:</strong> Find meetups, cultural events, or conversation groups in your city</li>
                            <li><strong>Think in the language:</strong> Narrate your day to yourself in your target language</li>
                        </ul>
                        <h3>The Input Hypothesis</h3>
                        <p>Research shows the fastest way to acquire a language is through "comprehensible input" — content that's slightly above your current level. You should understand 70-80% and pick up the rest from context.</p>
                    `,
                    quiz: {
                        question: 'What is "comprehensible input" in language learning?',
                        options: [
                            'Only studying grammar rules from textbooks',
                            'Content slightly above your level where you understand 70-80% and pick up the rest from context',
                            'Memorizing entire dictionaries',
                            'Only listening to content you fully understand'
                        ],
                        correct: 1
                    }
                },
                {
                    id: 'apps-and-tools',
                    title: 'Best Apps & Tools',
                    content: `
                        <h2>Best Apps & Tools</h2>
                        <p>No single app will make you fluent, but the right combination can accelerate your learning dramatically.</p>
                        <h3>Vocabulary & Flashcards</h3>
                        <ul>
                            <li><strong>Anki:</strong> The gold standard for spaced repetition. Free on desktop, paid on iOS. Steep learning curve but incredibly effective.</li>
                            <li><strong>Memrise:</strong> Video clips of native speakers, more user-friendly than Anki</li>
                        </ul>
                        <h3>Structured Courses</h3>
                        <ul>
                            <li><strong>Duolingo:</strong> Gamified, good for beginners, free. Don't rely on it alone.</li>
                            <li><strong>Babbel:</strong> More structured and practical than Duolingo</li>
                            <li><strong>Pimsleur:</strong> Audio-based, excellent for pronunciation and conversational skills</li>
                        </ul>
                        <h3>Speaking Practice</h3>
                        <ul>
                            <li><strong>iTalki:</strong> Book sessions with native-speaking tutors. Best for structured conversation practice.</li>
                            <li><strong>Tandem / HelloTalk:</strong> Free language exchange with native speakers</li>
                            <li><strong>Speechling:</strong> Submit recordings and get feedback from native speakers</li>
                        </ul>
                        <h3>Reading & Listening</h3>
                        <ul>
                            <li><strong>LingQ:</strong> Import any content and it helps you look up words</li>
                            <li><strong>Podcasts:</strong> Coffee Break (beginner), News in Slow (intermediate)</li>
                            <li><strong>Netflix with Language Reactor:</strong> Chrome extension that shows dual subtitles</li>
                        </ul>
                        <div class="highlight">
                            <strong>Recommended Stack:</strong> Anki (vocabulary) + iTalki (speaking) + Podcasts/Netflix (listening) + one structured course. This covers all four skills: reading, writing, listening, speaking.
                        </div>
                    `,
                    quiz: {
                        question: 'What is the recommended combination of tools for language learning?',
                        options: [
                            'Just Duolingo is enough',
                            'Anki for vocabulary + iTalki for speaking + native content for listening',
                            'Only grammar textbooks',
                            'Only watching movies without any active study'
                        ],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 3,
            title: 'Reaching Fluency',
            subtitle: 'Breaking through plateaus and achieving real-world proficiency',
            topics: [
                {
                    id: 'speaking-confidence',
                    title: 'Speaking with Confidence',
                    content: `
                        <h2>Speaking with Confidence</h2>
                        <p>Speaking is the skill most learners struggle with — not because they lack knowledge, but because they fear mistakes. Speaking from day one, even imperfectly, is the fastest path to fluency.</p>
                        <h3>Overcoming Fear</h3>
                        <ul>
                            <li><strong>Accept mistakes:</strong> Native speakers make mistakes too. Errors are how you learn.</li>
                            <li><strong>People are kind:</strong> Most native speakers appreciate your effort, even if imperfect</li>
                            <li><strong>Start with low-stakes:</strong> Talk to yourself, then language partners, then native speakers</li>
                        </ul>
                        <h3>Techniques for Better Speaking</h3>
                        <ul>
                            <li><strong>Shadowing:</strong> Listen to a native speaker and repeat exactly what they say, matching their rhythm and intonation</li>
                            <li><strong>Self-talk:</strong> Narrate your daily activities in the target language</li>
                            <li><strong>Record yourself:</strong> Compare your pronunciation to native speakers</li>
                            <li><strong>Learn conversation starters:</strong> Master 20-30 phrases that cover 80% of basic conversations</li>
                        </ul>
                        <div class="highlight">
                            <strong>The 80/20 Rule:</strong> About 1,000 words cover 85% of daily conversation in most languages. Focus on the most common words first, not obscure vocabulary.
                        </div>
                    `,
                    quiz: {
                        question: 'What is "shadowing" in language learning?',
                        options: [
                            'Following a native speaker around all day',
                            'Listening to a native speaker and immediately repeating what they say',
                            'Reading a dictionary out loud',
                            'Writing down everything you hear'
                        ],
                        correct: 1
                    }
                },
                {
                    id: 'breaking-plateaus',
                    title: 'Breaking Through Plateaus',
                    content: `
                        <h2>Breaking Through Plateaus</h2>
                        <p>Every language learner hits a plateau — usually at the intermediate stage. Progress feels invisible, motivation drops, and you wonder if you'll ever improve. This is normal and temporary.</p>
                        <h3>The Intermediate Plateau</h3>
                        <p>You can handle basic conversations but struggle with complex topics, fast speech, or native media. This stage can last months if you don't change your approach.</p>
                        <h3>How to Break Through</h3>
                        <ul>
                            <li><strong>Increase difficulty:</strong> Switch from learner content to native content (even if you only understand 50%)</li>
                            <li><strong>Specialize:</strong> Learn vocabulary for topics you're passionate about</li>
                            <li><strong>Get corrected:</strong> Find a tutor who actively corrects your mistakes</li>
                            <li><strong>Read more:</strong> Reading exposes you to vocabulary and structures you won't hear in conversation</li>
                            <li><strong>Focus on output:</strong> Write journal entries, essays, or social media posts in the language</li>
                        </ul>
                        <h3>Measuring Progress</h3>
                        <ul>
                            <li>Record yourself speaking every month and compare</li>
                            <li>Track words known in your SRS app</li>
                            <li>Take official level tests periodically</li>
                            <li>Notice when native content gets easier</li>
                        </ul>
                    `,
                    quiz: {
                        question: 'What is the best way to break through an intermediate plateau?',
                        options: [
                            'Go back to beginner materials',
                            'Stop studying for a few months',
                            'Switch from learner content to native content and get active corrections',
                            'Only focus on grammar rules'
                        ],
                        correct: 2
                    }
                },
                {
                    id: 'maintaining-languages',
                    title: 'Maintaining Your Language Skills',
                    content: `
                        <h2>Maintaining Your Language Skills</h2>
                        <p>Language skills are "use it or lose it." Even after reaching a high level, you need regular exposure to maintain fluency.</p>
                        <h3>Low-Effort Maintenance</h3>
                        <ul>
                            <li><strong>Media consumption:</strong> Watch one show per week in the language</li>
                            <li><strong>Social media:</strong> Follow accounts that post in your target language</li>
                            <li><strong>Music:</strong> Create a playlist in the language</li>
                            <li><strong>News:</strong> Read headlines or listen to news podcasts</li>
                        </ul>
                        <h3>Active Maintenance</h3>
                        <ul>
                            <li><strong>Weekly conversation:</strong> Even one 30-minute session keeps speaking skills alive</li>
                            <li><strong>Anki reviews:</strong> 5-10 minutes daily to maintain vocabulary</li>
                            <li><strong>Travel:</strong> Visit a place where the language is spoken at least once a year</li>
                        </ul>
                        <h3>Learning a Third Language</h3>
                        <p>Once you've learned one foreign language, the next one is significantly easier. You've already developed the learning skills, and related languages share vocabulary and structure.</p>
                        <div class="highlight">
                            <strong>Polyglot Tip:</strong> Spanish + Portuguese, or French + Italian share 80%+ vocabulary. Learning one makes the other dramatically easier.
                        </div>
                    `,
                    quiz: {
                        question: 'Why is learning a third language easier than learning a second?',
                        options: [
                            'Your brain gets bigger',
                            'You have already developed the learning skills, and related languages share vocabulary',
                            'Third languages are always simpler',
                            'It takes the same effort regardless'
                        ],
                        correct: 1
                    }
                }
            ]
        }
    ],
    finalExam: [
        {
            question: 'What cognitive benefit is associated with bilingualism?',
            options: ['Decreased memory', 'Delayed onset of cognitive decline', 'Reduced creativity', 'Slower problem-solving'],
            correct: 1
        },
        {
            question: 'Which CEFR level represents functional fluency for most practical purposes?',
            options: ['A1', 'A2', 'B2', 'C2'],
            correct: 2
        },
        {
            question: 'What is spaced repetition?',
            options: ['Studying for hours at spaced intervals', 'A system that shows you information just before you would forget it', 'Repeating the same word 100 times', 'A type of language course'],
            correct: 1
        },
        {
            question: 'How can you create immersion without moving abroad?',
            options: ['You can\'t — moving abroad is required', 'Change phone language, watch shows, find language partners online', 'Only use textbooks and grammar drills', 'Wait until you are already fluent'],
            correct: 1
        },
        {
            question: 'About how many words cover 85% of daily conversation in most languages?',
            options: ['100 words', '1,000 words', '10,000 words', '50,000 words'],
            correct: 1
        },
        {
            question: 'What is the "comprehensible input" approach?',
            options: ['Only studying grammar', 'Consuming content slightly above your level where you understand 70-80%', 'Only listening to content you fully understand', 'Reading advanced academic papers from day one'],
            correct: 1
        },
        {
            question: 'What is the most effective daily time investment for consistent language progress?',
            options: ['5 hours per week on weekends', '15-30 minutes every single day', '1 hour once a month', '3 hours once a week'],
            correct: 1
        },
        {
            question: 'How do you maintain language skills long-term?',
            options: ['Stop studying once you reach fluency', 'Regular exposure through media, conversation, and review', 'Only practice during travel', 'Re-take beginner courses every year'],
            correct: 1
        }
    ]
};
