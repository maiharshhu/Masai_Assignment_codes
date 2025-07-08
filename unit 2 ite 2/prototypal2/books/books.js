// books.js

const Book = require('./book');

const books = [
  new Book("The Alchemist", "Paulo Coelho", 1988),
  new Book("1984", "George Orwell", 1949),
  new Book("To Kill a Mockingbird", "Harper Lee", 1960),
  new Book("Atomic Habits", "James Clear", 2018),
];

module.exports = books;
