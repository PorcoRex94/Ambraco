import React, { useState } from "react";
import styled from "styled-components";

const projects = [
  {
    id: 1,
    title: "Proyecto 1",
    src: "assets/imgs/img/marketing-tradicional-campañas-eventos.svg",
    color: "#FF5733",
    link: "https://danielmoras.com.ar/",
  },
  {
    id: 2,
    title: "Proyecto 2",
    src: "assets/imgs/img/plantillas-web-economicas.svg",
    color: "#33FF57",
    link: "https://danielmoras.com.ar/",
  },
  {
    id: 3,
    title: "Proyecto 3",
    src: "assets/imgs/img/posicionamiento-organico-seo.svg",
    color: "#3357FF",
    link: "https://danielmoras.com.ar/",
  },
  {
    id: 4,
    title: "Proyecto 4",
    src: "assets/imgs/img/branding-poderoso-identidad-de-marca.svg",
    color: "#F4C542",
    link: "https://danielmoras.com.ar/",
  },
  {
    id: 5,
    title: "Proyecto 5",
    src: "assets/imgs/img/branding-poderoso-identidad-de-marca.svg",
    color: "#F4C542",
    link: "https://danielmoras.com.ar/",
  },
];

const projectsTwo = [
  {
    id: 1,
    title: "Proyecto 1",
    src: "assets/imgs/img/diseño-desarrollo-sitio-web.svg",
    color: "#FF5733",
    link: "https://danielmoras.com.ar/",
  },
  {
    id: 2,
    title: "Proyecto 2",
    src: "assets/imgs/img/diseño-desarrollo-sitio-web.svg",
    color: "#33FF57",
    link: "https://danielmoras.com.ar/",
  },
  {
    id: 3,
    title: "Proyecto 3",
    src: "assets/imgs/img/visibilidad-marketing-digital.svg",
    color: "#3357FF",
    link: "https://danielmoras.com.ar/",
  },
  {
    id: 4,
    title: "Proyecto 4",
    src: "assets/imgs/img/posicionamiento-organico-seo.svg",
    color: "#F4C542",
    link: "https://danielmoras.com.ar/",
  },
  {
    id: 5,
    title: "Proyecto 5",
    src: "assets/imgs/img/posicionamiento-organico-seo.svg",
    color: "#F4C542",
    link: "https://danielmoras.com.ar/",
  },
];

// 🔥 Duplicamos el array para lograr el efecto infinito sin cortes
const infiniteProjects = [...projects, ...projects];
const infiniteProjectsTwo = [...projectsTwo, ...projectsTwo];

// 🎥 Contenedor general del carrusel
const CarouselContainer = styled.div`
  position: relative;
  width: 103vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: var(--blanco);
  z-index: 1;
  margin: -68px;

  .row__top {
    position: relative;
    z-index: 10;
  }
`;

const MotionRow = styled.div`
  display: flex;
  white-space: nowrap;
  gap: 30px;
  margin-top: -105px;
  background-color: #f5f5f5;

  animation: ${({ speed, direction }) =>
    `scroll ${speed}s linear infinite ${
      direction === "left" ? "" : "reverse"
    }`};
  animation-play-state: ${({ paused }) => (paused ? "paused" : "running")};

  @keyframes scroll {
    from {
      transform: perspective(20000px) rotateX(-50deg) rotateY(20deg)
        translateX(0);
    }
    to {
      transform: perspective(20000px) rotateX(-50deg) rotateY(20deg)
        translateX(-30%);
    }
  }
`;

const ProjectCard = styled.a`
  width: 380px;
  height: 400px;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px) rotate3d(1, 1, 0, 10deg);
    box-shadow: 20px 20px 5px rgba(0, 0, 0, 0.5);
  }
`;

const ProjectImage = styled.img`
  width: 90%;
  height: 90%;
  transition: transform 0.3s ease;
  border-radius: 10px;
  background-color: #f5f5f5;

  ${ProjectCard}:hover & {
    transform: scale(1.1);
  }
`;

export const Carousel = () => {
  const [pauseRow1, setPauseRow1] = useState(false);
  const [pauseRow2, setPauseRow2] = useState(false);
  return (
    <CarouselContainer>
      <MotionRow
        className="row__top"
        speed={20}
        direction="left"
        paused={pauseRow1}
      >
        {infiniteProjects.map((project, index) => (
          <ProjectCard
            key={index}
            href={project.link}
            target="_blank"
            onMouseEnter={() => setPauseRow1(true)}
            onMouseLeave={() => setPauseRow1(false)}
          >
            <ProjectImage src={project.src} alt={project.title} />
          </ProjectCard>
        ))}
      </MotionRow>
      <MotionRow speed={22} direction="right" paused={pauseRow2}>
        {infiniteProjectsTwo.map((projectTwo, index) => (
          <ProjectCard
            key={index}
            href={projectTwo.link}
            target="_blank"
            onMouseEnter={() => setPauseRow2(true)}
            onMouseLeave={() => setPauseRow2(false)}
          >
            <ProjectImage src={projectTwo.src} alt={projectTwo.title} />
          </ProjectCard>
        ))}
      </MotionRow>
    </CarouselContainer>
  );
};
