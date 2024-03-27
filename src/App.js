import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { darkTheme, lightTheme } from "./utils/Themes.js";
import Navbar from "./components/Nav.jsx";
import "./style.scss";
import { BrowserRouter as Router } from "react-router-dom";
import HeroSection from "./pages/Home.jsx";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
// import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Certifications from "./pages/Certifications";
import ProjectDetails from "./components/ProjectDetail";
import CertificationDetails from "./components/CertificationDetail";
import styled from "styled-components";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;
function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [openModalProject, setOpenModalProject] = useState({
    state: false,
    project: null,
  });
  const [openModalCert, setOpenModalCert] = useState({
    state: false,
    certification: null,
  });
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        <Navbar />
        <Body>
          <HeroSection />
          <Wrapper>
            <Skills />
            <Experience />
          </Wrapper>
          <Projects
            openModalProject={openModalProject}
            setOpenModalProject={setOpenModalProject}
          />
          {openModalProject.state && (
            <ProjectDetails
              openModalProject={openModalProject}
              setOpenModalProject={setOpenModalProject}
            />
          )}
          <Wrapper>
            <Education />
            {/* <Contact /> */}
          </Wrapper>
          <Certifications
            openModalCert={openModalCert}
            setOpenModalCert={setOpenModalCert}
          />
          {openModalCert.state && (
            <CertificationDetails
              openModalCert={openModalCert}
              setOpenModalCert={setOpenModalCert}
            />
          )}
          <Footer />
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
