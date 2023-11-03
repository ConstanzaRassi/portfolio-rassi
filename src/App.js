import React from "react";
import "./style.scss";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Portfolio from "./pages/Portfolio";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Nav />
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Footer />
    </>
  );
}

export default App;
