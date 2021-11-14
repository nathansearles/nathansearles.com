module.exports = {
  async redirects() {
    return [
      {
        source: "/project/:slug*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/resume",
        destination: "/",
        permanent: true,
      },
    ];
  },
};
