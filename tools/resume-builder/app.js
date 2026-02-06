// Resume Builder - Blueprint to Success

let resumeData = {
    fullName: '', email: '', phone: '', location: '', website: '',
    summary: '',
    experience: [],
    education: [],
    skills: ''
};

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    loadData();
    setupListeners();
    renderEntries();
    updatePreview();
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
    // Personal info fields
    ['fullName', 'email', 'phone', 'location', 'website', 'summary', 'skills'].forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.value = resumeData[id] || '';
            el.addEventListener('input', () => {
                resumeData[id] = el.value;
                updatePreview();
                saveData();
            });
        }
    });

    document.getElementById('add-experience').addEventListener('click', () => {
        resumeData.experience.push({ title: '', company: '', dateRange: '', description: '' });
        renderEntries();
        saveData();
    });

    document.getElementById('add-education').addEventListener('click', () => {
        resumeData.education.push({ degree: '', school: '', dateRange: '', details: '' });
        renderEntries();
        saveData();
    });

    document.getElementById('print-btn').addEventListener('click', () => window.print());
    document.getElementById('clear-btn').addEventListener('click', () => {
        if (confirm('Clear all resume data?')) {
            resumeData = {
                fullName: '', email: '', phone: '', location: '', website: '',
                summary: '', experience: [], education: [], skills: ''
            };
            ['fullName', 'email', 'phone', 'location', 'website', 'summary', 'skills'].forEach(id => {
                const el = document.getElementById(id);
                if (el) el.value = '';
            });
            renderEntries();
            updatePreview();
            saveData();
        }
    });
}

function renderEntries() {
    // Experience
    const expList = document.getElementById('experience-list');
    expList.innerHTML = resumeData.experience.map((exp, i) => `
        <div class="entry-card">
            <button class="remove-entry" data-type="experience" data-index="${i}">✕</button>
            <div class="entry-fields">
                <div class="two-col">
                    <div class="field">
                        <label>Job Title</label>
                        <input type="text" value="${esc(exp.title)}" data-type="experience" data-index="${i}" data-field="title" placeholder="Software Engineer">
                    </div>
                    <div class="field">
                        <label>Company</label>
                        <input type="text" value="${esc(exp.company)}" data-type="experience" data-index="${i}" data-field="company" placeholder="Acme Corp">
                    </div>
                </div>
                <div class="field">
                    <label>Date Range</label>
                    <input type="text" value="${esc(exp.dateRange)}" data-type="experience" data-index="${i}" data-field="dateRange" placeholder="Jan 2022 - Present">
                </div>
                <div class="field">
                    <label>Description</label>
                    <textarea rows="2" data-type="experience" data-index="${i}" data-field="description" placeholder="Key responsibilities and achievements...">${esc(exp.description)}</textarea>
                </div>
            </div>
        </div>
    `).join('');

    // Education
    const eduList = document.getElementById('education-list');
    eduList.innerHTML = resumeData.education.map((edu, i) => `
        <div class="entry-card">
            <button class="remove-entry" data-type="education" data-index="${i}">✕</button>
            <div class="entry-fields">
                <div class="two-col">
                    <div class="field">
                        <label>Degree / Certificate</label>
                        <input type="text" value="${esc(edu.degree)}" data-type="education" data-index="${i}" data-field="degree" placeholder="Bachelor of Science">
                    </div>
                    <div class="field">
                        <label>School / Institution</label>
                        <input type="text" value="${esc(edu.school)}" data-type="education" data-index="${i}" data-field="school" placeholder="University of...">
                    </div>
                </div>
                <div class="field">
                    <label>Date Range</label>
                    <input type="text" value="${esc(edu.dateRange)}" data-type="education" data-index="${i}" data-field="dateRange" placeholder="2018 - 2022">
                </div>
                <div class="field">
                    <label>Details (optional)</label>
                    <textarea rows="2" data-type="education" data-index="${i}" data-field="details" placeholder="GPA, honors, relevant coursework...">${esc(edu.details)}</textarea>
                </div>
            </div>
        </div>
    `).join('');

    // Attach entry listeners
    document.querySelectorAll('.entry-card input, .entry-card textarea').forEach(el => {
        el.addEventListener('input', () => {
            const type = el.dataset.type;
            const idx = parseInt(el.dataset.index);
            const field = el.dataset.field;
            resumeData[type][idx][field] = el.value;
            updatePreview();
            saveData();
        });
    });

    document.querySelectorAll('.remove-entry').forEach(btn => {
        btn.addEventListener('click', () => {
            const type = btn.dataset.type;
            const idx = parseInt(btn.dataset.index);
            resumeData[type].splice(idx, 1);
            renderEntries();
            updatePreview();
            saveData();
        });
    });

    updatePreview();
}

function updatePreview() {
    // Name
    document.getElementById('preview-name').textContent = resumeData.fullName || 'Your Name';

    // Contact
    const contactParts = [resumeData.email, resumeData.phone, resumeData.location, resumeData.website].filter(Boolean);
    document.getElementById('preview-contact').innerHTML = contactParts.map(c => `<span>${esc(c)}</span>`).join('');

    // Summary
    const summarySection = document.getElementById('preview-summary');
    if (resumeData.summary.trim()) {
        summarySection.style.display = 'block';
        summarySection.querySelector('p').textContent = resumeData.summary;
    } else {
        summarySection.style.display = 'none';
    }

    // Experience
    const expSection = document.getElementById('preview-experience');
    if (resumeData.experience.length > 0 && resumeData.experience.some(e => e.title || e.company)) {
        expSection.style.display = 'block';
        expSection.innerHTML = '<h2>Experience</h2>' + resumeData.experience.filter(e => e.title || e.company).map(e => `
            <div class="resume-entry">
                <div class="resume-entry-header">
                    <span class="resume-entry-title">${esc(e.title)}</span>
                    <span class="resume-entry-date">${esc(e.dateRange)}</span>
                </div>
                <div class="resume-entry-subtitle">${esc(e.company)}</div>
                ${e.description ? `<div class="resume-entry-desc">${esc(e.description)}</div>` : ''}
            </div>
        `).join('');
    } else {
        expSection.style.display = 'none';
    }

    // Education
    const eduSection = document.getElementById('preview-education');
    if (resumeData.education.length > 0 && resumeData.education.some(e => e.degree || e.school)) {
        eduSection.style.display = 'block';
        eduSection.innerHTML = '<h2>Education</h2>' + resumeData.education.filter(e => e.degree || e.school).map(e => `
            <div class="resume-entry">
                <div class="resume-entry-header">
                    <span class="resume-entry-title">${esc(e.degree)}</span>
                    <span class="resume-entry-date">${esc(e.dateRange)}</span>
                </div>
                <div class="resume-entry-subtitle">${esc(e.school)}</div>
                ${e.details ? `<div class="resume-entry-desc">${esc(e.details)}</div>` : ''}
            </div>
        `).join('');
    } else {
        eduSection.style.display = 'none';
    }

    // Skills
    const skillsSection = document.getElementById('preview-skills');
    const skillsList = resumeData.skills.split(',').map(s => s.trim()).filter(Boolean);
    if (skillsList.length > 0) {
        skillsSection.style.display = 'block';
        skillsSection.innerHTML = '<h2>Skills</h2><div class="skills-list">' + 
            skillsList.map(s => `<span class="skill-tag">${esc(s)}</span>`).join('') + 
            '</div>';
    } else {
        skillsSection.style.display = 'none';
    }
}

function esc(str) {
    if (!str) return '';
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function saveData() {
    localStorage.setItem('resumeBuilderData', JSON.stringify(resumeData));
}

function loadData() {
    try {
        const data = JSON.parse(localStorage.getItem('resumeBuilderData'));
        if (data) resumeData = { ...resumeData, ...data };
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
