# Blueprint to Success — Architecture Reference

> **Last updated:** February 2026
> **Purpose:** High-level reference doc for AI agents and developers working on this codebase.

---

## What This Project Is

Blueprint to Success is a **static front-end web app** (no build tools, no frameworks) that teaches financial literacy, career skills, tech, legal rights, and life fundamentals through interactive learning tracks, guides, and tools. Everything is vanilla HTML/CSS/JS. Data persists in `localStorage` by default, with optional Supabase cloud sync.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | Vanilla HTML, CSS, JavaScript (no React, no bundler) |
| **Styling** | CSS custom properties (variables) for theming, Inter font from Google Fonts |
| **Data Storage** | `localStorage` (primary), Supabase (optional cloud sync) |
| **Auth** | Supabase Auth (email/password + Google OAuth) — optional, app works without it |
| **Hosting** | Static files — can be served from anywhere (GitHub Pages, Netlify, etc.) |

---

## Project Structure

```
BluePrint-to-Success/
├── index.html              # Dashboard / landing page
├── roadmap.html            # User journey roadmap (3 phases)
├── style.css               # Global styles (2300+ lines, shared across root pages)
├── app.js                  # Dashboard logic (progress, search, streaks, budget preview)
│
├── js/
│   ├── supabase.js         # Supabase client config + auth/data helpers
│   └── auth.js             # AuthManager singleton (state, UI, sync)
│
├── auth/
│   ├── login.html          # Login page
│   ├── signup.html         # Signup page
│   └── style.css           # Auth-specific styles (also loaded on other pages for nav dropdown)
│
├── guides/
│   ├── index.html          # Guide library index (filterable by category)
│   ├── finance/            # 11 HTML guide pages
│   ├── tech/               # 12 HTML guide pages
│   ├── personal/           # 3 HTML guide pages
│   └── business/           # 5 HTML guide pages
│
├── tools/
│   ├── budget-planner/
│   │   ├── index.html      # Budget planner tool
│   │   ├── style.css       # Budget planner styles
│   │   └── app.js          # Budget planner logic
│   │
│   └── education-hub/
│       ├── index.html      # Education hub SPA
│       ├── style.css       # Education hub styles (1400+ lines)
│       ├── app.js          # Education hub logic (1190+ lines)
│       └── data/           # Track curriculum data (28 JS files)
│           ├── stocks.js
│           ├── taxes.js
│           ├── ... (see full list below)
│           └── communication.js
│
└── archive/                # Original markdown guides (source material)
```

---

## Key Pages & What They Do

### `index.html` (Dashboard)
- Landing page with hero, progress cards, tool links, guide categories
- Reads from `localStorage` to show Education Hub progress, guides read, budget stats
- Has global search (Cmd+K), streak tracker, "continue where you left off"
- Scroll reveal animations, animated stat counters

### `roadmap.html` (Journey Roadmap — Pathway System)
- **Pathway Selector:** Users choose from 7 identity-based paths (Entrepreneur, Tech Career, Financial Freedom, Brand Builder, Community Leader, Life Ready, Career Climber) or "Explore All Content"
- **Pathway Dashboard:** Selected pathway shows 4 curated phases with tracks, guides, and tools — vertical timeline with progress bars, checkmarks, and locked/active/completed states
- **Explore All:** Browse all 28 tracks and 31 guides organized by category with completion status
- **Achievements:** Per-pathway badges (phase completion) + cross-pathway badges (First Step, Bookworm, Track Master, Blueprint Graduate)
- **Progress:** Reads `educationHubProgress`, `guidesProgress`, and `budgetPlannerData` from localStorage
- **Pathway saved** to `localStorage` key: `blueprintPathway`

### `guides/` (Static Guide Pages)
- Each guide is a standalone HTML page with its own content
- Guides share `style.css` from root and include `js/supabase.js` + `js/auth.js`
- Guide progress (read/bookmarked) stored in `localStorage` key: `guidesProgress`
- Format: `{ read: ['credit-scores', 'budgeting', ...], bookmarked: [...] }`

### `tools/budget-planner/` (Budget Tool)
- Income, fixed expenses, subscriptions, variable expenses, debts, savings goals
- All data in `localStorage` key: `budgetPlannerData`
- Self-contained (own HTML/CSS/JS)

### `tools/education-hub/` (Education Hub — THE MAIN FEATURE)
- Single-page app with view switching (home → track → lesson → quiz → final exam)
- Sidebar navigation + collapsible category dropdowns on home
- See detailed section below

---

## Education Hub — Deep Dive

### How It Works

1. **Track data files** (`data/*.js`) each export a global variable (e.g., `const stocksData = {...}`)
2. **`index.html`** loads all data files via `<script>` tags, then loads `app.js`
3. **`app.js`** calls `initializeTracks()` which reads global variables and registers them
4. **Categories** are defined in `trackCategories` object in `app.js`
5. **Views**: home | track | lesson | quiz | final-exam (switched via `showView()`)

### Track Data File Format

Every track data file follows this exact structure:

```javascript
const trackNameData = {
    id: 'trackname',              // Unique ID (matches key in trackCategories)
    title: 'Track Title',         // Display name
    icon: '📈',                   // Emoji icon
    description: 'Description',   // Short description
    whyItMatters: 'Optional...',  // Optional "Why This Matters" text
    graduationGoal: 'Goal text',  // Shown on track page
    levels: [
        {
            id: 1,                // Sequential integer (1-5 typically)
            title: 'Level Title',
            subtitle: 'Level subtitle',
            topics: [
                {
                    id: 'topic-slug',       // Unique within track
                    title: 'Topic Title',
                    content: `<h2>...</h2>   // HTML string with lesson content
                        <h3>...</h3>
                        <ul><li>...</li></ul>
                        <div class="highlight">
                            <strong>Key Point:</strong> ...
                        </div>
                    `
                },
                // ... more topics
            ],
            quiz: {
                questions: [
                    {
                        question: 'Question text?',
                        options: ['A', 'B', 'C', 'D'],
                        correct: 1,           // 0-indexed
                        explanation: 'Why B is correct...'
                    },
                    // ... more questions (typically 2-3 per level)
                ]
            }
        },
        // ... levels 2-5
    ]
};
```

### Adding a New Track (Step by Step)

1. **Create data file:** `tools/education-hub/data/yourtrack.js`
   - Define `const yourtrackData = { ... }` following the format above
   - Use 5 levels, 2-4 topics per level, 2-3 quiz questions per level
2. **Add script tag:** In `tools/education-hub/index.html`, add `<script src="data/yourtrack.js"></script>` in the appropriate category section
3. **Register in app.js:**
   - Add track ID to the appropriate category in `trackCategories` object
   - Add `if (typeof yourtrackData !== 'undefined') tracks.yourtrack = { ...yourtrackData, category: 'categoryname' };` in `initializeTracks()`
4. That's it — the app dynamically renders everything from the data

### Current Tracks (28 total)

| Category | Tracks |
|----------|--------|
| **Finance** (12) | stocks, realestate, crypto, credit, retirement, taxes, personalfinance, debt, banking, insurance, studentloans, estateplanning |
| **Business** (5) | business, freelancing, negotiation, marketing, nonprofits |
| **Tech** (2) | ai, cybersecurity |
| **Civic & Rights** (3) | politics, california, labor |
| **Life Skills** (4) | emergency, career, health, housing |
| **Personal Growth** (2) | productivity, communication |

### Education Hub Progress Storage

Stored in `localStorage` key: `educationHubProgress`

```json
{
  "stocks": {
    "completedTopics": ["1-what-is-stock", "1-why-invest", "2-exchanges"],
    "completedLevels": [1],
    "quizScores": { "1": 100 }
  },
  "credit": { ... }
}
```

- **Topic key format:** `{levelId}-{topicId}` (e.g., `"1-what-is-stock"`)
- **Level unlocking:** Level 1 always unlocked. Level N requires level N-1 in `completedLevels`
- **Quiz pass threshold:** 70% (hardcoded in app.js)
- **Final exam:** Unlocked when all levels completed. Pulls random questions from all levels.

---

## Styling System

### Theme

- **Light/Dark mode** via `[data-theme="dark"]` on `<html>` element
- Toggled by theme button, saved to `localStorage` key: `blueprintTheme` (root) or `educationHubTheme` (education hub)
- CSS custom properties define all colors — change the variables, change everything

### Key CSS Variables

```css
--bg-primary       /* Page background */
--bg-secondary     /* Card background */
--bg-tertiary      /* Subtle background */
--text-primary     /* Main text */
--text-secondary   /* Muted text */
--accent-primary   /* #6366f1 (indigo) */
--accent-secondary /* #8b5cf6 (purple) */
--accent-gradient  /* linear-gradient(135deg, #6366f1, #8b5cf6) */
--success          /* #10b981 (green) */
--warning          /* #f59e0b (amber) */
--danger           /* #ef4444 (red) */
```

### Two Separate Stylesheets

1. **`/style.css`** — Root pages (dashboard, roadmap, guides). ~2300 lines.
2. **`/tools/education-hub/style.css`** — Education hub specific. ~1400 lines.
3. **`/auth/style.css`** — Auth dropdown + login/signup pages. Loaded on all pages for the nav dropdown.

---

## Authentication System

### Architecture

- **Optional** — The entire app works without auth (localStorage only)
- **Supabase** powers auth when configured
- **Config:** `js/supabase.js` — replace `YOUR_SUPABASE_URL` and `YOUR_SUPABASE_ANON_KEY`
- **Auth methods:** Email/password, Google OAuth

### Key Objects

- **`window.SupabaseAuth`** (from `js/supabase.js`): Low-level Supabase client wrapper
- **`window.AuthManager`** (from `js/auth.js`): Singleton managing auth state, UI updates, data sync

### Data Sync Flow

When a user signs in, `AuthManager.syncLocalDataToCloud()` pushes localStorage data to Supabase tables. On subsequent logins, `loadCloudData()` pulls from Supabase back to localStorage.

**Supabase tables expected:** `education_progress`, `budget_data`, `guides_progress`

---

## localStorage Keys Reference

| Key | Used By | Format |
|-----|---------|--------|
| `educationHubProgress` | Education Hub | `{ trackId: { completedTopics: [], completedLevels: [], quizScores: {} } }` |
| `budgetPlannerData` | Budget Planner | `{ income: {}, fixedExpenses: [], subscriptions: [], variableExpenses: [], debts: [], savingsGoals: [] }` |
| `guidesProgress` | Guides | `{ read: [], bookmarked: [] }` |
| `blueprintTheme` | Dashboard/Root | `"light"` or `"dark"` |
| `educationHubTheme` | Education Hub | `"light"` or `"dark"` |
| `blueprintVisits` | Dashboard | `["2026-02-01", "2026-02-02", ...]` (streak tracking) |
| `blueprintIntroDismissed` | Dashboard | `"true"` |
| `eduHubIntroDismissed` | Education Hub | `"true"` |
| `eduHubExpandedCategories` | Education Hub | `["finance", "tech"]` |
| `blueprintPathway` | Roadmap | `"entrepreneur"`, `"tech"`, `"finance"`, `"brandbuilder"`, `"civic"`, `"lifeready"`, or `"career"` |

---

## Common Patterns

### Adding Content to an Existing Track

Open the data file (e.g., `data/stocks.js`), find the level, and add a new topic object to the `topics` array. Add quiz questions to the level's `quiz.questions` array. No other files need changing.

### Lesson Content HTML Classes

Inside topic `content` strings, these CSS classes are styled:

```html
<div class="highlight">     <!-- Colored callout box (accent background) -->
<div class="example">       <!-- Example box (subtle background) -->
<div class="definition">    <!-- Definition box -->
<div class="warning">        <!-- Warning/caution box -->
```

### Navigation Between Pages

All navigation is relative paths. Pattern for tools:
- From education hub to root: `../../index.html`
- From guides to root: `../index.html`
- From root to tools: `tools/education-hub/index.html`

### Script Loading Order (Every Page)

1. Supabase CDN (`<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2">`)
2. Data files (education hub only)
3. `js/supabase.js` — Supabase client config
4. `js/auth.js` — AuthManager
5. Page-specific `app.js`

---

## Known Quirks / Things to Be Aware Of

1. **Two theme keys:** Dashboard uses `blueprintTheme`, Education Hub uses `educationHubTheme`. They're independent.
2. **Quiz format varies:** Some older tracks have `quiz: [...]` (array directly) instead of `quiz: { questions: [...] }`. The app.js handles both formats.
3. **No build step:** Everything is loaded directly. No bundling, no minification, no transpiling.
4. **Emoji as icons:** Tracks and categories use emoji for icons, not icon libraries.
5. **Progress is per-device:** Without Supabase configured, each browser/device has independent progress.
6. **Education Hub is an SPA:** Only `index.html` is loaded; views are switched with JS. Direct-linking to a specific track isn't supported.
7. **`auth/style.css` is loaded everywhere** because it styles the nav dropdown that appears on every page.
