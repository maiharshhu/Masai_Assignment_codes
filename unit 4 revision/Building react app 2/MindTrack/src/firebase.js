// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCdbXf19MTcf57xDjo-9lgA-eps6HYr8vQ",
    authDomain: "mindtrack-4b902.firebaseapp.com",
    projectId: "mindtrack-4b902",
    storageBucket: "mindtrack-4b902.firebasestorage.app",
    messagingSenderId: "609707351332",
    appId: "1:609707351332:web:68772f66b873d8a75e27b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the services so we can use them in other files
export const auth = getAuth(app);
export const db = getFirestore(app);