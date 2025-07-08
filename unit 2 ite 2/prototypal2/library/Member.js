// Member.js
function Member(name) {
  this.name = name;
  this.borrowedBooks = [];
}

Member.prototype.borrowBook = function(book) {
  if (this.borrowedBooks.length >= 3) {
    console.log(`${this.name} can't borrow more than 3 books.`);
    return;
  }

  if (book.isAvailable) {
    book.isAvailable = false;
    this.borrowedBooks.push(book.title);
    console.log(`${this.name} borrowed "${book.title}".`);
  } else {
    console.log(`"${book.title}" is already borrowed.`);
  }
};

module.exports = Member;
