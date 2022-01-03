import Head from "next/head";
import { FunctionComponent, useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../style/GlobalStyle";
import Header from "./components/Header";
import Container from "./components/Container";

interface MainLayoutProps {
  title: string;
  description: string;
}

const MainLayout: FunctionComponent<MainLayoutProps> = ({
  children,
  title,
  description,
}) => {
  const [selectedTheme, setTheme] = useState("light");
  const themeToggler = () => {
    selectedTheme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <>
      <Head>
        <title>
          {title} | Mehmet Yilmaz | Senior Frontend Developer | mehmetyilmaz.dev
        </title>
        <meta name="description" content={description} />
        <meta property="og:site_name" content="Portfolio" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <Container>{children}</Container>
      </main>
      <footer></footer>
    </>
  );
};

export default MainLayout;
