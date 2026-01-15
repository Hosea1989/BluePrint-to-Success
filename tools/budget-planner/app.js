// Budget Planner App - Blueprint to Success
// Saves data to localStorage for persistence

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    loadData();
    setupEventListeners();
    calculateAll();
    checkGettingStarted();
});

// ==================== GETTING STARTED GUIDE ====================
function checkGettingStarted() {
    const guide = document.getElementById('budget-getting-started');
    if (!guide) return;
    
    // Hide if already dismissed or if user has saved data before
    const dismissed = localStorage.getItem('budgetIntroDismissed');
    const hasData = localStorage.getItem('budgetPlannerData');
    
    if (dismissed || hasData) {
        guide.style.display = 'none';
    }
}

// ==================== THEME ====================
function initTheme() {
    const savedTheme = localStorage.getItem('budgetPlannerTheme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeButton(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('budgetPlannerTheme', newTheme);
    updateThemeButton(newTheme);
}

function updateThemeButton(theme) {
    const btn = document.getElementById('theme-toggle');
    btn.textContent = theme === 'dark' ? '☀️' : '🌙';
}

// ==================== DATA MANAGEMENT ====================
function saveData() {
    const data = {
        income: {
            monthly: getValue('monthly-income'),
            other: getValue('other-income')
        },
        fixedExpenses: getExpenseList('fixed-expenses'),
        subscriptions: getSubscriptionList(),
        variableExpenses: getExpenseList('variable-expenses'),
        debts: getDebtList(),
        goals: getGoalsList(),
        strategy: document.querySelector('.strategy-btn.active')?.dataset.strategy || 'avalanche'
    };
    
    localStorage.setItem('budgetPlannerData', JSON.stringify(data));
    showToast('Data saved successfully!');
}

function loadData() {
    const savedData = localStorage.getItem('budgetPlannerData');
    if (!savedData) return;
    
    try {
        const data = JSON.parse(savedData);
        
        // Load income
        setValue('monthly-income', data.income?.monthly);
        setValue('other-income', data.income?.other);
        
        // Load expenses
        if (data.fixedExpenses) loadExpenseList('fixed-expenses', data.fixedExpenses);
        if (data.subscriptions) loadSubscriptionList(data.subscriptions);
        if (data.variableExpenses) loadExpenseList('variable-expenses', data.variableExpenses);
        
        // Load debts
        if (data.debts) loadDebtList(data.debts);
        
        // Load goals
        if (data.goals) loadGoalsList(data.goals);
        
        // Load strategy
        if (data.strategy) {
            document.querySelectorAll('.strategy-btn').forEach(btn => {
                btn.classList.toggle('active', btn.dataset.strategy === data.strategy);
            });
        }
    } catch (e) {
        console.error('Error loading data:', e);
    }
}

function resetData() {
    if (confirm('Are you sure you want to reset all data? This cannot be undone.')) {
        localStorage.removeItem('budgetPlannerData');
        location.reload();
    }
}

function exportData() {
    const data = {
        exportDate: new Date().toISOString(),
        income: {
            monthly: getValue('monthly-income'),
            other: getValue('other-income'),
            total: getValue('monthly-income') + getValue('other-income')
        },
        fixedExpenses: getExpenseList('fixed-expenses'),
        subscriptions: getSubscriptionList(),
        variableExpenses: getExpenseList('variable-expenses'),
        debts: getDebtList(),
        goals: getGoalsList(),
        summary: {
            totalIncome: parseFloat(document.getElementById('total-income').textContent.replace(/[$,]/g, '')) || 0,
            totalExpenses: parseFloat(document.getElementById('total-expenses').textContent.replace(/[$,]/g, '')) || 0,
            remaining: parseFloat(document.getElementById('remaining-amount').textContent.replace(/[$,]/g, '')) || 0,
            totalDebt: parseFloat(document.getElementById('total-debt').textContent.replace(/[$,]/g, '')) || 0
        }
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `budget-export-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
    
    showToast('Data exported!');
}

// ==================== HELPERS ====================
function getValue(id) {
    return parseFloat(document.getElementById(id)?.value) || 0;
}

function setValue(id, value) {
    const el = document.getElementById(id);
    if (el && value !== undefined && value !== null) {
        el.value = value;
    }
}

function formatCurrency(amount) {
    return '$' + amount.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
}

function showToast(message, isError = false) {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();
    
    const toast = document.createElement('div');
    toast.className = `toast${isError ? ' error' : ''}`;
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => toast.remove(), 3000);
}

// ==================== EXPENSE MANAGEMENT ====================
function getExpenseList(containerId) {
    const container = document.getElementById(containerId);
    const items = container.querySelectorAll('.expense-item');
    return Array.from(items).map(item => ({
        name: item.querySelector('.expense-name').value,
        amount: parseFloat(item.querySelector('.expense-amount').value) || 0
    })).filter(item => item.name || item.amount > 0);
}

function getSubscriptionList() {
    const container = document.getElementById('subscriptions');
    const items = container.querySelectorAll('.expense-item');
    return Array.from(items).map(item => ({
        name: item.querySelector('.expense-name').value,
        amount: parseFloat(item.querySelector('.expense-amount').value) || 0,
        active: item.querySelector('.sub-active').checked
    })).filter(item => item.name || item.amount > 0);
}

function loadExpenseList(containerId, expenses) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    
    expenses.forEach(expense => {
        const item = createExpenseItem(expense.name, expense.amount);
        container.appendChild(item);
    });
    
    if (expenses.length === 0) {
        container.appendChild(createExpenseItem());
    }
}

function loadSubscriptionList(subscriptions) {
    const container = document.getElementById('subscriptions');
    container.innerHTML = '';
    
    subscriptions.forEach(sub => {
        const item = createSubscriptionItem(sub.name, sub.amount, sub.active);
        container.appendChild(item);
    });
    
    if (subscriptions.length === 0) {
        container.appendChild(createSubscriptionItem());
    }
}

function createExpenseItem(name = '', amount = '') {
    const div = document.createElement('div');
    div.className = 'expense-item';
    div.innerHTML = `
        <input type="text" placeholder="Expense name" value="${name}" class="expense-name">
        <div class="input-wrapper small">
            <span class="currency">$</span>
            <input type="number" placeholder="0" min="0" step="0.01" class="expense-amount" value="${amount || ''}">
        </div>
        <button class="remove-btn" title="Remove">×</button>
    `;
    
    div.querySelector('.remove-btn').addEventListener('click', () => {
        div.remove();
        calculateAll();
    });
    
    div.querySelectorAll('input').forEach(input => {
        input.addEventListener('input', calculateAll);
    });
    
    return div;
}

function createSubscriptionItem(name = '', amount = '', active = true) {
    const div = document.createElement('div');
    div.className = 'expense-item subscription';
    div.innerHTML = `
        <input type="checkbox" class="sub-active" ${active ? 'checked' : ''}>
        <input type="text" placeholder="Service name" value="${name}" class="expense-name">
        <div class="input-wrapper small">
            <span class="currency">$</span>
            <input type="number" placeholder="0" min="0" step="0.01" class="expense-amount" value="${amount || ''}">
        </div>
        <button class="remove-btn" title="Remove">×</button>
    `;
    
    div.querySelector('.remove-btn').addEventListener('click', () => {
        div.remove();
        calculateAll();
    });
    
    div.querySelectorAll('input').forEach(input => {
        input.addEventListener('input', calculateAll);
    });
    
    return div;
}

// ==================== DEBT MANAGEMENT ====================
function getDebtList() {
    const container = document.getElementById('debt-list');
    const items = container.querySelectorAll('.debt-item');
    return Array.from(items).map(item => ({
        name: item.querySelector('.debt-name').value,
        balance: parseFloat(item.querySelector('.debt-balance').value) || 0,
        apr: parseFloat(item.querySelector('.debt-apr').value) || 0,
        minPayment: parseFloat(item.querySelector('.debt-min-payment').value) || 0
    })).filter(item => item.name || item.balance > 0);
}

function loadDebtList(debts) {
    const container = document.getElementById('debt-list');
    container.innerHTML = '';
    
    debts.forEach(debt => {
        const item = createDebtItem(debt);
        container.appendChild(item);
    });
    
    if (debts.length === 0) {
        container.appendChild(createDebtItem());
    }
}

function createDebtItem(debt = {}) {
    const div = document.createElement('div');
    div.className = 'debt-item';
    div.innerHTML = `
        <div class="debt-header">
            <input type="text" placeholder="Debt name" value="${debt.name || ''}" class="debt-name">
            <button class="remove-btn" title="Remove">×</button>
        </div>
        <div class="debt-details">
            <div class="debt-field">
                <label>Balance</label>
                <div class="input-wrapper small">
                    <span class="currency">$</span>
                    <input type="number" placeholder="0" min="0" step="0.01" class="debt-balance" value="${debt.balance || ''}">
                </div>
            </div>
            <div class="debt-field">
                <label>APR %</label>
                <input type="number" placeholder="0" min="0" max="100" step="0.1" class="debt-apr" value="${debt.apr || ''}">
            </div>
            <div class="debt-field">
                <label>Min Payment</label>
                <div class="input-wrapper small">
                    <span class="currency">$</span>
                    <input type="number" placeholder="0" min="0" step="0.01" class="debt-min-payment" value="${debt.minPayment || ''}">
                </div>
            </div>
        </div>
    `;
    
    div.querySelector('.remove-btn').addEventListener('click', () => {
        div.remove();
        calculateAll();
    });
    
    div.querySelectorAll('input').forEach(input => {
        input.addEventListener('input', calculateAll);
    });
    
    return div;
}

// ==================== GOALS MANAGEMENT ====================
function getGoalsList() {
    const container = document.getElementById('goals-list');
    const items = container.querySelectorAll('.goal-item');
    return Array.from(items).map(item => ({
        name: item.querySelector('.goal-name').value,
        target: parseFloat(item.querySelector('.goal-target').value) || 0,
        saved: parseFloat(item.querySelector('.goal-saved').value) || 0,
        date: item.querySelector('.goal-date').value
    })).filter(item => item.name || item.target > 0);
}

function loadGoalsList(goals) {
    const container = document.getElementById('goals-list');
    container.innerHTML = '';
    
    goals.forEach(goal => {
        const item = createGoalItem(goal);
        container.appendChild(item);
    });
    
    if (goals.length === 0) {
        container.appendChild(createGoalItem());
    }
}

function createGoalItem(goal = {}) {
    const div = document.createElement('div');
    div.className = 'goal-item';
    div.innerHTML = `
        <div class="goal-header">
            <input type="text" placeholder="Goal name" value="${goal.name || ''}" class="goal-name">
            <span class="goal-deadline">
                <label>By:</label>
                <input type="date" class="goal-date" value="${goal.date || ''}">
            </span>
            <button class="remove-btn" title="Remove">×</button>
        </div>
        <div class="goal-details">
            <div class="goal-field">
                <label>Target Amount</label>
                <div class="input-wrapper small">
                    <span class="currency">$</span>
                    <input type="number" placeholder="0" min="0" step="0.01" class="goal-target" value="${goal.target || ''}">
                </div>
            </div>
            <div class="goal-field">
                <label>Saved So Far</label>
                <div class="input-wrapper small">
                    <span class="currency">$</span>
                    <input type="number" placeholder="0" min="0" step="0.01" class="goal-saved" value="${goal.saved || ''}">
                </div>
            </div>
        </div>
        <div class="goal-progress">
            <div class="progress-bar">
                <div class="progress-fill" style="width: 0%"></div>
            </div>
            <span class="progress-text">0%</span>
        </div>
    `;
    
    div.querySelector('.remove-btn').addEventListener('click', () => {
        div.remove();
        calculateAll();
    });
    
    div.querySelectorAll('input').forEach(input => {
        input.addEventListener('input', calculateAll);
    });
    
    return div;
}

// ==================== CALCULATIONS ====================
function calculateAll() {
    // Calculate total income
    const monthlyIncome = getValue('monthly-income');
    const otherIncome = getValue('other-income');
    const totalIncome = monthlyIncome + otherIncome;
    
    // Calculate fixed expenses
    const fixedExpenses = getExpenseList('fixed-expenses');
    const totalFixed = fixedExpenses.reduce((sum, e) => sum + e.amount, 0);
    
    // Calculate active subscriptions
    const subscriptions = getSubscriptionList();
    const activeSubTotal = subscriptions.filter(s => s.active).reduce((sum, s) => sum + s.amount, 0);
    document.getElementById('sub-total').textContent = formatCurrency(activeSubTotal) + '/mo';
    
    // Calculate variable expenses
    const variableExpenses = getExpenseList('variable-expenses');
    const totalVariable = variableExpenses.reduce((sum, e) => sum + e.amount, 0);
    
    // Calculate debt
    const debts = getDebtList();
    const totalDebt = debts.reduce((sum, d) => sum + d.balance, 0);
    const totalMinPayments = debts.reduce((sum, d) => sum + d.minPayment, 0);
    
    // Total expenses (including debt minimum payments)
    const totalExpenses = totalFixed + activeSubTotal + totalVariable + totalMinPayments;
    
    // Remaining
    const remaining = totalIncome - totalExpenses;
    
    // Update dashboard
    document.getElementById('total-income').textContent = formatCurrency(totalIncome);
    document.getElementById('total-expenses').textContent = formatCurrency(totalExpenses);
    document.getElementById('remaining-amount').textContent = formatCurrency(remaining);
    document.getElementById('remaining-amount').parentElement.classList.toggle('negative', remaining < 0);
    document.getElementById('total-debt').textContent = formatCurrency(totalDebt);
    
    // Update 50/30/20 breakdown
    updateBudgetBreakdown(totalIncome, totalFixed + activeSubTotal + totalMinPayments, totalVariable);
    
    // Update debt payoff order
    updateDebtPayoffOrder(debts);
    
    // Update goal progress bars
    updateGoalProgress();
}

function updateBudgetBreakdown(income, needs, wants) {
    const savings = income - needs - wants;
    
    // Target amounts (50/30/20)
    const targetNeeds = income * 0.5;
    const targetWants = income * 0.3;
    const targetSavings = income * 0.2;
    
    // Update target amounts
    document.getElementById('needs-amount').textContent = formatCurrency(targetNeeds);
    document.getElementById('wants-amount').textContent = formatCurrency(targetWants);
    document.getElementById('savings-amount').textContent = formatCurrency(targetSavings);
    
    // Update actual amounts
    document.getElementById('needs-actual').textContent = formatCurrency(needs);
    document.getElementById('wants-actual').textContent = formatCurrency(wants);
    document.getElementById('savings-actual').textContent = formatCurrency(Math.max(0, savings));
    
    // Update bar chart
    if (income > 0) {
        const needsPct = Math.min(100, (needs / income) * 100);
        const wantsPct = Math.min(100 - needsPct, (wants / income) * 100);
        const savingsPct = Math.max(0, 100 - needsPct - wantsPct);
        
        document.getElementById('needs-bar').style.width = needsPct + '%';
        document.getElementById('wants-bar').style.width = wantsPct + '%';
        document.getElementById('savings-bar').style.width = savingsPct + '%';
    } else {
        document.getElementById('needs-bar').style.width = '0%';
        document.getElementById('wants-bar').style.width = '0%';
        document.getElementById('savings-bar').style.width = '0%';
    }
}

function updateDebtPayoffOrder(debts) {
    const payoffOrderDiv = document.getElementById('payoff-order');
    const strategy = document.querySelector('.strategy-btn.active')?.dataset.strategy || 'avalanche';
    
    if (debts.length === 0 || debts.every(d => d.balance === 0)) {
        payoffOrderDiv.innerHTML = '<p class="hint">Add your debts above to see recommended payoff order</p>';
        return;
    }
    
    // Sort based on strategy
    let sortedDebts = [...debts].filter(d => d.balance > 0);
    if (strategy === 'avalanche') {
        sortedDebts.sort((a, b) => b.apr - a.apr); // Highest APR first
    } else {
        sortedDebts.sort((a, b) => a.balance - b.balance); // Lowest balance first
    }
    
    const html = `
        <p style="margin-bottom: 12px; font-weight: 500;">Pay off in this order (${strategy === 'avalanche' ? 'highest interest first' : 'smallest balance first'}):</p>
        <ol>
            ${sortedDebts.map(d => `
                <li>
                    <strong>${d.name || 'Unnamed'}</strong> - ${formatCurrency(d.balance)}
                    ${d.apr > 0 ? `<span style="color: var(--text-muted);"> @ ${d.apr}% APR</span>` : ''}
                </li>
            `).join('')}
        </ol>
    `;
    
    payoffOrderDiv.innerHTML = html;
}

function updateGoalProgress() {
    const goalItems = document.querySelectorAll('.goal-item');
    goalItems.forEach(item => {
        const target = parseFloat(item.querySelector('.goal-target').value) || 0;
        const saved = parseFloat(item.querySelector('.goal-saved').value) || 0;
        
        let percentage = 0;
        if (target > 0) {
            percentage = Math.min(100, (saved / target) * 100);
        }
        
        item.querySelector('.progress-fill').style.width = percentage + '%';
        item.querySelector('.progress-text').textContent = Math.round(percentage) + '%';
    });
}

// ==================== EVENT LISTENERS ====================
function setupEventListeners() {
    // Theme toggle
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
    
    // Income inputs
    document.getElementById('monthly-income').addEventListener('input', calculateAll);
    document.getElementById('other-income').addEventListener('input', calculateAll);
    
    // Add buttons
    document.getElementById('add-fixed-expense').addEventListener('click', () => {
        document.getElementById('fixed-expenses').appendChild(createExpenseItem());
    });
    
    document.getElementById('add-subscription').addEventListener('click', () => {
        document.getElementById('subscriptions').appendChild(createSubscriptionItem());
    });
    
    document.getElementById('add-variable-expense').addEventListener('click', () => {
        document.getElementById('variable-expenses').appendChild(createExpenseItem());
    });
    
    document.getElementById('add-debt').addEventListener('click', () => {
        document.getElementById('debt-list').appendChild(createDebtItem());
        calculateAll();
    });
    
    document.getElementById('add-goal').addEventListener('click', () => {
        document.getElementById('goals-list').appendChild(createGoalItem());
    });
    
    // Strategy buttons
    document.querySelectorAll('.strategy-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.strategy-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            calculateAll();
        });
    });
    
    // Footer actions
    document.getElementById('save-data').addEventListener('click', saveData);
    document.getElementById('export-data').addEventListener('click', exportData);
    document.getElementById('reset-data').addEventListener('click', resetData);
    
    // Setup initial expense/debt/goal listeners
    document.querySelectorAll('.expense-item input, .debt-item input, .goal-item input').forEach(input => {
        input.addEventListener('input', calculateAll);
    });
    
    document.querySelectorAll('.remove-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            this.closest('.expense-item, .debt-item, .goal-item').remove();
            calculateAll();
        });
    });
    
    // Auto-save on changes (debounced)
    let saveTimeout;
    document.addEventListener('input', () => {
        clearTimeout(saveTimeout);
        saveTimeout = setTimeout(() => {
            const data = {
                income: {
                    monthly: getValue('monthly-income'),
                    other: getValue('other-income')
                },
                fixedExpenses: getExpenseList('fixed-expenses'),
                subscriptions: getSubscriptionList(),
                variableExpenses: getExpenseList('variable-expenses'),
                debts: getDebtList(),
                goals: getGoalsList(),
                strategy: document.querySelector('.strategy-btn.active')?.dataset.strategy || 'avalanche'
            };
            localStorage.setItem('budgetPlannerData', JSON.stringify(data));
        }, 1000);
    });
}
