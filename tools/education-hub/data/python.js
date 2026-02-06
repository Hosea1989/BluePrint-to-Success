// Python Programming Curriculum Data
const pythonData = {
    id: 'python',
    title: 'Python Programming',
    icon: '🐍',
    description: 'Learn Python from scratch — the most versatile and beginner-friendly programming language.',
    graduationGoal: 'Write Python programs confidently and build real projects',
    difficulty: 'beginner',
    prerequisites: [],
    learningObjectives: [
        'Master Python syntax and fundamental programming concepts',
        'Work with data structures (lists, dictionaries, sets)',
        'Build functions and handle errors effectively',
        'Use Python libraries and modules',
        'Create real-world projects and applications'
    ],
    relatedTracks: ['datascience', 'webdev', 'softwaredev'],
    resources: [
        { title: 'Python.org Official Documentation', url: 'https://docs.python.org/3/' },
        { title: 'Real Python', url: 'https://realpython.com/' }
    ],
    levels: [
        {
            id: 1,
            title: 'Python Basics',
            subtitle: 'Core syntax, variables, and control flow',
            topics: [
                {
                    id: 'why-python',
                    title: 'Why Python?',
                    content: `
                        <h2>Why Python?</h2>
                        <p>Python is one of the most popular programming languages in the world, and for good reason. It reads almost like English, making it the perfect first language.</p>
                        <h3>What Makes Python Special</h3>
                        <ul>
                            <li><strong>Beginner-friendly:</strong> Clean, readable syntax with minimal boilerplate</li>
                            <li><strong>Versatile:</strong> Web development, data science, AI/ML, automation, scripting</li>
                            <li><strong>Massive community:</strong> Millions of developers, thousands of libraries, endless tutorials</li>
                            <li><strong>High demand:</strong> One of the most in-demand languages for jobs across industries</li>
                        </ul>
                        <h3>What Python Is Used For</h3>
                        <ul>
                            <li><strong>Data Science & AI:</strong> TensorFlow, PyTorch, scikit-learn, pandas</li>
                            <li><strong>Web Development:</strong> Django, Flask, FastAPI</li>
                            <li><strong>Automation:</strong> Automate repetitive tasks, file management, web scraping</li>
                            <li><strong>Finance:</strong> Quantitative analysis, algorithmic trading</li>
                        </ul>
                        <h3>Getting Started</h3>
                        <p>Install Python from python.org. Use an IDE like VS Code (free) or PyCharm. You can also practice in the browser at replit.com or Google Colab.</p>
                    `,
                    quiz: {
                        question: 'Which of the following is NOT a common use case for Python?',
                        options: ['Data Science', 'Web Development', 'iOS App Development', 'Automation'],
                        correct: 2
                    }
                },
                {
                    id: 'variables-types',
                    title: 'Variables & Data Types',
                    content: `
                        <h2>Variables & Data Types</h2>
                        <p>Variables are containers that store data. Python is dynamically typed, meaning you don't need to declare the type — Python figures it out.</p>
                        <h3>Basic Data Types</h3>
                        <ul>
                            <li><strong>Strings (str):</strong> Text data. <code>name = "Blueprint"</code></li>
                            <li><strong>Integers (int):</strong> Whole numbers. <code>age = 25</code></li>
                            <li><strong>Floats (float):</strong> Decimal numbers. <code>price = 19.99</code></li>
                            <li><strong>Booleans (bool):</strong> True or False. <code>is_active = True</code></li>
                        </ul>
                        <h3>Collections</h3>
                        <ul>
                            <li><strong>Lists:</strong> Ordered, changeable. <code>colors = ["red", "blue", "green"]</code></li>
                            <li><strong>Dictionaries:</strong> Key-value pairs. <code>person = {"name": "John", "age": 30}</code></li>
                            <li><strong>Tuples:</strong> Ordered, unchangeable. <code>coordinates = (10, 20)</code></li>
                            <li><strong>Sets:</strong> Unordered, unique values. <code>unique_nums = {1, 2, 3}</code></li>
                        </ul>
                        <h3>Variable Naming Rules</h3>
                        <ul>
                            <li>Use descriptive names: <code>user_age</code> not <code>x</code></li>
                            <li>Snake_case is standard in Python: <code>total_price</code></li>
                            <li>Cannot start with numbers or use reserved words</li>
                        </ul>
                    `,
                    quiz: {
                        question: 'What data type would you use to store a person\'s name and age together?',
                        options: ['A string', 'A list', 'A dictionary', 'A float'],
                        correct: 2
                    }
                },
                {
                    id: 'control-flow',
                    title: 'Control Flow',
                    content: `
                        <h2>Control Flow</h2>
                        <p>Control flow determines the order in which your code runs. It's how your program makes decisions and repeats actions.</p>
                        <h3>If/Elif/Else</h3>
                        <p>Make decisions based on conditions:</p>
                        <pre><code>age = 18
if age >= 21:
    print("You can drink")
elif age >= 18:
    print("You can vote")
else:
    print("You're a minor")</code></pre>
                        <h3>For Loops</h3>
                        <p>Repeat code for each item in a collection:</p>
                        <pre><code>fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)</code></pre>
                        <h3>While Loops</h3>
                        <p>Repeat code while a condition is true:</p>
                        <pre><code>count = 0
while count < 5:
    print(count)
    count += 1</code></pre>
                        <h3>Key Python Feature: Indentation</h3>
                        <p>Python uses whitespace (4 spaces) to define code blocks instead of curly braces. This is not optional — incorrect indentation causes errors but also makes code more readable.</p>
                    `,
                    quiz: {
                        question: 'What does Python use to define code blocks instead of curly braces?',
                        options: ['Semicolons', 'Parentheses', 'Indentation (whitespace)', 'Square brackets'],
                        correct: 2
                    }
                }
            ]
        },
        {
            id: 2,
            title: 'Functions & Modules',
            subtitle: 'Writing reusable code and organizing your programs',
            topics: [
                {
                    id: 'functions',
                    title: 'Functions',
                    content: `
                        <h2>Functions</h2>
                        <p>Functions are reusable blocks of code that perform a specific task. They're the building blocks of well-organized programs.</p>
                        <h3>Defining Functions</h3>
                        <pre><code>def greet(name):
    return f"Hello, {name}!"

message = greet("Marcus")
print(message)  # Hello, Marcus!</code></pre>
                        <h3>Parameters & Arguments</h3>
                        <ul>
                            <li><strong>Parameters:</strong> Variables in the function definition</li>
                            <li><strong>Arguments:</strong> Actual values passed when calling the function</li>
                            <li><strong>Default parameters:</strong> <code>def greet(name="World"):</code></li>
                            <li><strong>*args and **kwargs:</strong> Accept variable numbers of arguments</li>
                        </ul>
                        <h3>Return Values</h3>
                        <p>Functions can return data using the <code>return</code> keyword. Without it, functions return <code>None</code>.</p>
                        <pre><code>def calculate_tax(income, rate=0.25):
    tax = income * rate
    return tax

my_tax = calculate_tax(50000)
print(f"Tax owed: \${my_tax}")</code></pre>
                        <h3>Why Functions Matter</h3>
                        <ul>
                            <li><strong>DRY principle:</strong> Don't Repeat Yourself — write once, use many times</li>
                            <li><strong>Readability:</strong> Named functions make code self-documenting</li>
                            <li><strong>Testing:</strong> Small functions are easier to test and debug</li>
                        </ul>
                    `,
                    quiz: {
                        question: 'What does the DRY principle stand for?',
                        options: ['Do Run Yourself', 'Don\'t Repeat Yourself', 'Data Returns Yield', 'Debug Run Yourself'],
                        correct: 1
                    }
                },
                {
                    id: 'file-handling',
                    title: 'File Handling',
                    content: `
                        <h2>File Handling</h2>
                        <p>Python makes it easy to read, write, and manipulate files — a critical skill for data processing and automation.</p>
                        <h3>Reading Files</h3>
                        <pre><code>with open("data.txt", "r") as file:
    content = file.read()
    print(content)</code></pre>
                        <h3>Writing Files</h3>
                        <pre><code>with open("output.txt", "w") as file:
    file.write("Hello, World!")

# Append to existing file
with open("log.txt", "a") as file:
    file.write("New log entry\\n")</code></pre>
                        <h3>Working with CSV</h3>
                        <pre><code>import csv

with open("data.csv", "r") as file:
    reader = csv.reader(file)
    for row in reader:
        print(row)</code></pre>
                        <h3>The 'with' Statement</h3>
                        <p>Always use <code>with</code> when opening files. It automatically closes the file when done, even if an error occurs. This prevents resource leaks.</p>
                        <div class="highlight">
                            <strong>Practical Use:</strong> File handling is how you automate reports, process data, manage logs, and interact with external systems.
                        </div>
                    `,
                    quiz: {
                        question: 'Why should you use the "with" statement when opening files in Python?',
                        options: [
                            'It makes the file read faster',
                            'It automatically closes the file when done, preventing resource leaks',
                            'It is required by Python syntax',
                            'It encrypts the file contents'
                        ],
                        correct: 1
                    }
                },
                {
                    id: 'libraries',
                    title: 'Libraries & Packages',
                    content: `
                        <h2>Libraries & Packages</h2>
                        <p>Python's real power comes from its ecosystem of libraries. Instead of writing everything from scratch, you import pre-built solutions.</p>
                        <h3>Installing Packages</h3>
                        <p>Use pip (Python's package manager): <code>pip install requests</code></p>
                        <h3>Essential Libraries</h3>
                        <ul>
                            <li><strong>requests:</strong> Make HTTP requests and work with APIs</li>
                            <li><strong>pandas:</strong> Data manipulation and analysis (spreadsheets on steroids)</li>
                            <li><strong>NumPy:</strong> Numerical computing with arrays and math operations</li>
                            <li><strong>matplotlib:</strong> Create charts and data visualizations</li>
                            <li><strong>Flask / Django:</strong> Build web applications</li>
                            <li><strong>Beautiful Soup:</strong> Web scraping — extract data from websites</li>
                        </ul>
                        <h3>Using Libraries</h3>
                        <pre><code>import requests

response = requests.get("https://api.example.com/data")
data = response.json()
print(data)</code></pre>
                        <h3>Virtual Environments</h3>
                        <p>Use virtual environments to keep project dependencies separate:</p>
                        <pre><code>python -m venv myenv
source myenv/bin/activate  # Mac/Linux
pip install requests</code></pre>
                    `,
                    quiz: {
                        question: 'What is pip used for in Python?',
                        options: [
                            'Running Python scripts',
                            'Installing and managing third-party packages',
                            'Debugging Python code',
                            'Compiling Python to machine code'
                        ],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 3,
            title: 'Real-World Python',
            subtitle: 'Object-oriented programming and building projects',
            topics: [
                {
                    id: 'oop-basics',
                    title: 'Object-Oriented Programming',
                    content: `
                        <h2>Object-Oriented Programming (OOP)</h2>
                        <p>OOP is a way of organizing code around "objects" that combine data and behavior. It's how professional software is built.</p>
                        <h3>Classes and Objects</h3>
                        <pre><code>class BankAccount:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance
    
    def deposit(self, amount):
        self.balance += amount
        return f"Deposited \${amount}. Balance: \${self.balance}"
    
    def withdraw(self, amount):
        if amount > self.balance:
            return "Insufficient funds"
        self.balance -= amount
        return f"Withdrew \${amount}. Balance: \${self.balance}"

account = BankAccount("Marcus", 1000)
print(account.deposit(500))
print(account.withdraw(200))</code></pre>
                        <h3>Key OOP Concepts</h3>
                        <ul>
                            <li><strong>Class:</strong> A blueprint for creating objects</li>
                            <li><strong>Object:</strong> An instance of a class</li>
                            <li><strong>__init__:</strong> The constructor — runs when an object is created</li>
                            <li><strong>self:</strong> Refers to the current instance of the class</li>
                            <li><strong>Methods:</strong> Functions that belong to a class</li>
                            <li><strong>Inheritance:</strong> Creating new classes based on existing ones</li>
                        </ul>
                    `,
                    quiz: {
                        question: 'What is the __init__ method in a Python class?',
                        options: [
                            'A method that deletes the object',
                            'The constructor that runs when a new object is created',
                            'A way to import modules',
                            'The main function of the program'
                        ],
                        correct: 1
                    }
                },
                {
                    id: 'error-handling',
                    title: 'Error Handling',
                    content: `
                        <h2>Error Handling</h2>
                        <p>Errors are inevitable. Good programs anticipate them and handle them gracefully instead of crashing.</p>
                        <h3>Try/Except</h3>
                        <pre><code>try:
    number = int(input("Enter a number: "))
    result = 100 / number
    print(f"Result: {result}")
except ValueError:
    print("That's not a valid number")
except ZeroDivisionError:
    print("Cannot divide by zero")
except Exception as e:
    print(f"Something went wrong: {e}")
finally:
    print("This always runs")</code></pre>
                        <h3>Common Errors</h3>
                        <ul>
                            <li><strong>SyntaxError:</strong> Code structure is wrong (missing colon, bad indentation)</li>
                            <li><strong>NameError:</strong> Using a variable that doesn't exist</li>
                            <li><strong>TypeError:</strong> Wrong data type for an operation</li>
                            <li><strong>ValueError:</strong> Right type but wrong value</li>
                            <li><strong>IndexError:</strong> Accessing a list index that doesn't exist</li>
                            <li><strong>KeyError:</strong> Accessing a dictionary key that doesn't exist</li>
                        </ul>
                        <div class="highlight">
                            <strong>Best Practice:</strong> Catch specific exceptions, not just generic <code>Exception</code>. This helps you understand what went wrong and handle each case appropriately.
                        </div>
                    `,
                    quiz: {
                        question: 'What does the "finally" block do in error handling?',
                        options: [
                            'It only runs if there is an error',
                            'It runs after all try/except blocks regardless of whether an error occurred',
                            'It prevents all errors from occurring',
                            'It restarts the program'
                        ],
                        correct: 1
                    }
                },
                {
                    id: 'project-ideas',
                    title: 'Building Real Projects',
                    content: `
                        <h2>Building Real Projects</h2>
                        <p>The best way to learn programming is by building things. Here are project ideas organized by difficulty.</p>
                        <h3>Beginner Projects</h3>
                        <ul>
                            <li><strong>Calculator:</strong> Basic math operations with user input</li>
                            <li><strong>To-do list:</strong> Add, remove, and display tasks (file-based storage)</li>
                            <li><strong>Password generator:</strong> Create random strong passwords</li>
                            <li><strong>Quiz game:</strong> Multiple choice questions with scoring</li>
                        </ul>
                        <h3>Intermediate Projects</h3>
                        <ul>
                            <li><strong>Budget tracker:</strong> Track income and expenses, generate reports</li>
                            <li><strong>Web scraper:</strong> Extract data from websites (Beautiful Soup + requests)</li>
                            <li><strong>API consumer:</strong> Build an app that uses a public API (weather, news, etc.)</li>
                            <li><strong>File organizer:</strong> Automatically sort files into folders by type</li>
                        </ul>
                        <h3>Advanced Projects</h3>
                        <ul>
                            <li><strong>Web app with Flask:</strong> Full CRUD application with database</li>
                            <li><strong>Data analysis pipeline:</strong> Process and visualize real datasets with pandas</li>
                            <li><strong>Discord/Telegram bot:</strong> Automate tasks within messaging platforms</li>
                            <li><strong>Portfolio website:</strong> Dynamic site that serves your resume and projects</li>
                        </ul>
                        <h3>Learning Path</h3>
                        <ol>
                            <li><strong>Weeks 1-2:</strong> Variables, control flow, basic syntax</li>
                            <li><strong>Weeks 3-4:</strong> Functions, file handling, modules</li>
                            <li><strong>Weeks 5-6:</strong> OOP, error handling, libraries</li>
                            <li><strong>Weeks 7-8:</strong> Choose a specialization and build 2-3 projects</li>
                        </ol>
                        <div class="highlight">
                            <strong>Portfolio Tip:</strong> Put your projects on GitHub. Employers and clients want to see what you can build, not just what courses you've taken.
                        </div>
                    `,
                    quiz: {
                        question: 'What is the best way to demonstrate your Python skills to employers?',
                        options: [
                            'List courses you have taken on your resume',
                            'Build real projects and publish them on GitHub',
                            'Memorize Python documentation',
                            'Get as many certifications as possible'
                        ],
                        correct: 1
                    }
                }
            ]
        }
    ],
    finalExam: [
        {
            question: 'What makes Python particularly good for beginners?',
            options: ['It is the fastest programming language', 'It has clean, readable syntax that resembles English', 'It only works on Windows', 'It requires no installation'],
            correct: 1
        },
        {
            question: 'What data structure uses key-value pairs in Python?',
            options: ['List', 'Tuple', 'Dictionary', 'Set'],
            correct: 2
        },
        {
            question: 'What does Python use instead of curly braces for code blocks?',
            options: ['Parentheses', 'Square brackets', 'Indentation', 'Semicolons'],
            correct: 2
        },
        {
            question: 'What is the purpose of the "return" keyword in a function?',
            options: ['To print output to the screen', 'To send a value back to the caller', 'To exit the program', 'To import a library'],
            correct: 1
        },
        {
            question: 'Which library would you use to make HTTP requests in Python?',
            options: ['pandas', 'numpy', 'requests', 'matplotlib'],
            correct: 2
        },
        {
            question: 'What is a class in Object-Oriented Programming?',
            options: ['A type of variable', 'A blueprint for creating objects', 'A type of loop', 'A Python file'],
            correct: 1
        },
        {
            question: 'What happens in a "try/except" block if no error occurs?',
            options: ['The except block runs', 'Only the try block runs', 'Both blocks run', 'The program crashes'],
            correct: 1
        },
        {
            question: 'What is a virtual environment used for in Python?',
            options: ['Running Python in virtual reality', 'Keeping project dependencies separate and isolated', 'Making Python run faster', 'Encrypting Python code'],
            correct: 1
        }
    ]
};
