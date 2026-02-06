// Data Science Curriculum Data
const datascienceData = {
    id: 'datascience',
    title: 'Data Science',
    icon: '📊',
    description: 'Learn to analyze data, build visualizations, and extract insights that drive decisions.',
    graduationGoal: 'Analyze real datasets and create data-driven insights',
    difficulty: 'intermediate',
    prerequisites: ['python'],
    learningObjectives: [
        'Clean and prepare data for analysis',
        'Use Python libraries (pandas, numpy, matplotlib)',
        'Build data visualizations and dashboards',
        'Apply statistical analysis and machine learning basics',
        'Extract actionable insights from data'
    ],
    relatedTracks: ['python', 'financialanalysis'],
    resources: [
        { title: 'Kaggle Learn', url: 'https://www.kaggle.com/learn' },
        { title: 'DataCamp', url: 'https://www.datacamp.com/' }
    ],
    levels: [
        {
            id: 1,
            title: 'Data Science Foundations',
            subtitle: 'What data science is and the tools you need',
            topics: [
                {
                    id: 'what-is-data-science',
                    title: 'What is Data Science?',
                    content: `
                        <h2>What is Data Science?</h2>
                        <p>Data science is the practice of extracting meaningful insights from data. It combines statistics, programming, and domain knowledge to answer questions and solve problems.</p>
                        <h3>What Data Scientists Do</h3>
                        <ul>
                            <li><strong>Analyze trends:</strong> "Are sales increasing? Which products drive revenue?"</li>
                            <li><strong>Build predictions:</strong> "Which customers will churn? What will demand look like?"</li>
                            <li><strong>Create visualizations:</strong> Turn raw data into clear charts and dashboards</li>
                            <li><strong>Machine learning:</strong> Build models that learn from data and make predictions</li>
                        </ul>
                        <h3>Why It's In Demand</h3>
                        <ul>
                            <li><strong>Salary:</strong> $85K-$175K+ (one of the highest-paid tech roles)</li>
                            <li><strong>Every industry needs it:</strong> Healthcare, finance, tech, sports, retail, government</li>
                            <li><strong>Data is exploding:</strong> More data is generated daily than in all of human history combined</li>
                        </ul>
                        <h3>Required Skills</h3>
                        <ul>
                            <li><strong>Python or R:</strong> Programming languages for data analysis</li>
                            <li><strong>Statistics:</strong> Understanding distributions, correlation, hypothesis testing</li>
                            <li><strong>SQL:</strong> Querying databases to extract data</li>
                            <li><strong>Visualization:</strong> Creating charts and dashboards that tell stories</li>
                        </ul>
                    `,
                    quiz: {
                        question: 'What salary range can data scientists expect?',
                        options: ['$30K-$50K', '$85K-$175K+', 'Data science doesn\'t pay well', '$500K minimum'],
                        correct: 1
                    }
                },
                {
                    id: 'python-for-data',
                    title: 'Python for Data Science',
                    content: `
                        <h2>Python for Data Science</h2>
                        <p>Python is the dominant language for data science. Its libraries make complex analysis accessible.</p>
                        <h3>Essential Libraries</h3>
                        <ul>
                            <li><strong>pandas:</strong> Data manipulation — think of it as Excel on steroids. DataFrames for tabular data.</li>
                            <li><strong>NumPy:</strong> Numerical computing — arrays, math operations, linear algebra.</li>
                            <li><strong>matplotlib:</strong> Basic plotting and charts.</li>
                            <li><strong>seaborn:</strong> Statistical visualizations built on matplotlib (prettier, easier).</li>
                            <li><strong>scikit-learn:</strong> Machine learning — classification, regression, clustering.</li>
                        </ul>
                        <h3>Working with pandas</h3>
                        <pre><code>import pandas as pd

# Load data
df = pd.read_csv("sales.csv")

# Explore
print(df.head())        # First 5 rows
print(df.describe())    # Summary statistics
print(df.info())        # Data types and missing values

# Analyze
avg_revenue = df["revenue"].mean()
top_products = df.groupby("product")["revenue"].sum().sort_values(ascending=False)</code></pre>
                        <h3>Getting Started</h3>
                        <p>Use Jupyter Notebooks (interactive coding) or Google Colab (free, runs in browser). Both let you write code, see results, and create visualizations inline.</p>
                    `,
                    quiz: {
                        question: 'Which Python library is used for data manipulation with DataFrames?',
                        options: ['NumPy', 'matplotlib', 'pandas', 'scikit-learn'],
                        correct: 2
                    }
                },
                {
                    id: 'statistics-basics',
                    title: 'Statistics for Data Science',
                    content: `
                        <h2>Statistics for Data Science</h2>
                        <p>Statistics is the backbone of data science. You don't need a PhD — but you need to understand the core concepts.</p>
                        <h3>Descriptive Statistics</h3>
                        <ul>
                            <li><strong>Mean:</strong> Average value</li>
                            <li><strong>Median:</strong> Middle value (less affected by outliers)</li>
                            <li><strong>Mode:</strong> Most common value</li>
                            <li><strong>Standard Deviation:</strong> How spread out the data is</li>
                        </ul>
                        <h3>Key Concepts</h3>
                        <ul>
                            <li><strong>Correlation:</strong> How two variables relate. Positive (both increase), negative (one up, other down), or none.</li>
                            <li><strong>Correlation ≠ Causation:</strong> Ice cream sales and drowning deaths correlate (both peak in summer) but ice cream doesn't cause drowning.</li>
                            <li><strong>Distribution:</strong> How data is spread. Normal distribution (bell curve) is the most common.</li>
                            <li><strong>Outliers:</strong> Extreme values that can skew analysis. Always investigate them.</li>
                        </ul>
                        <h3>Probability Basics</h3>
                        <ul>
                            <li><strong>Probability:</strong> Likelihood of an event (0 = impossible, 1 = certain)</li>
                            <li><strong>Conditional probability:</strong> Probability of A given B has occurred</li>
                            <li><strong>Bayes' theorem:</strong> Updating probabilities as new evidence appears</li>
                        </ul>
                        <div class="highlight">
                            <strong>Practical Tip:</strong> You don't need to memorize formulas. You need to understand when to use which statistical test and how to interpret results.
                        </div>
                    `,
                    quiz: {
                        question: 'Why does correlation not equal causation?',
                        options: ['Because math is imperfect', 'Because two things can be related without one causing the other', 'Because causation is always negative', 'Because statistics are always wrong'],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 2,
            title: 'Applied Data Science',
            subtitle: 'Machine learning, visualization, and real-world projects',
            topics: [
                {
                    id: 'data-visualization',
                    title: 'Data Visualization',
                    content: `
                        <h2>Data Visualization</h2>
                        <p>The best analysis is useless if nobody understands it. Visualization turns numbers into stories.</p>
                        <h3>Chart Types & When to Use Them</h3>
                        <ul>
                            <li><strong>Bar chart:</strong> Comparing categories (sales by region)</li>
                            <li><strong>Line chart:</strong> Trends over time (monthly revenue)</li>
                            <li><strong>Scatter plot:</strong> Relationship between two variables (income vs education)</li>
                            <li><strong>Histogram:</strong> Distribution of a single variable (age distribution)</li>
                            <li><strong>Pie chart:</strong> Parts of a whole (market share) — use sparingly</li>
                            <li><strong>Heatmap:</strong> Patterns in matrix data (correlation between variables)</li>
                        </ul>
                        <h3>Visualization Best Practices</h3>
                        <ul>
                            <li>Every chart should answer one clear question</li>
                            <li>Label axes and include units</li>
                            <li>Don't use 3D charts — they distort perception</li>
                            <li>Use color intentionally, not decoratively</li>
                            <li>Start bar chart axes at zero to avoid misleading</li>
                        </ul>
                        <h3>Tools</h3>
                        <ul>
                            <li><strong>matplotlib + seaborn:</strong> Python libraries for static charts</li>
                            <li><strong>Plotly:</strong> Interactive charts in Python</li>
                            <li><strong>Tableau:</strong> Professional dashboard tool (free public version)</li>
                            <li><strong>Power BI:</strong> Microsoft's analytics tool</li>
                        </ul>
                    `,
                    quiz: {
                        question: 'Which chart type is best for showing trends over time?',
                        options: ['Pie chart', 'Bar chart', 'Line chart', 'Scatter plot'],
                        correct: 2
                    }
                },
                {
                    id: 'ml-intro',
                    title: 'Intro to Machine Learning',
                    content: `
                        <h2>Intro to Machine Learning</h2>
                        <p>Machine learning is teaching computers to learn from data and make predictions or decisions without being explicitly programmed.</p>
                        <h3>Types of ML</h3>
                        <ul>
                            <li><strong>Supervised Learning:</strong> Learning from labeled data. "Here are 1000 emails labeled spam/not-spam — learn to classify new ones."</li>
                            <li><strong>Unsupervised Learning:</strong> Finding patterns in unlabeled data. "Group these customers into segments based on behavior."</li>
                            <li><strong>Reinforcement Learning:</strong> Learning by trial and error with rewards. "Play this game millions of times and learn the best strategy."</li>
                        </ul>
                        <h3>Common Algorithms</h3>
                        <ul>
                            <li><strong>Linear Regression:</strong> Predict a number (house price based on features)</li>
                            <li><strong>Logistic Regression:</strong> Predict yes/no (will customer buy?)</li>
                            <li><strong>Decision Trees / Random Forest:</strong> Rule-based predictions</li>
                            <li><strong>K-Means Clustering:</strong> Group similar data points together</li>
                        </ul>
                        <h3>The ML Workflow</h3>
                        <ol>
                            <li>Collect and clean data</li>
                            <li>Explore and visualize</li>
                            <li>Choose and train a model</li>
                            <li>Evaluate performance</li>
                            <li>Deploy and monitor</li>
                        </ol>
                    `,
                    quiz: {
                        question: 'What is supervised learning?',
                        options: ['Learning with a human supervisor watching', 'Learning from labeled data to make predictions on new data', 'Learning without any data', 'A type of reinforcement learning'],
                        correct: 1
                    }
                },
                {
                    id: 'ds-career',
                    title: 'Data Science Career Path',
                    content: `
                        <h2>Data Science Career Path</h2>
                        <h3>Roles in Data</h3>
                        <ul>
                            <li><strong>Data Analyst:</strong> $55K-$95K. Query data, create reports and dashboards. Entry point.</li>
                            <li><strong>Data Scientist:</strong> $85K-$175K. Statistical analysis, ML models, experimentation.</li>
                            <li><strong>Data Engineer:</strong> $90K-$165K. Build data pipelines and infrastructure.</li>
                            <li><strong>ML Engineer:</strong> $100K-$200K. Deploy and optimize ML models in production.</li>
                        </ul>
                        <h3>Learning Path</h3>
                        <ol>
                            <li><strong>Month 1-2:</strong> Python basics + pandas + SQL</li>
                            <li><strong>Month 3-4:</strong> Statistics + visualization</li>
                            <li><strong>Month 5-6:</strong> Machine learning with scikit-learn</li>
                            <li><strong>Month 7+:</strong> Portfolio projects with real datasets</li>
                        </ol>
                        <h3>Portfolio Projects</h3>
                        <ul>
                            <li>Exploratory data analysis on a public dataset (Kaggle)</li>
                            <li>Build a prediction model (housing prices, customer churn)</li>
                            <li>Create an interactive dashboard</li>
                            <li>End-to-end project with data collection, analysis, and presentation</li>
                        </ul>
                        <div class="highlight">
                            <strong>Getting Started:</strong> You don't need a math degree. Start with Python + pandas + SQL. Do Kaggle competitions. Build projects. Many successful data scientists are self-taught.
                        </div>
                    `,
                    quiz: {
                        question: 'What is the recommended entry point into the data field?',
                        options: ['ML Engineer', 'Chief Data Officer', 'Data Analyst', 'AI Researcher'],
                        correct: 2
                    }
                }
            ]
        }
    ],
    finalExam: [
        { question: 'What are the three core skills for data science?', options: ['Drawing, writing, speaking', 'Programming, statistics, and domain knowledge', 'Marketing, sales, and design', 'HTML, CSS, and JavaScript'], correct: 1 },
        { question: 'Which Python library is used for data manipulation?', options: ['Flask', 'pandas', 'React', 'TensorFlow'], correct: 1 },
        { question: 'What does "correlation does not equal causation" mean?', options: ['Statistics are unreliable', 'Two related things may not have a cause-effect relationship', 'Correlation is better than causation', 'Causation always implies correlation'], correct: 1 },
        { question: 'Which chart type is best for comparing categories?', options: ['Line chart', 'Scatter plot', 'Bar chart', 'Histogram'], correct: 2 },
        { question: 'What is supervised learning?', options: ['Learning without data', 'Training on labeled data to predict new outcomes', 'Learning by watching videos', 'A human teaches the computer manually'], correct: 1 },
        { question: 'What is a good entry-level data role?', options: ['Chief Data Officer', 'ML Engineer', 'Data Analyst', 'VP of Analytics'], correct: 2 }
    ]
};
