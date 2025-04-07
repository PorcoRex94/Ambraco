import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        list-style: none;
        box-sizing: border-box;
        text-decoration: none;
    }

    :root{
        --indigo: #1b0035;
        --ambar: #ff9b2e;
        --gris: #5f5666;
        --blanco: #ffffff;
    }

    @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }

    body{
      overflow-x: hidden;
    }

`;

export const Btn = styled.a`
  background-color: var(--indigo);
  color: var(--ambar);
  padding: 0.5rem 1.5rem;
  border-radius: 20px;
`;

export const ContainerWaveTop = styled.div`
  width: 100%;
  position: relative;
  top: 4px;
`;

export const ContainerWaveBottom = styled.div`
  width: 100%;
  position: relative;
  z-index: 50;
`;
