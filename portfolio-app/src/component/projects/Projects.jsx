import React from "react";
import "../projects/Projects.css";
import projectimg1 from "../../assets/projects/projectimg1.jpeg";
import projectimg2 from "../../assets/projects/projectimg2.jpeg";
import projectimg3 from "../../assets/projects/projectimg3.jpeg";
import projectimg4 from "../../assets/projects/projectimg4.jpeg";

const Projects = () => {
  return (
    <>
      <section id="projects">
        <div className="project-title">
          <h1>Projects</h1>
        </div>
        <div className="project-continer">
          <div className="project-card">
            <div className="project-img">
              <img src={projectimg1} alt=""></img>
            </div>
            <div className="project-content-container">
              <div className="project-content">
                <p>
                  <span>Abut Project :</span>This is a training institute
                  project called bytesInBits. Using Reactjs as a front end
                  framework to build a user interface.This project completely
                  about the training institute for providing courses and
                  placement as well.
                </p>
                <h4>
                  Project Url:
                  <a href="https://bytes-in-bits.vercel.app/" target="_blank">
                    https://bytes-in-bits.vercel.app/
                  </a>
                </h4>
              </div>
            </div>
          </div>
          <div className="project-card">
            <div className="project-img">
              <img src={projectimg2} alt=""></img>
            </div>
            <div className="project-content-container">
              <div className="project-content">
                <p>
                  <span>Abut Project :</span>Created a Enterprise Business
                  website for organisation. This websites contains the various
                  routes such as about the organisation ,services,blog and
                  contact us pages.Fully fetaured Enterprise Business website
                  for organisation.
                </p>
                <h4>
                  Project Url:
                  <a
                    href="https://business-website-enterprise.netlify.app/"
                    target="_blank"
                  >
                    https://business-website-enterprise.netlify.app/
                  </a>
                </h4>
              </div>
            </div>
          </div>
          <div className="project-card">
            <div className="project-img">
              <img src={projectimg3} alt=""></img>
            </div>
            <div className="project-content-container">
              <div className="project-content">
                <p>
                  <span>Abut Project :</span>This is a Social Media Post
                  generator website.Here we can add the various fields of social
                  media contents. All the information are stored in the local
                  storage of the website.We can update and create the post
                  generator are stored in the browser storage.
                </p>
                <h4>
                  Project Url:
                  <a
                    href=" https://github.com/TamilselvanChandrakumar/social-media-post-generator.git"
                    target="_blank"
                  >
                    click to get Github link for project
                  </a>
                </h4>
              </div>
            </div>
          </div>
          <div className="project-card">
            <div className="project-img">
              <img src={projectimg4} alt=""></img>
            </div>
            <div className="project-content-container">
              <div className="project-content">
                <p>
                  <span>Abut Project :</span>Add to cart project.Whatever
                  project we want we can add the project in the add to cart.The
                  add to cart contains selected projects with price and count of
                  the project.We can add multiple products.Products details are
                  stored using JSON server.
                </p>
                <h4>
                  Project Url:
                  <a
                    href="https://github.com/TamilselvanChandrakumar/shopping-cart.git"
                    target="_blank"
                  >
                    click to get Github link for project
                  </a>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Projects;
