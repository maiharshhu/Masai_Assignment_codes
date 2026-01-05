const express = require('express');
const router = express.Router();
const Session = require('../models/Session');

// --- Archive Mechanism (Requirement 4) ---
router.delete('/sessions/:id', async (req, res) => {
    // Instead of removing, we archive
    await Session.findByIdAndUpdate(req.params.id, { isArchived: true });
    res.json({ message: "Session archived successfully." });
});

// --- List all learners for a particular session (Requirement 3) ---
router.get('/sessions/:id/learners', async (req, res) => {
    const session = await Session.findById(req.params.id)
        .populate({ path: 'learners', match: { isActive: true } });
    res.json(session.learners);
});

module.exports = router;