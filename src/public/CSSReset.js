import { createGlobalStyle } from "styled-components";

export const CSSReset = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

:root{
    font-size: 62.5%;
}

body{
    font-size: 1.6rem;
    background-color: #121214;
    color: #fff;

    padding: 14rem 13.4rem 14rem 11.1rem;
}

img{
    width: 100%;
    height: 100%;

    object-fit: cover;
    aspect-ratio: 1/1;
}

`;
