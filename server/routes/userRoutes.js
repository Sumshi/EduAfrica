/*
 * Implemented userRoutes to define endpoints:
 * create, get, update and delete user/ID
 */

const express = require('express');
const UserController = require('../controllers/userController');

function userRoutes(app) {
  const router = express.Router();

  // Prefix routes with '/users'
  app.use('/users', router);

  // Define an endpoint to create a new user
  router.post('/create', UserController.createUser);

  // Define an endpoint to get a user by ID
  router.get('/:id', UserController.getUserById);

  // Define an endpoint to update a user by ID
  router.put('/:id', UserController.updateUserById);

  // Define an endpoint to delete a user by ID
  router.delete('/:id', UserController.deleteUserById);
}

module.exports = userRoutes;
