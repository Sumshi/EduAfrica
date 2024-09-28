/*
 * Implements userProfileController functions
 */

const multer = require('multer');
const UserProfile = require('../models/UserProfile');

// Configure multer to specify the storage destination and file name
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Define the destination directory where profile pictures will be stored
    cb(null, 'uploads/profilePictures');
  },
  filename: function (req, file, cb) {
    // Define the file name for the uploaded picture
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const extension = file.originalname.split('.').pop();
    cb(null, 'profilePicture-' + uniqueSuffix + '.' + extension);
  },
});

// Create a multer instance with the specified storage configuration
const upload = multer({ storage: storage });

// Controller function to upload a user's profile picture
async function uploadProfilePicture(req, res) {
  try {
    // The 'upload' middleware has already handled file upload, so no need to check for multer errors here.
    return res.status(200).json({ message: 'Profile picture uploaded successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

// Controller function to update a user's profile
async function updateUserProfile(req, res) {
  try {
    const { username, email } = req.body;
    const userId = req.params.id;

    // Check if the user profile exists
    const userProfile = await UserProfile.findOne({ where: { userId } });

    if (!userProfile) {
      return res.status(404).json({ message: 'User profile not found' });
    }

    // Update the user profile with the new data
    userProfile.username = username;
    userProfile.email = email;

    // Save the updated user profile to the database
    await userProfile.save();

    return res.status(200).json({ message: 'User profile updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

// Controller function to change a user's profile picture
async function changeProfilePicture(req, res) {
  try {
    const userId = req.params.id; // Assuming you have the user's ID as a parameter
    const newProfilePictureFilename = req.file.filename; // Assuming you have the new filename from the uploaded file

    // Fetch the user's profile from the database
    const userProfile = await UserProfile.findOne({ where: { userId } });

    if (!userProfile) {
      return res.status(404).json({ message: 'User profile not found' });
    }

    // Update the 'profilePicture' field with the new filename
    userProfile.profilePicture = newProfilePictureFilename;

    // Save the changes to the user's profile in the database
    await userProfile.save();

    return res.status(200).json({ message: 'Profile picture changed successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

// Controller function to get a user's profile
async function getUserProfile(req, res) {
  try {
    const userId = req.params.id; // Assuming you have the user's ID as a parameter

    // Fetch the user's profile from the database
    const userProfile = await UserProfile.findOne({ where: { userId } });

    if (!userProfile) {
      return res.status(404).json({ message: 'User profile not found' });
    }

    // Return the user's profile as a JSON response
    return res.status(200).json(userProfile);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

// Other controller functions...

module.exports = {
  uploadProfilePicture,
  updateUserProfile,
  changeProfilePicture,
  getUserProfile,

};
