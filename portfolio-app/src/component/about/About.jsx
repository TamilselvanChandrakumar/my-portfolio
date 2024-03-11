import React from "react";
import "../about/About.css";
const About = () => {
  return (
    <>
      <section id="about">
        <div className="about-container">
          <div className="aboutcontent">
            <h2 className="title">
              I'm Tamilselvan and I'm a{" "}
              <span className="webdev">Webdeveloper</span>{" "}
            </h2>
            <br></br>
            <p className="detail">
              I'm a fresher.I finished my BE-CSE in Shree Venkateshwara Hi-Tech
              Engineering college-Erode.I completed my internship (MERN stack
              course) in Kitkat Software Technologies at Coimbatore..And I am a
              person who exploring new Technologies..I have leadership qualities
              and work with the team efficiently.I'm a Hard working person and
              ability to work under pressure..
            </p>
            <br></br>
            <button className="cvbtn">Download CV</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
