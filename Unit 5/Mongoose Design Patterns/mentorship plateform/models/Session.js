const mongoose = require('mongoose');
const sessionSchema = new mongoose.Schema({
    mentorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Mentor', required: true },
    learners: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Learner' }], // Many-to-many
    scheduledAt: { type: Date, default: Date.now },
    status: { type: String, enum: ['active', 'cancelled'], default: 'active' },
    isArchived: { type: Boolean, default: false } // Archiving mechanism
});
module.exports = mongoose.model('Session', sessionSchema);