import { useState, useEffect } from "react";
import ScrollContext from "../components/ScrollContext";
import { AnimatePresence } from "framer-motion";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import "../styles/global.scss";

function MyApp({ Component, pageProps, router }) {
  const [scrollPos, setScrollPos] = useState(0);
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

  const handleScrollPos = (value) => {
    setScrollPos(value);
  };

  return (
    <ScrollContext.Provider
      value={{
        currentScroll: scrollPos,
        updateScroll: handleScrollPos,
      }}
    >
      <AnimatePresence exitBeforeEnter initial={true}>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
      <Layout isActive={layoutActive} />
      <Footer />
    </ScrollContext.Provider>
  );
}

export default MyApp;
