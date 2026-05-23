


// Code Example: Storing, Reading, and Deleting Cookies in JavaScript

// 1. Create (Set) a Cookie

function setCookie(name, value, daysToLive) {
    let expires = "";
    if (daysToLive) {
        const date = new Date();
        // Convert days to milliseconds
        date.setTime(date.getTime() + (daysToLive * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    // Secure & SameSite are modern best practices for privacy/security
    document.cookie = `${name}=${encodeURIComponent(value)}${expires}; path=/; SameSite=Lax`;
}

// 2. Read (Get) a Cookie
function getCookie(name) {
    const cookieArr = document.cookie.split(";");
    
    for(let i = 0; i < cookieArr.length; i++) {
        let cookiePair = cookieArr[i].split("=");
        
        // Remove whitespace at the beginning of the cookie name
        if (name === cookiePair[0].trim()) {
            return decodeURIComponent(cookiePair[1]);
        }
    }
    return null;
}

// 3. Delete a Cookie
function deleteCookie(name) {
    // To delete a cookie, just set its expiration date to the past
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

// --- How to use them ---

// Set a cookie named "username" that lasts for 7 days
setCookie("username", "Alex Mercer", 7);

// Read the cookie
const user = getCookie("username");
console.log(user); // Outputs: Alex Mercer

// Delete the cookie
deleteCookie("username");