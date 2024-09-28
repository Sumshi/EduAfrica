/*
 * Create tests for our user model
 */



const { expect } = require('chai');
const axios = require('axios');
const app = require('../server'); // Import your Express app

describe('User Controller - createUser', () => {
  // Define a test user data object
  const testUserData = {
    username: 'testuser',
    email: 'test@exampleone.com',
    password: 'testpassword',
  };

  it('should create a new user', async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/users', testUserData);

      expect(response.status).to.equal(201); // Expect a 201 status code for successful creation
      expect(response.data.message).to.equal('User created successfully');
      expect(response.data.user).to.be.an('object');
      expect(response.data.user.username).to.equal(testUserData.username);
      expect(response.data.user.email).to.equal(testUserData.email);

      // Add more assertions as needed to validate the response and user data
    } catch (error) {
      throw error;
    }
  });

  // Add more test cases for edge cases and error handling as needed
});
