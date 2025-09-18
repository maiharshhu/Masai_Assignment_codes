import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: Window.env,
    authDomain: "flavourfind-e5374.firebaseapp.com",
    projectId: "flavourfind-e5374",
    storageBucket: "flavourfind-e5374.firebasestorage.app",
    messagingSenderId: "29151309878",
    appId: "1:29151309878:web:4451901c4bfccd8b702897"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
