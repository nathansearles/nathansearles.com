import { useState, useEffect } from "react";
import ScrollManager from "../components/ScrollManager";
import Page from "../components/Page";
import { AnimatePresence } from "framer-motion";
import Grid from "../components/Grid";
import "../styles/global.scss";

function MyApp({ Component, pageProps, router }) {
  const [gridActive, setGridActive] = useState(false);

  const toggleGrid = ({ key }) => {
    if (key === "g") {
      setGridActive((prevState) => !prevState);
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
      <Page>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Page>
      <Grid isActive={gridActive} />
    </ScrollManager>
  );
}

export default MyApp;
