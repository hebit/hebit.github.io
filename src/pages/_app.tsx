import React from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "normalize.css/normalize.css";

import GlobalStyle from "../styles/global";
import theme from "../styles/theme";
// import { ThemeProvider } from "evergreen-ui";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default MyApp;
