// Compound Interest Calculator - Blueprint to Success

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    setupListeners();
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
    // Mobile menu
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
    const inputs = ['initial', 'monthly', 'rate', 'years', 'compound'];
    inputs.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.addEventListener('input', calculate);
    });

    // Slider sync
    const yearsInput = document.getElementById('years');
    const yearsSlider = document.getElementById('years-slider');
    yearsInput.addEventListener('input', () => { yearsSlider.value = yearsInput.value; });
    yearsSlider.addEventListener('input', () => { yearsInput.value = yearsSlider.value; calculate(); });

    // Rate presets
    document.querySelectorAll('.preset-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.preset-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById('rate').value = btn.dataset.rate;
            calculate();
        });
    });
}

function calculate() {
    const P = parseFloat(document.getElementById('initial').value) || 0;
    const PMT = parseFloat(document.getElementById('monthly').value) || 0;
    const r = (parseFloat(document.getElementById('rate').value) || 0) / 100;
    const t = parseInt(document.getElementById('years').value) || 1;
    const n = parseInt(document.getElementById('compound').value) || 12;

    const ratePerPeriod = r / n;
    const periodsPerYear = n;
    const monthlyPeriods = 12;

    // Build year-by-year data
    let balance = P;
    let totalContributions = P;
    const yearData = [];

    for (let year = 1; year <= t; year++) {
        const startBalance = balance;
        
        for (let month = 1; month <= 12; month++) {
            // Add monthly contribution
            balance += PMT;
            totalContributions += PMT;
            
            // Apply interest (simplified monthly compounding)
            balance *= (1 + r / 12);
        }
        
        const yearInterest = balance - totalContributions;
        yearData.push({
            year,
            contributions: totalContributions,
            interest: yearInterest,
            balance: balance
        });
    }

    const futureValue = balance;
    const interestEarned = futureValue - totalContributions;

    // Update result cards
    document.getElementById('future-value').textContent = formatMoney(futureValue);
    document.getElementById('total-contributions').textContent = formatMoney(totalContributions);
    document.getElementById('interest-earned').textContent = formatMoney(interestEarned);

    // Update chart
    drawChart(yearData);

    // Update table
    updateTable(yearData);
}

function formatMoney(amount) {
    if (amount >= 1000000) {
        return '$' + (amount / 1000000).toFixed(2) + 'M';
    }
    return '$' + Math.round(amount).toLocaleString();
}

function drawChart(data) {
    const canvas = document.getElementById('growth-chart');
    const ctx = canvas.getContext('2d');
    
    // Set canvas resolution
    const rect = canvas.parentElement.getBoundingClientRect();
    canvas.width = rect.width * 2;
    canvas.height = rect.height * 2;
    ctx.scale(2, 2);
    
    const w = rect.width;
    const h = rect.height;
    const padding = { top: 20, right: 20, bottom: 40, left: 70 };
    const chartW = w - padding.left - padding.right;
    const chartH = h - padding.top - padding.bottom;

    ctx.clearRect(0, 0, w, h);

    if (data.length === 0) return;

    const maxVal = Math.max(...data.map(d => d.balance));
    const maxContrib = Math.max(...data.map(d => d.contributions));

    // Colors
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const textColor = isDark ? '#a1a1aa' : '#71717a';
    const gridColor = isDark ? '#27272a' : '#e4e4e7';
    const accentColor = '#4f46e5';
    const successColor = '#059669';

    // Grid lines
    ctx.strokeStyle = gridColor;
    ctx.lineWidth = 0.5;
    const gridLines = 5;
    for (let i = 0; i <= gridLines; i++) {
        const y = padding.top + (chartH / gridLines) * i;
        ctx.beginPath();
        ctx.moveTo(padding.left, y);
        ctx.lineTo(w - padding.right, y);
        ctx.stroke();

        // Y-axis labels
        const val = maxVal - (maxVal / gridLines) * i;
        ctx.fillStyle = textColor;
        ctx.font = '11px Inter, sans-serif';
        ctx.textAlign = 'right';
        ctx.fillText(formatMoney(val), padding.left - 8, y + 4);
    }

    // X-axis labels
    const step = Math.max(1, Math.floor(data.length / 8));
    data.forEach((d, i) => {
        if (i % step === 0 || i === data.length - 1) {
            const x = padding.left + (i / (data.length - 1 || 1)) * chartW;
            ctx.fillStyle = textColor;
            ctx.font = '11px Inter, sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText(`Yr ${d.year}`, x, h - padding.bottom + 20);
        }
    });

    // Contributions area (bottom layer)
    ctx.beginPath();
    ctx.moveTo(padding.left, padding.top + chartH);
    data.forEach((d, i) => {
        const x = padding.left + (i / (data.length - 1 || 1)) * chartW;
        const y = padding.top + chartH - (d.contributions / maxVal) * chartH;
        ctx.lineTo(x, y);
    });
    ctx.lineTo(padding.left + chartW, padding.top + chartH);
    ctx.closePath();
    ctx.fillStyle = isDark ? 'rgba(79, 70, 229, 0.3)' : 'rgba(79, 70, 229, 0.15)';
    ctx.fill();

    // Total balance area (top layer)
    ctx.beginPath();
    ctx.moveTo(padding.left, padding.top + chartH);
    data.forEach((d, i) => {
        const x = padding.left + (i / (data.length - 1 || 1)) * chartW;
        const y = padding.top + chartH - (d.balance / maxVal) * chartH;
        ctx.lineTo(x, y);
    });
    ctx.lineTo(padding.left + chartW, padding.top + chartH);
    ctx.closePath();
    ctx.fillStyle = isDark ? 'rgba(5, 150, 105, 0.2)' : 'rgba(5, 150, 105, 0.1)';
    ctx.fill();

    // Balance line
    ctx.beginPath();
    ctx.strokeStyle = successColor;
    ctx.lineWidth = 2.5;
    data.forEach((d, i) => {
        const x = padding.left + (i / (data.length - 1 || 1)) * chartW;
        const y = padding.top + chartH - (d.balance / maxVal) * chartH;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    });
    ctx.stroke();

    // Contributions line
    ctx.beginPath();
    ctx.strokeStyle = accentColor;
    ctx.lineWidth = 2.5;
    data.forEach((d, i) => {
        const x = padding.left + (i / (data.length - 1 || 1)) * chartW;
        const y = padding.top + chartH - (d.contributions / maxVal) * chartH;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    });
    ctx.stroke();
}

function updateTable(data) {
    const body = document.getElementById('breakdown-body');
    body.innerHTML = data.map(d => `
        <tr>
            <td>${d.year}</td>
            <td>${formatMoney(d.contributions)}</td>
            <td>${formatMoney(d.interest)}</td>
            <td>${formatMoney(d.balance)}</td>
        </tr>
    `).join('');
}

// Redraw chart on resize
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(calculate, 150);
});

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
