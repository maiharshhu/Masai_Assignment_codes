const express = require('express');
const Blog = require('./Blog');
const authMiddleware = require('./authMiddleware');
const router = express.Router();

// 1. CREATE: Post a new blog
router.post('/', authMiddleware, async (req, res) => {
    try {
        const blog = new Blog({
            ...req.body,
            createdBy: req.user.id // Taken from the JWT token via middleware
        });
        await blog.save();
        res.status(201).json(blog);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// 2. READ: Get all blogs
router.get('/', async (req, res) => {
    const blogs = await Blog.find().populate('createdBy', 'name'); // Show author name
    res.json(blogs);
});

// 3. UPDATE: Edit a blog (only if you are the owner)
router.put('/:id', authMiddleware, async (req, res) => {
    const blog = await Blog.findOneAndUpdate(
        { _id: req.params.id, createdBy: req.user.id },
        req.body,
        { new: true }
    );
    if (!blog) return res.status(404).json({ message: "Blog not found or unauthorized" });
    res.json(blog);
});

// 4. DELETE: Remove a blog
router.delete('/:id', authMiddleware, async (req, res) => {
    const blog = await Blog.findOneAndDelete({ _id: req.params.id, createdBy: req.user.id });
    if (!blog) return res.status(404).json({ message: "Blog not found or unauthorized" });
    res.json({ message: "Blog deleted" });
});

module.exports = router;

router.get('/stats', async (req, res) => {
    try {
        const stats = await Blog.aggregate([
            {
                $group: {
                    _id: "$createdBy",          // Group by the user ID
                    totalBlogs: { $sum: 1 },    // Count blogs per user
                    averageTags: { $avg: { $size: "$tags" } } // Bonus: average tags per post
                }
            },
            {
                $lookup: {                    // Join with users collection for names
                    from: "users",
                    localField: "_id",
                    foreignField: "_id",
                    as: "authorDetails"
                }
            },
            { $unwind: "$authorDetails" },
            { $project: { "authorDetails.password": 0 } } // Hide sensitive data
        ]);
        res.json(stats);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});