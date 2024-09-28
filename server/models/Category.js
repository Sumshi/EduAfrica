/*
 * Implemented the Category model
 */

const mongoose = require('mongoose');

// Define the Category schema
const categorySchema = new mongoose.Schema({
  name: String, // The name of the category (e.g., "Engineering Scholarships")
  description: String, // Optional description of the category
});

module.exports = mongoose.model('Category', categorySchema);
