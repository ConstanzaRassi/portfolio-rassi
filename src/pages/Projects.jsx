import React from "react";
import { useState } from "react";
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
} from "./ProjectsStyle";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/constants";

const Projects = ({ openModalProject, setOpenModalProject }) => {
  const [toggle, setToggle] = useState("all");
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>Here are some of the projects I have worked on.</Desc>
        <ToggleButtonGroup>
          {toggle === "all" ? (
            <ToggleButton active value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          ) : (
            <ToggleButton value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          )}
          <Divider />
          {toggle === "full stack" ? (
            <ToggleButton
              active
              value="full stack"
              onClick={() => setToggle("full stack")}
            >
              FULL STACK
            </ToggleButton>
          ) : (
            <ToggleButton
              value="full stack"
              onClick={() => setToggle("full stack")}
            >
              FULL STACK
            </ToggleButton>
          )}
          <Divider />
          {toggle === "front end" ? (
            <ToggleButton
              active
              value="front end"
              onClick={() => setToggle("front end")}
            >
              FRONT END
            </ToggleButton>
          ) : (
            <ToggleButton
              value="front end"
              onClick={() => setToggle("front end")}
            >
              FRONT END
            </ToggleButton>
          )}
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === "all" &&
            projects.map((project) => (
              <ProjectCard
                project={project}
                openModalProject={openModalProject}
                setOpenModalProject={setOpenModalProject}
              />
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard
                project={project}
                openModalProject={openModalProject}
                setOpenModalProject={setOpenModalProject}
              />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
