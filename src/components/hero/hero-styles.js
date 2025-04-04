import styled from "styled-components";

export const HeroContainer = styled.section`
  width: calc(100vw - var(--scrollbar-width));
  padding: 4rem 0rem;
`;

export const GlobalContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  img {
    width: 40%;
    height: auto;
  }
`;

export const FirstContainer = styled.div`
  width: 60%;
  padding-left: 6rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;

  h1 {
    font-size: 40px;
  }

  .first__p {
    width: 75%;
    font-size: 30px;
  }
`;
