import { useState, useEffect } from "react";
import ScrollManager from "../components/ScrollManager";
import Page from "../components/Page";
import { AnimatePresence } from "framer-motion";
import TopBar from "../components/TopBar";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import "../styles/global.scss";

function MyApp({ Component, pageProps, router }) {
  const [layoutActive, setLayoutGrid] = useState(false);

  const toggleGrid = ({ key }) => {
    if (key === "g") {
      setLayoutGrid((prevState) => !prevState);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", toggleGrid);
    return () => {
      window.removeEventListener("keydown", toggleGrid);
    };
  }, []);

  useEffect(() => {
    if ("scrollRestoration" in history) {
      // Handle scroll position with ScrollManager
      history.scrollRestoration = "manual";
    }
  }, []);

  return (
    <ScrollManager>
      <TopBar />
      <AnimatePresence exitBeforeEnter initial={true}>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
      <Layout isActive={layoutActive} />
      <Footer />
    </ScrollManager>
  );
}

export default MyApp;
