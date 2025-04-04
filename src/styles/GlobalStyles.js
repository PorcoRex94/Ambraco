import { createGlobalStyle } from "styled-components";

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
`;
