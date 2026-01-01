import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: [3, 'Name must be at least 3 characters']
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    rentedBooks: [{
        type: Schema.Types.ObjectId,
        ref: 'Book' // Reference to the Book collection
    }]
});

export default model('User', userSchema);