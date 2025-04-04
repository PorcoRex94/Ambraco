import styled from "styled-components";

export const SeparadorContainer = styled.div`
  position: relative;
  z-index: 15;
  top: 4px;
`;

export const TextContainer = styled.div`
  width: calc(100vw - var(--scrollbar-width));
  background-color: var(--indigo);
  padding: 3rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    width: 65%;
    color: var(--blanco);
    font-size: 1.25rem;
  }
`;
