import React from 'react';
import 'whatwg-fetch';

import Prismic from 'prismic-javascript';
import PrismicConfig from './prismic-configuration';
import App from './App';
import Error from './Error';

export default class PrismicApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      prismicCtx: null,
      error: false,
    }
  }

  componentWillMount() {
    this.buildContext().then((prismicCtx) => {
      this.setState({ prismicCtx });
    }).catch((e) => {
      this.setState({ error: true });
      console.error(`Cannot contact the API, check your prismic configuration:\n${e}`);
    });
  }

  refreshToolbar() {
    const maybeCurrentExperiment = this.api.currentExperiment();
    if (maybeCurrentExperiment) {
      window.PrismicToolbar.startExperiment(maybeCurrentExperiment.googleId());
    }
    window.PrismicToolbar.setup(PrismicConfig.apiEndpoint);
  }

  buildContext() {
    const accessToken = PrismicConfig.accessToken;
    return Prismic.api(PrismicConfig.apiEndpoint, { accessToken }).then(api => ({
      api,
      endpoint: PrismicConfig.apiEndpoint,
      accessToken,
      linkResolver: PrismicConfig.linkResolver,
      toolbar: this.refreshToolbar,
    }))
  }

  render() {
    return (
      <div>
        {
          <App prismicCtx={this.state.prismicCtx} />
        }
        {
          this.state.error &&
          <Error />
        }
      </div>
    );
  }
}
