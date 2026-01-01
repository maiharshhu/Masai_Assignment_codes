import { findByIdAndUpdate, findById, updateMany } from '../models/User';
import { findByIdAndUpdate as _findByIdAndUpdate, findByIdAndDelete } from '../models/Book';

// POST /rent-book: Update both User.rentedBooks and Book.rentedBy
export async function rentBook(req, res, next) {
    try {
        const { userId, bookId } = req.body;

        // Add book to user's list
        await findByIdAndUpdate(userId, { $addToSet: { rentedBooks: bookId } });

        // Add user to book's list
        const updatedBook = await _findByIdAndUpdate(
            bookId,
            { $addToSet: { rentedBy: userId } },
            { new: true }
        );

        res.status(200).json({ message: "Book rented successfully", updatedBook });
    } catch (err) { next(err); }
}

// GET /user-rentals/:userId: Retrieve all books rented by a user
export async function getUserRentals(req, res, next) {
    try {
        const user = await findById(req.params.userId).populate('rentedBooks');
        if (!user) return res.status(404).json({ message: "User not found" });
        res.status(200).json(user.rentedBooks);
    } catch (err) { next(err); }
}

// DELETE /delete-book/:bookId: Remove book and update all users' lists
export async function deleteBook(req, res, next) {
    try {
        const { bookId } = req.params;
        await updateMany({}, { $pull: { rentedBooks: bookId } }); // Clean up references
        await findByIdAndDelete(bookId);
        res.status(200).json({ message: "Book deleted and user records updated" });
    } catch (err) { next(err); }
}