import React, { useState } from "react";
import "../navbar/Navbar.css";
import { FaBars } from "react-icons/fa6";
const Navbar = () => {
  const [sidenav, setSideNav] = useState(false);
  const handleSidenav = () => {
    setSideNav(!sidenav);
    console.log("clicked");
  };
  return (
    <>
      <div className="navbar-container">
        <div className="navbar-text">
          <h1>
            Myfortpo<span>lio</span>
          </h1>
        </div>
        <div className="hamburger" onClick={handleSidenav}>
          <FaBars></FaBars>
        </div>
        <nav className={`navbar-links-container ${sidenav ? "active" : null}`}>
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
