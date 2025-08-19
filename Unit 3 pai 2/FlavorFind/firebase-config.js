import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDdJv7YLaSYzMbwkNo6Mfmww0izKBwK9oA",
    authDomain: "flavourfind-e5374.firebaseapp.com",
    projectId: "flavourfind-e5374",
    storageBucket: "flavourfind-e5374.firebasestorage.app",
    messagingSenderId: "29151309878",
    appId: "1:29151309878:web:4451901c4bfccd8b702897"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);