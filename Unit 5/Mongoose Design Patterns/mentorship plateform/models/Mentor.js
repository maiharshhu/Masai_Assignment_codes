const mongoose = require('mongoose');
const mentorSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    isActive: { type: Boolean, default: true } // Soft delete flag
});
module.exports = mongoose.model('Mentor', mentorSchema);