import { Schema, model } from 'mongoose';

const bookSchema = new Schema({
    title: { type: String, required: true, minlength: 3 },
    author: { type: String, required: true },
    status: {
        type: String,
        required: true,
        enum: ["available", "borrowed"],
        default: "available"
    },
    borrowers: [{ type: Schema.Types.ObjectId, ref: 'Member' }], // Reference to Member
    createdAt: { type: Date, default: Date.now }
});

export default model('Book', bookSchema);