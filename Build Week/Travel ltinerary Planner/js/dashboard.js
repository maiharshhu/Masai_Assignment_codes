// ===========================
// 🔹 Firebase Authentication
// ===========================

// Import Firebase dependencies (uncomment if needed)
// import { auth } from "../firebase-config.js";
// import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// Elements
// const userNameEl = document.getElementById("userName");
// const logoutBtn = document.getElementById("logoutBtn");

// // Check user login status
// onAuthStateChanged(auth, user => {
//     if (user) {
//         userNameEl.textContent = user.displayName || user.email;
//     } else {
//         // Redirect if not logged in
//         window.location.href = "../index.html";
//     }
// });

// // Handle logout
// logoutBtn.addEventListener("click", async () => {
//     await signOut(auth);
//     window.location.href = "../index.html";
// });


// ===========================
// 🔹 Navbar Toggle
// ===========================

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute(
        "class",
        isOpen ? "ri-close-line" : "ri-menu-3-line"
    );
});

// Close nav when clicking on a link
navLinks.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});


// ===========================
// 🔹 Scroll Reveal Animations
// ===========================

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header__content h1", { ...scrollRevealOption });
ScrollReveal().reveal(".header__content .section__description", { ...scrollRevealOption, delay: 500 });
ScrollReveal().reveal(".header__content form", { ...scrollRevealOption, delay: 1000 });
ScrollReveal().reveal(".header__content img", { ...scrollRevealOption, origin: "left", delay: 1500 });

ScrollReveal().reveal(".about__content .section__header", { ...scrollRevealOption });
ScrollReveal().reveal(".about__content .section__description", { ...scrollRevealOption, delay: 500 });
ScrollReveal().reveal(".about__signature", { ...scrollRevealOption, delay: 1000 });

ScrollReveal().reveal(".tour__card", { ...scrollRevealOption, interval: 500 });
ScrollReveal().reveal(".destination__card", { ...scrollRevealOption, interval: 500 });
ScrollReveal().reveal(".blog__card", { ...scrollRevealOption, interval: 500 });


// ===========================
// 🔹 Swiper (Slider)
// ===========================

const swiper = new Swiper(".swiper", {
    loop: true,
});


// ===========================
// 🔹 Banner Auto Scroll Effect
// ===========================

const banner = document.querySelector(".banner__wrapper");
if (banner) {   // Safety check
    const bannerImages = Array.from(banner.children);

    bannerImages.forEach((item) => {
        const duplicateNode = item.cloneNode(true);
        duplicateNode.setAttribute("aria-hidden", "true");
        banner.appendChild(duplicateNode);
    });
}
