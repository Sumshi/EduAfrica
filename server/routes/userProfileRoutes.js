/*
 * Define routes for user profile actions 
 */

const express = require('express');
const router = express.Router();
const userProfileController = require('../controllers/userProfileController');
const multer = require('multer');

// Upload a user's profile picture
router.post('/uploadProfilePicture', multer().single('profilePicture'), userProfileController.uploadProfilePicture);

// Update a user's profile
router.put('/updateUserProfile/:id', userProfileController.updateUserProfile);

// Change a user's profile picture
router.put('/changeProfilePicture/:id', multer().single('profilePicture'), userProfileController.changeProfilePicture);

// Get a user's profile
router.get('/getUserProfile/:id', userProfileController.getUserProfile);

// Other routes for additional actions...

function userProfileRoutes(app) {
  app.use('/userProfile', router);
}

module.exports = userProfileRoutes;
