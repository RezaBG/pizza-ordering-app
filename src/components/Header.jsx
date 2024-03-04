import React from "react";

import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img
          src="https://i.pinimg.com/736x/82/01/79/82017984a238d9fa4eb14abf6f1b8919.jpg"
          alt="Logo"
        />
      </div>
      <h1>Your Pizza Place</h1>
      <nav className="nav">
        <ul>
          <li>
            <a href="/">Home</a>
            <a href="/menu">Menu</a>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
