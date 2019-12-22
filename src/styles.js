import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;  
  }
  
  html {
    font-size: 16px;
  }
  
  body {
    max-width: 100vw;
    min-height: 100vh;
    background: #484848;  
  }
`;
