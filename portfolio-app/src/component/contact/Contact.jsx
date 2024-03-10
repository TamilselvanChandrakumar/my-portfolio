import React from "react";
import "../contact/Contact.css";
import { FaUser } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";

const Contact = () => {
  return (
    <>
      <section id="contact">
        <div className="contact-container">
          <div className="contact-leftcol">
            <h1>Get In Touch</h1>
            <p>
              Strong in design and integration with intuitive problem-solving
              skills. Ability to translate business requirements into technical
              solutions. Looking to start the career as an entry-level web
              developer with a reputed firm driven by technology.
            </p>
            <div className="getintouch-detail">
              <div className="getintouch-icon">
                <FaUser></FaUser>
              </div>
              <div>
                <h3>Name</h3>
                <p>Tamilselvan</p>
              </div>
            </div>
            <div className="getintouch-detail">
              <div className="getintouch-icon">
                <FaLocationDot></FaLocationDot>
              </div>
              <div>
                <h3>Address</h3>
                <p>The Nilgiris,Tamilnadu</p>
              </div>
            </div>
            <div className="getintouch-detail">
              <div className="getintouch-icon">
                <FaEnvelope></FaEnvelope>
              </div>
              <div>
                <h3>Email</h3>
                <p>tamilbin001@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="contact-rightcol">
            <h1>Message Me</h1>
            <form className="form-container">
              <div className="name-input">
                <input type="text" placeholder="Name"></input>
                <input type="email" placeholder="Email"></input>
              </div>
              <div>
                <input type="text" placeholder="Subject"></input>
              </div>
              <div className="">
                <textarea placeholder="Message"></textarea>
              </div>
              <div>
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
