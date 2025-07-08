// app.js

const books = require('./books');

// Map through books and get summaries
const summaries = books.map(book => book.getSummary());

// Log the summaries
console.log("Book Summaries:");
console.log(summaries);
