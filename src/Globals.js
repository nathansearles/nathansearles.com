import React from 'react';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';
import Icon from "./icon";

const isActive = onActive => (match, location) => {
  if (match) {
    onActive(location);
  }
  return match;
};

export default class Globals extends React.Component {
  constructor(props) {
  super();

  this.state = {
    doc: null,
    notFound: false,
    subpage: false,
    currentPage: null
  };
}

handleProjectPage(path) {
  const param = /(\/projects\/)(.+)/g;
  let find = path.match(param);
  if (find !== null) {
    this.setState({
      subpage: true
    });
  } else {
    this.setState({
      subpage: false
    });
  }
}

  componentWillMount() {
    this.fetchPage(this.props);
  }

  componentWillReceiveProps(props) {
    this.fetchPage(props);
  }

  fetchPage(props) {
    if (props.prismicCtx) {
      return props.prismicCtx.api.getByID('W331OSMAACIAWX8f', {}, (err, doc) => {
        if (doc) {
          this.setState({ doc });
        } else {
          this.setState({ notFound: !doc });
        }
      });
    }
    return null;
  }

  render() {
    if (this.state.doc) {
      const doc = this.state.doc;

      const onActive = location => {
        if (this.state.currentPage !== location.pathname) {
          this.setState({ currentPage: location.pathname });
          this.handleProjectPage(location.pathname);
        }
      };

      // const siteNavigation = doc.data.navigation.map(function(item, index){
      //   const title = item.item_title[0].text;
      //   const slug = item.items.slug;
      //
      //   return (
      //     <li key={index} >
      //       <NavLink to={'/' + slug} isActive={isActive(onActive)}>{title}</NavLink>
      //     </li>
      //   );
      // });

      return(
        <div>
        <Helmet
          titleTemplate={'%s | ' + doc.data.site_title[0].text}
        >
          <title>{doc.data.site_title[0].text}</title>
          <meta name="description" content={doc.data.site_description[0].text} />
        </Helmet>
          <div className="wrap page-navigation">
          {
            this.state.subpage ?
            <ul>
              <li><NavLink to="/" isActive={isActive(onActive)}><Icon name="ArrowLeft" width="10" /> Return to projects</NavLink></li>
              <li><NavLink to="/info" isActive={isActive(onActive)}>Info</NavLink></li>
            </ul>:<ul>
              <li><NavLink to="/" isActive={isActive(onActive)}>Projects</NavLink></li>
              <li><NavLink to="/info" isActive={isActive(onActive)}>Info</NavLink></li>
            </ul>
          }
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}
