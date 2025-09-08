import { CloseRounded, GitHub, LinkedIn } from "@mui/icons-material";
import { Modal } from "@mui/material";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #000000a7;
  display: flex;
  align-items: top;
  justify-content: center;
  overflow-y: scroll;
  transition: all 0.5s ease;
`;

const Wrapper = styled.div`
  max-width: 1000px;
  width: 100%;
  border-radius: 16px;
  margin: 50px 12px;
  height: min-content;
  background-color: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text_primary};
  padding: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

/* Grid 2 columnas en desktop */
const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  @media (min-width: 900px) {
    grid-template-columns: 1fr 1.1fr; /* imagen | texto */
    gap: 24px;
    align-items: stretch; /* Columnas con la misma altura */
  }
`;

/* Columna izquierda: se estira y centra la imagen en ambos ejes (solo desktop) */
const LeftCol = styled.div`
  /* Por defecto (mobile): imagen arriba y centrada horizontal */
  display: flex;
  justify-content: center;
  align-items: flex-start;

  /* Para que tome toda la altura de la fila del grid */
  align-self: stretch;

  @media (min-width: 900px) {
    /* En desktop, centrado vertical y horizontal */
    align-items: center;
  }
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin: 0 6px;
  @media only screen and (max-width: 600px) {
    font-size: 24px;
    margin: 0 6px;
  }
`;

const Date = styled.div`
  font-size: 16px;
  margin: 2px 6px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Desc = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary};
  margin: 8px 6px;
  @media only screen and (max-width: 600px) {
    font-size: 14px;
    margin: 6px 6px;
  }
`;

/* Imagen compacta y centrada dentro de su columna */
const Image = styled.img`
  width: 100%;
  max-width: 520px;   /* limita el ancho para que no toque bordes */
  height: auto;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  border-radius: 12px;
  margin: 4px 0;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);

  @media (max-width: 900px) {
    max-width: 100%;
  }
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 8px 6px;
  @media only screen and (max-width: 600px) {
    margin: 6px 6px;
  }
`;

const Tag = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.primary};
  margin: 4px;
  padding: 4px 8px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.primary + 20};
  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 12px 0px;
  gap: 12px;
`;

const Button = styled.a`
  width: 100%;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  padding: 12px 16px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.primary};
  text-decoration: none;
  transition: all 0.5s ease;
  cursor: pointer;

  ${({ dull, theme }) =>
    dull &&
    `
      background-color: ${theme.bgLight};
      color: ${theme.text_secondary};
      &:hover { background-color: ${theme.bg + 99}; }
    `}

  &:hover { background-color: ${({ theme }) => theme.primary + 99}; }

  ${({ disabled }) =>
    disabled &&
    `
      pointer-events: none;
      opacity: 0.5;
      cursor: default;
      background-color: ${({ theme }) => theme.primary};
    `}

  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

const index = ({ openModalProject, setOpenModalProject }) => {
  const project = openModalProject?.project;

  return (
    <Modal
      open={true}
      onClose={() => setOpenModalProject({ state: false, project: null })}
    >
      <Container>
        <Wrapper>
          <CloseRounded
            style={{
              position: "absolute",
              top: "10px",
              right: "20px",
              cursor: "pointer",
            }}
            onClick={() => setOpenModalProject({ state: false, project: null })}
          />

          <Content>
            {/* Columna izquierda: imagen centrada h & v en desktop */}
            <LeftCol>
              <Image src={project?.image} loading="lazy" />
            </LeftCol>

            {/* Columna derecha: texto y acciones */}
            <div>
              <Title>{project?.title}</Title>
              <Date>{project?.date}</Date>

              <Tags>
                {project?.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </Tags>

              <Desc>
                {project?.description.split("\n").map((text, i) => (
                  <React.Fragment key={i}>
                    {text}
                    <br />
                  </React.Fragment>
                ))}
              </Desc>

              <ButtonGroup>
                {project?.private ? (
                  <Button disabled={true}>Closed Source</Button>
                ) : (
                  <>
                    <Button dull href={project?.github} target="new">
                      View Code
                    </Button>
                    <Button href={project?.webapp} target="new">
                      View Live App
                    </Button>
                  </>
                )}
              </ButtonGroup>
            </div>
          </Content>
        </Wrapper>
      </Container>
    </Modal>
  );
};

export default index;
