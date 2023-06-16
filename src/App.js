import React from "react";
import "./style.scss";
import Home from "./components/Home";
import Nav from "./components/Nav";
import About from "./components/About";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Home />
      <Nav />
      <About />
      <Skills />
    </>
  );
}

export default App;
