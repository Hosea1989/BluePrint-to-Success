// Clothing Brand Curriculum Data
const clothingbrandData = {
    id: 'clothingbrand',
    title: 'Starting a Clothing Brand',
    icon: '👕',
    description: 'Learn how to launch and grow your own clothing brand from concept to customers.',
    graduationGoal: 'Launch your own clothing brand with a clear plan and first product line',
    difficulty: 'intermediate',
    prerequisites: ['business', 'marketing'],
    learningObjectives: [
        'Develop a clothing brand concept and target market',
        'Source manufacturers and manage production',
        'Create a brand identity and marketing strategy',
        'Launch and sell your first product line',
        'Scale your clothing brand business'
    ],
    relatedTracks: ['business', 'marketing', 'socialmedia'],
    resources: [
        { title: 'Fashion Business Resources', url: 'https://www.fashionunited.com/' }
    ],
    levels: [
        {
            id: 1,
            title: 'Brand Foundation',
            subtitle: 'Define your vision, niche, and brand identity',
            topics: [
                {
                    id: 'finding-your-niche',
                    title: 'Finding Your Niche',
                    content: `
                        <h2>Finding Your Niche</h2>
                        <p>The clothing market is massive, but the brands that succeed are the ones that serve a specific audience better than anyone else. Your niche is where your passion, skills, and market demand overlap.</p>
                        <h3>Questions to Define Your Niche</h3>
                        <ul>
                            <li><strong>Who is your customer?</strong> Age, lifestyle, values, income level</li>
                            <li><strong>What gap do you see?</strong> What's missing in the market that you wish existed?</li>
                            <li><strong>What's your story?</strong> Personal connection to the brand makes it authentic</li>
                            <li><strong>What problem do you solve?</strong> Better fit, cultural representation, sustainability, affordability</li>
                        </ul>
                        <h3>Niche Examples</h3>
                        <ul>
                            <li>Streetwear with African-inspired prints</li>
                            <li>Minimalist workwear for creative professionals</li>
                            <li>Sustainable athleisure for eco-conscious buyers</li>
                            <li>Size-inclusive luxury basics</li>
                        </ul>
                        <div class="highlight">
                            <strong>Key Principle:</strong> Don't try to be everything to everyone. A brand that speaks directly to a specific audience will always outperform a generic one.
                        </div>
                    `,
                    quiz: {
                        question: 'Why is finding a specific niche important for a clothing brand?',
                        options: [
                            'It limits your customer base which keeps costs low',
                            'A brand that serves a specific audience well will outperform a generic one',
                            'You only need one design if you have a niche',
                            'Niche brands don\'t need marketing'
                        ],
                        correct: 1
                    }
                },
                {
                    id: 'brand-identity',
                    title: 'Building Your Brand Identity',
                    content: `
                        <h2>Building Your Brand Identity</h2>
                        <p>Your brand identity is everything that makes your brand recognizable and memorable. It's more than a logo — it's the entire experience.</p>
                        <h3>Core Elements</h3>
                        <ul>
                            <li><strong>Brand Name:</strong> Memorable, easy to spell, available as a domain and social handles</li>
                            <li><strong>Logo:</strong> Simple, scalable, works on tags, packaging, and social media</li>
                            <li><strong>Color Palette:</strong> 2-4 colors that evoke the right feeling</li>
                            <li><strong>Typography:</strong> Fonts that match your brand personality</li>
                            <li><strong>Brand Voice:</strong> How you talk to customers — casual? premium? bold?</li>
                        </ul>
                        <h3>Brand Story</h3>
                        <p>People don't just buy clothes — they buy into stories and values. Your brand story should answer:</p>
                        <ul>
                            <li>Why did you start this brand?</li>
                            <li>What do you stand for?</li>
                            <li>How does wearing your brand make someone feel?</li>
                        </ul>
                        <h3>Mood Board</h3>
                        <p>Create a visual mood board with colors, textures, photos, and references that capture your brand's aesthetic. Tools like Pinterest, Canva, or Figma work great for this.</p>
                    `,
                    quiz: {
                        question: 'What is a brand identity?',
                        options: [
                            'Just your logo and business card',
                            'The entire experience that makes your brand recognizable — name, visuals, voice, and story',
                            'Your tax ID and business license number',
                            'The price point of your products'
                        ],
                        correct: 1
                    }
                },
                {
                    id: 'research-competition',
                    title: 'Researching the Competition',
                    content: `
                        <h2>Researching the Competition</h2>
                        <p>Understanding what's already out there helps you find opportunities and avoid mistakes others have made.</p>
                        <h3>How to Research</h3>
                        <ul>
                            <li><strong>Buy their products:</strong> Experience the quality, packaging, and shipping firsthand</li>
                            <li><strong>Study their social media:</strong> What content gets engagement? What do people say in comments?</li>
                            <li><strong>Read reviews:</strong> What do customers love? What do they complain about?</li>
                            <li><strong>Analyze pricing:</strong> Where do they sit in the market? What's the perceived value?</li>
                        </ul>
                        <h3>Differentiation Strategy</h3>
                        <p>You don't need to reinvent clothing. You need to do something <em>differently</em> or <em>better</em>:</p>
                        <ul>
                            <li>Better quality at the same price point</li>
                            <li>Stronger community and brand story</li>
                            <li>Unique designs or cultural perspective</li>
                            <li>Better customer experience and packaging</li>
                            <li>More inclusive sizing or fit options</li>
                        </ul>
                        <div class="highlight">
                            <strong>Tip:</strong> Don't copy competitors. Study them to understand the market, then create something that's authentically yours.
                        </div>
                    `,
                    quiz: {
                        question: 'What is the best reason to study your competitors?',
                        options: [
                            'To copy their most successful designs',
                            'To understand the market and find opportunities to differentiate',
                            'To undercut their prices on every product',
                            'To report them for trademark violations'
                        ],
                        correct: 1
                    }
                }
            ]
        },
        {
            id: 2,
            title: 'Production & Product',
            subtitle: 'Designing, sourcing, and creating your products',
            topics: [
                {
                    id: 'production-methods',
                    title: 'Production Methods',
                    content: `
                        <h2>Production Methods</h2>
                        <p>How you produce your clothing determines your startup costs, profit margins, and product uniqueness.</p>
                        <h3>Print-on-Demand (POD)</h3>
                        <ul>
                            <li><strong>How it works:</strong> Upload designs; products are printed and shipped when ordered</li>
                            <li><strong>Pros:</strong> Zero inventory risk, low startup cost ($0-100)</li>
                            <li><strong>Cons:</strong> Lower margins (15-30%), limited customization, slower shipping</li>
                            <li><strong>Platforms:</strong> Printful, Printify, Gooten</li>
                        </ul>
                        <h3>Wholesale Blanks + Customization</h3>
                        <ul>
                            <li><strong>How it works:</strong> Buy blank garments and add your designs via screen printing, embroidery, or heat transfer</li>
                            <li><strong>Pros:</strong> Better margins (40-60%), control over quality</li>
                            <li><strong>Cons:</strong> Upfront inventory investment ($500-2,000+), storage needed</li>
                            <li><strong>Sources:</strong> Bella+Canvas, AS Colour, Independent Trading Co.</li>
                        </ul>
                        <h3>Cut and Sew (Custom Manufacturing)</h3>
                        <ul>
                            <li><strong>How it works:</strong> Design garments from scratch, manufactured to your specifications</li>
                            <li><strong>Pros:</strong> Completely unique products, highest margins potential</li>
                            <li><strong>Cons:</strong> Highest startup cost ($3,000-10,000+), minimums, longer lead times</li>
                            <li><strong>Sources:</strong> Alibaba manufacturers, local cut-and-sew shops</li>
                        </ul>
                        <div class="highlight">
                            <strong>Recommended Path:</strong> Start with POD or wholesale blanks to validate your designs and audience. Move to cut and sew once you have consistent sales and know what your customers want.
                        </div>
                    `,
                    quiz: {
                        question: 'Which production method has the lowest startup cost?',
                        options: [
                            'Cut and sew manufacturing',
                            'Wholesale blanks with screen printing',
                            'Print-on-demand',
                            'Opening a retail store'
                        ],
                        correct: 2
                    }
                },
                {
                    id: 'design-process',
                    title: 'The Design Process',
                    content: `
                        <h2>The Design Process</h2>
                        <p>Great design is what sets your brand apart. You don't need to be an artist — but you do need a clear creative vision.</p>
                        <h3>Creating Designs</h3>
                        <ul>
                            <li><strong>DIY:</strong> Use Canva, Adobe Illustrator, or Procreate to create designs yourself</li>
                            <li><strong>Hire a designer:</strong> Fiverr ($20-200), 99designs, or local art students</li>
                            <li><strong>Collaborate:</strong> Partner with artists and give them creative credit/compensation</li>
                        </ul>
                        <h3>Design Principles</h3>
                        <ul>
                            <li><strong>Less is more:</strong> Clean, simple designs often sell better than busy ones</li>
                            <li><strong>Versatility:</strong> Will someone wear this to multiple places?</li>
                            <li><strong>Print-ready:</strong> Ensure files are high resolution (300+ DPI) with correct color profiles</li>
                        </ul>
                        <h3>Sampling</h3>
                        <p>ALWAYS order samples before bulk production:</p>
                        <ul>
                            <li>Check print quality, color accuracy, and placement</li>
                            <li>Test the fit on different body types</li>
                            <li>Wash test — does the print hold up after multiple washes?</li>
                            <li>Get honest feedback from your target audience</li>
                        </ul>
                    `,
                    quiz: {
                        question: 'Why is ordering samples before bulk production critical?',
                        options: [
                            'It is required by law',
                            'To check quality, fit, and durability before committing to large quantities',
                            'Samples are free from most manufacturers',
                            'To have inventory ready for immediate sale'
                        ],
                        correct: 1
                    }
                },
                {
                    id: 'pricing-strategy',
                    title: 'Pricing Your Products',
                    content: `
                        <h2>Pricing Your Products</h2>
                        <p>Pricing is both math and psychology. Price too low and you can't sustain the business. Price too high without the brand equity and you won't sell.</p>
                        <h3>The Pricing Formula</h3>
                        <p><strong>Retail Price = Cost of Goods x Markup Multiplier</strong></p>
                        <ul>
                            <li><strong>Cost of Goods (COGS):</strong> Blank garment + printing/customization + packaging + shipping to you</li>
                            <li><strong>Standard markup:</strong> 2.5x - 4x your COGS</li>
                            <li><strong>Example:</strong> $12 blank + $5 printing + $3 packaging = $20 COGS × 3 = $60 retail</li>
                        </ul>
                        <h3>What to Factor In</h3>
                        <ul>
                            <li>Shipping costs (free shipping? built into price?)</li>
                            <li>Marketing budget (social ads, influencers)</li>
                            <li>Platform fees (Shopify monthly, payment processing)</li>
                            <li>Returns and exchanges (budget 5-10%)</li>
                        </ul>
                        <h3>Psychological Pricing</h3>
                        <ul>
                            <li>$49 feels significantly cheaper than $50</li>
                            <li>Premium brands often use round numbers ($100, $200) to signal quality</li>
                            <li>Bundles and collections increase average order value</li>
                        </ul>
                        <div class="highlight">
                            <strong>Margin Goal:</strong> Aim for at least 50% gross margin after all COGS. If you can't hit that, your pricing or costs need adjustment.
                        </div>
                    `,
                    quiz: {
                        question: 'If your cost of goods is $20 and you use a 3x markup, what is the retail price?',
                        options: ['$23', '$40', '$60', '$80'],
                        correct: 2
                    }
                }
            ]
        },
        {
            id: 3,
            title: 'Launch & Growth',
            subtitle: 'Selling, marketing, and scaling your brand',
            topics: [
                {
                    id: 'selling-platforms',
                    title: 'Where to Sell',
                    content: `
                        <h2>Where to Sell</h2>
                        <p>You have more options than ever to get your clothing in front of customers.</p>
                        <h3>Your Own Website</h3>
                        <ul>
                            <li><strong>Shopify ($39/month):</strong> The gold standard for clothing brands. Easy to use, tons of themes, handles payments and shipping.</li>
                            <li><strong>WooCommerce (free plugin):</strong> If you already have WordPress. More customizable but requires more setup.</li>
                            <li><strong>Squarespace ($27/month):</strong> Beautiful templates, good for brand-focused sites.</li>
                        </ul>
                        <h3>Marketplaces</h3>
                        <ul>
                            <li><strong>Etsy:</strong> Great for handmade/unique items. Built-in audience but fees add up.</li>
                            <li><strong>Amazon:</strong> Huge reach but intense competition and strict requirements.</li>
                        </ul>
                        <h3>Social Commerce</h3>
                        <ul>
                            <li><strong>Instagram Shop:</strong> Tag products in posts and stories</li>
                            <li><strong>TikTok Shop:</strong> Exploding in popularity, especially for younger audiences</li>
                        </ul>
                        <h3>In-Person</h3>
                        <ul>
                            <li>Pop-up shops at local markets and events</li>
                            <li>Consignment at local boutiques</li>
                            <li>Community events and festivals</li>
                        </ul>
                        <div class="highlight">
                            <strong>Best Strategy:</strong> Start with your own Shopify site + one marketplace + Instagram/TikTok. Own your customer relationship through your website while using other platforms for discovery.
                        </div>
                    `,
                    quiz: {
                        question: 'Why is having your own website important even if you sell on marketplaces?',
                        options: [
                            'Websites are free to run',
                            'You own the customer relationship and aren\'t dependent on a platform',
                            'Websites automatically get more traffic than Instagram',
                            'Marketplaces don\'t allow clothing brands'
                        ],
                        correct: 1
                    }
                },
                {
                    id: 'marketing-your-brand',
                    title: 'Marketing Your Brand',
                    content: `
                        <h2>Marketing Your Brand</h2>
                        <p>The best product in the world won't sell if nobody knows about it. Marketing for clothing brands is heavily visual and community-driven.</p>
                        <h3>Social Media Strategy</h3>
                        <ul>
                            <li><strong>Instagram:</strong> Your visual portfolio. Post lifestyle shots, behind-the-scenes, and user-generated content.</li>
                            <li><strong>TikTok:</strong> Show the process — designing, packing orders, brand story. Authenticity goes viral.</li>
                            <li><strong>Content pillars:</strong> Alternate between product, lifestyle, behind-the-scenes, and community content.</li>
                        </ul>
                        <h3>Influencer Collaborations</h3>
                        <ul>
                            <li>Start with micro-influencers (1K-10K followers) — they have high engagement and affordable rates</li>
                            <li>Gift product in exchange for posts (seed strategy)</li>
                            <li>Negotiate affiliate deals: they earn commission on sales through their link</li>
                        </ul>
                        <h3>Email Marketing</h3>
                        <ul>
                            <li>Build your list from day one (offer 10% off for email signup)</li>
                            <li>Send new drop announcements, restocks, and exclusive offers</li>
                            <li>Klaviyo and Mailchimp integrate with Shopify</li>
                        </ul>
                        <h3>Community Building</h3>
                        <p>The strongest brands have communities, not just customers. Feature your customers wearing your brand, respond to every DM, and create a feeling of belonging.</p>
                    `,
                    quiz: {
                        question: 'What type of influencer is best for a new clothing brand with a limited budget?',
                        options: [
                            'Celebrities with millions of followers',
                            'Micro-influencers with 1K-10K followers and high engagement',
                            'News anchors and journalists',
                            'Only friends and family'
                        ],
                        correct: 1
                    }
                },
                {
                    id: 'startup-costs',
                    title: 'Startup Costs & Business Setup',
                    content: `
                        <h2>Startup Costs & Business Setup</h2>
                        <p>You can start a clothing brand with less money than most people think — especially with print-on-demand. Here's a realistic breakdown.</p>
                        <h3>Minimum Viable Budget (POD)</h3>
                        <ul>
                            <li>Business registration (LLC): $50-$500 depending on state</li>
                            <li>Domain name: $12/year</li>
                            <li>Shopify: $39/month</li>
                            <li>Logo design: $0-$200 (Canva or Fiverr)</li>
                            <li>Sample orders: $50-$100</li>
                            <li><strong>Total: ~$200-$500 to launch</strong></li>
                        </ul>
                        <h3>Growth Budget (Wholesale/Custom)</h3>
                        <ul>
                            <li>Initial inventory: $500-$5,000</li>
                            <li>Photography: $0-$500 (phone works early on)</li>
                            <li>Marketing budget: $200-$1,000/month</li>
                            <li>Packaging: $100-$500</li>
                        </ul>
                        <h3>Legal Setup</h3>
                        <ol>
                            <li><strong>Register as an LLC:</strong> Protects personal assets</li>
                            <li><strong>Get an EIN:</strong> Free from IRS.gov — your business tax ID</li>
                            <li><strong>Open a business bank account:</strong> Keep personal and business finances separate</li>
                            <li><strong>Trademark your brand name:</strong> $250-$350 through USPTO (do this once you're established)</li>
                        </ol>
                        <div class="highlight">
                            <strong>Start Lean:</strong> You don't need $10K to start. Launch with 3-5 designs on print-on-demand, validate demand, then reinvest profits into inventory and marketing.
                        </div>
                    `,
                    quiz: {
                        question: 'What is the recommended minimum budget to launch a clothing brand using print-on-demand?',
                        options: ['$10,000+', '$5,000-$8,000', '$200-$500', '$0 — it is completely free'],
                        correct: 2
                    }
                }
            ]
        }
    ],
    finalExam: [
        {
            question: 'What is the most important factor in choosing your brand niche?',
            options: ['Copying the most popular brands', 'Finding where your passion and market demand overlap', 'Choosing whatever is cheapest to produce', 'Targeting everyone to maximize sales'],
            correct: 1
        },
        {
            question: 'Which production method is best for validating a new clothing brand idea?',
            options: ['Cut and sew with a $10,000 minimum order', 'Print-on-demand for zero inventory risk', 'Opening a physical retail store', 'Manufacturing overseas with no samples'],
            correct: 1
        },
        {
            question: 'What gross profit margin should you aim for?',
            options: ['10-20%', '25-35%', 'At least 50%', '100%'],
            correct: 2
        },
        {
            question: 'Why should you always order samples before bulk production?',
            options: ['They make good gifts', 'To verify quality, fit, and print accuracy', 'Manufacturers require it by law', 'Samples are always free'],
            correct: 1
        },
        {
            question: 'What is the best multi-channel sales strategy for a new brand?',
            options: ['Only sell on Etsy', 'Own website + one marketplace + social commerce', 'Only sell in person at pop-ups', 'Only sell through influencer links'],
            correct: 1
        },
        {
            question: 'Which social media platform is best for showing your brand-building process?',
            options: ['LinkedIn', 'TikTok', 'Reddit', 'Pinterest'],
            correct: 1
        },
        {
            question: 'What legal structure is recommended for a clothing brand?',
            options: ['Sole proprietorship', 'LLC', 'Non-profit', 'No registration needed'],
            correct: 1
        },
        {
            question: 'What does COGS stand for?',
            options: ['Clothing Ordered from Global Suppliers', 'Cost of Goods Sold', 'Customer Order Guarantee System', 'Company Operating Growth Strategy'],
            correct: 1
        }
    ]
};
