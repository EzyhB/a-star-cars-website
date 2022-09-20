import type { AppProps } from "next/app";
import { ThemeProvider, useTheme } from "styled-components";
import GlobalStyles from "../components/styles/Theme/GlobalStyle.css";
import { lightTheme, darkTheme } from "../components/styles/Theme";
import { useState } from "react";
import NavBar from "../components/NavBar";
import { Container } from "../components/styles/Container";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  const [isLight, setIsLight] = useState(false);
  const theme = useTheme();
  return (
    <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
      <GlobalStyles />

      <NavBar isLight={isLight} setIsLight={setIsLight} />

      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
