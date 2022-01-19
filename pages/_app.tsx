import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import SiteContextProvider from "../context/SiteContext";
import GlobalStyle from "../style/GlobalStyle";
import theme from "../style/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SiteContextProvider>
      <ThemeProvider theme={theme.lightTheme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </SiteContextProvider>
  );
}

export default MyApp;
