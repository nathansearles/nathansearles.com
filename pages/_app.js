import Layout from "@components/Layout";
import "focus-visible";
import "@styles/globals.scss";

export default function Website({ Component, pageProps, router }) {
  const getLayout =
    Component.getLayout || ((page) => <Layout children={page} />);
  return getLayout(<Component {...pageProps} key={router.route} />);
}
