// Blueprint to Success - Main Dashboard App

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    setupNavigation();
    loadProgressData();
    updateContinueSection();
    updateRoadmapPreview();
    setupIntroSection();
    initScrollAnimations();
    initGlobalSearch();
    initStreakTracker();
    recordVisit();
    initToastContainer();
    initReadingProgress();
    initBackToTop();
    initPageTransitions();
    initDashboardWidgets();
});

// ==================== THEME ====================
function initTheme() {
    const savedTheme = localStorage.getItem('blueprintTheme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeButton(savedTheme);
}

function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    const newTheme = current === 'dark' ? 'light' : 'dark';
    
    // Enable smooth transition
    document.body.classList.add('theme-transitioning');
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('blueprintTheme', newTheme);
    updateThemeButton(newTheme);
    
    // Show toast
    showToast({
        icon: newTheme === 'dark' ? '🌙' : '☀️',
        title: newTheme === 'dark' ? 'Dark mode' : 'Light mode',
        message: newTheme === 'dark' ? 'Easy on the eyes.' : 'Bright and clear.',
        type: 'info',
        duration: 2000
    });
    
    // Remove transition class after animation
    setTimeout(() => {
        document.body.classList.remove('theme-transitioning');
    }, 500);
}

function updateThemeButton(theme) {
    const btn = document.getElementById('theme-toggle');
    if (btn) {
        btn.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
}

// ==================== NAVIGATION ====================
function setupNavigation() {
    // Theme toggle
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
        themeBtn.addEventListener('click', toggleTheme);
    }
    
    // Mobile menu
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            mobileMenuBtn.textContent = mobileMenu.classList.contains('active') ? '✕' : '☰';
        });
    }
    
    // Navbar scroll effect
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('.main-nav');
        if (!nav) return;
        
        const currentScroll = window.scrollY;
        if (currentScroll > 50) {
            nav.style.boxShadow = 'var(--shadow-md)';
        } else {
            nav.style.boxShadow = 'none';
        }
        lastScroll = currentScroll;
    }, { passive: true });
}

// ==================== SCROLL REVEAL ANIMATIONS ====================
function initScrollAnimations() {
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger-children');
    
    if (!revealElements.length) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: unobserve after reveal for performance
                // observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(el => observer.observe(el));
}

// ==================== GLOBAL SEARCH ====================
function initGlobalSearch() {
    const searchInput = document.getElementById('global-search');
    const searchResults = document.getElementById('search-results');
    
    if (!searchInput || !searchResults) return;
    
    // Search data
    const searchData = [
        // Learning Tracks - Finance
        { title: 'Understanding Credit Scores', category: 'Finance Track', icon: '💳', url: 'tools/education-hub/index.html' },
        { title: 'Budgeting and Personal Finance', category: 'Finance Track', icon: '💰', url: 'tools/education-hub/index.html' },
        { title: 'Debt Management', category: 'Finance Track', icon: '📊', url: 'tools/education-hub/index.html' },
        { title: 'Investing Fundamentals', category: 'Finance Track', icon: '📈', url: 'tools/education-hub/index.html' },
        { title: 'Stocks & Chart Reading', category: 'Finance Track', icon: '📉', url: 'tools/education-hub/index.html' },
        { title: 'Tax Fundamentals', category: 'Finance Track', icon: '🧾', url: 'tools/education-hub/index.html' },
        { title: 'Retirement Planning', category: 'Finance Track', icon: '🏖️', url: 'tools/education-hub/index.html' },
        { title: 'Insurance and Risk Management', category: 'Finance Track', icon: '🛡️', url: 'tools/education-hub/index.html' },
        { title: 'Behavioral Finance', category: 'Finance Track', icon: '🧠', url: 'tools/education-hub/index.html' },
        { title: 'Financial Analysis', category: 'Finance Track', icon: '📋', url: 'tools/education-hub/index.html' },
        { title: 'Financial Technology', category: 'Finance Track', icon: '💻', url: 'tools/education-hub/index.html' },
        { title: 'Real Estate', category: 'Finance Track', icon: '🏠', url: 'tools/education-hub/index.html' },
        { title: 'Cryptocurrency', category: 'Finance Track', icon: '🪙', url: 'tools/education-hub/index.html' },
        { title: 'Banking', category: 'Finance Track', icon: '🏦', url: 'tools/education-hub/index.html' },
        { title: 'Student Loans', category: 'Finance Track', icon: '🎓', url: 'tools/education-hub/index.html' },
        { title: 'Estate Planning', category: 'Finance Track', icon: '📜', url: 'tools/education-hub/index.html' },
        // Learning Tracks - Tech
        { title: 'Web Development', category: 'Tech Track', icon: '🌐', url: 'tools/education-hub/index.html' },
        { title: 'Python Programming', category: 'Tech Track', icon: '🐍', url: 'tools/education-hub/index.html' },
        { title: 'JavaScript Programming', category: 'Tech Track', icon: '⚡', url: 'tools/education-hub/index.html' },
        { title: 'Java Programming', category: 'Tech Track', icon: '☕', url: 'tools/education-hub/index.html' },
        { title: 'C# Programming', category: 'Tech Track', icon: '🎮', url: 'tools/education-hub/index.html' },
        { title: 'Swift Programming', category: 'Tech Track', icon: '🍎', url: 'tools/education-hub/index.html' },
        { title: 'Flutter Development', category: 'Tech Track', icon: '📱', url: 'tools/education-hub/index.html' },
        { title: 'HTML & CSS', category: 'Tech Track', icon: '🎨', url: 'tools/education-hub/index.html' },
        { title: 'App Development', category: 'Tech Track', icon: '📲', url: 'tools/education-hub/index.html' },
        { title: 'Software Development', category: 'Tech Track', icon: '⚙️', url: 'tools/education-hub/index.html' },
        { title: 'Data Science', category: 'Tech Track', icon: '📊', url: 'tools/education-hub/index.html' },
        { title: 'Game Development with Unity', category: 'Tech Track', icon: '🎮', url: 'tools/education-hub/index.html' },
        { title: 'AI & Machine Learning', category: 'Tech Track', icon: '🤖', url: 'tools/education-hub/index.html' },
        { title: 'Cybersecurity', category: 'Tech Track', icon: '🔒', url: 'tools/education-hub/index.html' },
        // Learning Tracks - Personal
        { title: 'Self Care for Black Men', category: 'Personal Track', icon: '🌱', url: 'tools/education-hub/index.html' },
        { title: 'Language Learning', category: 'Personal Track', icon: '🗣️', url: 'tools/education-hub/index.html' },
        { title: 'Travel and Exploration', category: 'Life Skills Track', icon: '✈️', url: 'tools/education-hub/index.html' },
        { title: 'Productivity', category: 'Personal Track', icon: '⏰', url: 'tools/education-hub/index.html' },
        { title: 'Communication', category: 'Personal Track', icon: '💬', url: 'tools/education-hub/index.html' },
        { title: 'Emotional Intelligence', category: 'Personal Track', icon: '❤️', url: 'tools/education-hub/index.html' },
        // Learning Tracks - Business
        { title: 'Entrepreneurship and Business', category: 'Business Track', icon: '🚀', url: 'tools/education-hub/index.html' },
        { title: 'Freelancing', category: 'Business Track', icon: '💼', url: 'tools/education-hub/index.html' },
        { title: 'Negotiation', category: 'Business Track', icon: '🤝', url: 'tools/education-hub/index.html' },
        { title: 'Digital Marketing', category: 'Business Track', icon: '📣', url: 'tools/education-hub/index.html' },
        { title: 'Social Media Growth', category: 'Business Track', icon: '📱', url: 'tools/education-hub/index.html' },
        { title: 'Starting a Clothing Brand', category: 'Business Track', icon: '👕', url: 'tools/education-hub/index.html' },
        { title: 'Nonprofits', category: 'Business Track', icon: '🤲', url: 'tools/education-hub/index.html' },
        // Learning Tracks - Civic & Rights
        { title: 'Politics & Government', category: 'Civic Track', icon: '⚖️', url: 'tools/education-hub/index.html' },
        { title: 'California Know Your State', category: 'Civic Track', icon: '🐻', url: 'tools/education-hub/index.html' },
        { title: 'Labor Rights', category: 'Civic Track', icon: '✊', url: 'tools/education-hub/index.html' },
        { title: 'Workplace Rights', category: 'Civic Track', icon: '🏢', url: 'tools/education-hub/index.html' },
        { title: 'Contracts', category: 'Civic Track', icon: '📝', url: 'tools/education-hub/index.html' },
        { title: 'Consumer Rights', category: 'Civic Track', icon: '🛒', url: 'tools/education-hub/index.html' },
        { title: 'Government Benefits', category: 'Civic Track', icon: '📋', url: 'tools/education-hub/index.html' },
        // Learning Tracks - Life Skills
        { title: 'Emergency Preparedness', category: 'Life Skills Track', icon: '🚨', url: 'tools/education-hub/index.html' },
        { title: 'Career Development', category: 'Life Skills Track', icon: '📈', url: 'tools/education-hub/index.html' },
        { title: 'Health & Wellness', category: 'Life Skills Track', icon: '💪', url: 'tools/education-hub/index.html' },
        { title: 'Housing', category: 'Life Skills Track', icon: '🏠', url: 'tools/education-hub/index.html' },
        { title: 'Transportation', category: 'Life Skills Track', icon: '🚗', url: 'tools/education-hub/index.html' },
        { title: 'Family Planning', category: 'Life Skills Track', icon: '👨‍👩‍👧', url: 'tools/education-hub/index.html' },
        { title: 'Digital Literacy', category: 'Digital Track', icon: '🌐', url: 'tools/education-hub/index.html' },
        // Tools
        { title: 'Budget Planner', category: 'Tool', icon: '💰', url: 'tools/budget-planner/index.html' },
        { title: 'Education Hub', category: 'Tool', icon: '🎓', url: 'tools/education-hub/index.html' },
        { title: 'Compound Interest Calculator', category: 'Tool', icon: '💹', url: 'tools/compound-calculator/index.html' },
        { title: 'Debt Payoff Calculator', category: 'Tool', icon: '🎯', url: 'tools/debt-payoff/index.html' },
        { title: 'Net Worth Tracker', category: 'Tool', icon: '📊', url: 'tools/net-worth/index.html' },
        { title: 'Goal Tracker', category: 'Tool', icon: '🎯', url: 'tools/goal-tracker/index.html' },
        { title: 'Resume Builder', category: 'Tool', icon: '📄', url: 'tools/resume-builder/index.html' },
        // Pages
        { title: 'Your Journey Roadmap', category: 'Page', icon: '🗺️', url: 'roadmap.html' },
    ];
    
    let debounceTimer;
    
    searchInput.addEventListener('input', (e) => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            const query = e.target.value.trim().toLowerCase();
            
            if (query.length < 2) {
                searchResults.classList.remove('active');
                return;
            }
            
            const results = searchData.filter(item => 
                item.title.toLowerCase().includes(query) || 
                item.category.toLowerCase().includes(query)
            ).slice(0, 8);
            
            if (results.length === 0) {
                searchResults.innerHTML = '<div class="search-no-results">No results found</div>';
            } else {
                searchResults.innerHTML = results.map(item => `
                    <a href="${item.url}" class="search-result-item">
                        <span class="search-result-icon">${item.icon}</span>
                        <div class="search-result-info">
                            <div class="search-result-title">${highlightMatch(item.title, query)}</div>
                            <div class="search-result-category">${item.category}</div>
                        </div>
                    </a>
                `).join('');
            }
            
            searchResults.classList.add('active');
        }, 200);
    });
    
    // Close search on click outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-container')) {
            searchResults.classList.remove('active');
        }
    });
    
    // Keyboard shortcut: Cmd/Ctrl + K to focus search
    document.addEventListener('keydown', (e) => {
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
            e.preventDefault();
            searchInput.focus();
        }
        if (e.key === 'Escape') {
            searchResults.classList.remove('active');
            searchInput.blur();
        }
    });
}

function highlightMatch(text, query) {
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return text.replace(regex, '<strong style="color: var(--accent-primary)">$1</strong>');
}

// ==================== STREAK TRACKER ====================
function initStreakTracker() {
    const streakSection = document.getElementById('streak-section');
    if (!streakSection) return;
    
    const streak = getStreak();
    
    if (streak.current > 0) {
        streakSection.style.display = 'block';
        
        const countEl = document.getElementById('streak-count');
        const messageEl = document.getElementById('streak-message');
        const daysEl = document.getElementById('streak-days');
        
        if (countEl) countEl.textContent = `🔥 ${streak.current} Day Streak!`;
        
        if (messageEl) {
            const messages = [
                'Keep it up! Knowledge compounds.',
                'You\'re building unstoppable momentum!',
                'Consistency is the key to mastery.',
                'Every day you learn, you level up.',
                'Champions are built one day at a time.'
            ];
            messageEl.textContent = messages[Math.min(streak.current - 1, messages.length - 1)];
        }
        
        // Render last 7 days
        if (daysEl) {
            const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
            const today = new Date();
            let html = '';
            
            for (let i = 6; i >= 0; i--) {
                const date = new Date(today);
                date.setDate(date.getDate() - i);
                const dayName = days[date.getDay()];
                const dateStr = date.toISOString().split('T')[0];
                const isActive = streak.visitDays.includes(dateStr);
                
                html += `<div class="streak-day ${isActive ? 'active' : ''}">${dayName}</div>`;
            }
            
            daysEl.innerHTML = html;
        }
    }
}

function getStreak() {
    const visits = JSON.parse(localStorage.getItem('blueprintVisits') || '[]');
    const today = new Date().toISOString().split('T')[0];
    
    // Get unique visit days
    const uniqueDays = [...new Set(visits)].sort().reverse();
    
    if (uniqueDays.length === 0) return { current: 0, visitDays: [] };
    
    // Calculate streak
    let streak = 0;
    let checkDate = new Date(today);
    
    // If visited today, start counting from today; otherwise from yesterday
    if (uniqueDays[0] === today) {
        streak = 1;
        checkDate.setDate(checkDate.getDate() - 1);
        
        for (let i = 1; i < uniqueDays.length; i++) {
            const checkStr = checkDate.toISOString().split('T')[0];
            if (uniqueDays[i] === checkStr) {
                streak++;
                checkDate.setDate(checkDate.getDate() - 1);
            } else {
                break;
            }
        }
    } else {
        // Check if yesterday was visited
        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayStr = yesterday.toISOString().split('T')[0];
        
        if (uniqueDays[0] === yesterdayStr) {
            streak = 1;
            checkDate = new Date(yesterday);
            checkDate.setDate(checkDate.getDate() - 1);
            
            for (let i = 1; i < uniqueDays.length; i++) {
                const checkStr = checkDate.toISOString().split('T')[0];
                if (uniqueDays[i] === checkStr) {
                    streak++;
                    checkDate.setDate(checkDate.getDate() - 1);
                } else {
                    break;
                }
            }
        }
    }
    
    return { current: streak, visitDays: uniqueDays.slice(0, 7) };
}

function recordVisit() {
    const today = new Date().toISOString().split('T')[0];
    const visits = JSON.parse(localStorage.getItem('blueprintVisits') || '[]');
    
    if (!visits.includes(today)) {
        visits.push(today);
        // Keep only last 90 days of visits
        const cutoff = new Date();
        cutoff.setDate(cutoff.getDate() - 90);
        const filtered = visits.filter(v => new Date(v) >= cutoff);
        localStorage.setItem('blueprintVisits', JSON.stringify(filtered));
    }
}

// ==================== CONFETTI EFFECT ====================
function triggerConfetti() {
    const container = document.createElement('div');
    container.className = 'confetti-container';
    document.body.appendChild(container);
    
    const colors = ['#4f46e5', '#7c3aed', '#a78bfa', '#059669', '#d97706', '#dc2626', '#2563eb'];
    
    for (let i = 0; i < 80; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.width = (Math.random() * 8 + 5) + 'px';
        confetti.style.height = (Math.random() * 8 + 5) + 'px';
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
        confetti.style.animationDelay = Math.random() * 1.5 + 's';
        confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
        container.appendChild(confetti);
    }
    
    setTimeout(() => container.remove(), 5000);
}

// ==================== PROGRESS DATA ====================
function loadProgressData() {
    // Load Education Hub progress
    const educationProgress = localStorage.getItem('educationHubProgress');
    if (educationProgress) {
        try {
            const data = JSON.parse(educationProgress);
            updateEducationProgress(data);
        } catch (e) {
            console.log('No education progress data');
        }
    }
    
}

function updateEducationProgress(data) {
    // All available tracks with estimated topic counts per level (~4 topics × 5 levels = 20)
    const allTracks = {
        // Finance
        stocks: 20, taxes: 20, realestate: 20, crypto: 20, credit: 20, retirement: 10,
        // Business
        business: 10, freelancing: 10, negotiation: 10, marketing: 10, nonprofits: 16,
        // Tech
        ai: 10, cybersecurity: 10,
        // Civic
        labor: 17, politics: 10, california: 15,
        // Life Skills
        emergency: 24, career: 20, health: 16, housing: 16,
        // Personal
        productivity: 10
    };
    
    let totalCompleted = 0;
    let totalTopics = 0;
    let tracksStarted = 0;
    let tracksCompleted = 0;
    const totalTracks = Object.keys(allTracks).length;
    
    Object.keys(allTracks).forEach(track => {
        const trackData = data[track];
        const estimatedTotal = allTracks[track];
        
        if (trackData && trackData.completedTopics && trackData.completedTopics.length > 0) {
            tracksStarted++;
            totalCompleted += trackData.completedTopics.length;
            
            if (trackData.completedLevels && trackData.completedLevels.length >= 5) {
                tracksCompleted++;
            }
        }
        
        totalTopics += estimatedTotal;
    });
    
    // Update overall education progress
    const overallPercent = totalTopics > 0 ? Math.round((totalCompleted / totalTopics) * 100) : 0;
    
    const progressFill = document.getElementById('education-progress');
    const progressPercent = document.getElementById('education-percent');
    const summaryEl = document.getElementById('education-summary');
    
    if (progressFill) progressFill.style.width = `${overallPercent}%`;
    if (progressPercent) progressPercent.textContent = `${overallPercent}%`;
    
    if (summaryEl) {
        if (tracksStarted === 0) {
            summaryEl.textContent = 'No tracks started yet';
        } else if (tracksCompleted > 0) {
            summaryEl.textContent = `${tracksCompleted} completed, ${tracksStarted - tracksCompleted} in progress of ${totalTracks} tracks`;
        } else {
            summaryEl.textContent = `${tracksStarted} of ${totalTracks} tracks in progress`;
        }
    }
}


// ==================== CONTINUE SECTION ====================
function updateContinueSection() {
    const section = document.getElementById('continue-section');
    if (!section) return;
    
    const eduProgress = JSON.parse(localStorage.getItem('educationHubProgress') || '{}');
    const budgetData = localStorage.getItem('budgetPlannerData');
    
    // All tracks with metadata
    const allTracks = {
        // Finance
        stocks: { name: 'Stock Market', icon: '📈', topics: 20 },
        taxes: { name: 'Business Taxes', icon: '🧾', topics: 20 },
        realestate: { name: 'Real Estate', icon: '🏠', topics: 20 },
        crypto: { name: 'Cryptocurrency', icon: '₿', topics: 20 },
        credit: { name: 'Credit Building', icon: '💳', topics: 20 },
        retirement: { name: 'Retirement', icon: '🏖️', topics: 10 },
        // Business
        business: { name: 'Starting a Business', icon: '🚀', topics: 10 },
        freelancing: { name: 'Freelancing', icon: '💼', topics: 10 },
        negotiation: { name: 'Negotiation', icon: '🤝', topics: 10 },
        marketing: { name: 'Digital Marketing', icon: '📱', topics: 10 },
        nonprofits: { name: 'Nonprofits', icon: '🤝', topics: 16 },
        // Tech
        ai: { name: 'AI Tools', icon: '🤖', topics: 10 },
        cybersecurity: { name: 'Cybersecurity', icon: '🔒', topics: 10 },
        // Civic
        labor: { name: 'Labor Laws', icon: '⚖️', topics: 17 },
        politics: { name: 'Politics', icon: '🏛️', topics: 10 },
        california: { name: 'California Law', icon: '📜', topics: 15 },
        // Personal
        productivity: { name: 'Productivity', icon: '🎯', topics: 10 }
    };
    
    // Determine what to continue
    let continueItem = null;
    
    // Check if budget planner needs setup
    if (!budgetData) {
        continueItem = {
            icon: '💰',
            title: 'Set Up Your Budget',
            desc: 'Start by tracking your income and expenses',
            link: 'tools/budget-planner/index.html'
        };
    }
    // Check for in-progress education tracks
    else {
        for (const [trackId, trackInfo] of Object.entries(allTracks)) {
            const data = eduProgress[trackId];
            if (data && data.completedTopics && data.completedTopics.length > 0) {
                const percent = Math.min(100, Math.round((data.completedTopics.length / trackInfo.topics) * 100));
                if (percent < 100) {
                    continueItem = {
                        icon: trackInfo.icon,
                        title: `Continue ${trackInfo.name}`,
                        desc: `You're ${percent}% through this track`,
                        link: 'tools/education-hub/index.html'
                    };
                    break;
                }
            }
        }
    }
    
    // If no in-progress track, suggest starting one
    if (!continueItem) {
        continueItem = {
            icon: '📚',
            title: 'Explore Learning Tracks',
            desc: 'Choose from 60+ tracks across finance, business, tech & more',
            link: 'tools/education-hub/index.html'
        };
    }
    
    // Update UI
    if (continueItem) {
        section.style.display = 'block';
        document.getElementById('continue-icon').textContent = continueItem.icon;
        document.getElementById('continue-title').textContent = continueItem.title;
        document.getElementById('continue-desc').textContent = continueItem.desc;
        document.getElementById('continue-btn').href = continueItem.link;
    }
}

// ==================== ROADMAP PREVIEW ====================
function updateRoadmapPreview() {
    const container = document.getElementById('phases-mini-container');
    if (!container) return;

    const savedPathway = localStorage.getItem('blueprintPathway');

    // Pathway definitions (minimal version for dashboard preview)
    const pathwayPreviews = {
        entrepreneur:  { icon: '🚀', title: 'Aspiring Entrepreneur',    phases: ['Financial Foundation', 'Business Essentials', 'Marketing & Growth', 'Scale & Sustain'] },
        tech:          { icon: '💻', title: 'Tech Career Builder',      phases: ['Web Fundamentals', 'Deepen Skills', 'Professional Growth', 'Specialize & Launch'] },
        finance:       { icon: '💰', title: 'Financial Freedom',        phases: ['Money Basics', 'Eliminate Debt', 'Build Wealth', 'Advanced Wealth'] },
        brandbuilder:  { icon: '🎨', title: 'Brand Builder & Creator',  phases: ['Find Your Voice', 'Build Your Brand', 'Business Side', 'Scale Up'] },
        civic:         { icon: '⚖️', title: 'Community Leader',         phases: ['Know the System', 'Community Building', 'Financial Independence', 'Lead & Impact'] },
        lifeready:     { icon: '🛡️', title: 'Life Ready',              phases: ['Money Basics', 'Protection & Safety', 'Independent Living', 'Thriving'] },
        career:        { icon: '👔', title: 'Career Climber',           phases: ['Professional Foundation', 'Business Acumen', 'Financial Literacy', 'Leadership & Tech'] }
    };

    if (!savedPathway || !pathwayPreviews[savedPathway]) {
        // No pathway selected — show prompt
        container.innerHTML = `
            <a href="roadmap.html" class="journey-empty-prompt">
                <span class="journey-empty-icon">🗺️</span>
                <div class="journey-empty-text">
                    <strong>Choose Your Path</strong>
                    <span>Pick who you want to become and get a personalized roadmap</span>
                </div>
                <span class="journey-empty-arrow">→</span>
            </a>
        `;
        return;
    }

    const pw = pathwayPreviews[savedPathway];
    
    // Build vertical timeline stepper showing all phases
    let html = `
        <div class="journey-pathway-label">
            <span class="journey-pathway-icon">${pw.icon}</span>
            <span class="journey-pathway-name">${pw.title}</span>
        </div>
        <div class="journey-stepper">
    `;
    
    for (let i = 0; i < pw.phases.length; i++) {
        // Placeholder status — first phase "active", rest "upcoming"
        const status = i === 0 ? 'active' : 'upcoming';
        html += `
            <div class="journey-step ${status}" id="journey-step-${i + 1}">
                <div class="journey-step-indicator">
                    <span class="journey-step-num">${i + 1}</span>
                </div>
                <div class="journey-step-content">
                    <span class="journey-step-label">Phase ${i + 1}</span>
                    <span class="journey-step-title">${pw.phases[i]}</span>
                </div>
            </div>
        `;
    }
    
    html += '</div>';

    container.innerHTML = html;
}

// ==================== INTRO SECTION ====================
function setupIntroSection() {
    const introSection = document.getElementById('intro-section');
    const dismissBtn = document.getElementById('dismiss-intro');
    
    if (!introSection) return;
    
    // Check if user has dismissed the intro before
    const introDismissed = localStorage.getItem('blueprintIntroDismissed');
    
    // Also check if user has any progress - if so, hide intro
    const eduProgress = localStorage.getItem('educationHubProgress');
    const budgetData = localStorage.getItem('budgetPlannerData');
    const hasProgress = eduProgress || budgetData;
    
    if (introDismissed || hasProgress) {
        introSection.style.display = 'none';
    }
    
    // Setup dismiss button
    if (dismissBtn) {
        dismissBtn.addEventListener('click', () => {
            localStorage.setItem('blueprintIntroDismissed', 'true');
            introSection.style.display = 'none';
        });
    }
}

// ==================== TOAST NOTIFICATION SYSTEM ====================
function initToastContainer() {
    if (document.querySelector('.toast-container')) return;
    const container = document.createElement('div');
    container.className = 'toast-container';
    container.id = 'toast-container';
    document.body.appendChild(container);
}

function showToast({ icon = '✅', title = '', message = '', type = 'info', duration = 3500 } = {}) {
    const container = document.getElementById('toast-container');
    if (!container) {
        initToastContainer();
    }
    
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.style.position = 'relative';
    toast.innerHTML = `
        <span class="toast-icon">${icon}</span>
        <div class="toast-body">
            ${title ? `<div class="toast-title">${title}</div>` : ''}
            ${message ? `<div class="toast-message">${message}</div>` : ''}
        </div>
        <button class="toast-close" onclick="this.parentElement.classList.add('toast-exit'); setTimeout(() => this.parentElement.remove(), 300)">✕</button>
        <div class="toast-progress" style="animation-duration: ${duration}ms"></div>
    `;
    
    (document.getElementById('toast-container') || document.body).appendChild(toast);
    
    // Auto dismiss
    setTimeout(() => {
        if (toast.parentElement) {
            toast.classList.add('toast-exit');
            setTimeout(() => toast.remove(), 300);
        }
    }, duration);
    
    return toast;
}

// ==================== READING PROGRESS BAR ====================
function initReadingProgress() {
    // Only show on guide pages (pages with .guide-content or long content)
    const guideContent = document.querySelector('.guide-content') || document.querySelector('.guide-body');
    if (!guideContent) return;
    
    const bar = document.createElement('div');
    bar.className = 'reading-progress';
    bar.id = 'reading-progress';
    document.body.appendChild(bar);
    
    window.addEventListener('scroll', () => {
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (docHeight <= 0) return;
        
        const scrolled = window.scrollY;
        const progress = Math.min((scrolled / docHeight) * 100, 100);
        bar.style.width = progress + '%';
    }, { passive: true });
}

// ==================== BACK TO TOP BUTTON ====================
function initBackToTop() {
    // Create button
    const btn = document.createElement('button');
    btn.className = 'back-to-top';
    btn.id = 'back-to-top';
    btn.innerHTML = '↑';
    btn.setAttribute('aria-label', 'Back to top');
    btn.setAttribute('title', 'Back to top');
    document.body.appendChild(btn);
    
    // Show/hide on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    }, { passive: true });
    
    // Scroll to top on click
    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ==================== PAGE TRANSITIONS ====================
function initPageTransitions() {
    // Fade in on page load
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    
    requestAnimationFrame(() => {
        document.body.style.opacity = '1';
    });
    
    // Intercept internal link clicks for smooth exit
    document.addEventListener('click', (e) => {
        const link = e.target.closest('a[href]');
        if (!link) return;
        
        const href = link.getAttribute('href');
        
        // Skip external links, hash links, and special protocols
        if (!href || 
            href.startsWith('#') || 
            href.startsWith('http') || 
            href.startsWith('mailto:') || 
            href.startsWith('tel:') ||
            link.target === '_blank' ||
            e.metaKey || e.ctrlKey || e.shiftKey) {
            return;
        }
        
        e.preventDefault();
        
        document.body.classList.add('page-exit');
        
        setTimeout(() => {
            window.location.href = href;
        }, 200);
    });
}

// ==================== DASHBOARD WIDGETS ====================
function initDashboardWidgets() {
    const section = document.getElementById('widgets-section');
    const grid = document.getElementById('widgets-grid');
    if (!section || !grid) return;

    const eduProgress = JSON.parse(localStorage.getItem('educationHubProgress') || '{}');
    const hiddenWidgets = JSON.parse(localStorage.getItem('hiddenWidgets') || '[]');

    // Widget definitions — each maps to track categories
    const widgetDefs = [
        {
            id: 'finance-snapshot',
            title: 'Finance Snapshot',
            icon: '💰',
            category: 'finance',
            tracks: ['stocks', 'taxes', 'realestate', 'crypto', 'credit', 'retirement', 'personalfinance', 'debt', 'banking', 'insurance', 'studentloans', 'estateplanning'],
            render: renderFinanceWidget
        },
        {
            id: 'investment-growth',
            title: 'Investment Growth',
            icon: '📈',
            category: 'finance',
            tracks: ['stocks', 'crypto', 'realestate', 'retirement'],
            render: renderInvestmentWidget
        },
        {
            id: 'debt-freedom',
            title: 'Debt Freedom',
            icon: '🎯',
            category: 'finance',
            tracks: ['debt', 'credit', 'personalfinance', 'studentloans', 'banking'],
            render: renderDebtWidget
        },
        {
            id: 'career-builder',
            title: 'Career Builder',
            icon: '💼',
            category: 'business',
            tracks: ['business', 'freelancing', 'negotiation', 'marketing', 'nonprofits'],
            render: renderCareerWidget
        },
        {
            id: 'goal-progress',
            title: 'Goal Progress',
            icon: '🎯',
            category: 'goals',
            tracks: ['productivity', 'communication', 'emotionaliq'],
            render: renderGoalWidget
        },
        {
            id: 'rights-knowledge',
            title: 'Know Your Rights',
            icon: '⚖️',
            category: 'civic',
            tracks: ['politics', 'california', 'labor', 'workplacerights', 'contracts', 'consumerrights', 'benefits'],
            render: renderCivicWidget
        },
        {
            id: 'life-skills',
            title: 'Life Skills',
            icon: '🛡️',
            category: 'lifeskills',
            tracks: ['emergency', 'career', 'health', 'housing', 'transportation', 'familyplanning'],
            render: renderLifeSkillsWidget
        },
        {
            id: 'tech-byte',
            title: 'Tech Byte',
            icon: '💻',
            category: 'tech',
            tracks: ['ai', 'cybersecurity', 'digitalliteracy'],
            render: renderTechWidget
        }
    ];

    // Determine which widgets are unlocked
    function isUnlocked(widget) {
        return widget.tracks.some(trackId => {
            const tp = eduProgress[trackId];
            return tp && tp.completedTopics && tp.completedTopics.length >= 1;
        });
    }

    const unlockedWidgets = widgetDefs.filter(isUnlocked);
    const visibleWidgets = unlockedWidgets.filter(w => !hiddenWidgets.includes(w.id));

    if (visibleWidgets.length === 0) {
        section.style.display = 'none';
        // Still need manager to work if widgets exist but are hidden
        if (unlockedWidgets.length > 0) {
            section.style.display = 'block';
            grid.innerHTML = `
                <div class="widget-empty-hint" style="grid-column: 1 / -1; text-align: center; padding: 30px; color: var(--text-muted); font-size: 0.9rem;">
                    All widgets are hidden. Click <strong>Manage</strong> to show them.
                </div>
            `;
        }
    } else {
        section.style.display = 'block';
        grid.innerHTML = '';
        visibleWidgets.forEach(widget => {
            const card = document.createElement('div');
            card.className = 'widget-card';
            card.dataset.category = widget.category;
            card.dataset.widgetId = widget.id;
            card.innerHTML = `
                <div class="widget-header">
                    <div class="widget-title-area">
                        <span class="widget-icon">${widget.icon}</span>
                        <span class="widget-title">${widget.title}</span>
                    </div>
                    <button class="widget-hide-btn" data-widget-id="${widget.id}" title="Hide widget">✕</button>
                </div>
                <div class="widget-body" id="widget-body-${widget.id}"></div>
                <div class="widget-footer" id="widget-footer-${widget.id}"></div>
            `;
            grid.appendChild(card);
            widget.render(widget.id, eduProgress);
        });
    }

    // Hide widget buttons
    grid.querySelectorAll('.widget-hide-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.dataset.widgetId;
            const hidden = JSON.parse(localStorage.getItem('hiddenWidgets') || '[]');
            if (!hidden.includes(id)) hidden.push(id);
            localStorage.setItem('hiddenWidgets', JSON.stringify(hidden));
            initDashboardWidgets(); // Re-render
        });
    });

    // Manage widgets modal
    setupWidgetManager(widgetDefs, eduProgress, hiddenWidgets);
}

function setupWidgetManager(widgetDefs, eduProgress, hiddenWidgets) {
    const manageBtn = document.getElementById('manage-widgets-btn');
    const overlay = document.getElementById('widget-manager-overlay');
    const closeBtn = document.getElementById('widget-manager-close');
    const list = document.getElementById('widget-manager-list');
    if (!manageBtn || !overlay) return;

    function isUnlocked(widget) {
        return widget.tracks.some(trackId => {
            const tp = eduProgress[trackId];
            return tp && tp.completedTopics && tp.completedTopics.length >= 1;
        });
    }

    function renderManager() {
        const currentHidden = JSON.parse(localStorage.getItem('hiddenWidgets') || '[]');
        list.innerHTML = widgetDefs.map(w => {
            const unlocked = isUnlocked(w);
            const visible = unlocked && !currentHidden.includes(w.id);
            return `
                <div class="widget-manager-item ${unlocked ? '' : 'locked'}">
                    <div class="widget-manager-info">
                        <span class="widget-manager-icon">${w.icon}</span>
                        <div>
                            <div class="widget-manager-name">${w.title}</div>
                            <div class="widget-manager-status">${unlocked ? 'Unlocked' : '🔒 Complete a lesson to unlock'}</div>
                        </div>
                    </div>
                    <label class="widget-toggle">
                        <input type="checkbox" data-widget-id="${w.id}" ${visible ? 'checked' : ''} ${unlocked ? '' : 'disabled'}>
                        <span class="widget-toggle-slider"></span>
                    </label>
                </div>
            `;
        }).join('');

        list.querySelectorAll('input[type="checkbox"]').forEach(cb => {
            cb.addEventListener('change', () => {
                const id = cb.dataset.widgetId;
                let hidden = JSON.parse(localStorage.getItem('hiddenWidgets') || '[]');
                if (cb.checked) {
                    hidden = hidden.filter(h => h !== id);
                } else {
                    if (!hidden.includes(id)) hidden.push(id);
                }
                localStorage.setItem('hiddenWidgets', JSON.stringify(hidden));
            });
        });
    }

    manageBtn.addEventListener('click', () => {
        renderManager();
        overlay.style.display = 'flex';
    });

    closeBtn.addEventListener('click', () => {
        overlay.style.display = 'none';
        initDashboardWidgets(); // Re-render with changes
    });

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.style.display = 'none';
            initDashboardWidgets();
        }
    });
}

// ==================== WIDGET RENDERERS ====================

// Daily tip system — picks a tip based on day of year for consistency
function getDailyIndex(tips) {
    const now = new Date();
    const dayOfYear = Math.floor((now - new Date(now.getFullYear(), 0, 0)) / 86400000);
    return dayOfYear % tips.length;
}

function renderFinanceWidget(id, progress) {
    const body = document.getElementById(`widget-body-${id}`);
    const footer = document.getElementById(`widget-footer-${id}`);
    
    const tips = [
        'Pay yourself first — automate savings before spending.',
        'The 50/30/20 rule: 50% needs, 30% wants, 20% savings.',
        'An emergency fund of 3-6 months expenses is your safety net.',
        'Track every dollar for one month to find spending leaks.',
        'High-yield savings accounts can earn 10-20x more than traditional banks.',
        'Avoid lifestyle creep — save raises instead of spending them.',
        'Review subscriptions monthly — cancel what you don\'t use.',
        'Cash envelopes can help control discretionary spending.'
    ];

    const budgetData = localStorage.getItem('budgetPlannerData');
    let budgetHtml = '';
    
    if (budgetData) {
        try {
            const data = JSON.parse(budgetData);
            const income = data.income || 0;
            const expenses = (data.expenses || []).reduce((s, e) => s + (e.amount || 0), 0);
            const remaining = income - expenses;
            budgetHtml = `
                <div class="widget-stat">${remaining >= 0 ? '+' : ''}$${Math.round(remaining).toLocaleString()}</div>
                <div class="widget-stat-label">Monthly remaining (${income > 0 ? Math.round((remaining / income) * 100) : 0}% of income)</div>
            `;
        } catch (e) {
            budgetHtml = '';
        }
    }

    body.innerHTML = `
        ${budgetHtml}
        <div class="widget-tip">
            <span class="widget-tip-label">Daily Tip</span>
            ${tips[getDailyIndex(tips)]}
        </div>
    `;

    footer.innerHTML = `
        <a href="tools/budget-planner/index.html" class="widget-action primary">Open Budget</a>
        <a href="tools/net-worth/index.html" class="widget-action">Net Worth</a>
    `;
}

function renderInvestmentWidget(id, progress) {
    const body = document.getElementById(`widget-body-${id}`);
    const footer = document.getElementById(`widget-footer-${id}`);

    const terms = [
        { term: 'Dollar-Cost Averaging', def: 'Investing a fixed amount regularly, regardless of price — reduces timing risk.' },
        { term: 'Compound Interest', def: 'Earning returns on your returns. The earlier you start, the more powerful it becomes.' },
        { term: 'Diversification', def: 'Spreading investments across assets to reduce risk. Don\'t put all eggs in one basket.' },
        { term: 'Index Fund', def: 'A fund that tracks a market index (like S&P 500). Low fees, broad exposure.' },
        { term: 'Bull vs Bear Market', def: 'Bull = prices rising (optimism). Bear = prices falling 20%+ (pessimism).' },
        { term: 'P/E Ratio', def: 'Price-to-Earnings ratio. Helps determine if a stock is over or undervalued.' },
        { term: 'ETF', def: 'Exchange-Traded Fund — trades like a stock but holds a basket of assets.' },
        { term: 'Capital Gains', def: 'Profit from selling an investment. Long-term gains (1yr+) are taxed less.' }
    ];

    const today = terms[getDailyIndex(terms)];

    // Quick compound interest preview
    const monthly = 200;
    const years = 30;
    const rate = 0.08;
    let balance = 0;
    for (let m = 0; m < years * 12; m++) {
        balance += monthly;
        balance *= (1 + rate / 12);
    }

    body.innerHTML = `
        <div class="widget-stat">$${Math.round(balance).toLocaleString()}</div>
        <div class="widget-stat-label">$${monthly}/mo at 8% over ${years} years</div>
        <div class="widget-tip" style="margin-top: 12px;">
            <span class="widget-tip-label">Term of the Day: ${today.term}</span>
            ${today.def}
        </div>
    `;

    footer.innerHTML = `
        <a href="tools/compound-calculator/index.html" class="widget-action primary">Calculator</a>
        <a href="tools/education-hub/index.html" class="widget-action">Learn More</a>
    `;
}

function renderDebtWidget(id, progress) {
    const body = document.getElementById(`widget-body-${id}`);
    const footer = document.getElementById(`widget-footer-${id}`);

    const tips = [
        'The debt avalanche method (highest interest first) saves the most money.',
        'The debt snowball method (smallest balance first) builds momentum fast.',
        'Never pay just the minimum — even $50 extra/month makes a huge difference.',
        'Consolidating high-interest debt can save thousands in interest.',
        'Your debt-to-income ratio affects your ability to get loans and housing.',
        'Student loan forgiveness programs exist — check if you qualify.',
        'Balance transfer cards with 0% intro APR can help crush credit card debt.',
        'Automate debt payments so you never miss one.'
    ];

    const debtData = localStorage.getItem('debtPayoffData');
    let debtHtml = '';

    if (debtData) {
        try {
            const data = JSON.parse(debtData);
            const totalDebt = (data.debts || []).reduce((s, d) => s + (d.balance || 0), 0);
            if (totalDebt > 0) {
                debtHtml = `
                    <div class="widget-stat">$${Math.round(totalDebt).toLocaleString()}</div>
                    <div class="widget-stat-label">Total debt tracked</div>
                `;
            }
        } catch (e) {}
    }

    body.innerHTML = `
        ${debtHtml}
        <div class="widget-tip">
            <span class="widget-tip-label">Daily Tip</span>
            ${tips[getDailyIndex(tips)]}
        </div>
    `;

    footer.innerHTML = `
        <a href="tools/debt-payoff/index.html" class="widget-action primary">Debt Payoff</a>
    `;
}

function renderCareerWidget(id, progress) {
    const body = document.getElementById(`widget-body-${id}`);
    const footer = document.getElementById(`widget-footer-${id}`);

    const tips = [
        'Your resume should be tailored for each job application — not one-size-fits-all.',
        'Networking accounts for up to 80% of job placements. Reach out to people in your field.',
        'Practice the STAR method for interviews: Situation, Task, Action, Result.',
        'Freelancing on the side can diversify your income while building your portfolio.',
        'LinkedIn is a powerful tool — keep your profile updated and engage weekly.',
        'Negotiate your salary — the first offer is rarely the best offer.',
        'Build skills that are in demand: data analysis, project management, communication.',
        'A side business can start with just $0 and a skill you already have.'
    ];

    const resumeData = localStorage.getItem('resumeBuilderData');
    let resumeHtml = '';
    if (resumeData) {
        try {
            const data = JSON.parse(resumeData);
            if (data.fullName) {
                const sections = [data.summary, data.experience?.length, data.education?.length, data.skills].filter(Boolean).length;
                resumeHtml = `
                    <div class="widget-mini-progress">
                        <div class="widget-mini-bar">
                            <div class="widget-mini-fill" style="width: ${(sections / 4) * 100}%"></div>
                        </div>
                        <div class="widget-mini-label">
                            <span>Resume: ${sections}/4 sections</span>
                            <span>${sections === 4 ? 'Complete!' : 'In progress'}</span>
                        </div>
                    </div>
                `;
            }
        } catch (e) {}
    }

    body.innerHTML = `
        ${resumeHtml}
        <div class="widget-tip">
            <span class="widget-tip-label">Career Tip</span>
            ${tips[getDailyIndex(tips)]}
        </div>
    `;

    footer.innerHTML = `
        <a href="tools/resume-builder/index.html" class="widget-action primary">Resume Builder</a>
    `;
}

function renderGoalWidget(id, progress) {
    const body = document.getElementById(`widget-body-${id}`);
    const footer = document.getElementById(`widget-footer-${id}`);

    const goalData = localStorage.getItem('goalTrackerData');
    let goalHtml = '';

    if (goalData) {
        try {
            const data = JSON.parse(goalData);
            const goals = data.goals || [];
            const completed = goals.filter(g => g.milestones.length > 0 && g.milestones.every(m => m.done)).length;
            const active = goals.length - completed;
            
            if (goals.length > 0) {
                goalHtml = `
                    <div style="display: flex; gap: 16px; margin-bottom: 10px;">
                        <div>
                            <div class="widget-stat">${active}</div>
                            <div class="widget-stat-label">Active goals</div>
                        </div>
                        <div>
                            <div class="widget-stat" style="color: var(--success, #059669);">${completed}</div>
                            <div class="widget-stat-label">Completed</div>
                        </div>
                    </div>
                `;
                
                // Show next milestone from most recent active goal
                const activeGoal = goals.find(g => g.milestones.some(m => !m.done));
                if (activeGoal) {
                    const nextMilestone = activeGoal.milestones.find(m => !m.done);
                    goalHtml += `
                        <div class="widget-tip">
                            <span class="widget-tip-label">Next Up: ${activeGoal.name}</span>
                            ${nextMilestone ? nextMilestone.text : 'All milestones done!'}
                        </div>
                    `;
                }
            }
        } catch (e) {}
    }

    if (!goalHtml) {
        const tips = [
            'SMART goals are Specific, Measurable, Achievable, Relevant, Time-bound.',
            'Break big goals into small milestones — progress fuels motivation.',
            'Review your goals weekly. What gets measured gets managed.',
            'Write your goals down. Written goals are 42% more likely to be achieved.',
            'Focus on systems over goals. Daily habits compound into massive results.',
            'The 2-minute rule: if something takes less than 2 minutes, do it now.'
        ];
        goalHtml = `
            <div class="widget-tip">
                <span class="widget-tip-label">Productivity Tip</span>
                ${tips[getDailyIndex(tips)]}
            </div>
        `;
    }

    body.innerHTML = goalHtml;
    footer.innerHTML = `<a href="tools/goal-tracker/index.html" class="widget-action primary">Goal Tracker</a>`;
}

function renderCivicWidget(id, progress) {
    const body = document.getElementById(`widget-body-${id}`);
    const footer = document.getElementById(`widget-footer-${id}`);

    const facts = [
        'You have the right to remain silent during police encounters — use it.',
        'In California, you can break a lease with 30 days notice if you\'re a domestic violence victim.',
        'The minimum wage in California is among the highest in the nation.',
        'You can\'t be fired for discussing wages with coworkers — that\'s federally protected.',
        'The EEOC enforces federal laws against workplace discrimination.',
        'Small claims court lets you settle disputes up to $10,000 without a lawyer.',
        'Landlords must return your security deposit within 21 days in California.',
        'You have 3 business days to cancel most door-to-door sales contracts.'
    ];

    body.innerHTML = `
        <div class="widget-tip">
            <span class="widget-tip-label">Did You Know?</span>
            ${facts[getDailyIndex(facts)]}
        </div>
    `;

    footer.innerHTML = `<a href="tools/education-hub/index.html" class="widget-action">Keep Learning</a>`;
}

function renderLifeSkillsWidget(id, progress) {
    const body = document.getElementById(`widget-body-${id}`);
    const footer = document.getElementById(`widget-footer-${id}`);

    const tips = [
        'Keep important documents (ID, birth certificate, insurance) in a fireproof safe or digital backup.',
        'Learn basic first aid — it\'s free through the Red Cross and could save a life.',
        'When apartment hunting, budget for rent to be no more than 30% of your gross income.',
        'Get 3 quotes before any major repair or purchase over $500.',
        'Regular car maintenance (oil, tires, brakes) is cheaper than emergency repairs.',
        'A packed lunch saves $2,000-3,000/year compared to eating out daily.',
        'Preventive health checkups catch problems early when they\'re cheaper to treat.',
        'Renters insurance typically costs $15-30/month and covers thousands in losses.'
    ];

    body.innerHTML = `
        <div class="widget-tip">
            <span class="widget-tip-label">Life Skill of the Day</span>
            ${tips[getDailyIndex(tips)]}
        </div>
    `;

    footer.innerHTML = `<a href="tools/education-hub/index.html" class="widget-action">Learn More</a>`;
}

function renderTechWidget(id, progress) {
    const body = document.getElementById(`widget-body-${id}`);
    const footer = document.getElementById(`widget-footer-${id}`);

    const facts = [
        'Enable two-factor authentication (2FA) on every account that supports it.',
        'AI tools like ChatGPT can draft emails, analyze data, and brainstorm ideas in seconds.',
        'A password manager is the single best thing you can do for online security.',
        'Check haveibeenpwned.com to see if your email has been in a data breach.',
        'Back up your data using the 3-2-1 rule: 3 copies, 2 types of media, 1 offsite.',
        'Public Wi-Fi is a security risk — use a VPN for sensitive browsing.',
        'AI can help you learn faster — ask it to explain concepts like you\'re 5.',
        'Keep your software updated. Most hacks exploit known, patched vulnerabilities.'
    ];

    body.innerHTML = `
        <div class="widget-tip">
            <span class="widget-tip-label">Tech Tip</span>
            ${facts[getDailyIndex(facts)]}
        </div>
    `;

    footer.innerHTML = `<a href="tools/education-hub/index.html" class="widget-action">Explore Tech</a>`;
}

// Export for use in other pages
window.blueprintApp = {
    toggleTheme,
    triggerConfetti,
    showToast
};
