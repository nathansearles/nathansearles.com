import Head from "next/head";

const Title = ({ title }) => {
  return (
    <Head>
      <title>{`${title} | Nathan Searles - Web developer`}</title>
      <meta
        name="viewport"
        key="viewport"
        content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=10.0,minimal-ui"
      />
      <link rel="icon" href="/static/favicon.ico" />

      <meta
        name="title"
        property="og:title"
        content={`${title} | Nathan Searles`}
      ></meta>
      <meta name="author" content="Nathan Searles"></meta>
    </Head>
  );
};

export default Title;