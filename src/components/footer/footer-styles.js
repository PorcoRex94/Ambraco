import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: calc(100vw - var(--scrollbar-width));
  display: flex;
  flex-direction: column;
`;

export const ContainerFooterTop = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 25px;
  margin-bottom: 3rem;

  img {
    width: 350px;
    height: auto;
  }
`;

export const UlContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;

  li > a {
    color: var(--indigo);
  }
`;

export const ContainerFooterBottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 18px;
  padding: 1rem;

  a {
    font-size: 1.05rem;
    color: var(--indigo);
  }

  a:hover {
    animation: pulse 1s infinite ease-in-out;
  }
`;

export const ContainerIcon = styled.div`
  display: flex;
  gap: 20px;

  a {
    font-size: 1.3rem;
  }
`;

export const Copyright = styled.div`
  text-align: center;
  padding: 1rem;
  background-color: var(--indigo);

  p {
    font-size: 1.5rem;
    color: var(--blanco);
  }

  span {
    color: var(--ambar);
  }
`;
