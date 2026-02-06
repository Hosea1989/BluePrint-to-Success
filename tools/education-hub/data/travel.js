// Travel & Exploration Curriculum Data
const travelData = {
    id: 'travel',
    title: 'Travel & Exploration',
    icon: '✈️',
    description: 'Plan smart trips, travel on a budget, and explore the world with confidence.',
    graduationGoal: 'Plan and execute a well-budgeted trip with cultural awareness',
    difficulty: 'beginner',
    prerequisites: [],
    learningObjectives: [
        'Plan trips on any budget',
        'Find deals on flights, hotels, and activities',
        'Travel safely and confidently',
        'Navigate cultural differences',
        'Maximize travel experiences while minimizing costs'
    ],
    relatedTracks: ['personalfinance', 'languagelearning'],
    resources: [
        { title: 'Travel.State.gov', url: 'https://travel.state.gov/' }
    ],
    levels: [
        {
            id: 1,
            title: 'Travel Planning',
            subtitle: 'How to plan trips that are affordable and memorable',
            topics: [
                {
                    id: 'benefits-of-travel',
                    title: 'Why Travel Matters',
                    content: `
                        <h2>Why Travel Matters</h2>
                        <p>Travel is one of the most powerful investments you can make in yourself. It changes how you see the world and yourself.</p>
                        <h3>Personal Growth Benefits</h3>
                        <ul>
                            <li><strong>Broadens perspective:</strong> Experiencing different cultures challenges assumptions and builds empathy</li>
                            <li><strong>Builds confidence:</strong> Navigating unfamiliar places develops problem-solving skills and independence</li>
                            <li><strong>Creates lasting memories:</strong> Experiences are proven to bring more lasting happiness than material purchases</li>
                            <li><strong>Expands your network:</strong> People you meet while traveling can become lifelong friends, business contacts, or collaborators</li>
                        </ul>
                        <h3>Professional Benefits</h3>
                        <ul>
                            <li>Cross-cultural communication skills valued by employers</li>
                            <li>Adaptability and comfort with uncertainty</li>
                            <li>Language skills and global awareness</li>
                            <li>Creativity boost from new environments and experiences</li>
                        </ul>
                        <div class="highlight">
                            <strong>Mindset Shift:</strong> Travel doesn't have to be expensive or far away. A weekend in a neighboring city counts. The goal is exposure to new experiences and perspectives.
                        </div>
                    `,
                    quiz: {
                        question: 'Why do experiences like travel tend to bring more lasting happiness than material purchases?',
                        options: [
                            'Because travel is always cheaper than buying things',
                            'Because experiences create memories and personal growth that compound over time',
                            'Because material goods are always low quality',
                            'Because travel is required for career advancement'
                        ],
                        correct: 1
                    }
                },
                {
                    id: 'trip-planning',
                    title: 'Planning Your Trip',
                    content: `
                        <h2>Planning Your Trip</h2>
                        <p>Good planning is the difference between a stressful trip and an amazing one. Here's a step-by-step framework.</p>
                        <h3>Step-by-Step Planning</h3>
                        <ol>
                            <li><strong>Choose your destination:</strong> Consider budget, safety, time of year, visa requirements, and your interests</li>
                            <li><strong>Set a budget:</strong> Include flights, accommodation, food, activities, transportation, and a 10-15% buffer</li>
                            <li><strong>Book flights early:</strong> Best prices are typically 1-3 months in advance for domestic, 2-6 months for international</li>
                            <li><strong>Book accommodation:</strong> Compare hotels, hostels, Airbnb, and house-sitting options</li>
                            <li><strong>Research your destination:</strong> Culture, customs, local laws, must-see spots, and safety considerations</li>
                            <li><strong>Handle logistics:</strong> Check passport validity (6+ months remaining), visa requirements, and travel insurance</li>
                        </ol>
                        <h3>Packing Smart</h3>
                        <ul>
                            <li>Pack light — you can always buy essentials at your destination</li>
                            <li>Use packing cubes to organize</li>
                            <li>Keep electronics and essential documents in your carry-on</li>
                            <li>Download offline maps and translation apps before you go</li>
                        </ul>
                    `,
                    quiz: {
                        question: 'When is typically the best time to book international flights for the best price?',
                        options: [
                            'The day before departure',
                            '2-6 months in advance',
                            '1 year in advance',
                            'It makes no difference when you book'
                        ],
                        correct: 1
                    }
                },
                {
                    id: 'budget-travel',
                    title: 'Budget Travel Strategies',
                    content: `
                        <h2>Budget Travel Strategies</h2>
                        <p>You don't need to be rich to travel. Smart strategies can cut costs by 50% or more without sacrificing the experience.</p>
                        <h3>Saving on Flights</h3>
                        <ul>
                            <li><strong>Google Flights:</strong> Compare prices across airlines, set price alerts</li>
                            <li><strong>Be flexible:</strong> Flying mid-week is often 20-40% cheaper than weekends</li>
                            <li><strong>Nearby airports:</strong> Check alternative airports within driving distance</li>
                            <li><strong>Error fares:</strong> Follow @SecretFlying and Scott's Cheap Flights for deals</li>
                            <li><strong>Points and miles:</strong> Travel credit cards can cover flights entirely (see Travel Hacking)</li>
                        </ul>
                        <h3>Saving on Accommodation</h3>
                        <ul>
                            <li><strong>Hostels:</strong> $15-50/night, great for solo travelers and meeting people</li>
                            <li><strong>Airbnb:</strong> Often cheaper than hotels, especially for groups. Kitchen saves on food costs.</li>
                            <li><strong>House-sitting:</strong> Free accommodation in exchange for watching someone's home/pets (TrustedHousesitters)</li>
                            <li><strong>Couchsurfing:</strong> Free stays with locals who enjoy hosting travelers</li>
                        </ul>
                        <h3>Saving on Food & Activities</h3>
                        <ul>
                            <li>Eat where locals eat — tourist-area restaurants charge 2-3x more</li>
                            <li>Cook some meals if you have a kitchen</li>
                            <li>Many museums have free days or discounted hours</li>
                            <li>Walking tours are often free (tip-based)</li>
                        </ul>
                    `,
                    quiz: {
                        question: 'Which strategy can help you find significantly cheaper flights?',
                        options: [
                            'Always booking at the airport counter',
                            'Being flexible with dates and checking mid-week flights',
                            'Only flying first class for better deals',
                            'Booking through phone calls instead of online'
                        ],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 2,
            title: 'Travel Hacking & Smart Money',
            subtitle: 'Using points, miles, and financial tools to travel for less',
            topics: [
                {
                    id: 'travel-credit-cards',
                    title: 'Travel Credit Cards',
                    content: `
                        <h2>Travel Credit Cards</h2>
                        <p>Travel credit cards are one of the most powerful tools for affordable travel. Sign-up bonuses alone can cover entire trips.</p>
                        <h3>How It Works</h3>
                        <ol>
                            <li>Apply for a travel credit card with a sign-up bonus</li>
                            <li>Meet the minimum spending requirement (using normal purchases)</li>
                            <li>Earn 50,000-100,000+ points worth $500-$1,500+ in travel</li>
                            <li>Redeem points for flights, hotels, and more</li>
                        </ol>
                        <h3>Top Cards for Beginners</h3>
                        <ul>
                            <li><strong>Chase Sapphire Preferred:</strong> Flexible points, great for beginners, $95 annual fee</li>
                            <li><strong>Capital One Venture X:</strong> Premium travel card, airport lounge access</li>
                            <li><strong>Discover it Miles:</strong> No annual fee, good for building credit</li>
                        </ul>
                        <h3>Important Rules</h3>
                        <ul>
                            <li><strong>ALWAYS pay your balance in full:</strong> Credit card interest (20%+) will wipe out any travel rewards</li>
                            <li><strong>No foreign transaction fees:</strong> Essential for international travel</li>
                            <li><strong>Don't apply if you carry debt:</strong> Fix your finances first, then use travel cards strategically</li>
                        </ul>
                        <div class="highlight">
                            <strong>Real Example:</strong> A single Chase Sapphire Preferred sign-up bonus of 60,000 points can cover a round-trip flight to Europe or 3-4 domestic flights.
                        </div>
                    `,
                    quiz: {
                        question: 'What is the most important rule when using travel credit cards?',
                        options: [
                            'Spend as much as possible to earn more points',
                            'Always pay your balance in full to avoid interest charges',
                            'Only use the card for travel purchases',
                            'Apply for as many cards as possible at once'
                        ],
                        correct: 1
                    }
                },
                {
                    id: 'points-miles',
                    title: 'Points & Miles Strategy',
                    content: `
                        <h2>Points & Miles Strategy</h2>
                        <p>Points and miles are a currency that can save you thousands on travel when used strategically.</p>
                        <h3>Types of Points</h3>
                        <ul>
                            <li><strong>Transferable points:</strong> Chase Ultimate Rewards, Amex Membership Rewards, Capital One Miles — can transfer to multiple airlines/hotels</li>
                            <li><strong>Airline miles:</strong> Specific to one airline (United, Delta, etc.)</li>
                            <li><strong>Hotel points:</strong> Specific to one hotel chain (Marriott, Hilton, etc.)</li>
                        </ul>
                        <h3>Maximizing Value</h3>
                        <ul>
                            <li><strong>Transfer to partners:</strong> Often 1.5-3x more valuable than booking through the card's portal</li>
                            <li><strong>Sweet spots:</strong> Certain routes offer exceptional value (e.g., 25K miles for a $800+ flight)</li>
                            <li><strong>Off-peak pricing:</strong> Many programs charge fewer points during off-peak travel dates</li>
                        </ul>
                        <h3>Earning More Points</h3>
                        <ul>
                            <li>Use your travel card for ALL regular spending</li>
                            <li>Pay bills through your card when possible</li>
                            <li>Shopping portals (extra points for online shopping)</li>
                            <li>Dining programs (extra points at restaurants)</li>
                        </ul>
                    `,
                    quiz: {
                        question: 'Why are transferable points often more valuable than fixed airline miles?',
                        options: [
                            'They expire later',
                            'They can be transferred to multiple airline and hotel partners for better value',
                            'They are worth more dollars per point',
                            'Airlines don\'t accept their own miles anymore'
                        ],
                        correct: 1
                    }
                },
                {
                    id: 'travel-money',
                    title: 'Managing Money While Traveling',
                    content: `
                        <h2>Managing Money While Traveling</h2>
                        <p>Smart money management while traveling prevents unexpected costs and keeps your trip stress-free.</p>
                        <h3>Before You Go</h3>
                        <ul>
                            <li><strong>Notify your bank:</strong> Tell them where you're traveling so they don't freeze your card</li>
                            <li><strong>Get a no-foreign-transaction-fee card:</strong> Saves 3% on every purchase abroad</li>
                            <li><strong>Download your bank's app:</strong> Monitor transactions in real-time</li>
                            <li><strong>Get travel insurance:</strong> Covers medical emergencies, trip cancellations, lost luggage</li>
                        </ul>
                        <h3>While Traveling</h3>
                        <ul>
                            <li><strong>Use ATMs for local currency:</strong> Airport exchange booths charge terrible rates</li>
                            <li><strong>Pay in local currency:</strong> When asked "pay in USD or local?" always choose local to avoid dynamic currency conversion fees</li>
                            <li><strong>Track daily spending:</strong> Use an app like Trail Wallet or just a notes app</li>
                            <li><strong>Have backup payment:</strong> Carry two cards from different banks in case one is lost or doesn't work</li>
                        </ul>
                        <h3>Tipping Internationally</h3>
                        <p>Tipping customs vary widely. Research your destination — tipping 20% is American, not universal. In some countries, it's unnecessary or even rude.</p>
                    `,
                    quiz: {
                        question: 'When paying abroad and asked to pay in USD or local currency, which should you choose?',
                        options: [
                            'Always USD for convenience',
                            'Local currency to avoid dynamic currency conversion fees',
                            'It makes no difference',
                            'Whichever has more digits'
                        ],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 3,
            title: 'Cultural Immersion & Safety',
            subtitle: 'Traveling respectfully and staying safe abroad',
            topics: [
                {
                    id: 'cultural-immersion',
                    title: 'Cultural Immersion',
                    content: `
                        <h2>Cultural Immersion</h2>
                        <p>The most meaningful travel experiences come from connecting with local culture, not just checking off tourist attractions.</p>
                        <h3>How to Immerse Yourself</h3>
                        <ul>
                            <li><strong>Learn basic phrases:</strong> "Hello," "Thank you," "Please" in the local language goes a long way</li>
                            <li><strong>Eat local food:</strong> Skip the American chains. Ask locals for restaurant recommendations.</li>
                            <li><strong>Stay in neighborhoods:</strong> Not just tourist zones. Residential areas give you real culture.</li>
                            <li><strong>Take local transport:</strong> Buses, trains, and tuk-tuks give you a different perspective than taxis</li>
                            <li><strong>Attend local events:</strong> Markets, festivals, religious ceremonies (when appropriate), sporting events</li>
                        </ul>
                        <h3>Respectful Travel</h3>
                        <ul>
                            <li>Research dress codes for religious sites before visiting</li>
                            <li>Ask before photographing people</li>
                            <li>Learn about taboos and customs (left-hand use, pointing, shoes)</li>
                            <li>Support local businesses over international chains</li>
                        </ul>
                        <div class="highlight">
                            <strong>Tip:</strong> The best travel souvenir is a story from a genuine connection with someone from a different culture.
                        </div>
                    `,
                    quiz: {
                        question: 'What is the most impactful way to experience a new culture while traveling?',
                        options: [
                            'Only visiting the top-rated tourist attractions',
                            'Staying at American hotel chains for comfort',
                            'Learning local phrases, eating local food, and connecting with locals',
                            'Taking guided bus tours exclusively'
                        ],
                        correct: 2
                    }
                },
                {
                    id: 'travel-safety',
                    title: 'Travel Safety',
                    content: `
                        <h2>Travel Safety</h2>
                        <p>Being aware and prepared keeps you safe without stopping you from enjoying your trip.</p>
                        <h3>Before You Leave</h3>
                        <ul>
                            <li><strong>Register with your embassy:</strong> STEP (Smart Traveler Enrollment Program) for U.S. citizens</li>
                            <li><strong>Copy important documents:</strong> Passport, ID, insurance cards — keep digital copies in email and physical copies separate from originals</li>
                            <li><strong>Share your itinerary:</strong> Give a trusted person your travel plans</li>
                            <li><strong>Research safety:</strong> Check State Department travel advisories</li>
                        </ul>
                        <h3>While Traveling</h3>
                        <ul>
                            <li><strong>Stay aware:</strong> Avoid walking alone late at night in unfamiliar areas</li>
                            <li><strong>Secure valuables:</strong> Use hotel safes, keep phone/wallet in front pockets, use anti-theft bags</li>
                            <li><strong>Trust your instincts:</strong> If something feels off, remove yourself from the situation</li>
                            <li><strong>Limit alcohol:</strong> Impaired judgment is the #1 cause of travel incidents</li>
                            <li><strong>Keep emergency contacts saved:</strong> Local emergency number, embassy, travel insurance hotline</li>
                        </ul>
                        <h3>Health Safety</h3>
                        <ul>
                            <li>Check if vaccinations are needed/recommended</li>
                            <li>Carry basic medications (pain reliever, anti-diarrheal, allergy meds)</li>
                            <li>Research water safety — use bottled water if tap water isn't safe</li>
                        </ul>
                    `,
                    quiz: {
                        question: 'What is STEP (Smart Traveler Enrollment Program)?',
                        options: [
                            'A discount program for frequent travelers',
                            'A U.S. embassy registration program that helps keep you safe abroad',
                            'A travel insurance policy',
                            'A language learning app for travelers'
                        ],
                        correct: 1
                    }
                },
                {
                    id: 'solo-travel',
                    title: 'Solo Travel',
                    content: `
                        <h2>Solo Travel</h2>
                        <p>Traveling alone is one of the most empowering experiences you can have. It forces self-reliance and opens doors to connections you'd never make in a group.</p>
                        <h3>Benefits of Solo Travel</h3>
                        <ul>
                            <li><strong>Complete freedom:</strong> Go where you want, when you want</li>
                            <li><strong>Self-discovery:</strong> Learn who you are outside your comfort zone</li>
                            <li><strong>Meet more people:</strong> Solo travelers are more approachable and more motivated to connect</li>
                            <li><strong>Build confidence:</strong> Solving problems alone builds unshakeable self-reliance</li>
                        </ul>
                        <h3>Tips for First-Time Solo Travelers</h3>
                        <ol>
                            <li><strong>Start easy:</strong> Choose a destination that's safe, English-friendly, and well-traveled (Portugal, Japan, Costa Rica)</li>
                            <li><strong>Stay in hostels:</strong> Common areas make it easy to meet people</li>
                            <li><strong>Book a walking tour on day one:</strong> Orients you to the city and you often make friends</li>
                            <li><strong>Keep family updated:</strong> Regular check-ins ease everyone's worry</li>
                            <li><strong>Be open:</strong> Say yes to conversations, meals, and adventures with other travelers</li>
                        </ol>
                        <div class="highlight">
                            <strong>Real Talk:</strong> You'll feel lonely at moments, and that's normal. Push through it — the people you meet and the growth you experience will be worth it every time.
                        </div>
                    `,
                    quiz: {
                        question: 'Why do solo travelers often meet more people than those traveling in groups?',
                        options: [
                            'Because tour companies give them priority',
                            'Because they are more approachable and motivated to connect with others',
                            'Because hostels only accept solo travelers',
                            'Because groups are not allowed in most tourist areas'
                        ],
                        correct: 1
                    }
                }
            ]
        }
    ],
    finalExam: [
        {
            question: 'What is the most important benefit of travel for personal development?',
            options: ['Collecting souvenirs', 'Broadening your perspective and building confidence', 'Taking photos for social media', 'Trying different airlines'],
            correct: 1
        },
        {
            question: 'How far in advance should you typically book international flights for the best price?',
            options: ['1-2 weeks', '2-6 months', '12-18 months', 'Day of departure'],
            correct: 1
        },
        {
            question: 'What is the golden rule of travel credit cards?',
            options: ['Spend as much as possible', 'Always pay your balance in full', 'Only use them at airports', 'Cancel after getting the sign-up bonus'],
            correct: 1
        },
        {
            question: 'Where should you exchange currency when traveling internationally?',
            options: ['Airport exchange booths', 'Hotel front desks', 'Local ATMs for the best rates', 'Tourist shops'],
            correct: 2
        },
        {
            question: 'What should you do before traveling to another country?',
            options: ['Nothing — just show up', 'Register with your embassy, research customs, and get travel insurance', 'Only pack designer clothes', 'Delete all your social media'],
            correct: 1
        },
        {
            question: 'What is the best approach for a first-time solo traveler?',
            options: ['Choose a challenging, remote destination', 'Start with a safe, English-friendly, well-traveled destination', 'Only travel with a tour group', 'Never leave the hotel'],
            correct: 1
        },
        {
            question: 'Why should you always choose to pay in local currency when abroad?',
            options: ['Local currency is always worth more', 'To avoid dynamic currency conversion fees', 'Stores give discounts for local currency', 'It is required by law'],
            correct: 1
        },
        {
            question: 'What is the most meaningful way to experience a new culture?',
            options: ['Visit only tourist attractions', 'Learn local phrases, eat local food, and connect with people', 'Stay in American hotel chains', 'Watch travel documentaries instead'],
            correct: 1
        }
    ]
};
