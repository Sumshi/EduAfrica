/*
 * Implements User Authentication system with Basic Authenticaion
 */

const { isValidEmail } = require('../utils/validation');
const bcrypt = require('bcrypt');
const connectToDatabase = require('../db');

// Function to retrieve user data from the database
async function getUserByEmail(email) {
  const db = connectToDatabase();
  const User = db.model('User');

  try {
    // Query the database to find a user by email
    const user = await User.findOne({ email });

    return user;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

function basicAuthWithEmailPassword(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: 'Authorization header missing' });
  }

  const auth = authHeader.split(' ');

  if (auth[0] !== 'Basic') {
    return res.status(401).json({ message: 'Invalid authentication method' });
  }

  const credentials = Buffer.from(auth[1], 'base64').toString().split(':');
  const email = credentials[0];
  const password = credentials[1];

  // Validate the email using the isValidEmail function
  if (!isValidEmail(email)) {
    return res.status(401).json({ message: 'Invalid email address' });
  }

  // Authentication logic for password validation
  authenticateUser(email, password)
    .then((user) => {
      if (!user) {
        return res.status(401).json({ message: 'Authentication failed' });
      }

      req.user = { email };
      req.authenticationMessage = 'Authentication successful';
      next();
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    });
}

// Function to authenticate a user by email and password
async function authenticateUser(email, password) {
  try {
    const user = await getUserByEmail(email);

    if (!user) {
      req.authenticationMessage = 'Authentication failed';
      return null;
    }

    // Compare the provided password with the hashed password from the database using bcrypt
    if (bcrypt.compareSync(password, user.password)) {
      req.authenticationMessage = 'Authentication successful';
      return user;
    }

    req.authenticationMessage = 'Authentication failed';
    return null;
  } catch (error) {
    throw error;
  }
}

module.exports = basicAuthWithEmailPassword;
