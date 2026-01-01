import { Schema, model } from 'mongoose';

const bookSchema = new Schema({
    title: {
        type: String,
        required: true,
        minlength: [3, 'Title must be at least 3 characters']
    },
    author: { type: String, required: true },
    genre: { type: String }, // Optional field
    rentedBy: [{
        type: Schema.Types.ObjectId,
        ref: 'User' // Reference to the User collection
    }]
});

export default model('Book', bookSchema);