const express = require('express');
const rateLimit = require('express-rate-limit');
const router = express.Router();

// Define the rate limiter: 5 requests per 1 minute
const limiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minute
    max: 5, // Limit each IP to 5 requests per windowMs
    message: { error: "Too many requests, please try again later." },
    standardHeaders: true,
    legacyHeaders: false,
});

// GET /api/public (No rate limiting)
router.get('/public', (req, res) => {
    res.json({ message: "This is a public endpoint!" });
});

// GET /api/limited (Apply rate limiting)
router.get('/limited', limiter, (req, res) => {
    res.json({ message: "You have access to this limited endpoint!" });
});

module.exports = router;