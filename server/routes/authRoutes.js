/*
 * Crate user auth
 */

const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/authController');

// Define an endpoint to register a new user
router.post('/register', AuthController.registerUser);

// Define an endpoint to log in a user
router.post('/login', AuthController.loginUser);

// Define an endpoint to log out a user
router.post('/logout', AuthController.logoutUser);

function authRoutes(app) {
  app.use('/auth', router);
}

module.exports = authRoutes;
