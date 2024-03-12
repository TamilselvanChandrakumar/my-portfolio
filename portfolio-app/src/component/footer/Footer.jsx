import React from "react";
import "../footer/Footer.css";
import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-link">
        <div>
          <h3>Follow Me</h3>
        </div>
        <div className="social-links">
          <a href="">
            <FaInstagram size={25} color="white"></FaInstagram>
          </a>
          <a href="">
            <FaWhatsapp size={25} color="white"></FaWhatsapp>
          </a>
          <a href="">
            <FaFacebook size={25} color="white"></FaFacebook>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
