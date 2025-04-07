import styled from "styled-components";

export const GlobalSection = styled.section`
  width: calc(100vw - var(--scrollbar-width));
  display: flex;
  justify-content: space-between;
  gap: 35px;
  background-color: var(--indigo);
`;

export const FirstContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 1.5rem 1.5rem 1.5rem 4rem;
  h2 {
    font-size: 2rem;
    color: var(--ambar);
  }

  p {
    font-size: 1.6rem;
    color: var(--blanco);
    width: 95%;
  }
`;

export const SecondContainer = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  padding: 1.5rem 5rem 0rem 0rem;

  textarea {
    width: 100%;
    height: 100px;
    background-color: var(--indigo);
    width: 100%;
    background-color: var(--indigo);
    border-left: none;
    border-right: none;
    border-top: none;
    border-bottom: 3px solid var(--ambar);
    color: var(--blanco);
  }

  textarea:focus {
    outline: none;
  }

  button {
    border-radius: 50px;
    padding: 1rem 3rem;
    background-color: var(--ambar);
    color: var(--indigo);
    font-size: 1rem;
    cursor: pointer;
  }

  button:hover {
    animation: pulse 1s infinite ease-in-out;
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 25px;

  input {
    width: 50%;
    background-color: var(--indigo);
    border-left: none;
    border-right: none;
    border-top: none;
    border-bottom: 3px solid var(--ambar);
    color: var(--blanco);
  }

  input:focus {
    outline: none;
  }
`;
