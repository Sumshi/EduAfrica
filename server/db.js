/*
 * Set up database connections
 */

const mongoose = require('mongoose');

// Define the database connection string
const dbUrl = 'mongodb://localhost/eduaid-africa';

// Function to connect to the database
const connectToDatabase = () => {
  mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;

  db.on('error', console.error.bind(console, 'MongoDB connection error:'));
  db.once('open', () => {
    console.log('Connected to MongoDB');
  });

  return db;
};

module.exports = connectToDatabase;
