const express = require('express');
const Blog = require('../models/Blog');
const auth = require('../authMiddleware');
const router = express.Router();

// POST /blogs -> Create blog (Protected)
router.post('/', auth, async (req, res) => {
    const blog = new Blog({ ...req.body, createdBy: req.user.id });
    await blog.save();
    res.status(201).json(blog);
});

// GET /blogs -> Fetch only own blogs (Protected)
router.get('/', auth, async (req, res) => {
    const blogs = await Blog.find({ createdBy: req.user.id });
    res.json(blogs);
});

// GET /blogs/stats -> Analytics using MongoDB Aggregation
router.get('/stats', async (req, res) => {
    try {
        const stats = await Blog.aggregate([
            {
                $facet: {
                    "totalBlogs": [{ $count: "count" }],
                    "blogCountPerUser": [
                        { $group: { _id: "$createdBy", count: { $sum: 1 } } }
                    ],
                    "mostCommonTags": [
                        { $unwind: "$tags" },
                        { $group: { _id: "$tags", count: { $sum: 1 } } },
                        { $sort: { count: -1 } }
                    ]
                }
            }
        ]);
        res.json(stats);
    } catch (err) { res.status(500).json(err); }
});

// PUT & DELETE -> Only if it belongs to the logged-in user
router.put('/:id', auth, async (req, res) => {
    const blog = await Blog.findOneAndUpdate(
        { _id: req.params.id, createdBy: req.user.id }, req.body, { new: true }
    );
    if (!blog) return res.status(404).json({ message: "Not authorized or not found" });
    res.json(blog);
});

module.exports = router;