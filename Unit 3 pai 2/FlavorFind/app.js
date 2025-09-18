import { auth } from "./firebase-config.js";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

// Dom elements
const formTitle = document.getElementById("formTitle");
const nameField = document.getElementById("nameField");
const confirmField = document.getElementById("confirmField");
const submitBtn = document.getElementById("submitBtn");
const switchText = document.getElementById("switchText");
const toggleBtn = document.getElementById("toggleBtn");
const message = document.getElementById("message");

let mode = "login"; // default

// Toggle between Login <-> Signup
toggleBtn.addEventListener("click", () => {
    if (mode === "login") {
        mode = "signup";
        formTitle.textContent = "Sign up";
        submitBtn.textContent = "Sign up";
        switchText.textContent = "Already have an account?";
        toggleBtn.textContent = "Login";
        nameField.classList.remove("hidden");
        confirmField.classList.remove("hidden");
    } else {
        mode = "login";
        formTitle.textContent = "Login";
        submitBtn.textContent = "Login";
        switchText.textContent = "Don't have an account?";
        toggleBtn.textContent = "Sign up";
        nameField.classList.add("hidden");
        confirmField.classList.add("hidden");
    }
});

// Form submit
document.getElementById("authForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    message.textContent = "";

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (mode === "signup") {
        const name = document.getElementById("name").value.trim();
        const confirm = document.getElementById("confirm").value.trim();
        if (!name || !email || !password || !confirm) {
            message.textContent = "All fields required!";
            message.className = "text-red-500 text-center text-sm mt-3";
            return;
        }
        if (password !== confirm) {
            message.textContent = "Passwords do not match!";
            message.className = "text-red-500 text-center text-sm mt-3";
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            message.textContent = "Signup successful ✅";
            message.className = "text-green-600 text-center text-sm mt-3";
            console.log("User created:", userCredential.user);
        }

        catch (error) {
            message.textContent = error.message;
            message.className = "text-red-500 text-center text-sm mt-3"
        }

    } else {
        if (!email || !password) {
            message.textContent = "Email and password required!";
            message.className = "text-red-500 text-center text-sm mt-3";
            return;
        }
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            message.textContent = "Login Successful ✅ Redirecting...";
            message.className = "text-green-600 text-center text-sm mt-3";

            setTimeout(() => {
                window.location.href = "dashboard.html";
            }, 500)

        } catch (error) {
            message.textContent = error.message;
            message.className = "text-red-500 text-center text-sm mt-3";
        }
    }
});

onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("User Logged in", user.email);
    }
    else {
        console.log("No user Logged in")
    }
});