import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
 
  @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;1,400;1,700;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
 
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Lato', sans-serif;
    font-family: 'Roboto', sans-serif;
    text-decoration: none;

 background:#eeeaea;
  }
  h1{
    font-size: 19px;
    padding: 5px 10px;
    font-family: "Lato";
    font-style: normal;
    font-weight: 800;
    line-height: 12px;
  }
 
`;

export default GlobalStyles;
