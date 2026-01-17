// Supabase Client Configuration
// Blueprint to Success - Authentication Layer

// =============================================================================
// CONFIGURATION - Fill these in after creating your Supabase project
// =============================================================================
// 1. Go to https://supabase.com and create a free account
// 2. Create a new project
// 3. Go to Settings > API and copy your URL and anon key
// 4. Replace the placeholders below

const SUPABASE_URL = 'YOUR_SUPABASE_URL';  // e.g., 'https://xxxxx.supabase.co'
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';  // Your public anon key

// =============================================================================
// SUPABASE CLIENT
// =============================================================================

let supabaseClient = null;

function isSupabaseConfigured() {
    return SUPABASE_URL !== 'YOUR_SUPABASE_URL' && 
           SUPABASE_ANON_KEY !== 'YOUR_SUPABASE_ANON_KEY';
}

function getSupabase() {
    if (!isSupabaseConfigured()) {
        console.warn('Supabase not configured. Using localStorage only.');
        return null;
    }
    
    if (!supabaseClient && typeof supabase !== 'undefined') {
        supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    }
    
    return supabaseClient;
}

// =============================================================================
// AUTH HELPER FUNCTIONS
// =============================================================================

async function signUpWithEmail(email, password) {
    const client = getSupabase();
    if (!client) {
        return { error: { message: 'Supabase not configured' } };
    }
    
    const { data, error } = await client.auth.signUp({
        email,
        password,
    });
    
    return { data, error };
}

async function signInWithEmail(email, password) {
    const client = getSupabase();
    if (!client) {
        return { error: { message: 'Supabase not configured' } };
    }
    
    const { data, error } = await client.auth.signInWithPassword({
        email,
        password,
    });
    
    return { data, error };
}

async function signInWithGoogle() {
    const client = getSupabase();
    if (!client) {
        return { error: { message: 'Supabase not configured' } };
    }
    
    const { data, error } = await client.auth.signInWithOAuth({
        provider: 'google',
        options: {
            redirectTo: window.location.origin + '/index.html'
        }
    });
    
    return { data, error };
}

async function signOut() {
    const client = getSupabase();
    if (!client) {
        return { error: null };
    }
    
    const { error } = await client.auth.signOut();
    return { error };
}

async function getCurrentUser() {
    const client = getSupabase();
    if (!client) {
        return null;
    }
    
    const { data: { user } } = await client.auth.getUser();
    return user;
}

async function getCurrentSession() {
    const client = getSupabase();
    if (!client) {
        return null;
    }
    
    const { data: { session } } = await client.auth.getSession();
    return session;
}

function onAuthStateChange(callback) {
    const client = getSupabase();
    if (!client) {
        return { data: { subscription: { unsubscribe: () => {} } } };
    }
    
    return client.auth.onAuthStateChange(callback);
}

// =============================================================================
// DATA SYNC HELPER FUNCTIONS
// =============================================================================

async function saveUserData(tableName, data) {
    const client = getSupabase();
    const user = await getCurrentUser();
    
    if (!client || !user) {
        // Fall back to localStorage
        return { error: null, localStorage: true };
    }
    
    const { error } = await client
        .from(tableName)
        .upsert({ 
            user_id: user.id, 
            data: data,
            updated_at: new Date().toISOString()
        }, { 
            onConflict: 'user_id' 
        });
    
    return { error, localStorage: false };
}

async function loadUserData(tableName) {
    const client = getSupabase();
    const user = await getCurrentUser();
    
    if (!client || !user) {
        // Fall back to localStorage
        return { data: null, error: null, localStorage: true };
    }
    
    const { data, error } = await client
        .from(tableName)
        .select('data')
        .eq('user_id', user.id)
        .single();
    
    return { data: data?.data || null, error, localStorage: false };
}

// Export for use in other modules
window.SupabaseAuth = {
    isConfigured: isSupabaseConfigured,
    getClient: getSupabase,
    signUpWithEmail,
    signInWithEmail,
    signInWithGoogle,
    signOut,
    getCurrentUser,
    getCurrentSession,
    onAuthStateChange,
    saveUserData,
    loadUserData
};
