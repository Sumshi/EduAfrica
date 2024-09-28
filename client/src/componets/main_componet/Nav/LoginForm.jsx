// LoginForm.js

import React from "react";
import "./LoginForm.css"; // Import the updated CSS file
import loginImage from "../../../assets/family.jpeg"; // Import the image

const LoginForm = ({ isOpen, onRequestClose }) => {
  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  if (!isOpen) {
    return null; // Do not render anything if not open
  }

  return (
    <div className="login-form-container">
      {/* Image container on the left */}
      <div className="image-container">
        <img
          src={loginImage}  // Use the imported image
          alt="Login Image"
        />
      </div>

      {/* Form container on the right */}
      <div className="form-container">
        <h2 className="text-2xl font-bold mb-4">Login</h2>

        {/* Your Login Form */}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold mb-1">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-semibold mb-1">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <button
            type="submit"
            className=" login-btn w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-semibold font-size-1.2"
          >
            Login
          </button>
        </form>

        {/* Close Button */}
        <button
          className=" close-btn  absolute top-0 right-0 mt-4 mr-4 text-gray-500 hover:text-gray-600"
          onClick={onRequestClose}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
