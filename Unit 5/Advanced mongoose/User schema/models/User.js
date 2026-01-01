const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    profileName: {
        type: String,
        enum: ["fb", "twitter", "github", "instagram"], // Required enum
        required: [true, "Profile name is required"]
    },
    url: {
        type: String,
        required: [true, "Profile URL is required"],
        match: [/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/, 'Please provide a valid URL'] // URL validation
    }
});

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: {
        type: String,
        required: true,
        unique: true, // No duplicate emails
        match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address']
    },
    password: {
        type: String,
        required: true,
        minlength: [6, "Password must be at least 6 characters"] // Min length requirement
    },
    profiles: [profileSchema] // Nested profile objects
});

module.exports = mongoose.model('User', userSchema);