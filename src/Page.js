import React, {useState, useEffect} from 'react';
import { Helmet } from 'react-helmet';
import Slices from './Slices';

const Page = (props) => {
  const [data, setData] = useState();

  const fetchData = (props) => {
    const pageUid = props.pageId || props.match.params.uid

    if (props.prismicCtx) {
      return props.prismicCtx.api.getByUID('page', pageUid, {}, (err, api) => {
        api && setData(api);
      });
    }
  }

  useEffect(()=>{
    fetchData(props)
  },[props]);

  return (
    <div className="page">
      <div className="wrap content-center">
        {
          data &&
          <div className="row align-center justify-center">
            <Helmet>
              <title>{data.data.page_title[0].text}</title>
            </Helmet>
            <div className="col span-12 span-10@md span-12@xxl" data-wio-id={data.id}>
              <Slices data={data} prismicCtx={props.prismicCtx}/>
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default Page;