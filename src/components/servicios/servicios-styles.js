import styled from "styled-components";

export const ServiciosContainer = styled.section`
  width: calc(100vw - var(--scrollbar-width));
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  background-color: var(--indigo);

  h2 {
    color: var(--ambar);
  }

  .last__p {
    font-size: 1.15rem;
    color: var(--blanco);
    margin-bottom: 0.5rem;
  }

  a {
    color: var(--ambar);
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding: 2rem;
  width: 78%;
`;

export const Card = styled.div`
  border-radius: 20px;
  padding: 1.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 6px solid var(--ambar);
`;

export const CardImage = styled.img`
  width: 80px;
  height: 60px;
  margin-bottom: 1rem;
`;

export const CardTitle = styled.h4`
  margin-bottom: 0.5rem;
  font-size: 1.3rem;
  color: var(--ambar);
`;

export const CardText = styled.p`
  font-size: 1.15rem;
  color: var(--blanco);
`;
