import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="links">
          <div className="link">
            <a href="#home">
              <p>Home</p>
            </a>
            <a href="#about">
              <p>About Me</p>
            </a>
            <a href="#experience">
              <p>Skills</p>
            </a>
            <a href="#portfolio">
              <p>Portfolio</p>
            </a>
          </div>
          <div className="link">
            <a href="">
              <p>Contact</p>
            </a>
            <a href="#about">
              <p>Email: cotirassi@gmail.com</p>
            </a>
            <a href="#experience">
              <p>Linkedin: constanzarassi</p>
            </a>
            <a href="#portfolio">
              <p>GitHub: constanzarassi</p>
            </a>
          </div>
        </div>
        <hr></hr>
        <div className="copyright">
          <p>
            @ {new Date().getFullYear()} Constanza Rassi. All right reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
