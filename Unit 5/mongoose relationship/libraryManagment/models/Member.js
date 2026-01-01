import { Schema, model } from 'mongoose';

const memberSchema = new Schema({
    name: { type: String, required: true, minlength: 3 },
    email: { type: String, required: true, unique: true },
    borrowedBooks: [{ type: Schema.Types.ObjectId, ref: 'Book' }] // Reference to Book
});

export default model('Member', memberSchema);