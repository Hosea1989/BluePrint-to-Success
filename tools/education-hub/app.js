// Education Hub App - Blueprint to Success
// Main application logic for the financial education hub

// ==================== DATA & STATE ====================
const tracks = {
    stocks: stocksData,
    taxes: taxesData,
    nonprofits: nonprofitsData,
    labor: laborData
};

let state = {
    currentView: 'home',
    currentTrack: null,
    currentLevel: null,
    currentTopicIndex: 0,
    quizState: null,
    progress: {}
};

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
    loadProgress();
    initTheme();
    setupEventListeners();
    renderAllTracks();
    updateAllProgress();
    showView('home');
});

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
    btn.textContent = theme === 'dark' ? '☀️' : '🌙';
}

// ==================== PROGRESS MANAGEMENT ====================
function loadProgress() {
    const saved = localStorage.getItem('educationHubProgress');
    if (saved) {
        state.progress = JSON.parse(saved);
    } else {
        // Initialize empty progress
        Object.keys(tracks).forEach(trackId => {
            state.progress[trackId] = {
                completedTopics: [],
                completedLevels: [],
                quizScores: {}
            };
        });
    }
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
        showView('home');
    }
}

function markTopicComplete(trackId, levelId, topicId) {
    const key = `${levelId}-${topicId}`;
    if (!state.progress[trackId].completedTopics.includes(key)) {
        state.progress[trackId].completedTopics.push(key);
        saveProgress();
        updateAllProgress();
    }
}

function markLevelComplete(trackId, levelId, score) {
    if (!state.progress[trackId].completedLevels.includes(levelId)) {
        state.progress[trackId].completedLevels.push(levelId);
    }
    state.progress[trackId].quizScores[levelId] = score;
    saveProgress();
    updateAllProgress();
}

function isLevelUnlocked(trackId, levelId) {
    if (levelId === 1) return true;
    return state.progress[trackId].completedLevels.includes(levelId - 1);
}

function isLevelCompleted(trackId, levelId) {
    return state.progress[trackId].completedLevels.includes(levelId);
}

function getTrackProgress(trackId) {
    const track = tracks[trackId];
    const totalTopics = track.levels.reduce((sum, level) => sum + level.topics.length, 0);
    const completedTopics = state.progress[trackId].completedTopics.length;
    return totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;
}

function getOverallProgress() {
    let total = 0;
    let completed = 0;
    Object.keys(tracks).forEach(trackId => {
        const track = tracks[trackId];
        total += track.levels.reduce((sum, level) => sum + level.topics.length, 0);
        completed += state.progress[trackId].completedTopics.length;
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
    
    // Update each track
    Object.keys(tracks).forEach(trackId => {
        const progress = getTrackProgress(trackId);
        
        // Nav progress
        const navProgress = document.getElementById(`nav-progress-${trackId}`);
        if (navProgress) navProgress.textContent = progress + '%';
        
        // Home card progress
        const homeFill = document.getElementById(`home-progress-${trackId}`);
        const homeLabel = document.getElementById(`home-label-${trackId}`);
        if (homeFill) homeFill.style.width = progress + '%';
        if (homeLabel) {
            if (progress === 0) homeLabel.textContent = 'Not Started';
            else if (progress === 100) homeLabel.textContent = 'Completed! 🎉';
            else homeLabel.textContent = progress + '% Complete';
        }
        
        // Track view progress
        const trackFill = document.getElementById(`track-progress-${trackId}`);
        const trackText = document.getElementById(`track-progress-text-${trackId}`);
        if (trackFill) trackFill.style.width = progress + '%';
        if (trackText) trackText.textContent = progress + '% Complete';
    });
}

// ==================== VIEW MANAGEMENT ====================
function showView(viewId) {
    // Hide all views
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    
    // Show target view
    const view = document.getElementById(`view-${viewId}`);
    if (view) view.classList.add('active');
    
    // Update nav
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.toggle('active', item.dataset.view === viewId);
    });
    
    state.currentView = viewId;
    
    // Scroll to top
    window.scrollTo(0, 0);
}

function showTrack(trackId) {
    state.currentTrack = trackId;
    renderTrackLevels(trackId);
    showView(trackId);
}

function showLesson(trackId, levelId, topicIndex = 0) {
    state.currentTrack = trackId;
    state.currentLevel = levelId;
    state.currentTopicIndex = topicIndex;
    
    const track = tracks[trackId];
    const level = track.levels.find(l => l.id === levelId);
    const topic = level.topics[topicIndex];
    
    // Update header
    document.getElementById('lesson-title').textContent = topic.title;
    document.getElementById('lesson-subtitle').textContent = `Level ${levelId} • ${track.title}`;
    
    // Update back button
    document.getElementById('lesson-back-btn').dataset.view = trackId;
    
    // Update content
    document.getElementById('lesson-content').innerHTML = topic.content;
    
    // Update navigation
    document.getElementById('lesson-progress').textContent = 
        `${topicIndex + 1} of ${level.topics.length}`;
    
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

// ==================== TRACK RENDERING ====================
function renderAllTracks() {
    Object.keys(tracks).forEach(trackId => {
        renderTrackLevels(trackId);
    });
}

function renderTrackLevels(trackId) {
    const container = document.getElementById(`levels-${trackId}`);
    if (!container) return;
    
    const track = tracks[trackId];
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
                        const isTopicDone = state.progress[trackId].completedTopics.includes(topicKey);
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
        
        // Toggle expand on header click
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
    
    state.quizState = {
        trackId,
        levelId,
        questions: [...level.quiz],
        currentQuestion: 0,
        score: 0,
        answered: false
    };
    
    // Update quiz header
    document.getElementById('quiz-title').textContent = `Level ${levelId} Quiz`;
    document.getElementById('quiz-subtitle').textContent = `${level.title} - ${track.title}`;
    document.getElementById('quiz-back-btn').dataset.view = trackId;
    document.getElementById('quiz-total-questions').textContent = level.quiz.length;
    
    // Hide results, show quiz
    document.getElementById('quiz-results').classList.add('hidden');
    document.querySelector('.quiz-container').style.display = 'block';
    
    renderQuizQuestion();
    showView('quiz');
}

function renderQuizQuestion() {
    const { questions, currentQuestion, score, answered } = state.quizState;
    const q = questions[currentQuestion];
    
    document.getElementById('quiz-question-num').textContent = 
        `Question ${currentQuestion + 1} of ${questions.length}`;
    document.getElementById('quiz-current-score').textContent = score;
    
    document.getElementById('quiz-question').textContent = q.question;
    
    const optionsContainer = document.getElementById('quiz-options');
    optionsContainer.innerHTML = q.options.map((opt, idx) => `
        <div class="quiz-option" data-index="${idx}">
            <span class="option-letter">${String.fromCharCode(65 + idx)}</span>
            <span class="option-text">${opt}</span>
        </div>
    `).join('');
    
    // Add click handlers
    optionsContainer.querySelectorAll('.quiz-option').forEach(opt => {
        opt.addEventListener('click', () => selectAnswer(parseInt(opt.dataset.index)));
    });
    
    // Hide feedback
    const feedback = document.getElementById('quiz-feedback');
    feedback.classList.remove('show', 'correct', 'incorrect');
    
    // Reset next button
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
    
    // Update UI
    const options = document.querySelectorAll('.quiz-option');
    options.forEach((opt, idx) => {
        opt.classList.add('disabled');
        if (idx === q.correct) opt.classList.add('correct');
        if (idx === selectedIndex && !isCorrect) opt.classList.add('incorrect');
        if (idx === selectedIndex) opt.classList.add('selected');
    });
    
    // Show feedback
    const feedback = document.getElementById('quiz-feedback');
    feedback.classList.add('show', isCorrect ? 'correct' : 'incorrect');
    feedback.innerHTML = `
        <strong>${isCorrect ? '✓ Correct!' : '✗ Incorrect'}</strong>
        <p>${q.explanation}</p>
    `;
    
    // Enable next button
    document.getElementById('quiz-next-btn').disabled = false;
}

function nextQuizQuestion() {
    const { questions, currentQuestion, score, trackId, levelId } = state.quizState;
    
    if (currentQuestion === questions.length - 1) {
        // Quiz complete
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
    
    // Update results
    document.getElementById('results-icon').textContent = passed ? '🎉' : '📚';
    document.getElementById('results-title').textContent = passed ? 'Congratulations!' : 'Keep Learning!';
    document.getElementById('results-message').textContent = passed 
        ? 'You passed the quiz and unlocked the next level!'
        : 'You need 70% to pass. Review the lessons and try again.';
    document.getElementById('results-score').textContent = percentage + '%';
    
    // Show/hide buttons based on pass/fail
    const continueBtn = document.getElementById('results-continue');
    const retryBtn = document.getElementById('results-retry');
    const reviewBtn = document.getElementById('results-review');
    
    if (passed) {
        markLevelComplete(trackId, levelId, percentage);
        
        // Check if there's a next level
        const track = tracks[trackId];
        const nextLevel = track.levels.find(l => l.id === levelId + 1);
        
        if (nextLevel) {
            continueBtn.style.display = 'block';
            continueBtn.onclick = () => {
                renderTrackLevels(trackId);
                showLesson(trackId, levelId + 1, 0);
            };
        } else {
            continueBtn.style.display = 'block';
            continueBtn.textContent = 'Back to Track';
            continueBtn.onclick = () => {
                renderTrackLevels(trackId);
                showTrack(trackId);
            };
        }
        retryBtn.style.display = 'none';
    } else {
        continueBtn.style.display = 'none';
        retryBtn.style.display = 'block';
        retryBtn.onclick = () => startQuiz(trackId, levelId);
    }
    
    reviewBtn.onclick = () => showLesson(trackId, levelId, 0);
    
    // Show results modal
    document.querySelector('.quiz-container').style.display = 'none';
    document.getElementById('quiz-results').classList.remove('hidden');
}

// ==================== EVENT LISTENERS ====================
function setupEventListeners() {
    // Theme toggle
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
    
    // Reset progress
    document.getElementById('reset-progress').addEventListener('click', resetProgress);
    
    // Navigation items
    document.querySelectorAll('.nav-item[data-view]').forEach(item => {
        item.addEventListener('click', () => {
            const view = item.dataset.view;
            if (view === 'home') {
                showView('home');
            } else if (tracks[view]) {
                showTrack(view);
            }
        });
    });
    
    // Track cards
    document.querySelectorAll('.track-card').forEach(card => {
        card.addEventListener('click', () => {
            const trackId = card.dataset.track;
            showTrack(trackId);
        });
    });
    
    // Back buttons
    document.querySelectorAll('.back-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const view = btn.dataset.view;
            if (view === 'home') {
                showView('home');
            } else if (tracks[view]) {
                showTrack(view);
            }
        });
    });
    
    // Lesson navigation
    document.getElementById('lesson-prev').addEventListener('click', () => {
        if (state.currentTopicIndex > 0) {
            showLesson(state.currentTrack, state.currentLevel, state.currentTopicIndex - 1);
        }
    });
    
    // Quiz next button
    document.getElementById('quiz-next-btn').addEventListener('click', nextQuizQuestion);
}
