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

  componentWillMount() {
    this.fetchPage(this.props);
  }

  componentWillReceiveProps(props) {
    this.fetchPage(props);
  }

  fetchPage(props) {
    const pageUid = this.props.pageId || props.match.params.uid

    if (props.prismicCtx) {
      return props.prismicCtx.api.getByUID('page', pageUid, {}, (err, doc) => {
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
        <div className="wrap content-center">
          {
            this.state.doc &&
            <div className="row align-center justify-center">
              <Helmet>
                <title>{this.state.doc.data.page_title[0].text}</title>
              </Helmet>
              <div className="col span-12 span-10@md span-12@xxl" data-wio-id={this.state.doc.id}>
                <Slices doc={this.state.doc} prismicCtx={this.props.prismicCtx}/>
              </div>
            </div>
          }
        </div>
      </div>
    )
  }
}
