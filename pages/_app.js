import { AnimatePresence } from "framer-motion";
import "../styles/global.scss";

function Website({ Component, pageProps, router }) {
  return (
    <>
      <AnimatePresence exitBeforeEnter initial={true}>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </>
  );
}

export default Website;
