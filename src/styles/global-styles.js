import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap');

  * {
    border: none;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border-radius: 0;
    list-style: none;
    font-family: 'Nunito Sans', sans-serif;
    text-decoration: none;

  };

  body {
    ${({ theme }) => css`
    background: ${theme.primaryColor};
    transition: all 400ms ease-in-out;
  `}
  }

  h1, h2, h3, h4, h5, h6 {
    ${({ theme }) => css`
    color: ${theme.color};
  `}
  transition: all 400ms ease-in-out;
  }
`;
