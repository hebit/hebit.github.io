import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
  html {
    font-size: 62.5%
  }
  body {
    /* background: ${(p) => p.theme.colors.background.overlay}; */
    background: url("http://api.thumbr.it/whitenoise-361x370.png?background=333333ff&noise=626262&density=10&opacity=36") ${(
      p
    ) => p.theme.colors.background.overlay};
  }

  a.tint {
    font-weight: 600;
    color: ${(p) => p.theme.palette.red.base};
    :visited {
      color: ${(p) => p.theme.palette.red.base};
    }
  }
`;
