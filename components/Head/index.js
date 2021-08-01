import Head from "next/head";

export default function Header({ title }) {
  return (
    <Head>
      <title>{title ? `${title} | Nathan Searles` : `Nathan Searles`}</title>
      <meta
        name="viewport"
        key="viewport"
        content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=10.0,minimal-ui"
      />
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="Description"
        content="I'm a front-end developer and technical leader based in Portland, Oregon."
      />
      <meta
        name="title"
        property="og:title"
        content={`${title} | Nathan Searles`}
      />
      <meta name="author" content="Nathan Searles" />
      <meta name="theme-color" content="#141421" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@500;800&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
}
