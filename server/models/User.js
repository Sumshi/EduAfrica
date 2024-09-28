/*
 * Create UserSchema with fields:
 * username, email and password;
 */

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

// Create and export the User model
module.exports = mongoose.model('User', userSchema);
