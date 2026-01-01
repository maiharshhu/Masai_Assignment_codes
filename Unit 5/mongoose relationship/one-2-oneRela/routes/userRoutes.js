import { Router } from 'express';
const router = Router();
import User from '../models/User';
import Profile, { find } from '../models/Profile';

// 1. POST /add-user: Create a new user
router.post('/add-user', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// 2. POST /add-profile: Add a profile with user reference
router.post('/add-profile', async (req, res) => {
    try {
        const profile = new Profile(req.body);
        await profile.save();
        res.status(201).json(profile);
    } catch (err) {
        res.status(400).json({ error: "User reference must be valid and unique" });
    }
});

// 3. Relationship Verification: Get all profiles with user details
router.get('/profiles', async (req, res) => {
    try {
        const profiles = await find().populate('user', 'name'); // Fetch related user name
        res.status(200).json(profiles);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

export default router;