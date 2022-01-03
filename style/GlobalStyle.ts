
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';
import { Theme } from './theme';



const GlobalStyle = createGlobalStyle<{theme: Theme}>`
  ${normalize};
  *, *:before, *:after {  box-sizing: border-box; }

  body {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    box-sizing: border-box;
    background: ${({theme}) => theme.body};
    color: ${({theme}) => theme.text};
  }

  ul{list-style:none; padding:0; margin:0;}
  a{text-decoration: none;}
`;

export default GlobalStyle;