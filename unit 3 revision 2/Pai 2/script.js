import { auth, db } from "./firebase-config.js";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.3.0/firebase-auth.js";

import {
    ref, set, get, child, update
} from "https://www.gstatic.com/firebasejs/12.3.0/firebase-database.js";

const authForm = document.getElementById("auth-form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const authError = document.getElementById('auth-error');
const switchToSignup = document.getElementById('switch-to-signup');
const authSection = document.getElementById('auth-section');
const appSection = document.getElementById('app-section');
const logoutBtn = document.getElementById('logout-btn');

const searchInput = document.getElementById('search-input')
const repoList = document.getElementById('repo-list');
const stashedReposList = document.getElementById('stashed-repos');

let isSignUp = false;
let debouncedTimer = null;


switchToSignup.addEventListener('click', () => {
    isSignUp = !isSignUp;
    switchToSignup.textContent = isSignUp ? "Switch to Sign In" : "Switch to Sign Up";
    authForm.querySelector("button").textContent = isSignUp ? "Sign Up" : "Sign In";
    authError.textContent = "";
});


authForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = emailInput.value;
    const password = passwordInput.value;

    try {
        if (isSignUp) {
            await createUserWithEmailAndPassword(auth, email, password);
        } else {
            await signInWithEmailAndPassword(auth, email, password);
        }
    } catch (error) {
        authError.textContent = error.message;
    }
});


logoutBtn.addEventListener("click", async () => {
    await signOut(auth);
});


onAuthStateChanged(auth, (user) => {
    if (user) {
        authSection.style.display = "none";
        appSection.style.display = "block";
        displayStashedRepos();

        const lastSearch = localStorage.getItem("lastSearch");
        if (lastSearch) {
            searchInput.value = lastSearch;
            searchGitHubRepos(lastSearch);
        }
    } else {
        authSection.style.display = "block";
        appSection.style.display = "none";
    }
});


searchInput.addEventListener("input", () => {
    const query = searchInput.value.trim();
    localStorage.setItem("lastSearch", query);

    clearTimeout(debouncedTimer);
    debouncedTimer = setTimeout(() => {
        if (query) {
            searchGitHubRepos(query);
        } else {
            repoList.innerHTML = "";
        }
    }, 500);
});

async function searchGitHubRepos(query) {
    try {
        const response = await fetch(`https://api.github.com/search/repositories?q=${query}`);
        const data = await response.json();
        displayRepoList(data.items || []);
    } catch (error) {
        console.error("GitHub API Error", error);
    }
}

function displayRepoList(repos) {
    repoList.innerHTML = "";
    repos.forEach(repo => {
        const li = document.createElement("li");
        li.textContent = repo.full_name;

        const stashBtn = document.createElement("button");
        stashBtn.textContent = "Stash";
        stashBtn.onclick = () => stashRepo(repo);

        li.appendChild(stashBtn);
        repoList.appendChild(li);
    });
}


async function stashRepo(repo) {
    const user = auth.currentUser;
    if (!user) return;

    const userRef = ref(db, 'users/' + user.uid + '/stashedRepos/' + repo.full_name);

    try {
        await set(userRef, {
            full_name: repo.full_name,
            html_url: repo.html_url
        });
    } catch (error) {
        console.error("Error saving repo:", error);
    }
}


async function displayStashedRepos() {
    const user = auth.currentUser;
    if (!user) return;

    const userRef = ref(db, 'users/' + user.uid + '/stashedRepos');

    try {
        const snapshot = await get(userRef);
        if (snapshot.exists()) {
            const stashedRepos = snapshot.val();
            stashedReposList.innerHTML = '';
            Object.keys(stashedRepos).forEach((repoId) => {
                const repo = stashedRepos[repoId];
                const li = document.createElement("li");

                const a = document.createElement("a");
                a.href = repo.html_url;
                a.textContent = repo.full_name;
                a.target = "_blank";

                li.appendChild(a);
                stashedReposList.appendChild(li);
            });
        } else {
            stashedReposList.innerHTML = "<p>No stashed repos yet!</p>";
        }
    } catch (error) {
        console.error("Error retrieving stashed repos:", error);
    }
}
