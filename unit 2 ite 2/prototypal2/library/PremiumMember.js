// PremiumMember.js
const Member = require("./Member");

function PremiumMember(name) {
  Member.call(this, name); // Inherit properties
  this.specialCollectionAccess = true;
}

// Inherit prototype
PremiumMember.prototype = Object.create(Member.prototype);
PremiumMember.prototype.constructor = PremiumMember;

// Override borrowBook
PremiumMember.prototype.borrowBook = function(book) {
  if (this.borrowedBooks.length >= 5) {
    console.log(`${this.name} can't borrow more than 5 books.`);
    return;
  }

  // Reuse parent borrowBook
  Member.prototype.borrowBook.call(this, book);
};

module.exports = PremiumMember;
