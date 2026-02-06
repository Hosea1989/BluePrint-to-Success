// Java Programming Curriculum Data
const javaData = {
    id: 'java',
    title: 'Java Programming',
    icon: '☕',
    description: 'Learn Java — the enterprise powerhouse used in Android apps, backend systems, and large-scale applications.',
    graduationGoal: 'Write Java applications with object-oriented design principles',
    difficulty: 'intermediate',
    prerequisites: ['python'],
    learningObjectives: [
        'Master Java syntax and object-oriented programming',
        'Understand classes, inheritance, and polymorphism',
        'Work with Java collections and data structures',
        'Build applications with Java frameworks',
        'Apply best practices in Java development'
    ],
    relatedTracks: ['appdev', 'softwaredev', 'python'],
    resources: [
        { title: 'Oracle Java Documentation', url: 'https://docs.oracle.com/javase/tutorial/' }
    ],
    levels: [
        {
            id: 1,
            title: 'Java Fundamentals',
            subtitle: 'Core syntax, types, and object-oriented basics',
            topics: [
                {
                    id: 'why-java',
                    title: 'Why Java?',
                    content: `
                        <h2>Why Java?</h2>
                        <p>Java has been a top programming language for over 25 years. It powers Android apps, enterprise backends, and some of the largest systems in the world.</p>
                        <h3>Where Java Is Used</h3>
                        <ul>
                            <li><strong>Android Development:</strong> The primary language for Android apps (alongside Kotlin)</li>
                            <li><strong>Enterprise Backend:</strong> Banks, healthcare, government systems run on Java</li>
                            <li><strong>Big Data:</strong> Hadoop, Spark, and many data tools are built in Java</li>
                            <li><strong>Web Applications:</strong> Spring Boot for modern web services</li>
                        </ul>
                        <h3>Key Features</h3>
                        <ul>
                            <li><strong>"Write once, run anywhere":</strong> Java runs on any device with a JVM (Java Virtual Machine)</li>
                            <li><strong>Strongly typed:</strong> Catches errors at compile time, preventing bugs</li>
                            <li><strong>Object-oriented:</strong> Everything is organized in classes and objects</li>
                            <li><strong>Massive ecosystem:</strong> Libraries and frameworks for virtually everything</li>
                        </ul>
                        <h3>Getting Started</h3>
                        <p>Install the JDK (Java Development Kit) from adoptium.net. Use IntelliJ IDEA (Community Edition is free) or VS Code with Java extensions.</p>
                    `,
                    quiz: {
                        question: 'What does "Write once, run anywhere" mean in Java?',
                        options: ['You only need to write code once and it never needs updating', 'Java code runs on any device with a Java Virtual Machine', 'Java only works on one operating system', 'You can only run Java programs once'],
                        correct: 1
                    }
                },
                {
                    id: 'java-syntax',
                    title: 'Java Syntax & Types',
                    content: `
                        <h2>Java Syntax & Types</h2>
                        <h3>Your First Java Program</h3>
                        <pre><code>public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}</code></pre>
                        <h3>Variables & Data Types</h3>
                        <p>Java is statically typed — you must declare the type of every variable:</p>
                        <pre><code>String name = "Marcus";
int age = 25;
double price = 19.99;
boolean isActive = true;
char grade = 'A';</code></pre>
                        <h3>Control Flow</h3>
                        <pre><code>if (age >= 18) {
    System.out.println("Adult");
} else {
    System.out.println("Minor");
}

for (int i = 0; i < 5; i++) {
    System.out.println(i);
}

String[] fruits = {"apple", "banana", "cherry"};
for (String fruit : fruits) {
    System.out.println(fruit);
}</code></pre>
                        <div class="highlight">
                            <strong>Key Difference from Python/JS:</strong> Java requires explicit type declarations, semicolons at end of statements, and curly braces for code blocks. It's more verbose but catches more errors at compile time.
                        </div>
                    `,
                    quiz: {
                        question: 'What makes Java different from Python in terms of variable declarations?',
                        options: ['Java variables don\'t need names', 'Java requires explicit type declarations', 'Python is statically typed and Java is not', 'There is no difference'],
                        correct: 1
                    }
                },
                {
                    id: 'java-oop',
                    title: 'Object-Oriented Programming in Java',
                    content: `
                        <h2>Object-Oriented Programming in Java</h2>
                        <p>Java is built around OOP. Everything exists inside a class.</p>
                        <h3>Classes and Objects</h3>
                        <pre><code>public class Car {
    private String make;
    private int year;
    
    public Car(String make, int year) {
        this.make = make;
        this.year = year;
    }
    
    public String getMake() { return make; }
    
    public String toString() {
        return year + " " + make;
    }
}

Car myCar = new Car("Toyota", 2024);
System.out.println(myCar); // 2024 Toyota</code></pre>
                        <h3>Four Pillars of OOP</h3>
                        <ul>
                            <li><strong>Encapsulation:</strong> Hide internal details, expose only what's needed (private fields + public methods)</li>
                            <li><strong>Inheritance:</strong> Create new classes based on existing ones (<code>extends</code>)</li>
                            <li><strong>Polymorphism:</strong> Same method name, different behavior depending on the object</li>
                            <li><strong>Abstraction:</strong> Define what something does without how (interfaces, abstract classes)</li>
                        </ul>
                    `,
                    quiz: {
                        question: 'What is encapsulation in OOP?',
                        options: ['Making all variables public', 'Hiding internal details and exposing only what is needed', 'Creating multiple classes', 'Using only static methods'],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 2,
            title: 'Intermediate Java',
            subtitle: 'Collections, exceptions, and building applications',
            topics: [
                {
                    id: 'java-collections',
                    title: 'Collections Framework',
                    content: `
                        <h2>Collections Framework</h2>
                        <p>Java's Collections Framework provides powerful data structures for storing and manipulating groups of objects.</p>
                        <h3>Common Collections</h3>
                        <pre><code>// ArrayList - dynamic array
ArrayList&lt;String&gt; names = new ArrayList&lt;&gt;();
names.add("Marcus");
names.add("Sarah");
System.out.println(names.get(0)); // Marcus

// HashMap - key-value pairs
HashMap&lt;String, Integer&gt; ages = new HashMap&lt;&gt;();
ages.put("Marcus", 25);
ages.put("Sarah", 30);
System.out.println(ages.get("Marcus")); // 25

// HashSet - unique values
HashSet&lt;String&gt; uniqueNames = new HashSet&lt;&gt;();
uniqueNames.add("Marcus");
uniqueNames.add("Marcus"); // ignored, already exists</code></pre>
                        <h3>When to Use What</h3>
                        <ul>
                            <li><strong>ArrayList:</strong> Ordered list with index access</li>
                            <li><strong>LinkedList:</strong> Fast insertions/deletions in the middle</li>
                            <li><strong>HashMap:</strong> Fast lookup by key</li>
                            <li><strong>HashSet:</strong> Store unique values, fast contains check</li>
                        </ul>
                    `,
                    quiz: {
                        question: 'Which Java collection would you use to store key-value pairs?',
                        options: ['ArrayList', 'HashSet', 'HashMap', 'LinkedList'],
                        correct: 2
                    }
                },
                {
                    id: 'java-exceptions',
                    title: 'Exception Handling',
                    content: `
                        <h2>Exception Handling</h2>
                        <p>Java has a robust exception handling system that forces you to deal with potential errors.</p>
                        <h3>Try/Catch/Finally</h3>
                        <pre><code>try {
    int result = 10 / 0;
} catch (ArithmeticException e) {
    System.out.println("Cannot divide by zero: " + e.getMessage());
} catch (Exception e) {
    System.out.println("Something went wrong: " + e.getMessage());
} finally {
    System.out.println("This always runs");
}</code></pre>
                        <h3>Checked vs Unchecked Exceptions</h3>
                        <ul>
                            <li><strong>Checked:</strong> Must be handled or declared (IOException, SQLException). The compiler forces you to deal with them.</li>
                            <li><strong>Unchecked:</strong> Runtime errors (NullPointerException, ArrayIndexOutOfBoundsException). Not required to catch.</li>
                        </ul>
                        <h3>Custom Exceptions</h3>
                        <pre><code>public class InsufficientFundsException extends Exception {
    public InsufficientFundsException(String message) {
        super(message);
    }
}</code></pre>
                    `,
                    quiz: {
                        question: 'What is the difference between checked and unchecked exceptions?',
                        options: ['There is no difference', 'Checked exceptions must be handled or declared; unchecked are runtime errors', 'Unchecked exceptions crash the JVM', 'Checked exceptions are faster'],
                        correct: 1
                    }
                },
                {
                    id: 'java-career',
                    title: 'Java Career & Projects',
                    content: `
                        <h2>Java Career & Projects</h2>
                        <h3>Career Paths</h3>
                        <ul>
                            <li><strong>Android Developer:</strong> Build mobile apps (Java + Kotlin)</li>
                            <li><strong>Backend Developer:</strong> Spring Boot, microservices, REST APIs</li>
                            <li><strong>Enterprise Developer:</strong> Large-scale systems for banks, healthcare, government</li>
                            <li><strong>Data Engineer:</strong> Big data processing with Hadoop/Spark</li>
                        </ul>
                        <h3>Salary Range</h3>
                        <p>Java developers earn $70K-$160K+ depending on experience and specialization.</p>
                        <h3>Project Ideas</h3>
                        <ul>
                            <li><strong>Beginner:</strong> Calculator, student grade tracker, library management system</li>
                            <li><strong>Intermediate:</strong> REST API with Spring Boot, Android to-do app, chat application</li>
                            <li><strong>Advanced:</strong> E-commerce backend, microservices architecture, real-time data processing</li>
                        </ul>
                        <h3>Learning Path</h3>
                        <ol>
                            <li>Core Java syntax and OOP (4-6 weeks)</li>
                            <li>Collections, file I/O, exceptions (2-3 weeks)</li>
                            <li>Choose: Android dev OR Spring Boot backend (4-8 weeks)</li>
                            <li>Build portfolio projects</li>
                        </ol>
                    `,
                    quiz: {
                        question: 'What is Spring Boot used for in Java development?',
                        options: ['Mobile app development', 'Building modern backend web services and REST APIs', 'Desktop GUI applications', 'Game development'],
                        correct: 1
                    }
                }
            ]
        }
    ],
    finalExam: [
        { question: 'What does JVM stand for?', options: ['Java Variable Manager', 'Java Virtual Machine', 'Java Version Modifier', 'JavaScript Virtual Mode'], correct: 1 },
        { question: 'What are the four pillars of OOP?', options: ['Speed, Size, Scope, Scale', 'Encapsulation, Inheritance, Polymorphism, Abstraction', 'Public, Private, Protected, Default', 'Create, Read, Update, Delete'], correct: 1 },
        { question: 'Which collection stores unique values only?', options: ['ArrayList', 'HashMap', 'HashSet', 'LinkedList'], correct: 2 },
        { question: 'What is the purpose of the "final" keyword?', options: ['To end a program', 'To make a variable constant, prevent method override, or prevent inheritance', 'To handle exceptions', 'To import libraries'], correct: 1 },
        { question: 'What framework is used for modern Java web backends?', options: ['React', 'Spring Boot', 'Django', 'Flask'], correct: 1 },
        { question: 'What salary range can Java developers expect?', options: ['$30K-$50K', '$70K-$160K+', '$200K minimum', 'Java developers are not in demand'], correct: 1 }
    ]
};
