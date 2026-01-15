// Education Hub App - Blueprint to Success
// Main application logic for the education hub

// ==================== TRACK METADATA ====================
const trackCategories = {
    finance: {
        name: 'Finance',
        icon: '💰',
        tracks: ['stocks', 'realestate', 'crypto', 'credit', 'retirement', 'taxes']
    },
    business: {
        name: 'Business',
        icon: '💼',
        tracks: ['business', 'freelancing', 'negotiation', 'marketing']
    },
    tech: {
        name: 'Tech',
        icon: '💻',
        tracks: ['ai', 'cybersecurity']
    },
    civic: {
        name: 'Civic & Rights',
        icon: '⚖️',
        tracks: ['politics', 'california', 'labor', 'nonprofits']
    },
    personal: {
        name: 'Personal',
        icon: '🌱',
        tracks: ['productivity']
    }
};

// ==================== DATA & STATE ====================
// Tracks will be populated as data files load
const tracks = {};

// Initialize tracks from loaded data
function initializeTracks() {
    // Finance
    if (typeof stocksData !== 'undefined') tracks.stocks = { ...stocksData, category: 'finance' };
    if (typeof realestateData !== 'undefined') tracks.realestate = { ...realestateData, category: 'finance' };
    if (typeof cryptoData !== 'undefined') tracks.crypto = { ...cryptoData, category: 'finance' };
    if (typeof creditData !== 'undefined') tracks.credit = { ...creditData, category: 'finance' };
    if (typeof retirementData !== 'undefined') tracks.retirement = { ...retirementData, category: 'finance' };
    if (typeof taxesData !== 'undefined') tracks.taxes = { ...taxesData, category: 'finance' };
    
    // Business
    if (typeof businessData !== 'undefined') tracks.business = { ...businessData, category: 'business' };
    if (typeof freelancingData !== 'undefined') tracks.freelancing = { ...freelancingData, category: 'business' };
    if (typeof negotiationData !== 'undefined') tracks.negotiation = { ...negotiationData, category: 'business' };
    if (typeof marketingData !== 'undefined') tracks.marketing = { ...marketingData, category: 'business' };
    
    // Tech
    if (typeof aiData !== 'undefined') tracks.ai = { ...aiData, category: 'tech' };
    if (typeof cybersecurityData !== 'undefined') tracks.cybersecurity = { ...cybersecurityData, category: 'tech' };
    
    // Civic & Rights
    if (typeof politicsData !== 'undefined') tracks.politics = { ...politicsData, category: 'civic' };
    if (typeof californiaData !== 'undefined') tracks.california = { ...californiaData, category: 'civic' };
    if (typeof laborData !== 'undefined') tracks.labor = { ...laborData, category: 'civic' };
    if (typeof nonprofitsData !== 'undefined') tracks.nonprofits = { ...nonprofitsData, category: 'civic' };
    
    // Personal
    if (typeof productivityData !== 'undefined') tracks.productivity = { ...productivityData, category: 'personal' };
}

let state = {
    currentView: 'home',
    currentTrack: null,
    currentLevel: null,
    currentTopicIndex: 0,
    quizState: null,
    progress: {},
    currentCategory: 'all'
};

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
    initializeTracks();
    loadProgress();
    initTheme();
    renderSidebar();
    renderTrackCards();
    setupEventListeners();
    updateAllProgress();
    updateHeroProgress();
    showView('home');
    checkGettingStarted();
});

// ==================== GETTING STARTED GUIDE ====================
function checkGettingStarted() {
    const guide = document.getElementById('edu-getting-started');
    if (!guide) return;
    
    const dismissed = localStorage.getItem('eduHubIntroDismissed');
    const hasProgress = Object.keys(state.progress).some(track => 
        state.progress[track]?.completedTopics?.length > 0
    );
    
    if (dismissed || hasProgress) {
        guide.style.display = 'none';
    }
}

// ==================== THEME ====================
function initTheme() {
    const savedTheme = localStorage.getItem('educationHubTheme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeButton(savedTheme);
}

function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    const newTheme = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('educationHubTheme', newTheme);
    updateThemeButton(newTheme);
}

function updateThemeButton(theme) {
    const btn = document.getElementById('theme-toggle');
    if (btn) btn.textContent = theme === 'dark' ? '☀️' : '🌙';
}

// ==================== PROGRESS MANAGEMENT ====================
function loadProgress() {
    const saved = localStorage.getItem('educationHubProgress');
    if (saved) {
        state.progress = JSON.parse(saved);
    }
    
    // Ensure all tracks have progress entries
    Object.keys(tracks).forEach(trackId => {
        if (!state.progress[trackId]) {
            state.progress[trackId] = {
                completedTopics: [],
                completedLevels: [],
                quizScores: {}
            };
        }
    });
}

function saveProgress() {
    localStorage.setItem('educationHubProgress', JSON.stringify(state.progress));
}

function resetProgress() {
    if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
        localStorage.removeItem('educationHubProgress');
        state.progress = {};
        Object.keys(tracks).forEach(trackId => {
            state.progress[trackId] = {
                completedTopics: [],
                completedLevels: [],
                quizScores: {}
            };
        });
        updateAllProgress();
        renderTrackCards();
        showView('home');
    }
}

function markTopicComplete(trackId, levelId, topicId) {
    if (!state.progress[trackId]) {
        state.progress[trackId] = { completedTopics: [], completedLevels: [], quizScores: {} };
    }
    const key = `${levelId}-${topicId}`;
    if (!state.progress[trackId].completedTopics.includes(key)) {
        state.progress[trackId].completedTopics.push(key);
        saveProgress();
        updateAllProgress();
    }
}

function markLevelComplete(trackId, levelId, score) {
    if (!state.progress[trackId]) {
        state.progress[trackId] = { completedTopics: [], completedLevels: [], quizScores: {} };
    }
    if (!state.progress[trackId].completedLevels.includes(levelId)) {
        state.progress[trackId].completedLevels.push(levelId);
    }
    state.progress[trackId].quizScores[levelId] = score;
    saveProgress();
    updateAllProgress();
}

function isLevelUnlocked(trackId, levelId) {
    if (levelId === 1) return true;
    return state.progress[trackId]?.completedLevels?.includes(levelId - 1) || false;
}

function isLevelCompleted(trackId, levelId) {
    return state.progress[trackId]?.completedLevels?.includes(levelId) || false;
}

function getTrackProgress(trackId) {
    const track = tracks[trackId];
    if (!track || !track.levels) return 0;
    const totalTopics = track.levels.reduce((sum, level) => sum + level.topics.length, 0);
    const completedTopics = state.progress[trackId]?.completedTopics?.length || 0;
    return totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;
}

function getOverallProgress() {
    let total = 0;
    let completed = 0;
    Object.keys(tracks).forEach(trackId => {
        const track = tracks[trackId];
        if (track && track.levels) {
            total += track.levels.reduce((sum, level) => sum + level.topics.length, 0);
            completed += state.progress[trackId]?.completedTopics?.length || 0;
        }
    });
    return total > 0 ? Math.round((completed / total) * 100) : 0;
}

// ==================== UI UPDATES ====================
function updateAllProgress() {
    // Update overall progress
    const overall = getOverallProgress();
    const overallFill = document.getElementById('overall-progress-fill');
    const overallText = document.getElementById('overall-progress-text');
    if (overallFill) overallFill.style.width = overall + '%';
    if (overallText) overallText.textContent = overall + '% Complete';
    
    // Update sidebar progress
    Object.keys(tracks).forEach(trackId => {
        const progress = getTrackProgress(trackId);
        const navProgress = document.getElementById(`nav-progress-${trackId}`);
        if (navProgress) navProgress.textContent = progress + '%';
    });
}

// ==================== SIDEBAR RENDERING ====================
function renderSidebar() {
    const container = document.getElementById('sidebar-tracks');
    if (!container) return;
    
    let html = '';
    
    Object.keys(trackCategories).forEach(catId => {
        const cat = trackCategories[catId];
        const catTracks = cat.tracks.filter(tid => tracks[tid]);
        
        if (catTracks.length === 0) return;
        
        html += `<h3 class="nav-title">${cat.icon} ${cat.name}</h3>`;
        
        catTracks.forEach(trackId => {
            const track = tracks[trackId];
            const progress = getTrackProgress(trackId);
            html += `
                <button class="nav-item" data-view="${trackId}">
                    <span class="nav-icon">${track.icon}</span>
                    <span class="nav-text">${track.title}</span>
                    <span class="nav-progress" id="nav-progress-${trackId}">${progress}%</span>
                </button>
            `;
        });
    });
    
    container.innerHTML = html;
    
    // Re-attach event listeners
    container.querySelectorAll('.nav-item[data-view]').forEach(item => {
        item.addEventListener('click', () => {
            const view = item.dataset.view;
            if (tracks[view]) {
                showTrack(view);
            }
        });
    });
}

// ==================== TRACK CARDS RENDERING (DROPDOWN VERSION) ====================
function renderTrackCards() {
    const container = document.getElementById('category-dropdowns-container');
    if (!container) return;

    let html = '';
    
    // Get saved expanded state or default to first category expanded
    const expandedCategories = JSON.parse(localStorage.getItem('eduHubExpandedCategories') || '["finance"]');
    
    // Category descriptions
    const categoryDescs = {
        finance: 'Build wealth, manage money, and invest wisely',
        business: 'Start and grow your own business or career',
        tech: 'Master modern technology and digital skills',
        civic: 'Know your rights and understand how systems work',
        personal: 'Optimize your productivity and personal growth'
    };

    Object.keys(trackCategories).forEach(catId => {
        const cat = trackCategories[catId];
        const catTracks = cat.tracks.filter(tid => tracks[tid]);

        if (catTracks.length === 0) return;
        
        // Calculate category progress
        let totalProgress = 0;
        catTracks.forEach(tid => {
            totalProgress += getTrackProgress(tid);
        });
        const categoryProgress = Math.round(totalProgress / catTracks.length);
        
        const isExpanded = expandedCategories.includes(catId);

        html += `
            <div class="category-dropdown ${isExpanded ? 'expanded' : ''}" data-category="${catId}">
                <div class="category-dropdown-header">
                    <div class="category-header-left">
                        <span class="category-header-icon">${cat.icon}</span>
                        <div class="category-header-info">
                            <h3>${cat.name}</h3>
                            <p>${categoryDescs[catId] || ''}</p>
                        </div>
                    </div>
                    <div class="category-header-right">
                        <span class="category-track-count">${catTracks.length} tracks</span>
                        <div class="category-progress-mini">
                            <div class="mini-bar">
                                <div class="mini-fill" style="width: ${categoryProgress}%"></div>
                            </div>
                            <span>${categoryProgress}%</span>
                        </div>
                        <span class="category-dropdown-arrow">▼</span>
                    </div>
                </div>
                <div class="category-dropdown-content">
                    <div class="category-tracks-grid">
        `;

        // Track cards for this category
        catTracks.forEach(trackId => {
            const track = tracks[trackId];
            const progress = getTrackProgress(trackId);
            const levelCount = track.levels ? track.levels.length : 0;

            let progressLabel = 'Not Started';
            if (progress === 100) progressLabel = 'Completed! 🎉';
            else if (progress > 0) progressLabel = progress + '% Complete';

            html += `
                <div class="track-card" data-track="${trackId}">
                    <div class="track-icon">${track.icon}</div>
                    <div class="track-info">
                        <h2>${track.title}</h2>
                        <p>${track.description}</p>
                        <div class="track-meta">
                            <span class="levels">${levelCount} Levels</span>
                            <span class="time">~${Math.ceil(levelCount * 0.75)} hours</span>
                        </div>
                    </div>
                    <div class="track-progress">
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${progress}%"></div>
                        </div>
                        <span class="progress-label">${progressLabel}</span>
                    </div>
                    <button class="track-btn">${progress > 0 ? 'Continue Learning →' : 'Start Learning →'}</button>
                </div>
            `;
        });

        html += `
                    </div>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;

    // Add click listeners for dropdown headers
    container.querySelectorAll('.category-dropdown-header').forEach(header => {
        header.addEventListener('click', () => {
            const dropdown = header.closest('.category-dropdown');
            const catId = dropdown.dataset.category;
            dropdown.classList.toggle('expanded');
            
            // Save expanded state
            const expanded = JSON.parse(localStorage.getItem('eduHubExpandedCategories') || '[]');
            if (dropdown.classList.contains('expanded')) {
                if (!expanded.includes(catId)) expanded.push(catId);
            } else {
                const idx = expanded.indexOf(catId);
                if (idx > -1) expanded.splice(idx, 1);
            }
            localStorage.setItem('eduHubExpandedCategories', JSON.stringify(expanded));
        });
    });

    // Re-attach event listeners for track cards
    container.querySelectorAll('.track-card').forEach(card => {
        card.addEventListener('click', () => {
            const trackId = card.dataset.track;
            showTrack(trackId);
        });
    });
}

function filterByCategory(category) {
    // Legacy function - kept for compatibility but not used with new dropdown UI
    state.currentCategory = category;
    renderTrackCards();
}

// ==================== VIEW MANAGEMENT ====================
function showView(viewId) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));

    const view = document.getElementById(`view-${viewId}`);
    if (view) view.classList.add('active');

    // Update nav
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.toggle('active', item.dataset.view === viewId);
    });
    
    // Show/hide hero based on view
    const hero = document.getElementById('edu-hero');
    if (hero) {
        hero.style.display = viewId === 'home' ? 'block' : 'none';
    }

    state.currentView = viewId;
    window.scrollTo(0, 0);
}

function showTrack(trackId) {
    const track = tracks[trackId];
    if (!track) {
        console.error('Track not found:', trackId);
        return;
    }

    state.currentTrack = trackId;

    // Update track view header
    document.getElementById('track-view-title').textContent = `${track.icon} ${track.title}`;
    document.getElementById('track-view-subtitle').textContent = track.description;

    // Update progress
    const progress = getTrackProgress(trackId);
    document.getElementById('track-progress-bar').style.width = progress + '%';
    document.getElementById('track-progress-text').textContent = progress + '% Complete';

    // Update graduation goal
    const goalText = document.getElementById('goal-text');
    if (goalText && track.graduationGoal) {
        goalText.textContent = track.graduationGoal;
    } else if (goalText) {
        goalText.textContent = 'Complete all levels to master this topic';
    }

    // Render levels
    renderTrackLevels(trackId);
    
    // Update final exam banner
    updateFinalExamBanner(trackId);

    showView('track');
}

function showLesson(trackId, levelId, topicIndex = 0) {
    state.currentTrack = trackId;
    state.currentLevel = levelId;
    state.currentTopicIndex = topicIndex;
    
    const track = tracks[trackId];
    const level = track.levels.find(l => l.id === levelId);
    const topic = level.topics[topicIndex];
    
    document.getElementById('lesson-title').textContent = topic.title;
    document.getElementById('lesson-subtitle').textContent = `Level ${levelId} • ${track.title}`;
    document.getElementById('lesson-back-btn').onclick = () => showTrack(trackId);
    document.getElementById('lesson-content').innerHTML = topic.content;
    document.getElementById('lesson-progress').textContent = `${topicIndex + 1} of ${level.topics.length}`;
    
    document.getElementById('lesson-prev').disabled = topicIndex === 0;
    
    const nextBtn = document.getElementById('lesson-next');
    if (topicIndex === level.topics.length - 1) {
        nextBtn.textContent = 'Take Quiz →';
        nextBtn.onclick = () => {
            markTopicComplete(trackId, levelId, topic.id);
            startQuiz(trackId, levelId);
        };
    } else {
        nextBtn.textContent = 'Next →';
        nextBtn.onclick = () => {
            markTopicComplete(trackId, levelId, topic.id);
            showLesson(trackId, levelId, topicIndex + 1);
        };
    }
    
    showView('lesson');
}

// ==================== TRACK LEVELS RENDERING ====================
function renderTrackLevels(trackId) {
    const container = document.getElementById('levels-container');
    if (!container) return;
    
    const track = tracks[trackId];
    if (!track || !track.levels) {
        container.innerHTML = '<p>No levels available for this track yet.</p>';
        return;
    }
    
    container.innerHTML = '';
    
    track.levels.forEach(level => {
        const isUnlocked = isLevelUnlocked(trackId, level.id);
        const isCompleted = isLevelCompleted(trackId, level.id);
        const isCurrent = isUnlocked && !isCompleted;
        
        const levelCard = document.createElement('div');
        levelCard.className = `level-card${isCompleted ? ' completed' : ''}${isCurrent ? ' current' : ''}${!isUnlocked ? ' locked' : ''}`;
        
        const statusText = isCompleted ? 'Completed' : (isUnlocked ? 'Start' : 'Locked');
        const statusClass = isCompleted ? 'completed' : (isUnlocked ? 'available' : 'locked');
        
        levelCard.innerHTML = `
            <div class="level-header">
                <div class="level-number">${isCompleted ? '✓' : level.id}</div>
                <div class="level-info">
                    <h3>${level.title}</h3>
                    <p>${level.subtitle}</p>
                </div>
                <div class="level-status">
                    <span class="status-badge ${statusClass}">${statusText}</span>
                    <span class="level-expand">▼</span>
                </div>
            </div>
            <div class="level-content">
                <ul class="topics-list">
                    ${level.topics.map((topic, idx) => {
                        const topicKey = `${level.id}-${topic.id}`;
                        const isTopicDone = state.progress[trackId]?.completedTopics?.includes(topicKey) || false;
                        return `
                            <li class="topic-item${isTopicDone ? ' completed' : ''}" 
                                data-track="${trackId}" 
                                data-level="${level.id}" 
                                data-topic-index="${idx}"
                                ${!isUnlocked ? 'style="pointer-events: none; opacity: 0.5;"' : ''}>
                                <span class="topic-icon">📖</span>
                                <span class="topic-title">${topic.title}</span>
                            </li>
                        `;
                    }).join('')}
                </ul>
                <div class="level-actions">
                    <button class="level-btn primary" 
                            ${!isUnlocked ? 'disabled' : ''}
                            data-action="start-level"
                            data-track="${trackId}"
                            data-level="${level.id}">
                        ${isCompleted ? 'Review Level' : 'Start Level'}
                    </button>
                    ${isUnlocked && !isCompleted ? `
                        <button class="level-btn secondary"
                                data-action="take-quiz"
                                data-track="${trackId}"
                                data-level="${level.id}">
                            Take Quiz
                        </button>
                    ` : ''}
                </div>
            </div>
        `;
        
        levelCard.querySelector('.level-header').addEventListener('click', () => {
            levelCard.classList.toggle('expanded');
        });
        
        container.appendChild(levelCard);
    });
    
    // Setup topic click handlers
    container.querySelectorAll('.topic-item').forEach(item => {
        item.addEventListener('click', () => {
            const trackId = item.dataset.track;
            const levelId = parseInt(item.dataset.level);
            const topicIndex = parseInt(item.dataset.topicIndex);
            showLesson(trackId, levelId, topicIndex);
        });
    });
    
    // Setup level action buttons
    container.querySelectorAll('[data-action="start-level"]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const trackId = btn.dataset.track;
            const levelId = parseInt(btn.dataset.level);
            showLesson(trackId, levelId, 0);
        });
    });
    
    container.querySelectorAll('[data-action="take-quiz"]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const trackId = btn.dataset.track;
            const levelId = parseInt(btn.dataset.level);
            startQuiz(trackId, levelId);
        });
    });
}

// ==================== QUIZ SYSTEM ====================
function startQuiz(trackId, levelId) {
    const track = tracks[trackId];
    const level = track.levels.find(l => l.id === levelId);
    
    if (!level.quiz || level.quiz.length === 0) {
        alert('No quiz available for this level yet.');
        return;
    }
    
    state.quizState = {
        trackId,
        levelId,
        questions: [...level.quiz],
        currentQuestion: 0,
        score: 0,
        answered: false
    };
    
    document.getElementById('quiz-title').textContent = `Level ${levelId} Quiz`;
    document.getElementById('quiz-subtitle').textContent = `${level.title} - ${track.title}`;
    document.getElementById('quiz-back-btn').onclick = () => showTrack(trackId);
    document.getElementById('quiz-total-questions').textContent = level.quiz.length;
    
    document.getElementById('quiz-results').classList.add('hidden');
    document.querySelector('.quiz-container').style.display = 'block';
    
    renderQuizQuestion();
    showView('quiz');
}

function renderQuizQuestion() {
    const { questions, currentQuestion, score } = state.quizState;
    const q = questions[currentQuestion];
    
    document.getElementById('quiz-question-num').textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
    document.getElementById('quiz-current-score').textContent = score;
    document.getElementById('quiz-question').textContent = q.question;
    
    const optionsContainer = document.getElementById('quiz-options');
    optionsContainer.innerHTML = q.options.map((opt, idx) => `
        <div class="quiz-option" data-index="${idx}">
            <span class="option-letter">${String.fromCharCode(65 + idx)}</span>
            <span class="option-text">${opt}</span>
        </div>
    `).join('');
    
    optionsContainer.querySelectorAll('.quiz-option').forEach(opt => {
        opt.addEventListener('click', () => selectAnswer(parseInt(opt.dataset.index)));
    });
    
    const feedback = document.getElementById('quiz-feedback');
    feedback.classList.remove('show', 'correct', 'incorrect');
    
    const nextBtn = document.getElementById('quiz-next-btn');
    nextBtn.disabled = true;
    nextBtn.textContent = currentQuestion === questions.length - 1 ? 'See Results' : 'Next Question →';
}

function selectAnswer(selectedIndex) {
    if (state.quizState.answered) return;
    state.quizState.answered = true;
    
    const { questions, currentQuestion } = state.quizState;
    const q = questions[currentQuestion];
    const isCorrect = selectedIndex === q.correct;
    
    if (isCorrect) state.quizState.score++;
    
    const options = document.querySelectorAll('.quiz-option');
    options.forEach((opt, idx) => {
        opt.classList.add('disabled');
        if (idx === q.correct) opt.classList.add('correct');
        if (idx === selectedIndex && !isCorrect) opt.classList.add('incorrect');
        if (idx === selectedIndex) opt.classList.add('selected');
    });
    
    const feedback = document.getElementById('quiz-feedback');
    feedback.classList.add('show', isCorrect ? 'correct' : 'incorrect');
    feedback.innerHTML = `
        <strong>${isCorrect ? '✓ Correct!' : '✗ Incorrect'}</strong>
        <p>${q.explanation}</p>
    `;
    
    document.getElementById('quiz-next-btn').disabled = false;
}

function nextQuizQuestion() {
    const { questions, currentQuestion } = state.quizState;
    
    if (currentQuestion === questions.length - 1) {
        showQuizResults();
    } else {
        state.quizState.currentQuestion++;
        state.quizState.answered = false;
        renderQuizQuestion();
    }
}

function showQuizResults() {
    const { questions, score, trackId, levelId } = state.quizState;
    const percentage = Math.round((score / questions.length) * 100);
    const passed = percentage >= 70;
    
    document.getElementById('results-icon').textContent = passed ? '🎉' : '📚';
    document.getElementById('results-title').textContent = passed ? 'Congratulations!' : 'Keep Learning!';
    document.getElementById('results-message').textContent = passed 
        ? 'You passed the quiz and unlocked the next level!'
        : 'You need 70% to pass. Review the lessons and try again.';
    document.getElementById('results-score').textContent = percentage + '%';
    
    const continueBtn = document.getElementById('results-continue');
    const retryBtn = document.getElementById('results-retry');
    const reviewBtn = document.getElementById('results-review');
    
    if (passed) {
        markLevelComplete(trackId, levelId, percentage);
        
        const track = tracks[trackId];
        const nextLevel = track.levels.find(l => l.id === levelId + 1);
        const trackComplete = state.progress[trackId].completedLevels.length === track.levels.length;
        
        if (trackComplete) {
            showGraduationCelebration(trackId);
            return;
        }
        
        if (nextLevel) {
            continueBtn.style.display = 'block';
            continueBtn.textContent = 'Continue to Next Level →';
            continueBtn.onclick = () => {
                showLesson(trackId, levelId + 1, 0);
            };
        } else {
            continueBtn.style.display = 'block';
            continueBtn.textContent = 'Back to Track';
            continueBtn.onclick = () => showTrack(trackId);
        }
        retryBtn.style.display = 'none';
    } else {
        continueBtn.style.display = 'none';
        retryBtn.style.display = 'block';
        retryBtn.onclick = () => startQuiz(trackId, levelId);
    }
    
    reviewBtn.onclick = () => showLesson(trackId, levelId, 0);
    
    document.querySelector('.quiz-container').style.display = 'none';
    document.getElementById('quiz-results').classList.remove('hidden');
}

// ==================== GRADUATION CELEBRATION ====================
function showGraduationCelebration(trackId) {
    const track = tracks[trackId];
    
    const modal = document.createElement('div');
    modal.className = 'graduation-modal';
    modal.innerHTML = `
        <div class="graduation-content">
            <div class="confetti-container" id="confetti"></div>
            <div class="graduation-icon">🎓</div>
            <h1>${track.graduationGoal || 'Congratulations!'}</h1>
            <p class="graduation-message">You've completed the ${track.title} track. You now have the knowledge to take action!</p>
            <div class="graduation-badge">
                <span class="badge-icon">${track.icon}</span>
                <span class="badge-text">${track.title} Graduate</span>
            </div>
            <div class="graduation-actions">
                <button class="grad-btn primary" onclick="closeGraduation(); showView('home')">Explore More Tracks</button>
                <a href="../../roadmap.html" class="grad-btn secondary">View Roadmap</a>
            </div>
        </div>
    `;
    
    const style = document.createElement('style');
    style.textContent = `
        .graduation-modal {
            position: fixed; top: 0; left: 0; right: 0; bottom: 0;
            background: rgba(0,0,0,0.9); display: flex; align-items: center;
            justify-content: center; z-index: 10000; animation: fadeIn 0.3s ease;
        }
        .graduation-content {
            background: var(--bg-secondary, #fff); border-radius: 24px; padding: 48px;
            text-align: center; max-width: 500px; position: relative; overflow: hidden;
            animation: slideUp 0.5s ease;
        }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { transform: translateY(50px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        .graduation-icon { font-size: 5rem; margin-bottom: 16px; animation: bounce 1s ease infinite; }
        @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        .graduation-content h1 {
            font-size: 1.8rem; margin-bottom: 16px;
            background: linear-gradient(135deg, #6366f1, #8b5cf6);
            -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        }
        .graduation-message { color: var(--text-secondary, #64748b); margin-bottom: 24px; line-height: 1.6; }
        .graduation-badge {
            display: inline-flex; align-items: center; gap: 8px;
            background: linear-gradient(135deg, #fbbf24, #f59e0b); color: #1f2937;
            padding: 12px 24px; border-radius: 50px; font-weight: 600; margin-bottom: 24px;
        }
        .badge-icon { font-size: 1.5rem; }
        .graduation-actions { display: flex; flex-direction: column; gap: 12px; }
        .grad-btn {
            padding: 14px 28px; border-radius: 8px; font-weight: 600; cursor: pointer;
            border: none; font-size: 1rem; text-decoration: none; transition: transform 0.2s;
        }
        .grad-btn:hover { transform: translateY(-2px); }
        .grad-btn.primary { background: linear-gradient(135deg, #6366f1, #8b5cf6); color: white; }
        .grad-btn.secondary { background: var(--bg-tertiary, #f1f5f9); color: var(--text-primary, #0f172a); }
        .confetti-container { position: absolute; top: 0; left: 0; right: 0; bottom: 0; pointer-events: none; overflow: hidden; }
        .confetti { position: absolute; width: 10px; height: 10px; animation: confettiFall 3s ease-out forwards; }
        @keyframes confettiFall { 0% { transform: translateY(-100%) rotate(0deg); opacity: 1; } 100% { transform: translateY(100vh) rotate(720deg); opacity: 0; } }
    `;
    document.head.appendChild(style);
    document.body.appendChild(modal);
    
    createConfetti();
    saveGraduation(trackId);
}

function closeGraduation() {
    const modal = document.querySelector('.graduation-modal');
    if (modal) modal.remove();
}

function createConfetti() {
    const container = document.getElementById('confetti');
    if (!container) return;
    const colors = ['#6366f1', '#8b5cf6', '#fbbf24', '#10b981', '#ef4444', '#3b82f6'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 2 + 's';
        confetti.style.animationDuration = (2 + Math.random() * 2) + 's';
        container.appendChild(confetti);
    }
}

function saveGraduation(trackId) {
    const graduations = JSON.parse(localStorage.getItem('graduations') || '{}');
    graduations[trackId] = { completed: true, date: new Date().toISOString().split('T')[0] };
    localStorage.setItem('graduations', JSON.stringify(graduations));
}

// ==================== EVENT LISTENERS ====================
function setupEventListeners() {
    // Theme toggle
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) themeBtn.addEventListener('click', toggleTheme);
    
    // Reset progress
    const resetBtn = document.getElementById('reset-progress');
    if (resetBtn) resetBtn.addEventListener('click', resetProgress);
    
    // Home nav
    const homeNav = document.querySelector('.nav-item[data-view="home"]');
    if (homeNav) {
        homeNav.addEventListener('click', () => showView('home'));
    }
    
    // Category tabs
    document.querySelectorAll('.category-tab').forEach(tab => {
        tab.addEventListener('click', () => filterByCategory(tab.dataset.category));
    });
    
    // Back button on track view
    const trackBackBtn = document.querySelector('#view-track .back-btn');
    if (trackBackBtn) {
        trackBackBtn.addEventListener('click', () => showView('home'));
    }
    
    // Lesson prev button
    const lessonPrev = document.getElementById('lesson-prev');
    if (lessonPrev) {
        lessonPrev.addEventListener('click', () => {
            if (state.currentTopicIndex > 0) {
                showLesson(state.currentTrack, state.currentLevel, state.currentTopicIndex - 1);
            }
        });
    }
    
    // Quiz next button
    const quizNext = document.getElementById('quiz-next-btn');
    if (quizNext) {
        quizNext.addEventListener('click', nextQuizQuestion);
    }
    
    // Final exam button
    const finalExamBtn = document.getElementById('final-exam-btn');
    if (finalExamBtn) {
        finalExamBtn.addEventListener('click', startFinalExam);
    }
    
    // Final exam navigation
    const finalExamNextBtn = document.getElementById('final-exam-next-btn');
    if (finalExamNextBtn) {
        finalExamNextBtn.addEventListener('click', nextFinalExamQuestion);
    }
    
    const finalExamBackBtn = document.getElementById('final-exam-back-btn');
    if (finalExamBackBtn) {
        finalExamBackBtn.addEventListener('click', () => showTrack(state.currentTrack));
    }
    
    const finalExamBackHome = document.getElementById('final-exam-back-home');
    if (finalExamBackHome) {
        finalExamBackHome.addEventListener('click', () => showView('home'));
    }
    
    const finalExamRetry = document.getElementById('final-exam-retry');
    if (finalExamRetry) {
        finalExamRetry.addEventListener('click', startFinalExam);
    }
}

// ==================== FINAL EXAM ====================
let finalExamState = {
    questions: [],
    currentIndex: 0,
    score: 0,
    answered: false
};

function isTrackComplete(trackId) {
    const track = tracks[trackId];
    if (!track || !track.levels) return false;
    
    const progress = state.progress[trackId];
    if (!progress || !progress.completedLevels) return false;
    
    return progress.completedLevels.length >= track.levels.length;
}

function updateFinalExamBanner(trackId) {
    const banner = document.getElementById('final-exam-banner');
    const btn = document.getElementById('final-exam-btn');
    const desc = document.getElementById('final-exam-desc');
    const completeCard = document.getElementById('track-complete-card');
    
    if (!banner) return;
    
    const track = tracks[trackId];
    const progress = state.progress[trackId];
    const isComplete = isTrackComplete(trackId);
    const examPassed = progress?.examPassed;
    
    // Hide complete card by default
    if (completeCard) completeCard.classList.add('hidden');
    
    if (examPassed) {
        // Exam already passed - show completion card
        banner.classList.add('hidden');
        if (completeCard) {
            completeCard.classList.remove('hidden');
            document.getElementById('track-complete-msg').textContent = 
                `You've mastered ${track.title}. ${track.graduationGoal}`;
            document.getElementById('complete-lessons').textContent = 
                progress.completedTopics?.length || 0;
            document.getElementById('complete-quizzes').textContent = 
                track.levels?.length || 0;
            document.getElementById('complete-exam').textContent = 
                `${progress.examScore || 0}%`;
        }
    } else if (isComplete) {
        // All levels done - unlock exam
        banner.classList.remove('locked', 'hidden');
        btn.disabled = false;
        btn.textContent = 'Take Final Exam';
        desc.textContent = `Test your knowledge across all ${track.levels.length} levels`;
    } else {
        // Not complete yet
        banner.classList.remove('hidden');
        banner.classList.add('locked');
        btn.disabled = true;
        btn.textContent = 'Locked';
        const completedLevels = progress?.completedLevels?.length || 0;
        const totalLevels = track.levels?.length || 0;
        desc.textContent = `Complete all ${totalLevels} levels to unlock (${completedLevels}/${totalLevels} done)`;
    }
}

function startFinalExam() {
    const trackId = state.currentTrack;
    const track = tracks[trackId];
    
    if (!track || !isTrackComplete(trackId)) return;
    
    // Gather questions from all levels
    finalExamState.questions = [];
    track.levels.forEach(level => {
        if (level.quiz && level.quiz.length > 0) {
            // Take 1-2 random questions from each level
            const shuffled = [...level.quiz].sort(() => Math.random() - 0.5);
            finalExamState.questions.push(...shuffled.slice(0, 2));
        }
    });
    
    // Shuffle all questions
    finalExamState.questions = finalExamState.questions.sort(() => Math.random() - 0.5);
    
    // Limit to 10-15 questions
    if (finalExamState.questions.length > 15) {
        finalExamState.questions = finalExamState.questions.slice(0, 15);
    }
    
    finalExamState.currentIndex = 0;
    finalExamState.score = 0;
    finalExamState.answered = false;
    
    // Update UI
    document.getElementById('final-exam-title').textContent = `📝 Final Exam: ${track.title}`;
    document.getElementById('final-exam-subtitle').textContent = 
        `${finalExamState.questions.length} questions from all levels`;
    document.getElementById('final-exam-total').textContent = finalExamState.questions.length;
    
    // Show exam view
    showView('final-exam');
    document.querySelector('#view-final-exam .quiz-container').style.display = 'block';
    document.getElementById('final-exam-results').classList.add('hidden');
    
    showFinalExamQuestion();
}

function showFinalExamQuestion() {
    const q = finalExamState.questions[finalExamState.currentIndex];
    if (!q) return;
    
    finalExamState.answered = false;
    
    document.getElementById('final-exam-question-num').textContent = 
        `Question ${finalExamState.currentIndex + 1} of ${finalExamState.questions.length}`;
    document.getElementById('final-exam-current-score').textContent = finalExamState.score;
    document.getElementById('final-exam-question').textContent = q.question;
    
    const optionsContainer = document.getElementById('final-exam-options');
    optionsContainer.innerHTML = q.options.map((opt, i) => `
        <button class="quiz-option" data-index="${i}">${opt}</button>
    `).join('');
    
    // Add click listeners
    optionsContainer.querySelectorAll('.quiz-option').forEach(btn => {
        btn.addEventListener('click', () => handleFinalExamAnswer(parseInt(btn.dataset.index)));
    });
    
    document.getElementById('final-exam-feedback').innerHTML = '';
    document.getElementById('final-exam-next-btn').disabled = true;
    
    // Update button text
    const isLast = finalExamState.currentIndex >= finalExamState.questions.length - 1;
    document.getElementById('final-exam-next-btn').textContent = isLast ? 'See Results' : 'Next Question →';
}

function handleFinalExamAnswer(selectedIndex) {
    if (finalExamState.answered) return;
    finalExamState.answered = true;
    
    const q = finalExamState.questions[finalExamState.currentIndex];
    const isCorrect = selectedIndex === q.correct;
    
    if (isCorrect) finalExamState.score++;
    
    // Update UI
    const options = document.querySelectorAll('#final-exam-options .quiz-option');
    options.forEach((btn, i) => {
        btn.disabled = true;
        if (i === q.correct) btn.classList.add('correct');
        if (i === selectedIndex && !isCorrect) btn.classList.add('incorrect');
    });
    
    document.getElementById('final-exam-current-score').textContent = finalExamState.score;
    document.getElementById('final-exam-feedback').innerHTML = `
        <div class="feedback ${isCorrect ? 'correct' : 'incorrect'}">
            <strong>${isCorrect ? '✓ Correct!' : '✗ Incorrect'}</strong>
            <p>${q.explanation || ''}</p>
        </div>
    `;
    
    document.getElementById('final-exam-next-btn').disabled = false;
}

function nextFinalExamQuestion() {
    if (finalExamState.currentIndex >= finalExamState.questions.length - 1) {
        showFinalExamResults();
    } else {
        finalExamState.currentIndex++;
        showFinalExamQuestion();
    }
}

function showFinalExamResults() {
    const total = finalExamState.questions.length;
    const score = finalExamState.score;
    const percent = Math.round((score / total) * 100);
    const passed = percent >= 70;
    
    document.querySelector('#view-final-exam .quiz-container').style.display = 'none';
    document.getElementById('final-exam-results').classList.remove('hidden');
    
    document.getElementById('final-exam-results-icon').textContent = passed ? '🎉' : '📚';
    document.getElementById('final-exam-results-title').textContent = 
        passed ? 'Congratulations!' : 'Keep Practicing';
    document.getElementById('final-exam-results-message').textContent = 
        passed ? 'You passed the final exam!' : 'You need 70% to pass. Review the lessons and try again.';
    document.getElementById('final-exam-results-score').textContent = `${percent}%`;
    
    if (passed) {
        // Save exam pass
        const trackId = state.currentTrack;
        if (!state.progress[trackId]) {
            state.progress[trackId] = { completedTopics: [], completedLevels: [], quizScores: {} };
        }
        state.progress[trackId].examPassed = true;
        state.progress[trackId].examScore = percent;
        saveProgress();
        
        // Show graduation celebration
        setTimeout(() => showGraduationCelebration(trackId), 500);
    }
}

// ==================== HERO PROGRESS UPDATE ====================
function updateHeroProgress() {
    const heroProgress = document.getElementById('hero-progress');
    if (!heroProgress) return;
    
    let totalTopics = 0;
    let completedTopics = 0;
    
    Object.keys(tracks).forEach(trackId => {
        const track = tracks[trackId];
        if (track && track.levels) {
            track.levels.forEach(level => {
                if (level.topics) {
                    totalTopics += level.topics.length;
                }
            });
        }
        
        const progress = state.progress[trackId];
        if (progress && progress.completedTopics) {
            completedTopics += progress.completedTopics.length;
        }
    });
    
    const percent = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;
    heroProgress.textContent = `${percent}%`;
}
