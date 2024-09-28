import React from "react";
import "./footer.css";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { ImWhatsapp } from "react-icons/im";
import { FaInstagram, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="support-section">
        <h3>Support</h3>
        <ul className="support-links">
          <li>
            <a href="#">Contact us</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">Report a problem</a>
          </li>
          <li>
            <a href="#">Help</a>
          </li>
        </ul>
      </div>

      <div className="legal-section">
        <h3>Legal</h3>
        <ul className="legal-links">
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms of Use</a>
          </li>
          <li>
            <a href="#">Terms and Conditions</a>
          </li>
          <li>
            <a href="#">Cookie Policy</a>
          </li>
          <li>
            <a href="#">Accessibility</a>
          </li>
        </ul>
      </div>

      <div className="about-section">
        <h3>About Us</h3>
        <ul className="about-links">
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">Team</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Partners</a>
          </li>
        </ul>
      </div>

      <div className="subscribe-section">
        <h3>Subscribe to our Newsletter</h3>
        {/* Add your newsletter subscription form or component here */}
        <input type="email" placeholder="Enter your email" />
        <button>Subscribe</button>
      </div>

      <div className="address-section">
        <h3>Visit Us</h3>
        <ul className="address-info">
          <li>
            <a href="#">
              <FaMapMarkerAlt />
              <span>123 Street, Cityville, Country</span>
            </a>
          </li>
          <li>
            <a>
              <FaEnvelope />
              <span>Email: info@example.com</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="footer_socials">
        <a
          href="https://www.linkedin.com/in/usaamah-ishola-503703208/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          <BsTwitter />
        </a>
        <a href="https://wa.me/+1234567890" target="_blank" rel="noreferrer">
          <ImWhatsapp />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
      </div>

      <div className="footer_copy-right">
        <small>&copy; EduAidAfrica, All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
