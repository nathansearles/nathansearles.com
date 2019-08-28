import React, {useState, useEffect} from 'react';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';
import Icon from "./icon";

const Globals = (props) => {
  const [data, setData] = useState();
  const [project, setProject] = useState(false);
  const [currentPage, setCurrentPage] = useState();

  // Check if path is a project page
  function isProject(path) {
    const param = /(\/projects\/)(.+)/g;
    let find = path.match(param);
    find !== null ? setProject(true) : setProject(false);
  }

  // Fetch api data from Prismic
  const fetchData = props => {
    if (props.prismicCtx) {
      props.prismicCtx.api.getByID('W331OSMAACIAWX8f', {}, (err, api) => {
        api && setData(api);
      });
    }
  }

  // TODO: Clean up isActive and onActive
  const isActive = onActive => (match, location) => {
    if (match) {
      onActive(location);
    }
    return match;
  };

  const onActive = location => {
    if (currentPage !== location.pathname) {
      setCurrentPage(location.pathname);
      isProject(location.pathname);
    }
  };

  useEffect(()=>{
    fetchData(props)
  },[props]);

  return (
    <>
      {  
        data && 
        <div>
          <Helmet titleTemplate={'%s | ' + data.data.site_title[0].text}>
            <title>{data.data.site_title[0].text}</title>
            <meta name="description" content={data.data.site_description[0].text} />
          </Helmet>
          <div className="wrap page-navigation">
            {
              project ?
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
      }
    </>
  );
};

export default Globals;