import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: calc(100vw - var(--scrollbar-width));
  background-color: var(--indigo);
`;

export const NavContainer = styled.nav`
  width: 100%;
  padding: 1rem 7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 250px;
    height: auto;
  }
`;

export const ItemsContainer = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 35%;

  li > a {
    color: var(--blanco);
  }

  .li__diferente {
    color: var(--indigo);
    background-color: var(--ambar);
    padding: 0.5rem 1.5rem;
    border-radius: 20px;
  }

  li > a:hover {
    animation: pulse 1s infinite ease-in-out;
  }
`;
