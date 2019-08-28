import React, {useState, useEffect} from 'react';
import { Helmet } from 'react-helmet';
import Slices from './Slices';

const Project = (props) => {
  const [data, setData] = useState();

  const fetchData = (props) => {
    if (props.prismicCtx) {
      return props.prismicCtx.api.getByUID('project', props.match.params.uid, {}, (err, api) => {
        api && setData(api);
      });
    }
  }

  useEffect(()=>{
    fetchData(props)
  },[props]);

  return (
    <div className="page">
      <div className="wrap">
        {
          data &&
          <div className="row align-center justify-center">
            <Helmet>
              <title>{data.data.project_title[0].text}</title>
            </Helmet>
            <div className="col span-12 span-10@xl" data-wio-id={data.id}>
              <Slices data={data} prismicCtx={props.prismicCtx}/>
            </div>
          </div>
        }
      </div>
    </div>
  );
};

export default Project;