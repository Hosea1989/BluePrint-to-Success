// Web Development Curriculum Data
const webdevData = {
    id: 'webdev',
    title: 'Web Development',
    icon: '🌐',
    description: 'Learn to build modern websites and web applications from front to back.',
    graduationGoal: 'Build and deploy a full web application',
    difficulty: 'intermediate',
    prerequisites: ['htmlcss', 'javascript'],
    learningObjectives: [
        'Build full-stack web applications',
        'Use modern frameworks and tools',
        'Deploy applications to the web',
        'Work with databases and APIs',
        'Create responsive, user-friendly interfaces'
    ],
    relatedTracks: ['htmlcss', 'javascript', 'appdev', 'softwaredev'],
    resources: [
        { title: 'MDN Web Docs', url: 'https://developer.mozilla.org/' },
        { title: 'freeCodeCamp', url: 'https://www.freecodecamp.org/' }
    ],
    levels: [
        {
            id: 1,
            title: 'How the Web Works',
            subtitle: 'Understanding web fundamentals before writing code',
            topics: [
                {
                    id: 'web-basics',
                    title: 'How Websites Work',
                    content: `
                        <h2>How Websites Work</h2>
                        <p>Before building websites, you need to understand how the web actually works at a high level.</p>
                        <h3>The Client-Server Model</h3>
                        <ol>
                            <li>You type a URL in your browser (the <strong>client</strong>)</li>
                            <li>Your browser sends a request to a <strong>server</strong></li>
                            <li>The server processes the request and sends back HTML, CSS, and JavaScript files</li>
                            <li>Your browser renders those files into the web page you see</li>
                        </ol>
                        <h3>The Three Languages of the Web</h3>
                        <ul>
                            <li><strong>HTML:</strong> The structure — headings, paragraphs, images, links (the skeleton)</li>
                            <li><strong>CSS:</strong> The styling — colors, fonts, layout, animations (the skin and clothing)</li>
                            <li><strong>JavaScript:</strong> The behavior — interactivity, dynamic content, logic (the muscles)</li>
                        </ul>
                        <h3>Frontend vs Backend</h3>
                        <ul>
                            <li><strong>Frontend:</strong> What users see and interact with (HTML, CSS, JS, React)</li>
                            <li><strong>Backend:</strong> Server-side logic, databases, APIs (Node.js, Python, databases)</li>
                            <li><strong>Full-stack:</strong> Both frontend and backend</li>
                        </ul>
                    `,
                    quiz: {
                        question: 'What are the three core languages of web development?',
                        options: ['Python, Java, C++', 'HTML, CSS, JavaScript', 'React, Vue, Angular', 'PHP, Ruby, Go'],
                        correct: 1
                    }
                },
                {
                    id: 'html-essentials',
                    title: 'HTML Essentials',
                    content: `
                        <h2>HTML Essentials</h2>
                        <p>HTML (HyperText Markup Language) provides the structure of every web page. It uses tags to define elements.</p>
                        <h3>Basic Structure</h3>
                        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;title&gt;My Website&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Welcome&lt;/h1&gt;
    &lt;p&gt;This is my website.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
                        <h3>Essential Tags</h3>
                        <ul>
                            <li><strong>Headings:</strong> h1 through h6 (h1 = most important)</li>
                            <li><strong>Paragraphs:</strong> p tag for text blocks</li>
                            <li><strong>Links:</strong> a tag with href attribute</li>
                            <li><strong>Images:</strong> img tag with src and alt attributes</li>
                            <li><strong>Lists:</strong> ul/ol with li items</li>
                            <li><strong>Divs & Spans:</strong> Generic containers for grouping</li>
                        </ul>
                        <h3>Semantic HTML</h3>
                        <p>Use meaningful tags that describe their content:</p>
                        <ul>
                            <li><strong>header, nav, main, footer:</strong> Page sections</li>
                            <li><strong>article, section, aside:</strong> Content organization</li>
                            <li><strong>button, form, input:</strong> Interactive elements</li>
                        </ul>
                        <div class="highlight">
                            <strong>Why Semantic HTML?</strong> Better accessibility (screen readers), better SEO (search engines understand your content), and cleaner code.
                        </div>
                    `,
                    quiz: {
                        question: 'Why is semantic HTML important?',
                        options: [
                            'It makes pages load faster',
                            'It improves accessibility and SEO by giving meaning to content',
                            'It replaces the need for CSS',
                            'It is required by all browsers'
                        ],
                        correct: 1
                    }
                },
                {
                    id: 'css-essentials',
                    title: 'CSS Essentials',
                    content: `
                        <h2>CSS Essentials</h2>
                        <p>CSS (Cascading Style Sheets) controls how HTML elements look — colors, sizes, layout, spacing, and animations.</p>
                        <h3>How CSS Works</h3>
                        <pre><code>/* Select element, apply styles */
h1 {
    color: #333;
    font-size: 2rem;
    margin-bottom: 1rem;
}

.card {
    background: white;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}</code></pre>
                        <h3>The Box Model</h3>
                        <p>Every element is a box with: Content → Padding → Border → Margin</p>
                        <ul>
                            <li><strong>Content:</strong> The actual text/image</li>
                            <li><strong>Padding:</strong> Space inside the border</li>
                            <li><strong>Border:</strong> The edge of the element</li>
                            <li><strong>Margin:</strong> Space outside the border</li>
                        </ul>
                        <h3>Modern Layout</h3>
                        <ul>
                            <li><strong>Flexbox:</strong> One-dimensional layouts (rows or columns). Use for navbars, card rows, centering.</li>
                            <li><strong>Grid:</strong> Two-dimensional layouts (rows AND columns). Use for page layouts, galleries, dashboards.</li>
                        </ul>
                        <h3>Responsive Design</h3>
                        <p>Use media queries to adapt your layout to different screen sizes:</p>
                        <pre><code>@media (max-width: 768px) {
    .container { flex-direction: column; }
}</code></pre>
                    `,
                    quiz: {
                        question: 'What is Flexbox best used for?',
                        options: [
                            'Two-dimensional page layouts',
                            'One-dimensional layouts like rows or columns',
                            'Database queries',
                            'Server-side rendering'
                        ],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 2,
            title: 'Building Applications',
            subtitle: 'Backend basics, databases, and full-stack development',
            topics: [
                {
                    id: 'backend-basics',
                    title: 'Backend Development Basics',
                    content: `
                        <h2>Backend Development Basics</h2>
                        <p>The backend is where data is stored, processed, and served. It's the engine behind every web application.</p>
                        <h3>What the Backend Does</h3>
                        <ul>
                            <li><strong>Process requests:</strong> Handle form submissions, login attempts, data queries</li>
                            <li><strong>Business logic:</strong> Calculate prices, validate data, enforce rules</li>
                            <li><strong>Database operations:</strong> Create, read, update, and delete data (CRUD)</li>
                            <li><strong>Authentication:</strong> Manage user accounts, sessions, and permissions</li>
                            <li><strong>API endpoints:</strong> Provide data to the frontend in JSON format</li>
                        </ul>
                        <h3>Popular Backend Options</h3>
                        <ul>
                            <li><strong>Node.js + Express:</strong> JavaScript on the server. Great if you already know JS.</li>
                            <li><strong>Python + Django/Flask:</strong> Excellent for data-heavy applications</li>
                            <li><strong>Next.js:</strong> Full-stack React — frontend and backend in one</li>
                        </ul>
                        <h3>REST APIs</h3>
                        <p>APIs let your frontend and backend communicate. REST is the most common pattern:</p>
                        <ul>
                            <li><strong>GET:</strong> Retrieve data</li>
                            <li><strong>POST:</strong> Create new data</li>
                            <li><strong>PUT/PATCH:</strong> Update existing data</li>
                            <li><strong>DELETE:</strong> Remove data</li>
                        </ul>
                    `,
                    quiz: {
                        question: 'What HTTP method is used to create new data on the server?',
                        options: ['GET', 'POST', 'DELETE', 'HEAD'],
                        correct: 1
                    }
                },
                {
                    id: 'databases',
                    title: 'Databases',
                    content: `
                        <h2>Databases</h2>
                        <p>Databases store your application's data persistently. Choosing the right one depends on your data structure and needs.</p>
                        <h3>SQL (Relational) Databases</h3>
                        <p>Data organized in tables with rows and columns. Best for structured data with relationships.</p>
                        <ul>
                            <li><strong>PostgreSQL:</strong> Powerful, feature-rich, free. Industry standard.</li>
                            <li><strong>MySQL:</strong> Popular, well-established, great documentation</li>
                            <li><strong>SQLite:</strong> File-based, no server needed. Perfect for small apps and prototyping.</li>
                        </ul>
                        <h3>NoSQL Databases</h3>
                        <p>Flexible data structures. Best for unstructured or rapidly changing data.</p>
                        <ul>
                            <li><strong>MongoDB:</strong> Document-based (stores JSON-like objects). Popular with JavaScript developers.</li>
                            <li><strong>Firebase:</strong> Google's real-time database. Great for prototyping and mobile apps.</li>
                            <li><strong>Supabase:</strong> Open-source Firebase alternative built on PostgreSQL.</li>
                        </ul>
                        <h3>Which to Learn First?</h3>
                        <p>Start with <strong>PostgreSQL</strong> or <strong>SQLite</strong>. SQL is a foundational skill that transfers to any database. Most production applications use SQL databases.</p>
                    `,
                    quiz: {
                        question: 'What is the main difference between SQL and NoSQL databases?',
                        options: [
                            'SQL is faster than NoSQL',
                            'SQL uses structured tables; NoSQL uses flexible document/key-value structures',
                            'NoSQL is always better for web apps',
                            'SQL only works with Python'
                        ],
                        correct: 1
                    }
                },
                {
                    id: 'deployment',
                    title: 'Deployment & Hosting',
                    content: `
                        <h2>Deployment & Hosting</h2>
                        <p>Building a website locally is step one. Getting it live on the internet is where the real impact happens.</p>
                        <h3>Static Site Hosting (Free)</h3>
                        <ul>
                            <li><strong>GitHub Pages:</strong> Free hosting for static sites directly from a Git repository</li>
                            <li><strong>Netlify:</strong> Free tier, automatic deploys from Git, custom domains</li>
                            <li><strong>Vercel:</strong> Made by Next.js creators. Best for React/Next.js projects.</li>
                        </ul>
                        <h3>Full-Stack Hosting</h3>
                        <ul>
                            <li><strong>Railway:</strong> Simple deployment for Node.js, Python, and databases</li>
                            <li><strong>Render:</strong> Free tier for web services and databases</li>
                            <li><strong>DigitalOcean:</strong> VPS hosting for more control ($4-12/month)</li>
                        </ul>
                        <h3>Domains</h3>
                        <ul>
                            <li>Buy a domain from Namecheap, Google Domains, or Cloudflare ($10-15/year)</li>
                            <li>Point your domain to your hosting provider using DNS settings</li>
                            <li>Always use HTTPS (most hosts provide free SSL certificates)</li>
                        </ul>
                        <h3>Version Control with Git</h3>
                        <p>Git tracks changes to your code. GitHub hosts your repositories online. Every professional developer uses Git.</p>
                        <div class="highlight">
                            <strong>Deploy Early:</strong> Don't wait until your site is "perfect" to deploy. Get a simple version live, then iterate. A deployed project beats a local one.
                        </div>
                    `,
                    quiz: {
                        question: 'Which hosting platform is free and deploys directly from a Git repository?',
                        options: ['AWS EC2', 'GitHub Pages', 'DigitalOcean', 'Heroku Pro'],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 3,
            title: 'Professional Development',
            subtitle: 'Best practices, career paths, and building your portfolio',
            topics: [
                {
                    id: 'dev-tools',
                    title: 'Developer Tools & Workflow',
                    content: `
                        <h2>Developer Tools & Workflow</h2>
                        <h3>Essential Tools</h3>
                        <ul>
                            <li><strong>VS Code:</strong> The most popular code editor. Free, extensible, excellent.</li>
                            <li><strong>Git & GitHub:</strong> Version control and code hosting. Non-negotiable for developers.</li>
                            <li><strong>Chrome DevTools:</strong> Inspect elements, debug JavaScript, analyze performance (F12)</li>
                            <li><strong>Terminal/Command Line:</strong> Navigate files, run scripts, manage packages</li>
                        </ul>
                        <h3>VS Code Extensions</h3>
                        <ul>
                            <li><strong>Prettier:</strong> Auto-formats your code</li>
                            <li><strong>ESLint:</strong> Catches JavaScript errors and enforces style</li>
                            <li><strong>Live Server:</strong> Auto-refreshes your browser when you save</li>
                            <li><strong>GitLens:</strong> Enhanced Git integration</li>
                        </ul>
                        <h3>Professional Workflow</h3>
                        <ol>
                            <li>Write code in VS Code</li>
                            <li>Test in browser with DevTools</li>
                            <li>Commit changes with Git</li>
                            <li>Push to GitHub</li>
                            <li>Auto-deploy to hosting platform</li>
                        </ol>
                    `,
                    quiz: {
                        question: 'Why is Git considered essential for all developers?',
                        options: [
                            'It makes code run faster',
                            'It tracks code changes, enables collaboration, and prevents losing work',
                            'It replaces the need for a code editor',
                            'It automatically fixes bugs'
                        ],
                        correct: 1
                    }
                },
                {
                    id: 'career-paths',
                    title: 'Web Development Career Paths',
                    content: `
                        <h2>Web Development Career Paths</h2>
                        <h3>Frontend Developer</h3>
                        <ul>
                            <li><strong>Skills:</strong> HTML, CSS, JavaScript, React/Vue, responsive design</li>
                            <li><strong>Salary range:</strong> $60K-$130K+</li>
                            <li><strong>Focus:</strong> User interfaces, user experience, visual implementation</li>
                        </ul>
                        <h3>Backend Developer</h3>
                        <ul>
                            <li><strong>Skills:</strong> Node.js/Python, databases, APIs, security, cloud services</li>
                            <li><strong>Salary range:</strong> $70K-$150K+</li>
                            <li><strong>Focus:</strong> Server logic, data management, system architecture</li>
                        </ul>
                        <h3>Full-Stack Developer</h3>
                        <ul>
                            <li><strong>Skills:</strong> Both frontend and backend</li>
                            <li><strong>Salary range:</strong> $75K-$160K+</li>
                            <li><strong>Focus:</strong> Building complete applications end-to-end</li>
                        </ul>
                        <h3>How to Get Hired</h3>
                        <ol>
                            <li><strong>Build a portfolio:</strong> 3-5 projects that showcase your skills</li>
                            <li><strong>Contribute to open source:</strong> Shows collaboration and real-world experience</li>
                            <li><strong>Network:</strong> Twitter/X, Discord communities, local meetups</li>
                            <li><strong>Apply widely:</strong> Entry-level roles, internships, freelance gigs</li>
                        </ol>
                        <div class="highlight">
                            <strong>Self-Taught Developers:</strong> You do NOT need a computer science degree. Many top developers are self-taught. Your portfolio and skills matter more than credentials.
                        </div>
                    `,
                    quiz: {
                        question: 'What is the most important thing for getting hired as a web developer?',
                        options: [
                            'A computer science degree',
                            'A portfolio of projects that showcases your skills',
                            'Knowing every programming language',
                            'Having 10 years of experience'
                        ],
                        correct: 1
                    }
                }
            ]
        }
    ],
    finalExam: [
        {
            question: 'What are the three core technologies of the web?',
            options: ['React, Node, MongoDB', 'HTML, CSS, JavaScript', 'Python, Django, PostgreSQL', 'Java, Spring, MySQL'],
            correct: 1
        },
        {
            question: 'What is the CSS Box Model?',
            options: ['A 3D rendering technique', 'Content → Padding → Border → Margin', 'A CSS framework', 'A layout grid system'],
            correct: 1
        },
        {
            question: 'What does REST API stand for?',
            options: ['Real-time Streaming Transfer', 'Representational State Transfer', 'Remote Server Technology', 'Rapid Endpoint Service Tool'],
            correct: 1
        },
        {
            question: 'Which database is recommended for beginners to learn first?',
            options: ['MongoDB', 'Redis', 'PostgreSQL or SQLite', 'Neo4j'],
            correct: 2
        },
        {
            question: 'What is version control (Git) used for?',
            options: ['Designing web pages', 'Tracking code changes and enabling collaboration', 'Hosting websites', 'Writing SQL queries'],
            correct: 1
        },
        {
            question: 'Which hosting option is best for deploying a Next.js application?',
            options: ['GitHub Pages', 'Vercel', 'WordPress.com', 'Squarespace'],
            correct: 1
        },
        {
            question: 'What salary range can a full-stack developer expect?',
            options: ['$20K-$40K', '$75K-$160K+', '$200K-$500K minimum', 'Developers are not paid well'],
            correct: 1
        },
        {
            question: 'Do you need a computer science degree to become a web developer?',
            options: ['Yes, always required', 'No — portfolio and skills matter more than credentials', 'Only for frontend roles', 'Only in certain countries'],
            correct: 1
        }
    ]
};
