// Software Development Curriculum Data
const softwaredevData = {
    id: 'softwaredev',
    title: 'Software Development',
    icon: '💻',
    description: 'Learn the fundamentals of software engineering — problem-solving, collaboration, and building real systems.',
    graduationGoal: 'Think like a software engineer and build production-quality software',
    difficulty: 'intermediate',
    prerequisites: ['python', 'javascript'],
    learningObjectives: [
        'Apply software engineering principles and best practices',
        'Use version control (Git) and collaborate on code',
        'Write clean, maintainable, and testable code',
        'Design software architecture and systems',
        'Debug and troubleshoot effectively'
    ],
    relatedTracks: ['python', 'javascript', 'webdev', 'career'],
    resources: [
        { title: 'Git Documentation', url: 'https://git-scm.com/doc' },
        { title: 'Clean Code Principles', url: 'https://github.com/ryanmcdermott/clean-code-javascript' }
    ],
    levels: [
        {
            id: 1,
            title: 'Software Engineering Fundamentals',
            subtitle: 'How professional software is built',
            topics: [
                {
                    id: 'what-is-swe',
                    title: 'What is Software Engineering?',
                    content: `
                        <h2>What is Software Engineering?</h2>
                        <p>Software engineering is more than coding. It's the practice of designing, building, testing, and maintaining software systems that are reliable, scalable, and maintainable.</p>
                        <h3>Coding vs Engineering</h3>
                        <ul>
                            <li><strong>Coding:</strong> Writing code that works</li>
                            <li><strong>Engineering:</strong> Writing code that works, is maintainable, scales, is tested, handles errors, and can be understood by others</li>
                        </ul>
                        <h3>Career Outlook</h3>
                        <ul>
                            <li><strong>Median salary:</strong> $120K+ (one of the highest-paid professions)</li>
                            <li><strong>Remote-friendly:</strong> Many fully remote positions available</li>
                            <li><strong>Growth:</strong> 25% job growth projected over next decade</li>
                            <li><strong>No degree required:</strong> Skills and portfolio matter more than credentials</li>
                        </ul>
                        <h3>Software Development Lifecycle (SDLC)</h3>
                        <ol>
                            <li><strong>Requirements:</strong> What does the software need to do?</li>
                            <li><strong>Design:</strong> How will the system be structured?</li>
                            <li><strong>Implementation:</strong> Writing the code</li>
                            <li><strong>Testing:</strong> Verifying it works correctly</li>
                            <li><strong>Deployment:</strong> Releasing to users</li>
                            <li><strong>Maintenance:</strong> Bug fixes, updates, improvements</li>
                        </ol>
                    `,
                    quiz: {
                        question: 'What is the key difference between coding and software engineering?',
                        options: ['There is no difference', 'Engineering includes design, testing, scalability, and maintainability beyond just writing code', 'Coding pays more', 'Engineering doesn\'t involve any coding'],
                        correct: 1
                    }
                },
                {
                    id: 'problem-solving',
                    title: 'Problem-Solving & Algorithms',
                    content: `
                        <h2>Problem-Solving & Algorithms</h2>
                        <p>The most important skill in software development isn't knowing a language — it's knowing how to break down problems and design solutions.</p>
                        <h3>Problem-Solving Framework</h3>
                        <ol>
                            <li><strong>Understand:</strong> What is the problem? What are the inputs and expected outputs?</li>
                            <li><strong>Plan:</strong> Break the problem into smaller steps. Pseudocode first.</li>
                            <li><strong>Execute:</strong> Write the code, one step at a time.</li>
                            <li><strong>Review:</strong> Does it work? Can it be improved? Are there edge cases?</li>
                        </ol>
                        <h3>Key Data Structures</h3>
                        <ul>
                            <li><strong>Arrays/Lists:</strong> Ordered collection of items</li>
                            <li><strong>Hash Maps/Dictionaries:</strong> Key-value lookups in O(1) time</li>
                            <li><strong>Stacks:</strong> Last-in, first-out (undo functionality)</li>
                            <li><strong>Queues:</strong> First-in, first-out (processing tasks in order)</li>
                            <li><strong>Trees:</strong> Hierarchical data (file systems, DOM)</li>
                        </ul>
                        <h3>Big O Notation</h3>
                        <p>Measures how your code's performance scales with input size:</p>
                        <ul>
                            <li><strong>O(1):</strong> Constant — same speed regardless of input size</li>
                            <li><strong>O(n):</strong> Linear — doubles when input doubles</li>
                            <li><strong>O(n²):</strong> Quadratic — gets very slow with large inputs</li>
                        </ul>
                    `,
                    quiz: {
                        question: 'What does O(n) mean in Big O notation?',
                        options: ['The code runs in constant time', 'Performance scales linearly with input size', 'The code has n bugs', 'The code uses n variables'],
                        correct: 1
                    }
                },
                {
                    id: 'version-control',
                    title: 'Version Control with Git',
                    content: `
                        <h2>Version Control with Git</h2>
                        <p>Git tracks every change to your code, lets you collaborate with others, and prevents you from ever losing work.</p>
                        <h3>Essential Git Commands</h3>
                        <pre><code>git init                    # Start tracking a project
git add .                   # Stage all changes
git commit -m "message"     # Save a snapshot
git push origin main        # Upload to GitHub
git pull                    # Download latest changes
git branch feature-name     # Create a branch
git checkout feature-name   # Switch to branch
git merge feature-name      # Merge branch into current</code></pre>
                        <h3>Git Workflow</h3>
                        <ol>
                            <li>Create a branch for your feature or fix</li>
                            <li>Make changes and commit often (small, focused commits)</li>
                            <li>Push your branch and create a Pull Request</li>
                            <li>Team reviews your code</li>
                            <li>Merge into the main branch after approval</li>
                        </ol>
                        <h3>GitHub</h3>
                        <ul>
                            <li><strong>Repositories:</strong> Where your code lives online</li>
                            <li><strong>Pull Requests:</strong> Propose and review code changes</li>
                            <li><strong>Issues:</strong> Track bugs and feature requests</li>
                            <li><strong>Actions:</strong> Automate testing and deployment</li>
                        </ul>
                        <div class="highlight">
                            <strong>Career Impact:</strong> Your GitHub profile is your developer resume. Active repos with clean commit history show employers you can code, collaborate, and ship.
                        </div>
                    `,
                    quiz: {
                        question: 'What is the purpose of creating a branch in Git?',
                        options: ['To delete code', 'To work on a feature or fix without affecting the main codebase', 'To make the repository larger', 'To remove old commits'],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 2,
            title: 'Professional Practices',
            subtitle: 'Testing, clean code, and working on teams',
            topics: [
                {
                    id: 'clean-code',
                    title: 'Writing Clean Code',
                    content: `
                        <h2>Writing Clean Code</h2>
                        <p>Code is read far more often than it is written. Clean code is code that other developers (and future you) can understand quickly.</p>
                        <h3>Clean Code Principles</h3>
                        <ul>
                            <li><strong>Meaningful names:</strong> <code>calculateTotalPrice</code> not <code>calc</code>. <code>userAge</code> not <code>x</code>.</li>
                            <li><strong>Small functions:</strong> Each function does one thing. If it needs a comment to explain, it's too complex.</li>
                            <li><strong>DRY:</strong> Don't Repeat Yourself. If you copy-paste code, extract it into a function.</li>
                            <li><strong>KISS:</strong> Keep It Simple, Stupid. The simplest solution is usually the best.</li>
                            <li><strong>Consistent formatting:</strong> Use a linter/formatter (Prettier, ESLint, Black).</li>
                        </ul>
                        <h3>Code Comments</h3>
                        <ul>
                            <li>Good code is self-documenting through clear naming</li>
                            <li>Comment the WHY, not the WHAT</li>
                            <li>Bad: <code>// increment i</code></li>
                            <li>Good: <code>// Skip the header row in CSV data</code></li>
                        </ul>
                    `,
                    quiz: {
                        question: 'What should code comments explain?',
                        options: ['What the code does line by line', 'Why the code exists or why a decision was made', 'The programmer\'s name', 'Nothing — comments are unnecessary'],
                        correct: 1
                    }
                },
                {
                    id: 'testing',
                    title: 'Testing Your Code',
                    content: `
                        <h2>Testing Your Code</h2>
                        <p>Tests verify that your code works correctly and continues to work as you make changes. Professional software is always tested.</p>
                        <h3>Types of Tests</h3>
                        <ul>
                            <li><strong>Unit Tests:</strong> Test individual functions in isolation. "Does this function return the right value?"</li>
                            <li><strong>Integration Tests:</strong> Test how components work together. "Does the API return correct data from the database?"</li>
                            <li><strong>End-to-End (E2E) Tests:</strong> Test the full user flow. "Can a user sign up, log in, and place an order?"</li>
                        </ul>
                        <h3>Why Test?</h3>
                        <ul>
                            <li><strong>Catch bugs early:</strong> Before users find them</li>
                            <li><strong>Refactor safely:</strong> Change code confidently knowing tests will catch regressions</li>
                            <li><strong>Documentation:</strong> Tests describe what your code is supposed to do</li>
                            <li><strong>Professional requirement:</strong> Every serious company expects tested code</li>
                        </ul>
                        <h3>The Testing Pyramid</h3>
                        <p>Many unit tests (fast, cheap) → Some integration tests → Few E2E tests (slow, expensive)</p>
                    `,
                    quiz: {
                        question: 'What is the primary benefit of unit tests?',
                        options: ['They test the entire application', 'They verify individual functions work correctly in isolation', 'They replace the need for manual testing', 'They make code run faster'],
                        correct: 1
                    }
                },
                {
                    id: 'agile-teamwork',
                    title: 'Working on Teams (Agile)',
                    content: `
                        <h2>Working on Teams (Agile)</h2>
                        <p>Most software is built by teams. Agile is the dominant methodology for organizing software development work.</p>
                        <h3>Agile Basics</h3>
                        <ul>
                            <li><strong>Sprints:</strong> 1-2 week work cycles with defined goals</li>
                            <li><strong>Stand-ups:</strong> Brief daily meetings — what you did, what you'll do, any blockers</li>
                            <li><strong>Backlog:</strong> Prioritized list of features and tasks</li>
                            <li><strong>Retrospective:</strong> End-of-sprint reflection on what went well and what to improve</li>
                        </ul>
                        <h3>Code Reviews</h3>
                        <p>Before code is merged, team members review it. This catches bugs, shares knowledge, and maintains code quality.</p>
                        <ul>
                            <li>Be constructive and kind in reviews</li>
                            <li>Focus on logic, readability, and edge cases</li>
                            <li>Don't take review feedback personally — it makes you better</li>
                        </ul>
                        <h3>Communication Skills</h3>
                        <ul>
                            <li>Ask questions early — don't spend days stuck</li>
                            <li>Document decisions and trade-offs</li>
                            <li>Explain technical concepts clearly to non-technical stakeholders</li>
                        </ul>
                        <div class="highlight">
                            <strong>Career Truth:</strong> Communication and collaboration skills are as important as coding skills. The best engineers are great communicators.
                        </div>
                    `,
                    quiz: {
                        question: 'What is a sprint in Agile development?',
                        options: ['Running fast to finish code', 'A 1-2 week work cycle with defined goals', 'A type of programming language', 'A testing methodology'],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 3,
            title: 'Professional Software Engineering',
            subtitle: 'DevOps, system design, and career growth',
            topics: [
                {
                    id: 'devops-basics',
                    title: 'DevOps & CI/CD',
                    content: `
                        <h2>DevOps & CI/CD</h2>
                        <p>DevOps bridges the gap between writing code and running it in production. CI/CD automates the process of testing and deploying code.</p>
                        <h3>What is CI/CD?</h3>
                        <ul>
                            <li><strong>CI (Continuous Integration):</strong> Automatically run tests every time code is pushed. Catches bugs before they reach production.</li>
                            <li><strong>CD (Continuous Deployment):</strong> Automatically deploy code to production after tests pass. No manual deployment steps.</li>
                        </ul>
                        <h3>Popular CI/CD Tools</h3>
                        <ul>
                            <li><strong>GitHub Actions:</strong> Built into GitHub. Free for public repos. YAML-based configuration.</li>
                            <li><strong>GitLab CI:</strong> Built into GitLab with powerful pipeline features.</li>
                            <li><strong>Jenkins:</strong> Self-hosted, highly customizable. Industry standard for enterprises.</li>
                            <li><strong>Vercel/Netlify:</strong> Auto-deploy web apps on every push. Zero config.</li>
                        </ul>
                        <h3>Docker Basics</h3>
                        <p>Docker packages your app and its dependencies into a container that runs identically everywhere.</p>
                        <ul>
                            <li><strong>Dockerfile:</strong> Recipe for building your container image</li>
                            <li><strong>Image:</strong> A snapshot of your app + dependencies</li>
                            <li><strong>Container:</strong> A running instance of an image</li>
                            <li><strong>"Works on my machine":</strong> Docker eliminates this problem entirely</li>
                        </ul>
                        <div class="highlight">
                            <strong>Modern Workflow:</strong> Push code → CI runs tests → Tests pass → CD deploys to staging → QA approves → Deploy to production. All automated.
                        </div>
                    `,
                    quiz: {
                        question: 'What does CI (Continuous Integration) do?',
                        options: ['Deploys code directly to users', 'Automatically runs tests every time code is pushed', 'Designs user interfaces', 'Manages project deadlines'],
                        correct: 1
                    }
                },
                {
                    id: 'system-design',
                    title: 'System Design Basics',
                    content: `
                        <h2>System Design Basics</h2>
                        <p>System design is about building software that can handle growth — more users, more data, more complexity.</p>
                        <h3>Key Concepts</h3>
                        <ul>
                            <li><strong>Scalability:</strong> Can your system handle 10x users? Horizontal scaling (add more servers) vs. vertical (bigger server).</li>
                            <li><strong>Availability:</strong> Is your system always up? Measured in "nines" (99.9% = ~8.7 hours downtime/year).</li>
                            <li><strong>Latency:</strong> How fast does the system respond? Users notice anything over 200ms.</li>
                            <li><strong>Consistency:</strong> Does every user see the same data? Trade-offs between speed and accuracy.</li>
                        </ul>
                        <h3>Common Architecture Patterns</h3>
                        <ul>
                            <li><strong>Monolith:</strong> One application does everything. Simple to start, hard to scale. Good for MVPs.</li>
                            <li><strong>Microservices:</strong> Many small services that communicate. Complex but independently scalable.</li>
                            <li><strong>Serverless:</strong> Functions that run on-demand (AWS Lambda, Vercel). No server management. Pay per execution.</li>
                        </ul>
                        <h3>Databases</h3>
                        <ul>
                            <li><strong>SQL (PostgreSQL, MySQL):</strong> Structured data with relationships. Consistent and reliable.</li>
                            <li><strong>NoSQL (MongoDB, Firestore):</strong> Flexible schema. Great for rapid development and real-time data.</li>
                            <li><strong>Redis:</strong> In-memory cache. Blazing fast reads for frequently accessed data.</li>
                        </ul>
                    `,
                    quiz: {
                        question: 'What is horizontal scaling?',
                        options: ['Making the server wider', 'Adding more servers to handle increased load', 'Upgrading to a bigger server', 'Reducing the number of features'],
                        correct: 1
                    }
                },
                {
                    id: 'swe-career-growth',
                    title: 'Career Growth & Leveling Up',
                    content: `
                        <h2>Career Growth & Leveling Up</h2>
                        <h3>The Software Engineering Ladder</h3>
                        <ul>
                            <li><strong>Junior (0-2 years):</strong> $60K-$100K. Learn the codebase, ship features with guidance, write tests.</li>
                            <li><strong>Mid-Level (2-5 years):</strong> $90K-$150K. Own features end-to-end, mentor juniors, make technical decisions.</li>
                            <li><strong>Senior (5-8 years):</strong> $130K-$220K. Design systems, lead projects, influence team direction.</li>
                            <li><strong>Staff/Principal (8+ years):</strong> $180K-$350K+. Set technical vision, solve cross-team problems.</li>
                        </ul>
                        <h3>Skills That Accelerate Growth</h3>
                        <ul>
                            <li><strong>Writing:</strong> Clear documentation, design docs, and RFC proposals</li>
                            <li><strong>Mentoring:</strong> Teaching others accelerates your own learning</li>
                            <li><strong>System thinking:</strong> Understanding how your code fits into the bigger picture</li>
                            <li><strong>Business awareness:</strong> Understanding why features matter to the company's goals</li>
                        </ul>
                        <h3>Building Your Reputation</h3>
                        <ul>
                            <li>Contribute to open-source projects</li>
                            <li>Write technical blog posts or create content</li>
                            <li>Speak at meetups or conferences</li>
                            <li>Build side projects that solve real problems</li>
                        </ul>
                        <h3>Alternative Paths</h3>
                        <ul>
                            <li><strong>Engineering Manager:</strong> Lead teams, hire, and grow people</li>
                            <li><strong>Architect:</strong> Design large-scale systems</li>
                            <li><strong>Developer Advocate:</strong> Teach and represent developer tools</li>
                            <li><strong>Founder/CTO:</strong> Build your own company</li>
                        </ul>
                        <div class="highlight">
                            <strong>Career Secret:</strong> The engineers who grow fastest aren't just the best coders — they're the ones who communicate well, understand the business, and make everyone around them more effective.
                        </div>
                    `,
                    quiz: {
                        question: 'What salary range can senior software engineers expect?',
                        options: ['$50K-$70K', '$130K-$220K', '$30K-$50K', 'Engineers don\'t get paid well'],
                        correct: 1
                    }
                }
            ]
        }
    ],
    finalExam: [
        { question: 'What is the difference between coding and software engineering?', options: ['No difference', 'Engineering includes design, testing, maintainability, and scalability', 'Coding is harder', 'Engineering doesn\'t involve code'], correct: 1 },
        { question: 'What does O(1) mean?', options: ['The code has one bug', 'Constant time — performance doesn\'t change with input size', 'The code runs once', 'Linear performance'], correct: 1 },
        { question: 'What is the purpose of Git branches?', options: ['To delete code', 'To work on features without affecting the main codebase', 'To make repos larger', 'To save disk space'], correct: 1 },
        { question: 'What does DRY stand for?', options: ['Do Run Yourself', 'Don\'t Repeat Yourself', 'Debug Repeatedly Yourself', 'Data Returns Yield'], correct: 1 },
        { question: 'What type of test verifies individual functions work correctly?', options: ['E2E tests', 'Integration tests', 'Unit tests', 'Stress tests'], correct: 2 },
        { question: 'In Agile, what is a stand-up?', options: ['A comedy show', 'A brief daily meeting to sync on progress and blockers', 'Standing while coding', 'A type of code review'], correct: 1 }
    ]
};
