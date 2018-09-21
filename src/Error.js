import React from 'react';

export default function NotFound() {
  return(
    <div className="page">
      <div className="wrap content-center">
          <div className="row py4 align-center justify-center">
            <div className="col span-12 span-8@md text-center">
              <h1>Connection Error</h1>
              <p>Looks like your browser could be blocking access to https://prismic.io the CMS that powers this site. Check your ad blockers and try again.</p>
              <h3><span>✌</span></h3>
            </div>
          </div>
      </div>
    </div>
  );
}
