export default {

  apiEndpoint: 'https://nathansearles.prismic.io/api/v2',

  // -- Access token if the Master is not open
  // accessToken: '',

  // OAuth
  // clientId: 'xxxxxx',
  // clientSecret: 'xxxxxx',

  // -- Links resolution rules
  // This function will be used to generate links to Prismic.io documents
  // As your project grows, you should update this function according to your routes
  linkResolver(doc) {
    if (doc.type === 'page') return `/${doc.uid}`;
    if (doc.type === 'project') return `/projects/${doc.uid}`;
    return '/';
  },
};
