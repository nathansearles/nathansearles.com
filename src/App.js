import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import ScrollToTop from './ScrollToTop';

import Globals from './Globals';
import Page from './Page';
import Project from './Project';
import NotFound from './NotFound';

export default class App extends React.Component {
  render () {
    return (
      <div>
      <Router>
        <Route render={({ location }) => (
          <ScrollToTop location={ location }>
          <div id="main__content">
            <TransitionGroup className='transition__group'>
              <Globals prismicCtx={this.props.prismicCtx} />
                <CSSTransition key={location.key} classNames="fade" timeout={1100}>
                  <Switch location={location}>
                    <Route
                      exact
                      path="/"
                      render={ routeProps =>
                        <Page
                          {...routeProps}
                          pageId='projects'
                          prismicCtx={this.props.prismicCtx}
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
                            prismicCtx={this.props.prismicCtx}
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
                            prismicCtx={this.props.prismicCtx}
                          />
                      }
                    />
                    <Route component={NotFound} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            </div>
            </ScrollToTop>
          )}
        />
      </Router>
      </div>
    )
  }
};


