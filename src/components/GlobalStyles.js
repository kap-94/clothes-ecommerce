import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }
    
    html {
        font-size: 62.5%;

        // TODO: Create responsive font breakpoints
    }
    
    body {
        background-color: ${({ theme }) => theme.colors.black};
        color: ${({ theme }) => theme.colors.white};
        font-family: 'Montserrat', sans-serif;
        font-size: 1.35rem;
        line-height: 1.7;
        box-sizing: border-box;
    }
`;

export default GlobalStyles;
