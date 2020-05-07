import Head from "next/head";

const Title = ({ title }) => {
  return (
    <Head>
      <title>{`${title} | Nathan Searles`}</title>
      <meta
        name="viewport"
        key="viewport"
        content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=10.0,minimal-ui"
      />
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="Description"
        content="I'm a frontend developer and technical leader based in Portland, Oregon."
      />
      <meta
        name="title"
        property="og:title"
        content={`${title} | Nathan Searles`}
      />
      <meta name="author" content="Nathan Searles" />
      <meta name="theme-color" content="#141421" />
      <link rel="manifest" href="/site.webmanifest" />
      <link
        href="https://fonts.googleapis.com/css?family=Inter:500,800&display=swap"
        rel="stylesheet"
        async
      />
    </Head>
  );
};

export default Title;
