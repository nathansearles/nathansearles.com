import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Globals from './Globals';
import Page from './Page';
import Project from './Project';
import NotFound from './NotFound';

const App = (props) => (
  <Router onUpdate={() => window.scrollTo(0, 0)}>
    <Route render={({ location }) => (
      <TransitionGroup className='transition__group'>
        <Globals prismicCtx={props.prismicCtx} />
          <CSSTransition key={location.pathname} classNames="fade" timeout={1100}>
            <Switch location={location}>
              <Route
                exact
                path="/"
                render={ routeProps =>
                  <Page
                    {...routeProps}
                    pageId='projects'
                    prismicCtx={props.prismicCtx}
                  />
                }
              />
              <Redirect exact from="/projects" to="/" />
              <Route
                exact
                path="/info"
                render={
                  routeProps =>
                    <Page
                      {...routeProps}
                      pageId='info'
                      prismicCtx={props.prismicCtx}
                    />
                  }
                />
              <Route
                exact
                path="/projects/:uid"
                render={
                  routeProps =>
                    <Project
                      {...routeProps}
                      prismicCtx={props.prismicCtx}
                    />
                }
              />
              <Route component={NotFound} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )}
    />
  </Router>
);

export default App;
