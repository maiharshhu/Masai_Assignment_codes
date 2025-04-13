function mostPopularGenre(library) {
    const gCount = {};

    library.forEach(book => {
        gCount[book.genre] = (gCount[book.genre] || 0) + book.copies;
    });


    let maxCopies = 0;
    let mostPopular = '';
    for (const genre in gCount) {
        if (gCount[genre] > maxCopies) {
            maxCopies = gCount[genre];
            mostPopular = genre;
        }
    }

    return `${mostPopular} (${maxCopies} copies)`;

}

function averagePublicationYear(library) {
    const totalYears = library.reduce((sum, book) => sum + book.year, 0);
    return Math.round(totalYears / library.length);
}


function booksWithLowAvailability(library) {
    return library.filter(book => book.copies < 3).map(book => book.title);
}


// const library = [
//     { title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Fiction", year: 1925, copies: 5 },
//     { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction", year: 1960, copies: 7 },
//     { title: "A Brief History of Time", author: "Stephen Hawking", genre: "Science", year: 1988, copies: 2 },
//     { title: "Pride and Prejudice", author: "Jane Austen", genre: "Fiction", year: 1813, copies: 4 },
//     { title: "The Selfish Gene", author: "Richard Dawkins", genre: "Science", year: 1976, copies: 1 },
//     { title: "The Origin of Species", author: "Charles Darwin", genre: "Science", year: 1859, copies: 3 }
// ];


// const popularGenre = mostPopularGenre(library);
// const avgYear = averagePublicationYear(library);
// const lowAvailabilityBooks = booksWithLowAvailability(library);

// // Print the results
// console.log("Most popular genre:", popularGenre);
// console.log("Average publication year:", avgYear);
// console.log("Books with low availability:", lowAvailabilityBooks);