import React from "react";
// import "./header.css";
// import CTA from "./CTA";
import { YO } from "../assets/YO.png";
// import HeaderSocials from './HeaderSocials'
import { FaLinkedin, FaInstagram } from "react-icons/fa";

function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="info">
          <div>
            <p className="name">Constanza Rassi</p>
            <p className="role">SOFTWARE DEVELOPER</p>
            <p className="description">
              I've been doing web design, front-end and back-end development for
              a year now. Do you need a website design, site layout, or maybe a
              turnkey website? Then contact me
            </p>
          </div>
          <div className="social">
            <FaInstagram />
            <FaLinkedin />
          </div>
        </div>
        <div className="me">{/* <img src={YO} alt="" /> */}</div>
      </div>

      <a href="#contact" className="scroll__down">
        Scroll Down
      </a>
    </div>
  );
}

export default Home;
