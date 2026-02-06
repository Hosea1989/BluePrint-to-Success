// C# Programming Curriculum Data
const csharpData = {
    id: 'csharp',
    title: 'C# Programming',
    icon: '🔷',
    description: 'Learn C# — Microsoft\'s powerful language for game development, enterprise apps, and more.',
    graduationGoal: 'Build applications with C# and understand .NET development',
    difficulty: 'intermediate',
    prerequisites: ['python'],
    learningObjectives: [
        'Master C# syntax and .NET framework',
        'Understand object-oriented programming in C#',
        'Build applications with ASP.NET and other frameworks',
        'Work with databases and APIs in C#',
        'Develop games with Unity and C#'
    ],
    relatedTracks: ['gamedev', 'softwaredev', 'webdev'],
    resources: [
        { title: 'Microsoft C# Documentation', url: 'https://docs.microsoft.com/en-us/dotnet/csharp/' }
    ],
    levels: [
        {
            id: 1,
            title: 'C# Basics',
            subtitle: 'Core syntax and object-oriented fundamentals',
            topics: [
                {
                    id: 'why-csharp',
                    title: 'Why C#?',
                    content: `
                        <h2>Why C#?</h2>
                        <p>C# (pronounced "C-sharp") is Microsoft's flagship programming language. It's versatile, modern, and powers everything from video games to enterprise software.</p>
                        <h3>Where C# Is Used</h3>
                        <ul>
                            <li><strong>Game Development:</strong> Unity (the world's most popular game engine) uses C#. Over 50% of mobile games are made with Unity.</li>
                            <li><strong>Enterprise Software:</strong> .NET powers massive business applications at Fortune 500 companies</li>
                            <li><strong>Web Development:</strong> ASP.NET for backend, Blazor for full-stack C# web apps</li>
                            <li><strong>Desktop Apps:</strong> Windows applications with WPF or MAUI</li>
                            <li><strong>Cloud:</strong> Azure cloud services are deeply integrated with .NET</li>
                        </ul>
                        <h3>C# vs Java</h3>
                        <p>C# and Java are similar in syntax and concepts, but C# has more modern features, better tooling with Visual Studio, and the Unity game engine advantage.</p>
                        <h3>Getting Started</h3>
                        <p>Install Visual Studio Community (free) or VS Code with the C# Dev Kit extension. Create your first project with <code>dotnet new console</code>.</p>
                    `,
                    quiz: {
                        question: 'What game engine uses C# as its primary programming language?',
                        options: ['Unreal Engine', 'Unity', 'Godot', 'GameMaker'],
                        correct: 1
                    }
                },
                {
                    id: 'csharp-syntax',
                    title: 'C# Syntax & Types',
                    content: `
                        <h2>C# Syntax & Types</h2>
                        <h3>Hello World</h3>
                        <pre><code>// Modern C# (top-level statements)
Console.WriteLine("Hello, World!");

// Traditional
class Program {
    static void Main(string[] args) {
        Console.WriteLine("Hello, World!");
    }
}</code></pre>
                        <h3>Variables & Types</h3>
                        <pre><code>string name = "Marcus";
int age = 25;
double price = 19.99;
bool isActive = true;
var message = "Type inferred"; // compiler figures out the type</code></pre>
                        <h3>Control Flow</h3>
                        <pre><code>if (age >= 18) {
    Console.WriteLine("Adult");
}

for (int i = 0; i < 5; i++) {
    Console.WriteLine(i);
}

foreach (var item in list) {
    Console.WriteLine(item);
}

// Switch expressions (modern)
string result = age switch {
    < 13 => "Child",
    < 18 => "Teen",
    _ => "Adult"
};</code></pre>
                    `,
                    quiz: {
                        question: 'What does the "var" keyword do in C#?',
                        options: ['Creates a variable with no type', 'Lets the compiler infer the type automatically', 'Creates a global variable', 'Declares a constant'],
                        correct: 1
                    }
                },
                {
                    id: 'csharp-oop',
                    title: 'OOP in C#',
                    content: `
                        <h2>Object-Oriented Programming in C#</h2>
                        <h3>Classes and Properties</h3>
                        <pre><code>public class Player {
    public string Name { get; set; }
    public int Health { get; private set; }
    
    public Player(string name, int health = 100) {
        Name = name;
        Health = health;
    }
    
    public void TakeDamage(int damage) {
        Health = Math.Max(0, Health - damage);
        Console.WriteLine($"{Name} took {damage} damage. Health: {Health}");
    }
}

var player = new Player("Hero");
player.TakeDamage(30);</code></pre>
                        <h3>Interfaces</h3>
                        <pre><code>public interface IAttackable {
    void TakeDamage(int amount);
    bool IsAlive { get; }
}

public class Enemy : IAttackable {
    public int Health { get; private set; } = 50;
    public bool IsAlive => Health > 0;
    
    public void TakeDamage(int amount) {
        Health -= amount;
    }
}</code></pre>
                        <h3>C# Modern Features</h3>
                        <ul>
                            <li><strong>Properties:</strong> Auto-implemented getters/setters</li>
                            <li><strong>String interpolation:</strong> <code>$"Hello {name}"</code></li>
                            <li><strong>LINQ:</strong> SQL-like queries on collections</li>
                            <li><strong>Async/Await:</strong> Built-in asynchronous programming</li>
                            <li><strong>Nullable types:</strong> <code>int? nullableNum = null;</code></li>
                        </ul>
                    `,
                    quiz: {
                        question: 'What is LINQ in C#?',
                        options: ['A game engine', 'SQL-like query syntax for collections and data', 'A web framework', 'A debugging tool'],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 2,
            title: 'C# Applications',
            subtitle: 'Game development, web apps, and career paths',
            topics: [
                {
                    id: 'unity-intro',
                    title: 'Game Development with Unity',
                    content: `
                        <h2>Game Development with Unity</h2>
                        <p>Unity is the most accessible game engine and C# is its language. You can build 2D, 3D, VR, and mobile games.</p>
                        <h3>Getting Started with Unity</h3>
                        <ol>
                            <li>Download Unity Hub (free for personal use)</li>
                            <li>Install the latest LTS (Long Term Support) version</li>
                            <li>Create a new project (2D or 3D template)</li>
                            <li>Learn the editor: Scene view, Game view, Inspector, Hierarchy</li>
                        </ol>
                        <h3>Basic Unity Script</h3>
                        <pre><code>using UnityEngine;

public class PlayerMovement : MonoBehaviour {
    public float speed = 5f;
    
    void Update() {
        float horizontal = Input.GetAxis("Horizontal");
        float vertical = Input.GetAxis("Vertical");
        
        Vector3 movement = new Vector3(horizontal, 0, vertical);
        transform.Translate(movement * speed * Time.deltaTime);
    }
}</code></pre>
                        <h3>Unity Learning Path</h3>
                        <ul>
                            <li><strong>Week 1-2:</strong> C# basics + Unity editor navigation</li>
                            <li><strong>Week 3-4:</strong> GameObjects, components, physics</li>
                            <li><strong>Week 5-8:</strong> Build a complete small game (platformer or shooter)</li>
                        </ul>
                    `,
                    quiz: {
                        question: 'What is MonoBehaviour in Unity?',
                        options: ['A type of game character', 'The base class for Unity scripts that attach to GameObjects', 'A sound system', 'A rendering engine'],
                        correct: 1
                    }
                },
                {
                    id: 'csharp-career',
                    title: 'C# Career Paths',
                    content: `
                        <h2>C# Career Paths</h2>
                        <h3>Career Options</h3>
                        <ul>
                            <li><strong>Game Developer (Unity):</strong> $55K-$130K. Build mobile, console, and VR games.</li>
                            <li><strong>.NET Backend Developer:</strong> $75K-$160K. Enterprise APIs and web services.</li>
                            <li><strong>Full-Stack Developer (Blazor):</strong> C# on both frontend and backend.</li>
                            <li><strong>Enterprise Developer:</strong> Large-scale business applications.</li>
                            <li><strong>XR Developer:</strong> Virtual and augmented reality with Unity.</li>
                        </ul>
                        <h3>Project Ideas</h3>
                        <ul>
                            <li><strong>Beginner:</strong> Console calculator, text adventure game, to-do app</li>
                            <li><strong>Intermediate:</strong> 2D Unity game, REST API with ASP.NET, desktop app</li>
                            <li><strong>Advanced:</strong> Multiplayer game, full-stack Blazor app, microservices</li>
                        </ul>
                        <h3>Resources</h3>
                        <ul>
                            <li>Microsoft Learn (free, official tutorials)</li>
                            <li>Unity Learn (free game dev courses)</li>
                            <li>C# documentation on docs.microsoft.com</li>
                        </ul>
                        <div class="highlight">
                            <strong>Pro Tip:</strong> If you want to make games, learn C# + Unity. If you want enterprise/web jobs, learn C# + .NET/ASP.NET. Both paths are lucrative.
                        </div>
                    `,
                    quiz: {
                        question: 'Which C# path is best for someone interested in game development?',
                        options: ['ASP.NET web development', 'C# + Unity', 'Blazor frontend', 'Azure cloud services'],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 3,
            title: 'Advanced C# & .NET',
            subtitle: 'Async programming, LINQ mastery, and web development',
            topics: [
                {
                    id: 'csharp-async',
                    title: 'Async/Await & Task-Based Programming',
                    content: `
                        <h2>Async/Await & Task-Based Programming</h2>
                        <p>Modern applications need to handle many operations without freezing. C#'s async/await pattern makes concurrent programming readable and safe.</p>
                        <h3>The Problem</h3>
                        <p>Imagine fetching data from the internet. Without async, your entire app freezes while waiting for the response. With async, other code continues to run.</p>
                        <h3>Async/Await in C#</h3>
                        <pre><code>// Async method that fetches data
async Task&lt;string&gt; FetchDataAsync(string url) {
    using var client = new HttpClient();
    string result = await client.GetStringAsync(url);
    return result;
}

// Calling it
var data = await FetchDataAsync("https://api.example.com/data");
Console.WriteLine(data);</code></pre>
                        <h3>Running Tasks in Parallel</h3>
                        <pre><code>// Run multiple operations simultaneously
var task1 = FetchDataAsync("https://api.example.com/users");
var task2 = FetchDataAsync("https://api.example.com/products");
var task3 = FetchDataAsync("https://api.example.com/orders");

// Wait for all to complete
var results = await Task.WhenAll(task1, task2, task3);</code></pre>
                        <h3>Best Practices</h3>
                        <ul>
                            <li>Use <code>async</code>/<code>await</code> all the way through — don't mix with <code>.Result</code> or <code>.Wait()</code></li>
                            <li>Name async methods with the <code>Async</code> suffix</li>
                            <li>Use <code>CancellationToken</code> to cancel long-running operations</li>
                            <li>Avoid <code>async void</code> except for event handlers — use <code>async Task</code> instead</li>
                        </ul>
                    `,
                    quiz: {
                        question: 'What does await do in C#?',
                        options: ['Pauses the entire application', 'Asynchronously waits for a task to complete without blocking the thread', 'Creates a new thread', 'Stops the program'],
                        correct: 1
                    }
                },
                {
                    id: 'csharp-linq-deep',
                    title: 'LINQ Deep Dive',
                    content: `
                        <h2>LINQ Deep Dive</h2>
                        <p>LINQ (Language Integrated Query) lets you query collections with SQL-like syntax directly in C#. It's one of C#'s most powerful features.</p>
                        <h3>Common LINQ Operations</h3>
                        <pre><code>var products = new List&lt;Product&gt; {
    new("Laptop", 999, "Electronics"),
    new("Phone", 699, "Electronics"),
    new("Desk", 249, "Furniture"),
    new("Chair", 349, "Furniture"),
    new("Mouse", 49, "Electronics")
};

// Filter
var expensive = products.Where(p => p.Price > 500);

// Transform
var names = products.Select(p => p.Name);

// Sort
var sorted = products.OrderByDescending(p => p.Price);

// Group
var groups = products.GroupBy(p => p.Category);

// Aggregate
var avgPrice = products.Average(p => p.Price);
var totalValue = products.Sum(p => p.Price);</code></pre>
                        <h3>Method Chaining</h3>
                        <pre><code>// Chain multiple operations
var result = products
    .Where(p => p.Category == "Electronics")
    .OrderBy(p => p.Price)
    .Select(p => $"{p.Name}: \${p.Price}")
    .ToList();</code></pre>
                        <h3>When to Use LINQ</h3>
                        <ul>
                            <li><strong>Filtering data:</strong> Where, First, Single, Any, All</li>
                            <li><strong>Transforming data:</strong> Select, SelectMany</li>
                            <li><strong>Aggregating:</strong> Count, Sum, Average, Min, Max</li>
                            <li><strong>Grouping:</strong> GroupBy, ToLookup</li>
                        </ul>
                        <div class="highlight">
                            <strong>Pro Tip:</strong> LINQ is lazy — it doesn't execute until you iterate or call ToList()/ToArray(). This means you can build up complex queries step by step without performance penalty.
                        </div>
                    `,
                    quiz: {
                        question: 'What does "lazy evaluation" mean in LINQ?',
                        options: ['LINQ is slow', 'Queries don\'t execute until you actually iterate over the results', 'LINQ only works with small datasets', 'Queries run in the background'],
                        correct: 1
                    }
                },
                {
                    id: 'aspnet-intro',
                    title: 'Web Development with ASP.NET',
                    content: `
                        <h2>Web Development with ASP.NET</h2>
                        <p>ASP.NET is Microsoft's framework for building web applications and APIs. It's fast, battle-tested, and powers many Fortune 500 company backends.</p>
                        <h3>ASP.NET Minimal API</h3>
                        <pre><code>var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/", () => "Hello World!");

app.MapGet("/products", () => {
    return new[] {
        new { Name = "Laptop", Price = 999 },
        new { Name = "Phone", Price = 699 }
    };
});

app.MapPost("/products", (Product product) => {
    // Save product to database
    return Results.Created($"/products/{product.Id}", product);
});

app.Run();</code></pre>
                        <h3>Why ASP.NET?</h3>
                        <ul>
                            <li><strong>Performance:</strong> One of the fastest web frameworks in any language</li>
                            <li><strong>Full-stack C#:</strong> With Blazor, write C# instead of JavaScript for the frontend</li>
                            <li><strong>Enterprise ready:</strong> Built-in dependency injection, authentication, logging</li>
                            <li><strong>Azure integration:</strong> Seamless deployment to Microsoft's cloud</li>
                        </ul>
                        <h3>Blazor: Full-Stack C#</h3>
                        <p>Blazor lets you build interactive web UIs using C# instead of JavaScript. It runs in the browser via WebAssembly or on the server.</p>
                        <ul>
                            <li><strong>Blazor Server:</strong> UI logic runs on the server, updates pushed via SignalR</li>
                            <li><strong>Blazor WebAssembly:</strong> Runs entirely in the browser — like a SPA but in C#</li>
                        </ul>
                        <div class="highlight">
                            <strong>Career Advantage:</strong> Companies that use .NET often struggle to find developers. If you know C# + ASP.NET + Azure, you're in high demand for well-paying enterprise roles.
                        </div>
                    `,
                    quiz: {
                        question: 'What is Blazor?',
                        options: ['A game engine', 'A framework that lets you build web UIs with C# instead of JavaScript', 'A database tool', 'A testing library'],
                        correct: 1
                    }
                }
            ]
        }
    ],
    finalExam: [
        { question: 'What game engine uses C# as its primary language?', options: ['Unreal Engine', 'Unity', 'Godot', 'CryEngine'], correct: 1 },
        { question: 'What is .NET?', options: ['A social network', 'Microsoft\'s software framework that C# runs on', 'A database', 'A code editor'], correct: 1 },
        { question: 'What does the $ prefix do in C# strings?', options: ['Makes the string uppercase', 'Enables string interpolation with embedded expressions', 'Converts to a number', 'Creates a constant string'], correct: 1 },
        { question: 'What C# feature allows SQL-like queries on collections?', options: ['Entity Framework', 'LINQ', 'ADO.NET', 'Dapper'], correct: 1 },
        { question: 'What base class do Unity scripts inherit from?', options: ['GameObject', 'MonoBehaviour', 'Component', 'ScriptableObject'], correct: 1 },
        { question: 'What salary range can C# developers expect?', options: ['$30K-$50K', '$55K-$160K+', 'C# is not used professionally', '$300K minimum'], correct: 1 }
    ]
};
