import React from "react";
import "../contact/Contact.css";

const Contact = () => {
  return (
    <>
      <section id="contact">
        <div className="contact-container">
          <div className="contact-leftcol">
            <h1>Get In Touch</h1>
          </div>
          <div className="contact-rightcol">
            <h1>Message Me</h1>
            <form>
              <div className="name-input">
                <input type="text" placeholder="Name"></input>
                <input type="email" placeholder="Email"></input>
              </div>
              <div>
                <input type="text" placeholder="Subject"></input>
              </div>
              <div>
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
