require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./authRoutes');

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error(err));

app.use('/api/auth', authRoutes);

const authMiddleware = require('./authMiddleware');
app.get('/api/profile', authMiddleware, (req, res) => {
    res.json({ message: "Welcome to your profile", userId: req.user.id });
});

app.listen(3000, () => console.log("Server running on port 3000"));