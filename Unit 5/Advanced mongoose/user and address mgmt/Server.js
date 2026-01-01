const express = require('express');
const User = require('./User');
const app = express();
app.use(express.json());

app.post('/users', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save()
        res.status(201).json(user)
    }
    catch (err) {
        req.status(400).json({ error: err.message });
    }
});


app.post('/users/:userId/address', async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        if (!user) return res.status(404).send('User not found');

        user.addresses.push(req.body);
        await user.save();
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});


app.get('/users/summary', async (req, res) => {
    try {
        const totalUsers = await User.countDocuments();

        // Aggregation to find total addresses and user-specific counts
        const stats = await User.aggregate([
            {
                $project: {
                    name: 1,
                    addressCount: { $size: "$addresses" }
                }
            },
            {
                $group: {
                    _id: null,
                    totalAddresses: { $sum: "$addressCount" },
                    usersList: { $push: { name: "$name", addressCount: "$addressCount" } }
                }
            }
        ]);

        res.json({
            totalUsers,
            totalAddresses: stats[0]?.totalAddresses || 0,
            users: stats[0]?.usersList || []
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/users/:userId', async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        if (!user) return res.status(404).send('User not found');
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.delete('/users/:userId/address/:addressId', async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        if (!user) return res.status(404).send('User not found');

        // Mongoose subdocuments have an .id() method to find by _id
        user.addresses.pull({ _id: req.params.addressId });
        await user.save();
        res.json({ message: "Address deleted", user });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(3000, () => console.log('Server running on port 3000'));