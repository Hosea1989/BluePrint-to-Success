// Flutter Development Curriculum Data
const flutterData = {
    id: 'flutter',
    title: 'Flutter Development',
    icon: '🦋',
    description: 'Build beautiful cross-platform apps with Flutter and Dart for iOS, Android, web, and desktop.',
    graduationGoal: 'Build and deploy a cross-platform app with Flutter',
    difficulty: 'intermediate',
    prerequisites: ['javascript', 'htmlcss'],
    learningObjectives: [
        'Master Dart programming language',
        'Build cross-platform apps with Flutter',
        'Create beautiful, responsive UI with Flutter widgets',
        'Handle state management and navigation',
        'Deploy apps to multiple platforms'
    ],
    relatedTracks: ['appdev', 'javascript', 'webdev'],
    resources: [
        { title: 'Flutter Official Documentation', url: 'https://flutter.dev/docs' }
    ],
    levels: [
        {
            id: 1,
            title: 'Flutter & Dart Basics',
            subtitle: 'Getting started with Flutter and learning Dart',
            topics: [
                {
                    id: 'why-flutter',
                    title: 'Why Flutter?',
                    content: `
                        <h2>Why Flutter?</h2>
                        <p>Flutter is Google's UI toolkit for building beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.</p>
                        <h3>Key Advantages</h3>
                        <ul>
                            <li><strong>One codebase, 6 platforms:</strong> iOS, Android, Web, Windows, macOS, Linux</li>
                            <li><strong>Hot reload:</strong> See changes instantly without rebuilding — dramatically speeds development</li>
                            <li><strong>Beautiful UIs:</strong> Rich widget library with Material Design and Cupertino (iOS) styles</li>
                            <li><strong>Performance:</strong> Compiles to native ARM code — no JavaScript bridge like React Native</li>
                            <li><strong>Growing fast:</strong> Used by Google, BMW, Alibaba, and thousands of apps</li>
                        </ul>
                        <h3>Flutter vs React Native</h3>
                        <ul>
                            <li><strong>Flutter:</strong> Dart language, custom rendering engine, consistent look across platforms</li>
                            <li><strong>React Native:</strong> JavaScript, uses native components, may look slightly different per platform</li>
                            <li><strong>Flutter advantage:</strong> Better performance, more consistent UI</li>
                            <li><strong>React Native advantage:</strong> JavaScript knowledge, larger community (currently)</li>
                        </ul>
                        <h3>Getting Started</h3>
                        <p>Install Flutter SDK from flutter.dev. Use VS Code or Android Studio. Run <code>flutter create my_app</code> to start.</p>
                    `,
                    quiz: {
                        question: 'What is Flutter\'s key performance advantage over React Native?',
                        options: ['It uses JavaScript', 'It compiles to native ARM code without a JavaScript bridge', 'It only supports Android', 'It requires less memory'],
                        correct: 1
                    }
                },
                {
                    id: 'dart-basics',
                    title: 'Dart Language Basics',
                    content: `
                        <h2>Dart Language Basics</h2>
                        <p>Dart is Flutter's programming language. If you know JavaScript, Java, or C#, Dart will feel familiar.</p>
                        <h3>Variables & Types</h3>
                        <pre><code>String name = "Marcus";
int age = 25;
double price = 19.99;
bool isActive = true;
var message = "Type inferred";
final constant = "Cannot reassign";
const pi = 3.14159; // compile-time constant</code></pre>
                        <h3>Functions</h3>
                        <pre><code>String greet(String name, {int? age}) {
    if (age != null) {
        return "Hello $name, age $age";
    }
    return "Hello $name!";
}

// Arrow function
int double(int n) => n * 2;</code></pre>
                        <h3>Classes</h3>
                        <pre><code>class User {
    final String name;
    final int age;
    
    User({required this.name, required this.age});
    
    String greet() => "Hi, I'm $name";
}

var user = User(name: "Marcus", age: 25);
print(user.greet());</code></pre>
                        <h3>Null Safety</h3>
                        <p>Dart has built-in null safety — variables can't be null unless you explicitly allow it:</p>
                        <pre><code>String name = "Marcus";     // cannot be null
String? nickname;           // CAN be null
print(nickname?.length);    // safe access</code></pre>
                    `,
                    quiz: {
                        question: 'What does the "?" symbol after a type mean in Dart?',
                        options: ['The variable is a question', 'The variable is allowed to be null', 'The variable is a constant', 'The variable is private'],
                        correct: 1
                    }
                },
                {
                    id: 'flutter-widgets',
                    title: 'Flutter Widgets',
                    content: `
                        <h2>Flutter Widgets</h2>
                        <p>In Flutter, everything is a widget. Buttons, text, layout, padding — all widgets composed together to build your UI.</p>
                        <h3>Basic App Structure</h3>
                        <pre><code>import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
    @override
    Widget build(BuildContext context) {
        return MaterialApp(
            home: Scaffold(
                appBar: AppBar(title: Text("My App")),
                body: Center(
                    child: Text("Hello, Flutter!",
                        style: TextStyle(fontSize: 24)),
                ),
            ),
        );
    }
}</code></pre>
                        <h3>Key Widgets</h3>
                        <ul>
                            <li><strong>Text, Image, Icon:</strong> Display content</li>
                            <li><strong>Container, Padding, SizedBox:</strong> Spacing and sizing</li>
                            <li><strong>Row, Column:</strong> Horizontal and vertical layouts</li>
                            <li><strong>ListView:</strong> Scrollable lists</li>
                            <li><strong>Stack:</strong> Layer widgets on top of each other</li>
                            <li><strong>ElevatedButton, TextButton:</strong> Interactive buttons</li>
                        </ul>
                        <h3>Stateless vs Stateful Widgets</h3>
                        <ul>
                            <li><strong>StatelessWidget:</strong> Doesn't change after being built (labels, icons)</li>
                            <li><strong>StatefulWidget:</strong> Can change over time (counters, forms, animations)</li>
                        </ul>
                    `,
                    quiz: {
                        question: 'When should you use a StatefulWidget instead of a StatelessWidget?',
                        options: ['When the widget displays text', 'When the widget needs to change or update over time', 'When using images', 'StatefulWidget is always better'],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 2,
            title: 'Building Apps with Flutter',
            subtitle: 'State management, navigation, and real projects',
            topics: [
                {
                    id: 'flutter-state',
                    title: 'State Management',
                    content: `
                        <h2>State Management</h2>
                        <p>State management is how you handle data that changes in your app. It's the most important architectural decision in Flutter.</p>
                        <h3>setState (Simple)</h3>
                        <p>Built into StatefulWidget. Good for simple, local state:</p>
                        <pre><code>class Counter extends StatefulWidget {
    @override
    _CounterState createState() => _CounterState();
}

class _CounterState extends State&lt;Counter&gt; {
    int count = 0;
    
    @override
    Widget build(BuildContext context) {
        return Column(children: [
            Text("Count: $count"),
            ElevatedButton(
                onPressed: () => setState(() => count++),
                child: Text("Increment"),
            ),
        ]);
    }
}</code></pre>
                        <h3>Popular Solutions</h3>
                        <ul>
                            <li><strong>Provider:</strong> Google's recommended approach. Simple dependency injection.</li>
                            <li><strong>Riverpod:</strong> Modern evolution of Provider. Type-safe and testable.</li>
                            <li><strong>BLoC:</strong> Business Logic Component. Separates UI from business logic using streams.</li>
                        </ul>
                        <h3>Which to Learn?</h3>
                        <p>Start with setState, then learn Provider or Riverpod. These cover 90% of app needs.</p>
                    `,
                    quiz: {
                        question: 'What is Google\'s recommended state management solution for Flutter?',
                        options: ['Redux', 'MobX', 'Provider', 'setState only'],
                        correct: 2
                    }
                },
                {
                    id: 'flutter-projects',
                    title: 'Projects & Career',
                    content: `
                        <h2>Projects & Career</h2>
                        <h3>Project Ideas</h3>
                        <ul>
                            <li><strong>Beginner:</strong> Counter app, to-do list, calculator</li>
                            <li><strong>Intermediate:</strong> Weather app, recipe browser, expense tracker with charts</li>
                            <li><strong>Advanced:</strong> Social media feed, e-commerce app, real-time chat with Firebase</li>
                        </ul>
                        <h3>Flutter Career</h3>
                        <ul>
                            <li><strong>Salary:</strong> $70K-$150K+ for Flutter developers</li>
                            <li><strong>Growing demand:</strong> Companies save money by hiring one Flutter dev instead of separate iOS + Android devs</li>
                            <li><strong>Freelancing:</strong> Build apps for clients at $5K-$50K+ per project</li>
                        </ul>
                        <h3>Learning Path</h3>
                        <ol>
                            <li><strong>Week 1-2:</strong> Dart basics + Flutter widget fundamentals</li>
                            <li><strong>Week 3-4:</strong> Navigation, state management, layouts</li>
                            <li><strong>Week 5-6:</strong> API integration, local storage</li>
                            <li><strong>Week 7-8:</strong> Build a complete app and publish it</li>
                        </ol>
                        <div class="highlight">
                            <strong>Pro Tip:</strong> Publish your Flutter app to both the App Store and Play Store. Having a live cross-platform app is incredibly impressive on your resume.
                        </div>
                    `,
                    quiz: {
                        question: 'Why is Flutter attractive to companies?',
                        options: ['It only works on Android', 'One developer can build for multiple platforms, saving money', 'It is the oldest framework', 'It doesn\'t require any programming'],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 3,
            title: 'Professional Flutter Development',
            subtitle: 'Architecture, Firebase integration, and production apps',
            topics: [
                {
                    id: 'flutter-firebase',
                    title: 'Firebase Integration',
                    content: `
                        <h2>Firebase Integration</h2>
                        <p>Firebase gives your Flutter app superpowers — authentication, cloud database, storage, and analytics without writing backend code.</p>
                        <h3>Core Firebase Services</h3>
                        <ul>
                            <li><strong>Firebase Auth:</strong> Email, Google, Apple, phone number sign-in</li>
                            <li><strong>Cloud Firestore:</strong> NoSQL database that syncs in real-time across all devices</li>
                            <li><strong>Firebase Storage:</strong> Store user files, images, and media</li>
                            <li><strong>Cloud Messaging:</strong> Push notifications to re-engage users</li>
                            <li><strong>Analytics:</strong> Understand user behavior and app performance</li>
                        </ul>
                        <h3>Authentication Example</h3>
                        <pre><code>// Sign in with email/password
final credential = await FirebaseAuth.instance
    .signInWithEmailAndPassword(
        email: email,
        password: password,
    );

// Listen to auth state changes
FirebaseAuth.instance.authStateChanges().listen((User? user) {
    if (user == null) {
        print('User is signed out');
    } else {
        print('User is signed in: \${user.email}');
    }
});</code></pre>
                        <h3>Firestore CRUD</h3>
                        <pre><code>// Create
await FirebaseFirestore.instance.collection('tasks').add({
    'title': 'Learn Flutter',
    'done': false,
    'created': FieldValue.serverTimestamp(),
});

// Read (real-time)
FirebaseFirestore.instance.collection('tasks')
    .snapshots()
    .listen((snapshot) {
        for (var doc in snapshot.docs) {
            print(doc.data());
        }
    });</code></pre>
                        <div class="highlight">
                            <strong>Quick Start:</strong> Use FlutterFire CLI to auto-configure Firebase for all platforms: <code>dart pub global activate flutterfire_cli</code>
                        </div>
                    `,
                    quiz: {
                        question: 'What does Cloud Firestore provide?',
                        options: ['Only file storage', 'A real-time NoSQL database that syncs across devices', 'A code editor', 'A design tool'],
                        correct: 1
                    }
                },
                {
                    id: 'flutter-architecture',
                    title: 'App Architecture & Clean Code',
                    content: `
                        <h2>App Architecture & Clean Code</h2>
                        <p>As your app grows, architecture matters. Without structure, code becomes unmaintainable.</p>
                        <h3>Feature-Based Structure</h3>
                        <pre><code>lib/
├── core/           # Shared utilities, themes, constants
├── features/
│   ├── auth/       # Login, registration
│   │   ├── data/       # Repositories, API calls
│   │   ├── domain/     # Models, business logic
│   │   └── presentation/  # Screens, widgets
│   ├── home/
│   └── profile/
├── shared/         # Shared widgets, components
└── main.dart</code></pre>
                        <h3>Repository Pattern</h3>
                        <pre><code>// Abstract interface
abstract class TaskRepository {
    Future&lt;List&lt;Task&gt;&gt; getTasks();
    Future&lt;void&gt; addTask(Task task);
    Future&lt;void&gt; deleteTask(String id);
}

// Firebase implementation
class FirebaseTaskRepository implements TaskRepository {
    final _collection = FirebaseFirestore.instance.collection('tasks');
    
    @override
    Future&lt;List&lt;Task&gt;&gt; getTasks() async {
        final snapshot = await _collection.get();
        return snapshot.docs.map((doc) => Task.fromMap(doc.data())).toList();
    }
}</code></pre>
                        <h3>Key Principles</h3>
                        <ul>
                            <li><strong>Separation of concerns:</strong> UI code doesn't touch databases</li>
                            <li><strong>Dependency injection:</strong> Pass dependencies rather than creating them inside classes</li>
                            <li><strong>Single responsibility:</strong> Each class/widget does one thing well</li>
                            <li><strong>Testability:</strong> Good architecture makes testing easy</li>
                        </ul>
                    `,
                    quiz: {
                        question: 'What is the Repository Pattern?',
                        options: ['A Git concept', 'An abstraction layer between data sources and business logic', 'A type of widget', 'A state management solution'],
                        correct: 1
                    }
                },
                {
                    id: 'flutter-publishing',
                    title: 'Publishing to App Stores',
                    content: `
                        <h2>Publishing to App Stores</h2>
                        <h3>Pre-Launch Checklist</h3>
                        <ul>
                            <li>Test on multiple real devices (different screen sizes, OS versions)</li>
                            <li>Handle edge cases: no internet, empty states, loading states, errors</li>
                            <li>Add app icons for all platforms (use flutter_launcher_icons package)</li>
                            <li>Create splash screens (use flutter_native_splash)</li>
                            <li>Set up analytics and crash reporting (Firebase Crashlytics)</li>
                        </ul>
                        <h3>Android (Google Play)</h3>
                        <ol>
                            <li>Create a Google Play Developer account ($25 one-time)</li>
                            <li>Generate a signed APK or App Bundle: <code>flutter build appbundle</code></li>
                            <li>Create your store listing with screenshots and descriptions</li>
                            <li>Upload and submit for review (hours to a few days)</li>
                        </ol>
                        <h3>iOS (App Store)</h3>
                        <ol>
                            <li>Enroll in Apple Developer Program ($99/year)</li>
                            <li>Build for release: <code>flutter build ipa</code></li>
                            <li>Upload via Xcode or Transporter</li>
                            <li>Submit for App Review (1-7 days typically)</li>
                        </ol>
                        <h3>Post-Launch</h3>
                        <ul>
                            <li>Monitor crash reports and fix issues quickly</li>
                            <li>Respond to user reviews (especially negative ones)</li>
                            <li>Release regular updates with improvements</li>
                            <li>Use A/B testing for store listing optimization</li>
                        </ul>
                        <div class="highlight">
                            <strong>One Codebase, Two Stores:</strong> The biggest advantage of Flutter — you build once and publish to both the App Store and Google Play. That's real efficiency.
                        </div>
                    `,
                    quiz: {
                        question: 'What command builds a release Android App Bundle in Flutter?',
                        options: ['flutter run', 'flutter build appbundle', 'flutter deploy android', 'flutter release'],
                        correct: 1
                    }
                }
            ]
        }
    ],
    finalExam: [
        { question: 'How many platforms can Flutter target from one codebase?', options: ['2 (iOS and Android only)', '6 (iOS, Android, Web, Windows, macOS, Linux)', '1 (Web only)', '3 (iOS, Android, Web)'], correct: 1 },
        { question: 'What programming language does Flutter use?', options: ['JavaScript', 'Swift', 'Dart', 'Kotlin'], correct: 2 },
        { question: 'What does hot reload do?', options: ['Resets the entire app', 'Shows code changes instantly without losing app state', 'Deletes the project', 'Updates the phone\'s operating system'], correct: 1 },
        { question: 'What is the difference between StatelessWidget and StatefulWidget?', options: ['No difference', 'StatefulWidget can change over time, StatelessWidget cannot', 'StatelessWidget is faster', 'StatefulWidget only works on iOS'], correct: 1 },
        { question: 'What salary range can Flutter developers expect?', options: ['$30K-$50K', '$70K-$150K+', 'Flutter is not used professionally', '$300K minimum'], correct: 1 },
        { question: 'What does null safety prevent in Dart?', options: ['Slow code execution', 'Null reference errors that crash apps', 'Memory leaks', 'Network failures'], correct: 1 }
    ]
};
