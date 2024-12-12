// Save data to localStorage
export function saveToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

// Retrieve data from localStorage
export function getFromLocalStorage(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null; // Return parsed data or null if key doesn't exist
}

// Remove data from localStorage
export function removeFromLocalStorage(key) {
    localStorage.removeItem(key);
}

// Clear all localStorage data
export function clearLocalStorage() {
    localStorage.clear();
}