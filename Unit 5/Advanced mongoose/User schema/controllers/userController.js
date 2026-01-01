const User = require('../models/User');

// Route 1: Add User
exports.addUser = async (req, res, next) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (err) { next(err); }
};

// Route 2: Add Profile
exports.addProfile = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.userId);
        if (!user) return res.status(404).json({ message: "User not found" });

        user.profiles.push(req.body);
        await user.save();
        res.status(201).json(user);
    } catch (err) { next(err); }
};

// Route 3: Get Users (with filtering)
exports.getUsers = async (req, res, next) => {
    try {
        const { profile } = req.query;
        let query = {};
        if (profile) {
            query = { "profiles.profileName": profile }; // Filter by profile name
        }
        const users = await User.find(query);
        res.status(200).json(users);
    } catch (err) { next(err); }
};

// Route 4: Search
exports.searchUser = async (req, res, next) => {
    try {
        const { name, profile } = req.query;
        const user = await User.findOne({ name: name });

        if (!user) return res.status(404).json({ message: "User not found" });

        const targetProfile = user.profiles.find(p => p.profileName === profile);

        if (!targetProfile) {
            return res.status(200).json({
                message: "User found, but profile not found",
                user: { name: user.name, email: user.email }
            });
        }

        res.status(200).json(targetProfile);
    } catch (err) { next(err); }
};

// Route 5 & 6: Update and Delete
exports.updateProfile = async (req, res, next) => {
    try {
        const { userId, profileName } = req.params;
        const user = await User.findOneAndUpdate(
            { _id: userId, "profiles.profileName": profileName },
            { $set: { "profiles.$.url": req.body.url } }, // Update specific element in array
            { new: true, runValidators: true }
        );
        res.status(200).json(user);
    } catch (err) { next(err); }
};

exports.deleteProfile = async (req, res, next) => {
    try {
        const user = await User.findByIdAndUpdate(
            req.params.userId,
            { $pull: { profiles: { profileName: req.params.profileName } } },
            { new: true }
        );
        res.status(200).json(user);
    } catch (err) { next(err); }
};