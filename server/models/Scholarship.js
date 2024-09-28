/*
 * Scholarship model
 */

const mongoose = require('mongoose');

// Define the Scholarship schema
const scholarshipSchema = new mongoose.Schema({
  title: String,
  description: String,
  provider: String,
  amount: Number,
  eligibilityCriteria: String,
  applicationDeadline: Date,
  applicationInstructions: String,
  linkToMoreInfo: String,
  contactInformation: String,
  scholarshipType: String,
  location: String,
  numberOfAwards: Number,
  duration: String,
  additionalRequirements: String,

  // User reference 
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },

  // Category reference (if applicable)
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
  },

  // Applications reference
  applications: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Application',
  }],
});

module.exports = mongoose.model('Scholarship', scholarshipSchema);
