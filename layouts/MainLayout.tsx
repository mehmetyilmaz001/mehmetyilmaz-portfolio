import Head from "next/head";
import { FunctionComponent, useState } from "react";
import Header from "./components/Header";
import Container from "./components/Container";
import Game from "../components/Game/Game";
import { AnimatePresence, motion } from "framer-motion";

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
  // const themeToggler = () => {
  //   selectedTheme === "light" ? setTheme("dark") : setTheme("light");
  // };
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };

  return (
    <>
      <Head>
        <title>
          {title} | Mehmet Yilmaz | Senior Frontend Developer | mehmetyilmaz.dev
        </title>
        <meta name="description" content={description} />
        <meta property="og:site_name" content="Mehmet Yılmaz Portfolio" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <motion.main
          variants={variants} // Pass the variant object into Framer Motion
          initial="hidden" // Set the initial state to variants.hidden
          animate="enter" // Animated state to variants.enter
          exit="exit" // Exit state (used later) to variants.exit
          transition={{ type: "linear" }} // Set the transition to linear
          className=""
        >
          <Container>{children}</Container>
        </motion.main>
      </AnimatePresence>
      <footer style={{ textAlign: "center" }}>
        <Game />
        <span style={{ fontSize: 11 }}>
          {" "}
          © {new Date().getFullYear()} Mehmet Yılmaz{" "}
        </span>
      </footer>
    </>
  );
};

export default MainLayout;
