// Digital Literacy & Online Safety Curriculum Data
const digitalliteracyData = {
    id: 'digitalliteracy',
    title: 'Digital Literacy & Online Safety',
    icon: '🌐',
    description: 'Understand your digital footprint, evaluate information online, protect your privacy, and navigate the digital world safely.',
    graduationGoal: 'Navigate the digital world with confidence, critical thinking, and strong privacy practices',
    difficulty: 'beginner',
    prerequisites: [],
    learningObjectives: [
        'Understand and manage your digital footprint',
        'Evaluate information online critically',
        'Protect your privacy and personal data',
        'Recognize and avoid online scams',
        'Navigate the digital world safely and confidently'
    ],
    relatedTracks: ['cybersecurity', 'ai', 'communication'],
    resources: [
        { title: 'Media Literacy Now', url: 'https://medialiteracynow.org/' },
        { title: 'Stay Safe Online', url: 'https://staysafeonline.org/' }
    ],
    levels: [
        {
            id: 1,
            title: 'Your Digital Footprint',
            subtitle: 'What the internet knows about you',
            topics: [
                {
                    id: 'digital-footprint',
                    title: 'Understanding Your Digital Footprint',
                    content: `
                        <h2>Understanding Your Digital Footprint</h2>

                        <h3>What Is a Digital Footprint?</h3>
                        <ul>
                            <li>The trail of data you leave behind when using the internet</li>
                            <li><strong>Active footprint:</strong> Data you intentionally share (posts, profiles, comments)</li>
                            <li><strong>Passive footprint:</strong> Data collected without your direct action (browsing history, location data, cookies)</li>
                        </ul>

                        <h3>What's Being Collected</h3>
                        <ul>
                            <li><strong>Search engines:</strong> Every search you've ever made</li>
                            <li><strong>Social media:</strong> Posts, likes, shares, messages, time spent viewing content</li>
                            <li><strong>Websites:</strong> Pages visited, time spent, what you clicked on</li>
                            <li><strong>Apps:</strong> Location, contacts, photos, usage patterns</li>
                            <li><strong>Smart devices:</strong> Voice commands, home activity, health data</li>
                            <li><strong>Purchases:</strong> What you buy, when, where, and how much</li>
                        </ul>

                        <h3>Who Uses Your Data</h3>
                        <ul>
                            <li><strong>Advertisers:</strong> To target you with personalized ads</li>
                            <li><strong>Data brokers:</strong> Companies that buy and sell your information</li>
                            <li><strong>Employers:</strong> 70%+ check social media before hiring</li>
                            <li><strong>Insurance companies:</strong> May use data to set premiums</li>
                            <li><strong>Law enforcement:</strong> Can request data from companies</li>
                        </ul>

                        <h3>Cleaning Up Your Footprint</h3>
                        <ul>
                            <li>Google yourself — see what's publicly visible</li>
                            <li>Review and tighten privacy settings on all platforms</li>
                            <li>Delete old accounts you no longer use (JustDeleteMe.com helps)</li>
                            <li>Opt out of data brokers (there are services that do this for you)</li>
                            <li>Set up Google Alerts for your name</li>
                        </ul>

                        <div class="highlight">
                            <strong>The Test:</strong> Would you be comfortable with your boss, your grandmother, or a reporter seeing everything you've posted online? If not, it's time to clean up.
                        </div>
                    `
                },
                {
                    id: 'social-media-literacy',
                    title: 'Social Media Literacy',
                    content: `
                        <h2>Social Media Literacy</h2>

                        <h3>How Social Media Actually Works</h3>
                        <ul>
                            <li><strong>The algorithm serves engagement, not truth:</strong> Content that makes you angry, scared, or outraged gets more engagement — so the algorithm shows you more of it</li>
                            <li><strong>You are the product:</strong> Free platforms make money by selling your attention to advertisers</li>
                            <li><strong>Filter bubbles:</strong> Algorithms show you content you already agree with, reinforcing existing beliefs</li>
                            <li><strong>Social comparison:</strong> People post highlight reels, not reality. Comparing your life to curated content harms mental health.</li>
                        </ul>

                        <h3>Manipulation Tactics to Recognize</h3>
                        <ul>
                            <li><strong>Astroturfing:</strong> Fake grassroots campaigns that look organic</li>
                            <li><strong>Bot armies:</strong> Automated accounts amplifying messages or creating false consensus</li>
                            <li><strong>Influencer marketing disguised as genuine recommendations</strong></li>
                            <li><strong>Emotional manipulation:</strong> Content designed to provoke strong emotional reactions</li>
                            <li><strong>Deepfakes:</strong> AI-generated videos/audio that look and sound real</li>
                        </ul>

                        <h3>Healthy Social Media Habits</h3>
                        <ul>
                            <li>Set time limits (most phones have built-in tools)</li>
                            <li>Curate your feed intentionally — unfollow accounts that drain you</li>
                            <li>Turn off notifications for non-essential apps</li>
                            <li>Don't engage with content designed to make you angry</li>
                            <li>Remember: someone's social media is not their real life</li>
                            <li>Take regular breaks (even 24-48 hours makes a difference)</li>
                        </ul>

                        <div class="highlight">
                            <strong>The Algorithm's Goal:</strong> Keep you scrolling as long as possible. Every minute you spend on a platform is money for the company. Design your relationship with social media intentionally, or the algorithm will design it for you.
                        </div>
                    `
                },
                {
                    id: 'social-media-political-climate',
                    title: 'Social Media Safety in a Political Climate',
                    content: `
                        <h2>Social Media Safety in a Political Climate</h2>

                        <p>Social media has become the front line of political conflict. Whether you're vocal about your views or prefer to stay quiet, understanding how to protect yourself online during politically charged times is essential. This isn't about politics — it's about safety.</p>

                        <h3>Why This Matters Right Now</h3>
                        <ul>
                            <li><strong>Surveillance is increasing:</strong> Government agencies, employers, and political groups actively monitor social media — posts, likes, follows, and even group memberships can be tracked</li>
                            <li><strong>Doxxing is weaponized:</strong> People have lost jobs, received death threats, and been targeted at home because of social media posts</li>
                            <li><strong>Screenshots are forever:</strong> Even deleted posts can be archived, screenshotted, and used against you years later</li>
                            <li><strong>Guilt by association:</strong> Algorithms and people don't always distinguish between "liking" something for information and endorsing it</li>
                            <li><strong>Context collapse:</strong> A post meant for friends can be seen by millions — and interpreted very differently</li>
                        </ul>

                        <h3>Protecting Your Identity</h3>
                        <ul>
                            <li><strong>Separate personal and political:</strong> If you want to engage in political discussion, consider a separate account that isn't connected to your real name, employer, or location</li>
                            <li><strong>Audit your profile:</strong> Remove your workplace, school, hometown, and phone number from public profiles</li>
                            <li><strong>Check your photos:</strong> Profile photos can be reverse-image searched to find your other accounts. Use different photos across platforms if privacy matters</li>
                            <li><strong>Location data:</strong> Turn off geotagging on photos. Don't check into locations in real-time. That brunch photo tells people where you are RIGHT NOW</li>
                            <li><strong>Friends lists:</strong> On Facebook, make your friends list private. It can be used to identify and target people connected to you</li>
                            <li><strong>Review tagged photos:</strong> Enable tag review so nothing appears on your profile without your approval</li>
                        </ul>

                        <h3>What Not to Post</h3>
                        <ul>
                            <li><strong>Your daily routine:</strong> Don't reveal patterns — where you work out, when you leave home, your commute route</li>
                            <li><strong>Your home:</strong> Avoid photos that reveal your address, apartment number, or recognizable landmarks near your home</li>
                            <li><strong>Your workplace badge or ID:</strong> Contains identifying information that can be used for social engineering</li>
                            <li><strong>Protest attendance:</strong> If attending protests, consider: do NOT post real-time location, turn off location services, use Signal instead of regular texts, wear non-distinctive clothing, and be aware that facial recognition technology is used at large gatherings</li>
                            <li><strong>Threats or hyperbole:</strong> "I could kill..." type posts — even clearly joking — can be screenshotted out of context and used against you legally</li>
                        </ul>

                        <h3>If You Want to Speak Up — Do It Safely</h3>
                        <ul>
                            <li><strong>Know your rights:</strong> The First Amendment protects you from government censorship, but NOT from your employer firing you (in most states) for social media posts</li>
                            <li><strong>Check your employment contract:</strong> Many have social media policies. Know what yours says</li>
                            <li><strong>Think in screenshots:</strong> Before posting, imagine this screenshot on the desk of your boss, a reporter, or a judge. Still want to post it?</li>
                            <li><strong>Engage, don't rage:</strong> Algorithm-driven arguments are designed to escalate. If you feel your heart rate rising, close the app</li>
                            <li><strong>Share facts, not fury:</strong> Sharing verifiable information is more impactful and safer than emotional rants</li>
                            <li><strong>Amplify, don't originate:</strong> Sharing from established journalists and organizations is safer than being the original source of a claim</li>
                        </ul>

                        <h3>Dealing with Online Harassment</h3>
                        <ul>
                            <li><strong>Document everything:</strong> Screenshot harassment BEFORE blocking. Include timestamps, usernames, and URLs</li>
                            <li><strong>Don't engage:</strong> Responding to trolls feeds them. Block and move on</li>
                            <li><strong>Mass reporting:</strong> If you're being brigaded, report the accounts and contact the platform's safety team</li>
                            <li><strong>If you're doxxed:</strong> (1) Document it, (2) Report to the platform and police, (3) Google your name and request removal of personal info, (4) Alert your employer before someone else does, (5) Consider a temporary social media break while things cool down</li>
                            <li><strong>Legal options:</strong> Cyberstalking, threats, and harassment are crimes. File police reports. Consult an attorney for serious cases</li>
                        </ul>

                        <h3>Secure Communication</h3>
                        <ul>
                            <li><strong>Signal:</strong> End-to-end encrypted messaging. Use this for sensitive conversations, organizing, or anything you don't want intercepted</li>
                            <li><strong>Disappearing messages:</strong> Enable on Signal, WhatsApp, and Telegram for sensitive conversations</li>
                            <li><strong>Avoid SMS for sensitive topics:</strong> Regular texts are not encrypted and can be subpoenaed</li>
                            <li><strong>Email encryption:</strong> ProtonMail offers end-to-end encrypted email for free</li>
                            <li><strong>VPN:</strong> Use a VPN when accessing sensitive content or organizing — it hides your IP address and location from your ISP</li>
                        </ul>

                        <div class="highlight">
                            <strong>The Bottom Line:</strong> You have every right to your political views. But rights and safety are different things. Protect your identity, think before you post, secure your communications, and remember that the internet never forgets. Be smart so you can be effective.
                        </div>
                    `
                }
            ],
            quiz: {
                questions: [
                    {
                        question: 'What is a "passive digital footprint"?',
                        options: [
                            'Posts you intentionally share on social media',
                            'Data collected about you without your direct action — like browsing history, location tracking, and cookies',
                            'Your email address',
                            'Your phone number'
                        ],
                        correct: 1,
                        explanation: 'Your passive digital footprint is data collected about you without your direct involvement — browsing history, location data, cookies, time spent on pages, and device information. It\'s collected automatically as you use the internet.'
                    },
                    {
                        question: 'Why do social media algorithms tend to show you more outrage-inducing content?',
                        options: [
                            'Because it\'s more accurate information',
                            'Because outrage drives engagement — and engagement is what sells ads',
                            'Because the platform wants to educate you',
                            'Because users request it'
                        ],
                        correct: 1,
                        explanation: 'Social media algorithms optimize for engagement, not truth or well-being. Content that provokes strong emotions (anger, fear, outrage) gets more likes, shares, and comments — which means more ad revenue for the platform.'
                    },
                    {
                        question: 'Why should you avoid posting real-time location data on social media, especially during politically sensitive times?',
                        options: [
                            'It uses too much phone battery',
                            'Real-time location reveals where you are, can be used for doxxing or targeting, and facial recognition tech may be used at large gatherings',
                            'Social media apps don\'t allow it anyway',
                            'It\'s only a concern if you\'re famous'
                        ],
                        correct: 1,
                        explanation: 'Posting real-time location data tells people exactly where you are. This information can be used for doxxing, harassment, or targeting. At events like protests, facial recognition technology and social media monitoring are actively used. Protect yourself by disabling geotagging and not posting your location in real-time.'
                    }
                ]
            }
        },
        {
            id: 2,
            title: 'Information Literacy',
            subtitle: 'Separating fact from fiction online',
            topics: [
                {
                    id: 'evaluating-sources',
                    title: 'Evaluating Online Information',
                    content: `
                        <h2>Evaluating Online Information</h2>

                        <h3>The SIFT Method</h3>
                        <ol>
                            <li><strong>S — Stop:</strong> Before sharing or believing, pause</li>
                            <li><strong>I — Investigate the source:</strong> Who created this? What's their expertise and motivation?</li>
                            <li><strong>F — Find better coverage:</strong> Search for the same topic from trusted sources</li>
                            <li><strong>T — Trace claims:</strong> Find the original source of the claim</li>
                        </ol>

                        <h3>Red Flags for Misinformation</h3>
                        <ul>
                            <li><strong>Emotional headlines:</strong> Designed to shock, anger, or scare you</li>
                            <li><strong>No author or source cited</strong></li>
                            <li><strong>"One weird trick" language:</strong> Oversimplified solutions to complex problems</li>
                            <li><strong>No date:</strong> Old information presented as current</li>
                            <li><strong>Only one source:</strong> Real news is reported by multiple outlets</li>
                            <li><strong>"They don't want you to know":</strong> Conspiracy language designed to bypass critical thinking</li>
                            <li><strong>URL tricks:</strong> Fake sites that mimic real ones (e.g., ABCnews.com.co)</li>
                        </ul>

                        <h3>Trusted vs. Unreliable Sources</h3>
                        <ul>
                            <li><strong>More reliable:</strong> Established news organizations, peer-reviewed journals, government data (.gov), educational institutions (.edu), primary sources</li>
                            <li><strong>Less reliable:</strong> Anonymous blogs, social media posts, sites without editorial standards, sites with clear ideological agendas</li>
                            <li><strong>Check multiple sources:</strong> If only one site is reporting something "huge," it's probably not real</li>
                        </ul>

                        <div class="highlight">
                            <strong>The 30-Second Rule:</strong> Before sharing anything online, spend 30 seconds verifying. Google the claim. Check Snopes.com or FactCheck.org. If you can't verify it in 30 seconds, don't share it.
                        </div>
                    `
                },
                {
                    id: 'ai-generated-content',
                    title: 'Recognizing AI-Generated Content',
                    content: `
                        <h2>Recognizing AI-Generated Content</h2>

                        <h3>The AI Content Explosion</h3>
                        <ul>
                            <li>AI can now generate text, images, videos, and audio that are increasingly difficult to distinguish from human-created content</li>
                            <li>This includes deepfake videos, AI-written articles, synthetic voices, and generated images</li>
                            <li>Not all AI content is bad — but you need to know when you're consuming it</li>
                        </ul>

                        <h3>Signs of AI-Generated Text</h3>
                        <ul>
                            <li>Perfect grammar but generic or vague content</li>
                            <li>Repetitive phrasing or structure</li>
                            <li>Confident claims without specific sources</li>
                            <li>Lack of personal experience or unique perspective</li>
                            <li>Content that sounds "right" but doesn't add new insight</li>
                        </ul>

                        <h3>Signs of AI-Generated Images/Video</h3>
                        <ul>
                            <li>Distorted hands, fingers, or teeth</li>
                            <li>Inconsistent lighting or shadows</li>
                            <li>Blurry or warped backgrounds</li>
                            <li>Text in images that's garbled or nonsensical</li>
                            <li>Uncanny smoothness in skin or textures</li>
                            <li>Note: AI is improving rapidly — these signs are becoming harder to spot</li>
                        </ul>

                        <h3>Protecting Yourself</h3>
                        <ul>
                            <li>Reverse image search (Google Images, TinEye) to check if an image is AI-generated or stolen</li>
                            <li>Be skeptical of viral content — verify before sharing</li>
                            <li>Check if the author/creator is a real person</li>
                            <li>Look for disclosure ("This content was generated by AI")</li>
                            <li>Use AI detection tools (though they're not perfect)</li>
                        </ul>

                        <div class="highlight">
                            <strong>Default to Skepticism:</strong> As AI content becomes more sophisticated, your default should be skepticism until verified. Apply the SIFT method to everything — especially content that provokes a strong emotional reaction.
                        </div>
                    `
                }
            ],
            quiz: {
                questions: [
                    {
                        question: 'What does the "S" in the SIFT method stand for?',
                        options: [
                            'Share immediately',
                            'Stop — pause before believing or sharing',
                            'Search for more of the same',
                            'Summarize the content'
                        ],
                        correct: 1,
                        explanation: 'The "S" stands for STOP. Before reacting to or sharing any online content, pause and engage your critical thinking. This simple step prevents the spread of most misinformation.'
                    },
                    {
                        question: 'What is the best way to verify a claim you see online?',
                        options: [
                            'Trust it if it has a lot of likes',
                            'Check if it matches your existing beliefs',
                            'Search for the same claim from multiple reliable sources — if only one site is reporting it, be skeptical',
                            'Ask your friends if they\'ve seen it too'
                        ],
                        correct: 2,
                        explanation: 'The best verification method is checking multiple reliable sources. If a major claim is only being reported by one site, it\'s likely not credible. Real news is covered by multiple independent outlets.'
                    }
                ]
            }
        },
        {
            id: 3,
            title: 'Online Privacy',
            subtitle: 'Taking control of your personal information',
            topics: [
                {
                    id: 'privacy-settings',
                    title: 'Essential Privacy Settings & Tools',
                    content: `
                        <h2>Essential Privacy Settings & Tools</h2>

                        <h3>Browser Privacy</h3>
                        <ul>
                            <li><strong>Use a privacy-focused browser:</strong> Brave, Firefox, or DuckDuckGo browser</li>
                            <li><strong>Search engine:</strong> DuckDuckGo doesn't track your searches</li>
                            <li><strong>Ad blocker:</strong> uBlock Origin (free, effective)</li>
                            <li><strong>Clear cookies regularly</strong> or set your browser to auto-clear</li>
                            <li><strong>Use private/incognito mode</strong> for sensitive searches (protects from local tracking, NOT from ISPs)</li>
                        </ul>

                        <h3>Phone Privacy</h3>
                        <ul>
                            <li><strong>Review app permissions:</strong> Does a flashlight app really need your contacts?</li>
                            <li><strong>Turn off location services</strong> for apps that don't need it</li>
                            <li><strong>Disable ad tracking:</strong> iOS: Settings > Privacy > Tracking. Android: Settings > Privacy > Ads</li>
                            <li><strong>Use a VPN</strong> on public Wi-Fi (NordVPN, Mullvad, ProtonVPN)</li>
                            <li><strong>Update your OS and apps</strong> — updates often include security patches</li>
                        </ul>

                        <h3>Account Privacy</h3>
                        <ul>
                            <li><strong>Password manager:</strong> Use one (Bitwarden is free and excellent)</li>
                            <li><strong>Two-factor authentication (2FA):</strong> Enable on EVERY important account (email, banking, social media)</li>
                            <li><strong>Unique passwords:</strong> Never reuse passwords across sites</li>
                            <li><strong>Email aliases:</strong> Use different emails for different purposes (shopping vs. banking vs. social media)</li>
                        </ul>

                        <h3>Social Media Privacy</h3>
                        <ul>
                            <li>Review and tighten privacy settings quarterly</li>
                            <li>Limit who can see your posts, friends list, and profile info</li>
                            <li>Don't share your location in real-time</li>
                            <li>Be selective about what personal information you include in your profile</li>
                        </ul>

                        <div class="highlight">
                            <strong>Start with These 3:</strong> (1) Password manager with unique passwords, (2) Two-factor authentication on all important accounts, (3) Privacy-focused browser with an ad blocker. These three steps eliminate 80% of common privacy risks.
                        </div>
                    `
                },
                {
                    id: 'data-rights',
                    title: 'Your Data Rights',
                    content: `
                        <h2>Your Data Rights</h2>

                        <h3>What Rights Do You Have?</h3>

                        <h4>California (CCPA/CPRA)</h4>
                        <ul>
                            <li><strong>Right to know:</strong> What personal data is collected about you</li>
                            <li><strong>Right to delete:</strong> Request companies delete your data</li>
                            <li><strong>Right to opt-out:</strong> Of the sale or sharing of your personal information</li>
                            <li><strong>Right to non-discrimination:</strong> Companies can't penalize you for exercising your rights</li>
                            <li>Look for "Do Not Sell My Personal Information" links on websites</li>
                        </ul>

                        <h4>Other State Laws</h4>
                        <ul>
                            <li>Virginia, Colorado, Connecticut, and others have passed similar privacy laws</li>
                            <li>More states adding protections every year</li>
                            <li>Federal privacy law is still being debated</li>
                        </ul>

                        <h4>GDPR (If You Deal with European Companies)</h4>
                        <ul>
                            <li>Strongest privacy protection in the world</li>
                            <li>Right to access, correct, and delete your data</li>
                            <li>Companies must get explicit consent before collecting data</li>
                        </ul>

                        <h3>Exercising Your Rights</h3>
                        <ul>
                            <li>Search for "[company name] data request" or "privacy request"</li>
                            <li>Most companies have online forms or designated email addresses</li>
                            <li>They have 45 days to respond (in CA)</li>
                            <li>If they don't comply, file a complaint with your state's AG</li>
                        </ul>

                        <h3>Data Broker Opt-Outs</h3>
                        <ul>
                            <li>Sites like Spokeo, WhitePages, BeenVerified sell your personal info</li>
                            <li>You can opt out — but it's tedious (there are dozens of brokers)</li>
                            <li>Services like DeleteMe or Privacy Duck do this for you (~$100-$200/year)</li>
                        </ul>

                        <div class="highlight">
                            <strong>Your Data Has Value:</strong> Companies make billions selling your personal information. Exercising your privacy rights isn't just about protection — it's about reclaiming control over something that belongs to you.
                        </div>
                    `
                },
                {
                    id: 'erasing-digital-footprint',
                    title: 'Erasing Your Digital Footprint',
                    content: `
                        <h2>Erasing Your Digital Footprint</h2>

                        <p>Whether you want to disappear from search results, remove yourself from data broker sites, or clean up years of online activity — this is the step-by-step playbook. Complete erasure is nearly impossible, but you can reduce your digital footprint by 80-90% with consistent effort.</p>

                        <h3>Step 1: Discover What's Out There</h3>
                        <p>Before you can erase, you need to know what exists. This is your reconnaissance phase.</p>
                        <ul>
                            <li><strong>Google yourself:</strong> Search your full name, your name + city, your name + employer, your email address, your phone number, and your usernames. Check the first 5 pages of results — not just page 1</li>
                            <li><strong>Image search:</strong> Do a Google Image search for your name. Also try reverse image search on your profile photos — you'll see everywhere they appear</li>
                            <li><strong>Check data broker sites directly:</strong> Search for yourself on Spokeo, WhitePages, BeenVerified, PeopleFinder, Intelius, TruePeopleSearch, FastPeopleSearch, and Radaris. These are the biggest ones that expose your address, phone number, relatives, and more</li>
                            <li><strong>Check old accounts:</strong> Think about every platform you've ever signed up for — MySpace, Tumblr, old forums, dating apps, job boards, and gaming platforms. Use your email's "search" to find old sign-up confirmations</li>
                            <li><strong>Make a list:</strong> Write down every result, every data broker listing, and every old account. This is your removal checklist</li>
                        </ul>

                        <h3>Step 2: Remove Yourself from Data Brokers</h3>
                        <p>Data brokers are companies that collect and sell your personal information — name, address, phone number, age, relatives, income estimates, even property records. There are hundreds of them.</p>
                        <ul>
                            <li><strong>Manual opt-out (free but tedious):</strong> Each data broker has an opt-out process. Some require email verification, some require a photo of your ID, and some make you jump through hoops. It can take 2-4 weeks per broker.</li>
                            <li><strong>Major brokers to opt out of:</strong></li>
                        </ul>
                        <ol>
                            <li><strong>Spokeo.com</strong> — Search yourself, click the listing, click "Opt Out," enter email, confirm</li>
                            <li><strong>WhitePages.com</strong> — Go to whitepages.com/suppression-requests, find your listing, submit removal</li>
                            <li><strong>BeenVerified.com</strong> — Go to beenverified.com/faq/opt-out, enter info, confirm email</li>
                            <li><strong>TruePeopleSearch.com</strong> — Find your listing, click "Remove This Record," confirm</li>
                            <li><strong>FastPeopleSearch.com</strong> — Find your listing, click the "Remove" link at bottom of page</li>
                            <li><strong>Radaris.com</strong> — Search yourself, click "Control Information," request removal</li>
                            <li><strong>Intelius.com</strong> — Submit opt-out form with your info</li>
                            <li><strong>PeopleFinder.com</strong> — Go to peoplefinder.com/optout, submit request</li>
                        </ol>

                        <div class="highlight">
                            <strong>Pro Tip:</strong> Data brokers re-add you over time (they buy new data regularly). You need to re-check every 3-6 months. This is why paid services exist — they automate this ongoing process.
                        </div>

                        <ul>
                            <li><strong>Paid removal services (easier but costs money):</strong></li>
                        </ul>
                        <ul>
                            <li><strong>DeleteMe</strong> (~$129/year) — Removes you from 40+ data brokers and re-checks every quarter. Most popular option.</li>
                            <li><strong>Kanary</strong> (~$89/year) — Similar to DeleteMe, good for individuals</li>
                            <li><strong>Privacy Duck</strong> (~$500/year) — Premium service, white-glove removal for professionals</li>
                            <li><strong>Optery</strong> (free tier + paid plans) — Scans 200+ brokers, free tier shows where you appear, paid removes you</li>
                        </ul>

                        <h3>Step 3: Delete Old and Unused Accounts</h3>
                        <p>Every account you've ever created still has your data. Even abandoned accounts can be breached, exposing your information.</p>
                        <ul>
                            <li><strong>JustDeleteMe.com:</strong> A directory that links directly to the account deletion pages of hundreds of services, rated by difficulty (easy, medium, hard, impossible)</li>
                            <li><strong>AccountKiller.com:</strong> Similar resource with step-by-step deletion instructions</li>
                            <li><strong>Search your email:</strong> Search your inbox for "welcome to," "confirm your account," "verify your email" to find old sign-ups you've forgotten</li>
                            <li><strong>Before deleting:</strong> Download your data first (most platforms offer this). Remove personal info from the profile before deleting — some sites keep "deleted" account data</li>
                            <li><strong>"Hard to delete" accounts:</strong> Some services make it intentionally difficult. If you can't find a delete option, email their support/privacy team and cite your data rights (CCPA if in California, GDPR if applicable)</li>
                        </ul>

                        <h3>Step 4: Clean Up Social Media</h3>
                        <ul>
                            <li><strong>Facebook:</strong> Use the "Activity Log" to bulk-delete old posts. Go to Settings > Your Facebook Information > Download Your Information first. Then use Settings > Privacy > Limit Past Posts to restrict old content</li>
                            <li><strong>Twitter/X:</strong> Use TweetDelete.net or Semiphemeral to mass-delete old tweets. These tools can delete tweets older than a set date</li>
                            <li><strong>Instagram:</strong> Manually delete old posts, or use third-party tools. Archive posts you're unsure about (hidden from public but not deleted)</li>
                            <li><strong>Reddit:</strong> Use Shreddit or Power Delete Suite (browser extensions) to overwrite and delete old comments. Simply deleting doesn't always remove the content from archives</li>
                            <li><strong>LinkedIn:</strong> Remove old jobs, education details, and connections you don't know. Tighten visibility settings</li>
                            <li><strong>TikTok:</strong> Set account to private, delete old videos, remove personal info from bio</li>
                        </ul>

                        <h3>Step 5: Request Removal from Google Search</h3>
                        <ul>
                            <li><strong>Google's removal tool:</strong> Google has a "Remove Outdated Content" tool for pages that have already been deleted but still show in search results</li>
                            <li><strong>Personal info removal:</strong> Google allows you to request removal of search results that show your phone number, email, physical address, or other personal info. Go to support.google.com/websearch/answer/9673730</li>
                            <li><strong>"Results About You" tool:</strong> Google has a dashboard where you can monitor when your personal info appears in search results and request removal directly</li>
                            <li><strong>Important:</strong> Google removing a search result does NOT delete the underlying content. You need to get the source website to remove it first, then ask Google to de-index it</li>
                        </ul>

                        <h3>Step 6: Lock Down What Remains</h3>
                        <ul>
                            <li><strong>For accounts you keep:</strong> Set everything to maximum privacy. Friends-only on Facebook, protected tweets, private Instagram, etc.</li>
                            <li><strong>Use aliases:</strong> For future sign-ups that don't need your real name, use a pseudonym</li>
                            <li><strong>Use a PO Box:</strong> If your home address is being exposed, get a PO Box and use it for all online registrations</li>
                            <li><strong>Get a Google Voice number:</strong> Use this for online sign-ups instead of your real phone number. It's free.</li>
                            <li><strong>Email aliases:</strong> Use Apple's "Hide My Email," Firefox Relay, or SimpleLogin to create unique emails for each service</li>
                            <li><strong>Set up Google Alerts:</strong> Create alerts for your name, email, and phone number so you're notified when new results appear</li>
                        </ul>

                        <h3>The Realistic Timeline</h3>
                        <ul>
                            <li><strong>Week 1:</strong> Discovery phase — Google yourself, check data brokers, list old accounts (2-3 hours)</li>
                            <li><strong>Week 2-3:</strong> Submit data broker opt-outs and start deleting old accounts (1 hour/day)</li>
                            <li><strong>Week 4:</strong> Clean up social media, request Google removals (2-3 hours)</li>
                            <li><strong>Ongoing:</strong> Re-check data brokers every 3-6 months. They re-add you from new data sources</li>
                            <li><strong>Full effect:</strong> Most removals take 2-6 weeks to process. Full results visible in 2-3 months</li>
                        </ul>

                        <div class="highlight">
                            <strong>Reality Check:</strong> Complete digital erasure is nearly impossible — cached pages, archive.org, and data that's already been sold will linger. But reducing your footprint by 80-90% is absolutely achievable, and it makes you a much harder target for data brokers, scammers, stalkers, and doxxers. Start today — every account you delete and every opt-out you submit makes a difference.
                        </div>
                    `
                }
            ],
            quiz: {
                questions: [
                    {
                        question: 'What are the 3 most impactful privacy steps you can take right now?',
                        options: [
                            'Delete all social media, buy a flip phone, and move off-grid',
                            'Password manager with unique passwords, two-factor authentication on all important accounts, and a privacy-focused browser with ad blocker',
                            'Just use incognito mode',
                            'Only use your phone for calls'
                        ],
                        correct: 1,
                        explanation: 'A password manager, 2FA on important accounts, and a privacy-focused browser with an ad blocker eliminate about 80% of common privacy risks — and they\'re all free or very low-cost.'
                    },
                    {
                        question: 'Under California\'s CCPA/CPRA, what rights do you have regarding your personal data?',
                        options: [
                            'No rights — companies can do what they want',
                            'The right to know what data is collected, request deletion, opt out of data sales, and not be penalized for exercising these rights',
                            'Only the right to see your data',
                            'Rights only if you\'re a California resident who pays for the service'
                        ],
                        correct: 1,
                        explanation: 'Under CCPA/CPRA, California residents have the right to know what data is collected, request deletion, opt out of data sales/sharing, and cannot be discriminated against for exercising these rights.'
                    },
                    {
                        question: 'Why do you need to re-check data broker sites every 3-6 months even after opting out?',
                        options: [
                            'Because your opt-out expires automatically',
                            'Data brokers buy new data regularly and re-add your information from new sources — removal is an ongoing process, not a one-time fix',
                            'Because the law requires it',
                            'You don\'t — once you opt out, you\'re removed permanently'
                        ],
                        correct: 1,
                        explanation: 'Data brokers constantly acquire new data from public records, other brokers, and online sources. Even after you opt out, they may re-list you from new data. That\'s why digital footprint maintenance is ongoing — and why paid services like DeleteMe automate the re-checking process.'
                    }
                ]
            }
        },
        {
            id: 4,
            title: 'Digital Communication & Professionalism',
            subtitle: 'Communicating effectively in the digital age',
            topics: [
                {
                    id: 'email-professionalism',
                    title: 'Professional Digital Communication',
                    content: `
                        <h2>Professional Digital Communication</h2>

                        <h3>Email Best Practices</h3>
                        <ul>
                            <li><strong>Subject lines:</strong> Clear and specific ("Project X — Budget Approval Needed by Friday")</li>
                            <li><strong>Keep it brief:</strong> Most people skim — put the key point in the first 2 sentences</li>
                            <li><strong>One email, one topic:</strong> Don't bury multiple requests in one message</li>
                            <li><strong>Use bullet points</strong> for multiple items</li>
                            <li><strong>Clear call to action:</strong> What do you need from the reader?</li>
                            <li><strong>Proofread:</strong> Typos undermine credibility</li>
                            <li><strong>Reply All wisely:</strong> Does everyone really need to see your response?</li>
                        </ul>

                        <h3>Messaging & Chat (Slack, Teams, etc.)</h3>
                        <ul>
                            <li>Keep it professional — these messages can be saved and reviewed</li>
                            <li>Use threads to keep conversations organized</li>
                            <li>Respect people's "offline" or "do not disturb" status</li>
                            <li>Don't assume immediate response — async communication is normal</li>
                            <li>Sensitive topics should go to email or meetings, not chat</li>
                        </ul>

                        <h3>Video Calls</h3>
                        <ul>
                            <li>Camera on (usually) — it builds connection</li>
                            <li>Mute when not speaking</li>
                            <li>Professional background (or use a virtual background)</li>
                            <li>Look at the camera, not the screen, when speaking</li>
                            <li>Be present — multitasking on calls is obvious and disrespectful</li>
                        </ul>

                        <div class="highlight">
                            <strong>The Permanence Rule:</strong> Every digital communication you send at work can be saved, screenshotted, forwarded, and used as evidence. Write every email and message as if it could be read by a judge, HR, or a journalist. Because it could be.
                        </div>
                    `
                },
                {
                    id: 'online-reputation',
                    title: 'Managing Your Online Reputation',
                    content: `
                        <h2>Managing Your Online Reputation</h2>

                        <h3>Why Your Online Reputation Matters</h3>
                        <ul>
                            <li>70%+ of employers Google candidates before hiring</li>
                            <li>Clients, partners, and colleagues look you up</li>
                            <li>Your online presence is your digital first impression</li>
                            <li>What you post can follow you for decades</li>
                        </ul>

                        <h3>Building a Positive Online Presence</h3>
                        <ul>
                            <li><strong>LinkedIn:</strong> Keep it updated, professional, and active</li>
                            <li><strong>Personal website:</strong> A simple site with your bio and work is powerful</li>
                            <li><strong>Professional content:</strong> Share industry insights, not just personal updates</li>
                            <li><strong>Google yourself quarterly:</strong> Know what others see when they search your name</li>
                        </ul>

                        <h3>Damage Control</h3>
                        <ul>
                            <li><strong>Old embarrassing posts:</strong> Delete them. Most platforms let you bulk-delete or use tools like TweetDelete.</li>
                            <li><strong>Negative search results:</strong> Push them down by creating positive content (blog posts, LinkedIn articles, professional profiles)</li>
                            <li><strong>Someone posted about you:</strong> Contact the platform for removal if it violates terms of service. Consider legal options for defamation.</li>
                            <li><strong>Reputation management services:</strong> For serious situations, companies specialize in this</li>
                        </ul>

                        <div class="highlight">
                            <strong>The 10-Year Test:</strong> Before posting anything online, ask: "Will I be proud of this in 10 years? Could this hurt my career, relationships, or reputation?" If there's any doubt, don't post it.
                        </div>
                    `
                }
            ],
            quiz: {
                questions: [
                    {
                        question: 'What is "the permanence rule" for digital communication at work?',
                        options: [
                            'Digital messages delete themselves after 30 days',
                            'Every digital communication can be saved, forwarded, and used as evidence — write accordingly',
                            'Only emails are permanent, not chat messages',
                            'You can always delete messages later'
                        ],
                        correct: 1,
                        explanation: 'Every email, message, and digital communication at work can be saved, screenshotted, forwarded, and potentially used in legal proceedings. Write every message as if it could be read by HR, a judge, or a journalist.'
                    },
                    {
                        question: 'Why should you Google yourself regularly?',
                        options: [
                            'For entertainment',
                            'To know what employers, clients, and others see when they search your name — and to manage your online reputation proactively',
                            'To find out if you\'re famous',
                            'It\'s not necessary'
                        ],
                        correct: 1,
                        explanation: 'Over 70% of employers Google candidates. Regularly searching your own name lets you know what others see, identify any negative content, and take proactive steps to manage your online reputation.'
                    }
                ]
            }
        },
        {
            id: 5,
            title: 'Digital Rights & Advocacy',
            subtitle: 'Understanding your rights in the digital world',
            topics: [
                {
                    id: 'digital-rights',
                    title: 'Your Rights Online',
                    content: `
                        <h2>Your Rights Online</h2>

                        <h3>Free Speech Online</h3>
                        <ul>
                            <li>The First Amendment protects you from <strong>government</strong> censorship — not from private companies</li>
                            <li>Social media platforms CAN moderate content and remove posts (they're private businesses)</li>
                            <li>However, government officials can't block you on official accounts (courts have ruled this)</li>
                            <li>Your employer can discipline you for social media posts (with exceptions for protected activity)</li>
                        </ul>

                        <h3>Online Harassment & Legal Options</h3>
                        <ul>
                            <li><strong>Cyberstalking:</strong> Illegal under federal and state laws</li>
                            <li><strong>Revenge porn:</strong> Illegal in most states (and federal law for some circumstances)</li>
                            <li><strong>Defamation:</strong> You can sue for false statements that damage your reputation</li>
                            <li><strong>Doxxing:</strong> Publishing private information — may be illegal depending on context</li>
                            <li><strong>Platform reporting:</strong> Report harassment through the platform first</li>
                            <li><strong>Law enforcement:</strong> File a police report for criminal harassment</li>
                            <li><strong>Civil remedies:</strong> Restraining orders, lawsuits for damages</li>
                        </ul>

                        <h3>Net Neutrality & Internet Access</h3>
                        <ul>
                            <li>Net neutrality = ISPs must treat all internet traffic equally</li>
                            <li>Without it, ISPs can slow, block, or charge more for certain websites</li>
                            <li>Status varies by administration — stay informed</li>
                            <li>Internet access is increasingly considered a necessity, not a luxury</li>
                        </ul>

                        <div class="highlight">
                            <strong>Know the Difference:</strong> The First Amendment protects you from the government, not from Twitter. But protections against harassment, stalking, and defamation apply in the digital world just as they do in the physical world. If someone is harassing you online, you have legal options.
                        </div>
                    `
                },
                {
                    id: 'being-smart-online',
                    title: 'Being a Smart Digital Citizen',
                    content: `
                        <h2>Being a Smart Digital Citizen</h2>

                        <h3>The Digital Citizen Mindset</h3>
                        <ul>
                            <li><strong>Think before you click:</strong> Links, downloads, and attachments</li>
                            <li><strong>Think before you post:</strong> Permanence, audience, consequences</li>
                            <li><strong>Think before you share:</strong> Is it true? Is it helpful? Is it necessary?</li>
                            <li><strong>Think before you trust:</strong> Verify identity, sources, and claims</li>
                        </ul>

                        <h3>Teaching Others</h3>
                        <ul>
                            <li>Help older family members recognize scams and phishing</li>
                            <li>Teach children about online safety, privacy, and digital footprints</li>
                            <li>Share privacy tips with friends and colleagues</li>
                            <li>Report misinformation when you see it</li>
                        </ul>

                        <h3>Staying Updated</h3>
                        <ul>
                            <li>Technology changes fast — privacy and security best practices evolve</li>
                            <li>Follow trusted tech journalists and security researchers</li>
                            <li>Check for data breaches affecting you at HaveIBeenPwned.com</li>
                            <li>Update your devices and software promptly</li>
                        </ul>

                        <h3>The Bigger Picture</h3>
                        <ul>
                            <li>Digital literacy is as fundamental as reading and math literacy</li>
                            <li>The choices you make online have real-world consequences</li>
                            <li>You have more power to protect yourself than you think</li>
                            <li>Being informed is the best defense against manipulation, fraud, and privacy violations</li>
                        </ul>

                        <div class="highlight">
                            <strong>Your Superpower:</strong> In a world of misinformation, scams, and manipulation — being a critical, informed, privacy-conscious digital citizen is a genuine superpower. You can't control the internet, but you can control how you navigate it.
                        </div>
                    `
                }
            ],
            quiz: {
                questions: [
                    {
                        question: 'Does the First Amendment protect your speech on social media platforms?',
                        options: [
                            'Yes — they can\'t remove your posts',
                            'No — the First Amendment protects you from government censorship, not from private companies\' content moderation',
                            'Only on Facebook',
                            'Only if you\'re a verified user'
                        ],
                        correct: 1,
                        explanation: 'The First Amendment protects you from government censorship, not from private companies. Social media platforms are private businesses and can moderate content according to their terms of service.'
                    },
                    {
                        question: 'What website can you use to check if your email has been compromised in a data breach?',
                        options: [
                            'Google.com',
                            'Facebook.com',
                            'HaveIBeenPwned.com — it checks your email against known data breaches',
                            'Wikipedia.org'
                        ],
                        correct: 2,
                        explanation: 'HaveIBeenPwned.com is a free tool that checks your email address against known data breaches. If your email appears, you should change passwords for affected accounts immediately.'
                    }
                ]
            }
        }
    ]
};
