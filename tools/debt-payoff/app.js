// Debt Payoff Calculator - Blueprint to Success

let debts = [];
let strategy = 'avalanche';
let debtIdCounter = 0;

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    setupListeners();
    loadData();
    if (debts.length === 0) {
        addDebt('Credit Card', 5000, 19.99, 150);
        addDebt('Student Loan', 25000, 5.5, 280);
        addDebt('Car Loan', 12000, 6.9, 350);
    }
    renderDebts();
    calculate();
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
    document.querySelectorAll('.strategy-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.strategy-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            strategy = btn.dataset.strategy;
            calculate();
        });
    });
    document.getElementById('add-debt-btn').addEventListener('click', () => {
        addDebt('New Debt', 0, 0, 0);
        renderDebts();
    });
    document.getElementById('extra-payment').addEventListener('input', () => {
        calculate();
    });
}

function addDebt(name, balance, rate, minPayment) {
    debts.push({ id: ++debtIdCounter, name, balance, rate, minPayment });
}

function removeDebt(id) {
    debts = debts.filter(d => d.id !== id);
    renderDebts();
    calculate();
}

function renderDebts() {
    const container = document.getElementById('debts-list');
    container.innerHTML = debts.map(d => `
        <div class="debt-card" data-id="${d.id}">
            <div class="debt-card-header">
                <input class="debt-name-input" value="${d.name}" data-field="name" data-id="${d.id}" placeholder="Debt name">
                <button class="remove-debt-btn" data-id="${d.id}" title="Remove">✕</button>
            </div>
            <div class="debt-fields">
                <div class="debt-field">
                    <label>Balance ($)</label>
                    <input type="number" value="${d.balance}" data-field="balance" data-id="${d.id}" min="0" step="100">
                </div>
                <div class="debt-field">
                    <label>Interest Rate (%)</label>
                    <input type="number" value="${d.rate}" data-field="rate" data-id="${d.id}" min="0" max="50" step="0.1">
                </div>
                <div class="debt-field">
                    <label>Min Payment ($)</label>
                    <input type="number" value="${d.minPayment}" data-field="minPayment" data-id="${d.id}" min="0" step="10">
                </div>
            </div>
        </div>
    `).join('');

    // Attach listeners
    container.querySelectorAll('input').forEach(input => {
        input.addEventListener('input', () => {
            const id = parseInt(input.dataset.id);
            const field = input.dataset.field;
            const debt = debts.find(d => d.id === id);
            if (!debt) return;
            if (field === 'name') debt.name = input.value;
            else debt[field] = parseFloat(input.value) || 0;
            calculate();
        });
    });

    container.querySelectorAll('.remove-debt-btn').forEach(btn => {
        btn.addEventListener('click', () => removeDebt(parseInt(btn.dataset.id)));
    });
}

function calculate() {
    if (debts.length === 0 || debts.every(d => d.balance <= 0)) {
        document.getElementById('results-section').style.display = 'none';
        saveData();
        return;
    }

    const extraPayment = parseFloat(document.getElementById('extra-payment').value) || 0;

    // Clone debts for simulation
    let simDebts = debts.filter(d => d.balance > 0).map(d => ({
        ...d,
        remaining: d.balance,
        totalPaid: 0,
        monthsPaid: 0,
        paidOff: false
    }));

    // Sort by strategy
    if (strategy === 'avalanche') {
        simDebts.sort((a, b) => b.rate - a.rate);
    } else {
        simDebts.sort((a, b) => a.remaining - b.remaining);
    }

    const schedule = [];
    let month = 0;
    const maxMonths = 600; // 50 years safety

    while (simDebts.some(d => !d.paidOff) && month < maxMonths) {
        month++;
        let extraLeft = extraPayment;

        // First pay minimums
        simDebts.forEach(d => {
            if (d.paidOff) return;
            const interest = d.remaining * (d.rate / 100 / 12);
            d.remaining += interest;
            const payment = Math.min(d.remaining, d.minPayment);
            d.remaining -= payment;
            d.totalPaid += payment;
            
            if (d.remaining <= 0.01) {
                d.remaining = 0;
                d.paidOff = true;
                d.monthsPaid = month;
            }
        });

        // Then apply extra payment to target debt
        for (let d of simDebts) {
            if (d.paidOff || extraLeft <= 0) continue;
            const payment = Math.min(d.remaining, extraLeft);
            d.remaining -= payment;
            d.totalPaid += payment;
            extraLeft -= payment;
            
            if (d.remaining <= 0.01) {
                d.remaining = 0;
                d.paidOff = true;
                d.monthsPaid = month;
                // Freed-up minimum now becomes extra
                extraLeft += d.minPayment;
            }
        }

        // Re-sort if snowball
        if (strategy === 'snowball') {
            simDebts.sort((a, b) => {
                if (a.paidOff && !b.paidOff) return 1;
                if (!a.paidOff && b.paidOff) return -1;
                return a.remaining - b.remaining;
            });
        }

        // Record significant months for schedule
        if (month <= 12 || month % 3 === 0 || simDebts.some(d => d.monthsPaid === month)) {
            simDebts.forEach(d => {
                if (!d.paidOff || d.monthsPaid === month) {
                    schedule.push({
                        month,
                        name: d.name,
                        payment: d.minPayment + (simDebts.indexOf(d) === 0 ? extraPayment : 0),
                        remaining: d.remaining,
                        paidOff: d.paidOff && d.monthsPaid === month
                    });
                }
            });
        }
    }

    // Minimum-only simulation for comparison
    let minSimDebts = debts.filter(d => d.balance > 0).map(d => ({
        ...d, remaining: d.balance, totalPaid: 0, paidOff: false
    }));
    let minMonth = 0;
    while (minSimDebts.some(d => !d.paidOff) && minMonth < maxMonths) {
        minMonth++;
        minSimDebts.forEach(d => {
            if (d.paidOff) return;
            d.remaining += d.remaining * (d.rate / 100 / 12);
            const payment = Math.min(d.remaining, d.minPayment);
            d.remaining -= payment;
            d.totalPaid += payment;
            if (d.remaining <= 0.01) { d.paidOff = true; d.remaining = 0; }
        });
    }

    const totalPaid = simDebts.reduce((s, d) => s + d.totalPaid, 0);
    const minTotalPaid = minSimDebts.reduce((s, d) => s + d.totalPaid, 0);
    const interestSaved = minTotalPaid - totalPaid;

    // Payoff date
    const payoffDate = new Date();
    payoffDate.setMonth(payoffDate.getMonth() + month);
    const dateStr = payoffDate.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });

    // Update UI
    document.getElementById('results-section').style.display = 'block';
    document.getElementById('payoff-date').textContent = dateStr;
    document.getElementById('total-paid').textContent = '$' + Math.round(totalPaid).toLocaleString();
    document.getElementById('interest-saved').textContent = interestSaved > 0 ? '$' + Math.round(interestSaved).toLocaleString() : '$0';

    // Timeline
    const maxPayoffMonth = Math.max(...simDebts.map(d => d.monthsPaid || month));
    document.getElementById('timeline-bars').innerHTML = simDebts.map(d => `
        <div class="timeline-bar">
            <span class="timeline-label">${d.name}</span>
            <div class="timeline-track">
                <div class="timeline-fill" style="width: ${(d.monthsPaid / maxPayoffMonth) * 100}%">
                    <span class="timeline-months">${d.monthsPaid} mo</span>
                </div>
            </div>
        </div>
    `).join('');

    // Schedule table (limited)
    const limitedSchedule = schedule.slice(0, 100);
    document.getElementById('schedule-body').innerHTML = limitedSchedule.map(s => `
        <tr class="${s.paidOff ? 'paid-off-row' : ''}">
            <td>${s.month}</td>
            <td>${s.name}${s.paidOff ? ' ✅' : ''}</td>
            <td>$${Math.round(s.payment).toLocaleString()}</td>
            <td>$${Math.round(s.remaining).toLocaleString()}</td>
        </tr>
    `).join('');

    saveData();
}

function saveData() {
    localStorage.setItem('debtPayoffData', JSON.stringify({ debts, strategy }));
}

function loadData() {
    try {
        const data = JSON.parse(localStorage.getItem('debtPayoffData'));
        if (data && data.debts && data.debts.length > 0) {
            debts = data.debts;
            strategy = data.strategy || 'avalanche';
            debtIdCounter = Math.max(...debts.map(d => d.id), 0);
            document.querySelectorAll('.strategy-btn').forEach(btn => {
                btn.classList.toggle('active', btn.dataset.strategy === strategy);
            });
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
