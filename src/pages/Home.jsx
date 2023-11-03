import React from "react";
import ME from "../assets/home.png";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { Container, Col, Row, Image } from "react-bootstrap";

function Home() {
  return (
    <div className="full-height">
      <Container>
        <Row className="d-flex justify-content-center align-items-center">
          <Col md={6}>
            <h2>Título del Texto</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              vehicula metus nec libero lacinia, a gravida sapien vestibulum.
              Nullam non lacus nec eros tincidunt vestibulum.
            </p>
          </Col>
          <Col md={6}>
            <img src={ME} alt="Foto" className="imagen" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
