// Book.ts
export class Book {
    title: string;
    author: string;
    reviews: string[];

    constructor(title: string, author: string, reviews: string[]) {
        this.title = title;
        this.author = author;
        this.reviews = reviews;
    }

    // Fixed clone method
    public clone(): Book {
        // Create a new array instance containing the same elements
        // This ensures the clone has its own memory reference for the reviews
        const clonedReviews = [...this.reviews]; 

        return new Book(this.title, this.author, clonedReviews);
    }

    display(): void {
        console.log(`${this.title} by ${this.author} | Reviews: [${this.reviews.join(", ")}]`);
    }
}