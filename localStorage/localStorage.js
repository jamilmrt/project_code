// 1. Storing and Reading Simple Strings
localStorage.setItem("theme", "dark");
const currentTheme = localStorage.getItem("theme");
console.log(currentTheme); // Outputs: dark


// 2. Storing and Reading Objects/Arrays (Crucial Step!)
const userProfile = {
    name: "Maya",
    preferences: { notifications: true, language: "es" }
};

// You MUST stringify it before saving
localStorage.setItem("user", JSON.stringify(userProfile));

// You MUST parse it when pulling it back out
const savedUser = JSON.parse(localStorage.getItem("user"));
console.log(savedUser.name); // Outputs: Maya


// 3. Removing Data
localStorage.removeItem("theme"); // Deletes just the "theme" key

// 4. Clear Everything
localStorage.clear(); // Wipes out all localStorage data for your domain