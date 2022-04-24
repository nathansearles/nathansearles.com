import Head from "next/head";

export default function CustomHead() {
  return (
    <Head>
      <title>Nathan Searles</title>
      <meta
        name="viewport"
        key="viewport"
        content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=10.0, minimal-ui, viewport-fit=cover"
      />
      <meta name="title" content="Nathan Searles" />
      <meta
        name="description"
        content="Portland, Oregon based front-end developer and technical director with a focus on design, user experience and accessability."
      />
      <link
        rel="alternate icon"
        class="js-site-favicon"
        type="image/png"
        href="/favicon.png"
      />
      <link
        rel="icon"
        class="js-site-favicon"
        type="image/svg+xml"
        href="/favicon.svg"
      />
      <meta name="theme-color" content="#141414" />
      <link rel="manifest" href="/site.webmanifest" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://nathansearles.com/" />
      <meta property="og:title" content="Nathan Searles" />
      <meta
        property="og:description"
        content="Portland, Oregon based front-end developer and technical director with a focus on design, user experience and accessability."
      />
      <meta
        property="og:image"
        content="https://nathansearles.com/preview.jpg"
      />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://nathansearles.com/" />
      <meta property="twitter:title" content="Nathan Searles" />
      <meta
        property="twitter:description"
        content="Portland, Oregon based front-end developer and technical director with a focus on design, user experience and accessability."
      />
      <meta
        property="twitter:image"
        content="https://nathansearles.com/preview.jpg"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@500;600;900&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
}
