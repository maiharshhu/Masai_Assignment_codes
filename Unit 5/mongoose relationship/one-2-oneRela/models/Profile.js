import { Schema, model } from 'mongoose';

const profileSchema = new Schema({
    bio: { type: String }, // Optional
    socialMediaLinks: [{ type: String }], // Array of strings
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true // Ensures One-to-One relationship
    }
});

export default model('Profile', profileSchema);