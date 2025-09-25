import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { g } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD3c1bA-aDToNyCzRHpai4f4-yPXMipdVk",
    authDomain: "repostash-d5db1.firebaseapp.com",
    projectId: "repostash-d5db1",
    storageBucket: "repostash-d5db1.firebasestorage.app",
    messagingSenderId: "13049961193",
    appId: "1:13049961193:web:2b72509805f23ccc8fae78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);