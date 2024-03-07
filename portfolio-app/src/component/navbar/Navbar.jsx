import React from "react";
import "../navbar/Navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="navbar-container">
        <div className="navbar-text">
          <h1>
            Myfortpo<span>lio</span>
          </h1>
        </div>
        <nav className="navbar-links-container">
          <ul className="navbar-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              {" "}
              <a href="#skills">Skills</a>
            </li>
            <li>
              {" "}
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
