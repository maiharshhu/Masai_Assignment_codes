const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route 1: Create a new user with basic details
router.post('/add-user', userController.addUser);

// Route 2: Add a new profile (fb, twitter, etc.) to a specific user
router.post('/add-profile/:userId', userController.addProfile);

// Route 3: Get all users with optional ?profile=github filtering
router.get('/get-users', userController.getUsers);

// Route 4: Search for a specific profile by name and platform
router.get('/search', userController.searchUser);

// Route 5: Update the URL of an existing profile
router.put('/update-profile/:userId/:profileName', userController.updateProfile);

// Route 6: Delete a specific profile from a user
router.delete('/delete-profile/:userId/:profileName', userController.deleteProfile);

module.exports = router;