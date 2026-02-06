// Goal Tracker - Blueprint to Success

let goals = [];
let editingGoalId = null;
let currentFilter = 'all';
let goalIdCounter = 0;

const categoryLabels = {
    financial: '💰 Financial',
    career: '💼 Career',
    education: '🎓 Education',
    health: '❤️ Health',
    personal: '⭐ Personal',
    business: '🏢 Business'
};

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    loadData();
    setupListeners();
    render();
});

function initTheme() {
    const saved = localStorage.getItem('blueprintTheme') || 'light';
    document.documentElement.setAttribute('data-theme', saved);
    const btn = document.getElementById('theme-toggle');
    if (btn) {
        btn.textContent = saved === 'dark' ? '☀️' : '🌙';
        btn.addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-theme');
            const next = current === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', next);
            localStorage.setItem('blueprintTheme', next);
            btn.textContent = next === 'dark' ? '☀️' : '🌙';
            showThemeToast(next);
        });
    }
    const menuBtn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    if (menuBtn && menu) {
        menuBtn.addEventListener('click', () => {
            menu.classList.toggle('active');
            menuBtn.textContent = menu.classList.contains('active') ? '✕' : '☰';
        });
    }
}

function setupListeners() {
    document.getElementById('add-goal-btn').addEventListener('click', () => {
        editingGoalId = null;
        document.getElementById('form-title').textContent = 'Create New Goal';
        clearForm();
        document.getElementById('goal-form-wrapper').style.display = 'block';
        document.getElementById('goal-name').focus();
    });

    document.getElementById('cancel-goal-btn').addEventListener('click', () => {
        document.getElementById('goal-form-wrapper').style.display = 'none';
    });

    document.getElementById('save-goal-btn').addEventListener('click', saveGoal);

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            render();
        });
    });
}

function clearForm() {
    document.getElementById('goal-name').value = '';
    document.getElementById('goal-category').value = 'financial';
    document.getElementById('goal-date').value = '';
    document.getElementById('goal-milestones').value = '';
}

function saveGoal() {
    const name = document.getElementById('goal-name').value.trim();
    if (!name) return;

    const category = document.getElementById('goal-category').value;
    const targetDate = document.getElementById('goal-date').value;
    const milestonesText = document.getElementById('goal-milestones').value.trim();
    const milestones = milestonesText ? milestonesText.split('\n').filter(Boolean).map(m => ({
        text: m.trim(),
        done: false
    })) : [];

    if (editingGoalId !== null) {
        const goal = goals.find(g => g.id === editingGoalId);
        if (goal) {
            goal.name = name;
            goal.category = category;
            goal.targetDate = targetDate;
            // Preserve existing milestone statuses
            goal.milestones = milestones.map(m => {
                const existing = goal.milestones.find(em => em.text === m.text);
                return existing || m;
            });
        }
    } else {
        goals.push({
            id: ++goalIdCounter,
            name,
            category,
            targetDate,
            milestones,
            createdAt: new Date().toISOString()
        });
    }

    document.getElementById('goal-form-wrapper').style.display = 'none';
    saveData();
    render();
}

function toggleMilestone(goalId, milestoneIdx) {
    const goal = goals.find(g => g.id === goalId);
    if (goal && goal.milestones[milestoneIdx] !== undefined) {
        goal.milestones[milestoneIdx].done = !goal.milestones[milestoneIdx].done;
        saveData();
        render();
    }
}

function deleteGoal(goalId) {
    if (confirm('Delete this goal?')) {
        goals = goals.filter(g => g.id !== goalId);
        saveData();
        render();
    }
}

function editGoal(goalId) {
    const goal = goals.find(g => g.id === goalId);
    if (!goal) return;
    editingGoalId = goalId;
    document.getElementById('form-title').textContent = 'Edit Goal';
    document.getElementById('goal-name').value = goal.name;
    document.getElementById('goal-category').value = goal.category;
    document.getElementById('goal-date').value = goal.targetDate || '';
    document.getElementById('goal-milestones').value = goal.milestones.map(m => m.text).join('\n');
    document.getElementById('goal-form-wrapper').style.display = 'block';
    document.getElementById('goal-name').focus();
}

function getGoalProgress(goal) {
    if (!goal.milestones || goal.milestones.length === 0) return 0;
    const done = goal.milestones.filter(m => m.done).length;
    return Math.round((done / goal.milestones.length) * 100);
}

function isCompleted(goal) {
    return goal.milestones.length > 0 && goal.milestones.every(m => m.done);
}

function render() {
    // Stats
    const totalGoals = goals.length;
    const completedGoals = goals.filter(isCompleted).length;
    const activeGoals = totalGoals - completedGoals;
    const rate = totalGoals > 0 ? Math.round((completedGoals / totalGoals) * 100) : 0;

    document.getElementById('stat-total').textContent = totalGoals;
    document.getElementById('stat-active').textContent = activeGoals;
    document.getElementById('stat-completed').textContent = completedGoals;
    document.getElementById('stat-rate').textContent = rate + '%';

    // Filter goals
    let filtered = goals;
    if (currentFilter === 'active') filtered = goals.filter(g => !isCompleted(g));
    if (currentFilter === 'completed') filtered = goals.filter(isCompleted);

    const container = document.getElementById('goals-list');
    const empty = document.getElementById('empty-state');

    if (filtered.length === 0) {
        container.innerHTML = '';
        container.appendChild(empty);
        empty.style.display = 'block';
        return;
    }

    empty.style.display = 'none';

    container.innerHTML = filtered.map(goal => {
        const pct = getGoalProgress(goal);
        const completed = isCompleted(goal);
        const now = new Date();
        const deadline = goal.targetDate ? new Date(goal.targetDate) : null;
        const overdue = deadline && deadline < now && !completed;
        const deadlineStr = deadline ? deadline.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : '';

        return `
            <div class="goal-card ${completed ? 'completed-card' : ''}">
                <div class="goal-card-header">
                    <div class="goal-title-area">
                        <span class="goal-category-badge">${categoryLabels[goal.category] || goal.category}</span>
                        <div class="goal-card-title">${esc(goal.name)}</div>
                    </div>
                    <div class="goal-card-actions">
                        <button class="goal-action-btn" onclick="editGoal(${goal.id})" title="Edit">✏️</button>
                        <button class="goal-action-btn" onclick="deleteGoal(${goal.id})" title="Delete">🗑️</button>
                    </div>
                </div>
                
                ${goal.milestones.length > 0 ? `
                    <div class="goal-progress">
                        <div class="progress-header">
                            <span class="progress-text">${goal.milestones.filter(m => m.done).length} of ${goal.milestones.length} milestones</span>
                            <span class="progress-pct">${pct}%</span>
                        </div>
                        <div class="progress-track">
                            <div class="progress-fill" style="width: ${pct}%"></div>
                        </div>
                    </div>
                    <div class="milestone-list">
                        ${goal.milestones.map((m, i) => `
                            <div class="milestone-item ${m.done ? 'done' : ''}" onclick="toggleMilestone(${goal.id}, ${i})">
                                <div class="milestone-check">${m.done ? '✓' : ''}</div>
                                <span class="milestone-text">${esc(m.text)}</span>
                            </div>
                        `).join('')}
                    </div>
                ` : '<p style="font-size:0.85rem;color:var(--text-muted);margin-top:8px;">No milestones — add some to track progress!</p>'}
                
                ${deadlineStr ? `
                    <div class="goal-deadline ${overdue ? 'overdue' : ''}">
                        <span>${overdue ? '⚠️' : '📅'}</span>
                        <span>${overdue ? 'Overdue: ' : 'Due: '}${deadlineStr}</span>
                    </div>
                ` : ''}
            </div>
        `;
    }).join('');
}

function esc(str) {
    if (!str) return '';
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function saveData() {
    localStorage.setItem('goalTrackerData', JSON.stringify({ goals, goalIdCounter }));
}

function loadData() {
    try {
        const data = JSON.parse(localStorage.getItem('goalTrackerData'));
        if (data && data.goals) {
            goals = data.goals;
            goalIdCounter = data.goalIdCounter || Math.max(0, ...goals.map(g => g.id));
        }
    } catch (e) {}
}

// ==================== TOAST ====================
function showThemeToast(theme) {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'toast-container';
        container.id = 'toast-container';
        document.body.appendChild(container);
    }
    const toast = document.createElement('div');
    toast.className = 'toast info';
    toast.style.position = 'relative';
    toast.innerHTML = `
        <span class="toast-icon">${theme === 'dark' ? '🌙' : '☀️'}</span>
        <div class="toast-body">
            <div class="toast-title">${theme === 'dark' ? 'Dark mode' : 'Light mode'}</div>
            <div class="toast-message">${theme === 'dark' ? 'Easy on the eyes.' : 'Bright and clear.'}</div>
        </div>
        <button class="toast-close" onclick="this.parentElement.classList.add('toast-exit'); setTimeout(() => this.parentElement.remove(), 300)">✕</button>
        <div class="toast-progress" style="animation-duration: 2000ms"></div>
    `;
    container.appendChild(toast);
    setTimeout(() => { if (toast.parentElement) { toast.classList.add('toast-exit'); setTimeout(() => toast.remove(), 300); } }, 2000);
}
