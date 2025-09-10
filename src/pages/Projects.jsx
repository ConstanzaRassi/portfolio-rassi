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
import { useState, useMemo, useCallback } from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/constants";

const TOGGLES = [
  { value: "all", label: "All" },
  { value: "work", label: "WORK" },
  { value: "personal", label: "PERSONAL" },
];

const Projects = ({ openModalProject, setOpenModalProject }) => {
  const [toggle, setToggle] = useState("all");

  const handleToggle = useCallback(
    (val) => {
      if (val !== toggle) setToggle(val);
    },
    [toggle]
  );

  const filteredProjects = useMemo(() => {
    if (toggle === "all") return projects;
    return projects.filter((p) => p.category === toggle);
  }, [toggle]);

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>Here are some of the projects I have worked on.</Desc>

        <ToggleButtonGroup>
          {TOGGLES.map((opt) => (
            <ToggleButton
              key={opt.value}
              active={toggle === opt.value}
              value={opt.value}
              onClick={() => handleToggle(opt.value)}
            >
              {opt.label}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>

        <CardContainer>
          {filteredProjects.map((project, idx) => (
            <ProjectCard
              key={project.id ?? project.slug ?? project.title ?? idx}
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