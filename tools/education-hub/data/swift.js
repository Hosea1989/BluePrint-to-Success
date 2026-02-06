// Swift Programming Curriculum Data
const swiftData = {
    id: 'swift',
    title: 'Swift Programming',
    icon: '🍎',
    description: 'Learn Swift — Apple\'s modern language for building iOS, macOS, and watchOS apps.',
    graduationGoal: 'Build and publish an iOS app using Swift and SwiftUI',
    difficulty: 'intermediate',
    prerequisites: ['python'],
    learningObjectives: [
        'Master Swift syntax and language features',
        'Build iOS apps with SwiftUI',
        'Understand iOS app architecture and design patterns',
        'Work with Core Data and networking',
        'Publish apps to the App Store'
    ],
    relatedTracks: ['appdev', 'softwaredev'],
    resources: [
        { title: 'Apple Swift Documentation', url: 'https://docs.swift.org/' },
        { title: 'SwiftUI Tutorials', url: 'https://developer.apple.com/tutorials/swiftui' }
    ],
    levels: [
        {
            id: 1,
            title: 'Swift Fundamentals',
            subtitle: 'Core language features and iOS development basics',
            topics: [
                {
                    id: 'why-swift',
                    title: 'Why Swift?',
                    content: `
                        <h2>Why Swift?</h2>
                        <p>Swift is Apple's modern programming language, designed to be safe, fast, and expressive. If you want to build apps for iPhone, iPad, Mac, or Apple Watch, Swift is the way.</p>
                        <h3>What You Can Build</h3>
                        <ul>
                            <li><strong>iOS Apps:</strong> The 1.5 billion active iPhone users make this a massive market</li>
                            <li><strong>macOS Apps:</strong> Desktop applications for Mac</li>
                            <li><strong>watchOS:</strong> Apple Watch apps</li>
                            <li><strong>tvOS:</strong> Apple TV apps</li>
                            <li><strong>Server-side:</strong> Vapor framework for backend development</li>
                        </ul>
                        <h3>Why iOS Development?</h3>
                        <ul>
                            <li><strong>Lucrative market:</strong> iOS users spend 2x more on apps than Android users</li>
                            <li><strong>High salaries:</strong> iOS developers earn $80K-$170K+</li>
                            <li><strong>App Store:</strong> Revenue opportunity through paid apps and in-app purchases</li>
                        </ul>
                        <h3>Getting Started</h3>
                        <p>You need a Mac and Xcode (free from the App Store). Xcode includes the Swift compiler, simulator, and Interface Builder.</p>
                    `,
                    quiz: {
                        question: 'What do you need to start developing iOS apps with Swift?',
                        options: ['Any computer with VS Code', 'A Mac with Xcode installed', 'A Windows PC with Android Studio', 'An iPhone and a text editor'],
                        correct: 1
                    }
                },
                {
                    id: 'swift-syntax',
                    title: 'Swift Syntax',
                    content: `
                        <h2>Swift Syntax</h2>
                        <h3>Variables & Constants</h3>
                        <pre><code>var name = "Marcus"      // mutable (can change)
let age = 25             // constant (cannot change)
var score: Int = 0       // explicit type

// Swift uses type inference
let message = "Hello"    // String inferred</code></pre>
                        <h3>Optionals</h3>
                        <p>Swift's most unique feature — handling the absence of a value safely:</p>
                        <pre><code>var middleName: String? = nil  // might or might not have a value

// Safe unwrapping
if let name = middleName {
    print("Middle name: \\(name)")
} else {
    print("No middle name")
}

// Nil coalescing
let displayName = middleName ?? "N/A"</code></pre>
                        <h3>Functions</h3>
                        <pre><code>func greet(person name: String, from city: String = "LA") -> String {
    return "Hello \\(name) from \\(city)!"
}

let message = greet(person: "Marcus", from: "Oakland")</code></pre>
                        <div class="highlight">
                            <strong>Key Feature:</strong> Optionals force you to handle nil (null) values explicitly, preventing the "null pointer exceptions" that crash apps in other languages.
                        </div>
                    `,
                    quiz: {
                        question: 'What is the purpose of Optionals in Swift?',
                        options: ['To make code run faster', 'To safely handle values that might be nil (absent)', 'To create animations', 'To connect to the internet'],
                        correct: 1
                    }
                },
                {
                    id: 'swiftui',
                    title: 'Building UIs with SwiftUI',
                    content: `
                        <h2>Building UIs with SwiftUI</h2>
                        <p>SwiftUI is Apple's modern framework for building user interfaces declaratively — you describe what you want and SwiftUI handles the rest.</p>
                        <h3>Basic SwiftUI View</h3>
                        <pre><code>struct ContentView: View {
    @State private var count = 0
    
    var body: some View {
        VStack(spacing: 20) {
            Text("Count: \\(count)")
                .font(.largeTitle)
            
            Button("Increment") {
                count += 1
            }
            .padding()
            .background(.blue)
            .foregroundColor(.white)
            .cornerRadius(10)
        }
    }
}</code></pre>
                        <h3>Key Concepts</h3>
                        <ul>
                            <li><strong>@State:</strong> Makes a variable reactive — UI updates when it changes</li>
                            <li><strong>VStack/HStack/ZStack:</strong> Layout containers (vertical, horizontal, layered)</li>
                            <li><strong>Modifiers:</strong> Chain .font(), .padding(), .background() to style views</li>
                            <li><strong>NavigationStack:</strong> Navigate between screens</li>
                        </ul>
                        <h3>SwiftUI vs UIKit</h3>
                        <ul>
                            <li><strong>SwiftUI:</strong> Modern, declarative, less code. Best for new projects.</li>
                            <li><strong>UIKit:</strong> Older, imperative, more control. Still used in existing apps.</li>
                            <li><strong>Learn both:</strong> SwiftUI first, then UIKit basics for legacy code.</li>
                        </ul>
                    `,
                    quiz: {
                        question: 'What does @State do in SwiftUI?',
                        options: ['Saves data to a database', 'Makes a variable reactive so the UI updates when it changes', 'Creates a network request', 'Defines a constant value'],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 2,
            title: 'Building Real Apps',
            subtitle: 'Data persistence, networking, and publishing',
            topics: [
                {
                    id: 'app-architecture',
                    title: 'App Architecture & Data',
                    content: `
                        <h2>App Architecture & Data</h2>
                        <h3>MVVM Pattern</h3>
                        <p>Most SwiftUI apps use MVVM (Model-View-ViewModel):</p>
                        <ul>
                            <li><strong>Model:</strong> Data structures (User, Product, etc.)</li>
                            <li><strong>View:</strong> SwiftUI views that display the UI</li>
                            <li><strong>ViewModel:</strong> Business logic that connects Model and View</li>
                        </ul>
                        <h3>Data Persistence</h3>
                        <ul>
                            <li><strong>UserDefaults:</strong> Simple key-value storage for settings and preferences</li>
                            <li><strong>Core Data:</strong> Apple's built-in database framework</li>
                            <li><strong>SwiftData:</strong> Modern replacement for Core Data (iOS 17+)</li>
                            <li><strong>Firebase:</strong> Cloud database for real-time sync across devices</li>
                        </ul>
                        <h3>Networking</h3>
                        <pre><code>func fetchUsers() async throws -> [User] {
    let url = URL(string: "https://api.example.com/users")!
    let (data, _) = try await URLSession.shared.data(from: url)
    return try JSONDecoder().decode([User].self, from: data)
}</code></pre>
                    `,
                    quiz: {
                        question: 'What does MVVM stand for?',
                        options: ['Multiple Views Multiple Values', 'Model-View-ViewModel', 'Main Variable View Manager', 'Mobile Visual View Mode'],
                        correct: 1
                    }
                },
                {
                    id: 'app-store',
                    title: 'Publishing to the App Store',
                    content: `
                        <h2>Publishing to the App Store</h2>
                        <h3>Requirements</h3>
                        <ul>
                            <li><strong>Apple Developer Program:</strong> $99/year</li>
                            <li><strong>App Store Connect:</strong> Where you manage your app listing</li>
                            <li><strong>App Review:</strong> Apple reviews every app before it goes live (1-7 days)</li>
                        </ul>
                        <h3>Publishing Steps</h3>
                        <ol>
                            <li>Create app archive in Xcode</li>
                            <li>Upload to App Store Connect</li>
                            <li>Fill in app metadata (description, screenshots, pricing)</li>
                            <li>Submit for review</li>
                            <li>Release after approval</li>
                        </ol>
                        <h3>Monetization Options</h3>
                        <ul>
                            <li><strong>Paid app:</strong> One-time purchase price</li>
                            <li><strong>Freemium:</strong> Free with in-app purchases</li>
                            <li><strong>Subscription:</strong> Recurring revenue (Apple takes 15-30%)</li>
                            <li><strong>Ads:</strong> Free app with AdMob or similar</li>
                        </ul>
                        <h3>Project Ideas</h3>
                        <ul>
                            <li><strong>Beginner:</strong> Tip calculator, habit tracker, flashcard app</li>
                            <li><strong>Intermediate:</strong> Weather app, recipe manager, workout tracker</li>
                            <li><strong>Advanced:</strong> Social network, marketplace, health tracking app</li>
                        </ul>
                        <div class="highlight">
                            <strong>Portfolio Impact:</strong> Having a published app on the App Store is one of the most impressive things on an iOS developer's resume.
                        </div>
                    `,
                    quiz: {
                        question: 'How much does the Apple Developer Program cost annually?',
                        options: ['Free', '$25/year', '$99/year', '$499/year'],
                        correct: 2
                    }
                }
            ]
        },
        {
            id: 3,
            title: 'Advanced Swift & iOS',
            subtitle: 'Concurrency, testing, and professional-grade apps',
            topics: [
                {
                    id: 'swift-concurrency',
                    title: 'Swift Concurrency',
                    content: `
                        <h2>Swift Concurrency</h2>
                        <p>Modern apps need to do many things at once — fetch data from the internet, process images, and keep the UI responsive. Swift's concurrency model makes this safe and readable.</p>
                        <h3>Async/Await</h3>
                        <pre><code>// Fetching data asynchronously
func fetchUser(id: Int) async throws -> User {
    let url = URL(string: "https://api.example.com/users/\\(id)")!
    let (data, _) = try await URLSession.shared.data(from: url)
    return try JSONDecoder().decode(User.self, from: data)
}

// Calling async functions
Task {
    do {
        let user = try await fetchUser(id: 1)
        print(user.name)
    } catch {
        print("Error: \\(error)")
    }
}</code></pre>
                        <h3>Key Concepts</h3>
                        <ul>
                            <li><strong>async:</strong> Marks a function that can be suspended while waiting</li>
                            <li><strong>await:</strong> Pauses execution until the async operation completes</li>
                            <li><strong>Task:</strong> Creates a new unit of asynchronous work</li>
                            <li><strong>@MainActor:</strong> Ensures code runs on the main thread (required for UI updates)</li>
                        </ul>
                        <h3>Parallel Execution</h3>
                        <pre><code>// Run multiple requests in parallel
async let profile = fetchProfile()
async let posts = fetchPosts()
async let followers = fetchFollowers()

// Wait for all results
let (p, po, f) = try await (profile, posts, followers)</code></pre>
                        <div class="highlight">
                            <strong>Golden Rule:</strong> Never block the main thread. All network calls, file operations, and heavy processing should be async. The main thread is for UI only.
                        </div>
                    `,
                    quiz: {
                        question: 'What does the @MainActor annotation ensure in Swift?',
                        options: ['Code runs faster', 'Code runs on the main thread for UI updates', 'Code runs in the background', 'Code is cached'],
                        correct: 1
                    }
                },
                {
                    id: 'swift-testing',
                    title: 'Testing & Debugging',
                    content: `
                        <h2>Testing & Debugging</h2>
                        <p>Professional apps have tests. Tests catch bugs before users do and give you confidence to make changes.</p>
                        <h3>Types of Tests</h3>
                        <ul>
                            <li><strong>Unit Tests:</strong> Test individual functions and logic. Fast, run hundreds in seconds.</li>
                            <li><strong>Integration Tests:</strong> Test how components work together.</li>
                            <li><strong>UI Tests:</strong> Simulate user interactions (tap buttons, enter text, verify screens).</li>
                        </ul>
                        <h3>Writing Unit Tests</h3>
                        <pre><code>import XCTest
@testable import MyApp

class CalculatorTests: XCTestCase {
    func testAddition() {
        let calc = Calculator()
        XCTAssertEqual(calc.add(2, 3), 5)
    }
    
    func testDivisionByZero() {
        let calc = Calculator()
        XCTAssertNil(calc.divide(10, 0))
    }
}</code></pre>
                        <h3>Debugging Tools in Xcode</h3>
                        <ul>
                            <li><strong>Breakpoints:</strong> Pause execution at specific lines to inspect state</li>
                            <li><strong>LLDB Console:</strong> Type commands to inspect variables while paused</li>
                            <li><strong>View Hierarchy Debugger:</strong> Visually inspect your UI layers in 3D</li>
                            <li><strong>Instruments:</strong> Profile memory usage, CPU, network, and energy impact</li>
                        </ul>
                    `,
                    quiz: {
                        question: 'What is the purpose of unit tests?',
                        options: ['To make the app look better', 'To test individual functions and logic to catch bugs early', 'To test the app on different phones', 'To improve download speed'],
                        correct: 1
                    }
                },
                {
                    id: 'swift-advanced-patterns',
                    title: 'Protocols, Generics & Design Patterns',
                    content: `
                        <h2>Protocols, Generics & Design Patterns</h2>
                        <h3>Protocol-Oriented Programming</h3>
                        <p>Swift favors protocols over class inheritance. Protocols define a blueprint of methods and properties.</p>
                        <pre><code>protocol Describable {
    var description: String { get }
    func summarize() -> String
}

struct Product: Describable {
    let name: String
    let price: Double
    
    var description: String { "\\(name) - $\\(price)" }
    func summarize() -> String { "Product: \\(description)" }
}</code></pre>
                        <h3>Generics</h3>
                        <pre><code>// Works with any type
func findFirst&lt;T: Equatable&gt;(in array: [T], matching value: T) -> Int? {
    return array.firstIndex(of: value)
}

findFirst(in: [1, 2, 3], matching: 2)      // 1
findFirst(in: ["a", "b"], matching: "b")    // 1</code></pre>
                        <h3>Common Design Patterns</h3>
                        <ul>
                            <li><strong>Singleton:</strong> One shared instance (NetworkManager.shared). Use sparingly.</li>
                            <li><strong>Observer:</strong> Objects watch for changes (Combine framework, NotificationCenter).</li>
                            <li><strong>Repository:</strong> Abstracts data source (local vs. remote) behind a clean interface.</li>
                            <li><strong>Coordinator:</strong> Manages navigation flow between screens.</li>
                        </ul>
                        <div class="highlight">
                            <strong>Swift Philosophy:</strong> Start with structs and protocols. Only use classes when you need reference semantics or inheritance. This leads to safer, more predictable code.
                        </div>
                    `,
                    quiz: {
                        question: 'What does Swift favor over class inheritance?',
                        options: ['Global variables', 'Protocol-oriented programming', 'Only using functions', 'Avoiding all types'],
                        correct: 1
                    }
                }
            ]
        }
    ],
    finalExam: [
        { question: 'What platform is Swift primarily used for?', options: ['Android development', 'Apple platform development (iOS, macOS, etc.)', 'Windows development', 'Web development only'], correct: 1 },
        { question: 'What is an Optional in Swift?', options: ['A feature you can skip', 'A type that can hold a value or nil', 'An alternative to functions', 'A type of loop'], correct: 1 },
        { question: 'What framework is used for modern iOS UI development?', options: ['UIKit only', 'SwiftUI', 'React Native', 'Flutter'], correct: 1 },
        { question: 'What does @State do in SwiftUI?', options: ['Saves to database', 'Makes a variable reactive so UI updates when it changes', 'Creates a constant', 'Defines a function'], correct: 1 },
        { question: 'How much does the Apple Developer Program cost?', options: ['Free', '$99/year', '$299/year', '$999/year'], correct: 1 },
        { question: 'What salary range can iOS developers expect?', options: ['$30K-$50K', '$80K-$170K+', 'iOS developers are not in demand', '$500K minimum'], correct: 1 }
    ]
};
