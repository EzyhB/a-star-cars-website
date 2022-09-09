import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../components/styles/Theme/GlobalStyle.css";
import { lightTheme } from "../components/styles/Theme";
import { useState } from "react";
import NavBar from "../components/NavBar";

function MyApp({ Component, pageProps }: AppProps) {
  const [isLight, setIsLight] = useState(false);
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <NavBar isLight={isLight} setIsLight={setIsLight} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
