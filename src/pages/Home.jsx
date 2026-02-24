import React, { useEffect, useRef, useState } from "react";
import HeroBgAnimation from "../components/HomeAnimation";
import { Bio } from "../data/constants";
import cvpdf from "../data/CV_Rassi.pdf";
import cvats from "../data/CV_Rassi_ATS.pdf";
import me from "../assets/me.JPEG";
import styled from "styled-components";

const HeroContainer = styled.div`
  background: ${({ theme }) => theme.card_light};
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  @media (max-width: 960px) {
    padding: 66px 16px;
  }
  @media (max-width: 640) {
    padding: 32px 16px;
  }
  z-index: 1;

  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;

const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0 0px;
  }
`;

const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 640px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const HeroRightContainer = styled.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: end;
  gap: 12px;
  @media (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;

const Img = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.primary};

  @media (max-width: 768px) {
    max-width: 400px;
    max-height: 400px;
  }

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 50px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 640px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

const Span = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
`;

const SubTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.text_primary + 95};

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 32px;
  }
`;

const ResumeButton = styled.a`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;
  width: 95%;
  max-width: 300px;
  text-align: center;
  padding: 16px 0;
  color: ${({ theme }) => theme.white};
  border-radius: 20px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
  transition: all 0.2s ease-in-out !important;
  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -moz-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -webkit-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  box-shadow: 20px 20px 60px #1f2634, -20px -20px 60px #1f2634;
  &:hover {
    transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow: 20px 20px 60px #1f2634;
    filter: brightness(1);
  }

  @media (max-width: 640px) {
    padding: 12px 0;
    font-size: 18px;
  }
`;

const ResumeActions = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  width: 95%;
  max-width: 360px;

  @media (max-width: 960px) {
    justify-content: center;
  }
`;

const MenuButton = styled.button`
  width: 44px;
  height: 44px;
  border-radius: 14px;
  border: 1px solid ${({ theme }) => theme.text_primary + 20};
  background: ${({ theme }) => theme.card_light};
  color: ${({ theme }) => theme.text_primary};
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  line-height: 1;

  &:hover {
    transform: scale(1.05);
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  left: 100%;
  margin-left: -140px;
  min-width: 190px;
  background: ${({ theme }) => theme.card_light};
  border: 1px solid ${({ theme }) => theme.text_primary + 20};
  border-radius: 14px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
  padding: 8px;
  z-index: 10;
`;

const MenuItem = styled.button`
  width: 100%;
  text-align: left;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  padding: 10px 12px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background: ${({ theme }) => theme.text_primary + 12};
  }
`;

const HeroSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const openPdfInNewTab = (pdfPath) => {
    window.open(pdfPath, "_blank", "noopener,noreferrer");
  };

  useEffect(() => {
    const onMouseDown = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    const onKeyDown = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <div id="about">
      <HeroContainer>
        <HeroBg>
          <HeroBgAnimation />
        </HeroBg>
        <HeroInnerContainer>
          <HeroLeftContainer id="Left">
            <Title>
              Hi there, I'm <br /> {Bio.name}
            </Title>
            <TextLoop>
              <Span>Software</Span> Developer
            </TextLoop>
            <SubTitle>{Bio.description}</SubTitle>

            <ResumeActions ref={menuRef}>
              <ResumeButton onClick={() => openPdfInNewTab(cvpdf)}>
                Check CV
              </ResumeButton>

              <MenuButton
                type="button"
                aria-label="More resume options"
                aria-haspopup="menu"
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((v) => !v)}
              >
                ⋮
              </MenuButton>

              {menuOpen && (
                <DropdownMenu role="menu">
                  <MenuItem
                    type="button"
                    role="menuitem"
                    onClick={() => {
                      setMenuOpen(false);
                      openPdfInNewTab(cvats);
                    }}
                  >
                    CV ATS Version
                  </MenuItem>
                </DropdownMenu>
              )}
            </ResumeActions>
          </HeroLeftContainer>

          <HeroRightContainer id="Right">
            <Img src={me} alt="hero-image" />
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};

export default HeroSection;
