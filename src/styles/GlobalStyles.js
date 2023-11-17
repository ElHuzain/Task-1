import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle(() => `
*, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font: inherit;
}

#root {
    min-height: 100vh;
    padding: 4rem 0;
    width: 100%;
    background-color: #22222E;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    font-family: arial;
}
`);

export default GlobalStyles;