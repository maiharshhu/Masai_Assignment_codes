const Session = require('../models/Session');
const Mentor = require('../models/Mentor');
const Learner = require('../models/Learner');

// 1. Soft Delete Mentor (Cascading to Sessions)
exports.softDeleteMentor = async (id) => {
    await Mentor.findByIdAndUpdate(id, { isActive: false });
    // Disable all upcoming sessions for this mentor
    await Session.updateMany({ mentorId: id, scheduledAt: { $gte: new Date() } }, { status: 'cancelled' });
};

// 2. Operational Queries (Requirement 3)
exports.getQueries = {
    // Find active sessions for a given mentor
    activeByMentor: (mentorId) => Session.find({ mentorId, status: 'active', isArchived: false }),

    // Fetch recent 5 sessions sorted by time
    recentSessions: () => Session.find().sort({ scheduledAt: -1 }).limit(5),

    // Count learners who attended a particular mentor's sessions
    countLearners: async (mentorId) => {
        const sessions = await Session.find({ mentorId }).select('learners');
        const uniqueLearners = new Set(sessions.flatMap(s => s.learners.map(l => l.toString())));
        return uniqueLearners.size;
    },

    // Identify learners who attended more than 3 sessions
    frequentLearners: () => Session.aggregate([
        { $unwind: "$learners" },
        { $group: { _id: "$learners", count: { $sum: 1 } } },
        { $match: { count: { $gt: 3 } } }
    ])
};