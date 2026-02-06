// Net Worth Tracker - Blueprint to Success

let assets = {
    cash: [],
    investments: [],
    property: [],
    other: []
};

let liabilities = {
    mortgage: [],
    student: [],
    credit: [],
    other: []
};

let snapshots = [];
let itemIdCounter = 0;

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    loadData();
    setupListeners();
    renderAll();
    updateTotals();
    drawChart();
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
            drawChart();
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
    document.querySelectorAll('.add-inline-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const type = btn.dataset.type;
            const category = btn.dataset.category;
            addItem(type, category, '', 0);
            renderCategory(type, category);
            updateTotals();
        });
    });

    document.getElementById('add-asset-btn').addEventListener('click', () => {
        addItem('assets', 'cash', '', 0);
        renderCategory('assets', 'cash');
        updateTotals();
    });

    document.getElementById('add-liability-btn').addEventListener('click', () => {
        addItem('liabilities', 'credit', '', 0);
        renderCategory('liabilities', 'credit');
        updateTotals();
    });

    document.getElementById('snapshot-btn').addEventListener('click', takeSnapshot);
}

function getStore(type) {
    return type === 'assets' ? assets : liabilities;
}

function addItem(type, category, name, value) {
    const store = getStore(type);
    store[category].push({ id: ++itemIdCounter, name, value });
    saveData();
}

function removeItem(type, category, id) {
    const store = getStore(type);
    store[category] = store[category].filter(item => item.id !== id);
    renderCategory(type, category);
    updateTotals();
    saveData();
}

function renderCategory(type, category) {
    const store = getStore(type);
    const container = document.getElementById(`${type}-${category}`);
    const items = store[category];

    container.innerHTML = items.map(item => `
        <div class="nw-item" data-id="${item.id}">
            <input class="nw-item-name" value="${esc(item.name)}" placeholder="Item name" 
                   data-type="${type}" data-category="${category}" data-id="${item.id}" data-field="name">
            <input class="nw-item-value" type="number" value="${item.value}" placeholder="0"
                   data-type="${type}" data-category="${category}" data-id="${item.id}" data-field="value">
            <button class="nw-item-remove" onclick="removeItem('${type}','${category}',${item.id})">✕</button>
        </div>
    `).join('');

    // Attach input listeners
    container.querySelectorAll('input').forEach(input => {
        input.addEventListener('input', () => {
            const id = parseInt(input.dataset.id);
            const field = input.dataset.field;
            const item = store[input.dataset.category].find(i => i.id === id);
            if (!item) return;
            if (field === 'name') item.name = input.value;
            else item.value = parseFloat(input.value) || 0;
            updateTotals();
            saveData();
        });
    });
}

function renderAll() {
    ['cash', 'investments', 'property', 'other'].forEach(cat => renderCategory('assets', cat));
    ['mortgage', 'student', 'credit', 'other'].forEach(cat => renderCategory('liabilities', cat));
}

function sumItems(store) {
    return Object.values(store).flat().reduce((sum, item) => sum + (item.value || 0), 0);
}

function updateTotals() {
    const totalAssets = sumItems(assets);
    const totalLiabilities = sumItems(liabilities);
    const netWorth = totalAssets - totalLiabilities;

    document.getElementById('total-assets').textContent = formatMoney(totalAssets);
    document.getElementById('total-liabilities').textContent = formatMoney(totalLiabilities);

    const nwEl = document.getElementById('net-worth');
    nwEl.textContent = (netWorth < 0 ? '-' : '') + formatMoney(Math.abs(netWorth));
}

function formatMoney(amount) {
    if (amount >= 1000000) return '$' + (amount / 1000000).toFixed(1) + 'M';
    return '$' + Math.round(amount).toLocaleString();
}

function takeSnapshot() {
    const totalAssets = sumItems(assets);
    const totalLiabilities = sumItems(liabilities);
    const netWorth = totalAssets - totalLiabilities;

    snapshots.push({
        date: new Date().toISOString(),
        assets: totalAssets,
        liabilities: totalLiabilities,
        netWorth
    });

    saveData();
    drawChart();

    // Quick visual feedback
    const btn = document.getElementById('snapshot-btn');
    const original = btn.textContent;
    btn.textContent = '✅ Saved!';
    setTimeout(() => { btn.textContent = original; }, 1500);
}

function drawChart() {
    const canvas = document.getElementById('nw-chart');
    const ctx = canvas.getContext('2d');
    const rect = canvas.parentElement.getBoundingClientRect();
    canvas.width = rect.width * 2;
    canvas.height = rect.height * 2;
    ctx.scale(2, 2);

    const w = rect.width;
    const h = rect.height;
    ctx.clearRect(0, 0, w, h);

    if (snapshots.length < 2) {
        ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--text-muted') || '#999';
        ctx.font = '13px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('Save at least 2 snapshots to see your trend', w / 2, h / 2);
        return;
    }

    const padding = { top: 20, right: 20, bottom: 40, left: 70 };
    const chartW = w - padding.left - padding.right;
    const chartH = h - padding.top - padding.bottom;

    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const textColor = isDark ? '#a1a1aa' : '#71717a';
    const gridColor = isDark ? '#27272a' : '#e4e4e7';

    const values = snapshots.map(s => s.netWorth);
    const minVal = Math.min(...values);
    const maxVal = Math.max(...values);
    const range = maxVal - minVal || 1;

    // Grid
    ctx.strokeStyle = gridColor;
    ctx.lineWidth = 0.5;
    for (let i = 0; i <= 4; i++) {
        const y = padding.top + (chartH / 4) * i;
        ctx.beginPath();
        ctx.moveTo(padding.left, y);
        ctx.lineTo(w - padding.right, y);
        ctx.stroke();

        const val = maxVal - (range / 4) * i;
        ctx.fillStyle = textColor;
        ctx.font = '10px Inter, sans-serif';
        ctx.textAlign = 'right';
        ctx.fillText(formatMoney(val), padding.left - 8, y + 4);
    }

    // X labels
    snapshots.forEach((s, i) => {
        if (snapshots.length <= 12 || i % Math.ceil(snapshots.length / 8) === 0) {
            const x = padding.left + (i / (snapshots.length - 1)) * chartW;
            const d = new Date(s.date);
            ctx.fillStyle = textColor;
            ctx.font = '10px Inter, sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText(d.toLocaleDateString('en-US', { month: 'short', year: '2-digit' }), x, h - padding.bottom + 18);
        }
    });

    // Zero line if applicable
    if (minVal < 0 && maxVal > 0) {
        const zeroY = padding.top + chartH - ((0 - minVal) / range) * chartH;
        ctx.strokeStyle = isDark ? '#555' : '#bbb';
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        ctx.moveTo(padding.left, zeroY);
        ctx.lineTo(w - padding.right, zeroY);
        ctx.stroke();
        ctx.setLineDash([]);
    }

    // Area fill
    ctx.beginPath();
    ctx.moveTo(padding.left, padding.top + chartH);
    snapshots.forEach((s, i) => {
        const x = padding.left + (i / (snapshots.length - 1)) * chartW;
        const y = padding.top + chartH - ((s.netWorth - minVal) / range) * chartH;
        ctx.lineTo(x, y);
    });
    ctx.lineTo(padding.left + chartW, padding.top + chartH);
    ctx.closePath();
    ctx.fillStyle = isDark ? 'rgba(79, 70, 229, 0.2)' : 'rgba(79, 70, 229, 0.1)';
    ctx.fill();

    // Line
    ctx.beginPath();
    ctx.strokeStyle = '#4f46e5';
    ctx.lineWidth = 2.5;
    snapshots.forEach((s, i) => {
        const x = padding.left + (i / (snapshots.length - 1)) * chartW;
        const y = padding.top + chartH - ((s.netWorth - minVal) / range) * chartH;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    });
    ctx.stroke();

    // Dots
    snapshots.forEach((s, i) => {
        const x = padding.left + (i / (snapshots.length - 1)) * chartW;
        const y = padding.top + chartH - ((s.netWorth - minVal) / range) * chartH;
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fillStyle = '#4f46e5';
        ctx.fill();
        ctx.strokeStyle = isDark ? '#18181b' : '#ffffff';
        ctx.lineWidth = 2;
        ctx.stroke();
    });
}

function esc(str) {
    if (!str) return '';
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function saveData() {
    localStorage.setItem('netWorthData', JSON.stringify({ assets, liabilities, snapshots, itemIdCounter }));
}

function loadData() {
    try {
        const data = JSON.parse(localStorage.getItem('netWorthData'));
        if (data) {
            if (data.assets) assets = data.assets;
            if (data.liabilities) liabilities = data.liabilities;
            if (data.snapshots) snapshots = data.snapshots;
            if (data.itemIdCounter) itemIdCounter = data.itemIdCounter;
        }
    } catch (e) {}
}

window.addEventListener('resize', () => {
    clearTimeout(window._nwResize);
    window._nwResize = setTimeout(drawChart, 150);
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
