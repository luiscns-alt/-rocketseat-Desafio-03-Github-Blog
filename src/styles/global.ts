import { createGlobalStyle } from 'styled-components'
import firaCode from '../assets/fonts/Fira_Code_v6.2/FiraCode-Regular.woff'

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'FiraCode';
    src: url(${firaCode}) format('woff');
    font-weight: 400;
    font-style: normal;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    border: none;
    text-decoration: none;

    ::-webkit-scrollbar {
      width: 1rem;
    }
    ::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.colors['--border']}
    }
    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.colors['--blue']};
      border-radius: 999px;
    }
  }
  html {
    /* 1rem = 16px (User Agent) = 100% (User Agent) */
    font-size: 62.5%; /* 10px */
  }

  body {
    background: ${({ theme }) => theme.colors['--background']};
    color: ${({ theme }) => theme.colors['--text']};
    -webkit-font-smoothing: antialiased;
  }
  body, input, textarea, button {
    font: 400 ${({ theme }) =>
      theme.textSizes['--text-M']} 'Nunito', sans-serif;
    line-height: 160%;
  }
  ul {
    list-style: none;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  button {
    cursor: pointer;
  }
`
