import Page from "../components/Page";
import { AnimatePresence } from "framer-motion";
import "../styles/global.scss";

function MyApp({ Component, pageProps, router }) {
  return (
    <Page>
      <AnimatePresence exitBeforeEnter initial={false}>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </Page>
  );
}

export default MyApp;
