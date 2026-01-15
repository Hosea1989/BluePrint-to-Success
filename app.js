// Blueprint to Success - Main Dashboard App

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    setupNavigation();
    loadProgressData();
    loadBudgetData();
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
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('blueprintTheme', newTheme);
    updateThemeButton(newTheme);
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
    
    // Load guides progress
    const guidesProgress = localStorage.getItem('guidesProgress');
    if (guidesProgress) {
        try {
            const data = JSON.parse(guidesProgress);
            updateGuidesProgress(data);
        } catch (e) {
            console.log('No guides progress data');
        }
    } else {
        // Initialize empty guides progress
        const initialProgress = {
            read: [],
            bookmarked: []
        };
        localStorage.setItem('guidesProgress', JSON.stringify(initialProgress));
    }
}

function updateEducationProgress(data) {
    // Calculate track progress
    const tracks = ['stocks', 'taxes', 'nonprofits', 'labor'];
    const topicCounts = {
        stocks: 25, // 5 levels * 5 topics
        taxes: 20,
        nonprofits: 16,
        labor: 17
    };
    
    let totalCompleted = 0;
    let totalTopics = 0;
    
    tracks.forEach(track => {
        const trackData = data[track];
        if (trackData && trackData.completedTopics) {
            const completed = trackData.completedTopics.length;
            const total = topicCounts[track];
            const percent = Math.round((completed / total) * 100);
            
            // Update individual track progress
            const trackEl = document.getElementById(`${track}-progress`);
            if (trackEl) {
                trackEl.textContent = `${percent}%`;
            }
            
            totalCompleted += completed;
            totalTopics += total;
        } else {
            totalTopics += topicCounts[track];
        }
    });
    
    // Update overall education progress
    const overallPercent = totalTopics > 0 ? Math.round((totalCompleted / totalTopics) * 100) : 0;
    
    const progressFill = document.getElementById('education-progress');
    const progressPercent = document.getElementById('education-percent');
    
    if (progressFill) progressFill.style.width = `${overallPercent}%`;
    if (progressPercent) progressPercent.textContent = `${overallPercent}%`;
}

function updateGuidesProgress(data) {
    const guideCategories = {
        finance: ['credit-scores', 'budgeting', 'debt-management', 'investing-basics', 'investing-charts', 
                  'tax-fundamentals', 'retirement-planning', 'insurance', 'behavioral-finance', 
                  'financial-analysis', 'financial-technology'],
        tech: ['web-development', 'python', 'javascript', 'java', 'csharp', 'swift', 'flutter', 
               'html-css', 'app-development', 'software-development', 'data-science', 'game-development'],
        personal: ['self-care', 'language-learning', 'travel'],
        business: ['entrepreneurship', 'forming-llc', 'digital-marketing', 'social-media', 'clothing-brand']
    };
    
    const readGuides = data.read || [];
    let totalRead = 0;
    let totalGuides = 0;
    
    Object.keys(guideCategories).forEach(category => {
        const guides = guideCategories[category];
        const categoryRead = guides.filter(g => readGuides.includes(g)).length;
        totalRead += categoryRead;
        totalGuides += guides.length;
        
        const categoryEl = document.getElementById(`${category}-guides-progress`);
        if (categoryEl) {
            categoryEl.textContent = `${categoryRead}/${guides.length}`;
        }
    });
    
    // Update overall guides progress
    const overallPercent = totalGuides > 0 ? Math.round((totalRead / totalGuides) * 100) : 0;
    
    const progressFill = document.getElementById('guides-progress');
    const progressPercent = document.getElementById('guides-percent');
    
    if (progressFill) progressFill.style.width = `${overallPercent}%`;
    if (progressPercent) progressPercent.textContent = `${overallPercent}%`;
}

// ==================== BUDGET DATA ====================
function loadBudgetData() {
    const budgetData = localStorage.getItem('budgetPlannerData');
    if (budgetData) {
        try {
            const data = JSON.parse(budgetData);
            
            // Calculate totals
            const monthlyIncome = (data.income?.monthly || 0) + (data.income?.other || 0);
            
            let totalExpenses = 0;
            
            // Fixed expenses
            if (data.fixedExpenses) {
                totalExpenses += data.fixedExpenses.reduce((sum, e) => sum + (e.amount || 0), 0);
            }
            
            // Active subscriptions
            if (data.subscriptions) {
                totalExpenses += data.subscriptions
                    .filter(s => s.active)
                    .reduce((sum, s) => sum + (s.amount || 0), 0);
            }
            
            // Variable expenses
            if (data.variableExpenses) {
                totalExpenses += data.variableExpenses.reduce((sum, e) => sum + (e.amount || 0), 0);
            }
            
            // Debt minimum payments
            if (data.debts) {
                totalExpenses += data.debts.reduce((sum, d) => sum + (d.minPayment || 0), 0);
            }
            
            const remaining = monthlyIncome - totalExpenses;
            
            // Update UI
            const incomeEl = document.getElementById('budget-income');
            const remainingEl = document.getElementById('budget-remaining');
            
            if (incomeEl) {
                incomeEl.textContent = monthlyIncome > 0 ? formatCurrency(monthlyIncome) : '--';
            }
            if (remainingEl) {
                remainingEl.textContent = monthlyIncome > 0 ? formatCurrency(remaining) : '--';
                if (remaining < 0) {
                    remainingEl.style.color = 'var(--danger)';
                }
            }
        } catch (e) {
            console.log('No budget data');
        }
    }
}

function formatCurrency(amount) {
    return '$' + Math.round(amount).toLocaleString();
}

// ==================== GUIDE PROGRESS ====================
function markGuideAsRead(guideId) {
    let progress = JSON.parse(localStorage.getItem('guidesProgress') || '{"read":[],"bookmarked":[]}');
    
    if (!progress.read.includes(guideId)) {
        progress.read.push(guideId);
        localStorage.setItem('guidesProgress', JSON.stringify(progress));
    }
    
    return progress.read.includes(guideId);
}

function toggleGuideBookmark(guideId) {
    let progress = JSON.parse(localStorage.getItem('guidesProgress') || '{"read":[],"bookmarked":[]}');
    
    const index = progress.bookmarked.indexOf(guideId);
    if (index > -1) {
        progress.bookmarked.splice(index, 1);
    } else {
        progress.bookmarked.push(guideId);
    }
    
    localStorage.setItem('guidesProgress', JSON.stringify(progress));
    return progress.bookmarked.includes(guideId);
}

function isGuideRead(guideId) {
    const progress = JSON.parse(localStorage.getItem('guidesProgress') || '{"read":[],"bookmarked":[]}');
    return progress.read.includes(guideId);
}

function isGuideBookmarked(guideId) {
    const progress = JSON.parse(localStorage.getItem('guidesProgress') || '{"read":[],"bookmarked":[]}');
    return progress.bookmarked.includes(guideId);
}

// Export for use in guide pages
window.blueprintApp = {
    markGuideAsRead,
    toggleGuideBookmark,
    isGuideRead,
    isGuideBookmarked,
    toggleTheme
};
