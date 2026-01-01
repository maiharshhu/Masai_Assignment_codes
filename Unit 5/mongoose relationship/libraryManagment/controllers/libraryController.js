import { findById } from '../models/Book';
import { findByIdAndUpdate, findById as _findById } from '../models/Member';

// POST /borrow-book: Borrow a book
export async function borrowBook(req, res) {
    try {
        const { bookId, memberId } = req.body;
        const book = await findById(bookId);

        if (book.status === 'borrowed') {
            return res.status(400).json({ message: "Book is already borrowed" });
        }

        // Update Book status and borrowers list
        book.status = 'borrowed';
        book.borrowers.push(memberId);
        await book.save();

        // Add book to member's borrowed list
        await findByIdAndUpdate(memberId, { $push: { borrowedBooks: bookId } });

        res.status(200).json({ message: "Book borrowed successfully", book });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

// GET /member-borrowed-books/:memberId: Get books with details
export async function getMemberBooks(req, res) {
    try {
        const member = await _findById(req.params.memberId).populate('borrowedBooks');
        res.status(200).json(member.borrowedBooks);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}