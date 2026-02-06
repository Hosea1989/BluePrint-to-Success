// Game Development Curriculum Data
const gamedevData = {
    id: 'gamedev',
    title: 'Game Development',
    icon: '🎮',
    description: 'Learn to design and build video games — from concept to playable product.',
    graduationGoal: 'Build and publish a complete playable game',
    difficulty: 'intermediate',
    prerequisites: ['python'],
    learningObjectives: [
        'Design game mechanics and user experiences',
        'Use game engines (Unity, Godot, or similar)',
        'Implement game physics, graphics, and audio',
        'Build complete playable games',
        'Publish games to platforms'
    ],
    relatedTracks: ['csharp', 'softwaredev'],
    resources: [
        { title: 'Unity Learn', url: 'https://learn.unity.com/' },
        { title: 'Godot Documentation', url: 'https://docs.godotengine.org/' }
    ],
    levels: [
        {
            id: 1,
            title: 'Game Development Foundations',
            subtitle: 'Understanding game design and choosing your tools',
            topics: [
                {
                    id: 'game-industry',
                    title: 'The Game Industry',
                    content: `
                        <h2>The Game Industry</h2>
                        <p>The video game industry generates over $180 billion annually — more than movies and music combined. And it's still growing.</p>
                        <h3>Types of Game Development</h3>
                        <ul>
                            <li><strong>AAA Studios:</strong> Big-budget games (Call of Duty, GTA). Teams of hundreds. Hard to break into.</li>
                            <li><strong>Indie Development:</strong> Small teams or solo developers. Lower budgets, more creative freedom. Many success stories (Minecraft, Stardew Valley, Hollow Knight).</li>
                            <li><strong>Mobile Games:</strong> Huge market, lower barrier to entry. Free-to-play with in-app purchases.</li>
                            <li><strong>Freelance/Contract:</strong> Work on specific game components for studios.</li>
                        </ul>
                        <h3>Career Roles</h3>
                        <ul>
                            <li><strong>Game Programmer:</strong> Code gameplay, physics, AI ($65K-$140K)</li>
                            <li><strong>Game Designer:</strong> Design mechanics, levels, and player experience ($55K-$120K)</li>
                            <li><strong>3D/2D Artist:</strong> Create visual assets, characters, environments ($50K-$110K)</li>
                            <li><strong>Sound Designer:</strong> Music, sound effects, ambient audio</li>
                        </ul>
                        <div class="highlight">
                            <strong>Indie Path:</strong> You can build and sell games solo. Many indie developers earn full-time income from their games. The tools are free, distribution is accessible, and the community is supportive.
                        </div>
                    `,
                    quiz: {
                        question: 'How much revenue does the video game industry generate annually?',
                        options: ['$5 billion', '$50 billion', 'Over $180 billion', '$1 trillion'],
                        correct: 2
                    }
                },
                {
                    id: 'game-engines',
                    title: 'Game Engines',
                    content: `
                        <h2>Game Engines</h2>
                        <p>A game engine provides the tools and systems you need to build a game without coding everything from scratch.</p>
                        <h3>Popular Engines</h3>
                        <ul>
                            <li><strong>Unity (C#):</strong> Most popular for mobile and indie games. 50%+ of all mobile games. Free for personal use. Massive asset store and community.</li>
                            <li><strong>Unreal Engine (C++/Blueprints):</strong> Best graphics. Used for AAA games. Visual scripting with Blueprints. Free until you earn $1M.</li>
                            <li><strong>Godot (GDScript/C#):</strong> 100% free and open-source. Lightweight, great for 2D. Growing fast.</li>
                            <li><strong>GameMaker (GML):</strong> Excellent for 2D games. Used for Undertale and Hyper Light Drifter.</li>
                        </ul>
                        <h3>Which to Choose?</h3>
                        <ul>
                            <li><strong>First-time?</strong> Unity or Godot — easiest to learn</li>
                            <li><strong>Want AAA graphics?</strong> Unreal Engine</li>
                            <li><strong>2D focused?</strong> Godot or GameMaker</li>
                            <li><strong>Want jobs?</strong> Unity (most job listings) or Unreal (AAA studios)</li>
                        </ul>
                    `,
                    quiz: {
                        question: 'Which game engine is most commonly used for mobile and indie games?',
                        options: ['Unreal Engine', 'CryEngine', 'Unity', 'Amazon Lumberyard'],
                        correct: 2
                    }
                },
                {
                    id: 'game-design',
                    title: 'Game Design Principles',
                    content: `
                        <h2>Game Design Principles</h2>
                        <p>Great games aren't just technically impressive — they're well-designed experiences that keep players engaged.</p>
                        <h3>Core Design Pillars</h3>
                        <ul>
                            <li><strong>Game Loop:</strong> The core action players repeat (shoot, build, solve, explore). It must be fun on its own.</li>
                            <li><strong>Feedback:</strong> Players need to know their actions have impact (sounds, visual effects, score changes).</li>
                            <li><strong>Progression:</strong> Give players a sense of growth (new abilities, harder challenges, story revelations).</li>
                            <li><strong>Challenge Balance:</strong> Too easy = boring. Too hard = frustrating. The "flow state" is in between.</li>
                        </ul>
                        <h3>Design Process</h3>
                        <ol>
                            <li><strong>Concept:</strong> What type of game? What's the core mechanic?</li>
                            <li><strong>Paper prototype:</strong> Test the core mechanic on paper before coding</li>
                            <li><strong>Minimum playable version:</strong> Get something playable as fast as possible</li>
                            <li><strong>Playtest:</strong> Watch people play. Don't explain — if they're confused, your design needs work.</li>
                            <li><strong>Iterate:</strong> Refine based on feedback. Repeat.</li>
                        </ol>
                        <h3>Your First Game Should Be Small</h3>
                        <p>Don't start with an MMORPG. Start with:</p>
                        <ul>
                            <li>Pong or Breakout clone</li>
                            <li>Simple platformer (one level)</li>
                            <li>Top-down shooter</li>
                            <li>Puzzle game</li>
                        </ul>
                        <div class="highlight">
                            <strong>Rule #1:</strong> Finish your game. A completed simple game teaches you more than an unfinished ambitious one.
                        </div>
                    `,
                    quiz: {
                        question: 'What should your first game project be?',
                        options: ['A massive open-world RPG', 'A simple, small game you can actually finish', 'An exact clone of a AAA game', 'A VR multiplayer game'],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 2,
            title: 'Building & Publishing Games',
            subtitle: 'Development workflow and getting your game out there',
            topics: [
                {
                    id: 'game-programming',
                    title: 'Game Programming Basics',
                    content: `
                        <h2>Game Programming Basics</h2>
                        <h3>The Game Loop</h3>
                        <p>Every game runs on a loop that repeats 30-60+ times per second:</p>
                        <ol>
                            <li><strong>Input:</strong> Check for player input (keyboard, mouse, controller)</li>
                            <li><strong>Update:</strong> Update game state (move characters, check collisions, run AI)</li>
                            <li><strong>Render:</strong> Draw everything to the screen</li>
                        </ol>
                        <h3>Key Concepts</h3>
                        <ul>
                            <li><strong>GameObjects/Nodes:</strong> Everything in your game is an object (player, enemy, bullet, wall)</li>
                            <li><strong>Components:</strong> Objects have behaviors attached (physics, rendering, scripts)</li>
                            <li><strong>Collision Detection:</strong> Knowing when objects touch or overlap</li>
                            <li><strong>Physics:</strong> Gravity, velocity, forces (most engines handle this for you)</li>
                            <li><strong>Delta Time:</strong> Ensuring game runs at same speed regardless of framerate</li>
                        </ul>
                        <h3>Common Patterns</h3>
                        <ul>
                            <li><strong>State machines:</strong> Managing character states (idle, running, jumping, attacking)</li>
                            <li><strong>Object pooling:</strong> Reusing objects instead of creating/destroying (bullets, particles)</li>
                            <li><strong>Event systems:</strong> Objects communicating without direct references</li>
                        </ul>
                    `,
                    quiz: {
                        question: 'What are the three steps in a game loop?',
                        options: ['Design, Code, Test', 'Input, Update, Render', 'Start, Play, End', 'Load, Save, Exit'],
                        correct: 1
                    }
                },
                {
                    id: 'publishing-games',
                    title: 'Publishing Your Game',
                    content: `
                        <h2>Publishing Your Game</h2>
                        <h3>Distribution Platforms</h3>
                        <ul>
                            <li><strong>Steam:</strong> Dominant PC platform. $100 fee per game. 70/30 revenue split.</li>
                            <li><strong>itch.io:</strong> Indie-friendly, free to publish. Great for first games.</li>
                            <li><strong>App Store / Google Play:</strong> Mobile games. $99/year (Apple) or $25 (Google).</li>
                            <li><strong>Epic Games Store:</strong> 88/12 revenue split (best for developers).</li>
                            <li><strong>Console stores:</strong> PlayStation, Xbox, Nintendo — require dev kits and approval.</li>
                        </ul>
                        <h3>Marketing Your Game</h3>
                        <ul>
                            <li><strong>Build in public:</strong> Share development progress on Twitter/X and TikTok</li>
                            <li><strong>Create a Steam page early:</strong> Start collecting wishlists months before launch</li>
                            <li><strong>Game trailers:</strong> Short, exciting trailers that show gameplay</li>
                            <li><strong>Press and streamers:</strong> Send free keys to content creators and journalists</li>
                        </ul>
                        <h3>Monetization</h3>
                        <ul>
                            <li><strong>Premium:</strong> One-time purchase ($5-$60)</li>
                            <li><strong>Free-to-play:</strong> In-app purchases (cosmetics, power-ups)</li>
                            <li><strong>DLC:</strong> Downloadable content and expansions</li>
                        </ul>
                        <div class="highlight">
                            <strong>Indie Success Formula:</strong> Make a small, polished game → publish on itch.io → get feedback → improve → publish on Steam → build an audience → make your next game.
                        </div>
                    `,
                    quiz: {
                        question: 'Which platform is best for publishing your first indie game?',
                        options: ['PlayStation Store', 'itch.io — free to publish and indie-friendly', 'Only physical retail stores', 'Console exclusivity deals'],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 3,
            title: 'Advanced Game Development',
            subtitle: 'Polish, performance, and building your career',
            topics: [
                {
                    id: 'game-art-audio',
                    title: 'Art & Audio for Indie Devs',
                    content: `
                        <h2>Art & Audio for Indie Devs</h2>
                        <p>You don't need to be an amazing artist to make a great-looking game. Smart art direction beats raw talent.</p>
                        <h3>Art Styles That Work for Solo Devs</h3>
                        <ul>
                            <li><strong>Pixel art:</strong> Low resolution, high charm. Tools: Aseprite ($20), Piskel (free)</li>
                            <li><strong>Minimalist/Geometric:</strong> Simple shapes with strong color palettes (Thomas Was Alone, Superhot)</li>
                            <li><strong>Hand-drawn:</strong> Sketchy, personal style (Hollow Knight, Cuphead)</li>
                            <li><strong>Low-poly 3D:</strong> Simple 3D models with flat colors. Fast to create, looks stylish.</li>
                        </ul>
                        <h3>Free & Affordable Art Assets</h3>
                        <ul>
                            <li><strong>OpenGameArt.org:</strong> Free sprites, textures, and 3D models</li>
                            <li><strong>Kenney.nl:</strong> Thousands of free game assets (incredible quality)</li>
                            <li><strong>Unity Asset Store:</strong> Free and paid assets for Unity projects</li>
                            <li><strong>itch.io asset packs:</strong> Affordable, curated art packs</li>
                        </ul>
                        <h3>Audio Essentials</h3>
                        <ul>
                            <li><strong>Sound effects:</strong> Freesound.org, BFXR (generate retro sounds)</li>
                            <li><strong>Music:</strong> Kevin MacLeod (free), Incompetech, or create with GarageBand/LMMS</li>
                            <li><strong>Ambient sounds:</strong> Layered background audio brings worlds to life</li>
                        </ul>
                        <div class="highlight">
                            <strong>Design Tip:</strong> Consistency matters more than quality. A game with simple but consistent art looks far better than one mixing different styles.
                        </div>
                    `,
                    quiz: {
                        question: 'What matters more than raw art quality in indie game development?',
                        options: ['Having the most detailed textures possible', 'Consistency in art style throughout the game', 'Using only 3D graphics', 'Hiring a professional artist'],
                        correct: 1
                    }
                },
                {
                    id: 'game-optimization',
                    title: 'Performance & Optimization',
                    content: `
                        <h2>Performance & Optimization</h2>
                        <p>A game that runs poorly won't keep players. Optimization is about making your game run smoothly on target hardware.</p>
                        <h3>Common Performance Issues</h3>
                        <ul>
                            <li><strong>Too many draw calls:</strong> Each visible object is a draw call. Combine meshes, use sprite atlases.</li>
                            <li><strong>Unoptimized physics:</strong> Too many colliders or complex shapes. Use simple colliders (boxes, spheres).</li>
                            <li><strong>Memory leaks:</strong> Objects not being properly destroyed. Always clean up when loading new scenes.</li>
                            <li><strong>Garbage collection spikes:</strong> Creating and destroying objects every frame causes stutters. Use object pooling.</li>
                        </ul>
                        <h3>Optimization Techniques</h3>
                        <ul>
                            <li><strong>Object pooling:</strong> Pre-create bullets/particles, reuse them instead of creating new ones</li>
                            <li><strong>LOD (Level of Detail):</strong> Show simpler models for distant objects</li>
                            <li><strong>Culling:</strong> Don't render things the camera can't see</li>
                            <li><strong>Sprite atlases:</strong> Combine many small images into one large texture</li>
                            <li><strong>Profiling:</strong> Use your engine's profiler to find actual bottlenecks before guessing</li>
                        </ul>
                        <h3>Target Frame Rates</h3>
                        <ul>
                            <li><strong>Mobile:</strong> 30 FPS minimum, 60 FPS ideal</li>
                            <li><strong>PC/Console:</strong> 60 FPS standard, 120+ FPS for competitive games</li>
                            <li><strong>VR:</strong> 90 FPS minimum (lower causes motion sickness)</li>
                        </ul>
                    `,
                    quiz: {
                        question: 'What is object pooling?',
                        options: ['A swimming pool minigame', 'Pre-creating and reusing objects instead of creating/destroying them each frame', 'A type of multiplayer system', 'Combining all objects into one'],
                        correct: 1
                    }
                },
                {
                    id: 'game-career',
                    title: 'Building a Game Dev Career',
                    content: `
                        <h2>Building a Game Dev Career</h2>
                        <h3>Paths Into the Industry</h3>
                        <ul>
                            <li><strong>Indie solo/small team:</strong> Build and self-publish. Keep all (or most) revenue. Total creative freedom.</li>
                            <li><strong>Studio job:</strong> Join an existing team. Stable income, benefits. Less creative control.</li>
                            <li><strong>Freelance/Contract:</strong> Work on specific aspects (programming, art, sound) for various studios.</li>
                            <li><strong>Game jams:</strong> 48-72 hour competitions to build a game. Great for learning, networking, and portfolio pieces.</li>
                        </ul>
                        <h3>Building Your Portfolio</h3>
                        <ul>
                            <li>Publish 2-3 small, finished games on itch.io</li>
                            <li>Create a dev blog or Twitter/X account sharing progress</li>
                            <li>Contribute to open-source game projects</li>
                            <li>Participate in game jams (Ludum Dare, Global Game Jam, itch.io jams)</li>
                        </ul>
                        <h3>Revenue Expectations</h3>
                        <ul>
                            <li><strong>First indie game:</strong> Expect $0-$5K (it's a learning experience)</li>
                            <li><strong>Average Steam indie:</strong> ~$10K-$50K lifetime revenue</li>
                            <li><strong>Breakout hit:</strong> $100K-$1M+ (rare but achievable with marketing)</li>
                            <li><strong>Studio salary:</strong> $55K-$140K depending on role and experience</li>
                        </ul>
                        <div class="highlight">
                            <strong>The Secret:</strong> Ship games. A portfolio of 3 finished small games is worth more than one unfinished ambitious project. Each game teaches you something new and builds your reputation.
                        </div>
                    `,
                    quiz: {
                        question: 'What is a game jam?',
                        options: ['A type of music in games', 'A 48-72 hour competition to build a game from scratch', 'A tool for making sound effects', 'A game testing process'],
                        correct: 1
                    }
                }
            ]
        }
    ],
    finalExam: [
        { question: 'How much revenue does the game industry generate compared to movies?', options: ['Less than movies', 'About the same', 'More than movies and music combined', 'Games don\'t generate revenue'], correct: 2 },
        { question: 'Which game engine is recommended for beginners?', options: ['Custom-built engine', 'Unity or Godot', 'Unreal Engine only', 'No engine needed'], correct: 1 },
        { question: 'What is the most important rule for your first game?', options: ['It must have perfect graphics', 'It should be small enough to actually finish', 'It needs multiplayer support', 'It must be 3D'], correct: 1 },
        { question: 'What are the three steps in a game loop?', options: ['Load, Play, Save', 'Input, Update, Render', 'Start, Middle, End', 'Code, Test, Deploy'], correct: 1 },
        { question: 'Which distribution platform is free and best for first-time indie developers?', options: ['Steam ($100)', 'itch.io (free)', 'PlayStation Store', 'Apple App Store ($99/year)'], correct: 1 },
        { question: 'What design concept keeps players engaged between too easy and too hard?', options: ['Graphics quality', 'Flow state — the balance between challenge and skill', 'Having many levels', 'Expensive sound effects'], correct: 1 }
    ]
};
