import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import App from './App'
import { AuthRoute } from '../util/RouteUtil';
import SignupFormContainer from './auth/SignupFormContainer';
import LoginFormContainer from './auth/LoginFormContainer';
import { PersistGate } from 'redux-persist/integration/react'
export default ({ store, persistor }) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <HashRouter>
        <Switch>
          <AuthRoute path="/signup" component={SignupFormContainer} />
          <AuthRoute path="/login" component={LoginFormContainer} />
          <Route path="/" component={App} />
        </Switch>
      </HashRouter>
    </PersistGate>
  </Provider>
);