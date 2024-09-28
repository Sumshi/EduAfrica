/*
 * Implemeted Application model
 */

const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  // Reference to the applicant (User model)
  applicant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  // Reference to the scholarship being applied for (Scholarship model)
  scholarship: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Scholarship',
    required: true,
  },
  applicationDate: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ['Pending', 'Approved', 'Rejected'],
    default: 'Pending',
  },
  // Field to store uploaded documents as an array of strings
  documents: [String],
});

module.exports = mongoose.model('Application', applicationSchema);
