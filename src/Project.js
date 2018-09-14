import React from 'react';
import { Helmet } from 'react-helmet';
import Slices from './Slices';

export default class Page extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      doc: null,
      notFound: false,
    }
  }

  componentWillReceiveProps(props) {
    this.fetchPage(props);
  }

  fetchPage(props) {
    if (props.prismicCtx) {
      return props.prismicCtx.api.getByUID('project', props.match.params.uid, {}, (err, doc) => {
        if (doc) {
          this.setState({ doc });
        } else {
          this.setState({ notFound: !doc });
        }
      });
    }
    return null;
  }

  render () {
    return (
      <div className="page">
        <div className="wrap">
          {
            this.state.doc &&
            <div className="row align-center justify-center">
              <Helmet>
                <title>{this.state.doc.data.project_title[0].text}</title>
              </Helmet>
              <div className="col span-12 span-10@xl" data-wio-id={this.state.doc.id}>
                <Slices doc={this.state.doc} prismicCtx={this.props.prismicCtx}/>
              </div>
            </div>
          }
        </div>
      </div>
    )
  }
}
