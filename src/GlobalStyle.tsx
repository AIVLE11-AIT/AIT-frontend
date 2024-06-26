import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Spartan';
    src: url('https://fonts.cdnfonts.com/css/spartan');
    font-weight: 400;
    font-style: normal;
}

@font-face {
    font-family: 'Spartan';
    src: url('https://fonts.cdnfonts.com/css/spartan');
    font-weight: 500;
    font-style: normal;
}

@font-face {
    font-family: 'Spartan';
    src: url('https://fonts.cdnfonts.com/css/spartan');
    font-weight: 600;
    font-style: normal;
}

@font-face {
    font-family: 'Spartan';
    src: url('https://fonts.cdnfonts.com/css/spartan');
    font-weight: 700;
    font-style: normal;
}

  html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
html,body {
  line-height: 1;
  max-width: 100%;
  height: 100%;
  overflow-x: hidden;
  font-family: 'Pretendard-Regular';
  position: relative;
}

#root {
  position: relative;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

* {
  box-sizing: border-box;
}

a {
  text-decoration: none;
  color:inherit;
}

button {
  cursor: pointer;
}

input {
  outline: none;
}

`;