// HTML & CSS Curriculum Data
const htmlcssData = {
    id: 'htmlcss',
    title: 'HTML & CSS',
    icon: '🎨',
    description: 'Master the building blocks of every website — structure with HTML and styling with CSS.',
    graduationGoal: 'Build beautiful, responsive web pages from scratch',
    difficulty: 'beginner',
    prerequisites: [],
    learningObjectives: [
        'Write semantic HTML to structure web pages',
        'Style pages with CSS (colors, layouts, typography)',
        'Create responsive designs that work on all devices',
        'Use CSS Grid and Flexbox for layouts',
        'Build beautiful, accessible web pages'
    ],
    relatedTracks: ['javascript', 'webdev'],
    resources: [
        { title: 'MDN HTML & CSS Guides', url: 'https://developer.mozilla.org/en-US/docs/Web' },
        { title: 'CSS-Tricks', url: 'https://css-tricks.com/' }
    ],
    levels: [
        {
            id: 1,
            title: 'HTML Foundations',
            subtitle: 'Building the structure of web pages',
            topics: [
                {
                    id: 'html-intro',
                    title: 'Introduction to HTML',
                    content: `
                        <h2>Introduction to HTML</h2>
                        <p>HTML (HyperText Markup Language) is the foundation of every web page. It defines the structure and content — what elements exist and how they're organized.</p>
                        <h3>How HTML Works</h3>
                        <p>HTML uses <strong>tags</strong> to mark up content. Tags come in pairs (opening and closing):</p>
                        <pre><code>&lt;p&gt;This is a paragraph&lt;/p&gt;
&lt;h1&gt;This is a heading&lt;/h1&gt;
&lt;a href="https://example.com"&gt;This is a link&lt;/a&gt;</code></pre>
                        <h3>Page Structure</h3>
                        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;Page Title&lt;/title&gt;
    &lt;meta charset="UTF-8"&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;!-- Your content goes here --&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>
                        <ul>
                            <li><strong>head:</strong> Metadata, title, links to CSS — not visible on the page</li>
                            <li><strong>body:</strong> Everything the user sees</li>
                        </ul>
                    `,
                    quiz: {
                        question: 'What goes inside the HTML <head> element?',
                        options: ['Visible content like text and images', 'Metadata, title, and links to stylesheets', 'JavaScript code only', 'Navigation menus'],
                        correct: 1
                    }
                },
                {
                    id: 'semantic-html',
                    title: 'Semantic HTML',
                    content: `
                        <h2>Semantic HTML</h2>
                        <p>Semantic elements clearly describe their meaning to both the browser and the developer.</p>
                        <h3>Why Semantic HTML?</h3>
                        <ul>
                            <li><strong>Accessibility:</strong> Screen readers understand the page structure</li>
                            <li><strong>SEO:</strong> Search engines rank semantic pages higher</li>
                            <li><strong>Maintainability:</strong> Easier for developers to read and edit</li>
                        </ul>
                        <h3>Semantic vs Non-Semantic</h3>
                        <pre><code>&lt;!-- Non-semantic --&gt;
&lt;div class="header"&gt;...&lt;/div&gt;
&lt;div class="nav"&gt;...&lt;/div&gt;

&lt;!-- Semantic (better) --&gt;
&lt;header&gt;...&lt;/header&gt;
&lt;nav&gt;...&lt;/nav&gt;
&lt;main&gt;...&lt;/main&gt;
&lt;article&gt;...&lt;/article&gt;
&lt;section&gt;...&lt;/section&gt;
&lt;aside&gt;...&lt;/aside&gt;
&lt;footer&gt;...&lt;/footer&gt;</code></pre>
                        <h3>Forms</h3>
                        <pre><code>&lt;form action="/submit" method="POST"&gt;
  &lt;label for="email"&gt;Email:&lt;/label&gt;
  &lt;input type="email" id="email" required&gt;
  &lt;button type="submit"&gt;Submit&lt;/button&gt;
&lt;/form&gt;</code></pre>
                        <div class="highlight">
                            <strong>Rule:</strong> If there's a semantic tag that describes your content, use it instead of a generic div.
                        </div>
                    `,
                    quiz: {
                        question: 'Which is the semantic way to define a page header?',
                        options: ['<div class="header">', '<header>', '<span id="header">', '<top>'],
                        correct: 1
                    }
                },
                {
                    id: 'html-media',
                    title: 'Images, Links & Media',
                    content: `
                        <h2>Images, Links & Media</h2>
                        <h3>Images</h3>
                        <pre><code>&lt;img src="photo.jpg" alt="Description of the image" width="600"&gt;</code></pre>
                        <ul>
                            <li><strong>alt attribute:</strong> Required for accessibility. Describes the image for screen readers and when images fail to load.</li>
                            <li><strong>Formats:</strong> JPEG for photos, PNG for transparency, SVG for icons/logos, WebP for best compression</li>
                        </ul>
                        <h3>Links</h3>
                        <pre><code>&lt;a href="https://example.com"&gt;Visit Example&lt;/a&gt;
&lt;a href="about.html"&gt;About Us&lt;/a&gt;
&lt;a href="#section-id"&gt;Jump to Section&lt;/a&gt;
&lt;a href="mailto:hello@example.com"&gt;Email Us&lt;/a&gt;</code></pre>
                        <h3>Video & Audio</h3>
                        <pre><code>&lt;video src="video.mp4" controls width="640"&gt;
  Your browser doesn't support video.
&lt;/video&gt;

&lt;audio src="song.mp3" controls&gt;&lt;/audio&gt;</code></pre>
                        <h3>Responsive Images</h3>
                        <pre><code>&lt;picture&gt;
  &lt;source media="(max-width: 600px)" srcset="small.jpg"&gt;
  &lt;img src="large.jpg" alt="Responsive image"&gt;
&lt;/picture&gt;</code></pre>
                    `,
                    quiz: {
                        question: 'Why is the alt attribute on images important?',
                        options: [
                            'It makes images load faster',
                            'It provides a text description for screen readers and when images fail to load',
                            'It changes the image size',
                            'It adds a border to the image'
                        ],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 2,
            title: 'CSS Mastery',
            subtitle: 'Styling, layout, and responsive design',
            topics: [
                {
                    id: 'css-selectors',
                    title: 'CSS Selectors & Specificity',
                    content: `
                        <h2>CSS Selectors & Specificity</h2>
                        <p>Selectors determine which HTML elements your styles apply to. Understanding specificity prevents frustrating "why isn't my CSS working?" moments.</p>
                        <h3>Common Selectors</h3>
                        <pre><code>/* Element selector */
p { color: #333; }

/* Class selector */
.card { padding: 20px; }

/* ID selector */
#hero { background: blue; }

/* Descendant */
.nav a { text-decoration: none; }

/* Direct child */
.list > li { margin: 10px; }

/* Pseudo-classes */
a:hover { color: red; }
li:first-child { font-weight: bold; }
input:focus { border-color: blue; }</code></pre>
                        <h3>Specificity Hierarchy</h3>
                        <ol>
                            <li><strong>!important</strong> (avoid using this)</li>
                            <li><strong>Inline styles</strong> (style="...")</li>
                            <li><strong>ID selectors</strong> (#name)</li>
                            <li><strong>Class selectors</strong> (.name)</li>
                            <li><strong>Element selectors</strong> (p, h1, div)</li>
                        </ol>
                        <div class="highlight">
                            <strong>Best Practice:</strong> Use class selectors for almost everything. They're specific enough without causing specificity wars. Avoid IDs in CSS.
                        </div>
                    `,
                    quiz: {
                        question: 'Which CSS selector type is recommended for most styling?',
                        options: ['ID selectors', 'Class selectors', 'Element selectors', 'Inline styles'],
                        correct: 1
                    }
                },
                {
                    id: 'flexbox-grid',
                    title: 'Flexbox & CSS Grid',
                    content: `
                        <h2>Flexbox & CSS Grid</h2>
                        <p>Modern CSS layout is built on Flexbox and Grid. Together, they can create any layout you can imagine.</p>
                        <h3>Flexbox (One-Dimensional)</h3>
                        <pre><code>.container {
  display: flex;
  justify-content: space-between; /* horizontal */
  align-items: center; /* vertical */
  gap: 20px;
}

.item {
  flex: 1; /* items share space equally */
}</code></pre>
                        <p><strong>Use for:</strong> Navbars, card rows, centering elements, distributing space.</p>
                        <h3>CSS Grid (Two-Dimensional)</h3>
                        <pre><code>.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

/* Responsive grid */
.grid {
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}</code></pre>
                        <p><strong>Use for:</strong> Page layouts, image galleries, dashboards, any two-dimensional arrangement.</p>
                        <h3>When to Use Which</h3>
                        <ul>
                            <li><strong>Flexbox:</strong> Content should dictate layout (items in a row or column)</li>
                            <li><strong>Grid:</strong> Layout should dictate content placement (specific rows and columns)</li>
                            <li><strong>Both:</strong> Use Grid for the overall page layout, Flexbox for components within it</li>
                        </ul>
                    `,
                    quiz: {
                        question: 'When should you use CSS Grid over Flexbox?',
                        options: [
                            'Always — Grid is better than Flexbox',
                            'When you need two-dimensional layout control (rows AND columns)',
                            'Only for images',
                            'Never — Flexbox can do everything'
                        ],
                        correct: 1
                    }
                },
                {
                    id: 'responsive-design',
                    title: 'Responsive Design',
                    content: `
                        <h2>Responsive Design</h2>
                        <p>Over 60% of web traffic comes from mobile devices. Your site must look great on all screen sizes.</p>
                        <h3>Mobile-First Approach</h3>
                        <p>Design for mobile first, then add complexity for larger screens:</p>
                        <pre><code>/* Base styles (mobile) */
.container { padding: 1rem; }

/* Tablet */
@media (min-width: 768px) {
  .container { padding: 2rem; }
}

/* Desktop */
@media (min-width: 1024px) {
  .container { max-width: 1200px; margin: 0 auto; }
}</code></pre>
                        <h3>Key Techniques</h3>
                        <ul>
                            <li><strong>Relative units:</strong> Use rem, em, %, vh/vw instead of fixed px</li>
                            <li><strong>Fluid images:</strong> <code>img { max-width: 100%; height: auto; }</code></li>
                            <li><strong>CSS clamp():</strong> <code>font-size: clamp(1rem, 2.5vw, 2rem);</code> — fluid sizing with min/max bounds</li>
                            <li><strong>Container queries:</strong> Style based on parent container size, not viewport</li>
                        </ul>
                        <h3>Common Breakpoints</h3>
                        <ul>
                            <li><strong>Mobile:</strong> up to 767px</li>
                            <li><strong>Tablet:</strong> 768px - 1023px</li>
                            <li><strong>Desktop:</strong> 1024px+</li>
                        </ul>
                        <div class="highlight">
                            <strong>Testing:</strong> Use Chrome DevTools device toolbar (Ctrl+Shift+M) to preview your site at any screen size.
                        </div>
                    `,
                    quiz: {
                        question: 'What does "mobile-first" design mean?',
                        options: [
                            'Only designing for mobile phones',
                            'Designing base styles for mobile, then enhancing for larger screens',
                            'Using a mobile-only framework',
                            'Making desktop sites smaller'
                        ],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 3,
            title: 'Advanced CSS',
            subtitle: 'Animations, variables, and professional techniques',
            topics: [
                {
                    id: 'css-variables',
                    title: 'CSS Custom Properties',
                    content: `
                        <h2>CSS Custom Properties (Variables)</h2>
                        <p>CSS variables let you define reusable values. Change one variable and it updates everywhere it's used — perfect for theming and consistency.</p>
                        <h3>Defining & Using Variables</h3>
                        <pre><code>:root {
  --primary: #4f46e5;
  --bg: #ffffff;
  --text: #1a1a2e;
  --radius: 8px;
  --shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.card {
  background: var(--bg);
  color: var(--text);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}

.btn {
  background: var(--primary);
}</code></pre>
                        <h3>Dark Mode with Variables</h3>
                        <pre><code>[data-theme="dark"] {
  --bg: #0f0f1a;
  --text: #e5e5e5;
  --primary: #818cf8;
}</code></pre>
                        <p>Toggle the data-theme attribute with JavaScript and your entire site's colors update instantly.</p>
                        <div class="highlight">
                            <strong>Pro Tip:</strong> Define all your colors, spacing, and fonts as CSS variables at the top of your stylesheet. This makes your design system consistent and easy to update.
                        </div>
                    `,
                    quiz: {
                        question: 'What is the main benefit of CSS custom properties (variables)?',
                        options: [
                            'They make the page load faster',
                            'They let you define reusable values that update everywhere when changed',
                            'They replace JavaScript',
                            'They only work in dark mode'
                        ],
                        correct: 1
                    }
                },
                {
                    id: 'animations',
                    title: 'CSS Animations & Transitions',
                    content: `
                        <h2>CSS Animations & Transitions</h2>
                        <h3>Transitions</h3>
                        <p>Smooth changes between states (hover, focus, etc.):</p>
                        <pre><code>.btn {
  background: var(--primary);
  transition: all 0.2s ease;
}

.btn:hover {
  background: var(--primary-dark);
  transform: translateY(-2px);
}</code></pre>
                        <h3>Keyframe Animations</h3>
                        <pre><code>@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.card {
  animation: fadeIn 0.5s ease forwards;
}</code></pre>
                        <h3>Performance Tips</h3>
                        <ul>
                            <li><strong>Only animate transform and opacity:</strong> These use the GPU and are buttery smooth</li>
                            <li><strong>Avoid animating:</strong> width, height, margin, padding, top/left (causes layout recalculation)</li>
                            <li><strong>Use will-change sparingly:</strong> <code>will-change: transform;</code> hints the browser to optimize</li>
                        </ul>
                        <h3>Purposeful Animation</h3>
                        <ul>
                            <li>Guide attention to important elements</li>
                            <li>Provide feedback on user actions</li>
                            <li>Smooth transitions between states</li>
                            <li>Don't animate for the sake of animating — every animation should have a purpose</li>
                        </ul>
                    `,
                    quiz: {
                        question: 'Which CSS properties are most performant to animate?',
                        options: [
                            'width and height',
                            'transform and opacity',
                            'margin and padding',
                            'color and background'
                        ],
                        correct: 1
                    }
                }
            ]
        }
    ],
    finalExam: [
        {
            question: 'What does HTML stand for?',
            options: ['High Tech Markup Language', 'HyperText Markup Language', 'Home Tool Markup Language', 'Hyperlink Text Making Language'],
            correct: 1
        },
        {
            question: 'What is semantic HTML?',
            options: ['HTML with lots of divs', 'Using tags that describe the meaning of content', 'HTML written in alphabetical order', 'HTML that includes JavaScript'],
            correct: 1
        },
        {
            question: 'What is the CSS Box Model order from inside out?',
            options: ['Margin, Border, Padding, Content', 'Content, Padding, Border, Margin', 'Border, Content, Margin, Padding', 'Padding, Content, Border, Margin'],
            correct: 1
        },
        {
            question: 'When should you use CSS Grid vs Flexbox?',
            options: ['Grid for 1D, Flexbox for 2D', 'Grid for 2D layouts, Flexbox for 1D rows/columns', 'They are identical', 'Only use Grid, never Flexbox'],
            correct: 1
        },
        {
            question: 'What does mobile-first design mean?',
            options: ['Only supporting mobile', 'Writing base CSS for mobile, then enhancing for larger screens', 'Using a mobile framework', 'Hiding content on mobile'],
            correct: 1
        },
        {
            question: 'How do CSS custom properties enable dark mode?',
            options: ['They automatically detect screen brightness', 'By redefining color variables under a different selector', 'By adding a special CSS file', 'Dark mode requires JavaScript only'],
            correct: 1
        },
        {
            question: 'Which CSS properties should you primarily animate for best performance?',
            options: ['width and height', 'transform and opacity', 'font-size and color', 'display and visibility'],
            correct: 1
        },
        {
            question: 'What is the recommended selector type for most CSS styling?',
            options: ['ID selectors', 'Class selectors', 'Element selectors', 'Universal selectors'],
            correct: 1
        }
    ]
};
