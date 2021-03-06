import { createGlobalStyle } from 'styled-components';
import githubBackground from '../assets/github-background.svg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    background: ${(props) =>
      props.theme.colors.background} url(${githubBackground}) 70% top no-repeat;
    -webkit-font-smoothing: antialiased !important;
  }

  a {
    color: ${(props) => props.theme.colors.link}
  }
  a.hover {
    text-decoration: underline;
  }

  body, input, p, a, button {
    color: ${(props) => props.theme.colors.metalDark};
    font-size: ${(props) => props.theme.fontSizes.normal};
    font-family: ${(props) => props.theme.fonts};
  }

  small {
    font-size: ${(props) => props.theme.fontSizes.small};
  }

  button {
    cursor: pointer;
  }

  ::placeholder {
    color: ${(props) => props.theme.colors.champagne};
  }

  ::-webkit-scrollbar {
  width: 12px;
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(transparent, rgb(100, 150, 165));
    border-radius: 8px;
  }

`;
