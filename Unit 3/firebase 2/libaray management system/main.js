const baseURL = "https://console.firebase.google.com/u/0/project/library-crud-fe7eb/database/library-crud-fe7eb-default-rtdb/data/~2F"
let editingId = null;

document.addEventListener("DOMContentLoaded", () => {
    fetchBooks();

    document.getElementById('bookForm').addEventListener("submit", function (e) {
        e.preventDefault();

        const book = {
            title: document.getElementById("bookTitle").value,
            author: document.getElementById("bookAuthor").value,
            genre: document.getElementById("bookGenre").value,
            publishedYear: parseInt(document.getElementById("bookYear").value),
            availability: document.getElementById("bookAvailable").value === "true"
        };

        const method = editingId ? "PATCH" : "POST";
        const url = editingId ? `${baseURL}/${editingId}` : baseURL;

        fetch(url, {
            method,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(book)
        })
            .then(res => res.json())
            .then(() => {
                fetchBooks();
                document.getElementById("bookForm").reset();
                editingId = null;
            });
    });
});

// ---------------------- Fetch and Display ----------------------
function fetchBooks() {
    fetch(baseURL)
        .then(res => res.json())
        .then(data => {
            const booksList = document.getElementById("booksList");
            booksList.innerHTML = "";

            data.forEach(book => {
                const div = document.createElement("div");
                div.innerHTML = `
                    <strong>${book.title}</strong> by ${book.author} (${book.genre})
                    - ${book.availability ? "Available" : "Unavailable"}
                    <button onclick="deleteBook(${book.id})">Delete</button>
                    <button onclick='editBook(${JSON.stringify(book)})'>Edit</button>
                `;
                booksList.appendChild(div);
            });
        });
}

// ---------------------- Delete Book ----------------------
function deleteBook(id) {
    fetch(`${baseURL}/${id}`, {
        method: "DELETE"
    }).then(() => fetchBooks());
}

// ---------------------- Edit Book ----------------------
function editBook(book) {
    document.getElementById("bookTitle").value = book.title;
    document.getElementById("bookAuthor").value = book.author;
    document.getElementById("bookGenre").value = book.genre;
    document.getElementById("bookYear").value = book.publishedYear;
    document.getElementById("bookAvailable").value = book.availability;
    editingId = book.id;
}
