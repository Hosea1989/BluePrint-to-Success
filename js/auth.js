// Authentication State Manager
// Blueprint to Success - Handles user state across the application

// =============================================================================
// AUTH STATE
// =============================================================================

const AuthManager = {
    user: null,
    initialized: false,
    listeners: [],
    
    // Initialize auth state on page load
    async init() {
        if (this.initialized) return;
        
        // Check if Supabase is configured
        if (window.SupabaseAuth && window.SupabaseAuth.isConfigured()) {
            // Get current session
            const user = await window.SupabaseAuth.getCurrentUser();
            this.setUser(user);
            
            // Listen for auth changes
            window.SupabaseAuth.onAuthStateChange((event, session) => {
                this.setUser(session?.user || null);
                
                if (event === 'SIGNED_IN') {
                    this.onSignIn(session.user);
                } else if (event === 'SIGNED_OUT') {
                    this.onSignOut();
                }
            });
        }
        
        this.initialized = true;
        this.updateUI();
    },
    
    // Set current user and notify listeners
    setUser(user) {
        this.user = user;
        this.notifyListeners();
        this.updateUI();
    },
    
    // Add listener for auth changes
    addListener(callback) {
        this.listeners.push(callback);
    },
    
    // Notify all listeners of auth change
    notifyListeners() {
        this.listeners.forEach(cb => cb(this.user));
    },
    
    // Check if user is logged in
    isLoggedIn() {
        return this.user !== null;
    },
    
    // Get current user
    getUser() {
        return this.user;
    },
    
    // Get user display name (email or name)
    getUserDisplayName() {
        if (!this.user) return null;
        return this.user.user_metadata?.full_name || 
               this.user.user_metadata?.name || 
               this.user.email?.split('@')[0] || 
               'User';
    },
    
    // Get user avatar URL
    getUserAvatar() {
        if (!this.user) return null;
        return this.user.user_metadata?.avatar_url || 
               this.user.user_metadata?.picture || 
               null;
    },
    
    // =============================================================================
    // AUTH ACTIONS
    // =============================================================================
    
    async signIn(email, password) {
        if (!window.SupabaseAuth || !window.SupabaseAuth.isConfigured()) {
            return { error: { message: 'Authentication not configured. Please set up Supabase.' } };
        }
        
        const result = await window.SupabaseAuth.signInWithEmail(email, password);
        
        if (!result.error && result.data?.user) {
            this.setUser(result.data.user);
        }
        
        return result;
    },
    
    async signUp(email, password) {
        if (!window.SupabaseAuth || !window.SupabaseAuth.isConfigured()) {
            return { error: { message: 'Authentication not configured. Please set up Supabase.' } };
        }
        
        const result = await window.SupabaseAuth.signUpWithEmail(email, password);
        return result;
    },
    
    async signInWithGoogle() {
        if (!window.SupabaseAuth || !window.SupabaseAuth.isConfigured()) {
            return { error: { message: 'Authentication not configured. Please set up Supabase.' } };
        }
        
        const result = await window.SupabaseAuth.signInWithGoogle();
        return result;
    },
    
    async signOut() {
        if (window.SupabaseAuth && window.SupabaseAuth.isConfigured()) {
            await window.SupabaseAuth.signOut();
        }
        this.setUser(null);
    },
    
    // =============================================================================
    // AUTH EVENT HANDLERS
    // =============================================================================
    
    onSignIn(user) {
        console.log('User signed in:', user.email);
        // Could trigger data sync here
        this.syncLocalDataToCloud();
    },
    
    onSignOut() {
        console.log('User signed out');
    },
    
    // =============================================================================
    // DATA SYNC
    // =============================================================================
    
    async syncLocalDataToCloud() {
        if (!this.isLoggedIn()) return;
        
        // Sync education progress
        const eduProgress = localStorage.getItem('educationProgress');
        if (eduProgress) {
            await window.SupabaseAuth.saveUserData('education_progress', JSON.parse(eduProgress));
        }
        
        // Sync budget data
        const budgetData = localStorage.getItem('budgetPlannerData');
        if (budgetData) {
            await window.SupabaseAuth.saveUserData('budget_data', JSON.parse(budgetData));
        }
        
        // Sync guides progress
        const guidesProgress = localStorage.getItem('guidesProgress');
        if (guidesProgress) {
            await window.SupabaseAuth.saveUserData('guides_progress', JSON.parse(guidesProgress));
        }
    },
    
    async loadCloudData() {
        if (!this.isLoggedIn()) return;
        
        // Load education progress
        const eduResult = await window.SupabaseAuth.loadUserData('education_progress');
        if (eduResult.data && !eduResult.localStorage) {
            localStorage.setItem('educationProgress', JSON.stringify(eduResult.data));
        }
        
        // Load budget data
        const budgetResult = await window.SupabaseAuth.loadUserData('budget_data');
        if (budgetResult.data && !budgetResult.localStorage) {
            localStorage.setItem('budgetPlannerData', JSON.stringify(budgetResult.data));
        }
        
        // Load guides progress
        const guidesResult = await window.SupabaseAuth.loadUserData('guides_progress');
        if (guidesResult.data && !guidesResult.localStorage) {
            localStorage.setItem('guidesProgress', JSON.stringify(guidesResult.data));
        }
    },
    
    // =============================================================================
    // UI UPDATES
    // =============================================================================
    
    updateUI() {
        // Update auth button in nav
        const authBtn = document.getElementById('auth-nav-btn');
        const authDropdown = document.getElementById('auth-dropdown');
        const userNameEl = document.getElementById('auth-user-name');
        const userAvatarEl = document.getElementById('auth-user-avatar');
        
        if (this.isLoggedIn()) {
            // Show logged in state
            if (authBtn) {
                authBtn.classList.add('logged-in');
                authBtn.innerHTML = this.getAuthButtonHTML(true);
            }
            if (userNameEl) {
                userNameEl.textContent = this.getUserDisplayName();
            }
            if (userAvatarEl && this.getUserAvatar()) {
                userAvatarEl.src = this.getUserAvatar();
                userAvatarEl.style.display = 'block';
            }
        } else {
            // Show logged out state
            if (authBtn) {
                authBtn.classList.remove('logged-in');
                authBtn.innerHTML = this.getAuthButtonHTML(false);
            }
        }
    },
    
    getAuthButtonHTML(isLoggedIn) {
        if (isLoggedIn) {
            const avatar = this.getUserAvatar();
            const name = this.getUserDisplayName();
            return `
                <div class="auth-user">
                    ${avatar ? `<img src="${avatar}" alt="" class="auth-avatar">` : '<span class="auth-avatar-placeholder">👤</span>'}
                    <span class="auth-name">${name}</span>
                    <span class="auth-chevron">▼</span>
                </div>
            `;
        } else {
            return `<span>Sign In</span>`;
        }
    },
    
    // =============================================================================
    // NAV DROPDOWN SETUP
    // =============================================================================
    
    setupNavDropdown() {
        const authBtn = document.getElementById('auth-nav-btn');
        const dropdown = document.getElementById('auth-dropdown');
        
        if (!authBtn || !dropdown) return;
        
        // Toggle dropdown on click
        authBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            
            if (!this.isLoggedIn()) {
                // Go to login page
                window.location.href = this.getAuthPagePath('login.html');
                return;
            }
            
            // Toggle dropdown for logged in users
            dropdown.classList.toggle('show');
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', () => {
            dropdown.classList.remove('show');
        });
        
        // Handle dropdown actions
        dropdown.addEventListener('click', async (e) => {
            const action = e.target.closest('[data-action]')?.dataset.action;
            
            if (action === 'logout') {
                await this.signOut();
                dropdown.classList.remove('show');
                window.location.reload();
            } else if (action === 'profile') {
                // Could navigate to profile page
                console.log('Profile clicked');
            }
        });
    },
    
    // Get correct path to auth pages based on current location
    getAuthPagePath(page) {
        const path = window.location.pathname;
        
        if (path.includes('/tools/')) {
            return `../../auth/${page}`;
        } else if (path.includes('/guides/')) {
            return `../auth/${page}`;
        } else {
            return `auth/${page}`;
        }
    }
};

// =============================================================================
// INITIALIZE ON LOAD
// =============================================================================

document.addEventListener('DOMContentLoaded', () => {
    AuthManager.init();
    AuthManager.setupNavDropdown();
});

// Export for global access
window.AuthManager = AuthManager;
