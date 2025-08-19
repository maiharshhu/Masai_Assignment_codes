import { auth } from "./firebase.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js'

let isLogin=true;

document.getElementById("toggle-text").addEventListener("click", (e) => {
    if (e.target.id === "toggle-btn") {
        isLogin = !isLogin;
        document.getElementById("form-title").innerText = isLogin ? "Login" : "Sign Up";
        document.getElementById("auth-btn").innerText = isLogin ? "Login" : "Sign Up";
        document.getElementById("toggle-text").innerHTML = isLogin
            ? `Don't have an account? <span id="toggle-btn">Sign up</span>`
            : `Already have an account?  <span id="toggle-btn">Login</span>`;
    }
});

document.getElementById("auth-btn").addEventListener("click", ()=>{
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    if(isLogin){
        signInWithEmailAndPassword(auth, email, password)
        .then(()=>window.location.href="products.html")
        .catch((err)=>{
            if(err.message=="Firebase: Error (auth/invalid-credential)."){
                alert("this user is not authenticated")
            }
        })
    }else{
        createUserWithEmailAndPassword(auth, email, password)
        .then(()=>window.location.href="products.html")
        .catch((err)=>{
            if(err.message=="Firebase: Error (auth/invalid-credential)."){
                alert("this user is not authenticated")
            }
        })
    }
    
})
