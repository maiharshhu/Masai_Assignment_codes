import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: [3, 'Name must be at least 3 characters long'] // Validation requirement
    },
    email: {
        type: String,
        required: true,
        unique: true // Ensure duplicate emails are not allowed
    }
});

export default model('User', userSchema);