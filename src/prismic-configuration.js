export default {
  apiEndpoint: 'https://nathansearles.prismic.io/api/v2',

  linkResolver(doc) {
    if (doc.type === 'page') return `/${doc.uid}`;
    if (doc.type === 'project') return `/projects/${doc.uid}`;
    return '/';
  },
};
