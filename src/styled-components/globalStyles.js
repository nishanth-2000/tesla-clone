import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family:'Rubik', sans-serif;
    overflow-x: hidden;
}

@keyframes animateDown {
    0%,20%,50%,80%,100% {
        transform: translateY(0);
    }

    40%{
        transform: translateY(5px);
    }

    60%{
        transform: translateY(3px);
    }
}
`;
