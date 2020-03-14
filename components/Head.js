import Head from "next/head";

const Title = ({ title }) => {
  return (
    <Head>
      <title>{`${title} | Nathan Searles - Frontend engineer`}</title>
      <meta
        name="viewport"
        key="viewport"
        content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=10.0,minimal-ui"
      />
      <link rel="icon" href="/static/favicon.ico" />
      <meta
        name="Description"
        content="Frontend engineer focused on technology that drives great user experience and design."
      />
      <meta
        name="title"
        property="og:title"
        content={`${title} | Nathan Searles`}
      />
      <meta name="author" content="Nathan Searles" />
      <link rel="manifest" href="/static/site.webmanifest"></link>
      <link
        href="https://fonts.googleapis.com/css?family=Inter:400,600,700&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
};

export default Title;
