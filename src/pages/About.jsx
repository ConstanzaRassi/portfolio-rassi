import React from "react";
// import './about.css'
import ME from "../assets/juan.JPEG";
import { FaAward } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";

const About = () => {
  return (
    <div className="about">
      <h2>About Me</h2>
      <div className="container">
        <div className="image">
          <img src={ME} alt="" />
        </div>
        <div className="content">
          <div className="cards">
            <article className="card">
              <FaAward className="icon" />
              <h5>Experience</h5>
              <small>15+ Months Working</small>
            </article>
            <article className="card">
              <FaGraduationCap className="icon" />
              <h5>Education</h5>
              <small>3+ Years Studying</small>
            </article>
            <article className="card">
              <FaLaptopCode className="icon" />
              <h5>Projects</h5>
              <small>15+ Completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            reprehenderit dolorum quaerat facere, dolorem molestias omnis nihil
            similique quo, sapiente quos tempora! Sequi distinctio quod impedit
            mollitia eum ullam. Quis.similique quo, sapiente quos tempora! Sequi
            distinctio quod impedit mollitia eum ullam. Quis.
          </p>

          <a href="#contact" className="btn btn-primary">
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
