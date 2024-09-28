/*
 * Define our APP controller
 */

class AppController {
  // Static function to check the database connection
  static checkDatabase(req, res) {
    const db = req.app.get('db'); // Access the database connection from the Express app

    if (db.readyState === 1) {
      // Check if the database connection is open (readyState === 1)
      res.status(200).json({ message: 'Database connection is OK' });
    } else {
      res.status(500).json({ message: 'Database connection is not OK' });
    }
  }

  // Static function to check if the server is alive
  static checkServer(req, res) {
    res.status(200).json({ message: 'Server is alive' });
  }
}

module.exports = AppController;
