// Cybersecurity Curriculum Data
const cybersecurityData = {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    icon: '🔒',
    description: 'Protect yourself, your data, and your business from online threats.',
    graduationGoal: 'Protect yourself and your business online',
    levels: [
        {
            id: 1,
            title: 'Threat Landscape',
            subtitle: 'Understanding online dangers',
            topics: [
                {
                    id: 'why-security-matters',
                    title: 'Why Cybersecurity Matters',
                    content: `
                        <h2>Why Cybersecurity Matters</h2>
                        <h3>The Stakes</h3>
                        <ul>
                            <li><strong>Identity theft:</strong> $10,000+ average loss</li>
                            <li><strong>Business breaches:</strong> $200,000+ average small business loss</li>
                            <li><strong>Ransomware:</strong> Can lock all your files</li>
                            <li><strong>Reputation damage:</strong> Lost trust and clients</li>
                        </ul>
                        <h3>Who Gets Targeted?</h3>
                        <ul>
                            <li><strong>Everyone:</strong> Automated attacks hit millions</li>
                            <li><strong>Small businesses:</strong> Often less protected than large ones</li>
                            <li><strong>High-value individuals:</strong> Executives, wealthy people</li>
                            <li><strong>Anyone with access:</strong> To valuable systems or data</li>
                        </ul>
                        <h3>Common Misconceptions</h3>
                        <ul>
                            <li>"I'm not important enough to hack" → Attacks are automated</li>
                            <li>"I have nothing to hide" → Your data still has value</li>
                            <li>"Apple/Mac is secure" → All systems have vulnerabilities</li>
                            <li>"I'd notice if I was hacked" → Often goes undetected for months</li>
                        </ul>
                        <div class="highlight">
                            <strong>Reality:</strong> Cybersecurity isn't about being paranoid—it's about basic hygiene, like locking your door. Simple steps prevent most attacks.
                        </div>
                    `
                },
                {
                    id: 'common-threats',
                    title: 'Common Cyber Threats',
                    content: `
                        <h2>Common Cyber Threats</h2>
                        <h3>Phishing</h3>
                        <p>Fake emails/websites that trick you into giving information</p>
                        <ul>
                            <li>Appears to be from trusted source (bank, boss, etc.)</li>
                            <li>Creates urgency ("Act now or lose access!")</li>
                            <li>Links to fake login pages</li>
                            <li>#1 cause of breaches</li>
                        </ul>
                        <h3>Malware</h3>
                        <p>Malicious software that damages or takes control</p>
                        <ul>
                            <li><strong>Viruses:</strong> Spread through infected files</li>
                            <li><strong>Ransomware:</strong> Encrypts files, demands payment</li>
                            <li><strong>Spyware:</strong> Monitors your activity</li>
                            <li><strong>Keyloggers:</strong> Records what you type</li>
                        </ul>
                        <h3>Social Engineering</h3>
                        <p>Manipulating people rather than systems</p>
                        <ul>
                            <li>Impersonation calls ("IT support needs your password")</li>
                            <li>Pretexting (fake scenarios)</li>
                            <li>Baiting (infected USB drives)</li>
                        </ul>
                        <div class="highlight">
                            <strong>Key Point:</strong> Humans are the weakest link. Most attacks exploit human behavior, not technology.
                        </div>
                    `
                }
            ],
            quiz: [
                {
                    question: 'What is the #1 cause of security breaches?',
                    options: ['Hackers breaking encryption', 'Phishing attacks', 'Malware on websites', 'Weak firewalls'],
                    correct: 1,
                    explanation: 'Phishing—tricking people into revealing credentials through fake emails and websites—is the leading cause of breaches. It exploits human trust, not technology.'
                },
                {
                    question: 'Why do small businesses get targeted?',
                    options: [
                        'They have more money',
                        'They\'re often less protected than large companies',
                        'They\'re more visible',
                        'They don\'t exist online'
                    ],
                    correct: 1,
                    explanation: 'Small businesses are attractive targets because they often have valuable data but less security resources than large enterprises.'
                }
            ]
        },
        {
            id: 2,
            title: 'Password & Account Security',
            subtitle: 'Protecting your accounts',
            topics: [
                {
                    id: 'password-security',
                    title: 'Password Best Practices',
                    content: `
                        <h2>Password Best Practices</h2>
                        <h3>Password Sins</h3>
                        <ul>
                            <li>Using the same password everywhere</li>
                            <li>Short, simple passwords</li>
                            <li>Personal info (birthday, pet name)</li>
                            <li>Common passwords (password123, qwerty)</li>
                            <li>Writing passwords on sticky notes</li>
                        </ul>
                        <h3>Strong Password Formula</h3>
                        <ul>
                            <li><strong>Length:</strong> 16+ characters minimum</li>
                            <li><strong>Complexity:</strong> Mix of types (or just very long)</li>
                            <li><strong>Unique:</strong> Different for every account</li>
                            <li><strong>Random:</strong> Not based on personal info</li>
                        </ul>
                        <h3>Passphrase Strategy</h3>
                        <div class="example">
                            Better than "P@ssw0rd123":<br>
                            "correct-horse-battery-staple-purple"<br>
                            Easy to remember, hard to crack
                        </div>
                        <div class="highlight">
                            <strong>Solution:</strong> Use a password manager. You remember ONE strong password, it remembers hundreds of unique ones.
                        </div>
                    `
                },
                {
                    id: 'password-managers',
                    title: 'Password Managers',
                    content: `
                        <h2>Password Managers</h2>
                        <div class="definition">
                            <strong>Password Manager:</strong> Software that securely stores and generates unique passwords for all your accounts.
                        </div>
                        <h3>Recommended Password Managers</h3>
                        <ul>
                            <li><strong>1Password:</strong> Best overall ($3/month)</li>
                            <li><strong>Bitwarden:</strong> Best free option</li>
                            <li><strong>Dashlane:</strong> Good for beginners</li>
                            <li><strong>Apple Keychain:</strong> Good if all Apple devices</li>
                        </ul>
                        <h3>How They Work</h3>
                        <ol>
                            <li>Create one strong master password</li>
                            <li>Manager generates unique passwords for each site</li>
                            <li>Autofills on websites and apps</li>
                            <li>Syncs across all your devices</li>
                            <li>Alerts you to breached/weak passwords</li>
                        </ol>
                        <h3>Getting Started</h3>
                        <ol>
                            <li>Choose a password manager</li>
                            <li>Import existing passwords from browser</li>
                            <li>Change weak/reused passwords to unique ones</li>
                            <li>Start with most important (email, bank, social)</li>
                        </ol>
                        <div class="highlight">
                            <strong>Priority #1:</strong> Your email password must be unique and very strong—email resets almost every other account.
                        </div>
                    `
                },
                {
                    id: 'two-factor',
                    title: 'Two-Factor Authentication (2FA)',
                    content: `
                        <h2>Two-Factor Authentication (2FA)</h2>
                        <div class="definition">
                            <strong>2FA:</strong> Requiring something you know (password) PLUS something you have (phone, key) to log in.
                        </div>
                        <h3>Types of 2FA (Best to Worst)</h3>
                        <ol>
                            <li><strong>Hardware security key:</strong> YubiKey, physical device (best)</li>
                            <li><strong>Authenticator app:</strong> Google Authenticator, Authy (great)</li>
                            <li><strong>Push notification:</strong> Approve on phone app (good)</li>
                            <li><strong>SMS codes:</strong> Text message (better than nothing)</li>
                        </ol>
                        <h3>Why SMS Is Weakest</h3>
                        <ul>
                            <li>SIM swapping attacks can steal your number</li>
                            <li>Messages can be intercepted</li>
                            <li>Still WAY better than no 2FA</li>
                        </ul>
                        <h3>Where to Enable 2FA First</h3>
                        <ol>
                            <li>Email (most critical)</li>
                            <li>Banking and financial accounts</li>
                            <li>Social media</li>
                            <li>Password manager</li>
                            <li>Work accounts</li>
                        </ol>
                        <div class="highlight">
                            <strong>Non-Negotiable:</strong> At minimum, enable 2FA on your email and bank accounts today. It takes 5 minutes and blocks 99% of attacks.
                        </div>
                    `
                }
            ],
            quiz: [
                {
                    question: 'What is the most important characteristic of a strong password?',
                    options: [
                        'Has special characters',
                        'Is unique for each account and long',
                        'Changes every month',
                        'Contains your birthday'
                    ],
                    correct: 1,
                    explanation: 'Unique passwords prevent one breach from affecting all your accounts. Length is also crucial—longer passwords are exponentially harder to crack.'
                },
                {
                    question: 'Which 2FA method is most secure?',
                    options: ['SMS text codes', 'Email codes', 'Hardware security key', 'Security questions'],
                    correct: 2,
                    explanation: 'Hardware security keys (like YubiKey) are the most secure because they require physical possession and can\'t be intercepted or phished.'
                },
                {
                    question: 'Why is email security the highest priority?',
                    options: [
                        'Email is the most used app',
                        'Email can reset passwords for almost every other account',
                        'Email contains the most data',
                        'Email is required for everything'
                    ],
                    correct: 1,
                    explanation: 'If attackers control your email, they can reset passwords for almost every other account. Email is the master key to your digital life.'
                }
            ]
        },
        {
            id: 3,
            title: 'Device Security',
            subtitle: 'Protecting your computers and phones',
            topics: [
                {
                    id: 'device-basics',
                    title: 'Basic Device Security',
                    content: `
                        <h2>Basic Device Security</h2>
                        <h3>Essential Protections</h3>
                        <ul>
                            <li><strong>Screen lock:</strong> PIN, password, or biometric on all devices</li>
                            <li><strong>Encryption:</strong> Enable full-disk encryption (usually on by default)</li>
                            <li><strong>Auto-lock:</strong> Device locks after 1-2 minutes idle</li>
                            <li><strong>Remote wipe:</strong> Enable Find My iPhone/Android</li>
                        </ul>
                        <h3>Keep Software Updated</h3>
                        <ul>
                            <li>Enable automatic updates</li>
                            <li>Updates fix security vulnerabilities</li>
                            <li>Includes OS, browsers, and all apps</li>
                            <li>Don't delay updates</li>
                        </ul>
                        <h3>Antivirus and Anti-Malware</h3>
                        <ul>
                            <li><strong>Windows:</strong> Built-in Defender is good; add Malwarebytes</li>
                            <li><strong>Mac:</strong> Generally safe but Malwarebytes helpful</li>
                            <li><strong>Mobile:</strong> Stick to official app stores</li>
                        </ul>
                        <div class="highlight">
                            <strong>Quick Wins:</strong> Enable auto-updates, set screen lock, and turn on Find My Device. These take 5 minutes and provide major protection.
                        </div>
                    `
                },
                {
                    id: 'backups',
                    title: 'Backup Strategy',
                    content: `
                        <h2>Backup Strategy</h2>
                        <h3>The 3-2-1 Rule</h3>
                        <ul>
                            <li><strong>3</strong> copies of your data</li>
                            <li><strong>2</strong> different storage types</li>
                            <li><strong>1</strong> copy offsite (cloud or different location)</li>
                        </ul>
                        <h3>Backup Options</h3>
                        <ul>
                            <li><strong>Cloud:</strong> iCloud, Google Drive, Dropbox, Backblaze</li>
                            <li><strong>External drive:</strong> Regular backups to USB drive</li>
                            <li><strong>Time Machine (Mac):</strong> Continuous local backup</li>
                            <li><strong>Windows Backup:</strong> Built-in File History</li>
                        </ul>
                        <h3>What to Back Up</h3>
                        <ul>
                            <li>Documents and files</li>
                            <li>Photos and videos</li>
                            <li>Password manager backup codes</li>
                            <li>Important emails</li>
                            <li>Financial records</li>
                        </ul>
                        <div class="highlight">
                            <strong>Test Your Backups:</strong> A backup you've never tested might not work when you need it. Verify you can actually restore files.
                        </div>
                    `
                }
            ],
            quiz: [
                {
                    question: 'What is the 3-2-1 backup rule?',
                    options: [
                        '3 passwords, 2 accounts, 1 device',
                        '3 copies, 2 storage types, 1 offsite',
                        '3 backups per month, 2 per week, 1 daily',
                        '3 years of data, 2 years of emails, 1 year of photos'
                    ],
                    correct: 1,
                    explanation: 'The 3-2-1 rule means having 3 copies of data, on 2 different storage types, with 1 stored offsite (like cloud) to protect against disasters.'
                },
                {
                    question: 'Why is keeping software updated important?',
                    options: [
                        'New features are fun',
                        'Updates fix security vulnerabilities hackers exploit',
                        'It makes devices faster',
                        'Required by law'
                    ],
                    correct: 1,
                    explanation: 'Software updates patch security vulnerabilities. Hackers actively exploit known vulnerabilities in outdated software.'
                }
            ]
        },
        {
            id: 4,
            title: 'Online Safety',
            subtitle: 'Staying safe while browsing and communicating',
            topics: [
                {
                    id: 'recognizing-phishing',
                    title: 'Recognizing Phishing',
                    content: `
                        <h2>Recognizing Phishing</h2>
                        <h3>Red Flags in Emails</h3>
                        <ul>
                            <li>Urgency ("Act now!", "Account suspended!")</li>
                            <li>Sender address doesn't match company</li>
                            <li>Generic greeting ("Dear Customer")</li>
                            <li>Spelling and grammar errors</li>
                            <li>Suspicious links (hover to check)</li>
                            <li>Unexpected attachments</li>
                            <li>Requests for sensitive info</li>
                        </ul>
                        <h3>How to Verify</h3>
                        <ul>
                            <li>Don't click links—go directly to the website</li>
                            <li>Call the company using a known number</li>
                            <li>Check sender's full email address</li>
                            <li>If it's "from" someone you know, verify another way</li>
                        </ul>
                        <h3>Phishing Examples</h3>
                        <div class="example">
                            <strong>Looks like:</strong> "Your Netflix account is suspended. Click here to update payment."<br>
                            <strong>Reality:</strong> Link goes to netfliix.com (notice misspelling)<br><br>
                            <strong>Safe response:</strong> Go directly to Netflix.com to check your account
                        </div>
                        <div class="highlight">
                            <strong>When in Doubt:</strong> Don't click. Go directly to the website or call the company. Legitimate companies won't mind.
                        </div>
                    `
                },
                {
                    id: 'safe-browsing',
                    title: 'Safe Browsing Practices',
                    content: `
                        <h2>Safe Browsing Practices</h2>
                        <h3>Browser Security</h3>
                        <ul>
                            <li>Keep browser updated</li>
                            <li>Use HTTPS (look for lock icon)</li>
                            <li>Be cautious with browser extensions</li>
                            <li>Consider ad blocker (uBlock Origin)</li>
                            <li>Use private/incognito mode for sensitive browsing</li>
                        </ul>
                        <h3>Public WiFi Safety</h3>
                        <ul>
                            <li>Avoid sensitive activities (banking) on public WiFi</li>
                            <li>Use VPN for protection</li>
                            <li>Verify network name (fake hotspots exist)</li>
                            <li>Turn off auto-connect to open networks</li>
                        </ul>
                        <h3>Privacy Basics</h3>
                        <ul>
                            <li>Review social media privacy settings</li>
                            <li>Be careful what you share publicly</li>
                            <li>Use different emails for different purposes</li>
                            <li>Consider what data apps really need</li>
                        </ul>
                        <div class="highlight">
                            <strong>VPN Recommendation:</strong> For public WiFi, a VPN encrypts your traffic. NordVPN, ExpressVPN, or ProtonVPN are good options.
                        </div>
                    `
                }
            ],
            quiz: [
                {
                    question: 'What should you do if you receive a suspicious email from your "bank"?',
                    options: [
                        'Click the link to verify it\'s real',
                        'Reply asking if it\'s legitimate',
                        'Go directly to your bank\'s website or call them',
                        'Forward it to friends to check'
                    ],
                    correct: 2,
                    explanation: 'Never click links or reply to suspicious emails. Go directly to the company\'s website by typing it yourself, or call using a number you know is real.'
                },
                {
                    question: 'Why is public WiFi risky?',
                    options: [
                        'It\'s slower',
                        'Attackers can intercept unencrypted traffic on the same network',
                        'It costs money',
                        'It doesn\'t work with all devices'
                    ],
                    correct: 1,
                    explanation: 'On public WiFi, attackers on the same network can potentially intercept your traffic. Use VPN or avoid sensitive activities.'
                }
            ]
        },
        {
            id: 5,
            title: 'Business Security',
            subtitle: 'Protecting your business and customers',
            topics: [
                {
                    id: 'business-security-basics',
                    title: 'Business Security Essentials',
                    content: `
                        <h2>Business Security Essentials</h2>
                        <h3>Minimum Security Measures</h3>
                        <ul>
                            <li>Strong, unique passwords for all business accounts</li>
                            <li>2FA on all business-critical accounts</li>
                            <li>Regular backups of business data</li>
                            <li>Updated software and systems</li>
                            <li>Separate business and personal accounts</li>
                        </ul>
                        <h3>Employee Security</h3>
                        <ul>
                            <li>Train employees on phishing</li>
                            <li>Use business password manager</li>
                            <li>Principle of least privilege (minimal access needed)</li>
                            <li>Offboard properly (revoke access immediately)</li>
                        </ul>
                        <h3>Data Protection</h3>
                        <ul>
                            <li>Know what sensitive data you have</li>
                            <li>Encrypt sensitive data</li>
                            <li>Limit who can access what</li>
                            <li>Have a data breach response plan</li>
                        </ul>
                        <div class="highlight">
                            <strong>Small Business Reality:</strong> You don't need enterprise security. Solid basics (passwords, 2FA, backups, training) stop most attacks.
                        </div>
                    `
                },
                {
                    id: 'incident-response',
                    title: 'If You Get Hacked',
                    content: `
                        <h2>If You Get Hacked</h2>
                        <h3>Immediate Steps</h3>
                        <ol>
                            <li>Stay calm—panic leads to mistakes</li>
                            <li>Document everything you observe</li>
                            <li>Disconnect affected systems (but don't turn off)</li>
                            <li>Change passwords for affected accounts</li>
                            <li>Check other accounts for unauthorized access</li>
                        </ol>
                        <h3>Communication</h3>
                        <ul>
                            <li>Notify affected customers if their data was exposed</li>
                            <li>Contact your bank if financial data involved</li>
                            <li>Report to relevant authorities (FTC, local police)</li>
                            <li>Consider hiring professional help</li>
                        </ul>
                        <h3>Recovery</h3>
                        <ul>
                            <li>Restore from clean backups</li>
                            <li>Identify how breach occurred</li>
                            <li>Fix the vulnerability</li>
                            <li>Improve security to prevent repeat</li>
                        </ul>
                        <div class="highlight">
                            <strong>Remember:</strong> Getting hacked isn't shameful—it happens to everyone. How you respond matters most.
                        </div>
                    `
                }
            ],
            quiz: [
                {
                    question: 'What is the principle of least privilege?',
                    options: [
                        'Give everyone admin access',
                        'Give users only the minimum access they need to do their job',
                        'Privilege high-ranking employees',
                        'Remove all user accounts'
                    ],
                    correct: 1,
                    explanation: 'Least privilege means giving users only the access they need—nothing more. This limits damage if any account is compromised.'
                },
                {
                    question: 'What should you do FIRST if you discover a breach?',
                    options: [
                        'Delete everything',
                        'Shut down all computers',
                        'Stay calm and document what you observe',
                        'Post about it on social media'
                    ],
                    correct: 2,
                    explanation: 'Stay calm and document everything. Panic leads to mistakes, and documentation is crucial for understanding and fixing the breach.'
                }
            ]
        }
    ]
};
