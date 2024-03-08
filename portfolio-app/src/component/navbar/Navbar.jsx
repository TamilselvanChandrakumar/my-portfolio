import React, { useState } from "react";
import "../navbar/Navbar.css";
import { FaBars } from "react-icons/fa6";
import { FaDharmachakra } from "react-icons/fa6";
import { FaHouseUser } from "react-icons/fa6";
import { FaRegFolderOpen } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa6";
import { FaCircleUser } from "react-icons/fa6";
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
            <FaDharmachakra color="black" size={30}></FaDharmachakra> Myfortpo
            <span>lio</span>
          </h1>
        </div>
        <div className="hamburger" onClick={handleSidenav}>
          <FaBars></FaBars>
        </div>
        <nav className={`navbar-links-container ${sidenav ? "active" : null}`}>
          <ul className="navbar-links">
            <li>
              <FaHouseUser></FaHouseUser> <a href="#home">Home</a>
            </li>
            <li>
              <FaCircleUser></FaCircleUser>
              <a href="#about">About</a>
            </li>
            <li>
              {" "}
              <FaGraduationCap></FaGraduationCap> <a href="#skills">Skills</a>
            </li>
            <li>
              {" "}
              <FaRegFolderOpen></FaRegFolderOpen>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <FaPhone></FaPhone>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
