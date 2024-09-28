/*
 * Implemented creating, getting, updating, and deleting
 * user records in your Node.js application with userController.js
 * hashed password before saving to the database
 */

const bcrypt = require('bcrypt');
const User = require('../models/User');
const { userSchema, isValidEmail } = require('../utils/validation');

// Controller function to create a new user
async function createUser(req, res) {
  try {
    // Extract user data from the request body
    const { username, email, password } = req.body;

    // Check if email and password are provided
    if (!email) {
      return res.status(400).json({ message: 'Missing email' });
    }

    if (!password) {
      return res.status(400).json({ message: 'Missing password' });
    }

    // Check if the email already exists in the database
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({ message: 'Invalid email address' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user using your User model
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    // Save the user to the database with Mongoose as the database library
    await newUser.save();

    // Respond with a success message and the created user data
    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}


// Controller function to get a user by ID
async function getUserById(req, res) {
  try {
    const userId = req.params.id;

    // Use your User model to fetch the user from the database
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Respond with the user data
    res.status(200).json({ user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

// Controller function to update a user by ID
async function updateUserById(req, res) {
  try {
    const userId = req.params.id;
    const updates = req.body;

    // Use User model to update the user in the database
    const updatedUser = await User.findByIdAndUpdate(userId, updates, { new: true });

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Respond with the updated user data
    res.status(200).json({ message: 'User updated successfully', user: updatedUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

// Controller function to delete a user by ID
async function deleteUserById(req, res) {
  try {
    const userId = req.params.id;

    // Use User model to delete the user from the database
    const deletedUser = await User.findByIdAndRemove(userId);

    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Respond with a success message and the deleted user data
    res.status(200).json({ message: 'User deleted successfully', user: deletedUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

module.exports = {
  createUser,
  getUserById,
  updateUserById,
  deleteUserById,
};
