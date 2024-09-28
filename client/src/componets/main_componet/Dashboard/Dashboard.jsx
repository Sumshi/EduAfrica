import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Footer from '../Home/footer/footer';
import './Dashboard.css';

const Dashboard = () => {
  const username = "User's Name"; // Replace with the actual username
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // Send a POST request to the logout endpoint
      const response = await axios.post("http://localhost:5000/api/auth/logout");

      // Handle the response (e.g., show a success message)
      console.log("Logout successful:", response.data.message);

      // You can clear the user's token from your app's state or local storage here
      // Example: localStorage.removeItem('token');

      // Redirect to the home page using navigate('/')
      navigate('/');
    } catch (error) {
      // Handle logout failure (e.g., show an error message)
      console.error("Logout failed:", error);
    }
  };

  return (
    <div>
      <header className="dashboard-header">
        <div className="user-greeting">
          {/* Display the user's name */}
          <h1>Welcome, {username}</h1>
        </div>
        <div className="logout-button">
          {/* Add a logout button */}
          <button onClick={handleLogout}>Logout</button>
        </div>
      </header>
      <Footer />
    </div>
  );
};

export default Dashboard;

