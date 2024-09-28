/*
 * Define the UserProfile schema
 */

const mongoose = require('mongoose');

const userProfileSchema = new mongoose.Schema({
  // User reference (assuming each UserProfile is associated with a User)
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  // Basic user information
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
    required: true,
  },
  address: {
    type: String,
    required: true, 
  },
  phoneNumber: {
    type: String,
    required: true, 
  bio: {
    type: String,
    required: false, // If it is needed, it will be set to true
  },
}
});

// Create and export the UserProfile model
module.exports = mongoose.model('UserProfile', userProfileSchema);
