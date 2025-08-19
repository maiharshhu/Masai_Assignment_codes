import {auth, db} from "./firebase.js"
import { signOut, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js'
import {collection, getDocs} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js"

let productsDiv=document.getElementById("products")
let searchInp=document.getElementById("search")
let logoutBtn=document.getElementById("logout")

let productsData=[]

onAuthStateChanged(auth, user=>{
    if(!user){
        window.location.href="index.html"
    }else{
        loadProducts()
    }
})
async function loadProducts(){
    const fetch=await getDocs(collection(db, "products"))
    productsData=fetch.docs.map(doc=>doc.data());
    renderProducts(productsData)
}
function renderProducts(data){
    productsDiv.innerHTML=data.map(prod=>
        `
        <div class="card">
            <img src=${prod.image} alt=${prod.title}>
            <h3 class="title">${prod.title}</h3>
            <p class="price">${prod.price}</p>
            <p class="description">${prod.description}</p>
            <p class="category">${prod.category}</p>
        </div>
        `).join("")
}
// Debouncing
function debounce(func, delay){
    let timer;
    return function(...agrs){
        clearTimeout(timer)
        timer=setTimeout(() => {
            func.apply(this, agrs)
        }, delay);
    }
}

searchInp.addEventListener("input", debounce((e)=>{
    let text=e.target.value.toLowerCase();
    let filtered=productsData.filter(prod=>prod.title.toLowerCase().includes(text))
    console.log("🚀 ~ filtered:", filtered)
    renderProducts(filtered)
}, 500))

logoutBtn.addEventListener("click",()=>signOut(auth))