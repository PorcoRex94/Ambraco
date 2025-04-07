import styled from "styled-components";

export const HeroContainer = styled.section`
  width: calc(100vw - var(--scrollbar-width));
  padding: 4rem 0rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

export const GlobalContainer = styled.div`
  width: 100%;
  display: flex;

  img {
    width: 40%;
    height: auto;
  }
`;

export const FirstContainer = styled.div`
  width: 60%;
  padding-left: 5rem;
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

export const SecondGlobalContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  text-align: center;

  h3 {
    padding: 1rem;
    border-bottom: 5px solid var(--ambar);
    border-top: 5px solid var(--ambar);
    font-size: 30px;
  }

  p {
    font-size: 30px;
  }

  a {
    color: var(--ambar);
  }
`;
