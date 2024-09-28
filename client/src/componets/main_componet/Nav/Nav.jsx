// Nav.js

import React, { useState } from "react";
import logo from "../../../assets/distance-learning.svg";
import { NavLink } from "react-router-dom";
import Modal from "react-modal";
import LoginForm from "./LoginForm";
import "./Nav.css";

const Nav = () => {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);

  const openLoginModal = () => {
    setLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setLoginModalOpen(false);
  };

  return (
    <header className="flex justify-between items-center px-8 py-4">
      <div className="header-content flex justify-between items-center w-full">
        {/* Logo Section */}
        <div className="logo flex gap-4 items-center">
          <img src={logo} alt="" width={50} />
          <span className="font-quicksand text-[1.5rem] text-blue">
            <span className="text-blue-500">EduAid</span>Africa
          </span>
        </div>

        {/* Navigation Links Section */}
        <nav className="flex text-white flex-row justify-between items-center text-body font-semibold">
          <NavLink className="nav_list mr-4" to="/home">
            Home
          </NavLink>
          <NavLink className="nav_list mr-4" to="/scholarship">
            Scholarships
          </NavLink>
          <NavLink className="nav_list mr-4" to="/about">
            About
          </NavLink>
          <NavLink className="nav_list mr-4" to="/contact">
            Contact
          </NavLink>
        </nav>

        {/* Login and Sign up Buttons Section */}
        <div className="flex items-center">
          <button className="font-bold text-white mr-4" onClick={openLoginModal}>
            Login
          </button>
          <button className="font-bold text-white">
            <NavLink to="/login">Sign up</NavLink>
          </button>
        </div>
      </div>

      {/* Login Modal with LoginForm */}
      <Modal
        isOpen={isLoginModalOpen}
        onRequestClose={closeLoginModal}
        contentLabel="Login Modal"
      >
        <LoginForm isOpen={isLoginModalOpen} onRequestClose={closeLoginModal} />
      </Modal>
    </header>
  );
};

export default Nav;
