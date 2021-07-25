import "../styles/global.scss";

function Website({ Component, pageProps, router }) {
  return <Component {...pageProps} key={router.route} />;
}

export default Website;
