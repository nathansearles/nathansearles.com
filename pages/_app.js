import { useEffect } from "react";
import "focus-visible";
import Lenis from "@studio-freight/lenis";
import Layout from "@components/Layout";
import "@styles/globals.scss";

export default function Website({ Component, pageProps, router }) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smooth: true,
    });
    function raf() {
      lenis.raf();
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  const getLayout =
    Component.getLayout || ((page) => <Layout children={page} />);
  return getLayout(<Component {...pageProps} key={router.route} />);
}
