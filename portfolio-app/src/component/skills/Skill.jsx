import React from "react";
import "../skills/Skill.css";
import html from "../../assets/skills/html.png";
import css from "../../assets/skills/css.png";
import js from "../../assets/skills/js.png";
import react from "../../assets/skills/react.png";
import express from "../../assets/skills/expressjs.png";
import node from "../../assets/skills/nodejs.png";
const Skill = () => {
  return (
    <section id="skills">
      <div className="skills-title">
        <h1>Skills</h1>
      </div>
      <div className="cardContainer">
        <div className="card">
          <img src={html} alt="htmlimg"></img>
          <h2>HTML5</h2>
          <p>
            HTML stands for Hyper Text Markup Language. HTML is the standard
            markup language for creating Web pages. HTML describes the structure
            of a Web page.
          </p>
        </div>
        <div className="card">
          <img src={css} alt="cssimg"></img>
          <h2>CSS3</h2>
          <p>
            CSS stands for Cascading Style Sheets. It is a style sheet language
            which is used to describe the look and formatting of a document
            written in markup language.
          </p>
        </div>
        <div className="card">
          <img src={js} alt="jsimg"></img>
          <h2>JAVASCRIPT</h2>
          <p>
            JavaScript is a scripting language that enables you to create
            dynamically updating content, control multimedia, animate images,
            and pretty much everything else.
          </p>
        </div>
        <div className="card">
          <img src={react} alt="reactimg"></img>
          <h2>React</h2>
          <p>
            ReactJS is a declarative, efficient, and flexible JavaScript library
            for building reusable UI components. It is an open-source,
            component-based front end library which is responsible only for the
            view layer of the application.
          </p>
        </div>
        <div className="card">
          <img src={node} alt="nodeimg"></img>
          <h2>Node js </h2>
          <p>
            As an asynchronous event-driven JavaScript runtime, Node.js is
            designed to build scalable network applications. In the following
            "hello world" example, many connections can be handled concurrently.
          </p>
        </div>
        <div className="card">
          <img src={express} alt="expressimg"></img>
          <h2>Express js</h2>
          <p>
            Express is a node js web application framework that provides broad
            features for building web and mobile applications. It is used to
            build a single page, multipage, and hybrid web application.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skill;
