
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
  import { getAuth } from 'https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js'
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-analytics.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js"
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDf_KIjEVQLJoacaafKHrtOYBbPI_HnN_U",
    authDomain: "blog-app-22c15.firebaseapp.com",
    projectId: "blog-app-22c15",
    storageBucket: "blog-app-22c15.firebasestorage.app",
    messagingSenderId: "558707015469",
    appId: "1:558707015469:web:a7a2ebf5fbbe4eb1ab1da4",
    measurementId: "G-7YZJPG5K41"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const auth=getAuth(app)
  export const db=getFirestore(app)
  export const analytics = getAnalytics(app);