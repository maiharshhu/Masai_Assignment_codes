function Book(title, author) {
    return {
        title: title,
        author: author,
        details: function() {
            console.log(`Title: ${this.title}, Author: ${this.author}`);
        }
    };
}

function createLibrary() {
    const books = [];
    return {
        addBook: function(book) {
            books.push(book);
        },
        removeBook: function(title) {
            const idx = books.findIndex(b => b.title === title);
            if (idx !== -1) {
                books.splice(idx, 1);
            }
        },
        listBooks: function() {
            books.forEach(book => book.details());
        }
    };
}


const library = createLibrary();

const book1 = Book("To Kill a Mockingbird", "Harper Lee");
const book2 = Book("1984", "George Orwell");

library.addBook(book1);
library.addBook(book2);

library.listBooks();