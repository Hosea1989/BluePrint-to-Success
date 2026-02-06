// App Development Curriculum Data
const appdevData = {
    id: 'appdev',
    title: 'App Development',
    icon: '📲',
    description: 'Learn to build mobile apps for iOS and Android — from concept to app store.',
    graduationGoal: 'Build and launch a mobile app on iOS or Android',
    difficulty: 'intermediate',
    prerequisites: ['javascript', 'htmlcss'],
    learningObjectives: [
        'Design mobile app interfaces and user experiences',
        'Build native or cross-platform mobile apps',
        'Work with app stores and publishing requirements',
        'Implement app features like navigation, data storage, and APIs',
        'Test and deploy mobile applications'
    ],
    relatedTracks: ['swift', 'flutter', 'javascript', 'webdev'],
    resources: [
        { title: 'React Native Documentation', url: 'https://reactnative.dev/' },
        { title: 'Flutter Documentation', url: 'https://flutter.dev/docs' }
    ],
    levels: [
        {
            id: 1,
            title: 'App Development Foundations',
            subtitle: 'Understanding the mobile ecosystem and choosing your path',
            topics: [
                {
                    id: 'mobile-landscape',
                    title: 'The Mobile App Landscape',
                    content: `
                        <h2>The Mobile App Landscape</h2>
                        <p>There are over 6.8 billion smartphone users worldwide. Mobile apps generate over $500 billion in revenue annually. It's a massive opportunity.</p>
                        <h3>Platform Market Share</h3>
                        <ul>
                            <li><strong>Android:</strong> ~72% global market share. More users, especially in developing markets.</li>
                            <li><strong>iOS:</strong> ~27% global market share. Higher revenue per user, dominant in US/Europe.</li>
                        </ul>
                        <h3>Development Approaches</h3>
                        <ul>
                            <li><strong>Native (iOS):</strong> Swift + SwiftUI. Best performance, full platform access. Only runs on Apple devices.</li>
                            <li><strong>Native (Android):</strong> Kotlin + Jetpack Compose. Best for Android-specific features.</li>
                            <li><strong>Cross-Platform:</strong> One codebase, both platforms. React Native (JavaScript), Flutter (Dart), .NET MAUI (C#).</li>
                        </ul>
                        <h3>Which to Choose?</h3>
                        <ul>
                            <li><strong>Want iOS jobs?</strong> Learn Swift</li>
                            <li><strong>Want Android jobs?</strong> Learn Kotlin</li>
                            <li><strong>Want to ship fast on both?</strong> Learn React Native or Flutter</li>
                            <li><strong>Building a startup?</strong> Cross-platform saves time and money</li>
                        </ul>
                    `,
                    quiz: {
                        question: 'What is the main advantage of cross-platform app development?',
                        options: ['Better performance than native', 'One codebase for both iOS and Android', 'Doesn\'t require programming', 'Only works on iPhones'],
                        correct: 1
                    }
                },
                {
                    id: 'app-planning',
                    title: 'Planning Your App',
                    content: `
                        <h2>Planning Your App</h2>
                        <p>The best apps solve a specific problem for a specific audience. Planning before coding saves weeks of wasted effort.</p>
                        <h3>Idea Validation</h3>
                        <ol>
                            <li><strong>Define the problem:</strong> What frustration does your app solve?</li>
                            <li><strong>Research competitors:</strong> What exists? What's missing?</li>
                            <li><strong>Talk to potential users:</strong> Would they actually use this? Would they pay?</li>
                            <li><strong>MVP (Minimum Viable Product):</strong> What's the simplest version that solves the core problem?</li>
                        </ol>
                        <h3>Design First</h3>
                        <ul>
                            <li><strong>Wireframes:</strong> Sketch rough layouts of each screen (pen and paper works)</li>
                            <li><strong>User flow:</strong> Map how users navigate between screens</li>
                            <li><strong>Prototype:</strong> Use Figma (free) to create clickable mockups</li>
                        </ul>
                        <h3>Core Features for MVP</h3>
                        <ul>
                            <li>Focus on 1-3 core features, not 20</li>
                            <li>The first version should be embarrassingly simple</li>
                            <li>Launch, get feedback, then iterate</li>
                        </ul>
                        <div class="highlight">
                            <strong>Startup Wisdom:</strong> "If you're not embarrassed by the first version of your product, you launched too late." — Reid Hoffman, LinkedIn founder
                        </div>
                    `,
                    quiz: {
                        question: 'What is an MVP in app development?',
                        options: ['Most Valuable Programmer', 'The simplest version of the app that solves the core problem', 'A fully-featured final product', 'A type of database'],
                        correct: 1
                    }
                },
                {
                    id: 'app-ui-ux',
                    title: 'App UI/UX Basics',
                    content: `
                        <h2>App UI/UX Basics</h2>
                        <p>Great apps feel intuitive. Users shouldn't need instructions — the interface should guide them naturally.</p>
                        <h3>Mobile Design Principles</h3>
                        <ul>
                            <li><strong>Thumb-friendly:</strong> Key actions should be reachable with one thumb</li>
                            <li><strong>Minimal input:</strong> Typing on mobile is painful. Use selections, toggles, and auto-fill.</li>
                            <li><strong>Clear hierarchy:</strong> Most important content/actions should be most prominent</li>
                            <li><strong>Consistent patterns:</strong> Follow platform conventions (iOS and Android have different standards)</li>
                        </ul>
                        <h3>Navigation Patterns</h3>
                        <ul>
                            <li><strong>Tab bar:</strong> 3-5 main sections (Instagram, Twitter style)</li>
                            <li><strong>Stack navigation:</strong> Push/pop screens (Settings → Account → Email)</li>
                            <li><strong>Drawer:</strong> Slide-out side menu (Gmail style)</li>
                        </ul>
                        <h3>Design Tools</h3>
                        <ul>
                            <li><strong>Figma:</strong> Free, collaborative, industry standard for app design</li>
                            <li><strong>Sketch:</strong> Mac-only, popular with iOS designers</li>
                            <li><strong>Adobe XD:</strong> Adobe's design tool</li>
                        </ul>
                    `,
                    quiz: {
                        question: 'Why should key actions in a mobile app be "thumb-friendly"?',
                        options: ['Because thumbs are the strongest finger', 'Because most users hold their phone and navigate with one thumb', 'Because it looks better', 'Because Apple requires it'],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 2,
            title: 'Building & Launching',
            subtitle: 'Development, testing, and app store submission',
            topics: [
                {
                    id: 'react-native-intro',
                    title: 'Cross-Platform with React Native',
                    content: `
                        <h2>Cross-Platform with React Native</h2>
                        <p>React Native lets you build native iOS and Android apps using JavaScript and React. Used by Facebook, Instagram, and Shopify.</p>
                        <h3>Why React Native?</h3>
                        <ul>
                            <li>Write once, deploy to both platforms</li>
                            <li>Uses JavaScript — the most popular programming language</li>
                            <li>Hot reloading — see changes instantly while developing</li>
                            <li>Huge community and ecosystem</li>
                        </ul>
                        <h3>Basic React Native Component</h3>
                        <pre><code>import { View, Text, Button, StyleSheet } from 'react-native';

export default function App() {
    const [count, setCount] = useState(0);
    
    return (
        &lt;View style={styles.container}&gt;
            &lt;Text style={styles.title}&gt;Count: {count}&lt;/Text&gt;
            &lt;Button title="Increment" onPress={() => setCount(count + 1)} /&gt;
        &lt;/View&gt;
    );
}</code></pre>
                        <h3>Getting Started</h3>
                        <ul>
                            <li>Install Node.js and npm</li>
                            <li>Use Expo for easiest setup: <code>npx create-expo-app MyApp</code></li>
                            <li>Run on your phone with Expo Go app (no Mac needed for Android)</li>
                        </ul>
                    `,
                    quiz: {
                        question: 'What programming language does React Native use?',
                        options: ['Swift', 'Kotlin', 'JavaScript', 'Dart'],
                        correct: 2
                    }
                },
                {
                    id: 'app-testing',
                    title: 'Testing & Publishing',
                    content: `
                        <h2>Testing & Publishing</h2>
                        <h3>Testing Your App</h3>
                        <ul>
                            <li><strong>Simulator/Emulator:</strong> Test on virtual devices during development</li>
                            <li><strong>Physical devices:</strong> Always test on real phones before launching</li>
                            <li><strong>Beta testing:</strong> TestFlight (iOS) or Google Play Internal Testing</li>
                            <li><strong>User testing:</strong> Watch 5 people use your app — you'll find most usability issues</li>
                        </ul>
                        <h3>App Store Publishing</h3>
                        <ul>
                            <li><strong>Apple App Store:</strong> $99/year developer account, 1-7 day review process</li>
                            <li><strong>Google Play Store:</strong> $25 one-time fee, faster review (hours to days)</li>
                        </ul>
                        <h3>App Store Optimization (ASO)</h3>
                        <ul>
                            <li>Compelling app icon that stands out</li>
                            <li>Clear, benefit-driven title and description</li>
                            <li>Professional screenshots showing key features</li>
                            <li>Encourage reviews from early users</li>
                        </ul>
                        <h3>Monetization</h3>
                        <ul>
                            <li><strong>Freemium:</strong> Free app + paid premium features</li>
                            <li><strong>Subscription:</strong> Recurring revenue (most profitable model)</li>
                            <li><strong>One-time purchase:</strong> Simple but harder to sustain</li>
                            <li><strong>Ads:</strong> Free app supported by advertising</li>
                        </ul>
                        <div class="highlight">
                            <strong>Launch Strategy:</strong> Soft launch in a small market first, fix issues, then launch widely. This prevents bad reviews from day-one bugs.
                        </div>
                    `,
                    quiz: {
                        question: 'What is the recommended strategy before a wide app launch?',
                        options: ['Launch globally immediately', 'Soft launch in a small market, fix issues, then expand', 'Only launch on iOS', 'Wait until the app is perfect'],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 3,
            title: 'Growing & Scaling Your App',
            subtitle: 'Advanced patterns, analytics, and building a business',
            topics: [
                {
                    id: 'app-backend',
                    title: 'Backend Services for Apps',
                    content: `
                        <h2>Backend Services for Apps</h2>
                        <p>Most real apps need a backend — a server that stores data, handles authentication, and syncs across devices.</p>
                        <h3>Backend-as-a-Service (BaaS)</h3>
                        <ul>
                            <li><strong>Firebase (Google):</strong> Authentication, database, storage, analytics, push notifications. Free tier is generous. Most popular for mobile.</li>
                            <li><strong>Supabase:</strong> Open-source Firebase alternative. PostgreSQL database, auth, real-time. Growing fast.</li>
                            <li><strong>AWS Amplify:</strong> Amazon's mobile backend. Powerful but steeper learning curve.</li>
                            <li><strong>Appwrite:</strong> Self-hosted, open-source backend platform.</li>
                        </ul>
                        <h3>What You Need From a Backend</h3>
                        <ul>
                            <li><strong>Authentication:</strong> Sign up, sign in, password reset, social login (Google, Apple)</li>
                            <li><strong>Database:</strong> Store user data, content, settings</li>
                            <li><strong>File storage:</strong> Profile photos, uploads, media</li>
                            <li><strong>Push notifications:</strong> Re-engage users with timely alerts</li>
                            <li><strong>Analytics:</strong> Understand how users interact with your app</li>
                        </ul>
                        <h3>REST API Basics</h3>
                        <ul>
                            <li><strong>GET:</strong> Retrieve data</li>
                            <li><strong>POST:</strong> Create new data</li>
                            <li><strong>PUT/PATCH:</strong> Update existing data</li>
                            <li><strong>DELETE:</strong> Remove data</li>
                        </ul>
                        <div class="highlight">
                            <strong>Start Simple:</strong> Firebase or Supabase can handle your first app's backend needs without writing any server code. Don't build a custom backend until you need to.
                        </div>
                    `,
                    quiz: {
                        question: 'What is a Backend-as-a-Service (BaaS)?',
                        options: ['A type of mobile app', 'A cloud service that provides backend features like auth, database, and storage without managing servers', 'A programming language', 'A design tool'],
                        correct: 1
                    }
                },
                {
                    id: 'app-growth',
                    title: 'App Growth & Retention',
                    content: `
                        <h2>App Growth & Retention</h2>
                        <p>Getting downloads is hard. Keeping users is harder. Most apps lose 77% of daily active users within the first 3 days.</p>
                        <h3>Acquisition Strategies</h3>
                        <ul>
                            <li><strong>App Store Optimization (ASO):</strong> Keywords, compelling screenshots, and ratings drive organic installs</li>
                            <li><strong>Social media marketing:</strong> TikTok and Instagram Reels for app demos and behind-the-scenes content</li>
                            <li><strong>Content marketing:</strong> Blog posts, YouTube tutorials related to your app's problem space</li>
                            <li><strong>Referral programs:</strong> Reward users for inviting friends (Dropbox grew this way)</li>
                        </ul>
                        <h3>Retention Tactics</h3>
                        <ul>
                            <li><strong>Onboarding:</strong> Guide new users to their "aha moment" as fast as possible</li>
                            <li><strong>Push notifications:</strong> Timely, valuable reminders (not spam)</li>
                            <li><strong>Streaks & habits:</strong> Daily use incentives (Duolingo streaks, Snapchat streaks)</li>
                            <li><strong>Personalization:</strong> Tailor content to individual preferences</li>
                        </ul>
                        <h3>Key Metrics</h3>
                        <ul>
                            <li><strong>DAU/MAU:</strong> Daily/Monthly Active Users</li>
                            <li><strong>Retention Rate:</strong> % of users who come back after Day 1, 7, 30</li>
                            <li><strong>LTV (Lifetime Value):</strong> Total revenue per user over their lifetime</li>
                            <li><strong>CAC (Customer Acquisition Cost):</strong> Cost to acquire each new user</li>
                        </ul>
                    `,
                    quiz: {
                        question: 'What percentage of daily active users do most apps lose within the first 3 days?',
                        options: ['10%', '25%', '50%', '77%'],
                        correct: 3
                    }
                },
                {
                    id: 'app-business',
                    title: 'Building an App Business',
                    content: `
                        <h2>Building an App Business</h2>
                        <h3>Revenue Models</h3>
                        <ul>
                            <li><strong>Subscription:</strong> Recurring revenue. Best for apps with ongoing value (Headspace, Notion). Apple/Google take 15-30%.</li>
                            <li><strong>Freemium:</strong> Free basic features, paid premium. Convert 2-5% of users to paying.</li>
                            <li><strong>In-app purchases:</strong> Virtual goods, extra features, content packs.</li>
                            <li><strong>Ads:</strong> Free app with banner/interstitial/rewarded video ads. Rewarded videos have highest user satisfaction.</li>
                        </ul>
                        <h3>Indie App Success Stories</h3>
                        <ul>
                            <li><strong>Flappy Bird:</strong> Solo developer earned $50K/day from ads</li>
                            <li><strong>Widgetsmith:</strong> One developer, hit #1 on App Store</li>
                            <li><strong>Carrot Weather:</strong> Indie weather app with personality, subscription model</li>
                        </ul>
                        <h3>Scaling Tips</h3>
                        <ul>
                            <li>Launch with one platform, expand after product-market fit</li>
                            <li>Listen to user reviews — they tell you exactly what to build next</li>
                            <li>Ship small, frequent updates rather than big, rare ones</li>
                            <li>Consider hiring contractors for design/marketing before going full-time</li>
                        </ul>
                        <div class="highlight">
                            <strong>Reality Check:</strong> Most apps don't make money. Focus on solving a real problem for a specific audience, nail the experience, and the revenue follows.
                        </div>
                    `,
                    quiz: {
                        question: 'What is the typical freemium conversion rate for apps?',
                        options: ['50-75%', '20-30%', '2-5%', '0.01%'],
                        correct: 2
                    }
                }
            ]
        }
    ],
    finalExam: [
        { question: 'What is the main advantage of cross-platform development?', options: ['Better performance', 'One codebase for both iOS and Android', 'Free publishing', 'No coding required'], correct: 1 },
        { question: 'What is an MVP?', options: ['Most Valuable Player', 'Minimum Viable Product — the simplest version that solves the core problem', 'Maximum Visual Performance', 'Mobile View Protocol'], correct: 1 },
        { question: 'Which tool is industry standard for mobile app design?', options: ['Microsoft Paint', 'Figma', 'PowerPoint', 'Notepad'], correct: 1 },
        { question: 'What framework lets you build native apps with JavaScript?', options: ['Django', 'React Native', 'Flask', 'Swift'], correct: 1 },
        { question: 'How much does a Google Play developer account cost?', options: ['Free', '$25 one-time', '$99/year', '$299/year'], correct: 1 },
        { question: 'What is App Store Optimization (ASO)?', options: ['Making the app faster', 'Optimizing your app listing to get more downloads', 'A type of programming', 'Apple\'s review process'], correct: 1 }
    ]
};
