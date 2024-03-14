import React from "react";
import "../home/Home.css";
import homeimg from "../../assets/home/homeimg1.jpg";
export const Home = () => {
  return (
    <>
      <section id="home">
        <div className="home-container">
          <div className="home-col1">
            <h3>Hello,my name is </h3>
            <h1>Tamilselvan C</h1>
            <h2>
              And I'm a <span> Web Developer</span>
            </h2>{" "}
            <a className="hireme-btn" href="mailto:tamilbin001@gmail.com">
              Hire Me
            </a>
          </div>
          <div className="home-col2">
            <div className="home-image">
              <img src={homeimg} alt=""></img>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
