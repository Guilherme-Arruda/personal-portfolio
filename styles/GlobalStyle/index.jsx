import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    border: 0;
    padding: 0;
    box-sizing: border-box;
  }  
  body {
    background: #f6f8fa;
    color: #212529;
  }
  ol, ul {
    list-style: none;
    padding-left: 0;
  }
  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
