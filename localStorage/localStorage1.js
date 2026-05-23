class StorageManager {
    /**
     * Safely save data to localStorage
     * @param {string} key 
     * @param {*} value - Can be string, object, array, number, etc.
     */
    static set(key, value) {
        try {
            // Convert to string safely
            const serializedValue = JSON.stringify(value);
            localStorage.setItem(key, serializedValue);
            return true;
        } catch (error) {
            if (error.name === 'QuotaExceededError') {
                console.error(`[StorageManager] Storage quota exceeded for key: ${key}. Clearing old space.`);
                // Professional strategy: clear non-essential caches, or alert the app log
            } else {
                console.error(`[StorageManager] Write failed for key: ${key}`, error);
            }
            return false;
        }
    }

    /**
     * Safely retrieve and parse data from localStorage
     * @param {string} key 
     * @param {*} defaultValue - Fallback data if key doesn't exist or is corrupted
     */
    static get(key, defaultValue = null) {
        try {
            const item = localStorage.getItem(key);
            
            // If it doesn't exist, return the provided fallback value
            if (item === null) return defaultValue;

            // Safely parse JSON back to native JS objects/arrays/strings
            return JSON.parse(item);
        } catch (error) {
            console.error(`[StorageManager] Failed parsing data for key: ${key}. Returning default.`, error);
            return defaultValue;
        }
    }

    /**
     * Safely remove a key
     */
    static remove(key) {
        try {
            localStorage.removeItem(key);
        } catch (error) {
            console.error(`[StorageManager] Failed to remove key: ${key}`, error);
        }
    }
}

// --- Practical Production Implementation Examples ---

// 1. Storing User App Preferences (Safely passes an Object)
const userConfig = { theme: 'dim', fontSize: '16px', compactMode: true };
StorageManager.set('user_preferences', userConfig);

// 2. Fetching Settings with a Default Fallback (If user clears cache, app won't break)
const activePreferences = StorageManager.get('user_preferences', { theme: 'light', fontSize: '14px' });
console.log(activePreferences.theme); // Outputs: 'dim' (or 'light' if storage was empty)

// 3. Handling Corrupted Data gracefully
// If a user manually tampers with the value in DevTools and breaks the JSON formatting, 
// the app catches it seamlessly and returns the array fallback instead of throwing a white-screen crash.
const cartItems = StorageManager.get('shopping_cart_items', []);