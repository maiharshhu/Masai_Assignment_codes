import { auth } from "./firebase-config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

let islogin = true;

const formTitle = document.getElementById('auth-title');
const submitBtn = document.getElementById('submit-btn');
const toggleText = document.getElementById('toggle-text');
const toggleLink = document.getElementById('toggle-link');
const authform = document.getElementById('auth-form');


function updateFormUI() {
    if (islogin) {
        formTitle.textContent = "Login";
        submitBtn.textContent = "Log In";
        toggleText.innerHTML = `Don't Have account? <a href="#
    id="toggle-link">Sign Up</a>`
    } else {
        formTitle.textContent = "Sign Up";
        submitBtn.textContent = "Sign Up";
        toggleText.innerHTML = `Already Have an account? <a href="#
    id="toggle-link">Login</a>`
    }
}

// rebind after toggle link after innerHtml change
document.getElementById('toggle-link').addEventListener('click', toggleMode);

function toggleMode(e) {
    e.preventDefault();

}

const email = document.getElementById("email").value.trim();
const password = document.getElementById("password").value;
if (isLogin) {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    alert("Logged in successfully");
} else {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    alert("Account created successfully");
};
)

