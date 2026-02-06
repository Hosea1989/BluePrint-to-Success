// JavaScript Programming Curriculum Data
const javascriptData = {
    id: 'javascript',
    title: 'JavaScript Programming',
    icon: '⚡',
    description: 'Master JavaScript — the language of the web that powers interactive websites and applications.',
    graduationGoal: 'Build interactive web features and understand modern JavaScript',
    difficulty: 'beginner',
    prerequisites: ['htmlcss'],
    learningObjectives: [
        'Master JavaScript fundamentals and syntax',
        'Work with DOM manipulation and events',
        'Understand asynchronous programming (promises, async/await)',
        'Use modern ES6+ features',
        'Build interactive web applications'
    ],
    relatedTracks: ['webdev', 'htmlcss', 'appdev'],
    resources: [
        { title: 'MDN JavaScript Guide', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide' },
        { title: 'JavaScript.info', url: 'https://javascript.info/' }
    ],
    levels: [
        {
            id: 1,
            title: 'JavaScript Fundamentals',
            subtitle: 'Core syntax, DOM manipulation, and the basics',
            topics: [
                {
                    id: 'what-is-js',
                    title: 'What is JavaScript?',
                    content: `
                        <h2>What is JavaScript?</h2>
                        <p>JavaScript is the programming language of the web. Every interactive website you've ever used — from dropdown menus to social media feeds — runs on JavaScript.</p>
                        <h3>Where JavaScript Runs</h3>
                        <ul>
                            <li><strong>Browser (Frontend):</strong> Makes web pages interactive — animations, form validation, dynamic content</li>
                            <li><strong>Server (Backend with Node.js):</strong> Powers APIs, databases, and server-side logic</li>
                            <li><strong>Mobile:</strong> React Native, Ionic for cross-platform mobile apps</li>
                            <li><strong>Desktop:</strong> Electron for desktop apps (VS Code, Discord, Slack are built with it)</li>
                        </ul>
                        <h3>Why Learn JavaScript?</h3>
                        <ul>
                            <li><strong>#1 most used language:</strong> According to Stack Overflow surveys year after year</li>
                            <li><strong>Immediate visual feedback:</strong> Open your browser console and start coding right now</li>
                            <li><strong>Full-stack capable:</strong> One language for frontend and backend</li>
                            <li><strong>Massive job market:</strong> Every company with a website needs JavaScript developers</li>
                        </ul>
                        <h3>Getting Started</h3>
                        <p>Open your browser, press F12 (or Cmd+Option+I on Mac), go to Console, and type: <code>console.log("Hello World!")</code>. You just wrote JavaScript.</p>
                    `,
                    quiz: {
                        question: 'What makes JavaScript unique compared to most programming languages?',
                        options: [
                            'It only works on Apple devices',
                            'It runs natively in web browsers, making web pages interactive',
                            'It can only be used for mobile apps',
                            'It requires a special compiler to run'
                        ],
                        correct: 1
                    }
                },
                {
                    id: 'variables-types-js',
                    title: 'Variables & Data Types',
                    content: `
                        <h2>Variables & Data Types</h2>
                        <h3>Declaring Variables</h3>
                        <ul>
                            <li><strong>const:</strong> Value cannot be reassigned. Use by default. <code>const name = "Blueprint";</code></li>
                            <li><strong>let:</strong> Value can be reassigned. Use when the value will change. <code>let score = 0;</code></li>
                            <li><strong>var:</strong> Old way. Avoid in modern JavaScript (function-scoped, can cause bugs).</li>
                        </ul>
                        <h3>Data Types</h3>
                        <ul>
                            <li><strong>String:</strong> <code>"Hello"</code> or <code>'Hello'</code> or <code>\`Hello \${name}\`</code> (template literals)</li>
                            <li><strong>Number:</strong> <code>42</code>, <code>3.14</code> (no separate int/float)</li>
                            <li><strong>Boolean:</strong> <code>true</code> / <code>false</code></li>
                            <li><strong>Array:</strong> <code>[1, 2, 3]</code> — ordered list of values</li>
                            <li><strong>Object:</strong> <code>{ name: "John", age: 30 }</code> — key-value pairs</li>
                            <li><strong>null:</strong> Intentionally empty value</li>
                            <li><strong>undefined:</strong> Variable declared but not assigned</li>
                        </ul>
                        <h3>Template Literals</h3>
                        <p>Use backticks for string interpolation (embedding variables in strings):</p>
                        <pre><code>const name = "Marcus";
const greeting = \`Hello, \${name}! Welcome.\`;
console.log(greeting);</code></pre>
                    `,
                    quiz: {
                        question: 'Which keyword should you use by default when declaring variables in modern JavaScript?',
                        options: ['var', 'let', 'const', 'variable'],
                        correct: 2
                    }
                },
                {
                    id: 'dom-manipulation',
                    title: 'DOM Manipulation',
                    content: `
                        <h2>DOM Manipulation</h2>
                        <p>The DOM (Document Object Model) is how JavaScript interacts with HTML. It treats your page as a tree of objects that you can read, change, add to, or remove.</p>
                        <h3>Selecting Elements</h3>
                        <pre><code>// By ID
const title = document.getElementById("main-title");

// By CSS selector (most common)
const btn = document.querySelector(".submit-btn");

// Multiple elements
const items = document.querySelectorAll(".list-item");</code></pre>
                        <h3>Changing Content</h3>
                        <pre><code>title.textContent = "New Title";
title.innerHTML = "&lt;strong&gt;Bold Title&lt;/strong&gt;";
title.style.color = "blue";
title.classList.add("active");</code></pre>
                        <h3>Event Listeners</h3>
                        <pre><code>btn.addEventListener("click", () => {
    console.log("Button clicked!");
    title.textContent = "Clicked!";
});</code></pre>
                        <h3>Creating Elements</h3>
                        <pre><code>const newItem = document.createElement("li");
newItem.textContent = "New item";
document.querySelector("ul").appendChild(newItem);</code></pre>
                        <div class="highlight">
                            <strong>Key Insight:</strong> DOM manipulation is how every interactive website works. Forms, animations, dynamic content, and single-page apps all rely on these fundamentals.
                        </div>
                    `,
                    quiz: {
                        question: 'What method is most commonly used to select a single element by CSS selector?',
                        options: ['document.getElement()', 'document.querySelector()', 'document.findElement()', 'document.select()'],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 2,
            title: 'Modern JavaScript',
            subtitle: 'ES6+ features, async programming, and APIs',
            topics: [
                {
                    id: 'arrow-functions',
                    title: 'Arrow Functions & Modern Syntax',
                    content: `
                        <h2>Arrow Functions & Modern Syntax</h2>
                        <p>ES6 (2015) introduced cleaner syntax that modern JavaScript developers use daily.</p>
                        <h3>Arrow Functions</h3>
                        <pre><code>// Traditional
function add(a, b) {
    return a + b;
}

// Arrow function
const add = (a, b) => a + b;

// With body
const greet = (name) => {
    const message = \`Hello, \${name}!\`;
    return message;
};</code></pre>
                        <h3>Destructuring</h3>
                        <pre><code>// Object destructuring
const person = { name: "Marcus", age: 25, city: "LA" };
const { name, age } = person;

// Array destructuring
const colors = ["red", "green", "blue"];
const [first, second] = colors;</code></pre>
                        <h3>Spread Operator</h3>
                        <pre><code>const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

const obj1 = { name: "Marcus" };
const obj2 = { ...obj1, age: 25 };</code></pre>
                        <h3>Optional Chaining</h3>
                        <pre><code>const city = user?.address?.city; // No error if address is undefined</code></pre>
                    `,
                    quiz: {
                        question: 'What does the spread operator (...) do?',
                        options: [
                            'Deletes all items from an array',
                            'Expands an array or object into individual elements',
                            'Creates a new variable',
                            'Sorts an array alphabetically'
                        ],
                        correct: 1
                    }
                },
                {
                    id: 'async-programming',
                    title: 'Async Programming & APIs',
                    content: `
                        <h2>Async Programming & APIs</h2>
                        <p>JavaScript is asynchronous — it can start a task and move on without waiting for it to finish. This is essential for working with APIs and loading data.</p>
                        <h3>Promises</h3>
                        <p>A Promise represents a value that will be available in the future:</p>
                        <pre><code>fetch("https://api.example.com/data")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));</code></pre>
                        <h3>Async/Await (Modern Way)</h3>
                        <pre><code>async function getData() {
    try {
        const response = await fetch("https://api.example.com/data");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error:", error);
    }
}</code></pre>
                        <h3>Why Async Matters</h3>
                        <ul>
                            <li>Fetching data from APIs without freezing the page</li>
                            <li>Loading images and files in the background</li>
                            <li>Real-time features like chat and notifications</li>
                            <li>Any operation that takes time (network requests, file reading)</li>
                        </ul>
                        <div class="highlight">
                            <strong>Tip:</strong> async/await is syntactic sugar over Promises — it makes asynchronous code read like synchronous code. Always use try/catch for error handling.
                        </div>
                    `,
                    quiz: {
                        question: 'What is the modern way to handle asynchronous operations in JavaScript?',
                        options: [
                            'Using setTimeout exclusively',
                            'async/await with try/catch',
                            'Using only callbacks',
                            'Synchronous XMLHttpRequest'
                        ],
                        correct: 1
                    }
                },
                {
                    id: 'array-methods',
                    title: 'Array Methods',
                    content: `
                        <h2>Array Methods</h2>
                        <p>Array methods are some of the most powerful and frequently used tools in JavaScript. Master these and you'll write cleaner, more efficient code.</p>
                        <h3>Essential Methods</h3>
                        <pre><code>const numbers = [1, 2, 3, 4, 5];

// map - transform each item
const doubled = numbers.map(n => n * 2); // [2, 4, 6, 8, 10]

// filter - keep items that pass a test
const evens = numbers.filter(n => n % 2 === 0); // [2, 4]

// reduce - combine all items into one value
const sum = numbers.reduce((total, n) => total + n, 0); // 15

// find - get first item that matches
const found = numbers.find(n => n > 3); // 4

// forEach - do something with each item
numbers.forEach(n => console.log(n));</code></pre>
                        <h3>Chaining Methods</h3>
                        <pre><code>const result = users
    .filter(user => user.age >= 18)
    .map(user => user.name)
    .sort();</code></pre>
                        <h3>Other Useful Methods</h3>
                        <ul>
                            <li><strong>includes():</strong> Check if array contains a value</li>
                            <li><strong>some():</strong> Check if at least one item passes a test</li>
                            <li><strong>every():</strong> Check if all items pass a test</li>
                            <li><strong>flat():</strong> Flatten nested arrays</li>
                        </ul>
                    `,
                    quiz: {
                        question: 'What does the .filter() array method do?',
                        options: [
                            'Changes each item in the array',
                            'Returns a new array with only items that pass a test',
                            'Combines all items into a single value',
                            'Sorts the array alphabetically'
                        ],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 3,
            title: 'Building Projects',
            subtitle: 'Frameworks, tools, and real-world development',
            topics: [
                {
                    id: 'frameworks-intro',
                    title: 'JavaScript Frameworks',
                    content: `
                        <h2>JavaScript Frameworks</h2>
                        <p>Frameworks provide structure and tools for building complex applications. They solve common problems so you can focus on your app's unique features.</p>
                        <h3>Frontend Frameworks</h3>
                        <ul>
                            <li><strong>React:</strong> Most popular. Component-based, huge ecosystem. Used by Facebook, Netflix, Airbnb. Great job market.</li>
                            <li><strong>Vue.js:</strong> Easiest to learn. Gentle learning curve, excellent documentation. Popular in Asia and growing globally.</li>
                            <li><strong>Angular:</strong> Full-featured framework by Google. Opinionated, TypeScript-first. Popular in enterprise.</li>
                            <li><strong>Svelte:</strong> Newer, compiles to vanilla JS. Extremely fast, growing rapidly.</li>
                        </ul>
                        <h3>Backend (Node.js)</h3>
                        <ul>
                            <li><strong>Express.js:</strong> Minimal, flexible web framework. The standard for Node.js backends.</li>
                            <li><strong>Next.js:</strong> Full-stack React framework. Server-side rendering, API routes, the current industry favorite.</li>
                            <li><strong>Fastify:</strong> High-performance alternative to Express</li>
                        </ul>
                        <h3>Which to Learn First?</h3>
                        <ul>
                            <li><strong>For jobs:</strong> React (largest job market)</li>
                            <li><strong>For ease of learning:</strong> Vue.js</li>
                            <li><strong>For full-stack:</strong> Next.js (React-based)</li>
                        </ul>
                        <div class="highlight">
                            <strong>Important:</strong> Learn vanilla JavaScript well FIRST. Frameworks come and go, but JavaScript fundamentals are permanent.
                        </div>
                    `,
                    quiz: {
                        question: 'Why should you learn vanilla JavaScript before any framework?',
                        options: [
                            'Frameworks are not useful',
                            'Vanilla JavaScript is always faster',
                            'Frameworks come and go, but JavaScript fundamentals are permanent',
                            'Companies don\'t use frameworks'
                        ],
                        correct: 2
                    }
                },
                {
                    id: 'js-project-ideas',
                    title: 'Project Ideas & Learning Path',
                    content: `
                        <h2>Project Ideas & Learning Path</h2>
                        <h3>Beginner Projects</h3>
                        <ul>
                            <li><strong>To-do app:</strong> Add, delete, mark complete (DOM manipulation + localStorage)</li>
                            <li><strong>Calculator:</strong> Visual calculator with button clicks</li>
                            <li><strong>Color picker:</strong> Random color generator with copy-to-clipboard</li>
                            <li><strong>Countdown timer:</strong> Countdown to a specific date</li>
                        </ul>
                        <h3>Intermediate Projects</h3>
                        <ul>
                            <li><strong>Weather app:</strong> Fetch data from a weather API, display forecasts</li>
                            <li><strong>Movie search:</strong> Search and display movies using the OMDB API</li>
                            <li><strong>Expense tracker:</strong> Track spending with charts (Chart.js)</li>
                            <li><strong>Quiz app:</strong> Multiple choice quiz with scoring and timer</li>
                        </ul>
                        <h3>Advanced Projects</h3>
                        <ul>
                            <li><strong>Social media clone:</strong> Posts, likes, comments with a backend</li>
                            <li><strong>E-commerce store:</strong> Product listings, cart, checkout flow</li>
                            <li><strong>Real-time chat:</strong> WebSocket-based messaging app</li>
                            <li><strong>Portfolio site:</strong> Dynamic portfolio with project showcase</li>
                        </ul>
                        <h3>8-Week Learning Path</h3>
                        <ol>
                            <li><strong>Weeks 1-2:</strong> Variables, functions, control flow, DOM basics</li>
                            <li><strong>Weeks 3-4:</strong> ES6+, array methods, async/await, APIs</li>
                            <li><strong>Weeks 5-6:</strong> Build 2-3 vanilla JS projects</li>
                            <li><strong>Weeks 7-8:</strong> Start learning React or your chosen framework</li>
                        </ol>
                    `,
                    quiz: {
                        question: 'Which type of project helps you practice DOM manipulation and localStorage?',
                        options: ['Machine learning model', 'To-do app', 'Database design', 'Server configuration'],
                        correct: 1
                    }
                }
            ]
        }
    ],
    finalExam: [
        {
            question: 'Where does JavaScript run?',
            options: ['Only in web browsers', 'Only on servers', 'Browsers, servers (Node.js), mobile, and desktop', 'Only on Linux systems'],
            correct: 2
        },
        {
            question: 'What is the difference between const and let?',
            options: ['They are identical', 'const cannot be reassigned, let can', 'let is faster than const', 'const is for numbers, let is for strings'],
            correct: 1
        },
        {
            question: 'What is the DOM?',
            options: ['A JavaScript library', 'The Document Object Model — how JS interacts with HTML', 'A type of database', 'A CSS framework'],
            correct: 1
        },
        {
            question: 'What does async/await allow you to do?',
            options: ['Run code faster', 'Write asynchronous code that reads like synchronous code', 'Skip error handling', 'Access the file system'],
            correct: 1
        },
        {
            question: 'What does the .map() array method return?',
            options: ['A single value', 'A new array with each item transformed by the callback', 'true or false', 'The original array unchanged'],
            correct: 1
        },
        {
            question: 'Which frontend framework has the largest job market?',
            options: ['Vue.js', 'Angular', 'React', 'jQuery'],
            correct: 2
        },
        {
            question: 'What is destructuring?',
            options: ['Deleting objects', 'Extracting values from objects or arrays into variables', 'Breaking code intentionally', 'A type of error'],
            correct: 1
        },
        {
            question: 'Why is vanilla JavaScript important to learn before frameworks?',
            options: ['Frameworks are too expensive', 'Frameworks change but JS fundamentals are permanent', 'Vanilla JS is a framework', 'Companies ban frameworks'],
            correct: 1
        }
    ]
};
