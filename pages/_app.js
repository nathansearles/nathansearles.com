import { useEffect } from "react";
import ScrollManager from "../components/ScrollManager";
import Page from "../components/Page";
import { AnimatePresence } from "framer-motion";
import "../styles/global.scss";

function MyApp({ Component, pageProps, router }) {
  useEffect(() => {
    if ("scrollRestoration" in history) {
      // Handle scroll position with ScrollManager
      history.scrollRestoration = "manual";
    }
  }, []);

  return (
    <ScrollManager>
      <Page>
        <AnimatePresence exitBeforeEnter initial={false}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Page>
    </ScrollManager>
  );
}

export default MyApp;
