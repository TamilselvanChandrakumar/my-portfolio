import React from "react";
import "../projects/Projects.css";
import projectimg1 from "../../assets/projects/projectimg1.png";
import projectimg2 from "../../assets/projects/projectimg2.png";
import projectimg3 from "../../assets/projects/projectimg3.png";
import projectimg4 from "../../assets/projects/projectimg4.png";

const Projects = () => {
  return (
    <>
      <section id="projects">
        <div className="project-continer">
          <div className="project-card">
            <div className="project-img">
              <img src={projectimg1} alt=""></img>
            </div>
            <div className="project-content-container">
              <div className="project-container">
                <p>
                  <span>Abut Project</span>This is a project of bytes in bits.
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
              <div className="project-container">
                <p>
                  <span>Abut Project</span>This is a project of bytes in bits.
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
              <img src={projectimg3} alt=""></img>
            </div>
            <div className="project-content-container">
              <div className="project-container">
                <p>
                  <span>Abut Project</span>This is a project of bytes in bits.
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
              <img src={projectimg4} alt=""></img>
            </div>
            <div className="project-content-container">
              <div className="project-container">
                <p>
                  <span>Abut Project</span>This is a project of bytes in bits.
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
        </div>
      </section>
    </>
  );
};
export default Projects;
