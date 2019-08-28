import React, { useState, useEffect } from 'react';
// TODO: replace whatwg-fetch with axios
import 'whatwg-fetch';
import Prismic from 'prismic-javascript';
import PrismicConfig from './prismic-configuration';
import App from './App';
import Error from './Error';

const PrismicApp = () => {
  const [context, setContext] = useState();
  const [error, setError] = useState();

  function buildContext() {
    const accessToken = PrismicConfig.accessToken;
    
    return Prismic.api(PrismicConfig.apiEndpoint, { accessToken }).then(api => ({
      api,
      endpoint: PrismicConfig.apiEndpoint,
      accessToken,
      linkResolver: PrismicConfig.linkResolver,
    }))
  }

  useEffect(() => {
    buildContext().then((prismicCtx) => {
      setContext(prismicCtx);
    }).catch((e) => {
      setError({ error: true });
      console.error(`Cannot contact the API, check your prismic configuration:\n${e}`);
    });
  }, []);

  return (
    <>
      {
        context &&
        <App prismicCtx={context} />
      }
      {
        error &&
        <Error />
      }
    </>
  );
};

export default PrismicApp;