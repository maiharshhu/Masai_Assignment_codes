import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, remove, onValue, serverTimestamp } from "firebase/database";
import { firebaseConfig } from "./firebase-config";

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const saveQuotesRef = ref(database, 'saveQuotes')

// all dom elements
const quotesContainer = document.getElementById('quotes-container');
const savedQuotesContainer = document.getElementById('saved-quotes-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const tagButtons = document.querySelectorAll('.tag-btn');
const sortByDropdown = document.getElementById('sort-by');

let currentPage = 1;
let currentTag = localStorage.getItem('lasttag') || "";


async function fetchQuotes(page = 1, tags = "") {
    const url = ""

}