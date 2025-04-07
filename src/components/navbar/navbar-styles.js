import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: calc(100vw - var(--scrollbar-width));
  background-color: var(--indigo);
  display: flex;
  justify-content: space-between;

  .nav__toggle {
    display: none;
  }

  @media (max-width: 960px) {
    .nav__toggle {
      display: flex;
      flex-direction: column;
      margin: 2rem;
    }

    .nav__toggle span {
      width: 30px;
      height: 4px;
      background-color: var(--ambar);
      margin-bottom: 5px;
      border: 2px;
      transform-origin: 6px 0px;
      transition: all 0.2s linear;
    }

    .nav__toggle.open > span {
      transform: rotate(45deg) translate(0px, 0px);
    }
    .nav__toggle.open > span:nth-child(2) {
      display: none;
    }
    .nav__toggle.open > span:nth-child(3) {
      transform: rotate(-45deg) translate(-5px, 1px);
    }
  }

  @media (max-width: 600px) {
    .nav__toggle {
      margin: 1rem;
    }
  }
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

  @media (min-width: 1024px) and (max-width: 1328px) {
    padding: 1rem 3rem;
  }

  @media (max-width: 960px) {
    img {
      display: none;
    }
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

  @media (min-width: 961px) and (max-width: 1328px) {
    width: 50%;
  }

  @media (max-width: 960px) {
    position: absolute;
    top: 6%;
    left: 0;
    background-color: var(--indigo);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: -webkit-fill-available;
    transform: translateX(-100%);
    transition: 0.3s ease all;
    transform: ${({ $isOpen }) =>
      $isOpen ? "translateX(0)" : "translateX(-100%)"};
  }
`;
