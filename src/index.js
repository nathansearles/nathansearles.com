import React from 'react';
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import PrismicApp from './PrismicApp';

console.log('%c Yo! This site was built in React and is powered by Prismic. Find out more https://github.com/nathansearles', 'color: #1d62d1; font-weight: bold;');

render((
  <BrowserRouter>
    <PrismicApp />
  </BrowserRouter>
), document.getElementById('root'));
