import React from "react";
import "../home/Home.css";
export const Home = () => {
  return (
    <>
      <section id="home">
        <div className="home-container">
          <div className="home-col">
            <h3>Hello,my name is </h3>
            <h1>Tamilselvan C</h1>
            <h2>
              And I'm a <span> Web Developer</span>
            </h2>
            <button className="btn-wrapper">Hire Me</button>
          </div>
        </div>
      </section>
    </>
  );
};
