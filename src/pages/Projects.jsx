import { useState, useMemo, useCallback } from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/constants";

import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(
    343.07deg,
    rgba(132, 59, 206, 0.06) 5.71%,
    rgba(132, 59, 206, 0) 64.83%
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 100% 98%, 0 100%);
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 10px 0px 100px 0;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

export const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

export const ToggleButtonGroup = styled.div`
  display: flex;
  border: 1.5px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  font-size: 16px;
  border-radius: 12px;
  font-weight: 500;
  margin: 22px 0px;
  overflow: hidden; /* para que el borde interior quede prolijo */
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const ToggleButton = styled.div`
  padding: 8px 18px;
  cursor: pointer;
  /* separador entre botones sin usar <Divider /> */
  & + & {
    border-left: 1.5px solid ${({ theme }) => theme.primary};
  }

  ${({ active, theme }) =>
    active &&
    `
      background: ${theme.primary + 20};
    `}
  &:hover {
    background: ${({ theme }) => theme.primary + 8};
  }
  @media (max-width: 768px) {
    padding: 6px 8px;
  }
`;

export const Divider = styled.div`
  width: 1.5px;
  background: ${({ theme }) => theme.primary};
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
  // display: grid;
  // grid-template-columns: repeat(3, 1fr);
  // grid-gap: 32px;
  // grid-auto-rows: minmax(100px, auto);
  // @media (max-width: 960px) {
  //     grid-template-columns: repeat(2, 1fr);
  // }
  // @media (max-width: 640px) {
  //     grid-template-columns: repeat(1, 1fr);
  // }
`;

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

  // si tenés projects en props, añadilo al array de deps
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