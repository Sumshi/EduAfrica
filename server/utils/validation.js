/*
 * Implements user input validation using joi
 * run npm install joi, npm install validator
 */

const validator = require('validator');
const Joi = require('joi');

// Joi schema for user input validation
const userSchema = Joi.object({
  username: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

// Custom email validation function using 'validator'
function isValidEmail(email) {
  return validator.isEmail(email);
}

module.exports = {
  userSchema,
  isValidEmail,
};
