/*
 * Defines controller functions with basic authentication for registerUser,
 * loginUser, and session-based authentication for logoutUser
 */

const bcrypt = require('bcrypt');
const User = require('../models/User');
const { userSchema, isValidEmail } = require('../utils/validation');

// Controller function to create a new user (registration)
async function registerUser(req, res) {
  try {
    // Extract user registration data from the request body
    const { username, email, password } = req.body;

    // Validate user input using Joi
    const { error } = userSchema.validate({ username, email, password });

    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    // Validate the email using the custom function
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

    // Save the user to the database
    await newUser.save();

    // Respond with a success message and the created user data
    res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

// Controller function to handle user login and create a session
async function loginUser(req, res) {
  try {
    // Extract login data from the request body
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });

    // Check if the user exists
    if (!user) {
      return res.status(401).json({ message: 'Authentication failed' });
    }

    // Compare the provided password with the stored hash
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Authentication failed' });
    }

    // Create a session to indicate that the user is logged in
    req.session.userId = user._id;

    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

// Controller function to handle user logout and destroy the session
async function logoutUser(req, res) {
  try {
    // Destroy the user's session
    req.session.destroy((err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: 'Session could not be destroyed' });
      }
      res.status(200).json({ message: 'Logout successful' });
    });
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
};
