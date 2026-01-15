// AI Tools & Automation Curriculum Data
const aiData = {
    id: 'ai',
    title: 'AI Tools & Automation',
    icon: '🤖',
    description: 'Learn to use AI tools effectively for productivity, creativity, and business.',
    graduationGoal: 'Use AI tools effectively in work and life',
    levels: [
        {
            id: 1,
            title: 'AI Fundamentals',
            subtitle: 'Understanding what AI can and cannot do',
            topics: [
                {
                    id: 'what-is-ai',
                    title: 'What is AI?',
                    content: `
                        <h2>What is AI?</h2>
                        <div class="definition">
                            <strong>Artificial Intelligence:</strong> Computer systems that can perform tasks typically requiring human intelligence—learning, reasoning, problem-solving, and creativity.
                        </div>
                        <h3>Types of AI You'll Encounter</h3>
                        <ul>
                            <li><strong>Large Language Models (LLMs):</strong> ChatGPT, Claude, Gemini—text generation and conversation</li>
                            <li><strong>Image Generation:</strong> DALL-E, Midjourney, Stable Diffusion</li>
                            <li><strong>Voice/Audio:</strong> Speech-to-text, text-to-speech, music generation</li>
                            <li><strong>Video:</strong> Editing assistance, generation (emerging)</li>
                            <li><strong>Code Assistants:</strong> GitHub Copilot, Cursor</li>
                        </ul>
                        <h3>What AI Does Well</h3>
                        <ul>
                            <li>Processing and summarizing large amounts of text</li>
                            <li>Generating first drafts and ideas</li>
                            <li>Translating and transforming content</li>
                            <li>Answering questions and explaining concepts</li>
                            <li>Repetitive task automation</li>
                        </ul>
                        <div class="highlight">
                            <strong>Key Understanding:</strong> AI is a powerful tool, not magic. It amplifies your abilities but requires human judgment to use effectively.
                        </div>
                    `
                },
                {
                    id: 'ai-limitations',
                    title: 'AI Limitations and Risks',
                    content: `
                        <h2>AI Limitations and Risks</h2>
                        <h3>What AI Does NOT Do Well</h3>
                        <ul>
                            <li><strong>Factual accuracy:</strong> Can "hallucinate" false information confidently</li>
                            <li><strong>Current events:</strong> Knowledge has cutoff dates</li>
                            <li><strong>Math:</strong> Often makes calculation errors</li>
                            <li><strong>Specialized domains:</strong> Legal, medical advice unreliable</li>
                            <li><strong>True understanding:</strong> Patterns words, doesn't "know"</li>
                        </ul>
                        <h3>Risks to Be Aware Of</h3>
                        <ul>
                            <li><strong>Privacy:</strong> Don't input sensitive data</li>
                            <li><strong>Plagiarism:</strong> AI may reproduce copyrighted content</li>
                            <li><strong>Bias:</strong> AI reflects biases in training data</li>
                            <li><strong>Over-reliance:</strong> Your skills atrophy if you don't practice</li>
                        </ul>
                        <h3>Best Practices</h3>
                        <ul>
                            <li>Always verify important facts</li>
                            <li>Don't share confidential information</li>
                            <li>Use as a starting point, not final product</li>
                            <li>Understand the output before using it</li>
                        </ul>
                        <div class="highlight">
                            <strong>Golden Rule:</strong> Never trust AI output blindly. Always verify, especially for anything important.
                        </div>
                    `
                }
            ],
            quiz: [
                {
                    question: 'What is a major limitation of AI language models?',
                    options: [
                        'They can\'t write long content',
                        'They may confidently state false information (hallucinations)',
                        'They only work in English',
                        'They require internet connection'
                    ],
                    correct: 1,
                    explanation: 'AI can "hallucinate"—generate confident-sounding but false information. Always verify important facts from AI output.'
                },
                {
                    question: 'What should you NOT input into AI tools?',
                    options: [
                        'Creative writing prompts',
                        'Questions about public information',
                        'Sensitive personal or confidential business data',
                        'Requests for explanations'
                    ],
                    correct: 2,
                    explanation: 'Never input sensitive personal data, confidential business information, or private customer data into AI tools due to privacy and security concerns.'
                }
            ]
        },
        {
            id: 2,
            title: 'Prompt Engineering',
            subtitle: 'Getting better results from AI',
            topics: [
                {
                    id: 'prompt-basics',
                    title: 'Prompt Engineering Basics',
                    content: `
                        <h2>Prompt Engineering Basics</h2>
                        <div class="definition">
                            <strong>Prompt Engineering:</strong> The art of crafting effective instructions to get better results from AI systems.
                        </div>
                        <h3>The CRISP Framework</h3>
                        <ul>
                            <li><strong>C</strong>ontext: Background information</li>
                            <li><strong>R</strong>ole: Who should the AI act as?</li>
                            <li><strong>I</strong>nstructions: What exactly do you want?</li>
                            <li><strong>S</strong>pecifics: Format, length, style requirements</li>
                            <li><strong>P</strong>attern: Examples of what you want</li>
                        </ul>
                        <h3>Bad vs Good Prompts</h3>
                        <div class="example">
                            <strong>Bad:</strong> "Write about marketing"<br><br>
                            <strong>Good:</strong> "You are an experienced digital marketing consultant. Write a 500-word blog post about email marketing strategies for small e-commerce businesses. Include 5 actionable tips with examples. Use a conversational tone suitable for business owners who are new to email marketing."
                        </div>
                        <div class="highlight">
                            <strong>Key Insight:</strong> The quality of your output is directly proportional to the quality of your input. Invest time in your prompts.
                        </div>
                    `
                },
                {
                    id: 'advanced-prompting',
                    title: 'Advanced Prompting Techniques',
                    content: `
                        <h2>Advanced Prompting Techniques</h2>
                        <h3>Chain-of-Thought</h3>
                        <p>Ask AI to think step-by-step for complex problems:</p>
                        <div class="example">
                            "Let's think through this step by step..."<br>
                            "First, analyze X. Then, consider Y. Finally, conclude Z."
                        </div>
                        <h3>Few-Shot Learning</h3>
                        <p>Provide examples of what you want:</p>
                        <div class="example">
                            "Here are examples of the format I want:<br>
                            Input: X → Output: Y<br>
                            Input: A → Output: B<br>
                            Now do: Input: C → Output: ?"
                        </div>
                        <h3>Role Assignment</h3>
                        <div class="example">
                            "Act as a senior software engineer reviewing code for bugs..."<br>
                            "You are a financial advisor explaining concepts to a beginner..."
                        </div>
                        <h3>Iterative Refinement</h3>
                        <ul>
                            <li>Start broad, then narrow down</li>
                            <li>"That's good, now make it more concise"</li>
                            <li>"Focus more on X aspect"</li>
                            <li>"Add more examples"</li>
                        </ul>
                        <div class="highlight">
                            <strong>Pro Tip:</strong> Treat AI conversations as collaborative. Give feedback and iterate rather than expecting perfection on the first try.
                        </div>
                    `
                }
            ],
            quiz: [
                {
                    question: 'What does the "R" in CRISP stand for?',
                    options: ['Results', 'Role', 'Repetition', 'Reference'],
                    correct: 1,
                    explanation: 'R stands for Role—telling the AI who it should act as (e.g., "You are an experienced marketing consultant").'
                },
                {
                    question: 'What is few-shot learning in prompting?',
                    options: [
                        'Asking for short responses',
                        'Providing examples of the desired output format',
                        'Using the AI briefly',
                        'Learning about AI in a few minutes'
                    ],
                    correct: 1,
                    explanation: 'Few-shot learning means providing examples of input-output pairs so the AI understands exactly what format and style you want.'
                }
            ]
        },
        {
            id: 3,
            title: 'AI for Productivity',
            subtitle: 'Using AI to work smarter',
            topics: [
                {
                    id: 'writing-assistant',
                    title: 'AI for Writing and Communication',
                    content: `
                        <h2>AI for Writing and Communication</h2>
                        <h3>Use Cases</h3>
                        <ul>
                            <li><strong>Drafting:</strong> First drafts of emails, reports, posts</li>
                            <li><strong>Editing:</strong> Grammar, clarity, tone adjustment</li>
                            <li><strong>Summarizing:</strong> Condense long documents</li>
                            <li><strong>Translating:</strong> Language and communication style</li>
                            <li><strong>Brainstorming:</strong> Generate ideas and alternatives</li>
                        </ul>
                        <h3>Example Prompts</h3>
                        <div class="example">
                            <strong>Email drafting:</strong><br>
                            "Write a professional email declining a meeting invitation. I'm busy that day but want to reschedule. Keep it brief and friendly."<br><br>
                            <strong>Editing:</strong><br>
                            "Make this paragraph more concise while keeping the main points: [paste text]"<br><br>
                            <strong>Tone adjustment:</strong><br>
                            "Rewrite this email to sound more assertive: [paste text]"
                        </div>
                        <div class="highlight">
                            <strong>Best Practice:</strong> Use AI for first drafts, then edit with your voice. The final product should sound like you, not a robot.
                        </div>
                    `
                },
                {
                    id: 'research-learning',
                    title: 'AI for Research and Learning',
                    content: `
                        <h2>AI for Research and Learning</h2>
                        <h3>Research Applications</h3>
                        <ul>
                            <li>Explain complex concepts simply</li>
                            <li>Summarize long articles or papers</li>
                            <li>Compare multiple options/viewpoints</li>
                            <li>Generate questions to explore</li>
                            <li>Create study materials and flashcards</li>
                        </ul>
                        <h3>Learning Enhancement Prompts</h3>
                        <div class="example">
                            "Explain [complex topic] like I'm 12 years old"<br><br>
                            "What are the 5 most important concepts in [subject]?"<br><br>
                            "Compare and contrast [A] and [B] in table format"<br><br>
                            "Quiz me on [topic] with 5 questions"<br><br>
                            "What questions should I be asking about [topic]?"
                        </div>
                        <h3>Verification Strategy</h3>
                        <ul>
                            <li>Cross-reference with authoritative sources</li>
                            <li>Ask AI for its sources (then verify those)</li>
                            <li>Be skeptical of specific numbers and dates</li>
                        </ul>
                        <div class="highlight">
                            <strong>Learning Hack:</strong> Use AI as a patient tutor that can explain things multiple ways until you understand. Ask follow-up questions freely.
                        </div>
                    `
                }
            ],
            quiz: [
                {
                    question: 'What is the best practice when using AI for writing?',
                    options: [
                        'Use AI output exactly as-is',
                        'Use AI for first drafts, then edit to add your voice',
                        'Never use AI for writing',
                        'Only use AI for formal documents'
                    ],
                    correct: 1,
                    explanation: 'AI is great for first drafts and ideas, but always edit the output to add your personal voice and ensure accuracy.'
                },
                {
                    question: 'How should you verify AI-generated research?',
                    options: [
                        'Trust it completely if it sounds confident',
                        'Cross-reference with authoritative sources',
                        'Only verify statistics',
                        'Ask the same AI if it\'s correct'
                    ],
                    correct: 1,
                    explanation: 'Always verify important information with authoritative sources. AI can sound confident while being wrong.'
                }
            ]
        },
        {
            id: 4,
            title: 'AI for Business',
            subtitle: 'Business applications of AI tools',
            topics: [
                {
                    id: 'business-applications',
                    title: 'Business Use Cases',
                    content: `
                        <h2>Business Use Cases for AI</h2>
                        <h3>Content Creation</h3>
                        <ul>
                            <li>Blog posts and articles</li>
                            <li>Social media content</li>
                            <li>Email campaigns</li>
                            <li>Product descriptions</li>
                            <li>Ad copy variations</li>
                        </ul>
                        <h3>Customer Service</h3>
                        <ul>
                            <li>Draft response templates</li>
                            <li>FAQ generation</li>
                            <li>Chatbot scripting</li>
                            <li>Sentiment analysis</li>
                        </ul>
                        <h3>Analysis and Strategy</h3>
                        <ul>
                            <li>Summarize competitor research</li>
                            <li>Generate SWOT analyses</li>
                            <li>Brainstorm marketing strategies</li>
                            <li>Create business plans</li>
                        </ul>
                        <h3>Operations</h3>
                        <ul>
                            <li>Meeting notes and summaries</li>
                            <li>Process documentation</li>
                            <li>Training materials</li>
                            <li>Standard operating procedures</li>
                        </ul>
                        <div class="highlight">
                            <strong>ROI Focus:</strong> Start with high-volume, repetitive tasks. If you do something weekly that takes 2 hours and AI cuts it to 30 minutes, that's 78 hours saved per year.
                        </div>
                    `
                },
                {
                    id: 'automation-workflows',
                    title: 'Building AI Workflows',
                    content: `
                        <h2>Building AI Workflows</h2>
                        <h3>Automation Tools</h3>
                        <ul>
                            <li><strong>Zapier:</strong> Connect apps with AI actions</li>
                            <li><strong>Make (Integromat):</strong> Complex workflow automation</li>
                            <li><strong>ChatGPT API:</strong> Build custom AI applications</li>
                            <li><strong>IFTTT:</strong> Simple automations</li>
                        </ul>
                        <h3>Example Automated Workflows</h3>
                        <div class="example">
                            <strong>Content Workflow:</strong><br>
                            1. New blog post idea entered<br>
                            2. AI generates outline<br>
                            3. AI expands to first draft<br>
                            4. Human edits and approves<br>
                            5. Auto-publish and share<br><br>
                            <strong>Customer Support:</strong><br>
                            1. Support ticket received<br>
                            2. AI categorizes and prioritizes<br>
                            3. AI drafts response<br>
                            4. Agent reviews and sends
                        </div>
                        <h3>Building Your First Automation</h3>
                        <ol>
                            <li>Identify repetitive task</li>
                            <li>Break into steps</li>
                            <li>Find tools for each step</li>
                            <li>Connect with automation platform</li>
                            <li>Test and refine</li>
                        </ol>
                        <div class="highlight">
                            <strong>Start Small:</strong> Automate one small thing well before building complex workflows.
                        </div>
                    `
                }
            ],
            quiz: [
                {
                    question: 'What should you focus on first when implementing AI in business?',
                    options: [
                        'The most complex tasks',
                        'High-volume, repetitive tasks with clear ROI',
                        'Customer-facing applications only',
                        'Tasks requiring deep expertise'
                    ],
                    correct: 1,
                    explanation: 'Start with repetitive, high-volume tasks where time savings are clear and measurable. These provide the quickest ROI.'
                },
                {
                    question: 'What is Zapier used for?',
                    options: [
                        'AI image generation',
                        'Connecting apps and creating automated workflows',
                        'Video editing',
                        'Social media management'
                    ],
                    correct: 1,
                    explanation: 'Zapier connects different apps and services, allowing you to create automated workflows (like: when X happens, do Y with AI).'
                }
            ]
        },
        {
            id: 5,
            title: 'Staying Ahead',
            subtitle: 'Keeping up with AI developments',
            topics: [
                {
                    id: 'ai-future',
                    title: 'The Future of AI',
                    content: `
                        <h2>The Future of AI</h2>
                        <h3>Trends to Watch</h3>
                        <ul>
                            <li><strong>Multimodal AI:</strong> Understanding text, images, video together</li>
                            <li><strong>AI Agents:</strong> AI that can take actions, not just respond</li>
                            <li><strong>Specialized Models:</strong> Domain-specific AI (legal, medical, code)</li>
                            <li><strong>Local AI:</strong> Running AI on your device</li>
                            <li><strong>Real-time AI:</strong> Instant processing of live information</li>
                        </ul>
                        <h3>Jobs and AI</h3>
                        <ul>
                            <li>AI replaces tasks, not entire jobs (usually)</li>
                            <li>Those who use AI will replace those who don't</li>
                            <li>New jobs will emerge around AI</li>
                            <li>Human skills (creativity, empathy, judgment) remain valuable</li>
                        </ul>
                        <h3>Staying Relevant</h3>
                        <ul>
                            <li>Develop skills AI can't replicate</li>
                            <li>Learn to work WITH AI effectively</li>
                            <li>Stay curious and keep experimenting</li>
                            <li>Focus on outcomes, not processes</li>
                        </ul>
                        <div class="highlight">
                            <strong>Mindset:</strong> AI is a tool, like computers or the internet. Those who learn to use it well will thrive.
                        </div>
                    `
                },
                {
                    id: 'ethical-use',
                    title: 'Ethical AI Use',
                    content: `
                        <h2>Ethical AI Use</h2>
                        <h3>Principles for Responsible Use</h3>
                        <ul>
                            <li><strong>Transparency:</strong> Be honest when AI was involved</li>
                            <li><strong>Accuracy:</strong> Verify before sharing</li>
                            <li><strong>Privacy:</strong> Protect others' data</li>
                            <li><strong>Attribution:</strong> Give credit appropriately</li>
                            <li><strong>Human oversight:</strong> Keep humans in the loop</li>
                        </ul>
                        <h3>When to Disclose AI Use</h3>
                        <ul>
                            <li>Academic/professional submissions</li>
                            <li>When asked directly</li>
                            <li>When it might affect trust</li>
                            <li>When regulations require it</li>
                        </ul>
                        <h3>AI and Your Career</h3>
                        <ul>
                            <li>Use AI to augment, not replace, your thinking</li>
                            <li>Maintain your core skills</li>
                            <li>Understand what AI produces for you</li>
                            <li>Take responsibility for AI-assisted work</li>
                        </ul>
                        <div class="highlight">
                            <strong>Final Thought:</strong> AI should make you more capable, not less competent. Use it as a power-up, not a crutch.
                        </div>
                    `
                }
            ],
            quiz: [
                {
                    question: 'Which human skills will remain valuable as AI advances?',
                    options: [
                        'Only technical skills',
                        'Creativity, empathy, judgment, and complex problem-solving',
                        'Data entry',
                        'Memorization'
                    ],
                    correct: 1,
                    explanation: 'Uniquely human skills like creativity, empathy, ethical judgment, and complex problem-solving remain valuable because AI struggles to replicate them.'
                },
                {
                    question: 'What is the right approach to AI and your career?',
                    options: [
                        'Let AI do all your work',
                        'Avoid AI completely',
                        'Use AI to augment your abilities while maintaining your core skills',
                        'Only use AI for personal tasks'
                    ],
                    correct: 2,
                    explanation: 'The best approach is using AI to enhance your capabilities while keeping your skills sharp. AI should make you better, not replace your abilities.'
                }
            ]
        }
    ]
};
