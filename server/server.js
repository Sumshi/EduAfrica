/*
 * Set up the Express.js server with logout session
 * npm install express-session express-session-mongodb
 */

const cors = require('cors');
const express = require('express');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const routes = require('./routes/index');
const connectToDatabase = require('./db'); // Import your connectToDatabase function

const app = express();

// Enable CORS

app.use(cors());

const PORT = process.env.PORT || 5000;

// Connect to the MongoDB database using your db.js function
const db = connectToDatabase();
app.set('db', db);

// Configure session store
const store = new MongoDBStore({
  uri: 'mongodb://localhost/eduaid-africa',
  collection: 'sessions',
});

// Configure express-session
app.use(
  session({
    secret: process.env.SESSION_SECRET || 'your-secret-key',
    resave: false,
    saveUninitialized: true,
    store, // Use the MongoDB store
    cookie: {
      maxAge: 1000 * 60 * 60 * 24, // Session duration (e.g., 24 hours)
      sameSite: true,
      secure: false, // Set to true in production with HTTPS
    },
  })
);

// Parse JSON bodies
app.use(express.json());

// Include your routes
routes(app);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
