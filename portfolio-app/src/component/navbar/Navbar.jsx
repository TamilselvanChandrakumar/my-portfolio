import React from "react";
import "../navbar/Navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="navbar-container">
        <div className="navbar-text">
          <h1>Myfortpolio</h1>
        </div>
        <nav className="navbar-links-container">
          <ul className="navbar-links">
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
