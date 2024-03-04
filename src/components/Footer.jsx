import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h3>Your Pizza Place</h3>
          <p>123 Pizza Street, Pizza City</p>
          <p>Email: info@yourpizzaplace.com</p>
          <p>Phone: 123-456-7890</p>
        </div>
        <div className="footer-right">
          <ul className="social-links">
            <li>
              <a href="https://facebook.com">
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://instagram.com">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Your Pizza Place. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
