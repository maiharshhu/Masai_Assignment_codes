import { auth } from "../firebase-config.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const userNameEl = document.getElementById("userName");
const logoutBtn = document.getElementById("logoutBtn");

// Check user login
onAuthStateChanged(auth, user => {
    if (user) {
        userNameEl.textContent = user.displayName || user.email;
    } else {
        // Not logged in, redirect to login page
        window.location.href = "../index.html";
    }
});

// Handle logout
logoutBtn.addEventListener("click", async () => {
    await signOut(auth);
    window.location.href = "../index.html";
});


// Initialize map and set view with latitude, longitude and zoom level
const map = L.map('map').setView([28.6139, 77.209], 13); // New Delhi example coords

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Add a marker at same location
L.marker([28.6139, 77.209]).addTo(map)
    .bindPopup('Default Location')
    .openPopup();
