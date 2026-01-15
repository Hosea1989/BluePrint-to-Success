// Cryptocurrency Curriculum Data
const cryptoData = {
    id: 'crypto',
    title: 'Cryptocurrency',
    icon: '₿',
    description: 'Understand blockchain, Bitcoin, and how to safely navigate the crypto world.',
    graduationGoal: 'Understand crypto enough to make informed investment decisions',
    levels: [
        {
            id: 1,
            title: 'Blockchain Basics',
            subtitle: 'Understanding the technology behind crypto',
            topics: [
                {
                    id: 'what-is-blockchain',
                    title: 'What is Blockchain?',
                    content: `
                        <h2>What is Blockchain?</h2>
                        <div class="definition">
                            <strong>Blockchain:</strong> A decentralized digital ledger that records transactions across many computers so that the record cannot be altered retroactively.
                        </div>
                        <h3>Key Concepts</h3>
                        <ul>
                            <li><strong>Decentralized:</strong> No single company or government controls it</li>
                            <li><strong>Distributed:</strong> Copies exist on thousands of computers worldwide</li>
                            <li><strong>Immutable:</strong> Once recorded, transactions can't be changed</li>
                            <li><strong>Transparent:</strong> Anyone can view the transaction history</li>
                        </ul>
                        <h3>How It Works (Simplified)</h3>
                        <ol>
                            <li>You request a transaction (send crypto)</li>
                            <li>Transaction is broadcast to network of computers (nodes)</li>
                            <li>Network validates the transaction using algorithms</li>
                            <li>Verified transaction is combined with others into a "block"</li>
                            <li>Block is added to the existing chain (blockchain)</li>
                            <li>Transaction is complete and permanent</li>
                        </ol>
                        <div class="highlight">
                            <strong>Think of it like:</strong> A Google Doc that everyone can see but no one can edit or delete past entries—and it records every change ever made.
                        </div>
                    `
                },
                {
                    id: 'what-is-cryptocurrency',
                    title: 'What is Cryptocurrency?',
                    content: `
                        <h2>What is Cryptocurrency?</h2>
                        <div class="definition">
                            <strong>Cryptocurrency:</strong> Digital money that uses cryptography for security and operates on a blockchain. It's not controlled by any bank or government.
                        </div>
                        <h3>Why Does Crypto Have Value?</h3>
                        <ul>
                            <li><strong>Scarcity:</strong> Limited supply (Bitcoin maxes at 21 million)</li>
                            <li><strong>Utility:</strong> Can be used for payments, contracts, etc.</li>
                            <li><strong>Network Effect:</strong> More users = more valuable</li>
                            <li><strong>Trust:</strong> Math-based, not government-based</li>
                            <li><strong>Speculation:</strong> People believe it will be worth more later</li>
                        </ul>
                        <h3>Crypto vs Traditional Money</h3>
                        <div class="example">
                            <strong>Traditional (Fiat):</strong> Controlled by central banks, can print unlimited amounts, transactions can be reversed, requires intermediaries<br><br>
                            <strong>Crypto:</strong> Controlled by code, fixed or predictable supply, transactions are final, peer-to-peer (no middleman)
                        </div>
                        <div class="highlight">
                            <strong>Important:</strong> Crypto's value is highly volatile. It can gain or lose 20%+ in a single day. Only invest what you can afford to lose completely.
                        </div>
                    `
                },
                {
                    id: 'bitcoin-basics',
                    title: 'Bitcoin: The First Cryptocurrency',
                    content: `
                        <h2>Bitcoin: The First Cryptocurrency</h2>
                        <div class="definition">
                            <strong>Bitcoin (BTC):</strong> Created in 2009 by the pseudonymous Satoshi Nakamoto. It's the first and most valuable cryptocurrency.
                        </div>
                        <h3>Key Bitcoin Facts</h3>
                        <ul>
                            <li><strong>Max Supply:</strong> 21 million BTC (ever)</li>
                            <li><strong>Current Circulation:</strong> ~19.5 million</li>
                            <li><strong>Halvings:</strong> Mining rewards cut in half every 4 years</li>
                            <li><strong>Divisibility:</strong> 1 BTC = 100 million satoshis (sats)</li>
                        </ul>
                        <h3>What is Mining?</h3>
                        <p>Computers compete to solve complex math problems. The winner gets to add the next block and earns Bitcoin as a reward. This process:</p>
                        <ul>
                            <li>Secures the network</li>
                            <li>Creates new Bitcoin</li>
                            <li>Validates transactions</li>
                        </ul>
                        <h3>Bitcoin as "Digital Gold"</h3>
                        <p>Many see Bitcoin as a store of value like gold because:</p>
                        <ul>
                            <li>Scarce (limited supply)</li>
                            <li>Durable (digital, can't decay)</li>
                            <li>Portable (send anywhere instantly)</li>
                            <li>Divisible (can buy tiny fractions)</li>
                            <li>Verifiable (public blockchain)</li>
                        </ul>
                    `
                },
                {
                    id: 'crypto-use-cases',
                    title: 'Real-World Use Cases',
                    content: `
                        <h2>Real-World Use Cases for Crypto</h2>
                        <h3>1. Store of Value</h3>
                        <p>Like digital gold—hold Bitcoin long-term as a hedge against inflation.</p>
                        <h3>2. Payments</h3>
                        <p>Send money anywhere in the world, 24/7, without banks. Especially useful for:</p>
                        <ul>
                            <li>International remittances</li>
                            <li>Unbanked populations</li>
                            <li>Countries with unstable currencies</li>
                        </ul>
                        <h3>3. Smart Contracts (Ethereum)</h3>
                        <p>Self-executing contracts with terms written in code:</p>
                        <ul>
                            <li>DeFi (Decentralized Finance)</li>
                            <li>NFTs (Non-Fungible Tokens)</li>
                            <li>DAOs (Decentralized Organizations)</li>
                        </ul>
                        <h3>4. Privacy</h3>
                        <p>Some cryptocurrencies (Monero, Zcash) offer enhanced privacy features.</p>
                        <div class="highlight">
                            <strong>Reality Check:</strong> Most people currently use crypto for speculation (hoping price goes up), not these use cases. That doesn't mean the technology isn't valuable.
                        </div>
                    `
                }
            ],
            quiz: [
                {
                    question: 'What is a blockchain?',
                    options: [
                        'A type of computer virus',
                        'A decentralized digital ledger that records transactions',
                        'A cryptocurrency wallet',
                        'A mining machine'
                    ],
                    correct: 1,
                    explanation: 'A blockchain is a decentralized, distributed ledger that records transactions across many computers, making records nearly impossible to alter.'
                },
                {
                    question: 'What is the maximum supply of Bitcoin?',
                    options: ['10 million', '21 million', '100 million', 'Unlimited'],
                    correct: 1,
                    explanation: 'Bitcoin has a hard cap of 21 million coins. This scarcity is one of the reasons people compare it to digital gold.'
                },
                {
                    question: 'What does "decentralized" mean in crypto?',
                    options: [
                        'Run by the government',
                        'No single entity controls it',
                        'Available only in certain countries',
                        'Can only be used by banks'
                    ],
                    correct: 1,
                    explanation: 'Decentralized means no single company, government, or person controls the network. It\'s maintained by thousands of computers worldwide.'
                },
                {
                    question: 'What is crypto mining?',
                    options: [
                        'Digging for physical coins',
                        'Computers solving problems to validate transactions and earn rewards',
                        'Buying crypto at low prices',
                        'Creating a new cryptocurrency'
                    ],
                    correct: 1,
                    explanation: 'Mining involves computers competing to solve complex math problems. Winners validate transactions, add them to the blockchain, and earn crypto as a reward.'
                },
                {
                    question: 'Why might someone use crypto for international payments?',
                    options: [
                        'It\'s always free',
                        'It\'s faster and cheaper than traditional wire transfers',
                        'Banks require it',
                        'It\'s the only legal option'
                    ],
                    correct: 1,
                    explanation: 'Crypto can send money internationally 24/7, often faster and cheaper than bank wires, without needing intermediaries.'
                }
            ]
        },
        {
            id: 2,
            title: 'Types of Cryptocurrency',
            subtitle: 'Beyond Bitcoin: Understanding the crypto ecosystem',
            topics: [
                {
                    id: 'ethereum',
                    title: 'Ethereum and Smart Contracts',
                    content: `
                        <h2>Ethereum and Smart Contracts</h2>
                        <div class="definition">
                            <strong>Ethereum (ETH):</strong> A blockchain platform that enables smart contracts and decentralized applications (dApps). Created by Vitalik Buterin in 2015.
                        </div>
                        <h3>Bitcoin vs Ethereum</h3>
                        <ul>
                            <li><strong>Bitcoin:</strong> Digital money/store of value</li>
                            <li><strong>Ethereum:</strong> Platform for programmable money and apps</li>
                        </ul>
                        <h3>What are Smart Contracts?</h3>
                        <p>Self-executing code that runs when certain conditions are met. Example:</p>
                        <div class="example">
                            IF Bob sends 1 ETH to this contract<br>
                            AND the date is after January 1, 2027<br>
                            THEN release funds to Alice<br>
                            ELSE return funds to Bob
                        </div>
                        <h3>What's Built on Ethereum?</h3>
                        <ul>
                            <li><strong>DeFi:</strong> Lending, borrowing, trading without banks</li>
                            <li><strong>NFTs:</strong> Digital art and collectibles</li>
                            <li><strong>DAOs:</strong> Internet-native organizations</li>
                            <li><strong>Stablecoins:</strong> USDC, DAI run on Ethereum</li>
                        </ul>
                        <div class="highlight">
                            <strong>Gas Fees:</strong> Every transaction on Ethereum requires "gas" (paid in ETH). Fees can be high during busy periods.
                        </div>
                    `
                },
                {
                    id: 'altcoins',
                    title: 'Altcoins Explained',
                    content: `
                        <h2>Altcoins Explained</h2>
                        <div class="definition">
                            <strong>Altcoin:</strong> Any cryptocurrency that isn't Bitcoin. There are thousands of altcoins with varying purposes.
                        </div>
                        <h3>Major Categories</h3>
                        <ul>
                            <li><strong>Platform Coins:</strong> Ethereum, Solana, Cardano (run smart contracts)</li>
                            <li><strong>Payment Coins:</strong> Litecoin, Bitcoin Cash (faster payments)</li>
                            <li><strong>Privacy Coins:</strong> Monero, Zcash (enhanced anonymity)</li>
                            <li><strong>Meme Coins:</strong> Dogecoin, Shiba Inu (started as jokes)</li>
                            <li><strong>Exchange Tokens:</strong> BNB, FTT (exchange loyalty tokens)</li>
                        </ul>
                        <h3>Top Cryptocurrencies by Market Cap</h3>
                        <ol>
                            <li>Bitcoin (BTC)</li>
                            <li>Ethereum (ETH)</li>
                            <li>Tether (USDT) - stablecoin</li>
                            <li>BNB (Binance)</li>
                            <li>Solana (SOL)</li>
                        </ol>
                        <div class="highlight">
                            <strong>Warning:</strong> 99% of altcoins will eventually go to zero. Most are scams, abandoned projects, or simply fail. Stick to established cryptocurrencies unless you're prepared to lose everything.
                        </div>
                    `
                },
                {
                    id: 'stablecoins',
                    title: 'Stablecoins',
                    content: `
                        <h2>Stablecoins</h2>
                        <div class="definition">
                            <strong>Stablecoin:</strong> A cryptocurrency designed to maintain a stable value, usually pegged 1:1 to the US dollar.
                        </div>
                        <h3>Types of Stablecoins</h3>
                        <ul>
                            <li><strong>Fiat-Backed:</strong> USDC, USDT - backed by actual dollars in banks</li>
                            <li><strong>Crypto-Backed:</strong> DAI - backed by crypto collateral</li>
                            <li><strong>Algorithmic:</strong> Use supply/demand algorithms (higher risk)</li>
                        </ul>
                        <h3>Why Use Stablecoins?</h3>
                        <ul>
                            <li>Park money during volatility</li>
                            <li>Earn yield in DeFi</li>
                            <li>Send dollars globally without banks</li>
                            <li>Trade between cryptocurrencies</li>
                        </ul>
                        <h3>Major Stablecoins</h3>
                        <ul>
                            <li><strong>USDT (Tether):</strong> Largest, some controversy about reserves</li>
                            <li><strong>USDC (Circle):</strong> Audited reserves, more transparent</li>
                            <li><strong>DAI:</strong> Decentralized, backed by crypto</li>
                        </ul>
                        <div class="highlight">
                            <strong>Caution:</strong> Algorithmic stablecoins (like Luna/UST) can collapse. Stick to fiat-backed stablecoins like USDC for safety.
                        </div>
                    `
                },
                {
                    id: 'defi-basics',
                    title: 'DeFi Basics',
                    content: `
                        <h2>DeFi: Decentralized Finance</h2>
                        <div class="definition">
                            <strong>DeFi:</strong> Financial services (lending, borrowing, trading) built on blockchain without traditional banks or intermediaries.
                        </div>
                        <h3>DeFi Services</h3>
                        <ul>
                            <li><strong>Lending/Borrowing:</strong> Aave, Compound - lend crypto and earn interest</li>
                            <li><strong>Decentralized Exchanges:</strong> Uniswap, SushiSwap - trade without a company</li>
                            <li><strong>Yield Farming:</strong> Provide liquidity, earn rewards</li>
                            <li><strong>Staking:</strong> Lock crypto to secure networks, earn rewards</li>
                        </ul>
                        <h3>Pros of DeFi</h3>
                        <ul>
                            <li>No bank approval needed</li>
                            <li>24/7 availability</li>
                            <li>Higher yields than traditional savings</li>
                            <li>Transparent (code is public)</li>
                        </ul>
                        <h3>Risks of DeFi</h3>
                        <ul>
                            <li>Smart contract bugs/hacks</li>
                            <li>High volatility</li>
                            <li>Impermanent loss (for liquidity providers)</li>
                            <li>No FDIC insurance</li>
                            <li>Scams and rug pulls</li>
                        </ul>
                        <div class="highlight">
                            <strong>Beginner Advice:</strong> DeFi is advanced. Master the basics of buying and holding crypto before exploring DeFi.
                        </div>
                    `
                }
            ],
            quiz: [
                {
                    question: 'What makes Ethereum different from Bitcoin?',
                    options: [
                        'Ethereum is faster',
                        'Ethereum enables smart contracts and decentralized apps',
                        'Ethereum has no transaction fees',
                        'Ethereum is controlled by a company'
                    ],
                    correct: 1,
                    explanation: 'While Bitcoin is primarily digital money, Ethereum is a platform that enables programmable smart contracts and decentralized applications.'
                },
                {
                    question: 'What is a stablecoin?',
                    options: [
                        'A coin that always goes up in value',
                        'A cryptocurrency pegged to a stable value like the US dollar',
                        'A coin backed by gold',
                        'A type of mining equipment'
                    ],
                    correct: 1,
                    explanation: 'Stablecoins are designed to maintain a stable value (usually $1 USD) to avoid the volatility of regular cryptocurrencies.'
                },
                {
                    question: 'What does DeFi stand for?',
                    options: [
                        'Digital Finance',
                        'Decentralized Finance',
                        'Distributed Fees',
                        'Direct Financial'
                    ],
                    correct: 1,
                    explanation: 'DeFi stands for Decentralized Finance—financial services built on blockchain without traditional banks or intermediaries.'
                },
                {
                    question: 'Which statement about altcoins is TRUE?',
                    options: [
                        'All altcoins are good investments',
                        'Altcoins are more stable than Bitcoin',
                        'Most altcoins will eventually go to zero',
                        'Altcoins are backed by governments'
                    ],
                    correct: 2,
                    explanation: 'The vast majority of altcoins fail. Many are scams or abandoned projects. Only a small percentage have long-term value.'
                },
                {
                    question: 'What are "gas fees" on Ethereum?',
                    options: [
                        'Fees for using electric vehicles',
                        'Transaction fees paid to process operations on the network',
                        'Fees charged by exchanges',
                        'Taxes on crypto profits'
                    ],
                    correct: 1,
                    explanation: 'Gas fees are paid in ETH to compensate validators for processing transactions and smart contracts on the Ethereum network.'
                }
            ]
        },
        {
            id: 3,
            title: 'Wallets and Security',
            subtitle: 'Protecting your cryptocurrency',
            topics: [
                {
                    id: 'wallet-types',
                    title: 'Types of Crypto Wallets',
                    content: `
                        <h2>Types of Crypto Wallets</h2>
                        <div class="definition">
                            <strong>Crypto Wallet:</strong> Software or hardware that stores your private keys, allowing you to access and manage your cryptocurrency.
                        </div>
                        <h3>Hot Wallets (Connected to Internet)</h3>
                        <ul>
                            <li><strong>Exchange Wallets:</strong> Coinbase, Binance hold your crypto</li>
                            <li><strong>Software Wallets:</strong> Apps like Exodus, Trust Wallet</li>
                            <li><strong>Browser Wallets:</strong> MetaMask for Ethereum/DeFi</li>
                        </ul>
                        <p><strong>Pros:</strong> Convenient, easy to use, free</p>
                        <p><strong>Cons:</strong> Vulnerable to hacks, exchange can freeze funds</p>
                        <h3>Cold Wallets (Offline)</h3>
                        <ul>
                            <li><strong>Hardware Wallets:</strong> Ledger, Trezor - physical devices</li>
                            <li><strong>Paper Wallets:</strong> Private keys written on paper</li>
                        </ul>
                        <p><strong>Pros:</strong> Maximum security, you control keys</p>
                        <p><strong>Cons:</strong> Cost ($60-200), less convenient</p>
                        <div class="highlight">
                            <strong>Rule of Thumb:</strong> "Not your keys, not your crypto." If an exchange holds your crypto, they control it. For large amounts, use a hardware wallet.
                        </div>
                    `
                },
                {
                    id: 'seed-phrases',
                    title: 'Seed Phrases and Private Keys',
                    content: `
                        <h2>Seed Phrases and Private Keys</h2>
                        <div class="definition">
                            <strong>Seed Phrase (Recovery Phrase):</strong> A 12-24 word phrase that can recover your entire wallet. It's the master key to all your crypto.
                        </div>
                        <h3>How It Works</h3>
                        <ul>
                            <li>Wallet generates random 12-24 words</li>
                            <li>These words mathematically derive all your private keys</li>
                            <li>Anyone with these words controls your crypto</li>
                            <li>Lose the phrase = lose your crypto forever</li>
                        </ul>
                        <h3>CRITICAL Security Rules</h3>
                        <ol>
                            <li><strong>NEVER share your seed phrase</strong> with anyone, ever</li>
                            <li><strong>NEVER type it into a website</strong> or give it to "support"</li>
                            <li><strong>NEVER store it digitally</strong> (no photos, no cloud, no email)</li>
                            <li><strong>Write it on paper</strong> and store in secure location</li>
                            <li><strong>Consider metal backup</strong> (fire/water resistant)</li>
                        </ol>
                        <div class="highlight">
                            <strong>Scam Alert:</strong> No legitimate company will EVER ask for your seed phrase. Anyone who asks is trying to steal your crypto.
                        </div>
                    `
                },
                {
                    id: 'security-practices',
                    title: 'Security Best Practices',
                    content: `
                        <h2>Crypto Security Best Practices</h2>
                        <h3>Account Security</h3>
                        <ul>
                            <li>Use unique, strong passwords for each exchange</li>
                            <li>Enable 2FA (preferably authenticator app, not SMS)</li>
                            <li>Use a password manager</li>
                            <li>Enable withdrawal address whitelisting</li>
                        </ul>
                        <h3>Wallet Security</h3>
                        <ul>
                            <li>Hardware wallet for large holdings ($1,000+)</li>
                            <li>Keep seed phrase offline, in multiple secure locations</li>
                            <li>Test small amount before large transfers</li>
                            <li>Double-check addresses before sending</li>
                        </ul>
                        <h3>General Practices</h3>
                        <ul>
                            <li>Be skeptical of "too good to be true" offers</li>
                            <li>Verify URLs carefully (phishing sites look identical)</li>
                            <li>Don't click links in unsolicited DMs</li>
                            <li>Research before interacting with new protocols</li>
                        </ul>
                        <div class="highlight">
                            <strong>Remember:</strong> Crypto transactions are irreversible. Once sent to a wrong or scammer's address, it's gone forever. Take your time and verify everything.
                        </div>
                    `
                },
                {
                    id: 'common-scams',
                    title: 'Common Crypto Scams',
                    content: `
                        <h2>Common Crypto Scams to Avoid</h2>
                        <h3>1. Phishing</h3>
                        <p>Fake websites that look like real exchanges/wallets. They steal your login or seed phrase.</p>
                        <p><strong>Prevention:</strong> Bookmark real sites, verify URLs carefully</p>
                        <h3>2. Giveaway Scams</h3>
                        <p>"Send 1 BTC, get 2 back!" - Often impersonating Elon Musk, etc.</p>
                        <p><strong>Reality:</strong> No one gives free crypto. Ever.</p>
                        <h3>3. Rug Pulls</h3>
                        <p>Developers create token, hype it up, then drain all liquidity and disappear.</p>
                        <p><strong>Prevention:</strong> Stick to established projects</p>
                        <h3>4. Fake Support</h3>
                        <p>Scammers pretending to be customer support asking for your seed phrase.</p>
                        <p><strong>Rule:</strong> Real support NEVER asks for seed phrases</p>
                        <h3>5. Pump and Dump</h3>
                        <p>Groups coordinate to buy a small coin, hype it, then dump on latecomers.</p>
                        <p><strong>Prevention:</strong> If you hear about it, you're the exit liquidity</p>
                        <div class="highlight">
                            <strong>Golden Rule:</strong> If something seems too good to be true, it's a scam. Crypto attracts scammers because transactions are irreversible.
                        </div>
                    `
                }
            ],
            quiz: [
                {
                    question: 'What is a "hot wallet"?',
                    options: [
                        'A wallet that only stores Bitcoin',
                        'A wallet connected to the internet',
                        'A wallet that generates heat',
                        'A wallet with high fees'
                    ],
                    correct: 1,
                    explanation: 'Hot wallets are connected to the internet (exchange wallets, phone apps). They\'re convenient but more vulnerable to hacks than offline "cold" wallets.'
                },
                {
                    question: 'What should you NEVER do with your seed phrase?',
                    options: [
                        'Write it on paper',
                        'Store it in a safe place',
                        'Share it with customer support',
                        'Make a backup copy'
                    ],
                    correct: 2,
                    explanation: 'NEVER share your seed phrase with anyone, including "customer support." No legitimate company will ever ask for it. Anyone who asks is a scammer.'
                },
                {
                    question: 'What type of wallet is most secure for large amounts?',
                    options: [
                        'Exchange wallet',
                        'Browser extension',
                        'Hardware wallet',
                        'Email storage'
                    ],
                    correct: 2,
                    explanation: 'Hardware wallets (Ledger, Trezor) store keys offline and are the most secure option for significant holdings. They protect against online hacks.'
                },
                {
                    question: 'What is a rug pull scam?',
                    options: [
                        'When someone steals your physical wallet',
                        'Developers drain liquidity and abandon a project',
                        'A type of mining attack',
                        'When exchanges freeze accounts'
                    ],
                    correct: 1,
                    explanation: 'A rug pull is when developers create hype around a token, get people to invest, then drain all the liquidity and disappear with the funds.'
                },
                {
                    question: 'What does "Not your keys, not your crypto" mean?',
                    options: [
                        'Crypto is hard to understand',
                        'If you don\'t control the private keys, you don\'t truly own the crypto',
                        'Only key holders can mine',
                        'Crypto requires physical keys'
                    ],
                    correct: 1,
                    explanation: 'This phrase emphasizes that when an exchange holds your crypto, they control it. For true ownership, you need to hold your own private keys in a personal wallet.'
                }
            ]
        },
        {
            id: 4,
            title: 'Buying and Trading',
            subtitle: 'How to acquire and trade cryptocurrency',
            topics: [
                {
                    id: 'buying-crypto',
                    title: 'How to Buy Cryptocurrency',
                    content: `
                        <h2>How to Buy Cryptocurrency</h2>
                        <h3>Step 1: Choose an Exchange</h3>
                        <ul>
                            <li><strong>Coinbase:</strong> Beginner-friendly, higher fees</li>
                            <li><strong>Kraken:</strong> Good security, moderate fees</li>
                            <li><strong>Binance.US:</strong> Lowest fees, more complex</li>
                            <li><strong>Gemini:</strong> Strong regulation compliance</li>
                        </ul>
                        <h3>Step 2: Verify Your Identity (KYC)</h3>
                        <p>All major US exchanges require:</p>
                        <ul>
                            <li>Government ID</li>
                            <li>Social Security Number</li>
                            <li>Proof of address</li>
                            <li>Selfie verification</li>
                        </ul>
                        <h3>Step 3: Fund Your Account</h3>
                        <ul>
                            <li><strong>Bank Transfer (ACH):</strong> Free but slow (3-5 days)</li>
                            <li><strong>Wire Transfer:</strong> Fast but fees ($10-30)</li>
                            <li><strong>Debit Card:</strong> Instant but higher fees (2-4%)</li>
                        </ul>
                        <h3>Step 4: Place Your Order</h3>
                        <ul>
                            <li><strong>Market Order:</strong> Buy immediately at current price</li>
                            <li><strong>Limit Order:</strong> Set your price, execute when reached</li>
                        </ul>
                        <div class="highlight">
                            <strong>Tip:</strong> Use limit orders to avoid buying during price spikes. Set your price and wait.
                        </div>
                    `
                },
                {
                    id: 'dca-strategy',
                    title: 'Dollar Cost Averaging (DCA)',
                    content: `
                        <h2>Dollar Cost Averaging (DCA)</h2>
                        <div class="definition">
                            <strong>DCA:</strong> Investing a fixed amount at regular intervals, regardless of price. This reduces the impact of volatility.
                        </div>
                        <h3>How It Works</h3>
                        <div class="example">
                            Instead of investing $1,200 at once:<br><br>
                            Month 1: Buy $100 at $30,000/BTC = 0.00333 BTC<br>
                            Month 2: Buy $100 at $25,000/BTC = 0.00400 BTC<br>
                            Month 3: Buy $100 at $35,000/BTC = 0.00286 BTC<br>
                            ...<br>
                            <strong>Result:</strong> Average price smooths out volatility
                        </div>
                        <h3>Why DCA Works for Crypto</h3>
                        <ul>
                            <li>Removes emotion from investing</li>
                            <li>No need to time the market</li>
                            <li>Reduces regret from buying at peaks</li>
                            <li>Builds discipline</li>
                        </ul>
                        <h3>Setting Up Auto-DCA</h3>
                        <p>Most exchanges offer recurring buys:</p>
                        <ul>
                            <li>Coinbase: Daily, weekly, or monthly</li>
                            <li>Gemini: ActiveTrader recurring orders</li>
                            <li>Swan Bitcoin: Bitcoin-only auto-DCA</li>
                        </ul>
                        <div class="highlight">
                            <strong>Beginner Strategy:</strong> Set up weekly auto-buys for Bitcoin/Ethereum. Don't check prices. Come back in 4+ years.
                        </div>
                    `
                },
                {
                    id: 'trading-basics',
                    title: 'Trading vs Investing',
                    content: `
                        <h2>Trading vs Investing</h2>
                        <h3>Investing (Recommended for Beginners)</h3>
                        <ul>
                            <li>Buy and hold for years</li>
                            <li>Focus on fundamentals</li>
                            <li>DCA into positions</li>
                            <li>Ignore short-term volatility</li>
                            <li>Less stress, less time commitment</li>
                        </ul>
                        <h3>Trading (Advanced, High Risk)</h3>
                        <ul>
                            <li>Buy and sell frequently</li>
                            <li>Try to profit from price movements</li>
                            <li>Requires significant time and skill</li>
                            <li>Most traders lose money</li>
                            <li>Higher taxes (short-term capital gains)</li>
                        </ul>
                        <div class="highlight">
                            <strong>Statistics:</strong> Studies show 70-90% of day traders lose money. The successful ones have years of experience and strict risk management.
                        </div>
                        <h3>If You Must Trade</h3>
                        <ul>
                            <li>Only risk what you can lose 100%</li>
                            <li>Never use leverage as a beginner</li>
                            <li>Set stop losses</li>
                            <li>Keep a trading journal</li>
                            <li>Start with paper trading (fake money)</li>
                        </ul>
                    `
                },
                {
                    id: 'fees-explained',
                    title: 'Understanding Fees',
                    content: `
                        <h2>Understanding Crypto Fees</h2>
                        <h3>Exchange Fees</h3>
                        <ul>
                            <li><strong>Trading Fees:</strong> 0.1% - 1.5% per trade</li>
                            <li><strong>Spread:</strong> Hidden markup between buy/sell prices</li>
                            <li><strong>Deposit Fees:</strong> Usually free for bank transfers</li>
                            <li><strong>Withdrawal Fees:</strong> Varies by crypto and exchange</li>
                        </ul>
                        <h3>Fee Comparison</h3>
                        <div class="example">
                            <strong>Buying $1,000 of Bitcoin:</strong><br>
                            Coinbase (basic): ~$15 (1.5%)<br>
                            Coinbase Pro: ~$5 (0.5%)<br>
                            Binance.US: ~$1 (0.1%)<br>
                            Kraken: ~$2.60 (0.26%)
                        </div>
                        <h3>Network Fees (Gas)</h3>
                        <ul>
                            <li><strong>Bitcoin:</strong> $1-10 typically</li>
                            <li><strong>Ethereum:</strong> $5-100+ (varies wildly)</li>
                            <li><strong>Solana:</strong> Fractions of a cent</li>
                        </ul>
                        <div class="highlight">
                            <strong>Money Saving Tips:</strong><br>
                            1. Use exchange "Pro" or "Advanced" versions for lower fees<br>
                            2. Batch withdrawals to save on network fees<br>
                            3. Withdraw during low-activity periods (weekends for ETH)
                        </div>
                    `
                }
            ],
            quiz: [
                {
                    question: 'What is Dollar Cost Averaging (DCA)?',
                    options: [
                        'Buying all at once when price is low',
                        'Investing fixed amounts at regular intervals',
                        'Only buying on certain days',
                        'Trading based on technical analysis'
                    ],
                    correct: 1,
                    explanation: 'DCA means investing a fixed amount regularly (e.g., $100/week) regardless of price. This smooths out volatility and removes emotional decision-making.'
                },
                {
                    question: 'What percentage of day traders typically lose money?',
                    options: ['10-20%', '30-50%', '70-90%', '50%'],
                    correct: 2,
                    explanation: 'Studies consistently show 70-90% of day traders lose money. Trading requires significant skill, time, and emotional discipline that most people lack.'
                },
                {
                    question: 'What is KYC in cryptocurrency?',
                    options: [
                        'A type of altcoin',
                        'Know Your Customer - identity verification',
                        'Crypto trading strategy',
                        'A blockchain protocol'
                    ],
                    correct: 1,
                    explanation: 'KYC (Know Your Customer) is identity verification required by exchanges to comply with anti-money laundering laws. You\'ll need ID and proof of address.'
                },
                {
                    question: 'Which exchange type typically has the lowest fees?',
                    options: [
                        'Mobile app (basic version)',
                        'Exchange Pro/Advanced trading version',
                        'Peer-to-peer exchanges',
                        'ATM machines'
                    ],
                    correct: 1,
                    explanation: 'Exchange "Pro" or "Advanced" versions (like Coinbase Pro) typically have much lower fees than basic mobile apps, often 0.1-0.5% vs 1.5%.'
                },
                {
                    question: 'What is the best strategy for crypto beginners?',
                    options: [
                        'Day trading for quick profits',
                        'Using maximum leverage',
                        'Dollar cost averaging into Bitcoin/Ethereum',
                        'Investing in new altcoins'
                    ],
                    correct: 2,
                    explanation: 'For beginners, the best strategy is DCA into established cryptocurrencies like Bitcoin and Ethereum, then holding long-term. This minimizes risk and removes emotional decisions.'
                }
            ]
        },
        {
            id: 5,
            title: 'Risk Management',
            subtitle: 'Protecting yourself in the volatile crypto market',
            topics: [
                {
                    id: 'volatility',
                    title: 'Understanding Crypto Volatility',
                    content: `
                        <h2>Understanding Crypto Volatility</h2>
                        <div class="definition">
                            <strong>Volatility:</strong> The degree of price variation over time. Crypto is extremely volatile compared to stocks or bonds.
                        </div>
                        <h3>Historical Volatility</h3>
                        <ul>
                            <li>Bitcoin has dropped 80%+ multiple times</li>
                            <li>Bitcoin has also risen 1,000%+ multiple times</li>
                            <li>Daily moves of 10-20% are not uncommon</li>
                            <li>Altcoins can move 50%+ in a day</li>
                        </ul>
                        <h3>Why So Volatile?</h3>
                        <ul>
                            <li>Relatively small market (vs stocks)</li>
                            <li>24/7 trading with no circuit breakers</li>
                            <li>High speculation and leverage</li>
                            <li>News and tweets move markets</li>
                            <li>Regulatory uncertainty</li>
                        </ul>
                        <div class="highlight">
                            <strong>Mental Framework:</strong> Assume your crypto investment could drop 80% tomorrow and stay there for 2+ years. If that would devastate you financially or emotionally, invest less.
                        </div>
                    `
                },
                {
                    id: 'portfolio-allocation',
                    title: 'Portfolio Allocation',
                    content: `
                        <h2>Crypto Portfolio Allocation</h2>
                        <h3>How Much to Invest in Crypto?</h3>
                        <p>Conservative financial advice: 1-5% of portfolio</p>
                        <p>Aggressive (higher risk tolerance): 5-15%</p>
                        <p>Maximum for most people: 20% of investable assets</p>
                        <h3>Within Your Crypto Allocation</h3>
                        <div class="example">
                            <strong>Conservative Crypto Portfolio:</strong><br>
                            60-80% Bitcoin<br>
                            15-30% Ethereum<br>
                            5-10% Other established altcoins<br>
                            0-5% Speculation (meme coins, new projects)
                        </div>
                        <h3>Key Principles</h3>
                        <ul>
                            <li>Never invest money you need in next 5 years</li>
                            <li>Never invest money you can't afford to lose</li>
                            <li>Have emergency fund BEFORE investing</li>
                            <li>Max 401k match BEFORE crypto</li>
                            <li>Pay off high-interest debt first</li>
                        </ul>
                        <div class="highlight">
                            <strong>Reality:</strong> You don't need life-changing gains if you invest consistently over decades. 10% annual returns compound dramatically over 30 years.
                        </div>
                    `
                },
                {
                    id: 'emotional-control',
                    title: 'Emotional Control',
                    content: `
                        <h2>Emotional Control in Crypto</h2>
                        <h3>Common Emotional Mistakes</h3>
                        <ul>
                            <li><strong>FOMO (Fear of Missing Out):</strong> Buying at tops because price is rising</li>
                            <li><strong>Panic Selling:</strong> Selling at bottoms during crashes</li>
                            <li><strong>Revenge Trading:</strong> Trading more after losses to "make it back"</li>
                            <li><strong>Overconfidence:</strong> Adding more after gains</li>
                            <li><strong>Constantly Checking:</strong> Obsessing over price movements</li>
                        </ul>
                        <h3>Strategies for Emotional Control</h3>
                        <ul>
                            <li><strong>Have a plan:</strong> Know your buy/sell criteria before investing</li>
                            <li><strong>Automate:</strong> Set up DCA so you don't have to decide</li>
                            <li><strong>Long time horizon:</strong> Think in years, not days</li>
                            <li><strong>Zoom out:</strong> Look at 5-year charts, not 5-minute</li>
                            <li><strong>Limit checking:</strong> Once a week max, or less</li>
                        </ul>
                        <div class="highlight">
                            <strong>Powerful Mindset:</strong> "I'm not trying to get rich quick. I'm building wealth over 10-20 years. Short-term volatility doesn't matter."
                        </div>
                    `
                },
                {
                    id: 'tax-basics',
                    title: 'Crypto Tax Basics',
                    content: `
                        <h2>Crypto Tax Basics (US)</h2>
                        <div class="definition">
                            <strong>IRS Classification:</strong> Cryptocurrency is property for tax purposes. Every sale, trade, or use is a taxable event.
                        </div>
                        <h3>Taxable Events</h3>
                        <ul>
                            <li>Selling crypto for USD</li>
                            <li>Trading one crypto for another</li>
                            <li>Using crypto to buy goods/services</li>
                            <li>Receiving crypto as income</li>
                        </ul>
                        <h3>NOT Taxable</h3>
                        <ul>
                            <li>Buying crypto with USD</li>
                            <li>Holding crypto</li>
                            <li>Transferring between your own wallets</li>
                            <li>Gifting (up to gift tax limit)</li>
                        </ul>
                        <h3>Tax Rates</h3>
                        <ul>
                            <li><strong>Short-term (held < 1 year):</strong> Ordinary income rates (up to 37%)</li>
                            <li><strong>Long-term (held > 1 year):</strong> 0%, 15%, or 20%</li>
                        </ul>
                        <div class="highlight">
                            <strong>Important:</strong> Keep records of every transaction (date, amount, cost basis). Use crypto tax software like CoinTracker, Koinly, or TaxBit.
                        </div>
                    `
                }
            ],
            quiz: [
                {
                    question: 'How much has Bitcoin dropped during its worst crashes?',
                    options: ['20-30%', '40-50%', '80%+', '99%'],
                    correct: 2,
                    explanation: 'Bitcoin has experienced multiple crashes of 80% or more throughout its history. In 2022, it dropped from ~$69,000 to ~$15,000. This volatility is normal for crypto.'
                },
                {
                    question: 'What is a reasonable crypto allocation for most people?',
                    options: ['50%+ of portfolio', '1-10% of portfolio', '100% of savings', '0% - avoid entirely'],
                    correct: 1,
                    explanation: 'Most financial advisors recommend keeping crypto at 1-10% of your portfolio due to its extreme volatility. Only invest what you can afford to lose entirely.'
                },
                {
                    question: 'What is FOMO in crypto?',
                    options: [
                        'A trading strategy',
                        'Fear of Missing Out - buying because price is rising',
                        'A type of cryptocurrency',
                        'A security measure'
                    ],
                    correct: 1,
                    explanation: 'FOMO (Fear of Missing Out) causes people to buy at market tops because they see prices rising and don\'t want to miss the gains. It often leads to losses.'
                },
                {
                    question: 'In the US, cryptocurrency is taxed as:',
                    options: ['Currency', 'Property', 'Gambling winnings', 'Not taxed'],
                    correct: 1,
                    explanation: 'The IRS treats cryptocurrency as property. Every sale, trade, or use is a taxable event with capital gains/losses to report.'
                },
                {
                    question: 'What is the best way to avoid emotional mistakes in crypto?',
                    options: [
                        'Check prices every hour',
                        'Trade based on Twitter sentiment',
                        'Have a plan, automate DCA, and think long-term',
                        'Invest your entire savings'
                    ],
                    correct: 2,
                    explanation: 'The best approach is to have a written plan, automate your investing through DCA, and maintain a multi-year time horizon. This removes emotion from the equation.'
                }
            ]
        }
    ]
};
