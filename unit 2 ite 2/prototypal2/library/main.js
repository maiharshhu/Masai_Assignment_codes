// main.js
const Book = require("./Book");
const Member = require("./Member");
const PremiumMember = require("./PremiumMember");

// Create book objects
const book1 = new Book("Atomic Habits", "James Clear");
const book2 = new Book("1984", "George Orwell");
const book3 = new Book("The Alchemist", "Paulo Coelho");
const book4 = new Book("Deep Work", "Cal Newport");
const book5 = new Book("The Hobbit", "J.R.R. Tolkien");
const book6 = new Book("Clean Code", "Robert C. Martin");

// Create members
const alice = new Member("Alice");
const bob = new PremiumMember("Bob");

// Borrow books
alice.borrowBook(book1);
alice.borrowBook(book2);
alice.borrowBook(book3);
alice.borrowBook(book4); // exceeds limit

bob.borrowBook(book1); // already borrowed
bob.borrowBook(book4);
bob.borrowBook(book5);
bob.borrowBook(book6);
bob.borrowBook(book2);
bob.borrowBook(book3); // exceeds limit

// Show borrowing summary
console.log("Alice's borrowed books:", alice.borrowedBooks);
console.log("Bob's borrowed books:", bob.borrowedBooks);

// Use bind
const borrowForAlice = Member.prototype.borrowBook.bind(alice);
borrowForAlice(book6); // should fail
