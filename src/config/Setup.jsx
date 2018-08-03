import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createBrowserHistory } from 'history';
import { Switch, Route, Router } from 'react-router';
import { connectRouter, routerMiddleware, ConnectedRouter } from 'connected-react-router';

import reducers from '../reducers';
import App from '../components/App';
import HomePage from '../components/pages/HomePage';
import NotFoundPage from '../components/pages/NotFoundPage';
import BlockAvoider from '../components/hoc/BlockAvoider';
import requireAuth from '../components/hoc/requireAuth';
// History
export const history = createBrowserHistory();

/**
 *  Custom createStore per enviroment
 */
export const configStore = (enviroment) => {
  switch (enviroment) {
    case 'test':
    case 'production':
      return createStore(
        connectRouter(history)(reducers), // new root reducer with router state

        compose(applyMiddleware(
          routerMiddleware(history), // for dispatching history actions
          thunk,
        )),
      ); // we don't want logger on prod/test
    default:
      return createStore(
        connectRouter(history)(reducers), // new root reducer with router state

        compose(applyMiddleware(
          routerMiddleware(history), // for dispatching history actions
          thunk,
          logger,
        )),
      );
  }
};
const enviroment = process.env.NODE_ENV;
const store = configStore(enviroment);
/**
 * Router component
 * It should render a Main Component depending on the route
 * If there is not match it will show NotFound component
 * https://reacttraining.com/react-router/web/api/BrowserRouter
 * https://reacttraining.com/react-router/web/api/Route
 * https://reacttraining.com/react-router/web/api/Switch
 * @class Setup
 * @extends {Component}
 */
const Setup = () => (
  <Provider store={store}>
    {/* place ConnectedRouter under Provider */}
    <ConnectedRouter history={history}>
      <Router history={history}>
        <App>
          <BlockAvoider>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route component={NotFoundPage} />
            </Switch>
          </BlockAvoider>
        </App>
      </Router>
    </ConnectedRouter>
  </Provider>
);

export default Setup;
