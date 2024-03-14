import React from "react";
import "../about/About.css";
import aboutimg from "../../assets/home/homeimg.jpeg";
const About = () => {
  return (
    <>
      <section id="about">
        <div className="about-title">
          <h1>About me</h1>
        </div>
        <div className="about-container">
          <div className="aboutcontent">
            <h2>
              I'm Tamilselvan and I'm a <span>Webdeveloper</span>{" "}
            </h2>
            <p className="detail">
              I have completed my ME-BCS in Rathinam Technical
              Campus,Coimbatore. I completed course (MERN stack course) in
              Kitkat Software Technologies at Coimbatore..And I am a person who
              exploring new Technologies..I have leadership qualities and work
              with the team efficiently.Looking to start the career as an
              entry-level web developer with a reputed firm driven by
              technology.
            </p>
            <button>Download CV</button>
          </div>
          <div className="about-img">
            <img src={aboutimg} alt=""></img>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
