import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    
    
    * {
        box-sizing: border-box;
        margin: 0;
        transition: all 0.5s ease;
    }

    body {
        background: ${(props) => props.theme.pallette.background};
        color: ${(props) => props.theme.pallette.text};
        font-family: 'Epilogue', sans-serif;
        font-size: 1.15rem;
    }

    p {
        opacity: 0.9;
        line-height: 1.5;
    }

    img {
        max-width: 100%;
    }
`;

export default GlobalStyles;
