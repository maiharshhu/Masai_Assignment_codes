const express = require('express');
const Blog = require('../models/Blog');
const auth = require('../authMiddleware');
const router = express.Router();

// Create a blog
router.post('/', auth, async (req, res) => {
    const blog = new Blog({ ...req.body, createdBy: req.user.id });
    await blog.save();
    res.status(201).json(blog);
});

// Fetch only the logged-in user's blogs
router.get('/', auth, async (req, res) => {
    const blogs = await Blog.find({ createdBy: req.user.id });
    res.json(blogs);
});

// Update/Delete (Check ownership)
router.put('/:id', auth, async (req, res) => {
    const blog = await Blog.findOneAndUpdate(
        { _id: req.params.id, createdBy: req.user.id }, req.body, { new: true }
    );
    if (!blog) return res.status(404).send("Not Found/Unauthorized");
    res.json(blog);
});

router.get('/stats', async (req, res) => {
    const stats = await Blog.aggregate([
        {
            $facet: {
                "totalBlogs": [{ $count: "count" }],
                "blogsPerUser": [{ $group: { _id: "$createdBy", count: { $sum: 1 } } }],
                "commonTags": [
                    { $unwind: "$tags" },
                    { $group: { _id: "$tags", count: { $sum: 1 } } },
                    { $sort: { count: -1 } }
                ]
            }
        }
    ]);
    res.json(stats);
});