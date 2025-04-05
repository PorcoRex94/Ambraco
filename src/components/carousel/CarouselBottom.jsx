import React, { useState } from "react";
import styled from "styled-components";

const projects = [
  {
    id: 1,
    title: "Allwin",
    src: "assets/imgs/img/allwin-iberica-desarrollo-web.jpg",
    link: "https://allwiniberica.com/",
  },
  {
    id: 2,
    title: "Clorar",
    src: "assets/imgs/img/clorar-argentina-desarrollo-web.jpg",
    link: "https://clorar.com/",
  },
  {
    id: 3,
    title: "Diji",
    src: "assets/imgs/img/diji-iberica-desarrollo-web.jpg",
    link: "https://diji.es/",
  },
  {
    id: 4,
    title: "Flora",
    src: "assets/imgs/img/flora-iberica-desarrollo-web.jpg",
    link: "https://floraprinteriberica.com/",
  },
  {
    id: 5,
    title: "Daniel Moras",
    src: "assets/imgs/img/daniel-moras-diseño-desarrollo-web.jpg",
    link: "https://danielmoras.com.ar/",
  },
];

const projectsTwo = [
  {
    id: 1,
    title: "Isd SA",
    src: "assets/imgs/img/isd-argentina-desarrollo-web.jpg",
    link: "https://isdsa.com.ar/",
  },
  {
    id: 2,
    title: "Jalaca",
    src: "assets/imgs/img/jalaca-argentina-desarrollo-web.jpg",
    link: "https://jalaca.com.ar/",
  },
  {
    id: 3,
    title: "J&M Comex",
    src: "assets/imgs/img/jmcomex-diseño-desarrollo-web.jpg",
    link: "https://jmcomercioexterior.com.ar/",
  },
  {
    id: 4,
    title: "Proone Husqvarna",
    src: "assets/imgs/img/proone-husqvarna-desarrollo-web.jpg",
    link: "https://proone.com.ar/",
  },
  {
    id: 5,
    title: "Solvent",
    src: "assets/imgs/img/solvent-diseño-desarrollo-web.jpg",
    link: "https://solvent.com.ar/",
  },
  {
    id: 6,
    title: "Umbrellas",
    src: "assets/imgs/img/umbrellas-muebles-desarrollo-web.jpg",
    link: "https://umbrellas.com.ar/",
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
  margin-top: -125px;
  margin-bottom: -125px;

  h2 {
    position: relative;
    left: -550px;
    top: 50px;
    font-size: 2rem;
  }
`;

const MotionRow = styled.div`
  display: flex;
  white-space: nowrap;
  gap: 30px;
  margin-top: -105px;
  background-color: var(--blanco);

  animation: ${({ speed, direction }) =>
    `scroll ${speed}s linear infinite ${
      direction === "left" ? "" : "reverse"
    }`};
  animation-play-state: ${({ $paused }) => ($paused ? "paused" : "running")};

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

export const CarouselBottom = () => {
  const [pauseRow1, setPauseRow1] = useState(false);
  const [pauseRow2, setPauseRow2] = useState(false);

  return (
    <CarouselContainer>
      <h2>NUESTROS CLIENTES</h2>
      <MotionRow speed={20} direction="left" $paused={pauseRow1}>
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
      <MotionRow speed={22} direction="right" $paused={pauseRow2}>
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
